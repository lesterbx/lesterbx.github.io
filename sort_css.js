fs = require('fs');
fs.readFile(process.argv[2], 'utf8', function (err,data){
	if(err){
		return console.log(err);
	}
	var block = [];
	var getline = false;
	var 
	data.split('\n').forEach(function(line, index, array){
		if(index < array.length-1){

		}
		block.push()
	});
});