var Metalsmith = require('metalsmith');
var metadata = require('metalsmith-metadata');
var templates = require('metalsmith-templates');
var permalinks = require('metalsmith-permalinks');
var highlight = require('highlight.js');
var markdown = require('metalsmith-markdown');
var ignore = require('metalsmith-ignore');
var collections = require('metalsmith-collections');
// var htmlMinifier = require("metalsmith-html-minifier");
var dateFilter = require('nunjucks-date-filter');
var cons = require('consolidate');
var join = require('path').join;
var config = require('./config.js');
var http = require('http');
var util = require('util');
var build;
var env;

cons.requires.nunjucks = require('nunjucks');
env = cons.requires.nunjucks.configure('./docs/templates', {watch: false, dev: true, noCache: true});
env.loaders[0].noCache = true;

dateFilter.setDefaultFormat('MMMM D, YYYY');
env.addFilter('date', dateFilter);


env.addFilter('json', function(data){
  return util.inspect(data);
});

env.addFilter('getContext', function () {
  return util.inspect(this.ctx);
});

function livereload(){
  //  this is a hack to force live reload
  http.get("http://localhost:35729/changed?files=true", function(res) {})
    .on('error', function(e){});
}

// TODO - reorganize these tasks
module.exports = function (production) {
  var configData;

  if(production){
    configData = config.production;
  } else {
    configData = config.development;
  }

  return Metalsmith(__dirname)
    .clean(false)
    .source('./docs/content')
    .metadata(configData)
    .use(metadata({
      "data": "data/data.json",
    }))
    .use(templates({
      engine: 'nunjucks',
      inPlace: true,
      pattern: ['**/*.md'],
      directory: './docs/templates'
    }))
    .use(markdown({
      highlight: function (code) {
        return highlight.highlightAuto(code).value;
      }
    }))
    // use collections for pages
    .use(collections({
      components: {
        pattern: 'components/**/*',
        sortBy: 'priority',
        refer: false,
        metadata: {
          name: 'UI Components',
          link: 'components'
        }
      },
      css: {
        pattern: 'css/**/*',
        sortBy: 'priority',
        refer: false,
        metadata: {
          name: 'Base CSS',
          link: 'css'
        }
      }
    }))
    .use(ignore([
      'components/**/*.html',
      'css/**/*.html'
    ]))
    // end collection stuff
    .use(permalinks({
        pattern: ':title',
        relative: false
    }))
    .use(templates({
      engine: 'nunjucks',
      directory: './docs/templates'
    }))
    // .use(htmlMinifier())
    .destination('build/')
    .build(function(err,files){
      if (err){ console.log(err); }
      livereload();
    });
};
