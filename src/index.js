const fs = require("fs/promises");
const myFileWriter = async (fileName, fileContent) => {
  // write code here
  await fs.writeFile(fileName, fileContent);
  console.log(`Created ${fileName}`);
  // dont chnage function name
};

const myFileReader = async (fileName) => {
  // write code here
  const data = await fs.readFile(fileName, "utf-8");
  console.log(data);

  // dont chnage function name
};

const myFileUpdater = async (fileName, fileContent) => {
  // write code here
  await fs.appendFile(fileName, fileContent);
  console.log(`Updated ${fileName} with data ${fileContent}`);
  // dont chnage function name
};

const myFileDeleter = async (fileName) => {
  // write code here
  await fs.unlink(fileName);
  console.log(`Deleted ${fileName}`);
  // dont chnage function name
};

module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter };
const fileName = "File.txt";
const fileContent = "Hello";
myFileWriter(fileName, fileContent);
// myFileReader(fileName);
// myFileUpdater(fileName, " World");
// myFileReader(fileName);
// myFileDeleter(fileName);
