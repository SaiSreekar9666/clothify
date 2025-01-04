document.addEventListener('DOMContentLoaded', () => {
    // Mock search results
    const searchResults = [
        {
            name: "Stylish Jacket",
            price: "$59.99",
            image: "https://via.placeholder.com/200x300",
        },
        {
            name: "Casual T-Shirt",
            price: "$19.99",
            image: "https://via.placeholder.com/200x300",
        },
        {
            name: "Elegant Dress",
            price: "$89.99",
            image: "https://via.placeholder.com/200x300",
        },
        {
            name: "Trendy Sneakers",
            price: "$49.99",
            image: "https://via.placeholder.com/200x300",
        },
    ];

    // Display search query
    const queryParams = new URLSearchParams(window.location.search);
    const query = queryParams.get('query') || 'All Products';
    document.getElementById('search-query').textContent = query;

    // Populate search results
    const resultsContainer = document.querySelector('.results');
    searchResults.forEach(result => {
        const resultItem = document.createElement('div');
        resultItem.classList.add('result-item');
        resultItem.innerHTML = `
            <img src="${result.image}" alt="${result.name}">
            <div class="info">
                <h4>${result.name}</h4>
                <p class="price">${result.price}</p>
            </div>
        `;
        resultsContainer.appendChild(resultItem);
    });
});
