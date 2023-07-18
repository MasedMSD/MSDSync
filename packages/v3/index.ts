(function CreateErrorHandler(fnCallback) {
	Duktape.errCreate = function (e) {
		if (!(e instanceof Error) || "thrown" in e || !Object.isExtensible(e)) return e;
		e = fnCallback(e);
		return e;
	};
})(function (e: any) {
	e.time = new Date();
	Cheat.Print("Found error in the script code, please send next message to the developer: \n");
	Cheat.PrintColor([44, 3, 252, 255], "Information for the developer: error at line " + e.lineNumber + "\n\n");
	return e;
});

import { InputSystem, MSDSyncCheckbox, Window, Callbacks } from "./src/index.js";

const input = new InputSystem();
const checkbox = new MSDSyncCheckbox({ name: "Hello world", window: new Window({ x: 100, y: 100 }) });
const CallbackRegister = new Callbacks();

CallbackRegister.on("Draw", () => {
	input.UpdateInputSystem();

	checkbox.RenderBox();
	checkbox.RenderText({
		font: Render.AddFont("Segoeui.ttf", 12, 200),
		padding_left: 5,
		padding_top: 4,
	});

	checkbox.HandleClick({ input });
});

CallbackRegister.RegisterCallbacks();
