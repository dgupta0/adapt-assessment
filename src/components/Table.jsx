import React, { useState } from "react";
import data from "./data";
import down from "../assets/down.png";

const Table = () => {
  const [status, seStatus] = useState([
    "Pending",
    "Accepted",
    "AWB Created",
    "Ready To Ship",
    "Shipped",
    "Completed",
    "Canceled",
  ]);
  const [selectedStatus, setSelectedStatus] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(5);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = (currentPage - 1) * rowsPerPage;

  const handleSelect = (status) => {
    setSelectedStatus(status);
    console.log(status);
    const newData = data.filter((el) => el.status === status);
    setFilteredData(newData);
    setCurrentPage(1);
  };
  const handleRefresh = () => {
    setFilteredData(data);
    setSelectedStatus("");
    setCurrentPage(1);
  };
  const handleBack = () => {
    setCurrentPage((page) => page - 1);
  };

  const handleForward = () => {
    setCurrentPage((page) => page + 1);
  };

  const renderStatus = status.map((s) => (
    <li
      key={s}
      onClick={() => handleSelect(s)}
      className={s === selectedStatus ? "selected" : ""}
    >
      {s}
    </li>
  ));
  const renderTableBody = filteredData
    .slice(indexOfFirstRow, indexOfLastRow)
    .map((el) => (
      <tr key={el.orderNo}>
        <td>
          <img
            className="channel-icon"
            src={el.channel}
            alt="image from freepik"
          />
        </td>
        <td>{el.orderNo}</td>
        <td>{el.orderDate}</td>
        <td>{el.city}</td>
        <td>{el.customerName}</td>
        <td>{el.orderValue}</td>
        <td>{el.status}</td>
        <td className="operation">
          {el.operation} <img src={down} alt="img by freepik" />
        </td>
      </tr>
    ));
  return (
    <div className="table-ctn">
      <section className="category">
        <p className="category-item">
          Orders <span className="close-category">X</span>
        </p>
      </section>
      <section className="status-ctn">
        <ul>{renderStatus}</ul>
      </section>
      <div className="table">
        <div className="table-header">
          <button>Import Order</button>
          <button className="disabled">Accept</button>
          <button className="disabled">Print</button>
          <button onClick={handleRefresh} className="th-right">
            Refresh
          </button>
        </div>
        <div className="table-content">
          <table>
            <thead>
              <tr className="thead">
                <th>Channel</th>
                <th>Order No.</th>
                <th>Order Date</th>
                <th>City</th>
                <th>Customer Name</th>
                <th>Order Value</th>
                <th>Status</th>
                <th>Operation</th>
              </tr>
            </thead>
            <tbody className="scroll">{renderTableBody}</tbody>
          </table>
        </div>
        <div className="pagination">
          <button disabled={currentPage === 1} onClick={handleBack}>
            {"<"}
          </button>
          <p className="current-page">{currentPage}</p>
          <button
            onClick={handleForward}
            disabled={
              currentPage === Math.ceil(filteredData.length / rowsPerPage)
            }
          >
            {">"}
          </button>
          <button className="per-page">
            5 / page <img className="down" src={down} alt="down arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table;
