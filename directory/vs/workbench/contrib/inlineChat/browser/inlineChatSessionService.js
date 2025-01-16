define(de[798], he([1, 0, 5]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$zLb = void 0),
				(e.$zLb = (0, t.$Mi)("IInlineChatSessionService"));
		}),
		define(
			de[1734],
			he([1, 0, 188, 64, 15, 790]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$_Yb = C),
					(e.$aZb = d);
				async function C(m, r, u, a) {
					const [h] = m.deltaDecorations(
						[],
						[
							{
								range: r.range,
								options: {
									description: "asyncTextEdit",
									stickiness:
										i.TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges,
								},
							},
						],
					);
					let c = !0;
					for await (const n of r.newText) {
						if (m.isDisposed()) break;
						const g = m.getDecorationRange(h);
						if (!g)
							throw new Error(
								"FAILED to perform async replace edit because the anchor decoration was removed",
							);
						const p = c
							? t.$jL.replace(g, n)
							: t.$jL.insert(g.getEndPosition(), n);
						a?.start(),
							m.pushEditOperations(null, [p], (o) => (u?.report(o), null)),
							a?.stop(),
							(c = !1);
					}
				}
				function d(m, r, u, a) {
					u = Math.max(30, u);
					const h = new w.$di();
					let c = r.text ?? "";
					m.cancelAndSet(() => {
						if (a.isCancellationRequested) return;
						const g = (0, E.$RKb)(c, 1);
						h.emitOne(g.value),
							(c = c.substring(g.value.length)),
							g.isFullString && (m.cancel(), h.resolve(), n.dispose());
					}, 1e3 / u);
					const n = a.onCancellationRequested(() => {
						m.cancel(), h.resolve(), n.dispose();
					});
					return { range: r.range, newText: h.asyncIterable };
				}
			},
		),
		define(
			de[257],
			he([1, 0, 4, 11, 81, 8, 30, 51]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$yLb =
						e.$xLb =
						e.$wLb =
						e.$vLb =
						e.$uLb =
						e.$tLb =
						e.$sLb =
						e.$rLb =
						e.$qLb =
						e.$pLb =
						e.$oLb =
						e.$nLb =
						e.$mLb =
						e.$lLb =
						e.$kLb =
						e.$jLb =
						e.$iLb =
						e.$hLb =
						e.$gLb =
						e.$fLb =
						e.$eLb =
						e.$dLb =
						e.$cLb =
						e.$bLb =
						e.$aLb =
						e.$_Kb =
						e.$$Kb =
						e.$0Kb =
						e.$9Kb =
						e.$8Kb =
						e.$7Kb =
						e.$6Kb =
						e.$5Kb =
						e.$4Kb =
						e.$3Kb =
						e.$2Kb =
						e.$1Kb =
						e.$ZKb =
						e.$YKb =
						e.$XKb =
						e.$WKb =
						e.$VKb =
						e.InlineChatResponseType =
						e.$UKb =
						e.$TKb =
						e.EditMode =
						e.InlineChatConfigKeys =
							void 0);
				var m;
				(function (a) {
					(a.Mode = "inlineChat.mode"),
						(a.FinishOnType = "inlineChat.finishOnType"),
						(a.AcceptedOrDiscardBeforeSave =
							"inlineChat.acceptedOrDiscardBeforeSave"),
						(a.StartWithOverlayWidget = "inlineChat.startWithOverlayWidget"),
						(a.ZoneToolbar = "inlineChat.experimental.enableZoneToolbar"),
						(a.HoldToSpeech = "inlineChat.holdToSpeech"),
						(a.AccessibleDiffView = "inlineChat.accessibleDiffView");
				})(m || (e.InlineChatConfigKeys = m = {}));
				var r;
				(function (a) {
					(a.Live = "live"), (a.Preview = "preview");
				})(r || (e.EditMode = r = {})),
					C.$Io
						.as(w.$No.Configuration)
						.registerConfiguration({
							id: "editor",
							properties: {
								[m.Mode]: {
									description: (0, t.localize)(7109, null),
									default: r.Live,
									type: "string",
									enum: [r.Live, r.Preview],
									markdownEnumDescriptions: [
										(0, t.localize)(7110, null),
										(0, t.localize)(7111, null),
									],
									tags: ["experimental"],
								},
								[m.FinishOnType]: {
									description: (0, t.localize)(7112, null),
									default: !1,
									type: "boolean",
								},
								[m.AcceptedOrDiscardBeforeSave]: {
									description: (0, t.localize)(7113, null),
									default: !0,
									type: "boolean",
								},
								[m.HoldToSpeech]: {
									description: (0, t.localize)(7114, null),
									default: !0,
									type: "boolean",
								},
								[m.AccessibleDiffView]: {
									description: (0, t.localize)(7115, null),
									default: "auto",
									type: "string",
									enum: ["auto", "on", "off"],
									markdownEnumDescriptions: [
										(0, t.localize)(7116, null),
										(0, t.localize)(7117, null),
										(0, t.localize)(7118, null),
									],
								},
								[m.StartWithOverlayWidget]: {
									description: (0, t.localize)(7119, null),
									default: !1,
									type: "boolean",
								},
								[m.ZoneToolbar]: {
									description: (0, t.localize)(7120, null),
									default: !1,
									type: "boolean",
									tags: ["experimental"],
								},
							},
						}),
					(e.$TKb = "interactiveEditor"),
					(e.$UKb = "interactiveEditorAccessiblityHelp");
				var u;
				(function (a) {
					(a.None = "none"),
						(a.Messages = "messages"),
						(a.MessagesAndEdits = "messagesAndEdits");
				})(u || (e.InlineChatResponseType = u = {})),
					(e.$VKb = new E.$5j(
						"inlineChatHasProvider",
						!1,
						(0, t.localize)(7121, null),
					)),
					(e.$WKb = new E.$5j(
						"inlineChatVisible",
						!1,
						(0, t.localize)(7122, null),
					)),
					(e.$XKb = new E.$5j(
						"inlineChatFocused",
						!1,
						(0, t.localize)(7123, null),
					)),
					(e.$YKb = new E.$5j(
						"inlineChatEditing",
						!0,
						(0, t.localize)(7124, null),
					)),
					(e.$ZKb = new E.$5j(
						"inlineChatResponseFocused",
						!1,
						(0, t.localize)(7125, null),
					)),
					(e.$1Kb = new E.$5j(
						"inlineChatEmpty",
						!1,
						(0, t.localize)(7126, null),
					)),
					(e.$2Kb = new E.$5j(
						"inlineChatInnerCursorFirst",
						!1,
						(0, t.localize)(7127, null),
					)),
					(e.$3Kb = new E.$5j(
						"inlineChatInnerCursorLast",
						!1,
						(0, t.localize)(7128, null),
					)),
					(e.$4Kb = new E.$5j(
						"inlineChatInnerCursorStart",
						!1,
						(0, t.localize)(7129, null),
					)),
					(e.$5Kb = new E.$5j(
						"inlineChatInnerCursorEnd",
						!1,
						(0, t.localize)(7130, null),
					)),
					(e.$6Kb = new E.$5j(
						"inlineChatOuterCursorPosition",
						"",
						(0, t.localize)(7131, null),
					)),
					(e.$7Kb = new E.$5j(
						"inlineChatHasStashedSession",
						!1,
						(0, t.localize)(7132, null),
					)),
					(e.$8Kb = new E.$5j(
						"inlineChatUserDidEdit",
						void 0,
						(0, t.localize)(7133, null),
					)),
					(e.$9Kb = new E.$5j(
						"inlineChatDocumentChanged",
						!1,
						(0, t.localize)(7134, null),
					)),
					(e.$0Kb = new E.$5j(
						"inlineChatChangeHasDiff",
						!1,
						(0, t.localize)(7135, null),
					)),
					(e.$$Kb = new E.$5j(
						"inlineChatChangeShowsDiff",
						!1,
						(0, t.localize)(7136, null),
					)),
					(e.$_Kb = new E.$5j("config.inlineChat.mode", r.Live)),
					(e.$aLb = new E.$5j(
						"inlineChatRequestInProgress",
						!1,
						(0, t.localize)(7137, null),
					)),
					(e.$bLb = new E.$5j(
						"inlineChatResponseType",
						u.None,
						(0, t.localize)(7138, null),
					)),
					(e.$cLb = "inlineChat.acceptChanges"),
					(e.$dLb = "inlineChat.discardHunkChange"),
					(e.$eLb = "inlineChat.regenerate"),
					(e.$fLb = "inlineChat.viewInChat"),
					(e.$gLb = "inlineChat.toggleDiff"),
					(e.$hLb = "inlineChat.reportIssue"),
					(e.$iLb = i.$XX.for("inlineChat.content.status")),
					(e.$jLb = i.$XX.for("inlineChatWidget.status")),
					(e.$kLb = i.$XX.for("inlineChatWidget.secondary")),
					(e.$lLb = i.$XX.for("inlineChatWidget.changesZone")),
					(e.$mLb = (0, d.$wP)(
						"inlineChat.foreground",
						d.$cQ,
						(0, t.localize)(7139, null),
					)),
					(e.$nLb = (0, d.$wP)(
						"inlineChat.background",
						d.$bQ,
						(0, t.localize)(7140, null),
					)),
					(e.$oLb = (0, d.$wP)(
						"inlineChat.border",
						d.$dQ,
						(0, t.localize)(7141, null),
					)),
					(e.$pLb = (0, d.$wP)(
						"inlineChat.shadow",
						d.$bR,
						(0, t.localize)(7142, null),
					)),
					(e.$qLb = (0, d.$wP)(
						"inlineChatInput.border",
						d.$dQ,
						(0, t.localize)(7143, null),
					)),
					(e.$rLb = (0, d.$wP)(
						"inlineChatInput.focusBorder",
						d.$NP,
						(0, t.localize)(7144, null),
					)),
					(e.$sLb = (0, d.$wP)(
						"inlineChatInput.placeholderForeground",
						d.$1R,
						(0, t.localize)(7145, null),
					)),
					(e.$tLb = (0, d.$wP)(
						"inlineChatInput.background",
						d.$TR,
						(0, t.localize)(7146, null),
					)),
					(e.$uLb = (0, d.$wP)(
						"inlineChatDiff.inserted",
						(0, d.$BP)(d.$YQ, 0.5),
						(0, t.localize)(7147, null),
					)),
					(e.$vLb = (0, d.$wP)(
						"editorOverviewRuler.inlineChatInserted",
						{
							dark: (0, d.$BP)(d.$YQ, 0.6),
							light: (0, d.$BP)(d.$YQ, 0.8),
							hcDark: (0, d.$BP)(d.$YQ, 0.6),
							hcLight: (0, d.$BP)(d.$YQ, 0.8),
						},
						(0, t.localize)(7148, null),
					)),
					(e.$wLb = (0, d.$wP)(
						"editorOverviewRuler.inlineChatInserted",
						{
							dark: (0, d.$BP)(d.$YQ, 0.6),
							light: (0, d.$BP)(d.$YQ, 0.8),
							hcDark: (0, d.$BP)(d.$YQ, 0.6),
							hcLight: (0, d.$BP)(d.$YQ, 0.8),
						},
						(0, t.localize)(7149, null),
					)),
					(e.$xLb = (0, d.$wP)(
						"inlineChatDiff.removed",
						(0, d.$BP)(d.$ZQ, 0.5),
						(0, t.localize)(7150, null),
					)),
					(e.$yLb = (0, d.$wP)(
						"editorOverviewRuler.inlineChatRemoved",
						{
							dark: (0, d.$BP)(d.$ZQ, 0.6),
							light: (0, d.$BP)(d.$ZQ, 0.8),
							hcDark: (0, d.$BP)(d.$ZQ, 0.6),
							hcLight: (0, d.$BP)(d.$ZQ, 0.8),
						},
						(0, t.localize)(7151, null),
					));
			},
		),
		define(
			de[1244],
			he([
				1, 0, 6, 64, 257, 17, 122, 188, 342, 798, 200, 24, 103, 3, 8, 34, 109,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				var o;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.HunkState = e.$DLb = e.$CLb = e.$BLb = e.$ALb = void 0);
				class f {
					static {
						this.c = C.$eY.register({
							description: "inlineChat/session/wholeRange",
						});
					}
					constructor(I, T) {
						(this.g = I),
							(this.d = new t.$re()),
							(this.onDidChange = this.d.event),
							(this.f = []),
							(this.f = I.deltaDecorations([], [{ range: T, options: f.c }]));
					}
					dispose() {
						this.d.dispose(),
							this.g.isDisposed() || this.g.deltaDecorations(this.f, []);
					}
					fixup(I) {
						const T = [];
						for (const { modified: D } of I) {
							const M = D.isEmpty
								? new E.$iL(
										D.startLineNumber,
										1,
										D.startLineNumber,
										this.g.getLineLength(D.startLineNumber),
									)
								: new E.$iL(
										D.startLineNumber,
										1,
										D.endLineNumberExclusive - 1,
										this.g.getLineLength(D.endLineNumberExclusive - 1),
									);
							T.push({ range: M, options: f.c });
						}
						const [P, ...k] = this.f,
							L = this.g.deltaDecorations(k, T);
						(this.f = [P].concat(L)), this.d.fire(this);
					}
					get trackedInitialRange() {
						const [I] = this.f;
						return this.g.getDecorationRange(I) ?? new E.$iL(1, 1, 1, 1);
					}
					get value() {
						let I;
						for (const T of this.f) {
							const P = this.g.getDecorationRange(T);
							P && (I ? (I = E.$iL.plusRange(I, P)) : (I = P));
						}
						return I;
					}
				}
				e.$ALb = f;
				class b {
					constructor(I, T, P, k, L, D, M, N, A, R) {
						(this.editMode = I),
							(this.headless = T),
							(this.targetUri = P),
							(this.textModel0 = k),
							(this.textModelN = L),
							(this.agent = D),
							(this.wholeRange = M),
							(this.hunkData = N),
							(this.chatModel = A),
							(this.c = !1),
							(this.d = new Date()),
							(this.g = new Map()),
							(this.f = {
								extension: p.$Gn.toKey(D.extensionId),
								startTime: this.d.toISOString(),
								endTime: this.d.toISOString(),
								edits: 0,
								finishedByEdit: !1,
								rounds: "",
								undos: "",
								editMode: I,
								unstashed: 0,
								acceptedHunks: 0,
								discardedHunks: 0,
								responseTypes: "",
							}),
							R && (this.g = new Map(R));
					}
					get isUnstashed() {
						return this.c;
					}
					markUnstashed() {
						(this.f.unstashed += 1), (this.c = !0);
					}
					markModelVersion(I) {
						this.g.set(I.id, this.textModelN.getAlternativeVersionId());
					}
					get versionsByRequest() {
						return Array.from(this.g);
					}
					async undoChangesUntil(I) {
						const T = this.g.get(I);
						if (T === void 0) return !1;
						this.hunkData.ignoreTextModelNChanges = !0;
						try {
							for (
								;
								T < this.textModelN.getAlternativeVersionId() &&
								this.textModelN.canUndo();
							)
								await this.textModelN.undo();
						} finally {
							this.hunkData.ignoreTextModelNChanges = !1;
						}
						return !0;
					}
					get hasChangedText() {
						return !this.textModel0.equalsTextBuffer(
							this.textModelN.getTextBuffer(),
						);
					}
					asChangedText(I) {
						if (I.length === 0) return;
						let T = Number.MAX_VALUE,
							P = Number.MIN_VALUE;
						for (const k of I)
							(T = Math.min(T, k.modified.startLineNumber)),
								(P = Math.max(P, k.modified.endLineNumberExclusive));
						return this.textModelN.getValueInRange(
							new E.$iL(T, 1, P, Number.MAX_VALUE),
						);
					}
					recordExternalEditOccurred(I) {
						(this.f.edits += 1), (this.f.finishedByEdit = I);
					}
					asTelemetryData() {
						for (const I of this.hunkData.getInfo())
							switch (I.getState()) {
								case v.Accepted:
									this.f.acceptedHunks += 1;
									break;
								case v.Rejected:
									this.f.discardedHunks += 1;
									break;
							}
						return (this.f.endTime = new Date().toISOString()), this.f;
					}
				}
				e.$BLb = b;
				let s = class {
					constructor(I, T, P, k, L, D) {
						(this.g = P),
							(this.h = L),
							(this.j = D),
							(this.d = w.$7Kb.bindTo(k)),
							(this.f = T),
							this.d.set(!0),
							(this.c = t.Event.once(
								t.Event.any(
									I.onDidChangeCursorSelection,
									I.onDidChangeModelContent,
									I.onDidChangeModel,
									I.onDidBlurEditorWidget,
								),
							)(() => {
								(this.f = void 0), this.h.releaseSession(T), this.d.reset();
							}));
					}
					dispose() {
						this.c.dispose(),
							this.d.reset(),
							this.f && this.h.releaseSession(this.f);
					}
					unstash() {
						if (!this.f) return;
						this.c.dispose();
						const I = this.f;
						return (
							I.markUnstashed(),
							(I.hunkData.ignoreTextModelNChanges = !0),
							I.textModelN.pushEditOperations(null, this.g, () => null),
							(I.hunkData.ignoreTextModelNChanges = !1),
							(this.f = void 0),
							this.j.debug("[IE] Unstashed session"),
							I
						);
					}
				};
				(e.$CLb = s),
					(e.$CLb = s = Ne([j(3, n.$6j), j(4, r.$zLb), j(5, g.$ik)], s));
				function l(S, I) {
					return S.isEmpty
						? new E.$iL(
								S.startLineNumber,
								1,
								S.startLineNumber,
								I.getLineLength(S.startLineNumber),
							)
						: new E.$iL(
								S.startLineNumber,
								1,
								S.endLineNumberExclusive - 1,
								I.getLineLength(S.endLineNumberExclusive - 1),
							);
				}
				let y = class {
					static {
						o = this;
					}
					static {
						this.c = C.$eY.register({
							description: "inline-chat-hunk-tracked-range",
							stickiness: i.TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges,
						});
					}
					static {
						this.d = 8;
					}
					constructor(I, T, P) {
						(this.j = I),
							(this.k = T),
							(this.l = P),
							(this.f = new c.$Zc()),
							(this.g = new Map()),
							(this.h = !1),
							this.f.add(
								P.onDidChangeContent((k) => {
									this.h || this.m(k);
								}),
							);
					}
					dispose() {
						this.l.isDisposed() ||
							this.l.changeDecorations((I) => {
								for (const { textModelNDecorations: T } of this.g.values())
									T.forEach(I.removeDecoration, I);
							}),
							this.k.isDisposed() ||
								this.k.changeDecorations((I) => {
									for (const { textModel0Decorations: T } of this.g.values())
										T.forEach(I.removeDecoration, I);
								}),
							this.g.clear(),
							this.f.dispose();
					}
					set ignoreTextModelNChanges(I) {
						this.h = I;
					}
					get ignoreTextModelNChanges() {
						return this.h;
					}
					m(I) {
						const T = [],
							P = [];
						for (const L of this.g.values())
							if (L.state === v.Pending)
								for (let D = 1; D < L.textModelNDecorations.length; D++) {
									const M = this.l.getDecorationRange(
											L.textModelNDecorations[D],
										),
										N = this.k.getDecorationRange(L.textModel0Decorations[D]);
									M &&
										N &&
										T.push({
											rangeN: M,
											range0: N,
											markAccepted: () => (L.state = v.Accepted),
										});
								}
							else if (L.state === v.Accepted)
								for (let D = 1; D < L.textModel0Decorations.length; D++) {
									const M = this.k.getDecorationRange(
										L.textModel0Decorations[D],
									);
									M && P.push(M);
								}
						T.sort((L, D) =>
							E.$iL.compareRangesUsingStarts(L.rangeN, D.rangeN),
						),
							P.sort(E.$iL.compareRangesUsingStarts);
						const k = [];
						for (const L of I.changes) {
							let D = !1,
								M = 0;
							for (const U of T)
								if (
									U.rangeN
										.getEndPosition()
										.isBefore(E.$iL.getStartPosition(L.range))
								)
									(M += this.l.getValueLengthInRange(U.rangeN)),
										(M -= this.k.getValueLengthInRange(U.range0));
								else if (E.$iL.areIntersectingOrTouching(U.rangeN, L.range)) {
									U.markAccepted(), (D = !0);
									break;
								} else break;
							if (D) continue;
							const N = L.rangeOffset - M,
								A = this.k.getPositionAt(N);
							let R = 0;
							for (const U of P)
								U.getEndPosition().isBefore(A) &&
									(R += this.k.getValueLengthInRange(U));
							const O = this.k.getPositionAt(N + R),
								B = this.k.getPositionAt(N + R + L.rangeLength);
							k.push(d.$jL.replace(E.$iL.fromPositions(O, B), L.text));
						}
						this.k.pushEditOperations(null, k, () => null);
					}
					async recompute(I, T) {
						T ??= await this.j.computeDiff(
							this.k.uri,
							this.l.uri,
							{
								ignoreTrimWhitespace: !1,
								maxComputationTimeMs: Number.MAX_SAFE_INTEGER,
								computeMoves: !1,
							},
							"advanced",
						);
						let P = [];
						if (T && T.changes.length > 0) {
							P = [T.changes[0]];
							for (let L = 1; L < T.changes.length; L++) {
								const D = P[P.length - 1],
									M = T.changes[L];
								M.modified.startLineNumber -
									D.modified.endLineNumberExclusive <=
								o.d
									? (P[P.length - 1] = new m.$CL(
											D.original.join(M.original),
											D.modified.join(M.modified),
											(D.innerChanges ?? []).concat(M.innerChanges ?? []),
										))
									: P.push(M);
							}
						}
						const k = P.map(
							(L) => new $(L.original, L.modified, L.innerChanges ?? []),
						);
						(I.applied = k.length),
							this.l.changeDecorations((L) => {
								this.k.changeDecorations((D) => {
									for (const {
										textModelNDecorations: M,
										textModel0Decorations: N,
									} of this.g.values())
										M.forEach(L.removeDecoration, L),
											N.forEach(D.removeDecoration, D);
									this.g.clear();
									for (const M of k) {
										const N = [],
											A = [];
										N.push(L.addDecoration(l(M.modified, this.l), o.c)),
											A.push(D.addDecoration(l(M.original, this.k), o.c));
										for (const R of M.changes)
											N.push(L.addDecoration(R.modifiedRange, o.c)),
												A.push(D.addDecoration(R.originalRange, o.c));
										this.g.set(M, {
											editState: I,
											textModelNDecorations: N,
											textModel0Decorations: A,
											state: v.Pending,
										});
									}
								});
							});
					}
					get size() {
						return this.g.size;
					}
					get pending() {
						return h.Iterable.reduce(
							this.g.values(),
							(I, { state: T }) => I + (T === v.Pending ? 1 : 0),
							0,
						);
					}
					n(I) {
						const T = [],
							P = I.getRangesN(),
							k = I.getRanges0();
						for (let L = 1; L < P.length; L++) {
							const D = P[L],
								M = this.k.getValueInRange(k[L]);
							T.push(d.$jL.replace(D, M));
						}
						return T;
					}
					discardAll() {
						const I = [];
						for (const P of this.getInfo())
							P.getState() === v.Pending && I.push(this.n(P));
						const T = [];
						return (
							this.l.pushEditOperations(
								null,
								I.flat(),
								(P) => (T.push(P), null),
							),
							T.flat()
						);
					}
					getInfo() {
						const I = [];
						for (const [T, P] of this.g.entries()) {
							const k = {
								getState: () => P.state,
								isInsertion: () => T.original.isEmpty,
								getRangesN: () => {
									const L = P.textModelNDecorations.map((D) =>
										this.l.getDecorationRange(D),
									);
									return (0, a.$Mb)(L), L;
								},
								getRanges0: () => {
									const L = P.textModel0Decorations.map((D) =>
										this.k.getDecorationRange(D),
									);
									return (0, a.$Mb)(L), L;
								},
								discardChanges: () => {
									if (P.state === v.Pending) {
										const L = this.n(k);
										this.l.pushEditOperations(null, L, () => null),
											(P.state = v.Rejected),
											P.editState.applied > 0 && (P.editState.applied -= 1);
									}
								},
								acceptChanges: () => {
									if (P.state === v.Pending) {
										const L = [],
											D = k.getRangesN(),
											M = k.getRanges0();
										for (let N = 1; N < M.length; N++) {
											const A = M[N],
												R = this.l.getValueInRange(D[N]);
											L.push(d.$jL.replace(A, R));
										}
										this.k.pushEditOperations(null, L, () => null),
											(P.state = v.Accepted);
									}
								},
							};
							I.push(k);
						}
						return I;
					}
				};
				(e.$DLb = y), (e.$DLb = y = o = Ne([j(0, u.$Cxb)], y));
				class $ {
					constructor(I, T, P) {
						(this.original = I), (this.modified = T), (this.changes = P);
					}
				}
				var v;
				(function (S) {
					(S[(S.Pending = 0)] = "Pending"),
						(S[(S.Accepted = 1)] = "Accepted"),
						(S[(S.Rejected = 2)] = "Rejected");
				})(v || (e.HunkState = v = {}));
			},
		),
		