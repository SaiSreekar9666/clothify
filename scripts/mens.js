// // // Sample data for Men's Wear products
// // const mensWearProducts = [
// //     {
// //         id: 1,
// //         name: "Classic T-Shirt",
// //         price: "$19.99",
// //         image: "https://via.placeholder.com/200x200?text=Classic+T-Shirt"
// //     },
// //     {
// //         id: 2,
// //         name: "Stylish Jacket",
// //         price: "$59.99",
// //         image: "https://via.placeholder.com/200x200?text=Stylish+Jacket"
// //     },
// //     {
// //         id: 3,
// //         name: "Casual Jeans",
// //         price: "$39.99",
// //         image: "https://via.placeholder.com/200x200?text=Casual+Jeans"
// //     },
// //     {
// //         id: 4,
// //         name: "Formal Shirt",
// //         price: "$29.99",
// //         image: "https://via.placeholder.com/200x200?text=Formal+Shirt"
// //     },
// //     {
// //         id: 5,
// //         name: "Sports Shoes",
// //         price: "$49.99",
// //         image: "https://via.placeholder.com/200x200?text=Sports+Shoes"
// //     }
// // ];

// // // Function to dynamically generate product cards
// // function displayProducts(products) {
// //     const productContainer = document.getElementById("product-container");

// //     products.forEach(product => {
// //         // Create product card
// //         const productCard = document.createElement("div");
// //         productCard.className = "product-card";

// //         // Add product image
// //         const img = document.createElement("img");
// //         img.src = product.image;
// //         img.alt = product.name;

// //         // Add product info
// //         const info = document.createElement("div");
// //         info.className = "info";

// //         const name = document.createElement("h4");
// //         name.textContent = product.name;

// //         const price = document.createElement("p");
// //         price.className = "price";
// //         price.textContent = product.price;

// //         // Add "Add to Cart" button
// //         const button = document.createElement("button");
// //         button.textContent = "Add to Cart";
// //         button.onclick = () => {
// //             alert(`${product.name} has been added to your cart!`);
// //         };

// //         // Append elements to the product card
// //         info.appendChild(name);
// //         info.appendChild(price);
// //         productCard.appendChild(img);
// //         productCard.appendChild(info);
// //         productCard.appendChild(button);

// //         // Append product card to the container
// //         productContainer.appendChild(productCard);
// //     });
// // }

// // Call the function to display products
// // displayProducts(products);

var httpRequest = new XMLHttpRequest();
httpRequest.onreadystatechange = function () {
    if (httpRequest.readyState === 4) {
        if (httpRequest.status === 200) {
            var products = JSON.parse(httpRequest.responseText);
            displayProducts(products);
        } else {
            console.error('Failed to fetch products.json. Status:', httpRequest.status);
            document.getElementById('products').innerHTML = '<p>Failed to load products.</p>';
        }
    }
};

httpRequest.open('GET', '/scripts/products.json', true); // Ensure the path to products.json is correct
httpRequest.send();

function displayProducts(products) {
    var productContainerStr = '';
    for (var i = 0; i < products.length; i++) {
        var discount = products[i].discount || 
        Math.round(((products[i].originalPrice - products[i].currentPrice) / products[i].originalPrice) * 100);
        productContainerStr += `
            <div class="product">
                <img src="${products[i].image}" alt="${products[i].name}">
                <h2>${products[i].name}</h2>
                <p>${products[i].description}</p>
                <div class="pricing">
                    <span class="original-price">$${products[i].originalPrice.toFixed(2)}</span>
                    <span class="current-price">$${products[i].currentPrice.toFixed(2)}</span>
                    <span class="discount">(${discount}% off)</span>
                </div>
            </div>
        `;
    }
    const container = document.getElementById('products');
    container.innerHTML = productContainerStr;

    // Add animation class
    setTimeout(() => {
        const productElements = document.querySelectorAll('.product');
        productElements.forEach((el, index) => {
            setTimeout(() => el.classList.add('fade-in'), index * 100);
        });
    }, 100);
}

var httpRequest = new XMLHttpRequest();
httpRequest.onreadystatechange = function () {
    if (httpRequest.readyState === 4) {
        if (httpRequest.status === 200) {
            var products = JSON.parse(httpRequest.responseText);
            displayProducts(products);
        } else {
            console.error('Failed to fetch products.json. Status:', httpRequest.status);
            document.getElementById('products').innerHTML = '<p>Failed to load products.</p>';
        }
    }
};

httpRequest.open('GET', '/scripts/products.json', true); // Ensure the path to products.json is correct
httpRequest.send();

