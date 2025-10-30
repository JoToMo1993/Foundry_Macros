//-------------------------------------------------------------------------------------
// This part is configuration, you can make changes here, but make sure they are the same across all occurances.
//-------------------------------------------------------------------------------------

const IconHtml = '<img src="https://benny.decker.games/systems/dnd5e/icons/svg/ability-score-improvement.svg" alt="" style="border: none; width: var(--icon-width, var(--icon-size, 1em)); height: var(--icon-height, var(--icon-size, 1em));"/>'
const ToolIconHtml = '<i class="fas fa-hammer"></i>';

const Types = {
    "skill": {text: "Skill", icon: IconHtml},
    "save": {text: "Save", icon: '<i class="fas fa-shield-heart"></i>'},
    "check": {text: "Ability", icon: IconHtml},
    "tool": {text: "Artisan’s Tools", icon: ToolIconHtml},
    "other-tools": {text: "Other Tools", icon: ToolIconHtml},
    "gaming-set": {text: "Gaming Set", icon: ToolIconHtml},
    "musical-instrument": {text: "Musical Instrument", icon: ToolIconHtml},
}

const OptionsPerType = {
    "skill": [
        {name: "Acrobatics (DEX)", value: "acr"},
        {name: "Animal Handling (WIS)", value: "ani"},
        {name: "Arcana (INT)", value: "arc"},
        {name: "Athletics (STR)", value: "ath"},
        {name: "Deception (CHA)", value: "dec"},
        {name: "History (INT)", value: "his"},
        {name: "Insight (WIS)", value: "ins"},
        {name: "Intimidation (CHA)", value: "itm"},
        {name: "Investigation (INT)", value: "inv"},
        {name: "Medicine (WIS)", value: "med"},
        {name: "Nature (INT)", value: "nat"},
        {name: "Perception (WIS)", value: "prc"},
        {name: "Performance (CHA)", value: "prf"},
        {name: "Persuasion (CHA)", value: "per"},
        {name: "Religion (INT)", value: "rel"},
        {name: "Sleight of Hand (DEX)", value: "slt"},
        {name: "Stealth (DEX)", value: "ste"},
        {name: "Survival (WIS)", value: "sur"},
    ],
    "save": [
        {name: "Strength", value: "str"},
        {name: "Dexterity", value: "dex"},
        {name: "Constitution", value: "con"},
        {name: "Intelligence", value: "int"},
        {name: "Wisdom", value: "wis"},
        {name: "Charisma", value: "cha"},
    ],
    "check": [
        {name: "Strength", value: "str"},
        {name: "Dexterity", value: "dex"},
        {name: "Constitution", value: "con"},
        {name: "Intelligence", value: "int"},
        {name: "Wisdom", value: "wis"},
        {name: "Charisma", value: "cha"},
    ],
    "tool": [
        {name: "Alchemist's Supplies", value: "alchemist"},
        {name: "Brewer's Supplies", value: "brewer"},
        {name: "Calligrapher's Supplies", value: "calligrapher"},
        {name: "Carpenter's Tools", value: "carpenter"},
        {name: "Cartographer's Tools", value: "cartographer"},
        {name: "Cobbler's Tools", value: "cobbler"},
        {name: "Cook's Utensils", value: "cook"},
        {name: "Glassblower's Tools", value: "glassblower"},
        {name: "Jeweler's Tools", value: "jeweler"},
        {name: "Leatherworker's Tools", value: "leatherworker"},
        {name: "Mason’s Tools", value: "mason"},
        {name: "Painter's Supplies", value: "painter"},
        {name: "Potter's Tools", value: "potter"},
        {name: "Smith's Tools", value: "smith"},
        {name: "Tinker's Tools", value: "tinker"},
        {name: "Weaver's Tools", value: "weaver"},
        {name: "Woodcarver's Tools", value: "woodcarver"},
    ],
    "other-tools": [
        {name: "Disguise Kit", value: "disg"},
        {name: "Forgery Kit", value: "forg"},
        {name: "Herbalism Kit", value: "herb"},
        {name: "Navigator’s Tools", value: "navg"},
        {name: "Poisoner’s Kit", value: "pois"},
        {name: "Thieves’ Tools", value: "thief"},
    ],
    "gaming-set": [
        {name: "Dice", value: "dice"},
        {name: "Dragonchess", value: "chess"},
        {name: "Playing Cards", value: "card"},
        //{name: "Three-Dragon Ante", value: "ante"},
    ],
    "musical-instrument": [
        {name: "Bagpipes", value: "bagpipes"},
        {name: "Drum", value: "drum"},
        {name: "Dulcimer", value: "dulcimer"},
        {name: "Flute", value: "flute"},
        {name: "Horn", value: "horn"},
        {name: "Lute", value: "lute"},
        {name: "Lyre", value: "lyre"},
        {name: "Pan Flute", value: "panflute"},
        {name: "Shawm", value: "shawm"},
        {name: "Viol", value: "viol"},
    ]
}
//@formatter:off
const OptionTypeValueToAbility = {
    // skills
    "acr": {ability: "dex", text: "Dexterity (Acrobatics)",       name: "Acrobatics (DEX)"},
    "ani": {ability: "wis", text: "Wisdom (Animal Handling)",     name: "Animal Handling (WIS)"},
    "arc": {ability: "int", text: "Intelligence (Arcana)",        name: "Arcana (INT)"},
    "ath": {ability: "str", text: "Strength (Athletics)",         name: "Athletics (STR)"},
    "dec": {ability: "cha", text: "Charisma (Deception)",         name: "Deception (CHA)"},
    "his": {ability: "int", text: "Intelligence (History)",       name: "History (INT)"},
    "ins": {ability: "wis", text: "Wisdom (Insight)",             name: "Insight (WIS)"},
    "itm": {ability: "cha", text: "Charisma (Intimidation)",      name: "Intimidation (CHA)"},
    "inv": {ability: "int", text: "Intelligence (Investigation)", name: "Investigation (INT)"},
    "med": {ability: "wis", text: "Wisdom (Medicine)",            name: "Medicine (WIS)"},
    "nat": {ability: "int", text: "Intelligence (Nature)",        name: "Nature (INT)"},
    "prc": {ability: "wis", text: "Wisdom (Perception)",          name: "Perception (WIS)"},
    "prf": {ability: "cha", text: "Charisma (Performance)",       name: "Performance (CHA)"},
    "per": {ability: "cha", text: "Charisma (Persuasion)",        name: "Persuasion (CHA)"},
    "rel": {ability: "int", text: "Intelligence (Religion)",      name: "Religion (INT)"},
    "slt": {ability: "dex", text: "Dexterity (Sleight of Hand)",  name: "Sleight of Hand (DEX)"},
    "ste": {ability: "dex", text: "Dexterity (Stealth)",          name: "Stealth (DEX)"},
    "sur": {ability: "wis", text: "Wisdom (Survival)",            name: "Survival (WIS)"},
    // abilities
    "str": {ability: "str", text: "Strength",     name: "Strength"},
    "dex": {ability: "dex", text: "Dexterity",    name: "Dexterity"},
    "con": {ability: "con", text: "Constitution", name: "Constitution"},
    "int": {ability: "int", text: "Intelligence", name: "Intelligence"},
    "wis": {ability: "wis", text: "Wisdom",       name: "Wisdom"},
    "cha": {ability: "cha", text: "Charisma",     name: "Charisma"},
    // tools
    "alchemist":     {ability: "int", text: "Intelligence (Alchemist's Supplier)", name: "Alchemist's Supplier (INT)"},
    "brewer":        {ability: "int", text: "Intelligence (Brewer's Supplier)"   , name: "Brewer's Supplier (INT)"},
    "calligrapher":  {ability: "dex", text: "Dexterity (Calligrapher's Supplier)", name: "Calligrapher's Supplier (DEX)"},
    "carpenter":     {ability: "str", text: "Strength (Carpenter's Tools)"       , name: "Carpenter's Supplier (STR)"},
    "cartographer":  {ability: "wis", text: "Wisdom (Cartographer's Tools)"      , name: "Cartographer's Supplier (WIS)"},
    "cobbler":       {ability: "dex", text: "Dexterity (Cobbler's Tools)"        , name: "Cobbler's Supplier (DEX)"},
    "cook":          {ability: "wis", text: "Wisdom (Cook's Utensils)"           , name: "Cook's Utensils (WIS)"},
    "glassblower":   {ability: "int", text: "Intelligence (Glassblower's Tools)" , name: "Glassblower's Tools (INT)"},
    "jeweler":       {ability: "int", text: "Intelligence (Jeweler's Tools)"     , name: "Jeweler's Tools (INT)"},
    "leatherworker": {ability: "dex", text: "Dexterity (Leatherworker's Tools)"  , name: "Leatherworker's Tools (DEX)"},
    "mason":         {ability: "str", text: "Strength (Mason’s Tools)"           , name: "Mason’s Tools (STR)"},
    "painter":       {ability: "wis", text: "Wisdom (Painter's Supplies)"        , name: "Painter's Supplies (WIS)"},
    "potter":        {ability: "int", text: "Intelligence (Potter's Tools)"      , name: "Potter's Tools (INT)"},
    "smith":         {ability: "str", text: "Strength (Smith’s Tools)"           , name: "Smith’s Tools (STR)"},
    "tinker":        {ability: "dex", text: "Dexterity (Tinker’s Tools)"         , name: "Tinker’s Tools (DEX)"},
    "weaver":        {ability: "dex", text: "Dexterity (Weaver’s Tools)"         , name: "Weaver’s Tools (DEX)"},
    "woodcarver":    {ability: "dex", text: "Dexterity (Woodcarver’s Tools)"     , name: "Woodcarver’s Tools (DEX)"},
    // other tools
    "disg":  {ability: "cha", text: "Charisma (Disguise Kit)",       name: "Disguise Kit (CHA)"},
    "forg":  {ability: "dex", text: "Dexterity (Forgery Kit)",       name: "Forgery Kit (DEX)"},
    "herb":  {ability: "int", text: "Intelligence (Herbalism Kit)",  name: "Herbalism Kit (INT)"},
    "navg":  {ability: "wis", text: "Wisdom (Navigator’s Tools)",    name: "Navigator’s Tools (WIS)"},
    "pois":  {ability: "int", text: "Intelligence (Poisoner’s Kit)", name: "Poisoner’s Kit (INT)"},
    "thief": {ability: "dex", text: "Dexterity (Thieves’ Tools)",    name: "Thieves’ Tools (DEX)"},
    // gaming set
    "dice":  {ability: "wis", text: "Wisdom (Dice)",              name: "Dice (WIS)"},
    "chess": {ability: "wis", text: "Wisdom (Dragonchess)",       name: "Dragonchess (WIS)"},
    "card":  {ability: "wis", text: "Wisdom (Playing Cards)",     name: "Playing Cards (WIS)"},
    "ante":  {ability: "wis", text: "Wisdom (Three-Dragon Ante)", name: "Three-Dragon Ante (WIS)"},
    // musical instrument
    "bagpipes": {ability: "cha", text: "Charisma (Bagpipes)" , name: "Bagpipes (CHA)"},
    "drum":     {ability: "cha", text: "Charisma (Drum)"     , name: "Drum (CHA)"},
    "dulcimer": {ability: "cha", text: "Charisma (Dulcimer)" , name: "Dulcimer (CHA)"},
    "flute":    {ability: "cha", text: "Charisma (Flute)"    , name: "Flute (CHA)"},
    "horn":     {ability: "cha", text: "Charisma (Horn)"     , name: "Horn (CHA)"},
    "lute":     {ability: "cha", text: "Charisma (Lute)"     , name: "Lute (CHA)"},
    "lyre":     {ability: "cha", text: "Charisma (Lyre)"     , name: "Lyre (CHA)"},
    "panflute": {ability: "cha", text: "Charisma (Pan Flute)", name: "Pan Flute (CHA)"},
    "shawm":    {ability: "cha", text: "Charisma (Shawm)"    , name: "Shawm (CHA)"},
    "viol":     {ability: "cha", text: "Charisma (Viol)"     , name: "Viol (CHA)"},
}
//@formatter:on

