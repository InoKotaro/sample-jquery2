$('#tab-contents .tab[id != "tab1"]').hide();//event初期設定していないtab1以外の文を非表示

$('#tab-menu a').on('click', function(event) {//tab-menuのaタグクリックで↓イベ開始
  $("#tab-contents .tab").hide();//クリックしてないタグの本文を非表示化(これないと下に本文増える)
  $("#tab-menu .active").removeClass("active");//開けているタブだけ~menu-.activeCSS反映
  $(this).addClass("active");//初期でtab1に設定したclass=activeをthisで開けたタブに切り替え
  $($(this).attr("href")).show();//
  event.preventDefault();
});

//thisは3行目の「aタグがクリックされた瞬間」を指す
//開けてるタブにactive適用されていると考える