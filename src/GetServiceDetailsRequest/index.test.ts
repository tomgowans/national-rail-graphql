import GetServiceDetailsRequest from './index';
import responseData from './response.mock';

jest.mock('node-fetch');

// eslint-disable-next-line @typescript-eslint/no-var-requires
const fetch = require('node-fetch');
const { Response, Headers } = jest.requireActual('node-fetch');

describe('GetServiceDetailsRequest', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('sends a request with minimal parameters correctly', async () => {
    fetch.mockResolvedValueOnce(
      Promise.resolve(
        new Response(responseData.text, {
          status: 200,
          statusText: 'fail',
          headers: new Headers({
            'Content-Type': 'text/xml',
          }),
        }),
      ),
    );

    const result = await GetServiceDetailsRequest(
      {
        serviceID: 'ABC123',
      },
      'TOKEN_VALUE',
    );
    expect(result).toMatchSnapshot();
    expect(fetch).toBeCalledTimes(1);
  });

  it('sends a request with minimal parameters and fail', async () => {
    expect.assertions(1);

    await expect(
      GetServiceDetailsRequest(
        {
          serviceID: 'ABC123',
        },
        '',
      ),
    ).rejects.toThrow('Error with credentials');
  });

  it('sends a request with more parameters correctly', async () => {
    fetch.mockResolvedValueOnce(
      Promise.resolve(
        new Response(responseData.text, {
          status: 200,
          statusText: 'fail',
          headers: new Headers({
            'Content-Type': 'text/xml',
          }),
        }),
      ),
    );

    const result = await GetServiceDetailsRequest(
      {
        serviceID: 'ABC123',
      },
      'TOKEN_VALUE',
    );
    expect(result).toMatchSnapshot();
    expect(fetch).toBeCalledTimes(1);
  });
});
