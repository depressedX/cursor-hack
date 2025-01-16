define(de[1792], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$I6b = i);
			function t(w) {
				if ("codeBlock" in w) {
					const E = w.codeBlock;
					if (E === void 0) throw new Error("Code block is undefined");
					return `${E.relativeWorkspacePath}:${E.range?.startPosition?.line}:${E.range?.startPosition?.column}:${E.range?.endPosition?.line}:${E.range?.endPosition?.column}`;
				} else if ("file" in w) {
					const E = w.file;
					if (E === void 0) throw new Error("Code block is undefined");
					return E.relativeWorkspacePath;
				} else throw new Error("Unknown retrieval result type");
			}
			async function i(w, { minK: E, finalK: C }) {
				const d = await Promise.allSettled(w),
					m = [];
				for (const c of d)
					if (c.status === "fulfilled") {
						const n = c.value;
						n.sort((g, p) => p.score - g.score), m.push(n);
					}
				const r = [],
					u = [];
				for (const c of m) {
					const n = c.slice(0, E);
					r.push(...n), u.push(...c.slice(E));
				}
				u.sort((c, n) => n.score - c.score),
					r.push(...u.slice(0, Math.max(C - r.length, 0)));
				const a = {};
				for (const [c, n] of r.entries()) {
					let g;
					try {
						g = t(n);
					} catch {
						continue;
					}
					(a[g] === void 0 || n.score > a[g].score) &&
						(a[g] = { score: n.score, index: c });
				}
				const h = [];
				for (const [c, n] of Object.entries(a)) {
					const { index: g } = n;
					h.push(r[g]);
				}
				return h.sort((c, n) => n.score - c.score), h;
			}
		}),
		define(
			de[697],
			he([1, 0, 9, 20, 81, 5, 30, 10, 61, 25, 54]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$19b = void 0),
					(e.$19b = (0, E.$Mi)("simpleTestService"));
				let a = class {
					registerSimpleTestProvider(n) {
						this.simpleTestProviders.push(n);
					}
					constructor(n, g, p) {
						(this.c = n),
							(this.d = g),
							(this.e = p),
							(this.simpleTestProviders = []);
					}
					hasTestConfig(n) {
						return this.getTestConfig(n) !== void 0;
					}
					get f() {
						return this.c.getValue(h)?.config ?? [];
					}
					insertDummyTestConfig(n) {
						const g = this.d.createByFilepathOrFirstLine(n),
							p = t.URI.file((0, u.$rc)(n.fsPath)),
							f = {
								directory: this.e.asRelativePath(p, !1),
								language: g.languageId,
								testingFramework: "vitest",
								command:
									'echo "Configure your test command here. The variable $TEST_FILE_NAME will have the file name of the test that should be executed."',
							};
						this.c.updateValue(
							"testRunner.config",
							[...this.f, f],
							d.ConfigurationTarget.WORKSPACE,
						);
					}
					getTestBoilerplate(n, g, p) {
						const o = this.getProvider(n);
						if (o === void 0) return;
						const f = (0, u.$sc)(p.fsPath);
						return o.createTestBoilerplate({
							interfaceName: g,
							interfacePath: f,
						});
					}
					getProvider(n) {
						const g = this.getTestConfig(n);
						if (g !== void 0)
							return this.simpleTestProviders.find(
								(p) =>
									p.language === g.language &&
									p.testingFramework === g.testingFramework,
							);
					}
					getTestConfig(n) {
						const g = this.d.createByFilepathOrFirstLine(n),
							p = this.e.asRelativePath(n, !1);
						return this.f
							.sort((o, f) => f.directory.length - o.directory.length)
							.find((o) => {
								if (o.language !== g.languageId) return !1;
								let f = o.directory;
								return (
									f.startsWith("./") && (f = f.substring(2)),
									!(f !== "." && !p.startsWith(f))
								);
							});
					}
				};
				a = Ne([j(0, d.$gj), j(1, m.$nM), j(2, r.$Vi)], a);
				const h = "testRunner";
				C.$Io
					.as(w.$No.Configuration)
					.registerConfiguration({
						id: h,
						order: 15,
						title: "Test Runner",
						type: "object",
						properties: {
							"testRunner.config": {
								type: "array",
								markdownDescription:
									"Configure how to run tests from the command-line. This is a light-weight way to let Cursor run tests for you.",
								items: {
									type: "object",
									properties: {
										directory: {
											type: "string",
											description:
												"The directory that should be matched against.",
										},
										language: {
											type: "string",
											description:
												"The language that should be matched against.",
										},
										testingFramework: {
											enum: ["vitest", "mocha"],
											description:
												"The testing framework used by the language in the directory.",
										},
										command: {
											type: "string",
											description:
												"The command to run to run the tests. This should be a command that can be run from the command-line, from the root of the workspace.",
										},
									},
								},
								scope: w.ConfigurationScope.RESOURCE,
							},
						},
					}),
					(0, i.$lK)(e.$19b, a, i.InstantiationType.Delayed);
			},
		),
		define(
			de[1011],
			he([1, 0, 6, 3, 48, 20, 5]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$u8b = e.WriteTerminalState = e.$t8b = e.$s8b = void 0),
					(e.$s8b = (0, C.$Mi)("toolformerHandlerRegistryService"));
				class d extends i.$1c {
					constructor(a) {
						super(),
							(this.toolformerId = a),
							(this.editHistory = []),
							(this.diffs = new Map()),
							(this.mostRecentEditSnapshot = void 0),
							(this.markersBefore = new Map()),
							(this.cursorPos = new w.$hL(1, 1)),
							(this.currentSessionIndex = -1),
							(this.terminalSessions = []),
							(this.a = this.D(new t.$re())),
							(this.onDidTerminalChangeEvent = this.a.event);
					}
					addTerminalResult(a) {
						this.a.fire(a);
					}
				}
				e.$t8b = d;
				var m;
				(function (u) {
					(u[(u.newTerminal = 0)] = "newTerminal"),
						(u[(u.writingCommand = 1)] = "writingCommand"),
						(u[(u.writingResponse = 2)] = "writingResponse"),
						(u[(u.endTerminal = 3)] = "endTerminal"),
						(u[(u.none = 4)] = "none");
				})(m || (e.WriteTerminalState = m = {}));
				let r = class extends i.$1c {
					constructor(a) {
						super(), (this.a = a), (this.toolHandlers = new Map());
					}
					registerHandler(a, h, c, n) {
						this.toolHandlers.set(a, {
							paramName: h,
							returnName: c,
							handler: this.a.createInstance(n),
						});
					}
					registerInstantiatedHandler(a, h, c, n) {
						this.toolHandlers.set(a, {
							paramName: h,
							returnName: c,
							handler: n,
						});
					}
				};
				(e.$u8b = r),
					(e.$u8b = r = Ne([j(0, C.$Li)], r)),
					(0, E.$lK)(e.$s8b, r, E.InstantiationType.Delayed);
			},
		),
		