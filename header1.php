
<link rel="shortcut icon" href="img/favicon2.png" type="image/png">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.9/semantic.min.css"/>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.js"></script>

<style>

*{
            margin : 0;
            padding : 0;
        }

        .ui.large.menu{
        margin-top:0;
        }

        .test{
            overflow-x: hidden;
        }


        }
        .h20 div{
        /* padding:1em; */
        }

        .buttoncolor{
                width: 110px;
            background-color: #0000;
            color: #E684C3 !important;
            border:solid #E684C3 1px !important;
            border-radius:25px !important;
            height:40px !important;
            margin-top: 10px !important;
            position:absolute  !important;
            right:150px !important;
            width: 130px;
        }

        .buttoncolor a{
            text-decoration:none !important;
            color:#E684C3 !important;
            display: block !important;
        }

        .buttoncolor a:hover{
            text-decoration:none !important;
            color: #fff !important;
            display: block !important;
        }
        .buttoncolor:hover {
            background-color: #E684C3 !important;
            color: #fff !important;
            border: solid #E684C3 1px !important;
            background-clip: padding-box ;
            border-radius:25px !important;
            height: 100%;
            /* padding-top:12px; */
            /* height:42px !important; */
            margin-top: 10px !important;
            position:absolute  !important;
            right:150px !important;
        }

        .buttoncolor:hover > a{
            text-decoration:none !important;
            color: #fff !important;
            display:block;
        }        
</style>

</head>
<body id="main">

 <div class="ui inverted large borderless fluid menu column h20" style="background-color:#ffffffe6;box-shadow:8px 12px 8px -1px rgba(0,0,0,0.05);min-height: 3.857143em;" >

        <div class="ui inverted buttoncolor button">
            <a href="<?= changeUrlByEnv("userlist.php") ?>" >チップを送る</a> 
        </div>

        <div class="right menu">
        <div class="ui dropdown item">
            <div class="header">
                <h4>MENU</h4>
            </div>
            <i class="share square icon"></i>
            <div class="menu">
                <div class="item">
                    <small>
                        <i class="th icon"></i>
                        記事を書く
                    </small>
                </div>
                <div class="item">
                    <small>
                        <i class="clipboard outline icon"></i>
                        USER NAME
                    </small>
                </div>
            </div>
        </div>
    </div>



</div> 
</body>
<script>
        $(document).ready(function () {
            $('.dropdown').dropdown();
            
        });
    
</script>



