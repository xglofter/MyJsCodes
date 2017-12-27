// require("!style-loader!css-loader!./style.css");

// 我们可以根据模块类型（扩展名）来自动绑定需要的 loader
// 执行中加参数：webpack runoob1.js bundle.js --module-bind 'css=style-loader!css-loader'
require("./style.css");

document.write(require("./runoob2.js"));
