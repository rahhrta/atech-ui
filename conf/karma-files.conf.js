const conf = require('./gulp.conf');
const wiredep = require('wiredep');

module.exports = function () {
  const wiredepOptions = Object.assign({}, conf.wiredep, {
    dependencies: true,
    devDependencies: true
  });

  const patterns = wiredep(wiredepOptions).js.concat([
    conf.path.tmp('index.js'),
    conf.path.tmp('routes.js'),
    conf.path.tmp('app/models/**/*.js'),
    conf.path.tmp('app/controllers/**/*.js'),
    conf.path.src('**/*.html'),
    conf.path.tmp('app/tests/*spec.js'),
  ]);

  const files = patterns.map(pattern => ({pattern}));
  files.push({
    pattern: conf.path.src('assets/**/*'),
    included: false,
    served: true,
    watched: false
  });
  return files;
};
