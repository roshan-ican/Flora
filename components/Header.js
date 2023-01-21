import react from 'react'
import Head from "next/head"
import Link from "next/link"
import styles from '../styles/Header.module.css'
import { BeakerIcon } from '@heroicons/react/24/solid'
import { useState, useEffect } from 'react'


const Header = ({title}) => {

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') { 
      if (window.scrollY < lastScrollY) { // if scroll down hide the navbar
        setShow(false); 
      } else { // if scroll up show the navbar
        setShow(true);  
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY); 
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);
    return(
    <div>
         <Head>
        <title>{title ? title + " - Flora" : "Flora"}</title>
        <meta name="description" content="Plants and Manure" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tw-elements/dist/css/index.min.css" />
<script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"></script>

      </Head>
    

      <div>
        {/* className={`active ${show && 'hidden'}`} */}
        <header className={styles.header} >
            <Link legacyBehavior href="/">

              <a className={styles.logo}>
                Flora{" "}
              </a>
            </Link>
            
            <input className={styles.menuBtn} type="checkbox" id="menuBtn" />
        <label className={styles.menuIcon} htmlFor="menuBtn"><span className={styles.navIcon}></span></label>
        
        <div className={styles.iconsPhone}>
        <div></div>
        <Link legacyBehavior href="/">
              <a className={styles.logoPhone}>
                Flora{" "}
              </a>
            </Link>

           <div className={styles.iconMobile}>
           
            <Link legacyBehavior href="/plants">
                  <a id="link" className={styles.menuLink}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>
   </a>
                </Link>
  
                <Link legacyBehavior href="/plants">
                  <a id="link" className={styles.menuLink}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
  </svg>
  
   </a>
                </Link>
                </div>
                
                </div>
                
                {/*  */}
     <div className={styles.searchBox}>
  <input className={styles.searchInput} type="text" placeholder="Search for plants, seeds, pots...." />
  <button className={styles.searchBtn}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>
</button>
</div>
              
         {/* <Link legacyBehavior href="/plants">
                <a className={styles.menuLink}>
                 Indoor Plants
                </a>
              </Link> */}

        <ul className={styles.menu}>
          <li className={styles.menuli}>
          <Link legacyBehavior href="/plants">
                <a className={styles.menuLink}>
                 Indoor Plants
                </a>
              </Link>
          </li>
          <li className={styles.menuli}>
          <Link legacyBehavior href="/plants">
                <a id="link" className={styles.menuLink}>
                  Outdoor Plants
                </a>
              </Link>
          </li>

          <li className={styles.menuli}>
          <Link legacyBehavior href="/plants">
                <a id="link" className={styles.menuLink}>
                Seeds
                </a>
              </Link>
          </li>
          <li className={styles.menuli}>
          <Link legacyBehavior href="/plants">
                <a id="link" className={styles.menuLink}>
                  Pots
                </a>
              </Link>
          </li>

          <li className={styles.menuli}>
          <Link legacyBehavior href="/plants">
                <a id="link" className={styles.menuLink}>
                  Manure
                </a>
              </Link>
          </li>
          
          
          
        </ul>
        {/* <ul> */}
       
          <li className={ `${styles.menuli} ${styles.lastTer}` }>
        
        <div className={styles.proCart}>
        

<div className={styles.menuDesk}> 
            <Link legacyBehavior href="/plants">
                  <a id="link" className={styles.menuLink}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>
   </a>
                </Link>
  
                <Link legacyBehavior href="/plants">
                  <a id="link" className={styles.menuLink}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
  </svg>
  
   </a>
                </Link>
                </div>
                </div>
                </li>
                {/* </ul> */}

            {/* <div>
              <Link legacyBehavior href="/plants">
                <a id="link" className={styles.menuLink}>
                  Plants
                </a>
              </Link>
              <Link legacyBehavior href="/plants">
                <a id="link" className={styles.menuLink}>
                  Pots
                </a>
              </Link>
              <Link legacyBehavior href="/plants">
                <a id="link" className={styles.menuLink}>
                  Seeds
                </a>
              </Link>
              <Link legacyBehavior href="/cart">
                <a id="link" className={styles.menuLink}>
                  Cart{" "}
                </a>
              </Link>
              <Link legacyBehavior href="/login">
                <a id="link" className={styles.menuLink}>
                  Login{" "}
                </a>
              </Link>
            </div> */}


          
        </header>
        </div>
        
    </div>)
}

export default Header;