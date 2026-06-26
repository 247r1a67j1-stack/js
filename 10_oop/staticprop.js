class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`USERNAME: ${this.username}`);
        
    }
    static createId(){
        return `123`
    }
}

const hit=new User("hit")
//console.log(hit.createId())

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
}
const iphone=new Teacher("iphone","iph@gmail.com")
iphone.logMe()