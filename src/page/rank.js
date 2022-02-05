import styled from 'styled-components'
import { useQuery } from 'react-apollo'
import { GET_ALL_PEOPLE } from '../graphql'
import { useNavigate} from 'react-router-dom';
const PageDiv = styled.div`
    display: flex;
    background: white;
    min-width:'700px';
    width: 100%;
    position: relative;
    align-items: center;
    flex-direction: column;
    /* border: solid 2px rgb(181, 207, 29); */
    `
const Flexdiv = styled.div`
    background: white;
    min-width:'700px';
    width: 95%;
    position: relative;
    justify-content: center;
    flex-direction: column;
    /* border: solid 2px rgb(181, 207, 29); */
    `
const SmallDiv = styled.div`
    /* border:solid 2px rgb(181, 207, 29); */
    display: flex;
    justify-content: center;
    flex: 1;
    `
const Rank=()=>{
    const {loading,data}=useQuery(GET_ALL_PEOPLE)
    const navigate = useNavigate()
    return (
    loading?<p>loading</p>:
    <PageDiv>
        <Flexdiv>
            <div style={{
                display: 'flex',
                borderBottom:'solid 2px rgb(181, 207, 29)'
            }}>
                <SmallDiv style={{
                    flex: '0.2'
                }}>
                    <p>排名</p>
                </SmallDiv>

                <SmallDiv>
                    <p>名字</p>
                </SmallDiv>

                <SmallDiv>
                    <p>學校</p>
                </SmallDiv>
                
                <SmallDiv>
                    <p>積分</p>
                </SmallDiv>

            </div>
            
                
               
            {    
                data.getAllPeople.map((person,index)=>{
                    return(
                        <div 
                            style={{
                                display: 'flex',
                                borderBottom:'solid 2px rgb(181, 207, 29)',
                                cursor:'pointer',
                            }}
                            onMouseOver={(e)=>{e.currentTarget.style.backgroundColor='#c5d1dd'}}
                            onMouseOut={(e)=>{e.currentTarget.style.backgroundColor='white'}}
                            onClick={()=>{navigate(`/player?playerId=${person.id}`)}}
                            key={index}
                        >
                            <SmallDiv style={{
                                flex: '0.2'
                            }}>
                                <p>{index+1}</p>
                            </SmallDiv>

                            <SmallDiv>
                                <p>{person.name}</p>
                            </SmallDiv>

                            <SmallDiv>
                                <p>{person.school}</p>
                            </SmallDiv>

                            <SmallDiv>
                                <p>{person.score}</p>
                            </SmallDiv>
                        </div>
                    )
                })
            }
            
        </Flexdiv>
    </PageDiv>
    )
}
export default Rank