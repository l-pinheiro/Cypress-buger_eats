var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {
    deliver: function () {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '9100000000',
            adress: {
                postacode: '66023170',
                street: 'Rua Cesário Alvim',
                number: '13',
                details: 'ap 30',
                district: 'Cidade Velha',
                city_state: 'Belém/PA'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }
        return data
    }
}