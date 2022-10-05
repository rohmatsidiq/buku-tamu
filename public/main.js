const isiBukuTamu = () => {
  let nama = prompt('Masukkan Nama');
  let alamat = prompt('Masukkan Alamat');
  let ucapan = prompt('Masukkan Ucapan');

  let tbody = document.getElementById('tbody');
  let totalData = tbody.childElementCount;

  tbody.innerHTML += `
  <tr>
    <td>${totalData + 1}</td>
    <td>${nama}</td>
    <td>${alamat}</td>
    <td>${ucapan}</td>
  </tr>
  `;
};
