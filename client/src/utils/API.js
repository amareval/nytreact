import axios from "axios";

const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=";
const APIKEY = "9d4a8986921972b65754ea0809d47c84:12:74623931";



export default {
  // Gets all books
  getArticles: function() {
    return axios.get("/api/articles");
  },
  //Searches for Articles
  search: function(query) {
    return axios.get(BASEURL + APIKEY + "&q=" + query);
  },
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
