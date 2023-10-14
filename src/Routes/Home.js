import React from 'react'

const Home = () => {


return (
<div className='overflow-hidden'>
  <div className="bg-[#52b69a] p-8 w-full lg:h-[78vh] md:h-[65vh] h-max flex justify-center items-center ">
    <div className="max-w-[1040px] flex justify-between md:flex-row flex-col-reverse ">
      <div className="md:w-[48%] text-white mb-10">
        <h1 className="text-5xl my-6 font-semibold">Cash LLC: Your Gateway to Seamless Crypto Experience</h1>
        <p className="text-justify font-medium md:text-lg">
        From the heart of St. Vincent and Grenada, Cash LLC introduces an integrated suite of crypto wallets designed for every kind of user. Whether you lean toward the tangible security of paper, the flexibility of web access, or the convenience of mobile, we have tailored a solution just for you.
        </p>
      </div>
      <div className="md:w-[47%] flex items-center ">
        <img src="https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/hfpqyV7B-IMG-Dubai-UAE.jpg" alt="" className="m-auto  " />
      </div>
    </div>
  </div>
{/* 1 */}

  <div class="flex justify-center my-8 ">
    <div class="max-w-[1040px] lg:w-[65%] md:w-[75%] px-8 flex justify-center flex-col items-center ">
      <div class="mb-10 text-center">
        <h2 class="text-4xl lg:text-5xl font-semibold my-4 ">Discover, Engage, Transact</h2>
        <div class="h-max flex justify-center ">
          <img src="https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/hfpqyV7B-IMG-Dubai-UAE.jpg" alt="" class="w-[100%] lg:w-[80%] my-2 rounded-sm" />
        </div>
        <p class="text-lg text-center w-[95%] lg:w-full mx-auto ">
        Each of our wallets is designed with the user at its core, providing unparalleled ease of use, top-tier security, and complete autonomy over your funds. Delve into each offering and choose the right fit for your crypto journey.
        </p>
      </div>
    </div>
  </div>
</div>
)}
export default Home
