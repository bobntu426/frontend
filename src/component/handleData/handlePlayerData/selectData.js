import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
const selectField=[
  // {name:"學校",value:values.school,change:'school'},
  // {name:"性別",value:values.gender,change:'gender'},
  // {name:"慣用手",value:values.hand,change:'hand'},
  // {name:"生日",value:values.birthday,change:'birthday'},
]



export default function SelectData({schoolList,handleChange,values}) {
  
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
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
      </div>
      <div>
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
      </div>
    </Box>
  );
}