import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Buttons() {
    return (
        <div>
            buttons
    <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>

    <Stack direction="row" spacing={2}>
      <Button onClick={() => {
          alert('primary')
      }}>Primary</Button>
      <Button disabled>Disabled</Button>
      <Button href="#text-buttons">Link</Button>
    </Stack>
        </div>
    )
}

export default Buttons
