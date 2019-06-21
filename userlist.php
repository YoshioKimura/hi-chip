
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
            <div class="content"> <a class="header" href="http://localhost/gs/dev13/hi-chip/praise_post_form.php?praisee_id='.$result["user_id"] . '">'. $result["name"].'</a>
                <div class="description">
                    <p> <a href="http://localhost/gs/dev13/hi-chip/praise_post_form.php?praisee_id=' . $result["user_id"] . '">チップを贈る</a></p>
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

body {
  font-family: "font name", sans-serif;
}


.event{
  padding-top:30px !important;
  padding-bottom:30px !important;
  border-top:solid 1px #f0f0f0 !important;
}

.h20{
   height:20px !important;
}

.inverted .header,
.inverted .item{
  color:#000000de !important;
  padding-left:20px !important;
}
</style>


         <?php include "sidebar.php"; ?>
 
        
        <div class="test">
        <?php include "header.php"; ?>

        <div class="wrapper_content">



            <div class="ui items" style="margin-left: 250px;
                                    height: 80vh;
                                    overflow: scroll;
                                    position: fixed;
                                    bottom: 0;">
              <?= $view ?>
            </div>
        </div>
        </div>
        </div>


<header>

<body id="main">

  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
      <a class="navbar-brand" href="userlist.php">お礼の気持ちを送る</a>
      </div>
      <div class="navbar-header">
      <a class="navbar-brand" href="profile_received.php?user_id=<?php echo $user_id ?>"><?php echo $_SESSION["name"] ?> </a>
      </div>
            <div class="navbar-header">
      現在のポイント数：<?php renderCurrentAvailablePoint($pdo); ?>
      </div>

    </div>
    
  </nav>
</header>
<!-- Head[End] -->

<!-- Main[Start] -->


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
          location.href = "http://localhost/gs/dev13/hi-chip/" + urlStr;
    })

</script>



</body>
</html>


















