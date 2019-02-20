import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount, shallow } from 'enzyme';
import ReviewPhotosCarousel from '../components/ReviewPhotosCarousel.jsx';

configure({ adapter: new Adapter() });

it('should render correctly with no props', () => {
  const props = {
    reviewImages: reviewImages
  };
  const reviewPhotosCarousel = shallow(<ReviewPhotosCarousel reviewImages={props.reviewImages}/>);
  
  expect(reviewPhotosCarousel).toMatchSnapshot();
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
  },
  {
    "review_id": 20,
    "review_img": "https://s3-us-west-1.amazonaws.com/antsyreviewimages/00020.jpg",
    "review": "generating the bandwidth won't do anything, we need to compress the mobile SCSI pixel!",
    "stars": 5,
    "created_at": "2014-12-18T14:24:31.000Z",
    "item_img": "https://s3-us-west-1.amazonaws.com/antsyitemsimages/00030.jpg",
    "item_name": "Handmade Concrete Salad",
    "price": 155,
    "user_name": "Avis Quitzon"
},
{
    "review_id": 186,
    "review_img": "https://s3-us-west-1.amazonaws.com/antsyreviewimages/00186.jpg",
    "review": "Use the digital AGP panel, then you can input the solid state feed!",
    "stars": 2,
    "created_at": "2015-03-26T18:14:59.000Z",
    "item_img": "https://s3-us-west-1.amazonaws.com/antsyitemsimages/00072.jpg",
    "item_name": "Ergonomic Concrete Tuna",
    "price": 795,
    "user_name": "Leland Conroy"
},
{
    "review_id": 37,
    "review_img": "https://s3-us-west-1.amazonaws.com/antsyreviewimages/00037.jpg",
    "review": "I'll connect the online ADP bandwidth, that should driver the JBOD system!",
    "stars": 3,
    "created_at": "2015-04-07T01:37:02.000Z",
    "item_img": "https://s3-us-west-1.amazonaws.com/antsyitemsimages/00030.jpg",
    "item_name": "Handmade Concrete Salad",
    "price": 155,
    "user_name": "Avis Quitzon"
},
{
    "review_id": 167,
    "review_img": "https://s3-us-west-1.amazonaws.com/antsyreviewimages/00167.jpg",
    "review": "If we hack the system, we can get to the AGP bandwidth through the primary HTTP firewall!",
    "stars": 3,
    "created_at": "2015-07-21T23:47:15.000Z",
    "item_img": "https://s3-us-west-1.amazonaws.com/antsyitemsimages/00095.jpg",
    "item_name": "Unbranded Metal Fish",
    "price": 740,
    "user_name": "Avis Quitzon"
},
{
    "review_id": 143,
    "review_img": "https://s3-us-west-1.amazonaws.com/antsyreviewimages/00143.jpg",
    "review": "You can't calculate the hard drive without indexing the cross-platform HDD driver!",
    "stars": 0,
    "created_at": "2016-02-02T09:34:09.000Z",
    "item_img": "https://s3-us-west-1.amazonaws.com/antsyitemsimages/00081.jpg",
    "item_name": "Intelligent Fresh Car",
    "price": 198,
    "user_name": "Emerson Metz"
}
];