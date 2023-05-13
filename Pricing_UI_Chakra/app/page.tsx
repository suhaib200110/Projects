"use client";
//import Image from 'next/image'
//import { Inter } from '@next/font/google'
//import styles from './page.module.css'
//const inter = Inter({ subsets: ['latin'] })
import Head from "./heading";
import Pricing from "./pricing";

export default function Home() {
  return (
    <>
      <Head />
      <Pricing />
    </>
  );
}
