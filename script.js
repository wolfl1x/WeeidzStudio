function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.getAttribute("data-theme") === "dark";
  const newTheme = isDark ? "light" : "dark";
  html.setAttribute("data-theme", newTheme);

  // Обновить логотип
  document.getElementById("logo").src =
    newTheme === "dark"
      ? "icons/black/logo.svg"
      : "icons/white/logo.svg";

  // Обновить иконку переключателя
  document.getElementById("theme-icon").src =
    newTheme === "dark"
      ? "icons/moon.svg"
      : "icons/sun.svg";

  // Обновить соц. иконки
  const icons = document.querySelectorAll(".theme-icon");
  icons.forEach(icon => {
    const name = icon.dataset.name;
    icon.src = `icons/${newTheme === "dark" ? "black" : "white"}/${name}.svg`;
  });

  // Обновить фон вручную
  const computed = getComputedStyle(document.documentElement);
  const bgImage = computed.getPropertyValue('--background-image').trim();
  document.body.style.backgroundImage = bgImage;
}
