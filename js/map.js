let mainStage;

document.addEventListener("init", (event) => {
  if (event.target.id === "page-top") {
    //1~12
    document.getElementById("shop1to12").addEventListener("click", function () {
      document.getElementById("shop_inf1to12").style.display = "block";
      document.getElementById("close1to12").style.display = "block";
    });
    document
      .getElementById("close1to12")
      .addEventListener("click", function () {
        document.getElementById("shop_inf1to12").style.display = "none";
        document.getElementById("close1to12").style.display = "none";
      });
    //13~25
    let shop13to25 = document.getElementById("shop13to25");
    shop13to25.addEventListener("click", function () {
      document.getElementById("shop_inf13to25").style.display = "block";
      document.getElementById("close13to25").style.display = "block";
    });
    let close13to25 = document.getElementById("close13to25");
    close13to25.addEventListener("click", function () {
      document.getElementById("shop_inf13to25").style.display = "none";
      close13to25.style.display = "none";
    });
    //26~41
    let shop26to41 = document.getElementById("shop26to41");
    shop26to41.addEventListener("click", function () {
      document.getElementById("shop_inf26to41").style.display = "block";
      document.getElementById("close26to41").style.display = "block";
    });
    let close26to41 = document.getElementById("close26to41");
    close26to41.addEventListener("click", function () {
      document.getElementById("shop_inf26to41").style.display = "none";
      close26to41.style.display = "none";
    });
    //42~55
    let shop42to55 = document.getElementById("shop42to55");
    shop42to55.addEventListener("click", function () {
      document.getElementById("shop_inf42to55").style.display = "block";
      document.getElementById("close42to55").style.display = "block";
    });
    let close42to55 = document.getElementById("close42to55");
    close42to55.addEventListener("click", function () {
      document.getElementById("shop_inf42to55").style.display = "none";
      close42to55.style.display = "none";
    });
    //56~68
    let shop56to68 = document.getElementById("shop56to68");
    shop56to68.addEventListener("click", function () {
      document.getElementById("shop_inf56to68").style.display = "block";
      document.getElementById("close56to68").style.display = "block";
    });
    let close56to68 = document.getElementById("close56to68");
    close56to68.addEventListener("click", function () {
      document.getElementById("shop_inf56to68").style.display = "none";
      close56to68.style.display = "none";
    });
    //69~72
    let shop69to72 = document.getElementById("shop69to72");
    shop69to72.addEventListener("click", function () {
      document.getElementById("shop_inf69to72").style.display = "block";
      document.getElementById("close69to72").style.display = "block";
    });
    let close69to72 = document.getElementById("close69to72");
    close69to72.addEventListener("click", function () {
      document.getElementById("shop_inf69to72").style.display = "none";
      close69to72.style.display = "none";
    });
    //お食事処
    let nichiryo = document.getElementById("nichiryo");
    nichiryo.addEventListener("click", function () {
      document.getElementById("shop_inf80to87").style.display = "block";
      document.getElementById("close80to87").style.display = "block";
    });
    let close80to87 = document.getElementById("close80to87");
    close80to87.addEventListener("click", function () {
      document.getElementById("shop_inf80to87").style.display = "none";
      close80to87.style.display = "none";
    });
    // //メニュー開閉ボタン
    /*
      this.getElementById("mogi_menu").addEventListener("click", function(){
      fn.open();
      });
      */

    //じゃがバター
    let jaga = document.getElementById("jagaButton");
    jaga.addEventListener("click", function () {
      document.getElementById("jaga").style.display = "block";
      document.getElementById("closeJaga").style.display = "block";
    });
    let closeJaga = document.getElementById("closeJaga");
    closeJaga.addEventListener("click", function () {
      document.getElementById("jaga").style.display = "none";
      closeJaga.style.display = "none";
    });
    //ポテト
    let potato = document.getElementById("potatoButton");
    potato.addEventListener("click", function () {
      document.getElementById("potato").style.display = "block";
      document.getElementById("closePotato").style.display = "block";
    });
    let closePotato = document.getElementById("closePotato");
    closePotato.addEventListener("click", function () {
      document.getElementById("potato").style.display = "none";
      closePotato.style.display = "none";
    });
    //焼きそば
    let yakisoba = document.getElementById("yakisobaButton");
    yakisoba.addEventListener("click", function () {
      document.getElementById("yakisoba").style.display = "block";
      document.getElementById("closeYakisoba").style.display = "block";
    });
    let closeYakisoba = document.getElementById("closeYakisoba");
    closeYakisoba.addEventListener("click", function () {
      document.getElementById("yakisoba").style.display = "none";
      closeYakisoba.style.display = "none";
    });
    //たません・たこせん
    let tamasen = document.getElementById("tamasenButton");
    tamasen.addEventListener("click", function () {
      document.getElementById("tamasen").style.display = "block";
      document.getElementById("closeTamasen").style.display = "block";
    });
    let closeTamasen = document.getElementById("closeTamasen");
    closeTamasen.addEventListener("click", function () {
      document.getElementById("tamasen").style.display = "none";
      closeTamasen.style.display = "none";
    });
    //はしまき
    let hashimaki = document.getElementById("hashimakiButton");
    hashimaki.addEventListener("click", function () {
      document.getElementById("hashimaki").style.display = "block";
      document.getElementById("closeHashimaki").style.display = "block";
    });
    let closeHashimaki = document.getElementById("closeHashimaki");
    closeHashimaki.addEventListener("click", function () {
      document.getElementById("hashimaki").style.display = "none";
      closeHashimaki.style.display = "none";
    });
    //揚げ物
    let agemono = document.getElementById("agemonoButton");
    agemono.addEventListener("click", function () {
      document.getElementById("agemono").style.display = "block";
      document.getElementById("closeAgemono").style.display = "block";
    });
    let closeAgemono = document.getElementById("closeAgemono");
    closeAgemono.addEventListener("click", function () {
      document.getElementById("agemono").style.display = "none";
      closeAgemono.style.display = "none";
    });
    //うどん
    let udon = document.getElementById("udonButton");
    udon.addEventListener("click", function () {
      document.getElementById("udon").style.display = "block";
      document.getElementById("closeUdon").style.display = "block";
    });
    let closeUdon = document.getElementById("closeUdon");
    closeUdon.addEventListener("click", function () {
      document.getElementById("udon").style.display = "none";
      closeUdon.style.display = "none";
    });
    //カレー
    let kare = document.getElementById("kareButton");
    kare.addEventListener("click", function () {
      document.getElementById("kare").style.display = "block";
      document.getElementById("closeKare").style.display = "block";
    });
    let closeKare = document.getElementById("closeKare");
    closeKare.addEventListener("click", function () {
      document.getElementById("kare").style.display = "none";
      closeKare.style.display = "none";
    });
    //豚汁
    let tonjiru = document.getElementById("tonjiruButton");
    tonjiru.addEventListener("click", function () {
      document.getElementById("tonjiru").style.display = "block";
      document.getElementById("closeTonjiru").style.display = "block";
    });
    let closeTonjiru = document.getElementById("closeTonjiru");
    closeTonjiru.addEventListener("click", function () {
      document.getElementById("tonjiru").style.display = "none";
      closeTonjiru.style.display = "none";
    });
    //世界の料理
    let sekair = document.getElementById("sekairButton");
    sekair.addEventListener("click", function () {
      document.getElementById("sekair").style.display = "block";
      document.getElementById("closeSekair").style.display = "block";
    });
    let closeSekair = document.getElementById("closeSekair");
    closeSekair.addEventListener("click", function () {
      document.getElementById("sekair").style.display = "none";
      closeSekair.style.display = "none";
    });
    //ソフトドリンク
    let softdrink = document.getElementById("softdrinkButton");
    softdrink.addEventListener("click", function () {
      document.getElementById("softdrink").style.display = "block";
      document.getElementById("closeSoftdrink").style.display = "block";
    });
    let closeSoftdrink = document.getElementById("closeSoftdrink");
    closeSoftdrink.addEventListener("click", function () {
      document.getElementById("softdrink").style.display = "none";
      closeSoftdrink.style.display = "none";
    });
    //タピオカ
    let tapioka = document.getElementById("tapiokaButton");
    tapioka.addEventListener("click", function () {
      document.getElementById("tapioka").style.display = "block";
      document.getElementById("closeTapioka").style.display = "block";
    });
    let closeTapioka = document.getElementById("closeTapioka");
    closeTapioka.addEventListener("click", function () {
      document.getElementById("tapioka").style.display = "none";
      closeTapioka.style.display = "none";
    });
    //ポップコーン
    let popcorn = document.getElementById("popcornButton");
    popcorn.addEventListener("click", function () {
      document.getElementById("popcorn").style.display = "block";
      document.getElementById("closePopcorn").style.display = "block";
    });
    let closePopcorn = document.getElementById("closePopcorn");
    closePopcorn.addEventListener("click", function () {
      document.getElementById("popcorn").style.display = "none";
      closePopcorn.style.display = "none";
    });
    //シューアイス
    let shuice = document.getElementById("shuiceButton");
    shuice.addEventListener("click", function () {
      document.getElementById("shuice").style.display = "block";
      document.getElementById("closeShuice").style.display = "block";
    });
    let closeShuice = document.getElementById("closeShuice");
    closeShuice.addEventListener("click", function () {
      document.getElementById("shuice").style.display = "none";
      closeShuice.style.display = "none";
    });
    //ベビーカステラ
    let babykasu = document.getElementById("babykasuButton");
    babykasu.addEventListener("click", function () {
      document.getElementById("babykasu").style.display = "block";
      document.getElementById("closeBabykasu").style.display = "block";
    });
    let closeBabykasu = document.getElementById("closeBabykasu");
    closeBabykasu.addEventListener("click", function () {
      document.getElementById("babykasu").style.display = "none";
      closeBabykasu.style.display = "none";
    });
    //フレンチトースト
    document
      .getElementById("frenchButton")
      .addEventListener("click", function () {
        document.getElementById("french").style.display = "block";
        document.getElementById("closeFrench").style.display = "block";
      });
    document
      .getElementById("closeFrench")
      .addEventListener("click", function () {
        document.getElementById("french").style.display = "none";
        document.getElementById("closeFrench").style.display = "none";
      });
    //チュロス
    let chrosu = document.getElementById("chrosuButton");
    chrosu.addEventListener("click", function () {
      document.getElementById("chrosu").style.display = "block";
      document.getElementById("closeChrosu").style.display = "block";
    });
    let closeChrosu = document.getElementById("closeChrosu");
    closeChrosu.addEventListener("click", function () {
      document.getElementById("chrosu").style.display = "none";
      closeChrosu.style.display = "none";
    });
    //綿菓子
    let watagashi = document.getElementById("watagashiButton");
    watagashi.addEventListener("click", function () {
      document.getElementById("watagashi").style.display = "block";
      document.getElementById("closeWatagashi").style.display = "block";
    });
    let closeWatagashi = document.getElementById("closeWatagashi");
    closeWatagashi.addEventListener("click", function () {
      document.getElementById("watagashi").style.display = "none";
      closeWatagashi.style.display = "none";
    });
    //サーターアンダギー
    let sata = document.getElementById("sataButton");
    sata.addEventListener("click", function () {
      document.getElementById("sata").style.display = "block";
      document.getElementById("closeSata").style.display = "block";
    });
    let closeSata = document.getElementById("closeSata");
    closeSata.addEventListener("click", function () {
      document.getElementById("sata").style.display = "none";
      closeSata.style.display = "none";
    });
    //大学芋
    let daigaku = document.getElementById("daigakuButton");
    daigaku.addEventListener("click", function () {
      document.getElementById("daigaku").style.display = "block";
      document.getElementById("closeDaigaku").style.display = "block";
    });
    let closeDaigaku = document.getElementById("closeDaigaku");
    closeDaigaku.addEventListener("click", function () {
      document.getElementById("daigaku").style.display = "none";
      closeDaigaku.style.display = "none";
    });
    //世界のお菓子
    let sekaio = document.getElementById("sekaioButton");
    sekaio.addEventListener("click", function () {
      document.getElementById("sekaio").style.display = "block";
      document.getElementById("closeSekaio").style.display = "block";
    });
    let closeSekaio = document.getElementById("closeSekaio");
    closeSekaio.addEventListener("click", function () {
      document.getElementById("sekaio").style.display = "none";
      closeSekaio.style.display = "none";
    });
    //ヨーヨー釣り
    let yoyo = document.getElementById("yoyoButton");
    yoyo.addEventListener("click", function () {
      document.getElementById("yoyo").style.display = "block";
      document.getElementById("closeYoyo").style.display = "block";
    });
    let closeYoyo = document.getElementById("closeYoyo");
    closeYoyo.addEventListener("click", function () {
      document.getElementById("yoyo").style.display = "none";
      closeYoyo.style.display = "none";
    });
    //マッサージ
    let massage = document.getElementById("massageButton");
    massage.addEventListener("click", function () {
      document.getElementById("massage").style.display = "block";
      document.getElementById("closeMassage").style.display = "block";
    });
    let closeMassage = document.getElementById("closeMassage");
    closeMassage.addEventListener("click", function () {
      document.getElementById("massage").style.display = "none";
      closeMassage.style.display = "none";
    });
    //占い
    let uranai = document.getElementById("uranaiButton");
    uranai.addEventListener("click", function () {
      document.getElementById("uranai").style.display = "block";
      document.getElementById("closeUranai").style.display = "block";
    });
    let closeUranai = document.getElementById("closeUranai");
    closeUranai.addEventListener("click", function () {
      document.getElementById("uranai").style.display = "none";
      closeUranai.style.display = "none";
    });
    //ゲーム
    let game = document.getElementById("gameButton");
    game.addEventListener("click", function () {
      document.getElementById("game").style.display = "block";
      document.getElementById("closeGame").style.display = "block";
    });
    let closeGame = document.getElementById("closeGame");
    closeGame.addEventListener("click", function () {
      document.getElementById("game").style.display = "none";
      closeGame.style.display = "none";
    });
    //雑貨
    let zakka = document.getElementById("zakkaButton");
    zakka.addEventListener("click", function () {
      document.getElementById("zakka").style.display = "block";
      document.getElementById("closeZakka").style.display = "block";
    });
    let closeZakka = document.getElementById("closeZakka");
    closeZakka.addEventListener("click", function () {
      document.getElementById("zakka").style.display = "none";
      closeZakka.style.display = "none";
    });
    //アクセサリー
    let acce = document.getElementById("acceButton");
    acce.addEventListener("click", function () {
      document.getElementById("acce").style.display = "block";
      document.getElementById("closeAcce").style.display = "block";
    });
    let closeAcce = document.getElementById("closeAcce");
    closeAcce.addEventListener("click", function () {
      document.getElementById("acce").style.display = "none";
      closeAcce.style.display = "none";
    });
    //布小物
    let nuno = document.getElementById("nunoButton");
    nuno.addEventListener("click", function () {
      document.getElementById("nuno").style.display = "block";
      document.getElementById("closeNuno").style.display = "block";
    });
    let closeNuno = document.getElementById("closeNuno");
    closeNuno.addEventListener("click", function () {
      document.getElementById("nuno").style.display = "none";
      closeNuno.style.display = "none";
    });
    //フラワー
    let flower = document.getElementById("flowerButton");
    flower.addEventListener("click", function () {
      document.getElementById("flower").style.display = "block";
      document.getElementById("closeFlower").style.display = "block";
    });
    let closeFlower = document.getElementById("closeFlower");
    closeFlower.addEventListener("click", function () {
      document.getElementById("flower").style.display = "none";
      closeFlower.style.display = "none";
    });
    //デイヴィスcafe
    let davis = document.getElementById("davisButton");
    davis.addEventListener("click", function () {
      document.getElementById("davis").style.display = "block";
      document.getElementById("closeDavis").style.display = "block";
    });
    let closeDavis = document.getElementById("closeDavis");
    closeDavis.addEventListener("click", function () {
      document.getElementById("davis").style.display = "none";
      closeDavis.style.display = "none";
    });
    //紫苑館
    let shion = document.getElementById("shionButton");
    shion.addEventListener("click", function () {
      document.getElementById("shionMenu").style.display = "block";
      document.getElementById("closeShion").style.display = "block";
    });
    let closeShion = document.getElementById("closeShion");
    closeShion.addEventListener("click", function () {
      document.getElementById("shionMenu").style.display = "none";
      closeShion.style.display = "none";
    });
    //専門店街
    let senmon = document.getElementById("senmonButton");
    senmon.addEventListener("click", function () {
      document.getElementById("senmon").style.display = "block";
      document.getElementById("closeSenmon").style.display = "block";
    });
    let closeSenmon = document.getElementById("closeSenmon");
    closeSenmon.addEventListener("click", function () {
      document.getElementById("senmon").style.display = "none";
      closeSenmon.style.display = "none";
    });
    //ラッテ
    let ratte = document.getElementById("ratteButton");
    ratte.addEventListener("click", function () {
      document.getElementById("ratte").style.display = "block";
      document.getElementById("closeRatte").style.display = "block";
    });
    let closeRatte = document.getElementById("closeRatte");
    closeRatte.addEventListener("click", function () {
      document.getElementById("ratte").style.display = "none";
      closeRatte.style.display = "none";
    });
    //日糧館
    document
      .getElementById("nichiryoButton")
      .addEventListener("click", function () {
        document.getElementById("nichiryoMenu").style.display = "block";
        document.getElementById("closeNichiryo").style.display = "block";
      });
    document
      .getElementById("closeNichiryo")
      .addEventListener("click", function () {
        document.getElementById("nichiryoMenu").style.display = "none";
        document.getElementById("closeNichiryo").style.display = "none";
      });
    //購買
    let koubai = document.getElementById("koubaiButton");
    koubai.addEventListener("click", function () {
      document.getElementById("koubai").style.display = "block";
      document.getElementById("closeKoubai").style.display = "block";
    });
    let closeKoubai = document.getElementById("closeKoubai");
    closeKoubai.addEventListener("click", function () {
      document.getElementById("koubai").style.display = "none";
      closeKoubai.style.display = "none";
    });
    //ジョアミ
    let johermi = document.getElementById("johermiButton");
    johermi.addEventListener("click", function () {
      document.getElementById("johermi").style.display = "block";
      document.getElementById("closeJohermi").style.display = "block";
    });
    let closeJohermi = document.getElementById("closeJohermi");
    closeJohermi.addEventListener("click", function () {
      document.getElementById("johermi").style.display = "none";
      closeJohermi.style.display = "none";
    });
    //ファミマ
    let famima = document.getElementById("famimaButton");
    famima.addEventListener("click", function () {
      document.getElementById("famima").style.display = "block";
      document.getElementById("closeFamima").style.display = "block";
    });
    let closeFamima = document.getElementById("closeFamima");
    closeFamima.addEventListener("click", function () {
      document.getElementById("famima").style.display = "none";
      closeFamima.style.display = "none";
    });

    changeMainStage();
    changeMemoStage();
  }
});

