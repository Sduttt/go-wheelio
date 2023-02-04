$(document).ready(function () {
  //Create a variable for the CarQuery object.  You can call it whatever you like.
  var carquery = new CarQuery();

  //Run the carquery init function to get things started:
  carquery.init();

  //Optionally, you can pre-select a vehicle by passing year / make / model / trim to the init function:
  //carquery.init('2000', 'dodge', 'Viper', 11636);

  //Optional: Pass sold_in_us:true to the setFilters method to show only US models.
  carquery.setFilters({ sold_in_us: true });

  //Optional: initialize the year, make, model, and trim drop downs by providing their element IDs
  carquery.initYearMakeModelTrim(
    "car-years",
    "car-makes",
    "car-models",
    "car-model-trims"
  );

  //Optional: set the onclick event for a button to show car data.
  $("#cq-show-data").click(function () {
    carquery.populateCarData("car-model-data");
  });

  //Optional: initialize the make, model, trim lists by providing their element IDs.
  carquery.initMakeModelTrimList(
    "make-list",
    "model-list",
    "trim-list",
    "trim-data-list"
  );

  //Optional: set minimum and/or maximum year options.
  carquery.year_select_min = 1990;
  carquery.year_select_max = 2022;

  //Optional: initialize search interface elements.
  //The IDs provided below are the IDs of the text and select inputs that will be used to set the search criteria.
  //All values are optional, and will be set to the default values provided below if not specified.
  var searchArgs = {
    body_id: "cq-body",
    default_search_text: "Keyword Search",
    doors_id: "cq-doors",
    drive_id: "cq-drive",
    engine_position_id: "cq-engine-position",
    engine_type_id: "cq-engine-type",
    fuel_type_id: "cq-fuel-type",
    min_cylinders_id: "cq-min-cylinders",
    min_mpg_hwy_id: "cq-min-mpg-hwy",
    min_power_id: "cq-min-power",
    min_top_speed_id: "cq-min-top-speed",
    min_torque_id: "cq-min-torque",
    min_weight_id: "cq-min-weight",
    min_year_id: "cq-min-year",
    max_cylinders_id: "cq-max-cylinders",
    max_mpg_hwy_id: "cq-max-mpg-hwy",
    max_power_id: "cq-max-power",
    max_top_speed_id: "cq-max-top-speed",
    max_weight_id: "cq-max-weight",
    max_year_id: "cq-max-year",
    search_controls_id: "cq-search-controls",
    search_input_id: "cq-search-input",
    search_results_id: "cq-search-results",
    search_result_id: "cq-search-result",
    seats_id: "cq-seats",
    sold_in_us_id: "cq-sold-in-us",
  };
  carquery.initSearchInterface(searchArgs);

  //If creating a search interface, set onclick event for the search button.  Make sure the ID used matches your search button ID.
  $("#cq-search-btn").click(function () {
    carquery.search();
  });
});
