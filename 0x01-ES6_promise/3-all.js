import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(values => console.log(values))
    .catch(error => console.log("Signup system offline"))
}
