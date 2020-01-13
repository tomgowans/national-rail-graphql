import GetFastestDeparturesRequest from "./index";

describe("GetFastestDeparturesRequest", () => {
  it("sends a request with minimal parameters correctly", async () => {
    expect.assertions(1);

    const result = await GetFastestDeparturesRequest(
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
      GetFastestDeparturesRequest(
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
      GetFastestDeparturesRequest(
        {
          numRows: 12,
          crs: "ECR",
          filterList: ["STP"]
        },
        "TOKEN_VALUE"
      )
    ).resolves.toMatchSnapshot();
  });
});
