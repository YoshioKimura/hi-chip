<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>データ登録</title>
  <link href="css/bootstrap.min.css" rel="stylesheet">
  <style>div{padding: 10px;font-size:16px;}</style>
</head>
<body>

<!-- Head[Start] -->
<header>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
    <div class="navbar-header"><a class="navbar-brand" href="register.php">会員登録</a></div>
    </div>
  </nav>
</header>
<!-- Head[End] -->

<!-- Main[Start] -->
<form method="post" action="user_insert.php">
  <div class="jumbotron">
   <fieldset>
    <legend>会員登録</legend>
     <label>名前：<input type="text" name="name" value="佐藤 健"></label><br>
     <label>Email：<input type="text" name="email" value="info@call.jp"></label><br>
     <label>パスワード：<input type="password" name="lpw" value="hogehoge"></label><br>
     <input type="submit" value="送信">
    </fieldset>
  </div>
</form>
<!-- Main[End] -->


</body>
</html>
