<?php
session_start();
include "funcs.php";
$pdo = db_con();
//1. POSTデータ取得
$praiser_id = $_SESSION["user_id"];
$praisee_id = $_POST["praisee_id"];
// $praise_title = $_POST["praise_title"];
$praise_content = $_POST["praise_content"];
$sent_point = $_POST["sent_point"];
$user_id = $_SESSION["user_id"];

echo "<br>";
echo $sent_point;

//2. DB接続します


echo $sent_point;
// exit();
//３．データ登録SQL作成
$sql = "INSERT INTO praises(praise_id,praise_content,sent_point,praiser_id,praisee_id,praise_created_at)VALUES(NULL,:praise_content,:sent_point,:praiser_id,:praisee_id, sysdate())";
$stmt = $pdo->prepare($sql);
// $stmt->bindValue(':id', $id, PDO::PARAM_INT); //Integer（数値の場合 PDO::PARAM_INT)
// $stmt->bindValue(':name', $name, PDO::PARAM_STR); //Integer（数値の場合 PDO::PARAM_INT)
// $stmt->bindValue(':praise_title', $praise_title, PDO::PARAM_STR); //Integer（数値の場合 PDO::PARAM_INT)
$stmt->bindValue(':praise_content', $praise_content, PDO::PARAM_STR); //Integer（数値の場合 PDO::PARAM_INT)
$stmt->bindValue(':sent_point', $sent_point, PDO::PARAM_INT);
$stmt->bindValue(':praiser_id', $praiser_id, PDO::PARAM_INT);
$stmt->bindValue(':praisee_id', $praisee_id, PDO::PARAM_INT);
$status = $stmt->execute();

$sql2 = "update gs_user_table SET total_point_this_month =
  case user_id
    WHEN $praiser_id THEN `total_point_this_month` - $sent_point
    WHEN $praisee_id THEN `total_point_this_month` + $sent_point
  END
WHERE user_id IN ($praiser_id,$praisee_id)";

$stmt2 = $pdo->prepare($sql2);
$status2 = $stmt2->execute();

//４．データ登録処理後
if ($status == false || $status2 == false) {
    sqlError($stmt);
    sqlError($stmt2);
} else {
    //５．index.phpへリダイレクト
    redirect("send_finished.php");
}
