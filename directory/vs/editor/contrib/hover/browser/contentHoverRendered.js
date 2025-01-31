import '../../../../../require.js';
import '../../../../../exports.js';
import './hoverTypes.js';
import '../../../../base/common/lifecycle.js';
import './contentHoverStatusBar.js';
import '../../../common/model/textModel.js';
import '../../../common/core/position.js';
import '../../../common/core/range.js';
import '../../../../base/browser/dom.js';
import './markdownHoverParticipant.js';
import '../../colorPicker/browser/colorHoverParticipant.js';
import '../../../../nls.js';
import '../../inlayHints/browser/inlayHintsHover.js';
import '../../../../base/common/errors.js';
define(
			de[3605],
			he([1, 0, 368, 3, 1616, 122, 48, 17, 7, 820, 1218, 4, 1868, 29]),
			function (ce /*require*/,
 e /*exports*/,
 t /*hoverTypes*/,
 i /*lifecycle*/,
 w /*contentHoverStatusBar*/,
 E /*textModel*/,
 C /*position*/,
 d /*range*/,
 m /*dom*/,
 r /*markdownHoverParticipant*/,
 u /*colorHoverParticipant*/,
 a /*nls*/,
 h /*inlayHintsHover*/,
 c /*errors*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$thc = void 0),
					(m = mt(m));
				class n extends i.$1c {
					constructor(f, b, s, l, y, $) {
						super();
						const v = b.anchor,
							S = b.hoverParts;
						this.a = this.D(new p(f, s, S, $, y));
						const { showAtPosition: I, showAtSecondaryPosition: T } =
							n.computeHoverPositions(f, v.range, S);
						(this.shouldAppearBeforeContent = S.some((P) => P.isBeforeContent)),
							(this.showAtPosition = I),
							(this.showAtSecondaryPosition = T),
							(this.initialMousePosX = v.initialMousePosX),
							(this.initialMousePosY = v.initialMousePosY),
							(this.shouldFocus = l.shouldFocus),
							(this.source = l.source);
					}
					get domNode() {
						return this.a.domNode;
					}
					get domNodeHasChildren() {
						return this.a.domNodeHasChildren;
					}
					get focusedHoverPartIndex() {
						return this.a.focusedHoverPartIndex;
					}
					focusHoverPartWithIndex(f) {
						this.a.focusHoverPartWithIndex(f);
					}
					getAccessibleWidgetContent() {
						return this.a.getAccessibleContent();
					}
					getAccessibleWidgetContentAtIndex(f) {
						return this.a.getAccessibleHoverContentAtIndex(f);
					}
					async updateHoverVerbosityLevel(f, b, s) {
						this.a.updateHoverVerbosityLevel(f, b, s);
					}
					doesHoverAtIndexSupportVerbosityAction(f, b) {
						return this.a.doesHoverAtIndexSupportVerbosityAction(f, b);
					}
					isColorPickerVisible() {
						return this.a.isColorPickerVisible();
					}
					static computeHoverPositions(f, b, s) {
						let l = 1;
						if (f.hasModel()) {
							const T = f._getViewModel(),
								P = T.coordinatesConverter,
								k = P.convertModelRangeToViewRange(b),
								L = T.getLineMinColumn(k.startLineNumber),
								D = new C.$hL(k.startLineNumber, L);
							l = P.convertViewPositionToModelPosition(D).column;
						}
						const y = b.startLineNumber;
						let $ = b.startColumn,
							v;
						for (const T of s) {
							const P = T.range,
								k = P.startLineNumber === y,
								L = P.endLineNumber === y;
							if (k && L) {
								const M = P.startColumn,
									N = Math.min($, M);
								$ = Math.max(N, l);
							}
							T.forceShowAtRange && (v = P);
						}
						let S, I;
						if (v) {
							const T = v.getStartPosition();
							(S = T), (I = T);
						} else (S = b.getStartPosition()), (I = new C.$hL(y, $));
						return { showAtPosition: S, showAtSecondaryPosition: I };
					}
				}
				e.$thc = n;
				class g {
					constructor(f, b) {
						(this.a = b), f.appendChild(this.a.hoverElement);
					}
					get hoverElement() {
						return this.a.hoverElement;
					}
					get actions() {
						return this.a.actions;
					}
					dispose() {
						this.a.dispose();
					}
				}
				class p extends i.$1c {
					static {
						this.a = E.$eY.register({
							description: "content-hover-highlight",
							className: "hoverHighlight",
						});
					}
					constructor(f, b, s, l, y) {
						super(),
							(this.b = []),
							(this.j = -1),
							(this.f = y),
							(this.c = document.createDocumentFragment()),
							this.D(this.q(b, s, y, l)),
							this.D(this.t()),
							this.D(this.n(f, s)),
							this.u(b);
					}
					n(f, b) {
						if (b.length === 0) return i.$1c.None;
						let s = b[0].range;
						for (const y of b) {
							const $ = y.range;
							s = d.$iL.plusRange(s, $);
						}
						const l = f.createDecorationsCollection();
						return (
							l.set([{ range: s, options: p.a }]),
							(0, i.$Yc)(() => {
								l.clear();
							})
						);
					}
					q(f, b, s, l) {
						const y = new w.$WDb(l),
							$ = { fragment: this.c, statusBar: y, ...s },
							v = new i.$Zc();
						for (const I of f) {
							const T = this.r(b, I, $);
							v.add(T);
							for (const P of T.renderedHoverParts)
								this.b.push({
									type: "hoverPart",
									participant: I,
									hoverPart: P.hoverPart,
									hoverElement: P.hoverElement,
								});
						}
						const S = this.s(this.c, y);
						return (
							S &&
								(v.add(S),
								this.b.push({
									type: "statusBar",
									hoverElement: S.hoverElement,
									actions: S.actions,
								})),
							(0, i.$Yc)(() => {
								v.dispose();
							})
						);
					}
					r(f, b, s) {
						const l = f.filter(($) => $.owner === b);
						return l.length > 0 ? b.renderHoverParts(s, l) : new t.$4Bb([]);
					}
					s(f, b) {
						if (b.hasContent) return new g(f, b);
					}
					t() {
						const f = new i.$Zc();
						return (
							this.b.forEach((b, s) => {
								const l = b.hoverElement;
								(l.tabIndex = 0),
									f.add(
										m.$0fb(l, m.$$gb.FOCUS_IN, (y) => {
											y.stopPropagation(), (this.j = s);
										}),
									),
									f.add(
										m.$0fb(l, m.$$gb.FOCUS_OUT, (y) => {
											y.stopPropagation(), (this.j = -1);
										}),
									);
							}),
							f
						);
					}
					u(f) {
						const b = f.find(
							(s) => s instanceof r.$hhc && !(s instanceof h.$shc),
						);
						b && (this.g = b), (this.h = f.find((s) => s instanceof u.$$Bb));
					}
					focusHoverPartWithIndex(f) {
						f < 0 || f >= this.b.length || this.b[f].hoverElement.focus();
					}
					getAccessibleContent() {
						const f = [];
						for (let b = 0; b < this.b.length; b++)
							f.push(this.getAccessibleHoverContentAtIndex(b));
						return f.join(`

`);
					}
					getAccessibleHoverContentAtIndex(f) {
						const b = this.b[f];
						if (!b) return "";
						if (b.type === "statusBar") {
							const s = [(0, a.localize)(1165, null)];
							for (const l of b.actions) {
								const y = l.actionKeybindingLabel;
								y
									? s.push((0, a.localize)(1166, null, l.actionLabel, y))
									: s.push((0, a.localize)(1167, null, l.actionLabel));
							}
							return s.join(`
`);
						}
						return b.participant.getAccessibleContent(b.hoverPart);
					}
					async updateHoverVerbosityLevel(f, b, s) {
						if (!this.g) return;
						const l = this.w(this.g, b);
						if (l === void 0) return;
						const y = await this.g.updateMarkdownHoverVerbosityLevel(f, l, s);
						y &&
							((this.b[b] = {
								type: "hoverPart",
								participant: this.g,
								hoverPart: y.hoverPart,
								hoverElement: y.hoverElement,
							}),
							this.f.onContentsChanged());
					}
					doesHoverAtIndexSupportVerbosityAction(f, b) {
						if (!this.g) return !1;
						const s = this.w(this.g, f);
						return s === void 0
							? !1
							: this.g.doesMarkdownHoverAtIndexSupportVerbosityAction(s, b);
					}
					isColorPickerVisible() {
						return this.h?.isColorPickerVisible() ?? !1;
					}
					w(f, b) {
						const s = this.b[b];
						if (!s || s.type !== "hoverPart" || !(s.participant === f)) return;
						const y = this.b.findIndex(
							($) => $.type === "hoverPart" && $.participant === f,
						);
						if (y === -1) throw new c.$gb();
						return b - y;
					}
					get domNode() {
						return this.c;
					}
					get domNodeHasChildren() {
						return this.c.hasChildNodes();
					}
					get focusedHoverPartIndex() {
						return this.j;
					}
				}
			},
		)
