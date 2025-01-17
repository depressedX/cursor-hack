import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/ternarySearchTree.js';
import '../common/extensions.js';
import '../../../../base/common/network.js';
import '../../../../base/common/uri.js';
import '../../../../platform/profiling/common/profiling.js';
import '../../../../base/common/functional.js';
define(
			de[1823],
			he([1, 0, 387, 53, 23, 9, 941, 288]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$$fd = void 0);
				let m = class {
					constructor(u, a, h, c) {
						(this.a = u), (this.b = a), (this.c = h), (this.d = c);
					}
					async start() {
						const u = await this.d.startProfiling({
							host: this.a,
							port: this.b,
						});
						return {
							stop: (0, d.$hb)(async () => {
								const a = await this.d.stopProfiling(u);
								await this.c.whenInstalledExtensionsRegistered();
								const h = this.c.extensions;
								return this.e(a, h);
							}),
						};
					}
					e(u, a) {
						const h = t.$Si.forUris();
						for (const $ of a)
							$.extensionLocation.scheme === w.Schemas.file &&
								h.set(E.URI.file($.extensionLocation.fsPath), $);
						const c = u.nodes,
							n = new Map(),
							g = new Map();
						for (const $ of c) n.set($.id, $);
						function p($, v) {
							if (v) {
								if (v === "self" && $.callFrame.url) {
									let S;
									try {
										S = h.findSubstr(E.URI.parse($.callFrame.url));
									} catch {}
									S && (v = S.identifier.value);
								}
							} else
								switch ($.callFrame.functionName) {
									case "(root)":
										break;
									case "(program)":
										v = "program";
										break;
									case "(garbage collector)":
										v = "gc";
										break;
									default:
										v = "self";
										break;
								}
							if ((g.set($.id, v), $.children))
								for (const S of $.children) {
									const I = n.get(S);
									I && p(I, v);
								}
						}
						p(c[0], null);
						const o = u.samples || [],
							f = u.timeDeltas || [],
							b = [],
							s = [];
						let l = 0,
							y;
						for (let $ = 0; $ < o.length; $++) {
							const v = o[$],
								S = g.get(v);
							S !== y &&
								(y && (s.push(y), b.push(l)), (y = S ?? void 0), (l = 0)),
								(l += f[$]);
						}
						return (
							y && (s.push(y), b.push(l)),
							{
								startTime: u.startTime,
								endTime: u.endTime,
								deltas: b,
								ids: s,
								data: u,
								getAggregatedTimes: () => {
									const $ = new Map();
									for (let v = 0; v < s.length; v++) {
										const S = s[v];
										$.set(S, ($.get(S) || 0) + b[v]);
									}
									return $;
								},
							}
						);
					}
				};
				(e.$$fd = m), (e.$$fd = m = Ne([j(2, i.$q2), j(3, C.$b2)], m));
			},
		),
		