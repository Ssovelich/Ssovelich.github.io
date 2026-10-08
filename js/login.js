"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const loginModal = document.querySelector("#loginModal");
  const loginForm = document.querySelector("#loginForm");
  const closeModalBtn = document.querySelector("#closeModalBtn");
  const cancelBtn = document.querySelector("#cancelBtn");
  const authStatus = document.querySelector("#authStatus");
  const openLoginModalBtn = document.querySelector("#openLoginModalBtn");

  function checkAuthStatus() {
    const isRemembered = localStorage.getItem("isLoggedIn");
    const isSessionActive = sessionStorage.getItem("isLoggedIn");
    const username =
      localStorage.getItem("username") || sessionStorage.getItem("username");

    if (isRemembered === "true" || isSessionActive === "true") {
      authStatus.textContent = `Ви вже авторизовані як: ${username}`;
      authStatus.classList.add("success");
      loginForm.style.display = "none";
    } else {
      authStatus.textContent = "";
      authStatus.classList.remove("success");
      loginForm.style.display = "flex";
    }
  }

  function showModal() {
    checkAuthStatus();
    loginModal.classList.add("active");
  }

  function hideModal() {
    loginModal.classList.remove("active");
    if (loginForm) {
      loginForm.reset();
    }
  }

  if (openLoginModalBtn) {
    openLoginModalBtn.addEventListener("click", showModal);
  }

  closeModalBtn.addEventListener("click", hideModal);
  cancelBtn.addEventListener("click", hideModal);

  window.addEventListener("click", (event) => {
    if (event.target === loginModal) {
      hideModal();
    }
  });

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const loginValue = document.querySelector("#login").value.trim();
    const rememberMe = document.querySelector("#rememberMe").checked;

    if (rememberMe) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("username", loginValue);
    } else {
      sessionStorage.setItem("isLoggedIn", "true");
      sessionStorage.setItem("username", loginValue);
    }

    alert(`Ласкаво просимо, ${loginValue}!`);
    loginForm.reset();
    hideModal();
  });
});
