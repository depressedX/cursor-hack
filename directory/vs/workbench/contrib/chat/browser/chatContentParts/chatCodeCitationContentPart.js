import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/browser/dom.js';
import '../../../../../base/browser/ui/button/button.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../nls.js';
import '../../../../../platform/telemetry/common/telemetry.js';
import '../../common/chatModel.js';
import '../../../../services/editor/common/editorService.js';
define(
			de[3262],
			he([1, 0, 7, 183, 3, 4, 32, 441, 18]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*button*/,
 w /*lifecycle*/,
 E /*nls*/,
 C /*telemetry*/,
 d /*chatModel*/,
 m /*editorService*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$dUb = void 0),
					(t = mt(t));
				let r = class extends w.$1c {
					constructor(a, h, c, n) {
						super(), (this.a = c), (this.b = n);
						const g = (0, d.$a3)(a.citations),
							p = t.h(".chat-code-citation-message@root", [
								t.h("span.chat-code-citation-label@label"),
								t.h(".chat-code-citation-button-container@button"),
							]);
						p.label.textContent = g + " - ";
						const o = this.D(
							new i.$oob(p.button, {
								buttonBackground: void 0,
								buttonBorder: void 0,
								buttonForeground: void 0,
								buttonHoverBackground: void 0,
								buttonSecondaryBackground: void 0,
								buttonSecondaryForeground: void 0,
								buttonSecondaryHoverBackground: void 0,
								buttonSeparator: void 0,
							}),
						);
						(o.label = (0, E.localize)(4654, null)),
							this.D(
								o.onDidClick(() => {
									const f =
										`# Code Citations

` +
										a.citations
											.map(
												(b) => `## License: ${b.license}
${b.value.toString()}

\`\`\`
${b.snippet}
\`\`\`

`,
											)
											.join(`
`);
									this.a.openEditor({
										resource: void 0,
										contents: f,
										languageId: "markdown",
									}),
										this.b.publicLog2("openedChatCodeCitations");
								}),
							),
							(this.domNode = p.root);
					}
					hasSameContent(a, h, c) {
						return a.kind === "codeCitations";
					}
				};
				(e.$dUb = r), (e.$dUb = r = Ne([j(2, m.$IY), j(3, C.$km)], r));
			},
		)
