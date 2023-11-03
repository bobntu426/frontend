import FilledInput from '@mui/material/FilledInput';
import { ColumnFlexDiv, RowFlexDiv, SmallFlexDiv } from '../../../styleComponent';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import * as React from 'react';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';


const InputData=({values,handleChange,schoolList})=>{
    const inputField=[
        {name:"姓名",value:values.name,change:'name'},
        {name:"打法",value:values.playType,change:'playType'},
    ]
    
    return(
    <>
        <ColumnFlexDiv style={{overflow:'auto'}}>
            <FormControl>
                <RowFlexDiv style={{
                  marginBottom: '10px',
                  marginTop: '10px',
                }}>
                {inputField.map((i,index)=>
                    <TextField 
                        required id="standard-required" 
                        label={i.name} 
                        value={i.value}
                        onChange={handleChange(i.change)}
                    />
                    )
                }
                </RowFlexDiv>
                <TextField
                    id="outlined-select-currency"
                    select
                    label="性別"
                    value={values.gender}
                    onChange={handleChange('gender')}
                    helperText="選擇性別"
                >
                    
                    <MenuItem key="性別" value='男'>
                    男
                    </MenuItem>
                    <MenuItem key="性別" value = '女'>
                    女
                    </MenuItem>
                    
                </TextField>
                <TextField
                    id="outlined-select-currency"
                    select
                    label="學校"
                    value={values.school}
                    onChange={handleChange('school')}
                    helperText="選擇學校"
                >
                    {schoolList.getSchool.map((option) => (
                        <MenuItem key={option.id} value={option.id}>
                        {option.name}
                        </MenuItem>
                    ))}
                </TextField> 
                <TextField
                    id="outlined-select-currency"
                    select
                    label="持拍手"
                    value={values.hand}
                    onChange={handleChange('hand')}
                    helperText="持拍手"
                >
                    
                    <MenuItem key="持拍手" value='左'>
                    左
                    </MenuItem>
                    <MenuItem key="持拍手" value='右'>
                    右
                    </MenuItem>
                    
                </TextField>                  
            </FormControl> 
        </ColumnFlexDiv>
        
    </>
    )
}
export default InputData