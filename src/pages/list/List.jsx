import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./list.scss";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";

const List = ({ title }) => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable dataTitle={title} />
      </div>
    </div>
  );
};

export default List;
