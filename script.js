// First Value Input

var input1 = $("#value-input1")
var list = ""

input1.keydown(function(e) {	
  if (e.keyCode == "13") {
    console.log(list);
    var valueToSave = input1.val();    
    storeValue("katyasVariable1", valueToSave);
  }
})



onNewValue("katyasVariable1", function(value) {
  list = value
  $("#value-output1").html(value)
})

addValue("katyasVariable1", input1) 


// Second Value Input

var input2 = $("#value-input2")

input2.keydown(function(e) {	
  if (e.keyCode == "13") {
    var valueToSave = input2.val();
    storeValue("katyasVariable2", valueToSave);
  }
})

onNewValue("katyasVariable2", function(value) {
  $("#value-output2").html(value)
})