import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../platform/markers/common/markers.js';
import '../../../../../platform/markers/browser/markerService.js';
import '../../../../../base/browser/window.js';
import '../../../../../../proto/aiserver/v1/tools_pb.js';
define(
			de[1283],
			he([1, 0, 90, 770, 75, 124]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$6yc = void 0),
					(e.$7yc = r);
				const C = [
						"python",
						"typescript",
						"typescriptreact",
						"javascript",
						"javascriptreact",
						"json",
						"jsonc",
						"css",
						"scss",
						"html",
						"yaml",
						"xml",
					],
					d = ["plaintext", "markdown"];
				class m {
					constructor(a, h, c, n, g, p, o) {
						(this.g = a),
							(this.h = h),
							(this.j = c),
							(this.k = n),
							(this.l = g),
							(this.m = p),
							(this.n = o),
							(this.a = 0),
							(this.f = !1);
					}
					getLintsFromBubble(a) {
						const h = this.n.getBubbleData(a);
						if (!h || h.tool !== E.ClientSideToolV2.EDIT_FILE) return;
						const c = h.params?.relativeWorkspacePath;
						if (!(!c || !this.j.resolveRelativePath(c)))
							return h.additionalData?.startingLints;
					}
					getFirstErrors() {
						const a = this.m.getComposerData(this.k);
						if (!a) return;
						const h = a.conversation.findIndex((c) => c.bubbleId === this.l);
						for (let c = 0; c <= h; c++) {
							const n = a.conversation[c],
								g = this.getLintsFromBubble(n.bubbleId);
							if (g) return new Set(g.map((p) => JSON.stringify(p)));
						}
					}
					shouldProcessDiagnostics(a, h) {
						return h ? !d.includes(a) : C.includes(a);
					}
					startTracking() {
						const a = this.getFirstErrors();
						return (
							a === void 0
								? (console.error("[linterErrorTracker] No first errors found"),
									(this.e = new Set(
										this.h
											.read({
												resource: this.g,
												severities: t.MarkerSeverity.Error,
											})
											.map(i.$P7b)
											.map((h) => JSON.stringify(h)),
									)))
								: (this.e = a),
							this.h.onMarkerChanged((h) => {
								if (h.some((c) => c.toString() === this.g.toString())) {
									this.a = Date.now();
									const c = this.h
										.read({
											resource: this.g,
											severities: t.MarkerSeverity.Error,
										})
										.map(i.$P7b);
									this.b = c.filter((n) => !this.e?.has(JSON.stringify(n)));
								}
							})
						);
					}
					getNewLinterErrors() {
						return this.b;
					}
					async waitForLinterSettling(a = 750, h = 5e3, c = 2e3) {
						const n = Date.now();
						let g;
						await Promise.race([
							new Promise((p) => {
								setTimeout(() => {
									g !== void 0 && w.$Bfb.clearInterval(g), p();
								}, h);
							}),
							new Promise((p) => {
								g = w.$Bfb.setInterval(() => {
									const o = Date.now();
									((this.b !== void 0 && o - this.a >= a && o - n >= a) ||
										(this.b === void 0 && o - n >= c)) &&
										(w.$Bfb.clearInterval(g), p());
								}, 100);
							}),
						]),
							(this.f = !1);
					}
				}
				e.$6yc = m;
				function r({
					uri: u,
					markerService: a,
					workspaceContext: h,
					composerId: c,
					bubbleId: n,
					composerDataService: g,
					capability: p,
				}) {
					return new m(u, a, h, c, n, g, p);
				}
			},
		),
		