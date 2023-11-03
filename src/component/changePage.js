import {RowFlexDiv} from "../styleComponent"
import Button from '@mui/material/Button';
const ChangePage=({
    isFirstPage,
    setSearchParams,
    nowPage,
    isLastPage,
    searchParams
})=>{
    return(
        <RowFlexDiv>
                <Button 
                    variant="outlined"
                    disabled={isFirstPage}
                    onClick={()=>{
                        searchParams.set('page',parseInt(nowPage)-1)
                        setSearchParams(searchParams)
                    }}
                    style={{
                        position:'relative',
                        bottom:'-5vh'
                    }}
                >
                    上一頁
                </Button>
                <Button 
                    variant="outlined"
                    disabled={isLastPage}
                    onClick={()=>{
                        searchParams.set('page',parseInt(nowPage)+1)
                        setSearchParams(searchParams)
                    }}
                    style={{
                        position:'relative',
                        bottom:'-5vh'
                    }}
                >
                    下一頁
                </Button>
            </RowFlexDiv>
    )
}
export default ChangePage