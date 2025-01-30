import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/platform.js';
import '../../../../base/common/uuid.js';
import '../../../../nls.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../browser/parts/editor/editorPane.js';
import '../../webview/browser/webviewWindowDragMonitor.js';
import './webviewEditorInput.js';
import '../../../services/editor/common/editorGroupsService.js';
import '../../../services/editor/common/editorService.js';
import '../../../services/host/browser/host.js';
import '../../../services/layout/browser/layoutService.js';
define(
			de[1025],
			he([
				1, 0, 7, 6, 3, 12, 47, 4, 8, 21, 32, 35, 217, 1274, 566, 66, 18, 87, 96,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*event*/,
 w /*lifecycle*/,
 E /*platform*/,
 C /*uuid*/,
 d /*nls*/,
 m /*contextkey*/,
 r /*storage*/,
 u /*telemetry*/,
 a /*themeService*/,
 h /*editorPane*/,
 c /*webviewWindowDragMonitor*/,
 n /*webviewEditorInput*/,
 g /*editorGroupsService*/,
 p /*editorService*/,
 o /*host*/,
 f /*layoutService*/) {
				"use strict";
				var b;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$pnc = e.$onc = void 0),
					(t = mt(t)),
					(d = mt(d)),
					(e.$onc = new m.$5j("activeWebviewPanelId", "", {
						type: "string",
						description: d.localize(11378, null),
					}));
				let s = class extends h.$JEb {
					static {
						b = this;
					}
					static {
						this.ID = "WebviewEditor";
					}
					get onDidFocus() {
						return this.m.event;
					}
					constructor(y, $, v, S, I, T, P, k, L) {
						super(b.ID, y, $, v, S),
							(this.s = I),
							(this.u = T),
							(this.$ = P),
							(this.cb = k),
							(this.db = L),
							(this.c = !1),
							(this.f = !1),
							(this.g = this.D(new w.$Zc())),
							(this.j = this.D(new w.$2c())),
							(this.m = this.D(new i.$re())),
							(this.r = this.D(new w.$2c()));
						const D = I.getPart(y);
						this.D(
							i.Event.any(
								D.onDidScroll,
								D.onDidAddGroup,
								D.onDidRemoveGroup,
								D.onDidMoveGroup,
							)(() => {
								this.eb && this.c && this.ib(this.eb);
							}),
						);
					}
					get eb() {
						return this.input instanceof n.$W4b ? this.input.webview : void 0;
					}
					get scopedContextKeyService() {
						return this.r.value;
					}
					Y(y) {
						const $ = document.createElement("div");
						(this.a = $),
							(this.a.id = `webview-editor-element-${(0, C.$9g)()}`),
							y.appendChild($),
							(this.r.value = this.D(this.db.createScoped($)));
					}
					dispose() {
						(this.f = !0), this.a?.remove(), (this.a = void 0), super.dispose();
					}
					layout(y) {
						(this.b = y), this.eb && this.c && this.ib(this.eb, y);
					}
					focus() {
						super.focus(),
							!this.j.value &&
								!E.$r &&
								(this.j.value = this.cb.onDidChangeFocus((y) => {
									y &&
										this.u.activeEditorPane === this &&
										this.$.hasFocus(f.Parts.EDITOR_PART) &&
										this.focus();
								})),
							this.eb?.focus();
					}
					Z(y) {
						(this.c = y),
							this.input instanceof n.$W4b &&
								this.eb &&
								(y ? this.hb(this.input) : this.eb.release(this)),
							super.Z(y);
					}
					clearInput() {
						this.eb && (this.eb.release(this), this.g.clear()),
							super.clearInput();
					}
					async setInput(y, $, v, S) {
						if (this.input && y.matches(this.input)) return;
						const I = y instanceof n.$W4b && y.webview === this.eb;
						this.eb && !I && this.eb.release(this),
							await super.setInput(y, $, v, S),
							await y.resolve(),
							!(S.isCancellationRequested || this.f) &&
								y instanceof n.$W4b &&
								(y.updateGroup(this.group.id),
								I || this.hb(y),
								this.b && this.layout(this.b));
					}
					hb(y) {
						y.claim(this, this.window, this.scopedContextKeyService),
							this.a &&
								(this.a.setAttribute("aria-flowto", y.webview.container.id),
								t.$Cgb(y.webview.container, this.a)),
							this.g.clear(),
							this.g.add(
								this.s.createEditorDropTarget(y.webview.container, {
									containsGroup: ($) => this.group.id === $.id,
								}),
							),
							this.g.add(new c.$R2b(this.window, () => this.eb)),
							this.ib(y.webview),
							this.g.add(this.jb(y.webview));
					}
					ib(y, $) {
						if (!this.a?.isConnected) return;
						const v = this.$.getContainer(this.window, f.Parts.EDITOR_PART);
						y.layoutWebviewOverElement(this.a.parentElement, $, v);
					}
					jb(y) {
						const $ = new w.$Zc(),
							v = t.$dhb(y.container);
						return (
							$.add(v),
							$.add(v.onDidFocus(() => this.m.fire())),
							$.add(y.onDidFocus(() => this.m.fire())),
							$
						);
					}
				};
				(e.$pnc = s),
					(e.$pnc =
						s =
						b =
							Ne(
								[
									j(1, u.$km),
									j(2, a.$iP),
									j(3, r.$lq),
									j(4, g.$EY),
									j(5, p.$IY),
									j(6, f.$mEb),
									j(7, o.$asb),
									j(8, m.$6j),
								],
								s,
							));
			},
		),
		