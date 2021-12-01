const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host:'165.227.47.243',  // IP address here,
    port: '50541'  // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("data", (data) => {
    // code that does something when the connection is first established
    console.log('incoming message from server',data);
  });

  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log("connected");
  });

  return conn;
};

console.log("Connecting ...");
connect();