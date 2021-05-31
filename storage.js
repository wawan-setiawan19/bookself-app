const bookData = "BOOK_DATA";

const cekStorage = () => {
  return typeof Storage !== "undefined";
};

const lihatData = () => {
  if (cekStorage()) {
    return JSON.parse(localStorage.getItem(bookData)) || [];
  } else {
    return [];
  }
};

const renderList = () => {
  showDataUnfinished();
  showDataFinished();
  activeButton();
};

const simpanData = (data) => {
  if (cekStorage()) {
    let userData = [];

    if (localStorage.getItem(bookData) === null) {
      userData = [];
    } else {
      userData = JSON.parse(localStorage.getItem(bookData));
    }
    userData.unshift(data);

    localStorage.setItem(bookData, JSON.stringify(userData));
  }
  showAlert("data berhasil ditambahkan");
};

const showDataUnfinished = () => {
  const data = lihatData();
  const listUnfinished = document.querySelector("#incompleteBookshelfList");
  let dummy = "";
  data.forEach((element) => {
    if (!element.sudahDibaca) {
      dummy += `<article class="book_item">
                          <h3>${element.judul}</h3>
                          <p>Penulis: ${element.author}</p>
                          <p>Tahun: ${element.tahun}</p>
  
                          <div class="action" id=${element.id}>
                              <button class="green complete" >Selesai dibaca</button>
                              <button class="red delete">Hapus buku</button>
                          </div>
                      </article>`;
    }
  });
  listUnfinished.innerHTML = dummy;
};

const showDataFinished = () => {
  const data = lihatData();
  const listFinished = document.querySelector("#completeBookshelfList");
  let dummy = "";
  data.forEach((element) => {
    if (element.sudahDibaca) {
      dummy += `<article class="book_item">
                          <h3>${element.judul}</h3>
                          <p>Penulis: ${element.author}</p>
                          <p>Tahun: ${element.tahun}</p>
  
                          <div class="action" id=${element.id}>
                            <button class="green uncomplete" >Belum selesai di Baca</button>
                            <button class="red delete">Hapus buku</button>
                        </div>
                      </article>`;
    }
  });
  listFinished.innerHTML = dummy;
};

const activeButton = () => {
  const data = lihatData();
  const completeButton = document.querySelectorAll(".complete");
  const uncompleteButton = document.querySelectorAll(".uncomplete");
  const deleteButton = document.querySelectorAll(".delete");

  completeButton.forEach((element) => {
    element.addEventListener("click", (e) => {
      const index = data.findIndex(
        (obj) => obj.id == e.target.parentElement.id
      );
      data[index].sudahDibaca = true;
      localStorage.setItem(bookData, JSON.stringify(data));
      renderList();
    });
  });

  uncompleteButton.forEach((element) => {
    element.addEventListener("click", (e) => {
      const index = data.findIndex(
        (obj) => obj.id == e.target.parentElement.id
      );
      console.log(index);
      data[index].sudahDibaca = false;
      localStorage.setItem(bookData, JSON.stringify(data));
      renderList();
    });
  });

  deleteButton.forEach((element) => {
    element.addEventListener("click", (e) => {
      const index = data.findIndex(
        (obj) => obj.id == e.target.parentElement.id
      );
      showDanger();
      // data.splice(index, 1);
      // localStorage.setItem(bookData, JSON.stringify(data));
      // renderList();
    });
  });
};

window.addEventListener("load", () => {
  if (cekStorage()) {
    if (localStorage.getItem(bookData) !== null) {
      renderList();
    }
  } else {
    console.log("storage tidak tersedia pada browser ini");
  }
});
