const express = require('express')
const router = express.Router()
let {people} = require('../data')

const {getPeople,
    createPerson,
    updatePerson,
    deletePerson
} = require('../controllers/people')

router.get('/', getPeople).post(createPerson)
router.put('/:id', updatePerson).delete(deletePerson)

module.exports = router