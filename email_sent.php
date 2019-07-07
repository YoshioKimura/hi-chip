<?php 
session_start();
include "funcs.php";
$pdo = db_con();

?>

<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width">
<link rel="stylesheet" href="css/main.css" />
<title>ログイン</title>
</head>
<body>

<header>
  <?php include dirname(__FILE__)."/header2.php";?>
</header>


<style>

.sent-wrapper{
  margin-top: 30px;
}

.send-finished-chip{
  font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
  font-weight:bold;
  width:100%;
  text-align:center;
}

.send-finished-available{
  font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
  font-weight:bold;
  width:100%;
  text-align:center;
}

.sent-redilect{
  font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
  font-weight:bold;
  width:100%;
  margin-top:20px;
  text-align:center; 
}

</style>

</head>
<body id="main">

<div style="max-width:130px;margin:auto;margin-top:100px;">
<img style="width:130px;" src="img/logo.png" alt="">
</div>


<div class="sent-wrapper">
  <div class="send-finished-chip"><?= $_SESSION["email_register"]; ?>に認証用のメールを送りました！</div>
  <div class="sent-redilect"> 
      <!-- <a href="timeline.php">トップへ戻る</a>  -->
      <h1>メールが送信されました。</h1>
  </div>
</div>


</body>
</html>





</body>
</html>