let cards = [document.getElementById('card1'), document.getElementById('card2'), document.getElementById('card3')];
let borders = [document.getElementById('border1'), document.getElementById('border2'), document.getElementById('border3')];
let switches = [document.getElementById('sw1'), document.getElementById('sw2'), document.getElementById('sw3')];
let activeIndex = 1; 

function changeImage(index) {
    activeIndex = index - 1;

    cards.forEach((card, i) => {
        if (i === activeIndex) {
            card.classList.remove('card-passive');
            card.classList.add('card-active');
            borders[i].classList.add('border-actiive');
            borders[i].classList.remove('border-passive');
            switches[i].classList.add('sw-active');
            switches[i].classList.remove('sw-passive');
        } else {
            card.classList.remove('card-active');
            card.classList.add('card-passive');
            borders[i].classList.add('border-passive');
            borders[i].classList.remove('border-actiive');
            switches[i].classList.remove('sw-active');
            switches[i].classList.add('sw-passive');
        }
    });
}

changeImage(2);
