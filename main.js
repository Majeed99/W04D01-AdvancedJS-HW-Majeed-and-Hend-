//------------
async function request() {
  try {
    const response = await fetch(
      "https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699"
    );

    const json = await response.json();
    const items = json.items;
    console.log(items[0].volumeInfo.title);
    console.log(items[0].volumeInfo.description);
  } catch (err) {
    console.log("Here you got an error", err);
  }
}
request();
//--------------
let myTimeOut;
function run() {
  let sentence = document.createElement("h1");
  sentence.innerHTML = "The timeout has been started";
  let show = document.getElementById("show");
  show.innerHTML = "";
  show.appendChild(sentence);
  myTimeOut = setTimeout(() => {
    let sentence2 = document.createElement("h1");
    sentence2.innerHTML = "The timeout has been triggered!";
    sentence2.style.color = "green";
    let show = document.getElementById("show");
    show.innerHTML = "";
    show.appendChild(sentence2);
  }, 3000);
}
function stop() {
  clearTimeout(myTimeOut);
  let sentence3 = document.createElement("h1");
  sentence3.innerHTML = "The timeout has been cleared";
  let show = document.getElementById("show");
  show.innerHTML = "";
  show.appendChild(sentence3);
}
