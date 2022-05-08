var testChange = document.querySelector('#testChange');
var select = document.querySelector('.select');
select.addEventListener('change', (event) => {
    testChange.textContent = event.target.value;
});

var pickDate = document.querySelector('#pickDate');
pickDate.addEventListener('change', (event) => {
    date = new Date(event.target.value);
    console.log(date.getDate());
});