let reservationForm = document.querySelector(".reservation-form");
if (reservationForm) {
    reservationForm.addEventListener("submit", function(event) {
        event.preventDefault();
        let name = document.querySelector("#name").value.trim();
        let phone = document.querySelector("#phone").value.trim();
        let date = document.querySelector("#date").value;
        let guests = document.querySelector("#guests").value;
        if (name === "" || phone === "" || date === "" || guests === "") {
            alert("Please fill in all the details before reserving your table.");
            return;
        }
        if (phone.length < 10) {
            alert("Please enter a valid phone number.");
            return;
        }
        alert(
            "Thank you, " + name +
            "! Your table reservation has been received."
        );
        reservationForm.reset();
    });
}
