//IIFE: Immediately Invoked Function Expression

const app = (function(){
    const cars = [];
    return {
        add(car){
            cars.push(car);
        },
        delete(index){
            cars.splice(index, 1);
        },
        edit(index, car){
            cars[index] = car;
        },
        get(index){
            return cars[index];
        }
    }
})();