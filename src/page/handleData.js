import * as React from 'react';
import { ColumnFlexDiv, PageDiv, RowFlexdiv, SmallFlexDiv } from '../styleComponent';
import SideBar from '../component/handleData/sideBar'
import InputData from '../component/handleData/inputData';
import SelectData from '../component/handleData/selectData';
import { GET_SCHOOL } from '../graphql/queries';
import { useQuery } from 'react-apollo';
import InputDate from '../component/handleData/inputDate';

export default function InputAdornments() {
  const [values, setValues] = React.useState({
    name: '',
    gender: '',
    school: '',
    hand: '',
    playType: '',
    birthday: '',
  });
  const {data:schoolList,loading:loadSchool} = useQuery(GET_SCHOOL)
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };


  return (
    <PageDiv>
        <RowFlexdiv>
            <SideBar/>
            {loadSchool?<p>loading</p>:
              <div style={{
                  position: 'relative',
                  border: 'solid 2px rgb(181, 207, 29)',
                  flex:1,
                  marginLeft:'10vw',
                  marginRight:'10vw',
                  height: '450px'
                }}>
                <InputData values={values} handleChange={handleChange}/>
                <SelectData values={values} handleChange={handleChange} schoolList={schoolList} />
                <InputDate />
              </div>
            }
      </RowFlexdiv>
    </PageDiv>
    
  );
}