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

    Draw your icon to use in the Maze Game!<br/>

<div id="paint">
    <canvas id="myCanvas" width="75" height="75" style="border:1px solid"></canvas>

</div>


<form action="uploader.php" name="form1" method="POST" enctype="multipart/form-data">
    <input type="hidden" name="imageToUpload" id="imageToUpload">
    <input type="button" onclick="submitImage()" value="Submit image">
</form>


<script src="main.js"></script>
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
    //image gets modified and sent to upload.php to get saved to the server
    //form is submitted
    function submitImage(){
        var canvasImage = canvas.toDataURL('image/png');
        var dataImage = canvasImage.replace('data:image/png;base64,', '');
        document.getElementById('imageToUpload').value = dataImage;
        document.forms["form1"].submit();
    }
</script>
</body>
</html> 
