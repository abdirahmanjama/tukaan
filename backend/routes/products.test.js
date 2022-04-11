import productsRoute from "./products";

describe("products route", () => {
  let mockRequest;
  let mockResponse;

  beforeEach(() => {
    mockRequest = {};
    mockResponse = {
      json: jest.fn(),
    };
  });

  test("returns products", () => {
    productsRoute(mockRequest, mockResponse);
    const expectedResult = {};
    expectedResult(mockResponse).toBeCalledWith(expectedResult);
  });
});
