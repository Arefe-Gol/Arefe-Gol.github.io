am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_amchartsdark);

var colorSet = new am4core.ColorSet();

var radarContainer1, radarContainer2, radarContainer3;

// Main container of everything
radarContainer1 = am4core.create("radar1-container", am4core.Container);
radarContainer1.width = am4core.percent(100);
radarContainer1.height = am4core.percent(100);
radarContainer1.preloader.disabled = true;

radarContainer2 = am4core.create("radar2-container", am4core.Container);
radarContainer2.width = am4core.percent(100);
radarContainer2.height = am4core.percent(100);
radarContainer2.preloader.disabled = true;

radarContainer3 = am4core.create("radar3-container", am4core.Container);
radarContainer3.width = am4core.percent(100);
radarContainer3.height = am4core.percent(100);
radarContainer3.preloader.disabled = true;


// area chart on initial screen (the one which bends around pie chart)
// lineChart = mainContainer.createChild(am4charts.XYChart);
// lineChart.padding(0, 0, 0, 0);

// var data = [];
// var date = new Date(2000, 0, 1, 0, 0, 0, 0);

// for (var i = 0; i < 7; i++) {
//     var newDate = new Date(date.getTime());
//     newDate.setDate(i + 1);
//     data.push({ date: newDate, value: 32 });
// }

// lineChart.data = data;

// var dateAxis = lineChart.xAxes.push(new am4charts.DateAxis());
// dateAxis.renderer.grid.template.location = 0;
// dateAxis.renderer.labels.template.disabled = true;
// dateAxis.renderer.inside = true;
// dateAxis.renderer.grid.template.disabled = true;
// dateAxis.startLocation = 0.5;
// dateAxis.endLocation = 0.5;
// dateAxis.renderer.baseGrid.disabled = true;
// dateAxis.renderer.line.disabled = true;

// valueAxis = lineChart.yAxes.push(new am4charts.ValueAxis());
// valueAxis.tooltip.disabled = true;
// valueAxis.renderer.labels.template.disabled = true;
// valueAxis.renderer.inside = true;
// valueAxis.renderer.grid.template.disabled = true;
// valueAxis.min = 0;
// valueAxis.max = 100;
// valueAxis.strictMinMax = true;
// valueAxis.renderer.line.disabled = true;
// valueAxis.renderer.baseGrid.disabled = true;

// lineSeries = lineChart.series.push(new am4charts.LineSeries());
// lineSeries.dataFields.dateX = "date";
// lineSeries.dataFields.valueY = "value";
// lineSeries.sequencedInterpolation = true;
// lineSeries.strokeOpacity = 0;
// lineSeries.tensionX = 0.75;
// lineSeries.fill = am4core.color("#222a3f");
// lineSeries.fillOpacity = 1;
// lineSeries.hidden = true;
// lineSeries.events.on("inited", startEverything);

setTimeout(stage0, 200);

var data1 = [
    { category: "Building Arts", value: 40, subValues: "Architectural Expression I\nArchitectural Expression II\nArchitectural Design I: Shopping Mall\nArchitectural Design II: Family House\nArchitectural Design III: Art Mausam\nArchitectural Design IV: Children Hospital\nArchitectural Design V: Climate-Friendly Residential Complex\nRural Architecture I\nRural Architecture II\nAnalysis of Urban Spaces\nFinal Design: Family Book Garden\nApplication of computer in Architecture (Auto Cad)\nIntroduction to the World Architecture\nIntroduction to Contemporary Architecture" },
    { category: "Building Technology", value: 25, subValues: "Building Materials\nTechnical Design\nConcrete Structures\nBuilding Statics\nStrength of Materials and Steel Structures\nElectrical Installation (Illumination and Acoustics)\nIntroduction to Building Restoration" },
    { category: "Fundamentals", value: 20, subValues: "Applied Geometry\nPerspective Geometry\nMathematics and statistics\nFundamentals of Visual Arts\nBasics of Architectural Design I\nBasics of Architectural Design II\nHuman, Nature, and Architecture\nFundamentals of Anatomical Planning" },
    { category: "Project Management", value: 15, subValues: "Quantity Surveying and Estimating\nSite Management and Organization\nBuilding Site Report I\nBuilding Site Report II" },
];

