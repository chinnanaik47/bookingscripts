(function() {
document.getElementsByClassName('Dropdown')[0].value = 20;
  PopulateGrid(20);

var intId = setInterval(function(){    
for(var i=0;i<30;i++){
    var data = document.getElementsByClassName("GridviewScrollItem")[i].cells[2].innerHTML;
    if( data.indexOf("Challur") != -1) {        
        $("input[type='radio']")[i].click();
        clearInterval(intId);
        break;
    }

}},1100);
})();
