class Complaints {
    constructor() {
        this.complaints = []
    }

    reply(complaint) {}

    add(complaint) {
        this.complaints.push(complaint)
        return this.reply(complaint)
    }
}

class ProductComplaints extends Complaints {
    reply({id, costumer, details}) {
        return `Product: ${id}: ${costumer} (${details})`
    }
}

class ServiceComplaints extends Complaints {
    reply({id, costumer, details}) {
        return `Service: ${id}: ${costumer} (${details})`
    }
}

class ComplaintRegistry {
    register(costumer, type, details) {
        const id = Date.now()
        let complaint

        type === 'service' ? complaint = new ServiceComplaints() : complaint = new ProductComplaints()

        return complaint.add({id, costumer, details})
    }
}

const registry = new ComplaintRegistry()

console.log(registry.register('Daniil', 'service', 'недоступен'))
console.log(registry.register('Varvara', 'product', 'не работает что-то'))
console.log(new ServiceComplaints)