//切换照片
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === './1.webp') {
      myImage.setAttribute('src', './2.webp');
    } else {
      myImage.setAttribute('src', './1.webp');
    }
}

//添加个性化欢迎信息
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('请输入你的名字。');
  localStorage.setItem('name', myName);
  myHeading.textContent = '尊贵的玛莎拉蒂车主，' + myName;
}

if(localStorage.getItem('name')){
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}

myButton.onclick = function() {
   setUserName();
}