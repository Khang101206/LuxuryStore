import { products } from "./product.js";
const mainContentNode = document.querySelector('.main-content');
const loginButtonNode = document.querySelector('.login-button');
const signInBoxNode = document.querySelector('.sign-in-box');
const signUpBoxNode = document.querySelector('.sign-up-box');
const cardNodes = document.querySelectorAll('.card');
const signUpButtonNode = document.querySelector('.sign-up').querySelector('a');
const signInButtonNode = document.querySelector('.sign-in').querySelector('a');
const productCartNode = document.querySelector('.cart');
const addToCartButton = document.querySelector('.add-to-card-button');
// const filterNode = document.querySelector('.filter-button');
// const filterBoxNode = document.querySelector('.filter-box');
const blurNode = document.querySelector('.blur');
const detailDivNode = document.querySelector('.product-detail');


console.log(document.querySelectorAll('.card'))

function productsDetail(item){
    const detailProductNodes = document.createElement('div');
    detailProductNodes.classList.add('product-detail');
    const pNameNode = detailDivNode.querySelector('.product-detail_name > p');
    pNameNode.innerHTML = item.name;
    const pPriceNode = detailDivNode.querySelector('.price');
    const pRetailPriceNode = detailDivNode.querySelector('.retail-price');
    pPriceNode.innerHTML = item.price;
    pRetailPriceNode.innerHTML = item.retailPrice;
    const featuresProductNode = detailProductNodes.querySelector('.product-detail_features');
    const allSlideNode = featuresProductNode.querySelector('.all-slide');
    const slideItemNode = allSlideNode.querySelector('.slide-item');
    const imgSlideNode1 = slideItemNode.querySelectorAll('.mySlides:nth-child(1) img');
    const imgSlideNode2 = slideItemNode.querySelectorAll('.mySlides:nth-child(2) img');
    const imgSlideNode3 = slideItemNode.querySelectorAll('.mySlides:nth-child(3) img');
    const imgSlideNode4 = slideItemNode.querySelectorAll('.mySlides:nth-child(4) img');
    for(const img1 of imgSlideNode1){
        img1.innerHTML=item.imgProduct
    };
    for(const img2 of imgSlideNode2){
        img2.innerHTML=item.hiddenImgProduct
    };
    for(const img3 of imgSlideNode3){
        img3.innerHTML=item.img3
    };
    for(const img4 of imgSlideNode4){
        img4.innerHTML=item.img4
    };  
    const slickSlideNode1 = allSlideNode.querySelector('span:nth-child(1) img');
    const slickSlideNode2 = allSlideNode.querySelector('span:nth-child(2) img');
    const slickSlideNode3 = allSlideNode.querySelector('span:nth-child(3) img');
    const slickSlideNode4 = allSlideNode.querySelector('span:nth-child(4) img');
    slickSlideNode1.innerHTML=item.imgProduct;
    slickSlideNode2.innerHTML=item.hiddenImgProduct;
    slickSlideNode3.innerHTML=item.img3;
    slickSlideNode4.innerHTML=item.img4;
};


productsDetail(products)


function openSignin(event) {
    event.preventDefault();
    mainContentNode.classList.add('main-content--hidden');
    mainContentNode.style.height="70rem";
    signInBoxNode.classList.add('sign-in-box--open');
    signUpBoxNode.classList.remove('sign-up-box--open');
    filterNode.style.display='none';
    for (let i = 0; i<cardNodes.length ; i++){
        cardNodes[i].style.display="none";
    }
}

function openCart(event){
    event.preventDefault();
    productsDetailNode.classList.remove('product-detail--open');
    productCartNode.classList.add('cart--open')
}

function openFilter(event){
    event.preventDefault();
    filterBoxNode.classList.add('filter-box--open');
    blurNode.classList.add('blur--open');
}

function renderProducts(){
    const filterBoxNode = document.createElement('button');
    filterBoxNode.classList.add('filter-button');
    document.querySelector('main').insertBefore(filterBoxNode,mainContentNode);

    filterBoxNode.innerHTML +=`
            <p>Filter</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
            </svg>` 

    products.forEach((product)=>{
        const productNode = document.createElement('div');
        productNode.classList.add('card');
        mainContentNode.appendChild(productNode);
        productNode.innerHTML=`
            <div class="card-img">
                <div><img class="visible-img" src="${product.imgProduct}"></div>
                <div><img class="hidden-img" src="${product.hiddenImgProduct}"></div>
            </div>
            <div class="card-name">${product.name}</div>
            <div class="price-card"><p>${product.price}</p><p class="retail-price">Retail price: ${product.retailPrice}</p></div>
        `;
        productNode.addEventListener('click', ()=>{
            detailProductNodes(product)
        })
        const hiddenImgNode = productNode.querySelectorAll('.hidden-img');
        const cardNameNode = productNode.querySelectorAll('.card-name');
    })
}
 renderProducts();


loginButtonNode.addEventListener('click',openSignin);

signInButtonNode.addEventListener('click', openSignin);

signUpButtonNode.addEventListener('click',function(event){
    event.preventDefault();
    signInBoxNode.classList.remove('sign-in-box--open');
    signUpBoxNode.classList.add('sign-up-box--open');
});


if(addToCartButton){
    addToCartButton.addEventListener('click', openCart);
}

// filterNode.addEventListener('click', openFilter);

