import {React} from 'react'

function Contact() {

  return (
    <div  name='contact' className='w-full h-screen text-gray-300 bg-[#0a192f] flex justify-center items-center p-4'>
        
        <form method='POST' action="https://getform.io/f/76c1f7ab-1d1c-4e41-b2d7-fb9205ec4481" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold  inline border-b-4 border-blue-500 py-4'>Contacto</p>
                <p className='py-8'>//Puedes contactarme a través de este formulario o a través de linkedin</p>
            </div>
            
            <input className='bg-[#ccd6f6] p-2 text-black' type="text" placeholder='Nombre' name="name" required minLength={5} maxLength={35}/>

            <input className='my-4 p-2 bg-[#ccd6f6] text-black'  type="email" placeholder='Email' name="email" required  maxLength={254}  />

            <textarea className='bg-[#ccd6f6] p-2 text-black' name="message" placeholder='Mensaje' rows="10" required minLength={5} maxLength={35}></textarea>

           <button className='text-white border-2 hover:bg-blue-500 hover:border-blue-500 px-4 py-3 my-8 mx-auto flex items-center'>Enviar</button>

        </form>

    </div>
  )
}

export default Contact