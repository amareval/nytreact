const mongoose = require("mongoose");
const db = require("../models/index");

// console.log("THIS IS DB," , db)

db.Article.insertMany({title: "Test" , date: "1974-07-18T00:00:00Z", url : "testestestest"}).then(data => {
  console.log(data);
  // process.exit(0);
}).catch(err => {
      console.error(err);
      // process.exit(1);
    });

// This file empties the Books collection and inserts the books below

// mongoose.connect(
//   process.env.MONGODB_URI ||
//   "mongodb://localhost/nytreact"
// );

const article = [
  {
    title: 'Ali Sells Jersey House And Moves to Chicago',
    date: '1974-07-18T00:00:00Z',
    url: 'http://query.nytimes.com/gst/abstract.html?res=9A0DE5D8173FEF34BC4052DFB166838F669EDE'
  },
  {
    title: 'Lebron Signs with Lakers',
    date: '2018-07-18T00:00:00Z',
    url: 'https://www.nytimes.com/interactive/2018/06/08/sports/basketball/lebron-nba-finals.html'
  },
  {
    title: 'In the Carmelo Anthony Trade, Everyone Wins',
    date: '2018-07-18T00:00:00Z',
    url: 'https://www.nytimes.com/2018/07/19/sports/carmelo-anthony-trade.html?rref=sports/basketball&module=Ribbon&version=context&region=Header&action=click&contentCollection=Pro%20Basketball&pgtype=Multimedia'
  },
  {
    title: 'What Stays on Facebook and What Goes? The Social Network Cannot Answer',
    date: '1974-07-18T00:00:00Z',
    url: 'https://www.nytimes.com/2018/07/19/technology/facebook-misinformation.html?rref=collection%2Fsectioncollection%2Ftechnology&action=click&contentCollection=technology&region=rank&module=package&version=highlights&contentPlacement=1&pgtype=sectionfront'
  }
];

// db.insertMany({title: "Test" , date: "1974-07-18T00:00:00Z", url : "testestestest"}).then(data => {
//       console.log(data.result.n + " records inserted!");
//       // process.exit(0);
//     }).catch(err => {
//           console.error(err);
//           // process.exit(1);
//         });

//         console.log("HELLO WORLD");


// db
//   .remove({})
//   .then(() => db.nytreact.collection.insertMany(article))
//   .then(data => {
//     console.log(data + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });
