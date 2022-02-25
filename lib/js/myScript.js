//以下ons-tabbarにうめこまれたons-navigatorのためのjs
document.addEventListener("init", (event) => {
  let PageEle = document.getElementById("onsNavi");

  if (event.target.id === "onsPage") {
    let onsButEle = document.getElementById("onsbutton");
    onsButEle.addEventListener("click", () => {
      PageEle.pushPage("page1.html");
    });
  } else if (event.target.id === "page1") {
    let butEle = document.getElementById("popButton");
    console.log(butEle);
    butEle.addEventListener("click", () => {
      PageEle.popPage();
    });
  }
});
