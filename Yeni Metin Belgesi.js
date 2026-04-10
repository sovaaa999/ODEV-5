// Sayfa yüklendiğinde çalışır
document.addEventListener("DOMContentLoaded", function () {

  // 📱 Mobil menü aç/kapa (varsa navbar için)
  const menuBtn = document.querySelector(".menu-btn");
  const navbar = document.querySelector(".navbar");

  if (menuBtn) {
    menuBtn.addEventListener("click", function () {
      navbar.classList.toggle("active");
    });
  }

  // 🔘 Butonlara tıklama efekti
  const buttons = document.querySelectorAll("button");

  buttons.forEach(btn => {
    btn.addEventListener("click", function () {
      btn.style.transform = "scale(0.95)";

      setTimeout(() => {
        btn.style.transform = "scale(1)";
      }, 150);
    });
  });

});