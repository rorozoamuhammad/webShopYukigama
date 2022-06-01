const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');
const ul = document.querySelector('nav ul');
const li = document.querySelectorAll('nav ul li');
const button = document.querySelectorAll('button');
const beli = document.querySelectorAll('#beli');
const product = document.querySelectorAll('#product #pilihan .pertama');
const alert = document.querySelectorAll('#alert');

const full = document.querySelector('#full');
const full2 = document.querySelector('#full2');
const full3 = document.querySelector('#full3');
const full4 = document.querySelector('#full4');
const full5 = document.querySelector('#full5');
const full6 = document.querySelector('#full6');
const full7 = document.querySelector('#full7');
const full8 = document.querySelector('#full8');
const full9 = document.querySelector('#full9');
const full10 = document.querySelector('#full10');
const full11 = document.querySelector('#full11');
const full12 = document.querySelector('#full12');
const full13 = document.querySelector('#full13');
const full14 = document.querySelector('#full14');
const full15 = document.querySelector('#full15');
const full16 = document.querySelector('#full16');
const full17 = document.querySelector('#full17');
const full18 = document.querySelector('#full18');
const full19 = document.querySelector('#full19');
const full20 = document.querySelector('#full20');

const keluar = document.querySelector('#keluar');
const keluar2 = document.querySelector('#keluar2');
const keluar3 = document.querySelector('#keluar3');
const keluar4 = document.querySelector('#keluar4');
const keluar5 = document.querySelector('#keluar5');
const keluar6 = document.querySelector('#keluar6');
const keluar7 = document.querySelector('#keluar7');
const keluar8 = document.querySelector('#keluar8');
const keluar9 = document.querySelector('#keluar9');
const keluar10 = document.querySelector('#keluar10');
const keluar11 = document.querySelector('#keluar11');
const keluar12 = document.querySelector('#keluar12');
const keluar13 = document.querySelector('#keluar13');
const keluar14 = document.querySelector('#keluar14');
const keluar15 = document.querySelector('#keluar15');
const keluar16 = document.querySelector('#keluar16');
const keluar17 = document.querySelector('#keluar17');
const keluar18 = document.querySelector('#keluar18');
const keluar19 = document.querySelector('#keluar19');
const keluar20 = document.querySelector('#keluar20');

const kacamata = document.querySelector('#product #result #kacamata');
const sepatu = document.querySelector('#product #result #sepatu');
const baju = document.querySelector('#product #result #baju');
const hp = document.querySelector('#product #result #hp');
const celana = document.querySelector('#product #result #celana');

// array full
const arr = [full, full2, full3, full4, full5, full6, full7, full8, full9, full10, full11, full12, full13, full14, full15, full16, full17, full18, full19, full20];
const outArr = [keluar, keluar2, keluar3, keluar4, keluar5, keluar6, keluar7, keluar8, keluar9, keluar10, keluar11, keluar12, keluar13, keluar14, keluar15, keluar16, keluar17, keluar18, keluar19, keluar20];

// function full
const btn = (i, file) => {
    button[i].addEventListener('click', () => {
        file.style.display = 'block';
    });
}
// function tombol keluar dari full
const Out = (keluar, file) => {
    keluar.addEventListener('click', () => {
        file.style.display = 'none';
    });
}

// animasi burger mobile
burger.addEventListener('click', function() {
    burger.classList.toggle('slide');
    ul.classList.toggle('slide');
});

// nav
for (let a of li) {
    a.addEventListener('click', function() {
        ul.classList.remove('slide');
        burger.classList.remove('slide');
    });
}

// beli / alert
for (let b of beli) {
    b.addEventListener('click', () => {
        for (let i = 0; i < alert.length; i++) {
            alert[i].innerHTML = `
            <div class="card">
                <div class="center">
                    <h1>Terima Kasih Sudah Berbelanja</h1>
                    <h2>Barang anda telah dikirim</h2>
                    <img src="../img/icon/check.png" alt="check">
                </div>
            </div>`;
            window.setTimeout(() => {
                alert[i].innerHTML = ``;
            }, 1000);
        }
    });
}

// product
const pro = (a, b, c, d, e) => {
    product[a].addEventListener('click', () => {
        product[a].style.background = 'hsl(212, 46%, 77%)';
        product[b].style.background = 'white';
        product[c].style.background = 'white';
        product[d].style.background = 'white';
        product[e].style.background = 'white';

        kacamata.style.display = 'flex';
        sepatu.style.display = 'none';
        baju.style.display = 'none';
        hp.style.display = 'none';
        celana.style.display = 'none';
    });
    product[b].addEventListener('click', () => {
        product[b].style.background = 'hsl(212, 46%, 77%)';
        product[a].style.background = 'white';
        product[c].style.background = 'white';
        product[d].style.background = 'white';
        product[e].style.background = 'white';

        kacamata.style.display = 'none';
        sepatu.style.display = 'flex';
        baju.style.display = 'none';
        hp.style.display = 'none';
        celana.style.display = 'none';
    });
    product[c].addEventListener('click', () => {
        product[c].style.background = 'hsl(212, 46%, 77%)';
        product[b].style.background = 'white';
        product[a].style.background = 'white';
        product[d].style.background = 'white';
        product[e].style.background = 'white';

        kacamata.style.display = 'none';
        sepatu.style.display = 'none';
        baju.style.display = 'flex';
        hp.style.display = 'none';
        celana.style.display = 'none';
    });
    product[d].addEventListener('click', () => {
        product[d].style.background = 'hsl(212, 46%, 77%)';
        product[b].style.background = 'white';
        product[c].style.background = 'white';
        product[a].style.background = 'white';
        product[e].style.background = 'white';

        kacamata.style.display = 'none';
        sepatu.style.display = 'none';
        baju.style.display = 'none';
        hp.style.display = 'flex';
        celana.style.display = 'none';
    });
    product[e].addEventListener('click', () => {
        product[e].style.background = 'hsl(212, 46%, 77%)';
        product[b].style.background = 'white';
        product[c].style.background = 'white';
        product[d].style.background = 'white';
        product[a].style.background = 'white';

        kacamata.style.display = 'none';
        sepatu.style.display = 'none';
        baju.style.display = 'none';
        hp.style.display = 'none';
        celana.style.display = 'flex';
    });
}
pro(0, 1, 2, 3, 4);

// tampilan full
for (let i = 0; i < arr.length; i++) {
    btn(i, arr[i]);
}

// keluar dari tampilan full
for (let i = 0; i < outArr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        Out(outArr[i], arr[j]);
    }
}