const os = require("os");



function getSystemInfo() {
  console.log("===== System Information =====");

 
  console.log("System Architecture:", os.arch());

  
  console.log("CPU Cores:", os.cpus().length);

  
  console.log("CPU Model:", os.cpus()[0].model);
  console.log("CPU Speed:", os.cpus()[0].speed + " MHz");

  
  console.log("Total Memory:", (os.totalmem() / (1024 ** 3)).toFixed(2), "GB");
  console.log("Free Memory:", (os.freemem() / (1024 ** 3)).toFixed(2), "GB");

  
  const heapUsed = process.memoryUsage().heapUsed / (1024 ** 2);
  const heapTotal = process.memoryUsage().heapTotal / (1024 ** 2);
  console.log("Heap Memory Used:", heapUsed.toFixed(2), "MB");
  console.log("Heap Memory Total:", heapTotal.toFixed(2), "MB");

  
  console.log("Hostname:", os.hostname());
  console.log("OS Type:", os.type());

  console.log("==============================");
}


module.exports = { getSystemInfo };


