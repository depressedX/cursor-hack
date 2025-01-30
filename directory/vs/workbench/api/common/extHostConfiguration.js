import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/objects.js';
import '../../../base/common/event.js';
import './extHostWorkspace.js';
import './extHost.protocol.js';
import './extHostTypes.js';
import '../../../platform/configuration/common/configuration.js';
import '../../../platform/configuration/common/configurationModels.js';
import '../../../platform/configuration/common/configurationRegistry.js';
import '../../../base/common/types.js';
import '../../../base/common/async.js';
import '../../../platform/instantiation/common/instantiation.js';
import './extHostRpcService.js';
import '../../../platform/log/common/log.js';
import '../../../base/common/uri.js';
define(
			Pe[56],
			Ne([1, 0, 27, 4, 63, 6, 11, 60, 496, 110, 19, 9, 5, 21, 14, 2]),
			function (we, t, e, r, S, N, P, I, l, n, p, y, d, k, g, c) {
				"use strict";
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.$phd = t.$ohd = t.$nhd = void 0);
				function h(w, m) {
					if (m) {
						const E = m.split(".");
						let R = w;
						for (let C = 0; R && C < E.length; C++) R = R[E[C]];
						return R;
					}
				}
				function $(w) {
					return w instanceof c.URI;
				}
				function T(w) {
					return (
						w &&
						w.uri instanceof c.URI &&
						w.languageId &&
						typeof w.languageId == "string"
					);
				}
				function a(w) {
					return w && !w.uri && w.languageId && typeof w.languageId == "string";
				}
				function u(w) {
					return (
						w &&
						w.uri instanceof c.URI &&
						(!w.name || typeof w.name == "string") &&
						(!w.index || typeof w.index == "number")
					);
				}
				function s(w) {
					if ($(w)) return { resource: w };
					if (T(w))
						return { resource: w.uri, overrideIdentifier: w.languageId };
					if (a(w)) return { overrideIdentifier: w.languageId };
					if (u(w)) return { resource: w.uri };
					if (w === null) return { resource: null };
				}
				let f = class {
					constructor(m, E, R) {
						(this.a = m.getProxy(N.$lbb.MainThreadConfiguration)),
							(this.c = E),
							(this.b = R),
							(this.d = new y.$Lh()),
							(this.e = null);
					}
					getConfigProvider() {
						return this.d.wait().then((m) => this.e);
					}
					$initializeConfiguration(m) {
						(this.e = new o(this.a, this.c, m, this.b)), this.d.open();
					}
					$acceptConfigurationChanged(m, E) {
						this.getConfigProvider().then((R) =>
							R.$acceptConfigurationChanged(m, E),
						);
					}
				};
				(t.$nhd = f),
					(t.$nhd = f = wt([rt(0, k.$08), rt(1, S.$m9), rt(2, g.$ik)], f));
				class o {
					constructor(m, E, R, C) {
						(this.a = new r.$re()),
							(this.b = m),
							(this.f = C),
							(this.c = E),
							(this.e = l.$9o.parse(R, C)),
							(this.d = this.k(R.configurationScopes));
					}
					get onDidChangeConfiguration() {
						return this.a && this.a.event;
					}
					$acceptConfigurationChanged(m, E) {
						const R = { data: this.e.toData(), workspace: this.c.workspace };
						(this.e = l.$9o.parse(m, this.f)),
							(this.d = this.k(m.configurationScopes)),
							this.a.fire(this.j(E, R));
					}
					getConfiguration(m, E, R) {
						const C = s(E) || {},
							O = this.g(
								m
									? h(this.e.getValue(void 0, C, this.c.workspace), m)
									: this.e.getValue(void 0, C, this.c.workspace),
							);
						m && this.h(m, C, R?.identifier);
						function A(L) {
							if (L == null) return null;
							if (typeof L == "boolean")
								return L
									? I.ConfigurationTarget.USER
									: I.ConfigurationTarget.WORKSPACE;
							switch (L) {
								case P.ConfigurationTarget.Global:
									return I.ConfigurationTarget.USER;
								case P.ConfigurationTarget.Workspace:
									return I.ConfigurationTarget.WORKSPACE;
								case P.ConfigurationTarget.WorkspaceFolder:
									return I.ConfigurationTarget.WORKSPACE_FOLDER;
							}
						}
						const J = {
							has(L) {
								return typeof h(O, L) < "u";
							},
							get: (L, b) => {
								this.h(m ? `${m}.${L}` : L, C, R?.identifier);
								let F = h(O, L);
								if (typeof F > "u") F = b;
								else {
									let D;
									const M = (z, Q) => {
										if ((0, p.$ng)(z)) {
											let H;
											const B = () => {
												(D = D || (0, e.$vo)(O)), (H = H || h(D, Q));
											};
											return new Proxy(z, {
												get: (U, Z) => {
													if (
														typeof Z == "string" &&
														Z.toLowerCase() === "tojson"
													)
														return B(), () => H;
													if (D) return (H = H || h(D, Q)), H[Z];
													const W = U[Z];
													return typeof Z == "string" ? M(W, `${Q}.${Z}`) : W;
												},
												set: (U, Z, W) => (B(), H && (H[Z] = W), !0),
												deleteProperty: (U, Z) => (B(), H && delete H[Z], !0),
												defineProperty: (U, Z, W) => (
													B(), H && Object.defineProperty(H, Z, W), !0
												),
											});
										}
										return Array.isArray(z) ? (0, e.$vo)(z) : z;
									};
									F = M(F, L);
								}
								return F;
							},
							update: (L, b, F, D) => {
								L = m ? `${m}.${L}` : L;
								const M = A(F);
								return b !== void 0
									? this.b.$updateConfigurationOption(M, L, b, C, D)
									: this.b.$removeConfigurationOption(M, L, C, D);
							},
							inspect: (L) => {
								L = m ? `${m}.${L}` : L;
								const b = this.e.inspect(L, C, this.c.workspace);
								if (b)
									return {
										key: L,
										defaultValue: (0, e.$vo)(
											b.policy?.value ?? b.default?.value,
										),
										globalValue: (0, e.$vo)(
											b.user?.value ?? b.application?.value,
										),
										workspaceValue: (0, e.$vo)(b.workspace?.value),
										workspaceFolderValue: (0, e.$vo)(b.workspaceFolder?.value),
										defaultLanguageValue: (0, e.$vo)(b.default?.override),
										globalLanguageValue: (0, e.$vo)(
											b.user?.override ?? b.application?.override,
										),
										workspaceLanguageValue: (0, e.$vo)(b.workspace?.override),
										workspaceFolderLanguageValue: (0, e.$vo)(
											b.workspaceFolder?.override,
										),
										languageIds: (0, e.$vo)(b.overrideIdentifiers),
									};
							},
						};
						return (
							typeof O == "object" && (0, e.$yo)(J, O, !1), Object.freeze(J)
						);
					}
					g(m) {
						const E = (R) =>
							(0, p.$ng)(R)
								? new Proxy(R, {
										get: (C, O) => E(C[O]),
										set: (C, O, A) => {
											throw new Error(
												`TypeError: Cannot assign to read only property '${String(O)}' of object`,
											);
										},
										deleteProperty: (C, O) => {
											throw new Error(
												`TypeError: Cannot delete read only property '${String(O)}' of object`,
											);
										},
										defineProperty: (C, O) => {
											throw new Error(
												`TypeError: Cannot define property '${String(O)}' for a readonly object`,
											);
										},
										setPrototypeOf: (C) => {
											throw new Error(
												"TypeError: Cannot set prototype for a readonly object",
											);
										},
										isExtensible: () => !1,
										preventExtensions: () => !0,
									})
								: R;
						return E(m);
					}
					h(m, E, R) {
						const C = n.$Xo.test(m)
								? n.ConfigurationScope.RESOURCE
								: this.d.get(m),
							O = R ? `[${R.value}] ` : "";
						if (n.ConfigurationScope.RESOURCE === C) {
							typeof E?.resource > "u" &&
								this.f.warn(
									`${O}Accessing a resource scoped configuration without providing a resource is not expected. To get the effective value for '${m}', provide the URI of a resource or 'null' for any resource.`,
								);
							return;
						}
						if (n.ConfigurationScope.WINDOW === C) {
							E?.resource &&
								this.f.warn(
									`${O}Accessing a window scoped configuration for a resource is not expected. To associate '${m}' to a resource, define its scope to 'resource' in configuration contributions in 'package.json'.`,
								);
							return;
						}
					}
					j(m, E) {
						const R = new l.$$o(m, E, this.e, this.c.workspace, this.f);
						return Object.freeze({
							affectsConfiguration: (C, O) => R.affectsConfiguration(C, s(O)),
						});
					}
					k(m) {
						return m.reduce((E, R) => (E.set(R[0], R[1]), E), new Map());
					}
				}
				(t.$ohd = o), (t.$phd = (0, d.$Mi)("IExtHostConfiguration"));
			},
		),
		