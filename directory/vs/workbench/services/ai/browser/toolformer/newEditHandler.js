import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../proto/aiserver/v1/tools_pb.js';
import '../../../../../editor/common/services/resolverService.js';
import '../../../magicLink/browser/magicLinkService.js';
import '../../../../../editor/common/core/range.js';
import '../../../../../editor/browser/services/simpleInlineDiffService.js';
import '../../../../../platform/markers/common/markers.js';
import '../../../../../platform/workspace/common/workspace.js';
import '../../../../../platform/commands/common/commands.js';
import '../../../../../editor/common/core/position.js';
define(
			de[3969],
			he([1, 0, 124, 42, 241, 17, 545, 90, 25, 31, 48]),
			function (ce /*require*/,
 e /*exports*/,
 t /*tools_pb*/,
 i /*resolverService*/,
 w /*magicLinkService*/,
 E /*range*/,
 C /*simpleInlineDiffService*/,
 d /*markers*/,
 m /*workspace*/,
 r /*commands*/,
 u /*position*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$J8b = void 0);
				let a = class {
					constructor(c, n, g, p, o, f) {
						(this.a = c),
							(this.b = n),
							(this.c = g),
							(this.d = p),
							(this.e = o),
							(this.f = f);
					}
					async call(c, n, g, p) {
						const o = await this.a.getMagicURIForText(
							n?.relativeWorkspacePath ?? "",
						);
						if (!o)
							throw new Error(
								"Unable to resolve URI for the given relative workspace path",
							);
						const f = await this.b.createModelReference(o),
							b = f.object.textEditorModel;
						if (n !== void 0) {
							n.firstEdit &&
								(b.pushEditOperations(
									[],
									[{ range: b.getFullModelRange(), text: "" }],
									() => null,
								),
								(c.cursorPos = new u.$hL(1, 1)));
							const s = c.cursorPos,
								l = [
									{
										range: new E.$iL(
											s.lineNumber,
											s.column,
											s.lineNumber,
											s.column,
										),
										text: n.text,
										forceMoveMarkers: !0,
									},
								];
							b.pushEditOperations([], l, () => null),
								(c.cursorPos = b.getFullModelRange().getEndPosition());
						}
						f.dispose();
					}
					async finish(c, n, g, p) {
						return new t.$sz();
					}
				};
				(e.$J8b = a),
					(e.$J8b = a =
						Ne(
							[
								j(0, w.$q8b),
								j(1, i.$MO),
								j(2, C.$z8b),
								j(3, d.$aM),
								j(4, m.$Vi),
								j(5, r.$ek),
							],
							a,
						));
			},
		),
		