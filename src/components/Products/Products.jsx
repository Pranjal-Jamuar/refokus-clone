import React, { useState } from "react"
import Product from "./Product"
import { motion } from "motion/react"

import arqitel from "../../../public/videos/arqitel.webm"
import ttr from "../../../public/videos/ttr.webm"
import yir from "../../../public/videos/yir.webm"
import yahoo from "../../../public/videos/yahoo.webm"

const Products = () => {
  const products = [
    {
      title: "Arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      live: true,
      case: false,
    },
    {
      title: "YIR 2022",
      description:
        "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
      live: true,
      case: true,
    },
    {
      title: "Yahoo!",
      description:
        "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
      live: true,
      case: true,
    },
  ]

  const [pos, setPos] = useState(null)

  const mover = val => {
    setPos(val * 20)
  }

  return (
    <div className='mt-32 relative'>
      {products.map((item, index) => (
        <Product key={index} val={item} mover={mover} count={index} />
      ))}
    </div>
  )
}

export default Products
