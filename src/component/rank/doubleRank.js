import { SmallFlexDiv } from "../../styleComponent"
const DoubleRank=({
    doubleData,
    navigate,
})=>{
    return(
        doubleData.getRankDoubleData.map((person,index)=>{
            return(
                <div 
                    style={{
                        width: '100%',
                        display: 'flex',
                        borderBottom:'solid 2px rgb(181, 207, 29)',
                        
                    }}
                    
                    key={index}
                >
                    <SmallFlexDiv style={{
                        flex: '0.2'
                    }}>
                        <p>{person.rank}</p>
                    </SmallFlexDiv>

                    

                    <SmallFlexDiv style={{
                        flexDirection:'column'
                    }}>
                        <SmallFlexDiv 
                            onMouseOver={(e)=>{e.currentTarget.style.backgroundColor='#c5d1dd'}}
                            onMouseOut={(e)=>{e.currentTarget.style.backgroundColor='white'}}
                            style={{cursor:'pointer'}}
                            onClick={()=>{navigate(`/player?playerId=${person.player[0].id}`)}}
                        >
                            <p>{person.player[0].name}</p>
                        </SmallFlexDiv>
                        <SmallFlexDiv 
                            onMouseOver={(e)=>{e.currentTarget.style.backgroundColor='#c5d1dd'}}
                            onMouseOut={(e)=>{e.currentTarget.style.backgroundColor='white'}}
                            style={{cursor:'pointer'}}
                            onClick={()=>{navigate(`/player?playerId=${person.player[1].id}`)}}
                        >
                            <p>{person.player[1].name}</p>
                        </SmallFlexDiv>
                    </SmallFlexDiv>
                    

                    <SmallFlexDiv>
                        <p>{person.school}</p>
                    </SmallFlexDiv>

                    <SmallFlexDiv>
                        <p>{person.score}</p>
                    </SmallFlexDiv>
                </div>
            )
        })
    )
}
export default DoubleRank