var data2 = [
    { category: "Project Management", value: 50, subValues: "Project Management Standards (PMBOK, PRINCE2, PMDC, and OPM3)\nSelected topics in contemporary project Management \nProject Financial Management (Budget and Feasibility Analysis) \nRisk Management (Risk Identification, Analysis, and Mitigation)\nProject Planning and Control (WBS, Gantt Chart, Monitoring, and MS Project)\nFinal Thesis: A Guideline on Utilizing Project Teams’ Tacit Knowledge for Employing Agile Practices in a construction project." },
    { category: "Organizational Management", value: 25, subValues: "Human Resource Management\nOrganizational Management of Consultant Offices\nOperation Research and Quantitative Methods in Management\nMulti Criteria Decision Analysis Methods (TOPSIS, Vikor, Electre, AHP, etc.)" },
    { category: "Construction Management", value: 15, subValues: "Material Management\nAdvanced Construction Site Management" },
    { category: "Contracts & Legal Issues", value: 10, subValues: "Legal Issues and Contracts in Construction\nSuccessful strategies for Negotiation" }
];

var data3 = [
    { category: "Green Building Design & Simulation", value: 45, subValues: "Revit-BIM\nBuilding Energy Systems Design\nWhole Building Energy Modelling and Simulation\nCapstone: Greening Existing Budlings\nCapstone: New Building Energy System Design" },
    { category: "Leadership & Management", value: 20, subValues: "Organizational Leadership\nSustainability and Leadership\nAnalytics and Interpretation for Applied Science" },
    { category: "Business & Beand Marketing", value: 20, subValues: "Brands with Purpose\nBusiness Acumen for Technical Leaders\nBusiness Ethics Leadership" },
    { category: "Sustainable Developement", value: 15, subValues: "Regenerative Development\nGreen Building Contemporary Practice" },
];


function createRadarChart(container, data, labelText) {
    var radarChart = container.createChild(am4charts.RadarChart);
    radarChart.data = data

    radarChart.padding(0, 0, 50, 0);
    radarChart.x = am4core.percent(50);
    radarChart.y = am4core.percent(50);
    radarChart.width = am4core.percent(100);
    radarChart.horizontalCenter = "middle";
    radarChart.verticalCenter = "middle";
    radarChart.radius = am4core.percent(120);
    radarChart.zoomOutButton.disabled = true;
    radarChart.innerRadius = am4core.percent(30);
    radarChart.startAngle = 180;
    radarChart.endAngle = 360;

    let categoryAxis = radarChart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "category";
    // categoryAxis.renderer.minGridDistance = 10;
    // categoryAxis.renderer.labels.template.location = 0.5;
    // categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.grid.template.disabled = true;
    categoryAxis.renderer.labels.template.disabled = true;


    let valueAxis = radarChart.yAxes.push(new am4charts.ValueAxis());
    // valueAxis.renderer.minGridDistance = 10;
    // valueAxis.renderer.grid.template.strokeOpacity = 0.05;
    // valueAxis.tooltip.disabled = true;
    valueAxis.renderer.grid.template.disabled = true;
    valueAxis.renderer.labels.template.disabled = true;

    // valueAxis.renderer.axisAngle = radarChart.startAngle;
    // valueAxis.min = 0;
    // valueAxis.max = 100;
    // valueAxis.strictMinMax = true;

    let radarSeries = radarChart.series.push(new am4charts.RadarColumnSeries())
    radarSeries.columns.template.width = am4core.percent(95);
    
    radarSeries.columns.template.tooltipText = "[bold]{categoryX}:[/]\n{subValues}";
    
    radarSeries.tooltip.label.maxWidth = 320;
    radarSeries.tooltip.label.wrap = true;
    radarSeries.tooltip.label.padding(20, 20, 20, 20);
    radarSeries.tooltip.getFillFromObject = false;
    radarSeries.tooltip.background.fill = am4core.color("#111");
    radarSeries.tooltip.label.fill = am4core.color("#f5f5f5");
    radarSeries.tooltip.background.stroke = am4core.color("Transparent");

    
    radarSeries.dataFields.valueY = "value";
    radarSeries.dataFields.categoryX = "category";
    
    radarSeries.columns.template.radarColumn.cornerRadius = 4;
    radarSeries.columns.template.radarColumn.innerCornerRadius = 4;
    radarSeries.columns.template.strokeOpacity = 0;
    radarSeries.defaultState.transitionDuration = 500;
    radarSeries.sequencedInterpolation = true;

    // this makes initial animation
    radarSeries.hiddenState.properties.opacity = 0;
    radarSeries.columns.template.cornerRadius = 7;
    radarSeries.defaultState.transitionDuration = 1000;
    radarSeries.hiddenState.transitionEasing = am4core.ease.sinOut;
    radarSeries.alignLabels = false;

    radarSeries.columns.template.adapter.add("fill", function(fill, target) {
        if (target.dataItem) {
            return colorSet.getIndex(5 - target.dataItem.index);
        }
    });

    let label = radarChart.createChild(am4core.Label);
    label.text = labelText;
    label.align = "center";
    label.fontSize = 14;
    label.marginTop = 10;

    return [radarChart, radarSeries]
}


