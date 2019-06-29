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

        $view .= '<div class="item">
                    <a class="ui tiny image"> 
                    <img src="https://semantic-ui.com/images/avatar/large/stevie.jpg"> 
                    </a>
                    <div class="content"> <a class="header" href="'.changeUrlByEnv('praise_post_form.php').'?praisee_id='.$result["user_id"] . '">'. $result["name"].'</a>
                        <div class="description">
                            <p> <a href="'.changeUrlByEnv("praise_post_form.php").'?praisee_id=' . $result["user_id"] . '">チップを贈る</a></p>
                        </div>
                    </div>
                </div>';
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
<title>timeline</title>
<link rel="stylesheet" href="css/range.css">
<script src="js/icon.js"></script>

</head>

<style>

body {
  font-family: "font name", sans-serif;
}

.event{
  padding-top:30px !important;
  padding-bottom:30px !important;
  border-top:solid 1px #f0f0f0 !important;
}

.inverted .header,
.inverted .item{
  color:#000000de !important;
  padding-left:20px !important;
}
</style>


        <?php include "sidebar.php"; ?>    
            <div class="test" style="width: 100%;">
            <?php include "header1.php"; ?>
            

            <div class="ui items" style="margin-left: 18%;;
                                        height: calc(100vh - 129px);
                                        overflow: scroll;">
                <?=$view?>
            </div>
        </div>

</body>
</html>
