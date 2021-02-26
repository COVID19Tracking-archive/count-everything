const fs = require("fs");

const files = [
  "./covid-public-api/v1/us/daily.json",
  "./covid-public-api/v1/states/daily.json",
  "./website-data/annotations.json",
  "./website-data/crdt_api.json",
  "./website-data/crdt_timeseries.json",
  "./website-data/crdt_test_hosp_race_separate.json",
  "./website-data/crdt_test_hosp_race_combined.json",
  "./website-data/crdt_states_combined.json",
  "./website-data/crdt_states_separate.json",
  "./website-data/crdt_sources.json",
  "./website-data/grades_state_assessment.json",
  "./website-data/long_term_care_facilities.json",
  "./website-data/long_term_care_states.json",
  "./website-data/screenshots.json",
];

let total = 0;
files.forEach((file) => {
  const rows = JSON.parse(fs.readFileSync(file).toString());
  total += rows.length * Object.keys(rows[0]).length;
});

console.log(`${total.toLocaleString()} datapoints from ${files.length} files.`);
