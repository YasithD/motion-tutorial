import { ParralaxContent } from "./components";
import { MdArrowOutward } from "react-icons/md";

function App() {
    return (
        <div className="bg-white w-screen">
            <ParralaxContent imgUrl="/sky.jpg" title="Fly in the sky" subtitle="Explore the beauty of the sky">
                <div className="grid grid-cols-6 py-8">
                    <p className="text-3xl text-black font-bold text-center col-span-2">Explore the sky</p>
                    <div className="col-span-4">
                        <p className="text-md text-black">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta veritatis distinctio sed
                            consectetur quidem. Eum harum, minima magnam corporis accusantium, esse ipsa in accusamus
                            aliquam facere voluptates ut excepturi cum!
                        </p>
                        <button className="flex items-center gap-2 mt-4">
                            Learn More
                            <MdArrowOutward />
                        </button>
                    </div>
                </div>
            </ParralaxContent>
            <ParralaxContent imgUrl="/sky.jpg" title="Dive into the ocean" subtitle="Explore the beauty of the ocean">
                <div className="grid grid-cols-6 py-8">
                    <p className="text-3xl text-black font-bold text-center col-span-2">Explore the sky</p>
                    <div className="col-span-4">
                        <p className="text-md text-black">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta veritatis distinctio sed
                            consectetur quidem. Eum harum, minima magnam corporis accusantium, esse ipsa in accusamus
                            aliquam facere voluptates ut excepturi cum!
                        </p>
                        <button className="flex items-center gap-2 mt-4">
                            Learn More
                            <MdArrowOutward />
                        </button>
                    </div>
                </div>
            </ParralaxContent>
            <ParralaxContent imgUrl="/sky.jpg" title="Dive into the ocean" subtitle="Explore the beauty of the ocean">
                <div className="grid grid-cols-6 py-8">
                    <p className="text-3xl text-black font-bold text-center col-span-2">Explore the sky</p>
                    <div className="col-span-4">
                        <p className="text-md text-black">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta veritatis distinctio sed
                            consectetur quidem. Eum harum, minima magnam corporis accusantium, esse ipsa in accusamus
                            aliquam facere voluptates ut excepturi cum!
                        </p>
                        <button className="flex items-center gap-2 mt-4">
                            Learn More
                            <MdArrowOutward />
                        </button>
                    </div>
                </div>
            </ParralaxContent>
        </div>
    );
}

export default App;