//-------------------------------------------------------------------------------------
// Coding begins here, please do not change.
//-------------------------------------------------------------------------------------

await game.settings.register('multi_checks_multi_types', 'type', {
    name: 'Type',
    hint: 'Stores the type entered previously',
    scope: 'client',
    config: false,
    type: Array,
    default: [],
    filePicker: false,
    requiresReload: false,
});
await game.settings.register('multi_checks_multi_types', 'option', {
    name: 'Option',
    hint: 'Stores the option entered previously',
    scope: 'client',
    config: false,
    type: Array,
    default: [],
    filePicker: false,
    requiresReload: false,
});
await game.settings.register('multi_checks_multi_types', 'dc', {
    name: 'DC',
    hint: 'Stores the dc entered previously',
    scope: 'client',
    config: false,
    type: Object,
    default: {},
    filePicker: false,
    requiresReload: false,
});
const DataTagByType = {
    "skill": (value) => `data-skill="${value}"`,
    "save": (ignored) => ``,
    "check": (ignored) => ``,
    "tool": (value) => `data-tool="${value}"`,
    "other-tools": (value) => `data-tool="${value}"`,
    "gaming-set": (value) => `data-tool="${value}"`,
    "musical-instrument": (value) => `data-tool="${value}"`,
}
const TypeFromTypeGroup = {
    "skill": 'skill',
    "save": 'save',
    "check": 'check',
    "tool": 'tool',
    "other-tools": 'tool',
    "gaming-set": 'tool',
    "musical-instrument": 'tool',
}

