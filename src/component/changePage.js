import {RowFlexdiv} from "../styleComponent"
import Button from '@mui/material/Button';
const ChangePage=({
    isFirstPage,
    setSearchParams,
    nowPage,
    isLastPage,
    searchParams
})=>{
    return(
        <RowFlexdiv>
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
            </RowFlexdiv>
    )
}
export default ChangePage