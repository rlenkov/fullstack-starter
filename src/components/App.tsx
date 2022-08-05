import React, { useState } from 'react'
import { getDetails, rollDice } from '../calls'
import styles from './app.module.scss'

const App = () => {
    const [details, setDetails] = useState(null)
    const [result, setResult] = useState(null)

    const handleRollSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const value = (e.currentTarget.elements[0] as HTMLInputElement).value
        rollDice(parseInt(value), setResult)
    }

    return (
        <React.Fragment>
            <header className={styles.header}>
                <h1>Demo App</h1>
            </header>
            <div className={styles.container}>
                <p>
                    This is a fullstack demo application to make dice rolls on a
                    server.
                </p>
                <button
                    className={styles.button}
                    type='button'
                    onClick={() => {
                        getDetails(setDetails)
                    }}
                >
                    Check Server
                </button>
                <div className={styles.result}>
                    {details ? <p>{details}</p> : null}
                </div>
                <form
                    onSubmit={(e) => {
                        handleRollSubmit(e)
                    }}
                >
                    <label htmlFor='dice_type'>Provide dice type:</label>
                    <br />
                    <input
                        type='text'
                        id='dice_type'
                        name='dice_type'
                        defaultValue='6'
                    />
                    <button type='submit'>
                        <span>Submit</span>
                    </button>
                </form>
                <div className={styles.result}>
                    {result ? <p>{`Dice roll result: ${result}`}</p> : null}
                </div>
            </div>
        </React.Fragment>
    )
}

export default App
