var $fal = document.querySelector("#fal");
var $apiKey = "821332:626a8e88148c56.56191135";

$fal.addEventListener("keypress" , (event) => {
    if(event.keyCode == 13){
        getResult($fal.value);
    }
});

function getResult(query){
    loadJSON("GET", `https://one-api.ir/owghat/?token=${$apiKey}&city=${query}` , function(response){
        console.log(response);
    })
}

function loadJSON(method , url , callback){
    var xhr = new XMLHttpRequest;
    xhr.open(method , url);
    xhr.onreadystatechange = () => {
        if(this.status === 200 && this.readyState === 4){
            callback(JSON.parse(this.response));
        }
    }
    xhr.send();
}


