
Description
## project description
The WeatherApp contains two screens:
- Loading screen
- Weather info screen

##
Loading Screen
##
The loading screen is the first screen that is shown and here the weather data will be loaded from OpenWeatherMap at: https://
openweathermap.org/. I used  OpenWeatherMap APPID to obtain weather information.
The URL provided below returns weather info for a total of 5 days and each day contains a
maximum of 8 weather segments (3 hours).
Example request with our APPID:
http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=40
##
Weather Info Screen
##
After the weather data has been loaded the weather info screen is made visible. This screen is capable of showing a minimum of
5 days of weather forecasts for the same location.
##
Temperature checkbox
##
The screen contains a CheckboxGroup that switches between Celsius and Fahrenheit (Default). When the user selects i.e.
Celsius, all temperatures in the cards (BarChart) must switch to Celsius.
##
Card Arrows
##
Below the Checkboxes, there are two arrows to scroll through the weather cards (pageSize == 3)
The left arrow is only visible when the current pageIndex is > 0.
The right arrow is only visible when there is an item at pageIndex + pageSize.
##
Weather Cards
##
Below the arrows, a maximum of 3 weather cards are visible and they are laid out horizontally. Each card displays the weather
forecast for one day and must at least show the average temperature and date for that day.
© Payoneer Germany GmbH Page 2 of 2
BONUS
##
Barchart
When we select a weather card, a Barchart shows the temperature of each weather segment for that day. I.e. when selecting
tomorrow's weather card, the Barchart shows 8 bars with temperatures of 00:00 AM, 03:00 AM, 06:00 AM Etc.
##
Unit Tests
To make sure we do not get soaked by the rain although the WeatherApp told us the sun is shining and its 30 degrees, we do
appreciate a couple of unit tests.
Responsive Interface
To avoid taking our laptop everywhere, it would be nice if the WeatherApp also works on mobile devices.

