# SpreadsheetCustomFunction_getPhonetic_byGoogleAppsScript
Googleスプレッドシートで利用可能な漢字のよみがな(ふりがな・ルビ)を取得するカスタム関数getPhoneticのGoogle Apps Scriptのスクリプトです。

# 導入方法
* Googleスプレッドシートのメニューバーから「ツール＞スクリプトエディタ」を選択
* GASのスクリプトエディタが開くので、前述のコードをコピペして貼り付け、「ctrl + s」で保存

上記が完了すれば、スプレッドシートでオリジナルのgetPhonetic()関数が利用できます。

引数にふりがなを取得したい漢字を含んだセルを指定し、ふりがなを取得できます。

例)` =getPhonetic(A1)`
