const jsonc = require('./lib/jsonc-reader');
const path = require('path');

// encoding used for all jsonc.read
const encoding = 'utf8';

// path to various folder within the app
const appPath = __dirname;
const langPath = path.join(appPath, 'lang');

// list of supports language
const listLanguage = jsonc.read(`${langPath}\\list.jsonc`, encoding);
const config = jsonc.read(`.\\config.jsonc`, encoding);
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
    handleLanguage(`${langPath}\\${language.name}.jsonc`, encoding);
  }
}