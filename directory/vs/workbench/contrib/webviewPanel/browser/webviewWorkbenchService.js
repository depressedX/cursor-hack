import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/async.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/decorators.js';
import '../../../../base/common/errors.js';
import '../../../../base/common/event.js';
import '../../../../base/common/iterator.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/editor/common/editor.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../common/editor/diffEditorInput.js';
import '../../webview/browser/webview.js';
import './webviewEditor.js';
import './webviewIconManager.js';
import '../../../services/editor/common/editorGroupsService.js';
import '../../../services/editor/common/editorService.js';
import './webviewEditorInput.js';
define(
			de[623],
			he([
				1, 0, 15, 33, 138, 29, 6, 103, 3, 116, 5, 296, 355, 1025, 3441, 66, 18,
				566,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*async*/,
 i /*cancellation*/,
 w /*decorators*/,
 E /*errors*/,
 C /*event*/,
 d /*iterator*/,
 m /*lifecycle*/,
 r /*editor*/,
 u /*instantiation*/,
 a /*diffEditorInput*/,
 h /*webview*/,
 c /*webviewEditor*/,
 n /*webviewIconManager*/,
 g /*editorGroupsService*/,
 p /*editorService*/,
 o /*webviewEditorInput*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$snc = e.$rnc = e.$qnc = void 0),
					(e.$qnc = (0, u.$Mi)("webviewEditorService"));
				function f(y, $) {
					return y.canResolve($);
				}
				let b = class extends o.$W4b {
					constructor($, v, S) {
						super($, v, S.iconManager), (this.w = S), (this.t = !1);
					}
					dispose() {
						super.dispose(), this.u?.cancel(), (this.u = void 0);
					}
					async resolve() {
						if (!this.t) {
							(this.t = !0),
								(this.u = (0, t.$zh)(($) => this.w.resolveWebview(this, $)));
							try {
								await this.u;
							} catch ($) {
								if (!(0, E.$8)($)) throw $;
							}
						}
						return super.resolve();
					}
					s($) {
						if (super.s($)) return ($.t = this.t), $;
					}
				};
				(e.$rnc = b),
					Ne([w.$ei], b.prototype, "resolve", null),
					(e.$rnc = b = Ne([j(2, e.$qnc)], b));
				class s {
					constructor() {
						this.a = [];
					}
					enqueueForRestoration($, v) {
						const S = new t.$0h(),
							I = () => {
								const P = this.a.findIndex((k) => $ === k.input);
								P >= 0 && this.a.splice(P, 1);
							},
							T = (0, m.$Xc)(
								$.webview.onDidDispose(I),
								v.onCancellationRequested(() => {
									I(), S.cancel();
								}),
							);
						return this.a.push({ input: $, promise: S, disposable: T }), S.p;
					}
					reviveFor($, v) {
						const S = this.a.filter(({ input: I }) => f($, I));
						this.a = this.a.filter(({ input: I }) => !f($, I));
						for (const { input: I, promise: T, disposable: P } of S)
							$.resolveWebview(I, v)
								.then(
									(k) => T.complete(k),
									(k) => T.error(k),
								)
								.finally(() => {
									P.dispose();
								});
					}
				}
				let l = class extends m.$1c {
					constructor($, v, S, I) {
						super(),
							(this.f = v),
							(this.g = S),
							(this.h = I),
							(this.a = new Set()),
							(this.b = new s()),
							(this.m = this.D(new C.$re())),
							(this.onDidChangeActiveWebviewEditor = this.m.event),
							(this.c = this.D(this.g.createInstance(n.$V4b))),
							this.D(
								$.registerContextKeyProvider({
									contextKey: c.$onc,
									getGroupContextKeyValue: (T) => this.n(T.activeEditor),
								}),
							),
							this.D(
								v.onDidActiveEditorChange(() => {
									this.q();
								}),
							),
							this.D(
								I.onDidChangeActiveWebview(() => {
									this.q();
								}),
							),
							this.q();
					}
					get iconManager() {
						return this.c;
					}
					n($) {
						let v;
						return (
							$ instanceof o.$W4b
								? (v = $)
								: $ instanceof a.$GVb &&
									($.primary instanceof o.$W4b
										? (v = $.primary)
										: $.secondary instanceof o.$W4b && (v = $.secondary)),
							v?.webview.providedViewType ?? ""
						);
					}
					q() {
						const $ = this.f.activeEditor;
						let v;
						$ instanceof o.$W4b
							? (v = $)
							: $ instanceof a.$GVb &&
								($.primary instanceof o.$W4b &&
								$.primary.webview === this.h.activeWebview
									? (v = $.primary)
									: $.secondary instanceof o.$W4b &&
										$.secondary.webview === this.h.activeWebview &&
										(v = $.secondary)),
							v !== this.j && ((this.j = v), this.m.fire(v));
					}
					openWebview($, v, S, I) {
						const T = this.h.createWebviewOverlay($),
							P = this.g.createInstance(
								o.$W4b,
								{ viewType: v, name: S, providedId: $.providedViewType },
								T,
								this.iconManager,
							);
						return (
							this.f.openEditor(
								P,
								{
									pinned: !0,
									preserveFocus: I.preserveFocus,
									activation: I.preserveFocus
										? r.EditorActivation.RESTORE
										: void 0,
								},
								I.group,
							),
							P
						);
					}
					revealWebview($, v, S) {
						const I = this.r($);
						this.f.openEditor(
							I,
							{
								preserveFocus: S,
								activation: S ? r.EditorActivation.RESTORE : void 0,
							},
							v,
						);
					}
					r($) {
						for (const v of this.f.editors)
							if (
								v === $ ||
								(v instanceof a.$GVb && ($ === v.primary || $ === v.secondary))
							)
								return v;
						return $;
					}
					openRevivedWebview($) {
						const v = this.h.createWebviewOverlay($.webviewInitInfo);
						v.state = $.state;
						const S = this.g.createInstance(
							b,
							{
								viewType: $.viewType,
								providedId: $.webviewInitInfo.providedViewType,
								name: $.title,
							},
							v,
						);
						return (
							(S.iconPath = $.iconPath),
							typeof $.group == "number" && S.updateGroup($.group),
							S
						);
					}
					registerResolver($) {
						this.a.add($);
						const v = new i.$Ce();
						return (
							this.b.reviveFor($, v.token),
							(0, m.$Yc)(() => {
								this.a.delete($), v.dispose(!0);
							})
						);
					}
					shouldPersist($) {
						return $ instanceof b
							? !0
							: d.Iterable.some(this.a.values(), (v) => f(v, $));
					}
					async s($, v) {
						for (const S of this.a.values())
							if (f(S, $)) return await S.resolveWebview($, v), !0;
						return !1;
					}
					async resolveWebview($, v) {
						if (!(await this.s($, v)) && !v.isCancellationRequested)
							return this.b.enqueueForRestoration($, v);
					}
					setIcons($, v) {
						this.c.setIcons($, v);
					}
				};
				(e.$snc = l),
					(e.$snc = l =
						Ne([j(0, g.$EY), j(1, p.$IY), j(2, u.$Li), j(3, h.$3Ib)], l));
			},
		)
