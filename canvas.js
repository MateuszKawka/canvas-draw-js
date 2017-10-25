const canvas = document.getElementById("canvas"),
    mainColor = "#251539",
    earsColor = "#9465AB",
    eyeColor = "#ffffff",
    eyeColor2 = "#1A1B47",
    eyeColor3 = "#4D387B",
    eyeColor4 = "#000020",
    eyeColor5 = "#FFFFFF",
    colorOpacity = "rgba(255, 255, 255, 0.1)";

const c = canvas.getContext("2d");
canvas.width = '600'
canvas.height = '400'

// B A C K G R O U N D

c.beginPath();
c.rect(0, 0, canvas.width, canvas.height);

// B O D Y

const body = () => {
    c.beginPath();
    c.moveTo(140, 75);
    c.lineTo(460, 75);
    c.lineTo(340, 230);
    c.lineTo(260, 230);
    c.closePath();
    c.stroke();
    c.fillStyle = mainColor;
    c.fill();
}

//-- ears

let ears = () => {

    //-- left

    c.beginPath();
    c.moveTo(200, 75);
    c.lineTo(260, 75);
    c.lineTo(230, 30);
    c.closePath();
    c.fillStyle = mainColor;
    c.fill();

    //-- inner left

    c.beginPath();
    c.moveTo(210, 70);
    c.lineTo(250, 70);
    c.lineTo(230, 41);
    c.closePath();
    c.fillStyle = earsColor;
    c.fill();


    //-- right

    c.beginPath();
    c.moveTo(400, 75);
    c.lineTo(340, 75);
    c.lineTo(370, 30);
    c.closePath();
    c.fillStyle = mainColor;
    c.fill();

    //-- inner right

    c.beginPath();
    c.moveTo(390, 70);
    c.lineTo(350, 70);
    c.lineTo(370, 41);
    c.closePath();
    c.fillStyle = earsColor;
    c.fill();
}

const wings = () => {

    //-- left

    c.beginPath();
    c.moveTo(140, 75);
    c.lineTo(90, 75);
    c.lineTo(115, 125);
    c.closePath();
    c.fillStyle = mainColor;
    c.fill();

    //-- right

    c.beginPath();
    c.moveTo(460, 75);
    c.lineTo(510, 75);
    c.lineTo(485, 125);
    c.closePath();
    c.fillStyle = mainColor;
    c.fill();
}

//-- eyes

const eyes = () => {

    //-- left

    c.beginPath();
    c.moveTo(200, 85);
    c.lineTo(260, 85);
    c.quadraticCurveTo(245, 140, 230, 140);
    c.quadraticCurveTo(215, 140, 200, 85);
    c.fillStyle = eyeColor;
    c.fill();
    c.closePath();

    //-- inner left

    c.beginPath();
    c.moveTo(210, 85);
    c.lineTo(250, 85);
    c.quadraticCurveTo(245, 125, 230, 125);
    c.quadraticCurveTo(215, 125, 210, 85);
    c.closePath();
    c.fillStyle = eyeColor2;
    c.fill();

    //-- inner left v2

    c.beginPath();
    c.arc(230, 100, 13, 0, 2 * Math.PI);
    c.closePath();
    c.fillStyle = eyeColor3;
    c.fill();

    //-- inner left v3

    c.beginPath();
    c.arc(230, 100, 6, 0, 2 * Math.PI);
    c.closePath();
    c.fillStyle = eyeColor4;
    c.fill();

    //-- inner left v4

    c.beginPath();
    c.arc(236, 94, 4, 0, 2 * Math.PI);
    c.closePath();
    c.fillStyle = eyeColor5;
    c.fill();

    //-- right

    c.beginPath();
    c.moveTo(340, 85);
    c.lineTo(400, 85);
    c.quadraticCurveTo(385, 140, 370, 140);
    c.quadraticCurveTo(355, 140, 340, 85);
    c.fillStyle = eyeColor;
    c.fill();
    c.closePath();

    //-- inner right

    c.beginPath();
    c.moveTo(350, 85);
    c.lineTo(390, 85);
    c.quadraticCurveTo(385, 125, 370, 125);
    c.quadraticCurveTo(355, 125, 350, 85);
    c.closePath();
    c.fillStyle = eyeColor2;
    c.fill();

    //-- inner right v2

    c.beginPath();
    c.arc(370, 100, 13, 0, 2 * Math.PI);
    c.closePath();
    c.fillStyle = eyeColor3;
    c.fill();

    //-- inner right v3

    c.beginPath();
    c.arc(370, 100, 6, 0, 2 * Math.PI);
    c.closePath();
    c.fillStyle = eyeColor4;
    c.fill();

    //-- inner right v4

    c.beginPath();
    c.arc(376, 94, 4, 0, 2 * Math.PI);
    c.closePath();
    c.fillStyle = eyeColor5;
    c.fill();
}


const tooth = () => {

    c.beginPath();
    c.moveTo(280, 185);
    c.lineTo(320, 185);
    c.quadraticCurveTo(320, 205, 300, 205);
    c.quadraticCurveTo(280, 205, 280, 185);
    c.closePath();
    c.fillStyle = eyeColor;
    c.fill();
}

// L I G H T S

const lights = () => {

    //-- main light

    c.beginPath();
    c.moveTo(0, 0);
    c.lineTo(600, 0);
    c.lineTo(0, 300);
    c.closePath();
    c.fillStyle = colorOpacity;
    c.fill();


    //--right eye

    c.beginPath();
    c.moveTo(340, 85);
    c.lineTo(400, 85);
    c.lineTo(360, 120);
    c.closePath();
    c.fillStyle = colorOpacity;
    c.fill();

    //-- left ear

    c.beginPath();
    c.moveTo(230, 30);
    c.lineTo(200, 75);
    c.lineTo(240, 40);
    c.closePath();
    c.fillStyle = colorOpacity;
    c.fill();

    //-- right ear

    c.beginPath();
    c.moveTo(370, 30);
    c.lineTo(380, 47);
    c.lineTo(340, 75);
    c.closePath();
    c.fillStyle = colorOpacity;
    c.fill();

}

// LET'S GO LEGO NINJA !

body();
ears();
eyes();
wings();
tooth();
lights();