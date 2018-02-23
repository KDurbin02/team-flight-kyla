//////Variables Used throughout//////
var survey = "";
var q = "";
var c = "";
var questionList = [];
var surveyButton = false

var newForm = '<form id="clear">' +
    '<div class="form-group">' +
    '<label for="cat">Category:</label>' +
    '<input type="text" id="cat" name="category">' +
    '</div>' +
    '<div class="form-group">' +
    '<label for="cat">New Question</label>' +
    '<textarea class="form-control" id="addQuestion" rows="3" name="questionText"></textarea>' +
    '</div>' +
    '<button type="button" id="add" class="btn btn-light" onClick="addQ(event);">Add Question</button>' +
    '</form>';



////console log the data index of the button (face value) that was clicked
$(".face").on("click", function (e) {
    console.log($(this).attr("data-id"));
});

////create new survey
$("#newSurvey").on("click", function () {
    event.preventDefault();
    survey = $("#surveyName").val().trim();
    document.getElementById("currentSurvey").innerHTML = survey;
    document.getElementById("clear").innerHTML = newForm;
    console.log(survey);
})

////adding new question to the question array/////
function addQ(event) {
    event.preventDefault();
    c = $("#cat").val().trim();
    q = $("#addQuestion").val().trim();
    questionList.push({ questionText: q, catagory: c });
    $("#questionList").append('<li class="qList"" + q + ">' + q + '<button type="button" class="btn btn-link qDelete">' + '<a><small> Delete <small></a>' + '</button>' + '</li>');
    document.getElementById("clear").reset();
    console.log(questionList);
    if (surveyButton === false) {
        $("#qForm").append('<button id="save" class="btn btn-light"> Save </button>');
        surveyButton = true;
    };
    return false;
};


$("#save").on("click", () => {
    $.post("/api/addSurvey", { name: surveyName, questions: questionList });
});










