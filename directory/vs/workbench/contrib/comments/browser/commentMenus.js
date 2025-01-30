import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/actions/browser/menuEntryActionViewItem.js';
define(de[3028], he([1, 0, 11, 92]), function (ce /*require*/,
 e /*exports*/,
 t /*actions*/,
 i /*menuEntryActionViewItem*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$22b = void 0);
			let w = class {
				constructor(C) {
					this.a = C;
				}
				getCommentThreadTitleActions(C) {
					return this.b(t.$XX.CommentThreadTitle, C);
				}
				getCommentThreadActions(C) {
					return this.b(t.$XX.CommentThreadActions, C);
				}
				getCommentEditorActions(C) {
					return this.b(t.$XX.CommentEditorActions, C);
				}
				getCommentThreadAdditionalActions(C) {
					return this.b(t.$XX.CommentThreadAdditionalActions, C);
				}
				getCommentTitleActions(C, d) {
					return this.b(t.$XX.CommentTitle, d);
				}
				getCommentActions(C, d) {
					return this.b(t.$XX.CommentActions, d);
				}
				getCommentThreadTitleContextActions(C) {
					return this.b(t.$XX.CommentThreadTitleContext, C);
				}
				b(C, d) {
					const m = this.a.createMenu(C, d),
						a = { primary: [], secondary: [] };
					return (0, i.$Jyb)(m, { shouldForwardArgs: !0 }, a, "inline"), m;
				}
				dispose() {}
			};
			(e.$22b = w), (e.$22b = w = Ne([j(0, t.$YX)], w));
		}),
		