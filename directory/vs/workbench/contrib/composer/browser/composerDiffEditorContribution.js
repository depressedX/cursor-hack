import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/registry/common/platform.js';
import '../../../browser/editor.js';
import './composerDiffEditor.js';
import './composerDiffEditorInput.js';
import '../../../../platform/instantiation/common/descriptors.js';
import '../../../common/editor.js';
define(
			de[4372],
			he([1, 0, 30, 192, 4371, 1828, 102, 44]),
			function (ce /*require*/,
 e /*exports*/,
 t /*platform*/,
 i /*editor*/,
 w /*composerDiffEditor*/,
 E /*composerDiffEditorInput*/,
 C /*descriptors*/,
 d /*editor*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					t.$Io
						.as(d.$a1.EditorPane)
						.registerEditorPane(
							i.$vVb.create(
								w.ComposerDiffEditor,
								w.ComposerDiffEditor.ID,
								"Composer Diff Editor",
							),
							[new C.$Ji(E.ComposerDiffEditorInput)],
						);
			},
		)
