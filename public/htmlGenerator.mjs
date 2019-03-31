export function generateProductsHtml(response){
    let productsHtml = [];
    let products = response.products;
    for(let product of products){
        let productHtml = generateProductHtml(product);
        productsHtml.push(productHtml);
    }
    return productsHtml;
}

function generateProductHtml(product){
    let productHtml = document.createElement("div");
    productHtml.classList.add("product");
    let priceValue = product.price ? product.price.final_price : 0;
    let image = generateImageHtml(product.image);
    let title = generateTextHtml("title",product.title);
    let rating = generateTextHtml("rating",product.rating);
    let price = generateTextHtml("price",priceValue);
    productHtml.appendChild(image);
    productHtml.appendChild(title);
    productHtml.appendChild(rating);
    productHtml.appendChild(price);
    return productHtml;
}

function generateTextHtml(className,value){
    let divHtml = document.createElement("div");
    divHtml.classList.add(className);
    let textHtml = document.createTextNode(value);
    divHtml.appendChild(textHtml); 
    return divHtml; 
}

function generateImageHtml(src){
    let divHtml = document.createElement("div");
    divHtml.classList.add("image");
    let imageHtml = document.createElement("img");
    imageHtml.src = src;
    divHtml.appendChild(imageHtml); 
    return divHtml;
}

export function generateFiltersHtml(response){
    generatePriceHtml(response.filters[2].values);
    generateColorHtml(response.filters[1].values);
}

function generatePriceHtml(prices){
    let minContainer = document.getElementById("minPriceRange");
    let maxContainer = document.getElementById("maxPriceRange");
    for(let price of prices){
        let optionMin = document.createElement("option");
        optionMin.text = price.displayValue;
        optionMin.value = price.displayValue.replace("$","");
        let optionMax = document.createElement("option");
        optionMax.text = price.displayValue === "Min" ? "Max" : price.displayValue;
        optionMax.value = price.displayValue.replace("$","");
        maxContainer.add(optionMax,maxContainer[price.key]);
        minContainer.add(optionMin,minContainer[price.key]);
    }
}

function generateColorHtml(colors){
    let colorConatier = document.getElementById("colors");
    for(let color of colors){
        let label = document.createElement("label");
        let checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.value=color.color;
        let text = document.createTextNode(color.title);
        label.appendChild(checkbox);
        label.appendChild(text);
        colorConatier.appendChild(label);
    }
}

function generateBrandHtml(color){

}

