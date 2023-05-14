import { Button } from "@/components/Button";

interface ShowModal {
  showModal: boolean;
  setShowModal: (show: boolean) => void
}

export const ModalRegisterFlow = ({setShowModal, showModal}: ShowModal) => {
  return(
    <div className="flex justify-center items-center w-full mt-40 ">
      <div className={`fixed bg-white w-screen sm:w-1/2 border border-black  ${showModal ? 'block' : 'hidden'}`}>
        <div className="w-full px-5">
          <div className="flex justify-between p-5 border-b border-black">
            <h1 className="text-black text-4xl">
              Adicionar <span className="text-yellow-300">Registro</span>
            </h1>

            <Button className="text-black text-2xl" onClick={() => setShowModal(false)} text="X"/>
          </div>

          <div className="text-black pb-10">
            <form className="mt-8 text-center">
              <div className="flex justify-around w-full">
                <label htmlFor="name">Montante<span className="text-red-600 font-bold">*</span></label>
                <div>
                  R$:
                  <input type="text" className=" px-2 w-40 rounded-md border border-black" id="name" />
                </div>
              </div>

              <div className="flex justify-around w-full mt-5">
                <label htmlFor="cpf">Data de Competencia<span className="text-red-600 font-bold">*</span></label>
                <div>
                  <input type="text" placeholder="DD" className=" px-2 w-12 rounded-md border border-black" id="name" />
                  <input type="text" placeholder="MM" className=" px-2 w-12 rounded-md border border-black mx-3" id="name" />
                  <input type="text" placeholder="AAAA" className=" px-2 w-16 rounded-md border border-black" id="name" />
                </div>
              </div>

              <div className="flex justify-around w-full mt-5">
                <label htmlFor="phone">Tipo<span className="text-red-600 font-bold">*</span></label>
                <div>
                  <input type="checkbox" className=" px-2 w-12 rounded-md border border-black" id="gasto" />
                  <label htmlFor="gasto" className="text-xl">Gasto</label>
                  <input type="checkbox" className=" px-2 w-12 rounded-md border border-black" id="receita" />
                  <label htmlFor="receita" className="text-xl">Receita</label>
                </div>
              </div>

              <div className="flex justify-around w-full mt-5">
                <label htmlFor="email">Descrição<span className="text-red-600 font-bold">*</span></label>
                <div>
                  <input type="text" placeholder="ex: Uma Camisa" className=" px-2 w-56 rounded-md border border-black" id="name" />
                </div>
              </div>

              <div className="flex justify-around items-end self-end mt-10">
                <Button text="Cancelar" onClick={() => setShowModal(false)} className="border border-black px-6 py-2"/>
                <Button text="Cadastrar" className="bg-yellow-500 px-6 py-2" />
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}