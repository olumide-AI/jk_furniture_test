"use strict";

const productListSection = document.getElementById("product-list");
const productDetailSection = document.getElementById("product-detail");
const backButton = document.getElementById("back-button");

let allProducts = [];

// Function to fetch and display all products (List View)
async function getProducts() {
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer patalfq5yroYtu7wV.77b794fc190f162598e9f93cc9207da0fdcd337901d7694394a4a1085cc0524c`,
    },
  };

  try {
    const response = await fetch(
      `https://api.airtable.com/v0/appVWWY9vo2FICye0/Furnitures`,
      options
    );
    const data = await response.json();

    allProducts = data.records; // Store all products for filtering
    displayProducts(allProducts);
  } catch (error) {
    console.error("Error fetching products:", error);
    productListSection.innerHTML =
      "<p>Failed to load products. Please try again later.</p>";
  }
}

// Function to display products dynamically
function displayProducts(products) {
  productListSection.innerHTML = ""; // Clear the container
  products.forEach((record) => {
    const { id } = record;
    const { Name, Image, Price, Category } = record.fields;

    const productCard = document.createElement("div");
    productCard.className = "col-md-4 mb-4";
    productCard.innerHTML = `
      <div class="card product-card" onclick="showProductDetail('${id}')">
        <img
          src="${Image ? Image[0].url : "placeholder.jpg"}"
          class="card-img-top"
          alt="${Name}"
        />
        <div class="card-body">
          <h5 class="card-title">${Name}</h5>
          <p class="card-text"><strong>Category:</strong> ${Category}</p>
          <p class="card-text"><strong>Price:</strong> $${Price}</p>
        </div>
      </div>
    `;

    productListSection.appendChild(productCard);
  });
}

// Function to filter products by category
function filterProducts(category) {
  const filteredProducts = allProducts.filter(
    (product) => product.fields.Category === category
  );
  displayProducts(filteredProducts);
}

// Function to fetch and display a single product (Detail View)
async function showProductDetail(productId) {
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer patalfq5yroYtu7wV.77b794fc190f162598e9f93cc9207da0fdcd337901d7694394a4a1085cc0524c`,
    },
  };

  try {
    const response = await fetch(
      `https://api.airtable.com/v0/appVWWY9vo2FICye0/Furnitures/${productId}`,
      options
    );
    const data = await response.json();
    const {
      Name,
      Image,
      Description,
      Material,
      Price,
      Availability,
      Color,
    } = data.fields;

    productDetailSection.innerHTML = `
      <div class="card">
        <img
          src="${Image ? Image[0].url : "placeholder.jpg"}"
          class="card-img-top"
          alt="${Name}"
        />
        <div class="card-body">
          <h2 class="card-title">${Name}</h2>
          <p class="card-text">${Description}</p>
          <p class="card-text"><strong>Material:</strong> ${Material}</p>
          <p class="card-text"><strong>Color:</strong> ${Color}</p>
          <p class="card-text"><strong>Price:</strong> $${Price}</p>
          <p class="card-text"><strong>Availability:</strong> ${Availability}</p>
        </div>
      </div>
    `;

    // Switch views
    productListSection.classList.add("hidden");
    productDetailSection.classList.remove("hidden");
    backButton.classList.remove("hidden");
  } catch (error) {
    console.error("Error fetching product detail:", error);
    productDetailSection.innerHTML =
      "<p>Failed to load product details. Please try again later.</p>";
  }
}

// Function to return to the list view
function showListView() {
  productListSection.classList.remove("hidden");
  productDetailSection.classList.add("hidden");
  backButton.classList.add("hidden");
}

// Event listener for the back button
backButton.addEventListener("click", showListView);

// Fetch products on page load
document.addEventListener("DOMContentLoaded", getProducts);
