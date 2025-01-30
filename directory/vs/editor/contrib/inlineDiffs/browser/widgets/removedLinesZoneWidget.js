import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/constants.js';
import '../../../../common/config/editorOptions.js';
import '../../../../common/languages/language.js';
import '../../../../common/tokens/lineTokens.js';
import '../../../../common/viewLayout/lineDecorations.js';
import '../../../../common/viewModel.js';
import '../../../inlineCompletions/browser/view/ghostTextView.js';
import '../../../zoneWidget/browser/zoneWidget.js';
import '../../../../../platform/configuration/common/configuration.js';
import '../../../../../platform/theme/common/themeService.js';
define(
			de[2934],
			he([1, 0, 58, 38, 61, 388, 533, 290, 947, 680, 10, 35]),
			function (ce /*require*/,
 e /*exports*/,
 t /*constants*/,
 i /*editorOptions*/,
 w /*language*/,
 E /*lineTokens*/,
 C /*lineDecorations*/,
 d /*viewModel*/,
 m /*ghostTextView*/,
 r /*zoneWidget*/,
 u /*configuration*/,
 a /*themeService*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$wdc = void 0);
				let h = class extends r.$FLb {
					constructor(n, g, p, o, f, b, s, l, y, $) {
						super(g, {
							showFrame: !1,
							showArrow: !1,
							ordinal: 2,
							keepEditorSelection: !0,
							moveToLineWhenShown: !1,
							allowUnlimitedHeight: !0,
						}),
							(this.O = l),
							(this.P = y),
							(this.Q = $),
							(this.K = null),
							(this.L = null),
							(this.M = null),
							(this.id = n),
							(this.a = p),
							(this.b = o),
							(this.c = b),
							(this.p = s),
							(this.d = "inline-diff-removed"),
							(this.m = 1),
							(this.options.ordinal = t.$OX + 1),
							this.Q.getValue(t.$tW) ? (this.N = f) : (this.N = void 0),
							this.create(),
							(this.r = this.editor.onDidScrollChange((S) => {
								S.scrollLeftChanged && this.Y(S.scrollLeft);
							}));
						let v = this.editor.getLayoutInfo().width;
						(this.H = this.editor.onDidLayoutChange((S) => {
							S.width !== v && (this.R(), (v = S.width));
						})),
							(this.I = this.editor.onDidChangeConfiguration((S) => {
								(S.hasChanged(i.EditorOption.wordWrap) ||
									S.hasChanged(i.EditorOption.wordWrapOverride1) ||
									S.hasChanged(i.EditorOption.wordWrapOverride2)) &&
									this.R();
							})),
							(this.J = this.P.onDidColorThemeChange((S) => {
								this.T(S);
							})),
							this.K !== null && (this.K.style.marginLeft = "1px"),
							this.Y(this.editor.getScrollLeft());
					}
					R() {
						if (this.K && this.L && this.M) {
							const n = this.X();
							this.updateBackgroundColor(),
								this.hide(),
								this.K.removeChild(this.L),
								(this.L = n.content),
								(this.m = n.heightInLines);
							const g = this.editor.getLayoutInfo().contentLeft;
							(this.M.style.width = `${g}px`),
								this.K.appendChild(this.L),
								this.showWidget();
						}
					}
					updatePosition(n) {
						(this.c = n), this.showWidget();
					}
					updateInnerChanges(n) {
						this.Q.getValue(t.$tW) &&
							JSON.stringify(this.N) !== JSON.stringify(n) &&
							((this.N = n), this.R());
					}
					updateBackgroundColor() {
						const n = this.Q.getValue(t.$sW),
							g =
								this.N && this.N.length > 0
									? "hsl(348deg 90% 50% / 15%)"
									: "hsl(348deg 90% 50% / 25%)",
							p = n
								? `var(--vscode-diffEditor-removedLineBackground, ${g})`
								: g;
						this.K && (this.K.style.backgroundColor = p);
					}
					C(n) {
						(this.K = n),
							(this.K.style.position = "relative"),
							(this.K.style.width = "1000000px"),
							this.updateBackgroundColor(),
							this.o.add(
								this.Q.onDidChangeConfiguration((o) => {
									o.affectsConfiguration(t.$sW) && this.updateBackgroundColor();
								}),
							);
						const g = this.X();
						(this.L = g.content), (this.m = g.heightInLines);
						const p = this.W();
						(this.M = document.createElement("div")),
							(this.M.style.width = `${p + 1}px`),
							(this.M.style.height = "100%"),
							(this.M.style.position = "absolute"),
							(this.M.style.zIndex = "3"),
							this.T(this.P.getColorTheme()),
							n.appendChild(this.M),
							n.appendChild(this.L),
							this.Y(this.editor.getScrollLeft());
					}
					T(n) {
						if (this.M) {
							let g = "white";
							const p = n.getColor("editor.background");
							p && (g = p.toString()), (this.M.style.backgroundColor = g);
						}
					}
					U() {
						const n = [],
							g = this.editor._getViewModel();
						if (g)
							for (let p = 0; p < this.a.length; p++) {
								const o = this.a[p],
									f = this.b[p],
									b = f
										? new E.$7L(
												new Uint32Array(Object.values(f.tokens)),
												f.text,
												this.O.languageIdCodec,
											)
										: void 0,
									s = g.createLineBreaksComputer();
								s.addRequest(o, null, null);
								const l = s.finalize();
								let y = this.V(p, o);
								if (l.length === 0 || !l[0])
									n.push({ text: o, tokens: b, innerChanges: y });
								else
									for (const $ of l) {
										if (!$ || !$.breakOffsets) continue;
										let v = 0;
										for (let S = 0; S < $.breakOffsets.length; S++) {
											const I =
												S < $.breakOffsets.length
													? $.breakOffsets[S]
													: o.length;
											let T = o.slice(v, I),
												P = 0;
											v !== 0 &&
												((T = " ".repeat($.wrappedTextIndentLength) + T),
												(P = $.wrappedTextIndentLength));
											const k = y
												.filter(
													(D) =>
														D.startColumn > v &&
														(D.startColumn <= I ||
															S === $.breakOffsets.length - 1),
												)
												.map(
													(D) =>
														new C.$Fub(
															Math.max(1, D.startColumn - v + P),
															Math.min(T.length + 1, D.endColumn - v + P),
															D.className,
															D.type,
														),
												);
											let L;
											if (b) {
												const D = b.sliceAndInflate(v, I, 0),
													M = D.getCount(),
													N = [];
												P > 0 &&
													N.push({
														text: " ".repeat(P),
														metadata: D.getMetadata(0),
													});
												for (let A = 0; A < M; A++)
													N.push({
														text: D.getTokenText(A),
														metadata: D.getMetadata(A),
													});
												L = E.$7L.createFromTextAndMetadata(
													N,
													this.O.languageIdCodec,
												);
											}
											n.push({ text: T, tokens: L, innerChanges: k }), (v = I);
										}
									}
							}
						return n;
					}
					V(n, g) {
						if (!this.N) return [];
						const p = [];
						for (const o of this.N)
							o.originalRange.startLineNumber === n + 1
								? p.push(
										new C.$Fub(
											o.originalRange.startColumn,
											o.originalRange.endLineNumber === n + 1
												? o.originalRange.endColumn
												: g.length + 1,
											"inline-diff-inner-change-removed",
											d.InlineDecorationType.Regular,
										),
									)
								: o.originalRange.startLineNumber < n + 1 &&
									o.originalRange.endLineNumber >= n + 1 &&
									p.push(
										new C.$Fub(
											1,
											o.originalRange.endLineNumber === n + 1
												? o.originalRange.endColumn
												: g.length + 1,
											"inline-diff-inner-change-removed",
											d.InlineDecorationType.Regular,
										),
									);
						return p;
					}
					W() {
						return Math.max(this.editor.getLayoutInfo().contentLeft - 1, 0);
					}
					getHeightInLines() {
						return this.m;
					}
					X() {
						const n = document.createElement("div"),
							{ tabSize: g } = this.editor.getModel().getOptions(),
							p = this.U();
						(0, m.$M1b)(
							n,
							g,
							p.map((f) => ({
								content: f.text,
								decorations: f.innerChanges || [],
								lineTokens: f.tokens
									? f.tokens
									: E.$7L.createEmpty(f.text, this.O.languageIdCodec),
							})),
							this.editor.getOptions(),
							!0,
							this.d,
						),
							(n.className = this.d + (this.p ? "-hidden" : ""));
						const o = this.W();
						return (
							(n.style.marginLeft = `${o}px`),
							{ content: n, heightInLines: p.length }
						);
					}
					Y(n) {
						!this.K ||
							!this.M ||
							((this.K.style.marginLeft = `${-n}px`),
							(this.M.style.marginLeft = `${n}px`));
					}
					showWidget() {
						this.hide(), this.show(this.c, this.m);
					}
					dispose() {
						super.dispose(),
							this.r.dispose(),
							this.H.dispose(),
							this.I.dispose(),
							this.J.dispose();
					}
				};
				(e.$wdc = h),
					(e.$wdc = h = Ne([j(7, w.$nM), j(8, a.$iP), j(9, u.$gj)], h));
			},
		),
		