﻿// Example of adding component to SPA. Now this can be used as <example-component></example-component>
Vue.component('example-component', {
    props:['example', 'example2'],
    template: '<h2> Boilerplate for {{example}} + {{example2}} </h2>'
});

// Define more components for routes.
var Route1 = { template: '<div>Route {{ $route.params.id }}</div>' };
var Route2 = { template: '<div>Route {{ $route.params.id }}</div>' };

// Define routes with id parameters.
var routes = [
    { path: '/foo/:id', component: Route1 },
    { path: '/bar/:id', component: Route2 }
];

// Initialize router.
var router = new VueRouter({
    routes:routes
});

// Initialize our SPA.
var ExampleApp = new Vue({
    self: this,
    el: '#ExampleApp',
    data: {
        header: 'Sane Software',
        exampleGetResult: {
            name: "Test",
            age: 69
        }
    },
    computed: {
        fullExample: function () {
            return this.exampleGetResult.name + " " + this.exampleGetResult.age;
        }
    },
    methods: {
        getExampleModel: function (event) {
            var self = this;
            dataservice.getObject("/api/example", function (result) {
                self.exampleGetResult.name = result.name;
                self.exampleGetResult.age = result.age;
            });
        }
    },
    created: function () {
        console.log("Vue instance has been created");
    },
    router:router
});


