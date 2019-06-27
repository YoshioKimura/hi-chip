<?php
session_start();
include "funcs.php";
chkSsid();
$pdo = db_con();

$user_id = $_GET["user_id"];
//２．データ登録SQL作成
$stmt = $pdo->prepare("SELECT
praises.praise_id,
praises.praise_content,
praises.sent_point,
praises.praise_created_at,
praises.praiser_id,
praises.praisee_id,
(gs_user_table.name) AS praiser_name,
(gs_user_table1.name) AS praisee_name
FROM
(
    praises
    LEFT JOIN
        gs_user_table
    ON  praises.praiser_id = gs_user_table.user_id
)
LEFT JOIN
    gs_user_table AS gs_user_table1
ON  praises.praisee_id = gs_user_table1.user_id
WHERE praises.praisee_id = $user_id
ORDER BY
praises.praise_created_at DESC");
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
      $view .= '
      <div class="event">
          <div class="label"> 
              <img src="https://semantic-ui.com/images/avatar/small/jenny.jpg"> 
          </div>
          <div class="content">
              <div class="summary"> 
                  <a href="'.changeUrlByEnv("profile_received.php").'?user_id='.$result["praiser_id"].'">'.$result["praiser_name"].'</a>さんから
                  <a href="'.changeUrlByEnv("profile_received.php").'?user_id='.$result["praisee_id"].'">'.$result["praisee_name"].'</a>さんへ '.$result["sent_point"].' ポイント贈られました！
                  <div class="date"> 2019-06-14 18:38 </div>
              </div>
              <div class="extra text"> '.$result["praise_content"].' </div>
              <!--
              <div class="meta">
                  <a class="like"> <i class="like icon"></i> 5 Likes </a>
              </div> -->
          </div>
      </div>';
    }
    if($view == ""){
        $view .= 'まだ投稿がありません。'; 
    }
}
?>


<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
.event{
  padding-top:30px !important;
  padding-bottom:30px !important;
  border-top:solid 1px #f0f0f0 !important;
}
</style>

<body>
        <?php include "sidebar.php"; ?>    
            <div class="test" style="width: 100%;">
            <!-- ヘッダー部分を読み込み -->
            <?php include "header1.php"; ?>
            
            <div class="ui secondary pointing menu" style="width: 175px;margin-left: 18%;">
                    <a class="item active" data-urlStr="profile_received.php"> 
                        もらった
                    </a>
                    <a class="item" data-urlStr="profile_sent.php"> 
                        おくった
                    </a>
                    <!-- <a class="item" data-urlStr="profile_clapped.php"> 
                        拍手した
                    </a> -->
            </div>

            <div class="ui feed" style="margin-left: 18%;;
                                        height: calc(100vh - 129px);
                                        overflow: scroll;">
                <?=$view?>
            </div>
        </div>


<script>
  $(".menu .item").click(function () {
            $(".item").removeClass('active');
            $(this).addClass('active');
            let urlStr = $(this).attr('data-urlStr');
            let targetHref = "<?= changeUrlByEnv('') ?>";
            let user_id = "<?= $user_id ?>";
            console.log(`${targetHref}${urlStr}?user_id=${user_id}`);
            location.href = `${targetHref}${urlStr}?user_id=${user_id}`;
  });




</script>

</body>
</html>
