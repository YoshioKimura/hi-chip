<?php
session_start();
include "funcs.php";
chkSsid();
$pdo = db_con();

$user_id = $_GET["user_id"];
echo $user_id;
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
        $view .= '<a href="user_praise.php?praisee_id=' . $result["user_id"] . '">';
        $view .= $result["name"];
        $view .= '<a href="user_praise.php?praisee_id=' . $result["user_id"] . '">';
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
<!--
<title>フリーアンケート表示</title>
<link rel="stylesheet" href="css/range.css">
<link href="css/bootstrap.min.css" rel="stylesheet">
<style>div{padding: 10px;font-size:16px;}</style>
-->


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
      <a class="navbar-brand" href="userlist.php">現在の保有ポイント数：<?php renderTotalPointOfThisMonth($pdo); ?></a>
      </div>
    </div>
  </nav>
</header>
<!-- Head[End] -->

<!-- Main[Start] -->


<div class="ui secondary pointing menu">
  <a class="item " data-urlStr="profile_received.php"> 
    もらった
  </a>
  <a class="item" data-urlStr="profile_sent.php"> 
    おくった
  </a>
  <a class="item active" data-urlStr="profile_clapped.php"> 
    拍手した
  </a>

</div>
    <div class="container jumbotron"><?=$view?></div>

<!-- Main[End] -->


<script>
  $(".menu .item").click(function () {
            $(".item").removeClass('active');
            $(this).addClass('active');
            var urlStr = $(this).attr('data-urlStr');
            location.href = "http://localhost/hi-chip/" + urlStr + "?user_id=<?= $user_id ?>";

  });




</script>

</body>
</html>
