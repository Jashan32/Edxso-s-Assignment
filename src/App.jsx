import { useState } from "react"
import Type1 from "./assets/type1"
import Type2 from "./assets/type2"

export default function App() {
    const [visible, setVisible] = useState(true)

    return (
        <div className="h-[100vh] flex flex-col gap-[10px] justify-center items-center">
            <div className="  flex flex-col gap-[10px] ">
                <button onClick={() => setVisible(true)} className={`${visible ? " bg-green-400" : "bg-gray-400"} p-[10px] rounded-xl cursor-pointer`}>Type1</button>
                <button onClick={() => setVisible(false)} className={`${!visible ? " bg-green-400" : "bg-gray-400"} p-[10px] rounded-xl cursor-pointer`}>Type2</button>
            </div>
            <div className="flex justify-center">
                {visible ? <Type1 /> : <Type2 />}
            </div>
            <div className="flex w-[700px] gap-[30px]">
                <div>
                    <h3 className="font-semibold">Type1-  Multi-Click Mode:</h3>
                    <ul className="list-disc pl-5">
                        <li>Clicking on any box changes its color to green.</li>
                        <li>The system records multiple clicks on the same box, maintaining the sequence of interactions.</li>
                        <li>When the last box is clicked, all previous selections turn orange in the order they were clicked.</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold">Type2- Limited-Functionality Mode (Original Requirement):</h3>
                    <ul className="list-disc pl-5">
                        <li>Clicking a box changes its color to green.</li>
                        <li>The system tracks each click once per box.</li>
                        <li>Upon clicking the last box, all boxes transition to orange in the sequence of previous clicks.</li>
                    </ul>
                </div>
            </div>

        </div>

    )

}