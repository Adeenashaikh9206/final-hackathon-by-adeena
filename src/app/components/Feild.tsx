import React from 'react'

function Field() {
  return (
      <div>
         <section className="bg-[#FAF4F4] py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="text-center">
              <h4 className="text-xl font-semibold text-black">Free Delivery</h4>
              <p className="text-gray-600 text-sm mt-2">
                For all orders over $50, consectetur <br /> adipim scing elit.
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-semibold text-black">90 Days Return</h4>
              <p className="text-gray-600 text-sm mt-2">
                If goods have problems, consectetur <br /> adipim scing elit.
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-semibold text-black">Secure Payment</h4>
              <p className="text-gray-600 text-sm mt-2">
                100% secure payment, consectetur <br /> adipim scing elit.
              </p>
            </div>
          </div>
        </section>
  
  
      </div>
    )
  }
  

export default Field