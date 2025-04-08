function checkDarkMode() {
    let params = new URLSearchParams(document.location.search);
    let darkMode = params.get("d");
    if (darkMode != null || darkMode) {
      document.getElementById("style").setAttribute("href", "/styles/styleDark.css");
    }
  }
  addEventListener(window.onload, checkDarkMode());