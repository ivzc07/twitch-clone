import clsx from 'clsx';
const data = [
    {
        text: "Iniciar Sesion",
        value: false,         
    },
    {
        text: "Registrarse",
        value:true,
    }
]

export default function ButtonsNavBar(){
    return(
        <>
            <div className="h-[40] w-[40px] bg-[#18181a] hover:bg-[#303037] p-1 rounded hidden lg:block">
                    <svg viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#f4edff" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0001 3C12.3334 3 12.6449 3.16613 12.8306 3.443L16.6106 9.07917L21.2523 3.85213C21.5515 3.51525 22.039 3.42002 22.4429 3.61953C22.8469 3.81904 23.0675 4.26404 22.9818 4.70634L20.2956 18.5706C20.0223 19.9812 18.7872 21 17.3504 21H6.64977C5.21293 21 3.97784 19.9812 3.70454 18.5706L1.01833 4.70634C0.932635 4.26404 1.15329 3.81904 1.55723 3.61953C1.96117 3.42002 2.44865 3.51525 2.74781 3.85213L7.38953 9.07917L11.1696 3.443C11.3553 3.16613 11.6667 3 12.0001 3ZM12.0001 5.79533L8.33059 11.2667C8.1582 11.5237 7.8765 11.6865 7.56772 11.7074C7.25893 11.7283 6.95785 11.6051 6.75234 11.3737L3.67615 7.90958L5.66802 18.1902C5.75913 18.6604 6.17082 19 6.64977 19H17.3504C17.8293 19 18.241 18.6604 18.3321 18.1902L20.324 7.90958L17.2478 11.3737C17.0423 11.6051 16.7412 11.7283 16.4324 11.7074C16.1236 11.6865 15.842 11.5237 15.6696 11.2667L12.0001 5.79533Z" fill="#f4edff"></path> </g></svg>
            </div>
            {
                data.map((button) => {
                    return(
                        <div className= {clsx('inter-font bg-[#303037] hover:bg-sky-700 px-5 py-2 text-base leading-5 rounded font-semibold text-[#f6f3fc] mx-3  hidden lg:block', {'bg-[#9147ff]': button.value})}>
                                {button.text}
                        </div>
                    )    
                })
            }
            <div className="h-[40] w-[40px] bg-[#18181a] hover:bg-[#303037] p-1 rounded hidden lg:block">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#efeff1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </div>
        </>
    )
}