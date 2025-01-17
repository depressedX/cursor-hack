import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/common/objects.js';
import '../../../../base/common/strings.js';
import '../../../../base/common/assert.js';
import '../../../../base/common/path.js';
import '../../../../base/common/types.js';
import '../../../../base/common/uuid.js';
import '../../../../base/common/platform.js';
import '../../../../base/common/severity.js';
import '../../../../base/common/uri.js';
import '../../../../base/common/parsers.js';
import '../../../../base/common/arrays.js';
import '../../../../base/common/network.js';
import '../../../../platform/markers/common/markers.js';
import '../../../services/extensions/common/extensionsRegistry.js';
import '../../../../base/common/event.js';
import '../../../../platform/files/common/files.js';
define(
		de[570],
		he([
			1, 0, 4, 82, 37, 229, 54, 28, 47, 12, 111, 9, 1500, 24, 23, 90, 175, 6,
			22,
		]),
		function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$03 =
					e.$93 =
					e.$83 =
					e.Schemas =
					e.$73 =
					e.$63 =
					e.Config =
					e.ApplyToKind =
					e.ProblemLocationKind =
					e.FileLocationKind =
						void 0),
				(e.$33 = y),
				(e.$43 = $),
				(e.$53 = S),
				(i = mt(i)),
				(w = mt(w)),
				(E = mt(E)),
				(d = mt(d)),
				(m = mt(m)),
				(r = mt(r)),
				(u = xi(u));
			var b;
			(function (z) {
				(z[(z.Default = 0)] = "Default"),
					(z[(z.Relative = 1)] = "Relative"),
					(z[(z.Absolute = 2)] = "Absolute"),
					(z[(z.AutoDetect = 3)] = "AutoDetect"),
					(z[(z.Search = 4)] = "Search");
			})(b || (e.FileLocationKind = b = {})),
				(function (z) {
					function F(x) {
						return (
							(x = x.toLowerCase()),
							x === "absolute"
								? z.Absolute
								: x === "relative"
									? z.Relative
									: x === "autodetect"
										? z.AutoDetect
										: x === "search"
											? z.Search
											: void 0
						);
					}
					z.fromString = F;
				})(b || (e.FileLocationKind = b = {}));
			var s;
			(function (z) {
				(z[(z.File = 0)] = "File"), (z[(z.Location = 1)] = "Location");
			})(s || (e.ProblemLocationKind = s = {})),
				(function (z) {
					function F(x) {
						return (
							(x = x.toLowerCase()),
							x === "file" ? z.File : x === "location" ? z.Location : void 0
						);
					}
					z.fromString = F;
				})(s || (e.ProblemLocationKind = s = {}));
			var l;
			(function (z) {
				(z[(z.allDocuments = 0)] = "allDocuments"),
					(z[(z.openDocuments = 1)] = "openDocuments"),
					(z[(z.closedDocuments = 2)] = "closedDocuments");
			})(l || (e.ApplyToKind = l = {})),
				(function (z) {
					function F(x) {
						return (
							(x = x.toLowerCase()),
							x === "alldocuments"
								? z.allDocuments
								: x === "opendocuments"
									? z.openDocuments
									: x === "closeddocuments"
										? z.closedDocuments
										: void 0
						);
					}
					z.fromString = F;
				})(l || (e.ApplyToKind = l = {}));
			function y(z) {
				return !!(z && d.$lg(z.name));
			}
			async function $(z, F, x) {
				const H = F.fileLocation;
				let q;
				if (H === b.Absolute) q = z;
				else if (H === b.Relative && F.filePrefix && d.$lg(F.filePrefix))
					q = (0, C.$oc)(F.filePrefix, z);
				else if (H === b.AutoDetect) {
					const V = i.$vo(F);
					if (((V.fileLocation = b.Relative), x)) {
						const G = await $(z, V);
						let K;
						try {
							K = await x.stat(G);
						} catch {}
						if (K) return G;
					}
					return (V.fileLocation = b.Absolute), $(z, V);
				} else if (H === b.Search && x) {
					const V = x.getProvider(n.Schemas.file);
					if ((V && (q = (await v(z, V, F.filePrefix))?.path), !q)) {
						const G = i.$vo(F);
						return (G.fileLocation = b.Absolute), $(z, G);
					}
				}
				if (q === void 0)
					throw new Error(
						"FileLocationKind is not actionable. Does the matcher have a filePrefix? This should never happen.",
					);
				return (
					(q = (0, C.$mc)(q)),
					(q = q.replace(/\\/g, "/")),
					q[0] !== "/" && (q = "/" + q),
					F.uriProvider !== void 0 ? F.uriProvider(q) : a.URI.file(q)
				);
			}
			async function v(z, F, x) {
				const H = new Set(
					(0, c.$6b)(x.exclude || []).map((V) => a.URI.file(V).path),
				);
				async function q(V) {
					if (H.has(V.path)) return;
					const G = await F.readdir(V),
						K = [];
					for (const [J, W] of G) {
						if (W === f.FileType.Directory) {
							K.push(a.URI.joinPath(V, J));
							continue;
						}
						if (W === f.FileType.File) {
							const X = a.URI.joinPath(V, J);
							if (X.path.endsWith(z)) return X;
						}
					}
					for (const J of K) {
						const W = await q(J);
						if (W) return W;
					}
				}
				for (const V of (0, c.$6b)(x.include || [])) {
					const G = await q(a.URI.file(V));
					if (G) return G;
				}
			}
			function S(z, F) {
				const x = z.pattern;
				return Array.isArray(x) ? new k(z, F) : new P(z, F);
			}
			const I =
				r.OS === r.OperatingSystem.Windows
					? `\r
`
					: `
`;
			class T {
				constructor(F, x) {
					(this.a = F), (this.b = x);
				}
				handle(F, x = 0) {
					return { match: null, continue: !1 };
				}
				next(F) {
					return null;
				}
				c(F, x, H) {
					return F
						? (this.e(F, "file", x, H, !0),
							this.d(F, "message", x, H, !0),
							this.e(F, "code", x, H, !0),
							this.e(F, "severity", x, H, !0),
							this.e(F, "location", x, H, !0),
							this.e(F, "line", x, H),
							this.e(F, "character", x, H),
							this.e(F, "endLine", x, H),
							this.e(F, "endCharacter", x, H),
							!0)
						: !1;
				}
				d(F, x, H, q, V = !1) {
					const G = H[x];
					if (d.$sg(F[x])) this.e(F, x, H, q, V);
					else if (!d.$sg(G) && G < q.length) {
						let K = q[G];
						V && (K = w.$sf(K)), (F[x] += I + K);
					}
				}
				e(F, x, H, q, V = !1) {
					const G = H[x];
					if (d.$sg(F[x]) && !d.$sg(G) && G < q.length) {
						let K = q[G];
						K !== void 0 && (V && (K = w.$sf(K)), (F[x] = K));
					}
				}
				f(F) {
					try {
						const x = this.h(F);
						if (F.file && x && F.message) {
							const H = {
								severity: this.l(F),
								startLineNumber: x.startLineNumber,
								startColumn: x.startCharacter,
								endLineNumber: x.endLineNumber,
								endColumn: x.endCharacter,
								message: F.message,
							};
							return (
								F.code !== void 0 && (H.code = F.code),
								this.a.source !== void 0 && (H.source = this.a.source),
								{ description: this.a, resource: this.g(F.file), marker: H }
							);
						}
					} catch {
						console.error(
							`Failed to convert problem data into match: ${JSON.stringify(F)}`,
						);
					}
				}
				g(F) {
					return $(F, this.a, this.b);
				}
				h(F) {
					if (F.kind === s.File) return this.k(0, 0, 0, 0);
					if (F.location) return this.j(F.location);
					if (!F.line) return null;
					const x = parseInt(F.line),
						H = F.character ? parseInt(F.character) : void 0,
						q = F.endLine ? parseInt(F.endLine) : void 0,
						V = F.endCharacter ? parseInt(F.endCharacter) : void 0;
					return this.k(x, H, q, V);
				}
				j(F) {
					if (!F || !F.match(/(\d+|\d+,\d+|\d+,\d+,\d+,\d+)/)) return null;
					const x = F.split(","),
						H = parseInt(x[0]),
						q = x.length > 1 ? parseInt(x[1]) : void 0;
					return x.length > 3
						? this.k(H, q, parseInt(x[2]), parseInt(x[3]))
						: this.k(H, q, void 0, void 0);
				}
				k(F, x, H, q) {
					return x !== void 0 && q !== void 0
						? {
								startLineNumber: F,
								startCharacter: x,
								endLineNumber: H || F,
								endCharacter: q,
							}
						: x !== void 0
							? {
									startLineNumber: F,
									startCharacter: x,
									endLineNumber: F,
									endCharacter: x,
								}
							: {
									startLineNumber: F,
									startCharacter: 1,
									endLineNumber: F,
									endCharacter: 2 ** 31 - 1,
								};
				}
				l(F) {
					let x = null;
					if (F.severity) {
						const H = F.severity;
						H &&
							((x = u.default.fromValue(H)),
							x === u.default.Ignore &&
								(H === "E"
									? (x = u.default.Error)
									: H === "W"
										? (x = u.default.Warning)
										: (H === "I" || w.$Mf(H, "hint") || w.$Mf(H, "note")) &&
											(x = u.default.Info)));
					}
					return (
						(x === null || x === u.default.Ignore) &&
							(x = this.a.severity || u.default.Error),
						g.MarkerSeverity.fromSeverity(x)
					);
				}
			}
			class P extends T {
				constructor(F, x) {
					super(F, x), (this.m = F.pattern);
				}
				get matchLength() {
					return 1;
				}
				handle(F, x = 0) {
					E.ok(F.length - x === 1);
					const H = Object.create(null);
					this.m.kind !== void 0 && (H.kind = this.m.kind);
					const q = this.m.regexp.exec(F[x]);
					if (q) {
						this.c(H, this.m, q);
						const V = this.f(H);
						if (V) return { match: V, continue: !1 };
					}
					return { match: null, continue: !1 };
				}
				next(F) {
					return null;
				}
			}
			class k extends T {
				constructor(F, x) {
					super(F, x), (this.m = F.pattern);
				}
				get matchLength() {
					return this.m.length;
				}
				handle(F, x = 0) {
					E.ok(F.length - x === this.m.length), (this.n = Object.create(null));
					let H = this.n;
					H.kind = this.m[0].kind;
					for (let G = 0; G < this.m.length; G++) {
						const K = this.m[G],
							J = K.regexp.exec(F[G + x]);
						if (J)
							K.loop && G === this.m.length - 1 && (H = i.$vo(H)),
								this.c(H, K, J);
						else return { match: null, continue: !1 };
					}
					const q = !!this.m[this.m.length - 1].loop;
					q || (this.n = void 0);
					const V = H ? this.f(H) : null;
					return { match: V || null, continue: q };
				}
				next(F) {
					const x = this.m[this.m.length - 1];
					E.ok(x.loop === !0 && this.n !== null);
					const H = x.regexp.exec(F);
					if (!H) return (this.n = void 0), null;
					const q = i.$vo(this.n);
					let V;
					return this.c(q, x, H) && (V = this.f(q)), V || null;
				}
			}
			var L;
			(function (z) {
				let F;
				(function (J) {
					function W(X) {
						const Y = X;
						return Y && d.$lg(Y.regexp);
					}
					J.is = W;
				})((F = z.CheckedProblemPattern || (z.CheckedProblemPattern = {})));
				let x;
				(function (J) {
					function W(X) {
						const Y = X;
						return Y && d.$lg(Y.name);
					}
					J.is = W;
				})((x = z.NamedProblemPattern || (z.NamedProblemPattern = {})));
				let H;
				(function (J) {
					function W(X) {
						const Y = X;
						return Y && x.is(Y) && d.$lg(Y.regexp);
					}
					J.is = W;
				})(
					(H =
						z.NamedCheckedProblemPattern ||
						(z.NamedCheckedProblemPattern = {})),
				);
				let q;
				(function (J) {
					function W(X) {
						return X && Array.isArray(X);
					}
					J.is = W;
				})((q = z.MultiLineProblemPattern || (z.MultiLineProblemPattern = {})));
				let V;
				(function (J) {
					function W(X) {
						if (!q.is(X)) return !1;
						for (const Y of X) if (!z.CheckedProblemPattern.is(Y)) return !1;
						return !0;
					}
					J.is = W;
				})(
					(V =
						z.MultiLineCheckedProblemPattern ||
						(z.MultiLineCheckedProblemPattern = {})),
				);
				let G;
				(function (J) {
					function W(X) {
						const Y = X;
						return (
							Y &&
							d.$lg(Y.name) &&
							Array.isArray(Y.patterns) &&
							V.is(Y.patterns)
						);
					}
					J.is = W;
				})(
					(G =
						z.NamedMultiLineCheckedProblemPattern ||
						(z.NamedMultiLineCheckedProblemPattern = {})),
				);
				function K(J) {
					return d.$lg(J.name);
				}
				z.isNamedProblemMatcher = K;
			})(L || (e.Config = L = {}));
			class D extends h.$23 {
				constructor(F) {
					super(F);
				}
				parse(F) {
					if (L.NamedMultiLineCheckedProblemPattern.is(F)) return this.c(F);
					if (L.MultiLineCheckedProblemPattern.is(F)) return this.d(F);
					if (L.NamedCheckedProblemPattern.is(F)) {
						const x = this.b(F);
						return (x.name = F.name), x;
					} else
						return L.CheckedProblemPattern.is(F)
							? this.b(F)
							: (this.error((0, t.localize)(9856, null)), null);
				}
				b(F) {
					const x = this.e(F, !0);
					return x === void 0
						? null
						: (x.kind === void 0 && (x.kind = s.Location),
							this.f([x]) ? x : null);
				}
				c(F) {
					const x = this.d(F.patterns);
					return x
						? { name: F.name, label: F.label ? F.label : F.name, patterns: x }
						: null;
				}
				d(F) {
					const x = [];
					for (let H = 0; H < F.length; H++) {
						const q = this.e(F[H], !1);
						if (q === void 0) return null;
						H < F.length - 1 &&
							!d.$sg(q.loop) &&
							q.loop &&
							((q.loop = !1), this.error((0, t.localize)(9857, null))),
							x.push(q);
					}
					return (
						x[0].kind === void 0 && (x[0].kind = s.Location),
						this.f(x) ? x : null
					);
				}
				e(F, x) {
					const H = this.g(F.regexp);
					if (H === void 0) return;
					let q = { regexp: H };
					F.kind && (q.kind = s.fromString(F.kind));
					function V(G, K, J, W) {
						const X = K[W];
						typeof X == "number" && (G[J] = X);
					}
					if (
						(V(q, F, "file", "file"),
						V(q, F, "location", "location"),
						V(q, F, "line", "line"),
						V(q, F, "character", "column"),
						V(q, F, "endLine", "endLine"),
						V(q, F, "endCharacter", "endColumn"),
						V(q, F, "severity", "severity"),
						V(q, F, "code", "code"),
						V(q, F, "message", "message"),
						(F.loop === !0 || F.loop === !1) && (q.loop = F.loop),
						x)
					)
						if (q.location || q.kind === s.File) {
							const G = { file: 1, message: 0 };
							q = i.$yo(q, G, !1);
						} else {
							const G = { file: 1, line: 2, character: 3, message: 0 };
							q = i.$yo(q, G, !1);
						}
					return q;
				}
				f(F) {
					let x = !1,
						H = !1,
						q = !1,
						V = !1;
					const G = F[0].kind === void 0 ? s.Location : F[0].kind;
					return (
						F.forEach((K, J) => {
							J !== 0 && K.kind && this.error((0, t.localize)(9858, null)),
								(x = x || !d.$sg(K.file)),
								(H = H || !d.$sg(K.message)),
								(q = q || !d.$sg(K.location)),
								(V = V || !d.$sg(K.line));
						}),
						x && H
							? G === s.Location && !(q || V)
								? (this.error((0, t.localize)(9860, null)), !1)
								: !0
							: (this.error((0, t.localize)(9859, null)), !1)
					);
				}
				g(F) {
					let x;
					try {
						x = new RegExp(F);
					} catch {
						this.error((0, t.localize)(9861, null, F));
					}
					return x;
				}
			}
			e.$63 = D;
			class M {
				constructor(F, x = new h.$13()) {
					(this.a = F), (this.b = x);
				}
				info(F) {
					(this.b.state = h.ValidationState.Info), this.a.info(F);
				}
				warn(F) {
					(this.b.state = h.ValidationState.Warning), this.a.warn(F);
				}
				error(F) {
					(this.b.state = h.ValidationState.Error), this.a.error(F);
				}
				fatal(F) {
					(this.b.state = h.ValidationState.Fatal), this.a.error(F);
				}
				get status() {
					return this.b;
				}
			}
			e.$73 = M;
			var N;
			(function (z) {
				(z.ProblemPattern = {
					default: {
						regexp: "^([^\\\\s].*)\\\\((\\\\d+,\\\\d+)\\\\):\\\\s*(.*)$",
						file: 1,
						location: 2,
						message: 3,
					},
					type: "object",
					additionalProperties: !1,
					properties: {
						regexp: {
							type: "string",
							description: (0, t.localize)(9862, null),
						},
						kind: { type: "string", description: (0, t.localize)(9863, null) },
						file: { type: "integer", description: (0, t.localize)(9864, null) },
						location: {
							type: "integer",
							description: (0, t.localize)(9865, null),
						},
						line: { type: "integer", description: (0, t.localize)(9866, null) },
						column: {
							type: "integer",
							description: (0, t.localize)(9867, null),
						},
						endLine: {
							type: "integer",
							description: (0, t.localize)(9868, null),
						},
						endColumn: {
							type: "integer",
							description: (0, t.localize)(9869, null),
						},
						severity: {
							type: "integer",
							description: (0, t.localize)(9870, null),
						},
						code: { type: "integer", description: (0, t.localize)(9871, null) },
						message: {
							type: "integer",
							description: (0, t.localize)(9872, null),
						},
						loop: { type: "boolean", description: (0, t.localize)(9873, null) },
					},
				}),
					(z.NamedProblemPattern = i.$vo(z.ProblemPattern)),
					(z.NamedProblemPattern.properties =
						i.$vo(z.NamedProblemPattern.properties) || {}),
					(z.NamedProblemPattern.properties.name = {
						type: "string",
						description: (0, t.localize)(9874, null),
					}),
					(z.MultiLineProblemPattern = {
						type: "array",
						items: z.ProblemPattern,
					}),
					(z.NamedMultiLineProblemPattern = {
						type: "object",
						additionalProperties: !1,
						properties: {
							name: {
								type: "string",
								description: (0, t.localize)(9875, null),
							},
							patterns: {
								type: "array",
								description: (0, t.localize)(9876, null),
								items: z.ProblemPattern,
							},
						},
					}),
					(z.WatchingPattern = {
						type: "object",
						additionalProperties: !1,
						properties: {
							regexp: {
								type: "string",
								description: (0, t.localize)(9877, null),
							},
							file: {
								type: "integer",
								description: (0, t.localize)(9878, null),
							},
						},
					}),
					(z.PatternType = {
						anyOf: [
							{ type: "string", description: (0, t.localize)(9879, null) },
							z.ProblemPattern,
							z.MultiLineProblemPattern,
						],
						description: (0, t.localize)(9880, null),
					}),
					(z.ProblemMatcher = {
						type: "object",
						additionalProperties: !1,
						properties: {
							base: {
								type: "string",
								description: (0, t.localize)(9881, null),
							},
							owner: {
								type: "string",
								description: (0, t.localize)(9882, null),
							},
							source: {
								type: "string",
								description: (0, t.localize)(9883, null),
							},
							severity: {
								type: "string",
								enum: ["error", "warning", "info"],
								description: (0, t.localize)(9884, null),
							},
							applyTo: {
								type: "string",
								enum: ["allDocuments", "openDocuments", "closedDocuments"],
								description: (0, t.localize)(9885, null),
							},
							pattern: z.PatternType,
							fileLocation: {
								oneOf: [
									{
										type: "string",
										enum: ["absolute", "relative", "autoDetect", "search"],
									},
									{
										type: "array",
										prefixItems: [
											{
												type: "string",
												enum: ["absolute", "relative", "autoDetect", "search"],
											},
										],
										minItems: 1,
										maxItems: 1,
										additionalItems: !1,
									},
									{
										type: "array",
										prefixItems: [
											{ type: "string", enum: ["relative", "autoDetect"] },
											{ type: "string" },
										],
										minItems: 2,
										maxItems: 2,
										additionalItems: !1,
										examples: [
											["relative", "${workspaceFolder}"],
											["autoDetect", "${workspaceFolder}"],
										],
									},
									{
										type: "array",
										prefixItems: [
											{ type: "string", enum: ["search"] },
											{
												type: "object",
												properties: {
													include: {
														oneOf: [
															{ type: "string" },
															{ type: "array", items: { type: "string" } },
														],
													},
													exclude: {
														oneOf: [
															{ type: "string" },
															{ type: "array", items: { type: "string" } },
														],
													},
												},
												required: ["include"],
											},
										],
										minItems: 2,
										maxItems: 2,
										additionalItems: !1,
										examples: [
											["search", { include: ["${workspaceFolder}"] }],
											[
												"search",
												{ include: ["${workspaceFolder}"], exclude: [] },
											],
										],
									},
								],
								description: (0, t.localize)(9886, null),
							},
							background: {
								type: "object",
								additionalProperties: !1,
								description: (0, t.localize)(9887, null),
								properties: {
									activeOnStart: {
										type: "boolean",
										description: (0, t.localize)(9888, null),
									},
									beginsPattern: {
										oneOf: [{ type: "string" }, z.WatchingPattern],
										description: (0, t.localize)(9889, null),
									},
									endsPattern: {
										oneOf: [{ type: "string" }, z.WatchingPattern],
										description: (0, t.localize)(9890, null),
									},
								},
							},
							watching: {
								type: "object",
								additionalProperties: !1,
								deprecationMessage: (0, t.localize)(9891, null),
								description: (0, t.localize)(9892, null),
								properties: {
									activeOnStart: {
										type: "boolean",
										description: (0, t.localize)(9893, null),
									},
									beginsPattern: {
										oneOf: [{ type: "string" }, z.WatchingPattern],
										description: (0, t.localize)(9894, null),
									},
									endsPattern: {
										oneOf: [{ type: "string" }, z.WatchingPattern],
										description: (0, t.localize)(9895, null),
									},
								},
							},
						},
					}),
					(z.LegacyProblemMatcher = i.$vo(z.ProblemMatcher)),
					(z.LegacyProblemMatcher.properties =
						i.$vo(z.LegacyProblemMatcher.properties) || {}),
					(z.LegacyProblemMatcher.properties.watchedTaskBeginsRegExp = {
						type: "string",
						deprecationMessage: (0, t.localize)(9896, null),
						description: (0, t.localize)(9897, null),
					}),
					(z.LegacyProblemMatcher.properties.watchedTaskEndsRegExp = {
						type: "string",
						deprecationMessage: (0, t.localize)(9898, null),
						description: (0, t.localize)(9899, null),
					}),
					(z.NamedProblemMatcher = i.$vo(z.ProblemMatcher)),
					(z.NamedProblemMatcher.properties =
						i.$vo(z.NamedProblemMatcher.properties) || {}),
					(z.NamedProblemMatcher.properties.name = {
						type: "string",
						description: (0, t.localize)(9900, null),
					}),
					(z.NamedProblemMatcher.properties.label = {
						type: "string",
						description: (0, t.localize)(9901, null),
					});
			})(N || (e.Schemas = N = {}));
			const A = p.$n2.registerExtensionPoint({
				extensionPoint: "problemPatterns",
				jsonSchema: {
					description: (0, t.localize)(9902, null),
					type: "array",
					items: {
						anyOf: [N.NamedProblemPattern, N.NamedMultiLineProblemPattern],
					},
				},
			});
			class R {
				constructor() {
					(this.a = Object.create(null)),
						this.c(),
						(this.b = new Promise((F, x) => {
							A.setHandler((H, q) => {
								try {
									q.removed.forEach((V) => {
										const G = V.value;
										for (const K of G) this.a[K.name] && delete this.a[K.name];
									}),
										q.added.forEach((V) => {
											const G = V.value,
												K = new D(new M(V.collector));
											for (const J of G) {
												if (L.NamedMultiLineCheckedProblemPattern.is(J)) {
													const W = K.parse(J);
													K.problemReporter.status.state <
													h.ValidationState.Error
														? this.add(W.name, W.patterns)
														: (V.collector.error((0, t.localize)(9903, null)),
															V.collector.error(JSON.stringify(J, void 0, 4)));
												} else if (L.NamedProblemPattern.is(J)) {
													const W = K.parse(J);
													K.problemReporter.status.state <
													h.ValidationState.Error
														? this.add(J.name, W)
														: (V.collector.error((0, t.localize)(9904, null)),
															V.collector.error(JSON.stringify(J, void 0, 4)));
												}
												K.reset();
											}
										});
								} catch {}
								F(void 0);
							});
						}));
				}
				onReady() {
					return this.b;
				}
				add(F, x) {
					this.a[F] = x;
				}
				get(F) {
					return this.a[F];
				}
				c() {
					this.add("msCompile", {
						regexp:
							/^(?:\s*\d+>)?(\S.*)\((\d+|\d+,\d+|\d+,\d+,\d+,\d+)\)\s*:\s+((?:fatal +)?error|warning|info)\s+(\w+\d+)\s*:\s*(.*)$/,
						kind: s.Location,
						file: 1,
						location: 2,
						severity: 3,
						code: 4,
						message: 5,
					}),
						this.add("gulp-tsc", {
							regexp:
								/^([^\s].*)\((\d+|\d+,\d+|\d+,\d+,\d+,\d+)\):\s+(\d+)\s+(.*)$/,
							kind: s.Location,
							file: 1,
							location: 2,
							code: 3,
							message: 4,
						}),
						this.add("cpp", {
							regexp:
								/^(\S.*)\((\d+|\d+,\d+|\d+,\d+,\d+,\d+)\):\s+(error|warning|info)\s+(C\d+)\s*:\s*(.*)$/,
							kind: s.Location,
							file: 1,
							location: 2,
							severity: 3,
							code: 4,
							message: 5,
						}),
						this.add("csc", {
							regexp:
								/^(\S.*)\((\d+|\d+,\d+|\d+,\d+,\d+,\d+)\):\s+(error|warning|info)\s+(CS\d+)\s*:\s*(.*)$/,
							kind: s.Location,
							file: 1,
							location: 2,
							severity: 3,
							code: 4,
							message: 5,
						}),
						this.add("vb", {
							regexp:
								/^(\S.*)\((\d+|\d+,\d+|\d+,\d+,\d+,\d+)\):\s+(error|warning|info)\s+(BC\d+)\s*:\s*(.*)$/,
							kind: s.Location,
							file: 1,
							location: 2,
							severity: 3,
							code: 4,
							message: 5,
						}),
						this.add("lessCompile", {
							regexp: /^\s*(.*) in file (.*) line no. (\d+)$/,
							kind: s.Location,
							message: 1,
							file: 2,
							line: 3,
						}),
						this.add("jshint", {
							regexp:
								/^(.*):\s+line\s+(\d+),\s+col\s+(\d+),\s(.+?)(?:\s+\((\w)(\d+)\))?$/,
							kind: s.Location,
							file: 1,
							line: 2,
							character: 3,
							message: 4,
							severity: 5,
							code: 6,
						}),
						this.add("jshint-stylish", [
							{ regexp: /^(.+)$/, kind: s.Location, file: 1 },
							{
								regexp:
									/^\s+line\s+(\d+)\s+col\s+(\d+)\s+(.+?)(?:\s+\((\w)(\d+)\))?$/,
								line: 1,
								character: 2,
								message: 3,
								severity: 4,
								code: 5,
								loop: !0,
							},
						]),
						this.add("eslint-compact", {
							regexp:
								/^(.+):\sline\s(\d+),\scol\s(\d+),\s(Error|Warning|Info)\s-\s(.+)\s\((.+)\)$/,
							file: 1,
							kind: s.Location,
							line: 2,
							character: 3,
							severity: 4,
							message: 5,
							code: 6,
						}),
						this.add("eslint-stylish", [
							{
								regexp: /^((?:[a-zA-Z]:)*[./\\]+.*?)$/,
								kind: s.Location,
								file: 1,
							},
							{
								regexp:
									/^\s+(\d+):(\d+)\s+(error|warning|info)\s+(.+?)(?:\s\s+(.*))?$/,
								line: 1,
								character: 2,
								severity: 3,
								message: 4,
								code: 5,
								loop: !0,
							},
						]),
						this.add("go", {
							regexp: /^([^:]*: )?((.:)?[^:]*):(\d+)(:(\d+))?: (.*)$/,
							kind: s.Location,
							file: 2,
							line: 4,
							character: 6,
							message: 7,
						});
				}
			}
			e.$83 = new R();
			class O extends h.$23 {
				constructor(F) {
					super(F);
				}
				parse(F) {
					const x = this.c(F);
					if (this.b(F, x)) return this.e(F, x), x;
				}
				b(F, x) {
					return x
						? x.pattern
							? x.owner
								? d.$sg(x.fileLocation)
									? (this.error(
											(0, t.localize)(9908, null, JSON.stringify(F, null, 4)),
										),
										!1)
									: !0
								: (this.error(
										(0, t.localize)(9907, null, JSON.stringify(F, null, 4)),
									),
									!1)
							: (this.error(
									(0, t.localize)(9906, null, JSON.stringify(F, null, 4)),
								),
								!1)
						: (this.error(
								(0, t.localize)(9905, null, JSON.stringify(F, null, 4)),
							),
							!1);
				}
				c(F) {
					let x = null;
					const H = d.$lg(F.owner) ? F.owner : m.$9g(),
						q = d.$lg(F.source) ? F.source : void 0;
					let V = d.$lg(F.applyTo) ? l.fromString(F.applyTo) : l.allDocuments;
					V || (V = l.allDocuments);
					let G, K, J;
					if (d.$sg(F.fileLocation))
						(G = b.Relative), (K = "${workspaceFolder}");
					else if (d.$lg(F.fileLocation))
						(J = b.fromString(F.fileLocation)),
							J &&
								((G = J),
								J === b.Relative || J === b.AutoDetect
									? (K = "${workspaceFolder}")
									: J === b.Search &&
										(K = { include: ["${workspaceFolder}"] }));
					else if (d.$mg(F.fileLocation)) {
						const Y = F.fileLocation;
						Y.length > 0 &&
							((J = b.fromString(Y[0])),
							Y.length === 1 && J === b.Absolute
								? (G = J)
								: Y.length === 2 &&
									(J === b.Relative || J === b.AutoDetect) &&
									Y[1] &&
									((G = J), (K = Y[1])));
					} else
						Array.isArray(F.fileLocation) &&
							b.fromString(F.fileLocation[0]) === b.Search &&
							((G = b.Search),
							(K = F.fileLocation[1] ?? { include: ["${workspaceFolder}"] }));
					const W = F.pattern ? this.d(F.pattern) : void 0;
					let X = F.severity ? u.default.fromValue(F.severity) : void 0;
					if (
						(X === u.default.Ignore &&
							(this.info((0, t.localize)(9909, null, F.severity)),
							(X = u.default.Error)),
						d.$lg(F.base))
					) {
						const Y = F.base;
						if (Y.length > 1 && Y[0] === "$") {
							const ie = e.$03.get(Y.substring(1));
							ie &&
								((x = i.$vo(ie)),
								F.owner !== void 0 && H !== void 0 && (x.owner = H),
								F.source !== void 0 && q !== void 0 && (x.source = q),
								F.fileLocation !== void 0 &&
									G !== void 0 &&
									((x.fileLocation = G), (x.filePrefix = K)),
								F.pattern !== void 0 &&
									W !== void 0 &&
									W !== null &&
									(x.pattern = W),
								F.severity !== void 0 && X !== void 0 && (x.severity = X),
								F.applyTo !== void 0 && V !== void 0 && (x.applyTo = V));
						}
					} else
						G &&
							W &&
							((x = { owner: H, applyTo: V, fileLocation: G, pattern: W }),
							q && (x.source = q),
							K && (x.filePrefix = K),
							X && (x.severity = X));
					return (
						L.isNamedProblemMatcher(F) &&
							((x.name = F.name),
							(x.label = d.$lg(F.label) ? F.label : F.name)),
						x
					);
				}
				d(F) {
					if (d.$lg(F)) {
						const x = F;
						if (x.length > 1 && x[0] === "$") {
							const H = e.$83.get(x.substring(1));
							return H || this.error((0, t.localize)(9910, null, x)), H;
						} else
							x.length === 0
								? this.error((0, t.localize)(9911, null))
								: this.error((0, t.localize)(9912, null, x));
					} else if (F) {
						const x = new D(this.problemReporter);
						return Array.isArray(F), x.parse(F);
					}
					return null;
				}
				e(F, x) {
					const H = this.g(F.watchedTaskBeginsRegExp),
						q = this.g(F.watchedTaskEndsRegExp);
					if (H && q) {
						x.watching = {
							activeOnStart: !1,
							beginsPattern: { regexp: H },
							endsPattern: { regexp: q },
						};
						return;
					}
					const V = F.background || F.watching;
					if (d.$ug(V)) return;
					const G = this.f(V.beginsPattern),
						K = this.f(V.endsPattern);
					if (G && K) {
						x.watching = {
							activeOnStart: d.$rg(V.activeOnStart) ? V.activeOnStart : !1,
							beginsPattern: G,
							endsPattern: K,
						};
						return;
					}
					(G || K) && this.error((0, t.localize)(9913, null));
				}
				f(F) {
					if (d.$ug(F)) return null;
					let x, H;
					return (
						d.$lg(F)
							? (x = this.g(F))
							: ((x = this.g(F.regexp)), d.$pg(F.file) && (H = F.file)),
						x ? (H ? { regexp: x, file: H } : { regexp: x, file: 1 }) : null
					);
				}
				g(F) {
					let x = null;
					if (!F) return x;
					try {
						x = new RegExp(F);
					} catch {
						this.error((0, t.localize)(9914, null, F));
					}
					return x;
				}
			}
			e.$93 = O;
			const B = p.$n2.registerExtensionPoint({
				extensionPoint: "problemMatchers",
				deps: [A],
				jsonSchema: {
					description: (0, t.localize)(9915, null),
					type: "array",
					items: N.NamedProblemMatcher,
				},
			});
			class U {
				constructor() {
					(this.c = new o.$re()),
						(this.onMatcherChanged = this.c.event),
						(this.a = Object.create(null)),
						this.d(),
						(this.b = new Promise((F, x) => {
							B.setHandler((H, q) => {
								try {
									q.removed.forEach((G) => {
										const K = G.value;
										for (const J of K) this.a[J.name] && delete this.a[J.name];
									}),
										q.added.forEach((G) => {
											const K = G.value,
												J = new O(new M(G.collector));
											for (const W of K) {
												const X = J.parse(W);
												X && y(X) && this.add(X);
											}
										}),
										(q.removed.length > 0 || q.added.length > 0) &&
											this.c.fire();
								} catch {}
								const V = this.get("tsc-watch");
								V && (V.tscWatch = !0), F(void 0);
							});
						}));
				}
				onReady() {
					return e.$83.onReady(), this.b;
				}
				add(F) {
					this.a[F.name] = F;
				}
				get(F) {
					return this.a[F];
				}
				keys() {
					return Object.keys(this.a);
				}
				d() {
					this.add({
						name: "msCompile",
						label: (0, t.localize)(9916, null),
						owner: "msCompile",
						source: "cpp",
						applyTo: l.allDocuments,
						fileLocation: b.Absolute,
						pattern: e.$83.get("msCompile"),
					}),
						this.add({
							name: "lessCompile",
							label: (0, t.localize)(9917, null),
							deprecated: !0,
							owner: "lessCompile",
							source: "less",
							applyTo: l.allDocuments,
							fileLocation: b.Absolute,
							pattern: e.$83.get("lessCompile"),
							severity: u.default.Error,
						}),
						this.add({
							name: "gulp-tsc",
							label: (0, t.localize)(9918, null),
							owner: "typescript",
							source: "ts",
							applyTo: l.closedDocuments,
							fileLocation: b.Relative,
							filePrefix: "${workspaceFolder}",
							pattern: e.$83.get("gulp-tsc"),
						}),
						this.add({
							name: "jshint",
							label: (0, t.localize)(9919, null),
							owner: "jshint",
							source: "jshint",
							applyTo: l.allDocuments,
							fileLocation: b.Absolute,
							pattern: e.$83.get("jshint"),
						}),
						this.add({
							name: "jshint-stylish",
							label: (0, t.localize)(9920, null),
							owner: "jshint",
							source: "jshint",
							applyTo: l.allDocuments,
							fileLocation: b.Absolute,
							pattern: e.$83.get("jshint-stylish"),
						}),
						this.add({
							name: "eslint-compact",
							label: (0, t.localize)(9921, null),
							owner: "eslint",
							source: "eslint",
							applyTo: l.allDocuments,
							fileLocation: b.Absolute,
							filePrefix: "${workspaceFolder}",
							pattern: e.$83.get("eslint-compact"),
						}),
						this.add({
							name: "eslint-stylish",
							label: (0, t.localize)(9922, null),
							owner: "eslint",
							source: "eslint",
							applyTo: l.allDocuments,
							fileLocation: b.Absolute,
							pattern: e.$83.get("eslint-stylish"),
						}),
						this.add({
							name: "go",
							label: (0, t.localize)(9923, null),
							owner: "go",
							source: "go",
							applyTo: l.allDocuments,
							fileLocation: b.Relative,
							filePrefix: "${workspaceFolder}",
							pattern: e.$83.get("go"),
						});
				}
			}
			e.$03 = new U();
		},
	),
		