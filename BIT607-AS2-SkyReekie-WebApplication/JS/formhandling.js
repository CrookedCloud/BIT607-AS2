//BIT607 AS2 Sky Reekie SN:3809237
// formhandling.js

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("reservationForm");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the default form submission

        // Collect form data
        const formData = new FormData(form);

        // Example of form data processing
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            date: formData.get("date"),
            time: formData.get("time"),
            guests: formData.get("guests"),
            specialRequests: formData.get("specialRequests")
        };

        console.log("Reservation Data:", data);

        // You can perform further actions here like sending data to a server
        alert("Reservation submitted successfully!");

        // Reset the form
        form.reset();
    });
});
