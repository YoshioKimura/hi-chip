<?php

//共通に使う関数を記述
function h($str){
    return htmlspecialchars($str, ENT_QUOTES);
}

function db_con(){
    try {
        $pdo = new PDO('mysql:dbname=hi_chip;charset=utf8;host=localhost','root','');
        return $pdo;
    } catch (PDOException $e) {
        exit('DB-Connection-Error:'.$e->getMessage());
    }      
}

function changeUrlByEnv($path){
	$developmentEnvUrl = "http://localhost/gs/dev13/hi-chip/";
	$productionEnvUrl = "https://hichip.sakura.ne.jp/";
	//ローカル環境の場合(パスに'htdocs'が含まれていない場合)
	$url = "";
	if($_SERVER['SERVER_NAME'] == "localhost"){
		$url .= $developmentEnvUrl.$path;
		return $url;
	}else{
		$url .= $productionEnvUrl.$path;
		return $url;
	}
}

function redirect($page){
    header("Location: ".$page);
    exit;
}

function sqlError($stmt){
    $error = $stmt->errorInfo();
    exit("ErrorSQL:".$error[2]);
}

function chkSsid(){
    if(!isset($_SESSION["chk_ssid"]) || 
        $_SESSION["chk_ssid"] != session_id()
        ){
	    header('Location: logout.php');
        //ログイン成功時
    }else{
        session_regenerate_id(true);
        $_SESSION["chk_ssid"] = session_id();
    }
}

function getEmailByUserId($pdo , $user_id){
	$stmt = $pdo->prepare('SELECT email FROM gs_user_table WHERE user_id= :user_id');
    $stmt->bindValue(':user_id', $user_id, PDO::PARAM_STR);
	$status = $stmt->execute();
	$val = $stmt->fetch();
	return $val["email"];
}

function getNameByUserId($pdo , $user_id){
	$stmt = $pdo->prepare('SELECT name FROM gs_user_table WHERE user_id= :user_id');
    $stmt->bindValue(':user_id', $user_id, PDO::PARAM_STR);
	$status = $stmt->execute();
	$val = $stmt->fetch();
	return $val["name"];
}

function renderTotalPointThisMonth($pdo){
    $stmt = $pdo->prepare('SELECT SUM(sent_point) AS total_point_this_month FROM praises WHERE praisee_id=:user_id and praise_created_at > DATE_SUB(NOW(), INTERVAL 1 MONTH)');
    $stmt->bindValue(':user_id', $_SESSION["user_id"], PDO::PARAM_STR);
    $status = $stmt->execute();
    //3. SQL実行時にエラーがある場合STOP
    if($status==false){
        sqlError($stmt);
    }
    //4. 抽出データ数を取得
    $val = $stmt->fetch();
	$_SESSION["total_point_this_month"] = $val["total_point_this_month"];
	if($_SESSION["total_point_this_month"] == ""){
		$_SESSION["total_point_this_month"] = 0;
	}
    echo $_SESSION["total_point_this_month"];
}

function renderTotalPointSinceRegister($pdo){
    $stmt = $pdo->prepare('SELECT SUM(sent_point) AS total_point_since_register FROM praises WHERE praisee_id= :user_id');
    $stmt->bindValue(':user_id', $_SESSION["user_id"], PDO::PARAM_STR);
    $status = $stmt->execute();
    //3. SQL実行時にエラーがある場合STOP
    if($status==false){
        sqlError($stmt);
    }
    //4. 抽出データ数を取得
    $val = $stmt->fetch();
	$_SESSION["total_point_since_register"] = $val["total_point_since_register"];
	if($_SESSION["total_point_since_register"] == ""){
		$_SESSION["total_point_since_register"] = 0;
	}
    echo $_SESSION["total_point_since_register"];
}


function renderCurrentAvailablePoint($pdo){
    $stmt = $pdo->prepare('SELECT current_available_point FROM gs_user_table WHERE user_id= :user_id');
    $stmt->bindValue(':user_id', $_SESSION["user_id"], PDO::PARAM_STR);
    $status = $stmt->execute();
    //3. SQL実行時にエラーがある場合STOP
    if($status==false){
        sqlError($stmt);
    }
    //4. 抽出データ数を取得
    $val = $stmt->fetch();
	$_SESSION["current_available_point"] = $val["current_available_point"];
	if($_SESSION["current_available_point"] == ""){
		$_SESSION["current_available_point"] = 0;
	}
    echo $_SESSION["current_available_point"];
}



