const alertElement = document.querySelector(".alert");
const dangerElement = document.querySelector(".danger-container");
const showAlert = (message, type) => {
  type === "danger"
    ? alertElement.classList.add("red")
    : alertElement.classList.add("green");
  alertElement.style.visibility = "visible";
  alertElement.innerText = message;
  alertElement.style.top = `${window.scrollY+100}px`;
  setTimeout(() => {
    alertElement.style.visibility = "hidden";
  }, 2000);
};

const activeButtonDanger = () => {
  const data = lihatData();
  const yesButton = document.querySelector(".ya");
  const noButton = document.querySelector(".tidak");
  console.log(index);
  noButton.addEventListener("click", () => {
    dangerElement.style.visibility = "hidden";
  });

  yesButton.addEventListener("click", () => {
    dangerElement.style.visibility = "hidden";
    data.splice(index, 1);
    localStorage.setItem(bookData, JSON.stringify(data));
    renderList();
    showAlert("data terhapus", "danger");
  });
};

const showDanger = () => {
  dangerElement.style.visibility = "visible";
  dangerElement.style.top = `${window.scrollY}px`;
  document.addEventListener("scroll", () => {
    dangerElement.style.top = `${window.scrollY}px`;
  });
  activeButtonDanger();
};
