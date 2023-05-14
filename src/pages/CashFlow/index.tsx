import { Button } from "@/components/Button";
import { Menu } from "@/components/Menu";
import { ModalRegisterFlow } from "@/components/Modals/RegisterFlow";
import { ModalRegisterStudent } from "@/components/Modals/RegisterStudent";
import { use, useState } from "react";

const Users = () => {

  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState([
    {
      id: 1,
      value: 200,
      description: "Larum laboriosam porro esse fugit nesciunt libero, soluta eius possimus, laborum voluptatum laboruma",
      competenceDate: "20/04/2022",
      tags: [
        "tag1",
        "tag2",
      ],
      createdAt: "20/04/2022"
    },
  ])

  return(
    <div>
      <Menu />
      <div className=" px-2 sm:px-10 flex-wrap justify-center mt-10 items-center w-screen h-screen bg-white ">
        <div className="flex justify-around w-full mt-10">
          <form className="text-black flex flex-col w-full mt-10 sm:w-1/2">
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
          ? <ModalRegisterFlow showModal={showModal} setShowModal={setShowModal} />
          : ''
        }

        <div className="flex flex-col justify-center items-center mt-14">
          {
            users.map((item) => {
              return(
                <div key={item.id} className="bg-[#3DDE61] w-full sm:w-1/2 py-8 px-4 m-5 rounded-md text-black">
                  <div className="flex justify-between ">
                    <h1 className="text-4xl">R${item.value}</h1>
                    <p className="w-1/2 max-h-[100px] overflow-auto">
                      {item.description}
                    </p>
                    <div>
                      <Button text="deletar" className="bg-red-500 px-4 py-1 text-white" />
                    </div>
                  </div>
                  <div className="flex justify-between mt-6">
                    <p>Data de Competencia: <span className="font-bold">{item.competenceDate}</span></p>
                    <div>
                      <div className="flex">
                        {
                          item.tags.map(item => <div className="flex mr-2 px-2 bg-blue-400" key={item}>{item}</div>)
                        }
                      </div>
                    </div>
                    <p>Criado em: <span className="font-bold">{item.createdAt}</span></p>
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