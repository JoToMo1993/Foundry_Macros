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
    "Stärke 2",
    "Stärke 3",
    "Stärke 4",
    "Stärke 5",
    "Stärke 6",
    "Stärke 7",
    "Stärke 8",
    "Stärke 9",
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
            "<li>Disadvantage bei Angriffswürfen mit Waffen.</li>" +
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
        weather: ["Gewitter", "Starkes Gewitter", "Starker Schneefall", "Starker Regen", "Monsun", "Dichter Nebel"],
        additionalInfo: "<p>Das maximale Reisetempo auf einer Route ist um eine Stufe reduziert. Nicht weniger als Slow.</p>"
    },
    {
        wind: ["Sturmwind"],
        additionalInfo: "<p>Das maximale Reisetempo auf einer Route ist um eine Stufe reduziert. Nicht weniger als Slow.</p>"
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

const WeatherDiceNameTranslate = {
    'weather': 'Wetter',
    'wind1': 'Wind',
    'wind2': 'Wind (zweiter Würfel)',
    'temp': 'Temperatur',
}

//-------------------------------------------------------------------------------------
// Coding beginns here, please do not change.
//-------------------------------------------------------------------------------------

const cardPrefix = '<div class="dnd5e2 chat-card item-card">';
const cardSuffix = '</div>';
const diceRollPrefix = '<section class="card-header description">';
const diceRollSuffix = '</section>';
const headerPrefix = '<section class="card-header description collapsible">';
const headerSuffix = '</section>';
const additionalPrefix = '<section class="card-header description collapsible"><header class="summary"><div class="name-stacked border"><span class="title">Zusatzinformationen</span></div></header>'
const additionalSuffix = '</section>';

function printWeather(location, season, area, weather, wind, temp, additionalInformation, date) {
    Promise.all(Object.entries(weatherDiceRolls).map(async ([rollKey, roll]) => {
        // render the usual dice roll
        let diceRoll = weatherDiceMessage(roll);

        // package the result
        return diceRoll.then(v => {
            let doc = (new DOMParser()).parseFromString(v.content, 'text/html');

            // wrap dice-total in div
            let diceTotal = doc.querySelector('h4.dice-total');
            diceTotal.outerHTML = '<div class="rsr-multiroll">' + diceTotal.outerHTML + '</div>';

            // fix the dice roll by placing the formular in the collapsible part
            console.log('bla');
            let formularDiv = doc.querySelector('div.dice-formula');
            let tooltipDiv = doc.querySelector('div.dice-tooltip');
            formularDiv.remove();
            tooltipDiv.innerHTML = formularDiv.outerHTML + tooltipDiv.innerHTML;

            // wrap dice roll for card
            let diceTitle = `<div class="rsr-header"><div class="rsr-title"><span>${WeatherDiceNameTranslate[rollKey]}</span></div></div>`;
            v.content = diceRollPrefix + diceTitle + doc.documentElement.innerHTML + diceRollSuffix;

            return {"key": rollKey, "value": v};
        });
    })).then(rollMessages => {
        let result = {};

        rollMessages.forEach(rollMessage => result[rollMessage.key] = rollMessage.value);

        return result;
    }).then(rollMessages => {
        let headerPart = createHeaderPart(location, season, area, weather, wind, temp, date);
        let additionalPart = createAdditionalPart(additionalInformation);
        let dicePart = createDicePart(showDice, rollMessages);
        let message = cardPrefix + headerPart + additionalPart + dicePart + cardSuffix;

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
    let weatherContent = weatherDiceRoll.render();
    return weatherContent.then(content => weatherDiceRoll.toMessage({
        speaker: ChatMessage.getSpeaker(),
        content: content,
        rolls: Object.values(content).map(rollMessage => rollMessage.rolls).flat(1),
    }, {create: false}));
}

function createHeaderPart(location, season, area, weather, wind, temp, date) {
    let icon = `<div style="position: relative;width: 32px;height: 32px" class="gold-icon">
        <img style="z-index:1;position: absolute;left: 0;top: 0;border: none;border-radius: unset;" src="${LocationIcons[location]}" alt="Location ${location}">
        <img style="z-index:2;position: absolute;left: 0;top: 0;border: none;border-radius: unset;" src="${AreaIcons[area]}" alt="Area ${area}">
        <img style="z-index:3;position: absolute;left: 0;top: 0;border: none;border-radius: unset;" src="${WeatherIcons[weather.substring(0, weather.indexOf('[') - 1)]}" alt="Wetter ${weather.substring(0, weather.indexOf('[') - 1)}">
        </div>`;
    let name = `<header class="summary">${icon}<div class="name-stacked border"><span class="title">Wetter: ${date}</span><span class="subtitle">${LocationTranslate[location]} ${(location === "Moderate" ? ` - ${SeasonTranslate[season]}` : "")} - ${AreaTranslate[area]}</span></div></header>`;
    let weatherSection = `<section class="details card-content"><div class="wrapper"><div class="ddb"><p>${weather}</p><p>Wind: ${wind}</p><p>Temperatur: ${temp}°C</p></div></div></section>`;

    return headerPrefix + name + weatherSection + headerSuffix;
}

function createAdditionalPart(additionalInformation) {
    let additionalPart = '';

    if (additionalInformation.length > 0) {
        additionalPart += additionalPrefix;
        additionalInformation.filter((v, i, a) => a.indexOf(v) === i).forEach(addInfo => {
            additionalPart += `<section class="details card-content"><div class="wrapper">${addInfo}</div></section>`;
        });
        additionalPart += additionalSuffix;
    }

    return additionalPart;
}

function createDicePart(showDice, rollMessages) {
    if (!showDice) return '';
    return Object.values(rollMessages).map(rollMessage => rollMessage.content).join('');
}

let weatherDiceRolls = {};

const WeatherRoll = () => new Roll("1d20");

async function rollWeather(testModeSource) {
    if (testMode) return new Promise(resolve => resolve(parseInt(document.getElementById(testModeSource).value)));
    let weatherRoll = WeatherRoll().roll();
    return weatherRoll.then(roll => {
        weatherDiceRolls["weather"] = roll;
        game.dice3d?.showForRoll(roll);
        return roll.total;
    })
}

async function getWeather(season, temp) {
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
    let weatherRoll = rollWeather("weather");

    return weatherRoll.then(roll => weatherSource[roll - 1] + ` [${roll}]`);
}

const WindRoll = {
    "wind1": () => new Roll("1d10"),
    "wind2": () => new Roll("1d10")
};

async function rollWind(testModeSource) {
    if (testMode) return parseInt(document.getElementById(testModeSource).value);
    let windRoll = WindRoll[testModeSource]().roll();
    return windRoll.then(roll => {
        weatherDiceRolls[testModeSource] = roll;
        game.dice3d?.showForRoll(roll);
        return roll.total;
    });
}

async function getWind(location) {
    switch (location) {
        case "Land":
            let rollLand = rollWind("wind1");
            return rollLand.then(roll => LandWind[roll - 1] + " [" + roll + "]");
        case "Ocean":
            let rollOcean1 = rollWind("wind1");
            let rollOcean2 = rollWind("wind2");
            return Promise.all([rollOcean1, rollOcean2])
                .then(rolls => {
                    if (rolls[0] === rolls[1]) {
                        if (rolls[0] === 10)
                            return "Orkan [10]";
                        return "Flaute [" + rolls[0] + "]";
                    }
                    let rollOcean = Math.min(rolls[0], rolls[1]);
                    return OceanWind[rollOcean - 1] + " [" + rollOcean + "]";
                });
        case "Cloudocean":
            let rollCloudocean1 = rollWind("wind1");
            let rollCloudocean2 = rollWind("wind2");
            return Promise.all([rollCloudocean1, rollCloudocean2])
                .then(rolls => {
                    if (rolls[0] === rolls[1]) {
                        if (rolls[0] === 1) {
                            return "Flaute [1]";
                        }
                        if (rolls[0] === 10) {
                            return "Orkan [10]"
                        }
                    }
                    let rollCloudocean = Math.max(rolls[0], rolls[1]);
                    return CloudoceanWind[rollCloudocean - 1] + " [" + rollCloudocean + "]";
                });
    }

    return new Promise((resolve) => resolve("undefined Wind"));
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

async function getTemp(season) {
    let tempRoll = SeasonTempRoll[season]().roll();
    return tempRoll.then(roll => {
        weatherDiceRolls["temp"] = roll;
        game.dice3d?.showForRoll(roll);
        return roll.total;
    });
}

let testMode = false;
let showDice = false;
const MacroName = 'weather_macro';

await game.settings.register(MacroName, 'location', {
    name: 'Location',
    hint: 'Stores the location entered previously',
    scope: 'client',
    config: false,
    type: String,
    default: 'Moderate',
    filePicker: false,
    requiresReload: false,
});
await game.settings.register(MacroName, 'season', {
    name: 'Season',
    hint: 'Stores the season entered previously',
    scope: 'client',
    config: false,
    type: String,
    default: 'Spring',
    filePicker: false,
    requiresReload: false,
});
await game.settings.register(MacroName, 'area', {
    name: 'Area',
    hint: 'Stores the area entered previously',
    scope: 'client',
    config: false,
    type: String,
    default: 'Land',
    filePicker: false,
    requiresReload: false,
});
await game.settings.register(MacroName, 'showDice', {
    name: 'Show Dice',
    hint: 'Stores the show dice selection entered previously',
    scope: 'client',
    config: false,
    type: Boolean,
    default: false,
    filePicker: false,
    requiresReload: false,
});
await game.settings.register(MacroName, 'date', {
    name: 'Date',
    hint: 'Stores the date entered previously',
    scope: 'client',
    config: false,
    type: String,
    default: '',
    filePicker: false,
    requiresReload: false,
});

const popupTemplate = `
<table style="margin: 0">
  <tr>
    <td><label for='date'>Date</label></td>
    <td>
      <input id="date" value="${game.settings.get(MacroName, 'date')}" />
    </td>
  </tr>
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
  <tr style="visibility: ${game.settings.get(MacroName, 'location') !== 'Moderate' ? 'hidden' : 'visible'}">
    <td><label for='season'>Season</label></td>
    <td>
      <select name='season' id='season' ${game.settings.get(MacroName, 'location') !== 'Moderate' ? 'disabled' : ''}>
        <option value='Spring' ${optionSelected('season', 'Spring')}>Spring</option>
        <option value='Summer' ${optionSelected('season', 'Summer')}>Summer</option>
        <option value='Fall' ${optionSelected('season', 'Fall')}>Fall</option>
        <option value='Winter' ${optionSelected('season', 'Winter')}>Winter</option>
      </select>
    </td>
  </tr>
  <tr>
    <td><label for='showDice'>Show dice</label></td>
    <td><input type='checkbox' id='showDice' value='showDice' ${game.settings.get(MacroName, 'showDice') ? 'checked' : ''}></td>
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
`;

function optionSelected(type, value) {
    if (game.settings.get(MacroName, type) === value) {
        return 'selected="selected"';
    } else {
        return '';
    }
}

async function dialogSubmit(formdata) {
    testMode = formdata.test;
    showDice = formdata.showDice;
    let date = formdata.date;
    let location = formdata.location;
    let season = formdata.season;
    let locationSeason = location === "Moderate" ? season : location;
    let area = formdata.area;

    let tempPromise = testMode ?
        new Promise((resolve => resolve(parseInt(formdata.temperature)))) :
        getTemp(locationSeason);
    let windPromise = getWind(area);
    let weatherPromise = tempPromise.then(temp => getWeather(locationSeason, temp));

    Promise.all([tempPromise, windPromise, weatherPromise])
        .then(values => {
            let temp = values[0];
            let wind = values[1];
            let weather = values[2];

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

            printWeather(location, season, area, weather, wind, temp, additionalInformation, date);
        });
}

const IgnoreSavingIds = [
    'test',
    'weather',
    'wind1',
    'wind2',
    'temperature',
]

async function action(button, callback) {
    const form = button.form.elements
    const formData = {};

    for (const [key, input] of Object.entries(form)) {
        if (input.tagName === 'BUTTON') {
            continue;
        }
        // not a numbered index
        let properKey = '';
        if (!/^\d+$/.test(key)) {
            properKey = key;
        } else {
            console.log(input, input.id)
            properKey = input.id
        }

        let val;
        if (input.tagName !== 'CHECKBOX') {
            val = input.value;
        } else {
            val = input.checked
        }
        formData[properKey] = val;
        if (!IgnoreSavingIds.includes(properKey)) {
            await game.settings.set(MacroName, properKey, input.value);
        }
    }

    callback(formData);
}

let d = new foundry.applications.api.DialogV2({
    window: {title: 'Weather Select'},
    content: popupTemplate,
    buttons: [{
        action: 'ok',
        icon: '<i class="fas fa-check"></i>',
        label: "Do it!",
        default: true,
        callback: (_, button, __) => action(button, dialogSubmit)
    }, {
        action: 'cancel',
        icon: '<i class="fas fa-times"></i>',
        label: "Never mind",
    }],
    submit: () => {
        /* ignored */
    }
});
d.render(true).then((dialog) => {
    dialogByIds = [...dialog.element.getElementsByTagName("*")]
        .reduce((acc, cur, _) => {
            if (cur.id) {
                acc[cur.id] = cur;
            }
            return acc;
        }, {});
    dialogByIds["location"].onchange = function () {
        dialogByIds["season"].disabled = dialogByIds["location"].value !== "Moderate";
        dialogByIds["season"].parentElement.parentElement.style.visibility
            = dialogByIds["location"].value !== "Moderate" ? "hidden" : "visible";
    }
    dialogByIds["test"].onchange = function () {
        // toggle test-mode
        let visibility = dialogByIds["test"].checked ? "visible" : "collapse";
        let inputs = dialog.element.getElementsByClassName("test-mode-input");
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].style.visibility = visibility;
        }
    }
});

const LocationIcons = {
    "Moderate": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAABhWlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AYht+mSou0iNhBxCFDdWpBVMRRqlgEC6Wt0KqDyaV/0MSQpLg4Cq4FB38Wqw4uzro6uAqC4A+Is4OToouU+F1SaBHjwd09vPe9L3ffAUKzxlSzZxxQNcvIJBNivrAiBl4RRBgDtMYkZuqp7EIOnuPrHj6+38V5lnfdnyOsFE0G+ETiWaYbFvE68fSmpXPeJ46wiqQQnxPHDLog8SPXZZffOJcdFnhmxMhl5ogjxGK5i+UuZhVDJZ4ijiqqRvlC3mWF8xZntVZn7XvyF4aK2nKW6zRHkMQiUkhDhIw6qqjBQpx2jRQTGTpPePiHHX+aXDK5qmDkmMcGVEiOH/wPfvfWLE1OuEmhBND7Ytsfo0BgF2g1bPv72LZbJ4D/GbjSOv6NJjDzSXqjo0WPgP5t4OK6o8l7wOUOMPSkS4bkSH6aQqkEvJ/RNxWAwVugb9XtW/scpw9Ajnq1dAMcHAJjZcpe83h3sLtv/9a0+/cDdSByqBZzSuQAAAAJcEhZcwAALiMAAC4jAXilP3YAAAAHdElNRQfoCA0RECHvlmsbAAAAGXRFWHRDb21tZW50AENyZWF0ZWQgd2l0aCBHSU1QV4EOFwAAACtJREFUSMftzUENADAIBLBjavGHQVTsQdIaaPXkq5cIBAKBQCAQCASCG8EC9oQBW/nZewsAAAAASUVORK5CYII=",
    "Dessert": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAABhWlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AYht+mSou0iNhBxCFDdWpBVMRRqlgEC6Wt0KqDyaV/0MSQpLg4Cq4FB38Wqw4uzro6uAqC4A+Is4OToouU+F1SaBHjwd09vPe9L3ffAUKzxlSzZxxQNcvIJBNivrAiBl4RRBgDtMYkZuqp7EIOnuPrHj6+38V5lnfdnyOsFE0G+ETiWaYbFvE68fSmpXPeJ46wiqQQnxPHDLog8SPXZZffOJcdFnhmxMhl5ogjxGK5i+UuZhVDJZ4ijiqqRvlC3mWF8xZntVZn7XvyF4aK2nKW6zRHkMQiUkhDhIw6qqjBQpx2jRQTGTpPePiHHX+aXDK5qmDkmMcGVEiOH/wPfvfWLE1OuEmhBND7Ytsfo0BgF2g1bPv72LZbJ4D/GbjSOv6NJjDzSXqjo0WPgP5t4OK6o8l7wOUOMPSkS4bkSH6aQqkEvJ/RNxWAwVugb9XtW/scpw9Ajnq1dAMcHAJjZcpe83h3sLtv/9a0+/cDdSByqBZzSuQAAAAJcEhZcwAALiMAAC4jAXilP3YAAAAHdElNRQfoCA0REBHJT1u3AAAAGXRFWHRDb21tZW50AENyZWF0ZWQgd2l0aCBHSU1QV4EOFwAAACtJREFUSMftzUEBAEAEADAuq2wqqXMl+G0FltMVl14cEwgEAoFAIBAIBFs+VlkCIeJFDP0AAAAASUVORK5CYII=",
    "Arctics": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAABhWlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AYht+mSou0iNhBxCFDdWpBVMRRqlgEC6Wt0KqDyaV/0MSQpLg4Cq4FB38Wqw4uzro6uAqC4A+Is4OToouU+F1SaBHjwd09vPe9L3ffAUKzxlSzZxxQNcvIJBNivrAiBl4RRBgDtMYkZuqp7EIOnuPrHj6+38V5lnfdnyOsFE0G+ETiWaYbFvE68fSmpXPeJ46wiqQQnxPHDLog8SPXZZffOJcdFnhmxMhl5ogjxGK5i+UuZhVDJZ4ijiqqRvlC3mWF8xZntVZn7XvyF4aK2nKW6zRHkMQiUkhDhIw6qqjBQpx2jRQTGTpPePiHHX+aXDK5qmDkmMcGVEiOH/wPfvfWLE1OuEmhBND7Ytsfo0BgF2g1bPv72LZbJ4D/GbjSOv6NJjDzSXqjo0WPgP5t4OK6o8l7wOUOMPSkS4bkSH6aQqkEvJ/RNxWAwVugb9XtW/scpw9Ajnq1dAMcHAJjZcpe83h3sLtv/9a0+/cDdSByqBZzSuQAAAAJcEhZcwAALiMAAC4jAXilP3YAAAAHdElNRQfoCA0REAHU+EvTAAAAGXRFWHRDb21tZW50AENyZWF0ZWQgd2l0aCBHSU1QV4EOFwAAACtJREFUSMftzUEBAEAEADCusjhKiXQl+G0FltUTl14cEwgEAoFAIBAIBFs+MS8CHnBIt1sAAAAASUVORK5CYII=",
    "Jungle": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAABhWlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AYht+mSou0iNhBxCFDdWpBVMRRqlgEC6Wt0KqDyaV/0MSQpLg4Cq4FB38Wqw4uzro6uAqC4A+Is4OToouU+F1SaBHjwd09vPe9L3ffAUKzxlSzZxxQNcvIJBNivrAiBl4RRBgDtMYkZuqp7EIOnuPrHj6+38V5lnfdnyOsFE0G+ETiWaYbFvE68fSmpXPeJ46wiqQQnxPHDLog8SPXZZffOJcdFnhmxMhl5ogjxGK5i+UuZhVDJZ4ijiqqRvlC3mWF8xZntVZn7XvyF4aK2nKW6zRHkMQiUkhDhIw6qqjBQpx2jRQTGTpPePiHHX+aXDK5qmDkmMcGVEiOH/wPfvfWLE1OuEmhBND7Ytsfo0BgF2g1bPv72LZbJ4D/GbjSOv6NJjDzSXqjo0WPgP5t4OK6o8l7wOUOMPSkS4bkSH6aQqkEvJ/RNxWAwVugb9XtW/scpw9Ajnq1dAMcHAJjZcpe83h3sLtv/9a0+/cDdSByqBZzSuQAAAAJcEhZcwAALiMAAC4jAXilP3YAAAAHdElNRQfoCA0RDyvCGYybAAAAGXRFWHRDb21tZW50AENyZWF0ZWQgd2l0aCBHSU1QV4EOFwAAACtJREFUSMftzUEBAEAEADCujaTCKHkl+G0FljUdl14cEwgEAoFAIBAIBFs+/WsBm5g4mLgAAAAASUVORK5CYII=",
}
const AreaIcons = {
    "Land": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABhWlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AYht+mSou0iNhBxCFDdWpBVMRRqlgEC6Wt0KqDyaV/0MSQpLg4Cq4FB38Wqw4uzro6uAqC4A+Is4OToouU+F1SaBHjwd09vPe9L3ffAUKzxlSzZxxQNcvIJBNivrAiBl4RRBgDtMYkZuqp7EIOnuPrHj6+38V5lnfdnyOsFE0G+ETiWaYbFvE68fSmpXPeJ46wiqQQnxPHDLog8SPXZZffOJcdFnhmxMhl5ogjxGK5i+UuZhVDJZ4ijiqqRvlC3mWF8xZntVZn7XvyF4aK2nKW6zRHkMQiUkhDhIw6qqjBQpx2jRQTGTpPePiHHX+aXDK5qmDkmMcGVEiOH/wPfvfWLE1OuEmhBND7Ytsfo0BgF2g1bPv72LZbJ4D/GbjSOv6NJjDzSXqjo0WPgP5t4OK6o8l7wOUOMPSkS4bkSH6aQqkEvJ/RNxWAwVugb9XtW/scpw9Ajnq1dAMcHAJjZcpe83h3sLtv/9a0+/cDdSByqBZzSuQAAAAGYktHRAD4AN4AAAYQuNkAAAAJcEhZcwAALiMAAC4jAXilP3YAAAAHdElNRQfoCA0RDS/3QioAAAAAGXRFWHRDb21tZW50AENyZWF0ZWQgd2l0aCBHSU1QV4EOFwAAABpJREFUWMPtwQEBAAAAgiD/r25IQAEAAADvBhAgAAGX91fXAAAAAElFTkSuQmCC",
    "Ocean": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABhWlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AYht+mSou0iNhBxCFDdWpBVMRRqlgEC6Wt0KqDyaV/0MSQpLg4Cq4FB38Wqw4uzro6uAqC4A+Is4OToouU+F1SaBHjwd09vPe9L3ffAUKzxlSzZxxQNcvIJBNivrAiBl4RRBgDtMYkZuqp7EIOnuPrHj6+38V5lnfdnyOsFE0G+ETiWaYbFvE68fSmpXPeJ46wiqQQnxPHDLog8SPXZZffOJcdFnhmxMhl5ogjxGK5i+UuZhVDJZ4ijiqqRvlC3mWF8xZntVZn7XvyF4aK2nKW6zRHkMQiUkhDhIw6qqjBQpx2jRQTGTpPePiHHX+aXDK5qmDkmMcGVEiOH/wPfvfWLE1OuEmhBND7Ytsfo0BgF2g1bPv72LZbJ4D/GbjSOv6NJjDzSXqjo0WPgP5t4OK6o8l7wOUOMPSkS4bkSH6aQqkEvJ/RNxWAwVugb9XtW/scpw9Ajnq1dAMcHAJjZcpe83h3sLtv/9a0+/cDdSByqBZzSuQAAAAGYktHRAD4AN4AAAYQuNkAAAAJcEhZcwAALiMAAC4jAXilP3YAAAAHdElNRQfoCA0RDgKZsCW2AAAAGXRFWHRDb21tZW50AENyZWF0ZWQgd2l0aCBHSU1QV4EOFwAAAspJREFUWMPtkkGOXDUQhr8ql/3edM+EiBEgJG6QC7DkJNlzouy5TNaIC7CFCVKGpKf72a4qFt0SA0iEHZv+JMvyb9fv33LBlStXrly5cuXKlSv/M/L6Tf8K+AL47pn+E/Ab8PDD9+2X/2L0zOf+mfxJD3n9pr8FXgHtMvzZflzmvIz4RI7yfJGZiMjIzHAfpioOkqr2LjOOwI8GfPu3IvtLQpF/3BLh/5oiZkdEcHcIXwJBSyFDIJMp48XF9ZVdXibufjYOR8pZjnAigpwDrQulGBnzXPBnYjKTDMd9UNRAFVEFBG035Dhdah2f/az5xNqKZQaZeU6bQWagmbhPvB8pbQURfDvgKCmg1hBRYjxR2g7VgohedMHnRnjgo6P9hHsnwlFbkLqez9YFEcUef/1Z1v1LUEW1QibRT4x+RIsRc1KsUpYds5+wtjBHJ2anbxslQCIRUaYPVASPiWpFRBBbEDPQgojQD49ETEptFK3YHBvHw3uERLTgpyPaVkAZOG3ZM/uB8KC2GyDJCNp6i9UFHydmTKy2tGWVOQdFVuZ2IDNIjNoWxulAJiSJ1dZ9dKRJs7v7b8KsKSIcf39IboqkO7M/UWxBEFQbsz+yPW2ghTlOmDUgsXKDFMXHUSAhEieAQLTQP77j0E8s6x1iDQHG7J7h75eb/dfmc9OcGyAEIu4d0QWtOyhGSEEg281nYnUlM4jZmdsT4QPk0kNzQkzG6CSBlkr6RItR1z2YsX14R6ajVmtbdi9FDdNL86gWEiHGxvbxIYq1OD0+pmgJVWOOLeuyY3f7eUa41vUW0dvpYyu2LCFScvbTFv20J30ZPihayUysrfjstLt7xvER1WqlrqpmmNU1fHbdjh9xH9T1jrreaWwHtbZDS4M4f4ldur+UQvQTIrIIMA8fEC0gut+/+BIpQCQpQsyBz41qC1IKdndPZlLaqj4nfwCgdKhbLqPkEwAAAABJRU5ErkJggg==",
    "Cloudocean": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABhWlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AYht+mSou0iNhBxCFDdWpBVMRRqlgEC6Wt0KqDyaV/0MSQpLg4Cq4FB38Wqw4uzro6uAqC4A+Is4OToouU+F1SaBHjwd09vPe9L3ffAUKzxlSzZxxQNcvIJBNivrAiBl4RRBgDtMYkZuqp7EIOnuPrHj6+38V5lnfdnyOsFE0G+ETiWaYbFvE68fSmpXPeJ46wiqQQnxPHDLog8SPXZZffOJcdFnhmxMhl5ogjxGK5i+UuZhVDJZ4ijiqqRvlC3mWF8xZntVZn7XvyF4aK2nKW6zRHkMQiUkhDhIw6qqjBQpx2jRQTGTpPePiHHX+aXDK5qmDkmMcGVEiOH/wPfvfWLE1OuEmhBND7Ytsfo0BgF2g1bPv72LZbJ4D/GbjSOv6NJjDzSXqjo0WPgP5t4OK6o8l7wOUOMPSkS4bkSH6aQqkEvJ/RNxWAwVugb9XtW/scpw9Ajnq1dAMcHAJjZcpe83h3sLtv/9a0+/cDdSByqBZzSuQAAAAGYktHRAD4AN4AAAYQuNkAAAAJcEhZcwAALiMAAC4jAXilP3YAAAAHdElNRQfoCA0RDhBqCVT+AAAAGXRFWHRDb21tZW50AENyZWF0ZWQgd2l0aCBHSU1QV4EOFwAAAaRJREFUWMPtk71qFVEUhb8zd5I7Y34IBAsbYUBTptFOfQbLtGn0XXyFFGIrWPkCVvZ2QpoD6UVubnJj5k4yNt/ARgJqYeVZMAxzzl5r7732HigoKCgoKCgoKCj435H+hWjO+THwGjgCGuAGOAVOu6579dcF5JzfA0+BBx5tAD1wBrzpuu5dSPwReGji6hepW+At8HnipD9I/hV4BNR3XN8CC+AD8BzYB+6rO9r5aFwFzOSNwBL4kn5j44nCM0kAgwkqz65NsKkzye8RuADOQ/wOsBX5KSQ8Bp4BB87rEHhi8GA3F6HzUbG1Ba61vTVmETqu5Lbq7E13yeQnwEvti/sxmnzpCK6BFbBrwspiALaN2w+2D8ZEx66AezpGyjl/svNKQu/lTJGV1e9a/TTXGpiHAupQ9A8dmKt1o14bdikBqQZeKPLNdy9x5kzPFV0odGUxK8Uan2WYfx/G1Hj+3fcOcKmb89rOe225VDz5vdba1rNeoTbwpo7rMIpBLUw0qjftxNa0KxOpseI22iOhCXtRh2IIHU8LmrR8M4xnCH9PFR4AfgLSyIUr31iRXgAAAABJRU5ErkJggg==",
}
const WeatherIcons = {
    "Sonnig": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABhWlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AYht+mSou0iNhBxCFDdWpBVMRRqlgEC6Wt0KqDyaV/0MSQpLg4Cq4FB38Wqw4uzro6uAqC4A+Is4OToouU+F1SaBHjwd09vPe9L3ffAUKzxlSzZxxQNcvIJBNivrAiBl4RRBgDtMYkZuqp7EIOnuPrHj6+38V5lnfdnyOsFE0G+ETiWaYbFvE68fSmpXPeJ46wiqQQnxPHDLog8SPXZZffOJcdFnhmxMhl5ogjxGK5i+UuZhVDJZ4ijiqqRvlC3mWF8xZntVZn7XvyF4aK2nKW6zRHkMQiUkhDhIw6qqjBQpx2jRQTGTpPePiHHX+aXDK5qmDkmMcGVEiOH/wPfvfWLE1OuEmhBND7Ytsfo0BgF2g1bPv72LZbJ4D/GbjSOv6NJjDzSXqjo0WPgP5t4OK6o8l7wOUOMPSkS4bkSH6aQqkEvJ/RNxWAwVugb9XtW/scpw9Ajnq1dAMcHAJjZcpe83h3sLtv/9a0+/cDdSByqBZzSuQAAAAJcEhZcwAALiMAAC4jAXilP3YAAAAHdElNRQfoCA0REwZhsY2zAAAAGXRFWHRDb21tZW50AENyZWF0ZWQgd2l0aCBHSU1QV4EOFwAAAUhJREFUWMPtljFOwzAUhj9HQTJ0Z2FBlhAbcAqGipOwcAPuwCWYM1Scg5VWeurCxkr7JKSExZWsyklInKoM/qUojhw//37+/T/DH6BCo0LNAVBwZBTBKtcqbFR4HxJAhR8V1lNk4AI4BW5U+Nj7rwHeYlsDlMB5MgHrOPFNA1yp8BL0FdbxEJl8R245lkAZfliHCQLP/ES1JwXQWEehQuUnBlhZx91YAqZlXyvg3m9JDFvgFfi2jqcUEZquo9c10Lr2sYM0oEIdPIsg7X3qr/17EYsxRAPhSuYjFjFPiVGmptK6NDM7vgY6+jZ9fSrcphIwMWsFPq3jss0HdtbtHXA5mQ8Ead9ax1lfDfAibrwZXacWo1ZrjR2vLuseTCCw1qbFWk3seO0JcZZSCx6BrzHW6utHBTwf7NLwH25E0ftARkZGRkbGFPgFLL6TzyzroI0AAAAASUVORK5CYII=",
    // Wolkig
    "Wechselhaft, Tendenz: sonnig": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABhWlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AYht+mSou0iNhBxCFDdWpBVMRRqlgEC6Wt0KqDyaV/0MSQpLg4Cq4FB38Wqw4uzro6uAqC4A+Is4OToouU+F1SaBHjwd09vPe9L3ffAUKzxlSzZxxQNcvIJBNivrAiBl4RRBgDtMYkZuqp7EIOnuPrHj6+38V5lnfdnyOsFE0G+ETiWaYbFvE68fSmpXPeJ46wiqQQnxPHDLog8SPXZZffOJcdFnhmxMhl5ogjxGK5i+UuZhVDJZ4ijiqqRvlC3mWF8xZntVZn7XvyF4aK2nKW6zRHkMQiUkhDhIw6qqjBQpx2jRQTGTpPePiHHX+aXDK5qmDkmMcGVEiOH/wPfvfWLE1OuEmhBND7Ytsfo0BgF2g1bPv72LZbJ4D/GbjSOv6NJjDzSXqjo0WPgP5t4OK6o8l7wOUOMPSkS4bkSH6aQqkEvJ/RNxWAwVugb9XtW/scpw9Ajnq1dAMcHAJjZcpe83h3sLtv/9a0+/cDdSByqBZzSuQAAAAJcEhZcwAALiMAAC4jAXilP3YAAAAHdElNRQfoCA0RExyc03TJAAAAGXRFWHRDb21tZW50AENyZWF0ZWQgd2l0aCBHSU1QV4EOFwAAAedJREFUWMPtlr9LHEEUxz977uGoiGAhQbGYQUEsgoV/gUWEw0ZJo12KNBKwsLe1ttAqEKtUIlfIFfapo9jEBGYVCQpK4ArNxDtubOZwWHZX74fEYr8wsMubee8779c8eAaMxhpNgxdAgf+MgnfLM6O5M5qjVhQYTc1ozrrhgTGgD3hrNKexfRaoJIUGCIGRjgkIRdF9BsCk0Wx5soJQLCQYb5L72S6B0P8RisBTPOAMNRwpACsUBaMpO8MAv4Ripl0CQUpcy8A7F5Ik/AW+ArdCsdZJEgZZpZd1UKj0sy0RiNV3RSgWYm5PQzMcB0DJ13EZREvANDAFXAHfpZTVtCQMvFVq4xIlX4dltgS8B74A28AusBpF0VBiEnbqSqEeKymKonFgGdgExh2pYeATcAIcdD0HnNEPwJwzOgqI2PZ/zhPrUsrb1DKM4Q7oz5DxR+/MV+EjsPREzvQCK8A+cJhJwGhqwG+h0vtAs3Xfo9+EVG2doaciZV2+TWQS8Nw+khTjGMZ60GGRa55BoAGcA99SO2FWa3VeqPjtWCiKRu/bQQshi9YE0xc1hn8A925L3RmuO317UsrjtIQrG03DrdNW5oGmzGg+d/IWrAI37bRW936UgY0XGxpew0SUOA/kyJEjR44c3cADC5rCAV47jN8AAAAASUVORK5CYII=",
    "Wechselhaft, Tendenz: wolkig": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABhWlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AYht+mSou0iNhBxCFDdWpBVMRRqlgEC6Wt0KqDyaV/0MSQpLg4Cq4FB38Wqw4uzro6uAqC4A+Is4OToouU+F1SaBHjwd09vPe9L3ffAUKzxlSzZxxQNcvIJBNivrAiBl4RRBgDtMYkZuqp7EIOnuPrHj6+38V5lnfdnyOsFE0G+ETiWaYbFvE68fSmpXPeJ46wiqQQnxPHDLog8SPXZZffOJcdFnhmxMhl5ogjxGK5i+UuZhVDJZ4ijiqqRvlC3mWF8xZntVZn7XvyF4aK2nKW6zRHkMQiUkhDhIw6qqjBQpx2jRQTGTpPePiHHX+aXDK5qmDkmMcGVEiOH/wPfvfWLE1OuEmhBND7Ytsfo0BgF2g1bPv72LZbJ4D/GbjSOv6NJjDzSXqjo0WPgP5t4OK6o8l7wOUOMPSkS4bkSH6aQqkEvJ/RNxWAwVugb9XtW/scpw9Ajnq1dAMcHAJjZcpe83h3sLtv/9a0+/cDdSByqBZzSuQAAAAJcEhZcwAALiMAAC4jAXilP3YAAAAHdElNRQfoCA0REzZHaL0fAAAAGXRFWHRDb21tZW50AENyZWF0ZWQgd2l0aCBHSU1QV4EOFwAAArpJREFUWMPt1s1rXGUUBvDfezOT3CaUNn7hB6L3QhADal0UN37gQkWNIvpfiOCf4ELciJuCm+6KoEvtQgsiLoq6ECTYXf3g3uoiKSLWGJLeTjPzusg78ZJm8tEobuaBYebOvPec55zznOcO+0BTiU1l4D9A5n9G1qryUlNZbyrfHyRAU7neVC79Gx24B0fwcFP5Ydu5iHM7jQYd3HFoAnmpmz4GzDWVU63fsry0sEPyIbkfb5ZAp32Rl0Ir8ExKNEikIOalrKmcTYnhp7x04mYJhBFzPYtn00h2wlV8hLW89OZhRBh2W73dbszL0fdCXdchFfAI7sf5oiiWbiCwbb/P5aWFbW0fheE4PsUL7RjLoX4ZJ/EkHscENvAOLhRF0WsTiDsEHUkgeghTOBIvhw+O3xmf+TNYCqynE7NxOSw+hzcwh1lMJgK/4G18PiTR2auVbQwsiI5ZD68YmA44czl8cRpf4pOiKPp1vXg7PkOJaXSTYGMi8RIu4NcDaWDgKX2P6jlhLZzUN73CVqdW8B3ewoeYTyuetZIPbLbpa7yLb4qi6Hd2KXg9VdBqf64Jcwa6cVNgMRJCWtkFvJgqzrYJffiawgN4DT9jKRtlrXlpJo0nbjrWeT3zsefuKupeJU4SpzbfZSnx1B7i7eAY7sO9NzyMdrLW5IJhOdT5anjifdyakrVzTbQuwi4rn7XMb237w2iktTaVwV3xsY9xEX9tiils/HM8thPHPXxnAkdx2xaBlrXGEdYa+O15fIVFXEGPcK2lkKHQIvqjvCONqZvcdKsdr+P3fVjrRZzCq2mOx8lmMtfmByZXU9CNtPdHkzgnWsn7aWO+TVuzPw9I44l5Kavrups0MovrqZoH03fLWE1VrqQCb0mE+ngaf+C9oiiuHORPxyBZ7qFQ13Wo67pjjDHGGGOMMVr4G4MT/BZL2g6WAAAAAElFTkSuQmCC",
    "Leicht bewölkt": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABhWlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AYht+mSou0iNhBxCFDdWpBVMRRqlgEC6Wt0KqDyaV/0MSQpLg4Cq4FB38Wqw4uzro6uAqC4A+Is4OToouU+F1SaBHjwd09vPe9L3ffAUKzxlSzZxxQNcvIJBNivrAiBl4RRBgDtMYkZuqp7EIOnuPrHj6+38V5lnfdnyOsFE0G+ETiWaYbFvE68fSmpXPeJ46wiqQQnxPHDLog8SPXZZffOJcdFnhmxMhl5ogjxGK5i+UuZhVDJZ4ijiqqRvlC3mWF8xZntVZn7XvyF4aK2nKW6zRHkMQiUkhDhIw6qqjBQpx2jRQTGTpPePiHHX+aXDK5qmDkmMcGVEiOH/wPfvfWLE1OuEmhBND7Ytsfo0BgF2g1bPv72LZbJ4D/GbjSOv6NJjDzSXqjo0WPgP5t4OK6o8l7wOUOMPSkS4bkSH6aQqkEvJ/RNxWAwVugb9XtW/scpw9Ajnq1dAMcHAJjZcpe83h3sLtv/9a0+/cDdSByqBZzSuQAAAAJcEhZcwAALiMAAC4jAXilP3YAAAAHdElNRQfoCA0RFBDaJK4lAAAAGXRFWHRDb21tZW50AENyZWF0ZWQgd2l0aCBHSU1QV4EOFwAAAwNJREFUWMPt1juIXFUcBvDfuXM3O/vCRIOQyLo5gwEfoCJJIYiiBguJIKlsRAKWgm06QbGICJJOsDEBxc4UErBQEJJCMGDQIhqYu0bJRtBIsq/J7s4ciz0TxmH2kcRXsV91751z/9/3//6PO2wCrabUaur4B1D4j1H0ZDndalpoNX17MwFaTcutpum/w4F7MIKHW00/9J1LODWoNChx920LqDcM5cuAva2mYz2/FfWGgwPIu+J+vFUBZe9NvSH0BB7LRJ0sClK9oWg1nczEcKHe8OitCghr1PUknsslGYRFfIz5esPrt9OEYb3RW+/FemPtd29KQN98n6o3HOyzfS10y/EZnu+PUVVVyA4+gj34KsZ4aZCANCBoJ7kvtB2woqHwuyGnBWcGCegXm2ZCVWI/nsQTqGEFb+NcjHFp3RIsNvd1rnspzIWntE0Ilo2ls0Z9gGsYxki6HE5sRwvLMcYEVVUVeBavYS92YFsW8BPewuddEWU/eVVVk5c5UjN3tG08Px02H/Yr0hXbnLUQXjRn3wl8iF/xRVVVn8YY27grZ9rAKIbyxKQs4gWcw8UbDlRVNYnDeAaT2I36X7u1bdi0oTRjITyW2kavkQKhg6v4Bm/gIzyYd0zRQ97BAk7jHZyJMbZDJn8PhzZqvGBFUn6HPUFnPAtISbGSCVLOeNA3JmEJv+StehS1Evfi/k1MTErKZexCLQlZbAikoexE6FlQay2+OzCVnS6LXIvzG49dgrlcmkwYenu52GC3hHym23fzuFjGGH+ea74y0XIgLYWpkNQWluz+Mh9aQWfEhUOl38Ksx9/Hy9i5GjAkOrU+3rSBiBomsDPG+H256svxw+OOvykNXq15V6TZUH2Ch/KMb18NViRSLfdAF51MNMjG4dwnizfGsN5wCa9uog/O41hu2KksYoywK9t7Pbu2LWc51iMkoZ0n5us8NZvb53nbdVfsUP7+78ByzuaB/GwGsznLqznBO7OgNp7GFbwbY/zjX//7VVVVqKqqtIUtbGELW/g/4U+m3xGxfv5W3AAAAABJRU5ErkJggg==",
    "Stark bewölkt": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABhWlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AYht+mSou0iNhBxCFDdWpBVMRRqlgEC6Wt0KqDyaV/0MSQpLg4Cq4FB38Wqw4uzro6uAqC4A+Is4OToouU+F1SaBHjwd09vPe9L3ffAUKzxlSzZxxQNcvIJBNivrAiBl4RRBgDtMYkZuqp7EIOnuPrHj6+38V5lnfdnyOsFE0G+ETiWaYbFvE68fSmpXPeJ46wiqQQnxPHDLog8SPXZZffOJcdFnhmxMhl5ogjxGK5i+UuZhVDJZ4ijiqqRvlC3mWF8xZntVZn7XvyF4aK2nKW6zRHkMQiUkhDhIw6qqjBQpx2jRQTGTpPePiHHX+aXDK5qmDkmMcGVEiOH/wPfvfWLE1OuEmhBND7Ytsfo0BgF2g1bPv72LZbJ4D/GbjSOv6NJjDzSXqjo0WPgP5t4OK6o8l7wOUOMPSkS4bkSH6aQqkEvJ/RNxWAwVugb9XtW/scpw9Ajnq1dAMcHAJjZcpe83h3sLtv/9a0+/cDdSByqBZzSuQAAAAJcEhZcwAALiMAAC4jAXilP3YAAAAHdElNRQfoCA0RFCNl9M8zAAAAGXRFWHRDb21tZW50AENyZWF0ZWQgd2l0aCBHSU1QV4EOFwAAA1pJREFUWMPt1l+IVHUUB/DP787MzuyOprtJYLXqHZSsKA3yIagkjV6yMAUh34KeIpCIfA2KCCKIqJfqJYQeMwgSCiJkFQqKsCcN2Zsa/iHS3HZ2R3dnfj3sb7dpW9dtpehhD1y4HH6/c77nnO/33MsCrDUstoZ1/AtWXsyloih6cBc24jy+z/P88g0BaA37Cbfgx1rD5nmSL8OTeAlrSkYH+vzwW1EU6xYDIut6vw29uLc17MSscxGHiqIYxHN4HZsw0LbMmM0r8NBiOhBmz7or4Tu1hn0p6TPYhkHcitpfg3RilL2PF/M8by6aA7WG0AWiXhTFYK+Tp8etnzdIlAXsxUF8sdgRzIDAp9i7Kr57esLAQuLEFGv9jXCgG8RO9GYKFRcXEqeDUzj6jzkwS9+Hag07ki9A2y7jnnI1rEUUZo53tDQOVv38QI8zq2vxcCx7byZGURQhkXoT1uFwnudn5wIQu1tZa8jGh9d32h4Nkxoyv6o4Ivy9uFhryLrBTvvPhaKMLXgYD6KESbyGY3meX51TBdM6748fj4yGraFtuWBCPX6nzweCo6J7UEVvPB8OrEQLE3mex3Q/w3Y8jw3oR08CcAqv4vNpEOVZyQfx9KWw+wzWTHmrmmGLcjylol+0wljYadT9B/AhLuDLoig+yfO8jZtTpQ30oZJIGhOIJ3AMpyEsTOdtvU7ojUMmbNQMW2Jb3wgxEDq4jG/xMj5KazpLz3TyDsZwBG/gaJ7n7TLewq65xvGnxkrGbVB2Po6ErUO4L+jclADEKKtjBx5PFWezlt30U8Ud2I2TOJulD8p1dR5VmiNh22e4HaUohCiIQiBWUuLqfIWkka/A2tRtGY4vIH8oGY34Pc24MtX60M3l7FrE7vJnXbxrTiN6oe7Y3ZMGNk6NKjSvGPwqEaaDyeW+3lOLQ/Vfwv4jSVY9UwFDpFOalTdeB0QJy7EKynmen2kN245X0Kw17Jvjh2TP1Nv+ITyWNL5yKlgWiaUEtnszlq6xsqtpXOMzMqw1nMWzC+DCcbydSLs2gagTVqf2Xkmd60lV1ruARLSTYr5JqpmXMN0d6HSt2Er6cenHRKrmzuQ7l3hSTYnKGEiA2ngEF/FmnueX/NdWFEUoiqJsyZZsyZZsyf5P9geeICdXctshYQAAAABJRU5ErkJggg==",
    // Regen
    "Niesel": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABhWlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AYht+mSou0iNhBxCFDdWpBVMRRqlgEC6Wt0KqDyaV/0MSQpLg4Cq4FB38Wqw4uzro6uAqC4A+Is4OToouU+F1SaBHjwd09vPe9L3ffAUKzxlSzZxxQNcvIJBNivrAiBl4RRBgDtMYkZuqp7EIOnuPrHj6+38V5lnfdnyOsFE0G+ETiWaYbFvE68fSmpXPeJ46wiqQQnxPHDLog8SPXZZffOJcdFnhmxMhl5ogjxGK5i+UuZhVDJZ4ijiqqRvlC3mWF8xZntVZn7XvyF4aK2nKW6zRHkMQiUkhDhIw6qqjBQpx2jRQTGTpPePiHHX+aXDK5qmDkmMcGVEiOH/wPfvfWLE1OuEmhBND7Ytsfo0BgF2g1bPv72LZbJ4D/GbjSOv6NJjDzSXqjo0WPgP5t4OK6o8l7wOUOMPSkS4bkSH6aQqkEvJ/RNxWAwVugb9XtW/scpw9Ajnq1dAMcHAJjZcpe83h3sLtv/9a0+/cDdSByqBZzSuQAAAAJcEhZcwAALiMAAC4jAXilP3YAAAAHdElNRQfoCA0RFDd/LhtOAAAAGXRFWHRDb21tZW50AENyZWF0ZWQgd2l0aCBHSU1QV4EOFwAAAdBJREFUWMPt1TtolFEQBeBv17wMJJhYBIyiF6Iiihgs7GwEKxtFu2ChpRaCjY2djWksrGysBEEQtBBsbOwUxEoQC0dBBJ8Y0cTHZmNzFxbx3/Xfzdq4By63ucycO3PODP87KqsRJCKqmMRh7MbVlNLjf0IgIgZwHEewF1XUcQ43U0pfOiYQEZMYxAhqWMBiSqnelPwszmAiv61gBUu4hIutSFRbJN+DWdzBPTzEA8xHxFB+NoPzmMJwjlfJ9wiOYlfpCkREwgEcy3cz0WW8wSlcx9qC2Ct4hwu4klL6UaoCGMO+pl81zgCmcatF8sbnJnASO0u1IKUUOITRLoW6JrdnthSBiBjH+vzb1bD5x7IiXMTTbKduMYwtZVtQw40souUuK1DF59I2xF3M40lW/UKuTD2fGn5mgisFMep4hmudDqJR7MAmfMve3p9d8BIfslDfYggbmobWQXzCXBZ1bxARU3lodYTqXyQYi4i5iCjy/Dps7hkBbM+WLMISXvSSwAzG8b1gDc/idU8I5ARbcb+xAX/DNnzNDukI7SbdNG7j+R/IDeb1+z6rvictOJ1FVimYcCdQK6hOdxWIiI24nFJ61WLdPmqzEfvoo48++miLX39xg+W1S1wXAAAAAElFTkSuQmCC",
    "Leichter Regen": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABhWlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AYht+mSou0iNhBxCFDdWpBVMRRqlgEC6Wt0KqDyaV/0MSQpLg4Cq4FB38Wqw4uzro6uAqC4A+Is4OToouU+F1SaBHjwd09vPe9L3ffAUKzxlSzZxxQNcvIJBNivrAiBl4RRBgDtMYkZuqp7EIOnuPrHj6+38V5lnfdnyOsFE0G+ETiWaYbFvE68fSmpXPeJ46wiqQQnxPHDLog8SPXZZffOJcdFnhmxMhl5ogjxGK5i+UuZhVDJZ4ijiqqRvlC3mWF8xZntVZn7XvyF4aK2nKW6zRHkMQiUkhDhIw6qqjBQpx2jRQTGTpPePiHHX+aXDK5qmDkmMcGVEiOH/wPfvfWLE1OuEmhBND7Ytsfo0BgF2g1bPv72LZbJ4D/GbjSOv6NJjDzSXqjo0WPgP5t4OK6o8l7wOUOMPSkS4bkSH6aQqkEvJ/RNxWAwVugb9XtW/scpw9Ajnq1dAMcHAJjZcpe83h3sLtv/9a0+/cDdSByqBZzSuQAAAAJcEhZcwAALiMAAC4jAXilP3YAAAAHdElNRQfoCA0RFQ45MKIHAAAAGXRFWHRDb21tZW50AENyZWF0ZWQgd2l0aCBHSU1QV4EOFwAAAmFJREFUWMPtlk1rE3EQxn/Z5sUaba1apb5gRxSNCApSTyKIl4KKoDe/gaCfQVB6ES9+iJ49e/BQ1INghd6kikOFWDzUkJYm2jQbL89CWHZjXoogZuB/md3/zDMzzzO78L9bZieCuHsGGAUuANPAgpl9+ysA3D0AZoCrwBVgBNgG5oAlM9vqG4C7jypgFgiBn0DDzFptya8DD4DTwASQF4AV4AnwshOIbIfkU0ARuA8cAMaA78Ard39hZk3554CTwG4gB7R0toFbwBLwtacOuPsEcAa4puqK6kAGqALvgUfAPHAOCHSi5CFQA94AT4G3Atx9B0SqWWAvUFDQQGBuAjdUcRArKDoFFXEX+AwkkjJIcppZRYQ6Jg5EPMjqTk4JOnEoC4wDJ4DjPXHA3QvApGaciyUKuiBxRu9F8TfTAAQp/gbwEVgXmUL5Q804stYfFDaiER7sCYCZhcBr4ANQAbYEhDaSRWCaKbFbGlMOqPcsQ3XgOXBHc9wnAk4J+C+ByqvKoiqmDVgVeCfV9LWIciKiAWVVUwIOAavAhqqsqpj9AtSUhH8Az0TqgdbtURFzxy3oIvklrdsw5jd3v+3uMyn37rl7aWAAmvWimTVi/pra/Snl3hcts/4BuPu0yFVOeFwC1iTVpD1yRBuwPwDuvkcEq+m0PxsTsDVJNm6HgZqZrQ/SgVlJbrX9cyplnJLUPOX/4KJGMBAJV4Bd6kJ8d5yXP2kTTnYYW3cA9CNSAS6bWTlW/Vnpe9nMNhKuPwTqZrbZDYBsyiqui0CPY4/y+rItmFk1JeYisMzQhja0of0r9hsTdMFp+6rsfwAAAABJRU5ErkJggg==",
    "Regen": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABhWlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AYht+mSou0iNhBxCFDdWpBVMRRqlgEC6Wt0KqDyaV/0MSQpLg4Cq4FB38Wqw4uzro6uAqC4A+Is4OToouU+F1SaBHjwd09vPe9L3ffAUKzxlSzZxxQNcvIJBNivrAiBl4RRBgDtMYkZuqp7EIOnuPrHj6+38V5lnfdnyOsFE0G+ETiWaYbFvE68fSmpXPeJ46wiqQQnxPHDLog8SPXZZffOJcdFnhmxMhl5ogjxGK5i+UuZhVDJZ4ijiqqRvlC3mWF8xZntVZn7XvyF4aK2nKW6zRHkMQiUkhDhIw6qqjBQpx2jRQTGTpPePiHHX+aXDK5qmDkmMcGVEiOH/wPfvfWLE1OuEmhBND7Ytsfo0BgF2g1bPv72LZbJ4D/GbjSOv6NJjDzSXqjo0WPgP5t4OK6o8l7wOUOMPSkS4bkSH6aQqkEvJ/RNxWAwVugb9XtW/scpw9Ajnq1dAMcHAJjZcpe83h3sLtv/9a0+/cDdSByqBZzSuQAAAAJcEhZcwAALiMAAC4jAXilP3YAAAAHdElNRQfoCA0RFSN87/5yAAAAGXRFWHRDb21tZW50AENyZWF0ZWQgd2l0aCBHSU1QV4EOFwAAAlNJREFUWMPt1jtrVFEUBeBvJpmEGGOMTyI+cgJRtNDKRsUHNoLaKPgfBP+DhaQRG3+EjQjB0sJC1EIQwU5BOETEN0o00ZjHxGZfGMaZSSa+ELPhFvecPWevdfZa+w7/e5R+1UE55xJ6sA9DuJNSevlHAOScy9iPwziEDsxhFI9TSjPLBpBz7okDO1HFNGZTSgs1xY/jAkYwgK4AMI5LuNUMROcixQfRi/NYjzV4g9s557GU0nysj2IYq1DBQjxzOI3HeN7WDeScB7ALx4Jdb9xACRN4iIu4hj0ox1MUr+IL7uEy7gfgpd9AiOoE+tAdh5YDzCmcDMblOlLF0x0kzuIZfhBluVnllNLHENTW0EChg874XSUKtNJRJ/qxA9va0kDOuRsbo8eVukLlJbSxFHlFjalGSeUW6GfxBJ9CTNVYr0aPi1hYxOYd0cINbQFIKVVxF4/wETMBRI3ICjDzTY5ZiDZV8LVtG8YNXMWZ6OPaEOBggP8WoLqCZW8wVgNsAg/CNcsaRBVsigEzG2x2x9orfA6WE0FoXQCaDwt/wJUQ9d+JELR2RVh/yEiT9aM5546a9+Gc85a6tIM/BSDnfKiRj4NZKdpSxHSM5CJnCJPLBpBz7g1xNbLRdqxOKU1Hbh924kVNzhTet5pUi8XqsNuNBntdeFrzvgrvwrJFbGk1K8pLcEB/sKzW7fWFHWu/cnsxX5c7GN+UZbVgMw6klMYa7J3D2zq2exuM3PFWLVgMwCBuNtmbw2Qd2+t43WCkv/wd3h6I/wy1a0esxEqsxEr8a/EdE+O3SKsomp0AAAAASUVORK5CYII=",
    "Starker Regen": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABhWlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AYht+mSou0iNhBxCFDdWpBVMRRqlgEC6Wt0KqDyaV/0MSQpLg4Cq4FB38Wqw4uzro6uAqC4A+Is4OToouU+F1SaBHjwd09vPe9L3ffAUKzxlSzZxxQNcvIJBNivrAiBl4RRBgDtMYkZuqp7EIOnuPrHj6+38V5lnfdnyOsFE0G+ETiWaYbFvE68fSmpXPeJ46wiqQQnxPHDLog8SPXZZffOJcdFnhmxMhl5ogjxGK5i+UuZhVDJZ4ijiqqRvlC3mWF8xZntVZn7XvyF4aK2nKW6zRHkMQiUkhDhIw6qqjBQpx2jRQTGTpPePiHHX+aXDK5qmDkmMcGVEiOH/wPfvfWLE1OuEmhBND7Ytsfo0BgF2g1bPv72LZbJ4D/GbjSOv6NJjDzSXqjo0WPgP5t4OK6o8l7wOUOMPSkS4bkSH6aQqkEvJ/RNxWAwVugb9XtW/scpw9Ajnq1dAMcHAJjZcpe83h3sLtv/9a0+/cDdSByqBZzSuQAAAAJcEhZcwAALiMAAC4jAXilP3YAAAAHdElNRQfoCA0RFToYhFayAAAAGXRFWHRDb21tZW50AENyZWF0ZWQgd2l0aCBHSU1QV4EOFwAAApVJREFUWMPt1U9rnFUUBvDfTGYmtrGp1VaJUeqVitpW6sZVVRAXCtqFdtsvIPgdXEg34sYPIbhzpwh1IdZFUUoLQv1TvWhREdR2NLVN0kzcPC+8hCbtG0tBzIELc86895zn3Ps85/J/t96tSFJr7WEbDuEhfFJK+fm2AKi19vEUnsXTmMI1HMfZUsrSpgHUWrcl4QATXMVyKWW1Vfx5vI5HsAujAPgBb+KjjUAMNig+hxm8hnswi1/xca31/VLKSuLH8TC2Y4jVrGs4grP4sdMJ1Fp34VE8l+5mcgI9jPEF3sC72I9+VlN8gr9xEm/hswC++RMIqV7EDkwnaT9gXsZL6bi/pqFmTaeJoziP65Kyf71gKeViCPVAONDwYJA9wxTYiEMD7MRePNiJA7XWaezJHQ/XFOrfBIl7+a7Jf3k9AP114sv4Cn+GTJPEJ7njxlZvoLCpXOHuTgBKKRN8itO4iKUA0SJZA2ZlndyruaYhrnSWYU7gHbyae7wrBJwL8MWAGqXLmXSsBWyMU1HNpgbREPdmwCynm8cT+wV/pctxmrk7gFYi4T/wdkh9a6zWur3WOmr5o7wFm7LBDYo9id2llBPx9+EAPox/EAvR+FKt9Yls/boZv7XWO8OrhS4qaGwP7mv5s/i8Ndt/wsGWv5TJ2JbzIbzSVYbN5lmcaY4ejzWMzkN0LCAaeyGzo1HMKBw51xkASgp+H39nyDaOP5XfCwE0H8AfRMZCyh6+7QQg7J/Db6WUK+n2fvzeSj6PS7gQ/0Ce5PbU2xugi10H0TKewYmE9uHwmkRHsaOUcjX+YobXpdY3K7ij9U0nFbxXSvkugL6J9Grr/1P4suVfwDjgGzu30Rj+t/NgPkTdsi3bsi37b9s/ufnYupkSQjoAAAAASUVORK5CYII=",
    "Gewitter": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABhWlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AYht+mSou0iNhBxCFDdWpBVMRRqlgEC6Wt0KqDyaV/0MSQpLg4Cq4FB38Wqw4uzro6uAqC4A+Is4OToouU+F1SaBHjwd09vPe9L3ffAUKzxlSzZxxQNcvIJBNivrAiBl4RRBgDtMYkZuqp7EIOnuPrHj6+38V5lnfdnyOsFE0G+ETiWaYbFvE68fSmpXPeJ46wiqQQnxPHDLog8SPXZZffOJcdFnhmxMhl5ogjxGK5i+UuZhVDJZ4ijiqqRvlC3mWF8xZntVZn7XvyF4aK2nKW6zRHkMQiUkhDhIw6qqjBQpx2jRQTGTpPePiHHX+aXDK5qmDkmMcGVEiOH/wPfvfWLE1OuEmhBND7Ytsfo0BgF2g1bPv72LZbJ4D/GbjSOv6NJjDzSXqjo0WPgP5t4OK6o8l7wOUOMPSkS4bkSH6aQqkEvJ/RNxWAwVugb9XtW/scpw9Ajnq1dAMcHAJjZcpe83h3sLtv/9a0+/cDdSByqBZzSuQAAAAJcEhZcwAALiMAAC4jAXilP3YAAAAHdElNRQfoCA0RFhDoEsynAAAAGXRFWHRDb21tZW50AENyZWF0ZWQgd2l0aCBHSU1QV4EOFwAAAnZJREFUWMPt1c+LlWUUB/DPfefembEZU2ssJrM8AxLaolWCFUG0KcqN/RWC/4MLcRNt+iNai8sWLTRbCCFIQSrisR8oESSTlKPj3NvC89JFnevcUWrRPfBw7/u8z3vO93vO95yH/7t1npajzOxgC97AHpyOiOv/CoDMbPAm3sU7mMI9nMCFiLi7aQCZuaUcdtHHClYjYjAU/H0cxV7swHQB+BHH8eV6ILqPCb6IORzB83gWv+KrzDwZEWu1fwJLeAY9DGrdwyFcwE9jZSAzd+A1vFfs5ioDHSzjWxzDF9iPplYbvI+/cBaf4psCvPEMlKg+wFbMlNOmwHyMj4px8wCpds0UiU9wBQ+JslkvckTcLEG9XBpoddCt73oVYJSOutiGV7F7LA1k5gx2Vo17DwRqNlDGTp1rY/z5qEPNCPSruIg/Skz92u9XjVsbPKbNp6qEC2MBiIg+vsZ53MTdAmJIZC2YtXXcDKpMPdweuw0rA5/jcNVxewlwscDfKVDTxXKuGBsCtoxz1TWbGkQ9vFADZrXY7Ku9G7hVLJeL0HMFaK1a+Hd8VqJ++qN45ep9Dcwu/eMrM2crOzAfEbfW+74Zc+a/Xc5l5ltt8BudfCkzP6zOUYKbqbIsjvLZjBF8qdJ7Zzh7xXyqUt1k5m4sRMQK5vH6EwPIzO04WJfKoMCs1ruF0sT1iLhdg6tV/IEax5sHkJnduuPPDt1oOxcHca7Yv4LLEfFzvZuOiEtVjt9w5kkzMFe/vxSgfXhxdkknM3dhV1uOzJxH1PmD+K6yMnJWj7SIWMbpoecfMvNKq3B8HxHX6rmHU/V/diP+JzaxiU1sYv+5/Q3Xg8T854Ce7gAAAABJRU5ErkJggg==",
    "Starkes Gewitter": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABhWlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AYht+mSou0iNhBxCFDdWpBVMRRqlgEC6Wt0KqDyaV/0MSQpLg4Cq4FB38Wqw4uzro6uAqC4A+Is4OToouU+F1SaBHjwd09vPe9L3ffAUKzxlSzZxxQNcvIJBNivrAiBl4RRBgDtMYkZuqp7EIOnuPrHj6+38V5lnfdnyOsFE0G+ETiWaYbFvE68fSmpXPeJ46wiqQQnxPHDLog8SPXZZffOJcdFnhmxMhl5ogjxGK5i+UuZhVDJZ4ijiqqRvlC3mWF8xZntVZn7XvyF4aK2nKW6zRHkMQiUkhDhIw6qqjBQpx2jRQTGTpPePiHHX+aXDK5qmDkmMcGVEiOH/wPfvfWLE1OuEmhBND7Ytsfo0BgF2g1bPv72LZbJ4D/GbjSOv6NJjDzSXqjo0WPgP5t4OK6o8l7wOUOMPSkS4bkSH6aQqkEvJ/RNxWAwVugb9XtW/scpw9Ajnq1dAMcHAJjZcpe83h3sLtv/9a0+/cDdSByqBZzSuQAAAAJcEhZcwAALiMAAC4jAXilP3YAAAAHdElNRQfoCA0RFiIgxZ0nAAAAGXRFWHRDb21tZW50AENyZWF0ZWQgd2l0aCBHSU1QV4EOFwAAAn1JREFUWMPt1UuLXGUQBuDnnJmeizNeohOljaPWgEh04cqFEkRxo3hZ6NY/IPgfXEg24sYf4daQpQsXwbgIiBAUvBBS3kjjxjAGzZjJ9HFhdWxCpmd6RkSwCz44X53zVb1v1Vvf4f9uzT8RJDMbLOMJPIwzEXHpXwGQmS2exDM4gTlcx0mcj4hrBwaQmcsVcB5DbGE7Irqx5M/jLTyCI1goAN/jHXw0CcT8hOR9rOBN3IM78DM+zsxTEbFT/pPYwG3ooat1Ha/gPH6YqgKZeQSP4rlit1IVaLCJz/A2PsBjaGuNkg/xO87iXXxagPdfgRLVC7gdixW0LTAv46Vi3N5EaLQWi8TruIBbirK9lTMiLpegHigNjHQwX2d6lWCShuZxJx7C+lQayMxFHK0e925K1O5DxE19N4r/224A2l382/gav5aYhuUfVo9H1u0xYXPVwrWpAETEEJ/gc1zGtQJiTGQjMDu7xO6qTT1cnXoMqwLv47Xq410lwH4B/6NALRTLlWJsDNgmztXUHOgi6uHeumC2i83x8g1wpVhuFpm7C9BOjfAveK9EfbireOviX/1e2vj7zCTfoMkWqxFxZVLcdprkgyaXqzJPj/nuz8wXa3IMmlyHfhfDapdDA6jAr1bfb1SumM9VqdvMXMfaWEUePzSArYu6QZNv1E+ly8yN0oPMXCtNXIqIq3Vx3VB8v4sPDwUgM0dTcnbsj3a038W5Yvkgvo2IH+vdQkR8k5mLgyZP7Keye1VgZdDks/ipAB3HfUsbmsw8hmOjdmTmKqLOPYUvxsV5kHtARGzizNj+q8y8UNtVfBkR39W+h9P1vLRX7JnNbGYzm9l/xv4EvP/N697EtJYAAAAASUVORK5CYII=",
    "Monsun": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABhWlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AYht+mSou0iNhBxCFDdWpBVMRRqlgEC6Wt0KqDyaV/0MSQpLg4Cq4FB38Wqw4uzro6uAqC4A+Is4OToouU+F1SaBHjwd09vPe9L3ffAUKzxlSzZxxQNcvIJBNivrAiBl4RRBgDtMYkZuqp7EIOnuPrHj6+38V5lnfdnyOsFE0G+ETiWaYbFvE68fSmpXPeJ46wiqQQnxPHDLog8SPXZZffOJcdFnhmxMhl5ogjxGK5i+UuZhVDJZ4ijiqqRvlC3mWF8xZntVZn7XvyF4aK2nKW6zRHkMQiUkhDhIw6qqjBQpx2jRQTGTpPePiHHX+aXDK5qmDkmMcGVEiOH/wPfvfWLE1OuEmhBND7Ytsfo0BgF2g1bPv72LZbJ4D/GbjSOv6NJjDzSXqjo0WPgP5t4OK6o8l7wOUOMPSkS4bkSH6aQqkEvJ/RNxWAwVugb9XtW/scpw9Ajnq1dAMcHAJjZcpe83h3sLtv/9a0+/cDdSByqBZzSuQAAAAJcEhZcwAALiMAAC4jAXilP3YAAAAHdElNRQfoCA0RFjTUESh2AAAAGXRFWHRDb21tZW50AENyZWF0ZWQgd2l0aCBHSU1QV4EOFwAAA3pJREFUWMPt1k2IllUUB/Df+/qOo46ZZmZmZcfSMDILkygj6YMILKSS2kRRi0po16I2EhQWtCto28o2RURIVFTEkC0iMaQvs+ykpZKV32U6OtPmvPAwjdqMmxYeeLjPc++59/zvOf9zztMySsnMFiZiES5Bf0TsNEZpjdJ4G0twE27EOBzDGmyKiKNjBpCZE+vADgbxNwYiYqhh/FY8gXmYhvEFYBuew/ujBdGpw2ehD6swHVPwKz7KzLci4njNr8FcTEIPhuo5hruwCdtH5YHMnIbLcXPdrq880MJ+bMAzeA1XoF1P1/gg/sJ6vIhPC3DXa+fgblyFVyPii395oEh1B85Cbx3aLjB3YnnduD0sfN2nty5xL37Azszs4EHcg8W1d2VmPo03I+IQtCNibxHqwuJAlwed2tRTBlqnCOXZmIOLyviTFbLbcB5m1PgKnsrMydDOzN5anF7GWg1j7cZ7awQCt0qnU7xp409chtWYWeDbDd0JWIkruwYGsBkHikyDZWCwYtyVoVPwqRe3YwU2VvhG8lqXF0syc3yryLKw0mgJpjZCMfyAoRPMj1YG8A0e7pJwM14qwswpEH2YVYiPlHfG4/wGeccq4yo81zQLUU+RZFoh7MGCmtuFg7X2fNWC0/HCUNWZVaMtxR2sLRKNO00A+/Bs+wSGlmbmhHq/ITOX1tIMfI/fcPw0AHQz4kBnBONzi6VHGspfNmL3IQ7hoQpPp7jROyx72sPSuCmD2IK1nWHGp+J6vBERQwVmICIOZOa5xYnN+By7qydsxTLMbzSmP2ptd4G7oPL/WKXqPjwQEUc7w+K7COsbHa3rcrgYWyLi59L/MSL6q5AdxMaIOHwS/kytWgMzI2KXYbW9r8ZfasOCUtyTmbMxu+vOKqNR+i9ge0QczszHMvPx0rk6M1dn5pTSm1fVchYWNqsSiIj9EdHf7WQR8S3ereXJ+CoifqrvHrydmcuqLhxu8GVdQ2cHOpl5HeZGxL7izS3/AjCSRMRAjd9FRDbm99Zt7sejEfF7gTkSETsyc34Z+Toi9lQr3l/b72uEYmwVrVJ0BdZ22youRX+9X4tPIuKzbruPiPcqHNvw+n/ywElkRo0bCtDycvHWzFxc2dKutZnlAXgE68orY/dAZcLLje93MvPjBrgPImJ9fU+q/4IulyY4I2fkjJyR/5P8AxM8Mqx5mS2RAAAAAElFTkSuQmCC",
    // Schnee
    "Leichter Schneefall": "data:image/png;base64,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",
    "Schneefall": "data:image/png;base64,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",
    "Starker Schneefall": "data:image/png;base64,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",
    //Nebel
    "Leichter Nebel": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABhWlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AYht+mSou0iNhBxCFDdWpBVMRRqlgEC6Wt0KqDyaV/0MSQpLg4Cq4FB38Wqw4uzro6uAqC4A+Is4OToouU+F1SaBHjwd09vPe9L3ffAUKzxlSzZxxQNcvIJBNivrAiBl4RRBgDtMYkZuqp7EIOnuPrHj6+38V5lnfdnyOsFE0G+ETiWaYbFvE68fSmpXPeJ46wiqQQnxPHDLog8SPXZZffOJcdFnhmxMhl5ogjxGK5i+UuZhVDJZ4ijiqqRvlC3mWF8xZntVZn7XvyF4aK2nKW6zRHkMQiUkhDhIw6qqjBQpx2jRQTGTpPePiHHX+aXDK5qmDkmMcGVEiOH/wPfvfWLE1OuEmhBND7Ytsfo0BgF2g1bPv72LZbJ4D/GbjSOv6NJjDzSXqjo0WPgP5t4OK6o8l7wOUOMPSkS4bkSH6aQqkEvJ/RNxWAwVugb9XtW/scpw9Ajnq1dAMcHAJjZcpe83h3sLtv/9a0+/cDdSByqBZzSuQAAAAJcEhZcwAALiMAAC4jAXilP3YAAAAHdElNRQfoCA0RGBEBltG/AAAAGXRFWHRDb21tZW50AENyZWF0ZWQgd2l0aCBHSU1QV4EOFwAAAehJREFUWMPtV1tywyAMXCmcpPe/Uy5SpH7UzijbFbhJP8sMg+2AtKyesfv9/gHAj2nHrM+G73F+y/Kex7coa5YZZeXnABCDFIIUWwMEBKKCUcMI/EOmNxvRKN8B6lgzwe7ThioA4tuOFQayutDTb37xlkoAGuW22PtDj2M9ViA6kIpNE3Jb5FeAvDqyOKL0gR0bV3wFm4tI2/3V7dTzcvgvDuQbgLYAukOp7Cb250KpkpGcyd6lfOloBPBp+gZhXrBxNoprLejOpQshsaA9LgLNxgQ/5jiEeqloVpR5WbuwirIfTTVMUSkBAEN8TAATwE3c3soeE+esoT+JwazlOMptuNaft5+FhSB6bVH/0fQIURkICssgipNMlGSmnZ1VUwLFQDbp1ckfKkPsvGjW06xgMAPA52HvU+itCK+dziy1Ywr6d7dP1Z4xA1wbkspuNoWFWZwEZFba2QmnQO1CuYnyDWpI0YTdJHM8fEEBsHLIqY+b5BcQXbGyfzThOUehRbXmNQyNmHERwpxTonHSx/vphDXub0StCZOoHqJLTl2oRs2Eik4vIfdJDmoUJdgUp+zyxqAUWxUErVNEyRQMcHGKFbghMh8WHj/FfwEuVuzMWFXM0WwyMos1uYLDq/MLxcYrbd7/+PvxBQ0YRmpee2EbAAAAAElFTkSuQmCC",
    "Dichter Nebel": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABhWlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AYht+mSou0iNhBxCFDdWpBVMRRqlgEC6Wt0KqDyaV/0MSQpLg4Cq4FB38Wqw4uzro6uAqC4A+Is4OToouU+F1SaBHjwd09vPe9L3ffAUKzxlSzZxxQNcvIJBNivrAiBl4RRBgDtMYkZuqp7EIOnuPrHj6+38V5lnfdnyOsFE0G+ETiWaYbFvE68fSmpXPeJ46wiqQQnxPHDLog8SPXZZffOJcdFnhmxMhl5ogjxGK5i+UuZhVDJZ4ijiqqRvlC3mWF8xZntVZn7XvyF4aK2nKW6zRHkMQiUkhDhIw6qqjBQpx2jRQTGTpPePiHHX+aXDK5qmDkmMcGVEiOH/wPfvfWLE1OuEmhBND7Ytsfo0BgF2g1bPv72LZbJ4D/GbjSOv6NJjDzSXqjo0WPgP5t4OK6o8l7wOUOMPSkS4bkSH6aQqkEvJ/RNxWAwVugb9XtW/scpw9Ajnq1dAMcHAJjZcpe83h3sLtv/9a0+/cDdSByqBZzSuQAAAAJcEhZcwAALiMAAC4jAXilP3YAAAAHdElNRQfoCA0RGChek1m3AAAAGXRFWHRDb21tZW50AENyZWF0ZWQgd2l0aCBHSU1QV4EOFwAAAjpJREFUWMPtV1ty5DAIbMlsrpX7n2LOkbGE8iOynR7w5FH7t6qakiXL0DQImHa73V4BGIADQN+/eG57Bu35Xtt+7gDGnufecwBr78cc7yath4lCkNJGgBiI4e84toIAw+eczvV9zmntAHrH59FJQKY81vELEJD3DFYNYmNhvCChrQDV5DyEjSl7jVyTsbA6KVDLuwB5prxiAYWMDqBVAjPrIdSrKyBn1W1ImH4QXgG6evedsSQ4U3S4AKHPvZDVvyDjgabfDi+en/r4qx+sXwB6CqD6iLPalRK/AOmJ75dmqJ8GFC4UZkAXGeWRBzIrM4u8UL6KCHfK/1WceE+EjOy67DEvlFdXbYkbPs22FRpVtIOUPQvYTudGEjdTKiPT/1CleD4T64cIXkn5hTCpQaqAphFyvhGW+OsQS0H9gCd9wBSlLv3Ah6JZFBWm8xB/dhI2hUFlcyRnwQ0J++4l8bEGYXW9hpxRBk65HSOC8G1vxvMfsoDbrlPaMmYis56v4Uhc4MrAIqobscH9QXUDpjByit9Ppp1ATZPDERPR6zUBcCTuGQJGrWcAQxOUAbjvmQPMhHKTUhvuivVbkRPYBVl2vIcLIhlZ4u8AEwwwSL7CZ1J4VDHEBR+WGG2+SDt2iuJ+UUm7ZDpPXOMKwMWSuek2SUomwJxipSrRmgmHlmiuAdqITvnXcxcQKBjQejGS4uUchKNo0SzZP0X5QbcGRbYsS3GV80GWa2uurrjrX60LVpSNb/WO/8c/G++50U3Y82esfAAAAABJRU5ErkJggg==",
}
