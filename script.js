var animationPaused = false;

      function pauseAnimation(element) {
        animationPaused = true;
        element.querySelector(".news-container").style.animationPlayState =
          "paused";
      }

      function resumeAnimation(element) {
        animationPaused = false;
        element.querySelector(".news-container").style.animationPlayState =
          "running";
      }

      document
        .querySelector(".news-container")
        .addEventListener("animationiteration", function () {
          if (animationPaused) {
            this.style.animation = "none";
            void this.offsetWidth; /* Trigger reflow */
            this.style.animation = null;
          }
        });