//メニュー機能の開閉
window.fn = {};

window.fn.open = function () {
  let menu = document.getElementById("menu");
  menu.open();
};
window.fn.load = function (page) {
  let content = document.getElementById("content");
  let menu = document.getElementById("menu");
  content.load(page).then(menu.close.bind(menu));
};

//MainStage
function mainStage() {
  document.getElementById("mainStage_inf").style.display = "block";
  document.getElementById("closeMain").style.display = "block";
}
function closeMain() {
  document.getElementById("mainStage_inf").style.display = "none";
  document.getElementById("closeMain").style.display = "none";
}
//MemorialStage
function memoStage() {
  document.getElementById("memoStage_inf").style.display = "block";
  document.getElementById("closeMemo").style.display = "block";
}
function closeMemo() {
  document.getElementById("memoStage_inf").style.display = "none";
  document.getElementById("closeMemo").style.display = "none";
}

//メインステージ時間帯別表示
function changeMainStage() {
  let now_date = new Date().getDate();
  let now_hour = new Date().getHours();
  let now_minute = new Date().getMinutes();
  let mainTitle = document.getElementById("mainTitle");
  let mainSentence = document.getElementById("mainSentence");

  switch (now_date) {
    //メインステージ1日目
    case 2:
      switch (now_hour) {
        case 12:
          if (now_minute >= 30 && now_minute < 45) {
            mainTitle.innerHTML = "オープニング";
            mainSentence.innerHTML =
              "Dive into Clover!!というテーマのようにクローバー祭に夢中になって楽しんでください!ステージには素敵なアーティストさんが勢揃い!そして、今年もあのヒーロー達がクローバー祭に駆けつけてくれる?!皆さん、一緒に盛り上がりましょう!";
          } else if (now_minute >= 45) {
            mainTitle.innerHTML = "田辺幼稚園・大住幼稚園";
            mainSentence.innerHTML = "情報なし";
          }
          break;
        case 13:
          if (now_minute < 15) {
            mainTitle.innerHTML = "田辺幼稚園・大住幼稚園";
            mainSentence.innerHTML = "情報なし";
          } else if (now_minute >= 15 && now_minute < 35) {
            mainTitle.innerHTML = "同志社女子大学ダンス部 AmistaD^2";
            mainSentence.innerHTML =
              "今日のためにみなさんを楽しませるダンスを準備してきました！是非見に来てください！";
          } else if (now_minute >= 35 && now_minute < 55) {
            mainTitle.innerHTML = "同志社モダンジャズバレエサークル";
            mainSentence.innerHTML =
              "部員で選曲、振り付けを行い年に１回の自主公演に向けて楽しく練習しています！！";
          } else if (now_minute >= 55) {
            mainTitle.innerHTML = "タップダンスサークル ShimSham";
            mainSentence.innerHTML =
              "いったいどうやって鳴らしているのか！？不思議なタップダンスをご覧下さい！";
          }
          break;
        case 14:
          if (now_minute < 15) {
            mainTitle.innerHTML = "タップダンスサークル ShimSham";
            mainSentence.innerHTML =
              "いったいどうやって鳴らしているのか！？不思議なタップダンスをご覧下さい！";
          } else if (now_minute >= 15 && now_minute < 40) {
            mainTitle.innerHTML = "同志社室内楽団";
            mainSentence.innerHTML =
              "少人数編成で、馴染みのある曲を楽しく演奏します！是非お越しください！";
          } else if (now_minute >= 40) {
            mainTitle.innerHTML = "同志社大學應援團";
            mainSentence.innerHTML =
              "全同志社人を応援する為に、指導部、チアリーダー部、吹奏学部で活動しております。";
          }
          break;
        case 15:
          if (now_minute < 20) {
            mainTitle.innerHTML = "アカペラサークル One Voices";
            mainSentence.innerHTML =
              '私たちOne Voicesは、自分たちの声だけを使って音楽を奏でる"アカペラ"を楽しむサークルです。';
          } else if (now_minute >= 25 && now_minute < 50) {
            mainTitle.innerHTML = "HOY-SMITH";
            mainSentence.innerHTML =
              "新体制にして集大成。<br>ラストライブも歌って踊って、打ち上げで会いましょう。";
          } else if (now_minute >= 50) {
            mainTitle.innerHTML = "カサヴェ";
            mainSentence.innerHTML =
              "昨年一番練習した曲でミスった津田をクビにしたのでもうミスりません。皆来てください。";
          }
          break;
        case 16:
          if (now_minute < 15) {
            mainTitle.innerHTML = "カサヴェ";
            mainSentence.innerHTML =
              "昨年一番練習した曲でミスった津田をクビにしたのでもうミスりません。皆来てください。";
          } else if (now_minute >= 15 && now_minute < 35) {
            mainTitle.innerHTML = "LAPH ROI GLENN";
            mainSentence.innerHTML =
              "日々の悩みは音楽で発散！<br>笑い、泣き、声を出して一緒に楽しみましょう！";
          } else if (now_minute >= 35) {
            mainTitle.innerHTML = "フォーク・アライブ・クラブ（F.A.C）";
            mainSentence.innerHTML =
              "私たちFACは幅広いジャンルの音楽をコピーしています。是非見に来てください！";
          }
          break;
        case 18:
          mainTitle.innerHTML = "フレンズ";
          mainSentence.innerHTML =
            '2015年に結成された男女５人組バンドの「フレンズ」。都会的なライフスタイル、友情や愛情を、オフビートな独特のユーモアでコメディに仕立て上げている"神泉系"バンド。リズミカルなシティポップに深みのある歌詞で顧客を魅了！今年のクローバー祭のステージをフレンズの皆様に盛り上げていただきます！';
          break;
        default:
          mainTitle.innerHTML = "イベント時間外";
          mainSentence.innerHTML =
            "ただいまイベント時間外です。<br>もうしばらくお待ちください。";
          break;
      }
      break;

    //メインステージ2日目
    case 3:
      switch (now_hour) {
        case 9:
          if (now_minute < 25) {
            mainTitle.innerHTML = "文情ロッカーズ";
            mainSentence.innerHTML =
              "文化情報学部の生徒と先生で構成されたバンドです。";
          } else if (now_minute >= 25 && now_minute < 50) {
            mainTitle.innerHTML = "GCバンド";
            mainSentence.innerHTML =
              "学部の中で集めたメンバーでクローバー祭の思い出作りのためバンドを組みました。";
          } else {
            mainTitle.innerHTML =
              "同志社大学落語研究会<br>南京玉すだれ芸人ジンバブエ原";
            mainSentence.innerHTML =
              "ケルン大聖堂前ゲリラ公演や日仏会館フランス語公演を決行。国境なき玉すだれ芸人";
          }
          break;
        case 10:
          mainTitle.innerHTML = "お笑いステージ";
          mainSentence.innerHTML = "笑い飯<br>尼神インター<br>祇園";
          break;
        case 11:
          if (now_minute < 20) {
            mainTitle.innerHTML = "Trip nostalgia";
            mainSentence.innerHTML = "ヨーロッパ民謡を演奏しています。";
          } else if (now_minute >= 20 && now_minute < 40) {
            mainTitle.innerHTML = "Meahula Nohealani";
            mainSentence.innerHTML =
              "私達は「心に届くフラ」をモットーに1・2・3回生総勢125名で活動しています！";
          } else {
            mainTitle.innerHTML =
              "「Dream Zone」<br>Withプロデューサー竹森みずほ";
            mainSentence.innerHTML =
              "日本の文化や伝統を伝承し人々の人生を豊かにする情報を発信する次世代ユニット。";
          }
          break;
        case 12:
          if (now_minute < 20) {
            mainTitle.innerHTML = "京炎 そでふれ！志舞踊";
            mainSentence.innerHTML =
              "私達は創作ダンスをしており4学年が合わさって約200人で披露いたします！";
          } else if (now_minute >= 20 && now_minute < 50) {
            mainTitle.innerHTML = "培良中学校吹奏楽部";
            mainSentence.innerHTML = "";
          } else if (now_minute >= 55) {
            mainTitle.innerHTML = "VOCALOID研究会<br>Arpeggio";
            mainSentence.innerHTML =
              "サークル員でバンドを組みボーカロイド曲を演奏します！みんなで盛り上がりましょう！";
          }
          break;
        case 13:
          if (now_minute < 20) {
            mainTitle.innerHTML = "VOCALOID研究会<br>Arpeggio";
            mainSentence.innerHTML =
              "サークル員でバンドを組みボーカロイド曲を演奏します！みんなで盛り上がりましょう！";
          } else if (now_minute >= 20 && now_minute < 45) {
            mainTitle.innerHTML = "BOYHOOD";
            mainSentence.innerHTML =
              'ジャンルにとらわれないFreeスタイル"雑食系"ROCKバンドBOYHOOD';
          } else {
            mainTitle.innerHTML = "Portoneon";
            mainSentence.innerHTML =
              "neonかな，うえでぃーによるポップスバンド．10月には大阪音楽堂公演を開催";
          }
          break;
        case 14:
          if (now_minute < 10) {
            mainTitle.innerHTML = "Portoneon";
            mainSentence.innerHTML =
              "neonかな，うえでぃーによるポップスバンド．10月には大阪音楽堂公演を開催";
          } else if (now_minute >= 10 && now_minute < 35) {
            mainTitle.innerHTML = "軽音楽研究会I.P.C";
            mainSentence.innerHTML =
              "フレンズもいいけど僕たちも負けないぐらい楽しませてみせます！是非来てください！";
          } else {
            mainTitle.innerHTML = "PENTA";
            mainSentence.innerHTML =
              "邦楽からロック、インストまで様々なバンドをコピーしている軽音サークルです!";
          }
          break;
        case 16:
          mainTitle.innerHTML = "ハンブレッダーズ";
          mainSentence.innerHTML =
            "<li>Profile</li>2009 年結成の「老若男女共感できる、まっすぐで思わず青春を思い出す。」そんな音楽を届ける、ネバーエンディング思春期な同志社卒 3 人組のバンドグループ!ギターボーカルのムツムロアキラさんが綴る、リアルな情景が浮かぶ歌詞と心に響く歌声、サウンドによる最高のステージを届けていただきます! !<li>Comment</li>母校の学祭に出られて光栄です。同志社前駅からの少々長すぎる坂を登って、ぜひ見にきてください。ハンブレッダ―ズ/ムツムロアキラ (Vo&Gt)";
          break;
        default:
          break;
      }
      break;
  }
}

