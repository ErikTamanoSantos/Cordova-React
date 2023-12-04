import "./StartPage.css"

function StartPage() {
    return (
        <main>
            <nav>
                <div className="links">
                    <button id="startPage">About Me</button>
                    <button id="works">My works</button>
                </div>
                <div className="options">
                    <select id="lang">
                        <option>EN</option>
                        <option>ES</option>
                        <option>CA</option>
                    </select>
                </div>
            </nav>
            <h1>Hello, World!</h1>
        </main>
    )
}

export default StartPage;