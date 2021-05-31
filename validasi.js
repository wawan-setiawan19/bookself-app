const showErrorValidasi = (value) => {
  value !== true
    ? (validateYearElement.style.visibility = "hidden")
    : (validateYearElement.style.visibility = "visible");
};

const cekDigitTahun = (digit) => {
  digit === 4 ? showErrorValidasi(false) : showErrorValidasi(true);
  if (digit < 4) validateYearElement.innerText = "digit tahun kurang dari 4";
  if (digit === 0) showErrorValidasi(false);
};

const cekTahun = (tahun) => {
  const date = new Date()
  if (tahun > date.getFullYear()) {
    showErrorValidasi(true);
    validateYearElement.innerText = `kan masih tahun ${date.getFullYear()}`;
  }
};
