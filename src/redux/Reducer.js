import { ASC, DESC, GET_ALL } from "./ActionType"



const init = {
    data :[]
}
export const reducer = (store = init , {type , paylaod}) =>{
    switch(type){

        case GET_ALL:{
            return {...store , data :paylaod}
        }

        case ASC :{
            let sorted  = store.data
            sorted.sort((a,b)=>{
                return a.price - b.price
            })

            return {...store , data:sorted}
        }
        case DESC :{
            
            let sorted  = store.data)
            sorted.sort((a,b)=>{
                return b.price - a.price
            })

            return {...store , data:sorted}
        }


    default:return {...store}
    }
}
