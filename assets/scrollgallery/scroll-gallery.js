(() => {
  if (document.querySelector('html').classList.contains('is-builder')) return;

  function applyScrollAnimation() {
    const galleryWrappers = document.querySelectorAll('.gallery-wrapper');

    if (!galleryWrappers.length) return;

    galleryWrappers.forEach((galleryWrapper) => {
      const gridContainer1 = galleryWrapper.querySelector('.grid-container-1');
      const gridContainer2 = galleryWrapper.querySelector('.grid-container-2');
      const gridContainer3 = galleryWrapper.querySelector('.grid-container-3');

      const initialTransform1 = gridContainer1 ? getComputedStyle(gridContainer1).transform : null;
      const initialTransform2 = gridContainer2 ? getComputedStyle(gridContainer2).transform : null;
      const initialTransform3 = gridContainer3 ? getComputedStyle(gridContainer3).transform : null;

      function updateScrollAnimation() {
        const scrollPosition = window.scrollY;
        const screenHeight = window.innerHeight;
        const galleryBlockTop = galleryWrapper.getBoundingClientRect().top + window.scrollY;
        const distanceFromTop = galleryBlockTop - screenHeight;

        if (scrollPosition >= distanceFromTop) {
          const matrix1 = initialTransform1 ? new DOMMatrix(initialTransform1) : null;
          const matrix2 = initialTransform2 ? new DOMMatrix(initialTransform2) : null;
          const matrix3 = initialTransform3 ? new DOMMatrix(initialTransform3) : null;

          if (matrix1) {
            let translateX1 = matrix1.m41 + (scrollPosition - distanceFromTop) * 0.07;

            if (gridContainer1.classList.contains('moving-right')) {
              translateX1 = matrix1.m41 + (scrollPosition - distanceFromTop) * 0.07;
            } else if (gridContainer1.classList.contains('moving-left')) {
              translateX1 = matrix1.m41 - (scrollPosition - distanceFromTop) * 0.07;
            }

            gridContainer1.style.transform = `translate3d(${translateX1}px, 0, 0)`;
          }

          if (matrix2) {
            let translateX2 = matrix2.m41 - (scrollPosition - distanceFromTop) * 0.07;

            if (gridContainer2.classList.contains('moving-right')) {
              translateX2 = matrix2.m41 + (scrollPosition - distanceFromTop) * 0.07;
            } else if (gridContainer2.classList.contains('moving-left')) {
              translateX2 = matrix2.m41 - (scrollPosition - distanceFromTop) * 0.07;
            }

            gridContainer2.style.transform = `translate3d(${translateX2}px, 0, 0)`;
          }

          if (matrix3) {
            let translateX3 = matrix3.m41 + (scrollPosition - distanceFromTop) * 0.07;

            if (gridContainer3.classList.contains('moving-right')) {
              translateX3 = matrix3.m41 + (scrollPosition - distanceFromTop) * 0.07;
            } else if (gridContainer3.classList.contains('moving-left')) {
              translateX3 = matrix3.m41 - (scrollPosition - distanceFromTop) * 0.07;
            }

            gridContainer3.style.transform = `translate3d(${translateX3}px, 0, 0)`;
          }
        }
      }

      window.addEventListener('scroll', () => {
        requestAnimationFrame(updateScrollAnimation);
      });
    });
  }

  applyScrollAnimation();
})();
