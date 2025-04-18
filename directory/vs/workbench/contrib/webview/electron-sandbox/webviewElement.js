import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/async.js';
import '../../../../base/common/network.js';
import '../../../../base/common/stream.js';
import '../../../../base/parts/ipc/common/ipc.js';
import '../../../../platform/accessibility/common/accessibility.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/contextview/browser/contextView.js';
import '../../../../platform/files/common/files.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/ipc/common/mainProcessService.js';
import '../../../../platform/log/common/log.js';
import '../../../../platform/native/common/native.js';
import '../../../../platform/notification/common/notification.js';
import '../../../../platform/remote/common/remoteAuthorityResolver.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/tunnel/common/tunnel.js';
import '../browser/webviewElement.js';
import './windowIgnoreMenuShortcutsManager.js';
import '../../../services/environment/common/environmentService.js';
define(
			de[3281],
			he([
				1, 0, 15, 23, 408, 305, 91, 10, 49, 22, 5, 371, 34, 110, 40, 211, 32,
				374, 1805, 1785, 78,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*async*/,
				i /*network*/,
				w /*stream*/,
				E /*ipc*/,
				C /*accessibility*/,
				d /*configuration*/,
				m /*contextView*/,
				r /*files*/,
				u /*instantiation*/,
				a /*mainProcessService*/,
				h /*log*/,
				c /*native*/,
				n /*notification*/,
				g /*remoteAuthorityResolver*/,
				p /*telemetry*/,
				o /*tunnel*/,
				f /*webviewElement*/,
				b /*windowIgnoreMenuShortcutsManager*/,
				s /*environmentService*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Igd = void 0);
				let l = class extends f.$f6c {
					get h() {
						return "electron";
					}
					constructor($, v, S, I, T, P, k, L, D, M, N, A, R, O, B) {
						super($, v, M, S, A, k, T, D, L, P, I, O, B),
							(this.Lb = R),
							(this.Gb = !1),
							(this.Jb = this.D(new t.$Jh(200))),
							(this.Fb = new b.$Fgd(M, N, R)),
							(this.Ib = E.ProxyChannel.toService(N.getChannel("webview"))),
							$.options.enableFindWidget &&
								(this.D(
									this.G((U) => {
										this.Gb &&
											this.Hb !== U &&
											(this.stopFind(!1), (this.Hb = U));
									}),
								),
								this.D(
									this.Ib.onFoundInFrame((U) => {
										this.Db.fire(U.matches > 0);
									}),
								));
					}
					dispose() {
						this.Fb.didBlur(), super.dispose();
					}
					nb($) {
						return `${i.Schemas.vscodeWebview}://${$}`;
					}
					Ab($) {
						return (0, w.$Ke)($, (v) => {
							const S = v.reduce((k, L) => k + L.byteLength, 0),
								I = new ArrayBuffer(S),
								T = new Uint8Array(I);
							let P = 0;
							for (const k of v) T.set(k.buffer, P), (P += k.byteLength);
							return I;
						});
					}
					find($, v) {
						if (this.n)
							if (!this.Gb) this.updateFind($);
							else {
								const S = { forward: !v, findNext: !1, matchCase: !1 };
								this.Ib.findInFrame(
									{ windowId: this.Lb.windowId },
									this.a,
									$,
									S,
								);
							}
					}
					updateFind($) {
						if (!$ || !this.n) return;
						const v = { forward: !0, findNext: !0, matchCase: !1 };
						this.Jb.trigger(() => {
							(this.Gb = !0),
								this.Ib.findInFrame(
									{ windowId: this.Lb.windowId },
									this.a,
									$,
									v,
								);
						});
					}
					stopFind($) {
						this.n &&
							(this.Jb.cancel(),
							(this.Gb = !1),
							this.Ib.stopFindInFrame({ windowId: this.Lb.windowId }, this.a, {
								keepSelection: $,
							}),
							this.Eb.fire());
					}
					vb($) {
						super.vb($), $ ? this.Fb.didFocus() : this.Fb.didBlur();
					}
				};
				(e.$Igd = l),
					(e.$Igd = l =
						Ne(
							[
								j(2, m.$Xxb),
								j(3, o.$cO),
								j(4, r.$ll),
								j(5, p.$km),
								j(6, s.$r8),
								j(7, g.$3l),
								j(8, h.$ik),
								j(9, d.$gj),
								j(10, a.$V8c),
								j(11, n.$4N),
								j(12, c.$y7c),
								j(13, u.$Li),
								j(14, C.$XK),
							],
							l,
						));
			},
		)
