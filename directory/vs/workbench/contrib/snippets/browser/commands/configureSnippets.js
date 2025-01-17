import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/extpath.js';
import '../../../../../base/common/path.js';
import '../../../../../base/common/resources.js';
import '../../../../../base/common/uri.js';
import '../../../../../editor/common/languages/language.js';
import '../../../../../editor/common/services/getIconClasses.js';
import '../../../../../nls.js';
import '../../../../../platform/actions/common/actions.js';
import '../../../../../platform/files/common/files.js';
import '../../../../../platform/label/common/label.js';
import '../../../../../platform/opener/common/opener.js';
import '../../../../../platform/quickinput/common/quickInput.js';
import '../../../../../platform/workspace/common/workspace.js';
import './abstractSnippetsActions.js';
import '../snippets.js';
import '../snippetsFile.js';
import '../../../../services/textfile/common/textfiles.js';
import '../../../../services/userDataProfile/common/userDataProfile.js';
define(
			de[3760],
			he([
				1, 0, 249, 54, 19, 9, 61, 252, 4, 11, 22, 73, 41, 63, 25, 994, 510, 805,
				85, 133,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f, b) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$2Xc = void 0),
					(m = mt(m));
				var s;
				(function (S) {
					function I(T) {
						return !!T && E.URI.isUri(T.filepath);
					}
					S.is = I;
				})(s || (s = {}));
				async function l(S, I, T, P) {
					const k = [],
						L = [],
						D = new Set(),
						M = new Map();
					for (const A of await S.getSnippetFiles())
						if (A.source !== o.SnippetSource.Extension)
							if (A.isGlobalSnippets) {
								await A.load();
								const R = new Set();
								let O;
								e: for (const F of A.data) {
									O || (O = F.source);
									for (const x of F.scopes) {
										const H = T.getLanguageName(x);
										if (H)
											if (R.size >= 4) {
												R.add(`${H}...`);
												break e;
											} else R.add(H);
									}
								}
								const B = {
									label: (0, w.$kh)(A.location),
									filepath: A.location,
									description:
										R.size === 0
											? m.localize(9430, null)
											: m.localize(9431, null, [...R].join(", ")),
								};
								if ((k.push(B), !O)) continue;
								const U = m.localize(
										9432,
										null,
										O,
										P.getUriLabel(A.location, { relative: !0 }),
									),
									z = M.get((0, w.$kh)(A.location));
								z && ((B.detail = U), (z.snippet.detail = z.detail)),
									M.set((0, w.$kh)(A.location), { snippet: B, detail: U });
							} else {
								const R = (0, w.$kh)(A.location).replace(/\.json$/, "");
								k.push({
									label: (0, w.$kh)(A.location),
									description: `(${T.getLanguageName(R)})`,
									filepath: A.location,
								}),
									D.add(R);
							}
					const N = I.currentProfile.snippetsHome;
					for (const A of T.getRegisteredLanguageIds()) {
						const R = T.getLanguageName(A);
						R &&
							!D.has(A) &&
							L.push({
								label: A,
								description: `(${R})`,
								filepath: (0, w.$nh)(N, `${A}.json`),
								hint: !0,
								iconClasses: (0, d.$CDb)(A),
							});
					}
					return (
						k.sort((A, R) => {
							const O = (0, i.$tc)(A.filepath.path),
								B = (0, i.$tc)(R.filepath.path);
							return O === B
								? A.label.localeCompare(R.label)
								: O === ".code-snippets"
									? -1
									: 1;
						}),
						L.sort((A, R) => A.label.localeCompare(R.label)),
						{ existing: k, future: L }
					);
				}
				async function y(S, I, T, P, k, L) {
					function D(A) {
						const R =
							(0, i.$tc)(A) !== ".code-snippets" ? `${A}.code-snippets` : A;
						return (0, w.$nh)(I, R);
					}
					await P.createFolder(I);
					const M = await T.input({
						placeHolder: m.localize(9433, null),
						async validateInput(A) {
							if (!A) return m.localize(9434, null);
							if (!(0, t.$Jg)(A)) return m.localize(9435, null, A);
							if (await P.exists(D(A))) return m.localize(9436, null, A);
						},
					});
					if (!M) return;
					const N = D(M);
					await k.write(
						N,
						[
							"{",
							"	// Place your " +
								S +
								" snippets here. Each snippet is defined under a snippet name and has a scope, prefix, body and ",
							"	// description. Add comma separated ids of the languages where the snippet is applicable in the scope field. If scope ",
							"	// is left empty or omitted, the snippet gets applied to all languages. The prefix is what is ",
							"	// used to trigger the snippet and the body will be expanded and inserted. Possible variables are: ",
							"	// $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. ",
							"	// Placeholders with the same ids are connected.",
							"	// Example:",
							'	// "Print to console": {',
							'	// 	"scope": "javascript,typescript",',
							'	// 	"prefix": "log",',
							'	// 	"body": [',
							`	// 		"console.log('$1');",`,
							'	// 		"$2"',
							"	// 	],",
							'	// 	"description": "Log output to console"',
							"	// }",
							"}",
						].join(`
`),
					),
						await L.open(N);
				}
				async function $(S, I, T) {
					if (await I.exists(S.filepath)) return;
					const P = [
						"{",
						"	// Place your snippets for " +
							S.label +
							" here. Each snippet is defined under a snippet name and has a prefix, body and ",
						"	// description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:",
						"	// $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. Placeholders with the ",
						"	// same ids are connected.",
						"	// Example:",
						'	// "Print to console": {',
						'	// 	"prefix": "log",',
						'	// 	"body": [',
						`	// 		"console.log('$1');",`,
						'	// 		"$2"',
						"	// 	],",
						'	// 	"description": "Log output to console"',
						"	// }",
						"}",
					].join(`
`);
					await T.write(S.filepath, P);
				}
				class v extends g.$FFc {
					constructor() {
						super({
							id: "workbench.action.openSnippets",
							title: m.localize2(9446, "Configure Snippets"),
							shortTitle: {
								...m.localize2(9447, "Snippets"),
								mnemonicTitle: m.localize(9437, null),
							},
							f1: !0,
							menu: [
								{
									id: r.$XX.MenubarPreferencesMenu,
									group: "2_configuration",
									order: 5,
								},
								{
									id: r.$XX.GlobalActivity,
									group: "2_configuration",
									order: 5,
								},
							],
						});
					}
					async run(I) {
						const T = I.get(p.$gYb),
							P = I.get(c.$DJ),
							k = I.get(h.$7rb),
							L = I.get(C.$nM),
							D = I.get(b.$P8),
							M = I.get(n.$Vi),
							N = I.get(u.$ll),
							A = I.get(f.$kZ),
							R = I.get(a.$3N),
							O = await l(T, D, L, R),
							B = O.existing,
							U = [
								{
									scope: m.localize(9438, null),
									label: m.localize(9439, null),
									uri: D.currentProfile.snippetsHome,
								},
							],
							z = [];
						for (const x of M.getWorkspace().folders)
							z.push({
								scope: m.localize(9440, null, x.name),
								label: m.localize(9441, null, x.name),
								uri: x.toResource(".vscode"),
							});
						B.length > 0
							? (B.unshift({
									type: "separator",
									label: m.localize(9442, null),
								}),
								B.push({ type: "separator", label: m.localize(9443, null) }))
							: B.push({ type: "separator", label: m.localize(9444, null) });
						const F = await P.pick([].concat(B, U, z, O.future), {
							placeHolder: m.localize(9445, null),
							matchOnDescription: !0,
						});
						if (U.indexOf(F) >= 0) return y(F.scope, F.uri, P, N, A, k);
						if (z.indexOf(F) >= 0) return y(F.scope, F.uri, P, N, A, k);
						if (s.is(F))
							return F.hint && (await $(F, N, A)), k.open(F.filepath);
					}
				}
				e.$2Xc = v;
			},
		),
		