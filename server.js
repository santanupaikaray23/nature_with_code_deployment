// const express = require ('express');
// const path = require ('path');
// const app = express();

// app.use(express.static(path.join(__dirname,'./dist/browser')));

// app.get('*',(req, res)=>{
//     res.sendFile(path.join(__dirname, './dist/browser/index.html'));
// })

// const port = process.env.PORT || 3000;

// app.listen(port, () => {
//     console.log(`Server started on port ${port}`);
// });
const express = require ('express');
const path = require ('path');
const app = express();
const port = process.env.PORT||9999;

app.use(express.static(path.join(__dirname,'build')));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'build/index.html'))

});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
