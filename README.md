# Typing.com Interface
**An open source project aiming to reimplement the *same* interface that https://www.typing.com provides using JavaScript.**

Currently backspace has not been implemented yet, and the ability to change the text to type will be reimplemented using websockets by running a local websocket server using node.js to let it read from a file.
The websocket server must be launched on the same host as the host the javascript is running on (only for developement), but when you use this in production, you probably want to change the ws:// url.
Expect it to be finished/stable by 2016.

For contributing, see https://github.com/anirudhb/typing.com_interface/CONTRIBUTING.md.
