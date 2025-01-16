define(
			de[4109],
			he([1, 0, 1713, 30, 81, 14, 79, 118, 1964, 3959]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				const m = (0, C.$$O)(
					"outline-view-icon",
					E.$ak.symbolClass,
					"View icon of the AI chat view.",
				);
				i.$Io
					.as(w.$No.Configuration)
					.registerConfiguration({
						id: t.IAIContextPaneConstants.Id,
						order: 5,
						title: "AI Context",
						type: "object",
						properties: {
							[d.AIContextConfigKeys.personalContext]: {
								description:
									"Personal context to inject into the completions and chat models.",
								type: "string",
								default: "",
								scope: w.ConfigurationScope.RESOURCE,
							},
						},
					});
			},
		),
		