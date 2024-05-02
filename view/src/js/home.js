'use strict'

const load = document.getElementById('load')
const loadText = document.getElementById('load-text')

const loadAnimation = () => {

    setTimeout(() => {
        loadText.children[1].classList.remove('opacity-0')
        setTimeout(() => {
            loadText.children[0].classList.remove('opacity-0')
            setTimeout(() => {
                loadText.children[2].classList.remove('opacity-0')
                setTimeout(() => {
                    loadText.children[3].classList.remove('opacity-0')
                    setTimeout(() => {
                        loadText.children[4].classList.remove('opacity-0')
                        loadText.children[5].classList.remove('opacity-0')
                        setTimeout(() => {
                            load.classList.add('opacity-0')
                            setTimeout(() => {
                                load.classList.add('hidden')
                            }, 500);
                        }, 1000);
                    }, 700);
                }, 700);
            }, 700);
        }, 700);
    }, 700);

}

window.addEventListener('load', () => {
    loadAnimation()
})