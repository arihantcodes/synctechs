var animationPaused = false;

  function pauseAnimation(element) {
    animationPaused = true;
    element.style.animationPlayState = 'paused';
  }

  function resumeAnimation(element) {
    animationPaused = false;
    element.style.animationPlayState = 'running';
  }

  document.querySelector('.news-container').addEventListener('animationiteration', function() {
    if (animationPaused) {
      this.style.animation = 'none';
      void this.offsetWidth; /* Trigger reflow */
      this.style.animation = null;
    }
  });