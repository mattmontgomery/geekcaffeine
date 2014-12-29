var gulp = require( 'gulp' );
var shell = require( 'gulp-shell' );
var sass = require('gulp-sass');
gulp.task('build', function() {
    gulp.src('./scss/app.scss')
        .pipe(sass({
            includePaths: ['./scss', './bower_components/**/css'],
            errLogToConsole: true
        }))
        .pipe(gulp.dest('./public/style'));
});
gulp.task('server', shell.task([
    'php -S localhost:8020'
    ],{
        cwd: './public'
    }
));
