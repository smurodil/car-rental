import cssClassModifiers from "./css-class-modifiers.js";
import loader from "./loader.js";
import {
  elThemeToggler,
  elBars,
  elCloseBtn,
  elSidebar,
  elThemeTogglerNav,
  elCompactCars,
  elSportsCars,
  elVans,
  elCompactNext,
  elCompactPrev,
  elSportsNext,
  elSportsPrev,
  elVansNext,
  elVansPrev,
  elCompactBtn,
  elCompactInfo,
  elSportsBtn,
  elSportsInfo,
  elVansBtn,
  elVansInfo,
  elViewBtn,
  elOverlay,
  elLoginBtn,
  elLogin,
  elLoginClose,
  elLoginBtnSidebar
} from "./html-elements.js";

window.onload = () => {
  const { timeout_1000 } = cssClassModifiers;
  const html = document.documentElement;
  html.dataset.theme = localStorage.getItem("theme") || "light";
  setTimeout(() => {
    loader();
  }, timeout_1000);
};

elThemeToggler.onclick = () => {
  const html = document.documentElement;
  const currentTheme = html.dataset.theme;
  html.dataset.theme = currentTheme === "dark" ? "light" : "dark";
  localStorage.setItem("theme", html.dataset.theme);
};

elThemeTogglerNav.onclick = () => {
  const html = document.documentElement;
  const currentTheme = html.dataset.theme;
  html.dataset.theme = currentTheme === "dark" ? "light" : "dark";
  localStorage.setItem("theme", html.dataset.theme);
};

elBars.onclick = () => {
  elSidebar.classList.add("active");
  elOverlay.classList.remove("hidden");
};

elCloseBtn.onclick = () => {
  elSidebar.classList.add("hidden");
  elSidebar.classList.remove("active");
  elOverlay.classList.add("hidden");
};

elOverlay.onclick = () => {
  elSidebar.classList.add("hidden");
  elSidebar.classList.remove("active");
  elOverlay.classList.add("hidden");
}


elCompactNext.onclick = () => {
    elCompactCars.classList.remove("active");
    elSportsCars.classList.remove("hidden");
    elCompactCars.classList.add("hidden")
}

elCompactPrev.onclick = () => {
    elCompactCars.classList.remove("active");
    elVans.classList.remove("hidden");
    elCompactCars.classList.add("hidden");
}

elSportsNext.onclick = () => {
    elSportsCars.classList.remove("active");
    elVans.classList.remove("hidden");
    elSportsCars.classList.add("hidden")
}

elSportsPrev.onclick = () => {
    elSportsCars.classList.remove("active");
    elVans.classList.remove("hidden");
    elSportsCars.classList.add("hidden");
}

elVansNext.onclick = () => {
    elVans.classList.remove("active");
    elCompactCars.classList.remove("hidden");
    elVans.classList.add("hidden");
}

elVansPrev.onclick = () => {
    elVans.classList.remove("active");
    elSportsCars.classList.remove("hidden");
    elVans.classList.add("hidden");
}

elCompactBtn.onclick = () => {
    elCompactInfo.classList.add("active");
    elSportsInfo.classList.remove("active");
    elSportsInfo.classList.add("hidden");
    elSportsBtn.classList.remove("cart-top-btn-selected");
    elCompactBtn.classList.add("cart-top-btn-selected");
    elVansInfo.classList.remove("active");
    elVansInfo.classList.add("hidden");
    elVansBtn.classList.remove("cart-top-btn-selected");
}

elSportsBtn.onclick = () => {
    elCompactInfo.classList.remove("active");
    elCompactInfo.classList.add("hidden");
    elCompactBtn.classList.remove("cart-top-btn-selected")
    elSportsBtn.classList.add("cart-top-btn-selected")
    elSportsInfo.classList.remove("hidden");
    elSportsInfo.classList.add("active");
    elVansInfo.classList.remove("active");
    elVansInfo.classList.add("hidden");
    elVansBtn.classList.remove("cart-top-btn-selected");
}

elVansBtn.onclick = () => {
    elVansInfo.classList.remove("hidden");
    elVansInfo.classList.add("active");
    elVansBtn.classList.add("cart-top-btn-selected");
    elCompactInfo.classList.remove("active");
    elCompactInfo.classList.add("hidden");
    elCompactBtn.classList.remove("cart-top-btn-selected");
    elSportsInfo.classList.remove("active");
    elSportsInfo.classList.add("hidden");
    elSportsBtn.classList.remove("cart-top-btn-selected");
}

elViewBtn.onclick = () => {
    elSportsInfo.classList.remove("hidden");
    elSportsInfo.classList.add("active");
    elVansInfo.classList.remove("hidden");
    elVansInfo.classList.add("active");
    elCompactInfo.classList.remove("hidden");
    elCompactInfo.classList.add("active");
    elCompactBtn.classList.remove("cart-top-btn-selected");
    elSportsBtn.classList.remove("cart-top-btn-selected");
    elVansBtn.classList.remove("cart-top-btn-selected");
}

elLoginBtn.onclick = () => {
  elLogin.classList.remove("hidden");
  elOverlay.classList.add("active");
}

elLoginClose.onclick = () => {
  elLogin.classList.add("hidden");
  elOverlay.classList.remove("active");
}

elLoginBtnSidebar.onclick = () => {
  elLogin.classList.remove("hidden");
  elOverlay.classList.add("active");
  elSidebar.classList.remove("active");
  elOverlay.classList.add("hidden");
}