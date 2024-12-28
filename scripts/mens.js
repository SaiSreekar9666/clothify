// // Sample data for Men's Wear products
// const mensWearProducts = [
//     {
//         id: 1,
//         name: "Classic T-Shirt",
//         price: "$19.99",
//         image: "https://via.placeholder.com/200x200?text=Classic+T-Shirt"
//     },
//     {
//         id: 2,
//         name: "Stylish Jacket",
//         price: "$59.99",
//         image: "https://via.placeholder.com/200x200?text=Stylish+Jacket"
//     },
//     {
//         id: 3,
//         name: "Casual Jeans",
//         price: "$39.99",
//         image: "https://via.placeholder.com/200x200?text=Casual+Jeans"
//     },
//     {
//         id: 4,
//         name: "Formal Shirt",
//         price: "$29.99",
//         image: "https://via.placeholder.com/200x200?text=Formal+Shirt"
//     },
//     {
//         id: 5,
//         name: "Sports Shoes",
//         price: "$49.99",
//         image: "https://via.placeholder.com/200x200?text=Sports+Shoes"
//     }
// ];

// // Function to dynamically generate product cards
// function displayProducts(products) {
//     const productContainer = document.getElementById("product-container");

//     products.forEach(product => {
//         // Create product card
//         const productCard = document.createElement("div");
//         productCard.className = "product-card";

//         // Add product image
//         const img = document.createElement("img");
//         img.src = product.image;
//         img.alt = product.name;

//         // Add product info
//         const info = document.createElement("div");
//         info.className = "info";

//         const name = document.createElement("h4");
//         name.textContent = product.name;

//         const price = document.createElement("p");
//         price.className = "price";
//         price.textContent = product.price;

//         // Add "Add to Cart" button
//         const button = document.createElement("button");
//         button.textContent = "Add to Cart";
//         button.onclick = () => {
//             alert(`${product.name} has been added to your cart!`);
//         };

//         // Append elements to the product card
//         info.appendChild(name);
//         info.appendChild(price);
//         productCard.appendChild(img);
//         productCard.appendChild(info);
//         productCard.appendChild(button);

//         // Append product card to the container
//         productContainer.appendChild(productCard);
//     });
// }

// Call the function to display products
// displayProducts(products);

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
            <title>${[products[i].id]}</title>
                <img src="${products[i].image}" alt="${products[i].name}">
                <h2>${products[i].name}</h2>
                <p>${products[i].description}</p>
                <span class="price">$${products[i].price}</span>
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

