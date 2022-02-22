import { RowFlexdiv,SmallFlexDiv } from "../../styleComponent"
const ListProject = ({
    rankTypeList,
    nowGender,
    searchParams,
    setSearchParams,
    nowPage,
    refetch,
    refetchNumberData
})=>{
    
    return(
        <RowFlexdiv style={{
            marginTop:'5vw',
            marginBottom:'2vw',
            borderBottom: 'solid 1px #c5d1dd'
        }}>
            {
                rankTypeList.map((o,index)=>
                    <SmallFlexDiv 
                        key={index}
                        style={
                            nowGender==rankTypeList[index].gender?
                            {cursor:'pointer',borderBottom:'solid 2px red'}:
                            {cursor:'pointer',borderBottom:'none'}
                        }
                        onMouseOver={(e)=>{
                            
                            if(nowGender!=rankTypeList[index].gender){
                                e.currentTarget.style.backgroundColor = '#c5d1dd'
                                e.currentTarget.style.borderBottom = 'solid 2px #c5d1dd'
                            }
                        }}
                        onMouseOut={(e)=>{
                            if(nowGender!=rankTypeList[index].gender){
                                e.currentTarget.style.borderBottom = 'solid 2px white'
                            }
                            e.currentTarget.style.backgroundColor = 'white'
                        }}
                        onMouseDown={()=>{
                            searchParams.set('gender',rankTypeList[index].gender)
                            searchParams.set('page',1)
                            setSearchParams(searchParams)
                            refetch({
                                minimum:nowPage*20-19,
                                maximum:nowPage*20,
                                gender:rankTypeList[index].gender,
                            })
                            refetchNumberData({
                                variables:{gender:rankTypeList[index].gender,type:'single'}
                            })
                        }}
                    >
                        <p>{o.chi}</p>
                    </SmallFlexDiv>
                )
            }
            

        </RowFlexdiv>
    )
}
export default ListProject