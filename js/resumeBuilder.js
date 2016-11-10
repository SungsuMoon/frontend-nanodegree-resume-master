var bio = {
    name: "Sungsu Moon",
    role: "developer",
    contacts: {
        mobile: "+1020891093",
        email: "su931010@gmail.com",
        github: "SungsuMoon",
        twitter: "noreply",
        location: "Seoul"
    },
    welcomeMessage: "Welcome to my world!",
    skills: ["swimming", "html", "css", "javascript"],
    biopic: "http://placehold.it/150x150",
    display: []
};

var education = {
    schools: [{
        name: "Soongsil Univ.",
        location: "Seoul",
        degree: "College Graduate",
        majors: ["computer-science", "electronic-engineering"],
        dates: "2014-2018",
        url: "http://www.dankook.ms.kr/"
    }],
    onlineCourses: [{
        title: "Front-end development",
        school: "Udacity",
        dates: "2016",
        url: "udacity.com"
    }],
    display: []
};

var work = {
    jobs: [{
        employer: "Cameron",
        title: "web development",
        location: "Starbucks, Seoul",
        dates: "in-progress",
        description: "happy Coding"
    }],
    display: []
};

var projects = {
    projects: [{
        title: "My page",
        dates: "2016",
        description: "my resume page",
        images: ["http://placehold.it/150x150"]
    }],
    display: []
};


bio.display = function() {
    var formattedHTMLheaderRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedHTMLheaderRole);

    var formattedHTMLheaderName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedHTMLheaderName);

    var formattedTopContacts = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts, #footerContacts").append(formattedTopContacts);
    formattedTopContacts = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts, #footerContacts").append(formattedTopContacts);
    formattedTopContacts = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts, #footerContacts").append(formattedTopContacts);
    formattedTopContacts = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts, #footerContacts").append(formattedTopContacts);
    formattedTopContacts = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts, #footerContacts").append(formattedTopContacts);

    var formattedPhoto = HTMLbioPic.replace("%data%", "images/fry.jpg");
    $("#header").append(formattedPhoto);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);

        bio.skills.forEach(function(skill) {
            var formattedSkill = HTMLskills.replace("%data%", skill);
            $("#skills").append(formattedSkill);
        });
    }
};
bio.display();

education.display = function() {
    $("#education").append(HTMLschoolStart);
    education.schools.forEach(function(school) {
        var formattedStuff = HTMLschoolName.replace("%data%", school.name);
        $(".education-entry").append(formattedStuff);
        formattedStuff = HTMLschoolDegree.replace("%data%", school.degree);
        $(".education-entry").append(formattedStuff);
        formattedStuff = HTMLschoolDates.replace("%data%", school.dates);
        $(".education-entry").append(formattedStuff);
        formattedStuff = HTMLschoolLocation.replace("%data%", school.location);
        $(".education-entry").append(formattedStuff);
        formattedStuff = HTMLschoolMajor.replace("%data%", school.majors[0]);
        $(".education-entry").append(formattedStuff);
        formattedStuff = HTMLschoolMajor.replace("%data%", school.majors[1]);
        $(".education-entry").append(formattedStuff);
    });

    $("#education").append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(onlineCourse) {
        formattedStuff = HTMLonlineTitle.replace("%data%", onlineCourse.title);
        $(".online").append(formattedStuff);
        formattedStuff = HTMLonlineSchool.replace("%data%", onlineCourse.school);
        $(".online").append(formattedStuff);
        formattedStuff = HTMLonlineDates.replace("%data%", onlineCourse.dates);
        $(".online").append(formattedStuff);
        formattedStuff = HTMLonlineURL.replace("%data%", onlineCourse.url);
        $(".online").append(formattedStuff);
    });

};
education.display();

work.display = function() {
    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", job.dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
        $(".work-entry:last").append(formattedDescription);
    });
};
work.display();

projects.display = function() {
    projects.projects.forEach(function(project) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(formattedDescription);

        var formattedImage = HTMLprojectImage.replace("%data%", project.images);
        $(".project-entry:last").append(formattedImage);
    });
};
projects.display();



$("#mapDiv").append(googleMap);