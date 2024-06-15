export default function ContentButtons () {
    const data = [
        {
            name: 'Juegos',
            img : "https://static-cdn.jtvnw.net/c3-vg/verticals/gaming.svg",
            value: true,    
        },
        {
            name: 'IRL',
            img : "https://static-cdn.jtvnw.net/c3-vg/verticals/irl.svg",
            value: true,    
        },
        {
            name: 'Musica',
            img : "https://static-cdn.jtvnw.net/c3-vg/verticals/music.svg",
            value: true,    
        },
        {
            name: 'Creative',
            img : "https://static-cdn.jtvnw.net/c3-vg/verticals/creative.svg",
            value: true,    
        },
        {
            name: 'Esports',
            img : "https://static-cdn.jtvnw.net/c3-vg/verticals/esports.svg",
            value: true,    
        },           
    ]

    return(
        <>
            {
                data.map((data) => {
                    return (
                        <button className= 'inter-font bg-[#9147ff] hover:bg-sky-700 px-5 py-2 text-2xl  leading-6 rounded  text-[#f6f3fc]  w-[300px] h-[45px] flex justify-between items-center mb-4'>
                            <p>{data.name}</p>
                            <img src={data.img}>
                            </img>
                        </button>
                    )
                })
            }
            
        </>
    )
}