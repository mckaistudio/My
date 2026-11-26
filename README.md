# VoicePace AI Extension

An incomplete browser-extension prototype. This repository is a source snapshot, not an installable or production-ready extension.

## Files currently available

- `background.js` — prototype speed state and browser command handlers.
- `content.js` — example message handling and gesture-control placeholders.
- `dashboard.html` — a basic dashboard page with references to assets that are not present.

## Installation status

A browser extension requires a valid `manifest.json`. This repository currently has no manifest, and the dashboard's `common.css` and `dashboard.js` are also missing. Loading it as an unpacked extension will therefore fail. No verified installation or browser-store release is available.

## Development checklist

- Establish a valid manifest and explicitly review required permissions.
- Implement and test actual media playback speed control.
- Add the missing dashboard assets and remove or implement placeholders.
- Validate message inputs and speed limits before enabling commands.
- Test the resulting extension in a clean browser profile before distributing it.

## License status

The earlier README referred to an MIT license, but the repository does not contain a license file. Confirm the applicable terms with the repository owner before redistributing this code.
