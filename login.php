<!DOCTYPE html>
<html lang="en">

<head>
<!--    <meta charset="UTF-8">-->
    <title>Semantic UI CDN</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.9/semantic.min.css"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.9/semantic.min.js"></script>
    <link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/3.18.1/build/cssreset/cssreset-min.css">

</head>
<style>
    body > .grid {
        height: 100%;
    }
    
    .image {
        margin-top: 100px;
    }
    
    .maxwidth {
        max-width: 450px;
    }
    
    .centered{
        margin: auto !important;
    }

    .column{
        
    }
    
</style>

<body>
<!--
     <div class="top ui secondary menu">
    <a class="item sidebar"><i class="icon sidebar"></i></a>
    <a class="item">Submit</a>
    <div class="right menu">
      <a class="item">Sign Up</a>
      <a class="item">Help</a>
    </div>
  </div>
-->
  
  
<?php
    include "header.php";
?>
   
    <div class="ui middle aligned center aligned grid maxwidth centered">
        <div class="column" style="margin-bottom: 260px;">
            <h2 class="ui image header">
      <div class="content">
        Log-in to your account
      </div>
    </h2>
            <form action="login_act.php" method="POST" class="ui large form">
                <div class="ui stacked secondary  segment">
                    <div class="field">
                        <div class="ui left icon input"> <i class="user icon"></i>
                            <input type="text" name="email" placeholder="E-mail address" value="info@call.jp"> </div>
                    </div>
                    <div class="field">
                        <div class="ui left icon input"> <i class="lock icon"></i>
                            <input type="password" name="lpw" placeholder="Password" value="hogehoge"> </div>
                    </div>
                    <div class="ui fluid large teal submit button">Login</div>
                </div>
                <div class="ui error message"></div>
            </form>
            <div class="ui message"> New to us? <a href="register.php">Register</a> </div>
        </div>
    </div>            
    <script>
        $(document).ready(function () {
            $('.dropdown').dropdown();
            $('.ui.form').form({
                fields: {
                    email: {
                        identifier: 'email'
                        , rules: [
                            {
                                type: 'empty'
                                , prompt: 'Please enter your e-mail'
                }
                            , {
                                type: 'email'
                                , prompt: 'Please enter a valid e-mail'
                }
              ]
                    }
                    , password: {
                        identifier: 'password'
                        , rules: [
                            {
                                type: 'empty'
                                , prompt: 'Please enter your password'
                }
                            , {
                                type: 'length[3]'
                                , prompt: 'Your password must be at least 6 characters'
                }
              ]
                    }
                }
            });
        });
    </script>
</body>

</html>