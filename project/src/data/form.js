
const input = (name="",complain="",placeholder="",type="text") => {
    return {name: name, complain: complain, placeholder: placeholder, type: type, }
}

export const details = {
    title: "",
    inputs: [
        input("time","זמן הכנה משוער","60 דקות","time"),
        input("",""),
        input("",""),
        input("",""),
    ],
}

export default details;

