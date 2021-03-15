//スプレッドシートで利用可能な漢字のふりがなを取得するカスタム関数
function getPhonetic(word) {
  //スペースや改行などの特殊文字はすべて取り除く
  word = word.replace(/[\r\n\t\s]+/g,"");
  //よみたんAPIのリクエストURLによみがなを取得したい文字をパラメータに付与
  let url = "https://yomi-tan.jp/api/yomi.php?ic=UTF-8&oc=UTF-8&k=h&n=3&t=" + word;
  //よみたんAPIにhttp getで漢字のよみがなをリクエストし、3つの応答結果のうち1個目を取得
  let phonetic = UrlFetchApp.fetch(url).getContentText().split(",")[0];
  //スプレッドシートのカスタム関数によみがなを返却
  return phonetic;
}
