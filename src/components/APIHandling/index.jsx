import React, { Component } from "react";
import "./style.css";
import Projectcard from "../Projectcard";

class index extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
    };
  }

  async componentDidMount() {
    const apiKey =
      // "https://newsapi.org/v2/everything?q=tesla&sortBy=publishedAt&apiKey=69aa70728cd448c4b7d2d4af00cdb82a";
      "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=69aa70728cd448c4b7d2d4af00cdb82a";

    try {
      let response = await fetch(apiKey);
      let data = await response.json();
      console.log(data);
      this.setState({ articles: data.articles });
    } catch (error) {
      console.log("you get an error", error);
    }
  }

  render() {
    console.log("render method called.");
    return (
      <div className="grid">
        {this.state.articles.map((element) => {
          return (
            <Projectcard
              publish={element.publishedAt}
              img={element.urlToImage}
              read={element.url}
              title={element.title}
              author={element.author}
              description={element.description}
            />
          );
        })}
      </div>
    );
  }
}

export default index;
