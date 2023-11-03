import { RowFlexDiv,SmallFlexDiv } from "../../styleComponent"
const RankProject = ({
    rankTypeList,
    nowType,
    searchParams,
    setSearchParams,
    nowPage,
    refetchSingleData,
    refetchDoubleData,
    refetchNumberData
})=>{
    
    return(
        <RowFlexDiv style={{
            marginTop:'5vw',
            marginBottom:'2vw',
            borderBottom: 'solid 1px #c5d1dd'
        }}>
            {
                rankTypeList.map((o,index)=>
                    <SmallFlexDiv 
                        key={index}
                        style={nowType==index?{cursor:'pointer',borderBottom:'solid 2px red'}:{cursor:'pointer',borderBottom:'none'}}
                        onMouseOver={(e)=>{
                            if(nowType!=index){
                                e.currentTarget.style.backgroundColor = '#c5d1dd'
                                e.currentTarget.style.borderBottom = 'solid 2px #c5d1dd'
                            }
                        }}
                        onMouseOut={(e)=>{
                            if(nowType!=index){
                                e.currentTarget.style.borderBottom = 'solid 2px white'
                            }
                            e.currentTarget.style.backgroundColor = 'white'
                        }}
                        onMouseDown={()=>{
                            searchParams.set('type',index)
                            searchParams.set('page',1)
                            setSearchParams(searchParams)
                            if(rankTypeList[index].type=='single')
                                refetchSingleData({
                                    minimum:nowPage*20-19,
                                    maximum:nowPage*20,
                                    gender:o.gender,
                                })
                            else{
                                refetchDoubleData({
                                    minimum:nowPage*20-19,
                                    maximum:nowPage*20,
                                    gender:o.gender,
                                })
                                refetchNumberData({
                                    variables:{gender:rankTypeList[index].gender,type:rankTypeList[index].type}
                                })
                            }


                        }}
                    >
                        <p>{o.chi}</p>
                    </SmallFlexDiv>
                )
            }
            

        </RowFlexDiv>
    )
}
export default RankProject