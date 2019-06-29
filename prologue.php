
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
<title>timeline</title>
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

                <p>Hi-Chipを導入した組織の従業員には、毎週400ポイントがweb上で配られ、好きなときに、1回最大120ポイントを上限に好きなチームメンバーにメッセージと共に贈ることができます。もらったポイントは、その月の給料として1ポイント1円〜5円で実際に反映されます。</p>

                <p>「掃除してくれてありがとう！」</p>
                <p>「新事業の相談乗ってくれてありがとうございました！」</p>
                <p>「旅行のお土産美味しかったです」</p>
                <p>「ミーティングの議事録助かりました!」</p>

                <p>何気ない日常の中での目立たない活躍を称賛と共に可視化することで、チームの一体感や心理的な安心感を増やし、ほんのちょっぴり世界が優しくなる、そんなサービスを目指しています。</p>

                <p>もちろん、その役割はビジネス面でもメリットになります。
                <p>称賛だけにとどまらず、組織のビジョン、ミッションに沿った行動をHi-Chipで見える化することで、バリューの浸透を助けます。</p>

                <p>まだバリューがはっきりと決まっていない小さな組織においても、いつかそれを決めるときに役立つ時が来るでしょう。</p>

                <p>従来の社員総会での表彰などは、四半期に１回の上層部による、少数の選ばれた人のための、高額なお金を受け取る仕組みでした。</p>

                <p>Hi-Chipでは、その時その時の、組織メンバー全員による、全員のための、少額の感謝を受け取る仕組みです。</p>
                <p>Hi-Chipは21世紀の時代に即した、新しい給与の仕組みを目指します。</p>

            </p>
            </div>
        </div>
</body>
</html>