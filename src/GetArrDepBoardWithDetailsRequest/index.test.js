const GetArrDepBoardWithDetailsRequest = require("./index");

describe("GetArrDepBoardWithDetailsRequest", () => {
  it("sends a request with minimal parameters correctly", async () => {
    expect.assertions(1);

    const result = await GetArrDepBoardWithDetailsRequest(
      {
        crs: "ECR"
      },
      "TOKEN_VALUE"
    );
    expect(result).toMatchSnapshot();
  });

  it("sends a request with minimal parameters and fail", async () => {
    expect.assertions(1);

    await expect(
      GetArrDepBoardWithDetailsRequest({
        crs: "ECR"
      })
    ).rejects.toThrow("Error with credentials");
  });

  it("sends a request with more parameters correctly", () => {
    expect.assertions(1);

    return expect(
      GetArrDepBoardWithDetailsRequest(
        {
          numRows: "12",
          crs: "ECR",
          filterCrs: ["STP"]
        },
        "TOKEN_VALUE"
      )
    ).resolves.toMatchSnapshot();
  });
});
