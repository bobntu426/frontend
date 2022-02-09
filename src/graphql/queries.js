import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

export const GET_ALL_PEOPLE = gql`
  query {
    getAllPeople{
      name
      score
      school
      id
      popular
      gender
    }
  }
`;
export const GET_ONE_PERSON = gql`
  query($id: Int){
    getOnePerson(id:$id){
      name
      score
      school
      id
      popular
      gender
      rank
    }
  }
`
export const GET_TWENTY_PERSON = gql`
  query($maximum:Int,$minimum:Int){
    getTwentyPeople(maximum:$maximum,minimum:$minimum){
      name
      score
      school
      id
      popular
      gender
      rank
    }
  }
`
export const GET_ALL_PEOPLE_NUM = gql`
query{
 getAllPeopleNum
}
`


