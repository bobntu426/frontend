import { PageDiv, RowFlexdiv, SmallFlexDiv,ColumnFlexDiv } from "../styleComponent"
import { useNavigate } from "react-router-dom"
import { useQuery } from 'react-apollo'
import { GET_SCHOOL } from '../graphql/queries'
import List from "../component/resultList/list"
const ResultList=()=>{
    const {data,loading,refetch}=useQuery(GET_SCHOOL,{variables:{mustHasEvent:true}})
    const navigate=useNavigate()
    return (
    <PageDiv>
        
        {loading?<p>loading</p>:
            <List event={data.getSchool}/>
        }
        
    </PageDiv>
    )
}
export default ResultList