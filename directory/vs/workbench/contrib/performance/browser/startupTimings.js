import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../editor/browser/editorBrowser.js';
import '../../../services/lifecycle/common/lifecycle.js';
import '../../../../platform/update/common/update.js';
import '../../files/common/files.js';
import '../../../services/editor/common/editorService.js';
import '../../../../platform/workspace/common/workspaceTrust.js';
import '../../../services/panecomposite/browser/panecomposite.js';
import '../../../common/views.js';
import '../../../../platform/log/common/log.js';
import '../../../../platform/product/common/productService.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../services/environment/browser/environmentService.js';
import '../../../services/timer/browser/timerService.js';
import '../../../../base/common/path.js';
import '../../../../base/common/hash.js';
define(
			de[3734],
			he([
				1, 0, 56, 52, 415, 220, 18, 174, 142, 60, 34, 62, 32, 286, 520, 54, 136,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$$5c = e.$05c = e.$95c = void 0),
					(E = mt(E));
				let o = class {
					constructor(l, y, $, v, S) {
						(this.a = l),
							(this.b = y),
							(this.c = $),
							(this.d = v),
							(this.e = S);
					}
					async f() {
						if (this.c.startupKind !== i.StartupKind.NewWindow)
							return (0, i.$o6)(this.c.startupKind);
						if (!this.e.isWorkspaceTrusted()) return "Workspace not trusted";
						const l = this.b.getActivePaneComposite(
							r.ViewContainerLocation.Sidebar,
						);
						if (!l || l.getId() !== E.$vUb)
							return "Explorer viewlet not visible";
						const y = this.a.visibleEditorPanes;
						if (y.length !== 1)
							return `Expected text editor count : 1, Actual : ${y.length}`;
						if (!(0, t.$0sb)(y[0].getControl()))
							return "Active editor is not a text editor";
						const $ = this.b.getActivePaneComposite(
							r.ViewContainerLocation.Panel,
						);
						if ($)
							return `Current active panel : ${this.b.getPaneComposite($.getId(), r.ViewContainerLocation.Panel)?.name}`;
						if ((await this.d.isLatestVersion()) === !1)
							return "Not on latest version, updates available";
					}
				};
				(e.$95c = o),
					(e.$95c = o =
						Ne(
							[
								j(0, C.$IY),
								j(1, m.$6Sb),
								j(2, i.$n6),
								j(3, w.$_rb),
								j(4, d.$pO),
							],
							o,
						));
				let f = class extends o {
					constructor(l, y, $, v, S, I, T, P, k, L) {
						super(l, y, $, v, S),
							(this.g = I),
							(this.h = T),
							(this.i = P),
							(this.j = k),
							(this.k = L),
							this.l();
					}
					async l() {
						if (!this.i.profDurationMarkers) return;
						await this.g.whenReady();
						const l = await this.f(),
							y = await this.g.perfBaseline,
							[$, v] = this.i.profDurationMarkers,
							S = `${this.g.getDuration($, v)}	${this.k.nameShort}	${(this.k.commit || "").slice(0, 10) || "0000000000"}	${this.j.sessionId}	${l === void 0 ? "standard_start" : "NO_standard_start : " + l}	${String(y).padStart(4, "0")}ms
`;
						this.h.info(`[prof-timers] ${S}`);
					}
				};
				(e.$05c = f),
					(e.$05c = f =
						Ne(
							[
								j(0, C.$IY),
								j(1, m.$6Sb),
								j(2, i.$n6),
								j(3, w.$_rb),
								j(4, d.$pO),
								j(5, n.$Xnc),
								j(6, u.$ik),
								j(7, c.$5rb),
								j(8, h.$km),
								j(9, a.$Bk),
							],
							f,
						));
				let b = class {
					constructor(l) {
						for (const y of performance.getEntriesByType("resource"))
							try {
								const $ = new URL(y.name),
									v = g.$lc.basename($.pathname);
								l.publicLog2("startup.resource.perf", {
									hosthash: `H${(0, p.$Aj)($.host).toString(16)}`,
									name: v,
									duration: y.duration,
								});
							} catch {}
					}
				};
				(e.$$5c = b), (e.$$5c = b = Ne([j(0, h.$km)], b));
			},
		),
		