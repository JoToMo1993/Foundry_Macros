//-------------------------------------------------------------------------------------
// This part is configuration, you can make changes here, but make sure they are the same across all occurances.
//-------------------------------------------------------------------------------------

const LocationTranslate = {
    "Moderate": "Gemäßigte Klimazone",
    "Dessert": "Wüste",
    "Arctics": "Arktis",
    "Jungle": "Tropischer Regenwald"
}
const SeasonTranslate = {
    "Spring": "Frühling",
    "Summer": "Sommer",
    "Fall": "Herbst",
    "Winter": "Winter",
}

const AreaTranslate = {
    "Land": "Land",
    "Ocean": "Ozean",
    "Cloudocean": "Wolkenmeer"
}

const SeasonWeather = {
    "Spring": [
        "Dichter Nebel",
        "Leichter Nebel",
        "Sonnig",
        "Sonnig",
        "Sonnig",
        "Wechselhaft, Tendenz: sonnig",
        "Wechselhaft, Tendenz: sonnig",
        "Wechselhaft, Tendenz: wolkig",
        "Wechselhaft, Tendenz: wolkig",
        "Leicht bewölkt",
        "Leicht bewölkt",
        "Stark bewölkt",
        "Niesel",
        "Leichter Regen",
        "Regen",
        "Regen",
        "Regen",
        "Regen",
        "Regen",
        "Starker Regen",
    ],
    "Summer": [
        "Sonnig",
        "Sonnig",
        "Sonnig",
        "Sonnig",
        "Sonnig",
        "Wechselhaft, Tendenz: sonnig",
        "Wechselhaft, Tendenz: sonnig",
        "Wechselhaft, Tendenz: sonnig",
        "Wechselhaft, Tendenz: sonnig",
        "Wechselhaft, Tendenz: sonnig",
        "Wechselhaft, Tendenz: wolkig",
        "Wechselhaft, Tendenz: wolkig",
        "Leicht bewölkt",
        "Leicht bewölkt",
        "Stark bewölkt",
        "Niesel",
        "Leichter Regen",
        "Regen",
        "Gewitter",
        "Starkes Gewitter",
    ],
    "Fall": [
        "Dichter Nebel",
        "Leichter Nebel",
        "Sonnig",
        "Sonnig",
        "Sonnig",
        "Wechselhaft, Tendenz: sonnig",
        "Wechselhaft, Tendenz: sonnig",
        "Wechselhaft, Tendenz: wolkig",
        "Wechselhaft, Tendenz: wolkig",
        "Leicht bewölkt",
        "Leicht bewölkt",
        "Stark bewölkt",
        "Niesel",
        "Leichter Regen",
        "Regen",
        "Regen",
        "Regen",
        "Regen",
        "Regen",
        "Starker Regen",
    ],
    "WinterPositive": [
        "Dichter Nebel",
        "Leichter Nebel",
        "Sonnig",
        "Sonnig",
        "Wechselhaft, Tendenz: sonnig",
        "Wechselhaft, Tendenz: sonnig",
        "Wechselhaft, Tendenz: wolkig",
        "Wechselhaft, Tendenz: wolkig",
        "Leicht bewölkt",
        "Leicht bewölkt",
        "Stark bewölkt",
        "Stark bewölkt",
        "Leichter Regen",
        "Leichter Regen",
        "Regen",
        "Regen",
        "Regen",
        "Regen",
        "Regen",
        "Starker Regen",
    ],
    "WinterNegative": [
        "Dichter Nebel",
        "Leichter Nebel",
        "Sonnig",
        "Sonnig",
        "Wechselhaft, Tendenz: sonnig",
        "Wechselhaft, Tendenz: sonnig",
        "Wechselhaft, Tendenz: wolkig",
        "Wechselhaft, Tendenz: wolkig",
        "Leicht bewölkt",
        "Leicht bewölkt",
        "Stark bewölkt",
        "Stark bewölkt",
        "Leichter Schneefall",
        "Leichter Schneefall",
        "Schneefall",
        "Schneefall",
        "Schneefall",
        "Schneefall",
        "Schneefall",
        "Starker Schneefall",
    ],
    "Dessert": [
        "Sonnig",
        "Sonnig",
        "Sonnig",
        "Sonnig",
        "Sonnig",
        "Sonnig",
        "Sonnig",
        "Sonnig",
        "Sonnig",
        "Sonnig",
        "Sonnig",
        "Sonnig",
        "Sonnig",
        "Sonnig",
        "Sonnig",
        "Wechselhaft, Tendenz: sonnig",
        "Wechselhaft, Tendenz: wolkig",
        "Leicht bewölkt",
        "Stark bewölkt",
        "Regen",
    ],
    "Arctics": [
        "Sonnig",
        "Wechselhaft, Tendenz: sonnig",
        "Wechselhaft, Tendenz: wolkig",
        "Leicht bewölkt",
        "Leicht bewölkt",
        "Stark bewölkt",
        "Stark bewölkt",
        "Leichter Schneefall",
        "Leichter Schneefall",
        "Schneefall",
        "Schneefall",
        "Schneefall",
        "Schneefall",
        "Schneefall",
        "Schneefall",
        "Schneefall",
        "Schneefall",
        "Schneefall",
        "Starker Schneefall",
        "Starker Schneefall",
    ],
    "Jungle": [
        "Dichter Nebel",
        "Leichter Nebel",
        "Leichter Nebel",
        "Sonnig",
        "Sonnig",
        "Wechselhaft, Tendenz: sonnig",
        "Wechselhaft, Tendenz: wolkig",
        "Leicht bewölkt",
        "Stark bewölkt",
        "Leichter Regen",
        "Leichter Regen",
        "Regen",
        "Regen",
        "Regen",
        "Regen",
        "Regen",
        "Regen",
        "Starker Regen",
        "Starker Regen",
        "Monsun",
    ],
}

