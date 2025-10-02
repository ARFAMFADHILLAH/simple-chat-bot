async function sendMessage() {
    const inputField = document.getElementById("user-input");
    const message = inputField.value;
    if (!message) return;

    //tampilkan pesan user
    const chatBox = document.getElementById("chat-box");
    chatBox.innerHTML += `<div class="user">🤠: ${message}</div>`;

    inputField.value = "";

    //tampilkan animasi typing
    const typingDiv = document.createElement("div");
    typingDiv.className = "bot";
    typingDiv.id = "typing";
    typingDiv.textContent = "🤖 sedang mengetik...";
    chatBox.appendChild(typingDiv);
    chatBox.scrollTop = chatBox.scrollHeight;

    //kirim ke server
    const res = await fetch("/get_response", {
 
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({message})
    });

    const data = await res.json();

    //hapus typing
    document.getElementById("typing").remove();

    //tampilkan balasan
    chatBox.innerHTML += `<div class="bot">🤖: ${data.response}</div>`;
    chatBox.scrollTop = chatBox.scrollHeight

    
}