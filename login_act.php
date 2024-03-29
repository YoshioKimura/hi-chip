<?php
//最初にSESSIONを開始！！ココ大事！！
session_start();

$email = $_POST["email"];
$lpw = $_POST["lpw"];

//1.  DB接続します
include("funcs.php");
$pdo = db_con();

//2. データ表示SQL作成
$stmt = $pdo->prepare("SELECT * FROM gs_user_table WHERE email=:email");
$stmt->bindValue(':email', $email, PDO::PARAM_STR);
$status = $stmt->execute();

//3. SQL実行時にエラーがある場合STOP
if($status==false){
    sqlError($stmt);
}

//4. 抽出データ数を取得
$val = $stmt->fetch(); //1レコードだけ取得する方法

if( password_verify( $lpw , $val["lpw"] ) ){
  //Login成功時
  $_SESSION["chk_ssid"]  = session_id();
  $_SESSION["kanri_flg"] = $val['kanri_flg'];
  $_SESSION["name"]      = $val['name'];
  $_SESSION["user_id"]      = $val['user_id'];
  $_SESSION["current_available_point"] = $val['current_available_point'];
  header('Location: timeline.php');
}else{
  //Login失敗時(Logout経由)
  header('Location: logout.php');
}
?>

