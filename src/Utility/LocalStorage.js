import swal from "sweetalert"

const getLocalStorage = () => {
    const checkFirst = localStorage.getItem("donation")
    if(checkFirst){
        return JSON.parse(checkFirst)
    }else{
        return []
    }
}

const setDonationToLocalStorage = (id, price) => {
    const toSetToLocalStorage = getLocalStorage()
    const isExist = toSetToLocalStorage.find(localId => localId === id)
    if(!isExist){
        toSetToLocalStorage.push(id)
        localStorage.setItem("donation", JSON.stringify(toSetToLocalStorage))
        swal(`Good job!`, `Thank you for $${price} donation Here!`, `success`);
    }else{
        swal("Sorry!", "You already donated here!", "error");
    }
}

export { getLocalStorage, setDonationToLocalStorage }