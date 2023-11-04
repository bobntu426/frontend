import FilledInput from '@mui/material/FilledInput';
import { ColumnFlexDiv, RowFlexDiv, SmallFlexDiv } from '../../../styleComponent';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import * as React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate} from 'react-router';
 


const Index=({values,handleChange,schoolList})=>{
    const navigate = useNavigate();
    return(
    <>
        <ColumnFlexDiv style={{overflow:'auto'}}>
            <ButtonGroup
                orientation="vertical"
                color="primary"
                aria-label="vertical outlined primary button group"
            >
                <Button onClick={()=>{navigate("/handlePlayerData/create");}}>新增選手資料</Button>
                <Button onClick={()=>{navigate("/handlePlayerData/modify");}}>修改選手資料</Button>

            </ButtonGroup>
        </ColumnFlexDiv>
        
    </>
    )
}
export default Index