const form = document.getElementById('the-form-in-html');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    var input = document.getElementById('input-in-form');
    
    // conditional
    if(input.value === '') {
        return false;
    } else {
        alert(input.value);
    }
});

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
