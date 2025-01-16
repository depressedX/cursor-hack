define(de[1730], he([1, 0, 112]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$C3 = i);
			function i(w, E, C = []) {
				const d = E.getSession(),
					m = [
						[t.$A5.key, E.variableMenuContext || ""],
						[t.$J5.key, !!E.evaluateName],
						[
							t.$j5.key,
							!!d?.capabilities.supportsReadMemoryRequest &&
								E.memoryReference !== void 0,
						],
						[
							t.$K5.key,
							!!E.presentationHint?.attributes?.includes("readOnly") ||
								E.presentationHint?.lazy,
						],
						[t.$Z4.key, d?.configuration.type],
						...C,
					];
				return w.createOverlay(m);
			}
		}),
		