define(de[2877], he([1, 0, 12, 4, 81, 30]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				E.$Io
					.as(w.$No.Configuration)
					.registerConfiguration({
						id: "update",
						order: 15,
						title: (0, i.localize)(2435, null),
						type: "object",
						properties: {
							"update.mode": {
								type: "string",
								enum: ["none", "manual", "start", "default"],
								default: "default",
								scope: w.ConfigurationScope.APPLICATION,
								description: (0, i.localize)(2436, null),
								tags: ["usesOnlineServices"],
								enumDescriptions: [
									(0, i.localize)(2437, null),
									(0, i.localize)(2438, null),
									(0, i.localize)(2439, null),
									(0, i.localize)(2440, null),
								],
								policy: { name: "UpdateMode", minimumVersion: "1.67" },
							},
							"update.channel": {
								type: "string",
								default: "default",
								scope: w.ConfigurationScope.APPLICATION,
								description: (0, i.localize)(2441, null),
								deprecationMessage: (0, i.localize)(2442, null, "update.mode"),
							},
							"update.enableWindowsBackgroundUpdates": {
								type: "boolean",
								default: !0,
								scope: w.ConfigurationScope.APPLICATION,
								title: (0, i.localize)(2443, null),
								description: (0, i.localize)(2444, null),
								included: t.$l && !t.$r,
							},
							"update.showReleaseNotes": {
								type: "boolean",
								default: !0,
								scope: w.ConfigurationScope.APPLICATION,
								description: (0, i.localize)(2445, null),
								tags: ["usesOnlineServices"],
							},
						},
					});
		}),
		