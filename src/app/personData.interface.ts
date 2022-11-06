export interface IpersonData{
    name: string,
    isStudent: boolean,
    email: string,
    address: Iaddress
      
    

}
export interface Iaddress{
    street: string,
    suite: string,
    city: string,
    zipcode:number
}