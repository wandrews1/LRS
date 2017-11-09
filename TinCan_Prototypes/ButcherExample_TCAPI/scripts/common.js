ButcherExample = {};

ButcherExample.CourseActivity = {
    id: "http://id.tincanapi.com/activity/tincan-prototypes/butcher-example",
    definition: {
        type: "http://adlnet.gov/expapi/activities/course",
        name: {
            "en-US": "Butcher Example - Tin Can Course"
        },
        description: {
            "en-US": "An overview of how to play the great game of butchering."
        }
    }
};

ButcherExample.getContext = function(parentActivityId, isAssessment) {
    isAssessment = typeof isAssessment !== 'undefined' ? isAssessment : false;
    var ctx = {
        contextActivities: {
            grouping: [
                {
                    id: ButcherExample.CourseActivity.id
                },
                {
                    id: "http://id.tincanapi.com/activity/tincan-prototypes"
                }
            ],
            category: [
                 {
                    id: "http://id.tincanapi.com/recipe/tincan-prototypes/golf/1",
                    definition: {
                        type: "http://id.tincanapi.com/activitytype/recipe"
                    }
                },
                {
                    id: "http://id.tincanapi.com/activity/tincan-prototypes/elearning",
                    definition: {
                        type: "http://id.tincanapi.com/activitytype/source",
                        name: {
                            "en-US": "E-learning course"
                        },
                        description: {
                            "en-US": "An e-learning course built using the golf prototype framework."
                        }
                    }
                }
            ]
        }
    };
    if (parentActivityId !== undefined && parentActivityId !== null) {
        ctx.contextActivities.parent = {
            id: parentActivityId
        };
    }
    if (isAssessment){
        ctx.contextActivities.grouping.push({
            id: ButcherExample.CourseActivity.id + "/ButcherAssessment"
        });
    }
    return ctx;
};
