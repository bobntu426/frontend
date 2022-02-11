
import { useQuery } from 'react-apollo'
import { GET_RANK_SINGLE_DATA,GET_COUNT,GET_RANK_DOUBLE_DATA } from '../graphql'
import { useNavigate} from 'react-router-dom';
import {PageDiv,SmallFlexDiv,ColumnFlexDiv,RowFlexdiv} from '../styleComponent'
import Button from '@mui/material/Button';
import {useSearchParams} from "react-router-dom"
import { useEffect, useState } from 'react';

const Rank=()=>{
    const rankTypeList = [
        {chi:'男子單打',eng:'manSingle',gender:'male',type:'single'},
        {chi:'女子單打',eng:'womanSingle',gender:'female',type:'single'},
        {chi:'男子雙打',eng:'manDouble',gender:'male',type:'double'},
        {chi:'女子雙打',eng:'womanDouble',gender:'female',type:'double'},
        {chi:'混合雙打',eng:'mixDouble',gender:'mix',type:'double'},
    ]

    const [searchParams,setSearchParams]= useSearchParams()

    const [nowPage,setPage] =useState(searchParams.get('page')?searchParams.get('page'):1)
    const [nowType,setType] =useState(searchParams.get('type')?searchParams.get('type'):0)
   
   
    const navigate = useNavigate()
    const [isFirstPage,setIsFirstPage] = useState(true)
    const [isLastPage,setIsLastPage] = useState(false)

    const {loading:singleDataLoading,data:singleData,refetch:refetchSingleData}=
        useQuery(GET_RANK_SINGLE_DATA,{
            variables:{
                minimum:nowPage*20-19,
                maximum:nowPage*20,
                gender:rankTypeList[nowType].gender,
            }}
        )
    const {loading:doubleDataLoading,data:doubleData,refetch:refetchDoubleData}=
        useQuery(GET_RANK_DOUBLE_DATA,{
            variables:{
                minimum:nowPage*10-9,
                maximum:nowPage*10,
                gender:rankTypeList[nowType].gender,
            }}
        )
    const {loading:loadingNumber,data:number}=
        useQuery(GET_COUNT,{
            variables:{gender:rankTypeList[nowType].gender,type:rankTypeList[nowType].type}
        })
    

    useEffect(()=>{
        if(singleData&&number&&rankTypeList[nowType].type=='single'){
            if(singleData.getRankSingleData.at(-1).rank==number.getCount)
                setIsLastPage(true)
            else
                setIsLastPage(false)
        }
        if(doubleData&&number&&rankTypeList[nowType].type=='double'){
            if(doubleData.getRankDoubleData.at(-1).rank==number.getCount)
                setIsLastPage(true)
            else
                setIsLastPage(false)
        }
    },[singleData,doubleData,number])

    useEffect(()=>{
        if(!searchParams.get('page')){
            searchParams.set('page',1)
            setSearchParams(searchParams)
        }
        
        setPage(searchParams.get('page'))
        if(searchParams.get('page')==1)
            setIsFirstPage(true)
        else
            setIsFirstPage(false)
    },[searchParams.get('page')])
    
    useEffect(()=>{
        if(!searchParams.get('type')){
            searchParams.set('type',0)
            setSearchParams(searchParams)
        }
        setType(searchParams.get('type'))
    },[searchParams.get('type')])


    return (
    singleDataLoading||loadingNumber||doubleDataLoading?<p>loading</p>:
    <PageDiv>
        
        <ColumnFlexDiv>
            <RowFlexdiv style={{
                marginTop:'5vw',
                marginBottom:'2vw',
                borderBottom: 'solid 1px #c5d1dd'
            }}>
                {
                    rankTypeList.map((o,index)=>
                        <SmallFlexDiv 
                            key={index}
                            style={nowType==index?{cursor:'pointer',borderBottom:'solid 2px red'}:{cursor:'pointer',borderBottom:'none'}}
                            onMouseOver={(e)=>{
                                if(nowType!=index){
                                    e.currentTarget.style.backgroundColor = '#c5d1dd'
                                    e.currentTarget.style.borderBottom = 'solid 2px #c5d1dd'
                                }
                            }}
                            onMouseOut={(e)=>{
                                if(nowType!=index){
                                    e.currentTarget.style.borderBottom = 'solid 2px white'
                                }
                                e.currentTarget.style.backgroundColor = 'white'
                            }}
                            onMouseDown={()=>{
                                searchParams.set('type',index)
                                searchParams.set('page',1)
                                setSearchParams(searchParams)
                                if(rankTypeList[index].type=='single')
                                    refetchSingleData({
                                        minimum:nowPage*20-19,
                                        maximum:nowPage*20,
                                        gender:o.gender,
                                    })
                                else{
                                    refetchDoubleData({
                                        minimum:nowPage*20-19,
                                        maximum:nowPage*20,
                                        gender:o.gender,
                                    })
                                }

                            }}
                        >
                            <p>{o.chi}</p>
                        </SmallFlexDiv>
                    )
                }
                

            </RowFlexdiv>

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
            
                
            
            {rankTypeList[nowType].type=='single'?
                singleData.getRankSingleData.map((person,index)=>{

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

                            {rankTypeList[nowType].type=='single'?
                            <SmallFlexDiv>
                                <p>{person.name}</p>
                            </SmallFlexDiv>:
                            <SmallFlexDiv style={{
                                flexDirection:'column'
                            }}>
                                <p>{person.name[0]}</p>
                                <p>{person.name[1]}</p>
                            </SmallFlexDiv>
                            }

                            <SmallFlexDiv>
                                <p>{person.school}</p>
                            </SmallFlexDiv>

                            <SmallFlexDiv>
                                <p>{person.score}</p>
                            </SmallFlexDiv>
                        </div>
                    )
                }):
                doubleData.getRankDoubleData.map((person,index)=>{
                    return(
                        <div 
                            style={{
                                width: '100%',
                                display: 'flex',
                                borderBottom:'solid 2px rgb(181, 207, 29)',
                                
                            }}
                            
                            key={index}
                        >
                            <SmallFlexDiv style={{
                                flex: '0.2'
                            }}>
                                <p>{person.rank}</p>
                            </SmallFlexDiv>

                            

                            <SmallFlexDiv style={{
                                flexDirection:'column'
                            }}>
                                <SmallFlexDiv 
                                    onMouseOver={(e)=>{e.currentTarget.style.backgroundColor='#c5d1dd'}}
                                    onMouseOut={(e)=>{e.currentTarget.style.backgroundColor='white'}}
                                    style={{cursor:'pointer'}}
                                    onClick={()=>{navigate(`/player?playerId=${person.player[0].id}`)}}
                                >
                                    <p>{person.player[0].name}</p>
                                </SmallFlexDiv>
                                <SmallFlexDiv 
                                    onMouseOver={(e)=>{e.currentTarget.style.backgroundColor='#c5d1dd'}}
                                    onMouseOut={(e)=>{e.currentTarget.style.backgroundColor='white'}}
                                    style={{cursor:'pointer'}}
                                    onClick={()=>{navigate(`/player?playerId=${person.player[1].id}`)}}
                                >
                                    <p>{person.player[1].name}</p>
                                </SmallFlexDiv>
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