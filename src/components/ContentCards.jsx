import Card from "./Card"
export default function ContentCards() {
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

    return (
        <>
            {
                 data.map((data) => {
                    return(
                        <Card
                            img = {data.img}
                            title={data.title}
                            tags={data.tags}
                        />
                    )
                })
            }
        </>
    )

}