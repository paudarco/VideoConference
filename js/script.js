const intro = document.querySelector('.intro'),
      partners = document.querySelector('.partners'),
      features = document.querySelector('.features'),
      featuresItems = features.querySelectorAll('.features__block');

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

window.addEventListener('scroll', function showFeaturesBlock() {
    showSection(features);
    removeEvent(features, showFeaturesBlock);
});

window.addEventListener('scroll', function showFeatures1() {
    showSection(featuresItems[0]);
    removeEvent(featuresItems[0], showFeatures1);
});

window.addEventListener('scroll', function showFeatures2() {
    showSection(featuresItems[1]);
    removeEvent(featuresItems[1], showFeatures2);
});

window.addEventListener('scroll', function showFeatures3() {
    showSection(featuresItems[2]);
    removeEvent(featuresItems[2], showFeatures3);
});