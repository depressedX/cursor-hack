import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/types.js';
import './extHostTypes.js';
import './extHostTypeConverters.js';
import '../../../base/common/objects.js';
import './extHost.protocol.js';
import '../../../base/common/arrays.js';
import '../../../platform/log/common/log.js';
import '../../../base/common/marshalling.js';
import '../../../editor/common/core/range.js';
import '../../../editor/common/core/position.js';
import '../../../base/common/uri.js';
import '../../../base/common/lifecycle.js';
import '../../../platform/instantiation/common/instantiation.js';
import './extHostRpcService.js';
import './extHostTestItem.js';
import '../../../base/common/buffer.js';
import '../../services/extensions/common/proxyIdentifier.js';
import '../../../base/common/errorMessage.js';
import '../../../base/common/stopwatch.js';
import '../../../platform/telemetry/common/telemetryUtils.js';
import './extHostTelemetry.js';
import '../../../base/common/uuid.js';
define(
			Pe[44],
			Ne([
				1, 0, 19, 11, 17, 27, 6, 20, 14, 50, 39, 79, 2, 3, 5, 21, 303, 22, 74,
				73, 57, 140, 143, 38,
			]),
			function (
				we,
				t,
				e,
				r,
				S,
				N,
				P,
				I,
				l,
				n,
				p,
				y,
				d,
				k,
				g,
				c,
				h,
				$,
				T,
				a,
				u,
				s,
				f,
				o,
			) {
				"use strict";
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.$_db = t.$$db = t.$0db = t.$9db = t.$8db = t.$7db = void 0),
					(r = tt(r)),
					(S = tt(S));
				let w = class {
					#e;
					#t;
					#n;
					constructor(A, J, L) {
						(this.b = new Map()),
							(this.c = new Map()),
							(this.#e = A.getProxy(P.$lbb.MainThreadCommands)),
							(this.d = J),
							(this.#n = L),
							(this.#t = A.getProxy(P.$lbb.MainThreadTelemetry)),
							(this.converter = new m(
								this,
								(b) => {
									const F = this.c.get(b);
									return F?.result === R.Void ? F : void 0;
								},
								J,
							)),
							(this.f = [
								{
									processArgument(b) {
										return (0, n.$ji)(b);
									},
								},
								{
									processArgument(b) {
										return (0, N.$xo)(b, function (F) {
											if (p.$iL.isIRange(F)) return S.Range.to(F);
											if (y.$hL.isIPosition(F)) return S.Position.to(F);
											if (p.$iL.isIRange(F.range) && d.URI.isUri(F.uri))
												return S.location.to(F);
											if (F instanceof $.$Te) return F.buffer.buffer;
											if (!Array.isArray(F)) return F;
										});
									},
								},
							]);
					}
					registerArgumentProcessor(A) {
						this.f.push(A);
					}
					registerApiCommand(A) {
						const J = this.registerCommand(
							!1,
							A.id,
							async (...L) => {
								const b = A.args.map((D, M) => {
										if (!D.validate(L[M]))
											throw new Error(
												`Invalid argument '${D.name}' when running '${A.id}', received: ${typeof L[M] == "object" ? JSON.stringify(L[M], null, "	") : L[M]} `,
											);
										return D.convert(L[M]);
									}),
									F = await this.executeCommand(A.internalId, ...b);
								return A.result.convert(F, L, this.converter);
							},
							void 0,
							{
								description: A.description,
								args: A.args,
								returns: A.result.description,
							},
						);
						return (
							this.c.set(A.id, A),
							new r.$nbb(() => {
								J.dispose(), this.c.delete(A.id);
							})
						);
					}
					registerCommand(A, J, L, b, F, D) {
						if (
							(this.d.trace("ExtHostCommands#registerCommand", J),
							!J.trim().length)
						)
							throw new Error("invalid id");
						if (this.b.has(J)) throw new Error(`command '${J}' already exists`);
						return (
							this.b.set(J, {
								callback: L,
								thisArg: b,
								metadata: F,
								extension: D,
							}),
							A && this.#e.$registerCommand(J),
							new r.$nbb(() => {
								this.b.delete(J) && A && this.#e.$unregisterCommand(J);
							})
						);
					}
					executeCommand(A, ...J) {
						return (
							this.d.trace("ExtHostCommands#executeCommand", A),
							this.g(A, J, !0)
						);
					}
					async g(A, J, L) {
						if (this.b.has(A))
							return this.#e.$fireCommandActivationEvent(A), this.h(A, J, !1);
						{
							let b = !1;
							const F = (0, N.$xo)(J, function (D) {
								if (D instanceof r.$obb) return S.Position.from(D);
								if (D instanceof r.$pbb) return S.Range.from(D);
								if (D instanceof r.$Bbb) return S.location.from(D);
								if (r.$Rcb.isNotebookRange(D)) return S.NotebookRange.from(D);
								if (D instanceof ArrayBuffer)
									return (b = !0), $.$Te.wrap(new Uint8Array(D));
								if (D instanceof Uint8Array) return (b = !0), $.$Te.wrap(D);
								if (D instanceof $.$Te) return (b = !0), D;
								if (!Array.isArray(D)) return D;
							});
							try {
								const D = await this.#e.$executeCommand(
									A,
									b ? new T.$uO(F) : F,
									L,
								);
								return (0, n.$ji)(D);
							} catch (D) {
								if (D instanceof Error && D.message === "$executeCommand:retry")
									return this.g(A, J, !1);
								throw D;
							}
						}
					}
					async h(A, J, L) {
						const b = this.b.get(A);
						if (!b) throw new Error("Unknown command");
						const { callback: F, thisArg: D, metadata: M } = b;
						if (M?.args)
							for (let Q = 0; Q < M.args.length; Q++)
								try {
									(0, e.$Cg)(J[Q], M.args[Q].constraint);
								} catch {
									throw new Error(
										`Running the contributed command: '${A}' failed. Illegal argument '${M.args[Q].name}' - ${M.args[Q].description}`,
									);
								}
						const z = u.$le.create();
						try {
							return await F.apply(D, J);
						} catch (Q) {
							if (A === this.converter.delegatingCommandId) {
								const H = this.converter.getActualCommand(...J);
								H && (A = H.command);
							}
							if ((this.d.error(Q, A, b.extension?.identifier), !L)) throw Q;
							if (b.extension?.identifier) {
								const H = this.#n.onExtensionError(b.extension.identifier, Q);
								this.d.trace(
									"forwarded error to extension?",
									H,
									b.extension?.identifier,
								);
							}
							throw new (class extends Error {
								constructor() {
									super((0, a.$xj)(Q)),
										(this.id = A),
										(this.source =
											b.extension?.displayName ?? b.extension?.name);
								}
							})();
						} finally {
							this.j(b, A, z.elapsed());
						}
					}
					j(A, J, L) {
						A.extension &&
							this.#t.$publicLog2("Extension:ActionExecuted", {
								extensionId: A.extension.identifier.value,
								id: new s.$Qp(J),
								duration: L,
							});
					}
					$executeContributedCommand(A, ...J) {
						this.d.trace("ExtHostCommands#$executeContributedCommand", A);
						const L = this.b.get(A);
						return L
							? ((J = J.map((b) =>
									this.f.reduce(
										(F, D) => D.processArgument(F, L.extension?.identifier),
										b,
									),
								)),
								this.h(A, J, !0))
							: Promise.reject(
									new Error(`Contributed command '${A}' does not exist.`),
								);
					}
					getCommands(A = !1) {
						return (
							this.d.trace("ExtHostCommands#getCommands", A),
							this.#e
								.$getCommands()
								.then((J) => (A && (J = J.filter((L) => L[0] !== "_")), J))
						);
					}
					$getContributedCommandMetadata() {
						const A = Object.create(null);
						for (const [J, L] of this.b) {
							const { metadata: b } = L;
							b && (A[J] = b);
						}
						return Promise.resolve(A);
					}
				};
				(t.$7db = w),
					(t.$7db = w = wt([rt(0, c.$08), rt(1, l.$ik), rt(2, f.$6db)], w)),
					(t.$8db = (0, g.$Mi)("IExtHostCommands"));
				class m {
					constructor(A, J, L) {
						(this.d = A),
							(this.f = J),
							(this.g = L),
							(this.delegatingCommandId = `__vsc${(0, o.$9g)()}`),
							(this.b = new Map()),
							(this.c = 0),
							this.d.registerCommand(
								!0,
								this.delegatingCommandId,
								this.h,
								this,
							);
					}
					toInternal(A, J) {
						if (!A) return;
						const L = {
							$ident: void 0,
							id: A.command,
							title: A.title,
							tooltip: A.tooltip,
						};
						if (!A.command) return L;
						const b = this.f(A.command);
						if (b)
							(L.id = b.internalId),
								(L.arguments = b.args.map((F, D) =>
									F.convert(A.arguments && A.arguments[D]),
								));
						else if ((0, I.$Pb)(A.arguments)) {
							const F = `${A.command} /${++this.c}`;
							this.b.set(F, A),
								J.add(
									(0, k.$Yc)(() => {
										this.b.delete(F),
											this.g.trace("CommandsConverter#DISPOSE", F);
									}),
								),
								(L.$ident = F),
								(L.id = this.delegatingCommandId),
								(L.arguments = [F]),
								this.g.trace("CommandsConverter#CREATE", A.command, F);
						}
						return L;
					}
					fromInternal(A) {
						return typeof A.$ident == "string"
							? this.b.get(A.$ident)
							: { command: A.id, title: A.title, arguments: A.arguments };
					}
					getActualCommand(...A) {
						return this.b.get(A[0]);
					}
					h(...A) {
						const J = this.getActualCommand(...A);
						return (
							this.g.trace(
								"CommandsConverter#EXECUTE",
								A[0],
								J ? J.command : "MISSING",
							),
							J
								? this.d.executeCommand(J.command, ...(J.arguments || []))
								: Promise.reject(
										`Actual command not found, wanted to execute ${A[0]}`,
									)
						);
					}
				}
				t.$9db = m;
				class E {
					static {
						this.Uri = new E(
							"uri",
							"Uri of a text document",
							(A) => d.URI.isUri(A),
							(A) => A,
						);
					}
					static {
						this.Position = new E(
							"position",
							"A position in a text document",
							(A) => r.$obb.isPosition(A),
							S.Position.from,
						);
					}
					static {
						this.Range = new E(
							"range",
							"A range in a text document",
							(A) => r.$pbb.isRange(A),
							S.Range.from,
						);
					}
					static {
						this.Selection = new E(
							"selection",
							"A selection in a text document",
							(A) => r.$qbb.isSelection(A),
							S.Selection.from,
						);
					}
					static {
						this.Number = new E(
							"number",
							"",
							(A) => typeof A == "number",
							(A) => A,
						);
					}
					static {
						this.String = new E(
							"string",
							"",
							(A) => typeof A == "string",
							(A) => A,
						);
					}
					static {
						this.StringArray = E.Arr(E.String);
					}
					static Arr(A) {
						return new E(
							`${A.name}_array`,
							`Array of ${A.name}, ${A.description}`,
							(J) => Array.isArray(J) && J.every((L) => A.validate(L)),
							(J) => J.map((L) => A.convert(L)),
						);
					}
					static {
						this.CallHierarchyItem = new E(
							"item",
							"A call hierarchy item",
							(A) => A instanceof r.$Nbb,
							S.CallHierarchyItem.from,
						);
					}
					static {
						this.TypeHierarchyItem = new E(
							"item",
							"A type hierarchy item",
							(A) => A instanceof r.$adb,
							S.TypeHierarchyItem.from,
						);
					}
					static {
						this.TestItem = new E(
							"testItem",
							"A VS Code TestItem",
							(A) => A instanceof h.$Zdb,
							S.TestItem.from,
						);
					}
					constructor(A, J, L, b) {
						(this.name = A),
							(this.description = J),
							(this.validate = L),
							(this.convert = b);
					}
					optional() {
						return new E(
							this.name,
							`(optional) ${this.description}`,
							(A) => A == null || this.validate(A),
							(A) =>
								A === void 0 ? void 0 : A === null ? null : this.convert(A),
						);
					}
					with(A, J) {
						return new E(
							A ?? this.name,
							J ?? this.description,
							this.validate,
							this.convert,
						);
					}
				}
				t.$0db = E;
				class R {
					static {
						this.Void = new R("no result", (A) => A);
					}
					constructor(A, J) {
						(this.description = A), (this.convert = J);
					}
				}
				t.$$db = R;
				class C {
					constructor(A, J, L, b, F) {
						(this.id = A),
							(this.internalId = J),
							(this.description = L),
							(this.args = b),
							(this.result = F);
					}
				}
				t.$_db = C;
			},
		),
		