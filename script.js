   const quoteText = document.querySelector(".quotes"),
    quoteBtn = document.querySelector(".uk-button"),
    authorName = document.querySelector(".author-name"),
    speakerBtn = document.querySelector("#speaker"),
    copyBtn = document.querySelector("#copy"),
    sendBtn = document.querySelector("#send");
    function randomQuote(){
        fetch("https://api.quotable.io/random")
        .then(res => res.json())
        .then(result=>{
            console.log(result)
            quoteText.innerText = result.content;
            authorName.innerText = result.author;
        });
    }

    quoteBtn.addEventListener("click", randomQuote);

    speakerBtn.addEventListener("click", () => {
        let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by${authorName.innerText}`);
        speechSynthesis.speak(utterance);
    });
 

    copyBtn.addEventListener("click", () => {
        navigator.clipboard.writeText(quoteText.innerText);
    }); 

    sendBtn.addEventListener("click", () => {
        let facebookUrl = `https://facebook.com/?url=${quoteText.innerText}`; 
        window.open(facebookUrl, "_blank");
    });

    