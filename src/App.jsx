import React from 'react'

function App() {
    return (
        <main>
            <header>
                <h1>Hangman</h1>
                <p>Guess the word within 7 attempts to win!</p>
            </header>
            <section className="status">
                <h1>You win!</h1>
                <p>Well done! 🎉</p>
            </section>
        </main>
    )
}

export default App