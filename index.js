const express =require('express');
const cors = require('cors');

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

require('dotenv').config();
const app = express();

const port = process.env.PORT || 5000;


//middleware
// app.use(cors());
app.use(
  cors({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
  })
);
app.use(express.json());


//mongodb



// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.ycofkd3.mongodb.net/?retryWrites=true&w=majority`;
// console.log(uri);




const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.ycofkd3.mongodb.net/?retryWrites=true&w=majority`;
// console.log(uri);

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
  

async function run() {
  try {
    
    const projectsCollection = client.db('portfolioUserDb').collection('projects');

//  4 data   
app.get('/projects', async (req, res) => {
  const query = {};
  const result = await projectsCollection.find(query).toArray();
  res.send(result)
})

      //single mobile with unic id
    
    app.get("/projects/:id", async (req, res) => {
      const id = req.params.id;
      // console.log(id)
      const query = { _id: new ObjectId(id) }
      const result = await projectsCollection.findOne(query);
      res.send(result);
      // console.log(result)
    });

    // app.use((req, res, next) => {
    //     res.header("Access-Control-Allow-Origin", "*")
    //   }) 



  } finally {
    
  }
}
run().catch(console.dir);



 



app.get('/',(req,res)=>{
    res.send('portfolio server is running');

})

app.listen(port,()=>{
    console.log(`portfolio server : ${port}`)
})








// const express = require('express');
// const cors = require('cors');

// const { MongoClient, ServerApiVersion } = require('mongodb');

// require('dotenv').config();
// const app = express();


// const port = process.env.PORT || 5000;


// //middleware
// app.use(cors());
// app.use(express.json());


// // portfolioUser
// // Fk0i51BOb4OYa7gF
// // process.env.DB_USER
// // project data server start





// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.ycofkd3.mongodb.net/?retryWrites=true&w=majority`;
// console.log(uri)
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {

//     const projectsCollection = client.db('portfolioUser').collection('projects');

//     //  4 data   
//     app.get('/projects',async(req,res)=>{
//         const query = {};
//         const cursor = projectsCollection.find(query)
//         const projects = await cursor.toArray()
//         res.send(projects)
//      })
      
//      //4 data id
       
//        app.get('/projects/:id',async(req,res)=>{
//         const id=req.params.id;
//         const query ={_id: ObjectId(id)};
//         const service = await projectsCollection.findOne(query);
//         res.send(service)
//      })
    
    

//   } finally {
    
    

//   }
// }
// run().catch(console.dir);





// // project data server end

// app.get('/', (req, res) =>{res.send('portfolio server is running')});

// app.listen(port, ()=>{console.log('portfolio server is running on port'), port})




// const express = require('express');
// const app = express();

// const cors = require('cors')
// const port =process.env.PORT || 5000

// app.use(cors());

// const categories =require('./data/categories.json')
//  const products =require('./data/products.json')




// app.get('/category', (req,res) => {
//     res.send(categories)
// })
// app.get('/category/:id', (req,res) => {
//     const id = req.params.id;
//     const gift_Products =products.filter(p=> p.category_id === id)
//     res.send(gift_Products)
//     //  console.log(req.params.id)
// })

// app.get('/products', (req,res) => {
//     res.send(products)
// })
// // ....singleProducts id......
// app.get('/products/:id', (req,res) => {
//     const id = req.params.id;
//     const singleProducts =products.find(b=>b._id===id)
//     res.send(singleProducts)
//       console.log(req.params.id)
// })
// // .......category_id......
// app.get('/products/:id', (req,res) => {
//     const id = req.params.id;
//     const selectedProducts =products.find(p=>p._id===id)
//     res.send(selectedProducts)
//     //  console.log(req.params.id)
// })


// app.get('/', (req,res) => {
//     res.send('gift shop')
// })

// app.listen(port,()=> {console.log('st giftster server',port)} )