const LandWind = [
    "laues Lüftchen",
    "Windstärke 2",
    "Windstärke 3",
    "Windstärke 4",
    "Windstärke 5",
    "Windstärke 6",
    "Windstärke 7",
    "Windstärke 8",
    "Windstärke 9",
    "Sturmwind",
];
const OceanWind = [
    "Windstärke 3",
    "Windstärke 4",
    "Windstärke 5",
    "Windstärke 6",
    "Windstärke 7",
    "Windstärke 8",
    "Windstärke 9",
    "Sturmwind",
    "Orkan",
    "Orkan",
];
const CloudoceanWind = [
    "Windstärke 2",
    "Windstärke 3",
    "Windstärke 4",
    "Windstärke 5",
    "Windstärke 6",
    "Windstärke 7",
    "Windstärke 8",
    "Windstärke 9",
    "Sturmwind",
    "Sturmwind",
];

const TempAdjustments = {
    "Dessert": {
        "Leicht bewölkt": -5,
        "Stark bewölkt": -10,
        "Regen": -15
    },
    "Arctics": {
        "Sonnig": 5
    }
};

const MaxTempForTooCold = -18;
const AdditionalInfo_TooCold = "<p>Constitution Savingthrow DC 10 am Ende des Tages.<br/>" +
    "Bei Fehlschlag: +1 Exhaustion. Diese Exhaustion kann nur mit Wärme entfernt werden. 1 Stunde Wärme entfernt 1 Exhaustiongrad.<br/>" +
    "Automatischer Erfolg bei: Resistenz/Immunität gegen Kälteschaden, angepasster Ausrüstung oder natürlicher Anpassung.</p>";

const MinTempForTooHot = 38;
const AdditionalInfo_TooHot = "<p>Constitution Savingthrow DC 10 am Ende des Tages. Jeder weitere Tag erhöht die DC um +1.<br/>" +
    "Bei Fehlschlag: +1 Exhaustion mit mittelschwerer oder schwerer Rüstung. Diese Exhaustion reduziert sich bei Eis oder kühleren Temperaturen um 1 täglich.<br/>" +
    "Automatischer Erfolg bei: Resistenz/Immunität gegen Firedamage oder natürlicher Anpassung.<br/>" +
    "Der Bedarf an der täglichen Trinkwassermenge verdoppelt sich.</p>";

