let data=[];
const productContainer = document.querySelector('.Products');
fetch('https://fakestoreapi.com/products').then(res=>res.json())
.then(json=>{
    data=json;
    renderProducts(data);
});

function renderProducts(products) {
    productContainer.innerHTML = ''; 

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('Product');

        const img = document.createElement('img');
        img.src = product.image;

        const title = document.createElement('h3');
        title.textContent = product.title;

        productDiv.appendChild(img);
        productDiv.appendChild(title);
        productContainer.appendChild(productDiv);
    });
}


