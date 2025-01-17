import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/common/json.js';
import '../../../../base/common/types.js';
import '../../../../editor/common/languages/languageConfiguration.js';
import '../../../../editor/common/languages/languageConfigurationRegistry.js';
import '../../../../editor/common/languages/language.js';
import '../../../../platform/jsonschemas/common/jsonContributionRegistry.js';
import '../../../../platform/registry/common/platform.js';
import '../../../services/extensions/common/extensions.js';
import '../../../../base/common/jsonErrorMessages.js';
import '../../../../platform/extensionResourceLoader/common/extensionResourceLoader.js';
import '../../../../base/common/hash.js';
import '../../../../base/common/lifecycle.js';
define(
			de[3306],
			he([1, 0, 4, 187, 28, 532, 152, 61, 250, 30, 53, 754, 546, 136, 3]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				var g;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$qmc = void 0),
					(t = mt(t)),
					(w = mt(w));
				function p(y) {
					if (!Array.isArray(y)) return !1;
					for (let $ = 0, v = y.length; $ < v; $++)
						if (typeof y[$] != "string") return !1;
					return !0;
				}
				function o(y) {
					return p(y) && y.length === 2;
				}
				let f = (g = class extends n.$1c {
					constructor($, v, S, I) {
						super(),
							(this.b = $),
							(this.c = v),
							(this.f = S),
							(this.g = I),
							(this.a = new Map()),
							this.D(
								this.b.onDidRequestBasicLanguageFeatures(async (T) => {
									this.f.whenInstalledExtensionsRegistered().then(() => {
										this.h(T);
									});
								}),
							),
							this.D(
								this.b.onDidChange(() => {
									for (const [T] of this.a) this.h(T);
								}),
							);
					}
					async h($) {
						const v = this.b.getConfigurationFiles($),
							S = (0, c.$Aj)(v.map((T) => T.toString()));
						if (this.a.get($) === S) return;
						this.a.set($, S);
						const I = await Promise.all(v.map((T) => this.j(T)));
						for (const T of I) this.u($, T);
					}
					async j($) {
						try {
							const v = await this.c.readExtensionResource($),
								S = [];
							let I = (0, i.$do)(v, S);
							return (
								S.length &&
									console.error(
										t.localize(
											4920,
											null,
											$.toString(),
											S.map(
												(T) =>
													`[${T.offset}, ${T.length}] ${(0, a.$br)(T.error)}`,
											).join(`
`),
										),
									),
								(0, i.$lo)(I) !== "object" &&
									(console.error(t.localize(4921, null, $.toString())),
									(I = {})),
								I
							);
						} catch (v) {
							return console.error(v), {};
						}
					}
					static m($, v) {
						const S = v.comments;
						if (typeof S > "u") return;
						if (!w.$ng(S)) {
							console.warn(
								`[${$}]: language configuration: expected \`comments\` to be an object.`,
							);
							return;
						}
						let I;
						return (
							typeof S.lineComment < "u" &&
								(typeof S.lineComment != "string"
									? console.warn(
											`[${$}]: language configuration: expected \`comments.lineComment\` to be a string.`,
										)
									: ((I = I || {}), (I.lineComment = S.lineComment))),
							typeof S.blockComment < "u" &&
								(o(S.blockComment)
									? ((I = I || {}), (I.blockComment = S.blockComment))
									: console.warn(
											`[${$}]: language configuration: expected \`comments.blockComment\` to be an array of two strings.`,
										)),
							I
						);
					}
					static n($, v) {
						const S = v.brackets;
						if (typeof S > "u") return;
						if (!Array.isArray(S)) {
							console.warn(
								`[${$}]: language configuration: expected \`brackets\` to be an array.`,
							);
							return;
						}
						let I;
						for (let T = 0, P = S.length; T < P; T++) {
							const k = S[T];
							if (!o(k)) {
								console.warn(
									`[${$}]: language configuration: expected \`brackets[${T}]\` to be an array of two strings.`,
								);
								continue;
							}
							(I = I || []), I.push(k);
						}
						return I;
					}
					static q($, v) {
						const S = v.autoClosingPairs;
						if (typeof S > "u") return;
						if (!Array.isArray(S)) {
							console.warn(
								`[${$}]: language configuration: expected \`autoClosingPairs\` to be an array.`,
							);
							return;
						}
						let I;
						for (let T = 0, P = S.length; T < P; T++) {
							const k = S[T];
							if (Array.isArray(k)) {
								if (!o(k)) {
									console.warn(
										`[${$}]: language configuration: expected \`autoClosingPairs[${T}]\` to be an array of two strings or an object.`,
									);
									continue;
								}
								(I = I || []), I.push({ open: k[0], close: k[1] });
							} else {
								if (!w.$ng(k)) {
									console.warn(
										`[${$}]: language configuration: expected \`autoClosingPairs[${T}]\` to be an array of two strings or an object.`,
									);
									continue;
								}
								if (typeof k.open != "string") {
									console.warn(
										`[${$}]: language configuration: expected \`autoClosingPairs[${T}].open\` to be a string.`,
									);
									continue;
								}
								if (typeof k.close != "string") {
									console.warn(
										`[${$}]: language configuration: expected \`autoClosingPairs[${T}].close\` to be a string.`,
									);
									continue;
								}
								if (typeof k.notIn < "u" && !p(k.notIn)) {
									console.warn(
										`[${$}]: language configuration: expected \`autoClosingPairs[${T}].notIn\` to be a string array.`,
									);
									continue;
								}
								(I = I || []),
									I.push({ open: k.open, close: k.close, notIn: k.notIn });
							}
						}
						return I;
					}
					static r($, v) {
						const S = v.surroundingPairs;
						if (typeof S > "u") return;
						if (!Array.isArray(S)) {
							console.warn(
								`[${$}]: language configuration: expected \`surroundingPairs\` to be an array.`,
							);
							return;
						}
						let I;
						for (let T = 0, P = S.length; T < P; T++) {
							const k = S[T];
							if (Array.isArray(k)) {
								if (!o(k)) {
									console.warn(
										`[${$}]: language configuration: expected \`surroundingPairs[${T}]\` to be an array of two strings or an object.`,
									);
									continue;
								}
								(I = I || []), I.push({ open: k[0], close: k[1] });
							} else {
								if (!w.$ng(k)) {
									console.warn(
										`[${$}]: language configuration: expected \`surroundingPairs[${T}]\` to be an array of two strings or an object.`,
									);
									continue;
								}
								if (typeof k.open != "string") {
									console.warn(
										`[${$}]: language configuration: expected \`surroundingPairs[${T}].open\` to be a string.`,
									);
									continue;
								}
								if (typeof k.close != "string") {
									console.warn(
										`[${$}]: language configuration: expected \`surroundingPairs[${T}].close\` to be a string.`,
									);
									continue;
								}
								(I = I || []), I.push({ open: k.open, close: k.close });
							}
						}
						return I;
					}
					static s($, v) {
						const S = v.colorizedBracketPairs;
						if (typeof S > "u") return;
						if (!Array.isArray(S)) {
							console.warn(
								`[${$}]: language configuration: expected \`colorizedBracketPairs\` to be an array.`,
							);
							return;
						}
						const I = [];
						for (let T = 0, P = S.length; T < P; T++) {
							const k = S[T];
							if (!o(k)) {
								console.warn(
									`[${$}]: language configuration: expected \`colorizedBracketPairs[${T}]\` to be an array of two strings.`,
								);
								continue;
							}
							I.push([k[0], k[1]]);
						}
						return I;
					}
					static t($, v) {
						const S = v.onEnterRules;
						if (typeof S > "u") return;
						if (!Array.isArray(S)) {
							console.warn(
								`[${$}]: language configuration: expected \`onEnterRules\` to be an array.`,
							);
							return;
						}
						let I;
						for (let T = 0, P = S.length; T < P; T++) {
							const k = S[T];
							if (!w.$ng(k)) {
								console.warn(
									`[${$}]: language configuration: expected \`onEnterRules[${T}]\` to be an object.`,
								);
								continue;
							}
							if (!w.$ng(k.action)) {
								console.warn(
									`[${$}]: language configuration: expected \`onEnterRules[${T}].action\` to be an object.`,
								);
								continue;
							}
							let L;
							if (k.action.indent === "none") L = E.IndentAction.None;
							else if (k.action.indent === "indent") L = E.IndentAction.Indent;
							else if (k.action.indent === "indentOutdent")
								L = E.IndentAction.IndentOutdent;
							else if (k.action.indent === "outdent")
								L = E.IndentAction.Outdent;
							else {
								console.warn(
									`[${$}]: language configuration: expected \`onEnterRules[${T}].action.indent\` to be 'none', 'indent', 'indentOutdent' or 'outdent'.`,
								);
								continue;
							}
							const D = { indentAction: L };
							k.action.appendText &&
								(typeof k.action.appendText == "string"
									? (D.appendText = k.action.appendText)
									: console.warn(
											`[${$}]: language configuration: expected \`onEnterRules[${T}].action.appendText\` to be undefined or a string.`,
										)),
								k.action.removeText &&
									(typeof k.action.removeText == "number"
										? (D.removeText = k.action.removeText)
										: console.warn(
												`[${$}]: language configuration: expected \`onEnterRules[${T}].action.removeText\` to be undefined or a number.`,
											));
							const M = this.w(
								$,
								`onEnterRules[${T}].beforeText`,
								k.beforeText,
							);
							if (!M) continue;
							const N = { beforeText: M, action: D };
							if (k.afterText) {
								const A = this.w(
									$,
									`onEnterRules[${T}].afterText`,
									k.afterText,
								);
								A && (N.afterText = A);
							}
							if (k.previousLineText) {
								const A = this.w(
									$,
									`onEnterRules[${T}].previousLineText`,
									k.previousLineText,
								);
								A && (N.previousLineText = A);
							}
							(I = I || []), I.push(N);
						}
						return I;
					}
					static extractValidConfig($, v) {
						const S = this.m($, v),
							I = this.n($, v),
							T = this.q($, v),
							P = this.r($, v),
							k = this.s($, v),
							L =
								typeof v.autoCloseBefore == "string"
									? v.autoCloseBefore
									: void 0,
							D = v.wordPattern
								? this.w($, "wordPattern", v.wordPattern)
								: void 0,
							M = v.indentationRules ? this.y($, v.indentationRules) : void 0;
						let N;
						if (v.folding) {
							const O = v.folding.markers,
								B =
									O && O.start
										? this.w($, "folding.markers.start", O.start)
										: void 0,
								U =
									O && O.end ? this.w($, "folding.markers.end", O.end) : void 0,
								z = B && U ? { start: B, end: U } : void 0;
							N = { offSide: v.folding.offSide, markers: z };
						}
						const A = this.t($, v);
						return {
							comments: S,
							brackets: I,
							wordPattern: D,
							indentationRules: M,
							onEnterRules: A,
							autoClosingPairs: T,
							surroundingPairs: P,
							colorizedBracketPairs: k,
							autoCloseBefore: L,
							folding: N,
							__electricCharacterSupport: void 0,
						};
					}
					u($, v) {
						const S = g.extractValidConfig($, v);
						this.g.register($, S, 50);
					}
					static w($, v, S) {
						if (typeof S == "string")
							try {
								return new RegExp(S, "");
							} catch (I) {
								console.warn(
									`[${$}]: Invalid regular expression in \`${v}\`: `,
									I,
								);
								return;
							}
						if (w.$ng(S)) {
							if (typeof S.pattern != "string") {
								console.warn(
									`[${$}]: language configuration: expected \`${v}.pattern\` to be a string.`,
								);
								return;
							}
							if (typeof S.flags < "u" && typeof S.flags != "string") {
								console.warn(
									`[${$}]: language configuration: expected \`${v}.flags\` to be a string.`,
								);
								return;
							}
							try {
								return new RegExp(S.pattern, S.flags);
							} catch (I) {
								console.warn(
									`[${$}]: Invalid regular expression in \`${v}\`: `,
									I,
								);
								return;
							}
						}
						console.warn(
							`[${$}]: language configuration: expected \`${v}\` to be a string or an object.`,
						);
					}
					static y($, v) {
						const S = this.w(
							$,
							"indentationRules.increaseIndentPattern",
							v.increaseIndentPattern,
						);
						if (!S) return;
						const I = this.w(
							$,
							"indentationRules.decreaseIndentPattern",
							v.decreaseIndentPattern,
						);
						if (!I) return;
						const T = { increaseIndentPattern: S, decreaseIndentPattern: I };
						return (
							v.indentNextLinePattern &&
								(T.indentNextLinePattern = this.w(
									$,
									"indentationRules.indentNextLinePattern",
									v.indentNextLinePattern,
								)),
							v.unIndentedLinePattern &&
								(T.unIndentedLinePattern = this.w(
									$,
									"indentationRules.unIndentedLinePattern",
									v.unIndentedLinePattern,
								)),
							T
						);
					}
				});
				(e.$qmc = f),
					(e.$qmc =
						f =
						g =
							Ne([j(0, d.$nM), j(1, h.$bYb), j(2, u.$q2), j(3, C.$aN)], f));
				const b = "vscode://schemas/language-configuration",
					s = {
						allowComments: !0,
						allowTrailingCommas: !0,
						default: {
							comments: { blockComment: ["/*", "*/"], lineComment: "//" },
							brackets: [
								["(", ")"],
								["[", "]"],
								["{", "}"],
							],
							autoClosingPairs: [
								["(", ")"],
								["[", "]"],
								["{", "}"],
							],
							surroundingPairs: [
								["(", ")"],
								["[", "]"],
								["{", "}"],
							],
						},
						definitions: {
							openBracket: {
								type: "string",
								description: t.localize(4922, null),
							},
							closeBracket: {
								type: "string",
								description: t.localize(4923, null),
							},
							bracketPair: {
								type: "array",
								items: [
									{ $ref: "#/definitions/openBracket" },
									{ $ref: "#/definitions/closeBracket" },
								],
							},
						},
						properties: {
							comments: {
								default: { blockComment: ["/*", "*/"], lineComment: "//" },
								description: t.localize(4924, null),
								type: "object",
								properties: {
									blockComment: {
										type: "array",
										description: t.localize(4925, null),
										items: [
											{ type: "string", description: t.localize(4926, null) },
											{ type: "string", description: t.localize(4927, null) },
										],
									},
									lineComment: {
										type: "string",
										description: t.localize(4928, null),
									},
								},
							},
							brackets: {
								default: [
									["(", ")"],
									["[", "]"],
									["{", "}"],
								],
								markdownDescription: t.localize(
									4929,
									null,
									"`colorizedBracketPairs`",
								),
								type: "array",
								items: { $ref: "#/definitions/bracketPair" },
							},
							colorizedBracketPairs: {
								default: [
									["(", ")"],
									["[", "]"],
									["{", "}"],
								],
								markdownDescription: t.localize(4930, null, "`brackets`"),
								type: "array",
								items: { $ref: "#/definitions/bracketPair" },
							},
							autoClosingPairs: {
								default: [
									["(", ")"],
									["[", "]"],
									["{", "}"],
								],
								description: t.localize(4931, null),
								type: "array",
								items: {
									oneOf: [
										{ $ref: "#/definitions/bracketPair" },
										{
											type: "object",
											properties: {
												open: { $ref: "#/definitions/openBracket" },
												close: { $ref: "#/definitions/closeBracket" },
												notIn: {
													type: "array",
													description: t.localize(4932, null),
													items: { enum: ["string", "comment"] },
												},
											},
										},
									],
								},
							},
							autoCloseBefore: {
								default: `;:.,=}])> 
	`,
								description: t.localize(4933, null),
								type: "string",
							},
							surroundingPairs: {
								default: [
									["(", ")"],
									["[", "]"],
									["{", "}"],
								],
								description: t.localize(4934, null),
								type: "array",
								items: {
									oneOf: [
										{ $ref: "#/definitions/bracketPair" },
										{
											type: "object",
											properties: {
												open: { $ref: "#/definitions/openBracket" },
												close: { $ref: "#/definitions/closeBracket" },
											},
										},
									],
								},
							},
							wordPattern: {
								default: "",
								description: t.localize(4935, null),
								type: ["string", "object"],
								properties: {
									pattern: {
										type: "string",
										description: t.localize(4936, null),
										default: "",
									},
									flags: {
										type: "string",
										description: t.localize(4937, null),
										default: "g",
										pattern: "^([gimuy]+)$",
										patternErrorMessage: t.localize(4938, null),
									},
								},
							},
							indentationRules: {
								default: {
									increaseIndentPattern: "",
									decreaseIndentPattern: "",
								},
								description: t.localize(4939, null),
								type: "object",
								properties: {
									increaseIndentPattern: {
										type: ["string", "object"],
										description: t.localize(4940, null),
										properties: {
											pattern: {
												type: "string",
												description: t.localize(4941, null),
												default: "",
											},
											flags: {
												type: "string",
												description: t.localize(4942, null),
												default: "",
												pattern: "^([gimuy]+)$",
												patternErrorMessage: t.localize(4943, null),
											},
										},
									},
									decreaseIndentPattern: {
										type: ["string", "object"],
										description: t.localize(4944, null),
										properties: {
											pattern: {
												type: "string",
												description: t.localize(4945, null),
												default: "",
											},
											flags: {
												type: "string",
												description: t.localize(4946, null),
												default: "",
												pattern: "^([gimuy]+)$",
												patternErrorMessage: t.localize(4947, null),
											},
										},
									},
									indentNextLinePattern: {
										type: ["string", "object"],
										description: t.localize(4948, null),
										properties: {
											pattern: {
												type: "string",
												description: t.localize(4949, null),
												default: "",
											},
											flags: {
												type: "string",
												description: t.localize(4950, null),
												default: "",
												pattern: "^([gimuy]+)$",
												patternErrorMessage: t.localize(4951, null),
											},
										},
									},
									unIndentedLinePattern: {
										type: ["string", "object"],
										description: t.localize(4952, null),
										properties: {
											pattern: {
												type: "string",
												description: t.localize(4953, null),
												default: "",
											},
											flags: {
												type: "string",
												description: t.localize(4954, null),
												default: "",
												pattern: "^([gimuy]+)$",
												patternErrorMessage: t.localize(4955, null),
											},
										},
									},
								},
							},
							folding: {
								type: "object",
								description: t.localize(4956, null),
								properties: {
									offSide: {
										type: "boolean",
										description: t.localize(4957, null),
									},
									markers: {
										type: "object",
										description: t.localize(4958, null),
										properties: {
											start: {
												type: "string",
												description: t.localize(4959, null),
											},
											end: {
												type: "string",
												description: t.localize(4960, null),
											},
										},
									},
								},
							},
							onEnterRules: {
								type: "array",
								description: t.localize(4961, null),
								items: {
									type: "object",
									description: t.localize(4962, null),
									required: ["beforeText", "action"],
									properties: {
										beforeText: {
											type: ["string", "object"],
											description: t.localize(4963, null),
											properties: {
												pattern: {
													type: "string",
													description: t.localize(4964, null),
													default: "",
												},
												flags: {
													type: "string",
													description: t.localize(4965, null),
													default: "",
													pattern: "^([gimuy]+)$",
													patternErrorMessage: t.localize(4966, null),
												},
											},
										},
										afterText: {
											type: ["string", "object"],
											description: t.localize(4967, null),
											properties: {
												pattern: {
													type: "string",
													description: t.localize(4968, null),
													default: "",
												},
												flags: {
													type: "string",
													description: t.localize(4969, null),
													default: "",
													pattern: "^([gimuy]+)$",
													patternErrorMessage: t.localize(4970, null),
												},
											},
										},
										previousLineText: {
											type: ["string", "object"],
											description: t.localize(4971, null),
											properties: {
												pattern: {
													type: "string",
													description: t.localize(4972, null),
													default: "",
												},
												flags: {
													type: "string",
													description: t.localize(4973, null),
													default: "",
													pattern: "^([gimuy]+)$",
													patternErrorMessage: t.localize(4974, null),
												},
											},
										},
										action: {
											type: ["string", "object"],
											description: t.localize(4975, null),
											required: ["indent"],
											default: { indent: "indent" },
											properties: {
												indent: {
													type: "string",
													description: t.localize(4976, null),
													default: "indent",
													enum: ["none", "indent", "indentOutdent", "outdent"],
													markdownEnumDescriptions: [
														t.localize(4977, null),
														t.localize(4978, null),
														t.localize(4979, null),
														t.localize(4980, null),
													],
												},
												appendText: {
													type: "string",
													description: t.localize(4981, null),
													default: "",
												},
												removeText: {
													type: "number",
													description: t.localize(4982, null),
													default: 0,
												},
											},
										},
									},
								},
							},
						},
					};
				r.$Io.as(m.$Jo.JSONContribution).registerSchema(b, s);
			},
		),
		