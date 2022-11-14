'use strict';

const workTabs = document.querySelector('.work-list');
const allPictures = document.querySelectorAll('.work-card');
workTabs.addEventListener('click', (event) => {
    const tabName = event.target.dataset.tab;
    workTabs.querySelector('.active-tab-work').classList.remove('active-tab-work');
    document.querySelector(`[data-tab = ${tabName}]`).classList.add('active-tab-work');
    allPictures.forEach((picture) => {
        picture.classList.add('hidden')
    })
    const tabedPictures = document.querySelectorAll(`[data-info = ${tabName}]`).forEach((picture) => {
        picture.classList.remove('hidden')
    })
    if (tabName === 'all') {
        let twelveImages = Array.from(allPictures).filter((picture, index) => index < 12);
        twelveImages.forEach(image => image.classList.remove('hidden'))
    }
})

    const loadMoreBtn = document.querySelector('.load-btn');
    let morePictures = Array.from(allPictures).filter((picture, index) => index < 24);
    loadMoreBtn.addEventListener('click',  function () {
        setTimeout(function() {morePictures.forEach(image => {
            image.classList.remove('hidden');
        })}, 2000)
    })

loadMoreBtn.addEventListener('click', preloading);
const load = document.querySelector('.preload-list');

function preloading() {
    load.classList.add('preload-active');
    setTimeout(() => load.classList.remove('preload-active'), 2000);
    loadMoreBtn.remove();
}
