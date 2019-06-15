
<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!--<link rel="stylesheet" href="css/range.css">-->
<!--<link href="css/bootstrap.min.css" rel="stylesheet">-->
<!--<style>div{padding: 10px;font-size:16px;}</style>-->
<title>HiChip</title>


<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.9/semantic.min.css"/>
<link rel="stylesheet" href="css/all.css"/>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.9/semantic.min.js"></script>

<style>
    .ui.large.menu{
      margin-top:0;
    }
    
</style>

</head>
<body id="main">
  <div class="ui inverted large borderless fluid menu column">
    <a class="header item" href="http://localhost/gs/dev13/PHP04/timeline.php">HiChip</a>
    <div class="right menu">
        <div class="ui dropdown item">
            <div class="header">
                <h4>MENU</h4>
            </div>
            <i class="share square icon"></i>
            <div class="menu">
                <div class="item">
                <a href="timeline.php" style="color:#111">
                    <small >
                        <i class="th icon"></i>
                        タイムライン
                    </small>
                </a>
                </div>
                <div class="item">
                <a href="userlist.php" style="color:#111">
                    <small>
                        <i class="clipboard outline icon"></i>
                        褒める相手を選ぶ
                    </small>
                    </a>
                </div>
                <div class="item">
                <a href="logout.php" style="color:#111">
                    <small>
                        <i class="logout icon"></i>
                        LOG OUT
                    </small>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
<script>
        $(document).ready(function () {
            $('.dropdown').dropdown();
            
        });
    
</script>

    </body>
    
</html>


<!-- Head[End] -->
