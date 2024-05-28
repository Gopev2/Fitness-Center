document.addEventListener('DOMContentLoaded', () => {
    // Slideshow
    const images = ['img1.jpg', 'img2.jpg', 'img3.jpg']; // Add your image paths
    let currentIndex = 0;

    const slideshowElement = document.querySelector('.slideshow');
    function showImage(index) {
        slideshowElement.style.backgroundImage = `url(${images[index]})`;
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    setInterval(nextImage, 3000); // Change image every 3 seconds
    showImage(currentIndex);

    // Reservation form submission
    const form = document.getElementById('reservation-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const date = document.getElementById('date').value;

        if (!name || !email || !date) {
            alert('Моля, попълнете всички полета.');
            return;
        }

        // Here you can add AJAX request to send data to the server
        // For demonstration, we just log the values
        console.log(`Reservation made by ${name} (${email}) on ${date}`);

        alert('Вашата резервация беше успешна!');

        // Reset the form
        form.reset();
    });
});
