define(de[2798], he([1, 0, 498, 48, 38, 12]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Zub = void 0),
				(E = mt(E));
			class C {
				constructor(m, r, u, a) {
					(this.a = m), (this.b = r), (this.c = u), (this.d = a);
				}
				paste(m, r, u, a) {
					this.d.paste(m, r, u, a);
				}
				type(m) {
					this.d.type(m);
				}
				compositionType(m, r, u, a) {
					this.d.compositionType(m, r, u, a);
				}
				compositionStart() {
					this.d.startComposition();
				}
				compositionEnd() {
					this.d.endComposition();
				}
				cut() {
					this.d.cut();
				}
				setSelection(m) {
					t.CoreNavigationCommands.SetSelection.runCoreEditorCommand(this.b, {
						source: "keyboard",
						selection: m,
					});
				}
				f(m) {
					const r = this.b.getLineMinColumn(m.lineNumber);
					return m.column < r ? new i.$hL(m.lineNumber, r) : m;
				}
				g(m) {
					switch (this.a.options.get(w.EditorOption.multiCursorModifier)) {
						case "altKey":
							return m.altKey;
						case "ctrlKey":
							return m.ctrlKey;
						case "metaKey":
							return m.metaKey;
						default:
							return !1;
					}
				}
				h(m) {
					switch (this.a.options.get(w.EditorOption.multiCursorModifier)) {
						case "altKey":
							return m.ctrlKey || m.metaKey;
						case "ctrlKey":
							return m.altKey || m.metaKey;
						case "metaKey":
							return m.ctrlKey || m.altKey;
						default:
							return !1;
					}
				}
				dispatchMouse(m) {
					const r = this.a.options,
						u = E.$n && r.get(w.EditorOption.selectionClipboard),
						a = r.get(w.EditorOption.columnSelection);
					m.middleButton && !u
						? this.k(m.position, m.mouseColumn, m.inSelectionMode)
						: m.startedOnLineNumbers
							? this.g(m)
								? m.inSelectionMode
									? this.s(m.position, m.revealType)
									: this.l(m.position, !0)
								: m.inSelectionMode
									? this.r(m.position, m.revealType)
									: this.q(m.position, m.revealType)
							: m.mouseDownCount >= 4
								? this.u()
								: m.mouseDownCount === 3
									? this.g(m)
										? m.inSelectionMode
											? this.t(m.position, m.revealType)
											: this.s(m.position, m.revealType)
										: m.inSelectionMode
											? this.r(m.position, m.revealType)
											: this.q(m.position, m.revealType)
									: m.mouseDownCount === 2
										? m.onInjectedText ||
											(this.g(m)
												? this.p(m.position, m.revealType)
												: m.inSelectionMode
													? this.o(m.position, m.revealType)
													: this.n(m.position, m.revealType))
										: this.g(m)
											? this.h(m) ||
												(m.shiftKey
													? this.k(m.position, m.mouseColumn, !0)
													: m.inSelectionMode
														? this.m(m.position, m.revealType)
														: this.l(m.position, !1))
											: m.inSelectionMode
												? m.altKey
													? this.k(m.position, m.mouseColumn, !0)
													: a
														? this.k(m.position, m.mouseColumn, !0)
														: this.j(m.position, m.revealType)
												: this.moveTo(m.position, m.revealType);
				}
				i(m, r) {
					return (
						(m = this.f(m)),
						{
							source: "mouse",
							position: this.v(m),
							viewPosition: m,
							revealType: r,
						}
					);
				}
				moveTo(m, r) {
					t.CoreNavigationCommands.MoveTo.runCoreEditorCommand(
						this.b,
						this.i(m, r),
					);
				}
				j(m, r) {
					t.CoreNavigationCommands.MoveToSelect.runCoreEditorCommand(
						this.b,
						this.i(m, r),
					);
				}
				k(m, r, u) {
					(m = this.f(m)),
						t.CoreNavigationCommands.ColumnSelect.runCoreEditorCommand(this.b, {
							source: "mouse",
							position: this.v(m),
							viewPosition: m,
							mouseColumn: r,
							doColumnSelect: u,
						});
				}
				l(m, r) {
					(m = this.f(m)),
						t.CoreNavigationCommands.CreateCursor.runCoreEditorCommand(this.b, {
							source: "mouse",
							position: this.v(m),
							viewPosition: m,
							wholeLine: r,
						});
				}
				m(m, r) {
					t.CoreNavigationCommands.LastCursorMoveToSelect.runCoreEditorCommand(
						this.b,
						this.i(m, r),
					);
				}
				n(m, r) {
					t.CoreNavigationCommands.WordSelect.runCoreEditorCommand(
						this.b,
						this.i(m, r),
					);
				}
				o(m, r) {
					t.CoreNavigationCommands.WordSelectDrag.runCoreEditorCommand(
						this.b,
						this.i(m, r),
					);
				}
				p(m, r) {
					t.CoreNavigationCommands.LastCursorWordSelect.runCoreEditorCommand(
						this.b,
						this.i(m, r),
					);
				}
				q(m, r) {
					t.CoreNavigationCommands.LineSelect.runCoreEditorCommand(
						this.b,
						this.i(m, r),
					);
				}
				r(m, r) {
					t.CoreNavigationCommands.LineSelectDrag.runCoreEditorCommand(
						this.b,
						this.i(m, r),
					);
				}
				s(m, r) {
					t.CoreNavigationCommands.LastCursorLineSelect.runCoreEditorCommand(
						this.b,
						this.i(m, r),
					);
				}
				t(m, r) {
					t.CoreNavigationCommands.LastCursorLineSelectDrag.runCoreEditorCommand(
						this.b,
						this.i(m, r),
					);
				}
				u() {
					t.CoreNavigationCommands.SelectAll.runCoreEditorCommand(this.b, {
						source: "mouse",
					});
				}
				v(m) {
					return this.b.coordinatesConverter.convertViewPositionToModelPosition(
						m,
					);
				}
				emitKeyDown(m) {
					this.c.emitKeyDown(m);
				}
				emitKeyUp(m) {
					this.c.emitKeyUp(m);
				}
				emitContextMenu(m) {
					this.c.emitContextMenu(m);
				}
				emitMouseMove(m) {
					this.c.emitMouseMove(m);
				}
				emitMouseLeave(m) {
					this.c.emitMouseLeave(m);
				}
				emitMouseUp(m) {
					this.c.emitMouseUp(m);
				}
				emitMouseDown(m) {
					this.c.emitMouseDown(m);
				}
				emitMouseDrag(m) {
					this.c.emitMouseDrag(m);
				}
				emitMouseDrop(m) {
					this.c.emitMouseDrop(m);
				}
				emitMouseDropCanceled() {
					this.c.emitMouseDropCanceled();
				}
				emitMouseWheel(m) {
					this.c.emitMouseWheel(m);
				}
			}
			e.$Zub = C;
		}),
		