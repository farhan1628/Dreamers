// let micBtn = document.getElementById("mic-button");
// let chatBox = document.getElementById("chat-box");
// let statusText = document.getElementById("status-text");
// let speechRecognition = window.webkitSpeechRecognition


// if(!speechRecognition){
//     alert("Use differnt browser.")
// }
// else{
//     let recognition = new speechRecognition();
//     recognition.continuous = false;
//     recognition.lang = "en-US";
//     micBtn.addEventListener('click', function(){
//         recognition.start();
//         document.getElementById("img").src = "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHg0MXM0OWdiNjZxbXFxeWQxMXM5cHpqbmhidjVmZmR4NGJndDZmbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/o1YuwnczQIcc3ZGlbq/giphy.gif";
//         statusText.innerHTML = "Listening....";
//     });
//     recognition.onend = function(){
//         statusText.innerHTML = "System Ready";
//         document.getElementById("img").src = "finalmic.png";
//     }
//     recognition.onresult = function(event){
//         let transcript = event.results[0][0].transcript;
//         addMessage(transcript,'user');
//     }
//     function addMessage(text,sender){
//         let messageDiv = document.createElement("div");
//         messageDiv.classList.add("message");
//     }
//     if (sender == 'user') {
//             messageDiv.classList.add("user-message");
//         } else {
//             messageDiv.classList.add("bot-message");
//         }
//         messageDiv.textContent = text;
//         chatBox.appendChild(messageDiv)

//         chatBox.scrollTop = chatBox.scrollHeight;

//     }

//     function respondToUser(text) {
//         let response = ""

//         if (text.includes("hello") | text.includes("hi")) {
//             response = "Hello! How can I assist you today?"
//         } else if (text.includes("whats your name") | (text.includes("who are you"))) {
//             response = "My name is Kitty. How can I assist you today?"
//         } else if (text.includes("how are you") | (text.includes("what about you"))) {
//             response = "I am doing well, thank you for asking. How can I assist you today?"
//         } else if (text.includes("time")) {
//             response = "The current time is " + new Date().toLocaleTimeString();
//         } else if (text.includes("thank you")) {
//             response = "You're welcome. Let me know if you need anything else.";
//         } else {
//             response = "I've noted your input. Please provide more details if you need specific assistance.";
//         }
//         setTimeout(function () {
//             addMessage(response, 'bot');
//             speakText(response)
//         }, 500);

//         function speakText(text) {
//             let speech = new SpeechSynthesisUtterance();
//             speech.text = text;
//             window.speechSynthesis.speak(speech);
//         }
//     }

// }


let maindiv = document.getElementById("maindiv");
let micBtn = document.getElementById("mic-button");
let chatBox = document.getElementById("chat-box");
let statusText = document.getElementById("status-text");

let speechRecognition = window.webkitSpeechRecognition

if (!speechRecognition) {
    alert("Your browser does not support the Web Speech API. Please use a different browser.");
} else {
    let recognition = new speechRecognition();
    recognition.continuous = false;
    recognition.lang = "en-US";

    micBtn.addEventListener('click', function () {
        recognition.start();
        micBtn.classList.add("listening");
        statusText.textContent = "Listening...";
        document.getElementById("img").src = "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHg0MXM0OWdiNjZxbXFxeWQxMXM5cHpqbmhidjVmZmR4NGJndDZmbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/o1YuwnczQIcc3ZGlbq/giphy.gif";
    });

    recognition.onend = function () {
        micBtn.classList.remove("listening");
        statusText.textContent = "System Ready";
        document.getElementById("img").src = "finalmic.png";
    }

    recognition.onresult = function (event) {
        let transcript = event.results[0][0].transcript;
        addMessage(transcript, 'user');
        respondToUser(transcript.toLowerCase());
    }

    function addMessage(text, sender) {
        let messageDiv = document.createElement("div");
        messageDiv.classList.add("message");

        if (sender == 'user') {
            messageDiv.classList.add("user-message");
        } else {
            messageDiv.classList.add("bot-message");
        }
        messageDiv.textContent = text;
        maindiv.appendChild(messageDiv)

        maindiv.scrollTop = chatBox.scrollHeight;

    }

    function respondToUser(text) {
        let response = ""

        if (text.includes("hello") | text.includes("hi")) {
            response = "Hello! How can I help you?"
        } else if (text.includes("whats your name") | (text.includes("who are you"))) {
            response = "I don't have a name, as I am in AI."
        } else if (text.includes("how are you") | (text.includes("what about you"))) {
            response = "I am fine. Thanks for asking!"
        } else if (text.includes("time")) {
            response = "The current time is " + new Date().toLocaleTimeString();
        } else if (text.includes("thank you")) {
            response = "You're welcome. Let me know if you need anything else.";
        } else if(text.includes("I need help")| ("help me")){
            response = "What help do you need?"
        }
        else {
            response = "I'm sorry. I can't answer that.";
        }
        setTimeout(function () {
            addMessage(response, 'bot');
            speakText(response)
        }, 500);

        function speakText(text) {
            let speech = new SpeechSynthesisUtterance();
            speech.text = text;
            window.speechSynthesis.speak(speech);
        }
    }
}