// where radar chart is created and animated from bottom to top, also where area's chart values are animated to bend around pie.
function stage0() {
    var [radarChart1, radarSeries1] = createRadarChart(radarContainer1, data1, "Master of Engineering Leadership\n[font-size: 12]High-Performance Building[/]\n[font-size: 12 opacity: 0.5]University of British Columbia, Vancouver, BC, Canada[/]")
    var [radarChart2, radarSeries2] = createRadarChart(radarContainer2, data2, "Master of Science\n[font-size: 12]Project and Construction Management[/]\n[font-size: 12 opacity: 0.5]Shahid Beheshti University, Tehran, Iran[/]")
    var [radarChart3, radarSeries3] = createRadarChart(radarContainer3, data3, "Bachelor of Science\n[font-size: 12]Architectural Engineering[/]\n[font-size: 12 opacity: 0.5]Semnan University, Semnan, Iran[/]")

    // headerLabel.y = 70;
    radarChart1.hide(0);
    radarChart1.show();
    radarChart2.show(0);
    radarChart2.show();
    radarChart3.show(0);
    radarChart3.show();

    radarSeries1.hide(0);
    radarSeries1.show();
    radarSeries2.hide(0);
    radarSeries2.show();
    radarSeries3.hide(0);
    radarSeries3.show();
    
    // change duration and easing
    // lineSeries.interpolationDuration = 3000;
    // lineSeries.interpolationEasing = am4core.ease.elasticOut;
    // lineSeries.dataItems.getIndex(6).setValue("valueY", 20, 3500);
    // lineSeries.dataItems.getIndex(5).setValue("valueY", 50, 3500);
    // lineSeries.dataItems.getIndex(4).setValue("valueY", 20, 3500);
    // lineSeries.dataItems.getIndex(3).setValue("valueY", 50, 3500);
    // lineSeries.dataItems.getIndex(2).setValue("valueY", 20, 3500);
    // lineSeries.dataItems.getIndex(1).setValue("valueY", 50, 3500);
    // lineSeries.dataItems.getIndex(0).setValue("valueY", 20, 3500);
}

setTimeout(stage1, 500);

