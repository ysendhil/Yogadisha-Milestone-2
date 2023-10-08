const chatButton = document.getElementById('chatButton');
const chatWidget = document.getElementById('chatWidget');
const closeChatButton = document.getElementById('closeChatButton');
const chatMessages = document.getElementById('chatMessages');
const messageInput = document.getElementById('messageInput');
const sendMessageButton = document.getElementById('sendMessageButton');

//chatButton.addEventListener('click', () => {
 //   if (chatWidget.style.display === 'block') {
 //       chatWidget.style.display = 'none';
 //   } else {
 //       chatWidget.style.display = 'block';
 //   }
//})


chatButton.addEventListener('click', () => {
    chatWidget.style.display = 'block';
});

closeChatButton.addEventListener('click', () => {
    chatWidget.style.display = 'none';
});

// Function to send a message
function sendMessage() {
    const message = messageInput.value.trim();
    if (message !== '') {
        addMessage(message, 'received');
        messageInput.value = ''; // Clear the input field
    }
}

sendMessageButton.addEventListener('click', sendMessage);

// Function to add a message to the chat widget
function addMessage(message, type) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', type);
    messageElement.innerHTML = `<div class="message-content">${message}</div>`;
    chatMessages.appendChild(messageElement);
}



