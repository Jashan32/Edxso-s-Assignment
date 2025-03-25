import { useEffect, useState } from "react";

export default function Type1() {
    const [position, setposition] = useState([])
    const [visiblePosition, setVisiblePosition] = useState([])
    const [allSelected, setAllSelected] = useState(false)

    function keyLister(i) {
        if (!visiblePosition.includes(i)) {
            setposition([...position, i])
            setVisiblePosition([...visiblePosition, i])
            console.log(position)
        }
        else {
            const newPosition = visiblePosition.filter(x => x !== i)
            setVisiblePosition(newPosition)
            setposition([...position, i])
        }
    }
    useEffect(() => {
        if (visiblePosition.length == 9) {
            let index = 0
            setAllSelected(true)
            const timer = setInterval(() => {
                setVisiblePosition([position[index]])
                index++
                setTimeout(() => {
                    setVisiblePosition([])
                }, 500);
            }, 1000);
        }
    }, [visiblePosition])

    return (
        <div className="grid grid-cols-3 gap-2 w-48 h-48">
            {Array.from({ length: 9 }).map((_, i) => (
                <div onClick={() => keyLister(i)} key={i} className={`cursor-pointer select-none flex items-center justify-center bg-gray-300 border border-gray-500 ${!allSelected ? (visiblePosition.includes(i) ? "bg-green-200" : "") : (visiblePosition.includes(i) ? "bg-orange-200" : "")}`}>
                    {i + 1}
                </div>
            ))}
        </div>
    );
}