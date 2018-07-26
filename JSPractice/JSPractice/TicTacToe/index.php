<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title> JS practice 2</title>
        <link href="css/styles.css" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
        <script src='https://unpkg.com/babel-standalone@6/babel.min.js'></script>
    </head>
    
    <body>
        <header>
            <h1>TicTacToe</h1>
        </header>
    </body>
    
    <div id="ticTacToeBoard"><!--may need to include width and height here-->
        <img id="ticTacToeImg" src="images/ticTacToeBoard.png" usemap="#Map">
            <map name="Map">
                <!--NW box -->                                 <!--x1,y1,x2,y2-->
                <area id="area1Id" class="slot1" shape="rect" coords="0,0,200,200" href="#">
                <!--N box -->
                <area id="area2Id" class="slot2" shape="rect" coords="200,0,400,200" href="#">
                <!--NE box -->
                <area id="area3Id" class="slot3" shape="rect" coords="400,0,600,200" href="#">
                <!--W box -->
                <area id="area4Id" class="slot4" shape="rect" coords="0,200,200,400" href="#">
                <!--Center box -->
                <area id="area5Id" class="slot5" shape="rect" coords="200,200,400,400" href="#">
                <!--E box -->
                <area id="area6Id" class="slot6" shape="rect" coords="400,200,600,400" href="#">
                <!--SW box -->
                <area id="area7Id" class="slot7" shape="rect" coords="0,400,200,600" href="#">
                <!--S box -->
                <area id="area8Id" class="slot8" shape="rect" coords="200,400,400,600" href="#">
                <!--SE box -->
                <area id="area9Id" class="slot9" shape="rect" coords="400,400,600,600" href="#">
            </map>
    </div>
    
    <footer>
        <hr>
            2018&copy; Kirn <br />
            This website is built for practice purposes.
            Made with love and JS.
    </footer>
    <script src="js/ticTacToe.js"></script>
</html>