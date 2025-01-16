define(
			de[1690],
			he([
				1, 0, 3, 77, 188, 48, 17, 2914, 8, 5, 74, 69, 33, 917, 31, 2894, 38, 7,
				10, 29, 319, 2915, 953, 67,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
				$,
			) {
				"use strict";
				var v;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Jjc = void 0);
				let S = class extends t.$1c {
					static {
						v = this;
					}
					static {
						this.ID = "editor.contrib.inlineEditController";
					}
					static {
						this.inlineEditVisibleKey = "inlineEditVisible";
					}
					static {
						this.inlineEditVisibleContext = new m.$5j(
							this.inlineEditVisibleKey,
							!1,
						);
					}
					static {
						this.cursorAtInlineEditKey = "cursorAtInlineEdit";
					}
					static {
						this.cursorAtInlineEditContext = new m.$5j(
							this.cursorAtInlineEditKey,
							!1,
						);
					}
					static get(P) {
						return P.getContribution(v.ID);
					}
					constructor(P, k, L, D, M, N, A, R) {
						super(),
							(this.editor = P),
							(this.q = k),
							(this.r = L),
							(this.s = D),
							(this.t = M),
							(this.u = N),
							(this.w = A),
							(this.y = R),
							(this.a = v.inlineEditVisibleContext.bindTo(this.r)),
							(this.b = v.cursorAtInlineEditContext.bindTo(this.r)),
							(this.c = (0, i.observableValue)(this, void 0)),
							(this.f = (0, s.$Yd)(this.c, (x) => {
								const H = this.c.read(x);
								if (!H) return;
								const q = H.range.endLineNumber,
									V = H.range.endColumn,
									G =
										H.text.endsWith(`
`) &&
										!(
											H.range.startLineNumber === H.range.endLineNumber &&
											H.range.startColumn === H.range.endColumn
										)
											? H.text.slice(0, -1)
											: H.text,
									K = new c.$BCb(q, [new c.$CCb(V, G, !1)]),
									J =
										H.range.startLineNumber === H.range.endLineNumber &&
										K.parts.length === 1 &&
										K.parts[0].lines.length === 1,
									W = H.text === "";
								return !J && !W
									? void 0
									: this.q.createInstance(d.$Ejc, this.editor, {
											ghostText: (0, i.constObservable)(K),
											minReservedLineCount: (0, i.constObservable)(0),
											targetTextModel: (0, i.constObservable)(
												this.editor.getModel() ?? void 0,
											),
											range: (0, i.constObservable)(H.range),
										});
							})),
							(this.j = (0, i.observableValue)(this, !1)),
							(this.m = (0, i.observableFromEvent)(
								this,
								this.editor.onDidChangeConfiguration,
								() => this.editor.getOption(p.EditorOption.inlineEdit).enabled,
							)),
							(this.n = (0, i.observableFromEvent)(
								this,
								this.editor.onDidChangeConfiguration,
								() =>
									this.editor.getOption(p.EditorOption.inlineEdit).fontFamily,
							));
						const O = (0, i.observableSignalFromEvent)(
							"InlineEditController.modelContentChangedSignal",
							P.onDidChangeModelContent,
						);
						this.D(
							(0, i.autorun)((x) => {
								this.m.read(x) && (O.read(x), !this.j.read(x) && this.G(P, !0));
							}),
						);
						const B = (0, i.observableFromEvent)(
							this,
							P.onDidChangeCursorPosition,
							() => P.getPosition(),
						);
						this.D(
							(0, i.autorun)((x) => {
								if (!this.m.read(x)) return;
								const H = B.read(x);
								H && this.z(H);
							}),
						),
							this.D(
								(0, i.autorun)((x) => {
									const H = this.c.read(x);
									if ((this.b.set(!1), !H)) {
										this.a.set(!1);
										return;
									}
									this.a.set(!0);
									const q = P.getPosition();
									q && this.z(q);
								}),
							);
						const U = (0, i.observableSignalFromEvent)(
							"InlineEditController.editorBlurSignal",
							P.onDidBlurEditorWidget,
						);
						this.D(
							(0, i.autorun)(async (x) => {
								this.m.read(x) &&
									(U.read(x),
									!(
										this.u.getValue(
											"editor.experimentalInlineEdit.keepOnBlur",
										) || P.getOption(p.EditorOption.inlineEdit).keepOnBlur
									) &&
										(this.g?.dispose(!0),
										(this.g = void 0),
										await this.clear(!1)));
							}),
						);
						const z = (0, i.observableSignalFromEvent)(
							"InlineEditController.editorFocusSignal",
							P.onDidFocusEditorText,
						);
						this.D(
							(0, i.autorun)((x) => {
								this.m.read(x) && (z.read(x), this.G(P, !0));
							}),
						);
						const F = this.D((0, o.$Qgb)());
						this.D(
							(0, i.autorun)((x) => {
								const H = this.n.read(x);
								F.setStyle(
									H === "" || H === "default"
										? ""
										: `
.monaco-editor .inline-edit-decoration,
.monaco-editor .inline-edit-decoration-preview,
.monaco-editor .inline-edit {
	font-family: ${H};
}`,
								);
							}),
						),
							this.D(new g.$Fjc(this.editor, this.f, this.q)),
							this.D(new l.$Ijc(this.editor, this.c, this.q, this.w, this.y));
					}
					z(P) {
						if (!this.c) {
							this.b.set(!1);
							return;
						}
						const k = this.c.get();
						if (!k) {
							this.b.set(!1);
							return;
						}
						this.b.set(C.$iL.containsPosition(k.range, P));
					}
					C(P, k) {
						if (
							k.text.includes(`
`) &&
							k.range.startLineNumber !== k.range.endLineNumber &&
							k.range.startColumn !== k.range.endColumn
						) {
							if (k.range.startColumn !== 1) return !1;
							const D = k.range.endLineNumber,
								M = k.range.endColumn,
								N = P.getModel()?.getLineLength(D) ?? 0;
							if (M !== N + 1) return !1;
						}
						return !0;
					}
					async F(P, k) {
						this.g && this.g.dispose(!0);
						const L = P.getModel();
						if (!L) return;
						const D = L.getVersionId(),
							M = this.s.inlineEditProvider.all(L);
						if (M.length === 0) return;
						const N = M[0];
						this.g = new h.$Ce();
						const A = this.g.token,
							R = k
								? u.InlineEditTriggerKind.Automatic
								: u.InlineEditTriggerKind.Invoke;
						if (
							(k && (await I(50, A)),
							A.isCancellationRequested ||
								L.isDisposed() ||
								L.getVersionId() !== D)
						)
							return;
						const B = await N.provideInlineEdit(L, { triggerKind: R }, A);
						if (
							B &&
							!(
								A.isCancellationRequested ||
								L.isDisposed() ||
								L.getVersionId() !== D
							) &&
							this.C(P, B)
						)
							return B;
					}
					async G(P, k) {
						this.b.set(!1), await this.clear();
						const L = await this.F(P, k);
						L && this.c.set(L, void 0);
					}
					async trigger() {
						await this.G(this.editor, !1);
					}
					async jumpBack() {
						this.h &&
							(this.editor.setPosition(this.h),
							this.editor.revealPositionInCenterIfOutsideViewport(this.h));
					}
					async accept() {
						this.j.set(!0, void 0);
						const P = this.c.get();
						if (!P) return;
						let k = P.text;
						P.text.startsWith(`
`) && (k = P.text.substring(1)),
							this.editor.pushUndoStop(),
							this.editor.executeEdits("acceptCurrent", [
								w.$jL.replace(C.$iL.lift(P.range), k),
							]),
							P.accepted &&
								(await this.t
									.executeCommand(
										P.accepted.id,
										...(P.accepted.arguments || []),
									)
									.then(void 0, b.$5)),
							this.H(P),
							(0, i.transaction)((L) => {
								this.c.set(void 0, L), this.j.set(!1, L);
							});
					}
					jumpToCurrent() {
						this.h = this.editor.getSelection()?.getStartPosition();
						const P = this.c.get();
						if (!P) return;
						const k = E.$hL.lift({
							lineNumber: P.range.startLineNumber,
							column: P.range.startColumn,
						});
						this.editor.setPosition(k),
							this.editor.revealPositionInCenterIfOutsideViewport(k);
					}
					async clear(P = !0) {
						const k = this.c.get();
						k &&
							k?.rejected &&
							P &&
							(await this.t
								.executeCommand(k.rejected.id, ...(k.rejected.arguments || []))
								.then(void 0, b.$5)),
							k && this.H(k),
							this.c.set(void 0, void 0);
					}
					H(P) {
						const k = this.editor.getModel();
						if (!k) return;
						const L = this.s.inlineEditProvider.all(k);
						L.length !== 0 && L[0].freeInlineEdit(P);
					}
					shouldShowHoverAt(P) {
						const k = this.c.get(),
							L = this.f.get();
						if (!k || !L) return !1;
						const D = k,
							M = L.model;
						if (
							C.$iL.containsPosition(D.range, P.getStartPosition()) ||
							C.$iL.containsPosition(D.range, P.getEndPosition())
						)
							return !0;
						const A = M.ghostText.get();
						return A
							? A.parts.some((R) =>
									P.containsPosition(new E.$hL(A.lineNumber, R.column)),
								)
							: !1;
					}
					shouldShowHoverAtViewZone(P) {
						return this.f.get()?.ownsViewZone(P) ?? !1;
					}
				};
				(e.$Jjc = S),
					(e.$Jjc =
						S =
						v =
							Ne(
								[
									j(1, r.$Li),
									j(2, m.$6j),
									j(3, a.$k3),
									j(4, n.$ek),
									j(5, f.$gj),
									j(6, y.$Dxb),
									j(7, $.$QO),
								],
								S,
							));
				function I(T, P) {
					return new Promise((k) => {
						let L;
						const D = setTimeout(() => {
							L && L.dispose(), k();
						}, T);
						P &&
							(L = P.onCancellationRequested(() => {
								clearTimeout(D), L && L.dispose(), k();
							}));
					});
				}
			},
		),
		