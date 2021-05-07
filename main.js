var txt_input = document.querySelector("#txt-input");
var btnTranslate = document.querySelector("#btn-translate");
var outputDiv = document.querySelector("#translate-output");


var serverURL = "https://api.funtranslations.com/translate/pirate.json"


function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input
}

//to avoid failures due to server breakdown
function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server");
};

function clickHandler() {
    // outputDiv.innerText = "statr: "+txt_input.value;

    //taking i/p by readin the value of the text store it, then
    var inputText = txt_input.value 

    //calling server for processing
    //go and fetch url and give the input text to server's api
    fetch(getTranslationURL(inputText)) 


    // convert that response to json
    .then(response => response.json())  
    
    //take out that response in json and, transalte the content and give its output in out_box  by innertext, 
    .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText; //output
            // console.log(json.contents.translated)
        })
        .catch(errorHandler);
}

//when a click occur pls do this functionality
btnTranslate.addEventListener("click", clickHandler);

