import { SmallFlexDiv } from "../../styleComponent"
const ListMenu=()=>{
    return(
        <div style={{
            display: 'flex',
            width: '100%',
            borderBottom:'solid 2px rgb(181, 207, 29)'
        }}>
            <SmallFlexDiv>
                <p>名字</p>
            </SmallFlexDiv>

            <SmallFlexDiv>
                <p>學校</p>
            </SmallFlexDiv>

            <SmallFlexDiv>
                <p>性別</p>
            </SmallFlexDiv>
            
            <SmallFlexDiv>
                <p>排名</p>
            </SmallFlexDiv>

            <SmallFlexDiv>
                <p>熱門度</p>
            </SmallFlexDiv>

        </div>
    )
}
export default ListMenu