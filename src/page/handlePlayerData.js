import * as React from 'react';
import { useState,useEffect } from 'react';
import { ColumnFlexDiv, PageDiv, RowFlexDiv, SmallFlexDiv } from '../styleComponent';
import SideBar from '../component/handleData/sideBar'
import CreatePlayerData from '../component/handleData/handlePlayerData/createPlayerData';
import ModifyPlayerData from '../component/handleData/handlePlayerData/modifyPlayerData';
import HandlePlayerDataIndex from '../component/handleData/handlePlayerData/handlePlayerDataIndex';
import { GET_SCHOOL } from '../graphql/queries';
import { useQuery } from 'react-apollo';
import InputDate from '../component/handleData/handlePlayerData/inputDate';
import {Routes,Route,} from 'react-router-dom'

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
            <Routes>
              <Route path="/index" element={
                <div style={{
                    position: 'relative',
                    // border: 'solid 2px rgb(181, 207, 29)',
                    flex:1,
                    marginLeft:'10vw',
                    marginRight:'10vw',
                    height: '450px'
                  }}>{loadSchool?<p>loading</p>:<>
                    <HandlePlayerDataIndex values={values} handleChange={handleChange} schoolList={schoolList}/>
                  </>}
                </div>
              }/>
              <Route path="/create" element={
                <div style={{
                    position: 'relative',
                    // border: 'solid 2px rgb(181, 207, 29)',
                    flex:1,
                    marginLeft:'10vw',
                    marginRight:'10vw',
                    height: '450px'
                  }}>{loadSchool?<p>loading</p>:<>
                    <CreatePlayerData values={values} handleChange={handleChange} schoolList={schoolList}/>
                  </>}
                </div>
              } />
              <Route path="/modify" element={
                <div style={{
                  position: 'relative',
                  // border: 'solid 2px rgb(181, 207, 29)',
                  flex:1,
                  marginLeft:'10vw',
                  marginRight:'10vw',
                  height: '450px'
                }}>{loadSchool?<p>loading</p>:<>
                  <ModifyPlayerData values={values} handleChange={handleChange} schoolList={schoolList}/>
                </>}
              </div>
              } />
          </Routes>
            

      </RowFlexDiv>
    </PageDiv>
    
  );
}