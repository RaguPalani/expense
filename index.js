const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = process.env.port || 3000

const Expenses = require('./expense')

mongoose.connect('mongodb+srv://ragup23mca:20-Mar-02@cluster0.kazarjf.mongodb.net/?retryWrites=true&w=majority',{
    useUnifiedTopology: true
})

// app.get('/',(req, res) =>{
//     res.send('<h4>Vanakkam da Mapla</h4>')
// })

app.get('/expenses',async(req, res) =>{
    const result = await Expenses.find()
    res.send(result)
})

// id selection

// app.get('/expenses/:id', async(req, res)=>{
//     const id = req.params.id
//     const result = await Expenses.findById(id)
//     try{
//        if(result){
//           res.send(result)
//     }
//     else{
//         res.send('No express with that id available')
//     }
//    }
//    catch(err){
//     res.send(err)
//    }
    
// })

// deletion 

// app.delete('/expenses/:id', async(req, res)=>{
//     const id = req.params.id
//     const result = await Expenses.findByIdAndDelete(id)
//     try{
//        if(result){
//           res.send(result)
//     }
//     else{
//         res.send('No express with that id available')
//     }
//    }
//    catch(err){
//     res.send(err)
//    }
    
// })

// const bodyParser = require('body-parser')
// app.use(express.json())
// app.post('/expense',async(req, res) => {
//     try{
//         console.log(req.body)
//         const newExpense = req.body
//         await Expenses.create(newExpense)
//         res.send('Created')
//     }catch{
//         console.log('Cannot Inserted')
//     }
// })

// app.put('/expense/:id', async(req, res)=>{
//     try{
//     const id = req.params.id
//     const updateObject = req.body
//     const updatedObject = await Expenses.findById(id,{$set: updateObject},{
//         new: true
//     })
//     res.send(updatedObject)
// }catch
//     {
//         res.send('Cannot Updated')
//     }
// })



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
