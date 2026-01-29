document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // validacion basica
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    if (name && email && phone && subject && message) {
        //Simlacion de envio de formulario
        document.getElementById('successMessage').style.display = 'block';

        //reseteo del formulario
        document.getElementById('contactForm').reset();
    } else {
        alert('Por favor, complete todos los campos del formulario.');
    }
});