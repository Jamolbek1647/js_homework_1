const person = Object.create({},
    {
        firstname: {
            value: String,
            writable: true
        },
        lastname: {
            value: String,
            writable: true
        },
        age: {
            value: Number,
            writable:true
        }
    }
);
const address = Object.create({},
    {   
        country: {
            value: String,
            writable: true
        },
        viloyat: {
            value: String, 
            writable: true
        },
        tuman: {
            value: String,
            writable: true
        },
        mahalla: {
            value: String,
            writable: true
        },
        kocha:{
            value: String,
            writable: true
        }
    }

)
person.firstname = 'Kamol';
person.lastname = 'Ikromov';
person.age = 25;
// console.log(person);

function Person(firstname, lastname, age, address){
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.address = address;
}
const p1 = new Person('Kamol', 'Ikromov', 25, {country:'Uzbekiston', viloyat:'Buxoro', tuman:'Buxoro', mahalla:'Mohitobon', kocha:'Gijduvoniy'})
// console.log(p1);

const p2 = new Person('Bekzod', 'Sharipov', 26, {country:'Uzbekiston', viloyat:'Buxoro', tuman:'Buxoro', mahalla:'Alisher Navoiy', kocha:'Trikotaj'})
// console.log(p2);



const talaba_info1 = Object.create({},
    {
        firstname:{
            value: String,
            writable:true
        },
        lastname:{
            value: String,
            writable: true
        },
        age:{
            value:Number,
            writable:true
        }
    })
const talaba_info2 = Object.create({},
    {
        oquv_joyi:{
            value:String,
            writable:true
        },
        kurs:{
            value:Number,
            writable:true
        },
        yonalish:{
            value:String,
            writable:true
        }
    })
function student(firstname, lastname, age, talaba_info2){
    this.firstname = firstname
    this.lastname = lastname
    this.age = age
    this.talaba_info2 = talaba_info2
}
const p3 = new student('Madina', 'Matqulova', 24, {oquv_joyi: 'TATU', kurs: 3, yonalish:'DIF'})
// console.log(p3);


const main_info = Object.create({},{
    car_name:{
        value:String,
        writable:true
    },
    car_color:{
        value:String,
        writable:true
    },
    car_price:{
        value:String,
        writable: true
    }
}) 
const configaration = Object.create({},{
    ot_kuchi:{
        value:Number,
        writable:true
    },
    dvigatel_hajmi:{
        value:Number,
        writable:true
    },
    bak_hajmi:{
        value:Number,
        writable:true
    }
})
function Car(car_name,car_color,car_price,configaration){
    this.car_name = car_name,
    this.car_color = car_color,
    this.car_price = car_price,
    this.configaration = configaration
}
const p4 = new Car('Nexia-3', 'white', 110000,{ot_kuchi:120, dvigatel_hajmi:12, bak_hajmi:50})
console.log(p4);