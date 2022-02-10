
import { useQuery } from 'react-apollo'
import { GET_PEOPLE } from '../graphql'
import { useNavigate} from 'react-router-dom';
import {PageDiv,SmallFlexDiv,ColumnFlexDiv} from '../styleComponent'

const PlayerList=()=>{
    const {loading,data}=useQuery(GET_PEOPLE,{variables:{gender:'male'}})
    const navigate = useNavigate()
    return (
    loading?<p>loading</p>:
    <PageDiv>
        <ColumnFlexDiv>
            <div style={{
                display: 'flex',
                width: '100%',
                borderBottom:'solid 2px rgb(181, 207, 29)'
            }}>
                <SmallFlexDiv>
                    <p>名字</p>
                </SmallFlexDiv>

                <SmallFlexDiv>
                    <p>學校</p>
                </SmallFlexDiv>

                <SmallFlexDiv>
                    <p>性別</p>
                </SmallFlexDiv>
                
                <SmallFlexDiv>
                    <p>排名</p>
                </SmallFlexDiv>

                <SmallFlexDiv>
                    <p>熱門度</p>
                </SmallFlexDiv>

            </div>

            {    
                data.getPeople.map((person,index)=>{
                    return(
                        <div 
                            style={{
                                display: 'flex',
                                borderBottom:'solid 2px rgb(181, 207, 29)',
                                cursor:'pointer',
                                width: '100%',
                            }}
                            onMouseOver={(e)=>{e.currentTarget.style.backgroundColor='#c5d1dd'}}
                            onMouseOut={(e)=>{e.currentTarget.style.backgroundColor='white'}}
                            onClick={()=>{navigate(`/player?playerId=${person.id}`)}}
                            key={index}
                        >
                            <SmallFlexDiv>
                                <p>{person.name}</p>
                            </SmallFlexDiv>

                            <SmallFlexDiv>
                                <p>{person.school}</p>
                            </SmallFlexDiv>

                            <SmallFlexDiv>
                            {
                                person.gender=='male'?
                                <p>男</p>:<p>女</p>
                            }
                            </SmallFlexDiv>

                            <SmallFlexDiv >
                                <p>{index+1}</p>
                            </SmallFlexDiv>

                            <SmallFlexDiv>
                                <p>{person.popular}</p>
                            </SmallFlexDiv>

                        </div>
                    )
                })
            }
            
        </ColumnFlexDiv>
    </PageDiv>
    )
}
export default PlayerList