const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: { type: String, required: true },
  date: { type: Date, default: Date.now },
  url: String
});

const Article = mongoose.model("Article", articleSchema);

Article.insertMany(
  [
  
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
]
).then(data => {
  console.log(data);
  // process.exit(0);
}).catch(err => {
      console.error(err);
      // process.exit(1);
    });

module.exports = Article;
