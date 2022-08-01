/**
*  РИСОВАНИЕ ЛИНИИ
*  (canvas,x1, y1, x2, y2, цвет, толщина, тип линии(длина штрихов и пустот, 0 - сплошная))
*/
function drawLine( ctx ,x1, y1, x2, y2, color, lineWidth, lineDash){
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.setLineDash([lineDash]);
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    
}

/**
 * четырёхугольник
 */

function quadrilateral(cxt, x1, y1, x2, y2, x3, y3, x4, y4, width ,fillColor, strokeColor, fill_, stroke_){
    cxt.beginPath();
    cxt.fillStyle = fillColor;
    cxt.strokeStyle = strokeColor;
    cxt.lineWidth = width;
      
    cxt.moveTo(x1, y1);
    cxt.lineTo(x2, y2); 
    cxt.lineTo(x3, y3);
    cxt.lineTo(x4, y4);
    cxt.lineTo(x1, y1);

    if(fill_) cxt.fill();
    if(stroke_) cxt.stroke();
}

const d = document;
//РИСУНОК 1
//Четырехугольная призма
let canvas01 = d.getElementById("prism01");
let ctx01 = canvas01.getContext("2d");
let x = 200, y = 4, a = 200, b = 100, a2 = 100, h = 180, left = -90;
let xc = x, yc = y;
drawLine(ctx01, x, y, x + a, y, "lightblue", 3, 0);
drawLine(ctx01, x + a, y, x + a2, y + b, "lightblue", 3, 0);
drawLine(ctx01, x + a2, y + b, x - a2, y + b, "lightblue", 3, 0);
drawLine(ctx01, x, y , x - a2, y + b, "lightblue", 3, 0);

drawLine(ctx01, x + left, y + h, x + a + left, y + h, "lightblue", 3, 10);
drawLine(ctx01, x + a + left, y + h, x + a2 + left, y + b + h, "lightblue", 3, 0);
drawLine(ctx01, x + a2 + left, y + b + h, x - a2 + left, y + b + h, "lightblue", 3, 0);
drawLine(ctx01, x + left, y + h, x - a2 + left, y + b + h, "lightblue", 3, 10);

drawLine(ctx01, x + left, y + h, x, y, "lightblue", 3, 10);
drawLine(ctx01, x + a + left, y + h, x + a, y, "lightblue", 3, 0);
drawLine(ctx01, x + a2 + left, y + b + h, x + a2, y + b, "lightblue", 3, 0);
drawLine(ctx01, x - a2 + left, y + h + b, x - a2, y + b, "lightblue", 3, 0);

//----------------------------------------------------------------

// основания (их 2)
//
x = 500;
drawLine(ctx01, x, y, x + a, y, "lightblue", 3, 0);
drawLine(ctx01, x + a, y, x + a2, y + b, "lightblue", 3, 0);
drawLine(ctx01, x + a2, y + b, x - a2, y + b, "lightblue", 3, 0);
drawLine(ctx01, x, y , x - a2, y + b, "lightblue", 3, 0);

drawLine(ctx01, x + left, y + h, x + a + left, y + h, "lightblue", 3, 10);
drawLine(ctx01, x + a + left, y + h, x + a2 + left, y + b + h, "lightblue", 3, 0);
drawLine(ctx01, x + a2 + left, y + b + h, x - a2 + left, y + b + h, "lightblue", 3, 0);
drawLine(ctx01, x + left, y + h, x - a2 + left, y + b + h, "lightblue", 3, 10);


ctx01.font = "24px Verdana";
ctx01.fillStyle = "white";
ctx01.fillText("основание", x - 10, y + 50);
ctx01.fillText("основание", x - 90, y + 220);

//----------------------------------------------------------------------------

//БОКОВЫЕ ГРАНИ           БОКОВЫЕ ГРАНИ

x = 820;
k = 20;
ctx01.setLineDash([0]);

xc += 620;
let dx = -100;
let dy = 100;
quadrilateral(ctx01, xc, yc, xc + a, yc, xc + a + left , yc + h, xc + left  , yc + h, 3, "red", "lightblue", true, true);
quadrilateral(ctx01, xc - k, yc, xc - a2 - k, yc + b, xc - a2 - k + left, yc + h + b, xc - k + left, yc + h, 3, "green", "lightblue", true, true);
quadrilateral(ctx01, xc + k + a, yc, xc - a2 + k + a, yc + b, xc - a2 + left + k + a, yc + h + b, xc + left + k + a, yc + h, 3, "blue", "lightblue", true, true);
quadrilateral(ctx01, xc + dx, yc + dy, xc + a + dx, yc + dy, xc + a + left + dx , yc + h + dy, xc + left + dx , yc + h + dy, 3, "orange", "lightblue", true, true);
// -------------------------------------------------------

