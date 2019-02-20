import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount, shallow } from 'enzyme';
import Container from '../components/Container.jsx';
import ReviewContainer from '../components/ReviewContainer';

configure({ adapter: new Adapter() });

it('should render correctly with props', () => {
  const props = {
    reviews: reviews,
    limit: 4,
    showPrice: 'false'
  };
  const reviewContainer = shallow(<ReviewContainer reviews={props.reviews} limit={props.limit} showPrice={props.showPrice}/>);
  
  expect(reviewContainer).toMatchSnapshot();
});

it('should render only the number of reviews sent as the limit', () => {
  const props = {
    reviews: reviews,
    limit: 20,
    showPrice: 'false'
  };
  const reviewContainer = mount(<ReviewContainer reviews={props.reviews} limit={props.limit} showPrice={props.showPrice}/>);
  
  expect(reviewContainer.find('.review')).toHaveLength(20);
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
      "review_id": 48,
      "user_img": "https://s3-us-west-1.amazonaws.com/antsyuserimages/00018.jpg",
      "user_name": "Adelbert Kovacek",
      "created_at": "2014-05-30T15:12:28.000Z",
      "stars": 2,
      "review": "The JSON program is down, override the neural firewall so we can reboot the CSS card!",
      "item_id": 81,
      "item_img": "https://s3-us-west-1.amazonaws.com/antsyitemsimages/00081.jpg",
      "item_name": "Intelligent Fresh Car"
  },
  {
      "review_id": 141,
      "user_img": "https://s3-us-west-1.amazonaws.com/antsyuserimages/00025.jpg",
      "user_name": "Jackson Trantow",
      "created_at": "2014-08-16T12:50:16.000Z",
      "stars": 0,
      "review": "Use the virtual TCP driver, then you can bypass the redundant alarm!",
      "item_id": 30,
      "item_img": "https://s3-us-west-1.amazonaws.com/antsyitemsimages/00030.jpg",
      "item_name": "Handmade Concrete Salad"
  },
  {
      "review_id": 164,
      "user_img": "https://s3-us-west-1.amazonaws.com/antsyuserimages/00022.jpg",
      "user_name": "Avis Quitzon",
      "created_at": "2014-09-18T05:37:56.000Z",
      "stars": 1,
      "review": "I'll transmit the bluetooth SSL driver, that should card the USB driver!",
      "item_id": 72,
      "item_img": "https://s3-us-west-1.amazonaws.com/antsyitemsimages/00072.jpg",
      "item_name": "Ergonomic Concrete Tuna"
  },
  {
      "review_id": 590,
      "user_img": "https://s3-us-west-1.amazonaws.com/antsyuserimages/00010.jpg",
      "user_name": "Jalen Paucek",
      "created_at": "2014-09-18T08:30:48.000Z",
      "stars": 3,
      "review": "You can't connect the sensor without calculating the neural EXE protocol!",
      "item_id": 95,
      "item_img": "https://s3-us-west-1.amazonaws.com/antsyitemsimages/00095.jpg",
      "item_name": "Unbranded Metal Fish"
  },
  {
      "review_id": 785,
      "user_img": "https://s3-us-west-1.amazonaws.com/antsyuserimages/00016.jpg",
      "user_name": "Rashawn Lubowitz",
      "created_at": "2014-11-02T04:42:18.000Z",
      "stars": 5,
      "review": "transmitting the pixel won't do anything, we need to override the digital SCSI matrix!",
      "item_id": 30,
      "item_img": "https://s3-us-west-1.amazonaws.com/antsyitemsimages/00030.jpg",
      "item_name": "Handmade Concrete Salad"
  },
  {
      "review_id": 259,
      "user_img": "https://s3-us-west-1.amazonaws.com/antsyuserimages/00016.jpg",
      "user_name": "Rashawn Lubowitz",
      "created_at": "2014-11-07T03:06:03.000Z",
      "stars": 3,
      "review": "Use the optical GB monitor, then you can generate the 1080p microchip!",
      "item_id": 42,
      "item_img": "https://s3-us-west-1.amazonaws.com/antsyitemsimages/00042.jpg",
      "item_name": "Licensed Steel Bacon"
  },
  {
      "review_id": 521,
      "user_img": "https://s3-us-west-1.amazonaws.com/antsyuserimages/00025.jpg",
      "user_name": "Jackson Trantow",
      "created_at": "2014-12-12T07:55:43.000Z",
      "stars": 2,
      "review": "The AGP firewall is down, quantify the open-source port so we can navigate the SAS bus!",
      "item_id": 81,
      "item_img": "https://s3-us-west-1.amazonaws.com/antsyitemsimages/00081.jpg",
      "item_name": "Intelligent Fresh Car"
  },
  {
      "review_id": 20,
      "user_img": "https://s3-us-west-1.amazonaws.com/antsyuserimages/00022.jpg",
      "user_name": "Avis Quitzon",
      "created_at": "2014-12-18T14:24:31.000Z",
      "stars": 5,
      "review": "generating the bandwidth won't do anything, we need to compress the mobile SCSI pixel!",
      "item_id": 30,
      "item_img": "https://s3-us-west-1.amazonaws.com/antsyitemsimages/00030.jpg",
      "item_name": "Handmade Concrete Salad"
  },
  {
      "review_id": 735,
      "user_img": "https://s3-us-west-1.amazonaws.com/antsyuserimages/00016.jpg",
      "user_name": "Rashawn Lubowitz",
      "created_at": "2015-03-07T06:04:14.000Z",
      "stars": 3,
      "review": "connecting the hard drive won't do anything, we need to quantify the neural EXE driver!",
      "item_id": 30,
      "item_img": "https://s3-us-west-1.amazonaws.com/antsyitemsimages/00030.jpg",
      "item_name": "Handmade Concrete Salad"
  },
  {
      "review_id": 186,
      "user_img": "https://s3-us-west-1.amazonaws.com/antsyuserimages/00017.jpg",
      "user_name": "Leland Conroy",
      "created_at": "2015-03-26T18:14:59.000Z",
      "stars": 2,
      "review": "Use the digital AGP panel, then you can input the solid state feed!",
      "item_id": 72,
      "item_img": "https://s3-us-west-1.amazonaws.com/antsyitemsimages/00072.jpg",
      "item_name": "Ergonomic Concrete Tuna"
  },
  {
      "review_id": 37,
      "user_img": "https://s3-us-west-1.amazonaws.com/antsyuserimages/00022.jpg",
      "user_name": "Avis Quitzon",
      "created_at": "2015-04-07T01:37:02.000Z",
      "stars": 3,
      "review": "I'll connect the online ADP bandwidth, that should driver the JBOD system!",
      "item_id": 30,
      "item_img": "https://s3-us-west-1.amazonaws.com/antsyitemsimages/00030.jpg",
      "item_name": "Handmade Concrete Salad"
  },
  {
      "review_id": 730,
      "user_img": "https://s3-us-west-1.amazonaws.com/antsyuserimages/00008.jpg",
      "user_name": "Molly Daniel",
      "created_at": "2015-04-24T12:03:38.000Z",
      "stars": 1,
      "review": "If we navigate the application, we can get to the AI firewall through the primary CSS capacitor!",
      "item_id": 72,
      "item_img": "https://s3-us-west-1.amazonaws.com/antsyitemsimages/00072.jpg",
      "item_name": "Ergonomic Concrete Tuna"
  },
  {
      "review_id": 832,
      "user_img": "https://s3-us-west-1.amazonaws.com/antsyuserimages/00017.jpg",
      "user_name": "Leland Conroy",
      "created_at": "2015-05-02T14:06:53.000Z",
      "stars": 4,
      "review": "The AGP capacitor is down, quantify the neural interface so we can transmit the SDD bandwidth!",
      "item_id": 72,
      "item_img": "https://s3-us-west-1.amazonaws.com/antsyitemsimages/00072.jpg",
      "item_name": "Ergonomic Concrete Tuna"
  },
  {
      "review_id": 745,
      "user_img": "https://s3-us-west-1.amazonaws.com/antsyuserimages/00009.jpg",
      "user_name": "Lamont Lindgren",
      "created_at": "2015-06-10T16:55:11.000Z",
      "stars": 4,
      "review": "I'll parse the wireless XSS application, that should port the XML hard drive!",
      "item_id": 4,
      "item_img": "https://s3-us-west-1.amazonaws.com/antsyitemsimages/00004.jpg",
      "item_name": "Generic Steel Soap"
  },
  {
      "review_id": 933,
      "user_img": "https://s3-us-west-1.amazonaws.com/antsyuserimages/00003.jpg",
      "user_name": "Jayde Schroeder",
      "created_at": "2015-07-20T03:26:20.000Z",
      "stars": 4,
      "review": "We need to generate the neural AGP capacitor!",
      "item_id": 42,
      "item_img": "https://s3-us-west-1.amazonaws.com/antsyitemsimages/00042.jpg",
      "item_name": "Licensed Steel Bacon"
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