function Check(type, optionValue, dc) {
    this.type = type;
    this.optionValue = optionValue;
    this.dc = dc;
}

const popupTypeTemplate = `<table>
      <thead>
        <tr><th>Types</th></tr>
      </thead>
      <tbody>
      ${Object.keys(Types).map(typeKey => `
        <tr class="${typeKey}-section">
          <td>
            <input type="checkbox" id="${typeKey + '-typeSelector'}" name="types" value="${typeKey}" ${game.settings.get('multi_checks_multi_types', 'type').includes(typeKey) ? "checked" : ""} />
            <label for="${typeKey + '-typeSelector'}">${Types[typeKey].text}</label>
          </td>
        </tr>`).join('')}
      </tbody>
    </table>`;

let selectedTypes = [];
let dType = new Dialog({
    title: 'Check selection',
    content: popupTypeTemplate,
    buttons: {
        ok: {
            icon: '<i class="fas fa-check"></i>',
            label: "Next!",
            callback: dialogTypeSubmit
        },
        cancel: {
            icon: '<i class="fas fa-times"></i>',
            label: "Never mind",
            callback: () => {
            }
        }
    },
    default: "ok",
});
dType.render(true);

function optionForTypeAndRow(rowNumber, typeKey) {
    const options = OptionsPerType[typeKey];
    console.log(options);
    const length = options.length;
    console.log(length);

    if (rowNumber >= length) {
        return '<td></td>';
    }

    const option = options[rowNumber];
    return `<td>
      <input type="checkbox" id="${typeKey + '-' + option.value}" name="checks" value="${option.value}"
        ${game.settings.get('multi_checks_multi_types', 'option').includes(typeKey + '-' + option.value) ? "checked" : ""} />
      <label for="${typeKey + '-' + option.value}">${option.name}</label>
    </td>`;
}

