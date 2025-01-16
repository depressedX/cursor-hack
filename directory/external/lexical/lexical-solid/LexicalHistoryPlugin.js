define(de[2610], he([1, 0, 181, 1565, 922]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.createEmptyHistoryState = void 0),
				(e.HistoryPlugin = E);
			function E(C) {
				const [d] = (0, t.useLexicalComposerContext)();
				return (0, i.useHistory)(d, () => C.externalHistoryState), null;
			}
			Object.defineProperty(e, "createEmptyHistoryState", {
				enumerable: !0,
				get: function () {
					return w.createEmptyHistoryState;
				},
			});
		}),
		define(
			de[2611],
			he([1, 0, 924, 304, 164, 13]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.useList = C);
				function C(d) {
					(0, E.onCleanup)(
						(0, i.mergeRegister)(
							d.registerCommand(
								t.INSERT_ORDERED_LIST_COMMAND,
								() => ((0, t.insertList)(d, "number"), !0),
								w.COMMAND_PRIORITY_LOW,
							),
							d.registerCommand(
								t.INSERT_UNORDERED_LIST_COMMAND,
								() => ((0, t.insertList)(d, "bullet"), !0),
								w.COMMAND_PRIORITY_LOW,
							),
							d.registerCommand(
								t.REMOVE_LIST_COMMAND,
								() => ((0, t.removeList)(d), !0),
								w.COMMAND_PRIORITY_LOW,
							),
							d.registerCommand(
								w.INSERT_PARAGRAPH_COMMAND,
								() => !!(0, t.$handleListInsertParagraph)(),
								w.COMMAND_PRIORITY_LOW,
							),
						),
					);
				}
			},
		),
		define(
			de[2612],
			he([1, 0, 924, 924, 13, 181, 2611]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ListPlugin = d);
				function d() {
					const [m] = (0, E.useLexicalComposerContext)();
					return (
						(0, w.createEffect)(() => {
							if (!m.hasNodes([i.ListNode, t.ListItemNode]))
								throw new Error(
									"ListPlugin: ListNode and/or ListItemNode not registered on editor",
								);
						}),
						(0, C.useList)(m),
						null
					);
				}
			},
		),
		define(
			de[2613],
			he([1, 0, 13, 2599, 304, 2]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.usePlainTextSetup = C);
				function C(d) {
					E.isServer ||
						(0, t.onCleanup)((0, w.mergeRegister)((0, i.registerPlainText)(d)));
				}
			},
		),
		define(
			de[1160],
			he([1, 0, 2, 2, 181, 2156, 2607, 2158, 2613, 13]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.PlainTextPlugin = u),
					(e.Placeholder = a);
				function u(h) {
					const [c] = (0, w.useLexicalComposerContext)(),
						n = (0, d.useDecorators)(c, h.errorBoundary);
					return (
						(0, m.usePlainTextSetup)(c),
						[
							(0, i.memo)(() => h.contentEditable),
							(0, t.createComponent)(a, {
								get content() {
									return h.placeholder;
								},
							}),
							n,
						]
					);
				}
				function a(h) {
					const [c] = (0, w.useLexicalComposerContext)(),
						n = (0, C.useCanShowPlaceholder)(c),
						g = (0, E.useLexicalEditable)(),
						p = (0, r.createMemo)(() => h.content);
					return (0, t.createComponent)(r.Show, {
						get when() {
							return n();
						},
						get children() {
							return (0, t.createComponent)(r.Show, {
								get when() {
									return typeof p() == "function";
								},
								get fallback() {
									return p();
								},
								get children() {
									return (0, r.untrack)(() => p()(g()));
								},
							});
						},
					});
				}
			},
		),
		