const Text = document.querySelector("#text");
const changeBtn = document.querySelector("#change_text");

function onClick() {
    Text.innerHTML = "Hello JavaScript";
    Text.style.color = "Red";
   
}
changeBtn.addEventListener("click", onClick)