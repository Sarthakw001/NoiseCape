import React from 'react'
import "./sidebar.css";
import Soundarray from '../soundarray/Soundarray';

function Sidebar() {
  return (
    <>
    <div className='sidebar-soundarray'>
      <div className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item">
            <button>
              <img src="https://cdn-icons-png.flaticon.com/512/339/339879.png" alt="" />
            </button>
          </li>
          <li className="sidebar-list-item">
          <button>
              <img src="https://cdn-icons-png.flaticon.com/512/339/339879.png" alt="" />
            </button>
          </li>
          <li className="sidebar-list-item">
          <button>
              <img src="https://cdn-icons-png.flaticon.com/512/339/339879.png" alt="" />
            </button>
          </li>
          <li className="sidebar-list-item">
          <button>
              <img src="https://cdn-icons-png.flaticon.com/512/339/339879.png" alt="" />
            </button>
          </li>
          <li className="sidebar-list-item">
          <button>
              <img src="https://cdn-icons-png.flaticon.com/512/339/339879.png" alt="" />
            </button>
          </li>
          <li className="sidebar-list-item">
          <button>
              <img src="https://cdn-icons-png.flaticon.com/512/339/339879.png" alt="" />
            </button>
          </li>
          <li className="sidebar-list-item">
          <button>
              <img src="https://cdn-icons-png.flaticon.com/512/727/727269.png" alt="" />
            </button>
          </li>
        </ul>
        
      </div>
      <div className='soundarray'>
            <Soundarray/>
            <Soundarray/>
            <Soundarray/>
            <Soundarray/>
            <Soundarray/>
            <Soundarray/>
            <Soundarray/>
            <Soundarray/>
      </div>
    </div>
   
    </>
  )
}

export default Sidebar