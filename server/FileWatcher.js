const fs = require('fs')

fs.readFile('./server/#HackaIran.txt', 'utf-8' , (err, data) => {
    if (err) throw err;
    const rawData = data.substr(1,data.length);
    const users = rawData.split('\n');
    let userArr = [];
    for(let item of users){
        const data = item.trim().split('\t');
        userArr.push( { id: data[0], name: data[1], winner: false } )
    }
    const winnerId = Math.floor(Math.random() * userArr.length);
    userArr[winnerId].winner = true;
    
});