//БОКОВЫЕ РЕБРА ----------------------------------------
const canvas02 = d.getElementById("prism02");
const ctx02 = canvas02.getContext("2d");

//левый рисунок

x = 200, y = 4, a = 200, b = 100, a2 = 100, h = 190, left = -90;

drawLine(ctx02, x, y, x + a, y, "lightblue", 3, 0);
drawLine(ctx02, x + a, y, x + a2, y + b, "lightblue", 3, 0);
drawLine(ctx02, x + a2, y + b, x - a2, y + b, "lightblue", 3, 0);
drawLine(ctx02, x, y , x - a2, y + b, "lightblue", 3, 0);

drawLine(ctx02, x + left, y + h, x + a + left, y + h, "lightblue", 3, 10);
drawLine(ctx02, x + a + left, y + h, x + a2 + left, y + b + h, "lightblue", 3, 0);
drawLine(ctx02, x + a2 + left, y + b + h, x - a2 + left, y + b + h, "lightblue", 3, 0);
drawLine(ctx02, x + left, y + h, x - a2 + left, y + b + h, "lightblue", 3, 10);

drawLine(ctx02, x + left, y + h, x, y, "yellow", 3, 10);
drawLine(ctx02, x + a + left, y + h, x + a, y, "yellow", 3, 0);
drawLine(ctx02, x + a2 + left, y + b + h, x + a2, y + b, "yellow", 3, 0);
drawLine(ctx02, x - a2 + left, y + h + b, x - a2, y + b, "yellow", 3, 0);

// правый рисунок
let x1 = 600, y1 = 4, x2 = 800, y2 = 4, x3 = 950, y3 = 54, x4 = 880, y4 = 104;
let x5 = 680, y5 = 104, x6 = 530, y6 = 54;
drawLine(ctx02, x1, y1, x2, y2, "lightblue", 3, 0);
drawLine(ctx02, x2, y2, x3, y3, "lightblue", 3, 0);
drawLine(ctx02, x3, y3, x4, y4, "lightblue", 3, 0);
drawLine(ctx02, x4, y4, x5, y5, "lightblue", 3, 0);
drawLine(ctx02, x5, y5, x6, y6, "lightblue", 3, 0);
drawLine(ctx02, x6, y6, x1, y1, "lightblue", 3, 0);

h = 190;
drawLine(ctx02, x1, y1+h, x2, y2+h, "lightblue", 3, 10);
drawLine(ctx02, x2, y2+h, x3, y3+h, "lightblue", 3, 10);
drawLine(ctx02, x3, y3+h, x4, y4+h, "lightblue", 3, 0);
drawLine(ctx02, x4, y4+h, x5, y5+h, "lightblue", 3, 0);
drawLine(ctx02, x5, y5+h, x6, y6+h, "lightblue", 3, 0);
drawLine(ctx02, x6, y6+h, x1, y1+h, "lightblue", 3, 10);
color = "yellow"
drawLine(ctx02, x1, y1, x1, y2+h, color, 3, 10);
drawLine(ctx02, x2, y2, x2, y2+h, color, 3, 10);
drawLine(ctx02, x3, y3, x3, y3+h, color, 3, 0);
drawLine(ctx02, x4, y4, x4, y4+h, color, 3, 0);
drawLine(ctx02, x5, y5, x5, y5+h, color, 3, 0);
drawLine(ctx02, x6, y6, x6, y6+h, color, 3, 0);

//ДИАГОНАЛИ ДИАГОНАЛИ 
//левый рисунок
let canvas = d.getElementById("prism03");
let ctx03 = canvas.getContext("2d");

x = 200, y = 4, a = 200, b = 100, a2 = 100, h = 190, left = -90;
color = "lightblue";
drawLine(ctx03, x, y, x + a, y, color, 3, 0);
drawLine(ctx03, x + a, y, x + a2, y + b, color, 3, 0);
drawLine(ctx03, x + a2, y + b, x - a2, y + b, color, 3, 0);
drawLine(ctx03, x, y , x - a2, y + b, color, 3, 0);

//линии диагоналей
color = "yellow";
drawLine(ctx03, x, y, x + a2 + left, y + h + b, color, 3, 10);