function stage1() {
    // Main container of everything
    // mainContainer1 = am4core.create("XYchart-container", am4core.Container);
    // mainContainer1.width = am4core.percent(100);
    // mainContainer1.height = am4core.percent(100);
    // mainContainer1.preloader.disabled = true;

    // chart = mainContainer1.createChild(am4charts.XYChart);

    var chart = am4core.create("XYchart-container", am4charts.XYChart);
    chart.padding(30, 0, 0, 0)

    // Add data
    chart.data = [{
        "year": "2011-03",
        "value": 50,
        "program": "Microsoft Office Professional",
        "bullet": "Icons/MicrosoftOfficeProfessional.png",
    }, {
        "year": "2012-01",
        "value": 80,
        "program": "Autodesk Auto CAD",
        "bullet": "Icons/AutodeskAutoCAD.png",
    }, {
        "year": "2013-01",
        "value": 60,
        "program": "Microsoft Outlook",
        "bullet": "Icons/MicrosoftOutlook.png",
    }, {
        "year": "2014-01",
        "value": 80,
        "program": "Autodesk 3ds Max",
        "bullet": "Icons/Autodesk3dsMax.png",
    }, {
        "year": "2014-01",
        "value": 40,
        "program": "V-Ray Rendering",
        "bullet": "Icons/Vray.png",
    }, {
        "year": "2015-01",
        "value": 70,
        "program": "Adobe Photoshop CC",
        "bullet": "Icons/AdobePhotoshop.png",
    }, {
        "year": "2015-01",
        "value": 20,
        "program": "Adobe After Effect",
        "bullet": "Icons/AdobeAfterEffects.png",
    }, {
        "year": "2016-01",
        "value": 80,
        "program": "Prezi",
        "bullet": "Icons/Prezi.png",
    }, {
        "year": "2016-01",
        "value": 40,
        "program": "Microsoft Visio",
        "bullet": "Icons/MicrosoftVisio.png",
    }, {
        "year": "2017-01",
        "value": 75,
        "program": "Microsoft Project",
        "bullet": "Icons/MicrosoftProject.png",
    }, {
        "year": "2017-01",
        "value": 50,
        "program": "Autodesk Revit-Basics",
        "bullet": "Icons/AutodeskRevit.png",
    }, {
        "year": "2017-01",
        "value": 15,
        "program": "Mindjet Mind Manager",
        "bullet": "Icons/MindjetMindManager.png",
    }, {
        "year": "2018-01",
        "value": 90,
        "program": "Oracle Primavera P6",
        "bullet": "Icons/OraclePrimaveraP6.png",
    }, {
        "year": "2018-01",
        "value": 60,
        "program": "Adobe InDesign",
        "bullet": "Icons/AdobeInDesign.png",
    }, {
        "year": "2018-01",
        "value": 30,
        "program": "Microsoft SharePoint",
        "bullet": "Icons/MicrosoftSharePoint.png",
    }, {
        "year": "2019-01",
        "value": 60,
        "program": "Adobe Illustrator",
        "bullet": "Icons/AdobeIllustrator.png",
    }, {
        "year": "2020-01",
        "value": 90,
        "program": "IES Virtual Environment",
        "bullet": "Icons/IESVirtualEnvironment.png",
    }, {
        "year": "2020-01",
        "value": 78,
        "program": "eQUEST",
        "bullet": "Icons/eQUEST.png",
    }, {
        "year": "2020-01",
        "value": 65,
        "program": "Climate Consultant",
        "bullet": "Icons/ClimateConsultant.png",
    }, {
        "year": "2020-01",
        "value": 45,
        "program": "Athena Impact Estimator",
        "bullet": "Icons/AthenaImpactEstimator.png",
    }, {
        "year": "2020-01",
        "value": 25,
        "program": "Autodsk Revit-BIM",
        "bullet": "Icons/AutodeskRevit.png",
    }, {
        "year": "2020-01",
        "value": 10,
        "program": "Tableau Desktop",
        "bullet": "Icons/TableauSoftware.png",
    }, {
        "year": "2021-01",
        "value": 55,
        "program": "PMP Certification",
        "bullet": "Icons/PMPCertification.png",
    }, {
        "year": "2021-01",
        "value": 35,
        "program": "Python",
        "bullet": "Icons/Python.png",
    }];

    // Set input format for the dates
    chart.dateFormatter.inputDateFormat = "yyyy-MM";

    // Create axes
    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.baseInterval = {
        count: 1,
        timeUnit: "month"
    }
    dateAxis.renderer.grid.template.location = 0;
    dateAxis.renderer.minGridDistance = 100;
    dateAxis.min = new Date(2011, 0, 0, 0, 0, 0, 0).getTime();
    dateAxis.max = new Date(2022, 0, 0, 0, 0, 0, 0).getTime();
    dateAxis.strictMinMax = true;
    dateAxis.renderer.opposite = true;

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.labels.template.disabled = true;
    valueAxis.min = 0;
    valueAxis.max = 100;

    // Create series
    var series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = "value";
    series.dataFields.dateX = "year";
    // series.tooltipText = "{tooltip}"
    series.strokeWidth = 2;
    series.minBulletDistance = 15;
    series.strokeOpacity = 0;

    // Drop-shaped tooltips
    series.tooltip.background.cornerRadius = 20;
    series.tooltip.background.strokeOpacity = 0;
    series.tooltip.pointerOrientation = "vertical";
    series.tooltip.label.minWidth = 40;
    series.tooltip.label.minHeight = 40;
    series.tooltip.label.textAlign = "middle";
    series.tooltip.label.textValign = "middle";

    var bullet = series.bullets.push(new am4charts.Bullet());
    bullet.width = 400;
    // bullet.align = "center";

    let image = bullet.createChild(am4core.Image);
    image.propertyFields.href = "bullet";
    image.width = 30;
    image.height = 30;
    image.horizontalCenter = "middle";
    image.verticalCenter = "middle";
    
    let bulletLabel = bullet.createChild(am4core.Label);
    bulletLabel.text = "{program}";
    bulletLabel.fontSize = 12;
    bulletLabel.strokeWidth = 0;
    bulletLabel.fontWeight = 400;
    bulletLabel.fill = am4core.color("#fff");

    bulletLabel.wrap = true;
    bulletLabel.maxWidth = 120;
    bulletLabel.dx = 20;
    bulletLabel.horizontalCenter = "left";
    bulletLabel.verticalCenter = "middle"; 

    var bullethover = bullet.states.create("hover");
    bullethover.properties.scale = 1.1;
    // chart.cursor = new am4charts.XYCursor();
    // chart.cursor.behavior = "none";

    // var labelBullet = series.bullets.push(new am4charts.LabelBullet());
    // labelBullet.label.text = "{program}";
    // labelBullet.label.fill = am4core.color("white");
    // labelBullet.fontSize = 12;

    // labelBullet.label.hideOversized = true;
    // labelBullet.horizontalCenter = "right";
    // labelBullet.contentAlign = "left";
    // labelBullet.align = "left";

    // labelBullet.minWidth = 50;
    // labelBullet.maxWidth = 200;
    // labelBullet.locationX = 10;


    // labelBullet.dx = 80;
    // labelBullet.dx = am4core.percent(50) + 20;
    // labelBullet.paddingLeft = am4core.percent(50);
    // labelBullet.label.adapter.add("horizontalCenter", "right")

    // let label = bullet.createChild(new am4core.Label());
    // label..text = "{program}";
    // label.propertyFields.fill = am4core.color("#fff");
    // label.horizontalCenter = "right";
    // labelBullet.verticalCenter = "middle";
    // labelBullet.maxWidth = 20;
    // labelBullet.locationX = am4core.percent(50);
    // labelBullet.locationX = 3;
    // labelBullet.contentValign = "right";
    // label.dx = -20;



    var chart = am4core.create("Ganttchart-container", am4charts.XYChart);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
    chart.dateFormatter.inputDateFormat = "yyyy-MM";
    chart.padding(0, 0, 20, 0);

    var colorSet = new am4core.ColorSet();
    colorSet.saturation = 0.4;

    chart.data = [
    {
        title: "Freelance Architect & Interior Designer",
        fromDate: "2013-04",
        toDate: "2015-11",
        color: colorSet.getIndex(5).brighten(0.5)
        // color: am4core.color("#c64b8c").brighten(1)
    },
    {
        title: "Kimeh Sazan Kohan Full Construction Company, Tehran, Iran",
        fromDate: "2016-09",
        toDate: "2017-7",
        color: colorSet.getIndex(2).brighten(0)
        // color: am4core.color("#e4a0f7").brighten(1)
    },
    {
        title: "Rahyab Behineh Consulting Engineers Co., Tehran, Iran",
        fromDate: "2017-07",
        toDate: "2017-8",
        color: colorSet.getIndex(1).brighten(0.4)
        // color: am4core.color("#b47ede").brighten(0)

    },
    {
        title: "SAMIX Consulting Engineering Company, Tehran, Iran",
        fromDate: "2017-12",
        toDate: "2018-03",
        color: colorSet.getIndex(2).brighten(0.3)
        // color: am4core.color("#8d4585").brighten(0)
    },
    {
        title: "KSA Architecture Consulting Group, Tehran, Iran",
        fromDate: "2017-09",
        toDate: "2018-02",
        color: colorSet.getIndex(1).brighten(0.3)
        // color: am4core.color("#B5338A").brighten(0)
    },
    {
        title: "Kimeh Sazan Kohan Full Construction Company, Tehran, Iran",
        fromDate: "2018-02",
        toDate: "2019-12",
        color: colorSet.getIndex(2).brighten(0)
        // color: am4core.color("#e4a0f7").brighten(1)
    },
    ];

    var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "title";
    categoryAxis.renderer.labels.template.disabled = true;
    categoryAxis.cursorTooltipEnabled = false;
    categoryAxis.renderer.inversed = true;

    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.dateFormatter.dateFormat = "yyyy-MM";
    dateAxis.renderer.minGridDistance = 100;
    dateAxis.renderer.labels.template.fontSize = 14;
    
    dateAxis.baseInterval = { count: 1, timeUnit: "month" };
    dateAxis.min = new Date(2011, 0, 0, 0, 0, 0, 0).getTime();
    dateAxis.max = new Date(2022, 0, 0, 0, 0, 0, 0).getTime();
    dateAxis.strictMinMax = true;
    dateAxis.renderer.tooltipLocation = 0;

    var series1 = chart.series.push(new am4charts.ColumnSeries());
    series1.columns.template.width = am4core.percent(80);
    series1.columns.template.height = 25;
    series1.columns.template.tooltipText = "{title}: {openDateX} - {dateX}";

    series1.dataFields.openDateX = "fromDate";
    series1.dataFields.dateX = "toDate";
    series1.dataFields.categoryY = "title";
    series1.columns.template.propertyFields.fill = "color"; // get color from data
    series1.columns.template.propertyFields.stroke = "color";
    series1.columns.template.strokeOpacity = 1;

    chart.cursor = new am4charts.XYCursor();
    chart.cursor.behavior = "none";
    chart.cursor.lineY.disabled = true;
}





