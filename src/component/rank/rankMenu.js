import { SmallFlexDiv } from "../../styleComponent"
const RankMenu=()=>{
    return(
        <div style={{
            width: '100%',
            display: 'flex',
            borderBottom:'solid 2px rgb(181, 207, 29)'
        }}>
            <SmallFlexDiv style={{
                flex: '0.2'
            }}>
                <p>排名</p>
            </SmallFlexDiv>

            <SmallFlexDiv>
                <p>名字</p>
            </SmallFlexDiv>

            <SmallFlexDiv>
                <p>學校</p>
            </SmallFlexDiv>
            
            <SmallFlexDiv>
                <p>積分</p>
            </SmallFlexDiv>

        </div>
    )
}
export default RankMenu