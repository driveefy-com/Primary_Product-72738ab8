import './styles/FleetHistoryTable.scss'
import filter from '../../../assets/icons/filterOption.svg'
import sort from '../../../assets/icons/sortOption.svg'
import reset from '../../../assets/icons/resetOption.svg'
import { fleetHistoryTable, fleetListTable } from '../../../common/form/FormData'
import ReactPaginate from 'react-paginate'
import  { useState } from 'react'
import left from '../../../assets/icons/lessThanSign.svg'
import right from '../../../assets/icons/greaterThanSign.svg'
import search from '../../../assets/icons/searchIcon.svg'
import EyeOpen from "../../../assets/icons/EyeOpen.svg";

function FleetHistoryTable() {
  const dataArray = Array.from({ length: 60 }, (_, index) => ({
    id: index + 1,
    name: "NA",
    age: "NA",
    city: "NA",
    country: "NA",
    email: "NA",
    phone: "NA",
    status: "NA",
    role: "NA",
  }));
  const [list, setlist] = useState(true);
  const [currentPage, setcurrentPage] = useState(0);
  const itemsPerPage = 6; // Show 6 rows per page
  const offset = currentPage * itemsPerPage;
  const currentData = dataArray.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(dataArray.length / itemsPerPage);
  const [activeTab, setActiveTab] = useState("fleetList"); // Default active tab

  const toggleListHistory = () => {
    setlist(!list);
  }

  const handlePageClick = ({ selected }) => {
    setcurrentPage(selected);
  };

  return (
    <>
      <div className="fleet-list-history-container">
        <div className="fleet-options">
          <div className="list-history-options" onClick={toggleListHistory}>
            <p className={activeTab === "fleetList" ? "active-tab" : ""}
              onClick={() => setActiveTab("fleetList")}>Fleet List</p>
            <p className={activeTab === "fleetHistory" ? "active-tab" : ""}
              onClick={() => setActiveTab("fleetHistory")}>Fleet History</p>
          </div>
          <div className="fleet-search-component">
            <input type="text" className='search-fleet-no' placeholder='Search by Fleet No.' />
            <img src={search} alt="" className='search-icon' />
          </div>
          <div className="options-container">
            <button className='options-container-button'><img src={filter} alt="Filter" className='filter-sort-img' /></button>
            <button className='options-container-button'><img src={sort} alt="Sort" className='filter-sort-img' /></button>
            <button className='options-container-button'><img src={reset} alt="Reset" className='filter-sort-img' /></button>
          </div>
        </div>

        <div className="table-container">
          <table className="custom-table">
            <thead>
              <tr>
                {activeTab === 'fleetList' ? fleetListTable.map((item, index) => (
                  <th key={index}>{item}</th> // ✅ FIXED: Added key={index}
                )):fleetHistoryTable.map((item, index) => (
                <th key={index}>{item}</th> // ✅ FIXED: Added key={index}
                ))}

              </tr>
            </thead>
            <tbody>
              {currentData.map((row) => ( // ✅ FIXED: Now using currentData instead of dataArray
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.name}</td>
                  <td>{row.age}</td>
                  <td>{row.city}</td>
                  <td>{row.country}</td>
                  <td>{row.email}</td>
                  <td>{row.phone}</td>
                  <td>{row.status}</td>
                  <td>{row.role}</td>
                  <td ><img src={EyeOpen} alt="" className='fleet-history-eye-icon'/></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Component */}
      </div>
      <div className="pagination-container">
        <ReactPaginate
          previousLabel={<img src={left} className='left-right-icon'/>}
          nextLabel={<img src={right} className='left-right-icon'/>}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={2}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          activeClassName={"active"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakClassName={"page-item break"} // Add custom class to break
          breakLinkClassName={"page-link break-link"} // Add custom link class to bre
        />
      </div>
    </>
  )
}

export default FleetHistoryTable;