color = "lightblue";
drawLine(ctx03, x + left, y + h, x + a + left, y + h, color, 3, 10);
drawLine(ctx03, x + a + left, y + h, x + a2 + left, y + b + h, color, 3, 0);
drawLine(ctx03, x + a2 + left, y + b + h, x - a2 + left, y + b + h, color, 3, 0);
drawLine(ctx03, x + left, y + h, x - a2 + left, y + b + h, color, 3, 10);

drawLine(ctx03, x + left, y + h, x, y, color, 3, 10);
drawLine(ctx03, x + a + left, y + h, x + a, y, color, 3, 0);
drawLine(ctx03, x + a2 + left, y + b + h, x + a2, y + b, color, 3, 0);
drawLine(ctx03, x - a2 + left, y + h + b, x - a2, y + b, color, 3, 0);

//правый рисунок

x1 = 620, y1 = 4, x2 = 850, y2 = 4, x3 = 950, y3 = 54, x4 = 900, y4 = 104;
x5 = 680, y5 = 104, x6 = 500, y6 = 54;
drawLine(ctx03, x1, y1, x2, y2, "lightblue", 3, 0);
drawLine(ctx03, x2, y2, x3, y3, "lightblue", 3, 0);
drawLine(ctx03, x3, y3, x4, y4, "lightblue", 3, 0);
drawLine(ctx03, x4, y4, x5, y5, "lightblue", 3, 0);
drawLine(ctx03, x5, y5, x6, y6, "lightblue", 3, 0);
drawLine(ctx03, x6, y6, x1, y1, "lightblue", 3, 0);3

h = 190;
drawLine(ctx03, x1, y1+h, x2, y2+h, "lightblue", 3, 10);
drawLine(ctx03, x2, y2+h, x3, y3+h, "lightblue", 3, 10);
drawLine(ctx03, x3, y3+h, x4, y4+h, "lightblue", 3, 0);
drawLine(ctx03, x4, y4+h, x5, y5+h, "lightblue", 3, 0);
drawLine(ctx03, x5, y5+h, x6, y6+h, "lightblue", 3, 0);
drawLine(ctx03, x6, y6+h, x1, y1+h, "lightblue", 3, 10);

//линии диагоналей
color = "yellow";
drawLine(ctx03, x2, y2, x6, y6+h, color, 3, 10);
drawLine(ctx03, x2, y2, x5, y5+h, color, 3, 10);
drawLine(ctx03, x2, y2, x4, y4+h, color, 3, 10);
color = "lightblue";

drawLine(ctx03, x1, y1, x1, y2+h, color, 3, 10);
drawLine(ctx03, x2, y2, x2, y2+h, color, 3, 10);
drawLine(ctx03, x3, y3, x3, y3+h, color, 3, 0);
drawLine(ctx03, x4, y4, x4, y4+h, color, 3, 0);
drawLine(ctx03, x5, y5, x5, y5+h, color, 3, 0);
drawLine(ctx03, x6, y6, x6, y6+h, color, 3, 0);

//Диагональная плоскость --------------------------
let convas = d.getElementById("prism04");
ctx04 = convas.getContext("2d");

x1 = 100, y1 = 54, x2 = 350, y2 = 54, x3 = 550, y3 = 104, x4 = 430, y4 = 154;
x5 = 180, y5 = 154, x6 = 5, y6 = 104, h = 160;
drawLine(ctx04, x1, y1, x2, y2, "lightblue", 3, 0);
drawLine(ctx04, x1, y1+h, x2, y2+h, "lightblue", 3, 10);
drawLine(ctx04, x3, y3, x4, y4, "lightblue", 3, 0);
drawLine(ctx04, x5, y5, x6, y6, "lightblue", 3, 0);
drawLine(ctx04, x6, y6, x1, y1, "lightblue", 3, 0);

drawLine(ctx04, x5, y5+h, x6, y6+h, "lightblue", 3, 0);
let dh = 50;

ctx04.globalAlpha = 0.85;
quadrilateral(ctx04, x2 + dh, y2 - dh, x2 + dh, y2 + h - 15 , x5 - dh, y5 + h + dh, x5-dh, y5, 3, "#FF4500", "#FF4500", true);
ctx04.globalAlpha = 1;

drawLine(ctx04, x2, y2, x3, y3, "lightblue", 3, 0);
drawLine(ctx04, x4, y4, x5, y5, "lightblue", 3, 0);


drawLine(ctx04, x2, y2+h, x3, y3+h, "lightblue", 3, 10);
drawLine(ctx04, x3, y3+h, x4, y4+h, "lightblue", 3, 0);
drawLine(ctx04, x4, y4+h, x5, y5+h, "lightblue", 3, 0);

