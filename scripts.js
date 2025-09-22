let currentIndex = 0;
    const slides = document.getElementById('slides');
    const totalSlides = slides.children.length;
    

    function updateSlide() {
      slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSlide();
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateSlide();
    }
