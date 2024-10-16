
type HelloProps = {
    firstName:string;
    lastName?:string;
    age?:number;
}

export function sayHelloFunction(user:HelloProps){
    console.log("Hello This is my first package");
    console.log(`Your first name is ${user.firstName}`);

    if(user.lastName)
    {
        console.log(`Your last name is ${user.lastName}`);
    }

    if(user.age)
    {
        console.log(`Your age is ${user.age}`);
    }
}