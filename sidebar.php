

<div class="flex-wrapper" style="display:flex">
            <div class="toc">
                <div class="ui vertical inverted menu" style="height: 100vh;width: 270px; background:white;box-shadow:8px 0px 8px -1px rgba(0,0,0,0.05)">
                <div class="item" style="width: 100px;margin: auto;">
                    <a class="ui logo icon image" href="/">
                        <img src="./img/logo.png" width="60px;">
                    </a>
                </div>

                <h1 style="margin: auto;width: 104px;">G's Chip</h1>
                <div class="wrapper-points" style="padding-bottom:20px;border-bottom:solid 0.1px #f0f0f0;">
                    <div class="itemv" style="display:flex; justify-content:space-around;">
                        <div class="" >
                            <h6 width="70px">今月もらった</h6>
                            <!-- <div class="">  <span>ポイント</span> </div> -->
                            <div>累計：<?php renderTotalPointSinceRegister($pdo); ?> </div>
                        </div>
                        <div class="current_available_point">
                            <h6>今週使える</h6>
                            <div class=""> <?php renderCurrentAvailablePoint($pdo); ?> <span>ポイント</span> </div>
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