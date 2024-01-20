var colorIndex = 0;
var colors = ["#2E4F4F", "#F8E559"]; 
var colors2 = ['#CBE4DE', "#FAEF9B"]; 

function Magicchange() {
    const body = document.body;
    var leftSide = document.querySelector('.container .left_Side');
    var titlesec = document.querySelector('.titlesec');

    // Generate random RGB values for background color
    
    leftSide.style.backgroundColor = colors2[colorIndex];
    titlesec.style.color = 'black';


    body.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
    colorIndex = (colorIndex) % colors2.length;

   // Get the element by its ID
   var element = document.getElementById("ChangeButton");
}