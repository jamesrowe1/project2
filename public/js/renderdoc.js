$("#submit-grade").on("click", () => {
  const userGrade = $("#gradearea1").val();
  const homeworkId = $("#idOfHomework").text();
  console.log(userGrade);
  console.log(homeworkId);
  $.ajax("/api/renderdoc/" + 1, {
    type: "PUT",
    grade: userGrade
  }).then(() => {
    window.location.replace("/gradebook");
  });
});
