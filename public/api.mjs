
import products from './products.mjs';

class Api{
    getProducts(start,required){
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(products.slice(start,start+required));
            },2000);
        })
    }
}



const api = new Api();
export default api;