class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`welcom Mr/Mrs. ${this.username}`)
    }
}

class Teacher extends User{
        constructor(username,email,password) {
            super(username)
            this.email = email
            this.password = password
            
        }

        addCourse(){
            console.log(`a new course is added by ${this.username}`);
        }
    
}


const coffee = new Teacher("coffee","coffee@gmail.com", 'co123')
coffee.addCourse();
coffee.logMe()

const lol = new User('lol123')
lol.logMe()


console.log(coffee ===lol)
