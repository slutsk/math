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

function quadrilateral(cxt, x1, y1, x2, y2, x3, y3, x4, y4, width ,fillColor, strokeColor, fill_){
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
    
    cxt.stroke();
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
quadrilateral(ctx01, xc, yc, xc + a, yc, xc + a + left , yc + h, xc + left  , yc + h, 3, "red", "lightblue", true);
quadrilateral(ctx01, xc - k, yc, xc - a2 - k, yc + b, xc - a2 - k + left, yc + h + b, xc - k + left, yc + h, 3, "green", "lightblue", true);
quadrilateral(ctx01, xc + k + a, yc, xc - a2 + k + a, yc + b, xc - a2 + left + k + a, yc + h + b, xc + left + k + a, yc + h, 3, "blue", "lightblue", true);
quadrilateral(ctx01, xc + dx, yc + dy, xc + a + dx, yc + dy, xc + a + left + dx , yc + h + dy, xc + left + dx , yc + h + dy, 3, "orange", "lightblue", true);
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
