import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/assert.js';
import '../../../base/common/async.js';
import '../../../base/common/color.js';
import '../../../base/common/event.js';
import '../../jsonschemas/common/jsonContributionRegistry.js';
import '../../registry/common/platform.js';
import '../../../nls.js';
define(
			de[306],
			he([1, 0, 229, 15, 97, 6, 250, 30, 4]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$HP = e.$vP = e.$uP = e.ColorTransformType = void 0),
					(e.$qP = r),
					(e.$rP = u),
					(e.$sP = a),
					(e.$tP = c),
					(e.$wP = p),
					(e.$xP = o),
					(e.$yP = f),
					(e.$zP = b),
					(e.$AP = s),
					(e.$BP = l),
					(e.$CP = y),
					(e.$DP = $),
					(e.$EP = v),
					(e.$FP = S),
					(e.$GP = I),
					(d = mt(d)),
					(m = mt(m));
				function r(k) {
					return `--vscode-${k.replace(/\./g, "-")}`;
				}
				function u(k) {
					return `var(${r(k)})`;
				}
				function a(k, L) {
					return `var(${r(k)}, ${L})`;
				}
				var h;
				(function (k) {
					(k[(k.Darken = 0)] = "Darken"),
						(k[(k.Lighten = 1)] = "Lighten"),
						(k[(k.Transparent = 2)] = "Transparent"),
						(k[(k.Opaque = 3)] = "Opaque"),
						(k[(k.OneOf = 4)] = "OneOf"),
						(k[(k.LessProminent = 5)] = "LessProminent"),
						(k[(k.IfDefinedThenElse = 6)] = "IfDefinedThenElse");
				})(h || (e.ColorTransformType = h = {}));
				function c(k) {
					return (
						k !== null && typeof k == "object" && "light" in k && "dark" in k
					);
				}
				(e.$uP = { ColorContribution: "base.contributions.colors" }),
					(e.$vP = "default");
				class n {
					constructor() {
						(this.c = new E.$re()),
							(this.onDidChangeSchema = this.c.event),
							(this.e = { type: "object", properties: {} }),
							(this.f = { type: "string", enum: [], enumDescriptions: [] }),
							(this.d = {});
					}
					notifyThemeUpdate(L) {
						for (const D of Object.keys(this.d)) {
							const M = L.getColor(D);
							M &&
								(this.e.properties[D].oneOf[0].defaultSnippets[0].body =
									`\${1:${M.toString()}}`);
						}
						this.c.fire();
					}
					registerColor(L, D, M, N = !1, A) {
						const R = {
							id: L,
							description: M,
							defaults: D,
							needsTransparency: N,
							deprecationMessage: A,
						};
						this.d[L] = R;
						const O = {
							type: "string",
							format: "color-hex",
							defaultSnippets: [{ body: "${1:#ff0000}" }],
						};
						return (
							A && (O.deprecationMessage = A),
							N &&
								((O.pattern =
									"^#(?:(?<rgba>[0-9a-fA-f]{3}[0-9a-eA-E])|(?:[0-9a-fA-F]{6}(?:(?![fF]{2})(?:[0-9a-fA-F]{2}))))?$"),
								(O.patternErrorMessage = m.localize(2366, null))),
							(this.e.properties[L] = {
								description: M,
								oneOf: [
									O,
									{
										type: "string",
										const: e.$vP,
										description: m.localize(2367, null),
									},
								],
							}),
							this.f.enum.push(L),
							this.f.enumDescriptions.push(M),
							this.c.fire(),
							L
						);
					}
					deregisterColor(L) {
						delete this.d[L], delete this.e.properties[L];
						const D = this.f.enum.indexOf(L);
						D !== -1 &&
							(this.f.enum.splice(D, 1), this.f.enumDescriptions.splice(D, 1)),
							this.c.fire();
					}
					getColors() {
						return Object.keys(this.d).map((L) => this.d[L]);
					}
					resolveDefaultColor(L, D) {
						const M = this.d[L];
						if (M?.defaults) {
							const N = c(M.defaults) ? M.defaults[D.type] : M.defaults;
							return I(N, D);
						}
					}
					getColorSchema() {
						return this.e;
					}
					getColorReferenceSchema() {
						return this.f;
					}
					toString() {
						const L = (D, M) => {
							const N = D.indexOf(".") === -1 ? 0 : 1,
								A = M.indexOf(".") === -1 ? 0 : 1;
							return N !== A ? N - A : D.localeCompare(M);
						};
						return Object.keys(this.d)
							.sort(L)
							.map((D) => `- \`${D}\`: ${this.d[D].description}`)
							.join(`
`);
					}
				}
				const g = new n();
				d.$Io.add(e.$uP.ColorContribution, g);
				function p(k, L, D, M, N) {
					return g.registerColor(k, L, D, M, N);
				}
				function o() {
					return g;
				}
				function f(k, L) {
					switch (k.op) {
						case h.Darken:
							return I(k.value, L)?.darken(k.factor);
						case h.Lighten:
							return I(k.value, L)?.lighten(k.factor);
						case h.Transparent:
							return I(k.value, L)?.transparent(k.factor);
						case h.Opaque: {
							const D = I(k.background, L);
							return D ? I(k.value, L)?.makeOpaque(D) : I(k.value, L);
						}
						case h.OneOf:
							for (const D of k.values) {
								const M = I(D, L);
								if (M) return M;
							}
							return;
						case h.IfDefinedThenElse:
							return I(L.defines(k.if) ? k.then : k.else, L);
						case h.LessProminent: {
							const D = I(k.value, L);
							if (!D) return;
							const M = I(k.background, L);
							return M
								? D.isDarkerThan(M)
									? w.$UL
											.getLighterColor(D, M, k.factor)
											.transparent(k.transparency)
									: w.$UL
											.getDarkerColor(D, M, k.factor)
											.transparent(k.transparency)
								: D.transparent(k.factor * k.transparency);
						}
						default:
							throw (0, t.$kd)(k);
					}
				}
				function b(k, L) {
					return { op: h.Darken, value: k, factor: L };
				}
				function s(k, L) {
					return { op: h.Lighten, value: k, factor: L };
				}
				function l(k, L) {
					return { op: h.Transparent, value: k, factor: L };
				}
				function y(k, L) {
					return { op: h.Opaque, value: k, background: L };
				}
				function $(...k) {
					return { op: h.OneOf, values: k };
				}
				function v(k, L, D) {
					return { op: h.IfDefinedThenElse, if: k, then: L, else: D };
				}
				function S(k, L, D, M) {
					return {
						op: h.LessProminent,
						value: k,
						background: L,
						factor: D,
						transparency: M,
					};
				}
				function I(k, L) {
					if (k !== null) {
						if (typeof k == "string")
							return k[0] === "#" ? w.$UL.fromHex(k) : L.getColor(k);
						if (k instanceof w.$UL) return k;
						if (typeof k == "object") return f(k, L);
					}
				}
				e.$HP = "vscode://schemas/workbench-colors";
				const T = d.$Io.as(C.$Jo.JSONContribution);
				T.registerSchema(e.$HP, g.getColorSchema());
				const P = new i.$Yh(() => T.notifySchemaChanged(e.$HP), 200);
				g.onDidChangeSchema(() => {
					P.isScheduled() || P.schedule();
				});
			},
		),
		