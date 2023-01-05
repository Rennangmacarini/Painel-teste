import Image from "next/image";

import { useKeenSlider } from "keen-slider/react";

import { HomeContainer, Product } from "../styles/pages/home";

import camiseta1 from "../assets/camisetas/carneOne.jpg";
import camiseta2 from "../assets/camisetas/carneTwo.jpg";
import camiseta3 from "../assets/camisetas/carneThree.jpg";

import "keen-slider/keen-slider.min.css"
import { stripe } from "../lib/stripe";
import { GetServerSideProps } from "next";
import Stripe from "stripe";

export default function Home(props) {

  const [ sliderRef ] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })

  return (
    <HomeContainer ref={sliderRef} className= "keen-slider">
      <pre>{JSON.stringify(props.list)}</pre>
      
      <Product className= "keen-slider__slide number-slide1">
        <Image src={camiseta1} width={520} height={480} alt="" />

        <footer>
          <strong>Produtos de carne</strong>
          <span>R$ 79,98</span>
        </footer>
      </Product>

      <Product className= "keen-slider__slide number-slide2">
        <Image src={camiseta2} width={520} height={480} alt="" />

        <footer>
          <strong>Produtos de carne</strong>
          <span>R$ 79,98</span>
        </footer>
      </Product>

      <Product className= "keen-slider__slide number-slide3">
        <Image src={camiseta3} width={520} height={480} alt="" />

        <footer>
          <strong>Produtos de carne</strong>
          <span>R$ 79,98</span>
        </footer>
      </Product>

            <Product className= "keen-slider__slide number-slide4">
        <Image src={camiseta3} width={520} height={480} alt="" />

        <footer>
          <strong>Produtos de carne</strong>
          <span>R$ 79,98</span>
        </footer>
      </Product>

    </HomeContainer>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.defaut_price']
  })
  

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price


    return{
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount / 100,
    }
  })


  return{ 
    props: {
      products
    }
  }
}