import { useQuery } from 'react-apollo'
import { GET_EVENT } from '../graphql/queries'
const Result=()=>{
    const {data,loading,refetch}=useQuery(GET_EVENT)
    return (
        loading?<p>loading</p>:
        <p>{data.getEvent.name}</p>
    )
}
export default Result