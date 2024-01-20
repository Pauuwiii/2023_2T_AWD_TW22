function changeColors() {
    const body = document.body;
    var leftSide = document.querySelector('.container .left_Side');
    var titlesec = document.querySelector('.titlesec');


    // Generate random RGB values for background color
    const bgColor = '#2E4F4F';
    leftSide.style.backgroundColor = '#CBE4DE';
    titlesec.style.color = 'black';

    body.style.backgroundColor = bgColor;
    var element = document.getElementById("colorChangeButton");
}