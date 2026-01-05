/* js/utils/dom.js */
export const select = (selector) => document.querySelector(selector);
export const selectAll = (selector) => document.querySelectorAll(selector);

export const addEvent = (element, event, handler) => {
    if (element) element.addEventListener(event, handler);
};