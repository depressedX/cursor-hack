define(de[3699], he([1, 0, 6, 3, 5, 1880]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$oLc = void 0);
			let C = class extends i.$1c {
				constructor(m, r, u) {
					super(),
						(this.c = m),
						(this.b = this.D(new t.$re())),
						(this.onDidChangeStackFrame = this.b.event),
						(this.a = this.D(u.createInstance(E.$nLc, m, r)));
				}
				collapseAll() {
					this.a.collapseAll();
				}
				update(m, r) {
					this.a.setFrames([
						m,
						...r.map(
							(u) =>
								new E.$kLc(
									u.label,
									u.uri,
									u.position?.lineNumber,
									u.position?.column,
								),
						),
					]);
				}
				layout(m, r) {
					this.a.layout(m ?? this.c.clientHeight, r);
				}
			};
			(e.$oLc = C), (e.$oLc = C = Ne([j(2, w.$Li)], C));
		}),
		define(
			de[3700],
			he([
				1, 0, 4, 30, 55, 52, 25, 3, 22, 40, 19, 87, 63, 21, 349, 11, 100, 8,
				220,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$s2c = void 0);
				let b = class extends d.$1c {
					constructor(l, y, $, v, S, I) {
						super(),
							(this.a = l),
							(this.b = y),
							(this.c = $),
							(this.f = v),
							(this.g = S),
							(this.h = I),
							this.j();
					}
					async j() {
						const l = this.a.getWorkspace().folders[0];
						if (
							!l ||
							this.a.getWorkbenchState() !== C.WorkbenchState.FOLDER ||
							(0, n.$H8)(this.a.getWorkspace())
						)
							return;
						const y = (await this.c.resolve(l.uri)).children?.map(
							($) => $.name,
						);
						if (Array.isArray(y)) {
							const $ = y.filter(C.$fj);
							$.length > 0 && this.m(l.uri, $);
						}
					}
					m(l, y) {
						const $ = {
							id: "workspaces.dontPromptToOpen",
							scope: r.NeverShowAgainScope.WORKSPACE,
							isSecondary: !0,
						};
						if (y.length === 1) {
							const v = y[0];
							this.b.prompt(
								r.Severity.Info,
								(0, t.localize)(
									11803,
									null,
									v,
									"https://go.microsoft.com/fwlink/?linkid=2025315",
								),
								[
									{
										label: (0, t.localize)(11804, null),
										run: () =>
											this.g.openWindow([{ workspaceUri: (0, u.$nh)(l, v) }]),
									},
								],
								{
									neverShowAgain: $,
									priority: this.h.isNew(c.StorageScope.WORKSPACE)
										? void 0
										: r.NotificationPriority.SILENT,
								},
							);
						} else
							y.length > 1 &&
								this.b.prompt(
									r.Severity.Info,
									(0, t.localize)(
										11805,
										null,
										"https://go.microsoft.com/fwlink/?linkid=2025315",
									),
									[
										{
											label: (0, t.localize)(11806, null),
											run: () => {
												this.f
													.pick(
														y.map((v) => ({ label: v })),
														{ placeHolder: (0, t.localize)(11807, null) },
													)
													.then((v) => {
														v &&
															this.g.openWindow([
																{ workspaceUri: (0, u.$nh)(l, v.label) },
															]);
													});
											},
										},
									],
									{
										neverShowAgain: $,
										priority: this.h.isNew(c.StorageScope.WORKSPACE)
											? void 0
											: r.NotificationPriority.SILENT,
									},
								);
					}
				};
				(e.$s2c = b),
					(e.$s2c = b =
						Ne(
							[
								j(0, C.$Vi),
								j(1, r.$4N),
								j(2, m.$ll),
								j(3, h.$DJ),
								j(4, a.$asb),
								j(5, c.$lq),
							],
							b,
						)),
					i.$Io
						.as(w.Extensions.Workbench)
						.registerWorkbenchContribution(b, E.LifecyclePhase.Eventually),
					(0, g.$4X)(
						class extends g.$3X {
							constructor() {
								super({
									id: "workbench.action.openWorkspaceFromEditor",
									title: (0, t.localize2)(11809, "Open Workspace"),
									f1: !1,
									menu: {
										id: g.$XX.EditorContent,
										when: o.$Kj.and(
											p.$BQb.Extension.isEqualTo(C.$0i),
											p.$TPb.isEqualTo(f.$PUb),
											p.$EPb.toNegated(),
										),
									},
								});
							}
							async run(s, l) {
								const y = s.get(a.$asb),
									$ = s.get(C.$Vi),
									v = s.get(r.$4N);
								if ($.getWorkbenchState() === C.WorkbenchState.WORKSPACE) {
									const S = $.getWorkspace().configuration;
									if (S && (0, u.$gh)(S, l)) {
										v.info((0, t.localize)(11808, null));
										return;
									}
								}
								return y.openWindow([{ workspaceUri: l }]);
							}
						},
					);
			},
		),
		define(
			de[3701],
			he([1, 0, 85, 25, 42, 124, 226, 83, 22]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Q8b = void 0);
				const r = !1;
				let u = class {
					constructor(h, c, n, g, p) {
						(this.a = h),
							(this.b = c),
							(this.c = n),
							(this.d = g),
							(this.e = p);
					}
					async call(h, c, n, g) {}
					async finish(h, c, n, g) {
						if (!c)
							throw new Error(
								"No edit parameters provided. Need to give at least the relative workspace path.",
							);
						const o = (
								await this.d.parallelSearch(c.query, c.topK, c.topK, {
									includePattern: c.includePattern,
									excludePattern: c.excludePattern,
								})
							).filter((b) => b.codeBlock),
							f = o.map(
								(b) =>
									new E.$0y({
										relativeWorkspacePath: b.codeBlock.relativeWorkspacePath,
										score: b.score,
										content: b.codeBlock.contents,
										originalContent: b.codeBlock.originalContents,
										detailedLines: b.codeBlock.detailedLines,
										range: new d.$Fs({
											startLineNumber: b.codeBlock.range?.startPosition?.line,
											startColumn: b.codeBlock.range?.startPosition?.column,
											endLineNumberInclusive:
												b.codeBlock.range?.endPosition?.line,
											endColumn: b.codeBlock.range?.endPosition?.column,
										}),
									}),
							);
						if (c.grabWholeFile) {
							const b = new Map();
							o.forEach((l) => {
								const { relativeWorkspacePath: y } = l?.codeBlock ?? {};
								if (!y) return;
								const $ = b.get(y) ?? [];
								$.push(l), b.set(y, $);
							});
							const s = Object.fromEntries(
								await Promise.all(
									[...b.entries()].map(async ([l, y]) => {
										const v = (
											await this.e.readFile(this.b.resolveRelativePath(l))
										).value.toString();
										return [l, v];
									}),
								),
							);
							return new E.$9y({ results: f, files: s });
						} else return new E.$9y({ results: f });
					}
				};
				(e.$Q8b = u),
					(e.$Q8b = u =
						Ne(
							[
								j(0, t.$kZ),
								j(1, i.$Vi),
								j(2, w.$MO),
								j(3, C.$J6b),
								j(4, m.$ll),
							],
							u,
						));
			},
		),
		define(
			de[3702],
			he([1, 0, 10, 61, 25, 42, 85, 17, 110, 697]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$7dd = void 0);
				let u = class {
					constructor(h, c, n, g, p, o, f) {
						(this.a = h),
							(this.b = c),
							(this.c = n),
							(this.d = g),
							(this.e = p),
							(this.f = o),
							(this.g = f),
							(this.language = "typescript"),
							(this.testingFramework = "mocha");
					}
					async runTest({
						testFileURI: h,
						testName: c,
						abortController: n,
						config: g,
					}) {
						const p = g.command,
							o = this.c.asRelativePath(h, !1);
						console.log("Running vitest test", p);
						let f = () => {},
							b;
						try {
							if (c !== void 0) {
								b = await this.d.createModelReference(h);
								const S = b.object.textEditorModel
									.getValue()
									.split(b.object.textEditorModel.getEOL());
								let I,
									T,
									P = S.findIndex((L) =>
										L.includes(`@cursor-agent:test-begin:${c}`),
									);
								if (P !== -1) {
									for (; P < S.length && S[P].includes("@cursor-agent"); ) P++;
									(T = S[P]), (I = P + 1);
								} else
									throw new Error(`Could not find test ${c} in file ${o}.`);
								const k =
									T.replace("test(", "test.only(").replace("it(", "it.only(") +
									`
`;
								b.object.textEditorModel.pushStackElement(),
									b.object.textEditorModel.pushEditOperations(
										null,
										[{ range: new d.$iL(I, 1, I + 1, 1), text: k }],
										() => null,
									),
									await this.e.save(h),
									await new Promise((L) => {
										setTimeout(L, 1e3), n.signal.addEventListener("abort", L);
									}),
									(f = () => {
										b?.object.textEditorModel.undo(), this.e.save(h);
									});
							}
							if (this.c.getWorkspace().folders.length === 0)
								throw new Error(
									"No workspace folder open; not able to run tests.",
								);
							const s = p.replace("$TEST_FILE_NAME", o);
							console.log("RUNTEST EXECUTING COMMAND", s);
							const l = this.c.getWorkspace().folders[0].uri,
								y = await this.f.exec2(s, {
									cwd: l.fsPath,
									maxBuffer: 1024 * 1024,
									timeout: 4e4,
								}),
								$ = y.error
									? `STDOUT:
${y.stdout}

STDERR:
${y.stderr}

ERROR:

Name: ${y.error.name}
Message: ${y.error.message}
Stack: ${y.error.stack}
Code: ${y.error.code}
Killed: ${y.error.killed}${y.error.killed ? " (could be because of a timeout)" : ""}`
									: `STDERR:
${y.stderr}

STDOUT:
${y.stdout}`;
							return console.log("RUNTEST RESULT", $), $;
						} finally {
							f(), b?.dispose();
						}
					}
					createTestBoilerplate({ interfaceName: h, interfacePath: c }) {
						return `
import { ${h}, New${h} } from "./${c.replace(/\.ts$/, "")}";
import * as assert from 'assert';
import * as sinon from 'sinon';


suite("${h}", () => {

  // @cursor-agent:add-tests-here

})
`;
					}
				};
				(e.$7dd = u),
					(e.$7dd = u =
						Ne(
							[
								j(0, t.$gj),
								j(1, i.$nM),
								j(2, w.$Vi),
								j(3, E.$MO),
								j(4, C.$kZ),
								j(5, m.$y7c),
								j(6, r.$19b),
							],
							u,
						));
			},
		),
		define(
			de[3703],
			he([1, 0, 10, 61, 25, 42, 85, 17, 110, 697]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$6dd = void 0);
				let u = class {
					constructor(h, c, n, g, p, o, f) {
						(this.a = h),
							(this.b = c),
							(this.c = n),
							(this.d = g),
							(this.e = p),
							(this.f = o),
							(this.g = f),
							(this.language = "typescript"),
							(this.testingFramework = "vitest");
					}
					async runTest({
						testFileURI: h,
						testName: c,
						abortController: n,
						config: g,
					}) {
						const p = g.command,
							o = this.c.asRelativePath(h, !1);
						console.log("Running vitest test", p);
						let f = () => {},
							b;
						try {
							if (c !== void 0) {
								b = await this.d.createModelReference(h);
								const S = b.object.textEditorModel
									.getValue()
									.split(b.object.textEditorModel.getEOL());
								let I,
									T,
									P = S.findIndex((L) =>
										L.includes(`@cursor-agent:test-begin:${c}`),
									);
								if (P !== -1) {
									for (; P < S.length && S[P].includes("@cursor-agent"); ) P++;
									(T = S[P]), (I = P + 1);
								} else
									throw new Error(`Could not find test ${c} in file ${o}.`);
								const k =
									T.replace("it(", "it.only(") +
									`
`;
								b.object.textEditorModel.pushStackElement(),
									b.object.textEditorModel.pushEditOperations(
										null,
										[{ range: new d.$iL(I, 1, I + 1, 1), text: k }],
										() => null,
									),
									await this.e.save(h),
									(f = () => {
										b?.object.textEditorModel.undo(), this.e.save(h);
									});
							}
							if (this.c.getWorkspace().folders.length === 0)
								throw new Error(
									"No workspace folder open; not able to run tests.",
								);
							const s = p.replace("$TEST_FILE_NAME", o);
							console.log("RUNTEST EXECUTING COMMAND", s);
							const l = this.c.getWorkspace().folders[0].uri,
								y = await this.f.exec2(s, {
									cwd: l.fsPath,
									maxBuffer: 1024 * 1024,
									timeout: 4e4,
								}),
								$ = y.error
									? `STDOUT:
${y.stdout}

STDERR:
${y.stderr}

ERROR:

Name: ${y.error.name}
Message: ${y.error.message}
Stack: ${y.error.stack}
Code: ${y.error.code}
Killed: ${y.error.killed}${y.error.killed ? " (could be because of a timeout)" : ""}`
									: `STDERR:
${y.stderr}

STDOUT:
${y.stdout}`;
							return console.log("RUNTEST RESULT", $), $;
						} finally {
							f(), b?.dispose();
						}
					}
					createTestBoilerplate({ interfaceName: h, interfacePath: c }) {
						return `
import { ${h}, New${h} } from "./${c.replace(/\.ts$/, "")}";
import { describe, it, expect } from "vitest";


describe("${h}", () => {

  // @cursor-agent:add-tests-here

})
`;
					}
				};
				(e.$6dd = u),
					(e.$6dd = u =
						Ne(
							[
								j(0, t.$gj),
								j(1, i.$nM),
								j(2, w.$Vi),
								j(3, E.$MO),
								j(4, C.$kZ),
								j(5, m.$y7c),
								j(6, r.$19b),
							],
							u,
						));
			},
		),
		define(
			de[1887],
			he([1, 0, 20, 5, 10, 61, 25, 42, 85, 110, 697, 3703, 3702]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$9dd = e.$8dd = void 0),
					(e.$8dd = (0, i.$Mi)("runTestService"));
				let c = class {
					constructor(g, p, o, f, b, s, l, y) {
						(this.a = g),
							(this.b = p),
							(this.c = o),
							(this.d = f),
							(this.e = b),
							(this.f = s),
							(this.g = l),
							(this.h = y),
							this.g.registerSimpleTestProvider(y.createInstance(a.$6dd)),
							this.g.registerSimpleTestProvider(y.createInstance(h.$7dd));
					}
					runTest({ testFileURI: g, testName: p, abortController: o }) {
						const f = this.g.getTestConfig(g);
						if (f === void 0)
							throw new Error(
								`Could not find test configuration for file ${g}. Please configure in your settings.json for the language and directory.`,
							);
						if (
							f.testingFramework !== "vitest" &&
							f.testingFramework !== "mocha"
						)
							throw new Error(
								`Testing framework ${f.testingFramework} not supported.`,
							);
						const b = this.g.getProvider(g);
						if (b === void 0)
							throw new Error(
								`Could not find provider for testing framework ${f.testingFramework}.`,
							);
						return b.runTest({
							testFileURI: g,
							testName: p,
							abortController: o,
							config: f,
						});
					}
				};
				(e.$9dd = c),
					(e.$9dd = c =
						Ne(
							[
								j(0, w.$gj),
								j(1, E.$nM),
								j(2, C.$Vi),
								j(3, d.$MO),
								j(4, m.$kZ),
								j(5, r.$y7c),
								j(6, u.$19b),
								j(7, i.$Li),
							],
							c,
						)),
					(0, t.$lK)(e.$8dd, c, t.InstantiationType.Delayed);
			},
		),
		define(
			de[3704],
			he([1, 0, 4, 187, 586, 15, 188, 17, 104, 85, 22, 42, 423, 20]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$wvc = void 0),
					(t = mt(t)),
					(i = mt(i));
				let n = class {
					constructor(p, o, f) {
						(this.b = p), (this.c = o), (this.d = f), (this.a = new E.$Th());
					}
					write(p, o) {
						return Promise.resolve(this.a.queue(() => this.e(p, o)));
					}
					async e(p, o) {
						const f = await this.k(p, !0);
						try {
							await this.f(f.object.textEditorModel, o);
						} finally {
							f.dispose();
						}
					}
					async f(p, o) {
						let f = !1;
						for (const b of o) {
							const s = this.h(p, b)[0];
							f = !!s && this.g(s, p);
						}
						if (f) return this.d.save(p.uri);
					}
					g(p, o) {
						const f = o.getPositionAt(p.offset),
							b = o.getPositionAt(p.offset + p.length),
							s = new d.$iL(f.lineNumber, f.column, b.lineNumber, b.column),
							l = o.getValueInRange(s);
						if (p.content !== l) {
							const y = l
								? C.$jL.replace(s, p.content)
								: C.$jL.insert(f, p.content);
							return (
								o.pushEditOperations(
									[new m.$kL(f.lineNumber, f.column, f.lineNumber, f.column)],
									[y],
									() => [],
								),
								!0
							);
						}
						return !1;
					}
					h(p, o) {
						const { tabSize: f, insertSpaces: b } = p.getOptions(),
							s = p.getEOL(),
							{ path: l, value: y } = o;
						if (!l.length) {
							const $ = JSON.stringify(y, null, b ? " ".repeat(f) : "	");
							return [{ content: $, length: $.length, offset: 0 }];
						}
						return (0, w.$ro)(p.getValue(), l, y, {
							tabSize: f,
							insertSpaces: b,
							eol: s,
						});
					}
					async i(p) {
						return (
							(await this.b.exists(p)) ||
								(await this.d.write(p, "{}", { encoding: "utf8" })),
							this.c.createModelReference(p)
						);
					}
					j(p) {
						const o = [];
						return (
							i.$do(p.getValue(), o, {
								allowTrailingComma: !0,
								allowEmptyContent: !0,
							}),
							o.length > 0
						);
					}
					async k(p, o) {
						const f = await this.i(p),
							b = f.object.textEditorModel;
						return this.j(b)
							? (f.dispose(), this.l(h.JSONEditingErrorCode.ERROR_INVALID_FILE))
							: f;
					}
					l(p) {
						const o = this.m(p);
						return Promise.reject(new h.$_Qb(o, p));
					}
					m(p) {
						switch (p) {
							case h.JSONEditingErrorCode.ERROR_INVALID_FILE:
								return t.localize(12156, null);
						}
					}
				};
				(e.$wvc = n),
					(e.$wvc = n = Ne([j(0, u.$ll), j(1, a.$MO), j(2, r.$kZ)], n)),
					(0, c.$lK)(h.$$Qb, n, c.InstantiationType.Delayed);
			},
		),
		define(
			de[3705],
			he([
				1, 0, 12, 113, 40, 423, 704, 672, 142, 60, 119, 84, 4, 50, 85, 3426, 18,
				87, 57, 62, 20,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				const l = "workbench.view.extensions";
				let y = class {
					constructor(S, I, T, P, k, L, D, M, N, A, R, O) {
						(this.a = S),
							(this.b = I),
							(this.c = T),
							(this.d = P),
							(this.e = k),
							(this.f = L),
							(this.g = D),
							(this.h = M),
							(this.i = N),
							(this.j = A),
							(this.k = R),
							(this.m = O);
					}
					async n() {
						try {
							const S = await this.h.read(this.b.argvResource, {
								encoding: "utf8",
							});
							(0, g.parse)(S.value);
						} catch {
							return (
								this.c.notify({
									severity: w.Severity.Error,
									message: (0, h.localize)(12563, null),
									actions: {
										primary: [
											(0, c.$wj)({
												id: "openArgv",
												label: (0, h.localize)(12564, null),
												run: () =>
													this.i.openEditor({ resource: this.b.argvResource }),
											}),
										],
									},
								}),
								!1
							);
						}
						return !0;
					}
					async o(S) {
						return (await this.n())
							? (await this.a.write(
									this.b.argvResource,
									[{ path: ["locale"], value: S }],
									!0,
								),
								!0)
							: !1;
					}
					async setLocale(S, I = !1) {
						const T = S.id;
						if (
							T === t.Language.value() ||
							(!T && t.Language.isDefaultVariant())
						)
							return;
						const P = await this.d.getInstalledLanguages();
						try {
							if (!P.some((k) => k.id === S.id)) {
								if (
									S.galleryExtension?.publisher.toLowerCase() !== "ms-ceintl"
								) {
									(
										(
											await this.e.openPaneComposite(
												l,
												r.ViewContainerLocation.Sidebar,
											)
										)?.getViewPaneContainer()
									).search(`@id:${S.extensionId}`);
									return;
								}
								await this.g.withProgress(
									{
										location: a.ProgressLocation.Notification,
										title: (0, h.localize)(12565, null, S.label),
									},
									(k) =>
										this.f.installFromGallery(S.galleryExtension, {
											isMachineScoped: !1,
										}),
								);
							}
							if (!I && !(await this.p(S.label))) return;
							await this.o(T), await this.k.restart();
						} catch (k) {
							this.c.error(k);
						}
					}
					async clearLocalePreference() {
						try {
							await this.o(void 0),
								t.Language.isDefaultVariant() || (await this.p("English"));
						} catch (S) {
							this.c.error(S);
						}
					}
					async p(S) {
						const { confirmed: I } = await this.j.confirm({
							message: (0, h.localize)(12566, null, this.m.nameLong, S),
							detail: (0, h.localize)(12567, null, S, this.m.nameLong),
							primaryButton: (0, h.localize)(12568, null),
						});
						return I;
					}
				};
				y = Ne(
					[
						j(0, E.$$Qb),
						j(1, i.$Ti),
						j(2, w.$4N),
						j(3, d.$FJ),
						j(4, m.$6Sb),
						j(5, u.$Hp),
						j(6, a.$8N),
						j(7, n.$kZ),
						j(8, p.$IY),
						j(9, f.$GO),
						j(10, o.$asb),
						j(11, b.$Bk),
					],
					y,
				);
				let $ = class {
					constructor(S) {
						this.a = S;
					}
					async getExtensionIdProvidingCurrentLocale() {
						const S = t.Language.value();
						return S === t.$j
							? void 0
							: (await this.a.getInstalledLanguages()).find((P) => P.id === S)
									?.extensionId;
					}
				};
				($ = Ne([j(0, d.$FJ)], $)),
					(0, s.$lK)(C.$7Sb, y, s.InstantiationType.Delayed),
					(0, s.$lK)(C.$8Sb, $, s.InstantiationType.Delayed);
			},
		),
		define(
			de[3706],
			he([
				1, 0, 454, 6, 3, 67, 42, 90, 25, 85, 17, 741, 200, 58, 110, 291, 393,
				33, 19, 69, 74, 84, 199, 61, 18, 22,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
				$,
				v,
				S,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Jdd = void 0);
				let I = class extends w.$1c {
					constructor(k, L, D, M, N, A, R, O, B, U, z) {
						super(),
							(this.b = k),
							(this.c = L),
							(this.g = D),
							(this.h = M),
							(this.j = N),
							(this.n = A),
							(this.q = R),
							(this.s = O),
							(this.t = B),
							(this.u = U),
							(this.w = z),
							(this.a = new a.$Opb(1));
					}
					keepalive() {
						this.y !== void 0 && (clearTimeout(this.y), (this.y = void 0)),
							(this.y = setTimeout(
								() => {
									this.s.closeWindow();
								},
								c.$7V * 60 * 1e3,
							));
					}
					async z(k, L) {
						let D = k,
							M = (0, f.$mh)(k);
						for (; !(await this.w.exists(M)) && (0, f.$mh)(M) !== M; )
							(D = M), (M = (0, f.$mh)(M));
						return (
							await this.c.write(k, L.initialContent),
							{
								dispose: async () => {
									await this.w.del(k),
										f.$dh.isEqual(D, k) ||
											(await this.w.del(D, { recursive: !0 }));
								},
							}
						);
					}
					async acquire() {
						if ((this.keepalive(), this.a.getCount() > 10))
							throw new Error(
								"Too many waiting calls; rejecting for back pressure.",
							);
						return (
							await this.a.acquire(),
							{
								dispose: () => {
									this.a.release();
								},
							}
						);
					}
					async shadowHealthCheck(k) {
						return this.keepalive(), new t.$sx();
					}
					async getLintsForChange(k) {
						const M = new Set();
						this.c.files.models.forEach((R) => {
							R.textEditorModel && M.add(R.textEditorModel.id),
								R.isDirty() && R.revert();
						});
						let N = [];
						const A = [];
						try {
							let R = !1;
							if (
								((N = await Promise.all(
									k.files.map(async (F) => {
										const x = this.j.resolveRelativePath(
											F.relativeWorkspacePath,
										);
										let H;
										try {
											const G = await this.h.createModelReference(x);
											A.push(G),
												(H = G.object.textEditorModel),
												M.has(H.id) || (R = !0);
										} catch {
											const K =
												this.u.createByLanguageNameOrFilepathOrFirstLine(
													null,
													x,
													F.finalContent
														.split(`
`)
														.at(0) ?? "",
												);
											if (
												k.doNotUseInProdNewFilesShouldBeTemporarilyCreatedForIncreasedAccuracy
											) {
												const W = await this.z(x, F);
												A.push(W);
											}
											const J = this.b.createModel(F.initialContent, K, x);
											(H = J), A.push(J), (R = !0);
										}
										const q = await this.q.openEditor({
											resource: x,
											options: { pinned: !1 },
										});
										A.push({
											dispose: async () => {
												const G = q?.input;
												if (G === void 0) return;
												const K = q?.group?.id;
												K !== void 0 && (await G.revert(K));
											},
										});
										const V = await this.n.computeMoreMinimalEdits(H.uri, [
											{ text: F.initialContent, range: H.getFullModelRange() },
										]);
										return (
											V !== void 0 && H.pushEditOperations(null, V, () => null),
											H.pushStackElement(),
											{ file: F, model: H }
										);
									}),
								)),
								R)
							) {
								let F;
								const x = new Promise((q, V) => {
									F = q;
								});
								A.push(
									i.Event.once(this.g.onMarkerChanged)((q) => {
										F("markerChanged");
									}),
								);
								for (const q of N)
									q.model.pushEditOperations(
										null,
										[
											{
												text: "THIS SHOULD BE A LINTER ERROR",
												range: new u.$iL(1, 1, 1, 1),
											},
										],
										() => null,
									);
								(await Promise.race([
									x,
									new Promise((q) => {
										setTimeout(() => {
											q("timedout");
										}, 2e4);
									}),
								])) === "timedout" &&
									console.warn("Timed out waiting for markers to show up");
								for (const q of N) {
									q.model.undo();
									const V = this.g.read({ resource: q.model.uri });
								}
							}
							await new Promise((F) => {
								setTimeout(
									() => {
										F(void 0);
									},
									R ? 4e3 : 2e3,
								);
							});
							const O = new Map();
							for (const F of N) {
								const x = this.g.read({ resource: F.model.uri }),
									H = F.model.deltaDecorations(
										[],
										x.map((q) => ({
											range: u.$iL.lift(q),
											options: { description: "Lint error" },
										})),
									);
								O.set(
									F.model.id,
									x.map((q, V) => ({ marker: q, decorationId: H[V] })),
								);
							}
							const B = [];
							for (const F of N) {
								const x = await this.n.computeMoreMinimalEdits(F.model.uri, [
									{
										text: F.file.finalContent,
										range: F.model.getFullModelRange(),
									},
								]);
								x !== void 0 &&
									(F.model.pushEditOperations(null, x, () => null),
									B.push(F.model));
							}
							await new Promise((F) => {
								setTimeout(() => {
									F(void 0);
								}, 2e3);
							});
							const U = [];
							for (const F of N) {
								const x = this.g.read({ resource: F.model.uri }),
									H = O.get(F.model.id),
									q = x.filter((V) => {
										const G =
											F.file.getAllLintsNotJustDeltaLintsForRangesInFinalModel
												?.ranges;
										if (G !== void 0) {
											for (const K of G)
												if (u.$iL.lift(K).intersectRanges(V) !== null)
													return !0;
										}
										return H === void 0
											? !0
											: !H.some((K) => {
													const J = F.model.getDecorationRange(K.decorationId);
													return (
														K.marker.message === V.message &&
														K.marker.code === V.code &&
														K.marker.severity === V.severity &&
														K.marker.source === V.source &&
														u.$iL.lift(V).equalsRange(u.$iL.lift(J))
													);
												});
									});
								U.push(...q),
									H !== void 0 &&
										F.model.deltaDecorations(
											H.map((V) => V.decorationId),
											[],
										);
							}
							let z;
							if (k.includeQuickFixes) {
								const F = new o.$Ce(),
									x = setTimeout(() => F.cancel(), 5e3),
									H = F.token;
								(z = await Promise.all(
									U.map(async (q) => {
										const V = N.find((G) =>
											f.$dh.isEqual(G.model.uri, q.resource),
										)?.model;
										if (V === void 0)
											return (
												console.error("Could not find model for marker", q), []
											);
										try {
											return await this.getQuickFixes(q, V, H);
										} catch (G) {
											return (
												console.error(
													"Error getting quick fixes for marker",
													q,
													G,
												),
												[]
											);
										}
									}),
								)),
									clearTimeout(x);
							}
							for (const F of B) F.undo();
							return new t.$xx({
								lints: U.map((F, x) => {
									const H = z?.at(x) ?? [];
									return new t.$yx({
										message: F.message,
										severity: d.MarkerSeverity.toString(F.severity),
										relativeWorkspacePath: this.j.asRelativePath(F.resource),
										startLineNumberOneIndexed: F.startLineNumber,
										startColumnOneIndexed: F.startColumn,
										endLineNumberInclusiveOneIndexed: F.endLineNumber,
										endColumnOneIndexed: F.endColumn,
										quickFixes: H,
									});
								}),
							});
						} finally {
							for (const R of [...A].reverse())
								try {
									await R.dispose();
								} catch (O) {
									console.error("Error disposing disposable. Continuing.", O);
								}
						}
					}
					async getQuickFixes(k, L, D) {
						const M = this.t.codeActionProvider,
							N = await (0, p.$UAb)(
								M,
								L,
								u.$iL.lift(k),
								{
									type: s.CodeActionTriggerType.Auto,
									triggerAction: g.CodeActionTriggerSource.QuickFix,
								},
								l.$0N.None,
								D,
							);
						try {
							const A = [];
							for (const R of N.validActions) {
								if (
									R.action.disabled ||
									R.action.kind !== g.$GAb.QuickFix.value
								)
									continue;
								const O = R.action.edit?.edits ?? [],
									B = [];
								for (const U of O)
									y.$tzb.is(U) &&
										B.push(
											new t.$Ax({
												relativeWorkspacePath: this.j.asRelativePath(
													U.resource,
												),
												text: U.textEdit.text,
												startLineNumberOneIndexed:
													U.textEdit.range.startLineNumber,
												startColumnOneIndexed: U.textEdit.range.startColumn,
												endLineNumberInclusiveOneIndexed:
													U.textEdit.range.endLineNumber,
												endColumnOneIndexed: U.textEdit.range.endColumn,
											}),
										);
								A.push(
									new t.$zx({
										message: R.action.title,
										kind: R.action.kind,
										isPreferred: R.action.isPreferred,
										edits: B,
									}),
								);
							}
							return A;
						} finally {
							N.dispose();
						}
					}
				};
				(e.$Jdd = I),
					Ne([T], I.prototype, "getLintsForChange", null),
					(e.$Jdd = I =
						Ne(
							[
								j(0, E.$QO),
								j(1, r.$kZ),
								j(2, d.$aM),
								j(3, C.$MO),
								j(4, m.$Vi),
								j(5, h.$Cxb),
								j(6, v.$IY),
								j(7, n.$y7c),
								j(8, b.$k3),
								j(9, $.$nM),
								j(10, S.$ll),
							],
							I,
						));
				function T(P, k, L) {
					const D = L.value;
					return (
						(L.value = async function (...M) {
							const N = await this.acquire();
							try {
								return await D.apply(this, M);
							} finally {
								N.dispose();
							}
						}),
						L
					);
				}
			},
		),
		define(
			de[3707],
			he([1, 0, 3, 20, 5, 151, 1871, 3706]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Kdd = void 0);
				let m = class extends t.$1c {
					constructor(u, a) {
						super(),
							(this.a = u),
							(this.b = a),
							this.a.shadowWindowForWorkspaceId &&
								(this.server = this.b.createInstance(d.$Jdd));
					}
					getServer() {
						if (!this.a.shadowWindowForWorkspaceId || !this.server)
							throw new Error(
								"Shadow workspace server not allowed, because this is not a shadow window!",
							);
						return this.server;
					}
				};
				(e.$Kdd = m),
					(e.$Kdd = m = Ne([j(0, E.$ucd), j(1, w.$Li)], m)),
					(0, i.$lK)(C.$lqc, m, i.InstantiationType.Delayed);
			},
		),
		define(
			de[3708],
			he([1, 0, 10, 125, 12, 23, 21, 78, 20, 143]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Qvc = void 0);
				let u = class {
					constructor(h, c, n, g) {
						(this.b = h),
							(this.c = n),
							(this.d = g),
							(this.a = null),
							c.getEnvironment().then((p) => (this.a = p));
					}
					getEOL(h, c) {
						const n = this.b.getValue("files.eol", {
							overrideIdentifier: c,
							resource: h,
						});
						if (n && typeof n == "string" && n !== "auto") return n;
						const g = this.e(h);
						return g === w.OperatingSystem.Linux ||
							g === w.OperatingSystem.Macintosh
							? `
`
							: `\r
`;
					}
					e(h) {
						let c = w.OS;
						const n = this.c.remoteAuthority;
						if (n && h && h.scheme !== E.Schemas.file) {
							const g = `resource.authority.os.${n}`;
							(c = this.a
								? this.a.os
								: this.d.getNumber(g, C.StorageScope.WORKSPACE, w.OS)),
								this.d.store(
									g,
									c,
									C.StorageScope.WORKSPACE,
									C.StorageTarget.MACHINE,
								);
						}
						return c;
					}
				};
				(e.$Qvc = u),
					(e.$Qvc = u =
						Ne([j(0, t.$gj), j(1, r.$$m), j(2, d.$r8), j(3, C.$lq)], u)),
					(0, m.$lK)(i.$YO, u, m.InstantiationType.Delayed);
			},
		),
		define(
			de[3709],
			he([1, 0, 4, 175, 51, 97, 30, 3, 244, 102, 94]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$imc = void 0),
					(t = mt(t));
				const a = C.$Io.as(w.$uP.ColorContribution),
					h = a.getColorReferenceSchema(),
					c = "^\\w+[.\\w+]*$",
					n = i.$n2.registerExtensionPoint({
						extensionPoint: "colors",
						jsonSchema: {
							description: t.localize(12713, null),
							type: "array",
							items: {
								type: "object",
								properties: {
									id: {
										type: "string",
										description: t.localize(12714, null),
										pattern: c,
										patternErrorMessage: t.localize(12715, null),
									},
									description: {
										type: "string",
										description: t.localize(12716, null),
									},
									defaults: {
										type: "object",
										properties: {
											light: {
												description: t.localize(12717, null),
												type: "string",
												anyOf: [h, { type: "string", format: "color-hex" }],
											},
											dark: {
												description: t.localize(12718, null),
												type: "string",
												anyOf: [h, { type: "string", format: "color-hex" }],
											},
											highContrast: {
												description: t.localize(12719, null),
												type: "string",
												anyOf: [h, { type: "string", format: "color-hex" }],
											},
											highContrastLight: {
												description: t.localize(12720, null),
												type: "string",
												anyOf: [h, { type: "string", format: "color-hex" }],
											},
										},
										required: ["light", "dark"],
									},
								},
							},
						},
					});
				class g {
					constructor() {
						n.setHandler((f, b) => {
							for (const s of b.added) {
								const l = s.value,
									y = s.collector;
								if (!l || !Array.isArray(l)) {
									y.error(t.localize(12721, null));
									return;
								}
								const $ = (v, S) =>
									v.length > 0
										? v[0] === "#"
											? E.$UL.Format.CSS.parseHex(v)
											: v
										: (y.error(t.localize(12722, null, S)), E.$UL.red);
								for (const v of l) {
									if (typeof v.id != "string" || v.id.length === 0) {
										y.error(t.localize(12723, null));
										return;
									}
									if (!v.id.match(c)) {
										y.error(t.localize(12724, null));
										return;
									}
									if (typeof v.description != "string" || v.id.length === 0) {
										y.error(t.localize(12725, null));
										return;
									}
									const S = v.defaults;
									if (
										!S ||
										typeof S != "object" ||
										typeof S.light != "string" ||
										typeof S.dark != "string"
									) {
										y.error(t.localize(12726, null));
										return;
									}
									if (S.highContrast && typeof S.highContrast != "string") {
										y.error(t.localize(12727, null));
										return;
									}
									if (
										S.highContrastLight &&
										typeof S.highContrastLight != "string"
									) {
										y.error(t.localize(12728, null));
										return;
									}
									a.registerColor(
										v.id,
										{
											light: $(S.light, "configuration.colors.defaults.light"),
											dark: $(S.dark, "configuration.colors.defaults.dark"),
											hcDark: $(
												S.highContrast ?? S.dark,
												"configuration.colors.defaults.highContrast",
											),
											hcLight: $(
												S.highContrastLight ?? S.light,
												"configuration.colors.defaults.highContrastLight",
											),
										},
										v.description,
									);
								}
							}
							for (const s of b.removed) {
								const l = s.value;
								for (const y of l) a.deregisterColor(y.id);
							}
						});
					}
				}
				e.$imc = g;
				class p extends d.$1c {
					constructor() {
						super(...arguments), (this.type = "table");
					}
					shouldRender(f) {
						return !!f.contributes?.colors;
					}
					render(f) {
						const b = f.contributes?.colors || [];
						if (!b.length)
							return { data: { headers: [], rows: [] }, dispose: () => {} };
						const s = [
								t.localize(12729, null),
								t.localize(12730, null),
								t.localize(12731, null),
								t.localize(12732, null),
								t.localize(12733, null),
							],
							l = ($) => ($[0] === "#" ? E.$UL.fromHex($) : void 0),
							y = b
								.sort(($, v) => $.id.localeCompare(v.id))
								.map(($) => [
									new u.$cl().appendMarkdown(`\`${$.id}\``),
									$.description,
									l($.defaults.dark) ??
										new u.$cl().appendMarkdown(`\`${$.defaults.dark}\``),
									l($.defaults.light) ??
										new u.$cl().appendMarkdown(`\`${$.defaults.light}\``),
									l($.defaults.highContrast) ??
										new u.$cl().appendMarkdown(
											`\`${$.defaults.highContrast}\``,
										),
								]);
						return { data: { headers: s, rows: y }, dispose: () => {} };
					}
				}
				C.$Io
					.as(m.Extensions.ExtensionFeaturesRegistry)
					.registerExtensionFeature({
						id: "colors",
						label: t.localize(12734, null),
						access: { canToggle: !1 },
						renderer: new r.$Ji(p),
					});
			},
		),
		define(
			de[1321],
			he([1, 0, 4, 30, 250, 51, 778]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Yvc = e.$Xvc = e.$Wvc = void 0),
					(e.$Zvc = u),
					(t = mt(t));
				const d = [
					"comment",
					"comment.block",
					"comment.block.documentation",
					"comment.line",
					"constant",
					"constant.character",
					"constant.character.escape",
					"constant.numeric",
					"constant.numeric.integer",
					"constant.numeric.float",
					"constant.numeric.hex",
					"constant.numeric.octal",
					"constant.other",
					"constant.regexp",
					"constant.rgb-value",
					"emphasis",
					"entity",
					"entity.name",
					"entity.name.class",
					"entity.name.function",
					"entity.name.method",
					"entity.name.section",
					"entity.name.selector",
					"entity.name.tag",
					"entity.name.type",
					"entity.other",
					"entity.other.attribute-name",
					"entity.other.inherited-class",
					"invalid",
					"invalid.deprecated",
					"invalid.illegal",
					"keyword",
					"keyword.control",
					"keyword.operator",
					"keyword.operator.new",
					"keyword.operator.assignment",
					"keyword.operator.arithmetic",
					"keyword.operator.logical",
					"keyword.other",
					"markup",
					"markup.bold",
					"markup.changed",
					"markup.deleted",
					"markup.heading",
					"markup.inline.raw",
					"markup.inserted",
					"markup.italic",
					"markup.list",
					"markup.list.numbered",
					"markup.list.unnumbered",
					"markup.other",
					"markup.quote",
					"markup.raw",
					"markup.underline",
					"markup.underline.link",
					"meta",
					"meta.block",
					"meta.cast",
					"meta.class",
					"meta.function",
					"meta.function-call",
					"meta.preprocessor",
					"meta.return-type",
					"meta.selector",
					"meta.tag",
					"meta.type.annotation",
					"meta.type",
					"punctuation.definition.string.begin",
					"punctuation.definition.string.end",
					"punctuation.separator",
					"punctuation.separator.continuation",
					"punctuation.terminator",
					"storage",
					"storage.modifier",
					"storage.type",
					"string",
					"string.interpolated",
					"string.other",
					"string.quoted",
					"string.quoted.double",
					"string.quoted.other",
					"string.quoted.single",
					"string.quoted.triple",
					"string.regexp",
					"string.unquoted",
					"strong",
					"support",
					"support.class",
					"support.constant",
					"support.function",
					"support.other",
					"support.type",
					"support.type.property-name",
					"support.variable",
					"variable",
					"variable.language",
					"variable.name",
					"variable.other",
					"variable.other.readwrite",
					"variable.parameter",
				];
				(e.$Wvc = "vscode://schemas/textmate-colors"),
					(e.$Xvc = `${e.$Wvc}#/definitions/colorGroup`);
				const m = {
					type: "array",
					definitions: {
						colorGroup: {
							default: "#FF0000",
							anyOf: [
								{ type: "string", format: "color-hex" },
								{ $ref: "#/definitions/settings" },
							],
						},
						settings: {
							type: "object",
							description: t.localize(12743, null),
							properties: {
								foreground: {
									type: "string",
									description: t.localize(12744, null),
									format: "color-hex",
									default: "#ff0000",
								},
								background: {
									type: "string",
									deprecationMessage: t.localize(12745, null),
								},
								fontStyle: {
									type: "string",
									description: t.localize(12746, null),
									pattern:
										"^(\\s*\\b(italic|bold|underline|strikethrough))*\\s*$",
									patternErrorMessage: t.localize(12747, null),
									defaultSnippets: [
										{ label: t.localize(12748, null), bodyText: '""' },
										{ body: "italic" },
										{ body: "bold" },
										{ body: "underline" },
										{ body: "strikethrough" },
										{ body: "italic bold" },
										{ body: "italic underline" },
										{ body: "italic strikethrough" },
										{ body: "bold underline" },
										{ body: "bold strikethrough" },
										{ body: "underline strikethrough" },
										{ body: "italic bold underline" },
										{ body: "italic bold strikethrough" },
										{ body: "italic underline strikethrough" },
										{ body: "bold underline strikethrough" },
										{ body: "italic bold underline strikethrough" },
									],
								},
							},
							additionalProperties: !1,
							defaultSnippets: [
								{
									body: { foreground: "${1:#FF0000}", fontStyle: "${2:bold}" },
								},
							],
						},
					},
					items: {
						type: "object",
						defaultSnippets: [
							{
								body: {
									scope: "${1:keyword.operator}",
									settings: { foreground: "${2:#FF0000}" },
								},
							},
						],
						properties: {
							name: { type: "string", description: t.localize(12749, null) },
							scope: {
								description: t.localize(12750, null),
								anyOf: [
									{ enum: d },
									{ type: "string" },
									{ type: "array", items: { enum: d } },
									{ type: "array", items: { type: "string" } },
								],
							},
							settings: { $ref: "#/definitions/settings" },
						},
						required: ["settings"],
						additionalProperties: !1,
					},
				};
				e.$Yvc = "vscode://schemas/color-theme";
				const r = {
					type: "object",
					allowComments: !0,
					allowTrailingCommas: !0,
					properties: {
						colors: {
							description: t.localize(12751, null),
							$ref: E.$HP,
							additionalProperties: !1,
						},
						tokenColors: {
							anyOf: [
								{ type: "string", description: t.localize(12752, null) },
								{ description: t.localize(12753, null), $ref: e.$Wvc },
							],
						},
						semanticHighlighting: {
							type: "boolean",
							description: t.localize(12754, null),
						},
						semanticTokenColors: {
							type: "object",
							description: t.localize(12755, null),
							$ref: C.$omc,
						},
					},
				};
				function u() {
					const a = i.$Io.as(w.$Jo.JSONContribution);
					a.registerSchema(e.$Yvc, r), a.registerSchema(e.$Wvc, m);
				}
			},
		),
		