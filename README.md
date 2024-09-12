Project1 - ResortRadar

Have you ever wanted to plan a vacation but didnt know what the weather would be like? Torn between two vacation spots? Look no further, this website will have a user enter a destination and you can also select choices to dislay such as humidty, UV index and wind, once you submit, it will then display the weather. Once that is displayed on the left side, in the center of a huge sun, that will change color depending on the temperature of that location, you can then choose a secondary location to compare to. With a side by side comparison your can decide where you want to go.

## Weather Comparison Webpage
This project aims to create a webpage that allows users to retrieve weather information for a specific location and compare it with another location.

## Acceptance Criteria
```md
GIVEN a ResortRador for finding weather where i travel to
WHEN I load the app,
THEN I am presented with the landing page containing a form with labels and inputs for location.
WHEN I try to submit a form without a valid destination or incomplete data,
THEN I am presented with a message that prompts me to select a valid location.
WHEN I submit the form,
THEN the weather is loaded from API and is stored to localStorage.
WHEN The weather displays, it will display in card view and the background image of the card will change depending on the weather,
i.e Sunny, CLoudy, Rain, Snow.
THEN I am asked if i want to select a second location.
WHEN I select another location it will display next to the first weather card, to compare.
WHEN I view the page,
THEN I am presented with a header,and a "Clear" button which display a modal.
WHEN I click the Clear toggle,
THEN all local storage is cleared.
WHEN I click the "Clear" button,
THEN all data is cleared and removed from local storage.

```

### Features

- **Location Input**: Users can enter a destination to retrieve weather information.
- **Weather Display**: The webpage will display the current weather conditions for the entered location.
- **Optional Information**: The webpage will have an option for the user to select Humidity, UV Index and Wind.
- **Comparison**: Users will have the option to enter a second location and compare its weather with the first location.
- **Interface**: The page loades with a scenic background and text input for city and state. When click Get Weather, it will also display the current weather of the location entered by the user on a card and the weather type will be displayed as the card background. 
- **Reset button**: The bottom (or top) of the page will have a reset button to clear all save data.
- **Background images**: The background picture display will be static.
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
- Bootstrap
- JavaScript
- React.js
- OpenWeatherMap API

### License



### Contact

If you have any questions or suggestions, feel free to reach out to us at [email@example.com](mailto:email@example.com).
