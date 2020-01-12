import GetServiceDetailsRequest from "./index";

describe("GetServiceDetailsRequest", () => {
  it("sends a request with minimal parameters correctly", async () => {
    expect.assertions(1);

    const result = await GetServiceDetailsRequest(
      {
        serviceID: "ABC123"
      },
      "TOKEN_VALUE"
    );
    expect(result).toMatchSnapshot();
  });

  it("sends a request with minimal parameters and fail", async () => {
    expect.assertions(1);

    await expect(
      GetServiceDetailsRequest(
        {
          serviceID: "ABC123"
        },
        ""
      )
    ).rejects.toThrow("Error with credentials");
  });

  it("sends a request with more parameters correctly", () => {
    expect.assertions(1);

    return expect(
      GetServiceDetailsRequest(
        {
          serviceID: "ABC123"
        },
        "TOKEN_VALUE"
      )
    ).resolves.toMatchSnapshot();
  });
});
