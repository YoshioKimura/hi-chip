
<?php
session_start();
include "funcs.php";
include "header.php";
chkSsid();
$pdo = db_con();
$user_id = $_SESSION["user_id"];
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
ORDER BY
praises.praise_created_at DESC");

$status = $stmt->execute();
//３．データ表示
$view = "";
$praise_id = ''; //投稿ID
$dbPostData = ''; //投稿内容
$dbPostGoodNum = ''; //いいねの数

if ($status == false) {
    sqlError($stmt);
} else {
    //Selectデータの数だけ自動でループしてくれる
    //FETCH_ASSOC=http://php.net/manual/ja/pdostatement.fetch.php
    while ($result = $stmt->fetch(PDO::FETCH_ASSOC)) {

      $praise_id = $result['praise_id'];
      // DBから投稿データを取得
      $dbPostData = getPostData($praise_id);
      // DBからいいねの数を取得
      $dbPostGoodNum = count(getGood($praise_id));
        // $view .= '<p>';
        // $view .= '</a>';
        //     $view .= '<a href="user_praise.php?praisee_id='.$result["praise_id"].'">';
        //                 $view .= $result["praise_content"] . ",".$result["praiser_id"]."さんから".$result["praisee_id"]."さんへ";
        //               $view .= '<a href="user_praise.php?praisee_id='.$result["praise_id"].'">';
        //     $view .= '</a>';
        // $view .= '</a>';
        // $view .= '<p>  <div class="btn btn-primary" data-id="">拍手</div>'.$result["likes"].'</p>';
        // $view .= '<section class="post" data-postid="'.$result["praise_id"].'"><div class="btn-good ';
        //       if(isGood($_SESSION['user_id'], $result['praise_id'])){
        //         $view .= 'active';
        //       }
        //       // <!-- 自分がいいねした投稿にはハートのスタイルを常に保持する -->
        //       $view .= '"><i class="fa-heart fa-lg px-16';
        //       //いいね押した状態ならハートが塗りつぶされる
        //         if(isGood($_SESSION['user_id'],$result['praise_id'])){ 
        //           $view .= ' active fas';
        //         }else{ //いいね押した状態でないならハートのスタイルが取り消される
        //           $view .= ' far';
        //       };
        // $view .= '"></i><span>'. $dbPostGoodNum .'</span>';
        // $view .= '</div>';
        // $view .=  '</section>';
        // $view .= '</p>';

        $view .= '
        <div class="event">
          <div class="label">
            <img src="https://semantic-ui.com/images/avatar/small/jenny.jpg">
          </div>
          <div class="content">
            <div class="summary"> <a href="/hi-chip/profile.php$id="'.$result["praiser_id"].'">
            '.$result["praiser_name"].'さん</a>から<a href="/hi-chip/profile.php$id='.$result["praisee_id"].'">'.$result["praisee_name"].'</a> 拍手 <a>coworker</a> group.
              <div class="date">'.$result["praise_created_at"].'
              
              </div>
              '.$result["sent_point"].'
            </div>
          </div>
        </div>';

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
</style>





<body id="main">
<!-- Head[Start] -->
<header>

<i class="ambulance icon"></i>
<i class="bicycle icon"></i>
<i class="bus icon"></i>
<i class="car icon"></i>
<i class="fighter jet icon"></i>
<i class="motorcycle icon"></i>
<i class="paper plane icon"></i>
<i class="paper plane outline icon"></i>
<i class="plane icon"></i>
<i class="rocket icon"></i>
<i class="ship icon"></i>
<i class="shopping cart icon"></i>
<i class="space shuttle icon"></i>
<i class="subway icon"></i>
<i class="taxi icon"></i>
<i class="train icon"></i>
<i class="truck icon"></i>
<i class="wheelchair icon"></i>

  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
      <a class="navbar-brand" href="userlist.php">お礼の気持ちを送る</a>
      </div>
      <div class="navbar-header">
      <a class="navbar-brand" href="profile.php?user_id=<?php echo $user_id ?>"><?php echo $_SESSION["name"] ?> </a>
      </div>
            <div class="navbar-header">
      現在のポイント数：<?php renderPoint($pdo); ?>
      </div>

    </div>
    
  </nav>
</header>
<!-- Head[End] -->

<!-- Main[Start] -->


<div class="ui secondary pointing menu">
  <a class="item" data-urlStr="timeline.php"> 
    すべて
  </a>
  <a class="item" data-urlStr="timeline_received.php"> 
    もらった
  </a>
  <a class="item" data-urlStr="timeline_sent.php"> 
    おくった
  </a>
  <a class="item active" data-urlStr="timeline_clapped.php"> 
    拍手した
  </a>

</div>






<div class="ui feed"><?=$view?></div>
<!-- Main[End] -->


<script>
  $(function(){
      var $good = $('.btn-good'), //いいねボタンセレクタ
                  goodPostId; //投稿ID
      $good.on('click',function(e){
          e.stopPropagation();
          var $this = $(this);
          //カスタム属性（postid）に格納された投稿ID取得
          goodPostId = $this.parents('.post').data('postid'); 
          // alert(goodPostId)
          $.ajax({
              type: 'POST',
              url: 'goodAjax.php', //post送信を受けとるphpファイル
              data: { postId: goodPostId} //{キー:投稿ID}
          }).done(function(data){
              console.log('Ajax Success');
              // いいねの総数を表示
              $this.children('span').html(data);
              // いいね取り消しのスタイル
              $this.children('i').toggleClass('far'); //空洞ハート
              // いいね押した時のスタイル
              $this.children('i').toggleClass('fas'); //塗りつぶしハート
              $this.children('i').toggleClass('active');
              $this.toggleClass('active');
          }).fail(function(msg) {
              console.log('Ajax Error');
          });
      });
  });


  $(".menu .item").click(function () {
            $(".item").removeClass('active');
            $(this).addClass('active');
            var urlStr = $(this).attr('data-urlStr');
          location.href = "http://localhost/hi-chip/" + urlStr;
        })




</script>



</body>
</html>