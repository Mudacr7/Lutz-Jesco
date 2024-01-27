import React from 'react'
import './banner.css'
import './banner.js';
import { Link } from 'react-router-dom';
import { CiLocationOn } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
const Banner = () => {
    return (
        <>
            <section className='section-banner'>
                <div className="container">
                    <h1>What can we help you find?</h1>
                    <div class="search-local ">
                            <div class="btn-group icon">
                                <button type="button" class="btn btn-danger">Action</button>
                                <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span class="visually-hidden">Toggle Dropdown</span>
                                </button>
                                <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item" to="#">Action</Link></li>
                                    <li><Link class="dropdown-item" to="#">Another action</Link></li>
                                    <li><Link class="dropdown-item" to="#">Something else here</Link></li>
                                    <li><Link class="dropdown-item" to="#">Separated link</Link></li>
                                </ul>
                            </div>
                        <input type="text" placeholder="Search For" />
                        <button>
                            <  CiSearch name="search-outline" class="search-icon" />
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Banner