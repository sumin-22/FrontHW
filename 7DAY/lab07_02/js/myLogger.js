export function log(data){
    console.log(data);
}

export const getTime = () => {
    return Date.now();
}

export const getCurrentHour = () => {
    return (new Date).getHours();
}

// class
export class MyLogger2{
    constructor(props){
        this.lectures = ['Javascript','HTML','CSS3'];
    }
    getLectures(){
        return this.lectures;
    }
    getTime(){
        return Date.now
    }
}