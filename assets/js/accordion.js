const accordionHeaders = document.querySelectorAll('.accordion-header');
const accordionContents = document.querySelectorAll('.accordion-content');
const accordionArrows = document.querySelectorAll('.accordion-arrow');
const accordionHeadersTwo = document.querySelectorAll('.accordion-header-two');
const accordionChildren = document.querySelectorAll('.accordion-child');
const accordionContentTwo = document.querySelector('.accordion-content-two');
accordionHeaders.forEach((header, index) => {
  // Add a click event listener to toggle the accordion content and arrow
  header.addEventListener('click', () => {
    accordionContents[index].classList.toggle('hidden');
    accordionArrows[index].classList.toggle('rotate-180');
  });
});

accordionChildren.forEach((accordionChild) => {
  accordionChild.addEventListener('click', () => {
    const accordionContentTwo = accordionChild.nextElementSibling;
    accordionContentTwo.classList.toggle('hidden');

    const accordionArrow = accordionChild.querySelector('.accordion-arrow');
    accordionArrow.classList.toggle('rotate-180');
  });
});
  accordionHeadersTwo.forEach(header => {
    header.addEventListener('click', () => {
      const accordionContent = header.nextElementSibling;
      const arrowImage = header.querySelector('img');

      accordionContent.classList.toggle('hidden');

      if (accordionContent.classList.contains('hidden')) {
        arrowImage.src = './assets/images/icons/plus.png';
      } else {
        arrowImage.src = './assets/images/icons/minus.png';
      }
    });
  });
  