(function () {
    const header = document.querySelector('.header');
    // window.onscroll = () => {
    //     if (window.pageYOffset > 50) {
    //         header.classList.add('header_active'); 
    //     } else {
    //         header.classList.remove('header_active');  
    //     }
        
        
    // }
    window.addEventListener('scroll', () => {
            if (window.pageYOffset > 50) {
                header.classList.add('header_active'); 
            } else {
                header.classList.remove('header_active');  
            }
    });
})();


// Burger handler

(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header_nav');
    const menuCloseItem = document.querySelector('.header_nav-close');
    burgerItem.addEventListener('click', () => {
      menu.classList.add('header_nav_active');  
    })
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header_nav_active');
    });
})();


// Scroll to anchors
const ease = function (t, b, c ,d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t *(t - 2) - 1) + b;
};

(function () {
    const smoothScroll = function (targetName, duration) {
        const headerElHeight = document.querySelector('.header').clientHeight;
        let targetElement = document.querySelector(targetName);
        let targetPosition = targetElement.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;

        const animation = function(currentTime) {
            if(startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const nextYCoordinate = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0, nextYCoordinate);
            if(timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);
    };

    const links = document.querySelectorAll('.js-scroll');
    links.forEach(each => {
        each.addEventListener('click', function () {
            const target = this.getAttribute('href');
            smoothScroll(target, 1000);
        });
    });
}());