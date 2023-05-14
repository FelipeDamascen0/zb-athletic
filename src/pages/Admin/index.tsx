import { Menu } from "@/components/Menu";

const Admin = () => {
  return(
    <div>
      <Menu />
      <div className=" px-5 w-screen h-screen bg-white">
        <div className="px-10 mt-10">
          <p>admin</p>

          <div className="flex justify-center items-center overflow-x-hidden mt-20 sm:mt-24">
            <div className="
              w-36 h-36 rounded-full
              flex justify-center
              border border-black 
              text-center items-center
              font-bold
              text-5xl
              text-black
            ">
              A
            </div>
          </div>
          <div className="flex justify-center items-center mt-4">
            <p className="text-xl text-black">
              Hello, <span className="text-yellow-400">Admin!</span>
            </p>
          </div>

          <div className="flex-1 flex justify-center items-center  mt-7">
            <form className="text-black flex flex-col">
              <input 
                type="email" 
                placeholder="E-mail" 
                className="border-2 border-black px-2 py-4 rounded-md h-8 w-72 mb-5" 
              />
              <input 
                type="password" 
                placeholder="Senha" 
                className="border-2 border-black px-2 py-4 rounded-md h-8 w-72 mb-4" 
              />
    
              <input 
                type="password" 
                placeholder="Confirme sua Senha" 
                className="border-2 border-black px-2 py-4 rounded-md h-8 w-72 mb-4" 
              />

              <input 
                type="submit" 
                placeholder="Enviar" 
                className="bg-yellow-500 px-2 rounded-md h-8 w-72 font-bold hover:bg-yellow-700 duration-500" 
              />
            </form>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Admin;