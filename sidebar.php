<style>
.inverted .header,
.inverted .item{
  color:#000000de !important;
  padding-left:20px !important;
}

.sidebar-item{
    color:#000000de;
    font-size: 1em;
    font-weight: bold;
    padding-top:15px;
    padding-bottom:15px;
    padding-left:40px;
    transition: background-color 0.1s linear;
}

.sidebar-item:hover{
    color:#000000de;
    font-size: 1em;
    font-weight: bold;
    padding-top:15px;
    padding-bottom:15px;
    padding-left:40px;
    background:#F2F2F2;
}
</style>

<div class="flex-wrapper" style="display:flex">
            <div class="toc">
                <div class="ui vertical inverted menu" style="height: 100vh;width: 270px; background:white;box-shadow:8px 0px 8px -1px rgba(0,0,0,0.05)">
                <div class="item" style="width: 100px;margin: auto;">
                    <a class="ui logo icon image" href="/">
                        <img src="./img/logo.png" width="60px;">
                    </a>
                </div>

                <h1 style="margin: auto;margin-bottom: 30px;width: 104px;">G's Chip</h1>
                <div class="wrapper-points" style="padding-bottom:20px;border-bottom:solid 0.1px #f0f0f0;">
                    <div class="itemv" style="display:flex; justify-content:space-around;">
                        <div class="" >
                            <h6 width="70px">今月もらった</h6>
                            <!-- <div class="">  <span>ポイント</span> </div> -->
                            <div><?php renderTotalPointThisMonth($pdo); ?>ポイント </div>
                            <div>(累計：<?php renderTotalPointSinceRegister($pdo); ?>) </div>
                        </div>
                        <div class="current_available_point">
                            <h6>今週使える</h6>
                            <div class=""> <?php renderCurrentAvailablePoint($pdo); ?> <span>ポイント</span> </div>
                        </div>
                    </div>
                </div>
                    <a class="sidebar-item" style="display:block" href="<?= changeUrlByEnv("timeline.php"); ?>"> タイムライン</a>    
                    <a class="sidebar-item" style="display:block" href="<?= changeUrlByEnv("profile_received.php"); ?>?user_id=<?= $_SESSION["user_id"] ?>">マイページ</a>
                    <a class="sidebar-item" style="display:block" href="<?= changeUrlByEnv("prologue.php"); ?>"> プロローグ</a>
                    <!-- <a class="sidebar-item" style="display:block" href=""> よくある質問</a>
                    <a class="sidebar-item" style="display:block" href=""> ダッシュボード</a>
                    <a class="sidebar-item" style="display:block" href=""> プロローグ</a> -->
            </div>
</div>