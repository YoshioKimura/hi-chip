

<?php include changePathByEnv("head.php") ?>

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

        .tipcolor{
            background-color: #0000;
            box-shadow: 0 0 0 2px #2ecc40 inset!important;
            color: #E684C3 !important;
            border:solid #E684C3 1px !important;
            border-radius:25px !important;
        }

        .tipcolor a{
            text-decoration:none !important;
            color:#E684C3 !important;
        }

        .tipcolor a:hover{
            text-decoration:none !important;
            color: #fff !important;
        }

        .tipcolor:hover{
            background-color: #E684C3 !important;
            box-shadow: 0 0 0 2px #2ecc40 inset!important;
            color: #fff !important;
            border: none !important;
            border-radius:25px !important;
        }

        
        
</style>

</head>
<body id="main">

  <div class="ui inverted large borderless fluid menu column h20" style="background-color:#ffffffe6;box-shadow:8px 12px 8px -1px rgba(0,0,0,0.05);min-height: 3.857143em;" >
    
    <div class="right menu">

        
        <div class="ui dropdown item">

        <div class="ui inverted tipcolor button"> 
            <a href="<?php echo changePathByEnv("userlist.php") ?>">チップを送る</a> 
        </div>
            <div class="header">
                <h4>MENU</h4>
            </div>
            <i class="share square icon"></i>
            <div class="menu">
                <div class="item">
                <a href="<?php echo changePathByEnv("timeline.php") ?>" style="color:#111">
                    <small >
                        <i class="th icon"></i>
                        <a class="header item" href="<?php echo changePathByEnv("timeline.php") ?>">タイムライン</a>
                    </small>
                </a>
                </div>
                <div class="item">
                <a href="userlist.php" style="color:#111">
                    <small>
                        <i class="clipboard outline icon"></i>
                        
                        <a class="header item" href="<?php echo changePathByEnv("timeline.php") ?>">">褒める相手を選ぶ</a>
                    </small>
                    </a>
                </div>
                <div class="item">
                <a style="color:#111" href="<?php echo changePathByEnv("logout.php") ?>">
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
