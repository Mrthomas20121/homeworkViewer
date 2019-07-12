function get() {

	const fs = require('fs');
	
	let res = fs.statSync('homework.json').isFile();
	if(res && JSON.parse(fs.readFileSync('homework.json', 'utf8')).homework.length > 0) {
		let data = fs.readFileSync('homework.json', 'utf8')
		parsedData = JSON.parse(data).homework;
		for(const data of parsedData) {
			if(!data.done) {
				if(Date.now() > new Date(data.date)) {
					document.getElementById('homeworks').innerHTML += `<tr class="danger"><td>${data.classes}</td><td>${data.homework}</td><td>${new Date(data.date).toDateString()}</td><td><div class="pretty p-default p-primary"><input class="" type="checkbox" onclick="done('${data.homework}')"><div class="state p-danger-o"><label>Mark as done</label></div></div></td></tr>`
				}
				else document.getElementById('homeworks').innerHTML += `<tr class="success"><td>${data.classes}</td><td>${data.homework}</td><td>${new Date(data.date).toDateString()}</td><td><div class="pretty p-default p-primary"><input class="" type="checkbox" onclick="done('${data.homework}')"><div class="state p-danger-o"><label>Mark as done</label></div></div></td></tr>`
			}
		}
	}
	else {
		$('#table').hide();
		$('#notFound').show(1000);
	}
};
/**
 * set a homework to done
 * @param {String} homeworkName 
 */
const done = (homeworkName) => {
	const fs = require('fs');
	let data = fs.readFileSync('homework.json', 'utf8');
	let r = JSON.parse(data);
	let index = r.homework.findIndex((h) => h.homework == homeworkName)
	r.homework.splice(index)
	fs.writeFileSync('homework.json', JSON.stringify(r, null, 2), { encoding: 'utf8'})
	location.assign(`?homework=${homeworkName}`)
}

get();