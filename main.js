
let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "https://p1.ssl.qhmsg.com/t017cdf871ee3540551.jpg") {
    myImage.setAttribute("src", "https://tse4-mm.cn.bing.net/th/id/OIP-C.CzTx8zt6jOSFB5tNX-r0kQHaHa?w=171&h=180&c=7&r=0&o=5&dpr=2&pid=1.7");
    
  } else {
    myImage.setAttribute("src", "https://p1.ssl.qhmsg.com/t017cdf871ee3540551.jpg");
  }
};


//创建按钮
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  let myName = prompt("请输入你的名字");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = "你好，" + myName;
  }
}
//按钮点击事件
myButton.onclick = function () {
  setUserName();
};

