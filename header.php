
<?php
include dirname(__FILE__)."/funcs.php"; 
echo changeUrlByEnv(""); 
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>


<a href="<?= changeUrlByEnv("header.php") ?>" target="_blank">headerに飛ぶ</a><br>
<a href="<?= changeUrlByEnv("sidebar.php") ?>" target="_blank">sidebarに飛ぶ</a>

<?php 
// include dirname(__FILE__)."/sidebar.php"; 
?>
        <!-- <div class="test" style="width: 100%;"> -->
        <?php include dirname(__FILE__)."/header1.php";?>
    <!-- </div> -->
</body>
</html>