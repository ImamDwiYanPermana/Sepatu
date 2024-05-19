console.clear();

const loginBtn = document.getElementById("login");
const signupBtn = document.getElementById("signup");

loginBtn.addEventListener("click", (e) => {
  let parent = e.target.parentNode.parentNode;
  Array.from(e.target.parentNode.parentNode.classList).find((element) => {
    if (element !== "slide-up") {
      parent.classList.add("slide-up");
    } else {
      signupBtn.parentNode.classList.add("slide-up");
      parent.classList.remove("slide-up");
    }
  });
});

signupBtn.addEventListener("click", (e) => {
  let parent = e.target.parentNode;
  Array.from(e.target.parentNode.classList).find((element) => {
    if (element !== "slide-up") {
      parent.classList.add("slide-up");
    } else {
      loginBtn.parentNode.parentNode.classList.add("slide-up");
      parent.classList.remove("slide-up");
    }
  });
});

// Mengambil elemen-elemen input
const emailInput = document.querySelector('.login .input[type="email"]');
const passwordInput = document.querySelector('.login .input[type="password"]');
const loginButton = document.querySelector(".login .submit-btn");

// Fungsi untuk memeriksa apakah semua input terisi
function checkInputsFilled() {
  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();
  return emailValue !== "" && passwordValue !== "";
}

// Memeriksa input setiap kali ada perubahan
emailInput.addEventListener("input", updateLoginButtonStatus);
passwordInput.addEventListener("input", updateLoginButtonStatus);

// Fungsi untuk memperbarui status tombol login
function updateLoginButtonStatus() {
  if (checkInputsFilled()) {
    loginButton.removeAttribute("disabled");
  } else {
    loginButton.setAttribute("disabled", "true");
  }
}

// Memanggil fungsi saat halaman dimuat untuk memastikan status tombol login diperbarui
updateLoginButtonStatus();
