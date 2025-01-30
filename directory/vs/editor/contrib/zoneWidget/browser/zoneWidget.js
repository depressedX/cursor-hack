import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/ui/sash/sash.js';
import '../../../../base/common/color.js';
import '../../../../base/common/idGenerator.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/objects.js';
import '../../../common/config/editorOptions.js';
import '../../../common/core/range.js';
import '../../../common/editorCommon.js';
import '../../../common/model.js';
import '../../../common/model/textModel.js';
import '../../../../css!vs/editor/contrib/zoneWidget/browser/zoneWidget.js';
define(
			de[680],
			he([1, 0, 7, 277, 97, 584, 3, 82, 38, 17, 98, 64, 122, 2327]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*sash*/,
 w /*color*/,
 E /*idGenerator*/,
 C /*lifecycle*/,
 d /*objects*/,
 m /*editorOptions*/,
 r /*range*/,
 u /*editorCommon*/,
 a /*model*/,
 h /*textModel*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$FLb = e.$ELb = void 0),
					(t = mt(t)),
					(d = mt(d));
				const c = new w.$UL(new w.$RL(0, 122, 204)),
					n = {
						showArrow: !0,
						showFrame: !0,
						className: "",
						frameColor: c,
						arrowColor: c,
						keepEditorSelection: !1,
						moveToLineWhenShown: !0,
					},
					g = "vs.editor.contrib.zoneWidget";
				class p {
					constructor(l, y, $, v, S, I, T, P) {
						(this.id = ""),
							(this.domNode = l),
							(this.afterLineNumber = y),
							(this.afterColumn = $),
							(this.heightInLines = v),
							(this.showInHiddenAreas = T),
							(this.ordinal = P),
							(this.a = S),
							(this.b = I);
					}
					onDomNodeTop(l) {
						this.a(l);
					}
					onComputedHeight(l) {
						this.b(l);
					}
				}
				class o {
					constructor(l, y) {
						(this.a = l), (this.b = y);
					}
					getId() {
						return this.a;
					}
					getDomNode() {
						return this.b;
					}
					getPosition() {
						return null;
					}
				}
				e.$ELb = o;
				class f {
					static {
						this.a = new E.$Rdb(".arrow-decoration-");
					}
					constructor(l) {
						(this.g = l),
							(this.b = f.a.nextId()),
							(this.c = this.g.createDecorationsCollection()),
							(this.d = null),
							(this.f = -1);
					}
					dispose() {
						this.hide(), t.$Xgb(this.b);
					}
					set color(l) {
						this.d !== l && ((this.d = l), this.h());
					}
					set height(l) {
						this.f !== l && ((this.f = l), this.h());
					}
					h() {
						t.$Xgb(this.b),
							t.$Wgb(
								`.monaco-editor ${this.b}`,
								`border-style: solid; border-color: transparent; border-bottom-color: ${this.d}; border-width: ${this.f}px; bottom: -${this.f}px !important; margin-left: -${this.f}px; `,
							);
					}
					show(l) {
						l.column === 1 && (l = { lineNumber: l.lineNumber, column: 2 }),
							this.c.set([
								{
									range: r.$iL.fromPositions(l),
									options: {
										description: "zone-widget-arrow",
										className: this.b,
										stickiness:
											a.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
									},
								},
							]);
					}
					hide() {
						this.c.clear();
					}
				}
				class b {
					constructor(l, y = {}) {
						(this.f = null),
							(this.g = null),
							(this.h = null),
							(this.n = null),
							(this.o = new C.$Zc()),
							(this.container = null),
							(this.x = !1),
							(this.editor = l),
							(this.l = this.editor.createDecorationsCollection()),
							(this.options = d.$vo(y)),
							d.$yo(this.options, n, !1),
							(this.domNode = document.createElement("div")),
							this.options.isAccessible ||
								(this.domNode.setAttribute("aria-hidden", "true"),
								this.domNode.setAttribute("role", "presentation")),
							this.o.add(
								this.editor.onDidLayoutChange(($) => {
									const v = this.t($);
									(this.domNode.style.width = v + "px"),
										(this.domNode.style.left = this.u($) + "px"),
										this.D(v);
								}),
							);
					}
					dispose() {
						this.g &&
							(this.editor.removeOverlayWidget(this.g), (this.g = null)),
							this.n &&
								this.editor.changeViewZones((l) => {
									this.n && l.removeZone(this.n.id), (this.n = null);
								}),
							this.l.clear(),
							this.o.dispose();
					}
					create() {
						this.domNode.classList.add("zone-widget"),
							this.options.className &&
								this.domNode.classList.add(this.options.className),
							(this.container = document.createElement("div")),
							this.container.classList.add("zone-widget-container"),
							this.domNode.appendChild(this.container),
							this.options.showArrow &&
								((this.f = new f(this.editor)), this.o.add(this.f)),
							this.C(this.container),
							this.G(),
							this.q();
					}
					style(l) {
						l.frameColor && (this.options.frameColor = l.frameColor),
							l.arrowColor && (this.options.arrowColor = l.arrowColor),
							this.q();
					}
					q() {
						if (this.container && this.options.frameColor) {
							const l = this.options.frameColor.toString();
							(this.container.style.borderTopColor = l),
								(this.container.style.borderBottomColor = l);
						}
						if (this.f && this.options.arrowColor) {
							const l = this.options.arrowColor.toString();
							this.f.color = l;
						}
					}
					t(l) {
						return l.width - l.minimap.minimapWidth - l.verticalScrollbarWidth;
					}
					u(l) {
						return l.minimap.minimapWidth > 0 && l.minimap.minimapLeft === 0
							? l.minimap.minimapWidth
							: 0;
					}
					v(l) {
						this.domNode.style.top = l + "px";
					}
					w(l) {
						if (((this.domNode.style.height = `${l}px`), this.container)) {
							const y = l - this.y();
							this.container.style.height = `${y}px`;
							const $ = this.editor.getLayoutInfo();
							this.E(y, this.t($));
						}
						this.h?.layout();
					}
					get position() {
						const l = this.l.getRange(0);
						if (l) return l.getStartPosition();
					}
					hasFocus() {
						return this.domNode.contains(t.$Jgb());
					}
					show(l, y) {
						const $ = r.$iL.isIRange(l)
							? r.$iL.lift(l)
							: r.$iL.fromPositions(l);
						(this.x = !0),
							this.z($, y),
							(this.x = !1),
							this.l.set([{ range: $, options: h.$eY.EMPTY }]);
					}
					updatePositionAndHeight(l, y) {
						this.n &&
							((l = r.$iL.isIRange(l) ? r.$iL.getStartPosition(l) : l),
							(this.n.afterLineNumber = l.lineNumber),
							(this.n.afterColumn = l.column),
							(this.n.heightInLines = y ?? this.n.heightInLines),
							this.editor.changeViewZones(($) => {
								$.layoutZone(this.n.id);
							}),
							this.l.set([
								{
									range: r.$iL.isIRange(l) ? l : r.$iL.fromPositions(l),
									options: h.$eY.EMPTY,
								},
							]));
					}
					hide() {
						this.n &&
							(this.editor.changeViewZones((l) => {
								this.n && l.removeZone(this.n.id);
							}),
							(this.n = null)),
							this.g &&
								(this.editor.removeOverlayWidget(this.g), (this.g = null)),
							this.f?.hide(),
							this.l.clear();
					}
					y() {
						const l = this.editor.getOption(m.EditorOption.lineHeight);
						let y = 0;
						if (this.options.showArrow) {
							const $ = Math.round(l / 3);
							y += 2 * $;
						}
						if (this.options.showFrame) {
							const $ = Math.round(l / 9);
							y += 2 * $;
						}
						return y;
					}
					z(l, y) {
						const $ = l.getStartPosition(),
							v = this.editor.getLayoutInfo(),
							S = this.t(v);
						(this.domNode.style.width = `${S}px`),
							(this.domNode.style.left = this.u(v) + "px");
						const I = document.createElement("div");
						I.style.overflow = "hidden";
						const T = this.editor.getOption(m.EditorOption.lineHeight);
						if (!this.options.allowUnlimitedHeight) {
							const M = Math.max(
								12,
								(this.editor.getLayoutInfo().height / T) * 0.8,
							);
							y = Math.min(y, M);
						}
						let P = 0,
							k = 0;
						if (
							(this.f &&
								this.options.showArrow &&
								((P = Math.round(T / 3)), (this.f.height = P), this.f.show($)),
							this.options.showFrame && (k = Math.round(T / 9)),
							this.editor.changeViewZones((M) => {
								this.n && M.removeZone(this.n.id),
									this.g &&
										(this.editor.removeOverlayWidget(this.g), (this.g = null)),
									(this.domNode.style.top = "-1000px"),
									(this.n = new p(
										I,
										$.lineNumber,
										$.column,
										y,
										(N) => this.v(N),
										(N) => this.w(N),
										this.options.showInHiddenAreas,
										this.options.ordinal,
									)),
									(this.n.id = M.addZone(this.n)),
									(this.g = new o(g + this.n.id, this.domNode)),
									this.editor.addOverlayWidget(this.g);
							}),
							this.container && this.options.showFrame)
						) {
							const M = this.options.frameWidth ? this.options.frameWidth : k;
							(this.container.style.borderTopWidth = M + "px"),
								(this.container.style.borderBottomWidth = M + "px");
						}
						const L = y * T - this.y();
						this.container &&
							((this.container.style.top = P + "px"),
							(this.container.style.height = L + "px"),
							(this.container.style.overflow = "hidden")),
							this.E(L, S),
							this.options.keepEditorSelection || this.editor.setSelection(l);
						const D = this.editor.getModel();
						if (D && this.options.moveToLineWhenShown) {
							const M = D.validateRange(
								new r.$iL(l.startLineNumber, 1, l.endLineNumber + 1, 1),
							);
							this.A(M, M.startLineNumber === D.getLineCount());
						}
					}
					A(l, y) {
						y
							? this.editor.revealLineNearTop(
									l.endLineNumber,
									u.ScrollType.Smooth,
								)
							: this.editor.revealRange(l, u.ScrollType.Smooth);
					}
					B(l, y) {
						this.container &&
							(y && this.container.classList.remove(y),
							this.container.classList.add(l));
					}
					D(l) {}
					E(l, y) {}
					F(l) {
						this.n &&
							this.n.heightInLines !== l &&
							this.editor.changeViewZones((y) => {
								this.n && ((this.n.heightInLines = l), y.layoutZone(this.n.id));
							});
					}
					G() {
						if (this.h) return;
						(this.h = this.o.add(
							new i.Sash(this.domNode, this, {
								orientation: i.Orientation.HORIZONTAL,
							}),
						)),
							this.options.isResizeable ||
								(this.h.state = i.SashState.Disabled);
						let l;
						this.o.add(
							this.h.onDidStart((y) => {
								this.n &&
									(l = {
										startY: y.startY,
										heightInLines: this.n.heightInLines,
									});
							}),
						),
							this.o.add(
								this.h.onDidEnd(() => {
									l = void 0;
								}),
							),
							this.o.add(
								this.h.onDidChange((y) => {
									if (l) {
										const $ =
												(y.currentY - l.startY) /
												this.editor.getOption(m.EditorOption.lineHeight),
											v = $ < 0 ? Math.ceil($) : Math.floor($),
											S = l.heightInLines + v;
										S > 5 && S < 35 && this.F(S);
									}
								}),
							);
					}
					getHorizontalSashLeft() {
						return 0;
					}
					getHorizontalSashTop() {
						return (
							(this.domNode.style.height === null
								? 0
								: parseInt(this.domNode.style.height)) -
							this.y() / 2
						);
					}
					getHorizontalSashWidth() {
						const l = this.editor.getLayoutInfo();
						return l.width - l.minimap.minimapWidth;
					}
				}
				e.$FLb = b;
			},
		),
		