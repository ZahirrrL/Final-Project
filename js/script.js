function showForm() {
    var overlay = document.getElementById('overlay');
    var formContainer = document.getElementById('formContainer');

    overlay.style.display = 'block';
    formContainer.style.display = 'block';
}

function submitForm() {
    var callForm = document.getElementById('callForm');
    var thankYouMessage = document.getElementById('thankYouMessage');
    var overlay = document.getElementById('overlay');
    var formContainer = document.getElementById('formContainer');
    var name = document.getElementById("name").value;
    var userNameElement = document.getElementById("userName");
    
    if (name.trim() === "") {
        alert("Пожалуйста, введите ваше имя.");
        return;
    }
    

    callForm.style.display = 'none';
    thankYouMessage.style.opacity = '1';
    thankYouMessage.style.display = 'block';
    userNameElement.innerHTML = name;

    setTimeout(function() {
        thankYouMessage.style.display = 'none';
        hideForm();
    }, 10000);
}

function returnToSite() {
    var overlay = document.getElementById('overlay');
    var formContainer = document.getElementById('formContainer');

    overlay.style.display = 'none';
    formContainer.style.display = 'none';

    alert("Возвращаемся на сайт...");
}