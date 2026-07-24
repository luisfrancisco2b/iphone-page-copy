const buttons = document.querySelectorAll("#image-picker li");
const image = document.querySelector("#product-img");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log(e);
    // btn.classList.add("selected");

    buttons.forEach((btn) => {
      btn.querySelector(".color").classList.remove("selected");
    });

    const buttonSelected = e.target;

    const id = buttonSelected.getAttribute("id");

    console.log(id);

    buttonSelected.querySelector(".color").classList.add("selected");
  });
});
