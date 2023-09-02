import React from "react";
import SubjectCard from "../components/subject-card/SubjectCard";
import { Card, Container } from "react-bootstrap";
import { courses } from "../data";

export default function Quizes() {
  return (
    <Container fluid className="py-5 pageDesign">
      <Container>
        <Card.Header as={"h4"} className="mb-3 fw-bold text-light">
          QuizzyReact
        </Card.Header>
        <Container
          fluid
          className="pt-5 px-0 border-top d-flex justify-content-evenly flex-wrap align-items-center"
        >
          {courses.map((course) => {
            return (
              <SubjectCard
                id={course.id}
                key={course.id}
                title={course.title}
                desc={course.course_desc}
                link={course.course_link}
              />
            );
          })}
        </Container>
      </Container>
    </Container>
  );
}
