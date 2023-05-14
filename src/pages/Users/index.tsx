import { Button } from "@/components/Button";
import { Menu } from "@/components/Menu";
import { ModalRegisterStudent } from "@/components/Modals/RegisterStudent";
import { use, useState } from "react";

const Users = () => {

  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Teste",
      cpf: "***.209.***-**",
      phone: "(22) 98339-0090",
      email: "email@email.com"
    },
    {
      id: 2,
      name: "Teste",
      cpf: "***.209.***-**",
      phone: "(22) 98339-0090",
      email: "email@email.com"
    },
    {
      id: 3,
      name: "Teste",
      cpf: "***.209.***-**",
      phone: "(22) 98339-0090",
      email: "email@email.com"
    },
    {
      id: 4,
      name: "Teste",
      cpf: "***.209.***-**",
      phone: "(22) 98339-0090",
      email: "email@email.com"
    },
  ])

  return(
    <div>
      <Menu />
      <div className=" px-2 sm:px-10 flex-wrap justify-center items-center w-screen bg-white mt-10">
        <div className="flex justify-around w-full">
          <form className="text-black flex flex-col w-full sm:w-1/2 mt-10">
            <input 
              type="text" 
              placeholder="Pesquisar..." 
              className="border border-black px-2 py-1 rounded-md w-full mb-5" 
            />
          </form>   
        </div>
        <div className="flex justify-around sm:px-24">
          <Button onClick={() => setShowModal(true)} text="Cadastrar" className="bg-green-500 px-4 py-2" />
          <Button text="Filtrar" className="bg-yellow-500 px-4 py-2" />
        </div>

        {
          showModal 
          ? <ModalRegisterStudent showModal={showModal} setShowModal={setShowModal} />
          : ''
        }

        <div className="flex flex-col justify-center items-center mt-14">
          {
            users.map((item) => {
              return(
                <div key={item.id} className="bg-[#FEE250] w-full sm:w-1/2 py-8 px-4 m-5">
                  <div className="flex justify-between ">
                    <h1 className="text-4xl">{item.name}</h1>
                    <div>
                      <Button text="editar" className="bg-green-500 px-4 py-1 mr-2" />
                      <Button text="deletar" className="bg-red-500 px-4 py-1" />
                    </div>
                  </div>
                  <div className="sm:flex justify-around mt-5 text-black">
                    <h2>CPF: <span>{item.cpf}</span></h2>
                    <h2>E-mail: <span>{item.email}</span></h2>
                    <h2>Número: <span>{item.phone}</span></h2>
                  </div>  
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  );
}

export default Users;