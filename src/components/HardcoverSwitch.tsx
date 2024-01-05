import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { forwardRef } from 'react'

interface props {
  hardcover: any
  onChange: any
}

const HardcoverSwitch = forwardRef(( props: props, ref) => {
  return (
    <FormControlLabel control={<Switch inputRef={ref} {...props} defaultChecked={props.hardcover} color='secondary'/>} label="Hard Cover" />
  ) 
})

export default HardcoverSwitch