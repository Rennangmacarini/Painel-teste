import { useRouter } from "next/router";
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/products";

export default function Product(){
    const { query } = useRouter()

    return(
        <ProductContainer>
            <ImageContainer>

            </ImageContainer>

            <ProductDetails>
                <h1>Camiseta x</h1>
                <span>Rs 79,90</span>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis distinctio minus alias similique cupiditate deleniti illo doloribus assumenda at ullam sint dolorum commodi vel voluptatibus culpa, sit saepe id cumque.</p>

                <button>
                    Comprar Agora
                </button>
            </ProductDetails>
        </ProductContainer>
    )
}