function popupSpecificTemplate() {
    selectedOptions = selectedTypes.map(type => OptionsPerType[type]);
    console.log(selectedOptions);
    selectedOptionsLengths = selectedOptions.map(selectedOption => selectedOption.length);
    console.log(selectedOptionsLengths);
    let maxRows = 0;
    selectedOptionsLengths.forEach(selectedOption => maxRows = Math.max(maxRows, selectedOption))
    console.log(maxRows);
    const indexes = [...Array(maxRows).keys()];
    console.log(indexes);

    return `<table>
      <thead>
        <tr>
        ${selectedTypes.map(typeKey => `<th>${Types[typeKey].text}</th>`).join('')}
        </tr>
      </thead>
      <tbody>
        ${indexes.map(rowNumber => `<tr>
          ${selectedTypes.map((typeKey) => optionForTypeAndRow(rowNumber, typeKey)).join('')}
        </tr>`).join('')}
      </tbody>
    </table>`;
}

function dialogTypeSubmit() {
    selectedTypes = Object.keys(Types).filter((type) => document.getElementById(type + '-typeSelector').checked);
    console.log(selectedTypes)

    let dSpecific = new Dialog({
        title: 'Check selection (Teil 2)',
        content: popupSpecificTemplate(),
        buttons: {
            ok: {
                icon: '<i class="fas fa-check"></i>',
                label: "Next!",
                callback: dialogDc
            },
            cancel: {
                icon: '<i class="fas fa-times"></i>',
                label: "Never mind",
                callback: () => {
                }
            }
        },
        default: "ok",
    });
    dSpecific.render(true);
}

