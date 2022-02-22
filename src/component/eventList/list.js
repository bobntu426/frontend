import { Blockdiv } from "../../styleComponent"
import { useEffect, useState } from 'react';

const List=({
    data,
    navigate,
})=>{
    useEffect(()=>{
        console.log(data)
    }, [data])
    
    return(
        data.getEvent.map((event,index)=>{
            return(
                <div 
                    style={{
                        display: 'flex',
                        cursor:'pointer',
                        width: '100%',
                    }}
                    onMouseOver={(e)=>{e.currentTarget.style.backgroundColor='#c5d1dd'}}
                    onMouseOut={(e)=>{e.currentTarget.style.backgroundColor='white'}}
                    onClick={()=>{navigate(`/event?eventId=${event.id}`)}}
                    key={index}
                >
                    <Blockdiv>
                        <p>{event.name}</p><br/>
                        {/* <p>{event.result.manGroup.first}</p> */}
                    </Blockdiv>
                </div>
            )
        })
        
    )
}
export default List