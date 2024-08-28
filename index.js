const colorList = document.querySelector('.color-list');
const dropdownList = document.querySelector('.dropdown-list');
const dropDownLinkList = dropdownList.querySelectorAll("& > div");

colorList.addEventListener('click', () => {
    dropdownList.classList.toggle('open');
});

for (const link of dropDownLinkList) {
    link.addEventListener('click', () => {
        colorList.innerText = link.innerText;
    });
}
const colorLists = document.querySelector('.color-list');
const dropdownList2 = document.querySelector('.dropdown-list2');
const dropDownLink = dropdownList.querySelectorAll("& > div");

colorList.addEventListener('click', () => {
    dropdownList2.classList.toggle('open');
});

for (const link of dropDownLink) {
    link.addEventListener('click', () => {
        colorList.innerText = link.innerText;
    });
}

