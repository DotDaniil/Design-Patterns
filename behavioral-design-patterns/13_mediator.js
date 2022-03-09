class User {
    constructor(name) {
        this.name = name
        this.room = null
    }

    send(message, to) {
        this.room.send(message, this, to)
    }

    receive(message, from) {
        const time = new Date()
        console.log(`[${time}] ${from.name} => ${this.name}: ${message}`)
    }
}

class ChatRoom {
    constructor() {
        this.users = {}
    }

    register(user) {
        this.users[user.name] = user
        user.room = this
    }

    send(message, from, to) {
        if (to) {
            to.receive(message, from)
        } else {
            Object.keys(this.users).forEach(key => {
                if (this.users[key] !== from) {
                    this.users[key].receive(message, from)
                }
            })
        }
    }
}

const daniil = new User('Daniil')
const varvara = new User('Varvara')
const eugene = new User('Eugene')

const room = new ChatRoom()

room.register(daniil)
room.register(varvara)
room.register(eugene)

daniil.send('Привет, как дела?', varvara)
varvara.send('Все хорошо, а ты как?', daniil)
eugene.send('Всем привет!')