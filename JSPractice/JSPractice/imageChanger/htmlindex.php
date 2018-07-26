<!DOCTYPE html>
<html>
<!-- This is the head -->
<!-- All styles and javascript go inside the head -->
    <head>
        <meta charset="utf-8" />
        <title> JS practice </title>
        <link href="css/styles.css" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
        <script src='https://unpkg.com/babel-standalone@6/babel.min.js'></script>
        
    </head>
<!-- closing head -->

    <!-- This is the body -->
    <!-- This is where we place the content of our website -->
    <body>
        <header>
            <h1>JS test website </h1>
        </header>
        <nav>
            <div id="menu">
            
            <span class="current_page_text"><a href="index.html">Home</a></span>
            <a href="testing1212.php">Testing</a>
            </div>
        </nav>
        
        <br /><br />
        
        <main>
            
            <!--
            <figure id="languagePicture">
                <img src="imgs/cpp_logo.png" alt="Picture of C++" />
            </figure>
            -->
            <div id="bodyText">
                This is a test website for <span class="C">JS</span> <br />
                <p><span class="C">JS</span> is an important coding language used by many programmers</p>
                <p>The other links provided at the top bar will do stuff </p>
            </div>
        </main>
        <div id="images">
            <img src="images/1.png" id="randomImg">
            <!-- This div will work with jQuery to cycle through 3 images -->
        </div>
        <div id="newImageButton">
            <button class="newImgBtn btn btn">Change Image!</button>
        </div>
        <!-- This is the footer -->
        <!-- The footer goes inside the body but not always -->
        <footer>
            <hr>
            2018&copy; Kirn <br />
            <strong>Disclaimer:</strong> The information in this webpage is
            fictitous. <br />
            It is for practice purposes only.
        </footer>
        <!-- closing footer -->
        
        <!-- call js script -->
        <script src="js/changeImage.js"></script>
    </body>
    <!-- closing body -->

</html>