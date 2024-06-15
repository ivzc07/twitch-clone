import ButtonsNavBar from "./ButtonsNavBar"
export default function NavBar (){
    return(
        <navbar className="col-start-1 col-end-3 bg-[#18181a] grid grid-cols-[25%_1fr_25%]" >
            <div className="col-start-1 col-start-end-2  flex flex-row items-center  ml-4">
                <img className='h-[40px] w-[40px]'src="https://cdn-icons-png.flaticon.com/512/5968/5968819.png"></img>
                <p className="inter-font text-2xl text-[#f6f3fc] ml-8 hidden sm:block">Explorar</p>
                <svg fill="#f6f3fc" height="20px" width="93px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32.055 32.055" xml:space="preserve" stroke="#f6f3fc" transform="rotate(90)" stroke-width="0.00032055"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M3.968,12.061C1.775,12.061,0,13.835,0,16.027c0,2.192,1.773,3.967,3.968,3.967c2.189,0,3.966-1.772,3.966-3.967 C7.934,13.835,6.157,12.061,3.968,12.061z M16.233,12.061c-2.188,0-3.968,1.773-3.968,3.965c0,2.192,1.778,3.967,3.968,3.967 s3.97-1.772,3.97-3.967C20.201,13.835,18.423,12.061,16.233,12.061z M28.09,12.061c-2.192,0-3.969,1.774-3.969,3.967 c0,2.19,1.774,3.965,3.969,3.965c2.188,0,3.965-1.772,3.965-3.965S30.278,12.061,28.09,12.061z"></path> </g> </g></svg>
                
            </div>
            <div className="inter-font col-start-2 col-start-end-3 flex justify-center items-center flex-row-reverse">
                
                <div className="w-[34px] h-[47px] flex justify-center items-center bg-[#303037] rounded-tr-lg rounded-br-lg">
                    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#f6f3fc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </div>
                <input className='w-[356px] h-[45px] rounded-lg rounded-br-none rounded-tr-none bg-transparent p-[0.5rem] border-2 focus:ring-8 ring-[#5c19c5]  ' type="text" placeholder="Search" />
            </div>
            <div className="col-start-3 col-start-end-4 flex justify-end items-center mx-3 ">
                <ButtonsNavBar />
            </div>
            
        </navbar>
    )
}