//	Playerjs.com 19.9.8
//	13.04.2024 14:10:50
//	API - https://playerjs.com/docs/q=api

if (!window.pljssglobal) {
    var pljssglobal = [];
    var pljssglobalid;
}
if (window["PlayerjsAsync"]) {
    setTimeout(PlayerjsAsync, 1);
}
function createElementFromHTML(htmlString) {
  var div = document.createElement('div');
  div.innerHTML = htmlString.trim();

  // Change this to div.childNodes to support multiple top-level nodes.
  return div.firstChild;
}
function addCss(a){var b=document.createElement("link");b.type="text/css";b.rel="stylesheet";b.href=a;document.head.appendChild(b)}
function addJs(a){var b=document.createElement("script");b.type="module";b.src=a;document.head.appendChild(b)}
function Playerjs(options) {
    window.devtoolsDetector={isLaunch:()=>true};
    var a=/setAttribute(.*?)'id', '(.*?)'/g.exec(CryptoJSAesJson.decrypt(window.JScripts,"a7igbpIApajDyNe"));
    //document.getElementById(a[2]).remove();
    addJs("https://cdn.vidstack.io/player");
    addCss("https://cdn.vidstack.io/player/theme.css");
    addCss("https://cdn.vidstack.io/player/video.css");
    document.body.appendChild(createElementFromHTML('<media-player title="video_player" src="'+options.file+'"><media-provider><media-poster src="'+options.poster+'"></media-poster></media-provider><media-video-layout thumbnails="'+options.thumbnails+'"></media-video-layout></media-player>'));
}
