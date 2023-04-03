const closeButton = document.getElementById("close-btn");
const targetDiv = document.querySelector(".product-filter");
const settingsImg = document.getElementById("settings-img");
const checkboxes = document.querySelectorAll('.checkbox');
const selectedCount = document.getElementById('selected-count');
const selectedItemName = document.querySelector('.selected-item-name');
const grid = document.querySelector(".card-grid");
closeButton.addEventListener("click", function () {
  targetDiv.style.display = "none";
  settingsImg.style.display = "block";
  grid.classList.remove("lg:grid-cols-3", "md:grid-cols-2");
  grid.classList.add("lg:grid-cols-4");
});
settingsImg.addEventListener("click", function () {
  targetDiv.style.display = "block";
  settingsImg.style.display = "none";
  grid.classList.remove("lg:grid-cols-4","md:grid-cols-2");
  grid.classList.add("lg:grid-cols-3", "md:grid-cols-2");
});


function resetCount() {
  selectedCount.innerText = '0';
  checkboxes.forEach(checkbox => checkbox.checked = false);
  selectedItemName.innerText = '';
}

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', () => {
    let count = 0;
    let selectedItems = '';
    checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
        count++;
        const label = checkbox.nextElementSibling.querySelector('.text-input').innerText;
        selectedItems += label + ', ';
      }
    });
    selectedCount.innerText = count;
    if (selectedItems) {
      selectedItems = selectedItems.slice(0, -2);
    }
    selectedItemName.innerText = selectedItems;
  });
});
