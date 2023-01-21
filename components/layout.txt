import React from "react"
import Link from "next/link"
import Head from "next/head"

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + " - Flora" : "Flora"}</title>
        <meta name="description" content="Plants and Manure" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex min-h-screen flex-col justify-between ">
        <header>
          <nav className="flex h-12 items-center px-4 justify-between shadow-md">
            <Link legacyBehavior href="/">
              <a id="link" className="text-lg font-bold">
                Flora{" "}
              </a>
            </Link>
            <div>
              <Link legacyBehavior href="/plants">
                <a id="link" className="p-2">
                  Plants
                </a>
              </Link>
              <Link legacyBehavior href="/plants">
                <a id="link" className="p-2">
                  Pots
                </a>
              </Link>
              <Link legacyBehavior href="/plants">
                <a id="link" className="p-2">
                  Seeds
                </a>
              </Link>
              <Link legacyBehavior href="/cart">
                <a id="link" className="p-2">
                  Cart{" "}
                </a>
              </Link>
              <Link legacyBehavior href="/login">
                <a id="link" className="p-2">
                  Login{" "}
                </a>
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex h-10 justify-center items-center shadow-inner">
          <p>Copyright © 2022 Flora</p>
        </footer>
      </div>
    </>
  )
}
