import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../platform/contextkey/common/contextkey.js';
define(de[505], he([1, 0, 4, 8]), function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*contextkey*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.CommentContextKeys = void 0),
				(t = mt(t));
			var w;
			(function (E) {
				(E.activeCursorHasCommentingRange = new i.$5j(
					"activeCursorHasCommentingRange",
					!1,
					{ description: t.localize(5109, null), type: "boolean" },
				)),
					(E.activeEditorHasCommentingRange = new i.$5j(
						"activeEditorHasCommentingRange",
						!1,
						{ description: t.localize(5110, null), type: "boolean" },
					)),
					(E.WorkspaceHasCommenting = new i.$5j("workspaceHasCommenting", !1, {
						description: t.localize(5111, null),
						type: "boolean",
					})),
					(E.commentThreadIsEmpty = new i.$5j("commentThreadIsEmpty", !1, {
						type: "boolean",
						description: t.localize(5112, null),
					})),
					(E.commentIsEmpty = new i.$5j("commentIsEmpty", !1, {
						type: "boolean",
						description: t.localize(5113, null),
					})),
					(E.commentContext = new i.$5j("comment", void 0, {
						type: "string",
						description: t.localize(5114, null),
					})),
					(E.commentThreadContext = new i.$5j("commentThread", void 0, {
						type: "string",
						description: t.localize(5115, null),
					})),
					(E.commentControllerContext = new i.$5j("commentController", void 0, {
						type: "string",
						description: t.localize(5116, null),
					})),
					(E.commentFocused = new i.$5j("commentFocused", !1, {
						type: "boolean",
						description: t.localize(5117, null),
					}));
			})(w || (e.CommentContextKeys = w = {}));
		})
