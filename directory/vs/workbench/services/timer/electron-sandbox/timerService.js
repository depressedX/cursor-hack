import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/native/common/native.js';
import '../../environment/electron-sandbox/environmentService.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../extensions/common/extensions.js';
import '../../../../platform/update/common/update.js';
import '../../lifecycle/common/lifecycle.js';
import '../../editor/common/editorService.js';
import '../../../../platform/accessibility/common/accessibility.js';
import '../browser/timerService.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../base/parts/sandbox/electron-sandbox/globals.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../layout/browser/layoutService.js';
import '../../../../platform/product/common/productService.js';
import '../../../../platform/storage/common/storage.js';
import '../../panecomposite/browser/panecomposite.js';
define(
			de[3739],
			he([
				1, 0, 110, 151, 25, 53, 415, 52, 18, 91, 520, 32, 320, 20, 96, 62, 21,
				142,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*native*/,
 i /*environmentService*/,
 w /*workspace*/,
 E /*extensions*/,
 C /*update*/,
 d /*lifecycle*/,
 m /*editorService*/,
 r /*accessibility*/,
 u /*timerService*/,
 a /*telemetry*/,
 h /*globals*/,
 c /*extensions*/,
 n /*layoutService*/,
 g /*productService*/,
 p /*storage*/,
 o /*panecomposite*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Tdd = void 0),
					(e.$Udd = l);
				let f = class extends u.$Ync {
					constructor($, v, S, I, T, P, k, L, D, M, N, A, R) {
						super(S, I, T, P, k, L, D, M, N),
							(this.x = $),
							(this.y = v),
							(this.z = A),
							(this.A = R),
							this.setPerformanceMarks("main", v.window.perfMarks);
					}
					t() {
						return !!this.y.window.isInitialStartup;
					}
					u() {
						return l(this.z, this.A, this.y);
					}
					v() {
						return this.x.getWindowCount();
					}
					async w($) {
						try {
							const [v, S, I, T] = await Promise.all([
								this.x.getOSProperties(),
								this.x.getOSStatistics(),
								this.x.getOSVirtualMachineHint(),
								this.x.isRunningUnderARM64Translation(),
							]);
							($.totalmem = S.totalmem),
								($.freemem = S.freemem),
								($.platform = v.platform),
								($.release = v.release),
								($.arch = v.arch),
								($.loadavg = S.loadavg),
								($.isARM64Emulated = T);
							const P = await h.$S.getProcessMemoryInfo();
							($.meminfo = {
								workingSetSize: P.residentSet,
								privateBytes: P.private,
								sharedBytes: P.shared,
							}),
								($.isVMLikelyhood = Math.round(I * 100));
							const k = v.cpus;
							k &&
								k.length > 0 &&
								($.cpus = {
									count: k.length,
									speed: k[0].speed,
									model: k[0].model,
								});
						} catch {}
					}
					q() {
						return super.q() || !!this.y.args["prof-append-timers"];
					}
				};
				(e.$Tdd = f),
					(e.$Tdd = f =
						Ne(
							[
								j(0, t.$y7c),
								j(1, i.$ucd),
								j(2, d.$n6),
								j(3, w.$Vi),
								j(4, E.$q2),
								j(5, C.$_rb),
								j(6, o.$6Sb),
								j(7, m.$IY),
								j(8, r.$XK),
								j(9, a.$km),
								j(10, n.$mEb),
								j(11, g.$Bk),
								j(12, p.$lq),
							],
							f,
						)),
					(0, c.$lK)(u.$Xnc, f, c.InstantiationType.Delayed);
				const b = "perf/lastRunningCommit";
				let s;
				function l(y, $, v) {
					return (
						typeof s != "boolean" &&
							(!v.window.isCodeCaching || !y.commit
								? (s = !1)
								: $.get(b, p.StorageScope.APPLICATION) === y.commit
									? (s = !0)
									: ($.store(
											b,
											y.commit,
											p.StorageScope.APPLICATION,
											p.StorageTarget.MACHINE,
										),
										(s = !1))),
						s
					);
				}
			},
		),
		