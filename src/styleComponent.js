import styled from 'styled-components'
const PageDiv = styled.div`
    display: flex;
    min-width:'700px';
    width: 100%;
    position: relative;
    align-items: center;
    flex-direction: column;
     /* border: solid 2px rgb(181, 207, 29); */
`
const SmallFlexDiv = styled.div`
    /* border:solid 2px rgb(181, 207, 29); */
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
`
const ColumnFlexDiv = styled.div`
    display: flex; 
    min-width:'700px';
    width: 95%;
    position: relative;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    /* border: solid 2px rgb(181, 207, 29); */
`
const RowFlexDiv = styled.div`
    display: flex;
    min-width:'700px';
    width: 100%;
    position: relative;
    justify-content: center;
    align-items: center;
    /* border: solid 2px rgb(181, 207, 29);  */
`

const BlockDiv = styled.div`
    display: flex;
    min-width: '700px';
    min-height: '100px';
    width: 100%;
    position: relative;
    justify-content: center;
    align-items: center;
    border: solid 2px rgb(256, 0, 0);
    margin: 20px 10px 10px 10px;
    padding: 10px 10px 10px 10px;
`
export {PageDiv,SmallFlexDiv,ColumnFlexDiv,RowFlexDiv,BlockDiv}