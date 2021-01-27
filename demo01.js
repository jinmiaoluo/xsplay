var glob = require("glob")

glob("test/**/*.js", function (error, files) {
  console.log(files)
  }
)
