/* scriptSet 1 */

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
    window.setInterval(() => {
        faviconLoc.setAttribute("href", faviconDir + faviconNames[faviconTick] + faviconFileExtension);
        favicon++;
        if (favicon = faviconNames.length) {
            favicon = 0;
        };
    }, 200);
});



/* scriptSet 2 */





/* scriptSet 3 */

