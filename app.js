var $oghat = document.querySelector("#oghat");
var $apiKey = "821332:626a8e88148c56.56191135";

$oghat.addEventListener("keypress" , (event) => {
    if(event.keyCode == 13){
        getResult($oghat.value);
    }
});

function getResult(query){
    loadJSON("GET", `https://one-api.ir/owghat/?token=${$apiKey}&city=${query}` , displayResult)
}

function loadJSON(method , url , callback){
    var xhr = new XMLHttpRequest;
    xhr.open(method , url);
    xhr.onreadystatechange = function () {
        if(this.status === 200 && this.readyState === 4){
            callback(JSON.parse(this.response));
        } else {
            
        }
    }
    xhr.send();
}

var $location = id("location");
var $azan_sobh = id("azan-sobh");
var $azan_zohr = id("azan-zohr");
var $azan_maghreb = id("azan-maghreb");
var $t_aftab = id("t-aftab");
var $gh_aftab = id("gh-aftab");
var $nime_shab = id("nime-shab");

function displayResult(response){
    $location.innerHTML = `${response.result.city}`;
    $azan_maghreb.innerHTML = `${response.result.azan_maghreb}`;
    $azan_sobh.innerHTML = `${response.result.azan_sobh}`;
    $azan_zohr.innerHTML = `${response.result.azan_zohre}`;
    $gh_aftab.innerHTML = `${response.result.ghorob_aftab}`;
    $t_aftab.innerHTML = `${response.result.toloe_aftab}`;
    $nime_shab.innerHTML = `${response.result.nime_shabe_sharie}`;
}


function id(id) {
    return document.getElementById(id);
}
