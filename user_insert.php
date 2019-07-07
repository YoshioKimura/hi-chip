<?php

session_start();
//1. POSTデータ取得
$name = $_POST["name"];
$_SESSION["email_register"] = $_POST["email"];
$lpw = $_POST["lpw"];
$default_point = 200;
$current_available_point = $default_point;
$kanri_flg = 0;



//2. DB接続します
include "funcs.php";
$pdo = db_con();
//パスワードハッシュ化
$hashed_lpw = password_hash($lpw,PASSWORD_DEFAULT );
//３．データ登録SQL作成
$sql = "INSERT INTO gs_user_table(name,email,lpw,kanri_flg,current_available_point,indate)VALUES(:name,:email,:lpw,$kanri_flg,$current_available_point,sysdate())";
$stmt = $pdo->prepare($sql);
$stmt->bindValue(':name', $name, PDO::PARAM_STR); 
$stmt->bindValue(':email', $_SESSION["email_register"] , PDO::PARAM_STR); 
$stmt->bindValue(':lpw', $hashed_lpw, PDO::PARAM_STR); 
$status = $stmt->execute();

//４．データ登録処理後
if ($status == false) {
    sqlError($stmt);
} else {
    $to = $_SESSION["email_register"];
    $subject = "【HiChip】ログイン画面を送付しました。";
    $message = "登録ありがとうございます。\n開発者の木村です。\n\nこちらのURLからログインをお願いいたします。\n".changeUrlByEnv('login.php')."\n\n要望などがあればご気軽に info@call.jp までご連絡下さい。\n今後ともどうぞよろしくお願い致します。\n";
    $headers = $name."さま";
    mail($to,$subject,$message,$headers);
    //５．email_sent.phpへリダイレクト
    redirect("email_sent.php");
}
?>
