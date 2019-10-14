const { literal, where } = require('sequelize')
const Point = require('../models/Point')

class PointController{
  async store(req, res){
    const point = await Point.create(req.body)
    return res.json(point)
  } 
  async index(req, res){
    const { latitude, longitude } = req.query
    
    const heversine = `codigo naval para calcular a distância: procurar...`
    const points = Point.findAll({
      where: where(literal(heversine), '<=', 10)
    })

    return res.json(points)
  }

}

module.exports = new PointController()