document.head.innerHTML += '<link rel="stylesheet" href="amidst.css">';

/*
    Adding user-is-tabbing class to the body if the user starts tabbing.
    This way we can know when to show outlines on for keyboard-users.
*/

const handleFirstTab = (e) => {
    if (e.keyCode === 9) {
        document.body.classList.add('user-is-tabbing');
        window.removeEventListener('keydown', handleFirstTab);
    }
}

window.addEventListener('keydown', handleFirstTab);


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