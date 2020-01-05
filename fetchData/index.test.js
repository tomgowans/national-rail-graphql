const fetchData = require("./index");

describe("fetchData", () => {
  test("should fetch the data correctly", async () => {
    const result = await fetchData({
      body: "body items",
      tokenValue: "ABC-123"
    });
    expect(result).toMatchSnapshot();
  });

  it("should fail with incorrect credentials", () => {
    return expect(
      fetchData({
        crs: "ECR"
      })
    ).rejects.toThrow("Error with credentials");
  });
});

// TODO: Add a test for invalid XML
// TODO: Add a test for fetch errors
