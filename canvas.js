var canvas = document.getElementById('canvas'),
    mainColor = "#251539",
    ears = "#9465AB",
    eyeColor = "#ffffff",
    eyeColor2 = "#1A1B47",
    eyeColor3 = "#4D387B",
    eyeColor4 = "#000020",
    eyeColor5 = "#FFFFFF",
    colorOpacity = "rgba(255, 255, 255, 0.1)";



if (canvas.getContext) {
    var c = canvas.getContext('2d');

    // B A C K G R O U N D 

    c.beginPath();
    c.rect(0, 0, 600, 400);


    // B O D Y

    c.beginPath();
    c.moveTo(140, 75);
    c.lineTo(460, 75);
    c.lineTo(340, 230);
    c.lineTo(260, 230);
    c.closePath();
    c.stroke();
    c.fillStyle = mainColor;
    c.fill();

    // E A R S
    //
    //LEFT

    c.beginPath();
    c.moveTo(200, 75);
    c.lineTo(260, 75);
    c.lineTo(230, 30);
    c.closePath();
    c.fillStyle = mainColor;
    c.fill();

    //RIGHT

    c.beginPath();
    c.moveTo(400, 75);
    c.lineTo(340, 75);
    c.lineTo(370, 30);
    c.closePath();
    c.fillStyle = mainColor;
    c.fill();

    // I N N E R  E A R S
    //
    //LEFT

    c.beginPath();
    c.moveTo(210, 70);
    c.lineTo(250, 70);
    c.lineTo(230, 41);
    c.closePath();
    c.fillStyle = ears;
    c.fill();

    //RIGHT

    c.beginPath();
    c.moveTo(390, 70);
    c.lineTo(350, 70);
    c.lineTo(370, 41);
    c.closePath();
    c.fillStyle = ears;
    c.fill();

    // W I N G S 
    //
    //LEFT

    c.beginPath();
    c.moveTo(150, 74);
    c.lineTo(100, 74);
    c.lineTo(125, 125);
    c.closePath();
    c.fillStyle = mainColor;
    c.fill();

    //RIGHT

    c.beginPath();
    c.moveTo(450, 75);
    c.lineTo(500, 75);
    c.lineTo(475, 125);
    c.closePath();
    c.fillStyle = mainColor;
    c.fill();

    // E Y E S
    //
    //LEFT
	
    c.beginPath();
    c.moveTo(200, 85);
    c.lineTo(260, 85);
    c.quadraticCurveTo(245, 140, 230, 140);
    c.quadraticCurveTo(215, 140, 200, 85);
    c.fillStyle = eyeColor;
    c.fill();
    c.closePath();

    //RIGHT

    c.beginPath();
    c.moveTo(340, 85);
    c.lineTo(400, 85);
    c.quadraticCurveTo(385, 140, 370, 140);
    c.quadraticCurveTo(355, 140, 340, 85);
    c.fillStyle = eyeColor;
    c.fill();
    c.closePath();

    // I N N E R  E Y E S

    //LEFT

    c.beginPath();
    c.moveTo(210, 85);
    c.lineTo(250, 85);
    c.quadraticCurveTo(245, 125, 230, 125);
    c.quadraticCurveTo(215, 125, 210, 85);
    c.closePath();
    c.fillStyle = eyeColor2;
    c.fill();

    //RIGHT

    c.beginPath();
    c.moveTo(350, 85);
    c.lineTo(390, 85);
    c.quadraticCurveTo(385, 125, 370, 125);
    c.quadraticCurveTo(355, 125, 350, 85);
    c.closePath();
    c.fillStyle = eyeColor2;
    c.fill();

    //LEFT 2

    c.beginPath();
    c.arc(230, 100, 13, 0, 2 * Math.PI);
    c.closePath();
    c.fillStyle = eyeColor3;
    c.fill();

    //RIGHT 2

    c.beginPath();
    c.arc(370, 100, 13, 0, 2 * Math.PI);
    c.closePath();
    c.fillStyle = eyeColor3;
    c.fill();

    //LEFT 3

    c.beginPath();
    c.arc(230, 100, 6, 0, 2 * Math.PI);
    c.closePath();
    c.fillStyle = eyeColor4;
    c.fill();

    ///RIGHT 3

    c.beginPath();
    c.arc(370, 100, 6, 0, 2 * Math.PI);
    c.closePath();
    c.fillStyle = eyeColor4;
    c.fill();


    //LEFT 4

    c.beginPath();
    c.arc(236, 94, 4, 0, 2 * Math.PI);
    c.closePath();
    c.fillStyle = eyeColor5;
    c.fill();

    //RIGHT 4

    c.beginPath();
    c.arc(376, 94, 4, 0, 2 * Math.PI);
    c.closePath();
    c.fillStyle = eyeColor5;
    c.fill();

    // L I G H T
    
    c.beginPath();
    c.moveTo(200, 85);
    c.lineTo(260, 85);
    c.lineTo(210, 120);
    c.closePath();
    c.fillStyle = colorOpacity;
    c.fill();
    
    c.beginPath();
    c.moveTo(340, 85);
    c.lineTo(400, 85);
    c.lineTo(360, 120);
    c.closePath();
    c.fillStyle = colorOpacity;
    c.fill();

    c.beginPath();
    c.moveTo(230, 30);
    c.lineTo(200, 75);
    c.lineTo(240, 40);
    c.closePath();
    c.fillStyle = colorOpacity;
    c.fill();

    c.beginPath();
    c.moveTo(400, 75);
    c.lineTo(340, 75);
    c.lineTo(370, 30);
    c.closePath();
    c.fillStyle = colorOpacity;
    c.fill();
	
    c.beginPath();
    c.moveTo(0, 0);
    c.lineTo(600, 0);
    c.lineTo(0, 300);
    c.closePath();
    c.fillStyle = colorOpacity;
    c.fill();
}