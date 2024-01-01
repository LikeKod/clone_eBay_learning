'use client'

import { useCart } from "@/app/context/cart"
import MainLayout from "@/app/layouts/MainLayout"
import { toast } from "react-toastify"
import SimilarProducts from "../../components/SimilarProducts"


export default function Product({parrams}){

    const cart = useCart()

    const products =
        {
          id: 1,
           title: 'Brown Leather Bag',
           description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
           url: 'https://picsum.photos/id/7',
          price: 2500,
        }
        
    return (
        <>
        <MainLayout>
            <div className="max-w-[1200px] mx-auto">
                <div className="flex px-4 py-10">
                    {products?.url 
                    ? <img className="w-[40%] rounded-lg" src={products?.url+'/280'} /> 
                    : <div className="w-[40%]"></div> }

                    <div className="px-4 w-full">
                        <div className="font-bold text-xl">{products?.title}</div>
                        <div className="text-sm text-gray-700 pt-2">Brand New - Full Waranty</div>
                        <div className="border-b py-1"/>

                        <div className="pt-3 pb-2">
                            <div className="flex items-center">
                                Condition: <span className="font-bold text-[17px] ml-2">New</span>
                            </div>
                        </div>

                        <div className="border-b py-1"/>

                        <div className="pt-3">
                            <div className="w-full flex items-center justify-between">
                                <div className="flex items-center">
                                    Price: 
                                    {products?.price
                                        ? <div className="font-bold text-[20px] ml-2">
                                            GBP £{(products?.price / 100).toFixed(2)}
                                        </div>
                                    : null}
                                </div>

                                <button 
                    onClick={() => {
                      if (cart.isItemAdded) {
                        cart.removeFromCart(products)
                        toast.info('Removed from cart', { autoClose: 3000 })
                      } else {
                        cart.addToCart(products)
                        toast.success('Added to cart', { autoClose: 3000 })
                      }
                    }} 
                    className={`
                    bg-[#e9a321] hover:bg-[#bf851a] text-white py-2 px-20 rounded-full cursor-pointer 
                      ${cart.isItemAdded ? 'bg-[#e9a321] hover:bg-[#bf851a]' : 'bg-[#3498C9] hover:bg-[#0054A0]'}
                    `}
                  >
                      {cart.isItemAdded ? 'Remove From Cart' : 'Add To Cart'}
                  </button>
                            </div>
                        </div>
                        <div className="border-b py-1">
                            <div className="pt-3">
                                <div className="font-semibold pb-1">Description:</div>
                                <div className="text-sm">{products?.description}</div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            
            <SimilarProducts></SimilarProducts>
        </MainLayout>
        </>
    )
}