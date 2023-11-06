const fs = require("fs");
const path =require('path')
const replaceThis = "ahmed";
const replaceWith = "basit";
const previwe = false;
const folder = __dirname

try {
  fs.readdir(folder, (_err, data) => {
    for (let index = 0; index < data.length; index++) {
      const item = data[index];
      let oldFile = path.join(folder, item)
      let newFile = path.join(folder,item.replaceAll(replaceThis, replaceWith));
      if (!previwe) {
        fs.rename(oldFile, newFile, () => {
          console.log("rename Complet");
        });
      } else {
        if ("data/ " + item !== newFile)
          console.log("data/ " + item + " rename will be " + newFile);
      }
    }
  });
} catch (err) {
  console.log(err);
}
