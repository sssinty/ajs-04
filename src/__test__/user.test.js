import loadUser from '../loaderUser';
import httpGet from '../http';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('should call loadUser once', () => {
  httpGet.mockReturnValue(JSON.stringify({}));
  loadUser(1);
  expect(httpGet).toBeCalledWith('http://server:8080/user/1');
});
