const fetchData = require("./index");
// jest.mock("node-fetch");

test("should fetch the data correctly", () => {
  return fetchData("url", { body: "body items" }).then(data => {
    expect(data).toMatchSnapshot();
  });
});
