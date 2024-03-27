function setUserName(username){
    //complex DB calls
    this.username = username

}


function createUser(username,email,password){
   setUserName.call(this,username) //this call function holds the refrence

    this.email = email
    this.password = password
}

const chai = new createUser("chai","chai@facebook.com","chai123")
console.log(chai);