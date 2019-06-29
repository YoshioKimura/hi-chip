
<?php
session_start();
include "funcs.php";

chkSsid();
$pdo = db_con();
$user_id = $_SESSION["user_id"];

?>

<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>G's Chip</title>
<link rel="shortcut icon" href="img/favicon2.png" type="image/png">
<link rel="stylesheet" href="css/range.css">
<script src="js/icon.js"></script>
<!--
<script src="js/jquery-2.1.3.min.js"></script>
<link href="css/bootstrap.min.css" rel="stylesheet">
-->

<!--<style>div{padding: 10px;font-size:16px;}</style>-->


</head>

<style>
.btn-good{
    display: inline-block;
    padding: 0 8px;
    cursor: pointer;
}
.btn-good:hover{
    color: #f44336;
}
.active{
    color: #f44336;
}
.btn-good .active{
    color: #f44336;
}


/*
@font-face {
  font-family: "font name";
  font-weight: 400;
  font-style: normal;
  src: url("fonFile.woff2") format("woff2");
  font-display: swap;
}
*/

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
            <!-- <div class="ui secondary pointing menu" style="width: 250px;margin-left: 18%;">
                <a class="item " data-urlStr="timeline.php"> 
                        すべて
                    </a>
                    <a class="item " data-urlStr="timeline_received.php"> 
                        もらった
                    </a>
                    <a class="item active" data-urlStr="timeline_sent.php"> 
                        おくった
                    </a> -->
                    <!-- <a class="item" data-urlStr="timeline_clapped.php"> 
                        拍手した
                    </a> -->

            <!-- </div> -->

            <div class="ui feed" style="margin-left: 18%;;
                                        height: calc(100vh - 129px);
                                        overflow: scroll;
                                        margin-right: 170px;">
                <h1>コンセプト</h1>
                <p>
                

                <p>Hi-Chipはコミュニティの見えない活躍を称賛し合う、ピアボーナスサービスです。</p>

                <p>従来の会社組織における報奨金の仕組みは、四半期に１回、一部の上層部による、一部の選ばれた人のための、高額なお金を贈呈する仕組みでした。</p>

                <p>その仕組では、何気ない日常の中での目立たない活躍を称賛と共に可視化することはできません。</p>
                <p>それらの問題を解決するのがHi-Chipです。</p>

                <p>Hi-Chipを導入した組織の従業員には、毎週200ポイントがweb上で配られ、好きなときに、1回最大120ポイントを上限に好きなチームメンバーにメッセージと共に贈ることができます。もらったポイントは、1ポイント=1円で受け取ることができます。
                </p>

                <p>「Laravel教えてくれてありがとう！」</p>
                <p>「新事業の相談乗ってくれてありがとうございました！」</p>
                <p>「参考になる人を紹介してくれてありがとうございます。」</p>
                <p>企画のアイデアありがとう！</p>

                <p>何気ない日常の中での目立たない活躍を称賛と共に可視化することで、チームの一体感や心理的安全性をより増やし、ほんのちょっぴり世界が優しくなる、そんなサービスを目指しています。</p>

                <p>今後は称賛だけにとどまらず、組織のビジョン、ミッションに沿った行動をハッシュタグでHi-Chip上で見える化することで、バリューの浸透を四半期の表彰制度などに利用することができます。</p>

                <p>まだバリューがはっきりと決まっていない小さな組織においても、いつかそれを決めるときに役立つ時が来るでしょう。</p>

                <p>Hi-Chipでは、その時その時の、組織メンバー全員による、全員のための、少額の感謝の気持ちをもらえる仕組みです。</p>
                <p>Hi-Chipは21世紀の時代に即した、新しい給与の仕組みを目指します。</p>

            </p>
            </div>
        </div>
</body>
</html>