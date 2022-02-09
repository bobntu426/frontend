
import { useQuery } from 'react-apollo'
import { GET_TWENTY_PERSON,GET_ALL_PEOPLE_NUM } from '../graphql'
import { useNavigate} from 'react-router-dom';
import {PageDiv,SmallFlexDiv,ColumnFlexDiv,RowFlexdiv} from '../styleComponent'
import Button from '@mui/material/Button';
import {useSearchParams} from "react-router-dom"
import { useEffect, useState } from 'react';

const Rank=()=>{
    const [searchParams,setSearchParams]= useSearchParams()
    const [nowPage,setPage] =useState(searchParams.get('page'))
   
   
    const navigate = useNavigate()
    const [isFirstPage,setIsFirstPage] = useState(true)
    const [isLastPage,setIsLastPage] = useState(false)

    const {loading,data,refetch}=useQuery(GET_TWENTY_PERSON,{variables:{minimum:nowPage*20-19,maximum:nowPage*20,gender:'male'}})
    const {loading:loadingPeopleNum,data:PeopleNum}=useQuery(GET_ALL_PEOPLE_NUM,{variables:{gender:'male'}})

    useEffect(()=>{
        if(data&&PeopleNum){
            if(data.getTwentyPeople.at(-1).rank==PeopleNum.getPeopleNum)
                setIsLastPage(true)
            else
                setIsLastPage(false)
        }
    },[data,PeopleNum])

    useEffect(()=>{
        setPage(searchParams.get('page'))
        if(searchParams.get('page')==1)
            setIsFirstPage(true)
        else
            setIsFirstPage(false)
    },[searchParams.get('page')])


    return (
    loading||loadingPeopleNum?<p>loading</p>:
    <PageDiv>
        <ColumnFlexDiv>
            <div style={{
                width: '100%',
                display: 'flex',
                borderBottom:'solid 2px rgb(181, 207, 29)'
            }}>
                <SmallFlexDiv style={{
                    flex: '0.2'
                }}>
                    <p>排名</p>
                </SmallFlexDiv>

                <SmallFlexDiv>
                    <p>名字</p>
                </SmallFlexDiv>

                <SmallFlexDiv>
                    <p>學校</p>
                </SmallFlexDiv>
                
                <SmallFlexDiv>
                    <p>積分</p>
                </SmallFlexDiv>

            </div>
            
                
               
            {    
                data.getTwentyPeople.map((person,index)=>{

                    return(
                        <div 
                            style={{
                                width: '100%',
                                display: 'flex',
                                borderBottom:'solid 2px rgb(181, 207, 29)',
                                cursor:'pointer',
                            }}
                            onMouseOver={(e)=>{e.currentTarget.style.backgroundColor='#c5d1dd'}}
                            onMouseOut={(e)=>{e.currentTarget.style.backgroundColor='white'}}
                            onClick={()=>{navigate(`/player?playerId=${person.id}`)}}
                            key={index}
                        >
                            <SmallFlexDiv style={{
                                flex: '0.2'
                            }}>
                                <p>{person.rank}</p>
                            </SmallFlexDiv>

                            <SmallFlexDiv>
                                <p>{person.name}</p>
                            </SmallFlexDiv>

                            <SmallFlexDiv>
                                <p>{person.school}</p>
                            </SmallFlexDiv>

                            <SmallFlexDiv>
                                <p>{person.score}</p>
                            </SmallFlexDiv>
                        </div>
                    )
                })
            }
            <RowFlexdiv>
                <Button 
                    variant="outlined"
                    disabled={isFirstPage}
                    onClick={()=>{
                        setSearchParams({page:parseInt(nowPage)-1})
                    }}
                    style={{
                        position:'relative',
                        bottom:'-5vh'
                    }}
                >
                    上一頁
                </Button>
                <Button 
                    variant="outlined"
                    disabled={isLastPage}
                    onClick={()=>{
                        setSearchParams({page:parseInt(nowPage)+1})
                    }}
                    style={{
                        position:'relative',
                        bottom:'-5vh'
                    }}
                >
                    下一頁
                </Button>
            </RowFlexdiv>
        </ColumnFlexDiv>
    </PageDiv>
    )
}
export default Rank