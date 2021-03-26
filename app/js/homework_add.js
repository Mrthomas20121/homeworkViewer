
var crea = function() {
  var fs = require('fs');
  var matiere = document.getElementById('mat');
  var date = document.getElementById('date');
  var devoir = document.getElementById('devoir');
	var err = new Error('&');
	if(devoir.value=="") {
    err = new Error('Devoir cannot be empty!');
    alert(err.message);
    throw err;
  }
  else if(date.value=="") {
    err = new Error('Date cannot be empty!');
    alert(err.message);
    throw err;
  }
    fs.stat('homework.json', function(err) {
      if(err) {
        // file does not exist
        var obj = {
          homework: []
        }
        obj.homework.push({
			    homework:devoir.value,
            classes:matiere.value, 
            date:date.value,
            done:false
        })
        var json_obj = JSON.stringify(obj, null, 2);

        fs.writeFile('homework.json', json_obj, 'utf8', function(err) {
          if(err) throw err;
        });

      }
      else {
        fs.readFile('homework.json', 'utf8', function(err, data) {
          if(err) throw err;
          else {
            json = JSON.parse(data)
            // add data to the file
            json.homework.push({
              homework:devoir.value,
              classes:matiere.value, 
              date:date.value,
              done:false
              })
            json = JSON.stringify(json, null, 2);
            // write on the file again
            fs.writeFile('homework.json', json, 'utf8', function(err) {
            if(err) throw err;
            location="index.html";
          });
          }
        });
      }
    })
  }