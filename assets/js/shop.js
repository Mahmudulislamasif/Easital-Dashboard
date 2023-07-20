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

   // Get the input fields and slider element
   const minInput = document.getElementById('minInput');
   const maxInput = document.getElementById('maxInput');
   const slider = document.getElementById('slider');
   const minValueElement = document.getElementById('minValue');
   const maxValueElement = document.getElementById('maxValue');
 
   // Function to update the min and max value elements
   function updateValues() {
     minValueElement.textContent = minInput.value;
     maxValueElement.textContent = maxInput.value;
   }
 
   // Function to update the slider position and input values
   function updateSlider() {
     slider.min = minInput.value;
     slider.max = maxInput.value;
     slider.value = minInput.value;
     updateValues();
   }
 
   // Event listener for min input changes
   minInput.addEventListener('input', () => {
     if (parseInt(minInput.value) > parseInt(maxInput.value)) {
       minInput.value = maxInput.value;
     }
     updateSlider();
   });
 
   // Event listener for max input changes
   maxInput.addEventListener('input', () => {
     if (parseInt(maxInput.value) < parseInt(minInput.value)) {
       maxInput.value = minInput.value;
     }
     updateSlider();
   });
 
   // Event listener for slider input
   slider.addEventListener('input', () => {
     minInput.value = slider.value;
     updateValues();
   });
 
   // Call the updateSlider() function to set initial values
   updateSlider();

