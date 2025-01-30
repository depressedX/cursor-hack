import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/ui/button/button.js';
import '../../../../base/common/actions.js';
import '../../../../base/common/errorMessage.js';
import '../../../../base/common/errors.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../browser/editorBrowser.js';
import '../../../browser/services/bulkEditService.js';
import '../../../common/model.js';
import './edit.js';
import '../../../../nls.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/contextview/browser/contextView.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../../platform/notification/common/notification.js';
import '../../../../css!vs/editor/contrib/dropOrPasteInto/browser/postEditWidget.js';
define(
			de[1632],
			he([
				1, 0, 7, 183, 50, 163, 29, 6, 3, 56, 199, 64, 1181, 4, 8, 49, 5, 39, 40,
				2294,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*button*/,
 w /*actions*/,
 E /*errorMessage*/,
 C /*errors*/,
 d /*event*/,
 m /*lifecycle*/,
 r /*editorBrowser*/,
 u /*bulkEditService*/,
 a /*model*/,
 h /*edit*/,
 c /*nls*/,
 n /*contextkey*/,
 g /*contextView*/,
 p /*instantiation*/,
 o /*keybinding*/,
 f /*notification*/) {
				"use strict";
				var b;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Tzb = void 0),
					(t = mt(t));
				let s = class extends m.$1c {
					static {
						b = this;
					}
					static {
						this.a = "editor.widget.postEditWidget";
					}
					constructor($, v, S, I, T, P, k, L, D, M) {
						super(),
							(this.g = $),
							(this.h = v),
							(this.j = I),
							(this.m = T),
							(this.n = P),
							(this.q = k),
							(this.r = L),
							(this.s = M),
							(this.allowEditorOverflow = !0),
							(this.suppressMouseDown = !0),
							this.u(),
							(this.f = S.bindTo(D)),
							this.f.set(!0),
							this.D((0, m.$Yc)(() => this.f.reset())),
							this.h.addContentWidget(this),
							this.h.layoutContentWidget(this),
							this.D((0, m.$Yc)(() => this.h.removeContentWidget(this))),
							this.D(
								this.h.onDidChangeCursorPosition((N) => {
									T.containsPosition(N.position) || this.dispose();
								}),
							),
							this.D(
								d.Event.runAndSubscribe(M.onDidUpdateKeybindings, () => {
									this.t();
								}),
							);
					}
					t() {
						const $ = this.s.lookupKeybinding(this.j.id)?.getLabel();
						this.c.element.title = this.j.label + ($ ? ` (${$})` : "");
					}
					u() {
						(this.b = t.$(".post-edit-widget")),
							(this.c = this.D(new i.$oob(this.b, { supportIcons: !0 }))),
							(this.c.label = "$(insert)"),
							this.D(t.$0fb(this.b, t.$$gb.CLICK, () => this.showSelector()));
					}
					getId() {
						return b.a + "." + this.g;
					}
					getDomNode() {
						return this.b;
					}
					getPosition() {
						return {
							position: this.m.getEndPosition(),
							preference: [r.ContentWidgetPositionPreference.BELOW],
						};
					}
					showSelector() {
						this.r.showContextMenu({
							getAnchor: () => {
								const $ = t.$tgb(this.c.element);
								return { x: $.left + $.width, y: $.top + $.height };
							},
							getActions: () =>
								this.n.allEdits.map(($, v) =>
									(0, w.$wj)({
										id: "",
										label: $.title,
										checked: v === this.n.activeEditIndex,
										run: () => {
											if (v !== this.n.activeEditIndex) return this.q(v);
										},
									}),
								),
						});
					}
				};
				s = b = Ne([j(7, g.$Xxb), j(8, n.$6j), j(9, o.$uZ)], s);
				let l = class extends m.$1c {
					constructor($, v, S, I, T, P, k) {
						super(),
							(this.b = $),
							(this.c = v),
							(this.f = S),
							(this.g = I),
							(this.h = T),
							(this.j = P),
							(this.m = k),
							(this.a = this.D(new m.$2c())),
							this.D(
								d.Event.any(
									v.onDidChangeModel,
									v.onDidChangeModelContent,
								)(() => this.clear()),
							);
					}
					async applyEditAndShowIfNeeded($, v, S, I, T) {
						const P = this.c.getModel();
						if (!P || !$.length) return;
						const k = v.allEdits.at(v.activeEditIndex);
						if (!k) return;
						const L = async (U) => {
								const z = this.c.getModel();
								z &&
									(await z.undo(),
									this.applyEditAndShowIfNeeded(
										$,
										{ activeEditIndex: U, allEdits: v.allEdits },
										S,
										I,
										T,
									));
							},
							D = (U, z) => {
								(0, C.$8)(U) || (this.m.error(z), S && this.show($[0], v, L));
							};
						let M;
						try {
							M = await I(k, T);
						} catch (U) {
							return D(U, (0, c.localize)(1001, null, k.title, (0, E.$xj)(U)));
						}
						if (T.isCancellationRequested) return;
						const N = (0, h.$Jzb)(P.uri, $, M),
							A = $[0],
							R = P.deltaDecorations(
								[],
								[
									{
										range: A,
										options: {
											description: "paste-line-suffix",
											stickiness:
												a.TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges,
										},
									},
								],
							);
						this.c.focus();
						let O, B;
						try {
							(O = await this.j.apply(N, { editor: this.c, token: T })),
								(B = P.getDecorationRange(R[0]));
						} catch (U) {
							return D(U, (0, c.localize)(1002, null, k.title, (0, E.$xj)(U)));
						} finally {
							P.deltaDecorations(R, []);
						}
						T.isCancellationRequested ||
							(S &&
								O.isApplied &&
								v.allEdits.length > 1 &&
								this.show(B ?? A, v, L));
					}
					show($, v, S) {
						this.clear(),
							this.c.hasModel() &&
								(this.a.value = this.h.createInstance(
									s,
									this.b,
									this.c,
									this.f,
									this.g,
									$,
									v,
									S,
								));
					}
					clear() {
						this.a.clear();
					}
					tryShowSelector() {
						this.a.value?.showSelector();
					}
				};
				(e.$Tzb = l),
					(e.$Tzb = l = Ne([j(4, p.$Li), j(5, u.$rzb), j(6, f.$4N)], l));
			},
		),
		