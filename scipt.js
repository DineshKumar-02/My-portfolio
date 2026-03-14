function toggle(box) {
  box.classList.toggle("active");
}

function openModal(file) {
  document.getElementById("modal").style.display = "flex";
  document.getElementById("frame").src = file;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
  document.getElementById("frame").src = "";
}
