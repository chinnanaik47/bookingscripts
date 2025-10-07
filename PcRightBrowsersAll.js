(function() {
document.getElementsByClassName('Dropdown')[0].value = 31;
  PopulateGrid(31);

var intId = setInterval(function(){    
for(var i=0;i<30;i++){
    var data = document.getElementsByClassName("GridviewScrollItem")[i].cells[2].innerHTML;
    if( data.indexOf("MAHABUBABAD SS FINE") != -1) {        
        $("input[type='radio']")[i].click();
        clearInterval(intId);
        break;
    }

}},0);
})();
