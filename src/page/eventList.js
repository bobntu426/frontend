import { GET_EVENT,GET_EVENT_BY_ID,GET_EVENT_NUM } from '../graphql'
import { useQuery } from 'react-apollo'
import { useEffect, useState} from 'react'
import { useNavigate} from 'react-router-dom';
import {PageDiv,SmallFlexDiv,ColumnFlexDiv} from '../styleComponent'
import List from '../component/eventList/list'


const EventList=()=>{
    const {loading,data,refetch}=useQuery(GET_EVENT,{variables:{state:'coming'}})
    const {loading:loadingGetEventNum,data:GetEventNum}=useQuery(GET_EVENT_NUM,{variables:{state:'coming'}})
    const navigate = useNavigate()
    useEffect(()=>{
        console.log(data)
    }, [data])

    return (
        <PageDiv>
            <ColumnFlexDiv style={{
                marginTop:'5vw',
                marginBottom:'2vw',
            }}>
                {loading?<p>loading</p>:
                (typeof(data)==undefined)?<p>None</p>:
                <>
                <List
                    data={data}
                    navigate={navigate}
                />
                {/* <p>{data.getEvent[0].name}</p>
                <p>{data.getEvent[0].result.manGroup.first}</p> */}
                </>
                }
            </ColumnFlexDiv>
        </PageDiv>
    )
}
export default EventList