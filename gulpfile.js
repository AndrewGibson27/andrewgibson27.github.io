const gulp = require("gulp");
const svgSprite = require("gulp-svg-sprite");

gulp.task("icons", function() {
  return gulp
    .src("svg/**/*.svg")
    .pipe(
      svgSprite({
        mode: {
          symbol: {
            dest: ".",
            example: true
          }
        }
      })
    )
    .pipe(gulp.dest("_includes"));
});
