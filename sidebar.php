

<?php include "layouts/head.php" ?>

<div class="flex-wrapper" style="display:flex">
            <div class="toc">
                <div class="ui vertical inverted menu" style="height: 100vh;width: 270px; background:white;box-shadow:8px 0px 8px -1px rgba(0,0,0,0.05)">
                <div class="item" style="width: 100px;margin: auto;">
                    <a class="ui logo icon image" href="/">
                        <img src="./img/logo.png" width="60px;">
                    </a>
                </div>

                <h1 style="margin: auto;
    width: 104px;">G's Chip</h1>


                <div class="wrapper-points" style="display:flex;z-index:99;">
                    <div class="itemv">
                        <div class="">
                            <h6 width="70px">今月もらった</h6>
                            <p class=""> 460 <span>ポイント</span> </p>
                            <p>累計：1203</p>
                        </div>
                        <div class="current_available_point">
                            <h6>今週使える</h6>
                            <p class=""> 460 <span>ポイント</span> </p>
                        </div>
                    </div>
                </div>
                


                <div class="item">
                
                    <div class="header"> <a href="http://localhost/gs/dev13/hi-chip/timeline.php"> タイムライン</a></div>
                </div>
                <div class="item">
                    <div class="header"><a href="http://localhost/gs/dev13/hi-chip/profile_received.php?user_id=<?= $_SESSION["user_id"] ?>">マイページ</a></div>
                </div>
                <div class="item">
                    <div class="header"><a href="http://localhost/gs/dev13/hi-chip/prologue.php"> プロローグ</a></div>
                </div>
                <!-- <div class="item">
                    <div class="header">よくある質問</div>
                </div>
                <div class="item">
                    <div class="header">ダッシュボード </div>
                </div>
                <div class="item">
                    <div class=" header">名投稿まとめ</div>
                </div> -->
            </div>
</div>