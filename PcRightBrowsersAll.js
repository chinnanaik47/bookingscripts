(function () {
  console.log(
    "Stock Yard script loaded successfully from GitHub and running..."
  );
  document.getElementsByClassName("Dropdown")[0].value = 27;
  PopulateGrid(27);
  console.log("Dropdown value set to 27 and grid populated.");

  var intId = setInterval(function () {
    for (var i = 0; i < 30; i++) {
      var data =
        document.getElementsByClassName("GridviewScrollItem")[i].cells[2]
          .innerHTML;
      if (data.indexOf("Beglur/2024/1") != -1) {
        $("input[type='radio']")[i].click();
        clearInterval(intId);
        break;
      }
    }
  }, 0);
})();
