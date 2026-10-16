import { useState } from "react";
import { BiSolidStar } from "react-icons/bi";
import { LuCheckCheck } from "react-icons/lu";

const App = () => {

  const [nota, setNota] = useState(null);
  const [mostrarNota, setMostrarNota] = useState(false);

  return(
    <div className="bg-stone-950 h-screen flex justify-center items-center">
      <div className="w-80 bg-linear-to-b from-slate-900 to-slate-950 p-7.5 rounded-2xl">
        {
          mostrarNota ? (
            <>
            <div className="w-25px h-25 rounded-full border-white/50 text-white m-auto my-15 flex justify-center items-center">
              <LuCheckCheck size={50}/>
            </div>
            <h3 className=" bg-white/10 rounded-2xl text-orange-500 text-center">Sua nota foi {nota} de 5</h3>
            <p className="text-white text-center nt-4">Obrigado por sua avaliação</p>
            </>
          ) : (
            <>
              <div className="w-10 h-10 rounded-full bg-white/10 flex justify-center items-center">
              <BiSolidStar className="text-orange-500" />
              </div>
              <h3 className="text-white text-xl font-semibold mb-3">Escolha sua nota</h3>
              <p className="text-xs text-white/50 mb-4">Qual a sua nota para o filme?</p>
              <div className="flex justify-between *:w-10 *:h-10 *:bg-white/10 *:rounded-full *:flex *:justify-center *:items-center *:text-white *:hover:bg-orange-500 *:duration-200 *:cursor-pointer *:[&.active]:bg-orange-500">
              <button onClick={() => setNota(1)} className={nota == 1 ? "active" : ""}>1</button>
              <button onClick={() => setNota(2)} className={nota == 2 ? "active" : ""}>2</button>
              <button onClick={() => setNota(3)} className={nota == 3 ? "active" : ""}>3</button>
              <button onClick={() => setNota(4)} className={nota == 4 ? "active" : ""}>4</button>
              <button onClick={() => setNota(5)} className={nota == 5 ? "active" : ""}>5</button>
              </div>
              <button onClick={() => setMostrarNota(true)} disabled={nota == null} className="w-full h-10 bg-white/10 rounded-full flex justify-center items-center text-white not-disabled:hover:bg-orange-500 duration-200 disabled:cursor-not-allowed mt-4">Enviar</button>
            </>
          )
        }
      </div>
    </div>
  );
}

export default App;