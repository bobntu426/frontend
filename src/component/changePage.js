import {RowFlexdiv} from "../styleComponent"
import Button from '@mui/material/Button';
const ChangePage=({
    isFirstPage,
    setSearchParams,
    nowPage,
    isLastPage
})=>{
    return(
        <RowFlexdiv>
                <Button 
                    variant="outlined"
                    disabled={isFirstPage}
                    onClick={()=>{
                        setSearchParams({page:parseInt(nowPage)-1})
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
                        setSearchParams({page:parseInt(nowPage)+1})
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