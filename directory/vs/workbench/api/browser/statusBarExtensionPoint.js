import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/lifecycle.js';
import '../../../nls.js';
import '../../../platform/instantiation/common/instantiation.js';
import '../../services/extensions/common/extensions.js';
import '../../services/extensions/common/extensionsRegistry.js';
import '../../services/statusbar/browser/statusbar.js';
import '../../../platform/accessibility/common/accessibility.js';
import '../../../base/common/iconLabels.js';
import '../../../base/common/hash.js';
import '../../../base/common/event.js';
import '../../../platform/instantiation/common/extensions.js';
import '../../../base/common/iterator.js';
import '../../../platform/extensions/common/extensions.js';
import '../common/extHostTypes.js';
import '../../common/theme.js';
define(
			de[1872],
			he([
				1, 0, 3, 4, 5, 53, 175, 166, 91, 274, 136, 6, 20, 103, 109, 1028, 123,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*lifecycle*/,
 i /*nls*/,
 w /*instantiation*/,
 E /*extensions*/,
 C /*extensionsRegistry*/,
 d /*statusbar*/,
 m /*accessibility*/,
 r /*iconLabels*/,
 u /*hash*/,
 a /*event*/,
 h /*extensions*/,
 c /*iterator*/,
 n /*extensions*/,
 g /*extHostTypes*/,
 p /*theme*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$smc = e.StatusBarUpdateKind = e.$rmc = void 0),
					(e.$rmc = (0, w.$Mi)("IExtensionStatusBarItemService"));
				var o;
				(function (v) {
					(v[(v.DidDefine = 0)] = "DidDefine"),
						(v[(v.DidUpdate = 1)] = "DidUpdate");
				})(o || (e.StatusBarUpdateKind = o = {}));
				let f = class {
					constructor(S) {
						(this.c = S),
							(this.a = new Map()),
							(this.b = new a.$re()),
							(this.onDidChange = this.b.event);
					}
					dispose() {
						this.a.forEach((S) => S.accessor.dispose()),
							this.a.clear(),
							this.b.dispose();
					}
					setOrUpdateEntry(S, I, T, P, k, L, D, M, N, A, R, O) {
						let B, U;
						if (O) (B = O.label), (U = O.role);
						else if (((B = (0, r.$_k)(k)), L)) {
							const q = typeof L == "string" ? L : L.value;
							B += `, ${q}`;
						}
						let z;
						switch (N?.id) {
							case p.$YFb:
							case p.$3Fb:
								(z = N.id === p.$YFb ? "error" : "warning"),
									(M = void 0),
									(N = void 0);
						}
						const F = {
							name: P,
							text: k,
							tooltip: L,
							command: D,
							color: M,
							backgroundColor: N,
							ariaLabel: B,
							role: U,
							kind: z,
						};
						typeof R > "u" && (R = 0);
						let x = A ? d.StatusbarAlignment.LEFT : d.StatusbarAlignment.RIGHT;
						const H = this.a.get(S);
						if ((H && ((x = H.alignment), (R = H.priority)), H))
							return H.accessor.update(F), (H.entry = F), o.DidUpdate;
						{
							let q;
							typeof T == "string"
								? (q = { primary: R, secondary: (0, u.$Aj)(T) })
								: (q = R);
							const V = this.c.addEntry(F, I, x, q);
							return (
								this.a.set(S, {
									accessor: V,
									entry: F,
									alignment: x,
									priority: R,
									disposable: (0, t.$Yc)(() => {
										V.dispose(), this.a.delete(S), this.b.fire({ removed: S });
									}),
								}),
								this.b.fire({
									added: [S, { entry: F, alignment: x, priority: R }],
								}),
								o.DidDefine
							);
						}
					}
					unsetEntry(S) {
						this.a.get(S)?.disposable.dispose(), this.a.delete(S);
					}
					getEntries() {
						return this.a.entries();
					}
				};
				(f = Ne([j(0, d.$d6b)], f)),
					(0, h.$lK)(e.$rmc, f, h.InstantiationType.Delayed);
				function b(v) {
					const S = v;
					return (
						typeof S.id == "string" &&
						S.id.length > 0 &&
						typeof S.name == "string" &&
						typeof S.text == "string" &&
						(S.alignment === "left" || S.alignment === "right") &&
						(S.command === void 0 || typeof S.command == "string") &&
						(S.tooltip === void 0 || typeof S.tooltip == "string") &&
						(S.priority === void 0 || typeof S.priority == "number") &&
						(S.accessibilityInformation === void 0 ||
							(0, m.$ZK)(S.accessibilityInformation))
					);
				}
				const s = {
						type: "object",
						required: ["id", "text", "alignment", "name"],
						properties: {
							id: {
								type: "string",
								markdownDescription: (0, i.localize)(2590, null),
							},
							name: {
								type: "string",
								description: (0, i.localize)(2591, null),
							},
							text: {
								type: "string",
								description: (0, i.localize)(2592, null),
							},
							tooltip: {
								type: "string",
								description: (0, i.localize)(2593, null),
							},
							command: {
								type: "string",
								description: (0, i.localize)(2594, null),
							},
							alignment: {
								type: "string",
								enum: ["left", "right"],
								description: (0, i.localize)(2595, null),
							},
							priority: {
								type: "number",
								description: (0, i.localize)(2596, null),
							},
							accessibilityInformation: {
								type: "object",
								description: (0, i.localize)(2597, null),
								properties: {
									role: {
										type: "string",
										description: (0, i.localize)(2598, null),
									},
									label: {
										type: "string",
										description: (0, i.localize)(2599, null),
									},
								},
							},
						},
					},
					l = {
						description: (0, i.localize)(2600, null),
						oneOf: [s, { type: "array", items: s }],
					},
					y = C.$n2.registerExtensionPoint({
						extensionPoint: "statusBarItems",
						jsonSchema: l,
					});
				let $ = class {
					constructor(S) {
						const I = new t.$Zc();
						y.setHandler((T) => {
							I.clear();
							for (const P of T) {
								if (!(0, E.$t2)(P.description, "contribStatusBarItems")) {
									P.collector.error(`The ${y.name} is proposed API`);
									continue;
								}
								const { value: k, collector: L } = P;
								for (const D of c.Iterable.wrap(k)) {
									if (!b(D)) {
										L.error((0, i.localize)(2601, null));
										continue;
									}
									const M = (0, g.$2bb)(P.description.identifier, D.id);
									S.setOrUpdateEntry(
										M,
										M,
										n.$Gn.toKey(P.description.identifier),
										D.name ?? P.description.displayName ?? P.description.name,
										D.text,
										D.tooltip,
										D.command ? { id: D.command, title: D.name } : void 0,
										void 0,
										void 0,
										D.alignment === "left",
										D.priority,
										D.accessibilityInformation,
									) === o.DidDefine && I.add((0, t.$Yc)(() => S.unsetEntry(M)));
								}
							}
						});
					}
				};
				(e.$smc = $), (e.$smc = $ = Ne([j(0, e.$rmc)], $));
			},
		),
		