const AdditionalInfoByWeatherWindAndLocation = [
    {
        location: ["Dessert"],
        weather: ["Regen"],
        additionalInfo: "<p>Wasservorräte können aufgefüllt werden.</p>"
    },
    {
        wind: ["Sturmwind", "Orkan"],
        additionalInfo: "<p>Sturmwind:" +
            "<ul>" +
            "<li>Disadvantage bei Angriffswürfen mit Fernkampfwaffen</li>" +
            "<li>Disadvantage auf Perceptionchecks, die sich auf das Hören verlassen.</li>" +
            "<li>Offene Flammen werden gelöscht</li>" +
            "<li>Vertreibt Rauch und Nebel</li>" +
            "<li>Fliegende Kreaturen, die nicht-magisch fliegen, müssen am Ende des Zuges landen oder stürzen ab</li>" +
            "</ul>"
    },
    {
        location: ["Dessert"],
        wind: ["Sturmwind", "Orkan"],
        additionalInfo: "<ul>" +
            "<li><b>SANDSTURM</b></li>" +
            "</ul>"
    },
    {
        weather: ["Dichter Nebel"],
        additionalInfo: "<p>Disadvantage auf Perceptionchecks, die sich auf Sehen verlassen.</p>" +
            "<p>Kreaturen, die 15ft. oder weiter voneinander entfernt sind, gelten als heavily obscured zueinander.</p>"
    },
    {
        weather: ["Starker Schneefall", "Starker Regen", "Starkes Gewitter", "Monsun"],
        additionalInfo: "<p>Disadvantage auf Perceptionchecks, die sich auf Hören und Sehen verlassen.</p>"
    },
    {
        weather: ["Starker Regen", "Starkes Gewitter", "Monsun"],
        additionalInfo: "<p>Offene Flammen werden gelöscht.</p>"
    },
    {
        weather: ["Monsun"],
        additionalInfo: "<p>Reisegeschwindigkeit ist halbiert.</p>"
    }
]

//-------------------------------------------------------------------------------------
// Coding beginns here, please do not change.
//-------------------------------------------------------------------------------------

function printWeather(location, season, area, weather, wind, temp, additionalInformation) {
    Promise.all(Object.entries(weatherDiceRolls).map(([rollKey, roll]) => {
        let value = weatherDiceMessage(roll);
        return value.then(v => {
            return {"key": rollKey, "value": v};
        });
    })).then(rollMessages => {
        let result = {};

        rollMessages.forEach(rollMessage => result[rollMessage.key] = rollMessage.value);

        return result;
    }).then(rollMessages => {
        let showDice = document.getElementById("showDice").checked;
        let message =
            `<div class="convenient-effects-chat-header"><strong>Wetter</strong> - ${LocationTranslate[location]} ${(location === "Moderate" ? ` - ${SeasonTranslate[season]}` : "")} - ${AreaTranslate[area]}</div>
            <hr class="convenient-effects-fancy-hr">
            <div class="convenient-effects-chat-description">${weather}</div>
            ${showDice ? rollMessages["weather"].content : ""}
            <div class="convenient-effects-chat-description">Windstärke: ${wind}</div>
            ${showDice ? rollMessages["wind1"].content : ""}
            ${showDice && rollMessages["wind2"] ? rollMessages["wind2"].content : ""}
            <div class="convenient-effects-chat-description">Temperatur: ${temp}°C</div>
            ${showDice ? rollMessages["temp"].content : ""}`;

        if (additionalInformation.length > 0) {
            message += "<br/>";
            additionalInformation.forEach(addInfo => {
                message += `<div class=\"convenient-effects-chat-description\">${addInfo}</div>`;
            });
        }
        console.log(rollMessages);

        //message += rollMessages.map(rollMessage => rollMessage.content).join("");

        let chatData = {
            user: game.user.id,
            content: message,
            rolls: Object.values(rollMessages).map(rollMessage => rollMessage.rolls).flat(1),
            blind: false
        };

        ChatMessage.create(chatData, {});
    });
}

async function weatherDiceMessage(weatherDiceRoll) {
    let content = await weatherDiceRoll.render({async: false});
    return weatherDiceRoll.toMessage({
        speaker: ChatMessage.getSpeaker(),
        content: content
    }, {create: false})
}

let weatherDiceRolls = {};

const WeatherRoll = () => new Roll("1d20");

function rollWeather(testModeSource) {
    if (testMode) return parseInt(document.getElementById(testModeSource).value);
    let weatherRoll = WeatherRoll().roll({async: false});
    weatherDiceRolls["weather"] = weatherRoll;
    game.dice3d?.showForRoll(weatherRoll);
    return weatherRoll.total;
}

function getWeather(season, temp) {
    let weatherSource;
    if (season === "Winter") {
        if (temp < 0) {
            weatherSource = SeasonWeather["WinterNegative"];
        } else {
            weatherSource = SeasonWeather["WinterPositive"];
        }
    } else {
        weatherSource = SeasonWeather[season];
    }
    let roll = rollWeather("weather");

    return weatherSource[roll - 1] + ` [${roll}]`;
}

