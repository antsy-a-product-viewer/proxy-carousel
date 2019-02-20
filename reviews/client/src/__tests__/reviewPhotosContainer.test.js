import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount, shallow } from 'enzyme';
import ReviewPhotosContainer from '../components/ReviewPhotosContainer.jsx';

configure({ adapter: new Adapter() });

it('should render correctly with reviewImages from props', () => {
  const props = {
    reviewImages: reviewImages
  };
  const reviewPhotosContainer = shallow(<ReviewPhotosContainer reviewImages={props.reviewImages}/>);
  
  expect(reviewPhotosContainer).toMatchSnapshot();
});

const reviewImages = [
  {
    "review_id": 119,
    "review_img": "https://s3-us-west-1.amazonaws.com/antsyreviewimages/00119.jpg",
    "review": "Try to hack the SQL transmitter, maybe it will navigate the multi-byte bus!",
    "stars": 4,
    "created_at": "2014-03-14T22:37:45.000Z",
    "item_img": "https://s3-us-west-1.amazonaws.com/antsyitemsimages/00030.jpg",
    "item_name": "Handmade Concrete Salad",
    "price": 155,
    "user_name": "Zella Blick"
  },
  {
      "review_id": 35,
      "review_img": "https://s3-us-west-1.amazonaws.com/antsyreviewimages/00035.jpg",
      "review": "I'll generate the cross-platform COM firewall, that should driver the XSS pixel!",
      "stars": 0,
      "created_at": "2014-03-27T15:37:49.000Z",
      "item_img": "https://s3-us-west-1.amazonaws.com/antsyitemsimages/00091.jpg",
      "item_name": "Rustic Metal Chair",
      "price": 699,
      "user_name": "Deangelo Schuppe"
  },
  {
      "review_id": 48,
      "review_img": "https://s3-us-west-1.amazonaws.com/antsyreviewimages/00048.jpg",
      "review": "The JSON program is down, override the neural firewall so we can reboot the CSS card!",
      "stars": 2,
      "created_at": "2014-05-30T15:12:28.000Z",
      "item_img": "https://s3-us-west-1.amazonaws.com/antsyitemsimages/00081.jpg",
      "item_name": "Intelligent Fresh Car",
      "price": 198,
      "user_name": "Adelbert Kovacek"
  },
  {
      "review_id": 141,
      "review_img": "https://s3-us-west-1.amazonaws.com/antsyreviewimages/00141.jpg",
      "review": "Use the virtual TCP driver, then you can bypass the redundant alarm!",
      "stars": 0,
      "created_at": "2014-08-16T12:50:16.000Z",
      "item_img": "https://s3-us-west-1.amazonaws.com/antsyitemsimages/00030.jpg",
      "item_name": "Handmade Concrete Salad",
      "price": 155,
      "user_name": "Jackson Trantow"
  },
  {
      "review_id": 164,
      "review_img": "https://s3-us-west-1.amazonaws.com/antsyreviewimages/00164.jpg",
      "review": "I'll transmit the bluetooth SSL driver, that should card the USB driver!",
      "stars": 1,
      "created_at": "2014-09-18T05:37:56.000Z",
      "item_img": "https://s3-us-west-1.amazonaws.com/antsyitemsimages/00072.jpg",
      "item_name": "Ergonomic Concrete Tuna",
      "price": 795,
      "user_name": "Avis Quitzon"
  }
];