<?php
session_start();
include "funcs.php";
chkSsid();
$pdo = db_con();


//２．データ登録SQL作成
$stmt = $pdo->prepare("SELECT * FROM gs_user_table");
$status = $stmt->execute();

//３．データ表示
$view = "";
if ($status == false) {
    sqlError($stmt);
} else {
    //Selectデータの数だけ自動でループしてくれる
    //FETCH_ASSOC=http://php.net/manual/ja/pdostatement.fetch.php
    while ($result = $stmt->fetch(PDO::FETCH_ASSOC)) {
      //自分を表示させない
      if($result["user_id"] != $_SESSION["user_id"]){

        $view .= '<p>';
        // $view .= '<a href="delete.php?id=' . $result["id"] . '">';
        // $view .= "[削除] ";
        // $view .= '</a>';
        $view .= '<a href="praise_post_form.php?praisee_id=' . $result["user_id"] . '">';
        $view .= $result["name"];
        $view .= '<a href="praise_post_form.php?praisee_id=' . $result["user_id"] . '">';
        $view .= "     称賛を送る";
        $view .= '</a>';
        $view .= '</a>';
        $view .= '</a>';
        $view .= '</p>';
      }
    }

}
?>


<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">


<?php
    include "header.php";
?>   

</head>
<body id="main">
<!-- Head[Start] -->
<header>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header"> 
      <a class="navbar-brand" href="timeline.php">タイムラインへ</a>
      </div>
      <div class="navbar-header">
      <a class="navbar-brand" href="userlist.php">現在の保有ポイント数：<?php renderPoint($pdo); ?></a>
      </div>
    </div>
  </nav>
</header>
<!-- Head[End] -->

<!-- Main[Start] -->
<div>
    <div class="container jumbotron"><?=$view?></div>
</div>
<!-- Main[End] -->

</body>
</html>
