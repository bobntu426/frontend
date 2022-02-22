import { PageDiv, RowFlexdiv, SmallFlexDiv,ColumnFlexDiv } from '../../styleComponent'
import { useNavigate } from "react-router-dom"

const List=({event})=>{

    const navigate=useNavigate()
    return(
        
        <ColumnFlexDiv>
            {event.map((r,index)=>
                <ColumnFlexDiv
                    onClick={()=>{navigate(`/result?schoolId=${r.id}`)}} 
                    onMouseOver={(e)=>e.currentTarget.style.backgroundColor='#c5d1dd'}
                    onMouseOut={(e)=>e.currentTarget.style.backgroundColor='white'}
                    style={{
                        border: 'solid 2px rgb(181, 207, 29)',
                        width: '100%',
                        height: '10vw',
                        cursor:'pointer'
                    }}
                    key={index}
                >
                    {r.eventName}
                </ColumnFlexDiv>)
            }
        </ColumnFlexDiv>
    )
}
export default List