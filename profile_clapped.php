<?php
session_start();
include "funcs.php";
chkSsid();
$pdo = db_con();

$user_id = $_GET["user_id"];
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
<title>G's Chip</title>
<link rel="shortcut icon" href="img/favicon2.png" type="image/png">


          <?php include "sidebar.php"; ?>    
            <div class="test" style="width: 100%;">
            <?php include "header1.php"; ?>
            <div class="ui secondary pointing menu" style="width: 175px;margin-left: 18%;">
                <a class="item tab" data-urlStr="timeline.php"> 
                        すべて
                    </a>
                    <a class="item tab" data-urlStr="timeline_received.php"> 
                        もらった
                    </a>
                    <a class="item tab active" data-urlStr="timeline_sent.php"> 
                        おくった
                    </a>
                    <!-- <a class="item" data-urlStr="timeline_clapped.php"> 
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
  $(".tab").click(function () {
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
