






<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>

    <?php include "head.php" ?>

</head>
<body>
<?php include "header1.php" ?>

<?php
session_start();
include "funcs.php";

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
where gs_user_table1.user_id = 2
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

        // $view .= '<div class="event" style="margin-top: 300px;">
        //                     <div class="label">
        //                         <img src="https://semantic-ui.com/images/avatar/small/jenny.jpg">
        //                     </div>
        //                     <div class="content">
        //                         <div class="summary">
        //                             <a href="'.changePathByEnv("profile_received.php").'?user_id='.$result["praiser_id"].'">'.$result["praiser_name"].'</a>さんから
        //                             <a href="'.changePathByEnv("profile_received.php").'?user_id='.$result["praisee_id"].'">'.$result["praisee_name"].'</a>さんへ '.$result["sent_point"].' ポイント贈られました！
        //                                 <div class="date">'.$result["praise_created_at"].'</div>
        //                             '.$result["sent_point"].'
        //                         </div>
        //                     </div>
        //                     <div>
        //                 '.$result["praise_content"].'
        //                     </div>
        //           </div>';
        $view .= '<div class="event">
        <div class="label"> 
            <img src="https://semantic-ui.com/images/avatar/small/jenny.jpg"> 
        </div>
        <div class="content">
            <div class="summary"> 
            <a href="'.changePathByEnv('profile_received.php').'?user_id='.$result["praiser_id"].'">'.$result["praiser_name"].'</a>さんから
            <a href="'.changePathByEnv('profile_received.php').'?user_id='.$result["praisee_id"].'">'.$result["praisee_name"].'</a>さんへ '.$result["sent_point"].' ポイント贈られました！
                <div class="date"> 2019-06-14 18:38 </div>
            </div>
            <div class="extra text"> '.$result["praise_content"].' </div>
            <!--
            <div class="meta">
                <a class="like"> <i class="like icon"></i> 5 Likes </a>
            </div>-->
        </div>
    </div>';

    }
}
?>






<div class="ui feed" style="margin-left: 250px;padding-top: 250px;overflow: scroll;">
<?=$view?>
</div>





    


</body>
</html>