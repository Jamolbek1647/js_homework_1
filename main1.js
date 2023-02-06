const person = Object.create({
    fullname: function(){
        return ${this.firstname} ${this.lastname}
    }
},
    {
        firstname: {
            value: Jamolbek,
            writable: true
        },
        lastname: {
            value: Ikromov,
            writable: true
        },
        age: {
            value: 28,
            writable:true
        }
    }
);