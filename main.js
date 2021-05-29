// Variabel for call element HTML
const formElement = document.querySelector("#inputBook");
const titleElement = document.querySelector("#inputBookTitle");
const authorElement = document.querySelector("#inputBookAuthor");
const yearElement = document.querySelector("#inputBookYear");
const completeElement = document.querySelector("#inputBookIsComplete");
const validateYearElement = document.querySelector(".validasi");

const date = new Date();

formElement.addEventListener("submit", (e) => {
    e.preventDefault();
    titleElement.value = "";
    authorElement.value = "";
    yearElement.value = "";
    completeElement.checked = false;
});

const showErrorValidasi = (value) => {
    value !== true
        ? (validateYearElement.style.visibility = "hidden")
        : (validateYearElement.style.visibility = "visible");
};

// Validasi tahun
const cekDigitTahun = (digit) => {
    digit === 4 ? showErrorValidasi(false) : showErrorValidasi(true);
    if (digit < 4) validateYearElement.innerText = "digit tahun kurang dari 4";
    if (digit === 0) showErrorValidasi(false);
};

const cekTahun = (tahun) => {
    if (tahun > date.getFullYear()) {
        showErrorValidasi(true);
        validateYearElement.innerText = `kan masih tahun ${date.getFullYear()}`;
    }
};

yearElement.addEventListener("keyup", (e) => {
    cekDigitTahun(e.target.value.length);
    cekTahun(e.target.value);
});

// bagian storage
const bookData = "BOOK_DATA";

// cek storage
const cekStorage = () => {
    return typeof Storage !== "undefined";
};
window.addEventListener("load", () => {
    if (cekStorage()) {
        if (localStorage.getItem(bookData) === null) {
            localStorage.setItem(bookData, "");
        }
    } else {
        console.log("storage tidak tersedia pada browser ini");
    }
});