//メモリアルステージ時間帯別表示
function changeMemoStage() {
  let now_date = new Date().getDate();
  let now_hour = new Date().getHours();
  let now_minute = new Date().getMinutes();
  let memoTitle = document.getElementById("memoTitle");
  let memoSentence = document.getElementById("memoSentence");

  switch (now_date) {
    //メモリアルステージ1日目
    case 2: {
      switch (now_hour) {
        case 12:
          if (now_minute >= 45) {
            memoTitle.innerHTML = "同志社大学 チアダンスサークルSWEETiEZ";
            memoSentence.innerHTML =
              "メンバー全員で、笑顔をお届けできるようなステージにします！！ぜひご覧ください！！";
          }
          break;
        case 13:
          if (now_minute < 5) {
            memoTitle.innerHTML = "同志社大学チアダンスサークルSWEETiEZ";
            memoSentence.innerHTML =
              "メンバー全員で、笑顔をお届けできるようなステージにします！！ぜひご覧ください！！";
          } else if (now_minute >= 5 && now_minute < 25) {
            memoTitle.innerHTML = "同志社大学よさこいサークルよさ郎";
            memoSentence.innerHTML =
              "私たちは高知系の学生よさこいサークルです。力強い演舞をぜひ楽しんでご覧ください！";
          }
          break;
        case 14:
          if (now_minute < 30) {
            memoTitle.innerHTML = "Re:Complex";
            memoSentence.innerHTML = "";
          } else if (now_minute >= 30 && now_minute < 50) {
            memoTitle.innerHTML = "萌々奈";
            memoSentence.innerHTML =
              "人気LINELIVER萌々奈。女子の本音をポップにダークにお届けします！";
          } else if (now_minute >= 50) {
            memoTitle.innerHTML = "P.S.";
            memoSentence.innerHTML =
              "アコースティックなバンドが持つ特有の雰囲気を感じてもらえたら嬉しいです！";
          }
          break;
        case 15:
          if (now_minute < 10) {
            memoTitle.innerHTML = "P.S.";
            memoSentence.innerHTML =
              "アコースティックなバンドが持つ特有の雰囲気を感じてもらえたら嬉しいです！";
          } else if (now_minute >= 10 && now_minute < 30) {
            memoTitle.innerHTML = "ユルイスト";
            memoSentence.innerHTML =
              "アコギと女性ボーカルのデュオ！パーカッシブなアレンジで楽しいポップスをします！";
          } else if (now_minute >= 30 && now_minute < 50) {
            memoTitle.innerHTML = "ひなちょりーず";
            memoSentence.innerHTML =
              "前へ進むための橋渡しに来ました。湧き上がる興奮とエナジーをお届けします。";
          } else if (now_minute >= 50) {
            memoTitle.innerHTML =
              "GC教員グループ<br>〜アンサンブル・アランフェス";
            memoSentence.innerHTML =
              "ギターの多賀谷を中心に、フルートやバイオリンとのアンサンブルを楽しむグループ。";
          }
          break;
        case 16:
          if (now_minute < 10) {
            memoTitle.innerHTML =
              "GC教員グループ<br>〜アンサンブル・アランフェス";
            memoSentence.innerHTML =
              "ギターの多賀谷を中心に、フルートやバイオリンとのアンサンブルを楽しむグループ。";
          } else if (now_minute >= 10 && now_minute < 40) {
            memoTitle.innerHTML = "PENTA";
            memoSentence.innerHTML =
              "邦楽からロック、インストまで様々なバンドをコピーしている軽音サークルです！";
          } else if (now_minute >= 40) {
            memoTitle.innerHTML = "ゲス mika";
            memoSentence.innerHTML =
              "僕たち一回生有志バンドでゲスの極み乙女。とsumikaの曲を演奏します！";
          }
          break;
        case 17:
          memoTitle.innerHTML = "みんなで察して！<br>ANSWER THE QUIZ!";
          memoSentence.innerHTML = "";
          break;
        default:
          memoTitle.innerHTML = "イベント時間外";
          memoSentence.innerHTML =
            "ただいまイベント時間外です。<br>もうしばらくお待ちください。";
      }
    }

    //メモリアルステージ2日目
    case 3: {
      switch (now_hour) {
        case 10:
          if (now_minute < 20) {
            mainTitle.innerHTML = "Meahula Nohealani";
            mainSentence.innerHTML =
              "私達は「心に届くフラ」をモットーに1・2・3回生総勢125名で活動しています！";
          } else if (now_minute >= 20 && now_minute < 40) {
            mainTitle.innerHTML = "京炎そでふれ！志舞踊";
            mainSentence.innerHTML =
              "私達は創作ダンスをしており4学年が合わさって約200人で披露いたします！";
          } else {
            mainTitle.innerHTML = "Kapuamohala";
            mainSentence.innerHTML =
              "京都を中心に活動しています．年齢や性別問わず，仲良くフラを楽しんでいます．";
          }
          break;
        case 11:
          if (now_minute < 20) {
            mainTitle.innerHTML = "ナイスゴーイングダンスサークル";
            mainSentence.innerHTML =
              "皆様からの「手拍子・足拍子」を頂くのが大きな子供たちです．応援宜しくお願いします．";
          } else if (now_minute >= 20 && now_minute < 30) {
            mainTitle.innerHTML = "京都よさこい連　心粋";
            mainSentence.innerHTML =
              "総勢164名で活動しているよさこいサークルです．大迫力の演舞をご覧ください！";
          } else if (now_minute >= 30 && now_minute < 50) {
            mainTitle.innerHTML = "アカペラサークル One Voices";
            mainSentence.innerHTML =
              "私たち One Voices は、自分たちの声だけを使って音楽を奏でる“アカペラ”を楽しむサークルです。";
          } else {
            mainTitle.innerHTML = "タップダンスサークル<br>ShiSham";
            mainSentence.innerHTML =
              "いったいどうやって鳴らしているのか!?不思議なタップダンスをご覧下さい!";
          }
          break;
        case 12:
          if (now_minute >= 10 && now_minute < 30) {
            mainTitle.innerHTML = "Meahula Nohealani OG";
            mainSentence.innerHTML =
              "引退から一年経ったメンバーが再結集し，フラの魅力を伝えられるよう精一杯踊ります！";
          } else if (now_minute >= 30 && now_minute < 50) {
            mainTitle.innerHTML = "同志社ヒーローショー同好会";
            mainSentence.innerHTML =
              "同志社の愛と平和と単位のため，同志社戦隊タナレンジャーの戦いが今日も幕を切る！";
          } else {
            mainTitle.innerHTML = "同志社室内楽団";
            mainSentence.innerHTML =
              "少人数編成で、馴染みのある曲を楽しく演奏します!是非お越しください!";
          }
          break;
        case 13:
          if (now_minute < 15) {
            mainTitle.innerHTML = "同志社室内楽団";
            mainSentence.innerHTML =
              "少人数編成で、馴染みのある曲を楽しく演奏します!是非お越しください!";
          } else if (now_minute >= 25 && now_minute < 45) {
            mainTitle.innerHTML = "京都府立田辺高等学校ダンス部";
            mainSentence.innerHTML =
              "大学生に囲まれて緊張していますが頑張って盛り上げるので応援よろしくお願いします．";
          } else if (now_minute >= 50) {
            mainTitle.innerHTML = "cock10";
            mainSentence.innerHTML =
              "早速ですがオリジナル曲やります！大事なことなのでもう一回！オリジナル曲やります！";
          }
          break;
        case 14:
          if (now_minute < 20) {
            mainTitle.innerHTML = "cock10";
            mainSentence.innerHTML =
              "早速ですがオリジナル曲やります！大事なことなのでもう一回！オリジナル曲やります！";
          } else if (now_minute >= 20 && now_minute < 50) {
            mainTitle.innerHTML = "フォーク・アライブ・クラブ(F.A.C)";
            mainSentence.innerHTML =
              "私たち FAC は幅広いジャンルの音楽をコピーしています。是非見に来てください!";
          }
          break;
        default:
          break;
      }
    }
  }
}

