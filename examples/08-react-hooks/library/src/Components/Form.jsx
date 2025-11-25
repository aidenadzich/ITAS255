import '../assets/form.css';

export default function ColourForm() {
    return (
        <div>
            <form onSubmit={submitInfo}>
                <label htmlFor="inputColour"> Colour </label>
                <input type="color" onChange={DOSOMETHING} ref={ REFSOMETHING } />
                <button>Submit</button>
            </form>
            <section className='swatch'></section>
        </div>
    )

}