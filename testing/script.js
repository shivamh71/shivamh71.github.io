// API code
function makeShortenUrlRequest(){
    var request = gapi.client.urlshortener.insert({
        "resource": {
            "longUrl": $('.shortenUrl > p > input')[0].value
        }
    });
    request.then(function(response){
        $('.shortenUrl > p')[1].innerHTML += response.id;
    },function(response){
        console.log("Error occured!");
    });
}

function makeRetrieveOriginalUrlRequest(){
    var request = gapi.client.urlshortener.url.get({
        "shortUrl" : $('.retrieveUrl > p > input')[0].value
    });
    request.then(function(response){
        $('.retrieveUrl > p')[1].innerHTML += response.result.longUrl;
    },function(response){
        console.log("Error occured!");
    });
}

function shortenUrl(){
    gapi.client.setApiKey("AIzaSyDGosRUWhEismSud3vuCx-rT1DcRD7AmTQ");
    gapi.client.load("urlshortener","v1").then(makeShortenUrlRequest);
}

function retrieveOriginalUrl(){
    gapi.client.setApiKey("AIzaSyDGosRUWhEismSud3vuCx-rT1DcRD7AmTQ");
    gapi.client.load("urlshortener","v1").then(makeRetrieveOriginalUrlRequest);
}
