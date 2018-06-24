# What To Eat
> Winnipeg Edition

## Run the Project

* `clone the repo`
* `cd folder_name && npm i`
* `react-native run-ios`

What To Eat, is a react native app, that show to the user, all the winnipeg restaurants.

It lists, all the Skip's partners, grouped by kind. Then the user can see the highest rated restaurants. Clicking on a restaurant, the user fetchs all the information from Google Places API, and it shows the latest 5 reviews from google. 

Also, the user can use a search page, to find restaurants.

## Stack of The Project

* axios
* react
* react-native
* react-native-router-flux
* react-native-vector-icons
* react-redux
* redux
* redux-thunk
* styled-components

I am using `react-native-router-flux` beacuse it already has transitions out of the box, and other things like Tabs, Stack, and etc.

For fetching data, i am using `axios` because it already converts the data in a json response.

For dealing with async requests, i am using `redux-thunk`

Icons on the app are using `react-native-vector-icons`

And for UI only elements, i am using `styled-components`

## TODO:

* Add tests to it
* Integrate with Microsoft App Center
* Release a alfa version on Google Play Store
