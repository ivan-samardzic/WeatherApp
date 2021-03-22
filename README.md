### WeatherApp

This App will render current weather details for specific city which name the user will type in the search bar. I'm using OpenWeatherAPI
to fetch the data in real time. Create React App Boilerplate provided me startup files to develop this app, then I cleaned that project 
and started to code. Developing process started with creating Header and Footer components with all child components nested in it.

At first, the data was static and stored in an object places in contextAPI file, I used that data to set the design for all components.
Header and Footer are always the first, then I started to develop components which share the data from the context. After that, I changed
the data inside context and started to fetch it using axios HTTP GET method by using OpenWeatherAPI endpoint. The Spinner component is 
introduced to show the users data buffering (screen can't be without content while fetching data from api).React Router Dom was also
introduced using npm to allow us to free the main component.

App is using:

1. React (React Router, React Hooks, React JSX, React Link, React Props, React Stats and more)
2. Context API
3. SCSS, GoogleFonts, FontAwesome and Bootstrap
4. Git and Postman
5. Responsive Web (in progress)

Requirements List:

1. App must contain the component that will be rendered whenever user have no city name type in the search bar.
2. App must contain the component that will store user favorite cities.
3. User must have an option to delete and add cities in the favorites whenever wants to.
4. By clicking at the favorite city item name, the data about that city must be rendered in the component which shows current weather.

### Deployment

App will be uploaded to Netlify so everyone can use and see it whenever it wants.

`npm start` after dowloading this project in VSCode will run the app at the localhost. 
