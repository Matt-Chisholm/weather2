import React from 'react';
import Default from '@mui/material/TextField';

export default function LocationSearch() {
  return (
    <div>
         <div className="main">
                <h1>Where do you live?</h1>
                <div className="search">
                    <Default
                        id="outlined-basic"
                        variant="outlined"
                        fullWidth
                        label="Search"
                    />
                </div>
            </div>
    </div>
  )
}
