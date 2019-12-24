import _ from 'lodash';
import './../css/style.scss';

function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'world'], ' ');

    return element;
}

document.body.appendChild(component());