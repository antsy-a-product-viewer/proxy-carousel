import React from 'react'
import {mount, shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ItemDescription from '../client/src/Components/itemDescription.jsx';
import ShippingInformation from '../client/src/Components/ShippingInformation.jsx'
import globalFetch from 'jest-fetch-mock';
import sinon from 'sinon'
import Overview from '../client/src/Components/Overview.jsx'
import ReturnPolicy from '../client/src/Components/ReturnPolicy.jsx';
import SelectionList from '../client/src/Components/SelectionList.jsx';
import renderer from 'react-test-renderer';
configure({ adapter: new Adapter() });

const mockData = [
  {
    "overview":["short id pork picanha nostrud et deserunt mignon meatloaf est meatloaf magna "],
    "shippingTo":["China"," Wales"," Belgium"," Japan"," France"," America"," Germany"," Canada"," Spain"," Brazil"," South Africa"," Belgium"," India"," Mexico"," Argentina"," Ethiopia"," Jamaica"," Brazil"," Sweden"," Denmark"," Switzerland"," Ghana"," Bangladesh"," Switzerland"," Nigeria"," Sri Lanka"," Ireland"," Italy"," Niger"," Sudan"," Italy"," Argentina"," Pakistan"," Cuba"," North Korea"],
    "deliveryDate":["Oct","Oct"],
    "_id":"5c6511ac8f191456a859ab5f","productId":98,"price":92.65,"description":"duis filet short bacon do aliquip nulla do hock in strip nulla in andouille t-bone ribeye ","options":{"ribs":["Picanha","est","meatloaf","andouille","Andouille","steak","quis","consequat","kevin"],"pig":["boudin","Magna","beef","hock","laborum","Excepteur","mignon","id","Ham","dolore","lorem"]},
    "quantityInStock":37,
    "availableToReturn":true,
    "shippingCosts":2.99,
    "manufacturingTime":4,
    "shippingFrom":" France",
    "__v":0
  }
]


describe("Overview Component", () => {
  
  it('Should exist', () => {
    const wrapper = shallow(<ItemDescription/>);
    expect(wrapper.exists()).toBe(true)
  });
  
  it('Should render without throwing an error', () => {
    expect(shallow(<ItemDescription />).find('.description').exists()).toBe(true);
  });
  
  it('Should call componentDidMount', () => {
    const mount = jest.spyOn(ItemDescription.prototype, 'componentDidMount');
    const wrapper = shallow(<ItemDescription />);
    expect(ItemDescription.prototype.componentDidMount).toHaveBeenCalled();
    mount.mockRestore();
  });
  
  it('Should invoke functions after components mounted', () => {
    const getFindQuantity = jest.spyOn(ItemDescription.prototype, 'findQuantity');
    const getPostingDescription = jest.spyOn(ItemDescription.prototype, 'postingDescription')
    mount(<ItemDescription />);
    expect(getFindQuantity).toHaveBeenCalledTimes(1);
    expect(getPostingDescription).toHaveBeenCalledTimes(1);
  });
  
  it('Should stimulate a click event when adding to cart', () => {
    const onButtonClick = sinon.spy(ItemDescription.prototype, 'addedToCart');
    const wrapper = shallow(<ItemDescription addedToCart={onButtonClick}/>);
    wrapper.find('.addToCart').simulate('click', { preventDefault() {} });
    expect(onButtonClick.calledOnce).toBe(true)
  });

  it('Should open the modal when its state is opened', () => {
    const props = {askedQuestion: true};
    const wrapper = shallow(<ItemDescription {...props}/>);
    wrapper.update();
    expect(wrapper.find('.questionsModal').exists()).toEqual(true)
  })
})

// describe('AddToCart', () => {
//   const cart = renderer
//     .create(<Cart />)
//     .toJSON();
//   expect(cart).toMatchSnapshot(); 
// })

describe('Return Policy', () => {
  it('Should exist', () => {
    // const mount = jest.spyOn(ReturnPolicy.prototype, 'componentDidMount');
    const wrapper = shallow(<ReturnPolicy data={mockData}/>);
    expect(wrapper.exists()).toBe(true)
    // mount.mockRestore();    
  })
  it('Should open the Return Policy on click', () => {
    jest.spyOn(ReturnPolicy.prototype, 'showReturnPolicy');
    const wrapper = shallow(<ReturnPolicy data={mockData}/>);
    wrapper.find('.Return').simulate('click');
    expect(ReturnPolicy.prototype.showReturnPolicy).toHaveBeenCalled();
  })
  it('Should close the return policy on click', () => {
    jest.spyOn(ReturnPolicy.prototype, 'closeReturnPolicy');
    const wrapper = shallow(<ReturnPolicy data={mockData} />);
    wrapper.find('.Return').simulate('click');
    wrapper.find('.closePolicy').simulate('click');
    expect(ReturnPolicy.prototype.closeReturnPolicy).toHaveBeenCalled();
  })
})

describe('Selection List', () => {
  it('Should run component did mount', () => {
    const mounted = jest.spyOn(SelectionList.prototype, 'componentDidMount')
    const wrapper = mount(<SelectionList data={mockData}/>);
    expect(SelectionList.prototype.componentDidMount).toHaveBeenCalled();
    mounted.mockRestore();
  });
  it('Should return an empty div if there are no state changes', () => {
    const wrapper = shallow(<SelectionList data={mockData}/>);
    expect(wrapper.find('.selectionList').length).toEqual(1);
  });

describe('Overview', () => {
  it ('should exist', () => {
    const wrapper = mount(<Overview data={mockData}/>);
    expect(wrapper.exists()).toBe(true);
  })
  it ('Should invoke componentDidMount', () => {
    const mounted = jest.spyOn(Overview.prototype, 'componentDidMount');
    const wrapper = shallow(<Overview data={mockData}/>);
    expect(Overview.prototype.componentDidMount).toHaveBeenCalled();
  })
  // it ('Should display the correct overview', () => {
  //   const wrapper = shallow(<OverviewListEntry data={mockData}/>);
  //   let overviewData = document.getElementsByClassName('overview').childNodes.item(0).nodeValue
  //   console.log(overviewData, 'data')
  //   expect(wrapper.find(overviewData)).toEqual('short id pork picanha nostrud et deserunt mignon meatloaf est meatloaf magna')
  // })
});

describe('Shipping Information', () => {
  it ('Should invoke component did mount', () => {
    const mounted = jest.spyOn(ShippingInformation.prototype, 'componentDidMount');
    const wrapper = shallow(<ShippingInformation data={mockData}/>);
    expect(ShippingInformation.prototype.componentDidMount).toHaveBeenCalled();
  });

  it ("Should show the amount of time it takes to ship if information entered", () => {
    const props = {enteredShippingInfo : true};
    const wrapper = shallow(<ShippingInformation data={mockData} {...props}/>);
    expect(wrapper.find('.manufacturingTime').length).toEqual(1);
  });

})

})
