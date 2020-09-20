/*! Amidst v0.0.1 | MIT License | github.com/matssom/amidst.git */

/*
    Adding user-is-tabbing class to the body if the user starts tabbing.
    This way we can know when to show outlines on for keyboard-users.
*/

const handleFirstClick = (e) => {
    document.body.classList.remove('user-is-tabbing');
    window.removeEventListener('mousedown', handleFirstClick);
    window.addEventListener('keydown', handleFirstTab);
}

const handleFirstTab = (e) => {
    if (e.keyCode === 9) {
        document.body.classList.add('user-is-tabbing');
        window.removeEventListener('keydown', handleFirstTab);
        window.addEventListener('mousedown', handleFirstClick);
    }
}

window.addEventListener('keydown', handleFirstTab);

export default handleFirstTab;


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