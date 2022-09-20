var ActiveX = module.exports = require("./prebuilds/win32-x64/electron.abi106.node");

global.ActiveXObject = function(id, opt) {
    return new ActiveX.Object(id, opt);
};
