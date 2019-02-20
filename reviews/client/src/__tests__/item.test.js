import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import Item from '../components/Item.jsx';

configure({ adapter: new Adapter() });

it('should render price with if props.price is set to true', () => {
  const review = {
    'review_id': 119,
    'user_img': 'https://s3-us-west-1.amazonaws.com/antsyuserimages/00027.jpg',
    'user_name': 'Zella Blick',
    'created_at': '2014-03-14T22:37:45.000Z',
    'stars': 4,
    'review': 'Try to hack the SQL transmitter, maybe it will navigate the multi-byte bus!',
    'item_id': 30,
    'item_img': 'https://s3-us-west-1.amazonaws.com/antsyitemsimages/00030.jpg',
    'item_name': 'Handmade Concrete Salad'
  };
  
  const props = {
    showPrice: 'true',
    review: review
  };

  const item = shallow(<Item key={props.review.item_id} showPrice={props.showPrice} review={props.review}/>);
  
  expect(item).toMatchSnapshot();
});