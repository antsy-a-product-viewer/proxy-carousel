import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount, shallow } from 'enzyme';
import Container from '../components/Container.jsx';
import Star from '../components/Star.jsx';

configure({ adapter: new Adapter() });

it('should render correctly with no props', () => {
  const container = shallow(<Container />);
  
  expect(container).toMatchSnapshot();
});

it('should call getData during componentDidMount', () => {
  const getData = jest.spyOn(Container.prototype, 'getData');
  const container = mount(<Container />);

  expect(getData).toHaveBeenCalledTimes(1);
});

it('should set the ReviewContainer limit to 20 when showMore is clicked', () => {
  const showMore = jest.spyOn(Container.prototype, 'showMore');
  const container = shallow(<Container />);
  container.instance().showMore();
  container.update();

  expect(container.find('ReviewContainer').prop('limit')).toEqual(20);
});

const reviews = [
  {
      "review_id": 532,
      "user_img": "https://s3-us-west-1.amazonaws.com/antsyuserimages/00010.jpg",
      "user_name": "Jalen Paucek",
      "created_at": "2014-02-15T21:43:09.000Z",
      "stars": 5,
      "review": "You can't connect the pixel without overriding the auxiliary RSS card!",
      "item_id": 72,
      "item_img": "https://s3-us-west-1.amazonaws.com/antsyitemsimages/00072.jpg",
      "item_name": "Ergonomic Concrete Tuna"
  },
  {
      "review_id": 119,
      "user_img": "https://s3-us-west-1.amazonaws.com/antsyuserimages/00027.jpg",
      "user_name": "Zella Blick",
      "created_at": "2014-03-14T22:37:45.000Z",
      "stars": 4,
      "review": "Try to hack the SQL transmitter, maybe it will navigate the multi-byte bus!",
      "item_id": 30,
      "item_img": "https://s3-us-west-1.amazonaws.com/antsyitemsimages/00030.jpg",
      "item_name": "Handmade Concrete Salad"
  },
  {
      "review_id": 35,
      "user_img": "https://s3-us-west-1.amazonaws.com/antsyuserimages/00024.jpg",
      "user_name": "Deangelo Schuppe",
      "created_at": "2014-03-27T15:37:49.000Z",
      "stars": 0,
      "review": "I'll generate the cross-platform COM firewall, that should driver the XSS pixel!",
      "item_id": 91,
      "item_img": "https://s3-us-west-1.amazonaws.com/antsyitemsimages/00091.jpg",
      "item_name": "Rustic Metal Chair"
  },
  {
      "review_id": 398,
      "user_img": "https://s3-us-west-1.amazonaws.com/antsyuserimages/00014.jpg",
      "user_name": "Stacey Spencer",
      "created_at": "2014-05-01T06:50:00.000Z",
      "stars": 3,
      "review": "We need to reboot the primary XML circuit!",
      "item_id": 4,
      "item_img": "https://s3-us-west-1.amazonaws.com/antsyitemsimages/00004.jpg",
      "item_name": "Generic Steel Soap"
  },
  {
      "review_id": 167,
      "user_img": "https://s3-us-west-1.amazonaws.com/antsyuserimages/00022.jpg",
      "user_name": "Avis Quitzon",
      "created_at": "2015-07-21T23:47:15.000Z",
      "stars": 3,
      "review": "If we hack the system, we can get to the AGP bandwidth through the primary HTTP firewall!",
      "item_id": 95,
      "item_img": "https://s3-us-west-1.amazonaws.com/antsyitemsimages/00095.jpg",
      "item_name": "Unbranded Metal Fish"
  }
]
