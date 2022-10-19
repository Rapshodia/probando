function alerta(){
    alert('Your cart is empty');
}
function changeImg(e){
    
    document.getElementById('imageNow').src="./images/succulents-2.jpg";     
}

function eliminar(el){
    
    var parent = el.parentElement.parentElement;
    parent.remove();
}