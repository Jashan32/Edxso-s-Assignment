import { useEffect, useState } from "react";

export default function Type1() {
    const [position, setPosition] = useState([]);
    const [visiblePosition, setVisiblePosition] = useState([]);
    const [allSelected, setAllSelected] = useState(false);

    function keyLister(i) {
        if (!visiblePosition.includes(i)) {
            setPosition([...position, i]);
            setVisiblePosition([...visiblePosition, i]);
        } else {
            const newPosition = visiblePosition.filter(x => x !== i);
            setVisiblePosition(newPosition);
            setPosition([...position, i]);
        }
    }

    useEffect(() => {
        if (visiblePosition.length === 9) {
            let index = 0;
            setAllSelected(true);
            const timer = setInterval(() => {
                if (index >= position.length) {
                    clearInterval(timer);
                    setAllSelected(false)
                    setPosition([])
                    setVisiblePosition([])
                    return;
                }
                setVisiblePosition([position[index]]);
                index++;
            }, 1000);

        }
    }, [visiblePosition]);

    return (
        <div className="grid grid-cols-3 gap-2 w-48 h-48">
            {Array.from({ length: 9 }).map((_, i) => (
                <div
                    onClick={() => keyLister(i)}
                    key={i}
                    className={`cursor-pointer select-none flex items-center justify-center bg-gray-300 border border-gray-500 ${
                        !allSelected
                            ? visiblePosition.includes(i) ? "bg-green-200" : ""
                            : visiblePosition.includes(i) ? "bg-orange-200" : ""
                    }`}
                >
                    {i + 1}
                </div>
            ))}
        </div>
    );
}
