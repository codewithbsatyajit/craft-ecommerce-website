// JavaScript for sticky header and responsive navigation menu toggle
const header = document.querySelector("header");
const menuIcon = document.querySelector("#menu-icon");
const navList = document.querySelector(".navlist");
const topButton = document.querySelector(".top");
const form = document.querySelector("form");
const productContainer = document.querySelector(".new-products-content");

// Scroll event listener for sticky header, menu toggle, and scroll-to-top button
window.addEventListener("scroll", () => {
  // Sticky header
  header.classList.toggle("sticky", window.scrollY > 150);

  // Close the menu on scroll
  menuIcon.classList.remove("bx-x");
  navList.classList.remove("open");

  // Show/hide scroll-to-top button
  if (window.scrollY > 300) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
});

// Click event listener for menu icon
if (menuIcon) {
  menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("bx-x");
    navList.classList.toggle("open");
  });
}

// Click event listener for scroll-to-top button
if (topButton) {
  topButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Form validation
if (form) {
  form.addEventListener("submit", (event) => {
    const emailInput = form.querySelector('input[type="email"]');
    if (!emailInput.value) {
      event.preventDefault(); // Prevent form submission
      alert("Please enter your email address.");
    }
  });
}

// Dynamically loading products
if (productContainer) {
  // Example products data
  const products = [
    { src: "img/p1.jpg", name: "Product 1", price: "$99.00" },
    { src: "img/p2.jpg", name: "Product 2", price: "$99.00" },
    // Add more products as needed
  ];

  products.forEach((product) => {
    const productHTML = `
      <div class="row">
        <div class="row-img">
          <img src="${product.src}" alt="${product.name}">
        </div>
        <h3>${product.name}</h3>
        <h5>${product.price}</h5>
        <div class="r-btnn">
          Add to cart
          <i class='bx bxs-cart'></i>
        </div>
      </div>
    `;
    productContainer.innerHTML += productHTML;
  });
}
