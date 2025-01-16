define(de[1813], he([1, 0, 4, 570]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (t = mt(t));
			const w = {
				definitions: {
					showOutputType: {
						type: "string",
						enum: ["always", "silent", "never"],
					},
					options: {
						type: "object",
						description: t.localize(9815, null),
						properties: {
							cwd: { type: "string", description: t.localize(9816, null) },
							env: {
								type: "object",
								additionalProperties: { type: "string" },
								description: t.localize(9817, null),
							},
						},
						additionalProperties: { type: ["string", "array", "object"] },
					},
					problemMatcherType: {
						oneOf: [
							{ type: "string", errorMessage: t.localize(9818, null) },
							i.Schemas.LegacyProblemMatcher,
							{
								type: "array",
								items: {
									anyOf: [
										{ type: "string", errorMessage: t.localize(9819, null) },
										i.Schemas.LegacyProblemMatcher,
									],
								},
							},
						],
					},
					shellConfiguration: {
						type: "object",
						additionalProperties: !1,
						description: t.localize(9820, null),
						properties: {
							executable: {
								type: "string",
								description: t.localize(9821, null),
							},
							args: {
								type: "array",
								description: t.localize(9822, null),
								items: { type: "string" },
							},
						},
					},
					commandConfiguration: {
						type: "object",
						additionalProperties: !1,
						properties: {
							command: { type: "string", description: t.localize(9823, null) },
							args: {
								type: "array",
								description: t.localize(9824, null),
								items: { type: "string" },
							},
							options: { $ref: "#/definitions/options" },
						},
					},
					taskDescription: {
						type: "object",
						required: ["taskName"],
						additionalProperties: !1,
						properties: {
							taskName: { type: "string", description: t.localize(9825, null) },
							command: { type: "string", description: t.localize(9826, null) },
							args: {
								type: "array",
								description: t.localize(9827, null),
								items: { type: "string" },
							},
							options: { $ref: "#/definitions/options" },
							windows: {
								anyOf: [
									{
										$ref: "#/definitions/commandConfiguration",
										description: t.localize(9828, null),
									},
									{
										properties: {
											problemMatcher: {
												$ref: "#/definitions/problemMatcherType",
												description: t.localize(9829, null),
											},
										},
									},
								],
							},
							osx: {
								anyOf: [
									{
										$ref: "#/definitions/commandConfiguration",
										description: t.localize(9830, null),
									},
									{
										properties: {
											problemMatcher: {
												$ref: "#/definitions/problemMatcherType",
												description: t.localize(9831, null),
											},
										},
									},
								],
							},
							linux: {
								anyOf: [
									{
										$ref: "#/definitions/commandConfiguration",
										description: t.localize(9832, null),
									},
									{
										properties: {
											problemMatcher: {
												$ref: "#/definitions/problemMatcherType",
												description: t.localize(9833, null),
											},
										},
									},
								],
							},
							suppressTaskName: {
								type: "boolean",
								description: t.localize(9834, null),
								default: !0,
							},
							showOutput: {
								$ref: "#/definitions/showOutputType",
								description: t.localize(9835, null),
							},
							echoCommand: {
								type: "boolean",
								description: t.localize(9836, null),
								default: !0,
							},
							isWatching: {
								type: "boolean",
								deprecationMessage: t.localize(9837, null),
								description: t.localize(9838, null),
								default: !0,
							},
							isBackground: {
								type: "boolean",
								description: t.localize(9839, null),
								default: !0,
							},
							promptOnClose: {
								type: "boolean",
								description: t.localize(9840, null),
								default: !1,
							},
							isBuildCommand: {
								type: "boolean",
								description: t.localize(9841, null),
								default: !0,
							},
							isTestCommand: {
								type: "boolean",
								description: t.localize(9842, null),
								default: !0,
							},
							problemMatcher: {
								$ref: "#/definitions/problemMatcherType",
								description: t.localize(9843, null),
							},
						},
					},
					taskRunnerConfiguration: {
						type: "object",
						required: [],
						properties: {
							command: { type: "string", description: t.localize(9844, null) },
							args: {
								type: "array",
								description: t.localize(9845, null),
								items: { type: "string" },
							},
							options: { $ref: "#/definitions/options" },
							showOutput: {
								$ref: "#/definitions/showOutputType",
								description: t.localize(9846, null),
							},
							isWatching: {
								type: "boolean",
								deprecationMessage: t.localize(9847, null),
								description: t.localize(9848, null),
								default: !0,
							},
							isBackground: {
								type: "boolean",
								description: t.localize(9849, null),
								default: !0,
							},
							promptOnClose: {
								type: "boolean",
								description: t.localize(9850, null),
								default: !1,
							},
							echoCommand: {
								type: "boolean",
								description: t.localize(9851, null),
								default: !0,
							},
							suppressTaskName: {
								type: "boolean",
								description: t.localize(9852, null),
								default: !0,
							},
							taskSelector: {
								type: "string",
								description: t.localize(9853, null),
							},
							problemMatcher: {
								$ref: "#/definitions/problemMatcherType",
								description: t.localize(9854, null),
							},
							tasks: {
								type: "array",
								description: t.localize(9855, null),
								items: {
									type: "object",
									$ref: "#/definitions/taskDescription",
								},
							},
						},
					},
				},
			};
			e.default = w;
		});
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	