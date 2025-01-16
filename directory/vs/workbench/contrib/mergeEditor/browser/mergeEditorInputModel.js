define(
		de[3689],
		he([
			1, 0, 229, 29, 6, 3, 77, 19, 111, 67, 42, 4, 57, 5, 21, 44, 416, 3076,
			3078, 3080, 687, 18, 85,
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
		) {
			"use strict";
			var $;
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Cnc = e.$Bnc = void 0),
				(m = xi(m));
			let v = class {
				constructor(L, D, M, N) {
					(this.a = L), (this.b = D), (this.c = M), (this.d = N);
				}
				async createInputModel(L) {
					const D = new E.$Zc(),
						[M, N, A, R] = await Promise.all([
							this.c.createModelReference(L.base),
							this.c.createModelReference(L.result),
							P(L.input1, this.c, D),
							P(L.input2, this.c, D),
						]);
					D.add(M), D.add(N);
					const O = N.object.textEditorModel.uri.with({
							scheme: "merge-result",
						}),
						B = this.d.createModel(
							"",
							{
								languageId: N.object.textEditorModel.getLanguageId(),
								onDidChange: w.Event.None,
							},
							O,
						);
					D.add(B);
					const U = this.b.createInstance(f.$JZb),
						z = this.b.createInstance(
							b.$OZb,
							M.object.textEditorModel,
							A,
							R,
							B,
							U,
							{ resetResult: !0 },
							this.a,
						);
					return (
						D.add(z),
						await z.onInitialized,
						this.b.createInstance(S, z, D, N.object, L.result)
					);
				}
			};
			(e.$Bnc = v),
				(e.$Bnc = v = Ne([j(1, c.$Li), j(2, u.$MO), j(3, r.$QO)], v));
			let S = class extends p.$PO {
				constructor(L, D, M, N, A, R, O) {
					super(),
						(this.model = L),
						(this.g = D),
						(this.j = M),
						(this.resultUri = N),
						(this.n = A),
						(this.q = R),
						(this.r = O),
						(this.a = (0, C.observableValue)(
							this,
							this.model.resultTextModel.getAlternativeVersionId(),
						)),
						(this.b = (0, C.observableFromEvent)(
							this,
							(B) => this.model.resultTextModel.onDidChangeContent(B),
							() => this.model.resultTextModel.getAlternativeVersionId(),
						)),
						(this.isDirty = (0, C.derived)(
							this,
							(B) => this.b.read(B) !== this.a.read(B),
						)),
						(this.c = !1);
				}
				dispose() {
					this.g.dispose(), super.dispose();
				}
				async accept() {
					const L = await this.model.resultTextModel.getValue();
					this.j.textEditorModel.setValue(L),
						this.a.set(
							this.model.resultTextModel.getAlternativeVersionId(),
							void 0,
						),
						await this.n.save(this.j.textEditorModel.uri),
						(this.c = !0);
				}
				async s() {
					await this.n.revert(this.model.resultTextModel.uri),
						this.a.set(
							this.model.resultTextModel.getAlternativeVersionId(),
							void 0,
						),
						(this.c = !0);
				}
				shouldConfirmClose() {
					return !0;
				}
				async confirmClose(L) {
					(0, t.$nd)(() => L.some((N) => N === this));
					const D = L.some((N) => N.isDirty.get());
					let M;
					if (D) {
						const N = L.length > 1,
							A = N
								? (0, a.localize)(7593, null, L.length)
								: (0, a.localize)(
										7594,
										null,
										(0, d.$kh)(L[0].model.resultTextModel.uri),
									),
							R = L.some((B) => B.model.hasUnhandledConflicts.get()),
							O = [
								{
									label: R
										? (0, a.localize)(7595, null)
										: (0, a.localize)(7596, null),
									run: () => h.ConfirmResult.SAVE,
								},
								{
									label: (0, a.localize)(7597, null),
									run: () => h.ConfirmResult.DONT_SAVE,
								},
							];
						M = (
							await this.q.prompt({
								type: m.default.Info,
								message: A,
								detail: R
									? N
										? (0, a.localize)(7598, null)
										: (0, a.localize)(7599, null)
									: N
										? (0, a.localize)(7600, null)
										: (0, a.localize)(7601, null),
								buttons: O,
								cancelButton: { run: () => h.ConfirmResult.CANCEL },
							})
						).result;
					} else M = h.ConfirmResult.DONT_SAVE;
					return (
						M === h.ConfirmResult.SAVE
							? await Promise.all(L.map((N) => N.accept()))
							: M === h.ConfirmResult.DONT_SAVE &&
								(await Promise.all(L.map((N) => N.s()))),
						M
					);
				}
				async save(L) {
					this.c ||
						(async () => {
							const { confirmed: D } = await this.q.confirm({
								message: (0, a.localize)(7602, null),
								detail: (0, a.localize)(7603, null),
								primaryButton: (0, a.localize)(7604, null),
							});
							if (D) {
								await this.accept();
								const M = this.r
									.findEditors(this.resultUri)
									.filter((N) => N.editor.typeId === "mergeEditor.Input");
								await this.r.closeEditors(M);
							}
						})();
				}
				async revert(L) {}
			};
			S = Ne([j(4, y.$kZ), j(5, h.$GO), j(6, l.$IY)], S);
			let I = class {
				static {
					$ = this;
				}
				constructor(L, D, M, N) {
					(this.a = L), (this.b = D), (this.c = M), (this.d = N);
				}
				static {
					this.f = g.$p1.registerSource(
						"merge-editor.source",
						(0, a.localize)(7605, null),
					);
				}
				async createInputModel(L) {
					const D = new E.$Zc();
					let M;
					const N = D.add(new E.$Zc()),
						A = (V) => {
							(0, d.$gh)(L.result, V.resource) && (N.clear(), (M = V));
						};
					N.add(this.d.files.onDidCreate(A)), this.d.files.models.forEach(A);
					const [R, O, B, U] = await Promise.all([
						this.c.createModelReference(L.base),
						this.c.createModelReference(L.result),
						P(L.input1, this.c, D),
						P(L.input2, this.c, D),
					]);
					if ((D.add(R), D.add(O), !M)) throw new i.$gb();
					await M.save({ source: $.f });
					const x = M.textEditorModel
							.getLinesContent()
							.some((V) => V.startsWith(o.$znc.start)),
						H = this.b.createInstance(f.$JZb),
						q = this.b.createInstance(
							b.$OZb,
							R.object.textEditorModel,
							B,
							U,
							O.object.textEditorModel,
							H,
							{ resetResult: x },
							this.a,
						);
					return (
						D.add(q),
						await q.onInitialized,
						this.b.createInstance(T, q, D, M, this.a)
					);
				}
			};
			(e.$Cnc = I),
				(e.$Cnc = I = $ = Ne([j(1, c.$Li), j(2, u.$MO), j(3, y.$kZ)], I));
			let T = class extends p.$PO {
				constructor(L, D, M, N, A, R) {
					super(),
						(this.model = L),
						(this.c = D),
						(this.g = M),
						(this.j = N),
						(this.n = A),
						(this.q = R),
						(this.isDirty = (0, C.observableFromEvent)(
							this,
							w.Event.any(this.g.onDidChangeDirty, this.g.onDidSaveError),
							() => this.g.isDirty(),
						)),
						(this.a = !1),
						(this.b = new Date());
				}
				dispose() {
					this.c.dispose(), super.dispose(), this.r(!1);
				}
				r(L) {
					if (!this.a) {
						const D = this.model.unhandledConflictsCount.get(),
							M = new Date().getTime() - this.b.getTime();
						this.j.reportMergeEditorClosed({
							durationOpenedSecs: M / 1e3,
							remainingConflictCount: D,
							accepted: L,
							conflictCount: this.model.conflictCount,
							combinableConflictCount: this.model.combinableConflictCount,
							conflictsResolvedWithBase: this.model.conflictsResolvedWithBase,
							conflictsResolvedWithInput1:
								this.model.conflictsResolvedWithInput1,
							conflictsResolvedWithInput2:
								this.model.conflictsResolvedWithInput2,
							conflictsResolvedWithSmartCombination:
								this.model.conflictsResolvedWithSmartCombination,
							manuallySolvedConflictCountThatEqualNone:
								this.model.manuallySolvedConflictCountThatEqualNone,
							manuallySolvedConflictCountThatEqualSmartCombine:
								this.model.manuallySolvedConflictCountThatEqualSmartCombine,
							manuallySolvedConflictCountThatEqualInput1:
								this.model.manuallySolvedConflictCountThatEqualInput1,
							manuallySolvedConflictCountThatEqualInput2:
								this.model.manuallySolvedConflictCountThatEqualInput2,
							manuallySolvedConflictCountThatEqualNoneAndStartedWithBase:
								this.model
									.manuallySolvedConflictCountThatEqualNoneAndStartedWithBase,
							manuallySolvedConflictCountThatEqualNoneAndStartedWithInput1:
								this.model
									.manuallySolvedConflictCountThatEqualNoneAndStartedWithInput1,
							manuallySolvedConflictCountThatEqualNoneAndStartedWithInput2:
								this.model
									.manuallySolvedConflictCountThatEqualNoneAndStartedWithInput2,
							manuallySolvedConflictCountThatEqualNoneAndStartedWithBothNonSmart:
								this.model
									.manuallySolvedConflictCountThatEqualNoneAndStartedWithBothNonSmart,
							manuallySolvedConflictCountThatEqualNoneAndStartedWithBothSmart:
								this.model
									.manuallySolvedConflictCountThatEqualNoneAndStartedWithBothSmart,
						}),
							(this.a = !0);
					}
				}
				async accept() {
					this.r(!0), await this.g.save();
				}
				get resultUri() {
					return this.g.resource;
				}
				async save(L) {
					await this.g.save(L);
				}
				async revert(L) {
					await this.g.revert(L);
				}
				shouldConfirmClose() {
					return !0;
				}
				async confirmClose(L) {
					const D = L.length > 1,
						M = L.some((A) => A.isDirty.get()),
						N = L.some((A) => A.model.hasUnhandledConflicts.get());
					if (M) {
						const A = D
								? (0, a.localize)(7606, null, L.length)
								: (0, a.localize)(7607, null, (0, d.$kh)(L[0].resultUri)),
							{ result: R } = await this.n.prompt({
								type: m.default.Info,
								message: A,
								detail: N
									? D
										? (0, a.localize)(7608, null)
										: (0, a.localize)(7609, null)
									: D
										? (0, a.localize)(7610, null)
										: (0, a.localize)(7611, null),
								buttons: [
									{
										label: N
											? (0, a.localize)(7612, null)
											: (0, a.localize)(7613, null),
										run: () => h.ConfirmResult.SAVE,
									},
									{
										label: (0, a.localize)(7614, null),
										run: () => h.ConfirmResult.DONT_SAVE,
									},
								],
								cancelButton: { run: () => h.ConfirmResult.CANCEL },
							});
						return R;
					} else if (
						N &&
						!this.q.getBoolean(s.$g1b, n.StorageScope.PROFILE, !1)
					) {
						const { confirmed: A, checkboxChecked: R } = await this.n.confirm({
							message: D
								? (0, a.localize)(7615, null, L.length)
								: (0, a.localize)(7616, null, (0, d.$kh)(L[0].resultUri)),
							detail: N
								? D
									? (0, a.localize)(7617, null)
									: (0, a.localize)(7618, null)
								: void 0,
							primaryButton: N
								? (0, a.localize)(7619, null)
								: (0, a.localize)(7620, null),
							checkbox: { label: (0, a.localize)(7621, null) },
						});
						return (
							R &&
								this.q.store(
									s.$g1b,
									!0,
									n.StorageScope.PROFILE,
									n.StorageTarget.USER,
								),
							A ? h.ConfirmResult.SAVE : h.ConfirmResult.CANCEL
						);
					} else return h.ConfirmResult.SAVE;
				}
			};
			T = Ne([j(4, h.$GO), j(5, n.$lq)], T);
			async function P(k, L, D) {
				const M = await L.createModelReference(k.uri);
				return (
					D.add(M),
					{
						textModel: M.object.textEditorModel,
						title: k.title,
						description: k.description,
						detail: k.detail,
					}
				);
			}
		},
	),
		