const {classlist} = require("../models");

class ClassController {
    static async addClass(req, res) {
        try {
            const {code, name, price, description} = req.body;

            let result = await classlist.create({
                code, name, price, description
            })
            res.json(result);
        } catch (err) {
            res.json(err)
        }
    }

    static async getClass(req, res){
        try{
            let result = await classlist.findAll()
            res.json(result)
        }catch (err){
            res.json(err)
        }
    }

    static async viewClass(req, res){
        try {
            let id = Number(req.params.id)
            let result = await classlist.findOne({where: {id}})
            res.json(result)
        } catch (err) {
            res.json(err)
        }
    }
}

module.exports = ClassController