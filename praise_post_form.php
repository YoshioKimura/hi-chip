
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

<!-- Head[Start] -->
<!-- <header>
  <nav class="navbar navbar-default">
    <div class="container-fluid"> -->


<div class="ui two column centered grid">

  <div class="column">
  <div class="navbar-header"><a class="navbar-brand" href="timeline.php">トップページへ</a></div>
  <form method="post" action="praise_insert.php" class="ui form">
  <div class="jumbotron">
   <fieldset>
    <legend>称賛をおくる</legend>
    <legend>おくれるポイント数：<?= $_SESSION["current_available_point"] ?></legend>
    <div class="field">
    <label>送るポイント数：</label>
    <input type="text" id="inputpoint" placeholder="120" name="sent_point" required>

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
  if($("#point").val() == ""){
    alert("送付するポイントを入力してください")
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
