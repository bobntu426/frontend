import FilledInput from '@mui/material/FilledInput';
import { ColumnFlexDiv, RowFlexdiv } from '../../styleComponent';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import * as React from 'react';


const InputData=({values,handleChange})=>{
    const inputField=[
        {name:"姓名",value:values.name,change:'name'},
        {name:"打法",value:values.playType,change:'playType'},
    ]
    
    return(
    <>
        <RowFlexdiv style={{overflow:'auto'}}>
            {inputField.map((i,index)=>
                <div key={index}>
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
                    <FilledInput
                        id="filled-adornment-weight"
                        value={i.value}
                        onChange={handleChange(i.change)}
                        endAdornment={<InputAdornment position="end"></InputAdornment>}
                    />
                    <FormHelperText id="filled-weight-helper-text">{i.name}</FormHelperText>
                    </FormControl>
                </div>
            )}
        </RowFlexdiv>
        
    </>
    )
}
export default InputData