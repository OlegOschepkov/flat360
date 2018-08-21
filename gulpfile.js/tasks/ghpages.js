const gulp = require("gulp");

const ghpages = require("gulp-gh-pages");

const options = {
  remoteUrl: "https://olegoschepkov.github.io/",
  branch: "master"
};

module.exports = () => gulp.src("dist/**/*").pipe(ghpages(options));
