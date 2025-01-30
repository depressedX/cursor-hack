import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/network.js';
import '../../../../editor/browser/services/codeEditorService.js';
import '../../../../editor/common/editorCommon.js';
import '../../../../editor/common/languages/language.js';
import '../../../../editor/common/services/model.js';
import '../../../../editor/common/services/resolverService.js';
import '../../../common/editor/editorOptions.js';
import './simpleCommentEditor.js';
define(
			de[3768],
			he([1, 0, 3, 23, 65, 98, 61, 67, 42, 549, 846]),
			function (ce /*require*/,
 e /*exports*/,
 t /*lifecycle*/,
 i /*network*/,
 w /*codeEditorService*/,
 E /*editorCommon*/,
 C /*language*/,
 d /*model*/,
 m /*resolverService*/,
 r /*editorOptions*/,
 u /*simpleCommentEditor*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$mSc = void 0);
				let a = class extends t.$1c {
					static {
						this.ID = "comments.input.contentProvider";
					}
					constructor(c, n, g, p) {
						super(),
							(this.a = g),
							(this.b = p),
							this.D(
								c.registerTextModelContentProvider(
									i.Schemas.commentsInput,
									this,
								),
							),
							this.D(
								n.registerCodeEditorOpenHandler(async (o, f, b) =>
									!(f instanceof u.$k3b) ||
									f.getModel()?.uri.toString() !== o.resource.toString()
										? null
										: (o.options &&
												(0, r.applyTextEditorOptions)(
													o.options,
													f,
													E.ScrollType.Immediate,
												),
											f),
								),
							);
					}
					async provideTextContent(c) {
						return (
							this.a.getModel(c) ??
							this.a.createModel("", this.b.createById("markdown"), c)
						);
					}
				};
				(e.$mSc = a),
					(e.$mSc = a =
						Ne([j(0, m.$MO), j(1, w.$dtb), j(2, d.$QO), j(3, C.$nM)], a));
			},
		),
		