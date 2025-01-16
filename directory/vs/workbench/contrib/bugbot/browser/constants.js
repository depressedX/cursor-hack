define(de[789], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$$cc =
					e.$0cc =
					e.$9cc =
					e.$8cc =
					e.$7cc =
					e.$6cc =
					e.$5cc =
					e.$4cc =
						void 0),
				(e.$4cc = 1),
				(e.$5cc = 100),
				(e.$6cc = 10),
				(e.$7cc = {
					enabled: !1,
					isSubsidized: !1,
					backgroundCallFrequencyMs: 3 * 60 * 60 * 1e3,
					killSwitch: !1,
					showIntrusiveNotificationOnlyIfLastTimeWasMoreThanMsAgo: 10,
					backgroundDiffAbsoluteMaxTokens: 128e3,
					backgroundDiffMinMinTokenThreshold: 2e3,
					backgroundDiffMinMaxTokenThreshold: 5e4,
					defaultDiffContextLines: 10,
					defaultFallbackIterations: 12,
					diffAbsoluteMaxTokens: 5e5,
					backgroundDiffLastCommitLessThanThisManyMsAgo: 1e3 * 60 * 15,
					customInstructionsMaxCharLength: 4e3,
					thresholdForExpensiveRunModalCents: 10 * 100,
					backgroundUnifiedContextLines: 10,
					backgroundDiffIncludeUncommitted: !1,
					cheapModelName: "accounts/anysphere/models/bugbot-12-10",
					cheapAbsoluteMaxTokens: 15e4,
					expensiveAbsoluteMaxTokens: 15e5,
				}),
				(e.$8cc = {
					none: "None",
					generating: "Generating",
					errored: "Errored",
					completed: "Completed",
				}),
				(e.$9cc = 0),
				(e.$0cc = [
					{
						type: "text",
						content:
							"Bug Finder analyzes code changes between your current branch and the main branch in your Git remote repository.",
					},
					{
						type: "text",
						content:
							"For the best results, run it on feature branches before merging into main to catch potential issues early in development. Cost increases with the number of lines changed.",
					},
				]),
				(e.$$cc = [
					...e.$0cc,
					{ type: "text", content: "" },
					{
						type: "highlight",
						before:
							"AI-powered bug detection is still experimental and may not catch all issues in your code. ",
						highlight: "You may lose your money and get zero valid bugs back.",
						after: " Please use at your own risk.",
					},
					{ type: "text", content: "" },
					{
						type: "text",
						content:
							"We're hoping to make the bug finder both much more accurate and much cheaper in the coming months.",
					},
				]);
		}),
		define(
			de[3004],
			he([1, 0, 21, 25, 1718, 193, 47, 789]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$bdc = m),
					(e.$cdc = u);
				function m(a) {
					return a.getWorkbenchState() === i.WorkbenchState.EMPTY
						? t.StorageScope.APPLICATION
						: t.StorageScope.WORKSPACE;
				}
				function r(a) {
					let h = a.allBugBots.filter((c) => c.status.type === "completed");
					return (
						(h = h.map((c) => ({ ...(0, w.$_cc)(c.bugbotId), ...c }))),
						(h = h.sort((c, n) => {
							const g = c.lastUpdatedAt ?? c.createdAt;
							return (n.lastUpdatedAt ?? n.createdAt) - g;
						})),
						{ allBugBots: h, bugbotDataVersion: d.$9cc }
					);
				}
				function u(a, h, c, n) {
					const g = m(c);
					let p = a.get(n, g),
						o = { allBugBots: [], bugbotDataVersion: d.$9cc };
					if (p)
						try {
							let l = JSON.parse(p);
							l && (o = r(l));
						} catch (l) {
							console.error("[bugbot] Error parsing stored bugbots data:", l),
								(o = { allBugBots: [], bugbotDataVersion: d.$9cc });
						}
					console.log("[bugbot] allBugBotsInit", JSON.parse(JSON.stringify(o)));
					const [f, b] = (0, E.createStore)(o);
					return [
						f,
						b,
						() => {
							const l = (0, C.$9g)(),
								y = (0, w.$_cc)(l);
							return b("allBugBots", [y]), y;
						},
					];
				}
			},
		),
		define(
			de[977],
			he([1, 0, 3, 5, 21, 25, 45, 20, 3004, 789, 58, 193]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$edc = e.$ddc = void 0),
					(e.$ddc = (0, i.$Mi)("bugbotDataService"));
				let h = class extends t.$1c {
					constructor(n, g, p) {
						super(),
							(this.c = n),
							(this.f = g),
							(this.g = p),
							([
								this.allBugBotsData,
								this.setAllBugBotsData,
								this.resetBugBots,
							] = (0, m.$cdc)(this.c, this.g, this.f, u.$EX)),
							this.D(
								this.c.onWillSaveState(() => {
									this.saveBugBots();
								}),
							);
					}
					getBugBotData(n) {
						return this.allBugBotsData.allBugBots.find((g) => g.bugbotId === n);
					}
					updateBugBotData(n, g) {
						this.setAllBugBotsData(
							"allBugBots",
							(p) => p.bugbotId === n,
							(p) => ({ ...p, ...g }),
						);
					}
					trimFileInPlace(n, g, p, o) {
						if (g[p] === void 0) return;
						const b = new Set(),
							s = n.bugReports?.bugReports ?? [];
						for (const y of s)
							for (const $ of y.locations)
								if ($.file === p) {
									const v = Math.max(0, $.startLine - 1 - 15),
										S = Math.min(o.length - 1, $.endLine - 1 + 15);
									for (let I = v; I <= S; I++) b.add(I);
								}
						if (b.size === 0) {
							g[p] = { type: "partial", lines: [] };
							return;
						}
						const l = Array.from(b).sort((y, $) => y - $);
						g[p] = {
							type: "partial",
							lines: l.map((y) => ({ number: y + 1, content: o[y] })),
						};
					}
					sanitizeLargeFilesInPlace(n, g) {
						if (g < 10)
							for (const p in n.fileSnapshots) {
								const o = n.fileSnapshots[p];
								o !== void 0 &&
									(Array.isArray(o)
										? o.length > 1e4 &&
											(this.trimFileInPlace(n, n.fileSnapshots, p, o),
											delete n.fileSnapshotsPreDiff[p])
										: delete n.fileSnapshotsPreDiff[p]);
							}
						else {
							for (const p in n.fileSnapshots) {
								const o = n.fileSnapshots[p];
								o !== void 0 &&
									Array.isArray(o) &&
									this.trimFileInPlace(n, n.fileSnapshots, p, o);
							}
							n.fileSnapshotsPreDiff = {};
						}
					}
					saveBugBots() {
						let n = this.allBugBotsData.allBugBots
							.filter((o) => o.status.type === "completed")
							.map((o) => (0, a.unwrap)(o));
						n.length > 150 && (n = n.slice(0, 100)),
							n.forEach((o, f) => {
								this.sanitizeLargeFilesInPlace(o, f);
							});
						const g = { allBugBots: n, bugbotDataVersion: r.$9cc },
							p = JSON.stringify(g);
						this.c.store(
							u.$EX,
							p,
							w.StorageScope.WORKSPACE,
							w.StorageTarget.MACHINE,
						);
					}
					deleteBugBot(n) {
						const g = this.getBugBotData(n);
						g?.status.type === "generating" &&
							g?.abortController &&
							g.abortController.abort(),
							this.setAllBugBotsData("allBugBots", (p) =>
								p.filter((o) => o.bugbotId !== n),
							),
							this.saveBugBots();
					}
					deleteAllBugBots() {
						this.allBugBotsData.allBugBots.forEach((g) => {
							this.deleteBugBot(g.bugbotId);
						});
					}
				};
				(e.$edc = h),
					(e.$edc = h = Ne([j(0, w.$lq), j(1, E.$Vi), j(2, C.$0zb)], h)),
					(0, d.$lK)(e.$ddc, h, d.InstantiationType.Eager);
			},
		),
		define(
			de[1719],
			he([1, 0, 223, 14, 45, 3, 977, 9, 23]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$kzc = e.$jzc = void 0);
				class r extends t.$LO {
					static {
						this.TypeID = "workbench.input.bugbot";
					}
					static {
						this.EditorID = "workbench.editor.bugbot";
					}
					constructor(h) {
						super(), (this.bugbot = h);
					}
					get typeId() {
						return r.TypeID;
					}
					get editorId() {
						return r.EditorID;
					}
					get resource() {
						return d.URI.from({
							scheme: m.Schemas.bugbot,
							path: this.bugbot.bugbotId,
						});
					}
					getName() {
						return `Bug Report ${new Date(this.bugbot.createdAt).toLocaleString()}`;
					}
					getIcon() {
						return i.$ak.bug;
					}
					static create(h) {
						return new r(h);
					}
					async resolve() {
						return null;
					}
					toJSON() {
						return { bugbotId: this.bugbot.bugbotId };
					}
					toUntyped() {
						return { resource: this.resource, options: { override: r.TypeID } };
					}
					matches(h) {
						return super.matches(h)
							? !0
							: h instanceof r
								? h.bugbot.bugbotId === this.bugbot.bugbotId
								: !1;
					}
				}
				e.$jzc = r;
				let u = class extends E.$1c {
					constructor(h, c) {
						super(), (this.a = h), (this.b = c);
					}
					canSerialize(h) {
						return h instanceof r;
					}
					serialize(h) {
						if (h instanceof r) return JSON.stringify(h.toJSON());
					}
					deserialize(h, c) {
						const { bugbotId: n } = JSON.parse(c),
							g = this.a.getBugBotData(n);
						if (g) return r.create(g);
					}
				};
				(e.$kzc = u), (e.$kzc = u = Ne([j(0, C.$ddc), j(1, w.$0zb)], u));
			},
		),
		define(
			de[3005],
			he([1, 0, 3, 188, 17, 42, 200, 155, 780, 59, 67, 199, 254, 389]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$0Mc = void 0);
				class n {
					constructor(f) {
						(this.g = f),
							(this.model = this.g.object.textEditorModel),
							(this.d = []);
					}
					dispose() {
						this.g.dispose();
					}
					isNoOp() {
						return !(
							this.d.length > 0 ||
							(this.f !== void 0 &&
								this.f !== this.model.getEndOfLineSequence())
						);
					}
					addEdit(f) {
						this.c = f.versionId;
						const { textEdit: b } = f;
						if (
							(typeof b.eol == "number" && (this.f = b.eol),
							(!b.range && !b.text) || (w.$iL.isEmpty(b.range) && !b.text))
						)
							return;
						let s;
						b.range
							? (s = w.$iL.lift(b.range))
							: (s = this.model.getFullModelRange()),
							this.d.push({
								...i.$jL.replaceMove(s, b.text),
								insertAsSnippet: b.insertAsSnippet,
							});
					}
					validate() {
						return typeof this.c > "u" || this.model.getVersionId() === this.c
							? { canApply: !0 }
							: { canApply: !1, reason: this.model.uri };
					}
					getBeforeCursorState() {
						return null;
					}
					apply() {
						this.d.length > 0 &&
							((this.d = this.d
								.map(this.h, this)
								.sort((f, b) =>
									w.$iL.compareRangesUsingStarts(f.range, b.range),
								)),
							this.model.pushEditOperations(null, this.d, () => null)),
							this.f !== void 0 && this.model.pushEOL(this.f);
					}
					h(f) {
						if (!f.insertAsSnippet || !f.text) return f;
						const b = c.$Izb.asInsertText(f.text);
						return { ...f, insertAsSnippet: !1, text: b };
					}
				}
				class g extends n {
					constructor(f, b) {
						super(f), (this.j = b);
					}
					getBeforeCursorState() {
						return this.k() ? this.j.getSelections() : null;
					}
					apply() {
						if (!this.k()) {
							super.apply();
							return;
						}
						if (this.d.length > 0) {
							const f = h.$aDb.get(this.j);
							if (f && this.d.some((b) => b.insertAsSnippet)) {
								const b = [];
								for (const s of this.d)
									s.range &&
										s.text !== null &&
										b.push({
											range: w.$iL.lift(s.range),
											template: s.insertAsSnippet
												? s.text
												: c.$Izb.escape(s.text),
										});
								f.apply(b, { undoStopBefore: !1, undoStopAfter: !1 });
							} else
								(this.d = this.d
									.map(this.h, this)
									.sort((b, s) =>
										w.$iL.compareRangesUsingStarts(b.range, s.range),
									)),
									this.j.executeEdits("", this.d);
						}
						this.f !== void 0 &&
							this.j.hasModel() &&
							this.j.getModel().pushEOL(this.f);
					}
					k() {
						return (
							this.j?.getModel()?.uri.toString() === this.model.uri.toString()
						);
					}
				}
				let p = class {
					constructor(f, b, s, l, y, $, v, S, I, T, P, k) {
						(this.d = f),
							(this.f = b),
							(this.g = s),
							(this.h = l),
							(this.j = y),
							(this.k = $),
							(this.l = v),
							(this.m = I),
							(this.n = T),
							(this.o = P),
							(this.p = k),
							(this.c = new r.$Gc());
						for (const L of S) {
							let D = this.c.get(L.resource);
							D || ((D = []), this.c.set(L.resource, D)), D.push(L);
						}
					}
					q() {
						for (const f of this.c.values())
							for (const b of f)
								if (typeof b.versionId == "number") {
									const s = this.n.getModel(b.resource);
									if (s && s.getVersionId() !== b.versionId)
										throw new Error(
											`${s.uri.toString()} has changed in the meantime`,
										);
								}
					}
					async r() {
						const f = [],
							b = [];
						for (const [s, l] of this.c) {
							const y = this.o.createModelReference(s).then(async ($) => {
								let v,
									S = !1;
								if (
									(this.g?.getModel()?.uri.toString() ===
									$.object.textEditorModel.uri.toString()
										? ((v = new g($, this.g)), (S = !0))
										: (v = new n($)),
									f.push(v),
									!S)
								) {
									l.forEach(v.addEdit, v);
									return;
								}
								const I = async (k, L) => {
									const D = l.slice(k, L),
										M = await this.m.computeMoreMinimalEdits(
											$.object.textEditorModel.uri,
											D.map((N) => N.textEdit),
											!1,
										);
									M
										? M.forEach((N) =>
												v.addEdit(
													new a.$tzb(
														$.object.textEditorModel.uri,
														N,
														void 0,
														void 0,
													),
												),
											)
										: D.forEach(v.addEdit, v);
								};
								let T = 0,
									P = 0;
								for (; P < l.length; P++)
									(l[P].textEdit.insertAsSnippet || l[P].metadata) &&
										(await I(T, P), v.addEdit(l[P]), (T = P + 1));
								await I(T, P);
							});
							b.push(y);
						}
						return await Promise.all(b), f;
					}
					s(f) {
						for (const b of f) {
							const s = b.validate();
							if (!s.canApply) return s;
						}
						return { canApply: !0 };
					}
					async apply() {
						this.q();
						const f = await this.r();
						try {
							if (this.l.isCancellationRequested) return [];
							const b = [],
								s = this.s(f);
							if (!s.canApply)
								throw new Error(
									`${s.reason.toString()} has changed in the meantime`,
								);
							if (f.length === 1) {
								const l = f[0];
								if (!l.isNoOp()) {
									const y = new m.$wU(
										this.d,
										this.f,
										l.model,
										l.getBeforeCursorState(),
									);
									this.p.pushElement(y, this.h, this.j),
										l.apply(),
										y.close(),
										b.push(l.model.uri);
								}
								this.k.report(void 0);
							} else {
								const l = new m.$xU(
									this.d,
									this.f,
									f.map(
										(y) =>
											new m.$wU(
												this.d,
												this.f,
												y.model,
												y.getBeforeCursorState(),
											),
									),
								);
								this.p.pushElement(l, this.h, this.j);
								for (const y of f)
									y.apply(), this.k.report(void 0), b.push(y.model.uri);
								l.close();
							}
							return b;
						} finally {
							(0, t.$Vc)(f);
						}
					}
				};
				(e.$0Mc = p),
					(e.$0Mc = p =
						Ne([j(8, C.$Cxb), j(9, u.$QO), j(10, E.$MO), j(11, d.$GN)], p));
			},
		),
		define(
			de[978],
			he([1, 0, 33, 945, 9, 48, 24, 29, 3, 31, 28, 67, 42]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$P1 = e.$O1 = e.CallHierarchyDirection = void 0);
				var c;
				(function (o) {
					(o.CallsTo = "incomingCalls"), (o.CallsFrom = "outgoingCalls");
				})(c || (e.CallHierarchyDirection = c = {})),
					(e.$O1 = new i.$N1());
				class n {
					static async create(f, b, s) {
						const [l] = e.$O1.ordered(f);
						if (!l) return;
						const y = await l.prepareCallHierarchy(f, b, s);
						if (y)
							return new n(
								y.roots.reduce(($, v) => $ + v._sessionId, ""),
								l,
								y.roots,
								new m.$4c(y),
							);
					}
					constructor(f, b, s, l) {
						(this.id = f),
							(this.provider = b),
							(this.roots = s),
							(this.ref = l),
							(this.root = s[0]);
					}
					dispose() {
						this.ref.release();
					}
					fork(f) {
						const b = this;
						return new (class extends n {
							constructor() {
								super(b.id, b.provider, [f], b.ref.acquire());
							}
						})();
					}
					async resolveIncomingCalls(f, b) {
						try {
							const s = await this.provider.provideIncomingCalls(f, b);
							if ((0, C.$Pb)(s)) return s;
						} catch (s) {
							(0, d.$5)(s);
						}
						return [];
					}
					async resolveOutgoingCalls(f, b) {
						try {
							const s = await this.provider.provideOutgoingCalls(f, b);
							if ((0, C.$Pb)(s)) return s;
						} catch (s) {
							(0, d.$5)(s);
						}
						return [];
					}
				}
				e.$P1 = n;
				const g = new Map();
				r.$fk.registerCommand(
					"_executePrepareCallHierarchy",
					async (o, ...f) => {
						const [b, s] = f;
						(0, u.$vg)(w.URI.isUri(b)), (0, u.$vg)(E.$hL.isIPosition(s));
						let y = o.get(a.$QO).getModel(b),
							$;
						if (!y) {
							const S = await o.get(h.$MO).createModelReference(b);
							(y = S.object.textEditorModel), ($ = S);
						}
						try {
							const v = await n.create(y, s, t.CancellationToken.None);
							return v
								? (g.set(v.id, v),
									g.forEach((S, I, T) => {
										T.size > 10 && (S.dispose(), g.delete(I));
									}),
									[v.root])
								: [];
						} finally {
							$?.dispose();
						}
					},
				);
				function p(o) {
					return !0;
				}
				r.$fk.registerCommand(
					"_executeProvideIncomingCalls",
					async (o, ...f) => {
						const [b] = f;
						(0, u.$vg)(p(b));
						const s = g.get(b._sessionId);
						if (s) return s.resolveIncomingCalls(b, t.CancellationToken.None);
					},
				),
					r.$fk.registerCommand(
						"_executeProvideOutgoingCalls",
						async (o, ...f) => {
							const [b] = f;
							(0, u.$vg)(p(b));
							const s = g.get(b._sessionId);
							if (s) return s.resolveOutgoingCalls(b, t.CancellationToken.None);
						},
					);
			},
		),
		define(
			de[3006],
			he([1, 0, 978, 33, 132, 325, 74, 37, 17, 4, 26]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$IYc =
						e.$HYc =
						e.$GYc =
						e.$FYc =
						e.$EYc =
						e.$DYc =
						e.Call =
							void 0);
				class a {
					constructor(s, l, y, $) {
						(this.item = s),
							(this.locations = l),
							(this.model = y),
							(this.parent = $);
					}
					static compare(s, l) {
						let y = (0, d.$Ff)(s.item.uri.toString(), l.item.uri.toString());
						return (
							y === 0 &&
								(y = m.$iL.compareRangesUsingStarts(
									s.item.range,
									l.item.range,
								)),
							y
						);
					}
				}
				e.Call = a;
				class h {
					constructor(s) {
						this.getDirection = s;
					}
					hasChildren() {
						return !0;
					}
					async getChildren(s) {
						if (s instanceof t.$P1)
							return s.roots.map(($) => new a($, void 0, s, void 0));
						const { model: l, item: y } = s;
						return this.getDirection() === t.CallHierarchyDirection.CallsFrom
							? (await l.resolveOutgoingCalls(y, i.CancellationToken.None)).map(
									($) =>
										new a(
											$.to,
											$.fromRanges.map((v) => ({ range: v, uri: y.uri })),
											l,
											s,
										),
								)
							: (await l.resolveIncomingCalls(y, i.CancellationToken.None)).map(
									($) =>
										new a(
											$.from,
											$.fromRanges.map((v) => ({ range: v, uri: $.from.uri })),
											l,
											s,
										),
								);
					}
				}
				e.$DYc = h;
				class c {
					compare(s, l) {
						return a.compare(s, l);
					}
				}
				e.$EYc = c;
				class n {
					constructor(s) {
						this.getDirection = s;
					}
					getId(s) {
						let l =
							this.getDirection() +
							JSON.stringify(s.item.uri) +
							JSON.stringify(s.item.range);
						return s.parent && (l += this.getId(s.parent)), l;
					}
				}
				e.$FYc = n;
				class g {
					constructor(s, l) {
						(this.icon = s), (this.label = l);
					}
				}
				class p {
					constructor() {
						this.templateId = p.id;
					}
					static {
						this.id = "CallRenderer";
					}
					renderTemplate(s) {
						s.classList.add("callhierarchy-element");
						const l = document.createElement("div");
						s.appendChild(l);
						const y = new E.$Xob(s, { supportHighlights: !0 });
						return new g(l, y);
					}
					renderElement(s, l, y) {
						const { element: $, filterData: v } = s,
							S = $.item.tags?.includes(C.SymbolTag.Deprecated);
						(y.icon.className = ""),
							y.icon.classList.add(
								"inline",
								...u.ThemeIcon.asClassNameArray(
									C.SymbolKinds.toIcon($.item.kind),
								),
							),
							y.label.setLabel($.item.name, $.item.detail, {
								labelEscapeNewLines: !0,
								matches: (0, w.$3k)(v),
								strikethrough: S,
							});
					}
					disposeTemplate(s) {
						s.label.dispose();
					}
				}
				e.$GYc = p;
				class o {
					getHeight(s) {
						return 22;
					}
					getTemplateId(s) {
						return p.id;
					}
				}
				e.$HYc = o;
				class f {
					constructor(s) {
						this.getDirection = s;
					}
					getWidgetAriaLabel() {
						return (0, r.localize)(4537, null);
					}
					getAriaLabel(s) {
						return this.getDirection() === t.CallHierarchyDirection.CallsFrom
							? (0, r.localize)(4538, null, s.item.name)
							: (0, r.localize)(4539, null, s.item.name);
					}
				}
				e.$IYc = f;
			},
		),
		