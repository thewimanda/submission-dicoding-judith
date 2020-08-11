function tombolForm() {
  let pilih = confirm("Yakin mau dikirim?");
  if (pilih == true) {
    alert("selamat! pesan kamu ga terkirim");
  } else {
    alert("loh kenapa ga mau dikirim?");
  }
}

function naikKeatas() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}