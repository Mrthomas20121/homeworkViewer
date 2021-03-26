/**
 * Language file
 * @param {Object} language 
 */
function handleLanguage(file, encoding) {
	// read the language file
	let languageFile = jsonc.read(file, encoding);
	
	// get page files
	let translation = languageFile.handled_by_script.view_homework_file;
	
	// get all keys
	let keys = Object.keys(translation);
	
	// url params ?=
	let params = new URLSearchParams(location.search);

	for (const key of keys) {
		if(translation[key].includes('{Homework}')) {
			document.getElementById('app.alert.removedHomework').innerHTML = translation[key].replace('{Homework}', `'${params.get('homework')}'`)
		}
		else document.getElementById(key).innerHTML = translation[key]
	}
}