import { gql } from 'apollo-boost';


export const CHECK_PASSWORD = gql`
mutation checkPassword(
    $name: String
    $password: String
    ){  
        checkPassword(
            name:$name
            password:$password
        ){
            name
            success
        }
    }`