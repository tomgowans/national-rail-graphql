const GetResponse = require("./index");

it("sends a reques with minimal parameters correctly", () => {
  expect.assertions(1);

  return expect(
    GetResponse(
      {
        crs: "ECR"
      },
      "TOKEN_VALUE"
    )
  ).resolves.toMatchSnapshot();
});

it("sends a reques with more parameters correctly", () => {
  expect.assertions(1);

  return expect(
    GetResponse(
      {
        numRows: "12",
        crs: "ECR",
        filterCrs: ["STP"]
      },
      "TOKEN_VALUE"
    )
  ).resolves.toMatchSnapshot();
});
