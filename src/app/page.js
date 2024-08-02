// src/app/page.js
import Layout from './layout';
import Navbar from '../components/Nav';
import Hero from '../components/Hero';
import About from '../components/About';
// import Projects from '@/components/Project';
import Contact from '@/components/contact';

import "./globals.css";

export default function Home() {
  return (
    <Layout>
      <Navbar/>
      <Hero />
      <About />
      {/* <Projects /> */}
      <Contact />
    </Layout>
  );
}
