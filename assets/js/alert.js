function removeDismissBtn(event) {
  const btn = event.currentTarget.closest('.dismiss-btn');
  btn.style.display = 'none';
}