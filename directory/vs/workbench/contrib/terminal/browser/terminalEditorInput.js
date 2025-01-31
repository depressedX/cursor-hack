import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/common/severity.js';
import '../../../../base/common/lifecycle.js';
import '../../../common/editor.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../../base/common/themables.js';
import '../../../common/editor/editorInput.js';
import './terminal.js';
import './terminalIcon.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/terminal/common/terminal.js';
import '../../../services/lifecycle/common/lifecycle.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/configuration/common/configuration.js';
import '../common/terminalContextKey.js';
import '../../../../platform/dialogs/common/dialogs.js';
import '../../../../base/common/event.js';
define(
		de[833],
		he([
			1, 0, 4, 111, 3, 44, 35, 26, 223, 107, 514, 5, 117, 52, 8, 10, 237, 57, 6,
		]),
		function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*severity*/,
 w /*lifecycle*/,
 E /*editor*/,
 C /*themeService*/,
 d /*themables*/,
 m /*editorInput*/,
 r /*terminal*/,
 u /*terminalIcon*/,
 a /*instantiation*/,
 h /*terminal*/,
 c /*lifecycle*/,
 n /*contextkey*/,
 g /*configuration*/,
 p /*terminalContextKey*/,
 o /*dialogs*/,
 f /*event*/) {
			"use strict";
			var b;
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Unc = void 0),
				(i = xi(i));
			let s = class extends m.$LO {
				static {
					b = this;
				}
				static {
					this.ID = "workbench.editors.terminal";
				}
				setGroup(y) {
					(this.q = y),
						y?.scopedContextKeyService &&
							this.s?.setParentContextKeyService(y.scopedContextKeyService);
				}
				get group() {
					return this.q;
				}
				get typeId() {
					return b.ID;
				}
				get editorId() {
					return r.$pIb;
				}
				get capabilities() {
					return (
						E.EditorInputCapabilities.Readonly |
						E.EditorInputCapabilities.Singleton |
						E.EditorInputCapabilities.CanDropIntoEditor |
						E.EditorInputCapabilities.ForceDescription
					);
				}
				setTerminalInstance(y) {
					if (this.s)
						throw new Error("cannot set instance that has already been set");
					(this.s = y), this.G();
				}
				copy() {
					const y = this.u.createInstance(
						this.m || {},
						h.TerminalLocation.Editor,
					);
					return (
						y.focusWhenReady(),
						(this.m = void 0),
						this.w.createInstance(b, y.resource, y)
					);
				}
				setCopyLaunchConfig(y) {
					this.m = y;
				}
				get terminalInstance() {
					return this.a ? void 0 : this.s;
				}
				showConfirm() {
					if (this.h) return !1;
					const y = this.y.getValue(h.TerminalSettingId.ConfirmOnKill);
					return (
						((y === "editor" || y === "always") && this.s?.hasChildProcesses) ||
						!1
					);
				}
				async confirm(y) {
					const { confirmed: $ } = await this.F.confirm({
						type: i.default.Warning,
						message: (0, t.localize)(10052, null),
						primaryButton: (0, t.localize)(10053, null),
						detail:
							y.length > 1
								? y
										.map((v) => v.editor.getName())
										.join(`
`) +
									`

` +
									(0, t.localize)(10054, null)
								: (0, t.localize)(10055, null),
					});
					return $ ? o.ConfirmResult.DONT_SAVE : o.ConfirmResult.CANCEL;
				}
				async revert() {
					this.h = !0;
				}
				constructor(y, $, v, S, I, T, P, k, L) {
					super(),
						(this.resource = y),
						(this.s = $),
						(this.t = v),
						(this.u = S),
						(this.w = I),
						(this.y = T),
						(this.z = P),
						(this.C = k),
						(this.F = L),
						(this.closeHandler = this),
						(this.a = !1),
						(this.c = !1),
						(this.h = !1),
						(this.r = this.D(new f.$re())),
						(this.onDidRequestAttach = this.r.event),
						(this.n = p.TerminalContextKeys.editorFocus.bindTo(k)),
						$ && this.G();
				}
				G() {
					const y = this.s;
					if (!y) return;
					const $ = y.onDidFocus(() => this.n.set(!0)),
						v = y.onDidBlur(() => this.n.reset());
					this.D(
						(0, w.$Yc)(() => {
							!this.a && !this.c && y.dispose(h.TerminalExitReason.User),
								(0, w.$Vc)([$, v]);
						}),
					);
					const S = [
						y.onExit((I) => {
							y.waitOnExit || this.dispose();
						}),
						y.onDisposed(() => this.dispose()),
						y.onTitleChanged(() => this.f.fire()),
						y.onIconChanged(() => this.f.fire()),
						$,
						v,
						y.statusList.onDidChangePrimaryStatus(() => this.f.fire()),
					];
					this.z.onWillShutdown((I) => {
						(this.c = !0),
							(0, w.$Vc)(S),
							this.y.getValue(h.TerminalSettingId.EnablePersistentSessions) &&
							I.reason === c.ShutdownReason.RELOAD
								? y.detachProcessAndDispose(h.TerminalExitReason.Shutdown)
								: y.dispose(h.TerminalExitReason.Shutdown);
					});
				}
				getName() {
					return this.s?.title || this.resource.fragment;
				}
				getIcon() {
					if (!(!this.s || !d.ThemeIcon.isThemeIcon(this.s.icon)))
						return this.s.icon;
				}
				getLabelExtraClasses() {
					if (!this.s) return [];
					const y = ["terminal-tab", "predefined-file-icon"],
						$ = (0, u.$Onc)(this.s);
					$ && y.push($);
					const v = (0, u.$Snc)(this.s, this.t.getColorTheme().type);
					return v && y.push(...v), y;
				}
				detachInstance() {
					this.c ||
						(this.s?.detachFromElement(),
						this.s?.setParentContextKeyService(this.C),
						(this.a = !0));
				}
				getDescription() {
					return this.s?.description;
				}
				toUntyped() {
					return {
						resource: this.resource,
						options: { override: r.$pIb, pinned: !0, forceReload: !0 },
					};
				}
			};
			(e.$Unc = s),
				(e.$Unc =
					s =
					b =
						Ne(
							[
								j(2, C.$iP),
								j(3, r.$mIb),
								j(4, a.$Li),
								j(5, g.$gj),
								j(6, c.$n6),
								j(7, n.$6j),
								j(8, o.$GO),
							],
							s,
						));
		},
	)
