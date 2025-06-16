const popup = document.getElementById("popup");
const emailBtn = document.getElementById("email-btn");
const closeBtn = document.getElementById("close-popup");

emailBtn.onclick = () => popup.classList.remove("hidden");
closeBtn.onclick = () => popup.classList.add("hidden");
popup.onclick = (e) => {
  if (e.target === popup) popup.classList.add("hidden");
};
