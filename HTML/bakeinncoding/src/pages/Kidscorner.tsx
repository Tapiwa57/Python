
import Image from "next/image";

export default function Kidscorner(){
    return(
        <section>
            <div>
                <div className= "flex justify-evenly  gap-280 max-w-full mt-0.5 ml-8 mr-8 py-120"style={{backgroundPosition:"center", backgroundSize:"cover",backgroundImage:"url(/images/kidscorner.png)", borderRadius: "10px"}}>
                </div>
            </div>
            <div className="bg-[hsla(205,99%,47%,1)] py-24 rounded-2xl ml-10 mr-10 mb-20 text-white gap-60 flex justify-center">
                <div className="flex justify-center content-between flex-wrap flex-col">
                    <h1 className="text-5xl font-extrabold py-10">Spaceship Maze</h1>
                    <p className="text-3xl mb-5">Help the spaceship through the maze to get <br /> back to earth. Move through levels with <br /> increasing difficulty; each puzzle starts the ship <br />in a different location. </p>
                    <p className="text-3xl mb-5">Develop kids&apos; skills in strategizing, spatial <br />awareness, hand-eye coordination, problem <br />solving and more! Free to play, priceless for <br /> learning.</p>
                    <a href="url=https%3A%2F%2Ftoytheater.com%2Fmaze%2F"><button className="border-0 text-2xl font-bold px-10 py-4 mt-5 text-white bg-[hsla(40,40%,50%,1)] w-80 h-20">PLAY GAMES</button></a>
                </div>
                <div>
                    <Image src="/images/Rectangle-382.png" alt="Puzzle" width={700} height={700}/>
                </div>

            </div>
            <div className="bg-[hsla(355,100%,64%,1)] py-24 rounded-2xl ml-10 mr-10 mb-20 text-white gap-50 flex justify-center">
                <div className="flex justify-center content-between flex-wrap flex-col">
                    <h1 className="text-5xl font-extrabold py-10">Risky Way</h1>
                    <p className="text-3xl mb-5">Risky Way is a free instant game. The highways <br />of the future are risky and if you want to <br /> survive you'll need to be smarter than all of <br />them combined. All you have to do in this <br /> nerve-tingling racing game is click, hold, and let <br />go. Of course, if you want to be an effective <br/> driver who is able to survive you'll have to  <br />know when to click, how long to hold, and only <br /> let go at the appropriate time.</p>
                    <a href="url=https%3A%2F%2Fwww.addictinggames.com%2Faction%2Frisky-way%23url"><button className="border-0 text-2xl font-bold px-10 py-4 mt-5 text-[hsla(355,100%,64%,1)] bg-[hsla(52,48%,94%,1)] w-80 h-20">PLAY GAMES</button></a>
                </div>
                <div>
                    <Image src="/images/Component-6.png" alt="Puzzle" width={700} height={700}/>
                </div>
            </div> 
            <div className="bg-[hsla(248,60%,26%,1)] py-24 rounded-2xl ml-10 mr-10 mb-20 text-white gap-50 flex justify-center">
                <div className="flex justify-center content-between flex-wrap flex-col">
                    <h1 className="text-5xl font-extrabold py-10">Pacman</h1>
                    <p className="text-3xl mb-5">There's nothing like a little old school Pacman <br />game right? The great arcade game Pac Man <br />was ported to the NES in 1988 and you can <br /> play it right here. Never played before?! <br/> What?! Eat all the pellets to complete a stage <br /> while trying to score as many points as possible <br /> by eating fruit and ghosts along the way! But <br /> there's more! Ever wonder how Pacman got <br /> started? Check out the history of Pacman <br /> below and see how it all began.</p>
                    <a href="url=https%3A%2F%2Fwww.pacman1.net%2F"><button className="border-0 text-2xl font-bold px-10 py-4 mt-5 text-white bg-[hsla(40,40%,50%,1)] w-80 h-20">PLAY GAMES</button></a>
                </div>
                <div>
                    <Image src="/images/Component-6.png" alt="Puzzle" width={700} height={700}/>
                </div>
            </div>                                                  
        </section>

    );

}