// background.js for VoicePace AI extension

// Speed Control
let speed = 1.0;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    switch (request.action) {
        case 'setSpeed':
            speed = request.value;
            sendResponse({status: 'speed set to ' + speed});
            break;
        case 'getSpeed':
            sendResponse({speed: speed});
            break;
        default:
            sendResponse({status: 'unknown action'});
    }
});

// Keyboard Commands
chrome.commands.onCommand.addListener((command) => {
    switch (command) {
        case 'increase-speed':
            speed += 0.1;
            break;
        case 'decrease-speed':
            speed -= 0.1;
            break;
        case 'reset-speed':
            speed = 1.0;
            break;
        default:
            console.error('Unknown command: ' + command);
    }
});

// Error Handling
chrome.runtime.onStartup.addListener(() => {
    console.log('VoicePace AI extension started.');
});

chrome.runtime.onInstalled.addListener(() => {
    console.log('VoicePace AI extension installed.');
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    try {
        // handle messages
    } catch (error) {
        console.error('Error handling message:', error);
    }
});