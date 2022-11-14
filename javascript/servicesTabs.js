'use strict';

const tabsList = document.querySelector('.services-list-tabs');

tabsList.addEventListener('click', showTabsContent);

function showTabsContent(event) {
    const tabName = event.target.dataset.type;
    const tabText = document.querySelector('.active-text');
    tabText.classList.remove('active-text');
    document.querySelector(`[data-li = ${tabName}]`).classList.add('active-text');
    const choosenTab = document.querySelector('.active-tab');
    choosenTab.classList.remove('active-tab');
    event.target.classList.add('active-tab');
}