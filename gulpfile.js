var gulp = require("gulp");
var browserSync = require('browser-sync').create();

const sass = require('gulp-sass');
const jade = require('gulp-jade');
const copy = require('gulp-copy');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');

var src = "./src/";
var sass_src = src+"sass/"
var html_src = src+"html/"
var libs_src = src+"libs/"
var js_src = src+"app/"
var img_src = src+"images/"

var dist = "./dist/";
var css_dist = dist+"css/";
var js_dist = dist+"js/";
var app_dist = dist+"app/";
var img_dist = dist+"images/";

gulp.task('watch', ['browserSync'] ,function(){
  gulp.watch(sass_src+"main.sass", ['sass']);
  gulp.watch(html_src+"**/*.jade", ['jade']);
  gulp.watch(js_src+'**/*.js',["app"])
});

gulp.task('sass', function(){
  return gulp.src(sass_src+"main.sass")
    .pipe(sass()) // Using gulp-sass
    .pipe(autoprefixer({
      browsers: ["last 2 versions","> 10%","IE 8"]
    }))
    .pipe(gulp.dest(css_dist))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('jade', function(){
  return gulp.src(html_src+"**/*.jade")
    .pipe(jade({pretty:true})) // Using gulp-jade
    .pipe(gulp.dest(dist))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('app', function() {
  return gulp.src(js_src+'**/*.js')
    .pipe(concat('app.js'))
    .pipe(gulp.dest(app_dist))
    .pipe(browserSync.reload({
      stream: true
    }))
});


gulp.task('buildAll', ["sass","jade","app","copyLibs","copyImages"]);

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: dist
    },
  })
})

gulp.task('copyImages',, function(){
  return gulp.src([img_src])
    .pipe(gulp.dest(img_dist))
});

gulp.task('copyLibs',["copyBootstrap","copyAnimateCSS"], function(){
  return gulp.src([
      "./node_modules/angular/angular.min.js",
      "./node_modules/angular-animate/angular-animate.min.js",
      "./node_modules/angular-route/angular-route.min.js",
      "./node_modules/jquery/dist/jquery.min.js",
      "./node_modules/lazy.js/lazy.min.js"
    ])
    .pipe(gulp.dest(js_dist))
});

gulp.task('copyBootstrap',
  ["copyBootstrapCSS",
  "copyBootstrapJS",
  "copyBootstrapFonts"]
);

gulp.task('copyBootstrapCSS', function(){
  return gulp.src([
      "./node_modules/bootstrap/dist/css/bootstrap.min.css"
    ])
    .pipe(gulp.dest(css_dist))
});

gulp.task('copyBootstrapJS', function(){
  return gulp.src([
      "./node_modules/bootstrap/dist/js/bootstrap.min.js"
    ])
    .pipe(gulp.dest(css_dist))
});

gulp.task('copyBootstrapFonts', function(){
  return gulp.src([
      "./node_modules/bootstrap/dist/fonts/*"
    ])
    .pipe(gulp.dest(dist+"fonts/"))
});

gulp.task('copyAnimateCSS', function(){
  return gulp.src([
      "./node_modules/animate.css/animate.min.css"
    ])
    .pipe(gulp.dest(css_dist))
});

gulp.task('copyNVD3',["copyNVD3js","copyNVD3css"]);

gulp.task('copyNVD3js', function(){
  return gulp.src([
      "./node_modules/d3/d3.min.js",
      "./node_modules/nvd3/build/nv.d3.min.js",
      "./node_modules/angular-nvd3/dist/angular-nvd3.min.js"
    ])
    .pipe(concat('angular-nvd3.min.js'))
    .pipe(gulp.dest(js_dist))
});

gulp.task('copyNVD3css', function(){
  return gulp.src([
      "./node_modules/nvd3/build/nv.d3.min.css"
    ])
    .pipe(concat('nvd3.min.css'))
    .pipe(gulp.dest(css_dist))
});
