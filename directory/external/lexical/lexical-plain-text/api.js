define(
			de[2599],
			he([1, 0, 2598, 921, 304, 164, 1416]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.onCopyForPlainText = d),
					(e.onPasteForPlainText = m),
					(e.onCutForPlainText = r),
					(e.registerPlainText = u);
				function d(a, h) {
					h.update(() => {
						const c = a instanceof KeyboardEvent ? null : a.clipboardData,
							n = (0, E.$getSelection)();
						if (n !== null && c != null) {
							a.preventDefault();
							const g = (0, t.$getHtmlContent)(h);
							g !== null && c.setData("text/html", g),
								c.setData("text/plain", n.getTextContent());
						}
					});
				}
				function m(a, h) {
					a.preventDefault(),
						h.update(
							() => {
								const c = (0, E.$getSelection)(),
									n =
										a instanceof InputEvent || a instanceof KeyboardEvent
											? null
											: a.clipboardData;
								n != null &&
									(0, E.$isRangeSelection)(c) &&
									(0, t.$insertDataTransferForPlainText)(n, c);
							},
							{ tag: "paste" },
						);
				}
				function r(a, h) {
					d(a, h),
						h.update(() => {
							const c = (0, E.$getSelection)();
							(0, E.$isRangeSelection)(c) && c.removeText();
						});
				}
				function u(a) {
					return (0, w.mergeRegister)(
						a.registerCommand(
							E.DELETE_CHARACTER_COMMAND,
							(c) => {
								const n = (0, E.$getSelection)();
								return (0, E.$isRangeSelection)(n)
									? (n.deleteCharacter(c), !0)
									: !1;
							},
							E.COMMAND_PRIORITY_EDITOR,
						),
						a.registerCommand(
							E.DELETE_WORD_COMMAND,
							(c) => {
								const n = (0, E.$getSelection)();
								return (0, E.$isRangeSelection)(n) ? (n.deleteWord(c), !0) : !1;
							},
							E.COMMAND_PRIORITY_EDITOR,
						),
						a.registerCommand(
							E.DELETE_LINE_COMMAND,
							(c) => {
								const n = (0, E.$getSelection)();
								return (0, E.$isRangeSelection)(n) ? (n.deleteLine(c), !0) : !1;
							},
							E.COMMAND_PRIORITY_EDITOR,
						),
						a.registerCommand(
							E.CONTROLLED_TEXT_INSERTION_COMMAND,
							(c) => {
								const n = (0, E.$getSelection)();
								if (!(0, E.$isRangeSelection)(n)) return !1;
								if (typeof c == "string") n.insertText(c);
								else {
									const g = c.dataTransfer;
									if (g != null) (0, t.$insertDataTransferForPlainText)(g, n);
									else {
										const p = c.data;
										p && n.insertText(p);
									}
								}
								return !0;
							},
							E.COMMAND_PRIORITY_EDITOR,
						),
						a.registerCommand(
							E.REMOVE_TEXT_COMMAND,
							() => {
								const c = (0, E.$getSelection)();
								return (0, E.$isRangeSelection)(c) ? (c.removeText(), !0) : !1;
							},
							E.COMMAND_PRIORITY_EDITOR,
						),
						a.registerCommand(
							E.INSERT_LINE_BREAK_COMMAND,
							(c) => {
								const n = (0, E.$getSelection)();
								return (0, E.$isRangeSelection)(n)
									? (n.insertLineBreak(c), !0)
									: !1;
							},
							E.COMMAND_PRIORITY_EDITOR,
						),
						a.registerCommand(
							E.INSERT_PARAGRAPH_COMMAND,
							() => {
								const c = (0, E.$getSelection)();
								return (0, E.$isRangeSelection)(c)
									? (c.insertLineBreak(), !0)
									: !1;
							},
							E.COMMAND_PRIORITY_EDITOR,
						),
						a.registerCommand(
							E.KEY_ARROW_LEFT_COMMAND,
							(c) => {
								const n = (0, E.$getSelection)();
								if (!(0, E.$isRangeSelection)(n)) return !1;
								const g = c,
									p = g.shiftKey;
								return (0, i.$shouldOverrideDefaultCharacterSelection)(n, !0)
									? (g.preventDefault(), (0, i.$moveCharacter)(n, p, !0), !0)
									: !1;
							},
							E.COMMAND_PRIORITY_EDITOR,
						),
						a.registerCommand(
							E.KEY_ARROW_RIGHT_COMMAND,
							(c) => {
								const n = (0, E.$getSelection)();
								if (!(0, E.$isRangeSelection)(n)) return !1;
								const g = c,
									p = g.shiftKey;
								return (0, i.$shouldOverrideDefaultCharacterSelection)(n, !1)
									? (g.preventDefault(), (0, i.$moveCharacter)(n, p, !1), !0)
									: !1;
							},
							E.COMMAND_PRIORITY_EDITOR,
						),
						a.registerCommand(
							E.KEY_BACKSPACE_COMMAND,
							(c) => {
								const n = (0, E.$getSelection)();
								return (0, E.$isRangeSelection)(n)
									? (c.preventDefault(),
										a.dispatchCommand(E.DELETE_CHARACTER_COMMAND, !0))
									: !1;
							},
							E.COMMAND_PRIORITY_EDITOR,
						),
						a.registerCommand(
							E.KEY_DELETE_COMMAND,
							(c) => {
								const n = (0, E.$getSelection)();
								return (0, E.$isRangeSelection)(n)
									? (c.preventDefault(),
										a.dispatchCommand(E.DELETE_CHARACTER_COMMAND, !1))
									: !1;
							},
							E.COMMAND_PRIORITY_EDITOR,
						),
						a.registerCommand(
							E.KEY_ENTER_COMMAND,
							(c) => {
								const n = (0, E.$getSelection)();
								if (!(0, E.$isRangeSelection)(n)) return !1;
								if (c !== null) {
									if (
										(C.IS_IOS || C.IS_SAFARI || C.IS_APPLE_WEBKIT) &&
										C.CAN_USE_BEFORE_INPUT
									)
										return !1;
									c.preventDefault();
								}
								return a.dispatchCommand(E.INSERT_LINE_BREAK_COMMAND, !1);
							},
							E.COMMAND_PRIORITY_EDITOR,
						),
						a.registerCommand(
							E.COPY_COMMAND,
							(c) => {
								const n = (0, E.$getSelection)();
								return (0, E.$isRangeSelection)(n) ? (d(c, a), !0) : !1;
							},
							E.COMMAND_PRIORITY_EDITOR,
						),
						a.registerCommand(
							E.CUT_COMMAND,
							(c) => {
								const n = (0, E.$getSelection)();
								return (0, E.$isRangeSelection)(n) ? (r(c, a), !0) : !1;
							},
							E.COMMAND_PRIORITY_EDITOR,
						),
						a.registerCommand(
							E.PASTE_COMMAND,
							(c) => {
								const n = (0, E.$getSelection)();
								return (0, E.$isRangeSelection)(n) ? (m(c, a), !0) : !1;
							},
							E.COMMAND_PRIORITY_EDITOR,
						),
						a.registerCommand(
							E.DROP_COMMAND,
							(c) => {
								const n = (0, E.$getSelection)();
								return (0, E.$isRangeSelection)(n)
									? (c.preventDefault(), !0)
									: !1;
							},
							E.COMMAND_PRIORITY_EDITOR,
						),
						a.registerCommand(
							E.DRAGSTART_COMMAND,
							(c) => {
								const n = (0, E.$getSelection)();
								return (0, E.$isRangeSelection)(n)
									? (c.preventDefault(), !0)
									: !1;
							},
							E.COMMAND_PRIORITY_EDITOR,
						),
					);
				}
			},
		),
		