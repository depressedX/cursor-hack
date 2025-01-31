import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../services/remote/common/remoteAgentService.js';
import '../../../services/environment/common/environmentService.js';
import '../../../../nls.js';
import '../../../../base/common/platform.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/remote/common/remoteHosts.js';
import '../../../services/banner/browser/bannerService.js';
import '../../../../platform/opener/common/opener.js';
import '../../../services/host/browser/host.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/product/common/productService.js';
import '../../../../platform/dialogs/common/dialogs.js';
import '../../../../base/common/codicons.js';
import '../../../../base/common/severity.js';
define(
		de[3561],
		he([1, 0, 143, 78, 4, 12, 32, 438, 823, 41, 87, 21, 62, 57, 14, 111]),
		function (ce /*require*/,
 e /*exports*/,
 t /*remoteAgentService*/,
 i /*environmentService*/,
 w /*nls*/,
 E /*platform*/,
 C /*telemetry*/,
 d /*remoteHosts*/,
 m /*bannerService*/,
 r /*opener*/,
 u /*host*/,
 a /*storage*/,
 h /*productService*/,
 c /*dialogs*/,
 n /*codicons*/,
 g /*severity*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$HXc = void 0),
				(g = xi(g));
			const p = "remote.unsupportedConnectionChoice",
				o = "workbench.banner.remote.unsupportedConnection.dismissed";
			let f = class {
				constructor(s, l, y, $, v, S, I, T, P) {
					(this.a = s),
						(this.b = l),
						(this.c = y),
						(this.d = $),
						(this.e = v),
						(this.f = S),
						(this.g = I),
						(this.h = T),
						(this.i = P),
						this.b.remoteAuthority && this.k();
				}
				async j() {
					let s;
					(function (v) {
						(v[(v.Allow = 1)] = "Allow"),
							(v[(v.LearnMore = 2)] = "LearnMore"),
							(v[(v.Cancel = 0)] = "Cancel");
					})(s || (s = {}));
					const { result: l, checkboxChecked: y } = await this.e.prompt({
						type: g.default.Warning,
						message: (0, w.localize)(8743, null, this.i.nameLong),
						buttons: [
							{ label: (0, w.localize)(8744, null), run: () => s.Allow },
							{
								label: (0, w.localize)(8745, null),
								run: async () => (
									await this.f.open(
										"https://aka.ms/vscode-remote/faq/old-linux",
									),
									s.LearnMore
								),
							},
						],
						cancelButton: { run: () => s.Cancel },
						checkbox: { label: (0, w.localize)(8746, null) },
					});
					if (l === s.LearnMore) return await this.j();
					const $ = l === s.Allow;
					return (
						$ &&
							y &&
							this.h.store(
								`${p}.${this.b.remoteAuthority}`,
								$,
								a.StorageScope.PROFILE,
								a.StorageTarget.MACHINE,
							),
						$
					);
				}
				async k() {
					try {
						const s = await this.a.getRawEnvironment();
						if (s && s.isUnsupportedGlibc) {
							let l = this.h.getBoolean(
								`${p}.${this.b.remoteAuthority}`,
								a.StorageScope.PROFILE,
							);
							if ((l === void 0 && (l = await this.j()), l)) {
								const y = this.h.get(`${o}`, a.StorageScope.PROFILE) ?? "";
								if (
									y.slice(0, y.lastIndexOf(".")) !==
									this.i.version.slice(0, this.i.version.lastIndexOf("."))
								) {
									const v = [
										{
											label: (0, w.localize)(8747, null),
											href: "https://aka.ms/vscode-remote/faq/old-linux",
										},
									];
									this.d.show({
										id: "unsupportedGlibcWarning.banner",
										message: (0, w.localize)(8748, null, this.i.nameLong),
										actions: v,
										icon: n.$ak.warning,
										closeLabel: `Do not show again in v${this.i.version}`,
										onClose: () => {
											this.h.store(
												`${o}`,
												this.i.version,
												a.StorageScope.PROFILE,
												a.StorageTarget.MACHINE,
											);
										},
									});
								}
							} else {
								this.g.openWindow({
									forceReuseWindow: !0,
									remoteAuthority: null,
								});
								return;
							}
						}
						this.c.publicLog2("remoteConnectionSuccess", {
							web: E.$r,
							connectionTimeMs: await this.a
								.getConnection()
								?.getInitialConnectionTimeMs(),
							remoteName: (0, d.$xn)(this.b.remoteAuthority),
						}),
							await this.l();
					} catch (s) {
						this.c.publicLog2("remoteConnectionFailure", {
							web: E.$r,
							connectionTimeMs: await this.a
								.getConnection()
								?.getInitialConnectionTimeMs(),
							remoteName: (0, d.$xn)(this.b.remoteAuthority),
							message: s ? s.message : "",
						});
					}
				}
				async l() {
					const s = await t.$_m.measure(this.a);
					s !== void 0 &&
						this.c.publicLog2("remoteConnectionLatency", {
							web: E.$r,
							remoteName: (0, d.$xn)(this.b.remoteAuthority),
							latencyMs: s.current,
						});
				}
			};
			(e.$HXc = f),
				(e.$HXc = f =
					Ne(
						[
							j(0, t.$$m),
							j(1, i.$r8),
							j(2, C.$km),
							j(3, m.$$uc),
							j(4, c.$GO),
							j(5, r.$7rb),
							j(6, u.$asb),
							j(7, a.$lq),
							j(8, h.$Bk),
						],
						f,
					));
		},
	)
