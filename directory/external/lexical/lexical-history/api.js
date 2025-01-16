define(de[922], he([1, 0, 304, 164]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.getDirtyNodes = h),
				(e.getChangeType = c),
				(e.isTextNodeUnchanged = n),
				(e.createMergeActionGetter = g),
				(e.redo = p),
				(e.undo = o),
				(e.clearHistory = f),
				(e.registerHistory = b),
				(e.registerExternalHistory = s),
				(e.createEmptyHistoryState = l);
			const w = 0,
				E = 1,
				C = 2,
				d = 0,
				m = 1,
				r = 2,
				u = 3,
				a = 4;
			function h(y, $, v) {
				const S = y._nodeMap,
					I = [];
				for (const T of $) {
					const P = S.get(T);
					P !== void 0 && I.push(P);
				}
				for (const [T, P] of v) {
					if (!P) continue;
					const k = S.get(T);
					k !== void 0 && !(0, i.$isRootNode)(k) && I.push(k);
				}
				return I;
			}
			function c(y, $, v, S, I) {
				if (y === null || (v.size === 0 && S.size === 0 && !I)) return d;
				const T = $._selection,
					P = y._selection;
				if (I) return m;
				if (
					!(0, i.$isRangeSelection)(T) ||
					!(0, i.$isRangeSelection)(P) ||
					!P.isCollapsed() ||
					!T.isCollapsed()
				)
					return d;
				const k = h($, v, S);
				if (k.length === 0) return d;
				if (k.length > 1) {
					const z = $._nodeMap,
						F = z.get(T.anchor.key),
						x = z.get(P.anchor.key);
					return F &&
						x &&
						!y._nodeMap.has(F.__key) &&
						(0, i.$isTextNode)(F) &&
						F.__text.length === 1 &&
						T.anchor.offset === 1
						? r
						: d;
				}
				const L = k[0],
					D = y._nodeMap.get(L.__key);
				if (
					!(0, i.$isTextNode)(D) ||
					!(0, i.$isTextNode)(L) ||
					D.__mode !== L.__mode
				)
					return d;
				const M = D.__text,
					N = L.__text;
				if (M === N) return d;
				const A = T.anchor,
					R = P.anchor;
				if (A.key !== R.key || A.type !== "text") return d;
				const O = A.offset,
					B = R.offset,
					U = N.length - M.length;
				return U === 1 && B === O - 1
					? r
					: U === -1 && B === O + 1
						? u
						: U === -1 && B === O
							? a
							: d;
			}
			function n(y, $, v) {
				const S = $._nodeMap.get(y),
					I = v._nodeMap.get(y),
					T = $._selection,
					P = v._selection;
				let k = !1;
				return (
					(0, i.$isRangeSelection)(T) &&
						(0, i.$isRangeSelection)(P) &&
						(k =
							T.anchor.type === "element" &&
							T.focus.type === "element" &&
							P.anchor.type === "text" &&
							P.focus.type === "text"),
					!k && (0, i.$isTextNode)(S) && (0, i.$isTextNode)(I)
						? S.__type === I.__type &&
							S.__text === I.__text &&
							S.__mode === I.__mode &&
							S.__detail === I.__detail &&
							S.__style === I.__style &&
							S.__format === I.__format &&
							S.__parent === I.__parent
						: !1
				);
			}
			function g(y, $) {
				let v = Date.now(),
					S = d;
				return (I, T, P, k, L, D) => {
					const M = Date.now();
					if (D.has("historic")) return (S = d), (v = M), C;
					const N = c(I, T, k, L, y.isComposing()),
						A = (() => {
							const R = P === null || P.editor === y,
								O = D.has("history-push");
							if (!O && R && D.has("history-merge")) return w;
							if (I === null) return E;
							const U = T._selection;
							if (!(k.size > 0 || L.size > 0)) return U !== null ? w : C;
							if (O === !1 && N !== d && N === S && M < v + $ && R) return w;
							if (k.size === 1) {
								const F = Array.from(k)[0];
								if (n(F, I, T)) return w;
							}
							return E;
						})();
					return (v = M), (S = N), A;
				};
			}
			function p(y, $) {
				const v = $.redoStack,
					S = $.undoStack;
				if (v.length !== 0) {
					const I = $.current;
					I !== null && (S.push(I), y.dispatchCommand(i.CAN_UNDO_COMMAND, !0));
					const T = v.pop();
					v.length === 0 && y.dispatchCommand(i.CAN_REDO_COMMAND, !1),
						($.current = T || null),
						T && y.setEditorState(T.editorState, { tag: "historic" });
				}
			}
			function o(y, $) {
				const v = $.redoStack,
					S = $.undoStack;
				if (S.length !== 0) {
					const T = $.current,
						P = S.pop();
					T !== null && (v.push(T), y.dispatchCommand(i.CAN_REDO_COMMAND, !0)),
						S.length === 0 && y.dispatchCommand(i.CAN_UNDO_COMMAND, !1),
						($.current = P || null),
						P && y.setEditorState(P.editorState, { tag: "historic" });
				}
			}
			function f(y) {
				(y.undoStack = []), (y.redoStack = []), (y.current = null);
			}
			function b(y, $, v) {
				const S = g(y, v),
					I = ({
						editorState: k,
						prevEditorState: L,
						dirtyLeaves: D,
						dirtyElements: M,
						tags: N,
					}) => {
						const A = $.current,
							R = $.redoStack,
							O = $.undoStack,
							B = A === null ? null : A.editorState;
						if (A !== null && k === B) return;
						const U = S(L, k, A, D, M, N);
						if (U === E)
							R.length !== 0 &&
								(($.redoStack = []), y.dispatchCommand(i.CAN_REDO_COMMAND, !1)),
								A !== null &&
									(O.push({ ...A }), y.dispatchCommand(i.CAN_UNDO_COMMAND, !0));
						else if (U === C) return;
						$.current = { editor: y, editorState: k };
					},
					T = (0, t.mergeRegister)(
						y.registerCommand(
							i.UNDO_COMMAND,
							() => (o(y, $), !0),
							i.COMMAND_PRIORITY_EDITOR,
						),
						y.registerCommand(
							i.REDO_COMMAND,
							() => (p(y, $), !0),
							i.COMMAND_PRIORITY_EDITOR,
						),
						y.registerCommand(
							i.CLEAR_EDITOR_COMMAND,
							() => (f($), !1),
							i.COMMAND_PRIORITY_EDITOR,
						),
						y.registerCommand(
							i.CLEAR_HISTORY_COMMAND,
							() => (
								f($),
								y.dispatchCommand(i.CAN_REDO_COMMAND, !1),
								y.dispatchCommand(i.CAN_UNDO_COMMAND, !1),
								!0
							),
							i.COMMAND_PRIORITY_EDITOR,
						),
						y.registerUpdateListener(I),
					),
					P = y.registerUpdateListener(I);
				return () => {
					T(), P();
				};
			}
			function s(y, $, v, S, I, T) {
				const P = g(y, v),
					k = ({
						editorState: M,
						prevEditorState: N,
						dirtyLeaves: A,
						dirtyElements: R,
						tags: O,
					}) => {
						const B = $.current,
							U = $.redoStack,
							z = $.undoStack,
							F = B === null ? null : B.editorState;
						if (B !== null && M === F) return;
						const x = P(N, M, B, A, R, O);
						if (x === E)
							U.length !== 0 &&
								(($.redoStack = []), y.dispatchCommand(i.CAN_REDO_COMMAND, !1)),
								B !== null &&
									(z.push({ ...B }),
									y.dispatchCommand(i.CAN_UNDO_COMMAND, !0),
									T({
										historyState: $,
										undo: (H) => o(H, $),
										redo: (H) => p(H, $),
									}));
						else if (x === C) return;
						$.current = { editor: y, editorState: M };
					},
					L = (0, t.mergeRegister)(
						y.registerCommand(
							i.UNDO_COMMAND,
							() => (S(), !0),
							i.COMMAND_PRIORITY_EDITOR,
						),
						y.registerCommand(
							i.REDO_COMMAND,
							() => (I(), !0),
							i.COMMAND_PRIORITY_EDITOR,
						),
						y.registerCommand(
							i.CLEAR_EDITOR_COMMAND,
							() => (f($), !1),
							i.COMMAND_PRIORITY_EDITOR,
						),
						y.registerCommand(
							i.CLEAR_HISTORY_COMMAND,
							() => (
								f($),
								y.dispatchCommand(i.CAN_REDO_COMMAND, !1),
								y.dispatchCommand(i.CAN_UNDO_COMMAND, !1),
								!0
							),
							i.COMMAND_PRIORITY_EDITOR,
						),
						y.registerUpdateListener(k),
					),
					D = y.registerUpdateListener(k);
				return () => {
					L(), D();
				};
			}
			function l() {
				return { current: null, redoStack: [], undoStack: [] };
			}
		}),
		