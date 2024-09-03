import { useEffect, useState } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import StudentDetails from "./pages/studentDetails";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

export default function App() {
  const [data, setData] = useState({});
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [searchedData, setSearchedData] = useState([]);

  useEffect(function () {
    const storedData = localStorage.getItem("studentDetails");

    // If no data exists in localStorage, initialize it with some default data
    if (!storedData) {
      const initialData = [
        {
          id: "1",
          name: "John Doe",
          email: "john@example.com",
          phone: "123-456-7890",
          city: "New York",
        },
        {
          id: "2",
          name: "Jane Smith",
          email: "jane@example.com",
          phone: "987-654-3210",
          city: "Los Angeles",
        },
        {
          id: "3",
          name: "Alice Johnson",
          email: "alice@example.com",
          phone: "555-555-5555",
          city: "Chicago",
        },
      ];

      localStorage.setItem("studentDetails", JSON.stringify(initialData));
      setSearchedData(initialData);
    } else {
      // Safely parse the data if it exists
      try {
        const parsedData = JSON.parse(storedData);
        if (Array.isArray(parsedData)) {
          setSearchedData(parsedData);
        } else {
          throw new Error("Invalid data format");
        }
      } catch (error) {
        console.error(
          "Failed to parse studentDetails from localStorage, clearing data:",
          error
        );
        // Clear invalid data from localStorage
        localStorage.removeItem("studentDetails");
        setSearchedData([]);
      }
    }
  }, []);

  function handleAddClick() {
    setIsModelOpen(true);
  }

  function handleCloseModal() {
    setIsModelOpen(false);
  }

  return (
    <>
      <Header handleAddClick={handleAddClick} />
      <Routes>
        <Route
          index
          path="/"
          element={
            <Home
              data={data}
              searchedData={searchedData}
              setSearchedData={setSearchedData}
              setData={setData}
            />
          }
        />
        <Route path="/details/:id" element={<StudentDetails />} />
      </Routes>
      {isModelOpen && (
        <Modal
          handleCloseModal={handleCloseModal}
          setSearchedData={setSearchedData}
        />
      )}
    </>
  );
}