// });

//以下、変数宣言・関数定義
let mainStage;

document.addEventListener("init", (event) => {
  if (event.target.id === "page-top") {
    //1~12
    document.getElementById("shop1to12").addEventListener("click", function () {
      document.getElementById("shop_inf1to12").style.display = "block";
      document.getElementById("close1to12").style.display = "block";
    });
    document
      .getElementById("close1to12")
      .addEventListener("click", function () {
        document.getElementById("shop_inf1to12").style.display = "none";
        document.getElementById("close1to12").style.display = "none";
      });
    //13~25
    let shop13to25 = document.getElementById("shop13to25");
    shop13to25.addEventListener("click", function () {
      document.getElementById("shop_inf13to25").style.display = "block";
      document.getElementById("close13to25").style.display = "block";
    });
    let close13to25 = document.getElementById("close13to25");
    close13to25.addEventListener("click", function () {
      document.getElementById("shop_inf13to25").style.display = "none";
      close13to25.style.display = "none";
    });
    //26~41
    let shop26to41 = document.getElementById("shop26to41");
    shop26to41.addEventListener("click", function () {
      document.getElementById("shop_inf26to41").style.display = "block";
      document.getElementById("close26to41").style.display = "block";
    });
    let close26to41 = document.getElementById("close26to41");
    close26to41.addEventListener("click", function () {
      document.getElementById("shop_inf26to41").style.display = "none";
      close26to41.style.display = "none";
    });
    //42~55
    let shop42to55 = document.getElementById("shop42to55");
    shop42to55.addEventListener("click", function () {
      document.getElementById("shop_inf42to55").style.display = "block";
      document.getElementById("close42to55").style.display = "block";
    });
    let close42to55 = document.getElementById("close42to55");
    close42to55.addEventListener("click", function () {
      document.getElementById("shop_inf42to55").style.display = "none";
      close42to55.style.display = "none";
    });
    //56~68
    let shop56to68 = document.getElementById("shop56to68");
    shop56to68.addEventListener("click", function () {
      document.getElementById("shop_inf56to68").style.display = "block";
      document.getElementById("close56to68").style.display = "block";
    });
    let close56to68 = document.getElementById("close56to68");
    close56to68.addEventListener("click", function () {
      document.getElementById("shop_inf56to68").style.display = "none";
      close56to68.style.display = "none";
    });
    //69~72
    let shop69to72 = document.getElementById("shop69to72");
    shop69to72.addEventListener("click", function () {
      document.getElementById("shop_inf69to72").style.display = "block";
      document.getElementById("close69to72").style.display = "block";
    });
    let close69to72 = document.getElementById("close69to72");
    close69to72.addEventListener("click", function () {
      document.getElementById("shop_inf69to72").style.display = "none";
      close69to72.style.display = "none";
    });
    //お食事処
    let nichiryo = document.getElementById("nichiryo");
    nichiryo.addEventListener("click", function () {
      document.getElementById("shop_inf80to87").style.display = "block";
      document.getElementById("close80to87").style.display = "block";
    });
    let close80to87 = document.getElementById("close80to87");
    close80to87.addEventListener("click", function () {
      document.getElementById("shop_inf80to87").style.display = "none";
      close80to87.style.display = "none";
    });
    // //メニュー開閉ボタン
    /*
      this.getElementById("mogi_menu").addEventListener("click", function(){
      fn.open();
      });
      */

    //じゃがバター
    let jaga = document.getElementById("jagaButton");
    jaga.addEventListener("click", function () {
      document.getElementById("jaga").style.display = "block";
      document.getElementById("closeJaga").style.display = "block";
    });
    let closeJaga = document.getElementById("closeJaga");
    closeJaga.addEventListener("click", function () {
      document.getElementById("jaga").style.display = "none";
      closeJaga.style.display = "none";
    });
    //ポテト
    let potato = document.getElementById("potatoButton");
    potato.addEventListener("click", function () {
      document.getElementById("potato").style.display = "block";
      document.getElementById("closePotato").style.display = "block";
    });
    let closePotato = document.getElementById("closePotato");
    closePotato.addEventListener("click", function () {
      document.getElementById("potato").style.display = "none";
      closePotato.style.display = "none";
    });
    //焼きそば
    let yakisoba = document.getElementById("yakisobaButton");
    yakisoba.addEventListener("click", function () {
      document.getElementById("yakisoba").style.display = "block";
      document.getElementById("closeYakisoba").style.display = "block";
    });
    let closeYakisoba = document.getElementById("closeYakisoba");
    closeYakisoba.addEventListener("click", function () {
      document.getElementById("yakisoba").style.display = "none";
      closeYakisoba.style.display = "none";
    });
    //たません・たこせん
    let tamasen = document.getElementById("tamasenButton");
    tamasen.addEventListener("click", function () {
      document.getElementById("tamasen").style.display = "block";
      document.getElementById("closeTamasen").style.display = "block";
    });
    let closeTamasen = document.getElementById("closeTamasen");
    closeTamasen.addEventListener("click", function () {
      document.getElementById("tamasen").style.display = "none";
      closeTamasen.style.display = "none";
    });
    //はしまき
    let hashimaki = document.getElementById("hashimakiButton");
    hashimaki.addEventListener("click", function () {
      document.getElementById("hashimaki").style.display = "block";
      document.getElementById("closeHashimaki").style.display = "block";
    });
    let closeHashimaki = document.getElementById("closeHashimaki");
    closeHashimaki.addEventListener("click", function () {
      document.getElementById("hashimaki").style.display = "none";
      closeHashimaki.style.display = "none";
    });
    //揚げ物
    let agemono = document.getElementById("agemonoButton");
    agemono.addEventListener("click", function () {
      document.getElementById("agemono").style.display = "block";
      document.getElementById("closeAgemono").style.display = "block";
    });
    let closeAgemono = document.getElementById("closeAgemono");
    closeAgemono.addEventListener("click", function () {
      document.getElementById("agemono").style.display = "none";
      closeAgemono.style.display = "none";
    });
    //うどん
    let udon = document.getElementById("udonButton");
    udon.addEventListener("click", function () {
      document.getElementById("udon").style.display = "block";
      document.getElementById("closeUdon").style.display = "block";
    });
    let closeUdon = document.getElementById("closeUdon");
    closeUdon.addEventListener("click", function () {
      document.getElementById("udon").style.display = "none";
      closeUdon.style.display = "none";
    });
    //カレー
    let kare = document.getElementById("kareButton");
    kare.addEventListener("click", function () {
      document.getElementById("kare").style.display = "block";
      document.getElementById("closeKare").style.display = "block";
    });
    let closeKare = document.getElementById("closeKare");
    closeKare.addEventListener("click", function () {
      document.getElementById("kare").style.display = "none";
      closeKare.style.display = "none";
    });
    //豚汁
    let tonjiru = document.getElementById("tonjiruButton");
    tonjiru.addEventListener("click", function () {
      document.getElementById("tonjiru").style.display = "block";
      document.getElementById("closeTonjiru").style.display = "block";
    });
    let closeTonjiru = document.getElementById("closeTonjiru");
    closeTonjiru.addEventListener("click", function () {
      document.getElementById("tonjiru").style.display = "none";
      closeTonjiru.style.display = "none";
    });
    //世界の料理
    let sekair = document.getElementById("sekairButton");
    sekair.addEventListener("click", function () {
      document.getElementById("sekair").style.display = "block";
      document.getElementById("closeSekair").style.display = "block";
    });
    let closeSekair = document.getElementById("closeSekair");
    closeSekair.addEventListener("click", function () {
      document.getElementById("sekair").style.display = "none";
      closeSekair.style.display = "none";
    });
    //ソフトドリンク
    let softdrink = document.getElementById("softdrinkButton");
    softdrink.addEventListener("click", function () {
      document.getElementById("softdrink").style.display = "block";
      document.getElementById("closeSoftdrink").style.display = "block";
    });
    let closeSoftdrink = document.getElementById("closeSoftdrink");
    closeSoftdrink.addEventListener("click", function () {
      document.getElementById("softdrink").style.display = "none";
      closeSoftdrink.style.display = "none";
    });
    //タピオカ
    let tapioka = document.getElementById("tapiokaButton");
    tapioka.addEventListener("click", function () {
      document.getElementById("tapioka").style.display = "block";
      document.getElementById("closeTapioka").style.display = "block";
    });
    let closeTapioka = document.getElementById("closeTapioka");
    closeTapioka.addEventListener("click", function () {
      document.getElementById("tapioka").style.display = "none";
      closeTapioka.style.display = "none";
    });
    //ポップコーン
    let popcorn = document.getElementById("popcornButton");
    popcorn.addEventListener("click", function () {
      document.getElementById("popcorn").style.display = "block";
      document.getElementById("closePopcorn").style.display = "block";
    });
    let closePopcorn = document.getElementById("closePopcorn");
    closePopcorn.addEventListener("click", function () {
      document.getElementById("popcorn").style.display = "none";
      closePopcorn.style.display = "none";
    });
    //シューアイス
    let shuice = document.getElementById("shuiceButton");
    shuice.addEventListener("click", function () {
      document.getElementById("shuice").style.display = "block";
      document.getElementById("closeShuice").style.display = "block";
    });
    let closeShuice = document.getElementById("closeShuice");
    closeShuice.addEventListener("click", function () {
      document.getElementById("shuice").style.display = "none";
      closeShuice.style.display = "none";
    });
    //ベビーカステラ
    let babykasu = document.getElementById("babykasuButton");
    babykasu.addEventListener("click", function () {
      document.getElementById("babykasu").style.display = "block";
      document.getElementById("closeBabykasu").style.display = "block";
    });
    let closeBabykasu = document.getElementById("closeBabykasu");
    closeBabykasu.addEventListener("click", function () {
      document.getElementById("babykasu").style.display = "none";
      closeBabykasu.style.display = "none";
    });
    //フレンチトースト
    document
      .getElementById("frenchButton")
      .addEventListener("click", function () {
        document.getElementById("french").style.display = "block";
        document.getElementById("closeFrench").style.display = "block";
      });
    document
      .getElementById("closeFrench")
      .addEventListener("click", function () {
        document.getElementById("french").style.display = "none";
        document.getElementById("closeFrench").style.display = "none";
      });
    //チュロス
    let chrosu = document.getElementById("chrosuButton");
    chrosu.addEventListener("click", function () {
      document.getElementById("chrosu").style.display = "block";
      document.getElementById("closeChrosu").style.display = "block";
    });
    let closeChrosu = document.getElementById("closeChrosu");
    closeChrosu.addEventListener("click", function () {
      document.getElementById("chrosu").style.display = "none";
      closeChrosu.style.display = "none";
    });
    //綿菓子
    let watagashi = document.getElementById("watagashiButton");
    watagashi.addEventListener("click", function () {
      document.getElementById("watagashi").style.display = "block";
      document.getElementById("closeWatagashi").style.display = "block";
    });
    let closeWatagashi = document.getElementById("closeWatagashi");
    closeWatagashi.addEventListener("click", function () {
      document.getElementById("watagashi").style.display = "none";
      closeWatagashi.style.display = "none";
    });
    //サーターアンダギー
    let sata = document.getElementById("sataButton");
    sata.addEventListener("click", function () {
      document.getElementById("sata").style.display = "block";
      document.getElementById("closeSata").style.display = "block";
    });
    let closeSata = document.getElementById("closeSata");
    closeSata.addEventListener("click", function () {
      document.getElementById("sata").style.display = "none";
      closeSata.style.display = "none";
    });
    //大学芋
    let daigaku = document.getElementById("daigakuButton");
    daigaku.addEventListener("click", function () {
      document.getElementById("daigaku").style.display = "block";
      document.getElementById("closeDaigaku").style.display = "block";
    });
    let closeDaigaku = document.getElementById("closeDaigaku");
    closeDaigaku.addEventListener("click", function () {
      document.getElementById("daigaku").style.display = "none";
      closeDaigaku.style.display = "none";
    });
    //世界のお菓子
    let sekaio = document.getElementById("sekaioButton");
    sekaio.addEventListener("click", function () {
      document.getElementById("sekaio").style.display = "block";
      document.getElementById("closeSekaio").style.display = "block";
    });
    let closeSekaio = document.getElementById("closeSekaio");
    closeSekaio.addEventListener("click", function () {
      document.getElementById("sekaio").style.display = "none";
      closeSekaio.style.display = "none";
    });
    //ヨーヨー釣り
    let yoyo = document.getElementById("yoyoButton");
    yoyo.addEventListener("click", function () {
      document.getElementById("yoyo").style.display = "block";
      document.getElementById("closeYoyo").style.display = "block";
    });
    let closeYoyo = document.getElementById("closeYoyo");
    closeYoyo.addEventListener("click", function () {
      document.getElementById("yoyo").style.display = "none";
      closeYoyo.style.display = "none";
    });
    //マッサージ
    let massage = document.getElementById("massageButton");
    massage.addEventListener("click", function () {
      document.getElementById("massage").style.display = "block";
      document.getElementById("closeMassage").style.display = "block";
    });
    let closeMassage = document.getElementById("closeMassage");
    closeMassage.addEventListener("click", function () {
      document.getElementById("massage").style.display = "none";
      closeMassage.style.display = "none";
    });
    //占い
    let uranai = document.getElementById("uranaiButton");
    uranai.addEventListener("click", function () {
      document.getElementById("uranai").style.display = "block";
      document.getElementById("closeUranai").style.display = "block";
    });
    let closeUranai = document.getElementById("closeUranai");
    closeUranai.addEventListener("click", function () {
      document.getElementById("uranai").style.display = "none";
      closeUranai.style.display = "none";
    });
    //ゲーム
    let game = document.getElementById("gameButton");
    game.addEventListener("click", function () {
      document.getElementById("game").style.display = "block";
      document.getElementById("closeGame").style.display = "block";
    });
    let closeGame = document.getElementById("closeGame");
    closeGame.addEventListener("click", function () {
      document.getElementById("game").style.display = "none";
      closeGame.style.display = "none";
    });
    //雑貨
    let zakka = document.getElementById("zakkaButton");
    zakka.addEventListener("click", function () {
      document.getElementById("zakka").style.display = "block";
      document.getElementById("closeZakka").style.display = "block";
    });
    let closeZakka = document.getElementById("closeZakka");
    closeZakka.addEventListener("click", function () {
      document.getElementById("zakka").style.display = "none";
      closeZakka.style.display = "none";
    });
    //アクセサリー
    let acce = document.getElementById("acceButton");
    acce.addEventListener("click", function () {
      document.getElementById("acce").style.display = "block";
      document.getElementById("closeAcce").style.display = "block";
    });
    let closeAcce = document.getElementById("closeAcce");
    closeAcce.addEventListener("click", function () {
      document.getElementById("acce").style.display = "none";
      closeAcce.style.display = "none";
    });
    //布小物
    let nuno = document.getElementById("nunoButton");
    nuno.addEventListener("click", function () {
      document.getElementById("nuno").style.display = "block";
      document.getElementById("closeNuno").style.display = "block";
    });
    let closeNuno = document.getElementById("closeNuno");
    closeNuno.addEventListener("click", function () {
      document.getElementById("nuno").style.display = "none";
      closeNuno.style.display = "none";
    });
    //フラワー
    let flower = document.getElementById("flowerButton");
    flower.addEventListener("click", function () {
      document.getElementById("flower").style.display = "block";
      document.getElementById("closeFlower").style.display = "block";
    });
    let closeFlower = document.getElementById("closeFlower");
    closeFlower.addEventListener("click", function () {
      document.getElementById("flower").style.display = "none";
      closeFlower.style.display = "none";
    });
    //デイヴィスcafe
    let davis = document.getElementById("davisButton");
    davis.addEventListener("click", function () {
      document.getElementById("davis").style.display = "block";
      document.getElementById("closeDavis").style.display = "block";
    });
    let closeDavis = document.getElementById("closeDavis");
    closeDavis.addEventListener("click", function () {
      document.getElementById("davis").style.display = "none";
      closeDavis.style.display = "none";
    });
    //紫苑館
    let shion = document.getElementById("shionButton");
    shion.addEventListener("click", function () {
      document.getElementById("shionMenu").style.display = "block";
      document.getElementById("closeShion").style.display = "block";
    });
    let closeShion = document.getElementById("closeShion");
    closeShion.addEventListener("click", function () {
      document.getElementById("shionMenu").style.display = "none";
      closeShion.style.display = "none";
    });
    //専門店街
    let senmon = document.getElementById("senmonButton");
    senmon.addEventListener("click", function () {
      document.getElementById("senmon").style.display = "block";
      document.getElementById("closeSenmon").style.display = "block";
    });
    let closeSenmon = document.getElementById("closeSenmon");
    closeSenmon.addEventListener("click", function () {
      document.getElementById("senmon").style.display = "none";
      closeSenmon.style.display = "none";
    });
    //ラッテ
    let ratte = document.getElementById("ratteButton");
    ratte.addEventListener("click", function () {
      document.getElementById("ratte").style.display = "block";
      document.getElementById("closeRatte").style.display = "block";
    });
    let closeRatte = document.getElementById("closeRatte");
    closeRatte.addEventListener("click", function () {
      document.getElementById("ratte").style.display = "none";
      closeRatte.style.display = "none";
    });
    //日糧館
    document
      .getElementById("nichiryoButton")
      .addEventListener("click", function () {
        document.getElementById("nichiryoMenu").style.display = "block";
        document.getElementById("closeNichiryo").style.display = "block";
      });
    document
      .getElementById("closeNichiryo")
      .addEventListener("click", function () {
        document.getElementById("nichiryoMenu").style.display = "none";
        document.getElementById("closeNichiryo").style.display = "none";
      });
    //購買
    let koubai = document.getElementById("koubaiButton");
    koubai.addEventListener("click", function () {
      document.getElementById("koubai").style.display = "block";
      document.getElementById("closeKoubai").style.display = "block";
    });
    let closeKoubai = document.getElementById("closeKoubai");
    closeKoubai.addEventListener("click", function () {
      document.getElementById("koubai").style.display = "none";
      closeKoubai.style.display = "none";
    });
    //ジョアミ
    let johermi = document.getElementById("johermiButton");
    johermi.addEventListener("click", function () {
      document.getElementById("johermi").style.display = "block";
      document.getElementById("closeJohermi").style.display = "block";
    });
    let closeJohermi = document.getElementById("closeJohermi");
    closeJohermi.addEventListener("click", function () {
      document.getElementById("johermi").style.display = "none";
      closeJohermi.style.display = "none";
    });
    //ファミマ
    let famima = document.getElementById("famimaButton");
    famima.addEventListener("click", function () {
      document.getElementById("famima").style.display = "block";
      document.getElementById("closeFamima").style.display = "block";
    });
    let closeFamima = document.getElementById("closeFamima");
    closeFamima.addEventListener("click", function () {
      document.getElementById("famima").style.display = "none";
      closeFamima.style.display = "none";
    });

    changeMainStage();
    changeMemoStage();
  }
  ////変更

  //変更
});
//変更