drawLine(ctx04, x6, y6+h, x1, y1+h, "lightblue", 3, 10);
drawLine(ctx04, x1, y1, x1, y2+h, color, 3, 10);

drawLine(ctx04, x2, y2, x2, y2+h, "yellow", 4, 10);
drawLine(ctx04, x3, y3, x3, y3+h, color, 3, 0);
drawLine(ctx04, x4, y4, x4, y4+h, color, 3, 0);
drawLine(ctx04, x5, y5, x5, y5+h, "yellow", 4, 0);
drawLine(ctx04, x6, y6, x6, y6+h, color, 3, 0);
drawLine(ctx04, x2, y2, x5, y5, color, 3, 0);
drawLine(ctx04, x2, y2+h, x5, y5+h, color, 3, 10);

// диагональное сечение

convas = d.getElementById("prism05");
ctx05 = convas.getContext("2d");

x1 = 100, y1 = 4, x2 = 250, y2 = 4, x3 = 350, y3 = 54, x4 = 300, y4 = 154;
x5 = 4, y5 = 154, h = 300;
drawLine(ctx05, x1, y1, x2, y2, "lightblue", 3, 0);
drawLine(ctx05, x1, y1+h, x2, y2+h, "lightblue", 3, 10);
drawLine(ctx05, x3, y3, x4, y4, "lightblue", 3, 0);
drawLine(ctx05, x5, y5, x1, y1, "lightblue", 3, 0);
drawLine(ctx05, x5, y5+h, x1, y1+h, "lightblue", 3, 0);

drawLine(ctx05, x1, y1, x1, y1+h, color, 3, 10);

ctx05.globalAlpha = 0.75;
quadrilateral(ctx05, x2, y2, x2 , y2 + h , x5, y5 + h, x5, y5, 3, "blue", "darkblue", true);
ctx05.globalAlpha = 1;

drawLine(ctx05, x2, y2, x3, y3, "lightblue", 3, 0);
drawLine(ctx05, x4, y4, x5, y5, "lightblue", 3, 0);


drawLine(ctx05, x2, y2+h, x3, y3+h, "lightblue", 3, 10);
drawLine(ctx05, x3, y3+h, x4, y4+h, "lightblue", 3, 0);
drawLine(ctx05, x4, y4+h, x5, y5+h, "lightblue", 3, 0);

drawLine(ctx05, x2, y2, x2, y2+h, color, 3, 10);
drawLine(ctx05, x3, y3, x3, y3+h, color, 3, 0);
drawLine(ctx05, x4, y4, x4, y4+h, color, 3, 0);
drawLine(ctx05, x5, y5, x5, y5+h, color, 3, 0);

drawLine(ctx05, x2, y2, x5, y5, color, 3, 0);
drawLine(ctx05, x2, y2+h, x5, y5+h, color, 3, 10);

//правый рисунок

x = 600, y = 4, a = 295, b = 100, a2 = 100, h = 350, left = -90;

drawLine(ctx05, x, y, x + a, y, color, 3, 0);
drawLine(ctx05, x + a, y, x + a2, y + b, color, 3, 0);
drawLine(ctx05, x, y , x - a2, y + b, color , 3, 0);
drawLine(ctx05, x + left, y + h, x + a + left, y + h, color, 3, 10);
ctx05.globalAlpha = 0.75;
quadrilateral(ctx05, x, y, x + a2, y + b, x + a2 + left, y + b + h, x + left, y + h, 4, "orange", "lightblue", true);
ctx05.globalAlpha = 1;
drawLine(ctx05, x, y, x + a2, y + b, color, 3, 0);
drawLine(ctx05, x+left, y+h, x + a2 + left, y + b + h, color, 3, 10);
drawLine(ctx05, x + a2, y + b, x - a2, y + b, color, 3, 0);

drawLine(ctx05, x + a + left, y + h, x + a2 + left, y + b + h, color, 3, 0);
drawLine(ctx05, x + a2 + left, y + b + h, x - a2 + left, y + b + h, color, 3, 0);
drawLine(ctx05, x + left, y + h, x - a2 + left, y + b + h, color, 3, 10);

drawLine(ctx05, x + left, y + h, x, y, color , 3, 10);
drawLine(ctx05, x + a + left, y + h, x + a, y, color , 3, 0);
drawLine(ctx05, x + a2 + left, y + b + h, x + a2, y + b, color , 3, 0);
drawLine(ctx05, x - a2 + left, y + h + b, x - a2, y + b, color , 3, 0);

