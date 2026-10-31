// API URL
const apiURL = "https://fakestoreapi.com/products";

// Select HTML elements
const api = document.querySelector(".api");
const productList = document.querySelector("#productList");

// Display loading message
api.innerHTML = "Loading...";

// Fetch API data
fetch(apiURL)

.then(function(response) {

    if (!response.ok) {
        throw new Error("Failed to fetch API data");
    }

    return response.json();

})

.then(function(products) {

    // Display success message
    api.innerHTML = "API data successfully loaded";
    api.className = "api success";

    // Display all products
    products.forEach(function(product) {

        // Create separate card
        const card = document.createElement("div");

        // Add card class
        card.className = "card";

        // Display product details
        card.innerHTML = `

            <h2>
                ${product.title.slice(0, 50)}
            </h2>

            <p>
                <b>Product ID:</b> ${product.id}
            </p>

            <img
                src="${product.image}"
                alt="${product.title}"
                style="width:200px"
            >

            <p class="price">
                $${product.price}
            </p>

            <p class="description">
                ${product.description.slice(0, 100)}
            </p>

        `;

        // Add card to product list
        productList.appendChild(card);

    });

})

.catch(function(error) {

    // Display API error in red
    api.innerHTML = `
        <p class="error">
            API Error: ${error.message}
        </p>
    `;

})

.finally(function() {

    // Display request completed message
    api.innerHTML += `
        <p>API request completed</p>
    `;

    console.log("API request completed");

});