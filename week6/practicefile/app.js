const car = {
    nama: 'Evance',
    model: 'Tayota',
    age: '25 years',
    start: function(){
        console.log(`started ${this.nama} ${this.model} ${this.age}`);
    },
    stop: () =>{
        console.log(`Started ${this.nama} ${this.model} ${this.age}`)
    }
}
document.getElementById("head01").innerHTML = car.nama
document.getElementById("head02").innerHTML = car.model
document.getElementById("head03").innerHTML = car.age