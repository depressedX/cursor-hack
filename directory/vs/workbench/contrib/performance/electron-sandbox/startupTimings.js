import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/async.js';
import '../../../../base/common/errors.js';
import '../../../services/environment/electron-sandbox/environmentService.js';
import '../../../services/lifecycle/common/lifecycle.js';
import '../../../../platform/product/common/productService.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/update/common/update.js';
import '../../../../platform/native/common/native.js';
import '../../../services/editor/common/editorService.js';
import '../../../services/timer/browser/timerService.js';
import '../../../../platform/files/common/files.js';
import '../../../../base/common/uri.js';
import '../../../../base/common/buffer.js';
import '../../../../platform/workspace/common/workspaceTrust.js';
import '../../../services/panecomposite/browser/panecomposite.js';
import '../browser/startupTimings.js';
import '../../../../base/common/arrays.js';
define(
			de[3737],
			he([
				1, 0, 15, 29, 151, 52, 62, 32, 415, 110, 18, 520, 22, 9, 76, 174, 142,
				3734, 24,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*async*/,
 i /*errors*/,
 w /*environmentService*/,
 E /*lifecycle*/,
 C /*productService*/,
 d /*telemetry*/,
 m /*update*/,
 r /*native*/,
 u /*editorService*/,
 a /*timerService*/,
 h /*files*/,
 c /*uri*/,
 n /*buffer*/,
 g /*workspaceTrust*/,
 p /*panecomposite*/,
 o /*startupTimings*/,
 f /*arrays*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Bgd = void 0);
				let b = class extends o.$95c {
					constructor(l, y, $, v, S, I, T, P, k, L, D) {
						super(v, S, T, P, D),
							(this.g = l),
							(this.h = y),
							(this.i = $),
							(this.j = I),
							(this.k = k),
							(this.l = L),
							this.m().catch(i.$4);
					}
					async m() {
						const l = await this.f();
						this.n(l).catch(i.$4);
					}
					async n(l) {
						const y = this.k.args["prof-append-timers"],
							$ = this.k.args["prof-duration-markers"],
							v = this.k.args["prof-duration-markers-file"];
						if (!(!y && !$))
							try {
								await Promise.all([this.h.whenReady(), (0, t.$Nh)(15e3)]);
								const S = await this.h.perfBaseline,
									I = await this.q();
								if ((I && this.r(I), y)) {
									const T =
										(0, f.$Lb)([
											this.h.startupMetrics.ellapsed,
											this.l.nameShort,
											(this.l.commit || "").slice(0, 10) || "0000000000",
											this.j.sessionId,
											l === void 0
												? "standard_start"
												: `NO_standard_start : ${l}`,
											`${String(S).padStart(4, "0")}ms`,
											I ? this.s(I) : void 0,
										]).join("	") +
										`
`;
									await this.p(c.URI.file(y), T);
								}
								if ($?.length) {
									const T = [];
									for (const k of $) {
										let L = 0;
										if (k === "ellapsed") L = this.h.startupMetrics.ellapsed;
										else if (k.indexOf("-") !== -1) {
											const D = k.split("-");
											D.length === 2 && (L = this.h.getDuration(D[0], D[1]));
										}
										L && (T.push(k), T.push(`${L}`));
									}
									const P = `${T.join("	")}
`;
									v ? await this.p(c.URI.file(v), P) : console.log(P);
								}
							} catch (S) {
								console.error(S);
							} finally {
								this.i.exit(0);
							}
					}
					async f() {
						const l = await this.i.getWindowCount();
						return l !== 1
							? `Expected window count : 1, Actual : ${l}`
							: super.f();
					}
					async p(l, y) {
						const $ = [];
						(await this.g.exists(l)) &&
							$.push((await this.g.readFile(l)).value),
							$.push(n.$Te.fromString(y)),
							await this.g.writeFile(l, n.$Te.concat($));
					}
					async q() {
						if (
							!this.k.args["enable-tracing"] ||
							!this.k.args["trace-startup-file"] ||
							this.k.args["trace-startup-format"] !== "json" ||
							!this.k.args["trace-startup-duration"]
						)
							return;
						const l = await this.i.getProcessId(),
							y = performance.memory?.usedJSHeapSize ?? 0;
						let $ = 0,
							v = 0,
							S = 0,
							I = 0;
						try {
							const T = JSON.parse(
								(
									await this.g.readFile(
										c.URI.file(this.k.args["trace-startup-file"]),
									)
								).value.toString(),
							);
							for (const P of T.traceEvents)
								if (P.pid === l) {
									switch (P.name) {
										case "MinorGC":
											$++;
											break;
										case "MajorGC":
											v++;
											break;
										case "V8.GCFinalizeMC":
										case "V8.GCScavenger":
											I += P.dur;
											break;
									}
									(P.name === "MajorGC" || P.name === "MinorGC") &&
										typeof P.args?.usedHeapSizeAfter == "number" &&
										typeof P.args.usedHeapSizeBefore == "number" &&
										(S += P.args.usedHeapSizeBefore - P.args.usedHeapSizeAfter);
								}
							return {
								minorGCs: $,
								majorGCs: v,
								used: y,
								garbage: S,
								duration: Math.round(I / 1e3),
							};
						} catch (T) {
							console.error(T);
						}
					}
					r({ used: l, garbage: y, majorGCs: $, minorGCs: v, duration: S }) {
						this.j.publicLog2("startupHeapStatistics", {
							heapUsed: l,
							heapGarbage: y,
							majorGCs: $,
							minorGCs: v,
							gcsDuration: S,
						});
					}
					s({ used: l, garbage: y, majorGCs: $, minorGCs: v, duration: S }) {
						return `Heap: ${Math.round(l / 1048576)}MB (used) ${Math.round(y / 1048576)}MB (garbage) ${$} (MajorGC) ${v} (MinorGC) ${S}ms (GC duration)`;
					}
				};
				(e.$Bgd = b),
					(e.$Bgd = b =
						Ne(
							[
								j(0, h.$ll),
								j(1, a.$Xnc),
								j(2, r.$y7c),
								j(3, u.$IY),
								j(4, p.$6Sb),
								j(5, d.$km),
								j(6, E.$n6),
								j(7, m.$_rb),
								j(8, w.$ucd),
								j(9, C.$Bk),
								j(10, g.$pO),
							],
							b,
						));
			},
		),
		