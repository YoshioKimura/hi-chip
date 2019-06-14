


<!-- https://qiita.com/kgkgon/items/4ea0675afde639e6d540 -->

<?php
//共通変数・関数ファイルを読込み
session_start();
include 'funcs.php';

// postがある場合
if(isset($_POST['postId'])){
    $praise_id = $_POST['postId'];
    try{
        //DB接続
        $pdo = db_con();
        // goodテーブルから投稿IDとユーザーIDが一致したレコードを取得するSQL文
        $sql = 'SELECT * FROM likes WHERE praise_id = :praise_id AND user_id = :user_id';
        $data = array(':praise_id' => $praise_id, 'user_id' => $_SESSION['user_id']);
        // クエリ実行
        $stmt = queryPost($pdo, $sql, $data);
        $resultCount = $stmt->rowCount();
        // レコードが1件でもある場合
        if(!empty($resultCount)){
            // レコードを削除する
            $sql = 'DELETE FROM likes WHERE praise_id = :praise_id AND user_id = :user_id';
            $data = array(':praise_id' => $praise_id, ':user_id' => $_SESSION['user_id']);
            // クエリ実行
            $stmt = queryPost($pdo, $sql, $data);
            echo count(getGood($praise_id));
        }else{
            // レコードを挿入する
            $sql = 'INSERT INTO likes (praise_id, user_id, created_at) VALUES (:praise_id, :user_id, :date)';
            $data = array(':praise_id' => $praise_id, ':user_id' => $_SESSION['user_id'], ':date' => date('Y-m-d H:i:s'));
            // クエリ実行
            $stmt = queryPost($pdo, $sql, $data);
            echo count(getGood($praise_id));
        }
    }catch(Exception $e){
        error_log('エラー発生：'.$e->getMessage());
    }
}