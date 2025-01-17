import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/uri.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/files/common/files.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../../base/common/map.js';
import '../../../../platform/notification/common/notification.js';
import '../../../../platform/opener/common/opener.js';
import '../../../../base/common/path.js';
import '../../../../platform/uriIdentity/common/uriIdentity.js';
import '../../../services/host/browser/host.js';
import '../../../../platform/telemetry/common/telemetry.js';
define(
			de[3388],
			he([1, 0, 4, 3, 9, 10, 22, 25, 59, 40, 41, 54, 68, 87, 32]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$5Mc = void 0);
				let g = class extends i.$1c {
					static {
						this.ID = "workbench.contrib.workspaceWatcher";
					}
					constructor(o, f, b, s, l, y, $, v) {
						super(),
							(this.b = o),
							(this.c = f),
							(this.f = b),
							(this.g = s),
							(this.h = l),
							(this.j = y),
							(this.m = $),
							(this.n = v),
							(this.a = new m.$Gc((S) => this.j.extUri.getComparisonKey(S))),
							this.q(),
							this.z();
					}
					q() {
						this.D(this.f.onDidChangeWorkspaceFolders((o) => this.r(o))),
							this.D(this.f.onDidChangeWorkbenchState(() => this.s())),
							this.D(this.c.onDidChangeConfiguration((o) => this.t(o))),
							this.D(this.b.onDidWatchError((o) => this.u(o)));
					}
					r(o) {
						for (const f of o.removed) this.y(f);
						for (const f of o.added) this.w(f);
					}
					s() {
						this.z();
					}
					t(o) {
						(o.affectsConfiguration("files.watcherExclude") ||
							o.affectsConfiguration("files.watcherInclude")) &&
							this.z();
					}
					u(o) {
						const f = o.toString();
						let b;
						f.indexOf("ENOSPC") >= 0
							? ((b = "ENOSPC"),
								this.g.prompt(
									r.Severity.Warning,
									(0, t.localize)(7015, null),
									[
										{
											label: (0, t.localize)(7016, null),
											run: () =>
												this.h.open(
													w.URI.parse(
														"https://go.microsoft.com/fwlink/?linkid=867693",
													),
												),
										},
									],
									{
										sticky: !0,
										neverShowAgain: {
											id: "ignoreEnospcError",
											isSecondary: !0,
											scope: r.NeverShowAgainScope.WORKSPACE,
										},
									},
								))
							: f.indexOf("EUNKNOWN") >= 0
								? ((b = "EUNKNOWN"),
									this.g.prompt(
										r.Severity.Warning,
										(0, t.localize)(7017, null),
										[
											{
												label: (0, t.localize)(7018, null),
												run: () => this.m.reload(),
											},
										],
										{ sticky: !0, priority: r.NotificationPriority.SILENT },
									))
								: f.indexOf("ETERM") >= 0 && (b = "ETERM"),
							b && this.n.publicLog2("fileWatcherError", { reason: b });
					}
					w(o) {
						const f = [],
							b = this.c.getValue({ resource: o.uri });
						if (b.files?.watcherExclude)
							for (const y in b.files.watcherExclude)
								y && b.files.watcherExclude[y] === !0 && f.push(y);
						const s = new m.$Gc((y) => this.j.extUri.getComparisonKey(y));
						if ((s.set(o.uri, o.uri), b.files?.watcherInclude)) {
							for (const y of b.files.watcherInclude)
								if (y)
									if ((0, a.$nc)(y)) {
										const $ = w.URI.file(y).with({ scheme: o.uri.scheme });
										this.j.extUri.isEqualOrParent($, o.uri) && s.set($, $);
									} else {
										const $ = o.toResource(y);
										s.set($, $);
									}
						}
						const l = new i.$Zc();
						for (const [, y] of s)
							l.add(this.b.watch(y, { recursive: !0, excludes: f }));
						this.a.set(o.uri, l);
					}
					y(o) {
						this.a.has(o.uri) &&
							((0, i.$Vc)(this.a.get(o.uri)), this.a.delete(o.uri));
					}
					z() {
						this.C();
						for (const o of this.f.getWorkspace().folders) this.w(o);
					}
					C() {
						for (const [, o] of this.a) o.dispose();
						this.a.clear();
					}
					dispose() {
						super.dispose(), this.C();
					}
				};
				(e.$5Mc = g),
					(e.$5Mc = g =
						Ne(
							[
								j(0, C.$ll),
								j(1, E.$gj),
								j(2, d.$Vi),
								j(3, r.$4N),
								j(4, u.$7rb),
								j(5, h.$Vl),
								j(6, c.$asb),
								j(7, n.$km),
							],
							g,
						));
			},
		),
		