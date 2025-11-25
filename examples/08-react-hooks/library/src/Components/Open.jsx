function Open() {
    let isOpen = true;

    return(
        <div>
            <h2>The library is currently {isOpen ? "open" : "closed"} for business</h2>
            <button>Change to {isOpen ? "Closed": "Open"}</button>
        </div>
    )
}

export { Open }