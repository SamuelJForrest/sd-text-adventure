import "./sass/main.scss";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";

import GAME_DATA from "./gameData";

function App() {
  const [screen, setScreen] = useState(0);

  const buttonClickHandler = (e) => {
    const target = e.target;
    const goTo = target.getAttribute('data-goto');

    setScreen(goTo);
  }

  const textMap = GAME_DATA[screen].text.map((text, i) => {
    const isBold = text.toLowerCase() === 'spindogs' ? ' __bold' : '';
    const isGameOver = text.toLocaleLowerCase() === 'game over' ? ' __gameover' : '';

    return (
      <p key={i} className={"game-text text-center" + isBold + isGameOver}>{text}</p>
    )
  })

  const buttonMap = GAME_DATA[screen].links.map((button, i) => {
    return (
      <li key={i}>
        <button className={"game-button"} data-goto={button.goTo} onClick={buttonClickHandler}>{button.buttonText}</button>
      </li>
    )
  })

  const buttonLength = GAME_DATA[screen].links.length;
  const twoButtons = buttonLength > 1 ? ' __twocol' : '';

	return (
		<>
      <div className="game-container">
        <Container>
          <Row>
            <Col xs="12">
              {
                screen == 0 && 
                <h1 className="text-center">
                  A Haunting on <span className="highlight __orange __block">Havannah Street</span>
                </h1>
              }
              {
                screen > 0 && 
                <>
                  {textMap}
                </>
              }

            </Col>
            <Col md="8 mx-auto" xl={buttonLength > 1 ? '10' : '6'}>
              <ul className={"game-buttons" + twoButtons}>
                {buttonMap}
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
		</>
	);
}

export default App;
