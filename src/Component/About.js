import React from 'react'
import {Link} from "react-router-dom";

export default function About(porps) {
  return (
    <>
    <div className='container'>
        <h1>{porps.headingAbout}</h1>
        <div class="card">
            <div class="card-header">
                TextUtils Info
            </div>
            <div class="card-body">
                <h5 class="card-title">How to Use our TextUtils</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <Link  to="/" className='btn btn-outline-success'>Go to TextUtils</Link>
            </div>
        </div> 
    </div>
    </>
  )
}
