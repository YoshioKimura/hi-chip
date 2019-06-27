




<?php
session_start();
include "funcs.php";
chkSsid();
$pdo = db_con();
include "header1.php";

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
      $view .= '<div class="item">
      <a class="ui tiny image"> 
      <img src="https://semantic-ui.com/images/avatar/large/stevie.jpg"> 
      </a>
      <div class="content"> <a class="header" href="'.dirname(__FILE__)."/praise_post_form.php".'?praisee_id='.$result["user_id"] . '">'. $result["name"].'</a>
          <div class="description">
              <p> <a href="'.dirname(__FILE__)."/praise_post_form.php".'?praisee_id='.$result["user_id"].'">チップを贈る</a></p>
          </div>
      </div>
  </div>';
      }
}
?>



<div class="ui items">

        <?= $view ?>
</div>
</body>
</html>