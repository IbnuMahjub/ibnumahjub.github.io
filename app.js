document.addEventListener("mousemove", function(e){
    var body = document.querySelector('body');
    var heart = document.createElement("span");
    var x = e.offsetX;
    var y = e.offsetY;
    heart.style.left = x+'px';
    heart.style.top = y+'px';
    var size = Math.random() * 100;
    heart.style.width = 20 + size+'px';
    heart.style.height = 20 + size+'px';
    body.appendChild(heart);

setTimeout(function(){
  heart.remove();
},2000)
})