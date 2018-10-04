

<html>
<head>
    <style>
        body {
            margin: 0px;
            padding: 0px;
        }
    </style>
</head>


<body>
<div id="paint">
    <canvas id="myCanvas" width="75" height="75" style="border:1px solid"></canvas>

</div>
<a href="#" class="button" id="btn-download">Download</a>



<script>


    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');

    var painting = document.getElementById('paint');
    var paint_style = getComputedStyle(painting);


    var mouse = {x: 0, y: 0};

    canvas.addEventListener('mousemove', function(e) {
        mouse.x = e.pageX - this.offsetLeft;
        mouse.y = e.pageY - this.offsetTop;
    }, false);

    ctx.lineWidth = 2;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#00CC99';

    canvas.addEventListener('mousedown', function(e) {
        ctx.beginPath();
        ctx.moveTo(mouse.x, mouse.y);

        canvas.addEventListener('mousemove', onPaint, false);
    }, false);

    canvas.addEventListener('mouseup', function() {
        canvas.removeEventListener('mousemove', onPaint, false);
    }, false);

    var onPaint = function() {
        ctx.lineTo(mouse.x, mouse.y);
        ctx.stroke();
    };

    var button = document.getElementById('btn-download');
    button.addEventListener('click', function (e) {
        var dataURL = canvas.toDataURL('images/png');
        window.location.href = "upload.php?name=" + dataURL;



    });



</script>
</body>
</html>            