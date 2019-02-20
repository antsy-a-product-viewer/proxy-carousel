export default {
  modal: {
    // position: 'fixed',
    // top: 0,
    // left: 0,
    // width: '100%',
    // height: '100%',
    // background: 'rgba(0, 0, 0, 0.6)'
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'fixed',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    padding: '1rem',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex: '9999',
    opacity: 1,
    overflowX: 'hidden',
    overflowY: 'auto',
    animation: 'show .5s ease',
  },

  modalMain: {
    position: 'fixed',
    background: 'white',
    width: '65%',
    height: 565,
    top: '45%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    display: 'flex',
    // width: '100%',
    // backgroundColor: '#fff',
    // boxShadow: [0, 0, '0.625rem', 'rgba(0, 0, 0, 0.2)'],
    // minWidth: 576,
    // width: 576
  },

  reviewContent: {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: 500,
    maxHeight: 500
  },

  image: {
    width: 565,
    height: 565,
  },

  button: {
    padding: 'none',
    border: 'none',
    background: 'none',
    cursor: 'pointer',
    display: 'block',
    float: 'right',
    zIndex: 3,
    position: 'absolute',
    right: 5,
    top: 5,
  },

  buttonImg: {
    width: 20,
    height: 20,
    background: 'white',
    margin: 10
  },

  profileImg: {
    borderRadius: 50,
    width: 50,
    height: 50
  },

  userInfo: {
    display: 'flex',
    margin: 20
  },

  username: {
    textDecoration: 'underline',
    margin: 5,
    marginLeft: 15,
    alignSelf: 'center'
  },

  date: {
    margin: 5,
    alignSelf: 'center'
  },

  star: {
    width: '20px',
    height: '20px'
  },

  review: {
    margin: 20
  },

  item: {
    margin: 20
  }
};
