import React from "react";
import { Card, Form } from "react-bootstrap";

export default function QuestionCard({ id, question, option }) {
  return (
    <Card>
      <Card.Body>
        <Form>
          <Card.Title className="mb-3">
            Q. What is the full form of HTML?
          </Card.Title>
          <Card.Text className="ps-3 mb-1">
            <input type="radio" id="html" name="fav_language" value="HTML" />
            <Form.Label for="html" className="ms-2">
              HTML
            </Form.Label>
          </Card.Text>
        </Form>
      </Card.Body>
    </Card>
  );
}