let checks = [];

function popupCheckTemplate() {
    return `<table>
      ${selectedTypes.map(type => `<thead>
        <tr><th>${Types[type].text}</th><th>DC</th></tr>
      </thead>
      <tbody>
      ${checks.filter(check => check.type === type).map(check => `
        <tr>
          <td>
            <span>${OptionTypeValueToAbility[check.optionValue].name}</span>
          </td>
          <td>
            <input type="number" id="${check.type + '-' + check.optionValue}"
                value="${game.settings.get('multi_checks_multi_types', 'dc')[check.type + '-' + check.optionValue] | ""}"
            />
          </td>
        </tr>`).join('')}
      </tbody>
      `).join('')}
    </table>`;
}

function dialogDc() {
    selectedTypes.forEach(type => {
        OptionsPerType[type].map(option => type + '-' + option.value)
            .map(id => document.getElementById(id))
            .filter(element => element.checked)
            .forEach(element => checks.push(new Check(type, element.value, undefined)));
    });

    console.log(checks);

    let dSpecific = new Dialog({
        title: 'Check selection (Teil 3)',
        content: popupCheckTemplate(),
        buttons: {
            ok: {
                icon: '<i class="fas fa-check"></i>',
                label: "Next!",
                callback: dialogSubmit
            },
            cancel: {
                icon: '<i class="fas fa-times"></i>',
                label: "Never mind",
                callback: () => {
                }
            }
        },
        default: "ok",
    });
    dSpecific.render(true);
}

async function dialogSubmit() {
    let savedDC = game.settings.get('multi_checks_multi_types', 'dc');
    for (const check of checks) {
        let key = check.type + '-' + check.optionValue;
        check.dc = document.getElementById(key).value;
        savedDC[key] = check.dc
    }

    // Save to local storage
    await game.settings.set('multi_checks_multi_types', 'type', selectedTypes);
    await game.settings.set('multi_checks_multi_types', 'option', checks.map(check => check.type + '-' + check.optionValue));
    await game.settings.set('multi_checks_multi_types', 'dc', savedDC);

    printCheck(checks);
}

function printCheck(checks) {
    let buttons = '';

    checks.forEach(check => {
        buttons += `
            <div class="card-buttons">
                <button
                    data-type="${TypeFromTypeGroup[check.type]}"
                    data-format="long"
                    ${DataTagByType[check.type](check.optionValue)}
                    ${check.dc !== '' ? `data-dc="${check.dc}"` : ''}
                    data-ability="${OptionTypeValueToAbility[check.optionValue].ability}"
                    data-action="rollRequest"
                    data-visibility="all">
                    <span class="visible-dc">
                        ${Types[check.type].icon}
                        ${check.dc !== '' ? `DC ${check.dc} ` : ''}${OptionTypeValueToAbility[check.optionValue].text}
                    </span>
                    <span class="hidden-dc">
                        ${Types[check.type].icon}
                        ${OptionTypeValueToAbility[check.optionValue].text}
                    </span>
                </button>
            </div>
        `;
    });

    let message = `
            <div class="dnd5e2 chat-card request-card">
                ${buttons}
            </div>
        `;

    let chatData = {
        user: game.user.id,
        flavor: 'Roll Request',
        content: message,
        blind: false
    };

    ChatMessage.create(chatData, {});
}