define(de[2596], he([1, 0, 1159, 13, 1414]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.useLexicalIsTextContentEmpty = E);
			function E(C, d) {
				const [m, r] = (0, i.createSignal)(
					C.getEditorState().read(
						(0, t.$isRootTextContentEmptyCurry)(
							C.isComposing(),
							(0, w.resolve)(d),
						),
					),
				);
				return (
					(0, i.createEffect)(() => {
						const u = C.registerUpdateListener(({ editorState: a }) => {
							const h = C.isComposing(),
								c = a.read(
									(0, t.$isRootTextContentEmptyCurry)(h, (0, w.resolve)(d)),
								);
							r(c);
						});
						(0, i.onCleanup)(u);
					}),
					m
				);
			}
		}),
		