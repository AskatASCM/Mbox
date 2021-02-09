

    window.addEventListener('scroll',  () => {
        let scroll = window.scrollY,
            stickyItem = document.querySelector('.header');

        if (scroll > 100) {
            stickyItem.classList.add('header-fixed');
        }
        else {
            stickyItem.classList.remove('header-fixed');
        };
    })


   
    


