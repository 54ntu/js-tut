class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username is ${this.username}`);

    }

   static createId(){
        return `123`
    }
}


const swordFish = new User('fishSword')
console.log(swordFish.createId());


