
export const enum GenderType{
    MALE= "male",
    FEMALE="female"
}

//add user

export const users:Users={
 register: [
    {
        userid:"1",
        firstName:"Adebayo",
        lastname:"Michael",
        age:23,
        gender:GenderType.MALE,
        email:"mcgamma04@gmail.com",
        password:"password12",
    },
    {
        userid:"2",
        firstName:"Ebuka",
        lastname:"Emmanuel",
        age:35,
        gender:GenderType.MALE,
        email:"ebuka@gmail.com",
        password:"password12",
    },

    {
        userid:"3",
        firstName:"Ubadinma",
        lastname:"Blessing",
        age:28,
        gender:GenderType.FEMALE,
        email:"greatuba@gmail.com",
        password:"password12",
    },
 ]
}

interface Users{
    register:{
    userid:string,
    firstName:string,
    lastname:string,
    age:number,
    gender: GenderType,
    email:string,
    password:string
}[]
}