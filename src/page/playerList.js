
import { useQuery } from 'react-apollo'
import { GET_COUNT,GET_RANK_SINGLE_DATA } from '../graphql'
import { useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';
import {PageDiv,SmallFlexDiv,ColumnFlexDiv} from '../styleComponent'
import {useSearchParams} from "react-router-dom"
import ListMenu from '../component/playeList/listMenu';
import ListProject from '../component/playeList/listProject';
import List from '../component/playeList/list';
import ChangePage from '../component/changePage';


const PlayerList=()=>{
    const rankTypeList = [
        {chi:'男生',eng:'man',gender:'male'},
        {chi:'女生',eng:'woman',gender:'female'},
    ]
    const [searchParams,setSearchParams]= useSearchParams()
    const [nowGender,setGender] = useState(searchParams.get('gender'))
    const [nowPage,setPage] =useState(searchParams.get('page'))
    const navigate = useNavigate()
    const [isFirstPage,setIsFirstPage] = useState(true)
    const [isLastPage,setIsLastPage] = useState(false)
    const {loading,data,refetch}=
        useQuery(GET_RANK_SINGLE_DATA,{
            variables:{
                minimum:nowPage*20-19,
                maximum:nowPage*20,
                gender:nowGender,
            }}
        )
    const {loading:loadingNumber,data:number,refetch:refetchNumberData}=
        useQuery(GET_COUNT,{
            variables:{gender:nowGender,type:'single'}
        })
    useEffect(()=>{
        setGender(searchParams.get('gender'))
    },[searchParams.get('gender')])

    useEffect(()=>{
        if(data&&number){
            if(data.getRankSingleData.at(-1).rank==number.getCount)
                setIsLastPage(true)
            else
                setIsLastPage(false)
        }
    },[data,number])

    useEffect(()=>{
        setPage(searchParams.get('page'))
        if(searchParams.get('page')==1)
            setIsFirstPage(true)
        else
            setIsFirstPage(false)
    },[searchParams.get('page')])
    return (
    
    <PageDiv>
        <ColumnFlexDiv>
            <ListProject 
                rankTypeList={rankTypeList}
                nowGender={nowGender}
                searchParams={searchParams}
                setSearchParams={setSearchParams}
                nowPage={nowPage}
                refetch={refetch}
                refetchNumberData={refetchNumberData}
            />
            <ListMenu />
            {loading?<p>loading</p>:
                <>
                    <List
                        data={data}
                        navigate={navigate}
                    />
                    <ChangePage
                        isFirstPage={isFirstPage}
                        setSearchParams={setSearchParams}
                        nowPage={nowPage}
                        isLastPage={isLastPage}
                        searchParams={searchParams}
                    />
                </>
            }
            
        </ColumnFlexDiv>
    </PageDiv>
    )
}
export default PlayerList