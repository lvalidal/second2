const MyModel = require("../models/my.model")

const MyController = {
    getAll: async (req, res) => {
        try {
            const my = await MyModel.find({})
            res.status(200).send(my)

        } catch (err) {
            console.log("Error")
        }
    },
    getOne: async (req, res) => {
        try {
            const { id } = req.params
            const oneMy = await MyModel.findById(id)
            res.send(oneMy)
        } catch (err) {
            console.log("Error")
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params
            const deleteMy = await MyModel.findByIdAndDelete(id)
            res.send(deleteMy)
        } catch (err) {
            console.log("Error")
        }
    },
    post: async (req, res) => {
        try {
            const createMy = new MyModel(req.body)
            await createMy.save()
            res.send(createMy)

        } catch (err) {
            console.log("Error")
        }
    },
    edit:async(req,res)=>{
        try{
            const {id}=req.params
            await MyModel.findByIdAndUpdate(id,req.body)
            const updated=await MyModel.findById(id)
            res.send(updated)

        }catch(err){
            console.log("Error")
        }
    }



}


module.exports= MyController