
class Observable {
    Observer = {};
    constructor() {
        
    }
    registerObserver=(key,fnc)=>{
        this.Observer[key] = fnc;
    }
    emit=(key,value)=>{
        console.log('emit calls with key '+key);
        return this.Observer[key](value);
    }
}
export default new Observable();
