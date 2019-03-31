import api from "./api.mjs";
import { generateProductsHtml, generateFiltersHtml } from './htmlGenerator.mjs';

(function init() {
    api.getProducts().then((response) => {
        let productsHtml = generateProductsHtml(response);
        return productsHtml;
    }).then((productsHtml) => {
        let productConatiner = document.getElementById("products");
        for(let productHtml of productsHtml){
            productConatiner.appendChild(productHtml);
        }
    });
    api.getFilters().then((response) => {
        console.log(response);
        generateFiltersHtml(response);
    });
})()
