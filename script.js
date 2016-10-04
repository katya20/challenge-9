var input = $("#value-input")

input.keydwn(function(e) {	
  if (e.keyCode == "13") {
    var valueToSave = input.val();
    storeValue("katyasVariable", valueeeee);
  }
})

onNewValue("katyasVariable", function(value) {
  $("#value-output").html(value)
})