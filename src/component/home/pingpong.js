
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
                height: '15vw',
                top:'20vh',
                minHeight: '100px'
            }}
            onClick={()=>{navigate(content.router)}}
            onMouseOver={()=>{}}
        >
            {
                color=='white'?
                <img src='https://i.imgur.com/Wv3hoS5.png'/>:
                <img src='https://i.imgur.com/bDhohXc.png'/>
            }
            
            <div style={{
                display:'flex',
                position:'absolute',
                top:'15%',
                width:'6.75vw',
                height: '2vw',
                justifyContent:'center',
                minHeight:'15px',
                minWidth:'50px'
                
            }}>
                <h1 style={{margin:'0px',fontSize:'1.5vw'}} >{content.name}</h1>
            </div>

            <div style={{
                display:'flex',
                position:'absolute',
                top:'35%',
                width: '10vw',
                height: '6vw',
                justifyContent:'center',
                minWidth: '65px',
                minHeight: '40px'
                
            }}>
                <p style={{margin:'0px',fontSize:'1.25vw'}}>{content.introduction}</p>
            </div>
        </div>
    )
}
export default Pingpong