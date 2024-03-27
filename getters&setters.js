console.log('getters and setters');


// we have some class and we donot want to give access of accessing certain property by other person then we can use getter and setter in the property
// we can use getter and setter property to customize the value
class User{
    constructor(email, password){
        this.email = email
        this.password = password

    }
    get password(){
        return this._password.toUpperCase()
    }
    set password(val){
        this._password= val

    }
}

const lol = new User("lol@gmail.com",'lol123')
console.log(lol.password);