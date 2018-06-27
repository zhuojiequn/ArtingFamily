
function getGoods(state = {
    cartGoods:[],
    totalPrice:0,
    totalNum:0
 },
     action
 ){    
     function cartTools(){
         var index = null;
         if(action.payload.goodInfor){
             for(var i=0;i<=state.cartGoods.length-1;i++){ //查找对应的商品
                 if(action.payload.goodInfor._id==state.cartGoods[i]._id){
                     index = i;
                 }
             }
             if(index != null){//购物车查找到对应商品时
                 if(action.payload.changeNum != 0){//增加或者减少操作
                     state.cartGoods[index].num +=  action.payload.changeNum;
                     state.cartGoods[index].price = state.cartGoods[index].num * state.cartGoods[index].price1;
                     if(state.cartGoods[index].num == 0){//删除
                         state.cartGoods.splice(index,1);
                     }
                 }else if(action.payload.changeNum == 0){
                     state.cartGoods.splice(index,1);
                 }
             }else{//没有查找到对应商品时
                 action.payload.goodInfor.num = action.payload.changeNum;
                 action.payload.goodInfor.price = action.payload.goodInfor.price1;
                 state.cartGoods.push(action.payload.goodInfor);
             }
         }   
         state.totalNum = 0;
         state.totalPrice = 0;
         for(var j = 0;j < state.cartGoods.length; j++){   //总共数量的计算
             state.totalNum += state.cartGoods[j].num;
             state.totalPrice += state.cartGoods[j].price;
         }
         return {
             CartGoods:state.cartGoods,
             TotalNum:state.totalNum,
             TotalPrice:state.totalPrice
         }
     }
     switch(action.type){
         case 'cartTools':
         var newState = cartTools();
         return{
             ...state,
             cartGoods:[...newState.CartGoods],
             totalNum:newState.TotalNum,
             totalPrice:newState.TotalPrice
         }
         default:
          return state;
     }
 }
 export default getGoods;