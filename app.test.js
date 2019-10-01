const request = require("supertest");
const app = require("./app");

describe("testing", () => {
  it("should connect to the server successfully", () => {
    return request(app)
      .get("/")
      .expect(200);
  });
});
