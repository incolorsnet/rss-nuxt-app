const axios = require('axios')
const consola = require('consola')
const express = require('express')
const { Nuxt, Builder } = require('nuxt')
const router = express.Router()
const config = require('../nuxt.config.js')
const nuxt = new Nuxt(config)

router.get('/note', (req, res, next) => {
  (async () => {
    const api = axios.create()

    return axios.all([
      api.get('https://note.nokura.me/rss'),
      api.get('https://note.mu/in_colors_net/rss')
    ]).then(axios.spread((nokura, tori) => {
      const parseString = require('xml2js').parseString
      const xml = [ nokura.data, tori.data ]
      let obj = [{
        title: 'のくらさんの note',
        url: 'https://note.nokura.me/',
        items: []
      },
      {
        title: 'とりももの note',
        url: 'https://note.mu/in_colors_net',
        items: []
      }]

      for (let i = 0; i < xml.length; i++) {
        parseString(xml[i], (message, xmlres) => {
          obj[i].items = xmlres.rss.channel[0].item
        })
      }
      const param = obj
      res.header('Content-Type', 'application/json; charset=utf-8')
      res.send(param)
      return
    }))
  })()
})

module.exports = router
