import * as React from 'react';
import { useState,useEffect } from 'react';
import { ColumnFlexDiv, PageDiv, RowFlexDiv, SmallFlexDiv } from '../styleComponent';
import SideBar from '../component/handleData/sideBar'
import ModifyEventData from '../component/handleData/handleEventData/modifyEventData';
import CreateEventData from '../component/handleData/handleEventData/createEventData';
import { GET_SCHOOL } from '../graphql/queries';
import { useQuery } from 'react-apollo';
import InputDate from '../component/handleData/handlePlayerData/inputDate';

import { useNavigate,useSearchParams} from 'react-router-dom';

export default function InputAdornments() {
  const [values, setValues] = useState({
    name: '',
    gender: '',
    school: '',
    hand: '',
    playType: '',
    birthday: '',
  });
  const navigate = useNavigate();
  const {data:schoolList,loading:loadSchool} = useQuery(GET_SCHOOL)
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const [searchParams,setSearchParams]= useSearchParams()


  return (
    <PageDiv>
        <RowFlexDiv>
            <SideBar/>
            {
              <div style={{
                  position: 'relative',
                  border: 'solid 2px rgb(181, 207, 29)',
                  flex:1,
                  marginLeft:'10vw',
                  marginRight:'10vw',
                  height: '450px'
                }}>{loadSchool?<p>loading</p>:<>
                  <ModifyEventData values={values} handleChange={handleChange} schoolList={schoolList}/>
                  {/* <SelectData values={values} handleChange={handleChange} schoolList={schoolList} />
                  <InputDate /> */}

                </>}
              </div>
            }
      </RowFlexDiv>
    </PageDiv>
    
  );
}