const WindRoll = {
    "wind1": () => new Roll("1d10"),
    "wind2": () => new Roll("1d10")
};

function rollWind(testModeSource) {
    if (testMode) return parseInt(document.getElementById(testModeSource).value);
    let windRoll = WindRoll[testModeSource]().roll({async: false});
    weatherDiceRolls[testModeSource] = windRoll;
    game.dice3d?.showForRoll(windRoll);
    return windRoll.total;
}

function getWind(location) {
    switch (location) {
        case "Land":
            let rollLand = rollWind("wind1");
            return LandWind[rollLand - 1] + " [" + rollLand + "]";
        case "Ocean":
            let rollOcean1 = rollWind("wind1");
            let rollOcean2 = rollWind("wind2");
            if (rollOcean1 === rollOcean2) {
                if (rollOcean1 === 10)
                    return "Orkan [10]";
                return "Flaute [" + rollOcean1 + "]";
            }
            let rollOcean = Math.min(rollOcean1, rollOcean2);
            return OceanWind[rollOcean - 1] + " [" + rollOcean + "]";
        case "Cloudocean":
            let rollCloudocean1 = rollWind("wind1");
            let rollCloudocean2 = rollWind("wind2");
            if (rollCloudocean1 === rollCloudocean2) {
                if (rollCloudocean1 === 1) {
                    return "Flaute [1]";
                }
                if (rollCloudocean1 === 10) {
                    return "Orkan [10]"
                }
            }
            let rollCloudocean = Math.max(rollCloudocean1, rollCloudocean2);
            return CloudoceanWind[rollCloudocean - 1] + " [" + rollCloudocean + "]";
    }

    return "undefined Wind";
}

const SeasonTempRoll = {
    "Spring": () => new Roll("2d20kh"),
    "Summer": () => new Roll("1d20+15"),
    "Fall": () => new Roll("2d20kl"),
    "Winter": () => new Roll("1d20-15"),
    "Dessert": () => new Roll("1d20+25"),
    "Arctics": () => new Roll("1d20-25"),
    "Jungle": () => new Roll("1d20+10")
}

function getTemp(season) {
    let roll = SeasonTempRoll[season]().roll({async: false});
    weatherDiceRolls["temp"] = roll;
    game.dice3d?.showForRoll(roll);
    return roll.total;
}

let testMode = false;

await game.settings.register('weather_macro', 'location', {
    name: 'Location',
    hint: 'Stores the location entered previously',
    scope: 'client',
    config: false,
    type: String,
    default: 'Moderate',
    filePicker: false,
    requiresReload: false,
});
await game.settings.register('weather_macro', 'season', {
    name: 'Season',
    hint: 'Stores the season entered previously',
    scope: 'client',
    config: false,
    type: String,
    default: 'Spring',
    filePicker: false,
    requiresReload: false,
});
await game.settings.register('weather_macro', 'area', {
    name: 'Area',
    hint: 'Stores the area entered previously',
    scope: 'client',
    config: false,
    type: String,
    default: 'Land',
    filePicker: false,
    requiresReload: false,
});

