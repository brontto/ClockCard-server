const entryRouter = require('express').Router()
const Entry = require('../models/entry')


entryRouter.post('/', (req, res, next) => {
    const body = req.body

    const entry = new Entry({
        hours: body.hours,
        mins: body.mins,
        date: body.date,
    })

    entry.save()
        .then(saveEntry => {
            res.json(saveEntry)
        })
        .catch(error => next(error))
})

entryRouter.get('/', (req, res) => {
    Entry.find({}).then(entry => {
        res.json(entry)
    })
})


module.exports = entryRouter
