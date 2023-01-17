import React from 'react'
import "./soundarray.css";

function Soundarray() {
  return (
    <>
        <div className='Soundarray'>
            <ul className='Soundarray-list'>
                <li>
                    <button className='Soundarray-list-item' >
                        <img  id='noise-item' src="https://media.istockphoto.com/id/467367026/photo/perfect-sky-and-ocean.jpg?s=612x612&w=0&k=20&c=LZYFRxIhuKQom3l-kR3TLN7GikSJYJz9NRglQ3nngBw=" alt="noise icon" />
                        
                    </button>
                    <h1 className='Soundarray-list-item-heading text-xl'>SEA</h1>
                    <input type="range" min="0" max="100" defaultValue="40" className="range range-xs Soundarray-list-item" />
                </li>
                <li>
                    <button className='Soundarray-list-item'>
                        <img id='noise-item' src="https://media.istockphoto.com/id/467367026/photo/perfect-sky-and-ocean.jpg?s=612x612&w=0&k=20&c=LZYFRxIhuKQom3l-kR3TLN7GikSJYJz9NRglQ3nngBw=" alt="noise icon" />
                    </button>
                    <h1 className='Soundarray-list-item-heading text-xl'>SEA</h1>
                    <input type="range" min="0" max="100" defaultValue="40" className="range range-xs Soundarray-list-item" />
                </li>
                <li>
                    <button className='Soundarray-list-item'>
                        <img id='noise-item' src="https://media.istockphoto.com/id/467367026/photo/perfect-sky-and-ocean.jpg?s=612x612&w=0&k=20&c=LZYFRxIhuKQom3l-kR3TLN7GikSJYJz9NRglQ3nngBw=" alt="noise icon" />
                    </button>
                    <h1 className='Soundarray-list-item-heading text-xl'>SEA</h1>
                    <input type="range" min="0" max="100" defaultValue="40" className="range range-xs Soundarray-list-item" />
                </li>
                <li>
                    <button className='Soundarray-list-item'>
                        <img id='noise-item' src="https://media.istockphoto.com/id/467367026/photo/perfect-sky-and-ocean.jpg?s=612x612&w=0&k=20&c=LZYFRxIhuKQom3l-kR3TLN7GikSJYJz9NRglQ3nngBw=" alt="noise icon" />
                    </button>
                    <h1 className='Soundarray-list-item-heading text-xl'>SEA</h1>
                    <input type="range" min="0" max="100" defaultValue="40" className="range range-xs Soundarray-list-item" />
                </li>
            </ul>
        </div>
    </>
  )
}

export default Soundarray