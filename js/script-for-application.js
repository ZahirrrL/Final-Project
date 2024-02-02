document.addEventListener('DOMContentLoaded', function () {

});

function openApartmentForm() {
    document.getElementById('apartmentFormContainer').style.display = 'block';
}

function closeApartmentForm() {
    document.getElementById('apartmentFormContainer').style.display = 'none';
    resetForm();
}

function submitApartmentForm() {
    openApartmentForm();
    var surname = document.getElementById('surname').value;
    var email = document.getElementById('email').value;
    var floor = document.getElementById('floor').value;
    var rooms = document.getElementById('rooms').value;

    if (surname.trim() === "" || email.trim() === "" || floor.trim() === "" || rooms.trim() === "") {
        alert("Пожалуйста, заполните все поля.");
        return;
    }

    document.getElementById('thanksMessage').style.display = 'block';
    document.getElementById('thankYouName').innerText = surname;
    document.getElementById('thankYouPhone').innerText = email;
    document.getElementById('selectedFloor').innerText = floor;
    document.getElementById('selectedRooms').innerText = rooms;

    setTimeout(function () {
        document.getElementById('thanksMessage').style.display = 'none';
        resetForm();
    }, 6000);
}

function closeThanksMessage() {
    document.getElementById('thanksMessage').style.display = 'none';
    closeApartmentForm(); 
}

function resetForm() {
    var form = document.getElementById('apartmentForm');
    form.reset();
}
