<?php
    // time.txtに現在時刻を追記する
    $file = '/usr/local/var/www/htdocs/batch_test/time.txt';
    $current = file_get_contents($file);
    
    date_default_timezone_set('Asia/Tokyo');
    $current .= date("Y-m-d H:i:s")."\n";
    
    file_put_contents($file, $current);

