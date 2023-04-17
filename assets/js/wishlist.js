
const deleteBtns = document.querySelectorAll('.delete-btn');
const addBtn = card.querySelectorAll('.add-to-cart-btn');
  
for (const deleteBtn of deleteBtns) {
  const card = deleteBtn.closest('.remove-card');
  deleteBtn.addEventListener('click', () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        card.classList.add('opacity-0');
        setTimeout(() => card.remove(), 500);
        Swal.fire({
          title: 'Deleted!',
          text: 'Your item has been deleted.',
          icon: 'success',
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
      }
    })
  });
  
  addBtn.addEventListener('click', () => {
    Swal.fire({
      icon: 'success',
      title: 'Item added to cart!',
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
  });
}
function toggleBorder(img) {
  img.classList.toggle("selected");
  const selectedCount = document.getElementById("selected-count");
  let count = parseInt(selectedCount.textContent);
  if (img.classList.contains("selected")) {
    count++;
  } else {
    count--;
  }
  selectedCount.textContent = count.toString();
}
function removeAll() {
  const selectedImages = document.querySelectorAll(".selected");
  selectedImages.forEach((img) => {
    img.classList.remove("selected");
  });
  const selectedCount = document.getElementById("selected-count");
  selectedCount.textContent = "0";
}