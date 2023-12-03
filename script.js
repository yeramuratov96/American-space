const modal = document.getElementById('myModal');

function openModal() {
    modal.style.display = 'flex';
}
  
function closeModal() {
    modal.style.display = 'none';
    document.getElementById('textInput').value = '';
}
  
function submitForm() {
    const inputText = document.getElementById('textInput').value.trim();
    if (inputText !== '') {
      alert('Вы ввели: ' + inputText);
      closeModal();
    }
}
  
window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && modal.style.display === 'flex') {
      closeModal();
    }
});
  
modal.addEventListener('click', function (event) {
    if (event.target === modal) {
      closeModal();
    }
});