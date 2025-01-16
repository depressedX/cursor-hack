define(de[2595], he([1, 0, 181, 164, 13]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.ClearEditorPlugin = E);
			function E(C) {
				const [d] = (0, t.useLexicalComposerContext)();
				return (
					(0, w.onCleanup)(
						d.registerCommand(
							i.CLEAR_EDITOR_COMMAND,
							(m) => (
								d.update(() => {
									if (C.onClear == null) {
										const r = (0, i.$getRoot)(),
											u = (0, i.$getSelection)(),
											a = (0, i.$createParagraphNode)();
										r.clear(), r.append(a), u !== null && a.select();
									} else C.onClear();
								}),
								!0
							),
							i.COMMAND_PRIORITY_EDITOR,
						),
					),
					null
				);
			}
		}),
		