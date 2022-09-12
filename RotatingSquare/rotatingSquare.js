"use strict";
 var vertices = new Float32Array([
     -0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5,
 ]);
 var vertices2 = new Float32Array([
    -0.1, -0.1, 0.1, -0.1, 0.1, 0.1, -0.1, -0.1, 0.1, 0.1, -0.1, 0.1,
]);

 var numPoints = vertices.length / 2;
 var w;
 var h;
 function mapToViewport(x, y, n = 5) {
     return [((x + n / 2) * w) / n, ((-y + n / 2) * h) / n];
 }

 function getVertex(i) {
     let j = (i % numPoints) * 2;
     return [vertices[j], vertices[j+1]];
 }
 function draw(ctx,angle,vertice) {
     let vertexIndex = vertice
     ctx.fillStyle = "rgba(0, 0, 0, 1)";
     ctx.rect(0, 0, w, h);
     ctx.fill();
    //  ctx.rect(100, 100, 100, 100);
    //  ctx.fillRect(100,100,100,100)
     let [x, y] = mapToViewport(...getVertex(vertexIndex));
     ctx.translate(x,y)
     ctx.rotate(-angle*3.14/180);
     ctx.translate(-x,-y)
     ctx.beginPath();
     for (let i = 0; i < numPoints; i++) {
      if (i == 3 || i == 4) continue;
      let [x, y] = mapToViewport(...getVertex(i).map((v) => v ));
      if (i == 0) {
        ctx.moveTo(x, y);
      }
      else {
        ctx.lineTo(x, y);
      }
    }
    ctx.closePath();
    ctx.strokeStyle = "yellow";
    ctx.lineWidth = 10;
    ctx.stroke();
    ctx.fillStyle = "yellow";
    ctx.fill();

    if(vertice == 5){
        ctx.closePath();
        ctx.strokeStyle = "red";
        ctx.lineWidth = 10;
        ctx.stroke();
        ctx.fillStyle = "yellow";
        ctx.fill();

        ctx.strokeStyle = "red"
        ctx.lineWidth = 10
        ctx.fillStyle = "red";
        ctx.strokeRect(280,280,5,5)
    }

    if(vertice == 2){
        ctx.closePath();
        ctx.strokeStyle = "green";
        ctx.lineWidth = 10;
        ctx.stroke();
        ctx.fillStyle = "yellow";
        ctx.fill();

        ctx.strokeStyle = "green"
        ctx.lineWidth = 10
        ctx.fillStyle = "red";
        ctx.strokeRect(415,280,5,5)
    }

    if(vertice == 1){
        ctx.closePath();
        ctx.strokeStyle = "blue";
        ctx.lineWidth = 10;
        ctx.stroke();
        ctx.fillStyle = "yellow";
        ctx.fill();

        ctx.strokeStyle = "blue"
        ctx.lineWidth = 10
        ctx.fillStyle = "red";
        ctx.strokeRect(415,415,5,5)
    }

    if(vertice == 3){
        ctx.closePath();
        ctx.strokeStyle = "white";
        ctx.lineWidth = 10;
        ctx.stroke();
        ctx.fillStyle = "yellow";
        ctx.fill();

        ctx.strokeStyle = "white"
        ctx.lineWidth = 10
        ctx.strokeRect(280,415,5,5)  
    }

    ctx.strokeStyle = "red"
    ctx.lineWidth = 10
    ctx.strokeRect(280,280,5,5)

    ctx.strokeStyle = "green"
    ctx.lineWidth = 10
    ctx.strokeRect(415,280,5,5)

    ctx.strokeStyle = "blue"
    ctx.lineWidth = 10
    ctx.strokeRect(415,415,5,5)

    ctx.strokeStyle = "white"
    ctx.lineWidth = 10
    ctx.strokeRect(280,415,5,5)
 }

 function mainEntrance() {
     var canvasElement = document.querySelector("#theCanvas");
     var ctx = canvasElement.getContext("2d");
     var ms = canvasElement.getContext("2d");
     let vertice = 5
     w = canvasElement.width;
     h = canvasElement.height;
     document.addEventListener("keydown", (event) => {
        console.log(event.key);
        //AJUSTAR AS TECLAS DO TECLADO
        switch (event.key) {
          case "r":
            vertice = 5;
            break;
          case "g":
            vertice = 2;
            break;
          case "b":
            vertice = 1;
            break;
          case "w":
            vertice = 3;
            break;
        }
      });
     var runanimation = (() => {
        // teta-angulo
         var angle = 2.0;
         return () => {
             draw(ctx,angle,vertice);
             requestAnimationFrame(runanimation);
         };
     })();
     runanimation();
 }