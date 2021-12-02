const {shortcuts} = require("./constants");
let conn = 0;
const setupInput = function(connection) {
  conn = connection;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.on("data", handleUserInput);
  
  stdin.resume();
  return stdin;
};

const handleUserInput = function(key) {
  // process.stdout.write('.');
  if (key === '\u0003') {
    process.exit();
  }
  // if (key === 'w') {
  //   conn.write("Move: up");
  // }
  if (key in shortcuts) {
    conn.write(shortcuts[key])
    return ;
  }
  // if (key === 's') {
  //   conn.write("Move: down");
  // }
  // if (key === 'a') {
  //   conn.write("Move: left");
  // }
  // if (key === 'd') {
  //   conn.write("Move: right");
  // }


  console.log("Say this is wrong");
 
};
module.exports = {setupInput, handleUserInput};