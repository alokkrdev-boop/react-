function helo (event) {
    console.log("hello ji")
    console.log(event)
}

function pp () {
    console.log('kya hai bhag yaha se ')
}

function dbl () {
    console.log('double clicked ')
}
function Btn () {
    return (
       <>
        <button onClick={helo}>Click ME!</button>
        <p onMouseOver={pp}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil maxime ab debitis minus temporibus voluptas accusantium voluptates reprehenderit amet? Sequi temporibus non officia adipisci maiores exercitationem voluptatum molestiae quasi nulla!</p>
        <button onDoubleClick={dbl}>click yahan</button>
        </>
    )
}
export default Btn