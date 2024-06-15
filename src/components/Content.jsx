import ContentButtons from "./ContentButtons"
import Card from "./Card"
export default function Content () {
    return(
        <div className="cols-start-2 cols-end-3 row-start-2 row-end-3 p-8 bg-[#0e0e0f]   ">
            <p className="inter-font text-6xl text-[#f6f3fc] pb-6 ">Explorar</p>
            <div className="flex flex-wrap justify-between">
                
                <ContentButtons />
                
            </div>
            <div className="flex flex-row">
                <p className="inter-font text-2xl text-[#9147ff] mt-8 mr-8 border-b-2 border-[#9147ff]">Categorias</p>
                <p className="inter-font text-2xl text-[#f6f3fc] mt-8">Canales en Directo</p>
            </div>
            <input className='w-[356px] h-[45px] rounded-lg mt-8 bg-transparent p-[0.5rem] border-2 focus:ring-8 ring-[#5c19c5]  ' type="text" placeholder="Buscar etiquetas de categoria" />
            <div className="mt-8 flex flex-wrap">
                <Card/>
            </div>
        </div>
       
    )
}