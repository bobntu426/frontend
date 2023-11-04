import { PageDiv,  SmallFlexDiv,ColumnFlexDiv } from "../../styleComponent"
import { useNavigate } from "react-router-dom"
import {useSearchParams} from "react-router-dom"
const HandleData=()=>{
    const [searchParams,setSearchParams]= useSearchParams()
    const data = [
        {name:"選手資料",type:'handlePlayerData'},
        {name:"賽事資料",type:'handleEventData'},
        {name:"學校資料",type:'handleSchoolData'},
    ]
    
    const navigate=useNavigate()
    return (

        <ColumnFlexDiv style={{
            position:'relative',
            width:'200px',
            backgroundColor:'grey',
            height: '700px',
            minHeight: '500px',
            left:0
        }}>
            {data.map((d,index)=>
                <SmallFlexDiv
                style={{
                    position:'relative',
                    display:'flex',
                    justifyContent:'center',
                    width: '100%',
                    flex: 1
                }}
                onClick={()=>{
                    navigate(`/${d.type}/index`)
                }}
                onMouseOver={()=>{}}
                key={index}
            >
    
                <img 
                    src='https://i.imgur.com/Wv3hoS5.png' 
                    style={{width: '80%',cursor:'pointer'}}
                />
                <div style={{
                    display:'flex',
                    position:'absolute',
                    top:'42%',
                    justifyContent:'center',
                    minHeight:'15px',
                    cursor: 'pointer'
                }}>
                    <h1 style={{margin:'0px',fontSize:'20px'}} >{d.name}</h1>
                </div>
            </SmallFlexDiv>
            )}
        </ColumnFlexDiv>
    )
}

export default HandleData