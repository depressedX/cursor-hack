define(de[3077], he([1, 0, 32]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$NZb = void 0);
			let i = class {
				constructor(E) {
					this.a = E;
				}
				reportMergeEditorOpened(E) {
					this.a.publicLog2("mergeEditor.opened", {
						conflictCount: E.conflictCount,
						combinableConflictCount: E.combinableConflictCount,
						baseVisible: E.baseVisible,
						isColumnView: E.isColumnView,
						baseTop: E.baseTop,
					});
				}
				reportLayoutChange(E) {
					this.a.publicLog2("mergeEditor.layoutChanged", {
						baseVisible: E.baseVisible,
						isColumnView: E.isColumnView,
						baseTop: E.baseTop,
					});
				}
				reportMergeEditorClosed(E) {
					this.a.publicLog2("mergeEditor.closed", {
						conflictCount: E.conflictCount,
						combinableConflictCount: E.combinableConflictCount,
						durationOpenedSecs: E.durationOpenedSecs,
						remainingConflictCount: E.remainingConflictCount,
						accepted: E.accepted,
						conflictsResolvedWithBase: E.conflictsResolvedWithBase,
						conflictsResolvedWithInput1: E.conflictsResolvedWithInput1,
						conflictsResolvedWithInput2: E.conflictsResolvedWithInput2,
						conflictsResolvedWithSmartCombination:
							E.conflictsResolvedWithSmartCombination,
						manuallySolvedConflictCountThatEqualNone:
							E.manuallySolvedConflictCountThatEqualNone,
						manuallySolvedConflictCountThatEqualSmartCombine:
							E.manuallySolvedConflictCountThatEqualSmartCombine,
						manuallySolvedConflictCountThatEqualInput1:
							E.manuallySolvedConflictCountThatEqualInput1,
						manuallySolvedConflictCountThatEqualInput2:
							E.manuallySolvedConflictCountThatEqualInput2,
						manuallySolvedConflictCountThatEqualNoneAndStartedWithBase:
							E.manuallySolvedConflictCountThatEqualNoneAndStartedWithBase,
						manuallySolvedConflictCountThatEqualNoneAndStartedWithInput1:
							E.manuallySolvedConflictCountThatEqualNoneAndStartedWithInput1,
						manuallySolvedConflictCountThatEqualNoneAndStartedWithInput2:
							E.manuallySolvedConflictCountThatEqualNoneAndStartedWithInput2,
						manuallySolvedConflictCountThatEqualNoneAndStartedWithBothNonSmart:
							E.manuallySolvedConflictCountThatEqualNoneAndStartedWithBothNonSmart,
						manuallySolvedConflictCountThatEqualNoneAndStartedWithBothSmart:
							E.manuallySolvedConflictCountThatEqualNoneAndStartedWithBothSmart,
					});
				}
				reportAcceptInvoked(E, C) {
					this.a.publicLog2("mergeEditor.action.accept", {
						otherAccepted: C,
						isInput1: E === 1,
					});
				}
				reportSmartCombinationInvoked(E) {
					this.a.publicLog2("mergeEditor.action.smartCombination", {
						otherAccepted: E,
					});
				}
				reportRemoveInvoked(E, C) {
					this.a.publicLog2("mergeEditor.action.remove", {
						otherAccepted: C,
						isInput1: E === 1,
					});
				}
				reportResetToBaseInvoked() {
					this.a.publicLog2("mergeEditor.action.resetToBase", {});
				}
				reportNavigationToNextConflict() {
					this.a.publicLog2("mergeEditor.action.goToNextConflict", {});
				}
				reportNavigationToPreviousConflict() {
					this.a.publicLog2("mergeEditor.action.goToPreviousConflict", {});
				}
				reportConflictCounterClicked() {
					this.a.publicLog2("mergeEditor.action.conflictCounterClicked", {});
				}
			};
			(e.$NZb = i), (e.$NZb = i = Ne([j(0, t.$km)], i));
		}),
		define(
			de[508],
			he([1, 0, 24, 29, 3, 77, 21]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$oZb = void 0),
					(e.$fZb = d),
					(e.$gZb = r),
					(e.$hZb = u),
					(e.join = a),
					(e.$jZb = h),
					(e.$kZb = c),
					(e.$lZb = n),
					(e.$mZb = g),
					(e.$nZb = p);
				function d(f, b) {
					Object.entries(b).forEach(([s, l]) => {
						f.style.setProperty(s, m(l));
					});
				}
				function m(f) {
					return typeof f == "number" ? `${f}px` : f;
				}
				function r(f, b) {
					const s = new w.$Zc();
					let l = [];
					return (
						s.add(
							(0, E.autorunOpts)(
								{ debugName: () => `Apply decorations from ${b.debugName}` },
								(y) => {
									const $ = b.read(y);
									f.changeDecorations((v) => {
										l = v.deltaDecorations(l, $);
									});
								},
							),
						),
						s.add({
							dispose: () => {
								f.changeDecorations((y) => {
									l = y.deltaDecorations(l, []);
								});
							},
						}),
						s
					);
				}
				function* u(f, b, s) {
					const l = new t.$cc(b);
					for (const y of f) {
						l.takeWhile((v) => t.CompareResult.isGreaterThan(s(y, v)));
						const $ = l.takeWhile((v) =>
							t.CompareResult.isNeitherLessOrGreaterThan(s(y, v)),
						);
						yield { left: y, rights: $ || [] };
					}
				}
				function* a(f, b, s) {
					const l = new t.$cc(b);
					for (const y of f) {
						const $ = l.takeWhile((S) =>
							t.CompareResult.isGreaterThan(s(y, S)),
						);
						$ && (yield { rights: $ });
						const v = l.takeWhile((S) =>
							t.CompareResult.isNeitherLessOrGreaterThan(s(y, S)),
						);
						yield { left: y, rights: v || [] };
					}
				}
				function h(...f) {
					return [].concat(...f);
				}
				function c(f, b) {
					return f[b];
				}
				function n(f, b) {
					let s = !1;
					return (
						f.then(() => {
							s || b();
						}),
						(0, w.$Yc)(() => {
							s = !0;
						})
					);
				}
				function g(f, b) {
					return Object.assign(f, b);
				}
				function p(f, b) {
					const s = {};
					for (const l in f) s[l] = f[l];
					for (const l in b) {
						const y = b[l];
						typeof s[l] == "object" && y && typeof y == "object"
							? (s[l] = p(s[l], y))
							: (s[l] = y);
					}
					return s;
				}
				let o = class {
					constructor(b, s) {
						(this.f = b), (this.g = s), (this.b = !1), (this.c = void 0);
					}
					get() {
						if (!this.b) {
							const b = this.g.get(this.f, C.StorageScope.PROFILE);
							if (b !== void 0)
								try {
									this.c = JSON.parse(b);
								} catch (s) {
									(0, i.$4)(s);
								}
							this.b = !0;
						}
						return this.c;
					}
					set(b) {
						(this.c = b),
							this.g.store(
								this.f,
								JSON.stringify(this.c),
								C.StorageScope.PROFILE,
								C.StorageTarget.USER,
							);
					}
				};
				(e.$oZb = o), (e.$oZb = o = Ne([j(1, C.$lq)], o));
			},
		),
		define(
			de[686],
			he([1, 0, 24, 214, 229, 29, 17, 508, 1249, 507, 1739]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$zZb = e.$yZb = e.$xZb = e.$wZb = e.$vZb = e.$uZb = void 0);
				class a {
					static join(f) {
						return f.reduce((b, s) => (b ? b.join(s) : s), void 0);
					}
					constructor(f, b) {
						(this.inputRange = f), (this.outputRange = b);
					}
					extendInputRange(f) {
						if (!f.containsRange(this.inputRange)) throw new E.$gb();
						const b = f.startLineNumber - this.inputRange.startLineNumber,
							s =
								f.endLineNumberExclusive -
								this.inputRange.endLineNumberExclusive;
						return new a(
							f,
							new r.$bZb(
								this.outputRange.startLineNumber + b,
								this.outputRange.lineCount - b + s,
							),
						);
					}
					join(f) {
						return new a(
							this.inputRange.join(f.inputRange),
							this.outputRange.join(f.outputRange),
						);
					}
					get resultingDeltaFromOriginalToModified() {
						return (
							this.outputRange.endLineNumberExclusive -
							this.inputRange.endLineNumberExclusive
						);
					}
					toString() {
						return `${this.inputRange.toString()} -> ${this.outputRange.toString()}`;
					}
					addOutputLineDelta(f) {
						return new a(this.inputRange, this.outputRange.delta(f));
					}
					addInputLineDelta(f) {
						return new a(this.inputRange.delta(f), this.outputRange);
					}
					reverse() {
						return new a(this.outputRange, this.inputRange);
					}
				}
				e.$uZb = a;
				class h {
					static betweenOutputs(f, b, s) {
						const y = c
							.compute(f, b)
							.map(($) => new a($.output1Range, $.output2Range));
						return new h(y, s);
					}
					constructor(f, b) {
						(this.lineRangeMappings = f),
							(this.inputLineCount = b),
							(0, w.$nd)(() =>
								(0, w.$od)(
									f,
									(s, l) =>
										s.inputRange.isBefore(l.inputRange) &&
										s.outputRange.isBefore(l.outputRange) &&
										l.inputRange.startLineNumber -
											s.inputRange.endLineNumberExclusive ===
											l.outputRange.startLineNumber -
												s.outputRange.endLineNumberExclusive,
								),
							);
					}
					project(f) {
						const b = (0, i.$jb)(
							this.lineRangeMappings,
							(y) => y.inputRange.startLineNumber <= f,
						);
						if (!b) return new a(new r.$bZb(f, 1), new r.$bZb(f, 1));
						if (b.inputRange.contains(f)) return b;
						const s = new r.$bZb(f, 1),
							l = new r.$bZb(
								f +
									b.outputRange.endLineNumberExclusive -
									b.inputRange.endLineNumberExclusive,
								1,
							);
						return new a(s, l);
					}
					get outputLineCount() {
						const f = (0, t.$Tb)(this.lineRangeMappings),
							b = f
								? f.outputRange.endLineNumberExclusive -
									f.inputRange.endLineNumberExclusive
								: 0;
						return this.inputLineCount + b;
					}
					reverse() {
						return new h(
							this.lineRangeMappings.map((f) => f.reverse()),
							this.outputLineCount,
						);
					}
				}
				e.$vZb = h;
				class c {
					static compute(f, b) {
						const s = (0, t.$0b)((T) => T.inputRange.startLineNumber, t.$_b),
							l = (0, d.$jZb)(
								f.map((T) => ({ source: 0, diff: T })),
								b.map((T) => ({ source: 1, diff: T })),
							).sort((0, t.$0b)((T) => T.diff, s)),
							y = [new Array(), new Array()],
							$ = [0, 0],
							v = new Array();
						function S(T) {
							const P = a.join(y[0]) || new a(T, T.delta($[0])),
								k = a.join(y[1]) || new a(T, T.delta($[1]));
							v.push(
								new c(
									I,
									P.extendInputRange(I).outputRange,
									y[0],
									k.extendInputRange(I).outputRange,
									y[1],
								),
							),
								(y[0] = []),
								(y[1] = []);
						}
						let I;
						for (const T of l) {
							const P = T.diff.inputRange;
							I && !I.touches(P) && (S(I), (I = void 0)),
								($[T.source] = T.diff.resultingDeltaFromOriginalToModified),
								(I = I ? I.join(P) : P),
								y[T.source].push(T.diff);
						}
						return I && S(I), v;
					}
					constructor(f, b, s, l, y) {
						(this.inputRange = f),
							(this.output1Range = b),
							(this.output1LineMappings = s),
							(this.output2Range = l),
							(this.output2LineMappings = y);
					}
					toString() {
						return `${this.output1Range} <- ${this.inputRange} -> ${this.output2Range}`;
					}
				}
				e.$wZb = c;
				class n extends a {
					static join(f) {
						return f.reduce((b, s) => (b ? b.join(s) : s), void 0);
					}
					constructor(f, b, s, l, y) {
						super(f, s),
							(this.inputTextModel = b),
							(this.outputTextModel = l),
							(this.rangeMappings = y || [
								new g(this.inputRange.toRange(), this.outputRange.toRange()),
							]);
					}
					addOutputLineDelta(f) {
						return new n(
							this.inputRange,
							this.inputTextModel,
							this.outputRange.delta(f),
							this.outputTextModel,
							this.rangeMappings.map((b) => b.addOutputLineDelta(f)),
						);
					}
					addInputLineDelta(f) {
						return new n(
							this.inputRange.delta(f),
							this.inputTextModel,
							this.outputRange,
							this.outputTextModel,
							this.rangeMappings.map((b) => b.addInputLineDelta(f)),
						);
					}
					join(f) {
						return new n(
							this.inputRange.join(f.inputRange),
							this.inputTextModel,
							this.outputRange.join(f.outputRange),
							this.outputTextModel,
						);
					}
					getLineEdit() {
						return new m.$cZb(this.inputRange, this.a());
					}
					getReverseLineEdit() {
						return new m.$cZb(this.outputRange, this.b());
					}
					a() {
						return this.outputRange.getLines(this.outputTextModel);
					}
					b() {
						return this.inputRange.getLines(this.inputTextModel);
					}
				}
				e.$xZb = n;
				class g {
					constructor(f, b) {
						(this.inputRange = f), (this.outputRange = b);
					}
					toString() {
						function f(b) {
							return `[${b.startLineNumber}:${b.startColumn}, ${b.endLineNumber}:${b.endColumn})`;
						}
						return `${f(this.inputRange)} -> ${f(this.outputRange)}`;
					}
					addOutputLineDelta(f) {
						return new g(
							this.inputRange,
							new C.$iL(
								this.outputRange.startLineNumber + f,
								this.outputRange.startColumn,
								this.outputRange.endLineNumber + f,
								this.outputRange.endColumn,
							),
						);
					}
					addInputLineDelta(f) {
						return new g(
							new C.$iL(
								this.inputRange.startLineNumber + f,
								this.inputRange.startColumn,
								this.inputRange.endLineNumber + f,
								this.inputRange.endColumn,
							),
							this.outputRange,
						);
					}
					reverse() {
						return new g(this.outputRange, this.inputRange);
					}
				}
				e.$yZb = g;
				class p {
					constructor(f, b) {
						(this.rangeMappings = f),
							(this.inputLineCount = b),
							(0, w.$nd)(() =>
								(0, w.$od)(
									f,
									(s, l) =>
										(0, u.$tZb)(s.inputRange, l.inputRange) &&
										(0, u.$tZb)(s.outputRange, l.outputRange),
								),
							);
					}
					project(f) {
						const b = (0, i.$jb)(this.rangeMappings, (y) =>
							y.inputRange.getStartPosition().isBeforeOrEqual(f),
						);
						if (!b)
							return new g(
								C.$iL.fromPositions(f, f),
								C.$iL.fromPositions(f, f),
							);
						if ((0, u.$pZb)(b.inputRange, f)) return b;
						const s = (0, u.$rZb)(b.inputRange.getEndPosition(), f),
							l = (0, u.$sZb)(b.outputRange.getEndPosition(), s);
						return new g(C.$iL.fromPositions(f), C.$iL.fromPositions(l));
					}
					projectRange(f) {
						const b = this.project(f.getStartPosition()),
							s = this.project(f.getEndPosition());
						return new g(
							b.inputRange.plusRange(s.inputRange),
							b.outputRange.plusRange(s.outputRange),
						);
					}
					get outputLineCount() {
						const f = (0, t.$Tb)(this.rangeMappings),
							b = f
								? f.outputRange.endLineNumber - f.inputRange.endLineNumber
								: 0;
						return this.inputLineCount + b;
					}
					reverse() {
						return new p(
							this.rangeMappings.map((f) => f.reverse()),
							this.outputLineCount,
						);
					}
				}
				e.$zZb = p;
			},
		),
		define(
			de[3078],
			he([1, 0, 229, 200, 10, 507, 686, 326]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$JZb = void 0),
					(e.$KZb = r),
					(e.$LZb = u);
				let m = class {
					constructor(h, c) {
						(this.b = h),
							(this.d = c),
							(this.a = (0, d.$Mwb)(
								"mergeEditor.diffAlgorithm",
								"advanced",
								this.d,
							).map((n) =>
								n === "smart"
									? "legacy"
									: n === "experimental"
										? "advanced"
										: n,
							));
					}
					async computeDiff(h, c, n) {
						const g = this.a.read(n),
							p = h.getVersionId(),
							o = c.getVersionId(),
							f = await this.b.computeDiff(
								h.uri,
								c.uri,
								{
									ignoreTrimWhitespace: !1,
									maxComputationTimeMs: 0,
									computeMoves: !1,
								},
								g,
							);
						if (!f) throw new Error("Diff computation failed");
						if (h.isDisposed() || c.isDisposed()) return { diffs: null };
						const b = f.changes.map(
								(y) =>
									new C.$xZb(
										r(y.original),
										h,
										r(y.modified),
										c,
										y.innerChanges?.map(($) => u($)),
									),
							),
							s = h.getVersionId(),
							l = c.getVersionId();
						return p !== s || o !== l
							? { diffs: null }
							: ((0, t.$nd)(() => {
									for (const y of b) {
										const $ = y.inputRange,
											v = y.outputRange,
											S = y.inputTextModel,
											I = y.outputTextModel;
										for (const T of y.rangeMappings) {
											let P =
												$.startLineNumber - 1 <= T.inputRange.startLineNumber &&
												T.inputRange.endLineNumber <= $.endLineNumberExclusive;
											P &&
												T.inputRange.startLineNumber ===
													$.startLineNumber - 1 &&
												(P =
													T.inputRange.endColumn >=
													S.getLineMaxColumn(T.inputRange.startLineNumber)),
												P &&
													T.inputRange.endLineNumber ===
														$.endLineNumberExclusive &&
													(P = T.inputRange.endColumn === 1);
											let k =
												v.startLineNumber - 1 <=
													T.outputRange.startLineNumber &&
												T.outputRange.endLineNumber <= v.endLineNumberExclusive;
											if (
												(k &&
													T.outputRange.startLineNumber ===
														v.startLineNumber - 1 &&
													(k =
														T.outputRange.endColumn >=
														I.getLineMaxColumn(T.outputRange.endLineNumber)),
												k &&
													T.outputRange.endLineNumber ===
														v.endLineNumberExclusive &&
													(k = T.outputRange.endColumn === 1),
												!P || !k)
											)
												return !1;
										}
									}
									return (
										b.length === 0 ||
										(b[0].inputRange.startLineNumber ===
											b[0].outputRange.startLineNumber &&
											(0, t.$od)(
												b,
												(y, $) =>
													$.inputRange.startLineNumber -
														y.inputRange.endLineNumberExclusive ===
														$.outputRange.startLineNumber -
															y.outputRange.endLineNumberExclusive &&
													y.inputRange.endLineNumberExclusive <
														$.inputRange.startLineNumber &&
													y.outputRange.endLineNumberExclusive <
														$.outputRange.startLineNumber,
											))
									);
								}),
								{ diffs: b });
					}
				};
				(e.$JZb = m), (e.$JZb = m = Ne([j(0, i.$Cxb), j(1, w.$gj)], m));
				function r(a) {
					return new E.$bZb(a.startLineNumber, a.length);
				}
				function u(a) {
					return new C.$yZb(a.originalRange, a.modifiedRange);
				}
			},
		),
		define(
			de[1250],
			he([1, 0, 24, 29, 37, 210, 48, 17, 1249, 686, 508]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.InputState =
						e.ModifiedBaseRangeState =
						e.$HZb =
						e.$GZb =
						e.$FZb =
						e.$EZb =
						e.$DZb =
						e.$CZb =
						e.ModifiedBaseRangeStateKind =
						e.$AZb =
							void 0),
					(e.$BZb = n);
				class a {
					static fromDiffs(v, S, I, T, P) {
						return r.$wZb
							.compute(v, S)
							.map(
								(L) =>
									new a(
										L.inputRange,
										I,
										L.output1Range,
										T,
										L.output1LineMappings,
										L.output2Range,
										P,
										L.output2LineMappings,
									),
							);
					}
					constructor(v, S, I, T, P, k, L, D) {
						if (
							((this.baseRange = v),
							(this.baseTextModel = S),
							(this.input1Range = I),
							(this.input1TextModel = T),
							(this.input1Diffs = P),
							(this.input2Range = k),
							(this.input2TextModel = L),
							(this.input2Diffs = D),
							(this.input1CombinedDiff = r.$xZb.join(this.input1Diffs)),
							(this.input2CombinedDiff = r.$xZb.join(this.input2Diffs)),
							(this.isEqualChange = (0, t.$yb)(
								this.input1Diffs,
								this.input2Diffs,
								(M, N) => M.getLineEdit().equals(N.getLineEdit()),
							)),
							(this.c = null),
							(this.e = null),
							(this.g = null),
							(this.h = null),
							this.input1Diffs.length === 0 && this.input2Diffs.length === 0)
						)
							throw new i.$gb("must have at least one diff");
					}
					getInputRange(v) {
						return v === 1 ? this.input1Range : this.input2Range;
					}
					getInputCombinedDiff(v) {
						return v === 1 ? this.input1CombinedDiff : this.input2CombinedDiff;
					}
					getInputDiffs(v) {
						return v === 1 ? this.input1Diffs : this.input2Diffs;
					}
					get isConflicting() {
						return this.input1Diffs.length > 0 && this.input2Diffs.length > 0;
					}
					get canBeCombined() {
						return this.f(1) !== void 0;
					}
					get isOrderRelevant() {
						const v = this.f(1),
							S = this.f(2);
						return !v || !S ? !1 : !v.equals(S);
					}
					getEditForBase(v) {
						const S = [];
						if (
							(v.includesInput1 &&
								this.input1CombinedDiff &&
								S.push({ diff: this.input1CombinedDiff, inputNumber: 1 }),
							v.includesInput2 &&
								this.input2CombinedDiff &&
								S.push({ diff: this.input2CombinedDiff, inputNumber: 2 }),
							S.length === 0)
						)
							return { edit: void 0, effectiveState: l.base };
						if (S.length === 1)
							return {
								edit: S[0].diff.getLineEdit(),
								effectiveState: l.base.withInputValue(S[0].inputNumber, !0, !1),
							};
						if (v.kind !== c.both) throw new i.$gb();
						const I = v.smartCombination
							? this.f(v.firstInput)
							: this.i(v.firstInput);
						return I
							? { edit: I, effectiveState: v }
							: {
									edit: S[n(v.firstInput) - 1].diff.getLineEdit(),
									effectiveState: l.base.withInputValue(
										n(v.firstInput),
										!0,
										!1,
									),
								};
					}
					f(v) {
						if (v === 1 && this.c !== null) return this.c;
						if (v === 2 && this.e !== null) return this.e;
						const I = (0, u.$jZb)(
								this.input1Diffs.flatMap((P) =>
									P.rangeMappings.map((k) => ({ diff: k, input: 1 })),
								),
								this.input2Diffs.flatMap((P) =>
									P.rangeMappings.map((k) => ({ diff: k, input: 2 })),
								),
							)
								.sort(
									(0, t.$$b)(
										(0, t.$0b)(
											(P) => P.diff.inputRange,
											d.$iL.compareRangesUsingStarts,
										),
										(0, t.$0b)((P) => (P.input === v ? 1 : 2), t.$_b),
									),
								)
								.map((P) => {
									const k =
										P.input === 1 ? this.input1TextModel : this.input2TextModel;
									return new m.$dZb(
										P.diff.inputRange,
										k.getValueInRange(P.diff.outputRange),
									);
								}),
							T = h(this.baseRange, I, this.baseTextModel);
						return v === 1 ? (this.c = T) : (this.e = T), T;
					}
					i(v) {
						if (v === 1 && this.g !== null) return this.g;
						if (v === 2 && this.h !== null) return this.h;
						let S = this.input1Range.getLines(this.input1TextModel),
							I = this.input2Range.getLines(this.input2TextModel);
						v === 2 && ([S, I] = [I, S]);
						const T = new m.$cZb(this.baseRange, S.concat(I));
						return v === 1 ? (this.g = T) : (this.h = T), T;
					}
				}
				e.$AZb = a;
				function h($, v, S) {
					let I = "";
					const T = $.startLineNumber > 1;
					let P = T
						? new C.$hL(
								$.startLineNumber - 1,
								S.getLineMaxColumn($.startLineNumber - 1),
							)
						: new C.$hL($.startLineNumber, 1);
					for (const N of v) {
						const A = N.range.getStartPosition();
						if (!P.isBeforeOrEqual(A)) return;
						let R = S.getValueInRange(d.$iL.fromPositions(P, A));
						A.lineNumber > S.getLineCount() &&
							(R += `
`),
							(I += R),
							(I += N.newText),
							(P = N.range.getEndPosition());
					}
					const k = $.endLineNumberExclusive <= S.getLineCount(),
						L = k
							? new C.$hL($.endLineNumberExclusive, 1)
							: new C.$hL(
									$.endLineNumberExclusive - 1,
									E.Constants.MAX_SAFE_SMALL_INTEGER,
								),
						D = S.getValueInRange(d.$iL.fromPositions(P, L));
					I += D;
					const M = (0, w.$zf)(I);
					if (T) {
						if (M[0] !== "") return;
						M.shift();
					}
					if (k) {
						if (M[M.length - 1] !== "") return;
						M.pop();
					}
					return new m.$cZb($, M);
				}
				var c;
				(function ($) {
					($[($.base = 0)] = "base"),
						($[($.input1 = 1)] = "input1"),
						($[($.input2 = 2)] = "input2"),
						($[($.both = 3)] = "both"),
						($[($.unrecognized = 4)] = "unrecognized");
				})(c || (e.ModifiedBaseRangeStateKind = c = {}));
				function n($) {
					return $ === 1 ? 2 : 1;
				}
				class g {
					constructor() {}
					get includesInput1() {
						return !1;
					}
					get includesInput2() {
						return !1;
					}
					includesInput(v) {
						return v === 1 ? this.includesInput1 : this.includesInput2;
					}
					isInputIncluded(v) {
						return v === 1 ? this.includesInput1 : this.includesInput2;
					}
					toggle(v) {
						return this.withInputValue(v, !this.includesInput(v), !0);
					}
					getInput(v) {
						return this.isInputIncluded(v) ? y.first : y.excluded;
					}
				}
				e.$CZb = g;
				class p extends g {
					get kind() {
						return c.base;
					}
					toString() {
						return "base";
					}
					swap() {
						return this;
					}
					withInputValue(v, S, I = !1) {
						return v === 1 ? (S ? new o() : this) : S ? new f() : this;
					}
					equals(v) {
						return v.kind === c.base;
					}
				}
				e.$DZb = p;
				class o extends g {
					get kind() {
						return c.input1;
					}
					get includesInput1() {
						return !0;
					}
					toString() {
						return "1\u2713";
					}
					swap() {
						return new f();
					}
					withInputValue(v, S, I = !1) {
						return v === 1 ? (S ? this : new p()) : S ? new b(1, I) : new f();
					}
					equals(v) {
						return v.kind === c.input1;
					}
				}
				e.$EZb = o;
				class f extends g {
					get kind() {
						return c.input2;
					}
					get includesInput2() {
						return !0;
					}
					toString() {
						return "2\u2713";
					}
					swap() {
						return new o();
					}
					withInputValue(v, S, I = !1) {
						return v === 2 ? (S ? this : new p()) : S ? new b(2, I) : new f();
					}
					equals(v) {
						return v.kind === c.input2;
					}
				}
				e.$FZb = f;
				class b extends g {
					constructor(v, S) {
						super(), (this.firstInput = v), (this.smartCombination = S);
					}
					get kind() {
						return c.both;
					}
					get includesInput1() {
						return !0;
					}
					get includesInput2() {
						return !0;
					}
					toString() {
						return "2\u2713";
					}
					swap() {
						return new b(n(this.firstInput), this.smartCombination);
					}
					withInputValue(v, S, I = !1) {
						return S ? this : v === 1 ? new f() : new o();
					}
					equals(v) {
						return (
							v.kind === c.both &&
							this.firstInput === v.firstInput &&
							this.smartCombination === v.smartCombination
						);
					}
					getInput(v) {
						return v === this.firstInput ? y.first : y.second;
					}
				}
				e.$GZb = b;
				class s extends g {
					get kind() {
						return c.unrecognized;
					}
					toString() {
						return "unrecognized";
					}
					swap() {
						return this;
					}
					withInputValue(v, S, I = !1) {
						return S ? (v === 1 ? new o() : new f()) : this;
					}
					equals(v) {
						return v.kind === c.unrecognized;
					}
				}
				e.$HZb = s;
				var l;
				(function ($) {
					($.base = new p()), ($.unrecognized = new s());
				})(l || (e.ModifiedBaseRangeState = l = {}));
				var y;
				(function ($) {
					($[($.excluded = 0)] = "excluded"),
						($[($.first = 1)] = "first"),
						($[($.second = 2)] = "second"),
						($[($.unrecognized = 3)] = "unrecognized");
				})(y || (e.InputState = y = {}));
			},
		),
		define(
			de[3079],
			he([1, 0, 24, 29, 3, 686, 1249, 507, 1132, 77]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.TextModelDiffState =
						e.TextModelDiffChangeReason =
						e.$MZb =
							void 0);
				class u extends w.$1c {
					get isApplyingChange() {
						return this.f.isOccupied;
					}
					constructor(n, g, p) {
						super(),
							(this.h = n),
							(this.j = g),
							(this.m = p),
							(this.a = 0),
							(this.b = (0, r.observableValue)(this, h.initializing)),
							(this.c = (0, r.observableValue)(this, [])),
							(this.f = new m.$Lpb()),
							(this.g = !1),
							(this.n = !0);
						const o = (0, r.observableSignal)("recompute");
						this.D(
							(0, r.autorun)((f) => {
								o.read(f), this.q(f);
							}),
						),
							this.D(
								n.onDidChangeContent(
									this.f.makeExclusiveOrSkip(() => {
										o.trigger(void 0);
									}),
								),
							),
							this.D(
								g.onDidChangeContent(
									this.f.makeExclusiveOrSkip(() => {
										o.trigger(void 0);
									}),
								),
							),
							this.D(
								(0, w.$Yc)(() => {
									this.g = !0;
								}),
							);
					}
					get state() {
						return this.b;
					}
					get diffs() {
						return this.c;
					}
					q(n) {
						this.a++;
						const g = this.a;
						this.b.get() === h.initializing && (this.n = !0),
							(0, r.transaction)((o) => {
								this.b.set(this.n ? h.initializing : h.updating, o, a.other);
							}),
							this.m.computeDiff(this.h, this.j, n).then((o) => {
								this.g ||
									(g === this.a &&
										(0, r.transaction)((f) => {
											o.diffs
												? (this.b.set(h.upToDate, f, a.textChange),
													this.c.set(o.diffs, f, a.textChange))
												: this.b.set(h.error, f, a.textChange),
												(this.n = !1);
										}));
							});
					}
					r() {
						if (this.state.get() !== h.upToDate)
							throw new i.$gb(
								"Cannot remove diffs when the model is not up to date",
							);
					}
					removeDiffs(n, g, p) {
						this.r(),
							n.sort((0, t.$0b)((f) => f.inputRange.startLineNumber, t.$_b)),
							n.reverse();
						let o = this.c.get();
						for (const f of n) {
							const b = o.length;
							if (((o = o.filter((s) => s !== f)), b === o.length))
								throw new i.$gb();
							this.f.runExclusivelyOrThrow(() => {
								const s = f.getReverseLineEdit().toEdits(this.j.getLineCount());
								this.j.pushEditOperations(null, s, () => null, p);
							}),
								(o = o.map((s) =>
									s.outputRange.isAfter(f.outputRange)
										? s.addOutputLineDelta(
												f.inputRange.lineCount - f.outputRange.lineCount,
											)
										: s,
								));
						}
						this.c.set(o, g, a.other);
					}
					applyEditRelativeToOriginal(n, g, p) {
						this.r();
						const o = new E.$xZb(
							n.range,
							this.h,
							new d.$bZb(n.range.startLineNumber, n.newLines.length),
							this.j,
						);
						let f = !1,
							b = 0;
						const s = new Array();
						for (const l of this.diffs.get()) {
							if (l.inputRange.touches(n.range))
								throw new i.$gb("Edit must be conflict free.");
							l.inputRange.isAfter(n.range)
								? (f || ((f = !0), s.push(o.addOutputLineDelta(b))),
									s.push(
										l.addOutputLineDelta(n.newLines.length - n.range.lineCount),
									))
								: s.push(l),
								f || (b += l.outputRange.lineCount - l.inputRange.lineCount);
						}
						f || ((f = !0), s.push(o.addOutputLineDelta(b))),
							this.f.runExclusivelyOrThrow(() => {
								const l = new C.$cZb(n.range.delta(b), n.newLines).toEdits(
									this.j.getLineCount(),
								);
								this.j.pushEditOperations(null, l, () => null, p);
							}),
							this.c.set(s, g, a.other);
					}
					findTouchingDiffs(n) {
						return this.diffs.get().filter((g) => g.inputRange.touches(n));
					}
					s(n, g) {
						let p = 0;
						const o = g ? this.diffs.read(g) : this.diffs.get();
						for (const f of o) {
							if (
								f.inputRange.contains(n) ||
								f.inputRange.endLineNumberExclusive === n
							)
								return f;
							if (f.inputRange.endLineNumberExclusive < n)
								p = f.resultingDeltaFromOriginalToModified;
							else break;
						}
						return n + p;
					}
					getResultLineRange(n, g) {
						let p = this.s(n.startLineNumber, g);
						typeof p != "number" && (p = p.outputRange.startLineNumber);
						let o = this.s(n.endLineNumberExclusive, g);
						return (
							typeof o != "number" &&
								(o = o.outputRange.endLineNumberExclusive),
							d.$bZb.fromLineNumbers(p, o)
						);
					}
				}
				e.$MZb = u;
				var a;
				(function (c) {
					(c[(c.other = 0)] = "other"), (c[(c.textChange = 1)] = "textChange");
				})(a || (e.TextModelDiffChangeReason = a = {}));
				var h;
				(function (c) {
					(c[(c.initializing = 1)] = "initializing"),
						(c[(c.upToDate = 2)] = "upToDate"),
						(c[(c.updating = 3)] = "updating"),
						(c[(c.error = 4)] = "error");
				})(h || (e.TextModelDiffState = h = {}));
			},
		),
		define(
			de[3080],
			he([1, 0, 24, 29, 77, 17, 61, 4, 155, 416, 507, 686, 3079, 508, 1250]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.MergeEditorModelState = e.$OZb = void 0);
				let g = class extends r.$PO {
					constructor(l, y, $, v, S, I, T, P, k) {
						super(),
							(this.base = l),
							(this.input1 = y),
							(this.input2 = $),
							(this.resultTextModel = v),
							(this.t = S),
							(this.u = I),
							(this.telemetry = T),
							(this.w = P),
							(this.y = k),
							(this.c = this.D(
								new h.$MZb(this.base, this.input1.textModel, this.t),
							)),
							(this.g = this.D(
								new h.$MZb(this.base, this.input2.textModel, this.t),
							)),
							(this.j = this.D(
								new h.$MZb(this.base, this.resultTextModel, this.t),
							)),
							(this.modifiedBaseRanges = (0, w.derived)(this, (D) => {
								const M = this.c.diffs.read(D),
									N = this.g.diffs.read(D);
								return n.$AZb.fromDiffs(
									M,
									N,
									this.base,
									this.input1.textModel,
									this.input2.textModel,
								);
							})),
							(this.n = (0, w.derived)(
								this,
								(D) =>
									new Map(
										this.modifiedBaseRanges.read(D).map((N) => [N, new o(N)]),
									),
							)),
							(this.q = this.resultTextModel.createSnapshot()),
							(this.baseInput1Diffs = this.c.diffs),
							(this.baseInput2Diffs = this.g.diffs),
							(this.baseResultDiffs = this.j.diffs),
							(this.input1ResultMapping = (0, w.derived)(this, (D) =>
								this.F(
									this.baseInput1Diffs.read(D),
									this.baseResultDiffs.read(D),
									this.input1.textModel.getLineCount(),
								),
							)),
							(this.resultInput1Mapping = (0, w.derived)(this, (D) =>
								this.input1ResultMapping.read(D).reverse(),
							)),
							(this.input2ResultMapping = (0, w.derived)(this, (D) =>
								this.F(
									this.baseInput2Diffs.read(D),
									this.baseResultDiffs.read(D),
									this.input2.textModel.getLineCount(),
								),
							)),
							(this.resultInput2Mapping = (0, w.derived)(this, (D) =>
								this.input2ResultMapping.read(D).reverse(),
							)),
							(this.baseResultMapping = (0, w.derived)(this, (D) => {
								const M = new a.$vZb(this.baseResultDiffs.read(D), -1);
								return new a.$vZb(
									M.lineRangeMappings.map((N) =>
										N.inputRange.isEmpty || N.outputRange.isEmpty
											? new a.$uZb(
													N.inputRange.deltaStart(-1),
													N.outputRange.deltaStart(-1),
												)
											: N,
									),
									M.inputLineCount,
								);
							})),
							(this.resultBaseMapping = (0, w.derived)(this, (D) =>
								this.baseResultMapping.read(D).reverse(),
							)),
							(this.diffComputingState = (0, w.derived)(this, (D) => {
								const M = [this.c, this.g, this.j].map((N) => N.state.read(D));
								return M.some((N) => N === h.TextModelDiffState.initializing)
									? f.initializing
									: M.some((N) => N === h.TextModelDiffState.updating)
										? f.updating
										: f.upToDate;
							})),
							(this.inputDiffComputingState = (0, w.derived)(this, (D) => {
								const M = [this.c, this.g].map((N) => N.state.read(D));
								return M.some((N) => N === h.TextModelDiffState.initializing)
									? f.initializing
									: M.some((N) => N === h.TextModelDiffState.updating)
										? f.updating
										: f.upToDate;
							})),
							(this.isUpToDate = (0, w.derived)(
								this,
								(D) => this.diffComputingState.read(D) === f.upToDate,
							)),
							(this.onInitialized = (0, w.waitForState)(
								this.diffComputingState,
								(D) => D === f.upToDate,
							).then(() => {})),
							(this.G = !0),
							(this.unhandledConflictsCount = (0, w.derived)(this, (D) => {
								const M = this.n.read(D);
								let N = 0;
								for (const [A, R] of M) R.handled.read(D) || N++;
								return N;
							})),
							(this.hasUnhandledConflicts = this.unhandledConflictsCount.map(
								(D) => D > 0,
							)),
							this.D((0, w.keepObserved)(this.n)),
							this.D((0, w.keepObserved)(this.input1ResultMapping)),
							this.D((0, w.keepObserved)(this.input2ResultMapping));
						const L = this.z();
						(this.onInitialized = this.onInitialized.then(async () => {
							await L;
						})),
							L.then(() => {
								let D = !0;
								this.D(
									(0, w.autorunHandleChanges)(
										{
											handleChange: (M) => (
												M.didChange(this.n) && (D = !0),
												M.didChange(this.j.diffs)
													? M.change === h.TextModelDiffChangeReason.textChange
													: !0
											),
										},
										(M) => {
											const N = this.n.read(M);
											if (!this.isUpToDate.read(M)) return;
											const A = this.j.diffs.read(M);
											(0, w.transaction)((R) => {
												if ((this.H(A, N, R), D)) {
													D = !1;
													for (const [O, B] of N) {
														const U = B.accepted.get(),
															z = !(
																U.kind === n.ModifiedBaseRangeStateKind.base ||
																U.kind ===
																	n.ModifiedBaseRangeStateKind.unrecognized
															);
														B.handledInput1.set(z, R),
															B.handledInput2.set(z, R);
													}
												}
											});
										},
									),
								);
							});
					}
					async z() {
						this.u.resetResult && (await this.reset());
					}
					async reset() {
						await (0, w.waitForState)(
							this.inputDiffComputingState,
							(y) => y === f.upToDate,
						);
						const l = this.n.get();
						(0, w.transaction)((y) => {
							for (const [$, v] of l) {
								let S,
									I = !1;
								$.input1Diffs.length === 0
									? ((S = n.ModifiedBaseRangeState.base.withInputValue(2, !0)),
										(I = !0))
									: $.input2Diffs.length === 0 || $.isEqualChange
										? ((S = n.ModifiedBaseRangeState.base.withInputValue(
												1,
												!0,
											)),
											(I = !0))
										: ((S = n.ModifiedBaseRangeState.base), (I = !1)),
									v.accepted.set(S, y),
									(v.computedFromDiffing = !1),
									(v.previousNonDiffingState = void 0),
									v.handledInput1.set(I, y),
									v.handledInput2.set(I, y);
							}
							this.resultTextModel.pushEditOperations(
								null,
								[
									{
										range: new E.$iL(1, 1, Number.MAX_SAFE_INTEGER, 1),
										text: this.C(),
									},
								],
								() => null,
							);
						});
					}
					C() {
						const l = this.modifiedBaseRanges.get(),
							y = this.base.getLinesContent(),
							$ = this.input1.textModel.getLinesContent(),
							v = this.input2.textModel.getLinesContent(),
							S = [];
						function I(P, k) {
							for (let L = k.startLineNumber; L < k.endLineNumberExclusive; L++)
								S.push(P[L - 1]);
						}
						let T = 1;
						for (const P of l)
							I(y, u.$bZb.fromLineNumbers(T, P.baseRange.startLineNumber)),
								(T = P.baseRange.endLineNumberExclusive),
								P.input1Diffs.length === 0
									? I(v, P.input2Range)
									: P.input2Diffs.length === 0 || P.isEqualChange
										? I($, P.input1Range)
										: I(y, P.baseRange);
						return (
							I(y, u.$bZb.fromLineNumbers(T, y.length + 1)),
							S.join(this.resultTextModel.getEOL())
						);
					}
					hasBaseRange(l) {
						return this.n.get().has(l);
					}
					get isApplyingEditInResult() {
						return this.j.isApplyingChange;
					}
					F(l, y, $) {
						const v = a.$vZb.betweenOutputs(l, y, $);
						return new a.$vZb(
							v.lineRangeMappings.map((S) =>
								S.inputRange.isEmpty || S.outputRange.isEmpty
									? new a.$uZb(
											S.inputRange.deltaStart(-1),
											S.outputRange.deltaStart(-1),
										)
									: S,
							),
							v.inputLineCount,
						);
					}
					translateInputRangeToBase(l, y) {
						const $ =
							l === 1 ? this.baseInput1Diffs.get() : this.baseInput2Diffs.get();
						return new a.$zZb(
							$.flatMap((S) => S.rangeMappings),
							0,
						)
							.reverse()
							.projectRange(y).outputRange;
					}
					translateBaseRangeToInput(l, y) {
						const $ =
							l === 1 ? this.baseInput1Diffs.get() : this.baseInput2Diffs.get();
						return new a.$zZb(
							$.flatMap((S) => S.rangeMappings),
							0,
						).projectRange(y).outputRange;
					}
					getLineRangeInResult(l, y) {
						return this.j.getResultLineRange(l, y);
					}
					translateResultRangeToBase(l) {
						return new a.$zZb(
							this.baseResultDiffs.get().flatMap(($) => $.rangeMappings),
							0,
						)
							.reverse()
							.projectRange(l).outputRange;
					}
					translateBaseRangeToResult(l) {
						return new a.$zZb(
							this.baseResultDiffs.get().flatMap(($) => $.rangeMappings),
							0,
						).projectRange(l).outputRange;
					}
					findModifiedBaseRangesInRange(l) {
						return this.modifiedBaseRanges
							.get()
							.filter((y) => y.baseRange.intersects(l));
					}
					H(l, y, $) {
						const v = (0, c.$hZb)(y, l, (S, I) =>
							S[0].baseRange.touches(I.inputRange)
								? t.CompareResult.neitherLessOrGreaterThan
								: u.$bZb.compareByStart(S[0].baseRange, I.inputRange),
						);
						for (const S of v) {
							const I = this.I(S.left[0], S.rights),
								T = S.left[1],
								P = T.accepted.get();
							P.equals(I) ||
								(!this.G &&
									!T.computedFromDiffing &&
									((T.computedFromDiffing = !0),
									(T.previousNonDiffingState = P)),
								T.accepted.set(I, $));
						}
						this.G && (this.G = !1);
					}
					I(l, y) {
						if (y.length === 0) return n.ModifiedBaseRangeState.base;
						const $ = y.map((I) => I.getLineEdit());
						function v(I) {
							return (0, t.$yb)(
								$,
								I.map((T) => T.getLineEdit()),
								(T, P) => T.equals(P),
							);
						}
						if (v(l.input1Diffs))
							return n.ModifiedBaseRangeState.base.withInputValue(1, !0);
						if (v(l.input2Diffs))
							return n.ModifiedBaseRangeState.base.withInputValue(2, !0);
						const S = [
							n.ModifiedBaseRangeState.base
								.withInputValue(1, !0)
								.withInputValue(2, !0, !0),
							n.ModifiedBaseRangeState.base
								.withInputValue(2, !0)
								.withInputValue(1, !0, !0),
							n.ModifiedBaseRangeState.base
								.withInputValue(1, !0)
								.withInputValue(2, !0, !1),
							n.ModifiedBaseRangeState.base
								.withInputValue(2, !0)
								.withInputValue(1, !0, !1),
						];
						for (const I of S) {
							const { edit: T } = l.getEditForBase(I);
							if (T) {
								const k = this.j
									.getResultLineRange(l.baseRange)
									.getLines(this.resultTextModel);
								if ((0, t.$yb)(T.newLines, k, (L, D) => L === D)) return I;
							}
						}
						return n.ModifiedBaseRangeState.unrecognized;
					}
					getState(l) {
						const y = this.n.get().get(l);
						if (!y) throw new i.$gb("object must be from this instance");
						return y.accepted;
					}
					setState(l, y, $, v, S = !1) {
						if (!this.isUpToDate.get())
							throw new i.$gb("Cannot set state while updating");
						const I = this.n.get().get(l);
						if (!I) throw new i.$gb("object must be from this instance");
						const T = this.j.findTouchingDiffs(l.baseRange),
							P = new m.$IN();
						T && this.j.removeDiffs(T, v, P);
						const { edit: k, effectiveState: L } = l.getEditForBase(y);
						I.accepted.set(L, v),
							(I.previousNonDiffingState = void 0),
							(I.computedFromDiffing = !1);
						const D = I.handledInput1.get(),
							M = I.handledInput2.get();
						(!D || !M) &&
							this.y.pushElement(
								new b(
									this.resultTextModel.uri,
									new WeakRef(this),
									new WeakRef(I),
									D,
									M,
								),
								P,
							),
							k &&
								(this.resultTextModel.pushStackElement(),
								this.j.applyEditRelativeToOriginal(k, v, P),
								this.resultTextModel.pushStackElement()),
							I.handledInput1.set(!0, v),
							I.handledInput2.set(!0, v);
					}
					resetDirtyConflictsToBase() {
						(0, w.transaction)((l) => {
							this.resultTextModel.pushStackElement();
							for (const y of this.modifiedBaseRanges.get())
								this.getState(y).get().kind ===
									n.ModifiedBaseRangeStateKind.unrecognized &&
									this.setState(y, n.ModifiedBaseRangeState.base, !1, l, !1);
							this.resultTextModel.pushStackElement();
						});
					}
					isHandled(l) {
						return this.n.get().get(l).handled;
					}
					isInputHandled(l, y) {
						const $ = this.n.get().get(l);
						return y === 1 ? $.handledInput1 : $.handledInput2;
					}
					setInputHandled(l, y, $, v) {
						const S = this.n.get().get(l);
						if (S.handled.get() === $) return;
						const I = new WeakRef(o),
							T = new WeakRef(this);
						this.y.pushElement({
							type: m.UndoRedoElementType.Resource,
							resource: this.resultTextModel.uri,
							code: "setInputHandled",
							label: (0, d.localize)(7624, null),
							redo() {
								const P = T.deref(),
									k = I.deref();
								P &&
									!P.isDisposed() &&
									k &&
									(0, w.transaction)((L) => {
										y === 1
											? S.handledInput1.set($, L)
											: S.handledInput2.set($, L);
									});
							},
							undo() {
								const P = T.deref(),
									k = I.deref();
								P &&
									!P.isDisposed() &&
									k &&
									(0, w.transaction)((L) => {
										y === 1
											? S.handledInput1.set(!$, L)
											: S.handledInput2.set(!$, L);
									});
							},
							rebase() {},
						}),
							y === 1 ? S.handledInput1.set($, v) : S.handledInput2.set($, v);
					}
					setHandled(l, y, $) {
						const v = this.n.get().get(l);
						v.handled.get() !== y &&
							(v.handledInput1.set(y, $), v.handledInput2.set(y, $));
					}
					setLanguageId(l, y) {
						const $ = this.w.createById(l);
						this.base.setLanguage($, y),
							this.input1.textModel.setLanguage($, y),
							this.input2.textModel.setLanguage($, y),
							this.resultTextModel.setLanguage($, y);
					}
					getInitialResultValue() {
						const l = [];
						for (;;) {
							const y = this.q.read();
							if (y === null) break;
							l.push(y);
						}
						return l.join();
					}
					async getResultValueWithConflictMarkers() {
						if (
							(await (0, w.waitForState)(
								this.diffComputingState,
								(P) => P === f.upToDate,
							),
							this.unhandledConflictsCount.get() === 0)
						)
							return this.resultTextModel.getValue();
						const l = this.resultTextModel.getLinesContent(),
							y = this.input1.textModel.getLinesContent(),
							$ = this.input2.textModel.getLinesContent(),
							v = this.n.get(),
							S = [];
						function I(P, k) {
							for (let L = k.startLineNumber; L < k.endLineNumberExclusive; L++)
								S.push(P[L - 1]);
						}
						let T = 1;
						for (const [P, k] of v) {
							if (k.handled.get()) continue;
							const L = this.j.getResultLineRange(P.baseRange);
							I(l, u.$bZb.fromLineNumbers(T, Math.max(T, L.startLineNumber))),
								(T = L.endLineNumberExclusive),
								S.push("<<<<<<<"),
								k.accepted.get().kind ===
								n.ModifiedBaseRangeStateKind.unrecognized
									? I(l, L)
									: I(y, P.input1Range),
								S.push("======="),
								I($, P.input2Range),
								S.push(">>>>>>>");
						}
						return (
							I(l, u.$bZb.fromLineNumbers(T, l.length + 1)),
							S.join(`
`)
						);
					}
					get conflictCount() {
						return p(this.modifiedBaseRanges.get(), (l) => l.isConflicting);
					}
					get combinableConflictCount() {
						return p(
							this.modifiedBaseRanges.get(),
							(l) => l.isConflicting && l.canBeCombined,
						);
					}
					get conflictsResolvedWithBase() {
						return p(
							this.n.get().entries(),
							([l, y]) =>
								l.isConflicting &&
								y.accepted.get().kind === n.ModifiedBaseRangeStateKind.base,
						);
					}
					get conflictsResolvedWithInput1() {
						return p(
							this.n.get().entries(),
							([l, y]) =>
								l.isConflicting &&
								y.accepted.get().kind === n.ModifiedBaseRangeStateKind.input1,
						);
					}
					get conflictsResolvedWithInput2() {
						return p(
							this.n.get().entries(),
							([l, y]) =>
								l.isConflicting &&
								y.accepted.get().kind === n.ModifiedBaseRangeStateKind.input2,
						);
					}
					get conflictsResolvedWithSmartCombination() {
						return p(this.n.get().entries(), ([l, y]) => {
							const $ = y.accepted.get();
							return (
								l.isConflicting &&
								$.kind === n.ModifiedBaseRangeStateKind.both &&
								$.smartCombination
							);
						});
					}
					get manuallySolvedConflictCountThatEqualNone() {
						return p(
							this.n.get().entries(),
							([l, y]) =>
								l.isConflicting &&
								y.accepted.get().kind ===
									n.ModifiedBaseRangeStateKind.unrecognized,
						);
					}
					get manuallySolvedConflictCountThatEqualSmartCombine() {
						return p(this.n.get().entries(), ([l, y]) => {
							const $ = y.accepted.get();
							return (
								l.isConflicting &&
								y.computedFromDiffing &&
								$.kind === n.ModifiedBaseRangeStateKind.both &&
								$.smartCombination
							);
						});
					}
					get manuallySolvedConflictCountThatEqualInput1() {
						return p(this.n.get().entries(), ([l, y]) => {
							const $ = y.accepted.get();
							return (
								l.isConflicting &&
								y.computedFromDiffing &&
								$.kind === n.ModifiedBaseRangeStateKind.input1
							);
						});
					}
					get manuallySolvedConflictCountThatEqualInput2() {
						return p(this.n.get().entries(), ([l, y]) => {
							const $ = y.accepted.get();
							return (
								l.isConflicting &&
								y.computedFromDiffing &&
								$.kind === n.ModifiedBaseRangeStateKind.input2
							);
						});
					}
					get manuallySolvedConflictCountThatEqualNoneAndStartedWithBase() {
						return p(this.n.get().entries(), ([l, y]) => {
							const $ = y.accepted.get();
							return (
								l.isConflicting &&
								$.kind === n.ModifiedBaseRangeStateKind.unrecognized &&
								y.previousNonDiffingState?.kind ===
									n.ModifiedBaseRangeStateKind.base
							);
						});
					}
					get manuallySolvedConflictCountThatEqualNoneAndStartedWithInput1() {
						return p(this.n.get().entries(), ([l, y]) => {
							const $ = y.accepted.get();
							return (
								l.isConflicting &&
								$.kind === n.ModifiedBaseRangeStateKind.unrecognized &&
								y.previousNonDiffingState?.kind ===
									n.ModifiedBaseRangeStateKind.input1
							);
						});
					}
					get manuallySolvedConflictCountThatEqualNoneAndStartedWithInput2() {
						return p(this.n.get().entries(), ([l, y]) => {
							const $ = y.accepted.get();
							return (
								l.isConflicting &&
								$.kind === n.ModifiedBaseRangeStateKind.unrecognized &&
								y.previousNonDiffingState?.kind ===
									n.ModifiedBaseRangeStateKind.input2
							);
						});
					}
					get manuallySolvedConflictCountThatEqualNoneAndStartedWithBothNonSmart() {
						return p(this.n.get().entries(), ([l, y]) => {
							const $ = y.accepted.get();
							return (
								l.isConflicting &&
								$.kind === n.ModifiedBaseRangeStateKind.unrecognized &&
								y.previousNonDiffingState?.kind ===
									n.ModifiedBaseRangeStateKind.both &&
								!y.previousNonDiffingState?.smartCombination
							);
						});
					}
					get manuallySolvedConflictCountThatEqualNoneAndStartedWithBothSmart() {
						return p(this.n.get().entries(), ([l, y]) => {
							const $ = y.accepted.get();
							return (
								l.isConflicting &&
								$.kind === n.ModifiedBaseRangeStateKind.unrecognized &&
								y.previousNonDiffingState?.kind ===
									n.ModifiedBaseRangeStateKind.both &&
								y.previousNonDiffingState?.smartCombination
							);
						});
					}
				};
				(e.$OZb = g), (e.$OZb = g = Ne([j(7, C.$nM), j(8, m.$GN)], g));
				function p(s, l) {
					let y = 0;
					for (const $ of s) l($) && y++;
					return y;
				}
				class o {
					constructor(l) {
						(this.c = l),
							(this.accepted = (0, w.observableValue)(
								`BaseRangeState${this.c.baseRange}`,
								n.ModifiedBaseRangeState.base,
							)),
							(this.handledInput1 = (0, w.observableValue)(
								`BaseRangeHandledState${this.c.baseRange}.Input1`,
								!1,
							)),
							(this.handledInput2 = (0, w.observableValue)(
								`BaseRangeHandledState${this.c.baseRange}.Input2`,
								!1,
							)),
							(this.computedFromDiffing = !1),
							(this.previousNonDiffingState = void 0),
							(this.handled = (0, w.derived)(
								this,
								(y) => this.handledInput1.read(y) && this.handledInput2.read(y),
							));
					}
				}
				var f;
				(function (s) {
					(s[(s.initializing = 1)] = "initializing"),
						(s[(s.upToDate = 2)] = "upToDate"),
						(s[(s.updating = 3)] = "updating");
				})(f || (e.MergeEditorModelState = f = {}));
				class b {
					constructor(l, y, $, v, S) {
						(this.resource = l),
							(this.c = y),
							(this.e = $),
							(this.f = v),
							(this.g = S),
							(this.code = "undoMarkAsHandled"),
							(this.label = (0, d.localize)(7625, null)),
							(this.type = m.UndoRedoElementType.Resource);
					}
					redo() {
						const l = this.c.deref();
						if (!l || l.isDisposed()) return;
						const y = this.e.deref();
						y &&
							(0, w.transaction)(($) => {
								y.handledInput1.set(!0, $), y.handledInput2.set(!0, $);
							});
					}
					undo() {
						const l = this.c.deref();
						if (!l || l.isDisposed()) return;
						const y = this.e.deref();
						y &&
							(0, w.transaction)(($) => {
								y.handledInput1.set(this.f, $), y.handledInput2.set(this.g, $);
							});
					}
					rebase() {}
				}
			},
		),
		