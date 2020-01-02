const GetDepartureBoardResponse = require("./index");

it("sends the request correctly", () => {
  expect.assertions(1);

  return expect(
    GetDepartureBoardResponse(
      {
        serviceID: "ABC123"
      },
      "TOKEN_VALUE"
    )
  ).resolves.toMatchSnapshot();
});
