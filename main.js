var canva=new fabric.Canvas("canva")
var x=450
var y=225 
var ancho=30
var alto=30
var steve=""
var bloques=""
function cargar_steve(){
    fabric.Image.fromURL("mini-steve-16771570.jpg",function(Img){
        steve=Img
        steve.scaleToWidth(50)
        steve.scaleToHeight(60)
        steve.set({top:y,left:x})
        canva.add(steve)
    })
}
function cargar_bloque(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        bloques=Img
        bloques.scaleToWidth(ancho)
        bloques.scaleToHeight(alto)
        bloques.set({top:y,left:x})
        canva.add(bloques)
    })
}
window.addEventListener("keydown",botones)
function botones(e){
    boton=e.keyCode
    console.log(boton)
    if(boton=="87"){
      arriba()
    }
    if(boton=="83"){
        abajo()
    }
    if(boton=="68"){
        derecha()
    }
    if(boton=="65"){
        izquierda()
    }
    if(boton=="81"){
        cargar_bloque("blanco.jpg")
    }
    if(boton=="69"){
        cargar_bloque("cofre.png")
    }
    if(boton=="70"){
        cargar_bloque("ierro.png")
    }
    if(boton=="71"){
        cargar_bloque("ladrillo.jpeg")
    }
    if(boton=="82"){
        cargar_bloque("mesa de crafteo.png")
    }
    if(boton=="72"){
        cargar_bloque("minecraft_cobble.jpg")
    }
    if(boton=="79"){
        cargar_bloque("Minecraft-Obsidian-Block.jpg")
    }
    if(boton=="67"){
        cargar_bloque("minneral diamante.jpg")
    }
    if(boton=="84"){
        cargar_bloque("orno.jpg")
    }
    if(boton=="90"){
        cargar_bloque("robe.jpg")
    }
    if(boton=="85"){
        cargar_bloque("tierra.jpeg")
    }
    if(boton=="81" && e.shiftKey==true){
        ancho=ancho+10
        alto=alto+10
        document.getElementById("span").innerHTML=ancho
        document.getElementById("span2").innerHTML=alto
    }
    if(boton=="69" && e.shiftKey==true){
        ancho=ancho-10
        alto=alto-10
        document.getElementById("span").innerHTML=ancho
        document.getElementById("span2").innerHTML=alto
    }
    }
function arriba(){
 if(y>=10)
 {
    y=y-alto
    canva.remove(steve)
    cargar_steve()
 }   
}
function abajo(){
    if(y<=430)
    {
        y=y+alto
        canva.remove(steve)
        cargar_steve()
    }
}
function izquierda(){
    if(x>=20)
    {
x=x-ancho
canva.remove(steve)
cargar_steve()
    }
}
function derecha(){
    if(x<=980)
    {
        x=x+ancho
        canva.remove(steve)
        cargar_steve()
    }
}
