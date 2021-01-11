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
        body: "body items"
      })
    ).rejects.toThrow("Error with credentials");
  });

  it("should fail with a malformed XML response", () => {
    return expect(
      fetchData({
        body: "RespondWithXMLError",
        tokenValue: "ABC-123"
      })
    ).rejects.toThrow("Unclosed root tag\nLine: 0\nColumn: 20\nChar: ");
  });

  it("should fail with a malformed Fetch response", () => {
    return expect(
      fetchData({
        body: "RespondWithFetchError",
        tokenValue: "ABC-123"
      })
    ).rejects.toThrow("response.text is not a function");
  });
});

// TODO: Server error response?
