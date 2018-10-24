<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title> JS practice 3</title>
        <link href="css/styles.css" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
        <script src='https://unpkg.com/babel-standalone@6/babel.min.js'></script>
    </head>
    
    <body>
        <header>
            <h1>Alert Rectangles</h1>
        </header>
        <div class="rectangle" onclick="blueRectangleFunction()">
            <div class="rectangle2" onclick="redRectangleFunction()">
                <div class="rectangle3" onclick="greenRectangleFunction()"></div>
            </div>
        </div>
        <!--<div class="rectangle3" onclick="myFunction3()"></div>-->
    </body>
    
    <script src="js/alert.js"></script>
</html>