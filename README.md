Project1 - ResortRadar

Have you ever wanted to plan a vacation but didnt know what the weather would be like? Torn between two vacation spots? Look no further, this website will have a user enter a destination and you can also select choices to dislay such as humidty, UV index and wind, once you submit, it will then display the weather. Once that is displayed on the left side, in the center of a huge sun, that will change color depending on the temperature of that location, you can then choose a secondary location to compare to. With a side by side comparison your can decide where you want to go.

## Weather Comparison Webpage
This project aims to create a webpage that allows users to retrieve weather information for a specific location and compare it with another location.

## Acceptance Criteria
```md
GIVEN a ResortRador for finding weather where i travel to
WHEN I load the app,
THEN I am presented with the landing page containing a form with labels and inputs for location, it then has options to select additional weather related data.
WHEN I try to submit a form without a valid destination,
THEN I am presented with a message that prompts me to select a valid location.
WHEN I submit the form,
THEN the weather is loaded from API and is stored to localStorage.
WHEN The weather displays, the background image on the right side of the page will display a picture depicting the type of expected weather,
i.e Sunny sky, Rain, Snow.
THEN The right side of the screen displays a large sun, and the weather for my location is displayed there as well.
WHEN the weather changes temperatures the color of the sun will depict that too. Hot = RED sun, Warm = Orange, Low temps = Yellow, Cold temps = Blue.
THEN I am asked if i want to select a second location.
WHEN I select another location it will display on the left side of the window, whereas my first selection is displayed on the right, to compare.
WHEN I view the page,
THEN I am presented with a header, with a Farenheit/Celsius toggle, and a "Clear" button.
WHEN I click the F/C toggle,
THEN the degrees will be displayed to reflect the selection.
WHEN I click the "Clear" button,
THEN all data is cleared and removed from local storage.
WHEN I view localStorage,
THEN I am presented with a JSON array of weather objects, each including the content selected by the user.
```

### Features

- **Location Input**: Users can enter a destination to retrieve weather information.
- **Weather Display**: The webpage will display the current weather conditions for the entered location.
- **Optional Information**: The webpage will have an option for the user to select Humidity, UV Index and Wind.
- **Comparison**: Users will have the option to enter a second location and compare its weather with the first location.
- **Interface**: The left side of the page will have a large sun. The color of the sun will change with different temperature ranges. It will also display the current weather of the location entered by the user.
- **Reset button**: The bottom of the page will have a reset button to clear all save data.
- **Toggle button**: There will be a toggle on the bottom of the page to display Celcius or Farenheit.
- **Background images**: The background picture on the right side of the page will change with weather conditions.
- **User-friendly Interface**: The webpage will have a clean and intuitive interface for easy navigation.




![sun](https://media2.giphy.com/media/BmfHlDpPWJy899dy62/giphy.webp?cid=790b761132r030lp07s8nvigajol2a0qp3ct75304hps09cr&ep=v1_gifs_search&rid=giphy.webp&ct=g)


### Getting Started

To run the webpage locally, follow these steps:

1. Clone the repository: `git clone https://github.com/mvoidets/ResortRadar`
2. Navigate to the project directory: `cd ResortRadar`
3. Install the necessary dependencies: `npm install`
4. Start the development server: `npm start`
5. Open your web browser and visit `http://localhost:3000` to access the webpage.

### Technologies Used

- HTML
- CSS
- JavaScript
- React.js
- OpenWeatherMap API

### License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.

### Contact

If you have any questions or suggestions, feel free to reach out to us at [email@example.com](mailto:email@example.com).
