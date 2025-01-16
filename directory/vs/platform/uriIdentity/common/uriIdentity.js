define(de[68], he([1, 0, 5]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Vl = void 0),
				(e.$Vl = (0, t.$Mi)("IUriIdentityService"));
		}),
		define(
			de[2879],
			he([
				1, 0, 193, 27, 3, 46, 545, 71, 61, 64, 947, 5, 43, 45, 32, 68, 1555,
				2701, 31, 39,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f, b) {
				"use strict";
				var s;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$4lc = void 0);
				class l extends E.$itb {
					constructor() {
						super({
							id: p.$Xlc,
							label: "Accept Simple Edits",
							alias: "Accept Simple Edits",
							precondition: d.EditorContextKeys.hasDisplayedSimpleDiff,
							kbOpts: {
								kbExpr: d.EditorContextKeys.editorTextFocus,
								primary: i.KeyMod.CtrlCmd | i.KeyCode.KeyG,
								weight: h.KeybindingWeight.EditorContrib + 1e3,
							},
						});
					}
					run(S, I, T) {
						const P = S.get(n.$km),
							L = S.get(c.$0zb).applicationUserPersistentStorage.aiSettings
								.openAIModel;
						P.publicLogCapture("Accepted Diff"),
							P.publicLogCapture("did.edit.accepted.", { model: L }),
							$.get(I)?.acceptSuggestion(
								T?.constructor === Object ? void 0 : T,
							);
					}
				}
				class y extends E.$itb {
					constructor() {
						super({
							id: p.$Ylc,
							label: "Reject Simple Edits",
							alias: "Reject Simple Edits",
							precondition: d.EditorContextKeys.hasDisplayedSimpleDiff,
							kbOpts: {
								kbExpr: d.EditorContextKeys.editorTextFocus,
								primary: i.KeyMod.CtrlCmd | i.KeyCode.KeyH,
								weight: h.KeybindingWeight.EditorContrib + 1e3,
							},
						});
					}
					run(S, I, T) {
						const P = S.get(n.$km),
							L = S.get(c.$0zb).applicationUserPersistentStorage.aiSettings
								.openAIModel;
						P.publicLogCapture("Rejected Diff"),
							P.publicLogCapture("did.edit.rejected", { model: L }),
							$.get(I)?.rejectSuggestion(
								T?.constructor === Object ? void 0 : T,
							);
					}
				}
				let $ = class extends w.$1c {
					static {
						s = this;
					}
					static {
						this.ID = "editor.contrib.simpleInlineDiffController";
					}
					static get(S) {
						return S.getContribution(s.ID);
					}
					b() {
						const S = this.a.getPosition();
						let I = null,
							T = 1 / 0;
						const P = this.m.nonPersistentStorage.simpleDiffs.filter((k) =>
							this.g.isEqual(k.uri, this.a.getModel()?.uri),
						);
						for (const k of P) {
							if (!S) {
								I = k.id;
								break;
							}
							const L = Math.min(
								Math.abs(S.lineNumber - k.startLineNumber),
								Math.abs(
									S.lineNumber -
										k.startLineNumber -
										k.acceptTextLines.length +
										1,
								),
							);
							L < T && ((T = L), (I = k.id));
						}
						return I || null;
					}
					rejectSuggestion(S) {
						if (!this.a.hasModel()) return;
						const I = S ?? this.b();
						I && this.n.rejectDiff(I);
					}
					acceptSuggestion(S) {
						if (!this.a.hasModel()) return;
						const I = S ?? this.b();
						I && this.n.acceptDiff(I);
					}
					constructor(S, I, T, P, k, L, D, M) {
						super(),
							(this.j = I),
							(this.m = T),
							(this.n = P),
							(this.q = k),
							(this.r = D),
							(this.s = M),
							(this.f = new Map()),
							(this.a = S),
							(this.c = this.D(this.m.createScoped(this))),
							(this.g = L.extUri),
							(this.h = d.EditorContextKeys.hasDisplayedSimpleDiff.bindTo(
								S.contextKeyService,
							)),
							this.D(
								this.a.onDidChangeModel((N) => {
									if (this.a.hasModel()) {
										for (const A of this.f.keys()) this.removeDiff(A);
										this.f.clear(), this.showDiffs();
									}
								}),
							),
							this.c.onChangeEffect({
								deps: [() => this.m.nonPersistentStorage.simpleDiffs],
								onChange: () => {
									this.showDiffs();
								},
							}),
							this.showDiffs();
					}
					showDiffs() {
						if (!this.a.hasModel()) return;
						const S = this.a.getModel().uri,
							T = this.m.nonPersistentStorage.simpleDiffs.filter((P) =>
								this.g.isEqual(P.uri, S),
							);
						for (const P of T) this.showDiff((0, t.unwrap)(P));
						for (const P of this.f.keys())
							T.some((k) => k.id === P) || this.removeDiff(P);
						this.h.set(T.length > 0);
					}
					getRemovalViewZone(S) {
						if (!this.a.hasModel()) return;
						const { tabSize: I } = this.a.getModel().getOptions(),
							T = document.createElement("div");
						return (
							(0, u.$L1b)(
								T,
								I,
								S.rejectTextLines.map((k) => ({ content: k, decorations: [] })),
								this.a.getOptions(),
								this.j.languageIdCodec,
							),
							(T.className = "inline-diff-removed"),
							{
								viewZone: {
									afterLineNumber:
										S.startLineNumber + S.acceptTextLines.length - 1,
									heightInLines: S.rejectTextLines.length,
									domNode: T,
									afterColumnAffinity: r.PositionAffinity.Right,
								},
								type: "removed",
								id: void 0,
								diffId: S.id,
							}
						);
					}
					showDiff(S) {
						const I = this.f.get(S.id),
							T = this.getRemovalViewZone(S);
						let P, k;
						if (
							I?.topViewZone === void 0 &&
							S.live &&
							(S.acceptTextLines.length > 0 || S.rejectTextLines.length > 0)
						) {
							const D =
								I?.topViewZone ??
								this.s.createInstance(o.$2lc, {
									commandService: this.q,
									diffId: S.id,
									keybindingService: this.r,
									reactiveStorageService: this.m,
								});
							(k = D),
								(P = {
									viewZone: {
										afterLineNumber: S.startLineNumber - 1,
										heightInLines: 1,
										domNode: D._domNode,
										afterColumnAffinity: r.PositionAffinity.Right,
									},
									type: "top",
									id: void 0,
									diffId: S.id,
								}),
								this.a.changeViewZones((M) => {
									P.id = M.addZone(P.viewZone);
								});
						} else if (I) {
							const D = I.topViewZone;
							(k = I.topWidget),
								D !== void 0 &&
									((D.viewZone.afterLineNumber = S.startLineNumber - 1),
									this.a.changeViewZones((M) => {
										M.layoutZone(D.id);
									})),
								(P = D);
						} else (P = void 0), (k = void 0);
						const L = this.updateViewZonesNew(I?.viewZones, T);
						this.f.set(S.id, { viewZones: L, topViewZone: P, topWidget: k });
					}
					removeDiff(S) {
						const I = this.f.get(S);
						I &&
							(this.a.changeViewZones((T) => {
								I.viewZones !== void 0 && T.removeZone(I.viewZones.id),
									I.topViewZone !== void 0 && T.removeZone(I.topViewZone.id);
							}),
							I.topWidget && I.topWidget.dispose(),
							this.f.delete(S));
					}
					updateViewZonesNew(S, I) {
						let T;
						return (
							this.a.changeViewZones((P) => {
								if ((S && P.removeZone(S.id), I)) {
									const k = P.addZone(I.viewZone);
									T = { ...I, id: k };
								}
							}),
							T
						);
					}
				};
				(e.$4lc = $),
					(e.$4lc =
						$ =
						s =
							Ne(
								[
									j(1, m.$nM),
									j(2, c.$0zb),
									j(3, C.$z8b),
									j(4, f.$ek),
									j(5, g.$Vl),
									j(6, b.$uZ),
									j(7, a.$Li),
								],
								$,
							)),
					(0, E.$qtb)($.ID, $, E.EditorContributionInstantiation.Eventually),
					(0, E.$ntb)(l),
					(0, E.$ntb)(y);
			},
		),
		define(
			de[2880],
			he([1, 0, 68, 20, 22, 19, 2223, 6, 3]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$oK = void 0);
				class r {
					static {
						this._clock = 0;
					}
					constructor(h) {
						(this.uri = h), (this.time = r._clock++);
					}
					touch() {
						return (this.time = r._clock++), this;
					}
				}
				let u = class {
					constructor(h) {
						(this.g = h), (this.c = new m.$Zc()), (this.f = 2 ** 16);
						const c = new Map(),
							n = (g) => {
								let p = c.get(g.scheme);
								return (
									p === void 0 &&
										((p =
											h.hasProvider(g) &&
											!this.g.hasCapability(
												g,
												w.FileSystemProviderCapabilities.PathCaseSensitive,
											)),
										c.set(g.scheme, p)),
									p
								);
							};
						this.c.add(
							d.Event.any(
								h.onDidChangeFileSystemProviderRegistrations,
								h.onDidChangeFileSystemProviderCapabilities,
							)((g) => {
								c.delete(g.scheme);
							}),
						),
							(this.extUri = new E.$ch(n)),
							(this.d = new C.$nK(
								(g, p) => this.extUri.compare(g, p, !0),
								this.f,
							));
					}
					dispose() {
						this.c.dispose(), this.d.clear();
					}
					asCanonicalUri(h) {
						this.g.hasProvider(h) && (h = (0, E.$oh)(h));
						const c = this.d.get(h);
						return c
							? c.touch().uri.with({ fragment: h.fragment })
							: (this.d.set(h, new r(h)), this.h(), h);
					}
					h() {
						if (this.d.size < this.f) return;
						const h = [...this.d.entries()].sort((n, g) =>
							n[1].time < g[1].time ? 1 : n[1].time > g[1].time ? -1 : 0,
						);
						(r._clock = 0), this.d.clear();
						const c = this.f * 0.5;
						for (let n = 0; n < c; n++) this.d.set(h[n][0], h[n][1].touch());
					}
				};
				(e.$oK = u),
					(e.$oK = u = Ne([j(0, w.$ll)], u)),
					(0, i.$lK)(t.$Vl, u, i.InstantiationType.Delayed);
			},
		),
		