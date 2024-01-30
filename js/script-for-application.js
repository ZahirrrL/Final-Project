document.addEventListener('DOMContentLoaded', function () {
    // Закомментируйте следующую строку, чтобы форма не открывалась автоматически при загрузке страницы
    // openApartmentForm();
});

function openApartmentForm() {
    document.getElementById('apartmentFormContainer').style.display = 'block';
}

function closeApartmentForm() {
    document.getElementById('apartmentFormContainer').style.display = 'none';
    resetForm(); // Сбросить форму при закрытии
}

function submitApartmentForm() {
    openApartmentForm(); // Открыть форму при отправке заявки
    var surname = document.getElementById('surname').value;
    var email = document.getElementById('email').value;
    var floor = document.getElementById('floor').value;
    var rooms = document.getElementById('rooms').value;

    if (surname.trim() === "" || email.trim() === "" || floor.trim() === "" || rooms.trim() === "") {
        alert("Пожалуйста, заполните все поля.");
        return;
    }

    document.getElementById('thanksMessage').style.display = 'block';
    document.getElementById('thankYouName').innerText = surname; // Фамилия
    document.getElementById('thankYouPhone').innerText = email; // Почта
    document.getElementById('selectedFloor').innerText = floor;
    document.getElementById('selectedRooms').innerText = rooms;

    setTimeout(function () {
        document.getElementById('thanksMessage').style.display = 'none';
        resetForm();
    }, 10000);
}

function closeThanksMessage() {
    document.getElementById('thanksMessage').style.display = 'none';
    closeApartmentForm(); // Закрыть форму после закрытия благодарности
}

function resetForm() {
    var form = document.getElementById('apartmentForm');
    form.reset();
}
