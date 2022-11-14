'use strict';


const clientFeedbacks = document.querySelectorAll('.client-feedback-item');
const clientsAvatars = document.querySelectorAll('.clients-avatar');


let currentAvatar = 0;
let nextAvatar = 0;

clientsAvatars.forEach((item, index) => {
    item.addEventListener('click', function(event) {
        goToAvatar(index);
    })
})

function goToAvatar(nextAvatar) {
    clientFeedbacks[currentAvatar].classList.remove('active-client');
    clientsAvatars[currentAvatar].classList.remove('active-avatar');
    clientFeedbacks[nextAvatar].classList.add('active-client');
    clientsAvatars[nextAvatar].classList.add('active-avatar');
    currentAvatar = nextAvatar;
}


function previousAvatar() {
    if (currentAvatar === 0) {
        nextAvatar = clientFeedbacks.length - 1
    } else {
        nextAvatar = currentAvatar - 1;
    }
    goToAvatar(nextAvatar);
}

function nextAvatarToShow() {
    if (currentAvatar === clientFeedbacks.length - 1) {
        nextAvatar = 0;
    } else {
        nextAvatar = currentAvatar + 1;
    }
    goToAvatar(nextAvatar);
}

const btnPrew = document.querySelector('.previous');
const btnNext = document.querySelector('.next');

btnPrew.addEventListener('mouseover', () => {
    btnPrew.classList.add('js-active-btn');
});

btnPrew.addEventListener('mouseout', () => {
    btnPrew.classList.remove('js-active-btn');
});

btnNext.addEventListener('mouseover', () => {
    btnNext.classList.add('js-active-btn');
});

btnNext.addEventListener('mouseout', () => {
    btnNext.classList.remove('js-active-btn');
});

btnPrew.addEventListener('click', previousAvatar);
btnNext.addEventListener('click', nextAvatarToShow);


