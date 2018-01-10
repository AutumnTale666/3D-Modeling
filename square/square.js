    function rotate(){
        var x = document.getElementById("rotatex").value;
        var y = document.getElementById("rotatey").value;
        var z = document.getElementById("rotatez").value;
        document.getElementById('cube').style.webkitTransform = "rotateX("+x+"deg) rotateY("+y+"deg) rotateZ("+z+"deg)";

        document.getElementById('degx-span').innerText = x;
        document.getElementById('degy-span').innerText = y;
        document.getElementById('degz-span').innerText = z;
    }
 