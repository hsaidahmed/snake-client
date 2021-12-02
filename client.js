
const { IP, PORT } = require("./constants");
const net = require("net");
const connect = function() {
  const conn = net.createConnection({
    host: IP,  // IP address here,
    port: PORT  // PORT number here,

  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("data", (data) => {
    // code that does something when the connection is first established
    console.log('incoming message from server',data);
    
  });
  

  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log("Successfully connected to game server!");
    conn.write("Name: BIG");
    conn.write("Say: hello");
    
  });

  return conn;
};
module.exports = {connect};