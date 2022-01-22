var myButton = document.querySelector('button');
var myHeading = document.querySelector('h3');

function setUserName() {
    let myName = prompt('Please enter your name.'); //彈出對話框(輸出+輸入)
    //將myName設定為'Please enter your name.'的回覆
    if (!myName || myName === null) {
        alert('Error, retry.');
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        //localStorage 這個 API 可以先將一些資料儲存在瀏覽器裡，有需要再取出(將myName存入name)
        myHeading.innerHTML = 'welcome, ' + myName; //指定給標題的 innerHTML 特性
    }
}

if (!localStorage.getItem('name')) { //檢查 name 這個物件是否存在
    setUserName(); //如果沒有，那就執行 setUserName()
} else { //如果有（例如：使用者已在上次造訪網頁時就設定過），使用 getItem() 函式來取得儲存的名字
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'welcome, ' + storedName;
}

myButton.onclick = function () {
    setUserName();
}
//--------------------------------------------------
const list = document.createElement('ol'); //創造元素
const info = document.createElement('p');

info.textContent = '滑鼠點擊超連結，輸入新清單；點擊清單，則可更改清單。'; //將info設定為字串

document.body.appendChild(info); //在body呈現info
document.body.appendChild(list);

var element_a = document.querySelectorAll('a');

for (i = 0; i <= (element_a.length); i++) {
    element_a[i].onclick = function () { //當滑鼠點擊全部的a

        const listItem = document.createElement('li');
        const listContent = prompt('What content do you want the list item to have?'); //將listContent設定為對話框的回覆
        let storedName = localStorage.getItem('name');
        listItem.textContent = storedName + '：' + listContent; //將listItem設定為"storedName：listContent"
        list.appendChild(listItem); //呈現listItem(li)

        listItem.onclick = function (e) { //當滑鼠點擊listItem(li)
            e.stopPropagation();
            const listContent = prompt('Enter new content for your list item');
            this.textContent = '(已編輯)' + storedName + '：' + listContent; //將點擊的此物(this=listItem)設定為"(已編輯)storedName：listContent"
        }
    }
}