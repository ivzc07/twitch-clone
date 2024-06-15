import clsx from "clsx"

function randomViewsNumber (){
    return (Math.floor(Math.random() * 50) + 1).toString()
}
export default function UserInfo () {
    const data = [
        {
            userName : 'ibai',
            game: 'Rust',
        },
        {
            
            userName : 'Combex7',
            game: 'FIFA 17',
    
        },
        {
        
            userName : 'ogKroma',
            game: 'Apex',
           
        },
        {
            userName : 'ryoo',
            game: 'Rust',
            
        },
        {
            
            userName : 'Faker',
            game: 'Fable',
            
        },
        {
            userName : 'ZeiktoTv',
            game: 'Rust',
            
        },
        {
            userName : 'ibai',
            game: 'Rust',
        },
        {
            userName : 'LithiumLi',
            game: 'Rust',
            
        },
        {
            
            userName : 'zianos',
            game: 'Rust',
            
        },
        {
            userName : 'dolceliana',
            game: 'Rust',
            
        },{
            
            userName : 'zianos',
            game: 'Rust',
            
        },
        {
            userName : 'dolceliana',
            game: 'Rust',
            
        },
        {
            userName : 'dolceliana',
            game: 'Rust',
            
        },{
            
            userName : 'zianos',
            game: 'Rust',
            
        },
        {
            userName : 'dolceliana',
            game: 'Rust',
            
        },
        {
            
            userName : 'zianos',
            game: 'Rust',
            
        },
        {
            userName : 'dolceliana',
            game: 'Rust',
            
        }
    ]
    return (
        <>
            {
                data.map((data) => {
                    return (
                        <div className="h-[67px] w-[342px] px-4 py-2 hover:bg-[#303037]">
                            <div className="h-[54px] w-[310px] flex flex-row items-center justify-between">
                                <div className="flex flex-row items-center">
                                    <img className="h-[40px] w-[40px] rounded-full mr-4"src= {`https://api.dicebear.com/8.x/pixel-art/svg?seed=${data.userName}`} >
                                    </img>
                                    <div className="h-[51px] w-[120px] inline">
                                        <p className="text-base inter-font text-[#f6f3fc] ">{data.userName}</p>
                                        <p className="text-base game-font text-[#f6f3fc] ">{data.game}</p> 
                                    </div>
                                </div>
                                <div className="h-[30px] w-[54px] flex flex-row items-center justify-end">
                                    <svg width="200px" height="166px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#eb0201"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 9.5C13.3807 9.5 14.5 10.6193 14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5Z" fill="#eb0201"></path> </g></svg>
                                    <p className="text-lg inter-font text-[#f6f3fc] ">{randomViewsNumber()}k</p>
                                </div>
                            </div>
                        
                        </div>                        
                    )
                })
            }

        </>
    )
}