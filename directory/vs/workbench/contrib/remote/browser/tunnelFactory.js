import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../platform/tunnel/common/tunnel.js';
import '../../../../base/common/lifecycle.js';
import '../../../services/environment/browser/environmentService.js';
import '../../../../platform/opener/common/opener.js';
import '../../../../base/common/uri.js';
import '../../../services/remote/common/remoteExplorerService.js';
import '../../../../platform/log/common/log.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../services/remote/common/tunnelModel.js';
define(
			de[3591],
			he([1, 0, 4, 374, 3, 286, 41, 9, 519, 34, 8, 839]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*tunnel*/,
 w /*lifecycle*/,
 E /*environmentService*/,
 C /*opener*/,
 d /*uri*/,
 m /*remoteExplorerService*/,
 r /*log*/,
 u /*contextkey*/,
 a /*tunnelModel*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$pXc = void 0),
					(t = mt(t));
				let h = class extends w.$1c {
					static {
						this.ID = "workbench.contrib.tunnelFactory";
					}
					constructor(n, g, p, o, f, b) {
						super(), (this.a = p);
						const s = g.options?.tunnelProvider?.tunnelFactory;
						if (s) {
							b.createKey(a.$t8.key, !0);
							let l = g.options?.tunnelProvider?.features?.privacyOptions ?? [];
							g.options?.tunnelProvider?.features?.public &&
								l.length === 0 &&
								(l = [
									{
										id: "private",
										label: t.localize(8808, null),
										themeIcon: "lock",
									},
									{
										id: "public",
										label: t.localize(8809, null),
										themeIcon: "eye",
									},
								]),
								this.D(
									n.setTunnelProvider({
										forwardPort: async ($, v) => {
											let S;
											try {
												S = s($, v);
											} catch {
												f.trace("tunnelFactory: tunnel provider error");
											}
											if (!S) return;
											let I;
											try {
												I = await S;
											} catch (k) {
												return (
													f.trace(
														"tunnelFactory: tunnel provider promise error",
													),
													k instanceof Error ? k.message : void 0
												);
											}
											const T = I.localAddress.startsWith("http")
												? I.localAddress
												: `http://${I.localAddress}`;
											return {
												tunnelRemotePort: I.remoteAddress.port,
												tunnelRemoteHost: I.remoteAddress.host,
												localAddress: await this.b(T),
												privacy:
													I.privacy ??
													(I.public
														? i.TunnelPrivacyId.Public
														: i.TunnelPrivacyId.Private),
												protocol: I.protocol ?? i.TunnelProtocol.Http,
												dispose: async () => {
													await I.dispose();
												},
											};
										},
									}),
								);
							const y = g.options?.tunnelProvider?.features
								? {
										features: {
											elevation:
												!!g.options?.tunnelProvider?.features?.elevation,
											public: !!g.options?.tunnelProvider?.features?.public,
											privacyOptions: l,
											protocol:
												g.options?.tunnelProvider?.features?.protocol === void 0
													? !0
													: !!g.options?.tunnelProvider?.features?.protocol,
										},
									}
								: void 0;
							o.setTunnelInformation(y);
						}
					}
					async b(n) {
						try {
							return (
								await this.a.resolveExternalUri(d.URI.parse(n))
							).resolved.toString();
						} catch {
							return n;
						}
					}
				};
				(e.$pXc = h),
					(e.$pXc = h =
						Ne(
							[
								j(0, i.$cO),
								j(1, E.$5rb),
								j(2, C.$7rb),
								j(3, m.$5pc),
								j(4, r.$ik),
								j(5, u.$6j),
							],
							h,
						));
			},
		)
