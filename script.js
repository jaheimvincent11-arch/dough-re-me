


function toggleChat() {
    const chatbot = document.getElementById("chatbot");
    chatbot.style.display = chatbot.style.display === "flex" ? "none" : "flex";
}

// Send Message
function sendMessage() {
    const input = document.getElementById("userInput");
    const chatBody = document.getElementById("chatBody");
    const userText = input.value.trim();

    if (userText === "") return;

    // Show user message
    chatBody.innerHTML += `<p><strong>You:</strong> ${userText}</p>`;

    let botReply = "Sorry, I didn't understand that.";

    // Simple AI responses
    if (userText.toLowerCase().includes("price")) {
        botReply = "Our prices vary depending on the item. Check our Products page!";
    } 
    else if (userText.toLowerCase().includes("order")) {
        botReply = "You can place an order using our form or WhatsApp 😊";
    } 
    else if (userText.toLowerCase().includes("hours")) {
        botReply = "We are open from 8AM to 6PM daily.";
    } 
    else if (userText.toLowerCase().includes("cake")) {
        botReply = "Yes! We offer custom cakes 🎂";
    }

    // Show bot reply
    chatBody.innerHTML += `<p><strong>Bot:</strong> ${botReply}</p>`;

    // Clear input
    input.value = "";

    // Auto scroll
    chatBody.scrollTop = chatBody.scrollHeight;
}
document.getElementById("orderForm").addEventListener("submit", function(e){

let name = document.getElementById("name").value.trim();
let email = document.getElementById("email").value.trim();
let phone = document.getElementById("phone").value.trim();
let quantity = document.getElementById("quantity").value;
let error = document.getElementById("error");

let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
let phonePattern = /^[0-9]{7,10}$/;

error.textContent = "";

// VALIDATION
if(name === ""){
    e.preventDefault();
    error.textContent = "Name is required";
}
else if(!email.match(emailPattern)){
    e.preventDefault();
    error.textContent = "Enter a valid email";
}
else if(!phone.match(phonePattern)){
    e.preventDefault();
    error.textContent = "Enter a valid phone number";
}
else if(quantity <= 0){
    e.preventDefault();
    error.textContent = "Quantity must be at least 1";
}
else{
    alert("Order submitted successfully!");
}

});

// SUBSCRIBE FORM
document.getElementById("subscribeForm").addEventListener("submit", function(e){
  e.preventDefault(); // prevent default form submission

  const email = document.getElementById("subscribeEmail").value.trim();
  const msg = document.getElementById("subscribeMsg");
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if(email === ""){
    msg.textContent = "Please enter your email";
    msg.style.color = "red";
  }
  else if(!email.match(emailPattern)){
    msg.textContent = "Enter a valid email";
    msg.style.color = "red";
  }
  else{
    msg.textContent = "Thank you for subscribing!";
    msg.style.color = "green";
    document.getElementById("subscribeEmail").value = "";
  }
});