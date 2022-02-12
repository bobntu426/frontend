import { SmallFlexDiv } from "../../styleComponent"
const SingleRank=({
    singleData,
    navigate,
})=>{
    return(
        singleData.getRankSingleData.map((person,index)=>{

            return(
                <div 
                    style={{
                        width: '100%',
                        display: 'flex',
                        borderBottom:'solid 2px rgb(181, 207, 29)',
                        cursor:'pointer',
                    }}
                    onMouseOver={(e)=>{e.currentTarget.style.backgroundColor='#c5d1dd'}}
                    onMouseOut={(e)=>{e.currentTarget.style.backgroundColor='white'}}
                    onClick={()=>{navigate(`/player?playerId=${person.id}`)}}
                    key={index}
                >
                    <SmallFlexDiv style={{
                        flex: '0.2'
                    }}>
                        <p>{person.rank}</p>
                    </SmallFlexDiv>

                    
                    <SmallFlexDiv>
                        <p>{person.name}</p>    
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
export default SingleRank