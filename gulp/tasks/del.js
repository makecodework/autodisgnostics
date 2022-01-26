import del from "del"

export const reset = async() => {
  return del.sync([app.path.build.css])
}
