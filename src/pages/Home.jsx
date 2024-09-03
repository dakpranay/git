/* eslint-disable react/prop-types */
import DetailTabel from "../components/DetailTabel";
import Filter from "../components/Filter";

export default function Home({ data, searchedData, setSearchedData, setData }) {
  function handleChange(e) {
    let { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  return (
    <div>
      <Filter data={data} onChange={handleChange} />
      <DetailTabel
        data={data}
        onChange={handleChange}
        searchedData={searchedData}
        setSearchedData={setSearchedData}
      />
    </div>
  );
}
