let UUID = 0
// this will increase as we create more components
export default function UniqueID(){
    const getID = ()=>{
        UUID++
        return UUID
    }
    return{
        getID
    }
}