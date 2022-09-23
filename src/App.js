import { useState } from "react";
import React from 'react';
import TextField from '@mui/material/TextField';



export default function App() {
    return (
        <>
            <div>Weather Bandit</div>
            <div className="main">
                <h1>React Search</h1>
                <div className="search">
                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        fullWidth
                        label="Search"
                    />
                </div>
            </div>
        </>
    )
}
