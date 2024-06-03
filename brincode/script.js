document.addEventListener('DOMContentLoaded', function() {
    const promotionsContent = document.querySelector('.promotions-content');
    const promotions = document.querySelectorAll('.promotion');
    const totalHeight = Array.from(promotions).reduce((total, promo) => total + promo.clientHeight, 0);

    let scrollPosition = 0;

    function scrollPromotions() {
        scrollPosition -= 1;
        if (Math.abs(scrollPosition) >= totalHeight) {
            scrollPosition = promotionsContent.clientHeight;
        }
        promotionsContent.style.transform = `translateY(${scrollPosition}px)`;
        requestAnimationFrame(scrollPromotions);
    }

    scrollPromotions();
});