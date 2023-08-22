'use strict';
const dropArea = document.getElementById('drop-area'),
  inputFile = document.getElementById('input-file'),
  imageView = document.getElementById('img-view');

inputFile.addEventListener('change', uploadImage);

function uploadImage() {
  inputFile.files[0];
  let imageLink = URL.createObjectURL(inputFile.files[0]);
  imageView.style.backgroundImage = `url("${imageLink}")`;
  imageView.textContent = '';
  imageView.style.border = 0;
}
