

const tabItems = document.querySelectorAll('.tab-item');
console.log(tabItems);
const tabContentItems = document.querySelectorAll('.tab-content-item');


// Selected Item 
function selectedItem(e) {
    removeBorder();
    removeShow();

    // Add border to current tab
    this.classList.add('tab-border');

    // Grab content Item
    const tabContentItem = document.getElementById(`${this.id}-content`);

    // Add Show class
    tabContentItem.classList.add('show');
}

function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'));
}

function Show() {
    tabContentItems.forEach(item => item.classList.add('show'));
}

// Listen for Tab click
tabItems.forEach(item => item.addEventListener('click', selectedItem));



