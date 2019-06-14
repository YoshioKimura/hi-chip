<?php
//1. POSTデータ取得
$name = $_POST["name"];
$email = $_POST["email"];
$lpw = $_POST["lpw"];

$default_point = 400;

$point = $default_point;
$kanri_flg = 0;



//2. DB接続します
include "funcs.php";
$pdo = db_con();
//パスワードハッシュ化
$hashed_lpw = password_hash($lpw,PASSWORD_DEFAULT );
//３．データ登録SQL作成
$sql = "INSERT INTO gs_user_table(name,email,lpw,kanri_flg,point,indate)VALUES(:name,:email,:lpw,$kanri_flg,$point,sysdate())";
$stmt = $pdo->prepare($sql);
$stmt->bindValue(':name', $name, PDO::PARAM_STR); //Integer（数値の場合 PDO::PARAM_INT)
$stmt->bindValue(':email', $email, PDO::PARAM_STR); //Integer（数値の場合 PDO::PARAM_INT)
$stmt->bindValue(':lpw', $hashed_lpw, PDO::PARAM_STR); //Integer（数値の場合 PDO::PARAM_INT)
$status = $stmt->execute();

//４．データ登録処理後
if ($status == false) {
    sqlError($stmt);
} else {
    //５．login.phpへリダイレクト
    redirect("login.php");
}
