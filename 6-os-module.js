const os = require("os")

const infoAboutUser = os.userInfo()
console.log(infoAboutUser)

console.log(os.uptime())

const infoAboutOs = {
    name: os.type(),
    platform: os.platform(),
    countBytes: os.arch(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
    coresCount: os.cpus().length
}

console.log(infoAboutOs)