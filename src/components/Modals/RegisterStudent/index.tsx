import { Button } from "@/components/Button";

interface ShowModal {
  showModal: boolean;
  setShowModal: (show: boolean) => void
}

export const ModalRegisterStudent = ({setShowModal, showModal}: ShowModal) => {
  return(
    <div className="flex justify-center items-center w-full  mt-40 ">
      <div className={`fixed bg-white w-screen sm:w-1/2 border border-black   ${showModal ? 'block' : 'hidden'}`}>
        <div className="w-full px-5 ">
          <div className="flex justify-between p-5">
            <h1 className="text-black text-4xl">
              Cadastrar <span className="text-yellow-300">Aluno</span>
            </h1>

            <Button className="text-black text-2xl" onClick={() => setShowModal(false)} text="X"/>
          </div>

          <div className="text-black pb-10">
            <form className="mt-8">
              <div className="flex justify-between w-full">
                <label htmlFor="name">Nome<span className="text-red-600 font-bold">*</span></label>
                <input type="text" className="sm:w-96 p-2 border border-black" placeholder="ex: Nome Completo" id="name" />
              </div>

              <div className="flex justify-between w-full mt-5">
                <label htmlFor="cpf">CPF<span className="text-red-600 font-bold">*</span></label>
                <input type="number" className="sm:w-96 p-2 border border-black" placeholder="ex: 123.456.789-00" id="cpf" />
              </div>

              <div className="flex justify-between w-full mt-5">
                <label htmlFor="phone">Número de Telefone<span className="text-red-600 font-bold">*</span></label>
                <input type="tel" className="sm:w-96 p-2 border border-black" placeholder="ex: (62) 99002-0103" id="phone" />
              </div>

              <div className="flex justify-between w-full mt-5">
                <label htmlFor="email">E-mail<span className="text-red-600 font-bold">*</span></label>
                <input type="email" className="sm:w-96 p-2 border border-black" placeholder="ex: exemplo@gmail.com" id="email" />
              </div>

              <div className="flex justify-between items-end self-end mt-10">
                <Button text="Cancelar" className="border border-black px-6 py-2"/>
                <Button text="Cadastrar" className="bg-yellow-500 px-6 py-2" />
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}