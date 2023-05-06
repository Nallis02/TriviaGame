import { Button } from "antd";
import { Link } from "react-router-dom";
import "../styles/styles.css";
/**
 * Home component.
 * Displays the home page of the Trivia Challenge.
 */
export default function Home() {
  return (
    <section className="home-container">
      <h1>Welcome to the Trivia Challenge!</h1>
      <p>You will be presented with 10 True or False questions</p>
      <p>Can you score 100%?</p>
      <Link to="/loading">
        <Button className="button" type="primary">
          BEGIN
        </Button>
      </Link>
    </section>
  );
}
