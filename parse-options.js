module.exports = function (options) {
  if (typeof options === 'string') {
    const optionArgs = options.split(" ");
    options = {};
    for (let i = 0; i < optionArgs.length; i++) {
      const argSplit = optionArgs[i].split("="),
        argName = argSplit[0].replace(/^-+/, "");
      switch (argName) {
        case "prefix":
          options.prefix = argSplit[1];
          break;
        default:
          throw new Error("unrecognised npm-import option '" + argSplit[0] + "'");
      }
    }
  }
  return options;
};
