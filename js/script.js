function showForm() {
    var overlay = document.getElementById('overlay');
    var formContainer = document.getElementById('formContainer');
    var nameInput = document.getElementById("name");

    nameInput.value = '';

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
    var nameInput = document.getElementById("name");

    if (name.trim() === "") {
        alert("Пожалуйста, введите ваше имя.");
        return;
    }

    callForm.style.display = 'none';
    thankYouMessage.style.opacity = '1';
    thankYouMessage.style.display = 'block';
    userNameElement.innerHTML = name;

    setTimeout(function () {
        thankYouMessage.style.display = 'none';
        hideForm();
    }, 10000);
}
function hideForm() {
    var overlay = document.getElementById('overlay');
    var formContainer = document.getElementById('formContainer');

    overlay.style.display = 'none';
    formContainer.style.display = 'none';
}


function returnToSite() {
    var overlay = document.getElementById('overlay');
    var formContainer = document.getElementById('formContainer');
    var callForm = document.getElementById('callForm');
    overlay.style.display = 'none';
    formContainer.style.display = 'none';
    var userNameElement = document.getElementById("userName");
    userNameElement.innerHTML = '';
    callForm.style.display = 'block';
}

function submitCustomApplication() {
    var customFormName = document.getElementById("customName").value;
    var customFormPhone = document.getElementById("customPhone").value;
    var customFormEmail = document.getElementById("customEmail").value;
    var customFormDeliveryMethod = document.querySelector('input[name="customDeliveryMethod"]:checked');

    if (!customFormName || !customFormPhone || !customFormEmail || !customFormDeliveryMethod) {
        alert('Пожалуйста, заполните все обязательные поля.');
        return;
    }
    var customThankYouMessage = document.getElementById('customThankYouMessage');
    customThankYouMessage.innerHTML = `<p class="thankYouText">Спасибо, ${customFormName} Мы получили вашы данные! Мы свяжемся с вами и произведём оценку</p>`;

    customThankYouMessage.style.display = 'block';

    setTimeout(function () {
        customThankYouMessage.style.display = 'none';
        resetCustomForm();
    }, 5000);
}

function resetCustomForm() {
    var customForm = document.getElementById('customApplicationForm');
    customForm.reset();
}



function toggleDescription(descriptionBlockId) {
    var descriptionBlock = document.getElementById(descriptionBlockId);

    if (descriptionBlock.style.display === 'block') {
        descriptionBlock.style.display = 'none'; 
    } else {
        descriptionBlock.style.display = 'block'; 
    }
}






function submitApplication() {
    var fullName = document.getElementById('fullName').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var emailAddress = document.getElementById('emailAddress').value;

    if (!fullName || !phoneNumber || !emailAddress) {
        alert('Пожалуйста, заполните все обязательные поля.');
        return;
    }


    document.getElementById('submittedFullName').textContent = fullName;
    document.getElementById('submittedPhoneNumber').textContent = phoneNumber;
    document.getElementById('submittedEmailAddress').textContent = emailAddress;

    document.getElementById('applicationForm').style.display = 'none';
    var thankYouMessagee = document.getElementById('thankYouMessagee');
    thankYouMessagee.style.display = 'block';

    setTimeout(function () {
        document.getElementById('applicationForm').style.display = 'flex';
        thankYouMessagee.style.display = 'none';
    }, 5000);
}