//ВИДЫ ПРИЗМ (треугольная, четырехугольная, ...)
canvas = d.getElementById("prism06");
ctx06 = canvas.getContext("2d");

//треугольная
x1 = 80, y1 = 4, x2 = 250, y2 = 4, x3 = 120, y3 = 90, h = 200;
dx = -75;
color = "#00FFFF";
drawLine(ctx06, x1, y1, x2, y2, color, 3, 0);
drawLine(ctx06, x2, y2, x3, y3, color, 3, 0);
drawLine(ctx06, x3, y3, x1, y1, color, 3, 0);

drawLine(ctx06, x1 + dx, y1 + h, x2 + dx, y2 + h, color, 3, 10);
drawLine(ctx06, x2 + dx, y2 + h, x3 + dx, y3 + h, color, 3, 0);
drawLine(ctx06, x3 + dx, y3 + h, x1 +dx, y1 + h, color, 3, 0);

drawLine(ctx06, x1 + dx, y1 + h, x1, y1, color, 3, 0);
drawLine(ctx06, x2 + dx, y2 + h, x2, y2, color, 3, 0);
drawLine(ctx06, x3 + dx, y3 + h, x3, y3, color, 3, 0);

//четырехугольная
x1 = 300, y1 = 4, x2 = 530, y2 = 4, x3 = 470, y3 = 84, x4 = 320, y4 = 100;
dx = -30, h = 195;
color = "#FF00FF";
drawLine(ctx06, x1, y1, x2, y2, color, 3, 0);
drawLine(ctx06, x2, y2, x3, y3, color, 3, 0);
drawLine(ctx06, x3, y3, x4, y4, color, 3, 0);
drawLine(ctx06, x4, y4, x1, y1, color, 3, 0);

drawLine(ctx06, x1+dx, y1 + h, x2+dx, y2 + h, color, 3, 10);
drawLine(ctx06, x2+dx, y2 + h, x3+dx, y3 + h, color, 3, 0);
drawLine(ctx06, x3+dx, y3 + h, x4+dx, y4 + h, color, 3, 0);
drawLine(ctx06, x4+dx, y4 + h, x1+dx, y1 + h, color, 3, 0);

drawLine(ctx06, x1+dx, y1 + h, x1, y1, color, 3, 0);
drawLine(ctx06, x2+dx, y2 + h, x2, y2, color, 3, 0);
drawLine(ctx06, x3+dx, y3 + h, x3, y3, color, 3, 0);
drawLine(ctx06, x4+dx, y4 + h, x4, y4, color, 3, 0);

//пятиугольная
x1 = 700, y1 = 4, x2 = 790, y2 = 4, x3 = 895, y3 = 50, x4 = 848, y4 = 100, x5 = 600, y5 = 78;
h = 195;
color = "#98FB98";

drawLine(ctx06, x1, y1, x2, y2, color, 3, 0);
drawLine(ctx06, x2, y2, x3, y3, color, 3, 0);
drawLine(ctx06, x3, y3, x4, y4, color, 3, 0);
drawLine(ctx06, x4, y4, x5, y5, color, 3, 0);
drawLine(ctx06, x5, y5, x1, y1, color, 3, 0);

drawLine(ctx06, x1, y1+h, x2, y2+h, color, 3, 10);
drawLine(ctx06, x2, y2+h, x3, y3+h, color, 3, 10);
drawLine(ctx06, x3, y3+h, x4, y4+h, color, 3, 0);
drawLine(ctx06, x4, y4+h, x5, y5+h, color, 3, 0);
drawLine(ctx06, x5, y5+h, x1, y1+h, color, 3, 10);

drawLine(ctx06, x1, y1+h, x1, y1, color, 3, 10);
drawLine(ctx06, x2, y2+h, x2, y2, color, 3, 10);
drawLine(ctx06, x3, y3+h, x3, y3, color, 3, 0);
drawLine(ctx06, x4, y4+h, x4, y4, color, 3, 0);
drawLine(ctx06, x5, y5+h, x5, y5, color, 3, 0);

// Прямая призма
canvas = d.getElementById("prism07_1");
ctx07_1 = canvas.getContext('2d');
x1 = 70, y1 = 4, x2 = 270, y2 = 4, x3 = 420, y3 = 54, x4 = 350, y4 = 104;
x5 = 150, y5 = 104, x6 = 3, y6 = 54;
h = 190;
//уголки
function rectangle_corner(ctx, x1, y1, x2, y2, x3, y3, strokeColor, width){
    ctx.beginPath();
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = width;
      
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2); 
    ctx.lineTo(x3, y3);
    ctx.stroke();
}
let m = 20;

