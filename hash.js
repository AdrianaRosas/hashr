const bcrypt = require('bcrypt')

let saltRounds = 10


// YOU WORD
// 
// 
let myString = 'pizzacrypt'


// BRYPT BLOCK
// 
// 
bcrypt.hash(myString, saltRounds, (err, hash) => {
    if(!err) {
        console.log(hash)
    } else {
        console.log('Error', err)
    }
})



// to compare, comment out the BRYPT BLOCK 
// insert your word and console password 
// Run node hash.js
// Result will be true or false
// 
// bcrypt.compare('mysecretword', '$2b$10$i3bzBN91cAWu7p3LaH1NxOPaBqIM8m3dxTfSKvUmAg7jkNflnHEXy',
// (err, res) => {
//     if(!err) {
//         console.log('Password Correct:', res)
//     } else {
//         console.log('Error', err)
//     }
// })



//node hash.js