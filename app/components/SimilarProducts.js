'use client'

import { BiLoader } from "react-icons/bi"
import Product from "./Product"


export default function SimilarProducts({}) {
    const products = [
        {
          id: 1,
           title: 'Brown Leather Bag',
           description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
           url: 'https://placehold.jp/30/dd6699/ffffff/600x400png?text=Here+Image',
          price: 2500,
        },
        {
          id: 2,
           title: 'School books',
           description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
           url: 'https://placehold.jp/30/dd6699/ffffff/600x400png?text=Here+Image',
          price: 1999,
        }
      ]
    return (
        <>
        <div>
            <div className="border-b py-1 max-2-[1200px] mx-auto" />

            <div className="max-w-[1200px] mx-auto">
                <div className="font-bold text-2xl py-2 mt-4">Similar sponsored items</div>

                {products.length >0 ?
                    <div className="grid grid-cols-5 gap-4">
                        {products.map(product => (
                            <Product key={product.id} product={product} />
                        ))}
                    </div>
                    : <div className="flex items-center justify-center">
                        <div className="flex items-center justify-center gap-4 font-semibold">
                            <BiLoader size={30} className="text-blue-400 animate-spin" />
                            Loading Products
                        </div>
                    </div>
                }
            </div>
        </div>
        </>
    )
}