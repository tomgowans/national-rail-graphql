import GetArrivalDepartureBoardRequest from "./index";

describe("GetArrivalDepartureBoardRequest", () => {
  it("sends a request with minimal parameters correctly", async () => {
    expect.assertions(1);

    const result = await GetArrivalDepartureBoardRequest(
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
      GetArrivalDepartureBoardRequest(
        {
          crs: "ECR"
        },
        ""
      )
    ).rejects.toThrow("Error with credentials");
  });

  it("sends a request with more parameters correctly", () => {
    expect.assertions(1);

    return expect(
      GetArrivalDepartureBoardRequest(
        {
          numRows: 12,
          crs: "ECR",
          filterCrs: "STP"
        },
        "TOKEN_VALUE"
      )
    ).resolves.toMatchSnapshot();
  });
});