function isGood($user_id, $praise_id){
	debug('いいねした情報があるか確認');
	debug('ユーザーID'.$user_id);
	debug('投稿ID：'.$praise_id);
	try {
		$pdo = db_con();
		$sql = 'SELECT * FROM likes WHERE praise_id = :praise_id AND user_id = :user_id';
		$data = array(':user_id' => $user_id, ':praise_id' => $praise_id);
		// クエリ実行
		$stmt = queryPost($pdo, $sql, $data);
		if($stmt->rowCount()){
			debug('お気に入りです');
			return true;
		}else{
			debug('特に気に入ってません');
			return false;
		}
	} catch (Exception $e) {
		error_log('エラー発生:' . $e->getMessage());
	}
}

/*-------------------------------
	ログ
-------------------------------*/
//ログを取るか
ini_set('log_errors','on');
//ログの出力ファイルを指定
ini_set('error_log','php.log');
/*-------------------------------
	デバッグ関数
-------------------------------*/
// デバッグフラグ
$debug_flg = true;
// デバッグログ関数
function debug($str){
	global $debug_flg;
	if(!empty($debug_flg)){
		error_log('デバッグ：'.$str);
	}
}
/*-------------------------------
	セッション準備・セッション有効期限を延ばす
-------------------------------*/
// セッションファイルの置き場を変更(30日は削除されない デフォルト有効期限は24分)
// session_save_path("/var/tmp/");
// ガーベージコレクションが削除するセッションの有効期限を設定
ini_set('session.gc_maxlifetime', 60*60*24*30);
// ブラウザを閉じても削除されないようにクッキー自体の有効期限を延ばす
ini_set('session.cookie_lifetime', 60*60*24*30);
// セッション使用
// session_start();
// セッションIDを新しく発行(なりすまし対策)
// session_regenerate_id();
/*-------------------------------
	画面表示処理開始ログ吐き出し関数
-------------------------------*/
function debugLogStart(){
	debug('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 画面表示処理開始');
	debug('セッションID：'.session_id());
	debug('センション変数の中身：'.print_r($_SESSION,true));
	debug('現在日時のタイムスタンプ：'.time());
	if(!empty($_SESSION['login_date']) && !empty($_SESSION['login_limit'])){
		debug('ログイン期限日時タイムスタンプ：'.($_SESSION['login_date'] + $_SESSION['login_limit']));
	}
}
/*-------------------------------
	定数
-------------------------------*/
// エラーメッセージ
define('MSG01', '入力必須です');
define('MSG02', '半角英数字で入力してください');
define('MSG03', 'パスワード(再入力)が合っていません');
define('MSG04', '文字以上で入力してください');
define('MSG05', 'E-mailの形式で入力してください');
define('MSG06', '文字以内で入力してください');
define('MSG07', 'エラーが発生しました。しばらく経ってからやり直してください');
define('MSG08', 'ユーザー名またはパスワードが違います');
define('MSG09', 'そのEmailは既に登録されています');
define('MSG10', '現在のパスワードが間違っています');
define('MSG11', '現在のパスワードと同じです');
define('MSG12', '文字で入力してください');
define('MSG13', '正しくありません');
define('MSG14', '有効期限が切れています');
// 成功時メッセージ
define('SUC01', '投稿しました');
define('SUC02', 'プロフィールを変更しました');
define('SUC03', 'パスワードを変更しました');
define('SUC04', 'メールを送信しました、ご確認ください');
define('SUC05', '削除しました');
define('SUC06', '新しいパスワードでログインしてください');

/*-------------------------------
	グローバル変数
-------------------------------*/
// エラーメッセージ格納用の配列
$err_msg = array();

