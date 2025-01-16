define(
			de[1920],
			he([
				1, 0, 4, 6, 240, 28, 85, 44, 702, 335, 22, 61, 67, 15, 34, 54, 227, 334,
				170, 73, 33, 842, 122, 474, 165, 19, 91, 172, 53, 84,
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
				v,
				S,
				I,
				T,
				P,
				k,
			) {
				"use strict";
				var L;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$xvc = void 0);
				let D = class extends m.$VO {
					static {
						L = this;
					}
					static {
						this.L = d.$p1.registerSource(
							"textFileEncoding.source",
							(0, t.localize)(12673, null),
						);
					}
					static {
						this.cb = 500;
					}
					constructor(N, A, R, O, B, U, z, F, x, H, q, V, G, K, J, W, X) {
						super(B, O, G, K),
							(this.resource = N),
							(this.jb = A),
							(this.kb = R),
							(this.lb = U),
							(this.mb = z),
							(this.nb = F),
							(this.ob = x),
							(this.pb = H),
							(this.qb = q),
							(this.rb = V),
							(this.sb = J),
							(this.tb = W),
							(this.ub = X),
							(this.M = this.D(new i.$re())),
							(this.onDidChangeContent = this.M.event),
							(this.N = this.D(new i.$re())),
							(this.onDidResolve = this.N.event),
							(this.O = this.D(new i.$re())),
							(this.onDidChangeDirty = this.O.event),
							(this.P = this.D(new i.$re())),
							(this.onDidSaveError = this.P.event),
							(this.Q = this.D(new i.$re())),
							(this.onDidSave = this.Q.event),
							(this.R = this.D(new i.$re())),
							(this.onDidRevert = this.R.event),
							(this.S = this.D(new i.$re())),
							(this.onDidChangeEncoding = this.S.event),
							(this.U = this.D(new i.$re())),
							(this.onDidChangeOrphaned = this.U.event),
							(this.W = this.D(new i.$re())),
							(this.onDidChangeReadonly = this.W.event),
							(this.typeId = o.$OO),
							(this.capabilities = o.WorkingCopyCapabilities.None),
							(this.name = (0, g.$sc)(this.rb.getUriLabel(this.resource))),
							(this.X = !!S.$dh.extname(this.resource)),
							(this.Z = 0),
							(this.ab = !1),
							(this.bb = !1),
							(this.db = void 0),
							(this.eb = new c.$8h()),
							(this.fb = !1),
							(this.gb = !1),
							(this.hb = !1),
							(this.ib = !1),
							(this.Tb = !1),
							this.D(this.pb.registerWorkingCopy(this)),
							this.vb();
					}
					vb() {
						this.D(this.lb.onDidFilesChange((N) => this.wb(N))),
							this.D(this.qb.onDidChangeFilesAssociation(() => this.yb())),
							this.D(this.qb.onDidChangeReadonly(() => this.W.fire()));
					}
					async wb(N) {
						let A = !1,
							R;
						if (
							(this.hb
								? N.contains(this.resource, u.FileChangeType.ADDED) &&
									((R = !1), (A = !0))
								: N.contains(this.resource, u.FileChangeType.DELETED) &&
									((R = !0), (A = !0)),
							A && this.hb !== R)
						) {
							let O = !1;
							R &&
								(await (0, c.$Nh)(100, s.CancellationToken.None),
								this.isDisposed()
									? (O = !0)
									: (O = !(await this.lb.exists(this.resource)))),
								this.hb !== O && !this.isDisposed() && this.xb(O);
						}
					}
					xb(N) {
						this.hb !== N && ((this.hb = N), this.U.fire());
					}
					yb() {
						if (!this.isResolved()) return;
						const N = this.I(this.textEditorModel),
							A = this.J(this.resource, this.q, this.kb, N);
						this.textEditorModel.setLanguage(A);
					}
					setLanguageId(N, A) {
						super.setLanguageId(N, A), (this.kb = N);
					}
					async backup(N) {
						let A;
						this.lastResolvedFileStat &&
							(A = {
								mtime: this.lastResolvedFileStat.mtime,
								ctime: this.lastResolvedFileStat.ctime,
								size: this.lastResolvedFileStat.size,
								etag: this.lastResolvedFileStat.etag,
								orphaned: this.hb,
							});
						const R = await this.mb.getEncodedReadable(
							this.resource,
							this.createSnapshot() ?? void 0,
							{ encoding: l.$NY },
						);
						return { meta: A, content: R };
					}
					async revert(N) {
						if (!this.isResolved()) return;
						const A = this.fb,
							R = this.Lb(!1);
						if (!N?.soft)
							try {
								await this.Kb();
							} catch (B) {
								if (
									B.fileOperationResult !== u.FileOperationResult.FILE_NOT_FOUND
								)
									throw (R(), B);
							}
						this.R.fire(), A && this.O.fire();
					}
					async resolve(N) {
						if (
							(this.Wb("resolve() - enter"),
							(0, w.mark)("code/willResolveTextFileEditorModel"),
							this.isDisposed())
						) {
							this.Wb(
								"resolve() - exit - without resolving because model is disposed",
							);
							return;
						}
						if (!N?.contents && (this.fb || this.eb.isRunning())) {
							this.Wb(
								"resolve() - exit - without resolving because model is dirty or being saved",
							);
							return;
						}
						await this.zb(N), (0, w.mark)("code/didResolveTextFileEditorModel");
					}
					async zb(N) {
						if (N?.contents) return this.Ab(N.contents, N);
						if (!(!this.isResolved() && (await this.Bb(N)))) return this.Db(N);
					}
					async Ab(N, A) {
						this.Wb("resolveFromBuffer()");
						let R, O, B, U;
						try {
							const F = await this.lb.stat(this.resource);
							(R = F.mtime),
								(O = F.ctime),
								(B = F.size),
								(U = F.etag),
								this.xb(!1);
						} catch (F) {
							(R = Date.now()),
								(O = Date.now()),
								(B = 0),
								(U = u.$Ql),
								this.xb(
									F.fileOperationResult ===
										u.FileOperationResult.FILE_NOT_FOUND,
								);
						}
						const z = await this.mb.encoding.getPreferredWriteEncoding(
							this.resource,
							this.jb,
						);
						this.Eb(
							{
								resource: this.resource,
								name: this.name,
								mtime: R,
								ctime: O,
								size: B,
								etag: U,
								value: N,
								encoding: z.encoding,
								readonly: !1,
								locked: !1,
							},
							!0,
							A,
						);
					}
					async Bb(N) {
						const A = await this.nb.resolve(this);
						let R = l.$NY;
						return (
							A &&
								(R = (
									await this.mb.encoding.getPreferredWriteEncoding(
										this.resource,
										this.jb,
									)
								).encoding),
							!this.isResolved()
								? A
									? (await this.Cb(A, R, N), !0)
									: !1
								: (this.Wb(
										"resolveFromBackup() - exit - without resolving because previously new model got created meanwhile",
									),
									!0)
						);
					}
					async Cb(N, A, R) {
						this.Wb("doResolveFromBackup()"),
							this.Eb(
								{
									resource: this.resource,
									name: this.name,
									mtime: N.meta ? N.meta.mtime : Date.now(),
									ctime: N.meta ? N.meta.ctime : Date.now(),
									size: N.meta ? N.meta.size : 0,
									etag: N.meta ? N.meta.etag : u.$Ql,
									value: await (0, y.$8X)(
										await this.mb.getDecodedStream(this.resource, N.value, {
											encoding: l.$NY,
										}),
									),
									encoding: A,
									readonly: !1,
									locked: !1,
								},
								!0,
								R,
							),
							N.meta?.orphaned && this.xb(!0);
					}
					async Db(N) {
						this.Wb("resolveFromFile()");
						const A = N?.forceReadFromFile,
							R = this.isResolved() || N?.allowBinary;
						let O;
						A
							? (O = u.$Ql)
							: this.lastResolvedFileStat &&
								(O = this.lastResolvedFileStat.etag);
						const B = this.Z;
						try {
							const U = await this.mb.readStream(this.resource, {
								acceptTextOnly: !R,
								etag: O,
								encoding: this.jb,
								limits: N?.limits,
							});
							if ((this.xb(!1), B !== this.Z)) {
								this.Wb(
									"resolveFromFile() - exit - without resolving because model content changed",
								);
								return;
							}
							return this.Eb(U, !1, N);
						} catch (U) {
							const z = U.fileOperationResult;
							if (
								(this.xb(z === u.FileOperationResult.FILE_NOT_FOUND),
								this.isResolved() &&
									z === u.FileOperationResult.FILE_NOT_MODIFIED_SINCE)
							) {
								U instanceof u.$Il && this.Rb(U.stat);
								return;
							}
							if (
								this.isResolved() &&
								z === u.FileOperationResult.FILE_NOT_FOUND &&
								!A
							)
								return;
							throw U;
						}
					}
					Eb(N, A, R) {
						if ((this.Wb("resolveFromContent() - enter"), this.isDisposed())) {
							this.Wb(
								"resolveFromContent() - exit - because model is disposed",
							);
							return;
						}
						this.Rb({
							resource: this.resource,
							name: N.name,
							mtime: N.mtime,
							ctime: N.ctime,
							size: N.size,
							etag: N.etag,
							readonly: N.readonly,
							locked: N.locked,
							isFile: !0,
							isDirectory: !1,
							isSymbolicLink: !1,
							children: void 0,
						});
						const O = this.Y;
						(this.Y = N.encoding),
							this.jb
								? this.updatePreferredEncoding(this.Y)
								: O !== this.Y && this.S.fire(),
							this.textEditorModel
								? this.Gb(N.value)
								: this.Fb(N.resource, N.value),
							this.setDirty(!!A),
							this.N.fire(R?.reason ?? C.TextFileResolveReason.OTHER);
					}
					Fb(N, A) {
						this.Wb("doCreateTextModel()");
						const R = this.G(A, N, this.kb);
						this.z(R), this.C();
					}
					Gb(N) {
						this.Wb("doUpdateTextModel()"), (this.ab = !0);
						try {
							this.updateTextEditorModel(N, this.kb);
						} finally {
							this.ab = !1;
						}
					}
					z(N) {
						this.D(
							N.onDidChangeContent((A) =>
								this.Ib(N, A.isUndoing || A.isRedoing),
							),
						),
							this.D(N.onDidChangeLanguage(() => this.Sb())),
							super.z(N);
					}
					Ib(N, A) {
						if (
							(this.Wb("onModelContentChanged() - enter"),
							this.Z++,
							this.Wb(`onModelContentChanged() - new versionId ${this.Z}`),
							A && (this.db = Date.now()),
							!this.ab && !this.isReadonly())
						)
							if (N.getAlternativeVersionId() === this.$) {
								this.Wb(
									"onModelContentChanged() - model content changed back to last saved version",
								);
								const R = this.fb;
								this.setDirty(!1), R && this.R.fire();
							} else
								this.Wb(
									"onModelContentChanged() - model content changed and marked as dirty",
								),
									this.setDirty(!0);
						this.M.fire(), this.C();
					}
					async C() {
						await this.tb?.whenInstalledExtensionsRegistered();
						const N = this.getLanguageId();
						if (
							this.resource.scheme === this.sb.defaultUriScheme &&
							(!N || N === T.$0M) &&
							!this.X
						)
							return super.C();
					}
					async Kb() {
						this.isDisposed() ||
							(await this.mb.files.resolve(this.resource, {
								reload: { async: !1 },
								forceReadFromFile: !0,
							}));
					}
					isDirty() {
						return this.fb;
					}
					isModified() {
						return this.isDirty();
					}
					setDirty(N) {
						if (!this.isResolved()) return;
						const A = this.fb;
						this.Lb(N), N !== A && this.O.fire();
					}
					Lb(N) {
						const A = this.fb,
							R = this.gb,
							O = this.ib,
							B = this.$;
						return (
							N
								? (this.fb = !0)
								: ((this.fb = !1), (this.gb = !1), (this.ib = !1), this.Qb()),
							() => {
								(this.fb = A), (this.gb = R), (this.ib = O), (this.$ = B);
							}
						);
					}
					async save(N = Object.create(null)) {
						return this.isResolved()
							? this.isReadonly()
								? (this.Wb("save() - ignoring request for readonly resource"),
									!1)
								: (this.hasState(C.TextFileEditorModelState.CONFLICT) ||
											this.hasState(C.TextFileEditorModelState.ERROR)) &&
										(N.reason === d.SaveReason.AUTO ||
											N.reason === d.SaveReason.FOCUS_CHANGE ||
											N.reason === d.SaveReason.WINDOW_CHANGE)
									? (this.Wb(
											"save() - ignoring auto save request for model that is in conflict or error",
										),
										!1)
									: (this.Wb("save() - enter"),
										await this.Mb(N),
										this.Wb("save() - exit"),
										this.hasState(C.TextFileEditorModelState.SAVED))
							: !1;
					}
					async Mb(N) {
						typeof N.reason != "number" && (N.reason = d.SaveReason.EXPLICIT);
						const A = this.Z;
						if (
							(this.Wb(`doSave(${A}) - enter with versionId ${A}`), this.bb)
						) {
							this.Wb(
								`doSave(${A}) - exit - refusing to save() recursively from save participant`,
							);
							return;
						}
						if (this.eb.isRunning(A))
							return (
								this.Wb(
									`doSave(${A}) - exit - found a running save for versionId ${A}`,
								),
								this.eb.running
							);
						if (!N.force && !this.fb) {
							this.Wb(
								`doSave(${A}) - exit - because not dirty and/or versionId is different (this.isDirty: ${this.fb}, this.versionId: ${this.Z})`,
							);
							return;
						}
						if (this.eb.isRunning())
							return (
								this.Wb(`doSave(${A}) - exit - because busy saving`),
								this.eb.cancelRunning(),
								this.eb.queue(() => this.Mb(N))
							);
						this.isResolved() && this.textEditorModel.pushStackElement();
						const R = new s.$Ce();
						return this.ub
							.withProgress(
								{
									title: (0, t.localize)(12674, null, this.name),
									location: k.ProgressLocation.Window,
									cancellable: !0,
									delay: this.isDirty() ? 3e3 : 5e3,
								},
								(O) => this.Nb(A, N, O, R),
								() => {
									R.cancel();
								},
							)
							.finally(() => {
								R.dispose();
							});
					}
					Nb(N, A, R, O) {
						return this.eb.run(
							N,
							(async () => {
								if (this.isResolved() && !A.skipSaveParticipants)
									try {
										if (
											A.reason === d.SaveReason.AUTO &&
											typeof this.db == "number"
										) {
											const z = Date.now() - this.db;
											z < L.cb && (await (0, c.$Nh)(L.cb - z));
										}
										if (!O.token.isCancellationRequested) {
											this.bb = !0;
											try {
												await this.mb.files.runSaveParticipants(
													this,
													{
														reason: A.reason ?? d.SaveReason.EXPLICIT,
														savedFrom: A.from,
													},
													R,
													O.token,
												);
											} finally {
												this.bb = !1;
											}
										}
									} catch (z) {
										this.ob.error(
											`[text file model] runSaveParticipants(${N}) - resulted in an error: ${z.toString()}`,
											this.resource.toString(),
										);
									}
								if (
									O.token.isCancellationRequested ||
									(O.dispose(), this.isDisposed()) ||
									!this.isResolved()
								)
									return;
								(N = this.Z),
									(this.ib = !1),
									R.report({ message: (0, t.localize)(12675, null) }),
									this.Wb(`doSave(${N}) - before write()`);
								const B = (0, E.$wg)(this.lastResolvedFileStat),
									U = this;
								return this.eb.run(
									N,
									(async () => {
										try {
											const z = await this.mb.write(
												B.resource,
												U.createSnapshot(),
												{
													mtime: B.mtime,
													encoding: this.getEncoding(),
													etag:
														A.ignoreModifiedSince ||
														!this.qb.preventSaveConflicts(
															B.resource,
															U.getLanguageId(),
														)
															? u.$Ql
															: B.etag,
													unlock: A.writeUnlock,
													writeElevated: A.writeElevated,
												},
											);
											this.Ob(z, N, A);
										} catch (z) {
											this.Pb(z, N, A);
										}
									})(),
								);
							})(),
							() => O.cancel(),
						);
					}
					Ob(N, A, R) {
						this.Rb(N),
							A === this.Z
								? (this.Wb(
										`handleSaveSuccess(${A}) - setting dirty to false because versionId did not change`,
									),
									this.setDirty(!1))
								: this.Wb(
										`handleSaveSuccess(${A}) - not setting dirty to false because versionId did change meanwhile`,
									),
							this.xb(!1),
							this.Q.fire({ reason: R.reason, stat: N, source: R.source });
					}
					Pb(N, A, R) {
						if (
							((R.ignoreErrorHandler ? this.ob.trace : this.ob.error).apply(
								this.ob,
								[
									`[text file model] handleSaveError(${A}) - exit - resulted in a save error: ${N.toString()}`,
									this.resource.toString(),
								],
							),
							R.ignoreErrorHandler)
						)
							throw N;
						this.setDirty(!0),
							(this.ib = !0),
							N.fileOperationResult ===
								u.FileOperationResult.FILE_MODIFIED_SINCE && (this.gb = !0),
							this.mb.files.saveErrorHandler.onSaveError(N, this, R),
							this.P.fire();
					}
					Qb() {
						this.isResolved() &&
							(this.$ = this.textEditorModel.getAlternativeVersionId());
					}
					Rb(N) {
						const A = this.isReadonly();
						this.lastResolvedFileStat
							? this.lastResolvedFileStat.mtime <= N.mtime
								? (this.lastResolvedFileStat = N)
								: (this.lastResolvedFileStat = {
										...this.lastResolvedFileStat,
										readonly: N.readonly,
										locked: N.locked,
									})
							: (this.lastResolvedFileStat = N),
							this.isReadonly() !== A && this.W.fire();
					}
					hasState(N) {
						switch (N) {
							case C.TextFileEditorModelState.CONFLICT:
								return this.gb;
							case C.TextFileEditorModelState.DIRTY:
								return this.fb;
							case C.TextFileEditorModelState.ERROR:
								return this.ib;
							case C.TextFileEditorModelState.ORPHAN:
								return this.hb;
							case C.TextFileEditorModelState.PENDING_SAVE:
								return this.eb.isRunning();
							case C.TextFileEditorModelState.SAVED:
								return !this.fb;
						}
					}
					async joinState(N) {
						return this.eb.running;
					}
					getLanguageId() {
						return this.textEditorModel
							? this.textEditorModel.getLanguageId()
							: this.kb;
					}
					async Sb() {
						if (this.Tb) {
							this.Wb(
								"onMaybeShouldChangeEncoding() - ignoring because encoding was set explicitly",
							);
							return;
						}
						if (this.Y === l.$OY || this.Y === l.$PY || this.Y === l.$QY) {
							this.Wb(
								"onMaybeShouldChangeEncoding() - ignoring because content encoding has a BOM",
							);
							return;
						}
						const { encoding: N } =
							await this.mb.encoding.getPreferredReadEncoding(this.resource);
						if (typeof N != "string" || !this.Vb(N)) {
							this.Wb(
								`onMaybeShouldChangeEncoding() - ignoring because preferred encoding ${N} is not new`,
							);
							return;
						}
						if (this.isDirty()) {
							this.Wb(
								"onMaybeShouldChangeEncoding() - ignoring because model is dirty",
							);
							return;
						}
						return (
							this.ob.info(
								`Adjusting encoding based on configured language override to '${N}' for ${this.resource.toString(!0)}.`,
							),
							this.Kb()
						);
					}
					setEncoding(N, A) {
						return (this.Tb = !0), this.Ub(N, A);
					}
					async Ub(N, A) {
						if (A === C.EncodingMode.Encode)
							this.updatePreferredEncoding(N),
								this.isDirty() || (this.Z++, this.setDirty(!0)),
								this.gb || (await this.save({ source: L.L }));
						else {
							if (!this.Vb(N)) return;
							this.isDirty() && !this.gb && (await this.save()),
								this.updatePreferredEncoding(N),
								await this.Kb();
						}
					}
					updatePreferredEncoding(N) {
						this.Vb(N) && ((this.jb = N), this.S.fire());
					}
					Vb(N) {
						return !(this.jb === N || (!this.jb && this.Y === N));
					}
					getEncoding() {
						return this.jb || this.Y;
					}
					Wb(N) {
						this.ob.trace(`[text file model] ${N}`, this.resource.toString());
					}
					isResolved() {
						return !!this.textEditorModel;
					}
					isReadonly() {
						return this.qb.isReadonly(this.resource, this.lastResolvedFileStat);
					}
					dispose() {
						this.Wb("dispose()"),
							(this.gb = !1),
							(this.hb = !1),
							(this.ib = !1),
							super.dispose();
					}
				};
				(e.$xvc = D),
					(e.$xvc =
						D =
						L =
							Ne(
								[
									j(3, a.$nM),
									j(4, h.$QO),
									j(5, u.$ll),
									j(6, C.$kZ),
									j(7, r.$WO),
									j(8, n.$ik),
									j(9, p.$gY),
									j(10, f.$_Y),
									j(11, b.$3N),
									j(12, $.$RO),
									j(13, I.$XK),
									j(14, v.$I8),
									j(15, P.$q2),
									j(16, k.$8N),
								],
								D,
							));
			},
		),
		