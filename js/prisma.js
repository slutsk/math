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

const d = document;
const canvas01 = d.getElementById("prism01");
const ctx01 = canvas01.getContext("2d");
let x = 200, y = 10, a = 200, b = 100, a2 = 100, h = 180, left = -90;
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
