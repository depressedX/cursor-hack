import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../child_process.js';
import '../../../../../events.js';
import '../../../../../string_decoder.js';
import '../../../../base/common/arrays.js';
import '../../../../base/common/collections.js';
import '../../../../base/common/glob.js';
import '../../../../base/common/strings.js';
import '../../../../base/common/uri.js';
import '../common/search.js';
import '../common/searchExtTypes.js';
import '../../../../../vscode-regexpp.js';
import '../../../../../@vscode/ripgrep.js';
import './ripgrepSearchUtils.js';
import '../common/searchExtConversionTypes.js';
define(
			Pe[310],
			Ne([1, 0, 81, 633, 616, 20, 129, 51, 15, 2, 41, 83, 634, 614, 198, 197]),
			function (we, t, e, r, S, N, P, I, l, n, p, y, d, k, g, c) {
				"use strict";
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.$Jjd = t.$Ijd = void 0),
					(t.$Kjd = w),
					(t.$Ljd = E),
					(t.$Mjd = C),
					(t.$Njd = O),
					(t.$Ojd = J),
					(e = tt(e));
				function h() {
					let L = k.rgPath.replace(
						/\bnode_modules\.asar\b/,
						"node_modules.asar.unpacked",
					);
					return (L = (0, g.$zjd)(L)), L;
				}
				const $ = h();
				class T {
					constructor(b, F) {
						(this.a = b), (this.b = F);
					}
					provideTextSearchResults(b, F, D, M) {
						return Promise.all(
							F.folderOptions.map((z) => {
								const Q = {
									folderOptions: z,
									numThreads: this.b,
									maxResults: F.maxResults,
									previewOptions: F.previewOptions,
									maxFileSize: F.maxFileSize,
									surroundingContext: F.surroundingContext,
								};
								return this.provideTextSearchResultsWithRgOptions(b, Q, D, M);
							}),
						).then((z) => ({ limitHit: z.some((H) => !!H && H.limitHit) }));
					}
					provideTextSearchResultsWithRgOptions(b, F, D, M) {
						return (
							this.a.appendLine(
								`provideTextSearchResults ${b.pattern}, ${JSON.stringify({ ...F, folder: F.folderOptions.folder.toString() })}`,
							),
							new Promise((z, Q) => {
								M.onCancellationRequested(() => Se());
								const H = { ...F, numThreads: this.b },
									B = w(b, H),
									U = F.folderOptions.folder.fsPath,
									Z = B.map((ge) => (ge.match(/^-/) ? ge : `'${ge}'`)).join(
										" ",
									);
								this.a.appendLine(`${$} ${Z}
 - cwd: ${U}`);
								let W = e.spawn($, B, { cwd: U });
								W.on("error", (ge) => {
									console.error(ge),
										this.a.appendLine("Error: " + (ge && ge.message)),
										Q(
											(0, p.$B7)(
												new p.$z7(
													ge && ge.message,
													p.SearchErrorCode.rgProcessError,
												),
											),
										);
								});
								let G = !1;
								const fe = new s(
									F.maxResults ?? p.$o7,
									F.folderOptions.folder,
									(0, c.$vid)(F.previewOptions),
								);
								fe.on("result", (ge) => {
									(G = !0), (_ = ""), D.report(ge);
								});
								let ae = !1;
								const Se = () => {
									(ae = !0), W?.kill(), fe?.cancel();
								};
								let he = !1;
								fe.on("hitLimit", () => {
									(he = !0), Se();
								});
								let _ = "";
								W.stdout.on("data", (ge) => {
									fe.handleData(ge), G || (_ += ge);
								});
								let oe = !1;
								W.stdout.once("data", () => (oe = !0));
								let ke = "";
								W.stderr.on("data", (ge) => {
									const ee = ge.toString();
									this.a.appendLine(ee),
										ke.length + ee.length < 1e6 && (ke += ee);
								}),
									W.on("close", () => {
										if (
											(this.a.appendLine(
												oe ? "Got data from stdout" : "No data from stdout",
											),
											this.a.appendLine(
												G ? "Got result from parser" : "No result from parser",
											),
											_ && this.a.appendLine(`Got data without result: ${_}`),
											this.a.appendLine(""),
											ae)
										)
											z({ limitHit: he });
										else {
											fe.flush(), (W = null);
											let ge;
											ke && !oe && (ge = a(ke))
												? Q((0, p.$B7)(new p.$z7(ge.message, ge.code)))
												: z({ limitHit: he });
										}
									});
							})
						);
					}
				}
				t.$Ijd = T;
				function a(L) {
					const b = L.split(`
`),
						F = b[0].trim();
					if (b.some((M) => M.startsWith("regex parse error")))
						return new p.$z7(u(b), p.SearchErrorCode.regexParseError);
					const D = F.match(/grep config error: unknown encoding: (.*)/);
					if (D)
						return new p.$z7(
							`Unknown encoding: ${D[1]}`,
							p.SearchErrorCode.unknownEncoding,
						);
					if (F.startsWith("error parsing glob"))
						return new p.$z7(
							F.charAt(0).toUpperCase() + F.substr(1),
							p.SearchErrorCode.globParseError,
						);
					if (F.startsWith("the literal"))
						return new p.$z7(
							F.charAt(0).toUpperCase() + F.substr(1),
							p.SearchErrorCode.invalidLiteral,
						);
					if (F.startsWith("PCRE2: error compiling pattern"))
						return new p.$z7(F, p.SearchErrorCode.regexParseError);
				}
				function u(L) {
					const b = ["Regex parse error"],
						F = L.filter((D) => D.startsWith("PCRE2:"));
					if (F.length >= 1) {
						const D = F[0].replace("PCRE2:", "");
						if (D.indexOf(":") !== -1 && D.split(":").length >= 2) {
							const M = D.split(":")[1];
							b.push(":" + M);
						}
					}
					return b.join("");
				}
				class s extends r.EventEmitter {
					constructor(b, F, D) {
						super(),
							(this.g = b),
							(this.h = F),
							(this.j = D),
							(this.a = ""),
							(this.b = !1),
							(this.c = !1),
							(this.f = 0),
							(this.d = new S.StringDecoder());
					}
					cancel() {
						this.b = !0;
					}
					flush() {
						this.k(this.d.end());
					}
					on(b, F) {
						return super.on(b, F), this;
					}
					handleData(b) {
						if (this.b) return;
						const F = typeof b == "string" ? b : this.d.write(b);
						this.k(F);
					}
					k(b) {
						let F = b.indexOf(`
`);
						const D = this.a + b;
						if (F >= 0) F += this.a.length;
						else {
							this.a = D;
							return;
						}
						let M = 0;
						for (; F >= 0; )
							this.m(D.substring(M, F).trim()),
								(M = F + 1),
								(F = D.indexOf(
									`
`,
									M,
								));
						this.a = D.substring(M);
					}
					m(b) {
						if (this.b || !b) return;
						let F;
						try {
							F = JSON.parse(b);
						} catch {
							throw new Error(`malformed line from rg: ${b}`);
						}
						if (F.type === "match") {
							const D = f(F.data.path),
								M = n.URI.joinPath(this.h, D),
								z = this.n(F.data, M);
							this.p(z), this.c && (this.cancel(), this.emit("hitLimit"));
						} else if (F.type === "context") {
							const D = f(F.data.path),
								M = n.URI.joinPath(this.h, D);
							this.o(F.data, M).forEach((Q) => this.p(Q));
						}
					}
					n(b, F) {
						const D = b.line_number - 1,
							M = f(b.lines),
							z = Buffer.from(M);
						let Q = 0,
							H = 0,
							B = D;
						b.submatches.length === 0 &&
							b.submatches.push(
								M.length
									? { start: 0, end: 1, match: { text: M[0] } }
									: { start: 0, end: 0, match: { text: "" } },
							);
						const U = (0, N.$Lb)(
								b.submatches.map((G, fe) => {
									if (this.c) return null;
									this.f++, this.f >= this.g && (this.c = !0);
									const ae = f(G.match),
										Se = z.slice(Q, G.start).toString(),
										he = o(Se),
										_ =
											he.numLines > 0
												? he.lastLineLength
												: he.lastLineLength + H,
										oe = o(ae),
										ke = he.numLines + B,
										ge = oe.numLines + ke,
										ee =
											oe.numLines > 0
												? oe.lastLineLength
												: oe.lastLineLength + _;
									return (
										(Q = G.end), (H = ee), (B = ge), new y.$g7(ke, _, ge, ee)
									);
								}),
							),
							Z = (0, N.$5b)(U, g.$Ajd),
							W = new p.$u7(M, Z, this.j);
						return new y.$h7(
							F,
							W.rangeLocations.map((G) => ({
								sourceRange: (0, g.$Bjd)(G.source),
								previewRange: (0, g.$Bjd)(G.preview),
							})),
							W.previewText,
						);
					}
					o(b, F) {
						const D = f(b.lines),
							M = b.line_number;
						return D.replace(/\r?\n$/, "")
							.split(`
`)
							.map((z, Q) => new y.$i7(F, z, M + Q));
					}
					p(b) {
						this.emit("result", b);
					}
				}
				t.$Jjd = s;
				function f(L) {
					return L.bytes ? Buffer.from(L.bytes, "base64").toString() : L.text;
				}
				function o(L) {
					const b = /\n/g;
					let F = 0,
						D = -1,
						M;
					for (; (M = b.exec(L)); ) F++, (D = M.index);
					const z = D >= 0 ? L.length - D - 1 : L.length;
					return { numLines: F, lastLineLength: z };
				}
				function w(L, b) {
					const F = ["--hidden", "--no-require-git"];
					F.push(L.isCaseSensitive ? "--case-sensitive" : "--ignore-case");
					const { doubleStarIncludes: D, otherIncludes: M } = (0, P.$e)(
						b.folderOptions.includes,
						(Q) =>
							Q.startsWith("**") ? "doubleStarIncludes" : "otherIncludes",
					);
					if (M && M.length) {
						const Q = new Set();
						M.forEach((H) => {
							Q.add(H);
						}),
							F.push("-g", "!*"),
							Q.forEach((H) => {
								m(H)
									.map(g.$yjd)
									.forEach((B) => {
										F.push("-g", B);
									});
							});
					}
					D &&
						D.length &&
						D.forEach((Q) => {
							F.push("-g", Q);
						}),
						b.folderOptions.excludes
							.map((Q) => (typeof Q == "string" ? Q : Q.pattern))
							.map(g.$yjd)
							.forEach((Q) => F.push("-g", `!${Q}`)),
						b.maxFileSize && F.push("--max-filesize", b.maxFileSize + ""),
						b.folderOptions.useIgnoreFiles.local
							? b.folderOptions.useIgnoreFiles.parent ||
								F.push("--no-ignore-parent")
							: F.push("--no-ignore"),
						b.folderOptions.followSymlinks && F.push("--follow"),
						b.folderOptions.encoding &&
							b.folderOptions.encoding !== "utf8" &&
							F.push("--encoding", b.folderOptions.encoding),
						b.numThreads && F.push("--threads", `${b.numThreads}`),
						L.pattern === "--" && ((L.isRegExp = !0), (L.pattern = "\\-\\-")),
						L.isMultiline &&
							!L.isRegExp &&
							((L.pattern = (0, l.$of)(L.pattern)), (L.isRegExp = !0)),
						b.usePCRE2 && F.push("--pcre2"),
						F.push("--crlf"),
						L.isRegExp &&
							((L.pattern = E(L.pattern)), F.push("--engine", "auto"));
					let z;
					if (L.isWordMatch) {
						const H = (0, l.$xf)(L.pattern, !!L.isRegExp, {
							wholeWord: L.isWordMatch,
						}).source.replace(/\\\//g, "/");
						F.push("--regexp", H);
					} else if (L.isRegExp) {
						let Q = C(L.pattern);
						(Q = O(Q)), F.push("--regexp", Q);
					} else (z = L.pattern), F.push("--fixed-strings");
					return (
						F.push("--no-config"),
						b.folderOptions.useIgnoreFiles.global ||
							F.push("--no-ignore-global"),
						F.push("--json"),
						L.isMultiline && F.push("--multiline"),
						b.surroundingContext &&
							(F.push("--before-context", b.surroundingContext + ""),
							F.push("--after-context", b.surroundingContext + "")),
						F.push("--"),
						z && F.push(z),
						F.push("."),
						F
					);
				}
				function m(L) {
					return J(L).flatMap((F) => {
						const D = (0, I.$Hk)(F, "/");
						return D.map((M, z) => D.slice(0, z + 1).join("/"));
					});
				}
				function E(L) {
					const b = /((?:[^\\]|^)(?:\\\\)*)\\u([a-z0-9]{4})/gi;
					for (; L.match(b); ) L = L.replace(b, "$1\\x{$2}");
					const F = /((?:[^\\]|^)(?:\\\\)*)\\u\{([a-z0-9]{4})\}/gi;
					for (; L.match(F); ) L = L.replace(F, "$1\\x{$2}");
					return L;
				}
				const R = (L) => L.type === "Assertion" && L.kind === "lookbehind";
				function C(L) {
					let b;
					try {
						b = new d.RegExpParser().parsePattern(L);
					} catch {
						return L;
					}
					let F = "",
						D = 0;
					const M = (H, B, U) => {
							(F += L.slice(D, H) + U), (D = B);
						},
						z = [];
					return (
						new d.RegExpVisitor({
							onCharacterEnter(H) {
								if (H.raw !== "\\n") return;
								const B = z[0];
								if (!B) M(H.start, H.end, "\\r?\\n");
								else if (!z.some(R))
									if (B.type === "CharacterClass")
										if (B.negate) {
											const U =
												L.slice(B.start + 2, H.start) +
												L.slice(H.end, B.end - 1);
											B.parent?.type === "Quantifier"
												? M(B.start, B.end, U ? `[^${U}]` : ".")
												: M(
														B.start,
														B.end,
														"(?!\\r?\\n" + (U ? `|[${U}]` : "") + ")",
													);
										} else {
											const U =
												L.slice(B.start + 1, H.start) +
												L.slice(H.end, B.end - 1);
											M(
												B.start,
												B.end,
												U === "" ? "\\r?\\n" : `(?:[${U}]|\\r?\\n)`,
											);
										}
									else
										B.type === "Quantifier" && M(H.start, H.end, "(?:\\r?\\n)");
							},
							onQuantifierEnter(H) {
								z.unshift(H);
							},
							onQuantifierLeave() {
								z.shift();
							},
							onCharacterClassRangeEnter(H) {
								z.unshift(H);
							},
							onCharacterClassRangeLeave() {
								z.shift();
							},
							onCharacterClassEnter(H) {
								z.unshift(H);
							},
							onCharacterClassLeave() {
								z.shift();
							},
							onAssertionEnter(H) {
								R(H) && z.push(H);
							},
							onAssertionLeave(H) {
								z[0] === H && z.shift();
							},
						}).visit(b),
						(F += L.slice(D)),
						F
					);
				}
				function O(L) {
					return L.replace(/\n/g, "\\r?\\n");
				}
				function A(L) {
					let b = !1,
						F = !1,
						D = "",
						M = "";
					for (let z = 0; z < L.length; z++) {
						const Q = L[z];
						switch (Q) {
							case "\\":
								F
									? (b ? (M += "\\" + Q) : (D += "\\" + Q), (F = !1))
									: (F = !0);
								break;
							case "{":
								if (F) b ? (M += Q) : (D += Q), (F = !1);
								else {
									if (b)
										return {
											strInBraces: D + "{" + M + "{" + L.substring(z + 1),
										};
									b = !0;
								}
								break;
							case "}":
								if (F) b ? (M += Q) : (D += Q), (F = !1);
								else {
									if (b)
										return {
											fixedStart: D,
											strInBraces: M,
											fixedEnd: L.substring(z + 1),
										};
									D += Q;
								}
								break;
							default:
								b ? (M += (F ? "\\" : "") + Q) : (D += (F ? "\\" : "") + Q),
									(F = !1);
								break;
						}
					}
					return { strInBraces: D + (b ? "{" + M : "") };
				}
				function J(L) {
					const { fixedStart: b, strInBraces: F, fixedEnd: D } = A(L);
					if (b === void 0 || D === void 0) return [F];
					let M = (0, I.$Hk)(F, ",");
					M.length || (M = [""]);
					const z = J(D);
					return M.flatMap((Q) => {
						const H = b + Q;
						return z.map((B) => H + B);
					});
				}
			},
		),
		