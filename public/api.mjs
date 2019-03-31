


function getResponse(url) {
    return fetch(url)
        .then(function (response) {
            return response.json();
        }).then(function(myJson) {
            return myJson
          });
}

class Api {
    getProducts() {
        return new Promise((resolve) => {
            resolve(getResponse("https://api.myjson.com/bins/16jqpu"));
        })
    }
    getFilters() {
        return new Promise((resolve) => {
            resolve(getResponse("https://api.myjson.com/bins/rnwle"));
        })
    }
}



const api = new Api();
export default api;