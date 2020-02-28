import React, { Component, createRef } from "react";
import "./Main.scss";

export class Main extends Component {
  constructor(props) {
    super(props);
    this.container = React.createRef();
    this.state = {
      event: props.event
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.event !== this.props.event) {
      this.setState({ event: nextProps.event });

      this.container.current.className =
        "main__container animation-fade-in";
      setTimeout(() => {
        this.container.current.className = "main__container";
      }, 500);
    }
  }
  render() {
    return (
      <div className="main">
        <div className="main__container" ref={this.container}>
          <h1 className="main__container__title">{this.state.event.Title}</h1>
          <div className="main__container__content">
            <div className="main__container__content__left">
              <div className="main__container__content__left__description">
                {this.state.event.description}
              </div>
              <div className="main__container__content__left__info">
                <div className="main__container__content__left__details">
                  <p className="main__container__content__left__info__colorchange">
                    Prize Worth:{" "}
                  </p>{" "}
                  {this.state.event.prize}
                </div>
                <div className="main__container__content__left__details">
                  <p className="main__container__content__left__info__colorchange">
                    Team Size:{" "}
                  </p>{" "}
                  {this.state.event.teamSize}
                </div>
                <div className="main__container__content__left__details">
                  <p className="main__container__content__left__info__colorchange">
                    Venue:{" "}
                  </p>{" "}
                  {this.state.event.venue}
                </div>
                <div className="main__container__content__left__details">
                  <p className="main__container__content__left__info__colorchange">
                    Time:{" "}
                  </p>{" "}
                  {this.state.event.startTime} to
                  {this.state.event.endTime}
                </div>
              </div>
            </div>

            <span className="main__container__content__vl"></span>

            <div className="main__container__content__right">
              <div className="main__container__content__right__main">
                <p className="main__container__content__right__colorchange">
                  Covenor :
                </p>
                {this.state.event.covenors.name}
              </div>
              <div className="main__container__content__right__main">
                <p className="main__container__content__right__colorchange">
                  Phone :
                </p>
                {this.state.event.covenors.phone}
              </div>
              <div className="main__container__content__right__main">
                <p className="main__container__content__right__colorchange">
                  Co-Covenor :
                </p>
                {this.state.event.co_convenors.name}
              </div>
              <div className="main__container__content__right__main">
                <p className="main__container__content__right__colorchange">
                  Phone :
                </p>
                {this.state.event.co_convenors.phone}
              </div>
              <div className="main__container__content__right__main">
                <p className="main__container__content__right__colorchange">
                  Member 1 :
                </p>
                {this.state.event.members[0]}
              </div>
              <div className="main__container__content__right__main">
                <p className="main__container__content__right__colorchange">
                  Member 2 :
                </p>
                {this.state.event.members[1]}
              </div>
            </div>
          </div>

          <div className="main__container__content__right__reg">
            Rules and Regulations
          </div>
          <div className="main__container__content__right__reg__but">
            <a className="main__container__button">Register</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
