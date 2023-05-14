import { Logo } from "@/components/Logo";

const Login =  () => {
  return(
    <div className="sm:flex h-screen">

      <div className="p-10 flex justify-center items-center text-8xl">
        <Logo font='8' />
      </div>

      <div className="flex-1 flex justify-center items-center sm:bg-white">
        <form className="text-black flex flex-col">
          <input 
            type="email" 
            placeholder="E-mail" 
            className="border-2 border-black px-2 rounded-md h-8 w-72 mb-5" 
          />
          <input 
            type="password" 
            placeholder="Senha" 
            className="border-2 border-black px-2 rounded-md h-8 w-72 mb-4" 
          />
          <input 
            type="submit" 
            placeholder="Enviar" 
            className="bg-yellow-500 px-2 rounded-md h-8 w-72 font-bold hover:bg-yellow-700 duration-500" 
          />
        </form>
      </div>
    </div>
  );
}

export default Login;