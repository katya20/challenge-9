var input = $("#value-input1")

input.keydown(function(e) {	
  if (e.keyCode == "13") {
    var valueToSave = input.val();
    storeValue("katyasVariable", valueToSave);
  }
})

onNewValue("katyasVariable", function(value) {
  $("#value-output").html(value)
})