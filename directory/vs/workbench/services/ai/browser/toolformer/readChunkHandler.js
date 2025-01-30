import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../proto/aiserver/v1/tools_pb.js';
import '../../../../../base/common/map.js';
import '../../../../../editor/common/services/languageFeatures.js';
import '../../../../../editor/common/services/resolverService.js';
import '../aiService.js';
import '../../../magicLink/browser/magicLinkService.js';
import '../../../textfile/common/textfiles.js';
define(
			de[3971],
			he([1, 0, 124, 59, 69, 42, 118, 241, 85]),
			function (ce /*require*/,
 e /*exports*/,
 t /*tools_pb*/,
 i /*map*/,
 w /*languageFeatures*/,
 E /*resolverService*/,
 C /*aiService*/,
 d /*magicLinkService*/,
 m /*textfiles*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$N8b = void 0);
				let r = class {
					constructor(a, h, c, n, g) {
						(this.b = a),
							(this.c = h),
							(this.d = c),
							(this.e = n),
							(this.f = g),
							(this.a = new i.$Jc(10));
					}
					async call(a, h, c, n) {
						if (!h)
							throw new Error(
								"No read chunk parameters provided. Need to give at least the path.",
							);
						const p = await this.b.getMagicURIForText(h.relativeWorkspacePath);
						if (!p)
							throw new Error(
								`Could not find file ${h.relativeWorkspacePath} in the workspace.`,
							);
						let o;
						try {
							o = await this.c.createModelReference(p);
							const f = o.object.textEditorModel.getValue(),
								b = h.numLines ?? 3e3;
							let s = h.startLineNumber ?? 1;
							if (s == 0) throw new Error("Start line number cannot be 0.");
							const l = f.split(o.object.textEditorModel.getEOL());
							s < 0 && (s = l.length + 1 + s);
							const y = Math.max(0, s - 1),
								$ = Math.min(l.length, s - 1 + b),
								v = l.slice(y, $),
								S = new t.$dz({
									relativeWorkspacePath: h.relativeWorkspacePath,
									startLineNumber: y + 1,
									lines: v,
									totalNumLines: l.length,
									cropped: b === 3e3 && l.length > 3e3,
								});
							this.a.set(a.toolformerId, S);
						} finally {
							o?.dispose();
						}
					}
					async finish(a, h, c, n) {
						const g = this.a.get(a.toolformerId);
						if (!g) throw new Error("No read result found.");
						return g;
					}
				};
				(e.$N8b = r),
					(e.$N8b = r =
						Ne(
							[
								j(0, d.$q8b),
								j(1, E.$MO),
								j(2, C.$Nfc),
								j(3, w.$k3),
								j(4, m.$kZ),
							],
							r,
						));
			},
		),
		