define(de[2888], he([1, 0, 266, 54]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$c6c = E);
			const w = new Map([
				[".svg", "image/svg+xml"],
				[".txt", t.$EK.text],
				[".css", "text/css"],
				[".js", "application/javascript"],
				[".cjs", "application/javascript"],
				[".mjs", "application/javascript"],
				[".json", "application/json"],
				[".html", "text/html"],
				[".htm", "text/html"],
				[".xhtml", "application/xhtml+xml"],
				[".oft", "font/otf"],
				[".xml", "application/xml"],
				[".wasm", "application/wasm"],
			]);
			function E(C) {
				const d = (0, i.$tc)(C.fsPath).toLowerCase();
				return w.get(d) || (0, t.$GK)(C.fsPath) || t.$EK.unknown;
			}
		}),
		