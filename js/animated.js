//!fungsi untuk membuat navbar sembunyi ketika di scroll kebawah dan muncul ketika scroll keatas :v
let hiddenScrooll = window.pageYOffset; //pendklarasian kustomisaisi window ketika scroll up dan down
window.onscroll = function() {
	let scrollPos = window.pageYOffset;
	if (hiddenScrooll > scrollPos) {
		document.getElementById('menu').style.top = '0'; //kondisi pageYOffset ketika scroll ke atas (navbar muncul)
	} else {
		document.getElementById("menu").style.top = "-100px"; //kondisi pageYOffset ketika scroll ke bawah (navbar sembunyi)
	}
	hiddenScrooll = scrollPos;
}

//!memanggil function Typed dari dari CDN typed.js
new Typed('#typed', {
	strings : [`Let's make our setup tobe colorfull`], //string yang akan di tampilkan ke inisial id #typed html
	typeSpeed : 100, //kecepatan animasi
	delaySpeed : 200, //delay animasi 
	loop : true //verifikasi looping untuk animasi ngetik :)
});

// !memanggil function dari CDN lightslider.js
$(document).ready(function () {
	$("#responsive").lightSlider({
		auto: true,
		pauseOnHover: true,
		item: 3, //mengatur item yang tampil di layar depan
		slideMove: 1, //mengatur beerapa item yang bergeser ketika tombol slider ditekan
		enableDrag: true, //inisialisasi drag atau tidak pada konten slide
		loop: true, // otomatis kembali kekonten pertama ketika mencapai batas konten
		speed: 1500, //kecepatan sliding ketika tombol slider di tekan
		});
});
