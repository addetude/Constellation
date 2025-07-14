document.querySelectorAll('.star').forEach(star => {
    star.addEventListener('click', () => {
        if (star.dataset.clicked === true) return;

        star.dataset.clicked = true;
    })
})