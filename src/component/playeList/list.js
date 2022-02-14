import { SmallFlexDiv } from "../../styleComponent"
const List=({
    data,
    navigate,
})=>{
    return(
            
        data.getRankSingleData.map((person,index)=>{
            return(
                <div 
                    style={{
                        display: 'flex',
                        borderBottom:'solid 2px rgb(181, 207, 29)',
                        cursor:'pointer',
                        width: '100%',
                    }}
                    onMouseOver={(e)=>{e.currentTarget.style.backgroundColor='#c5d1dd'}}
                    onMouseOut={(e)=>{e.currentTarget.style.backgroundColor='white'}}
                    onClick={()=>{navigate(`/player?playerId=${person.id}`)}}
                    key={index}
                >
                    <SmallFlexDiv>
                        <p>{person.name}</p>
                    </SmallFlexDiv>

                    <SmallFlexDiv>
                        <p>{person.school}</p>
                    </SmallFlexDiv>

                    <SmallFlexDiv>
                    {
                        person.gender=='male'?
                        <p>男</p>:<p>女</p>
                    }
                    </SmallFlexDiv>

                    <SmallFlexDiv >
                        <p>{person.rank}</p>
                    </SmallFlexDiv>

                    <SmallFlexDiv>
                        <p>{person.popular}</p>
                    </SmallFlexDiv>

                </div>
            )
        })
        
    )
}
export default List