define(de[3397], he([1, 0, 4, 701]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Y1c = void 0),
				(t = mt(t));
			var w;
			(function (C) {
				(C.when = "when"), (C.title = "title"), (C.command = "command");
			})(w || (w = {}));
			const E = Object.freeze({
				type: "object",
				description: t.localize(4839, null),
				properties: {
					refactoring: {
						type: "array",
						description: t.localize(4840, null),
						items: {
							type: "object",
							description: t.localize(4841, null),
							required: [w.title, w.when, w.command],
							properties: {
								[w.title]: {
									type: "string",
									description: t.localize(4842, null),
								},
								[w.when]: {
									type: "string",
									description: t.localize(4843, null),
								},
								[w.command]: {
									type: "string",
									description: t.localize(4844, null),
								},
							},
						},
					},
				},
			});
			e.$Y1c = {
				extensionPoint: "documentation",
				deps: [i.$qYb],
				jsonSchema: E,
			};
		}),
		