document.addEventListener("show", function (event) {
  if (event.target.id === "Map") {
  }
});

//メニュー機能の開閉
window.fn = {};

window.fn.open = function () {
  let menu = document.getElementById("menu");
  menu.open();
};
window.fn.load = function (page) {
  let content = document.getElementById("content");
  let menu = document.getElementById("menu");
  content.load(page).then(menu.close.bind(menu));
};

//MainStage
function mainStage() {
  document.getElementById("mainStage_inf").style.display = "block";
  document.getElementById("closeMain").style.display = "block";
}
function closeMain() {
  document.getElementById("mainStage_inf").style.display = "none";
  document.getElementById("closeMain").style.display = "none";
}
//MemorialStage
function memoStage() {
  document.getElementById("memoStage_inf").style.display = "block";
  document.getElementById("closeMemo").style.display = "block";
}
function closeMemo() {
  document.getElementById("memoStage_inf").style.display = "none";
  document.getElementById("closeMemo").style.display = "none";
}

//メインステージ時間帯別表示
function changeMainStage() {
  let now_date = new Date().getDate();
  let now_hour = new Date().getHours();
  let now_minute = new Date().getMinutes();
  let mainTitle = document.getElementById("mainTitle");
  let mainSentence = document.getElementById("mainSentence");

  switch (now_date) {
    //メインステージ1日目
    case 2:
      switch (now_hour) {
        case 12:
          if (now_minute >= 30 && now_minute < 45) {
            mainTitle.innerHTML = "オープニング";
            mainSentence.innerHTML =
              "Dive into Clover!!というテーマのようにクローバー祭に夢中になって楽しんでください!ステージには素敵なアーティストさんが勢揃い!そして、今年もあのヒーロー達がクローバー祭に駆けつけてくれる?!皆さん、一緒に盛り上がりましょう!";
          } else if (now_minute >= 45) {
            mainTitle.innerHTML = "田辺幼稚園・大住幼稚園";
            mainSentence.innerHTML = "情報なし";
          }
          break;
        case 13:
          if (now_minute < 15) {
            mainTitle.innerHTML = "田辺幼稚園・大住幼稚園";
            mainSentence.innerHTML = "情報なし";
          } else if (now_minute >= 15 && now_minute < 35) {
            mainTitle.innerHTML = "同志社女子大学ダンス部 AmistaD^2";
            mainSentence.innerHTML =
              "今日のためにみなさんを楽しませるダンスを準備してきました！是非見に来てください！";
          } else if (now_minute >= 35 && now_minute < 55) {
            mainTitle.innerHTML = "同志社モダンジャズバレエサークル";
            mainSentence.innerHTML =
              "部員で選曲、振り付けを行い年に１回の自主公演に向けて楽しく練習しています！！";
          } else if (now_minute >= 55) {
            mainTitle.innerHTML = "タップダンスサークル ShimSham";
            mainSentence.innerHTML =
              "いったいどうやって鳴らしているのか！？不思議なタップダンスをご覧下さい！";
          }
          break;
        case 14:
          if (now_minute < 15) {
            mainTitle.innerHTML = "タップダンスサークル ShimSham";
            mainSentence.innerHTML =
              "いったいどうやって鳴らしているのか！？不思議なタップダンスをご覧下さい！";
          } else if (now_minute >= 15 && now_minute < 40) {
            mainTitle.innerHTML = "同志社室内楽団";
            mainSentence.innerHTML =
              "少人数編成で、馴染みのある曲を楽しく演奏します！是非お越しください！";
          } else if (now_minute >= 40) {
            mainTitle.innerHTML = "同志社大學應援團";
            mainSentence.innerHTML =
              "全同志社人を応援する為に、指導部、チアリーダー部、吹奏学部で活動しております。";
          }
          break;
        case 15:
          if (now_minute < 20) {
            mainTitle.innerHTML = "アカペラサークル One Voices";
            mainSentence.innerHTML =
              '私たちOne Voicesは、自分たちの声だけを使って音楽を奏でる"アカペラ"を楽しむサークルです。';
          } else if (now_minute >= 25 && now_minute < 50) {
            mainTitle.innerHTML = "HOY-SMITH";
            mainSentence.innerHTML =
              "新体制にして集大成。<br>ラストライブも歌って踊って、打ち上げで会いましょう。";
          } else if (now_minute >= 50) {
            mainTitle.innerHTML = "カサヴェ";
            mainSentence.innerHTML =
              "昨年一番練習した曲でミスった津田をクビにしたのでもうミスりません。皆来てください。";
          }
          break;
        case 16:
          if (now_minute < 15) {
            mainTitle.innerHTML = "カサヴェ";
            mainSentence.innerHTML =
              "昨年一番練習した曲でミスった津田をクビにしたのでもうミスりません。皆来てください。";
          } else if (now_minute >= 15 && now_minute < 35) {
            mainTitle.innerHTML = "LAPH ROI GLENN";
            mainSentence.innerHTML =
              "日々の悩みは音楽で発散！<br>笑い、泣き、声を出して一緒に楽しみましょう！";
          } else if (now_minute >= 35) {
            mainTitle.innerHTML = "フォーク・アライブ・クラブ（F.A.C）";
            mainSentence.innerHTML =
              "私たちFACは幅広いジャンルの音楽をコピーしています。是非見に来てください！";
          }
          break;
        case 18:
          mainTitle.innerHTML = "フレンズ";
          mainSentence.innerHTML =
            '2015年に結成された男女５人組バンドの「フレンズ」。都会的なライフスタイル、友情や愛情を、オフビートな独特のユーモアでコメディに仕立て上げている"神泉系"バンド。リズミカルなシティポップに深みのある歌詞で顧客を魅了！今年のクローバー祭のステージをフレンズの皆様に盛り上げていただきます！';
          break;
        default:
          mainTitle.innerHTML = "イベント時間外";
          mainSentence.innerHTML =
            "ただいまイベント時間外です。<br>もうしばらくお待ちください。";
          break;
      }
      break;

    //メインステージ2日目
    case 3:
      switch (now_hour) {
        case 9:
          if (now_minute < 25) {
            mainTitle.innerHTML = "文情ロッカーズ";
            mainSentence.innerHTML =
              "文化情報学部の生徒と先生で構成されたバンドです。";
          } else if (now_minute >= 25 && now_minute < 50) {
            mainTitle.innerHTML = "GCバンド";
            mainSentence.innerHTML =
              "学部の中で集めたメンバーでクローバー祭の思い出作りのためバンドを組みました。";
          } else {
            mainTitle.innerHTML =
              "同志社大学落語研究会<br>南京玉すだれ芸人ジンバブエ原";
            mainSentence.innerHTML =
              "ケルン大聖堂前ゲリラ公演や日仏会館フランス語公演を決行。国境なき玉すだれ芸人";
          }
          break;
        case 10:
          mainTitle.innerHTML = "お笑いステージ";
          mainSentence.innerHTML = "笑い飯<br>尼神インター<br>祇園";
          break;
        case 11:
          if (now_minute < 20) {
            mainTitle.innerHTML = "Trip nostalgia";
            mainSentence.innerHTML = "ヨーロッパ民謡を演奏しています。";
          } else if (now_minute >= 20 && now_minute < 40) {
            mainTitle.innerHTML = "Meahula Nohealani";
            mainSentence.innerHTML =
              "私達は「心に届くフラ」をモットーに1・2・3回生総勢125名で活動しています！";
          } else {
            mainTitle.innerHTML =
              "「Dream Zone」<br>Withプロデューサー竹森みずほ";
            mainSentence.innerHTML =
              "日本の文化や伝統を伝承し人々の人生を豊かにする情報を発信する次世代ユニット。";
          }
          break;
        case 12:
          if (now_minute < 20) {
            mainTitle.innerHTML = "京炎 そでふれ！志舞踊";
            mainSentence.innerHTML =
              "私達は創作ダンスをしており4学年が合わさって約200人で披露いたします！";
          } else if (now_minute >= 20 && now_minute < 50) {
            mainTitle.innerHTML = "培良中学校吹奏楽部";
            mainSentence.innerHTML = "";
          } else if (now_minute >= 55) {
            mainTitle.innerHTML = "VOCALOID研究会<br>Arpeggio";
            mainSentence.innerHTML =
              "サークル員でバンドを組みボーカロイド曲を演奏します！みんなで盛り上がりましょう！";
          }
          break;
        case 13:
          if (now_minute < 20) {
            mainTitle.innerHTML = "VOCALOID研究会<br>Arpeggio";
            mainSentence.innerHTML =
              "サークル員でバンドを組みボーカロイド曲を演奏します！みんなで盛り上がりましょう！";
          } else if (now_minute >= 20 && now_minute < 45) {
            mainTitle.innerHTML = "BOYHOOD";
            mainSentence.innerHTML =
              'ジャンルにとらわれないFreeスタイル"雑食系"ROCKバンドBOYHOOD';
          } else {
            mainTitle.innerHTML = "Portoneon";
            mainSentence.innerHTML =
              "neonかな，うえでぃーによるポップスバンド．10月には大阪音楽堂公演を開催";
          }
          break;
        case 14:
          if (now_minute < 10) {
            mainTitle.innerHTML = "Portoneon";
            mainSentence.innerHTML =
              "neonかな，うえでぃーによるポップスバンド．10月には大阪音楽堂公演を開催";
          } else if (now_minute >= 10 && now_minute < 35) {
            mainTitle.innerHTML = "軽音楽研究会I.P.C";
            mainSentence.innerHTML =
              "フレンズもいいけど僕たちも負けないぐらい楽しませてみせます！是非来てください！";
          } else {
            mainTitle.innerHTML = "PENTA";
            mainSentence.innerHTML =
              "邦楽からロック、インストまで様々なバンドをコピーしている軽音サークルです!";
          }
          break;
        case 16:
          mainTitle.innerHTML = "ハンブレッダーズ";
          mainSentence.innerHTML =
            "<li>Profile</li>2009 年結成の「老若男女共感できる、まっすぐで思わず青春を思い出す。」そんな音楽を届ける、ネバーエンディング思春期な同志社卒 3 人組のバンドグループ!ギターボーカルのムツムロアキラさんが綴る、リアルな情景が浮かぶ歌詞と心に響く歌声、サウンドによる最高のステージを届けていただきます! !<li>Comment</li>母校の学祭に出られて光栄です。同志社前駅からの少々長すぎる坂を登って、ぜひ見にきてください。ハンブレッダ―ズ/ムツムロアキラ (Vo&Gt)";
          break;
        default:
          break;
      }
      break;
  }
}

