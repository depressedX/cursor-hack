import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../proto/aiserver/v1/tools_pb.js';
import '../../../../../base/common/cancellation.js';
import '../../../../../base/common/map.js';
import '../../../../../editor/common/core/position.js';
import '../../../../../editor/common/services/languageFeatures.js';
import '../../../../../editor/common/services/resolverService.js';
import '../../../../../editor/contrib/gotoSymbol/browser/goToSymbol.js';
import '../../../../../platform/workspace/common/workspace.js';
import '../aiService.js';
import '../../../magicLink/browser/magicLinkService.js';
import '../../../textfile/common/textfiles.js';
define(
			de[3968],
			he([1, 0, 124, 33, 59, 48, 69, 42, 414, 25, 118, 241, 85]),
			function (ce /*require*/,
 e /*exports*/,
 t /*tools_pb*/,
 i /*cancellation*/,
 w /*map*/,
 E /*position*/,
 C /*languageFeatures*/,
 d /*resolverService*/,
 m /*goToSymbol*/,
 r /*workspace*/,
 u /*aiService*/,
 a /*magicLinkService*/,
 h /*textfiles*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$I8b = void 0);
				let c = class {
					constructor(g, p, o, f, b, s) {
						(this.b = g),
							(this.c = p),
							(this.d = o),
							(this.e = f),
							(this.f = b),
							(this.g = s),
							(this.a = new w.$Jc(10));
					}
					async call(g, p, o, f) {
						if (!p)
							throw new Error(
								"No gotodef parameters provided. Need to give at least the symbol.",
							);
						if (
							p.relativeWorkspacePath === void 0 ||
							p.symbol === void 0 ||
							p.lineNumber === void 0
						)
							throw new Error(
								"For now, gotodef needs to be very precise. Need to give at least the symbol, relative workspace path and line number.",
							);
						const l = await this.b.getMagicURIForText(p.relativeWorkspacePath);
						if (!l)
							throw new Error(
								`Could not find file ${p.relativeWorkspacePath} in the workspace.`,
							);
						let y;
						try {
							y = await this.c.createModelReference(l);
							const v = y.object.textEditorModel
								.getLineContent(p.lineNumber)
								.indexOf(p.symbol);
							if (v === -1)
								throw new Error(
									`Could not find symbol \`${p.symbol}\` in line ${p.lineNumber} of file \`${p.relativeWorkspacePath}\`.`,
								);
							const S = new E.$hL(p.lineNumber, v + 1 + p.symbol.length - 1),
								I = new i.$Ce();
							o.signal.addEventListener("abort", () => {
								I.cancel();
							}),
								setTimeout(() => {
									I.cancel();
								}, 5e3);
							const P = (
									await (0, m.$POb)(
										this.e.definitionProvider,
										y.object.textEditorModel,
										S,
										!1,
										I.token,
									)
								).map(async (L) => {
									const M = (
											await this.f.read(L.uri, { acceptTextOnly: !0 })
										).value.split(`
`),
										N = Math.max(0, L.range.startLineNumber - 1 - 5),
										A = Math.min(M.length, L.range.endLineNumber + 5),
										R = M.slice(N, A);
									return new t.$nz({
										relativeWorkspacePath: this.g.asRelativePath(L.uri),
										potentiallyRelevantLines: R.map(
											(O, B) => new t.$oz({ lineNumber: B + N + 1, text: O }),
										),
									});
								}),
								k = await Promise.all(P);
							this.a.set(g.toolformerId, new t.$pz({ results: k }));
						} finally {
							y?.dispose();
						}
					}
					async finish(g, p, o, f) {
						const b = this.a.get(g.toolformerId);
						if (!b) throw new Error("No gotodef result found.");
						return b;
					}
				};
				(e.$I8b = c),
					(e.$I8b = c =
						Ne(
							[
								j(0, a.$q8b),
								j(1, d.$MO),
								j(2, u.$Nfc),
								j(3, C.$k3),
								j(4, h.$kZ),
								j(5, r.$Vi),
							],
							c,
						));
			},
		)
