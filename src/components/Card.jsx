import clsx from "clsx";

function getRandomNumber() {
    const min = 1000;
    const max = 100000;
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNum.toLocaleString();
}

export default function Card(props){
    
    return(
        <>
            {
                <div className="mr-1">
                            <img src={props.img} className="w-[171px] h-[228px]">
                            </img>
                            <p className="text-base inter-font mt-1 text-[#f6f3fc] ">{props.title}</p> 
                            <p className="text-base game-font text-[#f6f3fc] mt-0">{getRandomNumber()} espectadores</p>
                            <div>

                                {
                                    props.tags.map((tag) => {
                                        return(
                                            <button className= 'inter-font bg-[#303037] hover:bg-sky-700 px-2 py-2 text-sm leading-5 rounded-xl font-semibold text-[#f6f3fc] mt-1 mr-1 mb-4'>
                                                {tag}
                                             </button>
                                        )
                                    })
                                }
                            </div>
                </div>
            }
        </>
    )
}