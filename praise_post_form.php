
<?php
session_start();
include "funcs.php";
chkSsid();
$pdo = db_con();

//1. データ取得
$praisee_id = $_GET["praisee_id"];


?>


<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">

<?php
    include "header1.php";
?>   

</head>
<body>

<div class="ui two column centered grid">

  <div class="column">
  <div class="navbar-header"><a class="navbar-brand" href="timeline.php">トップページへ</a></div>
  <form method="post" action="praise_insert.php" class="ui form" name="form1">
  <div class="jumbotron">
   <fieldset>
    <legend>チップをおくる</legend>
    <legend>おくれるポイント数：<?= $_SESSION["current_available_point"] ?></legend>
    <div class="field">
    <label>送るポイント数(半角数字)：</label>
    <input type="text" id="inputpoint" placeholder="50 " name="sent_point" required>

  </div>

         
     <div class="field">
    <label>コメント</label>
    <textArea name="praise_content" rows="4" cols="40" placeholder="ユーザーヒアリングとディスカッションにお付き合い頂きありがとうございました！！  " required></textArea>
  </div>
     <input type="hidden" name="praisee_id" value="<?= $praisee_id ?>">
     <button class="ui button" value="送信" type="submit">Submit</button>
    </fieldset>
  </div>
</form> 

  </div>


</div>


<!-- Main[End] -->
<script>

$('button[type="submit"]').on('click',function(){
  if(document.form1.sent_point.value.match(/[^0-9]+/) || document.form1.sent_point.value.match(/[^0-9]+/)){
    window.alert('数字以外が入力されています'); 
    return false;
  }
  if($("#inputpoint").val() == ""){
    alert("送付するポイントを入力してください")
    return false;
  }

  if($("#inputpoint").val() > 120){
    alert("一度におくれるのは120ポイント以下です")
    return false;
  }

  var currentAvailablePoint = <?= $_SESSION["current_available_point"] ?>;
  var inputPoint = $("#inputpoint").val();
  if(currentAvailablePoint < inputPoint){
    alert("ポイントが足りません");
    return false;
  }
});

</script>

</body>
</html>
