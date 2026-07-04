document.addEventListener("DOMContentLoaded", () => {
    const chatMessages = document.getElementById("chatMessages");
    const userInput = document.getElementById("userInput");
    const sendBtn = document.getElementById("sendBtn");
    const quickButtons = document.querySelectorAll(".quick-actions button");

    // Clean mock UI messages if they exist on load, keeping only the greeting
    chatMessages.innerHTML = `
        <div class="message ai-message">
            👋 Hello! How can I help you today with government guides and schemes?
        </div>
    `;

    // 1. Function to append messages to the Chat Window
    function appendMessage(text, isUser = false) {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message");
        messageDiv.classList.add(isUser ? "user-message" : "ai-message");
        messageDiv.textContent = text;
        chatMessages.appendChild(messageDiv);
        
        // Auto-scroll to the bottom of the chat container
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // 2. Main Function to talk to your FastAPI backend
    async function sendMessageToAI(promptText) {
        if (!promptText.trim()) return;

        // Display user message in UI
        appendMessage(promptText, true);
        userInput.value = ""; // Clear input bar

        // Create a temporary "Thinking..." placeholder message
        const loadingDiv = document.createElement("div");
        loadingDiv.classList.add("message", "ai-message");
        loadingDiv.textContent = "⚡ Thinking...";
        chatMessages.appendChild(loadingDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        try {
            // Vercel routes '/api/ai' automatically to your index.py file
            const response = await fetch('/api/ai', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ prompt: promptText })
            });

            const data = await response.json();
            
            // Remove the loading placeholder
            loadingDiv.remove();

            if (response.ok && data.guide) {
                appendMessage(data.guide, false);
            } else {
                appendMessage(`❌ Error: ${data.detail || "Something went wrong."}`, false);
            }
        } catch (error) {
            loadingDiv.remove();
            appendMessage("❌ Could not connect to backend server.", false);
            console.error("Fetch Error:", error);
        }
    }

    // 3. Click or Press Enter Event Listeners
    sendBtn.addEventListener("click", () => sendMessageToAI(userInput.value));
    
    userInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            sendMessageToAI(userInput.value);
        }
    });

    // 4. Hook up the Quick Action Buttons
    quickButtons.forEach(button => {
        button.addEventListener("click", () => {
            const topic = button.textContent.replace(/[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD00-\uDFFF]/g, '').trim();
            sendMessageToAI(`How do I apply for or find information regarding ${topic}?`);
        });
    });
});
