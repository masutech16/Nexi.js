import pos2D from "../src/pos2D";
const assert = require("power-assert");

describe("pos2D test", function() {
  describe("equal()", function() {
    it("having the same pos is true", function() {
      const pos = new pos2D(3, 4);
      const pos2 = new pos2D(3, 4);
      assert(pos.equal(pos2));
    });
  });
});