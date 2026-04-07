// Toggle chatbot
function toggleChat() {
    const chatbot = document.getElementById("chatbot");

    if (chatbot.style.display === "flex") {
        chatbot.style.display = "none";
    } else {
        chatbot.style.display = "flex";
    }
}

// Send message
function sendMessage() {
    const input = document.getElementById("userInput");
    const chatBody = document.getElementById("chatBody");
    const text = input.value.trim();

    if (text === "") return;

    // Show user message
    chatBody.innerHTML += `<p><strong>You:</strong> ${text}</p>`;

    let reply = "Sorry, I didn't understand that.";

    // Smart responses
    if (text.toLowerCase().includes("price")) {
        reply = "Our prices vary! Check our Products page 🍰";
    } 
    else if (text.toLowerCase().includes("order")) {
        reply = "You can order using our form or WhatsApp 📱";
    } 
    else if (text.toLowerCase().includes("hours")) {
        reply = "We are open 8AM - 6PM daily 🕒";
    } 
    else if (text.toLowerCase().includes("cake")) {
        reply = "Yes! We make custom cakes 🎂";
    }

    // Show bot reply
    chatBody.innerHTML += `<p><strong>Bot:</strong> ${reply}</p>`;

    input.value = "";
    chatBody.scrollTop = chatBody.scrollHeight;
}