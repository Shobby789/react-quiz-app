import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export default function SubjectCard({ id, title, desc, link }) {
  return (
    <>
      <Card
        className="text-start mb-5"
        style={{ width: "30rem", background: "#f1f2f6" }}
        id={id}
      >
        <Card.Header>Beginner Level</Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{desc}</Card.Text>
          <Button variant="success" size="sm" className="pageDesign">
            <Link to={link} className="text-light text-decoration-none">
              Start Quiz
            </Link>
          </Button>
        </Card.Body>
        {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
      </Card>
    </>
  );
}
