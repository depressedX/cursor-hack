import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../proto/aiserver/v1/tools_pb.js';
import '../../../../../base/common/map.js';
import '../../../../../editor/common/services/languageFeatures.js';
import '../../../../../editor/common/services/resolverService.js';
import '../../../../../platform/markers/browser/markerService.js';
import '../../../../../platform/markers/common/markers.js';
import '../aiService.js';
import '../../../magicLink/browser/magicLinkService.js';
import '../../../textfile/common/textfiles.js';
define(
			de[3972],
			he([1, 0, 124, 59, 69, 42, 770, 90, 118, 241, 85]),
			function (ce /*require*/,
 e /*exports*/,
 t /*tools_pb*/,
 i /*map*/,
 w /*languageFeatures*/,
 E /*resolverService*/,
 C /*markerService*/,
 d /*markers*/,
 m /*aiService*/,
 r /*magicLinkService*/,
 u /*textfiles*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$S8b = void 0);
				let a = class {
					constructor(c, n, g, p, o, f) {
						(this.b = c),
							(this.c = n),
							(this.d = g),
							(this.e = p),
							(this.f = o),
							(this.g = f),
							(this.a = new i.$Jc(10));
					}
					async call(c, n, g, p) {
						if (!n)
							throw new Error(
								"No read chunk parameters provided. Need to give at least the path.",
							);
						const f = await this.b.getMagicURIForText(n.relativeWorkspacePath);
						if (!f)
							throw new Error(
								`Could not find file ${n.relativeWorkspacePath} in the workspace.`,
							);
						let b;
						try {
							b = await this.c.createModelReference(f);
							const s = b.object.textEditorModel.getValue(),
								l = this.g.read({
									resource: b.object.textEditorModel.uri,
									severities: d.MarkerSeverity.Error,
								}),
								y = new t.$Yy({ contents: s, diagnostics: l.map(C.$P7b) });
							this.a.set(c.toolformerId, y);
						} finally {
							b?.dispose();
						}
					}
					async finish(c, n, g) {
						const p = this.a.get(c.toolformerId);
						if (!p) throw new Error("No read result found.");
						return p;
					}
				};
				(e.$S8b = a),
					(e.$S8b = a =
						Ne(
							[
								j(0, r.$q8b),
								j(1, E.$MO),
								j(2, m.$Nfc),
								j(3, w.$k3),
								j(4, u.$kZ),
								j(5, d.$aM),
							],
							a,
						));
			},
		)
