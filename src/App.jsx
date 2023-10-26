import "./sass/main.scss";
import { Container, Row, Col } from "react-bootstrap";

function App() {
	return (
		<>
      <div className="game-container">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center">
                A Haunting on <span class="highlight __orange __block">Havannah Street</span>
              </h1>
            </Col>
          </Row>
        </Container>
      </div>
		</>
	);
}

export default App;
