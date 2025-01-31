import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/fastDomNode.js';
import '../../editorBrowser.js';
import '../../view/viewPart.js';
import '../../../common/config/editorOptions.js';
import '../../../../base/browser/dom.js';
import '../../../../css!vs/editor/browser/viewParts/overlayWidgets/overlayWidgets.js';
define(
			de[2716],
			he([1, 0, 194, 56, 303, 38, 7, 2273]),
			function (ce /*require*/,
 e /*exports*/,
 t /*fastDomNode*/,
 i /*editorBrowser*/,
 w /*viewPart*/,
 E /*editorOptions*/,
 C /*dom*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Fvb = void 0),
					(C = mt(C));
				class d extends w.$yub {
					constructor(r, u) {
						super(r), (this.c = u);
						const h = this._context.configuration.options.get(
							E.EditorOption.layoutInfo,
						);
						(this.g = {}),
							(this.n = h.verticalScrollbarWidth),
							(this.q = h.minimap.minimapWidth),
							(this.s = h.horizontalScrollbarHeight),
							(this.t = h.height),
							(this.u = h.width),
							(this.j = { top: 0, left: 0, width: 0, height: 0 }),
							(this.m = (0, t.$Shb)(document.createElement("div"))),
							w.$zub.write(this.m, w.PartFingerprint.OverlayWidgets),
							this.m.setClassName("overlayWidgets"),
							(this.overflowingOverlayWidgetsDomNode = (0, t.$Shb)(
								document.createElement("div"),
							)),
							w.$zub.write(
								this.overflowingOverlayWidgetsDomNode,
								w.PartFingerprint.OverflowingOverlayWidgets,
							),
							this.overflowingOverlayWidgetsDomNode.setClassName(
								"overflowingOverlayWidgets",
							);
					}
					dispose() {
						super.dispose(), (this.g = {});
					}
					getDomNode() {
						return this.m;
					}
					onConfigurationChanged(r) {
						const a = this._context.configuration.options.get(
							E.EditorOption.layoutInfo,
						);
						return (
							(this.n = a.verticalScrollbarWidth),
							(this.q = a.minimap.minimapWidth),
							(this.s = a.horizontalScrollbarHeight),
							(this.t = a.height),
							(this.u = a.width),
							!0
						);
					}
					addWidget(r) {
						const u = (0, t.$Shb)(r.getDomNode());
						(this.g[r.getId()] = { widget: r, preference: null, domNode: u }),
							u.setPosition("absolute"),
							u.setAttribute("widgetId", r.getId()),
							r.allowEditorOverflow
								? this.overflowingOverlayWidgetsDomNode.appendChild(u)
								: this.m.appendChild(u),
							this.h(),
							this.w();
					}
					setWidgetPosition(r, u) {
						const a = this.g[r.getId()],
							h = u ? u.preference : null,
							c = u?.stackOridinal;
						return a.preference === h && a.stack === c
							? (this.w(), !1)
							: ((a.preference = h), (a.stack = c), this.h(), this.w(), !0);
					}
					removeWidget(r) {
						const u = r.getId();
						if (this.g.hasOwnProperty(u)) {
							const h = this.g[u].domNode.domNode;
							delete this.g[u], h.remove(), this.h(), this.w();
						}
					}
					w() {
						let r = 0;
						const u = Object.keys(this.g);
						for (let a = 0, h = u.length; a < h; a++) {
							const c = u[a],
								g = this.g[c].widget.getMinContentWidthInPx?.();
							typeof g < "u" && (r = Math.max(r, g));
						}
						this._context.viewLayout.setOverlayWidgetsMinWidth(r);
					}
					y(r, u) {
						const a = r.domNode;
						if (r.preference === null) {
							a.setTop("");
							return;
						}
						const h = 2 * this.n + this.q;
						if (
							r.preference ===
								i.OverlayWidgetPositionPreference.TOP_RIGHT_CORNER ||
							r.preference ===
								i.OverlayWidgetPositionPreference.BOTTOM_RIGHT_CORNER
						) {
							if (
								r.preference ===
								i.OverlayWidgetPositionPreference.BOTTOM_RIGHT_CORNER
							) {
								const c = a.domNode.clientHeight;
								a.setTop(this.t - c - 2 * this.s);
							} else a.setTop(0);
							r.stack !== void 0
								? (a.setTop(u[r.preference]),
									(u[r.preference] += a.domNode.clientWidth))
								: a.setRight(h);
						} else if (
							r.preference === i.OverlayWidgetPositionPreference.TOP_CENTER
						)
							(a.domNode.style.right = "50%"),
								r.stack !== void 0
									? (a.setTop(u[i.OverlayWidgetPositionPreference.TOP_CENTER]),
										(u[i.OverlayWidgetPositionPreference.TOP_CENTER] +=
											a.domNode.clientHeight))
									: a.setTop(0);
						else if (
							r.preference === i.OverlayWidgetPositionPreference.BOTTOM_CENTER
						)
							a.setTop(""), a.setBottom(this.s), a.setWidth("100%");
						else {
							const { top: c, left: n } = r.preference;
							if (
								this._context.configuration.options.get(
									E.EditorOption.fixedOverflowWidgets,
								) &&
								r.widget.allowEditorOverflow
							) {
								const p = this.j;
								a.setTop(c + p.top),
									a.setLeft(n + p.left),
									a.setPosition("fixed");
							} else a.setTop(c), a.setLeft(n), a.setPosition("absolute");
						}
					}
					prepareRender(r) {
						this.j = C.$tgb(this.c.domNode);
					}
					render(r) {
						this.m.setWidth(this.u);
						const u = Object.keys(this.g),
							a = Array.from(
								{ length: i.OverlayWidgetPositionPreference.TOP_CENTER + 1 },
								() => 0,
							);
						u.sort((h, c) => (this.g[h].stack || 0) - (this.g[c].stack || 0));
						for (let h = 0, c = u.length; h < c; h++) {
							const n = u[h];
							this.y(this.g[n], a);
						}
					}
				}
				e.$Fvb = d;
			},
		)
