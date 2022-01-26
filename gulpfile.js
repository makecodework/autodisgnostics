import gulp from "gulp"
import { path } from "./gulp/config/path.js"

/**
 * Global object
 * @type {Object}
 */
global.site = {
  gulp,path
}

/**
 * Import tasks
 */
import { scss } from "./gulp/tasks/sass.js"
/**
 * Watch for all files
 * @return {[type]} [description]
 */
let watcher = () => {
  gulp.watch(path.watch.sass, scss);
  // gulp.watch(path.watch.js, js);
}
