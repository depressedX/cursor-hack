import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/registry/common/platform.js';
import '../../../common/editor.js';
import './composerEditor.js';
import './composerEditor.js';
import '../../../browser/editor.js';
import '../../../../nls.js';
import '../../../../platform/instantiation/common/descriptors.js';
import '../../../../editor/browser/editorExtensions.js';
import '../../../common/views.js';
import './composerViewsService.js';
import './composerService.js';
import './composerActions.js';
import './composerViewsService.js';
import './composerUtilsService.js';
import './composerDiffEditorContribution.js';
import './composerCapabilities.js';
import './capabilities/index.js';
define(
			de[4417],
			he([
				1, 0, 30, 44, 1076, 1076, 192, 4, 102, 46, 60, 2014, 4364, 4415, 2014,
				426, 4372, 262, 4345,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					t.$Io
						.as(u.Extensions.ViewsRegistry)
						.registerViews(
							[a.ComposerViewsService.composerViewPaneDescriptor],
							a.ComposerViewsService.composerViewPaneContainer,
						),
					t.$Io
						.as(u.Extensions.ViewsRegistry)
						.registerViews(
							[a.ComposerViewsService.chatViewPaneDescriptor],
							a.ComposerViewsService.chatViewPaneContainer,
						),
					t.$Io
						.as(i.$a1.EditorPane)
						.registerEditorPane(
							C.$vVb.create(
								w.ComposerEditor,
								w.ComposerEditor.ID,
								(0, d.localize)(5118, null),
							),
							[new m.$Ji(E.ComposerEditorInput)],
						),
					t.$Io
						.as(i.$a1.EditorFactory)
						.registerEditorSerializer(
							E.ComposerEditorInput.ID,
							w.ComposerEditorInputSerializer,
						),
					(0, r.$qtb)(
						w.ComposerEditorContribution.ID,
						w.ComposerEditorContribution,
						r.EditorContributionInstantiation.AfterFirstRender,
					);
			},
		),
		