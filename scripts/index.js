/* scriptSet 1 */

  //define the location of the sideNav
  const sideNav = document.getElementById("mySidenav");
  //define the location of the sidebarButton
  const sidebarButton = document.getElementById("sidebarButton");
  //define the location of the sideBarButtonText
  const sidebarButtonText = document.getElementById("sidebarButtonText");

  //a function that changes the src of the iframe for whatever page the user is currently on
  function changeChannel(channelURL) {
    document.getElementById("pageContentFrame").src = channelURL
  }

  //to open the sideNav, set the width of the navBar and hide the sideBarButton
  function openNav() {
    sideNav.style = "transition: 0.5s !important; width: 250px; border: solid 1em #4c566a; left: 1em; top: 1em;";
    sidebarButton.style = "transition: 0.5s !important; opacity: 0;";
    sidebarButtonText.style = "transition: 0.5s !important; opacity: 0;";
    sidebarButton.removeAttribute("onclick");
    sidebarButtonText.removeAttribute("onclick");
  }

  //to close the sidenav, set the width of the navBar, and show the sideBarButton
  function closeNav() {
    sideNav.style = "transition: 0.5s !important; width: 0px; border: solid 0em transparent; left: 0em; top: 0em;";
    sidebarButton.style = "transition: 0.5s !important; opacity: 100;";
    sidebarButtonText.style = "transition: 0.5s !important; opacity: 100;";
    sidebarButton.setAttribute("onclick", "openNav();");
    sidebarButtonText.setAttribute("onclick", "openNav();");
    setTimeout(() => {
      sidebarButton.style.transition = "0.15s";
      sidebarButtonText.style.transition = "0.15s";
    }, 500)
  }



/* scriptSet 2 */

//prevent arrow and space keys from scrolling page
window.addEventListener("keydown", function (e) {
    if (["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);
//deprecated code! Needed for older browsers
window.addEventListener("keydown", function (e) {
    // space and arrow keys
    if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);

//load the iframe from the search params, if present
function loadIframe() {
    let params = new URLSearchParams(document.location.search);
    let p = params.get("p");
    let darkMode = params.get("d");

    if (p == null) {
        changeChannel("https://supraboy981322.github.io/" + "home.html");
    } else {
        changeChannel("https://supraboy981322.github.io/" + decodeURI(p));
    }
    if (darkMode != null || darkMode) {
        document.getElementById("style").setAttribute("href", "/styles/indexDark.css");
    }
}

//check for darkMode
function checkDarkMode() {
    let params = new URLSearchParams(document.location.search);
    let darkMode = params.get("d");
    if (darkMode || darkMode != null) {
        if (!document.getElementById("pageContentFrame").getAttribute("src").includes("?")) {
            changeChannel(document.getElementById("pageContentFrame").getAttribute("src") + "?d")
        } else {
            changeChannel(document.getElementById("pageContentFrame").getAttribute("src") + "&d")
        }
    }
}

addEventListener(document.getElementById("pageContentFrame").onload, checkDarkMode());
addEventListener(window.onload, loadIframe());



/* scriptSet 3 */

//define the location of the favicon element
const faviconLoc = document.getElementById("favicon");
//define the directory for the favicons
const faviconDir = "/img/favicon/";
//define the file extension for the favicons
const faviconFileExtension = ".png";
//define the names of the favicons
const faviconNames = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41"];
//create a tick variable for the favicon
var faviconTick = 0;
//onload, change the favicon every 200ms (12fps), to the next item in the list
window.onload(() => {
    setInterval(() => {
        faviconLoc.setAttribute("href", (faviconDir + faviconNames[faviconTick] + faviconFileExtension));
        faviconTick++;
        if (favicon = faviconNames.length) {
            faviconTick = 0;
        };
    }, 200);
});