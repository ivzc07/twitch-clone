import UserInfo from "./UserInfo"
export default function SideBar (){
    return(
        <aside className="col-start-1 col-end-2 row-start-2 row-end-3 bg-[#1f2024] hidden lg:block" >
            <div className="h-[42px] w-[342] inter-font text-1xl text-[#f6f3fc] p-4 mt-1 flex justify-between items-center bg-[#1f2024]">
                <p>CANALES RECOMENDADOS</p>
            </div>
            <UserInfo />
        </aside>
    )
}