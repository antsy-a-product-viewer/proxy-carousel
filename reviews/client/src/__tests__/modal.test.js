import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount } from 'enzyme';
import Modal from '../components/Modal.jsx';
import Container from '../components/Container.jsx'

configure({ adapter: new Adapter() });

it('should render correctly when props.showModal is true', () => {
  const props = {
    modalReview: 0,
    showModal: true
  };
  const modal = shallow(<Modal showModal={props.showModal} review={reviewImages[props.modalReview]}/>);
  
  expect(modal).toMatchSnapshot();
});

// it('should display the modal when showModal state is true', () =>{
//   const props = {
//     modalReview: 0,
//     showModal: true
//   };
//   const modal = mount(<Modal showModal={props.showModal} review={reviewImages[props.modalReview]}/>)

//   console.log(container.find('.modal').debug());

//   expect(container.find('.modal').exists()).toEqual(true);
// });

const reviewImages = [
  {
    "review_id": 242,
    "review_img": "https://s3-us-west-1.amazonaws.com/antsyreviewimages/00242.jpg",
    "review": "You can't calculate the panel without bypassing the mobile SMS array!",
    "stars": 2,
    "created_at": "2014-08-02T02:54:51.000Z",
    "item_img": "https://s3-us-west-1.amazonaws.com/antsyitemsimages/00087.jpg",
    "item_name": "Rustic Plastic Chips",
    "price": 474,
    "user_name": "Peter Blick DDS",
    "user_img": "https://s3-us-west-1.amazonaws.com/antsyuserimages/00016.jpg"
  }
];
