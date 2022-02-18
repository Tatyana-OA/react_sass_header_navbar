import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

import classes from './Header.module.scss';

import {BiMenuAltRight} from 'react-icons/bi';
import {AiOutlineClose} from 'react-icons/ai';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(true)
    const [size, setSize] = useState({
        width:undefined,
        height:undefined
    })

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        if (size.width > 768 && menuOpen) {
            setMenuOpen(false)
        }
    }, [size.width, menuOpen])
    
    const menuToggleHandler = () => {
        setMenuOpen(state => !state)
    }
  return (
    <header className={classes.header}>
        <div className={classes.header__content}>
            <h2 className={classes.header__content__logo}>Navbar</h2>
       
        <nav className={`${classes.header__content__nav} ${menuOpen ? classes.isMenu : ""}`}>
            <ul>
                <li>
                    <Link to="/one">Page1</Link>
                </li>
                <li>
                    <Link to="/two">Page2</Link>
                </li>
                <li>
                    <Link to="/three">Page3</Link>
                </li>
            </ul>
            <Link to="/cta"> <button>CTA Page</button> </Link>
        </nav>
        <div className={classes.header__content__toggle}>
           { !menuOpen ? <BiMenuAltRight onClick={menuToggleHandler}/> : <AiOutlineClose onClick={menuToggleHandler} />}
        </div>
        </div>
    </header>
  )
}

export default Header