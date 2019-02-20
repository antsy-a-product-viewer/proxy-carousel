import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount } from 'enzyme';
import Review from '../components/Review.jsx';

configure({ adapter: new Adapter() });

it('should render correctly with no props', () => {
  const props = {
    review: review
  };
  const component = shallow(<Review key={props.review.review_id} review={props.review}/>);
  
  expect(component).toMatchSnapshot();
});

it('should render as many stars as the review contained', () => {
  const props = {
    review: review
  };
  const component = mount(<Review key={props.review.review_id} review={props.review} stars={review.stars}/>);

  expect(component.find('.review-star')).toHaveLength(4);
});

const review = {
  'review_id': 35,
  'user_img': 'https://s3-us-west-1.amazonaws.com/antsyuserimages/00024.jpg',
  'user_name': 'Deangelo Schuppe',
  'created_at': '2014-03-27T15:37:49.000Z',
  'stars': 4,
  'review': 'I\'ll generate the cross-platform COM firewall, that should driver the XSS pixel!',
  'item_id': 91,
  'item_img': 'https://s3-us-west-1.amazonaws.com/antsyitemsimages/00091.jpg',
  'item_name': 'Rustic Metal Chair'
};
