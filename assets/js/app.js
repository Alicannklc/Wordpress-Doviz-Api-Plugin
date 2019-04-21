import React from "react";
import ReactDOM from "react-dom";
const numeral = require("numeral");

class Main extends React.Component {
  render() {
    return <div class="maina">{this.props.children}</div>;
  }
}

class Header extends React.Component {
  render() {
    return (
      <div className="headera">
        <div className="header-texta">
          <span className="header-text-titlea">Döviz</span>
        </div>
      </div>
    );
  }
}

class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null
    };
  }

  componentDidMount() {
    const data = [];
    fetch(
      `https://napi.canlidoviz.com/items/current?marketId=0&code=USD&code=EUR&code=GA`
    )
      .then(d => d.json())
      .then(data => {
        for (const prop in crypto.data) {
          data.push(data.data[prop]);
        }

        data.sort((a, b) => {
          return a.rank - b.rank;
        });

        this.setState({
          data: data
        });
      });
  }

  checkPositive(item) {
    return item[0] !== "-";
  }

  renderElements() {
    return this.state.data.map((item, index) => {
      return (
        <div className="rowa">
          <div className="column-lefta flex-grow-2a">
            <div className="divider-2a">
              <div className="pricea">
                <span className="bolda size-16a">{item.name}</span>
                <span className="size-13a">
                  {numeral(item.data.todayLowestSellPrice).format("0,0.000")}
                </span>
              </div>
            </div>
          </div>
          <div
            className={`columna ${
              this.checkPositive(String(item.data.dailyChange))
                ? "greena"
                : "reda"
            }`}
          >
            <i className="fas fa-sort-up" />
            <span>{numeral(item.data.dailyChange).format("0,0.000")}%</span>
          </div>
        </div>
      );
    });
  }

  render() {
   
    return (
      <div className="contenta">
        {this.state.data ? this.renderElements() : null}
      </div>
    );
  }
}

class Card extends React.Component {
  render() {
    return (
      <Main>
        <Header />
        <List />
      </Main>
    );
  }
}
ReactDOM.render(<Card />, document.getElementById("root"));