rectangle_corner(ctx07_1, x1, y1 + m, x1 + m, y1 + m, x1 + m, y1, "white", 2);
rectangle_corner(ctx07_1, x5, y5 + m , x5 + m, y5+ m,x5 + m, y5 , "white", 2);
rectangle_corner(ctx07_1, x2 - m, y2 , x2 - m, y2 + m, x2 , y2 +m , "white", 2);
rectangle_corner(ctx07_1, x4 - m, y4 , x4 - m, y4 + m, x4 , y4 +m , "white", 2);
rectangle_corner(ctx07_1, x2 + m, y2 + 8 , x2 + m, y2 + m + 8, x2 , y2 + m , "white", 2);
rectangle_corner(ctx07_1, x6 + m, y6 + 8 , x6 + m, y6 + m + 8, x6 , y6 + m , "white", 2);
rectangle_corner(ctx07_1, x3 - m, y3 - 8 , x3 - m, y3 + m - 8, x3 , y3 + m , "white", 2);
rectangle_corner(ctx07_1, x5 - m, y5 - 8 , x5 - m, y5 + m - 8, x5 , y5 + m , "white", 2);
rectangle_corner(ctx07_1, x4 + m - 5, y4 - 12, x4 + m - 5, y4 + m - 12, x4 , y4 + m, "white", 2);
rectangle_corner(ctx07_1, x6 + m - 5, y6 - 12, x6 + m - 5, y6 + m - 12, x6 , y6 + m, "white", 2);
rectangle_corner(ctx07_1, x1 - m + 5, y1 + 12, x1 - m  + 5, y1 + 12 + m, x1 , y1 + m, "white", 2);
rectangle_corner(ctx07_1, x3 - m + 5, y3 + 12, x3 - m  + 5, y3 + 12 + m, x3 , y3 + m, "white", 2);

rectangle_corner(ctx07_1, x1, y1 - m + h, x1 + m, y1 - m + h, x1 + m, y1+h, "white", 2);
rectangle_corner(ctx07_1, x5, y5 - m + h , x5 + m, y5 - m + h, x5 + m, y5 + h, "white", 2);
rectangle_corner(ctx07_1, x2 - m, y2+h , x2 - m, y2 - m + h, x2 , y2 - m +h, "white", 2);
rectangle_corner(ctx07_1, x4 - m, y4 +h, x4 - m, y4 - m + h, x4 , y4 - m +h, "white", 2);
rectangle_corner(ctx07_1, x2 + m, y2 + h + 5, x2 + m, y2  - 10 + h, x2 , y2 - m + h, "white", 2);
rectangle_corner(ctx07_1, x6 + m, y6 + 5 + h, x6 + m, y6 - 10 + h, x6 , y6 - m + h, "white", 2);
rectangle_corner(ctx07_1, x3 - m + 5, y3 - m  + 14 + h,  x3 - m + 5, y3 - m - 4 + h,  x3, y3 - m + h, "white", 2);
rectangle_corner(ctx07_1, x5 - m + 5, y5 - m  +  h + 14, x5 - m + 5, y5 - m  + h - 7, x5, y5 - m + h, "white", 2);
rectangle_corner(ctx07_1, x4 + m - 5, y4 - 12 + h, x4 + m - 5, y4 - m - 12+h, x4 , y4 - m+h, "white", 2);
rectangle_corner(ctx07_1, x6 + m - 5, y6 - 12 + h, x6 + m - 5, y6 - m - 12+h, x6 , y6 - m+h, "white", 2);
rectangle_corner(ctx07_1, x1 - m + 5, y1 + 12 + h, x1 - m  + 5, y1 + 12 - m+h, x1 , y1 - m+h, "white", 2);

//рисунок
color = "#00FFFF";;
drawLine(ctx07_1, x1, y1, x2, y2, color, 3, 0);
drawLine(ctx07_1, x2, y2, x3, y3, color, 3, 0);
drawLine(ctx07_1, x3, y3, x4, y4, color, 3, 0);
drawLine(ctx07_1, x4, y4, x5, y5, color, 3, 0);
drawLine(ctx07_1, x5, y5, x6, y6, color, 3, 0);
drawLine(ctx07_1, x6, y6, x1, y1, color, 3, 0);

