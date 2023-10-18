import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Form5s from "../components/Form5s"
import Contactform from "../components/Contactform"

const page = () => {
  return (
    <main className="min-h-screen items-center">
    <Navbar />
    <Form5s />
    <Footer />
  </main>  )
}

export default page