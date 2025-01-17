import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/common/uri.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/path.js';
import '../../../../base/common/event.js';
import '../../../common/contributions.js';
import '../../../../platform/registry/common/platform.js';
import '../../environment/common/environmentService.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../../base/common/resources.js';
import '../../../../base/common/labels.js';
import '../../../../platform/label/common/label.js';
import '../../extensions/common/extensionsRegistry.js';
import '../../../../base/common/glob.js';
import '../../lifecycle/common/lifecycle.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../path/common/pathService.js';
import '../../extensions/common/extensions.js';
import '../../../../base/common/platform.js';
import '../../remote/common/remoteAgentService.js';
import '../../../../base/common/network.js';
import '../../../../platform/storage/common/storage.js';
import '../../../common/memento.js';
import '../../../../base/common/arrays.js';
define(
			de[3585],
			he([
				1, 0, 4, 9, 3, 54, 6, 55, 30, 78, 25, 19, 222, 73, 175, 215, 52, 20,
				165, 53, 12, 143, 23, 21, 282, 24,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
				$,
				v,
				S,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$swc = void 0);
				const I = n.$n2.registerExtensionPoint({
						extensionPoint: "resourceLabelFormatters",
						jsonSchema: {
							description: (0, t.localize)(12515, null),
							type: "array",
							items: {
								type: "object",
								required: ["scheme", "formatting"],
								properties: {
									scheme: {
										type: "string",
										description: (0, t.localize)(12516, null),
									},
									authority: {
										type: "string",
										description: (0, t.localize)(12517, null),
									},
									formatting: {
										description: (0, t.localize)(12518, null),
										type: "object",
										properties: {
											label: {
												type: "string",
												description: (0, t.localize)(12519, null),
											},
											separator: {
												type: "string",
												description: (0, t.localize)(12520, null),
											},
											stripPathStartingSeparator: {
												type: "boolean",
												description: (0, t.localize)(12521, null),
											},
											tildify: {
												type: "boolean",
												description: (0, t.localize)(12522, null),
											},
											workspaceSuffix: {
												type: "string",
												description: (0, t.localize)(12523, null),
											},
										},
									},
								},
							},
						},
					}),
					T = /\//g,
					P = /\$\{(scheme|authoritySuffix|authority|path|(query)\.(.+?))\}/g;
				function k(N) {
					return !!(N && N[2] === ":");
				}
				let L = class {
					constructor(A) {
						(this.a = new Map()),
							I.setHandler((R, O) => {
								for (const B of O.added)
									for (const U of B.value) {
										const z = { ...U };
										typeof z.formatting.label != "string" &&
											(z.formatting.label = "${authority}${path}"),
											typeof z.formatting.separator != "string" &&
												(z.formatting.separator = E.sep),
											!(0, b.$t2)(
												B.description,
												"contribLabelFormatterWorkspaceTooltip",
											) &&
												z.formatting.workspaceTooltip &&
												(z.formatting.workspaceTooltip = void 0),
											this.a.set(z, A.registerFormatter(z));
									}
								for (const B of O.removed)
									for (const U of B.value) (0, w.$Vc)(this.a.get(U));
							});
					}
				};
				(L = Ne([j(0, c.$3N)], L)),
					m.$Io
						.as(d.Extensions.Workbench)
						.registerWorkbenchContribution(L, p.LifecyclePhase.Restored);
				const D = 50;
				let M = class extends w.$1c {
					constructor(A, R, O, B, U, z) {
						super(),
							(this.m = A),
							(this.n = R),
							(this.q = O),
							(this.r = B),
							(this.b = this.D(new C.$re({ leakWarningThreshold: 400 }))),
							(this.onDidChangeFormatters = this.b.event),
							(this.h = s.OS),
							(this.j =
								O.defaultUriScheme === y.Schemas.file
									? this.q.userHome({ preferLocal: !0 })
									: void 0);
						const F = (this.c = new v.$eEb(
							"cachedResourceLabelFormatters2",
							U,
						));
						(this.g = F.getMemento(
							$.StorageScope.PROFILE,
							$.StorageTarget.MACHINE,
						)),
							(this.a = this.g?.formatters?.slice() || []),
							this.s();
					}
					async s() {
						const A = await this.r.getEnvironment();
						(this.h = A?.os ?? s.OS), (this.j = await this.q.userHome());
					}
					findFormatting(A) {
						let R;
						for (const O of this.a)
							if (O.scheme === A.scheme) {
								if (!O.authority && (!R || O.priority)) {
									R = O;
									continue;
								}
								if (!O.authority) continue;
								(0, g.$Ik)(
									O.authority.toLowerCase(),
									A.authority.toLowerCase(),
								) &&
									(!R ||
										!R.authority ||
										O.authority.length > R.authority.length ||
										(O.authority.length === R.authority.length &&
											O.priority)) &&
									(R = O);
							}
						return R ? R.formatting : void 0;
					}
					getUriLabel(A, R = {}) {
						let O = this.findFormatting(A);
						O && R.separator && (O = { ...O, separator: R.separator });
						const B = this.t(A, O, R);
						return !O && R.separator ? B.replace(T, R.separator) : B;
					}
					t(A, R, O = {}) {
						if (!R)
							return (0, h.$wO)(A, {
								os: this.h,
								tildify: this.j ? { userHome: this.j } : void 0,
								relative: O.relative
									? {
											noPrefix: O.noPrefix,
											getWorkspace: () => this.n.getWorkspace(),
											getWorkspaceFolder: (B) => this.n.getWorkspaceFolder(B),
										}
									: void 0,
							});
						if (O.relative && this.n) {
							let B = this.n.getWorkspaceFolder(A);
							if (!B) {
								const U = this.n.getWorkspace(),
									z = (0, S.$Sb)(U.folders);
								z &&
									A.scheme !== z.uri.scheme &&
									A.path.startsWith(E.$lc.sep) &&
									(B = this.n.getWorkspaceFolder(z.uri.with({ path: A.path })));
							}
							if (B) {
								const U = this.y(B.uri, R, O.noPrefix);
								let z = this.y(A, R, O.noPrefix),
									F = 0;
								for (; z[F] && z[F] === U[F]; ) F++;
								if (
									(!z[F] || z[F] === R.separator
										? (z = z.substring(1 + F))
										: F === U.length &&
											B.uri.path === E.$lc.sep &&
											(z = z.substring(F)),
									this.n.getWorkspace().folders.length > 1 && !O.noPrefix)
								) {
									const H = B?.name ?? (0, a.$jh)(B.uri);
									z = z ? `${H} \u2022 ${z}` : H;
								}
								return z;
							}
						}
						return this.y(A, R, O.noPrefix);
					}
					getUriBasenameLabel(A) {
						const R = this.findFormatting(A),
							O = this.t(A, R);
						let B;
						return (
							R?.separator === E.$kc.sep
								? (B = E.$kc)
								: R?.separator === E.$lc.sep
									? (B = E.$lc)
									: (B = this.h === s.OperatingSystem.Windows ? E.$kc : E.$lc),
							B.basename(O)
						);
					}
					getWorkspaceLabel(A, R) {
						if ((0, u.$4i)(A)) {
							const O = (0, u.$1i)(A);
							return (0, u.$Wi)(O) || (0, u.$2i)(O)
								? this.getWorkspaceLabel(O, R)
								: "";
						}
						return i.URI.isUri(A)
							? this.w(A, R)
							: (0, u.$Wi)(A)
								? this.w(A.uri, R)
								: (0, u.$2i)(A)
									? this.u(A.configPath, R)
									: "";
					}
					u(A, R) {
						if ((0, u.$aj)(A, this.m)) return (0, t.localize)(12524, null);
						if ((0, u.$bj)(A)) return (0, t.localize)(12525, null);
						let O = (0, a.$kh)(A);
						O.endsWith(u.$9i) && (O = O.substr(0, O.length - u.$9i.length - 1));
						let B;
						switch (R?.verbose) {
							case c.Verbosity.SHORT:
								B = O;
								break;
							case c.Verbosity.LONG:
								B = (0, t.localize)(
									12526,
									null,
									this.getUriLabel((0, a.$nh)((0, a.$mh)(A), O)),
								);
								break;
							case c.Verbosity.MEDIUM:
							default:
								B = (0, t.localize)(12527, null, O);
								break;
						}
						return R?.verbose === c.Verbosity.SHORT ? B : this.z(B, A);
					}
					w(A, R) {
						let O;
						switch (R?.verbose) {
							case c.Verbosity.LONG:
								O = this.getUriLabel(A);
								break;
							case c.Verbosity.SHORT:
							case c.Verbosity.MEDIUM:
							default:
								O = (0, a.$kh)(A) || E.$lc.sep;
								break;
						}
						return R?.verbose === c.Verbosity.SHORT ? O : this.z(O, A);
					}
					getSeparator(A, R) {
						return (
							this.findFormatting(i.URI.from({ scheme: A, authority: R }))
								?.separator || E.$lc.sep
						);
					}
					getHostLabel(A, R) {
						return (
							this.findFormatting(i.URI.from({ scheme: A, authority: R }))
								?.workspaceSuffix ||
							R ||
							""
						);
					}
					getHostTooltip(A, R) {
						return this.findFormatting(i.URI.from({ scheme: A, authority: R }))
							?.workspaceTooltip;
					}
					registerCachedFormatter(A) {
						const R = (this.g.formatters ??= []);
						let O = R.findIndex(
							(B) => B.scheme === A.scheme && B.authority === A.authority,
						);
						if ((O === -1 && R.length >= D && (O = D - 1), O === -1))
							R.unshift(A);
						else {
							for (let B = O; B > 0; B--) R[B] = R[B - 1];
							R[0] = A;
						}
						return this.c.saveMemento(), this.registerFormatter(A);
					}
					registerFormatter(A) {
						return (
							this.a.push(A),
							this.b.fire({ scheme: A.scheme }),
							{
								dispose: () => {
									(this.a = this.a.filter((R) => R !== A)),
										this.b.fire({ scheme: A.scheme });
								},
							}
						);
					}
					y(A, R, O) {
						let B = R.label.replace(P, (U, z, F, x) => {
							switch (z) {
								case "scheme":
									return A.scheme;
								case "authority":
									return A.authority;
								case "authoritySuffix": {
									const H = A.authority.indexOf("+");
									return H === -1 ? A.authority : A.authority.slice(H + 1);
								}
								case "path":
									return R.stripPathStartingSeparator
										? A.path.slice(A.path[0] === R.separator ? 1 : 0)
										: A.path;
								default: {
									if (F === "query") {
										const { query: H } = A;
										if (H && H[0] === "{" && H[H.length - 1] === "}")
											try {
												return JSON.parse(H)[x] || "";
											} catch {}
									}
									return "";
								}
							}
						});
						return (
							R.normalizeDriveLetter &&
								k(B) &&
								(B = B.charAt(1).toUpperCase() + B.substr(2)),
							R.tildify &&
								!O &&
								this.j &&
								(B = (0, h.$yO)(B, this.j.fsPath, this.h)),
							R.authorityPrefix && A.authority && (B = R.authorityPrefix + B),
							B.replace(T, R.separator)
						);
					}
					z(A, R) {
						const O = this.findFormatting(R),
							B =
								O && typeof O.workspaceSuffix == "string"
									? O.workspaceSuffix
									: void 0;
						return B ? `${A} [${B}]` : A;
					}
				};
				(e.$swc = M),
					(e.$swc = M =
						Ne(
							[
								j(0, r.$r8),
								j(1, u.$Vi),
								j(2, f.$I8),
								j(3, l.$$m),
								j(4, $.$lq),
								j(5, p.$n6),
							],
							M,
						)),
					(0, o.$lK)(c.$3N, M, o.InstantiationType.Delayed);
			},
		),
		