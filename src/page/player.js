import {useSearchParams} from "react-router-dom"
import { useQuery } from "react-apollo"
import { GET_PERSON_BY_ID } from "../graphql"
import { ColumnFlexDiv } from "../styleComponent"
import { useEffect } from "react"
const Player=()=>{
    const [searchParams]= useSearchParams()
    const {data,loading} = useQuery(GET_PERSON_BY_ID,{variables:{id:searchParams.get('playerId')}})
    

    useEffect(()=>{
    
    })
    return (
        loading?
        <p>loading</p>:
        (
            <ColumnFlexDiv>
                <p>{`姓名:${data.getPersonById.name}`}</p>
                <p>{`學校:${data.getPersonById.school}`}</p>
                <p>{`編號:${data.getPersonById.id}`}</p>
                <p>{`愛心:${data.getPersonById.popular}`}</p>
                {
                    data.getPersonById.gender=='male'?
                    <p>{'性別:男'}</p>:<p>{'性別:女'}</p>
                }
            
            </ColumnFlexDiv>
        )
    )
}
export default Player