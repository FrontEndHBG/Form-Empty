const form = document.querySelector('#the-form-in-html');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let input = document.querySelector('#input-in-form');

    // Conditional
    if (input.value === '') {
        return false
    } else {
        alert(input.value);
    }
});
