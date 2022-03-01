
import { useQuery } from 'react-apollo'
import { GET_RANK_SINGLE_DATA,GET_COUNT,GET_RANK_DOUBLE_DATA } from '../graphql'
import { useNavigate} from 'react-router-dom';
import {PageDiv,ColumnFlexDiv} from '../styleComponent'

import {useSearchParams} from "react-router-dom"
import { useEffect, useState } from 'react';
import Project from '../component/rank/rankProject';
import RankMenu from '../component/rank/rankMenu';
import SingleRank from '../component/rank/singleRank';
import DoubleRank from '../component/rank/doubleRank';
import ChangePage from '../component/changePage';

const Rank=()=>{
    const rankTypeList = [
        {chi:'男子單打',eng:'manSingle',gender:'male',type:'single'},
        {chi:'女子單打',eng:'womanSingle',gender:'female',type:'single'},
        {chi:'男子雙打',eng:'manDouble',gender:'male',type:'double'},
        {chi:'女子雙打',eng:'womanDouble',gender:'female',type:'double'},
        {chi:'混合雙打',eng:'mixDouble',gender:'mix',type:'double'},
    ]

    const [searchParams,setSearchParams]= useSearchParams()

    const [nowPage,setPage] =useState(searchParams.get('page'))
    const [nowType,setType] =useState(searchParams.get('type'))
   
   
    const navigate = useNavigate()
    const [isFirstPage,setIsFirstPage] = useState(true)
    const [isLastPage,setIsLastPage] = useState(false)

    const {loading:singleDataLoading,data:singleData,refetch:refetchSingleData}=
        useQuery(GET_RANK_SINGLE_DATA,{
            variables:{
                minimum:nowPage*15-14,
                maximum:nowPage*15,
                gender:rankTypeList[nowType].gender,
            }}
        )
    const {loading:doubleDataLoading,data:doubleData,refetch:refetchDoubleData}=
        useQuery(GET_RANK_DOUBLE_DATA,{
            variables:{
                minimum:nowPage*15-14,
                maximum:nowPage*15,
                gender:rankTypeList[nowType].gender,
            }}
        )
    const {loading:loadingNumber,data:number,refetch:refetchNumberData}=
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
        setPage(searchParams.get('page'))
        if(searchParams.get('page')==1)
            setIsFirstPage(true)
        else
            setIsFirstPage(false)
    },[searchParams.get('page')])
    
    useEffect(()=>{
        setType(searchParams.get('type'))
    },[searchParams.get('type')])


    return (
    
    <PageDiv>
        <ColumnFlexDiv>
            
            <Project 
                rankTypeList={rankTypeList}
                nowType={nowType}
                searchParams={searchParams}
                setSearchParams={setSearchParams}
                nowPage={nowPage}
                refetchSingleData={refetchSingleData}
                refetchDoubleData={refetchDoubleData}
                refetchNumberData={refetchNumberData}
            />
            <RankMenu />
            
                
            {singleDataLoading||loadingNumber||doubleDataLoading?<p>loading</p>:(
            <>
                {rankTypeList[nowType].type=='single'?
                    <SingleRank 
                        singleData={singleData}
                        navigate={navigate}
                    />:
                    <DoubleRank 
                        doubleData={doubleData}
                        navigate={navigate}
                    />
                }
                    
                
                <ChangePage
                    isFirstPage={isFirstPage}
                    setSearchParams={setSearchParams}
                    nowPage={nowPage}
                    isLastPage={isLastPage}
                    searchParams={searchParams}
                />
            </>)}
            
        </ColumnFlexDiv>
    </PageDiv>
    )
}
export default Rank