drawLine(ctx07_1, x1, y1+h, x2, y2+h, color, 3, 10);
drawLine(ctx07_1, x2, y2+h, x3, y3+h, color, 3, 10);
drawLine(ctx07_1, x3, y3+h, x4, y4+h, color, 3, 0);
drawLine(ctx07_1, x4, y4+h, x5, y5+h, color, 3, 0);
drawLine(ctx07_1, x5, y5+h, x6, y6+h, color, 3, 0);
drawLine(ctx07_1, x6, y6+h, x1, y1+h, color, 3, 10);

drawLine(ctx07_1, x1, y1, x1, y2+h, color, 3, 10);
drawLine(ctx07_1, x2, y2, x2, y2+h, color, 3, 10);
drawLine(ctx07_1, x3, y3, x3, y3+h, color, 3, 0);
drawLine(ctx07_1, x4, y4, x4, y4+h, color, 3, 0);
drawLine(ctx07_1, x5, y5, x5, y5+h, color, 3, 0);
drawLine(ctx07_1, x6, y6, x6, y6+h, color, 3, 0);

rectangle_corner(ctx07_1, x3 - m + 2, y3 + 12 + h, x3 - m  + 2, y3 + 14 - m+h, x3 , y3 - m+h, "white", 2);
// второй рисунок

canvas = d.getElementById("prism07_2");
ctx07_2 = canvas.getContext('2d');
x1 = 80, y1 = 4, x2 = 250, y2 = 4, x3 = 120, y3 = 90, h = 205;
dx = 0;

rectangle_corner(ctx07_2, x1, y1 + m, x1 + m, y1 + m, x1 + m, y1, "white", 2);
rectangle_corner(ctx07_2, x2 - m, y2 , x2 - m, y2 + m, x2 , y2 +m , "white", 2);
rectangle_corner(ctx07_2, x2 - m, y2+h , x2 - m, y2 - m + h, x2 , y2 - m +h, "white", 2);
rectangle_corner(ctx07_2, x1, y1 - m + h, x1 + m, y1 - m + h, x1 + m, y1+h, "white", 2);
rectangle_corner(ctx07_2, x2 - m + 5, y2 + 12, x2 - m  + 5, y2 + 12 + m, x2 , y2 + m, "white", 2);
rectangle_corner(ctx07_2, x3 + m - 5, y3 - 12, x3 + m - 5, y3 + m - 12, x3 , y3 + m, "white", 2);
rectangle_corner(ctx07_2, x3 + m - 5, y3 - 12 + h, x3 + m - 5, y3 - m - 12+h, x3 , y3 - m+h, "white", 2);
rectangle_corner(ctx07_2, x1, y1 + m, x1 + m - 14, y1 + m + 15, x1 + m - 14, y1 + 14,  "white", 2);
rectangle_corner(ctx07_2, x1, y1 - m + h, x1 + m - 14, y1 - m + 15 +h, x1 + m - 14, y1 - m + h + 30, "white", 2);
rectangle_corner(ctx07_2, x3, y3 + m, x3 - m/2, y3 + m/2 - 10 , x3 - m/2, y3 - m,  "white", 2);
rectangle_corner(ctx07_2, x3, y3 - m + h, x3 - m/2, y3 - m - 20 + h, x3 - m/2, y3 - m + h,  "white", 2);

color = "#FF00FF";
drawLine(ctx07_2, x1, y1, x2, y2, color, 3, 0);
drawLine(ctx07_2, x2, y2, x3, y3, color, 3, 0);
drawLine(ctx07_2, x3, y3, x1, y1, color, 3, 0);

drawLine(ctx07_2, x1 + dx, y1 + h, x2 + dx, y2 + h, color, 3, 10);
drawLine(ctx07_2, x2 + dx, y2 + h, x3 + dx, y3 + h, color, 3, 0);
drawLine(ctx07_2, x3 + dx, y3 + h, x1 +dx, y1 + h, color, 3, 0);

drawLine(ctx07_2, x1 + dx, y1 + h, x1, y1, color, 3, 0);
drawLine(ctx07_2, x2 + dx, y2 + h, x2, y2, color, 3, 0);
drawLine(ctx07_2, x3 + dx, y3 + h, x3, y3, color, 3, 0);

rectangle_corner(ctx07_2, x2 - m + 2, y2 + 12 + h, x2 - m  + 2, y2 + 14 - m+h, x2 , y2 - m+h, "white", 2);

// третий рисунк
canvas = d.getElementById("prism07_3");
ctx07_3 = canvas.getContext('2d');

x1 = 102, y1 = 4, x2 = 190, y2 = 4, x3 = 295, y3 = 50, x4 = 248, y4 = 100, x5 = 5, y5 = 78;
h = 195;
color = "#98FB98";

