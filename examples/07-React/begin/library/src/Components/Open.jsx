import { useState } from "react";

export default function Open() {
    
    const [isOpen, toggleValue] = useState(true);

    const toggleOpenClosed = () => toggleValue(!isOpen);

    return (
        <div>
            <h2>The library is currently { isOpen ? 'open' : 'closed' } for business</h2>
            <button onClick={toggleOpenClosed}>Change to { isOpen ? 'Closed' : 'Open' }</button>
        </div>
    )

}