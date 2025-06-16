function applyDarkMode() {
    if (localStorage.getItem("darkMode") === "true") {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }
  
  function toggleDarkMode() {
    const isDark = document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", isDark);
  }
  
  function changeFont(fontName) {
    document.body.style.fontFamily = `'${fontName}', sans-serif`;
    localStorage.setItem("selectedFont", fontName);
  }
  
  function applyFont() {
    const savedFont = localStorage.getItem("selectedFont") || "Vazirmatn";
    document.body.style.fontFamily = `'${savedFont}', sans-serif`;
  
    const fontSelector = document.getElementById("font-selector");
    if (fontSelector) {
      fontSelector.value = savedFont;
    }
  }
  
  window.onload = function () {
    applyDarkMode();
    applyFont();
  };
  