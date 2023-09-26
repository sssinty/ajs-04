import httpGet from './http';

export default function loadUser(id) {
  const data = httpGet(`http://server:8080/user/${id}`);
  return JSON.parse(data);
}
