// code your solution here
const superbowlWin = objs => {
    let obj = (objs.find(obj => {
        return obj.result==="W" ? true : false
    }))

    return obj ? obj.year : undefined
}
