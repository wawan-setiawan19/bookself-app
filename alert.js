const alertElement = document.querySelector(".alert");
const dangerElement = document.querySelector(".danger");
const showAlert = (message) => {
  alertElement.classList.add("green");
  alertElement.style.visibility = "visible";
  alertElement.innerText = message;
  setTimeout(() => {
    alertElement.style.visibility = "hidden";
  }, 2000);
};

const showDanger = () => {
  dangerElement.style.visibility = "visible";
};