function displayProducts(products) {
    var productContainerStr = '';
    for (var i = 0; i < products.length; i++) {
        productContainerStr += `
            <div class="product">
                <img src="${products[i].image}" alt="${products[i].name}">
                <h2>${products[i].name}</h2>
                <p class="description">
                    ${products[i].description.slice(0, 50)}...
                    <span class="read-more" data-full-text="${products[i].description}">Read More</span>
                </p>
                <span class="price">$${products[i].price}</span>
                <button class="add-to-cart" data-id="${products[i].id}" data-name="${products[i].name}" data-price="${products[i].price}">Add to Cart</button>
            </div>
        `;
    }
    const container = document.getElementById('products');
    container.innerHTML = productContainerStr;

    // Add animation class
    setTimeout(() => {
        const productElements = document.querySelectorAll('.product');
        productElements.forEach((el, index) => {
            setTimeout(() => el.classList.add('fade-in'), index * 100);
        });
    }, 100);

    // Add "Read More" functionality
    const readMoreButtons = document.querySelectorAll('.read-more');
    readMoreButtons.forEach(button => {
        button.addEventListener('click', () => {
            const fullText = button.dataset.fullText;
            const parentParagraph = button.parentElement;
            parentParagraph.innerHTML = fullText;
        });
    });

    // Add "Add to Cart" functionality
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartCount = document.querySelector('.cart-count');
    let cartItems = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            cartItems++;
            cartCount.textContent = cartItems;

            // Optionally, display a popup or confirmation message here
            alert(`${button.dataset.name} has been added to the cart!`);
        });
    });
}


// var httpRequest = new XMLHttpRequest();
// httpRequest.onreadystatechange = function () {
//     if (httpRequest.readyState === 4) {
//         if (httpRequest.status === 200) {
//             var products = JSON.parse(httpRequest.responseText);
//             displayProducts(products);
//         } else {
//             console.error('Failed to fetch products.json. Status:', httpRequest.status);
//             document.getElementById('products').innerHTML = '<p>Failed to load products.</p>';
//         }
//     }
// };

// httpRequest.open('GET', '/scripts/products.json', true); // Ensure the path to products.json is correct
// httpRequest.send();

// function displayProducts(products) {
//     var productContainerStr = '';
//     for (var i = 0; i < products.length; i++) {
//         productContainerStr += `
//             <div class="product">
//                 <div class="carousel" id="carousel-${i}">
//                     ${products[i].images.map(img => `<img src="${img}" alt="${products[i].name}">`).join('')}
//                 </div>
//                 <div class="image-360" data-images='${JSON.stringify(products[i].image360)}'>
//                     <canvas></canvas>
//                 </div>
//                 <h2>${products[i].name}</h2>
//                 <p class="description">
//                     ${products[i].description.slice(0, 50)}...
//                     <span class="read-more" data-full-text="${products[i].description}">Read More</span>
//                 </p>
//                 <span class="price">$${products[i].price}</span>
//                 <button class="add-to-cart" data-id="${products[i].id}" data-name="${products[i].name}" data-price="${products[i].price}">Add to Cart</button>
//             </div>
//         `;
//     }
//     const container = document.getElementById('products');
//     container.innerHTML = productContainerStr;

//     // Initialize carousels and 360-degree viewers
//     initializeCarousel();
//     initialize360Viewer();

//     // Add "Read More" functionality
//     const readMoreButtons = document.querySelectorAll('.read-more');
//     readMoreButtons.forEach(button => {
//         button.addEventListener('click', () => {
//             const fullText = button.dataset.fullText;
//             const parentParagraph = button.parentElement;
//             parentParagraph.innerHTML = fullText;
//         });
//     });

//     // Add "Add to Cart" functionality
//     const addToCartButtons = document.querySelectorAll('.add-to-cart');
//     const cartCount = document.querySelector('.cart-count');
//     let cartItems = 0;

//     addToCartButtons.forEach(button => {
//         button.addEventListener('click', () => {
//             cartItems++;
//             cartCount.textContent = cartItems;

//             // Optionally, display a popup or confirmation message here
//             alert(`${button.dataset.name} has been added to the cart!`);
//         });
//     });
// }

// function initializeCarousel() {
//     const carousels = document.querySelectorAll('.carousel');
//     carousels.forEach(carousel => {
//         let currentIndex = 0;
//         const images = carousel.querySelectorAll('img');
//         images[currentIndex].style.display = 'block';

//         setInterval(() => {
//             images[currentIndex].style.display = 'none';
//             currentIndex = (currentIndex + 1) % images.length;
//             images[currentIndex].style.display = 'block';
//         }, 2000);
//     });
// }

// function initialize360Viewer() {
//     const viewers = document.querySelectorAll('.image-360');
//     viewers.forEach(viewer => {
//         const images = JSON.parse(viewer.dataset.images);
//         const canvas = viewer.querySelector('canvas');
//         const ctx = canvas.getContext('2d');
//         let currentImage = 0;

//         const updateImage = () => {
//             const img = new Image();
//             img.src = images[currentImage];
//             img.onload = () => {
//                 canvas.width = img.width;
//                 canvas.height = img.height;
//                 ctx.clearRect(0, 0, canvas.width, canvas.height);
//                 ctx.drawImage(img, 0, 0);
//             };
//             currentImage = (currentImage + 1) % images.length;
//         };

//         setInterval(updateImage, 100);
//         updateImage();
//     });
// }
