const ad = document.querySelector('.adContainer');

function mostrarAd() {
    ad.style.display = "flex";
};

function fecharAd() {
    ad.style.display = "none"
}

setTimeout(mostrarAd, 3000);