(function() {
document.getElementsByClassName('Dropdown')[0].value = 27;
  PopulateGrid(27);

var intId = setInterval(function(){    
for(var i=0;i<30;i++){
    var data = document.getElementsByClassName("GridviewScrollItem")[i].cells[2].innerHTML;
    if( data.indexOf("Bommapur/2024/4") != -1) {        
        $("input[type='radio']")[i].click();
        clearInterval(intId);
        break;
    }

}},1100);
})();
