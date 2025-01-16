define(
			de[3332],
			he([1, 0, 6, 3, 4, 34, 53, 175]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$OWc = void 0);
				let m = class {
					get providers() {
						return this.b;
					}
					constructor(a) {
						(this.g = a),
							(this.a = new Map()),
							(this.b = new Map()),
							(this.d = new t.$re()),
							(this.onDidRegisterProvider = this.d.event),
							(this.e = new t.$re()),
							(this.onDidRegisterCommandSelector = this.e.event),
							(this.f = new t.$re()),
							(this.onDidUnregisterProvider = this.f.event),
							(this.extensionQuickFixes = new Promise((h) =>
								r.setHandler((c) => {
									h(
										c
											.filter((n) =>
												(0, C.$t2)(n.description, "terminalQuickFixProvider"),
											)
											.map((n) =>
												n.value
													? n.value.map((g) => ({
															...g,
															extensionIdentifier:
																n.description.identifier.value,
														}))
													: [],
											)
											.flat(),
									);
								}),
							)),
							this.extensionQuickFixes.then((h) => {
								for (const c of h) this.registerCommandSelector(c);
							});
					}
					registerCommandSelector(a) {
						this.a.set(a.id, a), this.e.fire(a);
					}
					registerQuickFixProvider(a, h) {
						let c = !1;
						return (
							this.extensionQuickFixes.then(() => {
								if (c) return;
								this.b.set(a, h);
								const n = this.a.get(a);
								if (!n) {
									this.g.error(`No registered selector for ID: ${a}`);
									return;
								}
								this.d.fire({ selector: n, provider: h });
							}),
							(0, i.$Yc)(() => {
								(c = !0), this.b.delete(a);
								const n = this.a.get(a);
								n && (this.a.delete(a), this.f.fire(n.id));
							})
						);
					}
				};
				(e.$OWc = m), (e.$OWc = m = Ne([j(0, E.$ik)], m));
				const r = d.$n2.registerExtensionPoint({
					extensionPoint: "terminalQuickFixes",
					defaultExtensionKind: ["workspace"],
					activationEventsGenerator: (u, a) => {
						for (const h of u ?? [])
							a.push(`onTerminalQuickFixRequest:${h.id}`);
					},
					jsonSchema: {
						description: (0, w.localize)(10561, null),
						type: "array",
						items: {
							type: "object",
							additionalProperties: !1,
							required: [
								"id",
								"commandLineMatcher",
								"outputMatcher",
								"commandExitResult",
							],
							defaultSnippets: [
								{
									body: {
										id: "$1",
										commandLineMatcher: "$2",
										outputMatcher: "$3",
										exitStatus: "$4",
									},
								},
							],
							properties: {
								id: {
									description: (0, w.localize)(10562, null),
									type: "string",
								},
								commandLineMatcher: {
									description: (0, w.localize)(10563, null),
									type: "string",
								},
								outputMatcher: {
									markdownDescription: (0, w.localize)(10564, null),
									type: "object",
									required: ["lineMatcher", "anchor", "offset", "length"],
									properties: {
										lineMatcher: {
											description:
												"A regular expression or string to test the command line against",
											type: "string",
										},
										anchor: {
											description:
												"Where the search should begin in the buffer",
											enum: ["top", "bottom"],
										},
										offset: {
											description:
												"The number of lines vertically from the anchor in the buffer to start matching against",
											type: "number",
										},
										length: {
											description:
												"The number of rows to match against, this should be as small as possible for performance reasons",
											type: "number",
										},
									},
								},
								commandExitResult: {
									description: (0, w.localize)(10565, null),
									enum: ["success", "error"],
									enumDescriptions: [
										"The command exited with an exit code of zero.",
										"The command exited with a non-zero exit code.",
									],
								},
								kind: {
									description: (0, w.localize)(10566, null, '`"fix"`'),
									enum: ["default", "explain"],
									enumDescriptions: [
										"A high confidence quick fix.",
										"An explanation of the problem.",
									],
								},
							},
						},
					},
				});
			},
		),
		