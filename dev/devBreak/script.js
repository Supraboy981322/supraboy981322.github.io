function setFrame(which) {
    let url = document.getElementById(((which == "devEnvironment") ? "devEnvironmentURL" : "previewURL")).value;
      let frame = document.getElementById(((which == "devEnvironment") ? "devEnvironmentFrame" : "previewFrame"));
    frame.setAttribute("src", url);
console.log("preview loaded");
};

function refreshPreview() {
let preview = document.getElementById("previewFrame");
preview.src += '';
console.log("preview refreshed");
}