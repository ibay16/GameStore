function alertconfirm() {
  Swal.fire({
    title: "Apakah kamu yakin?",
    text: "Kamu akan membeli barang ini!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonText: "Batalkan",
    cancelButtonColor: "#d33",
    confirmButtonText: "Ya saya yakin",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Terimakasih",
        text: "Barang kamu sedang di proses",
        icon: "success",
      });
    }
  });
}

function alertconfirmtopup() {
  Swal.fire({
    title: "Apakah kamu yakin?",
    text: "Kamu akan Top Up game ini!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonText: "Batalkan",
    cancelButtonColor: "#d33",
    confirmButtonText: "Ya saya yakin",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Terimakasih",
        text: "Top Up kamu sedang di proses",
        icon: "success",
      });
    }
  });
}
