<link rel="shortcut icon" href="img/favicon2.png" type="image/png">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.9/semantic.min.css"/>
<link rel="stylesheet" href="css/all.css"/>
<link rel="stylesheet" href="css/modal.min.css"/>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.9/semantic.min.js"></script>
<script src="js/modal.min.js"></script>

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
            height:40px !important;
            margin-top: 10px !important;
            position:absolute  !important;
            right:150px !important;
        }

        .tipcolor a{
            text-decoration:none !important;
            color:#E684C3 !important;
            display: block !important;
        }

        .tipcolor a:hover{
            text-decoration:none !important;
            color: #fff !important;
            display: block !important;
        }
        .tipcolor:hover {
            background-color: #E684C3 !important;
            box-shadow: 0 0 0 2px #2ecc40 inset!important;
            color: #fff !important;
            border: none !important;
            border-radius:25px !important;
            height:40px !important;
            margin-top: 10px !important;
            position:absolute  !important;
            right:150px !important;
        }

        .tipcolor:hover + .button a{
            text-decoration:none !important;
            color: #fff !important;
        }

        
        
</style>

</head>
<body id="main">

  <div class="ui inverted large borderless fluid menu column h20" style="background-color:#ffffffe6;box-shadow:8px 12px 8px -1px rgba(0,0,0,0.05);min-height: 3.857143em;" >
    

  <div class="ui inverted tipcolor button">
            <a href="http://localhost/gs/dev13/hi-chip/userlist.php">チップを送る</a> 
        </div>

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
