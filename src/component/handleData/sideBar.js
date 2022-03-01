import { PageDiv, RowFlexdiv, SmallFlexDiv,ColumnFlexDiv } from "../../styleComponent"
import { useNavigate } from "react-router-dom"
import {useSearchParams} from "react-router-dom"
const HandleData=()=>{
    const [searchParams,setSearchParams]= useSearchParams()
    const data = [
        {name:"選手資料",type:'player'},
        {name:"賽事資料",type:'event'},
        {name:"學校資料",type:'school'},
    ]
    
    const navigate=useNavigate()
    return (

        <ColumnFlexDiv style={{
            width:'200px',
            backgroundColor:'grey',
            height: '700px',
            minHeight: '500px',

            
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
                    searchParams.set('type',d.type)
                    setSearchParams(searchParams)
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