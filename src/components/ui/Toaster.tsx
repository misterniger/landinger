'use client'
import { Slide, ToastContainer } from 'react-toastify'

function Toaster() {
    return (
        <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            transition={Slide}
        />
    )
}

export default Toaster
