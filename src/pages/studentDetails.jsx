import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Form from "../components/Form";

export default function StudentDetails() {
  const { id } = useParams();
  const [student, setStudent] = useState();
  useEffect(function () {
    let studentDetails = JSON.parse(localStorage.getItem("studentDetails"));
    setStudent(studentDetails.filter((student) => student.id === id)[0]);
  }, []);
  return (
    <div>
      <Form student={student} />
    </div>
  );
}
