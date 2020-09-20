/*
    Adding user-is-tabbing class to the body if the user starts tabbing.
    This way we can know when to show outlines on for keyboard-users.
*/

export default function() {

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
    
};