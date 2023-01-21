import React from "react"
import Link from "next/link"
import Head from "next/head"
import Footer from '../components/Footer.js'
import Header from '../components/Header'
import ProductItem from "../components/MainPage/ProductItem"
import data from "../utils/data"
import '../styles/MainPage.module.css'
import Carousel from "../components/MainPage/Carousel.js"
import Categories from "../components/MainPage/categories.js"
import HomeProduct from "../components/MainPage/HomeProduct.js"


export default function Layout({ title,  }) {
  return (
    <div>
     <Header title={title} />

     <Carousel />

     <Categories />

      <HomeProduct />
      <Footer />
    </div>
  )
}
