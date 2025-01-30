import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/uri.js';
import './extHost.protocol.js';
import './extHostTypes.js';
import '../../../platform/instantiation/common/instantiation.js';
import './extHostRpcService.js';
import '../../../platform/log/common/log.js';
import '../../../base/common/arrays.js';
import '../../../base/common/strings.js';
import '../../../base/common/path.js';
import '../../services/extensions/common/extensions.js';
define(
			Pe[300],
			Ne([1, 0, 2, 6, 11, 5, 21, 14, 20, 15, 18, 29]),
			function (we, t, e, r, S, N, P, I, l, n, p, y) {
				"use strict";
				var d;
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.$jid = t.$iid = void 0);
				let k = class {
					static {
						d = this;
					}
					static {
						this.c = 0;
					}
					static {
						this.d = 250;
					}
					constructor(c, h) {
						(this.h = h),
							(this.f = new Map()),
							(this.g = c.getProxy(r.$lbb.MainThreadDecorations));
					}
					registerFileDecorationProvider(c, h) {
						const $ = d.c++;
						this.f.set($, { provider: c, extensionDescription: h }),
							this.g.$registerDecorationProvider($, h.identifier.value);
						const T =
							c.onDidChangeFileDecorations &&
							c.onDidChangeFileDecorations((a) => {
								if (!a) {
									this.g.$onDidChange($, null);
									return;
								}
								const u = (0, l.$6b)(a);
								if (u.length <= d.d) {
									this.g.$onDidChange($, u);
									return;
								}
								this.h.warn(
									"[Decorations] CAPPING events from decorations provider",
									h.identifier.value,
									u.length,
								);
								const s = u.map((w) => ({
										uri: w,
										rank: (0, n.$pf)(w.path, "/"),
									})),
									f = (0, l.$Db)(
										s,
										(w, m) =>
											w.rank - m.rank || (0, n.$Ff)(w.uri.path, m.uri.path),
									),
									o = [];
								e: for (const w of f) {
									let m;
									for (const E of w) {
										const R = (0, p.$rc)(E.uri.path);
										if (m !== R && ((m = R), o.push(E.uri) >= d.d)) break e;
									}
								}
								this.g.$onDidChange($, o);
							});
						return new S.$nbb(() => {
							T?.dispose(),
								this.g.$unregisterDecorationProvider($),
								this.f.delete($);
						});
					}
					async $provideDecorations(c, h, $) {
						if (!this.f.has(c)) return Object.create(null);
						const T = Object.create(null),
							{ provider: a, extensionDescription: u } = this.f.get(c);
						return (
							await Promise.all(
								h.map(async (s) => {
									try {
										const { uri: f, id: o } = s,
											w = await Promise.resolve(
												a.provideFileDecoration(e.URI.revive(f), $),
											);
										if (!w) return;
										try {
											S.$Pcb.validate(w),
												w.badge &&
													typeof w.badge != "string" &&
													(0, y.$u2)(u, "codiconDecoration"),
												(T[o] = [w.propagate, w.tooltip, w.badge, w.color]);
										} catch (m) {
											this.h.warn(
												`INVALID decoration from extension '${u.identifier.value}': ${m}`,
											);
										}
									} catch (f) {
										this.h.error(f);
									}
								}),
							),
							T
						);
					}
				};
				(t.$iid = k),
					(t.$iid = k = d = wt([rt(0, P.$08), rt(1, I.$ik)], k)),
					(t.$jid = (0, N.$Mi)("IExtHostDecorations"));
			},
		),
		