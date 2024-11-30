"use strict";

const API_KEY = "Bearer patalfq5yroYtu7wV.77b794fc190f162598e9f93cc9207da0fdcd337901d7694394a4a1085cc0524c";
const BASE_URL = "https://api.airtable.com/v0/appVWWY9vo2FICye0/Furnitures";

const productListSection = document.getElementById("product-list");
const productDetailSection = document.getElementById("product-detail");
const backButton = document.getElementById("back-button");
const searchInput = document.getElementById("search-input");
const paginationControls = document.getElementById("pagination-controls");
const loader = document.getElementById("loader");

let allProducts = [];
let currentPage = 1;
const productsPerPage = 9;

// Fetch and display all products
async function fetchProducts() {
  toggleLoader(true);
  try {
    const response = await fetch(BASE_URL, {
      method: "GET",
      headers: { Authorization: API_KEY },
    });
    const data = await response.json();
    allProducts = data.records;
    renderPaginatedProducts(currentPage);
  } catch (error) {
    console.error("Error fetching products:", error);
    showError(productListSection, "Failed to load products. Please try again later.");
  } finally {
    toggleLoader(false);
  }
}

// Render paginated products
function renderPaginatedProducts(page) {
  const paginatedProducts = paginateProducts(allProducts, page);
  renderProducts(paginatedProducts);

  // Render pagination controls
  renderPaginationControls(page, Math.ceil(allProducts.length / productsPerPage));
}

// Paginate products
function paginateProducts(products, page) {
  const start = (page - 1) * productsPerPage;
  return products.slice(start, start + productsPerPage);
}

// Render products
function renderProducts(products) {
  clearSection(productListSection);

  if (products.length === 0) {
    showError(productListSection, "No products found.");
    return;
  }

  const row = document.createElement("div");
  row.className = "row gy-4";

  products.forEach(({ id, fields }) => {
    const { Name, Image, Price, Category } = fields;

    const col = document.createElement("div");
    col.className = "col-12 col-sm-6 col-md-4";

    col.innerHTML = `
      <div class="card product-card" onclick="renderProductDetail('${id}')">
        <img src="${Image ? Image[0].url : "placeholder.jpg"}" 
             class="card-img-top product-image" 
             alt="${Name}" 
             loading="lazy" />
        <div class="card-body text-center">
          <h5 class="card-title">${Name}</h5>
          <p class="text-muted">${Category}</p>
          <p class="text-primary fw-bold">$${Price}</p>
        </div>
      </div>
    `;

    row.appendChild(col);
  });

  productListSection.appendChild(row);
}

// Render product detail
async function renderProductDetail(productId) {
  toggleLoader(true);
  try {
    const response = await fetch(`${BASE_URL}/${productId}`, {
      method: "GET",
      headers: { Authorization: API_KEY },
    });
    const data = await response.json();
    const { Name, Image, Description, Material, Price, Availability, Color } = data.fields;

    productDetailSection.innerHTML = `
      <div class="card">
        <img src="${Image ? Image[0].url : "placeholder.jpg"}" 
             class="card-img-top" 
             alt="${Name}" />
        <div class="card-body">
          <h2 class="card-title">${Name}</h2>
          <p class="card-text">${Description}</p>
          <p class="card-text"><strong>Material:</strong> ${Material}</p>
          <p class="card-text"><strong>Color:</strong> ${Color}</p>
          <p class="card-text"><strong>Price:</strong> $${Price}</p>
          <p class="card-text"><strong>Availability:</strong> ${Availability}</p>
          <button class="btn btn-primary mt-3" onclick="showListView()">Back to List</button>
        </div>
      </div>
    `;

    toggleView(productDetailSection, [productListSection]);
    backButton.classList.remove("hidden");
  } catch (error) {
    console.error("Error fetching product detail:", error);
    showError(productDetailSection, "Failed to load product details. Please try again later.");
  } finally {
    toggleLoader(false);
  }
}

// Render pagination controls
function renderPaginationControls(currentPage, totalPages) {
  clearSection(paginationControls);

  if (totalPages <= 1) return;

  const prevButton = `<button class="btn btn-secondary" onclick="changePage(${currentPage - 1})" ${currentPage === 1 ? "disabled" : ""}>Previous</button>`;
  const nextButton = `<button class="btn btn-secondary" onclick="changePage(${currentPage + 1})" ${currentPage === totalPages ? "disabled" : ""}>Next</button>`;

  paginationControls.innerHTML = `
    <div class="d-flex justify-content-between align-items-center">
      ${prevButton}
      <span>Page ${currentPage} of ${totalPages}</span>
      ${nextButton}
    </div>
  `;
}

// Change page
function changePage(newPage) {
  currentPage = newPage;
  renderPaginatedProducts(currentPage);
}

// Filter products by category
function filterProducts(category) {
  const filteredProducts = allProducts.filter(
    (product) => product.fields.Category === category
  );
  renderProducts(filteredProducts);
}

// Search products
function searchProducts(query) {
  const filteredProducts = allProducts.filter((product) => {
    const { Name, Category } = product.fields;
    return (
      Name.toLowerCase().includes(query.toLowerCase()) ||
      Category.toLowerCase().includes(query.toLowerCase())
    );
  });
  renderProducts(filteredProducts);
}

// Clear a section's content
function clearSection(section) {
  section.innerHTML = "";
}

// Show error message
function showError(section, message) {
  section.innerHTML = `<p class="text-danger">${message}</p>`;
}

// Toggle loader visibility
function toggleLoader(show) {
  if (show) {
    loader.classList.remove("hidden");
  } else {
    loader.classList.add("hidden");
  }
}

// Toggle view between sections
function toggleView(showSection, hideSections) {
  showSection.classList.remove("hidden");
  hideSections.forEach((section) => section.classList.add("hidden"));
}

// Show list view
function showListView() {
  toggleView(productListSection, [productDetailSection]);
  backButton.classList.add("hidden");
}

// Initialize app
document.addEventListener("DOMContentLoaded", () => {
  fetchProducts();
  backButton.addEventListener("click", showListView);
  searchInput.addEventListener("input", (e) => searchProducts(e.target.value));
});
