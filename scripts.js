function lanjutKonfirmasi() {
    var username = document.getElementById("username").value;

    document.getElementById("halaman-pendaftaran").style.display = "none";

    var halamanKonfirmasi = document.getElementById("halaman-konfirmasi");
    halamanKonfirmasi.style.display = "block";

    document.getElementById("konfirmasi-username").innerText = username;
}

function kembaliPendaftaran() {
    document.getElementById("halaman-konfirmasi").style.display = "none";
    document.getElementById("halaman-pendaftaran").style.display = "block";
}
