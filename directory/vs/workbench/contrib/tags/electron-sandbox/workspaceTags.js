import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/hash.js';
import '../../../../base/common/errors.js';
import '../../../../platform/files/common/files.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../services/textfile/common/textfiles.js';
import '../common/workspaceTags.js';
import '../../../../platform/diagnostics/common/diagnostics.js';
import '../../../../platform/request/common/request.js';
import '../../../../base/common/platform.js';
import '../../../../platform/extensionManagement/common/configRemotes.js';
import '../../../../platform/native/common/native.js';
import '../../../../platform/product/common/productService.js';
define(
			de[1886],
			he([1, 0, 530, 29, 22, 32, 25, 85, 1260, 768, 327, 12, 1597, 110, 62]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				var g;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$rgd = void 0),
					(e.$qgd = p);
				async function p(f, b = !1) {
					return (0, m.$k1c)(f, b, (s) => (0, t.$ojb)(s));
				}
				let o = (g = class {
					constructor(b, s, l, y, $, v, S, I, T) {
						(this.a = b),
							(this.b = s),
							(this.d = l),
							(this.e = y),
							(this.f = $),
							(this.g = v),
							(this.h = S),
							(this.i = I),
							(this.j = T),
							this.d.telemetryLevel === E.TelemetryLevel.USAGE && this.k();
					}
					async k() {
						this.l(),
							this.g.getTags().then(
								(b) => this.n(b),
								(b) => (0, i.$4)(b),
							),
							this.u(),
							this.w(),
							this.m().then((b) => this.h.reportWorkspaceStats(b));
					}
					async l() {
						if (!a.$l) return;
						let b = await this.j.windowsGetStringRegKey(
							"HKEY_LOCAL_MACHINE",
							"SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion",
							"EditionID",
						);
						b === void 0 && (b = "Unknown"),
							this.d.publicLog2("windowsEdition", { edition: b });
					}
					async m() {
						const b = this.b.getWorkspace(),
							s = this.b.getWorkbenchState(),
							l = await this.g.getTelemetryWorkspaceId(b, s);
						return {
							id: b.id,
							telemetryId: l,
							rendererSessionId: this.d.sessionId,
							folders: b.folders,
							transient: b.transient,
							configuration: b.configuration,
						};
					}
					n(b) {
						this.d.publicLog("workspce.tags", b);
					}
					o(b) {
						Promise.all(
							b.map((s) => {
								const l = s.path,
									y = s.with({ path: `${l !== "/" ? l : ""}/.git/config` });
								return this.a.exists(y).then(($) =>
									$
										? this.f.read(y, { acceptTextOnly: !0 }).then(
												(v) => (0, h.$h1c)(v.value, h.$g1c),
												(v) => [],
											)
										: [],
								);
							}),
						).then((s) => {
							const l = s.reduce(
									($, v) => v.reduce((S, I) => S.add(I), $),
									new Set(),
								),
								y = [];
							l.forEach(($) => y.push($)),
								this.d.publicLog("workspace.remotes", { domains: y.sort() });
						}, i.$4);
					}
					p(b) {
						Promise.all(
							b.map((s) => this.g.getHashedRemotesFromUri(s, !0)),
						).then(() => {}, i.$4);
					}
					q(b, s) {
						const l = b.map((y) => {
							const $ = y.path;
							return y.with({ path: `${$ !== "/" ? $ : ""}/node_modules` });
						});
						return this.a.resolveAll(l.map((y) => ({ resource: y }))).then(
							(y) => {
								const $ = []
									.concat(
										...y.map((S) => (S.success ? S.stat.children || [] : [])),
									)
									.map((S) => S.name);
								return g.r($, /azure/i) && (s.node = !0), s;
							},
							(y) => s,
						);
					}
					static r(b, s) {
						return b.some((l) => l.search(s) > -1) || void 0;
					}
					s(b, s) {
						return Promise.all(
							b.map((l) => {
								const y = l.path,
									$ = l.with({ path: `${y !== "/" ? y : ""}/pom.xml` });
								return this.a.exists($).then((v) =>
									v
										? this.f.read($, { acceptTextOnly: !0 }).then(
												(S) => !!S.value.match(/azure/i),
												(S) => !1,
											)
										: !1,
								);
							}),
						).then((l) => (l.indexOf(!0) !== -1 && (s.java = !0), s));
					}
					t(b) {
						const s = Object.create(null);
						this.q(b, s)
							.then((l) => this.s(b, l))
							.then((l) => {
								Object.keys(l).length && this.d.publicLog("workspace.azure", l);
							})
							.then(void 0, i.$4);
					}
					u() {
						const b = this.b.getWorkspace().folders.map((s) => s.uri);
						b.length && this.a && (this.o(b), this.p(b), this.t(b));
					}
					w() {
						const b = this.i.downloadUrl;
						b &&
							this.e
								.resolveProxy(b)
								.then((s) => {
									let l = s ? String(s).trim().split(/\s+/, 1)[0] : "EMPTY";
									["DIRECT", "PROXY", "HTTPS", "SOCKS", "EMPTY"].indexOf(l) ===
										-1 && (l = "UNKNOWN");
								})
								.then(void 0, i.$4);
					}
				});
				(e.$rgd = o),
					(e.$rgd =
						o =
						g =
							Ne(
								[
									j(0, w.$ll),
									j(1, C.$Vi),
									j(2, E.$km),
									j(3, u.$Aq),
									j(4, d.$kZ),
									j(5, m.$j1c),
									j(6, r.$8m),
									j(7, n.$Bk),
									j(8, c.$y7c),
								],
								o,
							));
			},
		),
		