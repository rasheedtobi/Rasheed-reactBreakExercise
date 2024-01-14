import React from "react"
import './styles.css'
import {Link} from 'react-router-dom'
import {BrowserRouter} from 'react-router-dom'


const Nav = () => {
  return (
    <>
    <div className="header">
        <div className="logo">
            <h2>R<span>TO</span></h2>
        </div>
        <ul>
          <BrowserRouter>
            <li><Link href = '#'>Home</Link></li>
            <li><Link href = '#'>Product</Link></li>
            <li><Link href = '#'>About</Link></li>
            <li><Link href = '#'>Contact</Link></li>
            </BrowserRouter>
        </ul>

    </div>
    </>
  )
}
export default Nav
