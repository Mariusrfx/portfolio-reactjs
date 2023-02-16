import {React} from 'react'
import { useRef } from 'react';
import { useTranslation } from "react-i18next";

function Contact() {
  const {t}=useTranslation();
  const form = useRef();
  const sendEmail = (e) => {
    e.target.reset()
  };
  return (
    <div  name='contact' className='w-full  text-gray-300 bg-[#0a192f] flex justify-center items-center p-4 '>
            
        <form method='POST' ref={form} onSubmit={sendEmail} action="https://getform.io/f/76c1f7ab-1d1c-4e41-b2d7-fb9205ec4481" className='flex flex-col max-w-[600px] w-full pt-20'>
            <div className='pb-8'>
                <p className='text-4xl font-bold  inline border-b-4 border-blue-500'>{t('conttit')}</p>
                <p className='py-5'>{t('contintro')}</p>  
            </div>
       
            <input className='bg-[#ccd6f6] p-2 text-black' type="text" placeholder={t('nameplch')} name="name" required minLength={5} maxLength={35}/>

            <input className='my-4 p-2 bg-[#ccd6f6] text-black'  type="email" placeholder={t('emailplch')}  name="email" required  maxLength={254}  />

            <textarea className='bg-[#ccd6f6] p-2 text-black' name="message" placeholder={t('msgplch')} rows="10" required minLength={5} maxLength={35}></textarea>

           <button className='text-white border-2 hover:bg-blue-500 hover:border-blue-500 px-4 py-3 my-8 mx-auto flex items-center'>{t('btnform')}</button>

        </form>

    </div>
  )
}

export default Contact

