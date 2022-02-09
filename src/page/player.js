import {useSearchParams} from "react-router-dom"
import { useQuery } from "react-apollo"
import { GET_ONE_PERSON } from "../graphql"
import { ColumnFlexDiv } from "../styleComponent"
import { useEffect } from "react"
const Player=()=>{
    const [searchParams]= useSearchParams()
    const {data,loading} = useQuery(GET_ONE_PERSON,{variables:{id:searchParams.get('playerId')}})
    return (
        loading?
        <p>loading</p>:(
            <ColumnFlexDiv>
                <p>{`姓名:${data.getOnePerson.name}`}</p>
                <p>{`學校:${data.getOnePerson.school}`}</p>
                <p>{`編號:${data.getOnePerson.id}`}</p>
                <p>{`愛心:${data.getOnePerson.popular}`}</p>
                {
                    data.getOnePerson.gender=='male'?
                    <p>{'性別:男'}</p>:<p>{'性別:女'}</p>
                }
            
            </ColumnFlexDiv>
        )
    )
}
export default Player