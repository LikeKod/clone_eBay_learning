'use client'

import TextInput from "../components/TextInput"
import MainLayout from "../layouts/MainLayout"
// import { AiOutlineLoading3Quarters } from "react-icons/ai"


export default function Adress() {
    return (
        <>
            <MainLayout>
                <div id="AdressPge" className="mt-4 max-w-[600px] mx-auto px-2">
                    <div className="mx-auto bg-white rounded-lg p-3">

                    <div className="text-xl text-bold mb-2">Adress Details</div>

                    <form>
                        <div className="mb-4">
                            <TextInput 
                                className="w-full"
                                string={'TEST'}
                                placeholder={'Name'}
                                error="This is an error"
                            />
                        </div>

                        <button className="mt-6 w-full text-white text-lg font-semibold p-3 rounded bg-blue-600">
                            Update Adress
                        </button>
                    </form>
                    </div>
                </div>
            </MainLayout>
        </>
    )
}
