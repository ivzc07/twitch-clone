import clsx from "clsx";

function getRandomNumber() {
    const min = 1000;
    const max = 100000;
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNum.toLocaleString();
}

export default function Card(){
    const data = [
        {
            img : "https://static-cdn.jtvnw.net/ttv-boxart/509658-285x380.jpg",
            title: "Conversaciones",
            tags: ['IRL', 'RPG',]
        },
        {
            img : "https://static-cdn.jtvnw.net/ttv-boxart/263490_IGDB-285x380.jpg",
            title: "Rust",
            tags: []
        },
        {
            img : "https://static-cdn.jtvnw.net/ttv-boxart/509663-285x380.jpg",
            title: "Special Events",
            tags: ['IRL']
        },
        {
            img : "https://static-cdn.jtvnw.net/ttv-boxart/21779-285x380.jpg",
            title: "League Of Legends",
            tags: ['RPG','Estrategia']
        },
        {
            img : "https://static-cdn.jtvnw.net/ttv-boxart/1863222988-285x380.jpg",
            title: "Kings League",
            tags: []
        },
        {
            img : "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-285x380.jpg",
            title: "Minecraft",
            tags: ['Simulacion']
        },
        {
            img : "https://static-cdn.jtvnw.net/ttv-boxart/516575-285x380.jpg",
            title: "Valorant",
            tags: ['Shooter', 'RPG']
        },
        {
            img : "https://static-cdn.jtvnw.net/ttv-boxart/33214-285x380.jpg",
            title: "Fortnite",
            tags: ['IRL', 'RPG','Simulacion']
        },
        {
            img : "https://static-cdn.jtvnw.net/ttv-boxart/509658-285x380.jpg",
            title: "Conversaciones",
            tags: ['IRL', 'RPG',]
        },
        {
            img : "https://static-cdn.jtvnw.net/ttv-boxart/263490_IGDB-285x380.jpg",
            title: "Rust",
            tags: []
        },
        {
            img : "https://static-cdn.jtvnw.net/ttv-boxart/509663-285x380.jpg",
            title: "Special Events",
            tags: ['IRL']
        },
        {
            img : "https://static-cdn.jtvnw.net/ttv-boxart/21779-285x380.jpg",
            title: "League Of Legends",
            tags: ['RPG','Estrategia']
        },
        {
            img : "https://static-cdn.jtvnw.net/ttv-boxart/1863222988-285x380.jpg",
            title: "Kings League",
            tags: []
        },
        {
            img : "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-285x380.jpg",
            title: "Minecraft",
            tags: ['Simulacion']
        },
        {
            img : "https://static-cdn.jtvnw.net/ttv-boxart/516575-285x380.jpg",
            title: "Valorant",
            tags: ['Shooter', 'RPG']
        },
        {
            img : "https://static-cdn.jtvnw.net/ttv-boxart/33214-285x380.jpg",
            title: "Fortnite",
            tags: ['IRL', 'RPG','Simulacion']
        },
        {
            img : "https://static-cdn.jtvnw.net/ttv-boxart/509658-285x380.jpg",
            title: "Conversaciones",
            tags: ['IRL', 'RPG',]
        },
        {
            img : "https://static-cdn.jtvnw.net/ttv-boxart/263490_IGDB-285x380.jpg",
            title: "Rust",
            tags: []
        },
        {
            img : "https://static-cdn.jtvnw.net/ttv-boxart/509663-285x380.jpg",
            title: "Special Events",
            tags: ['IRL']
        },
        {
            img : "https://static-cdn.jtvnw.net/ttv-boxart/21779-285x380.jpg",
            title: "League Of Legends",
            tags: ['RPG','Estrategia']
        },
        {
            img : "https://static-cdn.jtvnw.net/ttv-boxart/1863222988-285x380.jpg",
            title: "Kings League",
            tags: []
        },
        {
            img : "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-285x380.jpg",
            title: "Minecraft",
            tags: ['Simulacion']
        },
        {
            img : "https://static-cdn.jtvnw.net/ttv-boxart/516575-285x380.jpg",
            title: "Valorant",
            tags: ['Shooter', 'RPG']
        },
        {
            img : "https://static-cdn.jtvnw.net/ttv-boxart/33214-285x380.jpg",
            title: "Fortnite",
            tags: ['IRL', 'RPG','Simulacion']
        },
        {
            img : "https://static-cdn.jtvnw.net/ttv-boxart/509658-285x380.jpg",
            title: "Conversaciones",
            tags: ['IRL', 'RPG',]
        },
        {
            img : "https://static-cdn.jtvnw.net/ttv-boxart/263490_IGDB-285x380.jpg",
            title: "Rust",
            tags: []
        },
        {
            img : "https://static-cdn.jtvnw.net/ttv-boxart/509663-285x380.jpg",
            title: "Special Events",
            tags: ['IRL']
        },
        {
            img : "https://static-cdn.jtvnw.net/ttv-boxart/21779-285x380.jpg",
            title: "League Of Legends",
            tags: ['RPG','Estrategia']
        },
       
        
    ]
    return(
        <>
           {
                data.map((data) => {
                    return (
                        <div className="mr-1">
                            <img src={data.img} className="w-[171px] h-[228px]">
                            </img>
                            <p className="text-base inter-font mt-1 text-[#f6f3fc] ">{data.title}</p> 
                            <p className="text-base game-font text-[#f6f3fc] mt-0">{getRandomNumber()} espectadores</p>
                            <div>

                                {
                                    data.tags.map((tag) => {
                                        return(
                                            <button className= 'inter-font bg-[#303037] hover:bg-sky-700 px-2 py-2 text-sm leading-5 rounded-xl font-semibold text-[#f6f3fc] mt-1 mr-1 mb-4'>
                                                {tag}
                                             </button>
                                        )
                                    })
                                }
                            </div>
                        </div>
                               
                        
                    )
                })
           } 

            
           
           
             
        </>
    )
}