/*-------------------------------
	バリデーションチェック
-------------------------------*/
// 未入力チェック
function validRequired($str, $key){
	if($str === ''){
		global $err_msg;
		$err_msg[$key] = MSG01;
	}
}
// 最大文字数チェック
function validMaxLen($str, $key, $max = 200){
	$str = str_replace("\r\n", "", $str); //改行を削除
	if(mb_strlen($str) > $max){
		global $err_msg;
		$err_msg[$key] = $max.MSG06;
	}
}
// 最小文字数チェック
function validMinLen($str, $key, $min = 6){
	if(mb_strlen($str) < $min){
		global $err_msg;
		$err_msg[$key] = $min.MSG04;
	}
}
// email形式チェック
function validEmail($str, $key){
	if(!preg_match("/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/", $str)){
		global $err_msg;
		$err_msg[$key] = MSG05;
	}
}
// email重複チェック
function validEmailDup($email){
	global $err_msg;
	try{
		$pdo = db_con();
		$sql = 'SELECT count(*) FROM users WHERE email = :email AND delete_flg = 0';
		$data = array(':email' => $email);
		// クエリ実行
		$stmt = queryPost($pdo, $sql, $data);
		// クエリ結果の値を取得
		$result = $stmt->fetch(PDO::FETCH_ASSOC);
		debug('クエリ結果の中身'.print_r($result,true));

		if(!empty(array_shift($result))){
			$err_msg['email'] = MSG09;
		}
	}catch(Exception $e){
		error_log('エラー発生：'. $e->getMessage());
		$err_msg['common'] = MSG07;
	}
}
// 半角英数字チェック
function validHalf($str, $key){
	if(!preg_match("/^[a-zA-Z0-9]+$/", $str)){
		global $err_msg;
		$err_msg[$key] = MSG02;
	}
}
// 同値チェック
function validMatch($str1, $str2, $key){
	if($str1 !== $str2){
		global $err_msg;
		$err_msg[$key] = MSG03;
	}
}
// 固定長チェック
function validLength($str, $key, $len = 8){
	if(mb_strlen($str) !== $len){
		global $err_msg;
		$err_msg[$key] = $len . MSG12;
	}
}
// パスワードチェック
function validPass($str, $key){
	// 半角英数字チェック
	validHalf($str, $key);
	// 最小文字数チェック
	validMinLen($str, $key);
	// 最大文字数チェック
	validMaxLen($str, $key);
}
// エラーメッセージ表示
function getErrMsg($key){
	global $err_msg;
	if(!empty($err_msg[$key])){
		echo $err_msg[$key];
	}
}
/*-------------------------------
	データベース
-------------------------------*/
// DB接続関数
// function db_con(){
	// DBへの接続準備
	// $dsn = 'mysql:dbname=PostOnceADay;host=localhost;charset=utf8';
	// $user = 'root';
	// $password = 'root';
	// $options = array(
	// 	// SQL実行失敗時にはエラーコードのみ設定
	// 	PDO::ATTR_ERRMODE => PDO::ERRMODE_SILENT,
	// 	// デフォルトフェッチモードを連想配列形式に設定
	// 	PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
	// 	// バッファードクエリを使う(一度に結果セットをすべて取得し、サーバー負荷を軽減)
	// 	// SELECTで得た結果に対してもrowCountメソッドを使えるようにする
	// 	PDO::MYSQL_ATTR_USE_BUFFERED_QUERY => true,
	// );
	// // PDOオブジェクト生成（DBへ接続）
	// $pdo = new PDO($dsn, $user, $password, $options);
    // return $pdo;
    // try {
    //     $pdo = new PDO('mysql:dbname=gs_db;charset=utf8;host=localhost','root','');
    //     return $pdo;
    // } catch (PDOException $e) {
    //     exit('DB-Connection-Error:'.$e->getMessage());
    // }
// }

// SQL実行関数
function queryPost($pdo, $sql, $data){
	// クエリ作成
	$stmt = $pdo->prepare($sql);
	// SQL文を実行
	if(!$stmt->execute($data)){
		debug('クエリ失敗しました。');
		debug('失敗したSQL：'.print_r($stmt,true));
		$err_msg['common'] = MSG07;
		return 0;
	}
	debug('クエリ成功');
	return $stmt;
}

