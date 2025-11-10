(function() {
document.getElementsByClassName('Dropdown')[0].value = 23;
  PopulateGrid(23);

var intId = setInterval(function(){    
for(var i=0;i<30;i++){
    var data = document.getElementsByClassName("GridviewScrollItem")[i].cells[2].innerHTML;
    if( data.indexOf("Itukalapadu") != -1) {        
        $("input[type='radio']")[i].click();
        clearInterval(intId);
        break;
    }

}},1010);
})();
