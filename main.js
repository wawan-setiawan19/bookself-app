// Variabel for call element HTML
const formElement = document.querySelector("#inputBook");
const titleElement = document.querySelector("#inputBookTitle");
const authorElement = document.querySelector("#inputBookAuthor");
const yearElement = document.querySelector("#inputBookYear");
const completeElement = document.querySelector("#inputBookIsComplete");
const validateYearElement = document.querySelector(".validasi");

formElement.addEventListener("submit", (e) => {
  const date = new Date();
  e.preventDefault();
  let data = {
    id: `${date.getFullYear()}${date.getMonth()}${date.getDate()}${date.getHours()}${date.getMinutes()}${date.getSeconds()}`,
    judul: titleElement.value,
    author: authorElement.value,
    tahun: yearElement.value,
    sudahDibaca: completeElement.checked,
  };
  simpanData(data);
  renderList();
  titleElement.value = "";
  authorElement.value = "";
  yearElement.value = "";
  completeElement.checked = false;
});

yearElement.addEventListener("keyup", (e) => {
  cekDigitTahun(e.target.value.length);
  cekTahun(e.target.value);
});
