import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

export const GET_PEOPLE = gql`
  query($gender:Gender) {
    getPeople(gender:$gender){
      name
      score
      school
      id
      popular
      gender
    }
  }
`;
export const GET_PERSON_BY_ID = gql`
  query($id:Int){
    getPersonById(id:$id){
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
export const GET_TWENTY_PEOPLE = gql`
  query($maximum:Int,$minimum:Int,$gender:Gender){
    getTwentyPeople(maximum:$maximum,minimum:$minimum,gender:$gender){
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
export const GET_PEOPLE_NUM = gql`
query($gender:Gender){
 getPeopleNum(gender:$gender)
}
`

export const GET_EVENT = gql`
  query($state:EventState){
    getEvent(state:$state){
      name
      date
      location
      host
      info
      id
      state
      result{
        manGroup{
          first
          second
          third
          fourth
        }
        womanGroup{
          first
          second
          third
          fourth
        }
        manSingle{
          first
          second
          third
          fourth
        }
        womanSingle{
          first
          second
          third
          fourth
        }
        manDouble{
          first
          second
          third
          fourth
        }
        womanDouble{
          first
          second
          third
          fourth
        }
        mixDouble{
          first
          second
          third
          fourth
        }
      }
    }
  }
`

export const GET_EVENT_NUM = gql`
query($state:EventState){
 getEventNum(state:$state)
}
`


