import { useEffect } from 'react'
import { useQuery } from 'react-apollo'
import { GET_EVENT,GET_EVENT_BY_ID,GET_EVENT_NUM } from '../graphql'

const Event=()=>{
    const {loading,data,refetch}=useQuery(GET_EVENT_BY_ID,{variables:{id:4}})
    const {loading:loadingGetEventNum,data:GetEventNum}=useQuery(GET_EVENT_NUM,{variables:{state:'coming'}})
    useEffect(()=>{

    })

    return (
        
        loading?<p>loading</p>:
        <>
        <p>{data.getEventById.name}</p>
        <p>{data.getEventById.result.manGroup.first}</p>
        </>
    )
}
export default Event