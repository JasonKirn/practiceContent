var currentNum = 1;

function changeImage() {
    if (currentNum === 3) {
        currentNum = 1;
        $("#randomImg").attr("src", "images/1.png");
    }
    else {
        $("#randomImg").attr("src", "images/" + (currentNum+1) + ".png");
        console.log("Current num is: " + currentNum);
        currentNum += 1;
    }
        
}

//function startImageApplication() {
    
//}


$(".newImgBtn").on("click", function() {
    changeImage(); 
    console.log("Img change pressed");
});

//window.onload = startImageApplication();