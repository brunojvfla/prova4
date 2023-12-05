import Image from 'next/image'
import logo from '@/img/Logo.png'
import rosa from '@/img/rosa.png'

export default function Home() {
  return (
    <main className='bg-zinc-800 lg:bg-background flex flex-col max-h-screen h-screen lg:justify-center lg:items-center '>
      <div className=' lg:bg-white lg:p-10 lg:pt-1 lg:mt-20 lg:rounded-e-3xl	 flex  flex-col justify-center items-center '>
        <Image className=' lg:sr-only mt-28	' src={logo} alt="cover" width={180} />
        <div>
          <Image className=' lg:w-60 lg:mt-24 sr-only sm:not-sr-only lg:ml-8' src={rosa} alt="cover" width={180} />

          <div className='flex flex-1 flex-col justify-center items-center  mt-32 gap-6'>
            <div>
              <h1 className='text-white lg:text-black	'>Nome de usuário</h1>
              <input type="text" className='bg-zinc-700 lg:bg-white border lg:border-slate-500 rounded-md w-80 h-14 	' />
            </div>
            <div>
              <h1 className='text-white lg:text-black	'>Senha</h1>
              <input type="text" className='bg-zinc-700 lg:bg-white border lg:border-slate-500	 rounded-md	w-80	h-14	' />
            </div>
            <div className='flex flex-1 flex-col justify-center items-center gap-3.5'>
              <button className='bg-fuchsia-600 text-white rounded-md w-80 h-14 font-bold'>Entrar</button>
              <button className='bg-white lg:h-10 lg:bg-gray-300 lg:font-bold text-fuchsia-600 rounded-md w-80 h-14 font-bold'>Esqueci minha senha</button>
            </div>
          </div>
        </div>
      </div>
    </main>

  )
}
