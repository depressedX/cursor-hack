import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/stream.js';
import '../../../../base/common/buffer.js';
import '../../../../amdX.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/arrays.js';
import '../../../../base/common/amd.js';
define(
			de[842],
			he([1, 0, 408, 76, 536, 33, 24, 455]),
			function (ce /*require*/,
 e /*exports*/,
 t /*stream*/,
 i /*buffer*/,
 w /*amdX*/,
 E /*cancellation*/,
 C /*arrays*/,
 d /*amd*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$5Y =
						e.$4Y =
						e.$VY =
						e.DecodeStreamErrorKind =
						e.$UY =
						e.$TY =
						e.$SY =
						e.$QY =
						e.$PY =
						e.$OY =
						e.$NY =
							void 0),
					(e.$RY = m),
					(e.$WY = p),
					(e.$XY = o),
					(e.$YY = f),
					(e.$ZY = b),
					(e.$1Y = s),
					(e.$2Y = P),
					(e.$3Y = k),
					(e.$NY = "utf8"),
					(e.$OY = "utf8bom"),
					(e.$PY = "utf16be"),
					(e.$QY = "utf16le");
				function m(L) {
					return [e.$NY, e.$OY, e.$PY, e.$QY].some((D) => D === L);
				}
				(e.$SY = [254, 255]), (e.$TY = [255, 254]), (e.$UY = [239, 187, 191]);
				const r = 512,
					u = 512,
					a = 512 * 8,
					h = 512 * 128;
				var c;
				(function (L) {
					L[(L.STREAM_IS_BINARY = 1)] = "STREAM_IS_BINARY";
				})(c || (e.DecodeStreamErrorKind = c = {}));
				class n extends Error {
					constructor(D, M) {
						super(D), (this.decodeStreamErrorKind = M);
					}
				}
				e.$VY = n;
				class g {
					static async create(D) {
						let M;
						if (D !== e.$NY)
							M = (
								await (0, w.$Tq)(
									"@vscode/iconv-lite-umd",
									"lib/iconv-lite-umd.js",
								)
							).getDecoder(b(D));
						else {
							const N = new TextDecoder();
							M = {
								write(A) {
									return N.decode(A, { stream: !0 });
								},
								end() {
									return N.decode();
								},
							};
						}
						return new g(M);
					}
					constructor(D) {
						this.a = D;
					}
					write(D) {
						return this.a.write(D);
					}
					end() {
						return this.a.end();
					}
				}
				function p(L, D) {
					const M = (D.minBytesRequiredForDetection ?? D.guessEncoding) ? a : u;
					return new Promise((N, A) => {
						const R = (0, t.$He)((x) => x.join("")),
							O = [];
						let B = 0,
							U;
						const z = new E.$Ce(),
							F = async () => {
								try {
									const x = await k(
										{ buffer: i.$Te.concat(O), bytesRead: B },
										D.guessEncoding,
										D.candidateGuessEncodings,
									);
									if (x.seemsBinary && D.acceptTextOnly)
										throw new n(
											"Stream is binary but only text is accepted for decoding",
											c.STREAM_IS_BINARY,
										);
									(x.encoding = await D.overwriteEncoding(x.encoding)),
										(U = await g.create(x.encoding));
									const H = U.write(i.$Te.concat(O).buffer);
									R.write(H),
										(O.length = 0),
										(B = 0),
										N({ stream: R, detected: x });
								} catch (x) {
									z.cancel(), R.destroy(), A(x);
								}
							};
						(0, t.$Le)(
							L,
							{
								onData: async (x) => {
									U
										? R.write(U.write(x.buffer))
										: (O.push(x),
											(B += x.byteLength),
											B >= M &&
												(L.pause(), await F(), setTimeout(() => L.resume())));
								},
								onError: (x) => R.error(x),
								onEnd: async () => {
									U || (await F()), R.end(U?.end());
								},
							},
							z.token,
						);
					});
				}
				async function o(L, D, M) {
					const A = (
						await (0, w.$Tq)("@vscode/iconv-lite-umd", "lib/iconv-lite-umd.js")
					).getEncoder(b(D), M);
					let R = !1,
						O = !1;
					return {
						read() {
							if (O) return null;
							const B = L.read();
							if (typeof B != "string") {
								if (((O = !0), !R && M?.addBOM))
									switch (D) {
										case e.$NY:
										case e.$OY:
											return i.$Te.wrap(Uint8Array.from(e.$UY));
										case e.$PY:
											return i.$Te.wrap(Uint8Array.from(e.$SY));
										case e.$QY:
											return i.$Te.wrap(Uint8Array.from(e.$TY));
									}
								const U = A.end();
								return U && U.length > 0 ? ((R = !0), i.$Te.wrap(U)) : null;
							}
							return (R = !0), i.$Te.wrap(A.write(B));
						},
					};
				}
				async function f(L) {
					return (
						await (0, w.$Tq)("@vscode/iconv-lite-umd", "lib/iconv-lite-umd.js")
					).encodingExists(b(L));
				}
				function b(L) {
					return L === e.$OY || L === null ? e.$NY : L;
				}
				function s(L, D) {
					if (!L || D < e.$SY.length) return null;
					const M = L.readUInt8(0),
						N = L.readUInt8(1);
					if (M === e.$SY[0] && N === e.$SY[1]) return e.$PY;
					if (M === e.$TY[0] && N === e.$TY[1]) return e.$QY;
					if (D < e.$UY.length) return null;
					const A = L.readUInt8(2);
					return M === e.$UY[0] && N === e.$UY[1] && A === e.$UY[2]
						? e.$OY
						: null;
				}
				const l = ["ascii", "utf-16", "utf-32"];
				async function y(L, D) {
					const M = await (0, w.$Tq)(
							"jschardet",
							d.$V ? "dist/jschardet.js" : "dist/jschardet.min.js",
						),
						N = L.slice(0, h),
						A = T(N.buffer);
					D &&
						((D = (0, C.$Lb)(D.map((B) => I(B)))),
						D.length === 0 && (D = void 0));
					const R = M.detect(A, D ? { detectEncodings: D } : void 0);
					if (!R || !R.encoding) return null;
					const O = R.encoding.toLowerCase();
					return 0 <= l.indexOf(O) ? null : S(R.encoding);
				}
				const $ = { ibm866: "cp866", big5: "cp950" };
				function v(L) {
					return L.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
				}
				function S(L) {
					const D = v(L);
					return $[D] || D;
				}
				function I(L) {
					const D = v(L);
					return e.$5Y[D].guessableName;
				}
				function T(L) {
					let D = "";
					for (let M = 0; M < L.length; M++) D += String.fromCharCode(L[M]);
					return D;
				}
				function P(L) {
					switch (L) {
						case "shiftjis":
							return "shift-jis";
						case "utf16le":
							return "utf-16le";
						case "utf16be":
							return "utf-16be";
						case "big5hkscs":
							return "big5-hkscs";
						case "eucjp":
							return "euc-jp";
						case "euckr":
							return "euc-kr";
						case "koi8r":
							return "koi8-r";
						case "koi8u":
							return "koi8-u";
						case "macroman":
							return "x-mac-roman";
						case "utf8bom":
							return "utf8";
						default: {
							const D = L.match(/windows(\d+)/);
							return D ? "windows-" + D[1] : L;
						}
					}
				}
				function k({ buffer: L, bytesRead: D }, M, N) {
					let A = s(L, D),
						R = !1;
					if (A !== e.$PY && A !== e.$QY && L) {
						let O = !0,
							B = !0,
							U = !1;
						for (let z = 0; z < D && z < r; z++) {
							const F = z % 2 === 1,
								x = L.readUInt8(z) === 0;
							if (
								(x && (U = !0),
								O && ((F && !x) || (!F && x)) && (O = !1),
								B && ((F && x) || (!F && !x)) && (B = !1),
								x && !O && !B)
							)
								break;
						}
						U && (O ? (A = e.$QY) : B ? (A = e.$PY) : (R = !0));
					}
					return M && !R && !A && L
						? y(L.slice(0, D), N).then((O) => ({
								seemsBinary: !1,
								encoding: O,
							}))
						: { seemsBinary: R, encoding: A };
				}
				(e.$4Y = {
					utf8: {
						labelLong: "UTF-8",
						labelShort: "UTF-8",
						order: 1,
						alias: "utf8bom",
						guessableName: "UTF-8",
					},
					utf8bom: {
						labelLong: "UTF-8 with BOM",
						labelShort: "UTF-8 with BOM",
						encodeOnly: !0,
						order: 2,
						alias: "utf8",
					},
					utf16le: {
						labelLong: "UTF-16 LE",
						labelShort: "UTF-16 LE",
						order: 3,
						guessableName: "UTF-16LE",
					},
					utf16be: {
						labelLong: "UTF-16 BE",
						labelShort: "UTF-16 BE",
						order: 4,
						guessableName: "UTF-16BE",
					},
					windows1252: {
						labelLong: "Western (Windows 1252)",
						labelShort: "Windows 1252",
						order: 5,
						guessableName: "windows-1252",
					},
					iso88591: {
						labelLong: "Western (ISO 8859-1)",
						labelShort: "ISO 8859-1",
						order: 6,
					},
					iso88593: {
						labelLong: "Western (ISO 8859-3)",
						labelShort: "ISO 8859-3",
						order: 7,
					},
					iso885915: {
						labelLong: "Western (ISO 8859-15)",
						labelShort: "ISO 8859-15",
						order: 8,
					},
					macroman: {
						labelLong: "Western (Mac Roman)",
						labelShort: "Mac Roman",
						order: 9,
					},
					cp437: { labelLong: "DOS (CP 437)", labelShort: "CP437", order: 10 },
					windows1256: {
						labelLong: "Arabic (Windows 1256)",
						labelShort: "Windows 1256",
						order: 11,
					},
					iso88596: {
						labelLong: "Arabic (ISO 8859-6)",
						labelShort: "ISO 8859-6",
						order: 12,
					},
					windows1257: {
						labelLong: "Baltic (Windows 1257)",
						labelShort: "Windows 1257",
						order: 13,
					},
					iso88594: {
						labelLong: "Baltic (ISO 8859-4)",
						labelShort: "ISO 8859-4",
						order: 14,
					},
					iso885914: {
						labelLong: "Celtic (ISO 8859-14)",
						labelShort: "ISO 8859-14",
						order: 15,
					},
					windows1250: {
						labelLong: "Central European (Windows 1250)",
						labelShort: "Windows 1250",
						order: 16,
						guessableName: "windows-1250",
					},
					iso88592: {
						labelLong: "Central European (ISO 8859-2)",
						labelShort: "ISO 8859-2",
						order: 17,
						guessableName: "ISO-8859-2",
					},
					cp852: {
						labelLong: "Central European (CP 852)",
						labelShort: "CP 852",
						order: 18,
					},
					windows1251: {
						labelLong: "Cyrillic (Windows 1251)",
						labelShort: "Windows 1251",
						order: 19,
						guessableName: "windows-1251",
					},
					cp866: {
						labelLong: "Cyrillic (CP 866)",
						labelShort: "CP 866",
						order: 20,
						guessableName: "IBM866",
					},
					iso88595: {
						labelLong: "Cyrillic (ISO 8859-5)",
						labelShort: "ISO 8859-5",
						order: 21,
						guessableName: "ISO-8859-5",
					},
					koi8r: {
						labelLong: "Cyrillic (KOI8-R)",
						labelShort: "KOI8-R",
						order: 22,
						guessableName: "KOI8-R",
					},
					koi8u: {
						labelLong: "Cyrillic (KOI8-U)",
						labelShort: "KOI8-U",
						order: 23,
					},
					iso885913: {
						labelLong: "Estonian (ISO 8859-13)",
						labelShort: "ISO 8859-13",
						order: 24,
					},
					windows1253: {
						labelLong: "Greek (Windows 1253)",
						labelShort: "Windows 1253",
						order: 25,
						guessableName: "windows-1253",
					},
					iso88597: {
						labelLong: "Greek (ISO 8859-7)",
						labelShort: "ISO 8859-7",
						order: 26,
						guessableName: "ISO-8859-7",
					},
					windows1255: {
						labelLong: "Hebrew (Windows 1255)",
						labelShort: "Windows 1255",
						order: 27,
						guessableName: "windows-1255",
					},
					iso88598: {
						labelLong: "Hebrew (ISO 8859-8)",
						labelShort: "ISO 8859-8",
						order: 28,
						guessableName: "ISO-8859-8",
					},
					iso885910: {
						labelLong: "Nordic (ISO 8859-10)",
						labelShort: "ISO 8859-10",
						order: 29,
					},
					iso885916: {
						labelLong: "Romanian (ISO 8859-16)",
						labelShort: "ISO 8859-16",
						order: 30,
					},
					windows1254: {
						labelLong: "Turkish (Windows 1254)",
						labelShort: "Windows 1254",
						order: 31,
					},
					iso88599: {
						labelLong: "Turkish (ISO 8859-9)",
						labelShort: "ISO 8859-9",
						order: 32,
					},
					windows1258: {
						labelLong: "Vietnamese (Windows 1258)",
						labelShort: "Windows 1258",
						order: 33,
					},
					gbk: {
						labelLong: "Simplified Chinese (GBK)",
						labelShort: "GBK",
						order: 34,
					},
					gb18030: {
						labelLong: "Simplified Chinese (GB18030)",
						labelShort: "GB18030",
						order: 35,
					},
					cp950: {
						labelLong: "Traditional Chinese (Big5)",
						labelShort: "Big5",
						order: 36,
						guessableName: "Big5",
					},
					big5hkscs: {
						labelLong: "Traditional Chinese (Big5-HKSCS)",
						labelShort: "Big5-HKSCS",
						order: 37,
					},
					shiftjis: {
						labelLong: "Japanese (Shift JIS)",
						labelShort: "Shift JIS",
						order: 38,
						guessableName: "SHIFT_JIS",
					},
					eucjp: {
						labelLong: "Japanese (EUC-JP)",
						labelShort: "EUC-JP",
						order: 39,
						guessableName: "EUC-JP",
					},
					euckr: {
						labelLong: "Korean (EUC-KR)",
						labelShort: "EUC-KR",
						order: 40,
						guessableName: "EUC-KR",
					},
					windows874: {
						labelLong: "Thai (Windows 874)",
						labelShort: "Windows 874",
						order: 41,
					},
					iso885911: {
						labelLong: "Latin/Thai (ISO 8859-11)",
						labelShort: "ISO 8859-11",
						order: 42,
					},
					koi8ru: {
						labelLong: "Cyrillic (KOI8-RU)",
						labelShort: "KOI8-RU",
						order: 43,
					},
					koi8t: {
						labelLong: "Tajik (KOI8-T)",
						labelShort: "KOI8-T",
						order: 44,
					},
					gb2312: {
						labelLong: "Simplified Chinese (GB 2312)",
						labelShort: "GB 2312",
						order: 45,
						guessableName: "GB2312",
					},
					cp865: {
						labelLong: "Nordic DOS (CP 865)",
						labelShort: "CP 865",
						order: 46,
					},
					cp850: {
						labelLong: "Western European DOS (CP 850)",
						labelShort: "CP 850",
						order: 47,
					},
				}),
					(e.$5Y = (() => {
						const L = {};
						for (const D in e.$4Y) e.$4Y[D].guessableName && (L[D] = e.$4Y[D]);
						return L;
					})());
			},
		),
		