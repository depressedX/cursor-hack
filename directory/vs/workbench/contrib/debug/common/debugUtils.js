define(
			de[396],
			he([1, 0, 37, 9, 54, 82, 23, 17, 33, 24]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$x3 = void 0),
					(e.$l3 = a),
					(e.$m3 = h),
					(e.$n3 = c),
					(e.$o3 = n),
					(e.$p3 = g),
					(e.$q3 = p),
					(e.$r3 = o),
					(e.$s3 = b),
					(e.$t3 = y),
					(e.$u3 = $),
					(e.$v3 = S),
					(e.$w3 = T);
				const u = /{([^}]+)}/g;
				function a(k, L, D) {
					return k.replace(u, function (M, N) {
						return L && N.length > 0 && N[0] !== "_"
							? M
							: D && D.hasOwnProperty(N)
								? D[N]
								: M;
					});
				}
				function h(k) {
					const L = {};
					for (const D of Object.keys(k)) D.startsWith("!") || (L[D] = k[D]);
					return L;
				}
				function c(k) {
					return (
						k.configuration.request === "attach" &&
						!n(k) &&
						(!k.parentSession || c(k.parentSession))
					);
				}
				function n(k) {
					let L = k.configuration.type;
					if (L)
						return (
							L === "vslsShare" &&
								(L = k.configuration.adapterProxy.configuration.type),
							(0, t.$Mf)(L, "extensionhost") ||
							(0, t.$Mf)(L, "pwa-extensionhost")
								? k
								: k.parentSession
									? n(k.parentSession)
									: void 0
						);
				}
				function g(k) {
					return k.type && (k.label || k.program || k.runtime);
				}
				function p(k, L, D) {
					let M,
						N = 0;
					const A = /([^()\[\]{}<>\s+\-/%~#^;=|,`!]|\->)+/g;
					let R = null;
					for (; (R = A.exec(k)); ) {
						const O = R.index + 1,
							B = O + R[0].length;
						if (O <= L && B >= D) {
							(M = R[0]), (N = O);
							break;
						}
					}
					if (M) {
						const O = /(\w|\p{L})+/gu;
						let B = null;
						for (; (B = O.exec(M)) && !(B.index + 1 + N + B[0].length >= D); );
						B && (M = M.substring(0, O.lastIndex));
					}
					return M ? { start: N, end: N + M.length - 1 } : { start: 0, end: 0 };
				}
				async function o(k, L, D, M) {
					if (k.evaluatableExpressionProvider.has(L)) {
						const N = k.evaluatableExpressionProvider.ordered(L),
							A = (0, r.$Lb)(
								await Promise.all(
									N.map(async (R) => {
										try {
											return await R.provideEvaluatableExpression(
												L,
												D,
												M ?? m.CancellationToken.None,
											);
										} catch {
											return;
										}
									}),
								),
							);
						if (A.length > 0) {
							let R = A[0].expression;
							const O = A[0].range;
							return (
								R ||
									(R = L.getLineContent(D.lineNumber).substring(
										O.startColumn - 1,
										O.endColumn - 1,
									)),
								{ range: O, matchingExpression: R }
							);
						}
					} else {
						const N = L.getLineContent(D.lineNumber),
							{ start: A, end: R } = p(N, D.column, D.column),
							O = N.substring(A - 1, R);
						return {
							matchingExpression: O,
							range: new d.$iL(D.lineNumber, A, D.lineNumber, A + O.length),
						};
					}
					return null;
				}
				const f = /^[a-zA-Z][a-zA-Z0-9\+\-\.]+:/;
				function b(k) {
					return !!(k && k.match(f));
				}
				function s(k) {
					if (
						typeof k.path == "string" &&
						!(typeof k.sourceReference == "number" && k.sourceReference > 0)
					) {
						if (b(k.path)) return i.URI.parse(k.path);
						if ((0, w.$nc)(k.path)) return i.URI.file(k.path);
					}
					return k.path;
				}
				function l(k) {
					if (typeof k.path == "object") {
						const L = i.URI.revive(k.path);
						if (L) return L.scheme === C.Schemas.file ? L.fsPath : L.toString();
					}
					return k.path;
				}
				function y(k, L) {
					const D = L ? s : l,
						M = (0, E.$vo)(k);
					return (
						v(M, (N, A) => {
							N && A && (A.path = D(A));
						}),
						M
					);
				}
				function $(k, L) {
					const D = L ? s : l,
						M = (0, E.$vo)(k);
					return (
						v(M, (N, A) => {
							!N && A && (A.path = D(A));
						}),
						M
					);
				}
				function v(k, L) {
					switch (k.type) {
						case "event": {
							const D = k;
							switch (D.event) {
								case "output":
									L(!1, D.body.source);
									break;
								case "loadedSource":
									L(!1, D.body.source);
									break;
								case "breakpoint":
									L(!1, D.body.breakpoint.source);
									break;
								default:
									break;
							}
							break;
						}
						case "request": {
							const D = k;
							switch (D.command) {
								case "setBreakpoints":
									L(!0, D.arguments.source);
									break;
								case "breakpointLocations":
									L(!0, D.arguments.source);
									break;
								case "source":
									L(!0, D.arguments.source);
									break;
								case "gotoTargets":
									L(!0, D.arguments.source);
									break;
								case "launchVSCode":
									D.arguments.args.forEach((M) => L(!1, M));
									break;
								default:
									break;
							}
							break;
						}
						case "response": {
							const D = k;
							if (D.success && D.body)
								switch (D.command) {
									case "stackTrace":
										D.body.stackFrames.forEach((M) => L(!1, M.source));
										break;
									case "loadedSources":
										D.body.sources.forEach((M) => L(!1, M));
										break;
									case "scopes":
										D.body.scopes.forEach((M) => L(!1, M.source));
										break;
									case "setFunctionBreakpoints":
										D.body.breakpoints.forEach((M) => L(!1, M.source));
										break;
									case "setBreakpoints":
										D.body.breakpoints.forEach((M) => L(!1, M.source));
										break;
									case "disassemble":
										D.body?.instructions.forEach((N) => L(!1, N.location));
										break;
									case "locations":
										L(!1, D.body?.source);
										break;
									default:
										break;
								}
							break;
						}
					}
				}
				function S(k) {
					return k
						.filter((L) => !L.presentation?.hidden)
						.sort((L, D) =>
							L.presentation
								? D.presentation
									? L.presentation.group
										? D.presentation.group
											? L.presentation.group !== D.presentation.group
												? L.presentation.group.localeCompare(
														D.presentation.group,
													)
												: I(L.presentation.order, D.presentation.order)
											: -1
										: D.presentation.group
											? 1
											: I(L.presentation.order, D.presentation.order)
									: -1
								: D.presentation
									? 1
									: 0,
						);
				}
				function I(k, L) {
					return typeof k != "number"
						? typeof L != "number"
							? 0
							: 1
						: typeof L != "number"
							? -1
							: k - L;
				}
				async function T(k, L) {
					const D = k.getValue("debug.saveBeforeStart", {
						overrideIdentifier: L.activeTextEditorLanguageId,
					});
					if (
						D !== "none" &&
						(await L.saveAll(), D === "allEditorsInActiveGroup")
					) {
						const M = L.activeEditorPane;
						M &&
							M.input.resource?.scheme === C.Schemas.untitled &&
							(await L.save({ editor: M.input, groupId: M.group.id }));
					}
					await k.reloadConfiguration();
				}
				const P = (k, L) =>
					!k || !L
						? k === L
						: k.name === L.name &&
							k.path === L.path &&
							k.sourceReference === L.sourceReference;
				e.$x3 = P;
			},
		),
		