function getUser($user_id){
	debug('ユーザー情報を取得します。');

	try{
		$pdo = db_con();
		$sql = 'SELECT * FROM users WHERE id = :u_id AND delete_flg = 0';
		$data = array(':u_id' => $user_id);
		// クエリ実行
		$stmt = queryPost($pdo, $sql, $data);

		if($stmt){
			return $stmt->fetch(PDO::FETCH_ASSOC);
		}else{
			return false;
		}
	}catch(Exception $e){
		error_log('エラー発生：'.$e->getMessage());
	}
}
function getPost($user_id, $praise_id){
	debug('投稿情報を取得します。');
	debug('ユーザID：'.$user_id);
	debug('投稿ID：'.$praise_id);

	try{
		$pdo = db_con();
		$sql = 'SELECT * FROM post WHERE user_id = :u_id AND id = :p_id AND delete_flg = 0';
		$data = array(':u_id' => $user_id, ':p_id' => $praise_id);

		// クエリ実行
		$stmt = queryPost($pdo, $sql, $data);

		if($stmt){
			return $stmt->fetch(PDO::FETCH_ASSOC);
		}else{
			return false;
		}
	}catch(Exception $e){
		error_log('エラー発生：'.$e->getMessage());
	}
}
function getPostList(){
	debug('全ての投稿情報を取得します。');

	try{
		$pdo = db_con();
		$sql = 'SELECT * FROM post WHERE delete_flg = 0 ORDER BY created_date DESC';
		$data = array();
		debug('SQL:'.$sql);

		// クエリ実行
		$stmt = queryPost($pdo, $sql, $data);

		if($stmt){
			// クエリ結果のデータを全レコード返す
			return $stmt->fetchAll();
			 
		}else{
			return false;
		}
	}catch(Exception $e){
		error_log('エラー発生：'. $e->getMessage());
	}
}
function getPostData($praise_id){
	debug('投稿情報を取得します。');
	debug('投稿ID：'.$praise_id);
	try{
		$pdo = db_con();
		$sql = 'SELECT * FROM praises WHERE praise_id = :praise_id AND delete_flg = 0'; 
		$data = array(':praise_id' => $praise_id);
		// クエリ実行
		$stmt = queryPost($pdo, $sql, $data);

		if($stmt){
			return $stmt->fetch(PDO::FETCH_ASSOC);
		}else{
			return false;
		}
	}catch(Exception $e){
		error_log('エラー発生：'.$e->getMessage());
	}
}
function getComment($praise_id){
	debug('コメントを取得します。');
	try{
		$pdo = db_con();
		$sql = 'SELECT * FROM comment WHERE post_id = :p_id AND delete_flg = 0 ORDER BY created_date DESC';
		$data = array(':p_id' => $praise_id);
		// クエリ実行
		$stmt = queryPost($pdo, $sql, $data);

		if($stmt){
			return $stmt->fetchAll();
		}else{
			return false;
		}
	}catch(Exception $e){
		error_log('エラー発生：'.$e->getMessage());
	}
}
function getGood($praise_id){
	debug(' いいねを取得します');
	try {
		$pdo = db_con();
		$sql = 'SELECT * FROM likes WHERE praise_id = :praise_id';
		$data = array(':praise_id' => $praise_id);
		// クエリ実行
		$stmt = queryPost($pdo, $sql, $data);

		if($stmt){
			return $stmt->fetchAll();
		}else{
			return false;
		}
	} catch (Exception $e) {
		error_log('エラー発生：'.$e->getMessage());
	}
}
// function isGood($user_id, $praise_id){
// 	debug('いいねした情報があるか確認');
// 	debug('ユーザーID'.$user_id);
// 	debug('投稿ID：'.$praise_id);

// 	try {
// 		$pdo = db_con();
// 		$sql = 'SELECT * FROM good WHERE post_id = :p_id AND user_id = :u_id';
// 		$data = array(':u_id' => $user_id, ':p_id' => $praise_id);
// 		// クエリ実行
// 		$stmt = queryPost($pdo, $sql, $data);

// 		if($stmt->rowCount()){
// 			debug('お気に入りです');
// 			return true;
// 		}else{
// 			debug('特に気に入ってません');
// 			return false;
// 		}

// 	} catch (Exception $e) {
// 		error_log('エラー発生:' . $e->getMessage());
// 	}
// }

