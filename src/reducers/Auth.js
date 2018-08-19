import face from './../assets/images/faces/face-0.jpg'

const defaultUserInfo = {
  name: 'Mercado da Vila',
  image: face
};

export default function reducer(state = {
  user: defaultUserInfo
}, action) {
  return state;
}