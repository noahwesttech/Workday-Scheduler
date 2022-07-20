$(function () {});

var today = moment().format("dddd, MMMM Do");
var now = moment().format("H A");
var planWorkday = [
{ time: "9 AM", event: "" },
{ time: "10 AM", event: "" },
{ time: "11 AM", event: "" },
{ time: "12 PM", event: "" },
{ time: "1 PM", event: "" },
{ time: "2 PM", event: "" },
{ time: "3 PM", event: "" },
{ time: "4 PM", event: "" },
{ time: "5 PM", event: "" },
];

var scheduledEvents = JSON.parse(localStorage.getItem("workDay"));
if (scheduledEvents) {
  planWorkday = scheduledEvents;
}

$("#currentDay").text(today);

planWorkday.forEach(function(timeBlock, index) {
	var timeLabel = timeBlock.time;
	var blockColor = colorRow(timeLabel);
	var row =
		'<div class="time-block" id="' +
		index +
		'"><div class="row no-gutters input-group"><div class="col-sm col-lg-1 input-group-prepend hour justify-content-sm-end pr-3 pt-3">' +
		timeLabel +
		'</div><textarea class="form-control ' +
		blockColor +
		'">' +
		timeBlock.event +
		'</textarea><div class="col-sm col-lg-1 input-group-append"><button class="saveBtn btn-block" type="submit"><i class="fas fa-save"></i></button></div></div></div>';

	$(".container").append(row);
});