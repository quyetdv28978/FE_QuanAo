import { productAPI } from "../const/API";

function ProductAPI(sl, page, product) {
    console.log(`${productAPI}`+ sl + '/' + page);
    fetch(`${productAPI}`+ sl + '/' + page)
    .then(value => value.json())
    .then(value => {
        product(value)
        return value;
    })
}

export default ProductAPI