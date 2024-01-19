function changeColors() {
    const body = document.body;

    // Generate random RGB values for background color
    const randomColor = () => Math.floor(Math.random() * 256);
    const bgColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;

    // Generate random RGB values for text color, ensuring it is readable
    const textColor = `rgb(${255-randomColor()}, ${255-randomColor()}, ${255-randomColor()})`;

    body.style.backgroundColor = bgColor;
    body.style.color = textColor;
}