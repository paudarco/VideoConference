const intro = document.querySelector('.intro'),
      partners = document.querySelector('.partners'),
      features = document.querySelector('.features');

function showSection(section) {
    if (window.pageYOffset >= section.offsetTop - 450) {
        section.classList.remove('hide');
    }
}

function removeEvent(section, funcName) {
    if (window.pageYOffset >= section.offsetTop - 449) {
        window.removeEventListener('scroll', funcName);
    }
}

setTimeout(() => {
    showSection(intro);
}, 300);

window.addEventListener('scroll', function showPartners() {
    showSection(partners);
    removeEvent(partners, showPartners);
});

window.addEventListener('scroll', function showFeatures() {
    showSection(features);
    removeEvent(features, showFeatures);
});