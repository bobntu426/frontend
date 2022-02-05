import {useSearchParams} from "react-router-dom"
const Player=()=>{
    const [searchParams,setSearchParams]= useSearchParams();
    console.log(searchParams.get('playerId'))
    return <p>{searchParams.get('playerId')}</p>
}
export default Player