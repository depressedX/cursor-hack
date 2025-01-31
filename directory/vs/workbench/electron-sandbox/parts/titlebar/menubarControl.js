import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/actions.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/workspaces/common/workspaces.js';
import '../../../../base/common/platform.js';
import '../../../../platform/notification/common/notification.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../services/environment/electron-sandbox/environmentService.js';
import '../../../../platform/accessibility/common/accessibility.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/label/common/label.js';
import '../../../../platform/update/common/update.js';
import '../../../browser/parts/titlebar/menubarControl.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/menubar/electron-sandbox/menubar.js';
import '../../../../platform/native/common/native.js';
import '../../../services/host/browser/host.js';
import '../../../services/preferences/common/preferences.js';
import '../../../../platform/commands/common/commands.js';
import '../../../browser/actions/windowActions.js';
import '../../../../platform/action/common/action.js';
import '../../../../platform/actions/browser/menuEntryActionViewItem.js';
import '../../../../platform/hover/browser/hover.js';
define(
			de[3538],
			he([
				1, 0, 50, 11, 8, 256, 12, 40, 39, 151, 91, 10, 73, 415, 1311, 21, 1623,
				110, 87, 131, 31, 571, 599, 92, 72,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*actions*/,
				i /*actions*/,
				w /*contextkey*/,
				E /*workspaces*/,
				C /*platform*/,
				d /*notification*/,
				m /*keybinding*/,
				r /*environmentService*/,
				u /*accessibility*/,
				a /*configuration*/,
				h /*label*/,
				c /*update*/,
				n /*menubarControl*/,
				g /*storage*/,
				p /*menubar*/,
				o /*native*/,
				f /*host*/,
				b /*preferences*/,
				s /*commands*/,
				l /*windowActions*/,
				y /*action*/,
				$ /*menuEntryActionViewItem*/,
				v /*hover*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$tdd = void 0);
				let S = class extends n.$2qc {
					constructor(T, P, k, L, D, M, N, A, R, O, B, U, z, F, x, H, q) {
						super(T, P, k, L, D, M, N, A, R, O, B, U, F, H, q),
							(this.ab = z),
							(this.bb = x),
							(async () => (
								(this.h = await this.q.getRecentlyOpened()), this.L()
							))(),
							this.M();
					}
					N() {
						super.N();
						for (const T of Object.keys(this.f)) {
							const P = this.c[T];
							P && this.g.add(P.onDidChange(() => this.O()));
						}
					}
					L() {
						if (!this.H.hasFocus) return;
						const T = { menus: {}, keybindings: {} };
						this.eb(T) && this.ab.updateMenubar(this.bb.windowId, T);
					}
					eb(T) {
						if (!T) return !1;
						T.keybindings = this.hb();
						for (const P of Object.keys(this.f)) {
							const k = this.c[P];
							if (k) {
								const L = { items: [] },
									D = [];
								if (
									((0, $.$Jyb)(k, { shouldForwardArgs: !0 }, D),
									this.fb(D, L, T.keybindings),
									L.items.length === 0)
								)
									return !1;
								T.menus[P] = L;
							}
						}
						return !0;
					}
					fb(T, P, k) {
						for (const L of T)
							if (L instanceof t.$tj)
								P.items.push({ id: "vscode.menubar.separator" });
							else if (L instanceof i.$2X || L instanceof i.$1X) {
								const D =
									typeof L.item.title == "string"
										? L.item.title
										: (L.item.title.mnemonicTitle ?? L.item.title.value);
								if (L instanceof i.$1X) {
									const M = { items: [] };
									if ((this.fb(L.actions, M, k), M.items.length > 0)) {
										const N = { id: L.id, label: D, submenu: M };
										P.items.push(N);
									}
								} else {
									if (L.id === l.$Yqc.ID) {
										const N = this.S().map(this.gb);
										P.items.push(...N);
									}
									const M = { id: L.id, label: D };
									(0, y.$hk)(L.item.toggled) &&
										(M.label =
											L.item.toggled.mnemonicTitle ??
											L.item.toggled.title ??
											D),
										L.checked && (M.checked = !0),
										L.enabled || (M.enabled = !1),
										(k[L.id] = this.ib(L.id)),
										P.items.push(M);
								}
							}
					}
					gb(T) {
						return T instanceof t.$tj
							? { id: "vscode.menubar.separator" }
							: {
									id: T.id,
									uri: T.uri,
									remoteAuthority: T.remoteAuthority,
									enabled: T.enabled,
									label: T.label,
								};
					}
					hb() {
						const T = {};
						if (C.$m) {
							const P = this.ib("workbench.action.quit");
							P && (T["workbench.action.quit"] = P);
						}
						return T;
					}
					ib(T) {
						const P = this.s.lookupKeybinding(T);
						if (!P) return;
						const k = P.getElectronAccelerator();
						if (k)
							return {
								label: k,
								userSettingsLabel: P.getUserSettingsLabel() ?? void 0,
							};
						const L = P.getLabel();
						if (L)
							return {
								label: L,
								isNative: !1,
								userSettingsLabel: P.getUserSettingsLabel() ?? void 0,
							};
					}
				};
				(e.$tdd = S),
					(e.$tdd = S =
						Ne(
							[
								j(0, i.$YX),
								j(1, E.$cRb),
								j(2, w.$6j),
								j(3, m.$uZ),
								j(4, a.$gj),
								j(5, h.$3N),
								j(6, c.$_rb),
								j(7, g.$lq),
								j(8, d.$4N),
								j(9, b.$7Z),
								j(10, r.$ucd),
								j(11, u.$XK),
								j(12, p.$8bd),
								j(13, f.$asb),
								j(14, o.$y7c),
								j(15, s.$ek),
								j(16, v.$Uyb),
							],
							S,
						));
			},
		)
