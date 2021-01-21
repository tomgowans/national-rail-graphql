import fetchData from './index';
import responseData from './response';

jest.mock('node-fetch');

// eslint-disable-next-line @typescript-eslint/no-var-requires
const fetch = require('node-fetch');
const { Response, Headers } = jest.requireActual('node-fetch');

describe('fetchData', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should fetch the data correctly', async () => {
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

    const result = await fetchData({
      body: 'body items',
      tokenValue: 'ABC-123',
    });
    expect(result).toMatchSnapshot();
    expect(fetch).toBeCalledTimes(1);
  });

  it('should fail with incorrect credentials', async () => {
    expect.assertions(1);

    await expect(
      fetchData({
        body: 'body items',
        tokenValue: '',
      }),
    ).rejects.toThrow('Error with credentials');
  });

  it('should fail with a malformed XML response', async () => {
    fetch.mockResolvedValueOnce(
      Promise.resolve(
        new Response(
          '<xml><malformedxml/>',

          {
            status: 200,
            statusText: 'fail',
            headers: new Headers({
              'Content-Type': 'text/xml',
            }),
          },
        ),
      ),
    );

    const result = fetchData({
      body: 'RespondWithXMLError',
      tokenValue: 'ABC-123',
    });

    await expect(result).rejects.toThrow('Unclosed root tag\nLine: 0\nColumn: 20\nChar: ');
  });
});

// TODO: Server error response?
