import React, { Component } from "react";
import axios from "axios"
import DeleteBtn from "../../components/DeleteBtn";
import AddBtn from "../../components/AddBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=";
const APIKEY = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

class Articles extends Component {
  state = {
    searchresults: [],
    articles: [],
    title: "",
    startdate: "",
    enddate: ""
  };

  componentDidMount() {
    this.loadArticles();
  }

  loadArticles = () => {
    API.getArticles()
      .then(res =>
        this.setState({ articles: res.data, title: "", date: "", url: "" })
      )
      .catch(err => console.log(err));
  };

  searchArticles = (title,startdate,enddate) => {

    axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931&q=" + title + "?begin_date=" + startdate + "?end_date=" + enddate)

    .then(res => {
      console.log(res.data.response.docs); 
      this.setState({
        searchresults: res.data.response.docs
      })
    }
    )
    .catch(err => console.log(err));
  }

  deleteArticle = id => {
    API.deleteArticle(id)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  };
  
  saveArticle = id => {

    this.state.searchresults.map(i => {
      if(id === i._id){
        API.saveArticle({
          title: i.headline.main
        })
        .then(res => this.loadArticles())
        .catch(err => console.log(err));
      }
    })
    // console.log(id);
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchArticles(this.state.title, this.state.startdate, this.state.enddate)
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>What Article Should I Read?</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                value={this.state.startdate}
                onChange={this.handleInputChange}
                name="startdate"
                placeholder="start date YYYYMMDD (required)"
              />
              <Input
                value={this.state.enddate}
                onChange={this.handleInputChange}
                name="enddate"
                placeholder="end date YYYYMMDD (required)"
              />
              <FormBtn
                onClick={this.handleFormSubmit}
              >
                Submit Article
              </FormBtn>
            </form>
          </Col>
          
        </Row>
        <Row>
        <Col size = "md-1">
        </Col>
        <Col size="md-10">
        <Jumbotron>
              <h1 className = "results-search">Results</h1>
            </Jumbotron>
            {this.state.searchresults.length ? (
              <List>
                {this.state.searchresults.map(article => (
                  <ListItem key={article._id}>
                    <Link to={"/articles/" + article._id}>
                      <strong>
                        {article.headline.main} by {article.author}
                      </strong>
                    </Link>
                    <AddBtn onClick={() => this.saveArticle(article._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
        </Col>

        </Row>
      </Container>
    );
  }
}

export default Articles;
