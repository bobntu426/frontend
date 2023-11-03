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
export const CREATE_PERSON = gql`
mutation createPerson(
    $name: String
    $schoolId: Number
    $gender: Gender
    $hand:String
    $playType: String
    ){
        createPerson(
            name:$name
            schoolId: $schoolId
            gender:$gender
            hand:$hand
            playType:$playType
        )
    }`