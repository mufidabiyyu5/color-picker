const colorInput = document.getElementById('colorPicker');

colorInput.addEventListener('input', function() {
    const selectedColor = colorInput.value;
    document.querySelector('#boxColor').style.backgroundColor = selectedColor;
})