// lang path
const langPath = path.join(path.getAppPath(), 'lang');

// list of supports language
const listLanguage = window.api.readFile(`${langPath}\\list.jsonc`);
const config = window.api.readFile(`.\\config.jsonc`);
const params = new URLSearchParams(location.search);

if(params.has('homework')) {
  let removed_homework = $('#homework_removed');
  removed_homework.show(1000);
  if(config.lang == 'english')
  document.getElementById('app.alert.removedHomework').innerHTML = `Succefully removed "${params.get('homework')}"`
}

// loop though every language to see if one match
for (const language of listLanguage) {
  if(language.name == config.lang) {
    handleLanguage(`${langPath}\\${language.name}.jsonc`);
  }
}

/**
 * Language file
 * @param {string} file
 * @param {Object} language 
 */
 function handleLanguage(file) {
	// read the language file
	let languageFile = jsonc.read(file, encoding);
	
	// get page files
	let translation = languageFile.handled_by_script.view_homework_file;
	
	// get all keys
	let keys = Object.keys(translation);
	
	// url params ?=
	let params = new URLSearchParams(location.search);

	for (const key of keys) {
		document.getElementById(key).innerHTML = translation[key].replace('{Homework}', `'${params.get('homework')}'`)
	}
}