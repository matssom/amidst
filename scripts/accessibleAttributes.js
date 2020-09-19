/*
    Appending accessable atributes to HTML5 tags
*/

document.addEventListener("DOMContentLoaded", () => {

    const appendAttributes = () => {
        const navElements = document.getElementsByTagName('nav');
        loopOverTag(navElements, "role", "navigation");
    }

    const loopOverTag = (collection, attribute, value) => {
        for (const tag of collection) {
            tag.setAttribute(attribute, value);
        }
    }
    
    appendAttributes();

    const body = document.getElementsByTagName("body")[0];
    
    const config = {
        attributes: false,
        childList: true
    }

    const mutationObserved = (mutationsList) => {
        for(const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                appendAttributes();
                return;
            }
        }
    };

    const observer = new MutationObserver(mutationObserved);
    observer.observe(body, config);

});