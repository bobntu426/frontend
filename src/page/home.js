
import Pingpong from '../component/home/pingpong.js'

import {PageDiv,RowFlexDiv,ColumnFlexDiv} from '../styleComponent'
const Home=()=>{
    
    const pingpongList=[
        {
            name:'近期賽事',
            introduction:'近期即將舉辦的賽事總覽',
            router:'/eventList'
        },
        {
            name:'賽事成績',
            introduction:'過去的賽事成績一覽',
            router:'/resultList'
        },
        {
            name:'選手專區',
            introduction:'選手資訊查詢',
            router:'/playerList?page=1&gender=male'
        },
        {
            name:'各校球隊',
            introduction:'各所學校的球隊資訊一覽',
            router:'/schoolList?page=1'
        },
        {
            name:'排名',
            introduction:'選手在各種項目的排名',
            router:'/ranking?page=1&type=0'
        },
        {
            name:'新聞',
            introduction:'近期新聞',
            router:'/news'
        },
        {
            name:'影片',
            introduction:'各個盃賽的影片與好球精選',
            router:'/video'
        },
    ]
    
    return(
    <PageDiv>
        <ColumnFlexDiv style={{
            backgroundColor:'#c5d1dd',
            width: '100%'
        }}>
            <h2>簡介</h2>
            <p>統整大專界一般組的各大盃賽資訊以及各選手的資訊</p>
        </ColumnFlexDiv>
        <div style={{height:'10vw'}}></div>
        <RowFlexDiv>
            <Pingpong content={pingpongList[0]} color={'white'}/>
            <Pingpong content={pingpongList[1]} color={'orange'}/>
            <Pingpong content={pingpongList[2]} color={'white'}/>
            <Pingpong content={pingpongList[3]} color={'orange'}/>
        </RowFlexDiv>

        <RowFlexDiv>
            <Pingpong content={pingpongList[4]} color={'white'}/>
            <Pingpong content={pingpongList[5]} color={'orange'}/>
            <Pingpong content={pingpongList[6]} color={'white'}/>
        </RowFlexDiv>
    </PageDiv>
    )
}
export default Home