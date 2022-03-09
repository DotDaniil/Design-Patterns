/// old variant
function Server_1(name, ip) {
 this.name = name
 this.ip = ip
}

Server_1.prototype.getUrl = function() {
    return `https://${this.ip}:80`
}

const aws_1 = new Server_1('ASW German', '82.21.21.32')
console.log(aws_1.getUrl())

/// new variant
class Server_2 {
    constructor(name, ip) {
        this.name = name
        this.ip = ip
    }

    getUrl() {
        return `https://${this.ip}:80`
    }
}

const aws_2 = new Server_2('ASW German', '82.21.21.32')
console.log(aws_2.getUrl())