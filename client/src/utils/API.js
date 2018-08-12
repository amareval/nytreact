import axios from "axios";

const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=";
const APIKEY = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";



export default {
  // Gets all books
  getArticles: function() {
    return axios.get("/api/articles");
  },
  // //Searches for Articles
  // search: function(query, startdate, enddate) {
  //   return axios.get(BASEURL + APIKEY + "&q=" + query + "?begin_date=" + startdate + "?end_date=" + enddate);
  // },
  // Gets the book with the given id
  getArticle: function(id) {
    return axios.get("/api/articles/" + id);
  },
  // Deletes the book with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves a book to the database
  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  }
};
