<?php
session_start();
include "funcs.php";
chkSsid();
$pdo = db_con();
$user_id = $_SESSION["user_id"];
//２．データ登録SQL作成
$stmt = $pdo->prepare("SELECT praises.praise_id,praises.praise_content, (gs_user_table.name) AS praiser_id, (gs_user_table1.name) AS praisee_id
FROM (praises LEFT JOIN gs_user_table ON praises.praiser_id = gs_user_table.user_id) LEFT JOIN gs_user_table AS gs_user_table1 ON praises.praisee_id = gs_user_table1.user_id
ORDER BY praises.praise_id");

$status = $stmt->execute();
//３．データ表示
$view = "";
if ($status == false) {
    sqlError($stmt);
} else {
    //Selectデータの数だけ自動でループしてくれる
    //FETCH_ASSOC=http://php.net/manual/ja/pdostatement.fetch.php
    while ($result = $stmt->fetch(PDO::FETCH_ASSOC)) {
      // var_dump($result);
      // echo "<br><br><br>";
        $view .= '<p>';
        // $view .= '<a href="delete.php?id=' . $result["id"] . '">';
        // $view .= "[削除] ";
        // $view .= '</a>';
        $view .= '<a href="user_praise.php?praisee_id='.$result["praise_id"].'">';
        $view .= $result["praise_content"] . ",".$result["praiser_id"]."さんから".$result["praisee_id"]."さんへ";
        // $view .= "".$result["praiser_id"]."さんから".$result["praisee_id"]."さんへ";
        $view .= '<a href="user_praise.php?praisee_id='.$result["praise_id"].'">';
        $view .= '</a>';
        $view .= '</a>';
        $view .= '</a>';
        $view .= '</p>';
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
      <a class="navbar-brand" href="userlist.php">お礼の気持ちを送る</a>
      </div>
      <div class="navbar-header">
      <a class="navbar-brand" href="userlist.php">現在の保有ポイント数：<?php renderTotalPointOfThisMonth($pdo); ?></a>
      </div>
      <div class="navbar-header">
      <a class="navbar-brand" href="logout.php">ログアウト</a>
      </div>
    </div>
    
  </nav>
</header>
<!-- Head[End] -->

<!-- Main[Start] -->
<div>

    送りました！

    <div class="container jumbotron"> <a href="timeline.php">トップへ戻る</a> </div>
</div>
<!-- Main[End] -->

</body>
</html>
