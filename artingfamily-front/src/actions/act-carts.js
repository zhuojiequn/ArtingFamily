export const cartToolsAction = (changeNum,goodInfor)=>{
    return{
        type:'cartTools',
        payload:{
            changeNum:changeNum,
            goodInfor:goodInfor
        }
    }
}