import React from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'

export default function page() {
  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: "#E0FFFF" }}>
        <Header />
        <main>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident magnam voluptate vel reiciendis voluptates alias facere odit quo molestiae? Itaque minima eos quos! Atque obcaecati laboriosam perspiciatis non quos deleniti?</p>
        </main>
        <Footer />
    </div>
  )
}
