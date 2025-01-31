import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/common/keyCodes.js';
import '../../../../base/common/lifecycle.js';
import '../../../browser/editorBrowser.js';
import '../../../common/config/editorOptions.js';
import '../../../common/languages.js';
import './hoverOperation.js';
import './hoverTypes.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/keybinding/common/keybinding.js';
import './contentHoverWidget.js';
import './contentHoverComputer.js';
import './contentHoverTypes.js';
import '../../../../base/common/event.js';
import './contentHoverRendered.js';
import './hoverUtils.js';
define(
			de[3606],
			he([
				1, 0, 7, 27, 3, 56, 38, 74, 601, 368, 5, 39, 2768, 2725, 2585, 6, 3605,
				937,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*keyCodes*/,
 w /*lifecycle*/,
 E /*editorBrowser*/,
 C /*editorOptions*/,
 d /*languages*/,
 m /*hoverOperation*/,
 r /*hoverTypes*/,
 u /*instantiation*/,
 a /*keybinding*/,
 h /*contentHoverWidget*/,
 c /*contentHoverComputer*/,
 n /*contentHoverTypes*/,
 g /*event*/,
 p /*contentHoverRendered*/,
 o /*hoverUtils*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$vhc = void 0),
					(t = mt(t));
				let f = class extends w.$1c {
					constructor(s, l, y) {
						super(),
							(this.q = s),
							(this.r = l),
							(this.s = y),
							(this.c = null),
							(this.n = this.D(new g.$re())),
							(this.onContentsChanged = this.n.event),
							(this.h = this.D(this.r.createInstance(h.$uhc, this.q))),
							(this.j = this.t()),
							(this.g = new c.$VDb(this.q, this.j)),
							(this.m = this.D(new m.$sCb(this.q, this.g))),
							this.u();
					}
					t() {
						const s = [];
						for (const l of r.$5Bb.getAll()) {
							const y = this.r.createInstance(l, this.q);
							s.push(y);
						}
						return (
							s.sort((l, y) => l.hoverOrdinal - y.hoverOrdinal),
							this.D(
								this.h.onDidResize(() => {
									this.j.forEach((l) => l.handleResize?.());
								}),
							),
							s
						);
					}
					u() {
						this.D(
							this.m.onResult((l) => {
								if (!this.g.anchor) return;
								const y = l.hasLoadingMessage ? this.F(l.value) : l.value;
								this.G(new n.$XDb(this.g.anchor, y, l.isComplete));
							}),
						);
						const s = this.h.getDomNode();
						this.D(
							t.$$fb(s, "keydown", (l) => {
								l.equals(i.KeyCode.Escape) && this.hide();
							}),
						),
							this.D(
								t.$$fb(s, "mouseleave", (l) => {
									this.M(l);
								}),
							),
							this.D(
								d.$lM.onDidChange(() => {
									this.h.position && this.c && this.C(this.c);
								}),
							);
					}
					w(s, l, y, $, v) {
						if (!(this.h.position && this.c))
							return s ? (this.z(s, l, y, $, !1), !0) : !1;
						const I = this.q.getOption(C.EditorOption.hover).sticky,
							T = v && this.h.isMouseGettingCloser(v.event.posx, v.event.posy);
						return I && T
							? (s && this.z(s, l, y, $, !0), !0)
							: s
								? this.c.anchor.equals(s)
									? !0
									: s.canAdoptVisibleHover(this.c.anchor, this.h.position)
										? (this.C(this.c.filter(s)), this.z(s, l, y, $, !1), !0)
										: (this.C(null), this.z(s, l, y, $, !1), !0)
								: (this.C(null), !1);
					}
					z(s, l, y, $, v) {
						(this.g.anchor && this.g.anchor.equals(s)) ||
							(this.m.cancel(),
							(this.g.anchor = s),
							(this.g.shouldFocus = $),
							(this.g.source = y),
							(this.g.insistOnKeepingHoverVisible = v),
							this.m.start(l));
					}
					C(s) {
						let l = s;
						if (this.c === l) return;
						l && l.hoverParts.length === 0 && (l = null),
							(this.c = l),
							this.c ? this.H(this.c) : this.I();
					}
					F(s) {
						if (!this.g.anchor) return s;
						for (const l of this.j) {
							if (!l.createLoadingMessage) continue;
							const y = l.createLoadingMessage(this.g.anchor);
							if (y) return s.slice(0).concat([y]);
						}
						return s;
					}
					G(s) {
						if (
							((this.h.position && this.c && this.c.isComplete) || this.C(s),
							!s.isComplete)
						)
							return;
						const $ = s.hoverParts.length === 0,
							v = this.g.insistOnKeepingHoverVisible;
						($ && v) || this.C(s);
					}
					H(s) {
						const l = this.J();
						(this.f = new p.$thc(this.q, s, this.j, this.g, l, this.s)),
							this.f.domNodeHasChildren
								? this.h.show(this.f)
								: this.f.dispose();
					}
					I() {
						this.h.hide();
					}
					J() {
						return {
							hide: () => {
								this.hide();
							},
							onContentsChanged: () => {
								this.n.fire(), this.h.onContentsChanged();
							},
							setMinimumDimensions: ($) => {
								this.h.setMinimumDimensions($);
							},
						};
					}
					showsOrWillShow(s) {
						if (this.h.isResizing) return !0;
						const y = this.L(s);
						if (!(y.length > 0))
							return this.w(
								null,
								m.HoverStartMode.Delayed,
								m.HoverStartSource.Mouse,
								!1,
								s,
							);
						const v = y[0];
						return this.w(
							v,
							m.HoverStartMode.Delayed,
							m.HoverStartSource.Mouse,
							!1,
							s,
						);
					}
					L(s) {
						const l = [];
						for (const $ of this.j) {
							if (!$.suggestHoverAnchor) continue;
							const v = $.suggestHoverAnchor(s);
							v && l.push(v);
						}
						const y = s.target;
						switch (y.type) {
							case E.MouseTargetType.CONTENT_TEXT: {
								l.push(new r.$2Bb(0, y.range, s.event.posx, s.event.posy));
								break;
							}
							case E.MouseTargetType.CONTENT_EMPTY: {
								const $ =
									this.q.getOption(C.EditorOption.fontInfo)
										.typicalHalfwidthCharacterWidth / 2;
								if (
									!(
										!y.detail.isAfterLines &&
										typeof y.detail.horizontalDistanceToText == "number" &&
										y.detail.horizontalDistanceToText < $
									)
								)
									break;
								l.push(new r.$2Bb(0, y.range, s.event.posx, s.event.posy));
								break;
							}
						}
						return l.sort(($, v) => v.priority - $.priority), l;
					}
					M(s) {
						const l = this.q.getDomNode();
						(!l || !(0, o.$TDb)(l, s.x, s.y)) && this.hide();
					}
					startShowingAtRange(s, l, y, $) {
						this.w(new r.$2Bb(0, s, void 0, void 0), l, y, $, null);
					}
					getWidgetContent() {
						const s = this.h.getDomNode();
						if (s.textContent) return s.textContent;
					}
					async updateHoverVerbosityLevel(s, l, y) {
						this.f?.updateHoverVerbosityLevel(s, l, y);
					}
					doesHoverAtIndexSupportVerbosityAction(s, l) {
						return this.f?.doesHoverAtIndexSupportVerbosityAction(s, l) ?? !1;
					}
					getAccessibleWidgetContent() {
						return this.f?.getAccessibleWidgetContent();
					}
					getAccessibleWidgetContentAtIndex(s) {
						return this.f?.getAccessibleWidgetContentAtIndex(s);
					}
					focusedHoverPartIndex() {
						return this.f?.focusedHoverPartIndex ?? -1;
					}
					containsNode(s) {
						return s ? this.h.getDomNode().contains(s) : !1;
					}
					focus() {
						this.h.focus();
					}
					focusHoverPartWithIndex(s) {
						this.f?.focusHoverPartWithIndex(s);
					}
					scrollUp() {
						this.h.scrollUp();
					}
					scrollDown() {
						this.h.scrollDown();
					}
					scrollLeft() {
						this.h.scrollLeft();
					}
					scrollRight() {
						this.h.scrollRight();
					}
					pageUp() {
						this.h.pageUp();
					}
					pageDown() {
						this.h.pageDown();
					}
					goToTop() {
						this.h.goToTop();
					}
					goToBottom() {
						this.h.goToBottom();
					}
					hide() {
						(this.g.anchor = null), this.m.cancel(), this.C(null);
					}
					getDomNode() {
						return this.h.getDomNode();
					}
					get isColorPickerVisible() {
						return this.f?.isColorPickerVisible() ?? !1;
					}
					get isVisibleFromKeyboard() {
						return this.h.isVisibleFromKeyboard;
					}
					get isVisible() {
						return this.h.isVisible;
					}
					get isFocused() {
						return this.h.isFocused;
					}
					get isResizing() {
						return this.h.isResizing;
					}
					get widget() {
						return this.h;
					}
				};
				(e.$vhc = f), (e.$vhc = f = Ne([j(1, u.$Li), j(2, a.$uZ)], f));
			},
		)
