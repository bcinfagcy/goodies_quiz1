const express = require('express')
const app = express()
const PORT = 8000

const voltron_lions = {
    'black lion' :{
        'name' : 'Stud or something',
        'color' : 'black',
        'strength' : 'leadership'        
    },
    'blue lion' : {
        'name' : 'Lance',
        'color' : 'blue',
        'strength' : ''        
    },
    'red lion' : {
        'name' : 'the Renegade Loose Cannon',
        'color' : 'red',
        'strength' : 'rogue'
    },
    'yellow lion' : {
        'name' : 'Beef head',
        'color' : 'yellow',
        'strength' : 'strenght, heart'
    },
    'pink lion' : {
        'name' : 'the Princess',
        'color' : 'pink',
        'strength' : 'political influence'
    },
    'green lion' : {
        'name':'Pidge',
        'color' :  'green',
        'strength' : 'agility, scrappy'
    },
    'unknown' : {
        'name':'unknown',
        'color' :  'unknown',
        'strength' : 'unknown'
    }
    
}
app.get('/', (request, response) => {


    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:lion', (request, response) => {
    // console.log(request.params.lion)
    // let results = voltron_lions
    let results = voltron_lions[request.params.lion]
    let ans = JSON.stringify(results)
    console.log(ans)
    response.json(ans)
})


app.listen(process.env.PORT || PORT, () =>{
    console.log(`The server is now running on ${PORT} or maybe ${process.env.PORT} ! Betta Go Catch It!`)
})