rectangle_corner(ctx07_3, x1, y1 + m, x1 + m, y1 + m, x1 + m, y1, "white", 2);
rectangle_corner(ctx07_3, x5, y5 + m , x5 + m, y5+ m + 2,x5 + m, y5 , "white", 2);
rectangle_corner(ctx07_3, x2 - m, y2 , x2 - m, y2 + m, x2 , y2 +m , "white", 2);
rectangle_corner(ctx07_3, x4 - m, y4 , x4 - m, y4 + m - 2, x4 , y4 +m , "white", 2);
rectangle_corner(ctx07_3, x2 + m, y2 + 8 , x2 + m, y2 + m + 8, x2 , y2 + m , "white", 2);
rectangle_corner(ctx07_3, x3 - m, y3 - 8 , x3 - m, y3 + m - 8, x3 , y3 + m , "white", 2);
rectangle_corner(ctx07_3, x5, y5 + m, x5 + m/2 , y5 + m - 8, x5 + m/2 , y5 - m/2 +2 , "white", 2);
rectangle_corner(ctx07_3, x4 + m - 10, y4 - 12, x4 + m - 10, y4 + m - 10, x4, y4 + m, "white", 2);
rectangle_corner(ctx07_3, x1 - m + 5, y1 + 12, x1 - m  + 5, y1 + 12 + m, x1 , y1 + m, "white", 2);
rectangle_corner(ctx07_3, x3 - m + 5, y3 + 12, x3 - m  + 5, y3 + 12 + m, x3 , y3 + m, "white", 2);

rectangle_corner(ctx07_3, x1, y1 - m + h, x1 + m, y1 - m + h, x1 + m, y1+h, "white", 2);
rectangle_corner(ctx07_3, x5, y5 - m + h , x5 + m, y5 - m + h + 2, x5 + m, y5 + h, "white", 2);
rectangle_corner(ctx07_3, x2 - m, y2+h , x2 - m, y2 - m + h, x2 , y2 - m +h, "white", 2);
rectangle_corner(ctx07_3, x4 - m, y4 +h, x4 - m, y4 - m + h, x4 , y4 - m + h + 2, "white", 2);
rectangle_corner(ctx07_3, x2 + m, y2 + h + 8, x2 + m, y2  - 10 + h, x2 , y2 - m + h, "white", 2);
rectangle_corner(ctx07_3, x3 - m + 5, y3 - m  + 14 + h,  x3 - m + 5, y3 - m - 6 + h,  x3, y3 - m + h, "white", 2);
rectangle_corner(ctx07_3, x5, y5 - m  +  h, x5 + m/2, y5 - m  + h - 8, x5 + m/2, y5 - m/2 + h + 2, "white", 2);
rectangle_corner(ctx07_3, x4 + m - 10, y4 - 12 + h, x4 + m - 10, y4 - m - 12 + h, x4, y4 - m + h + 2, "white", 2);
rectangle_corner(ctx07_3, x1 - m + 5, y1 + 12 + h, x1 - m  + 5, y1 + 12 - m+h, x1 , y1 - m+h, "white", 2);

drawLine(ctx07_3, x1, y1, x2, y2, color, 3, 0);
drawLine(ctx07_3, x2, y2, x3, y3, color, 3, 0);
drawLine(ctx07_3, x3, y3, x4, y4, color, 3, 0);
drawLine(ctx07_3, x4, y4, x5, y5, color, 3, 0);
drawLine(ctx07_3, x5, y5, x1, y1, color, 3, 0);

drawLine(ctx07_3, x1, y1+h, x2, y2+h, color, 3, 10);
drawLine(ctx07_3, x2, y2+h, x3, y3+h, color, 3, 10);
drawLine(ctx07_3, x3, y3+h, x4, y4+h, color, 3, 0);
drawLine(ctx07_3, x4, y4+h, x5, y5+h, color, 3, 0);
drawLine(ctx07_3, x5, y5+h, x1, y1+h, color, 3, 10);

drawLine(ctx07_3, x1, y1+h, x1, y1, color, 3, 10);
drawLine(ctx07_3, x2, y2+h, x2, y2, color, 3, 10);
drawLine(ctx07_3, x3, y3+h, x3, y3, color, 3, 0);
drawLine(ctx07_3, x4, y4+h, x4, y4, color, 3, 0);
drawLine(ctx07_3, x5, y5+h, x5, y5, color, 3, 0);

rectangle_corner(ctx07_3, x3 - m/2, y3 + 12 + h, x3 - m/2, y3 + 12 - m+h, x3 , y3 - m+h, "white", 2);
