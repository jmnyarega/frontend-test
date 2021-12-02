import { numberFormart, myLoader } from "../../utils/index";

describe("#numberFormat", () => {
  test("it should format number to a string format", () => {
    expect(numberFormart(1200).toString()).toEqual("1,200");
  });

  test("null should return 0", () => {
    expect(numberFormart(0).toString()).toEqual("0");
  });
});

describe("#myLoader", () => {
  test("it should return a formatted URL", () => {
    expect(myLoader({ src: "://image.png", width: 200, quality: 100 })).toEqual(
      "://image.png?w=200&q=100"
    );
  });
});
