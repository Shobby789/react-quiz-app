import React from "react";
import { Button, Card } from "react-bootstrap";

export default function Result({ totalScore, userScore, tryAgain }) {
  return (
    <>
      <Card className="p-5 border-0 text-center resultCard mx-auto mt-5">
        <Card.Body>
          <Card.Title>
            Total Score: <span className="fw-semibold">{totalScore}</span>
          </Card.Title>
          <Card.Text>
            Your Score: <span className="fw-semibold">{userScore}</span>
          </Card.Text>
          <Button
            variant="primary"
            size="sm"
            className="mx-1"
            onClick={tryAgain}
          >
            Try Again
          </Button>
          <Button
            variant="primary"
            size="sm"
            className="mx-1"
            onClick={tryAgain}
          >
            Home
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}