//メモリアルステージ時間帯別表示
function changeMemoStage() {
  let now_date = new Date().getDate();
  let now_hour = new Date().getHours();
  let now_minute = new Date().getMinutes();
  let memoTitle = document.getElementById("memoTitle");
  let memoSentence = document.getElementById("memoSentence");

  switch (now_date) {
    //メモリアルステージ1日目
    case 2: {
      switch (now_hour) {
        case 12:
          if (now_minute >= 45) {
            memoTitle.innerHTML = "同志社大学 チアダンスサークルSWEETiEZ";
            memoSentence.innerHTML =
              "メンバー全員で、笑顔をお届けできるようなステージにします！！ぜひご覧ください！！";
          }
          break;
        case 13:
          if (now_minute < 5) {
            memoTitle.innerHTML = "同志社大学チアダンスサークルSWEETiEZ";
            memoSentence.innerHTML =
              "メンバー全員で、笑顔をお届けできるようなステージにします！！ぜひご覧ください！！";
          } else if (now_minute >= 5 && now_minute < 25) {
            memoTitle.innerHTML = "同志社大学よさこいサークルよさ郎";
            memoSentence.innerHTML =
              "私たちは高知系の学生よさこいサークルです。力強い演舞をぜひ楽しんでご覧ください！";
          }
          break;
        case 14:
          if (now_minute < 30) {
            memoTitle.innerHTML = "Re:Complex";
            memoSentence.innerHTML = "";
          } else if (now_minute >= 30 && now_minute < 50) {
            memoTitle.innerHTML = "萌々奈";
            memoSentence.innerHTML =
              "人気LINELIVER萌々奈。女子の本音をポップにダークにお届けします！";
          } else if (now_minute >= 50) {
            memoTitle.innerHTML = "P.S.";
            memoSentence.innerHTML =
              "アコースティックなバンドが持つ特有の雰囲気を感じてもらえたら嬉しいです！";
          }
          break;
        case 15:
          if (now_minute < 10) {
            memoTitle.innerHTML = "P.S.";
            memoSentence.innerHTML =
              "アコースティックなバンドが持つ特有の雰囲気を感じてもらえたら嬉しいです！";
          } else if (now_minute >= 10 && now_minute < 30) {
            memoTitle.innerHTML = "ユルイスト";
            memoSentence.innerHTML =
              "アコギと女性ボーカルのデュオ！パーカッシブなアレンジで楽しいポップスをします！";
          } else if (now_minute >= 30 && now_minute < 50) {
            memoTitle.innerHTML = "ひなちょりーず";
            memoSentence.innerHTML =
              "前へ進むための橋渡しに来ました。湧き上がる興奮とエナジーをお届けします。";
          } else if (now_minute >= 50) {
            memoTitle.innerHTML =
              "GC教員グループ<br>〜アンサンブル・アランフェス";
            memoSentence.innerHTML =
              "ギターの多賀谷を中心に、フルートやバイオリンとのアンサンブルを楽しむグループ。";
          }
          break;
        case 16:
          if (now_minute < 10) {
            memoTitle.innerHTML =
              "GC教員グループ<br>〜アンサンブル・アランフェス";
            memoSentence.innerHTML =
              "ギターの多賀谷を中心に、フルートやバイオリンとのアンサンブルを楽しむグループ。";
          } else if (now_minute >= 10 && now_minute < 40) {
            memoTitle.innerHTML = "PENTA";
            memoSentence.innerHTML =
              "邦楽からロック、インストまで様々なバンドをコピーしている軽音サークルです！";
          } else if (now_minute >= 40) {
            memoTitle.innerHTML = "ゲス mika";
            memoSentence.innerHTML =
              "僕たち一回生有志バンドでゲスの極み乙女。とsumikaの曲を演奏します！";
          }
          break;
        case 17:
          memoTitle.innerHTML = "みんなで察して！<br>ANSWER THE QUIZ!";
          memoSentence.innerHTML = "";
          break;
        default:
          memoTitle.innerHTML = "イベント時間外";
          memoSentence.innerHTML =
            "ただいまイベント時間外です。<br>もうしばらくお待ちください。";
      }
    }

    //メモリアルステージ2日目
    case 3: {
      switch (now_hour) {
        case 10:
          if (now_minute < 20) {
            mainTitle.innerHTML = "Meahula Nohealani";
            mainSentence.innerHTML =
              "私達は「心に届くフラ」をモットーに1・2・3回生総勢125名で活動しています！";
          } else if (now_minute >= 20 && now_minute < 40) {
            mainTitle.innerHTML = "京炎そでふれ！志舞踊";
            mainSentence.innerHTML =
              "私達は創作ダンスをしており4学年が合わさって約200人で披露いたします！";
          } else {
            mainTitle.innerHTML = "Kapuamohala";
            mainSentence.innerHTML =
              "京都を中心に活動しています．年齢や性別問わず，仲良くフラを楽しんでいます．";
          }
          break;
        case 11:
          if (now_minute < 20) {
            mainTitle.innerHTML = "ナイスゴーイングダンスサークル";
            mainSentence.innerHTML =
              "皆様からの「手拍子・足拍子」を頂くのが大きな子供たちです．応援宜しくお願いします．";
          } else if (now_minute >= 20 && now_minute < 30) {
            mainTitle.innerHTML = "京都よさこい連　心粋";
            mainSentence.innerHTML =
              "総勢164名で活動しているよさこいサークルです．大迫力の演舞をご覧ください！";
          } else if (now_minute >= 30 && now_minute < 50) {
            mainTitle.innerHTML = "アカペラサークル One Voices";
            mainSentence.innerHTML =
              "私たち One Voices は、自分たちの声だけを使って音楽を奏でる“アカペラ”を楽しむサークルです。";
          } else {
            mainTitle.innerHTML = "タップダンスサークル<br>ShiSham";
            mainSentence.innerHTML =
              "いったいどうやって鳴らしているのか!?不思議なタップダンスをご覧下さい!";
          }
          break;
        case 12:
          if (now_minute >= 10 && now_minute < 30) {
            mainTitle.innerHTML = "Meahula Nohealani OG";
            mainSentence.innerHTML =
              "引退から一年経ったメンバーが再結集し，フラの魅力を伝えられるよう精一杯踊ります！";
          } else if (now_minute >= 30 && now_minute < 50) {
            mainTitle.innerHTML = "同志社ヒーローショー同好会";
            mainSentence.innerHTML =
              "同志社の愛と平和と単位のため，同志社戦隊タナレンジャーの戦いが今日も幕を切る！";
          } else {
            mainTitle.innerHTML = "同志社室内楽団";
            mainSentence.innerHTML =
              "少人数編成で、馴染みのある曲を楽しく演奏します!是非お越しください!";
          }
          break;
        case 13:
          if (now_minute < 15) {
            mainTitle.innerHTML = "同志社室内楽団";
            mainSentence.innerHTML =
              "少人数編成で、馴染みのある曲を楽しく演奏します!是非お越しください!";
          } else if (now_minute >= 25 && now_minute < 45) {
            mainTitle.innerHTML = "京都府立田辺高等学校ダンス部";
            mainSentence.innerHTML =
              "大学生に囲まれて緊張していますが頑張って盛り上げるので応援よろしくお願いします．";
          } else if (now_minute >= 50) {
            mainTitle.innerHTML = "cock10";
            mainSentence.innerHTML =
              "早速ですがオリジナル曲やります！大事なことなのでもう一回！オリジナル曲やります！";
          }
          break;
        case 14:
          if (now_minute < 20) {
            mainTitle.innerHTML = "cock10";
            mainSentence.innerHTML =
              "早速ですがオリジナル曲やります！大事なことなのでもう一回！オリジナル曲やります！";
          } else if (now_minute >= 20 && now_minute < 50) {
            mainTitle.innerHTML = "フォーク・アライブ・クラブ(F.A.C)";
            mainSentence.innerHTML =
              "私たち FAC は幅広いジャンルの音楽をコピーしています。是非見に来てください!";
          }
          break;
        default:
          break;
      }
    }
  }
}
