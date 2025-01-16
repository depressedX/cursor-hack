define(de[3326], he([1, 0, 4, 82, 570, 1813]), function (ce, e, t, i, w, E) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }),
			(t = mt(t)),
			(i = mt(i)),
			(E = xi(E));
		const C = {
				oneOf: [
					{
						allOf: [
							{
								type: "object",
								required: ["version"],
								properties: {
									version: {
										type: "string",
										enum: ["0.1.0"],
										deprecationMessage: t.localize(9725, null),
										description: t.localize(9726, null),
									},
									_runner: { deprecationMessage: t.localize(9727, null) },
									runner: {
										type: "string",
										enum: ["process", "terminal"],
										default: "process",
										description: t.localize(9728, null),
									},
									windows: {
										$ref: "#/definitions/taskRunnerConfiguration",
										description: t.localize(9729, null),
									},
									osx: {
										$ref: "#/definitions/taskRunnerConfiguration",
										description: t.localize(9730, null),
									},
									linux: {
										$ref: "#/definitions/taskRunnerConfiguration",
										description: t.localize(9731, null),
									},
								},
							},
							{ $ref: "#/definitions/taskRunnerConfiguration" },
						],
					},
				],
			},
			d = { type: "boolean", default: !0, description: t.localize(9732, null) };
		C.definitions = i.$vo(E.default.definitions);
		const m = C.definitions;
		(m.commandConfiguration.properties.isShellCommand = i.$vo(d)),
			(m.taskDescription.properties.isShellCommand = i.$vo(d)),
			(m.taskRunnerConfiguration.properties.isShellCommand = i.$vo(d)),
			Object.getOwnPropertyNames(m).forEach((u) => {
				const a = u + "1";
				(m[a] = m[u]), delete m[u];
			});
		function r(u) {
			Array.isArray(u)
				? u.forEach(r)
				: typeof u == "object" &&
					(u.$ref && (u.$ref = u.$ref + "1"),
					Object.getOwnPropertyNames(u).forEach((a) => {
						const h = u[a];
						(Array.isArray(h) || typeof h == "object") && r(h);
					}));
		}
		r(C),
			w.$03.onReady().then(() => {
				try {
					const u = w.$03.keys().map((a) => "$" + a);
					(m.problemMatcherType1.oneOf[0].enum = u),
						(m.problemMatcherType1.oneOf[2].items.anyOf[1].enum = u);
				} catch {
					console.log("Installing problem matcher ids failed");
				}
			}),
			(e.default = C);
	}),
		