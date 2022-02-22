import { useEffect } from 'react'
import { useQuery } from 'react-apollo'
import { GET_EVENT,GET_EVENT_BY_ID,GET_EVENT_NUM } from '../graphql'

const Event=()=>{
    const {loading,data,refetch}=useQuery(GET_EVENT,{variables:{eventId:11}})
    const {loading:loadingGetEventNum,data:GetEventNum}=useQuery(GET_EVENT_NUM,{variables:{state:'coming'}})
    

    return (
        
        loading?<p>loading</p>:
        <>
        <p>{data.getEvent[0].name}</p>
        <p>{data.getEvent[0].result.manGroup.first}</p>
        </>
    )
}
export default Event