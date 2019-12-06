const GetDepartureBoardResponse = require("./index");

it("sends the request correctly", () => {
  expect.assertions(1);

  return expect(
    GetDepartureBoardResponse(
      {
        crs: "ECR"
      },
      "TOKEN_VALUE"
    )
  ).resolves.toMatchSnapshot();
});
