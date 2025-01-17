import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/contextkey/common/contextkey.js';
define(de[793], he([1, 0, 8]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.currentActiveEditorIsChat =
					e.currentComposerIsEmpty =
					e.composerProjectsIsEnabled =
					e.composerBarIsVisible =
					e.composerIsEnabled =
						void 0),
				(e.composerIsEnabled = new t.$5j("composerIsEnabled", !0)),
				(e.composerBarIsVisible = new t.$5j("composerBarIsVisible", !1)),
				(e.composerProjectsIsEnabled = new t.$5j(
					"isComposerProjectsEnabled",
					!0,
				)),
				(e.currentComposerIsEmpty = new t.$5j("currentComposerIsEmpty", !0)),
				(e.currentActiveEditorIsChat = new t.$5j(
					"currentActiveEditorIsChat",
					!1,
				));
		}),
		