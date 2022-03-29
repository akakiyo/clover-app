let eventEles,
  balTrEles,
  balLeftEles,
  balRightEles,
  table,
  momtable,
  upEventObje, //reload.jsで更新される
  detailLists, //SelectPage()
  balButClass,
  fav_balTrEles,
  fav_EventEles, //9月18日追加（後で消してください）
  fav_balLeftEles, //９月１８日追加　お気に入り部分の「詳細」ボタン
  fav_balRightEles, //９月１８日追加　お気に入り部分の「お気に入り」ボタン
  allEles, //html上のすべての要素を取得します　この値は生きているため、変更があったとしても再度読み込む必要はありません（おそらく。もし違ったら修正お願いします）
  str, //表示する文字の配列
  balStr,
  check, //お気に入りしているか、していないかの判断。1はお気に入り済み。０は未登録.
  balButFlag, //配列要素１[true:吹き出しボタンが出ている　false:吹き出しボタンは出ていない] 配列要素２[吹き出しの出ているページ数]
  tagEle;

/**お気に入りから削除する関数です
 *
 * @param {Int} num ページ番号
 */
const hide = (num) => {
  document.querySelector("#t" + num.toString()).innerHTML = "";
  momtable[num.toString()].setAttribute("border", "0");
};
/**任意の属性を持ったタグを作ります
 *
 * @param {String} tag 作りたいタグ
 * @param  {...String} atr 属性,属性値
 * @returns {HTMLElement} tagEle
 */
const creEle = (tag, ...atr) => {
  tagEle = document.createElement(tag);
  if (atr.length % 2 === 0) {
    for (let i = 0; i < atr.length; i += 2) {
      tagEle.setAttribute(atr[i], atr[i + 1]);
    }
    return tagEle;
  } else {
  }
};
/**詳細ページを開く関数です
 *
 * @param {Int} pageNum -1ならすべてのstyle.displayをnoneに。
 */

const SelectPage = (pageNum) => {
  if (pageNum != -1) {
    detailLists[pageNum].style.display = "block";
  } else {
    detailLists.forEach((currentValue) => {
      currentValue.style.display = "none";
    });
  }
};
/**画面上に吹き出しがあるとき、それを消す関数です
 *
 */
const hideEle = () => {
  if (balButFlag) {
    //下のfor文はすべての吹き出しを非表示にする
    for (let i = 0; i < balButClass.length; i++) {
      //getElementByClassNameが生きていることを利用したつもり
      balButClass[i].style.display = "none"; //class指定だと優先度的に不安だが現状うまく行ってるのでそのまま。
    }

    //画面に吹き出しボタンがなくなるので値を修正するとともに画面全体に対するeventListenerを削除
    balButFlag = false;
    allEles.removeEventListener("click", hideEle, true);
  }
};

