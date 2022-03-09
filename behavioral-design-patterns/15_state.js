class Light {
    constructor(light) {
        this.light = light
    }
}

class RedLight extends Light {
    constructor() {
        super('red')
    }

    sign() {
        return 'СТОП!'
    }
}

class YellowLight extends Light {
    constructor() {
        super('yellow')
    }

    sign() {
        return 'ГОТОВЬСЯ!'
    }
}

class GreenLight extends Light {
    constructor() {
        super('green')
    }

    sign() {
        return 'ЕДЬ!'
    }
}

class TraficLight {
    constructor() {
        this.states = [
            new RedLight(),
            new YellowLight(),
            new GreenLight()


        ]
        this.current = this.states[0]
    }

        change() {
            const total = this.states.length
            let index = this.states.findIndex(light => light === this.current)

            if (index + 1 < total) {
                this.current = this.states[index + 1]
            } else {
                this.current = this.states[0]
            }
        }

        sign() {
            return this.current.sign()
        }
    
}

const traffic = new TraficLight()
console.log(traffic.sign())

traffic.change()
console.log(traffic.sign())

traffic.change()
console.log(traffic.sign())

traffic.change()
console.log(traffic.sign())

traffic.change()
console.log(traffic.sign())

traffic.change()
console.log(traffic.sign())