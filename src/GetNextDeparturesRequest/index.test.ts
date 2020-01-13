import GetNextDeparturesRequest from "./index";

describe("GetNextDeparturesRequest", () => {
  it("sends a request with minimal parameters correctly", async () => {
    expect.assertions(1);

    const result = await GetNextDeparturesRequest(
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
      GetNextDeparturesRequest(
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
      GetNextDeparturesRequest(
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
