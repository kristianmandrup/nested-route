var gulp      = require("gulp");
var webpack   = require('webpack');
var gwebpack  = require('gulp-webpack');

var config = {
  context: __dirname + "/src",
  entry: "./index",
  output: {
    path: __dirname + "/dist",
    filename: "nested-route.js"
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
};

gulp.task("webpack", function() {
  return gulp.src('src/nested-route.js')
    .pipe(gwebpack(config))
    .pipe(gulp.dest('dist/'));
});