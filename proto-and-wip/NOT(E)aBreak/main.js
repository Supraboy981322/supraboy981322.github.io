const titles = ["test", "test 2", "test 3"];

const urls = [
  "notes/test.nbreak",
  "notes/test-2.nbreak",
  "notes/test-3.nbreak",
];

const fileExtention = ".nbreak";

var notes = [titles, urls];

window.onload = init();

function init() {
  document.body.innerHTML =
    "<p>Function <span class='code'>Init()</span> began, but it's not done.<p>";
  loadLibrary();
}

function loadLibrary() {
  document.body.innerHTML =
    "<p>--Function <span class='code'>loadLibrary()</span> began, but it's not done.<p>";
  loadNote();
}

function loadNote() {
  document.body.innerHTML =
    "<p style='margin-top:calc(50vh - 1em);text-align:center;'>Function <code>loadNote()</code> began, but halted immediately.<p>";
  getFileContent("file:///media/fuse/drivefs-de9ccece94e8e375690ed4b87beb8466/root/VS%20Code/NOTaBreak/notes/test.nBreak");
}

async  function getFileContent(url) {
  //fetch('notes/test.nBreak')
  //.then(response => response.text()) 
  //.then(textString => {
  //    return(textString);
  //});
  const response = await fetch(url);
  const fileContent = await response.text();
  if (!response.ok) {
    //return `Response status: ${response.status}`;
  } else {
    document.body.innerHTML = fileContent
  }
}