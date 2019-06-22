

<?php include "layouts/head.php" ?>

<style>
    .ui.large.menu{
      margin-top:0;
    }
    .h20{
     /* height:20px !important; */
    }

    .test{
        overflow-x: hidden;
    }
        .h20{
        /* margin:0 -200%;
        padding:0 200%; */
        /* background: linear-gradient(#ffffff 0%, #ff6666 100%); */
        text-align: center;
        }
        .h20 div{
        /* padding:1em; */
        }
        
</style>

</head>
<body id="main">

  <div class="ui inverted large borderless fluid menu column h20" style="background-color:#ffffffe6;box-shadow:8px 12px 8px -1px rgba(0,0,0,0.05);" >
    
    <div class="right menu">

        
        <div class="ui dropdown item">
            <div class="header">
                <h4>MENU</h4>
            </div>
            <i class="share square icon"></i>
            <div class="menu">
                <div class="item">
                <a href="http://localhost/gs/dev13/hi-chip/timeline.php" style="color:#111">
                    <small >
                        <i class="th icon"></i>
                        <a class="header item" href="http://localhost/gs/dev13/hi-chip/timeline.php">タイムライン</a>
                    </small>
                </a>
                </div>
                <div class="item">
                <a href="userlist.php" style="color:#111">
                    <small>
                        <i class="clipboard outline icon"></i>
                        
                        <a class="header item" href="http://localhost/gs/dev13/hi-chip/timeline.php">褒める相手を選ぶ</a>
                    </small>
                    </a>
                </div>
                <div class="item">
                <a href="http://localhost/gs/dev13/hi-chip/logout.php" style="color:#111">
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



<!-- Head[End] -->
