import React, { useEffect } from 'react'

const Webwallet = () => {
  useEffect(()=>{
    // const type1 = document.getElementsByClassName('type1')
    // const type2 = document.getElementsByClassName('type2')
    // const type3 = document.getElementsByClassName('type3')
    // setInterval(() => {
    //   type1.classList.remove('hidden')
    //   type2.classList.add('hidden')
    //   type3.classList.add('hidden')
    // }, 4000);
  },)

return (
<div className=''>

  <div className="bg-[#52b69a] p-8 w-full lg:h-[78vh]x md:h-[65vh]x h-maxx h-[600px] flex justify-center items-center ">
    <div className="max-w-[1040px] w-full flex justify-between md:flex-row flex-col-reverse ">
      <div className="md:w-[48%] text-white mb-10">
        <h1 className="text-5xl my-6 font-semibold">Web Wallet  </h1>
        <h2 className="text-3xl w-full">Store, manage, and transact cryptocurrencies with</h2>
      </div>
      <div className="md:w-[47%] flex items-center ">
        <img src="./img/Web-Wallet.webp" alt="" className="m-auto w-[90%]  " />
      </div>
    </div>
  </div>

  <div className="flex justify-center ">
    
    <div className="max-w-[1040px] px-4 lg:p-0">
      <div className="text-lg">

        <div className="box1">
          <div className="md:w-[44%] ">
            <img src="" alt="" className="" />
          </div>
          <div className="md:w-[44%] ">
            <h2 className="title2">Accessibility</h2>
            <p className="">
            Web wallets are convenient because they can be accessed from anywhere with an internet connection. Users only need a web browser and their login credentials to access their wallet and manage their funds.
            </p>
          </div>
        </div>
        
        <div className="box2">
          <div className="md:w-[44%] ">
            <img src="" alt="" className="" />
          </div>
          <div className="md:w-[44%] ">
            <h2 className="title2">User-Friendly</h2>
            <p className="">
            Many web wallets are designed to be user-friendly and suitable for beginners in the cryptocurrency space. They often have intuitive interfaces and easy-to-understand features.
            </p>
          </div>
        </div>
        
        <div className="box1">
          <div className="md:w-[44%] ">
            <img src="" alt="" className="" />
          </div>
          <div className="md:w-[44%] ">
            <h2 className="title2">Private Keys</h2>
            <p className="">
            In cryptocurrency, private keys are essential for accessing and controlling your funds. Web wallets typically store your private keys on the server, which means users rely on the security measures implemented by the wallet provider to protect their assets. Some web wallets offer additional security features like two-factor authentication (2FA) to enhance protection.
            </p>
          </div>
        </div>
        
        <div className="box2">
          <div className="md:w-[44%] ">
            <img src="" alt="" className="" />
          </div>
          <div className="md:w-[44%] ">
            <h2 className="title2">Security Concerns</h2>
            <p className="">
            Web wallets come with security concerns, as they are connected to the internet and controlled by a third-party provider. If the wallet provider's security measures are compromised or if the provider becomes a target of a cyberattack, users' funds could be at risk. Therefore, it's crucial to choose a reputable and secure web wallet provider.
            </p>
          </div>
        </div>
        
        <div className="box1">
          <div className="md:w-[44%] ">
            <img src="" alt="" className="" />
          </div>
          <div className="md:w-[44%] ">
            <h2 className="title2">Custodial vs. Non-Custodial</h2>
            <p className="">
            Web wallets can be categorized into custodial and non-custodial types. Custodial web wallets store users' private keys on their behalf, while non-custodial web wallets allow users to retain control of their private keys. Non-custodial web wallets are generally considered more secure as users have full control over their funds.
            </p>
          </div>
        </div>
        
        <div className="box2">
          <div className="md:w-[44%] ">
            <img src="" alt="" className="" />
          </div>
          <div className="md:w-[44%] ">
            <h2 className="title2">Popular Web Wallets</h2>
            <p className="">
            Some popular web wallets in the cryptocurrency space include Coinbase, Binance, Blockchain.info, and MyEtherWallet (MEW). Each of these wallets supports different cryptocurrencies and offers varying levels of security and features.
            </p>
          </div>
        </div>
        
        <div className="box1">
          <div className="md:w-[44%] ">
            <img src="" alt="" className="" />
          </div>
          <div className="md:w-[44%] ">
            <h2 className="title2">Backup and Recovery</h2>
            <p className="">
            Users of web wallets should always set up backup and recovery options in case they forget their login credentials or encounter issues with the wallet provider. This usually involves creating backup phrases or security questions.
            </p>
          </div>
        </div>  

        <div className="box2">
          <div className="md:w-[44%] ">
            <img src="" alt="" className="" />
          </div>
          <div className="md:w-[44%] ">
            <h2 className="title2">Risk Management</h2>
            <p className="">
            While web wallets are convenient, users should exercise caution and follow best practices for security. It's advisable to keep only small amounts of cryptocurrency in a web wallet for everyday use and store larger amounts in more secure storage options like hardware wallets or paper wallets.
            </p>
          </div>
        </div>  
      </div>

      <div className="my-24">
        <p className="text-lg">
        In summary, web wallets are a convenient way for individuals to manage their cryptocurrencies online. However, users should carefully choose a reputable provider, enable additional security measures, and be aware of the security risks associated with storing cryptocurrencies in web wallets.
        </p>
      </div>
    </div>
  </div>
</div>
)}
export default Webwallet
