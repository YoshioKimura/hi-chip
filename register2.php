<!DOCTYPE html>
<html lang="en">

<head>
<!--    <meta charset="UTF-8">-->
    <title>Semantic UI CDN</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.9/semantic.min.css"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.9/semantic.min.js"></script>

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
  
  
  <div class="ui inverted large borderless fluid menu column">
    <a class="header item" href="/">HiChip</a>
    <div class="right menu">
        <div class="ui dropdown item">
            <div class="header">
                <h4>MENU　</h4>
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
   
   
    <div class="ui middle aligned center aligned grid maxwidth centered">
        <div class="column" style="margin-bottom: 260px;">
            <h2 class="ui image header">
      <div class="content">
        Register your account
      </div>
    </h2>
            <form action="user_insert.php" method="POST" class="ui large form">
                <div class="ui stacked secondary  segment">
                    <div class="field">
                        <div class="ui left icon input"> <i class="user icon"></i>
                            <input type="text" name="name" placeholder="name"> </div>
                    </div>
                    <div class="field">
                        <div class="ui left icon input"> <i class="user icon"></i>
                            <input type="text" name="email" placeholder="E-mail address"> </div>
                    </div>
                    <div class="field">
                        <div class="ui left icon input"> <i class="lock icon"></i>
                            <input type="password" name="password" placeholder="Password"> </div>
                    </div>
                    <div class="ui fluid large teal submit button">Register</div>
                </div>
                <div class="ui error message"></div>
            </form>
            <div class="ui message"> Alreadey Registered? <a href="login2.php">Login</a> </div>
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
                                type: 'length[1]'
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