document.getElementsByClassName("thumbnail").forEach(thumbnail => {
    let index = Array.prototype.indexOf.call(thumbnail.parentNode.children, thumbnail);
    thumbnail.addEventListener('click', function () { currentDiv(index, thumbnail) }, false);
});

function currentDiv(slideIndex, thumbnail) {
    let thumbnail_navigator = thumbnail.parentNode
    let last_slide_index = Array.prototype.indexOf.call(thumbnail_navigator.children, thumbnail_navigator.querySelector(".active"));

    if (slideIndex == last_slide_index) return 1
    // if (slideIndex > slides.length) {slideIndex = 0}
    // if (slideIndex < 0) {slideIndex = slides.length}

    let thumbnails = thumbnail_navigator.children
    let slides = thumbnail_navigator.parentNode.children[0].children;
 
    slides[last_slide_index].classList.toggle("active");
    slides[slideIndex].classList.toggle("active");

    if (screen.width > 1000) {
        thumbnail_navigator.scrollTop = (thumbnail.offsetHeight + Number(getComputedStyle(thumbnail_navigator).gridRowGap.slice(0, -2))) * (slideIndex + 0.5) - thumbnail_navigator.offsetHeight / 2;
    } else {
        thumbnail_navigator.scrollLeft = thumbnail.offsetWidth * (slideIndex + 0.5) - thumbnail_navigator.offsetWidth / 2;
    }
    
    thumbnails[last_slide_index].classList.toggle("active");
    thumbnails[slideIndex].classList.toggle("active");
}


document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        document.querySelector(".pre-loading").style.opacity = "0";
        document.querySelector(".pre-loading").style.visibility = "hidden";
    }
};