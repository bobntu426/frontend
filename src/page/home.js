import Pingpong from '../component/home/pingpong.js'
import styled from 'styled-components'
const Flexdiv = styled.div`
    display: flex;
    background: white;
    min-width:'700px';
    height: 88vh;
    width: 100%;
    position: relative;
    justify-content: center;
    `
const Home=()=>{
    
    const pingpongList=[
        {
            name:'近期賽事',
            introduction:'近期即將舉辦的賽事總覽',
            router:'/event'
        },
        {
            name:'賽事成績',
            introduction:'過去的賽事成績一覽',
            router:'/result'
        },
        {
            name:'選手專區',
            introduction:'選手資訊查詢',
            router:'/playerList'
        },
        {
            name:'排名',
            introduction:'選手在各種項目的排名',
            router:'/ranking'
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
    <Flexdiv>
        <Pingpong content={pingpongList[0]} color={'white'}/>
        <Pingpong content={pingpongList[1]} color={'orange'}/>
        <Pingpong content={pingpongList[2]} color={'white'}/>
        <Pingpong content={pingpongList[3]} color={'orange'}/>
        <Pingpong content={pingpongList[4]} color={'white'}/>
        <Pingpong content={pingpongList[5]} color={'orange'}/>
    </Flexdiv>
    )
}
export default Home