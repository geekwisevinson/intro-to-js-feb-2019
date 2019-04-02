let topicLevel1 = null;
let topicLevel2 = null;
let topicLevel3 = null;


function level1Topic(text, removeQuotes) {
    topicLevel1 = document.createElement('ul');
    const h1 = document.createElement('h1');
    h1.innerHTML = safeText(text, removeQuotes);
    document.body.appendChild(topicLevel1);
    topicLevel1.appendChild(h1);
}

function level2Topic(text, removeQuotes) {
    if (!topicLevel1) {alert('no topic')}
    let convertedText = safeText(text, removeQuotes);
    const li = document.createElement('li');
    li.innerHTML = convertedText;
    topicLevel1.appendChild(li);
    topicLevel2 = document.createElement('ul');
    li.appendChild(topicLevel2);

}

function level3Topic(text, removeQuotes) {
    if (!topicLevel2) {alert('no sub topic')}
    let convertedText = safeText(text, removeQuotes);
    const li = document.createElement('li');
    li.innerHTML = convertedText;
    topicLevel2.appendChild(li);
    topicLevel3 = document.createElement('ul');
    li.appendChild(topicLevel3);
}

function level4Topic(text, removeQuotes) {
    if (!topicLevel3) {alert('no sub topic')}
    let convertedText = safeText(text, removeQuotes);
    const li = document.createElement('li');
    li.innerHTML = convertedText;
    topicLevel3.appendChild(li);
}

function safeText(text, removeQuotes) {
    let convertedText;
    try {
        convertedText =  JSON.stringify(text);
    }
    catch(err) {
        convertedText = err.message;
    }

    try {
        const isNumber = !isNaN(convertedText);
        if (isNumber) {
            convertedText = Number(convertedText);
        }
    }
    catch(err) {
        convertedText = err.message;
    }
    return removeQuotes ? convertedText.substring(1, convertedText.length - 1): convertedText;
}

level1Topic('Types', true);
level2Topic('Primitive Types', true);
level3Topic('Numbers');
level4Topic(22);
level3Topic('String');
level4Topic('22');
level3Topic('Boolean');
level4Topic(true);
level3Topic('Null');
level4Topic(null);
level3Topic('undefined');
level4Topic(undefined);
level2Topic('Complex Types', true);
level3Topic('Objects');
level4Topic({name: 'vinson', colors: ['red', 'white', 'blue']});
level3Topic('Arrays');
level4Topic(['string', 1, true, {name: 'Joe'}]);

level1Topic('Functions', true);
level2Topic(`standard`, true);
level3Topic('creates scope');
level4Topic('function namedOfFunction (parameter1, parameter2, ...etc) { //actions }');
level2Topic(`es6 'fat' arrow`, true);
level3Topic('no scope created');
level4Topic('(parameter1, parameter2, ...etc) => { //actions }');

level1Topic('Coercion', true);
level2Topic('Sometimes JS will assume one data type over another', true);
level3Topic(`1 + '1' = '11'`, true);
level3Topic(`1 == '1'`, true);
level3Topic(`[1] == 1`, true);

level1Topic('Scope', true);
level2Topic('this');
level3Topic(`'this' is the caller of a function`, true);
level2Topic('js `var` uses lexical scope or is scoped to the functions caller', true);
level3Topic(`function tester() { console.log(this.name); }`);
level3Topic(`var name = 'window'`, true);
level4Topic(`tester(); === 'window' `, true);
level3Topic(`class Obj { name = 'obj'; tester= tester; }`, true);
level4Topic(`const obj = new Obj;`, true);
level4Topic(`obj.tester(); === 'obj' `, true);
level2Topic('newer js, es6 `const` and `let` use block scope', true);
level3Topic(`scope is created within each curly brace`, true);
level4Topic(`{ const myNumber = 1 } // not available outside braces`, true);

level1Topic('DOM (Document Object Model)', true);
level2Topic(`Create 'Elements'`, true);
level3Topic('document.createElement(type)');
level4Topic(`types: 'h1', 'div', 'span', 'ul', 'li', ...etc`, true);
level2Topic(`Place 'Elements'`, true);
level3Topic('document.body.appendChild(myElement)');
level3Topic('myElement.prepend(myOtherElement)');
level2Topic(`Target 'Elements'`, true);
level3Topic('single');
level4Topic('document.querySelector');
level4Topic('document.getElementById');
level3Topic('multiple');
level4Topic('document.querySelectorAll');
level4Topic('document.getElementsByTagName');
level4Topic('document.getElementsByClassName');
level2Topic(`Style 'Element'`, true);
level3Topic('bracket notation', true);
level4Topic(`myElement.style['background-color'] = 'red'; // string value`, true);
level3Topic('camelCase', true);
level4Topic(`myElement.style.backgroundColor = 'red'; // string value`, true);
level2Topic('Listeners', true);
level3Topic('myElement.addEventListener(event, callback);');
level4Topic(`Events- 'click', 'mouseover', 'keyup', 'transitionend`);

level1Topic('Built in Objects', true);
level2Topic('Document');
level2Topic('Date');
level2Topic('Math');
level2Topic('JSON');




const tester = () => {
    console.log('name', this.name);
}
var name = 'test';
class Obj {
    name = 'obj';
    tester= tester;
}


const obj = new Obj();
tester();
obj.tester();
