define(
			de[1691],
			he([
				1, 0, 24, 120, 3, 37, 38, 188, 17, 104, 152, 64, 122, 73, 25, 389, 1672,
				2319,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				var o;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$oDb = e.$nDb = void 0);
				class f {
					static {
						this.f = {
							active: h.$eY.register({
								description: "snippet-placeholder-1",
								stickiness:
									a.TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges,
								className: "snippet-placeholder",
							}),
							inactive: h.$eY.register({
								description: "snippet-placeholder-2",
								stickiness:
									a.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
								className: "snippet-placeholder",
							}),
							activeFinal: h.$eY.register({
								description: "snippet-placeholder-3",
								stickiness:
									a.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
								className: "finish-snippet-placeholder",
							}),
							inactiveFinal: h.$eY.register({
								description: "snippet-placeholder-4",
								stickiness:
									a.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
								className: "finish-snippet-placeholder",
							}),
						};
					}
					constructor(y, $, v) {
						(this.g = y),
							(this.h = $),
							(this.j = v),
							(this.e = -1),
							(this._nestingLevel = 1),
							(this.d = (0, t.$Db)($.placeholders, g.$Czb.compareByIndex)),
							(this._placeholderGroupsIdx = -1);
					}
					initialize(y) {
						this.e = y.newPosition;
					}
					dispose() {
						this.c && this.g.removeDecorations([...this.c.values()]),
							(this.d.length = 0);
					}
					k() {
						if (this.e === -1) throw new Error("Snippet not initialized!");
						if (this.c) return;
						this.c = new Map();
						const y = this.g.getModel();
						this.g.changeDecorations(($) => {
							for (const v of this.h.placeholders) {
								const S = this.h.offset(v),
									I = this.h.fullLen(v),
									T = m.$iL.fromPositions(
										y.getPositionAt(this.e + S),
										y.getPositionAt(this.e + S + I),
									),
									P = v.isFinalTabstop ? f.f.inactiveFinal : f.f.inactive,
									k = $.addDecoration(T, P);
								this.c.set(v, k);
							}
						});
					}
					move(y) {
						if (!this.g.hasModel()) return [];
						if ((this.k(), this._placeholderGroupsIdx >= 0)) {
							const S = [];
							for (const I of this.d[this._placeholderGroupsIdx])
								if (I.transform) {
									const T = this.c.get(I),
										P = this.g.getModel().getDecorationRange(T),
										k = this.g.getModel().getValueInRange(P),
										L = I.transform.resolve(k).split(/\r\n|\r|\n/);
									for (let D = 1; D < L.length; D++)
										L[D] = this.g
											.getModel()
											.normalizeIndentation(this.j + L[D]);
									S.push(d.$jL.replace(P, L.join(this.g.getModel().getEOL())));
								}
							S.length > 0 &&
								this.g.executeEdits("snippet.placeholderTransform", S);
						}
						let $ = !1;
						y === !0 && this._placeholderGroupsIdx < this.d.length - 1
							? ((this._placeholderGroupsIdx += 1), ($ = !0))
							: y === !1 &&
								this._placeholderGroupsIdx > 0 &&
								((this._placeholderGroupsIdx -= 1), ($ = !0));
						const v = this.g.getModel().changeDecorations((S) => {
							const I = new Set(),
								T = [];
							for (const P of this.d[this._placeholderGroupsIdx]) {
								const k = this.c.get(P),
									L = this.g.getModel().getDecorationRange(k);
								T.push(
									new r.$kL(
										L.startLineNumber,
										L.startColumn,
										L.endLineNumber,
										L.endColumn,
									),
								),
									($ = $ && this.l(P)),
									S.changeDecorationOptions(
										k,
										P.isFinalTabstop ? f.f.activeFinal : f.f.active,
									),
									I.add(P);
								for (const D of this.h.enclosingPlaceholders(P)) {
									const M = this.c.get(D);
									S.changeDecorationOptions(
										M,
										D.isFinalTabstop ? f.f.activeFinal : f.f.active,
									),
										I.add(D);
								}
							}
							for (const [P, k] of this.c)
								I.has(P) ||
									S.changeDecorationOptions(
										k,
										P.isFinalTabstop ? f.f.inactiveFinal : f.f.inactive,
									);
							return T;
						});
						return $ ? this.move(y) : (v ?? []);
					}
					l(y) {
						let $ = y;
						for (; $; ) {
							if ($ instanceof g.$Czb) {
								const v = this.c.get($);
								if (
									this.g.getModel().getDecorationRange(v).isEmpty() &&
									$.toString().length > 0
								)
									return !0;
							}
							$ = $.parent;
						}
						return !1;
					}
					get isAtFirstPlaceholder() {
						return this._placeholderGroupsIdx <= 0 || this.d.length === 0;
					}
					get isAtLastPlaceholder() {
						return this._placeholderGroupsIdx === this.d.length - 1;
					}
					get hasPlaceholder() {
						return this.h.placeholders.length > 0;
					}
					get isTrivialSnippet() {
						if (this.h.placeholders.length === 0) return !0;
						if (this.h.placeholders.length === 1) {
							const [y] = this.h.placeholders;
							if (y.isFinalTabstop && this.h.rightMostDescendant === y)
								return !0;
						}
						return !1;
					}
					computePossibleSelections() {
						const y = new Map();
						for (const $ of this.d) {
							let v;
							for (const S of $) {
								if (S.isFinalTabstop) break;
								v || ((v = []), y.set(S.index, v));
								const I = this.c.get(S),
									T = this.g.getModel().getDecorationRange(I);
								if (!T) {
									y.delete(S.index);
									break;
								}
								v.push(T);
							}
						}
						return y;
					}
					get activeChoice() {
						if (!this.c) return;
						const y = this.d[this._placeholderGroupsIdx][0];
						if (!y?.choice) return;
						const $ = this.c.get(y);
						if (!$) return;
						const v = this.g.getModel().getDecorationRange($);
						if (v) return { range: v, choice: y.choice };
					}
					get hasChoice() {
						let y = !1;
						return this.h.walk(($) => ((y = $ instanceof g.$Dzb), !y)), y;
					}
					merge(y) {
						const $ = this.g.getModel();
						(this._nestingLevel *= 10),
							this.g.changeDecorations((v) => {
								for (const S of this.d[this._placeholderGroupsIdx]) {
									const I = y.shift();
									console.assert(I.e !== -1), console.assert(!I.c);
									const T = I.h.placeholderInfo.last.index;
									for (const k of I.h.placeholderInfo.all)
										k.isFinalTabstop
											? (k.index = S.index + (T + 1) / this._nestingLevel)
											: (k.index = S.index + k.index / this._nestingLevel);
									this.h.replace(S, I.h.children);
									const P = this.c.get(S);
									v.removeDecoration(P), this.c.delete(S);
									for (const k of I.h.placeholders) {
										const L = I.h.offset(k),
											D = I.h.fullLen(k),
											M = m.$iL.fromPositions(
												$.getPositionAt(I.e + L),
												$.getPositionAt(I.e + L + D),
											),
											N = v.addDecoration(M, f.f.inactive);
										this.c.set(k, N);
									}
								}
								this.d = (0, t.$Db)(this.h.placeholders, g.$Czb.compareByIndex);
							});
					}
					getEnclosingRange() {
						let y;
						const $ = this.g.getModel();
						for (const v of this.c.values()) {
							const S = $.getDecorationRange(v) ?? void 0;
							y ? (y = y.plusRange(S)) : (y = S);
						}
						return y;
					}
				}
				e.$nDb = f;
				const b = {
					overwriteBefore: 0,
					overwriteAfter: 0,
					adjustWhitespace: !0,
					clipboardText: void 0,
					overtypingCapturer: void 0,
				};
				let s = (o = class {
					static adjustWhitespace(y, $, v, S, I) {
						const T = y.getLineContent($.lineNumber),
							P = (0, E.$Cf)(T, 0, $.column - 1);
						let k;
						return (
							S.walk((L) => {
								if (
									!(L instanceof g.Text) ||
									L.parent instanceof g.$Dzb ||
									(I && !I.has(L))
								)
									return !0;
								const D = L.value.split(/\r\n|\r|\n/);
								if (v) {
									const N = S.offset(L);
									if (N === 0) D[0] = y.normalizeIndentation(D[0]);
									else {
										k = k ?? S.toString();
										const A = k.charCodeAt(N - 1);
										(A === i.CharCode.LineFeed ||
											A === i.CharCode.CarriageReturn) &&
											(D[0] = y.normalizeIndentation(P + D[0]));
									}
									for (let A = 1; A < D.length; A++)
										D[A] = y.normalizeIndentation(P + D[A]);
								}
								const M = D.join(y.getEOL());
								return (
									M !== L.value &&
										(L.parent.replace(L, [new g.Text(M)]), (k = void 0)),
									!0
								);
							}),
							P
						);
					}
					static adjustSelection(y, $, v, S) {
						if (v !== 0 || S !== 0) {
							const { positionLineNumber: I, positionColumn: T } = $,
								P = T - v,
								k = T + S,
								L = y.validateRange({
									startLineNumber: I,
									startColumn: P,
									endLineNumber: I,
									endColumn: k,
								});
							$ = r.$kL.createWithDirection(
								L.startLineNumber,
								L.startColumn,
								L.endLineNumber,
								L.endColumn,
								$.getDirection(),
							);
						}
						return $;
					}
					static createEditsAndSnippetsFromSelections(
						y,
						$,
						v,
						S,
						I,
						T,
						P,
						k,
						L,
					) {
						const D = [],
							M = [];
						if (!y.hasModel()) return { edits: D, snippets: M };
						const N = y.getModel(),
							A = y.invokeWithinContext((x) => x.get(n.$Vi)),
							R = y.invokeWithinContext((x) => new p.$hDb(x.get(c.$3N), N)),
							O = () => P,
							B = N.getValueInRange(
								o.adjustSelection(N, y.getSelection(), v, 0),
							),
							U = N.getValueInRange(
								o.adjustSelection(N, y.getSelection(), 0, S),
							),
							z = N.getLineFirstNonWhitespaceColumn(
								y.getSelection().positionLineNumber,
							),
							F = y
								.getSelections()
								.map((x, H) => ({ selection: x, idx: H }))
								.sort((x, H) =>
									m.$iL.compareRangesUsingStarts(x.selection, H.selection),
								);
						for (const { selection: x, idx: H } of F) {
							let q = o.adjustSelection(N, x, v, 0),
								V = o.adjustSelection(N, x, 0, S);
							B !== N.getValueInRange(q) && (q = x),
								U !== N.getValueInRange(V) && (V = x);
							const G = x
									.setStartPosition(q.startLineNumber, q.startColumn)
									.setEndPosition(V.endLineNumber, V.endColumn),
								K = new g.$Izb().parse($, !0, I),
								J = G.getStartPosition(),
								W = o.adjustWhitespace(
									N,
									J,
									T ||
										(H > 0 &&
											z !==
												N.getLineFirstNonWhitespaceColumn(
													x.positionLineNumber,
												)),
									K,
								);
							K.resolveVariables(
								new p.$fDb([
									R,
									new p.$iDb(
										O,
										H,
										F.length,
										y.getOption(C.EditorOption.multiCursorPaste) === "spread",
									),
									new p.$gDb(N, x, H, k),
									new p.$jDb(N, x, L),
									new p.$kDb(),
									new p.$lDb(A),
									new p.$mDb(),
								]),
							),
								(D[H] = d.$jL.replace(G, K.toString())),
								(D[H].identifier = { major: H, minor: 0 }),
								(D[H]._isTracked = !0),
								(M[H] = new f(y, K, W));
						}
						return { edits: D, snippets: M };
					}
					static createEditsAndSnippetsFromEdits(y, $, v, S, I, T, P) {
						if (!y.hasModel() || $.length === 0)
							return { edits: [], snippets: [] };
						const k = [],
							L = y.getModel(),
							D = new g.$Izb(),
							M = new g.$Hzb(),
							N = new p.$fDb([
								y.invokeWithinContext((R) => new p.$hDb(R.get(c.$3N), L)),
								new p.$iDb(
									() => I,
									0,
									y.getSelections().length,
									y.getOption(C.EditorOption.multiCursorPaste) === "spread",
								),
								new p.$gDb(L, y.getSelection(), 0, T),
								new p.$jDb(L, y.getSelection(), P),
								new p.$kDb(),
								new p.$lDb(y.invokeWithinContext((R) => R.get(n.$Vi))),
								new p.$mDb(),
							]);
						$ = $.sort((R, O) =>
							m.$iL.compareRangesUsingStarts(R.range, O.range),
						);
						let A = 0;
						for (let R = 0; R < $.length; R++) {
							const { range: O, template: B } = $[R];
							if (R > 0) {
								const H = $[R - 1].range,
									q = m.$iL.fromPositions(
										H.getEndPosition(),
										O.getStartPosition(),
									),
									V = new g.Text(L.getValueInRange(q));
								M.appendChild(V), (A += V.value.length);
							}
							const U = D.parseFragment(B, M);
							o.adjustWhitespace(L, O.getStartPosition(), !0, M, new Set(U)),
								M.resolveVariables(N);
							const z = M.toString(),
								F = z.slice(A);
							A = z.length;
							const x = d.$jL.replace(O, F);
							(x.identifier = { major: R, minor: 0 }),
								(x._isTracked = !0),
								k.push(x);
						}
						return (
							D.ensureFinalTabstop(M, v, !0),
							{ edits: k, snippets: [new f(y, M, "")] }
						);
					}
					constructor(y, $, v = b, S) {
						(this.e = y),
							(this.f = $),
							(this.g = v),
							(this.h = S),
							(this.c = []),
							(this.d = []);
					}
					dispose() {
						(0, w.$Vc)(this.d);
					}
					_logInfo() {
						return `template="${this.f}", merged_templates="${this.c.join(" -> ")}"`;
					}
					insert() {
						if (!this.e.hasModel()) return;
						const { edits: y, snippets: $ } =
							typeof this.f == "string"
								? o.createEditsAndSnippetsFromSelections(
										this.e,
										this.f,
										this.g.overwriteBefore,
										this.g.overwriteAfter,
										!1,
										this.g.adjustWhitespace,
										this.g.clipboardText,
										this.g.overtypingCapturer,
										this.h,
									)
								: o.createEditsAndSnippetsFromEdits(
										this.e,
										this.f,
										!1,
										this.g.adjustWhitespace,
										this.g.clipboardText,
										this.g.overtypingCapturer,
										this.h,
									);
						(this.d = $),
							this.e.executeEdits("snippet", y, (v) => {
								const S = v.filter((I) => !!I.identifier);
								for (let I = 0; I < $.length; I++)
									$[I].initialize(S[I].textChange);
								return this.d[0].hasPlaceholder
									? this.j(!0)
									: S.map((I) => r.$kL.fromPositions(I.range.getEndPosition()));
							}),
							this.e.revealRange(this.e.getSelections()[0]);
					}
					merge(y, $ = b) {
						if (!this.e.hasModel()) return;
						this.c.push([
							this.d[0]._nestingLevel,
							this.d[0]._placeholderGroupsIdx,
							y,
						]);
						const { edits: v, snippets: S } =
							o.createEditsAndSnippetsFromSelections(
								this.e,
								y,
								$.overwriteBefore,
								$.overwriteAfter,
								!0,
								$.adjustWhitespace,
								$.clipboardText,
								$.overtypingCapturer,
								this.h,
							);
						this.e.executeEdits("snippet", v, (I) => {
							const T = I.filter((k) => !!k.identifier);
							for (let k = 0; k < S.length; k++)
								S[k].initialize(T[k].textChange);
							const P = S[0].isTrivialSnippet;
							if (!P) {
								for (const k of this.d) k.merge(S);
								console.assert(S.length === 0);
							}
							return this.d[0].hasPlaceholder && !P
								? this.j(void 0)
								: T.map((k) => r.$kL.fromPositions(k.range.getEndPosition()));
						});
					}
					next() {
						const y = this.j(!0);
						this.e.setSelections(y),
							this.e.revealPositionInCenterIfOutsideViewport(
								y[0].getPosition(),
							);
					}
					prev() {
						const y = this.j(!1);
						this.e.setSelections(y),
							this.e.revealPositionInCenterIfOutsideViewport(
								y[0].getPosition(),
							);
					}
					j(y) {
						const $ = [];
						for (const v of this.d) {
							const S = v.move(y);
							$.push(...S);
						}
						return $;
					}
					get isAtFirstPlaceholder() {
						return this.d[0].isAtFirstPlaceholder;
					}
					get isAtLastPlaceholder() {
						return this.d[0].isAtLastPlaceholder;
					}
					get hasPlaceholder() {
						return this.d[0].hasPlaceholder;
					}
					get hasChoice() {
						return this.d[0].hasChoice;
					}
					get activeChoice() {
						return this.d[0].activeChoice;
					}
					isSelectionWithinPlaceholders() {
						if (!this.hasPlaceholder) return !1;
						const y = this.e.getSelections();
						if (y.length < this.d.length) return !1;
						const $ = new Map();
						for (const v of this.d) {
							const S = v.computePossibleSelections();
							if ($.size === 0)
								for (const [I, T] of S) {
									T.sort(m.$iL.compareRangesUsingStarts);
									for (const P of y)
										if (T[0].containsRange(P)) {
											$.set(I, []);
											break;
										}
								}
							if ($.size === 0) return !1;
							$.forEach((I, T) => {
								I.push(...S.get(T));
							});
						}
						y.sort(m.$iL.compareRangesUsingStarts);
						for (const [v, S] of $) {
							if (S.length !== y.length) {
								$.delete(v);
								continue;
							}
							S.sort(m.$iL.compareRangesUsingStarts);
							for (let I = 0; I < S.length; I++)
								if (!S[I].containsRange(y[I])) {
									$.delete(v);
									continue;
								}
						}
						return $.size > 0;
					}
					getEnclosingRange() {
						let y;
						for (const $ of this.d) {
							const v = $.getEnclosingRange();
							y ? (y = y.plusRange(v)) : (y = v);
						}
						return y;
					}
				});
				(e.$oDb = s), (e.$oDb = s = o = Ne([j(3, u.$aN)], s));
			},
		),
		