define(
			de[711],
			he([
				1, 0, 229, 77, 19, 28, 125, 4, 10, 22, 5, 73, 44, 399, 478, 3689, 3077,
				18, 170, 85,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f, b) {
				"use strict";
				var s;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Enc = e.$Dnc = void 0);
				class l {
					constructor(v, S, I, T) {
						(this.uri = v),
							(this.title = S),
							(this.detail = I),
							(this.description = T);
					}
				}
				e.$Dnc = l;
				let y = class extends n.$R1b {
					static {
						s = this;
					}
					static {
						this.ID = "mergeEditor.Input";
					}
					get U() {
						return this.X.getValue("mergeEditor.useWorkingCopy") ?? !1;
					}
					constructor(v, S, I, T, P, k, L, D, M, N, A, R, O) {
						super(T, void 0, k, L, D, M, A, R, O),
							(this.base = v),
							(this.input1 = S),
							(this.input2 = I),
							(this.result = T),
							(this.W = P),
							(this.X = N),
							(this.closeHandler = {
								showConfirm: () => this.c?.shouldConfirmClose() ?? !1,
								confirm: async (B) => {
									(0, t.$nd)(() => B.every((z) => z.editor instanceof s));
									const U = B.map((z) => z.editor.c).filter(E.$tg);
									return await this.c.confirmClose(U);
								},
							}),
							(this.Y = this.W.createInstance(
								this.U ? g.$Bnc : g.$Cnc,
								this.W.createInstance(p.$NZb),
							));
					}
					dispose() {
						super.dispose();
					}
					get typeId() {
						return s.ID;
					}
					get editorId() {
						return h.$b1.id;
					}
					get capabilities() {
						let v =
							super.capabilities | h.EditorInputCapabilities.MultipleEditors;
						return this.U && (v |= h.EditorInputCapabilities.Untitled), v;
					}
					getName() {
						return (0, d.localize)(7592, null, super.getName());
					}
					async resolve() {
						if (!this.c) {
							const v = this.D(
								await this.Y.createInputModel({
									base: this.base,
									input1: this.input1,
									input2: this.input2,
									result: this.result,
								}),
							);
							(this.c = v),
								this.D(
									(0, i.autorun)((S) => {
										v.isDirty.read(S), this.b.fire();
									}),
								),
								await this.c.model.onInitialized;
						}
						return this.c;
					}
					async accept() {
						await this.c?.accept();
					}
					async save(v, S) {
						await this.c?.save(S);
					}
					toUntyped() {
						return {
							input1: {
								resource: this.input1.uri,
								label: this.input1.title,
								description: this.input1.description,
								detail: this.input1.detail,
							},
							input2: {
								resource: this.input2.uri,
								label: this.input2.title,
								description: this.input2.description,
								detail: this.input2.detail,
							},
							base: { resource: this.base },
							result: { resource: this.result },
							options: { override: this.typeId },
						};
					}
					matches(v) {
						return this === v
							? !0
							: v instanceof s
								? (0, w.$gh)(this.base, v.base) &&
									(0, w.$gh)(this.input1.uri, v.input1.uri) &&
									(0, w.$gh)(this.input2.uri, v.input2.uri) &&
									(0, w.$gh)(this.result, v.result)
								: (0, h.$o1)(v)
									? (this.editorId === v.options?.override ||
											v.options?.override === void 0) &&
										(0, w.$gh)(this.base, v.base.resource) &&
										(0, w.$gh)(this.input1.uri, v.input1.resource) &&
										(0, w.$gh)(this.input2.uri, v.input2.resource) &&
										(0, w.$gh)(this.result, v.result.resource)
									: !1;
					}
					async revert(v, S) {
						return this.c?.revert(S);
					}
					isDirty() {
						return this.c?.isDirty.get() ?? !1;
					}
					setLanguageId(v, S) {
						this.c?.model.setLanguageId(v, S);
					}
				};
				(e.$Enc = y),
					(e.$Enc =
						y =
						s =
							Ne(
								[
									j(4, u.$Li),
									j(5, o.$IY),
									j(6, b.$kZ),
									j(7, a.$3N),
									j(8, r.$ll),
									j(9, m.$gj),
									j(10, f.$_Y),
									j(11, C.$XO),
									j(12, c.$QIb),
								],
								y,
							));
			},
		),
		