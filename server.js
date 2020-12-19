const express = require('express')
const app = express()

app.use(express.json())

app.get('/',(req,res) => {
  res.send('Hello World')
})

app.get('/hello',(req,res) => {
  res.send(`Hello, ${req.query.name === undefined ? 'Guest' : req.query.name }`)
})

app.put('/travellers',(req,res) => {
  let data = {};
  if (req.body && req.body.surname) {
    switch (req.body.surname.toLowerCase()) {
      case 'polo':
        data = {
          name: 'Marco',
          surname: 'Polo',
          dates: '1254 - 1324'
        };
        break;
      case 'colombo':
        data = {
          name: 'Cristoforo',
          surname: 'Colombo',
          dates: '1451 - 1506'
        };
        break;
      case 'vespucci':
        data = {
          name: 'Amerigo',
          surname: 'Vespucci',
          dates: '1454 - 1512'
        };
        break;
      case 'da verrazzano':
      case 'verrazzano':
        data = {
          name: 'Giovanni',
          surname: 'da Verrazzano',
          dates: '1485 - 1528'
        };
        break;
      default:
        data = {
          name: 'unknown'
        }
    }
  }
  res.status(200).json(data);
})

app.listen(5000, () => {
  console.log('listening to port 5000')
})

module.exports = app