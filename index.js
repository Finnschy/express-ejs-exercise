const express = require('express');
const app = express();
const PORT = 5000
const navData = require('./nav.json')
const galleryData = require('./gallery.json')
// console.log(galleryData);
// console.log(navData);
// console.log(navData[0].name);
app.use(express.static("public"))
app.set("view engine", "ejs");

// app.use(express.json())
// app.use(express.urlencoded({extended: false}))


navData.forEach( navi => {
    app.get(`${navi.url}`, (req, res) => {
        res.render(`${navi.render}`, {title: `${navi.name}`, navData, galleryData})
    })
})


app.get('*', function(req, res){
    res.render("404", {title: "404", navData})
  })

app.listen(PORT, () => console.log(`server running on http://localhost:${PORT}`))