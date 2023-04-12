const { DESPACHADOR_PASS } = require('../config/config')
const config = require('../config/config')

const moderators = [
  {
    username: "Pepe",
    firstName: "Coryndon",
    lastName: "Osment",
    email: "pepehuerta@gmail.com",
    phoneNumber: "301-522-8145",
    name: "Pepe Huerta",
    role: "supervisor",
    password: config.SUPERVISOR_PASS
  }, {
    username: "Deck897",
    firstName: "Dockreay",
    lastName: "Frankham",
    email: "afrankham1@jigsy.com",
    phoneNumber: "180-968-3447",
    name: "Deck",
    role: "librador",
    password: config.LIBRADOR_PASS
  }, {
    username: "Gar9879",
    firstName: "Gaskill",
    lastName: "Sturch",
    email: "asturch2@163.com",
    phoneNumber: "992-814-9822",
    name: "Gar",
    role: "vendedor",
    password: config.VENDEDOR_PASS
  }, {
    username: "Bondie897",
    firstName: "Clifton",
    lastName: "Pyburn",
    email: "ppyburn3@webeden.co.uk",
    phoneNumber: "884-279-1903",
    name: "Bondie",
    role: "despachador",
    password: DESPACHADOR_PASS
  }, {
    username: "Deny456",
    firstName: "Harhoff",
    lastName: "Hartles",
    email: "zhartles4@blogs.com",
    phoneNumber: "385-258-5127",
    name: "Deny",
    role: "contador",
    password: config.CONTADOR_PASS
  }, {
    username: "Celle65654",
    firstName: "Harwin",
    lastName: "Conklin",
    email: "cconklin5@spiegel.de",
    phoneNumber: "207-754-4727",
    name: "Celle",
    role: "receptor",
    password: config.RECEPTOR_PASS
  }, {
    username: "Jeniffer0987",
    firstName: "Giblin",
    lastName: "McKeeman",
    email: "mmckeeman6@twitter.com",
    phoneNumber: "507-366-4143",
    name: "Jeniffer",
    role: "cajero",
    password: config.CAJERO_PASS
  }
]

module.exports = moderators