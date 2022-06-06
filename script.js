async function getName(obj) {
  const result = await obj.name;
  return result.then((res) => res);
}

async function uppercase(str) {
  const result = await str.toUpperCase();
  return result;
}

async function get6Characters(str) {
  const result = await str.substr(0, 6);
  console.log("get6", result);
  return result;
}

async function reverse(str) {
  const result = await str.split("").reverse().join("");
  return result;
}

function pipe(cb1, cb2, cb3, cb4) {
  return function (args) {
    let result = cb1(args);
    result.then((res) => {
      cb2(res).then((res) => {
        return res;
      });
    });
    // if (typeof cb2 === "function") {
    //   result = cb2(result);
    // }
    // if (typeof cb3 === "function") {
    //   result = cb3(result);
    // }
    // if (typeof cb4 === "function") {
    //   result = cb4(result);
    // }
    // console.log(result);
    // return result;
  };
}

// pipe(getName)({ name: "Swarnjeet" });
// pipe(getName, uppercase, get6Characters, reverse)({ name: "Buckethead" });
pipe(get6Characters, uppercase, reverse)("Swarnjeet");
