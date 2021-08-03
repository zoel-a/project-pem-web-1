//!fungsi untuk membuat navbar sembunyi ketika di scroll kebawah dan muncul ketika scroll keatas :v
let hiddenScrooll = window.pageYOffset;
window.onscroll = function() {
    let scrollPos = window.pageYOffset;
    if (hiddenScrooll > scrollPos) {
        document.getElementById('menu').style.top = '0';
    } else {
        document.getElementById('menu').style.top = '-100px';
    }
    hiddenScrooll = scrollPos;
}

//!memanggil function Typed dari dari CDN typed.js
new Typed('#typed', {
    strings : [`Let's make our setup tobe colorfull`], //string yang akan di tampilkan ke inisial id #typed html
    typeSpeed : 100, //kecepatan animasi
    delaySpeed : 200, //delay animasi 
    loop : true //verifikasi looping untuk animasi :)
});
