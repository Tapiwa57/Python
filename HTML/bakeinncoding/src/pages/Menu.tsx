

import Link from "next/link";
import Image from "next/image";

export default function Menuform() {
    return(
    <section>
    <div className="flex justify-center content-center flex-wrap flex-row gap-20 text-blue-950 mb-5">
        <div className="flex justify-center content-center flex-wrap flex-col gap-5">
            <div className="">
                <Image src="/images/Rectangle-34700.png" alt="#" width={600} height={50}/>
            </div>
            <div className="flex gap-5">
                <Image src="/images/Rectangle-34700.png" alt="#" width={290} height={50}/>
                <Image src="/images/Rectangle-34700.png" alt="#" width={290} height={50}/>
            </div>
            <div className="flex gap-5">
                <Image src="/images/Rectangle-34700.png" alt="#" width={290} height={50}/>
                <Image src="/images/Rectangle-34700.png" alt="#" width={290} height={50}/>
            </div>
        </div>
        <div className="flex flex-col">
        <div>
            <div className="flex justify-between">
                <h1 className="text-3xl font-extrabold">Sweet ShortBread</h1>
                <Link href="/"><Image src="/images/Group-23.png" alt="#" width={50} height={50}/></Link>
            </div>
            <div className="flex gap-20 p-7">
                <div className="flex gap-4 ">
                    <Image src="/images/Ellipse-4.png" alt="#" width={50} height={50}/>
                    <h2 className="font-extrabold">5 Minutes</h2>
                </div>
                <div className="flex gap-4">
                    <Image src="/images/Ellipse-5.png" alt="#" width={50} height={50}/>
                    <h2 className="font-extrabold">6 people</h2>
                </div>
            </div>
            <div>
                <h1 className="text-3xl font-extrabold py-5">Ingredients</h1>
                <div className="flex text-2xl gap-6">
                    <div className="">
                        <p>½ cup olive oil <br /> <br /> ½ cup ranch dressing <br /> <br />3 tablespoons Worcestershire sauce <br /> <br />1 tablespoon minced fresh rosemary</p>
                    </div>
                    <div>
                        <p>2 teaspoons salt <br /> <br />1 teaspoon lemon juice <br /> <br />1 teaspoon white vinegar <br /> <br />¼ teaspoon ground black pepper</p>

                    </div>
                </div>
            </div>
        </div>
        <div>
            <h1  className="text-3xl font-extrabold py-7">Direction</h1>
            <div className="flex text-2xl gap-6">
                <div>
                    <h2 className="font-extrabold py-4">Step 1</h2>
                    <p>In a medium bowl, stir together the olive oil, <br /> ranch dressing, Worcestershire sauce, <br />rosemary, salt, lemon juice, white vinegar, <br /> pepper, and sugar. Let stand for 5 minutes. <br /> Place chicken in the bowl, and stir to coat <br /> with the marinade. Cover and refrigerate for <br /> 30 minutes.</p>
                </div>
                <div>
                    <h2 className="font-extrabold py-4">Step 2</h2>
                    <p>`Preheat the grill for medium-high heat. Thread <br /> chicken onto skewers and discard marinade.</p>

                </div>
            </div>
            <div className="text-2xl py-5">
                <h2 className="font-extrabold py-6">Step 3</h2>
                <p>Lightly oil the grill grate. Grill skewers for 8 to <br /> 12 minutes, or until the chicken is no longer <br /> pink in the center, and the juices run clear.</p>
            </div>
        </div>
        </div>

    </div>
   </section>
    );
}