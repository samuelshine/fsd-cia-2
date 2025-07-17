// use this js file to fetch the products from the API. You also need to ensure 
let productsArray = [];
const apiUrl = 'https://fakestoreapi.com/products'; 
const input = document.getElementById('search-filter');
const sortCri = document.getElementById('sort-sel');
const productsContainer = document.getElementById('product-list');

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    productsArray = data.slice(0, 8); // Limit to 8 products
    displayProducts(productsArray);
  });



    
    function displayProducts(products) {
      productsContainer.innerHTML = '';
      products.forEach(product => {
        const card = document.createElement('div');
        card.className = "bg-white rounded-xl shadow-lg p-6 w-60 text-center hover:shadow-xl hover:scale-105 transition-transform flex flex-col items-center";

        card.innerHTML = `
          <img src="${product.image}" alt="${product.title}" class="h-40 w-full object-contain mb-4 rounded" />
          <h2 class="text-base font-semibold h-12 overflow-hidden text-blue-900 mb-2">${product.title}</h2>
          <p class="text-blue-700 font-bold text-lg mb-1">₹${product.price}</p>
        `;
        productsContainer.appendChild(card);
      });
    }

    // Search filter
    input.addEventListener('input', () => {
      filterAndSort();
    });

    // Sorting
    sortCri.addEventListener('change', () => {
      filterAndSort();
    });

    console.log('Products fetched:', productsArray);
    function filterAndSort() {
        console.log('Filtering and sorting products');
      let filtered = [...productsArray];
      const keyword = input.value.toLowerCase();

      if (keyword) {
        filtered = filtered.filter(p => p.title.toLowerCase().includes(keyword));
      }

      // Sort by price and title
      const sortComp = sortCri.value;
      if (sortComp === 'low-high') {
        filtered.sort((a, b) => a.price - b.price);
      } else if (sortComp === 'high-low') {
        filtered.sort((a, b) => b.price - a.price);
      }

      displayProducts(filtered);
    }
