import { useQuery } from 'react-apollo'
import { GET_EVENT } from '../graphql/queries'
import {useSearchParams} from "react-router-dom"
const Result=()=>{
    const [searchParams,setSearchParams]= useSearchParams()
    const {data,loading,refetch}=useQuery(GET_EVENT,{variables:{schoolId:searchParams.get('schoolId')}})
    return (
        loading?<p>loading</p>:
        <p>{data.getEvent[0].name}</p>
    )
}
export default Result