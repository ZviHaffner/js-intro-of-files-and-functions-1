const { check, runTest } = require("../../test-api/index.js");
const { capitaliseFirstLetter } = require("../utils/section-1.js");

function capitaliseNameOfDepartment(department) {
  return department
    .split(" ")
    .map((str) => capitaliseFirstLetter(str))
    .join(" ");
}

runTest(
  "capitaliseNameOfDepartment() will capitalise the department names ",
  function () {
    check(capitaliseNameOfDepartment("onboarding")).isEqualTo("Onboarding");
    check(capitaliseNameOfDepartment("human resources")).isEqualTo(
      "Human Resources"
    );
    check(
      capitaliseNameOfDepartment(
        "department for preservation of wild berries along riverbanks"
      )
    ).isEqualTo("Department For Preservation Of Wild Berries Along Riverbanks");
  }
);
