Issue to resolve
1)On home page i want redirection to login page
2)login page should have heder,content to display block for login and footer
3)after login i want multiple modules say plotdashboard,admin module etc with each module having its own layout as if some module have header,sidebar,footer common and some don't have sidebar.


In First commit above issue gets resolved but has performance issue.How?
1)In app-component we have router-outlet and route is '' which gets redirected to 'login',
2)Now for route 'login' we have login.module which import login-routing.module
3)login-routing.module has main-layout.component loaded and also logincomponent as to match route '/login'
4)now main-layout has 'header router-outlet footer' in its template.
5)whenever user comes at '' two main things happens.First router-outlet of app.compoennt gets loaded.Second main-layout.component template gets placed on router-outlet of app.component.
6)Point 1 to 5  is also applicable to signup.component.
7)Now when user switches route from 'login' to 'signup', what happens is all the components that matches this new route (in this case 'main-layout' and 'signup.component' gets matched) replaces the previous content of router-outlet of app.component.Hence we see error console for header and signup.
8)So to solve this we should alwayas have static content with router-outlet of app.component.


Above issue gets resolved using route params and deciding which layout to load in app.component.html based on params
1)