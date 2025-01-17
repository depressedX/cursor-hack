import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/solid.js';
import '../../../aiMarkdown/browser/markdown.js';
import '../../../controlCommon/browser/solid.js';
import '../../../ui/browser/collapsible/collapsible.js';
import '../hooks/useComposerDataHandle.js';
import '../../../../../css!vs/workbench/contrib/composer/browser/components/ComposerThoughtMessage.js';
define(
			de[4280],
			he([1, 0, 2, 2, 13, 338, 36, 696, 177, 2417]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ComposerThoughtMessage = u);
				const r = (0, t.template)(
					'<span class="composer-thought-pulsing">Thinking',
				);
				function u(a) {
					const h = (0, C.$odc)(),
						[c, n] = (0, w.createSignal)(!1),
						{ currentComposer: g } = (0, m.useComposerDataHandle)(
							() => a.composerDataHandle,
						),
						p = (0, w.createMemo)(() =>
							g().generatingBubbleIds?.includes(a.message.bubbleId),
						);
					return (0, i.createComponent)(d.$Zcc, {
						get isOpen() {
							return c();
						},
						setIsOpen: n,
						headerClass: "composer-thought-message-header",
						get title() {
							return (0, i.createComponent)(w.Show, {
								get when() {
									return p();
								},
								get fallback() {
									return "Thought";
								},
								get children() {
									return r();
								},
							});
						},
						get children() {
							return (0, i.createComponent)(E.$4$b, {
								get rawText() {
									return a.message.text;
								},
								codeBlockProps: { shouldRecompute: 0 },
								shouldFade: !1,
								get finished() {
									return !p();
								},
							});
						},
					});
				}
			},
		),
		