//以下動作
document.addEventListener("init", (event) => {
  if (event.target.id === "Tab2") {
    console.log("タイムテーブルのところです");
    eventEles = document.querySelectorAll("[id^=js-event]");
    balTrEles = document.querySelectorAll("[id^=js-balButTr]");
    balLeftEles = document.querySelectorAll("[id^=js-balButLeft]");
    balRightEles = document.querySelectorAll("[id^=js-balButRight]");
    table = document.querySelectorAll("[id^=line]");
    momtable = document.querySelectorAll("[id^=t]");
    upEventObje = document.querySelectorAll("[id^=js-upevent]"); //reload.jsで更新される
    detailLists = document.querySelectorAll("[id^=details]"); //SelectPage()
    balButClass = document.getElementsByClassName("balButTr");
    fav_balTrEles = document.querySelectorAll("[id^=fav-js-balButTr]");
    fav_EventEles = document.querySelectorAll("[id^=fav-js-event]"); //9月18日追加（後で消してください）
    fav_balLeftEles = document.querySelectorAll("[id^=fav-js-balButLeft]"); //９月１８日追加　お気に入り部分の「詳細」ボタン
    fav_balRightEles = document.querySelectorAll("[id^=fav-js-balButRight]"); //９月１８日追加　お気に入り部分の「お気に入り」ボタン
    allEles = document.documentElement; //html上のすべての要素を取得します　この値は生きているため、変更があったとしても再度読み込む必要はありません（おそらく。もし違ったら修正お願いします）
    str = []; //表示する文字の配列
    balStr = [];
    check = []; //お気に入りしているか、していないかの判断。1はお気に入り済み。０は未登録.
    balButFlag = false; //配列要素１[true:吹き出しボタンが出ている　false:吹き出しボタンは出ていない] 配列要素２[吹き出しの出ているページ数]
    tagEle;

    for (let i = 0; i < eventEles.length; i++) {
      check[i] = 0;
    }

    for (let i = 0; i < balTrEles.length; i++) {
      balStr[i] = balTrEles[i].innerHTML;
    }
    //吹き出しボタンの表示を消します
    balTrEles.forEach((ele) => {
      ele.style.display = "none";
    });
    //追加　お気に入り部分の吹き出しを消します
    fav_balTrEles.forEach((fav_ele) => {
      fav_ele.style.display = "none";
    });
    eventEles.forEach((eventEle, pageNum) => {
      //イベント部分が押されると吹き出しボタンを出現させる
      eventEle.addEventListener("click", () => {
        balTrEles[pageNum].style.display = "";
        //吹き出しが画面に1つしか表示されず、かつほかの場所を触っても吹き出しボタンを消せるように
        balButFlag = true;
        allEles.addEventListener("click", hideEle, true); //hideEle()とすると実行されてそれで終わりになるからつけちゃダメ（callback関数として登録されない？）
      });

      //「詳細」を押した際のイベント
      balLeftEles[pageNum].addEventListener("click", (event) => {
        event.stopPropagation();
        SelectPage(pageNum);
      });

      //「お気に入り」を押した際のイベント
      balRightEles[pageNum].addEventListener("click", (event) => {
        event.stopPropagation();

        if (check[pageNum] === 0) {
          fav_EventEles[pageNum].style.display = "";
          check[pageNum] = 1;
          balRightEles[pageNum].textContent = "お気に入りから削除";
          balRightEles[pageNum].style.width = "150px";
          eventEles[pageNum].style.backgroundColor = "#FFFF00";
          localStorage.setItem("num" + pageNum.toString(), pageNum);
        } else {
          check[pageNum] = 0;
          balRightEles[pageNum].textContent = "お気に入り";
          balRightEles[pageNum].style.width = "100px";
          eventEles[pageNum].style.backgroundColor = "#ffffff";
          fav_EventEles[pageNum].style.display = "none";
          localStorage.setItem("num" + pageNum.toString(), -1);
        }
      });
    });

    //変更点
    if (localStorage.length != 0) {
      for (let i = 0; i <= 51; i++) {
        if (localStorage.getItem("num" + i.toString()) != -1) {
          fav_EventEles[i].style.display = "";
          check[i] = 1;
          balRightEles[i].textContent = "お気に入りから削除";
          balRightEles[i].style.width = "150px";
          eventEles[i].style.backgroundColor = "#FFFF00";
        }
      }
    } else if (localStorage.length === 0) {
      for (let i = 0; i <= 51; i++) {
        localStorage.setItem("num" + i.toString(), -1);
      }
    }

    fav_EventEles[3].style.display = "block";
    //お気に入りの要素を画面から消し,調整
    fav_EventEles.forEach((FavEventElesSub, favNumSub) => {
      FavEventElesSub.style.display = "none";
    });
    fav_balRightEles.forEach((favEle) => {
      favEle.textContent = "お気に入りから削除";
      favEle.style.width = "150px";
    });
    fav_balTrEles.forEach((favBalEle) => {
      favBalEle.style.zIndex = 100000;
    });
    fav_EventEles.forEach((FavEventEles, favNum) => {
      FavEventEles.addEventListener("click", () => {
        fav_balTrEles[favNum].style.display = "";
        balButFlag = true;
        allEles.addEventListener("click", hideEle, true);
      });

      //「詳細」を押した際のイベント
      fav_balLeftEles[favNum].addEventListener("click", (event) => {
        event.stopPropagation();
        SelectPage(favNum);
      });

      //「お気に入り」を押した際のイベント
      fav_balRightEles[favNum].addEventListener("click", (event) => {
        event.stopPropagation();
        FavEventEles.style.display = "none";
        check[favNum] = 0; //これは吹き出しが出ているかどうかのフラグなので変更しておきます
        balRightEles[favNum].textContent = "お気に入り"; //メインテーブルのほうを修正します。以下も同じ
        balRightEles[favNum].style.width = "100px";
        eventEles[favNum].style.backgroundColor = "#ffffff";
        localStorage.setItem("num" + favNum.toString(), -1);
      });
    });
  }

  for (let i = 0; i <= 51; i++) {
    var favOrNot = localStorage.getItem("num" + i.toString());
    if (favOrNot > -1) {
      fav_EventEles[favOrNot].style.display = "block";
    }
  }
});