const popupTemplate = `
<table>
  <tr>
    <td><label for='area'>Area</label></td>
    <td>
      <select name='area' id='area'>
        <option value='Land' ${optionSelected('area', 'Land')}>Land</option>
        <option value='Ocean' ${optionSelected('area', 'Ocean')}>Ocean</option>
        <option value='Cloudocean' ${optionSelected('area', 'Cloudocean')}>Cloudocean</option>
      </select>
    </td>
  </tr>
  <tr>
    <td><label for='location'>Location</label></td>
    <td>
      <select name='location' id='location'>
        <option value='Moderate' ${optionSelected('location', 'Moderate')}>Moderate climate zone</option>
        <option value='Dessert' ${optionSelected('location', 'Dessert')}>Dessert</option>
        <option value='Arctics' ${optionSelected('location', 'Arctics')}>Arctics</option>
        <option value='Jungle' ${optionSelected('location', 'Jungle')}>Tropical Jungle</option>
      </select>
    </td>
  </tr>
  <tr>
    <td><label for='season'>Season</label></td>
    <td>
      <select name='season' id='season' ${game.settings.get('weather_macro', 'location') !== 'Moderate' ? 'disabled' : ''}>
        <option value='Spring' ${optionSelected('season', 'Spring')}>Spring</option>
        <option value='Summer' ${optionSelected('season', 'Summer')}>Summer</option>
        <option value='Fall' ${optionSelected('season', 'Fall')}>Fall</option>
        <option value='Winter' ${optionSelected('season', 'Winter')}>Winter</option>
      </select>
    </td>
  </tr>
  <tr>
    <td><label for='showDice'>Show dice</label></td>
    <td><input type='checkbox' id='showDice' value='showDice'></td>
  </tr>
  <tr>
    <td><label for='test'>Enable test-mode</label></td>
    <td><input type='checkbox' id='test' value='test'></td>
  </tr>
  <tr class="test-mode-input" style="visibility: collapse">
    <td><label for='weather'>Weather dice</label></td>
    <td><input type='number' id='weather' value='1' min='1' max='20'></td>
  </tr>
  <tr class="test-mode-input" style="visibility: collapse">
    <td><label for='wind1'>Wind dice 1</label></td>
    <td><input type='number' id='wind1' value='1' min='1' max='10'></td>
  </tr>
  <tr class="test-mode-input" style="visibility: collapse">
    <td><label for='wind2'>Wind dice 2</label></td>
    <td><input type='number' id='wind2' value='1' min='1' max='10'></td>
  </tr>
  <tr class="test-mode-input" style="visibility: collapse">
    <td><label for='temperature'>Temperature result</label></td>
    <td><input type='number' id='temperature' value='0'></td>
  </tr>
</table>
<script>
document.getElementById("location").onchange = function () {
    document.getElementById("season").disabled = document.getElementById("location").value !== "Moderate";
}
document.getElementById("test").onchange = function () {
    // toggle test-mode
    let visibility = document.getElementById("test").checked ? "visible" : "collapse";
    let inputs = document.getElementsByClassName("test-mode-input");
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].style.visibility = visibility;    
    }
}
</script>
`;

function optionSelected(type, value) {
    if (game.settings.get('weather_macro', type) === value) {
        return 'selected="selected"';
    } else {
        return '';
    }
}

async function dialogSubmit() {
    testMode = document.getElementById("test").checked;
    let location = document.getElementById("location").value;
    let season = document.getElementById("season").value;
    let locationSeason = location === "Moderate" ? season : location;
    let area = document.getElementById("area").value;

    // Save to local storage
    await game.settings.set('weather_macro', 'location', location);
    await game.settings.set('weather_macro', 'season', season);
    await game.settings.set('weather_macro', 'area', area);

    let temp = testMode ? parseInt(document.getElementById("temperature").value) : getTemp(locationSeason);
    let wind = getWind(area);
    let weather = getWeather(locationSeason, temp);

    let additionalInformation = [];

    // weather temp adjustments
    let locationTempAdjustment = TempAdjustments[location];
    if (locationTempAdjustment !== undefined) {
        Object.entries(locationTempAdjustment).forEach(([key, value]) => {
            if (weather.startsWith(key)) temp += value;
        });
    }
    if (temp <= MaxTempForTooCold) {
        // Too cold
        additionalInformation.push(AdditionalInfo_TooCold);
    } else if (MinTempForTooHot <= temp) {
        // Too hot
        additionalInformation.push(AdditionalInfo_TooHot);
    }

    AdditionalInfoByWeatherWindAndLocation.forEach(entry => {
        let locationMatch = entry.location ? entry.location.some(l => location === l) : true;
        let weatherMatch = entry.weather ? entry.weather.some(weatherStart => weather.startsWith(weatherStart)) : true;
        let windMatch = entry.wind ? entry.wind.some(windStart => wind.startsWith(windStart)) : true;

        if (locationMatch && weatherMatch && windMatch) {
            additionalInformation.push(entry.additionalInfo);
        }
    });

    printWeather(location, season, area, weather, wind, temp, additionalInformation);
}

let d = new Dialog({
    title: 'Weather Select',
    content: popupTemplate,
    buttons: {
        ok: {
            icon: '<i class="fas fa-check"></i>',
            label: "Do it!",
            callback: dialogSubmit
        },
        cancel: {
            icon: '<i class="fas fa-times"></i>',
            label: "Never mind",
            callback: () => {
            }
        }
    }
});
d.render(true);