function getUserPostList($user_id){
	debug('My投稿情報を取得します。');
	try{
		$pdo = db_con();
		$sql = 'SELECT * FROM post WHERE user_id = :u_id AND delete_flg = 0 ORDER BY created_date DESC'; 
		$data = array(':u_id' => $user_id);
		// クエリ実行
		$stmt = queryPost($pdo, $sql, $data);

		if($stmt){
			return $stmt->fetchAll();
		}else{
			return false;
		}
	}catch(Exception $e){
		error_log('エラー発生：'.$e->getMessage());
	}
}
function getUserGoodPostList($user_id){
	debug(' 自分のいいねした投稿を取得します');
	try {
		$pdo = db_con();
		$sql = 'SELECT p.id, p.contents, p.post_img, p.user_id, p.created_date, p.delete_flg FROM post AS p INNER JOIN good AS g ON p.id = g.post_id WHERE g.user_id = :u_id AND p.delete_flg = 0 ORDER BY created_date DESC';
		$data = array(':u_id' => $user_id);
		// クエリ実行
		$stmt = queryPost($pdo, $sql, $data);

		if($stmt){
			return $stmt->fetchAll();
		}else{
			return false;
		}
	} catch (Exception $e) {
		error_log('エラー発生：'.$e->getMessage());
	}
}
/*-------------------------------
	メール送信
-------------------------------*/
function sendMail($from, $to, $subject, $comment){
	if(!empty($to) && !empty($subject) && !empty($comment)){
		// 文字化けしないように設定（お決まりパターン）
		mb_language("Japanese");
		mb_internal_encoding("UTF-8");

		// メールを送信（送信結果はtrueかfalseで返ってくる）
		$result = mb_send_mail($to, $subject, $comment, "From:".mb_encode_mimeheader("POAD")."<".$from.">");
		// 送信結果を判定
		if($result){
			debug('メールを送信しました。');
		}else{
			debug('【エラー発生】メールの送信に失敗しました。');
		}
	}
}
/*-------------------------------
	その他
-------------------------------*/
// サニタイズ
function sanitize($str){
	return htmlspecialchars($str,ENT_QUOTES);
}
//フォーム入力保持
function getFormData($str, $flg = false){
	if($flg){
		$method = $_GET;
	}else{
		$method = $_POST;
	}
	global $dbFormData;
	// ユーザーデータがある場合
	if(!empty($dbFormData)){
		//フォームのエラーがある場合
		if(!empty($err_msg[$str])){
			//POSTにデータがある場合
			if(isset($method[$str])){
				return sanitize($method[$str]);
			}else{
				return sanitize($dbFormData[$str]);
			}
		}else{
			// POSTにデータがあり、DBの情報と違う場合
			if(isset($method[$str]) && $method[$str] !== $dbFormData[$str]){
				return sanitize($method[$str]);
			}else{
				// 変更しない
				return sanitize($dbFormData[$str]);
			}
		}
	}else{
		if(isset($method[$str])){
			return sanitize($method[$str]);
		}
	}
}
// 認証キーの生成
function makeRandKey($length = 8){
	static $chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJLKMNOPQRSTUVWXYZ0123456789';
	$str = '';
	for($i = 0; $i < $length; ++$i){
		$str .= $chars[mt_rand(0, 61)];
	}
	return $str;
}
// 画像処理
function uploadImg($file, $key){
	debug('画像アップロード処理開始');
	debug('FILE情報：'.print_r($file,true));

	if(isset($file['error']) && is_int($file['error'])){
		try{
			switch($file['error']){
				case UPLOAD_ERR_OK: //OK
					break;
				case UPLOAD_ERR_NO_FILE: //ファイル未選択の場合
					throw new RuntimeException('ファイルが選択されていません');
				case UPLOAD_ERR_INI_SIZE: //php.ini定義の最大サイズが超過した場合
				case UPLOAD_ERR_FORM_SIZE: //フォーム定義の最大サイズが超過した場合
					throw new RuntimeException('ファイルサイズが大きすぎます');
				default:
					throw new RuntimeException('その他のエラーが発生しました');
			}
			// upload画像が指定した拡張子と合っているか
			$type =@exif_imagetype($file['tmp_name']);
			if(!in_array($type, [IMAGETYPE_GIF, IMAGETYPE_JPEG, IMAGETYPE_PNG], true)){
				throw new RuntimeException('画像形式が未対応です');
			}
			//ファイル名をハッシュ化しパスを生成
			$path = 'uploads/'.sha1_file($file['tmp_name']).image_type_to_extension($type);
			
			if(!move_uploaded_file($file['tmp_name'], $path)){
				throw new RuntimeException('ファイル保存時にエラーが発生しました');
			}
			//保存したファイルパスのパーミッションを変更する
			chmod($path,0644);

			debug('ファイルは正常にアップロードされました');
			debug('ファイルパス：'.$path);
			return $path;
		}catch(RuntimeException $e){
			debug($e->getMessage());
			global $err_msg;
			$err_msg[$key] = $e->getMessage();
		}
	}
}
// 画像表示用関数
function showImg($path){
	if(empty($path)){
		return 'images/user-icon.png';
	}else{
		return $path;
	}
}
// sessionを1回だけ取得
function getSessionFlash($key){
	if(!empty($_SESSION[$key])){
		$data = $_SESSION[$key];
		$_SESSION[$key] = '';
		return $data;
	}
}
