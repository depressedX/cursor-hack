import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/browser/dom.js';
import '../../../../../base/browser/ui/actionbar/actionbar.js';
import '../../../../../base/browser/ui/hover/hoverWidget.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../base/common/observable.js';
import '../../../../../base/common/observableInternal/derived.js';
import '../components/diffEditorSash.js';
import '../utils.js';
import '../utils/editorGutter.js';
import '../../multiDiffEditor/utils.js';
import '../../../../common/config/editorOptions.js';
import '../../../../common/core/lineRange.js';
import '../../../../common/core/offsetRange.js';
import '../../../../common/core/range.js';
import '../../../../common/core/textEdit.js';
import '../../../../common/diff/rangeMapping.js';
import '../../../../common/model/textModelText.js';
import '../../../../../platform/actions/browser/toolbar.js';
import '../../../../../platform/actions/common/actions.js';
import '../../../../../platform/contextkey/common/contextkey.js';
import '../../../../../platform/hover/browser/hover.js';
import '../../../../../platform/instantiation/common/instantiation.js';
define(
			de[2893],
			he([
				1, 0, 7, 105, 160, 3, 77, 319, 1586, 370, 2690, 1588, 38, 196, 289, 17,
				490, 342, 1540, 173, 11, 8, 72, 5,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*dom*/,
				i /*actionbar*/,
				w /*hoverWidget*/,
				E /*lifecycle*/,
				C /*observable*/,
				d /*derived*/,
				m /*diffEditorSash*/,
				r /*utils*/,
				u /*editorGutter*/,
				a /*utils*/,
				h /*editorOptions*/,
				c /*lineRange*/,
				n /*offsetRange*/,
				g /*range*/,
				p /*textEdit*/,
				o /*rangeMapping*/,
				f /*textModelText*/,
				b /*toolbar*/,
				s /*actions*/,
				l /*contextkey*/,
				y /*hover*/,
				$ /*instantiation*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Xyb = void 0);
				const v = [],
					S = 35;
				let I = class extends E.$1c {
					constructor(L, D, M, N, A, R, O, B, U) {
						super(),
							(this.t = D),
							(this.u = M),
							(this.w = N),
							(this.y = A),
							(this.z = R),
							(this.C = O),
							(this.F = B),
							(this.G = U),
							(this.b = this.D(
								this.G.createMenu(s.$XX.DiffEditorHunkToolbar, this.F),
							)),
							(this.f = (0, C.observableFromEvent)(
								this,
								this.b.onDidChange,
								() => this.b.getActions(),
							)),
							(this.j = this.f.map((z) => z.length > 0)),
							(this.n = (0, C.derived)(
								this,
								(z) => this.w.renderSideBySide.read(z) && this.j.read(z),
							)),
							(this.width = (0, C.derived)(this, (z) =>
								this.j.read(z) ? S : 0,
							)),
							(this.q = (0, t.h)(
								"div.gutter@gutter",
								{
									style: {
										position: "absolute",
										height: "100%",
										width: S + "px",
									},
								},
								[],
							)),
							(this.H = (0, C.derived)(this, (z) => {
								const F = this.t.read(z);
								if (!F) return;
								const x = F.diff.read(z)?.mappings,
									H = this.u.modifiedCursor.read(z);
								if (H)
									return x?.find((q) =>
										q.lineRangeMapping.modified.contains(H.lineNumber),
									);
							})),
							(this.I = (0, C.derived)(this, (z) => {
								const x = this.t.read(z)?.diff.read(z);
								if (!x) return v;
								const H = this.u.modifiedSelections.read(z);
								if (H.every((K) => K.isEmpty())) return v;
								const q = new c.$sL(H.map((K) => c.$rL.fromRangeInclusive(K))),
									G = x.mappings
										.filter(
											(K) =>
												K.lineRangeMapping.innerChanges &&
												q.intersects(K.lineRangeMapping.modified),
										)
										.map((K) => ({
											mapping: K,
											rangeMappings: K.lineRangeMapping.innerChanges.filter(
												(J) =>
													H.some((W) =>
														g.$iL.areIntersecting(J.modifiedRange, W),
													),
											),
										}));
								return G.length === 0 ||
									G.every((K) => K.rangeMappings.length === 0)
									? v
									: G;
							})),
							this.D((0, r.$zwb)(L, this.q.root)),
							this.D(
								(0, t.$0fb)(this.q.root, "click", () => {
									this.u.modified.focus();
								}),
							),
							this.D(
								(0, r.$Gwb)(this.q.root, {
									display: this.j.map((z) => (z ? "block" : "none")),
								}),
							),
							(0, d.$Yd)(this, (z) =>
								this.n.read(z)
									? new m.$fyb(
											L,
											this.y.dimensions,
											this.w.enableSplitViewResizing,
											this.z,
											(0, d.$Ud)(
												this,
												(x) => this.y.sashLeft.read(x) - S,
												(x, H) => this.y.sashLeft.set(x + S, H),
											),
											() => this.y.resetSash(),
										)
									: void 0,
							).recomputeInitiallyAndOnChange(this.B),
							this.D(
								new u.$gyb(this.u.modified, this.q.root, {
									getIntersectingGutterItems: (z, F) => {
										const x = this.t.read(F);
										if (!x) return [];
										const H = x.diff.read(F);
										if (!H) return [];
										const q = this.I.read(F);
										if (q.length > 0) {
											const G = o.$CL.fromRangeMappings(
												q.flatMap((K) => K.rangeMappings),
											);
											return [
												new T(
													G,
													!0,
													s.$XX.DiffEditorSelectionToolbar,
													void 0,
													x.model.original.uri,
													x.model.modified.uri,
												),
											];
										}
										const V = this.H.read(F);
										return H.mappings.map(
											(G) =>
												new T(
													G.lineRangeMapping.withInnerChangesFromLineRanges(),
													G.lineRangeMapping === V?.lineRangeMapping,
													s.$XX.DiffEditorHunkToolbar,
													void 0,
													x.model.original.uri,
													x.model.modified.uri,
												),
										);
									},
									createView: (z, F) => this.C.createInstance(P, z, F, this),
								}),
							),
							this.D(
								(0, t.$0fb)(
									this.q.gutter,
									t.$$gb.MOUSE_WHEEL,
									(z) => {
										this.u.modified.getOption(h.EditorOption.scrollbar)
											.handleMouseWheel &&
											this.u.modified.delegateScrollFromMouseWheelEvent(z);
									},
									{ passive: !1 },
								),
							);
					}
					computeStagedValue(L) {
						const D = L.innerChanges ?? [],
							M = new f.$iyb(this.u.modifiedModel.get()),
							N = new f.$iyb(this.u.original.getModel());
						return new p.$vL(D.map((O) => O.toTextEdit(M))).apply(N);
					}
					layout(L) {
						this.q.gutter.style.left = L + "px";
					}
				};
				(e.$Xyb = I),
					(e.$Xyb = I = Ne([j(6, $.$Li), j(7, l.$6j), j(8, s.$YX)], I));
				class T {
					constructor(L, D, M, N, A, R) {
						(this.mapping = L),
							(this.showAlways = D),
							(this.menuId = M),
							(this.rangeOverride = N),
							(this.originalUri = A),
							(this.modifiedUri = R);
					}
					get id() {
						return this.mapping.modified.toString();
					}
					get range() {
						return this.rangeOverride ?? this.mapping.modified;
					}
				}
				let P = class extends E.$1c {
					constructor(L, D, M, N) {
						super(),
							(this.q = L),
							(this.b = (0, t.h)(
								"div.gutterItem",
								{ style: { height: "20px", width: "34px" } },
								[
									(0, t.h)("div.background@background", {}, []),
									(0, t.h)("div.buttons@buttons", {}, []),
								],
							)),
							(this.f = this.q.map(this, (R) => R.showAlways)),
							(this.j = this.q.map(this, (R) => R.menuId)),
							(this.n = (0, C.observableValue)(this, !1)),
							(this.t = void 0),
							(this.u = void 0);
						const A = this.D(
							N.createInstance(y.$Vyb, "element", !0, {
								position: { hoverPosition: w.HoverPosition.RIGHT },
							}),
						);
						this.D((0, r.$ywb)(D, this.b.root)),
							this.D(
								(0, C.autorun)((R) => {
									const O = this.f.read(R);
									this.b.root.classList.toggle("noTransition", !0),
										this.b.root.classList.toggle("showAlways", O),
										setTimeout(() => {
											this.b.root.classList.toggle("noTransition", !1);
										}, 0);
								}),
							),
							this.D(
								(0, C.autorunWithStore)((R, O) => {
									this.b.buttons.replaceChildren();
									const B = O.add(
										N.createInstance(b.$Tyb, this.b.buttons, this.j.read(R), {
											orientation: i.ActionsOrientation.VERTICAL,
											hoverDelegate: A,
											toolbarOptions: {
												primaryGroup: (U) => U.startsWith("primary"),
											},
											overflowBehavior: { maxItems: this.n.read(R) ? 1 : 3 },
											hiddenItemStrategy: b.HiddenItemStrategy.Ignore,
											actionRunner: new a.$hyb(() => {
												const U = this.q.get(),
													z = U.mapping;
												return {
													mapping: z,
													originalWithModifiedChanges: M.computeStagedValue(z),
													originalUri: U.originalUri,
													modifiedUri: U.modifiedUri,
												};
											}),
											menuOptions: { shouldForwardArgs: !0 },
										}),
									);
									O.add(
										B.onDidChangeMenuItems(() => {
											this.t && this.layout(this.t, this.u);
										}),
									);
								}),
							);
					}
					layout(L, D) {
						(this.t = L), (this.u = D);
						let M = this.b.buttons.clientHeight;
						this.n.set(
							this.q.get().mapping.original.startLineNumber === 1 &&
								L.length < 30,
							void 0,
						),
							(M = this.b.buttons.clientHeight);
						const N = L.length / 2 - M / 2,
							A = M;
						let R = L.start + N;
						const O = n.$pL.tryCreate(A, D.endExclusive - A - M),
							B = n.$pL.tryCreate(L.start + A, L.endExclusive - M - A);
						B &&
							O &&
							B.start < B.endExclusive &&
							((R = O.clip(R)), (R = B.clip(R))),
							(this.b.buttons.style.top = `${R - L.start}px`);
					}
				};
				P = Ne([j(3, $.$Li)], P);
			},
		)
