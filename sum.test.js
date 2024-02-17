const { sum, myFunction, fetchData, fetchPromise } = require("./sum");

// test("[Description] adds 1 + 2 to equal 3", () => {
//   // expected is expecting output from what to test
//   expect(sum(1, 2))
//     // toBe is "matchers"
//     .toBe(3);
// });

// test("object assignment", () => {
//   const data = {
//     one: 1,
//   };
//   data["two"] = 2;
//   // expect dictionary value, what input above
//   expect(data)
//     // use toEqual matchers because needs to compare recursively
//     // all properties of object instances
//     .toEqual({ one: 1, two: 2 });
// });

// toBeFalsy are to check expected value are falsy
// test("null is falsy", () => {
//   // const n = null;
//   // const n = 0;
//   // expect(n).toBeFalsy();

//   // truthy
//   const n = 1;
//   expect(n).toBeTruthy();
// });

// tThrow
// test("throws on invalid input", () => {
//   expect(() => {
//     // myFunction("wew");
//     // above invalid, will throw error
//     myFunction(3);
//     // above valid, will not throw error, because myFunction return
//     // if not number then throw error
//   })
//     // settled expected output are throw error
//     .toThrow();
//   // when its throwed error so its passed, because expect to throwed error
//   // if its not throwed error it will be not passed
// });

// callback on fetch data test
// test("the data is peanut butter", (done) => {
//   function callback(data) {
//     try {
//       expect(data).toBe("peanut butter");
//       done();
//     } catch (error) {
//       done(error);
//     }
//   }

//   fetchData(callback);
// });

// // test async resolve
// test("the data is peanut butter", () => {
//   return expect(fetchPromise()).resolves.toBe("peanut butter");
// });

// // test async reject
// test("the fetch fail with an error", () => {
//   return expect(fetchPromise()).reject.toThrow("error");
// });

// test("the data is peanut butter promise", async () => {
//   const data = await fetchPromise();
//   expect(data).toBe("peanut butter");
// });
