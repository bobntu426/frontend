
import { useNavigate } from 'react-router-dom'
const Pingpong=({content,color})=>{
    const navigate = useNavigate()
    return ( 
        <div 
            style={{
                position:'relative',
                display:'flex',
                justifyContent:'center',
                cursor:'pointer',
            }}
            onClick={()=>{navigate(content.router)}}
            onMouseOver={()=>{}}
        >
            {
                color=='white'?
                <img src='https://i.imgur.com/Wv3hoS5.png' style={{width:'30vh'}} />:
                <img src='https://i.imgur.com/bDhohXc.png' style={{width:'30vh'}} />
            }
            
            <div style={{
                display:'flex',
                position:'absolute',
                top:'5vh',
                width:'13.5vh',
                height: '4vh',
                justifyContent:'center',
                
            }}>
                <h1 style={{margin:'0px',fontSize:'3vh'}} >{content.name}</h1>
            </div>

            <div style={{
                display:'flex',
                position:'absolute',
                top:'11vh',
                width: '20vh',
                height: '12vh',
                justifyContent:'center',
                
            }}>
                <p style={{margin:'0px',fontSize:'2.5vh'}}>{content.introduction}</p>
            </div>
        </div>
    )
}
export default Pingpong