// API code

function makeShortenUrlRequest(){

}

function makeRetrieveOriginalUrlRequest(){
    var request = gapi.client.urlshortener.url.get({
        "shortUrl" : $('.retrieveUrl > p > input')[0].textContent
    });
    request.then(function(response){
        $('.retrieveUrl > p')[1].innerHTML += response.result.longUrl;
    },function(response){
        console.log("Error occured!");
    });
}

function retrieveOriginalUrl(){
    gapi.client.setApiKey("AIzaSyDGosRUWhEismSud3vuCx-rT1DcRD7AmTQ");
    gapi.client.load("urlshortener","v1").then(makeRetrieveOriginalUrlRequest);
}
