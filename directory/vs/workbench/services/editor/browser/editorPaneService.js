define(de[3874], he([1, 0, 1798, 192, 20]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$PAc = void 0);
			class E {
				constructor() {
					this.onWillInstantiateEditorPane = i.$vVb.onWillInstantiateEditorPane;
				}
				didInstantiateEditorPane(d) {
					return i.$vVb.didInstantiateEditorPane(d);
				}
			}
			(e.$PAc = E), (0, w.$lK)(t.$q6, E, w.InstantiationType.Delayed);
		}),
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
		define(
			de[1339],
			he([
				1, 0, 702, 61, 67, 6, 335, 125, 122, 227, 334, 85, 28, 73, 409, 18, 37,
				842, 76, 474, 91,
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
			) {
				"use strict";
				var l;
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$6Y = void 0);
				let y = class extends t.$VO {
					static {
						l = this;
					}
					static {
						this.c = 40;
					}
					static {
						this.L = this.c * 10;
					}
					static {
						this.M = "${activeEditorLanguage}";
					}
					get name() {
						return this.U === "content" && !this.hasAssociatedFilePath && this.W
							? this.W
							: this.db.getUriBasenameLabel(this.resource);
					}
					constructor(v, S, I, T, P, k, L, D, M, N, A, R, O, B, U) {
						super(L, k, B, U),
							(this.resource = v),
							(this.hasAssociatedFilePath = S),
							(this.X = I),
							(this.Y = T),
							(this.Z = P),
							(this.$ = D),
							(this.ab = M),
							(this.bb = N),
							(this.cb = A),
							(this.db = R),
							(this.eb = O),
							(this.N = this.D(new E.$re())),
							(this.onDidChangeContent = this.N.event),
							(this.O = this.D(new E.$re())),
							(this.onDidChangeName = this.O.event),
							(this.P = this.D(new E.$re())),
							(this.onDidChangeDirty = this.P.event),
							(this.Q = this.D(new E.$re())),
							(this.onDidChangeEncoding = this.Q.event),
							(this.R = this.D(new E.$re())),
							(this.onDidSave = this.R.event),
							(this.S = this.D(new E.$re())),
							(this.onDidRevert = this.S.event),
							(this.typeId = u.$OO),
							(this.capabilities = u.WorkingCopyCapabilities.Untitled),
							(this.U = "content"),
							(this.W = void 0),
							(this.ib = this.hasAssociatedFilePath || !!this.X),
							(this.kb = !1),
							this.D(this.bb.registerWorkingCopy(this)),
							T && this.setLanguageId(T),
							this.gb(void 0, !1),
							this.fb();
					}
					fb() {
						this.D(this.ab.onDidChangeConfiguration((v) => this.gb(v, !0)));
					}
					gb(v, S) {
						if (!v || v.affectsConfiguration(this.resource, "files.encoding")) {
							const I = this.ab.getValue(this.resource, "files.encoding");
							this.hb !== I &&
								typeof I == "string" &&
								((this.hb = I), S && !this.Z && this.Q.fire());
						}
						if (
							!v ||
							v.affectsConfiguration(
								this.resource,
								"workbench.editor.untitled.labelFormat",
							)
						) {
							const I = this.ab.getValue(
								this.resource,
								"workbench.editor.untitled.labelFormat",
							);
							this.U !== I &&
								(I === "content" || I === "name") &&
								((this.U = I), S && this.O.fire());
						}
					}
					setLanguageId(v, S) {
						const I = v === l.M ? this.eb.activeTextEditorLanguageId : v;
						(this.Y = I), I && super.setLanguageId(I, S);
					}
					getLanguageId() {
						return this.textEditorModel
							? this.textEditorModel.getLanguageId()
							: this.Y;
					}
					getEncoding() {
						return this.Z || this.hb;
					}
					async setEncoding(v) {
						const S = this.getEncoding();
						(this.Z = v), S !== this.Z && this.Q.fire();
					}
					isDirty() {
						return this.ib;
					}
					isModified() {
						return this.isDirty();
					}
					jb(v) {
						this.ib !== v && ((this.ib = v), this.P.fire());
					}
					async save(v) {
						const S = await this.cb.save(this.resource, v);
						return (
							S && this.R.fire({ reason: v?.reason, source: v?.source }), !!S
						);
					}
					async revert() {
						this.kb = !0;
						try {
							this.updateTextEditorModel((0, m.$7X)(""));
						} finally {
							this.kb = !1;
						}
						this.jb(!1), this.S.fire();
					}
					async backup(v) {
						let S;
						return (
							this.isResolved()
								? (S = await this.cb.getEncodedReadable(
										this.resource,
										this.createSnapshot() ?? void 0,
										{ encoding: o.$NY },
									))
								: typeof this.X == "string" &&
									(S = (0, f.$5e)(f.$Te.fromString(this.X))),
							{ content: S }
						);
					}
					async resolve() {
						let v = !1,
							S = !1;
						if (this.textEditorModel)
							this.updateTextEditorModel(void 0, this.Y);
						else {
							let T;
							const P = await this.$.resolve(this);
							P
								? ((T = P.value), (S = !0))
								: (T = (0, f.$8e)(f.$Te.fromString(this.X || "")));
							const k = await (0, m.$8X)(
								await this.cb.getDecodedStream(this.resource, T, {
									encoding: o.$NY,
								}),
							);
							this.G(k, this.resource, this.Y), (v = !0);
						}
						const I = (0, h.$wg)(this.textEditorModel);
						return (
							this.z(I),
							v &&
								((S || this.X) && this.nb(I),
								this.jb(this.hasAssociatedFilePath || !!S || !!this.X),
								(S || this.X) && this.N.fire()),
							super.resolve()
						);
					}
					z(v) {
						this.D(v.onDidChangeContent((S) => this.mb(v, S))),
							this.D(v.onDidChangeLanguage(() => this.gb(void 0, !0))),
							super.z(v);
					}
					mb(v, S) {
						this.kb ||
							(!this.hasAssociatedFilePath &&
							v.getLineCount() === 1 &&
							v.getLineLength(1) === 0
								? this.jb(!1)
								: this.jb(!0)),
							S.changes.some(
								(I) =>
									(I.range.startLineNumber === 1 ||
										I.range.endLineNumber === 1) &&
									I.range.startColumn <= l.L,
							) && this.nb(v),
							this.N.fire(),
							this.C();
					}
					nb(v) {
						if (this.hasAssociatedFilePath) return;
						let S,
							I = v
								.getValueInRange({
									startLineNumber: 1,
									endLineNumber: 1,
									startColumn: 1,
									endColumn: l.L + 1,
								})
								.trim()
								.replace(/\s+/g, " ")
								.replace(/\u202E/g, "");
						(I = I.substr(0, (0, p.$Yf)(I, l.c)[0])),
							I && (0, n.$UK)().exec(I) && (S = I),
							S !== this.W && ((this.W = S), this.O.fire());
					}
					isReadonly() {
						return !1;
					}
				};
				(e.$6Y = y),
					(e.$6Y =
						y =
						l =
							Ne(
								[
									j(5, i.$nM),
									j(6, w.$QO),
									j(7, C.$WO),
									j(8, d.$XO),
									j(9, r.$gY),
									j(10, a.$kZ),
									j(11, c.$3N),
									j(12, g.$IY),
									j(13, b.$RO),
									j(14, s.$XK),
								],
								y,
							));
			},
		),
		define(
			de[3875],
			he([
				1, 0, 9, 5, 3, 67, 1827, 85, 23, 42, 1920, 22, 20, 155, 2875, 68, 1339,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$zvc = void 0);
				let o = class extends w.$6c {
					constructor(s, l, y, $) {
						super(),
							(this.h = s),
							(this.j = l),
							(this.m = y),
							(this.n = $),
							(this.f = new Map()),
							(this.g = new Set());
					}
					b(s) {
						return this.r(s);
					}
					async r(s, l) {
						this.g.delete(s);
						const y = t.URI.parse(s);
						if (y.scheme === m.Schemas.inMemory) {
							if (!this.n.getModel(y))
								throw new Error(`Unable to resolve inMemory resource ${s}`);
							const v = this.h.createInstance(C.$Q1b, y);
							if (this.s(v, s)) return v;
						}
						if (y.scheme === m.Schemas.untitled) {
							const $ = await this.j.untitled.resolve({ untitledResource: y });
							if (this.s($, s)) return $;
						}
						if (this.m.hasProvider(y)) {
							const $ = await this.j.files.resolve(y, {
								reason: d.TextFileResolveReason.REFERENCE,
							});
							if (this.s($, s)) return $;
						}
						if (this.f.has(y.scheme)) {
							await this.u(s);
							const $ = this.h.createInstance(C.$Q1b, y);
							if (this.s($, s)) return $;
						}
						if (!l)
							return await this.m.activateProvider(y.scheme), this.r(s, !0);
						throw new Error(`Unable to resolve resource ${s}`);
					}
					s(s, l) {
						if ((0, r.$NO)(s)) return !0;
						throw new Error(`Unable to resolve resource ${l}`);
					}
					c(s, l) {
						t.URI.parse(s).scheme !== m.Schemas.inMemory &&
							(this.g.add(s),
							(async () => {
								try {
									const $ = await l;
									if (
										!this.g.has(s) ||
										($ instanceof u.$xvc
											? await this.j.files.canDispose($)
											: $ instanceof p.$6Y &&
												(await this.j.untitled.canDispose($)),
										!this.g.has(s))
									)
										return;
									$.dispose();
								} catch {
								} finally {
									this.g.delete(s);
								}
							})());
					}
					registerTextModelContentProvider(s, l) {
						let y = this.f.get(s);
						return (
							y || ((y = []), this.f.set(s, y)),
							y.unshift(l),
							(0, w.$Yc)(() => {
								const $ = this.f.get(s);
								if (!$) return;
								const v = $.indexOf(l);
								v !== -1 &&
									($.splice(v, 1), $.length === 0 && this.f.delete(s));
							})
						);
					}
					hasTextModelContentProvider(s) {
						return this.f.get(s) !== void 0;
					}
					async u(s) {
						const l = t.URI.parse(s),
							y = this.f.get(l.scheme) || [];
						for (const $ of y) {
							const v = await $.provideTextContent(l);
							if (v) return v;
						}
						throw new Error(
							`Unable to resolve text model content for resource ${s}`,
						);
					}
				};
				o = Ne([j(0, i.$Li), j(1, d.$kZ), j(2, a.$ll), j(3, E.$QO)], o);
				let f = class extends w.$1c {
					get b() {
						return this.a || (this.a = this.g.createInstance(o)), this.a;
					}
					get f() {
						return this.c || (this.c = new w.$7c(this.b)), this.c;
					}
					constructor(s, l, y, $, v) {
						super(),
							(this.g = s),
							(this.h = l),
							(this.j = y),
							(this.m = $),
							(this.n = v),
							(this.a = void 0),
							(this.c = void 0),
							this.D(new n.$yvc(this.m, this, this.j));
					}
					async createModelReference(s) {
						return (
							(s = this.n.asCanonicalUri(s)), await this.f.acquire(s.toString())
						);
					}
					registerTextModelContentProvider(s, l) {
						return this.b.registerTextModelContentProvider(s, l);
					}
					canHandleResource(s) {
						return this.h.hasProvider(s) ||
							s.scheme === m.Schemas.untitled ||
							s.scheme === m.Schemas.inMemory
							? !0
							: this.b.hasTextModelContentProvider(s.scheme);
					}
				};
				(e.$zvc = f),
					(e.$zvc = f =
						Ne(
							[j(0, i.$Li), j(1, a.$ll), j(2, c.$GN), j(3, E.$QO), j(4, g.$Vl)],
							f,
						)),
					(0, h.$lK)(r.$MO, f, h.InstantiationType.Delayed);
			},
		),
		define(
			de[631],
			he([1, 0, 9, 5, 1339, 10, 6, 59, 23, 3, 20]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				var a;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$8Y = e.$7Y = void 0),
					(e.$7Y = (0, i.$Mi)("untitledTextEditorService"));
				let h = class extends r.$1c {
					static {
						a = this;
					}
					static {
						this.a = /Untitled-\d+/;
					}
					constructor(n, g) {
						super(),
							(this.m = n),
							(this.n = g),
							(this.b = this.D(new C.$re())),
							(this.onDidChangeDirty = this.b.event),
							(this.c = this.D(new C.$re())),
							(this.onDidChangeEncoding = this.c.event),
							(this.f = this.D(new C.$re())),
							(this.onDidCreate = this.f.event),
							(this.g = this.D(new C.$re())),
							(this.onWillDispose = this.g.event),
							(this.h = this.D(new C.$re())),
							(this.onDidChangeLabel = this.h.event),
							(this.j = new d.$Gc());
					}
					get(n) {
						return this.j.get(n);
					}
					getValue(n) {
						return this.get(n)?.textEditorModel?.getValue();
					}
					async resolve(n) {
						const g = this.q(n);
						return await g.resolve(), g;
					}
					create(n) {
						return this.q(n);
					}
					q(n = Object.create(null)) {
						const g = this.r(n);
						return g.untitledResource && this.j.has(g.untitledResource)
							? this.j.get(g.untitledResource)
							: this.s(g);
					}
					r(n) {
						const g = Object.create(null);
						if (
							(n.associatedResource
								? ((g.untitledResource = t.URI.from({
										scheme: m.Schemas.untitled,
										authority: n.associatedResource.authority,
										fragment: n.associatedResource.fragment,
										path: n.associatedResource.path,
										query: n.associatedResource.query,
									})),
									(g.associatedResource = n.associatedResource))
								: n.untitledResource?.scheme === m.Schemas.untitled &&
									(g.untitledResource = n.untitledResource),
							n.languageId)
						)
							g.languageId = n.languageId;
						else if (!g.associatedResource) {
							const p = this.n.getValue();
							p.files?.defaultLanguage &&
								(g.languageId = p.files.defaultLanguage);
						}
						return (
							(g.encoding = n.encoding), (g.initialValue = n.initialValue), g
						);
					}
					s(n) {
						let g = n.untitledResource;
						if (!g) {
							let o = 1;
							do
								(g = t.URI.from({
									scheme: m.Schemas.untitled,
									path: `Untitled-${o}`,
								})),
									o++;
							while (this.j.has(g));
						}
						const p = this.D(
							this.m.createInstance(
								w.$6Y,
								g,
								!!n.associatedResource,
								n.initialValue,
								n.languageId,
								n.encoding,
							),
						);
						return this.t(p), p;
					}
					t(n) {
						const g = new r.$Zc();
						g.add(n.onDidChangeDirty(() => this.b.fire(n))),
							g.add(n.onDidChangeName(() => this.h.fire(n))),
							g.add(n.onDidChangeEncoding(() => this.c.fire(n))),
							g.add(n.onWillDispose(() => this.g.fire(n))),
							C.Event.once(n.onWillDispose)(() => {
								this.j.delete(n.resource), g.dispose();
							}),
							this.j.set(n.resource, n),
							this.f.fire(n),
							n.isDirty() && this.b.fire(n);
					}
					isUntitledWithAssociatedResource(n) {
						return (
							n.scheme === m.Schemas.untitled &&
							n.path.length > 1 &&
							!a.a.test(n.path)
						);
					}
					canDispose(n) {
						return n.isDisposed() ? !0 : this.u(n);
					}
					async u(n) {
						return n.isDirty()
							? (await C.Event.toPromise(n.onDidChangeDirty),
								this.canDispose(n))
							: !0;
					}
				};
				(e.$8Y = h),
					(e.$8Y = h = a = Ne([j(0, i.$Li), j(1, E.$gj)], h)),
					(0, u.$lK)(e.$7Y, h, u.InstantiationType.Delayed);
			},
		),
		define(
			de[247],
			he([
				1, 0, 27, 23, 19, 28, 9, 56, 71, 4, 99, 11, 31, 10, 8, 116, 5, 43, 93,
				41, 63, 32, 1015, 825, 1338, 100, 44, 296, 313, 446, 66, 231, 18, 165,
				631, 1916, 1014,
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
				L,
				D,
				M,
				N,
				A,
				R,
				O,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$CWb =
						e.$BWb =
						e.$AWb =
						e.$zWb =
						e.$yWb =
						e.$xWb =
						e.$wWb =
						e.$vWb =
						e.$uWb =
						e.$tWb =
						e.$sWb =
						e.$rWb =
						e.$qWb =
						e.$pWb =
						e.$oWb =
						e.$nWb =
						e.$mWb =
						e.$lWb =
						e.$kWb =
						e.$jWb =
						e.$iWb =
						e.$hWb =
						e.$gWb =
						e.$fWb =
						e.$eWb =
						e.$dWb =
						e.$cWb =
						e.$bWb =
						e.$aWb =
						e.$_Vb =
						e.$$Vb =
						e.$0Vb =
						e.$9Vb =
						e.$8Vb =
						e.$7Vb =
						e.$6Vb =
						e.$5Vb =
						e.$4Vb =
						e.$3Vb =
						e.$2Vb =
						e.$1Vb =
						e.$ZVb =
						e.$YVb =
						e.$XVb =
						e.$WVb =
						e.$VVb =
						e.$UVb =
							void 0),
					(e.$DWb = q),
					(e.$EWb = Y),
					(e.$UVb = "workbench.action.closeUnmodifiedEditors"),
					(e.$VVb = "workbench.action.closeEditorsInGroup"),
					(e.$WVb = "workbench.action.closeEditorsAndGroup"),
					(e.$XVb = "workbench.action.closeEditorsToTheRight"),
					(e.$YVb = "workbench.action.closeActiveEditor"),
					(e.$ZVb = "workbench.action.closeActivePinnedEditor"),
					(e.$1Vb = "workbench.action.closeGroup"),
					(e.$2Vb = "workbench.action.closeOtherEditors"),
					(e.$3Vb = "moveActiveEditor"),
					(e.$4Vb = "copyActiveEditor"),
					(e.$5Vb = "layoutEditorGroups"),
					(e.$6Vb = "workbench.action.keepEditor"),
					(e.$7Vb = "workbench.action.toggleKeepEditors"),
					(e.$8Vb = "workbench.action.toggleEditorGroupLock"),
					(e.$9Vb = "workbench.action.lockEditorGroup"),
					(e.$0Vb = "workbench.action.unlockEditorGroup"),
					(e.$$Vb = "workbench.action.showEditorsInGroup"),
					(e.$_Vb = "workbench.action.reopenWithEditor"),
					(e.$aWb = "workbench.action.pinEditor"),
					(e.$bWb = "workbench.action.unpinEditor"),
					(e.$cWb = "workbench.action.splitEditor"),
					(e.$dWb = "workbench.action.splitEditorUp"),
					(e.$eWb = "workbench.action.splitEditorDown"),
					(e.$fWb = "workbench.action.splitEditorLeft"),
					(e.$gWb = "workbench.action.splitEditorRight"),
					(e.$hWb = "workbench.action.toggleMaximizeEditorGroup"),
					(e.$iWb = "workbench.action.splitEditorInGroup"),
					(e.$jWb = "workbench.action.toggleSplitEditorInGroup"),
					(e.$kWb = "workbench.action.joinEditorInGroup"),
					(e.$lWb = "workbench.action.toggleSplitEditorInGroupLayout"),
					(e.$mWb = "workbench.action.focusFirstSideEditor"),
					(e.$nWb = "workbench.action.focusSecondSideEditor"),
					(e.$oWb = "workbench.action.focusOtherSideEditor"),
					(e.$pWb = "workbench.action.focusLeftGroupWithoutWrap"),
					(e.$qWb = "workbench.action.focusRightGroupWithoutWrap"),
					(e.$rWb = "workbench.action.focusAboveGroupWithoutWrap"),
					(e.$sWb = "workbench.action.focusBelowGroupWithoutWrap"),
					(e.$tWb = "workbench.action.openEditorAtIndex"),
					(e.$uWb = "workbench.action.moveEditorToNewWindow"),
					(e.$vWb = "workbench.action.copyEditorToNewWindow"),
					(e.$wWb = "workbench.action.moveEditorGroupToNewWindow"),
					(e.$xWb = "workbench.action.copyEditorGroupToNewWindow"),
					(e.$yWb = "workbench.action.newEmptyEditorWindow"),
					(e.$zWb = "_workbench.open"),
					(e.$AWb = "_workbench.diff"),
					(e.$BWb = "_workbench.openWith"),
					(e.$CWb = [e.$cWb, e.$YVb, e.$bWb, e.$0Vb, e.$hWb]);
				const B = function (ie) {
					return !(
						!(0, E.$ng)(ie) ||
						!(0, E.$lg)(ie.to) ||
						(!(0, E.$sg)(ie.by) && !(0, E.$lg)(ie.by)) ||
						(!(0, E.$sg)(ie.value) && !(0, E.$pg)(ie.value))
					);
				};
				function U() {
					const ie = {
						type: "object",
						required: ["to"],
						properties: {
							to: { type: "string", enum: ["left", "right"] },
							by: { type: "string", enum: ["tab", "group"] },
							value: { type: "number" },
						},
					};
					o.$TX.registerCommandAndKeybindingRule({
						id: e.$3Vb,
						weight: o.KeybindingWeight.WorkbenchContrib,
						when: m.EditorContextKeys.editorTextFocus,
						primary: 0,
						handler: (te, Q) => ne(!0, Q, te),
						metadata: {
							description: (0, r.localize)(3416, null),
							args: [
								{
									name: (0, r.localize)(3417, null),
									description: (0, r.localize)(3418, null),
									constraint: B,
									schema: ie,
								},
							],
						},
					}),
						o.$TX.registerCommandAndKeybindingRule({
							id: e.$4Vb,
							weight: o.KeybindingWeight.WorkbenchContrib,
							when: m.EditorContextKeys.editorTextFocus,
							primary: 0,
							handler: (te, Q) => ne(!1, Q, te),
							metadata: {
								description: (0, r.localize)(3419, null),
								args: [
									{
										name: (0, r.localize)(3420, null),
										description: (0, r.localize)(3421, null),
										constraint: B,
										schema: ie,
									},
								],
							},
						});
					function ne(te, Q = Object.create(null), Z) {
						(Q.to = Q.to || "right"),
							(Q.by = Q.by || "tab"),
							(Q.value = typeof Q.value == "number" ? Q.value : 1);
						const se = Z.get(M.$IY).activeEditorPane;
						if (se)
							switch (Q.by) {
								case "tab":
									if (te) return ee(Q, se);
									break;
								case "group":
									return _(te, Q, se, Z);
							}
					}
					function ee(te, Q) {
						const Z = Q.group;
						let se = Z.getIndexOfEditor(Q.input);
						switch (te.to) {
							case "first":
								se = 0;
								break;
							case "last":
								se = Z.count - 1;
								break;
							case "left":
								se = se - (te.value ?? 1);
								break;
							case "right":
								se = se + (te.value ?? 1);
								break;
							case "center":
								se = Math.round(Z.count / 2) - 1;
								break;
							case "position":
								se = (te.value ?? 1) - 1;
								break;
						}
						(se = se < 0 ? 0 : se >= Z.count ? Z.count - 1 : se),
							Z.moveEditor(Q.input, Z, { index: se });
					}
					function _(te, Q, Z, se) {
						const re = se.get(L.$EY),
							le = se.get(c.$gj),
							oe = Z.group;
						let ae;
						switch (Q.to) {
							case "left":
								(ae = re.findGroup({ direction: L.GroupDirection.LEFT }, oe)),
									ae || (ae = re.addGroup(oe, L.GroupDirection.LEFT));
								break;
							case "right":
								(ae = re.findGroup({ direction: L.GroupDirection.RIGHT }, oe)),
									ae || (ae = re.addGroup(oe, L.GroupDirection.RIGHT));
								break;
							case "up":
								(ae = re.findGroup({ direction: L.GroupDirection.UP }, oe)),
									ae || (ae = re.addGroup(oe, L.GroupDirection.UP));
								break;
							case "down":
								(ae = re.findGroup({ direction: L.GroupDirection.DOWN }, oe)),
									ae || (ae = re.addGroup(oe, L.GroupDirection.DOWN));
								break;
							case "first":
								ae = re.findGroup({ location: L.GroupLocation.FIRST }, oe);
								break;
							case "last":
								ae = re.findGroup({ location: L.GroupLocation.LAST }, oe);
								break;
							case "previous":
								ae = re.findGroup({ location: L.GroupLocation.PREVIOUS }, oe);
								break;
							case "next":
								(ae = re.findGroup({ location: L.GroupLocation.NEXT }, oe)),
									ae || (ae = re.addGroup(oe, (0, L.$HY)(le)));
								break;
							case "center":
								ae = re.getGroups(L.GroupsOrder.GRID_APPEARANCE)[
									re.count / 2 - 1
								];
								break;
							case "position":
								ae = re.getGroups(L.GroupsOrder.GRID_APPEARANCE)[
									(Q.value ?? 1) - 1
								];
								break;
						}
						ae &&
							(te
								? oe.moveEditor(Z.input, ae)
								: oe.id !== ae.id && oe.copyEditor(Z.input, ae),
							ae.focus());
					}
				}
				function z() {
					function ie(ne, ee) {
						if (!ee || typeof ee != "object") return;
						ne.get(L.$EY).applyLayout(ee);
					}
					h.$fk.registerCommand(e.$5Vb, (ne, ee) => {
						ie(ne, ee);
					}),
						h.$fk.registerCommand({
							id: "vscode.setEditorLayout",
							handler: (ne, ee) => ie(ne, ee),
							metadata: {
								description: "Set Editor Layout",
								args: [
									{
										name: "args",
										schema: {
											type: "object",
											required: ["groups"],
											properties: {
												orientation: {
													type: "number",
													default: 0,
													enum: [0, 1],
												},
												groups: {
													$ref: "#/definitions/editorGroupsSchema",
													default: [{}, {}],
												},
											},
										},
									},
								],
							},
						}),
						h.$fk.registerCommand({
							id: "vscode.getEditorLayout",
							handler: (ne) => ne.get(L.$EY).getLayout(),
							metadata: {
								description: "Get Editor Layout",
								args: [],
								returns:
									"An editor layout object, in the same format as vscode.setEditorLayout",
							},
						});
				}
				function F() {
					function ie(ne, ee, _) {
						return ne
							? [
									{ ...ne.editorOptions, ...(ee ?? Object.create(null)) },
									ne.sideBySide ? M.$KY : _,
								]
							: [ee, _];
					}
					h.$fk.registerCommand({
						id: "vscode.open",
						handler: (ne, ee) => {
							ne.get(h.$ek).executeCommand(e.$zWb, ee);
						},
						metadata: {
							description: "Opens the provided resource in the editor.",
							args: [{ name: "Uri" }],
						},
					}),
						h.$fk.registerCommand(e.$zWb, async function (ne, ee, _, te, Q) {
							const Z = ne.get(M.$IY),
								se = ne.get(L.$EY),
								re = ne.get(b.$7rb),
								le = ne.get(N.$I8),
								oe = ne.get(c.$gj),
								ae = ne.get(A.$7Y),
								pe = typeof ee == "string" ? ee : C.URI.from(ee, !0),
								[$e, ye] = _ ?? [];
							if (
								ye ||
								typeof $e == "number" ||
								(0, i.$Vg)(pe, i.Schemas.untitled)
							) {
								const [ue, fe] = ie(Q, ye, $e),
									me = C.URI.isUri(pe) ? pe : C.URI.parse(pe);
								let ve;
								ae.isUntitledWithAssociatedResource(me)
									? (ve = {
											resource: me.with({ scheme: le.defaultUriScheme }),
											forceUntitled: !0,
											options: ue,
											label: te,
										})
									: (ve = { resource: me, options: ue, label: te }),
									await Z.openEditor(ve, (0, k.$a8)(se, oe, fe));
							} else {
								if ((0, i.$Vg)(pe, i.Schemas.command)) return;
								await re.open(pe, {
									openToSide: Q?.sideBySide,
									editorOptions: Q?.editorOptions,
								});
							}
						}),
						h.$fk.registerCommand({
							id: "vscode.diff",
							handler: (ne, ee, _, te) => {
								ne.get(h.$ek).executeCommand(e.$AWb, ee, _, te);
							},
							metadata: {
								description:
									"Opens the provided resources in the diff editor to compare their contents.",
								args: [
									{
										name: "left",
										description: "Left-hand side resource of the diff editor",
									},
									{
										name: "right",
										description: "Right-hand side resource of the diff editor",
									},
									{
										name: "title",
										description: "Human readable title for the diff editor",
									},
								],
							},
						}),
						h.$fk.registerCommand(e.$AWb, async function (ne, ee, _, te, Q, Z) {
							const se = ne.get(M.$IY),
								re = ne.get(L.$EY),
								le = ne.get(c.$gj),
								[oe, ae] = Q ?? [],
								[pe, $e] = ie(Z, ae, oe);
							let ye, ue;
							typeof te == "string"
								? (ye = te)
								: te && ((ye = te.label), (ue = te.description)),
								await se.openEditor(
									{
										original: { resource: C.URI.from(ee, !0) },
										modified: { resource: C.URI.from(_, !0) },
										label: ye,
										description: ue,
										options: pe,
									},
									(0, k.$a8)(re, le, $e),
								);
						}),
						h.$fk.registerCommand(e.$BWb, async (ne, ee, _, te) => {
							const Q = ne.get(M.$IY),
								Z = ne.get(L.$EY),
								se = ne.get(c.$gj),
								[re, le] = te ?? [];
							await Q.openEditor(
								{
									resource: C.URI.from(ee, !0),
									options: { ...le, pinned: !0, override: _ },
								},
								(0, k.$a8)(Z, se, re),
							);
						}),
						h.$fk.registerCommand({
							id: "vscode.changes",
							handler: (ne, ee, _) => {
								ne.get(h.$ek).executeCommand("_workbench.changes", ee, _);
							},
							metadata: {
								description:
									"Opens a list of resources in the changes editor to compare their contents.",
								args: [
									{
										name: "title",
										description: "Human readable title for the diff editor",
									},
									{
										name: "resources",
										description:
											"List of resources to open in the changes editor",
									},
								],
							},
						}),
						h.$fk.registerCommand("_workbench.changes", async (ne, ee, _) => {
							const te = ne.get(M.$IY),
								Q = [];
							for (const [Z, se, re] of _)
								Q.push({
									resource: C.URI.revive(Z),
									original: { resource: C.URI.revive(se) },
									modified: { resource: C.URI.revive(re) },
								});
							await te.openEditor({ resources: Q, label: ee });
						}),
						h.$fk.registerCommand(
							"_workbench.openMultiDiffEditor",
							async (ne, ee) => {
								await ne
									.get(M.$IY)
									.openEditor({
										multiDiffSource: ee.multiDiffSourceUri
											? C.URI.revive(ee.multiDiffSourceUri)
											: void 0,
										resources: ee.resources?.map((te) => ({
											original: { resource: C.URI.revive(te.originalUri) },
											modified: { resource: C.URI.revive(te.modifiedUri) },
										})),
										label: ee.title,
									});
							},
						);
				}
				function x() {
					const ie = (ee, _) => {
						const te = ee.get(M.$IY),
							Q = te.activeEditorPane;
						if (Q) {
							const Z = Q.group.getEditorByIndex(_);
							Z && te.openEditor(Z);
						}
					};
					h.$fk.registerCommand({ id: e.$tWb, handler: ie });
					for (let ee = 0; ee < 9; ee++) {
						const _ = ee,
							te = ee + 1;
						o.$TX.registerCommandAndKeybindingRule({
							id: e.$tWb + te,
							weight: o.KeybindingWeight.WorkbenchContrib,
							when: void 0,
							primary: t.KeyMod.Alt | ne(te),
							mac: { primary: t.KeyMod.WinCtrl | ne(te) },
							handler: (Q) => ie(Q, _),
						});
					}
					function ne(ee) {
						switch (ee) {
							case 0:
								return t.KeyCode.Digit0;
							case 1:
								return t.KeyCode.Digit1;
							case 2:
								return t.KeyCode.Digit2;
							case 3:
								return t.KeyCode.Digit3;
							case 4:
								return t.KeyCode.Digit4;
							case 5:
								return t.KeyCode.Digit5;
							case 6:
								return t.KeyCode.Digit6;
							case 7:
								return t.KeyCode.Digit7;
							case 8:
								return t.KeyCode.Digit8;
							case 9:
								return t.KeyCode.Digit9;
						}
						throw new Error("invalid index");
					}
				}
				function H() {
					for (let ee = 1; ee < 8; ee++)
						o.$TX.registerCommandAndKeybindingRule({
							id: ie(ee),
							weight: o.KeybindingWeight.WorkbenchContrib,
							when: void 0,
							primary: t.KeyMod.CtrlCmd | ne(ee),
							handler: (_) => {
								const te = _.get(L.$EY),
									Q = _.get(c.$gj);
								if (ee > te.count) return;
								const Z = te.getGroups(L.GroupsOrder.GRID_APPEARANCE);
								if (Z[ee]) return Z[ee].focus();
								const se = (0, L.$HY)(Q),
									re = te.findGroup({ location: L.GroupLocation.LAST });
								if (!re) return;
								te.addGroup(re, se).focus();
							},
						});
					function ie(ee) {
						switch (ee) {
							case 1:
								return "workbench.action.focusSecondEditorGroup";
							case 2:
								return "workbench.action.focusThirdEditorGroup";
							case 3:
								return "workbench.action.focusFourthEditorGroup";
							case 4:
								return "workbench.action.focusFifthEditorGroup";
							case 5:
								return "workbench.action.focusSixthEditorGroup";
							case 6:
								return "workbench.action.focusSeventhEditorGroup";
							case 7:
								return "workbench.action.focusEighthEditorGroup";
						}
						throw new Error("Invalid index");
					}
					function ne(ee) {
						switch (ee) {
							case 1:
								return t.KeyCode.Digit2;
							case 2:
								return t.KeyCode.Digit3;
							case 3:
								return t.KeyCode.Digit4;
							case 4:
								return t.KeyCode.Digit5;
							case 5:
								return t.KeyCode.Digit6;
							case 6:
								return t.KeyCode.Digit7;
							case 7:
								return t.KeyCode.Digit8;
						}
						throw new Error("Invalid index");
					}
				}
				function q(ie, ne, ee) {
					if (!ee.groupedEditors.length) return;
					const { group: _, editors: te } = ee.groupedEditors[0],
						Q = ee.preserveFocus,
						Z = ie.addGroup(_, ne);
					for (const se of te)
						se &&
							!se.hasCapability(I.EditorInputCapabilities.Singleton) &&
							_.copyEditor(se, Z, { preserveFocus: Q });
					Z.focus();
				}
				function V() {
					[
						{ id: e.$dWb, direction: L.GroupDirection.UP },
						{ id: e.$eWb, direction: L.GroupDirection.DOWN },
						{ id: e.$fWb, direction: L.GroupDirection.LEFT },
						{ id: e.$gWb, direction: L.GroupDirection.RIGHT },
					].forEach(({ id: ie, direction: ne }) => {
						h.$fk.registerCommand(ie, function (ee, ..._) {
							const te = (0, O.$TVb)(
								_,
								ee.get(M.$IY),
								ee.get(L.$EY),
								ee.get(f.$fMb),
							);
							q(ee.get(L.$EY), ne, te);
						});
					});
				}
				function G() {
					function ie(ne, ee, ..._) {
						const te = ne.get(L.$EY),
							Q = ne.get(M.$IY);
						let Z;
						if (
							(ee || _.length
								? (Z = !1)
								: (Z =
										te.partOptions.preventPinnedEditorClose === "keyboard" ||
										te.partOptions.preventPinnedEditorClose ===
											"keyboardAndMouse"),
							Z)
						) {
							const le = te.activeGroup,
								oe = le.activeEditor;
							if (oe && le.isSticky(oe)) {
								const ae = le.getEditors(I.EditorsOrder.MOST_RECENTLY_ACTIVE, {
									excludeSticky: !0,
								})[0];
								if (ae) return le.openEditor(ae);
								const pe = Q.getEditors(I.EditorsOrder.MOST_RECENTLY_ACTIVE, {
									excludeSticky: !0,
								})[0];
								if (pe)
									return Promise.resolve(
										te.getGroup(pe.groupId)?.openEditor(pe.editor),
									);
							}
						}
						const se = (0, O.$TVb)(
								_,
								ne.get(M.$IY),
								ne.get(L.$EY),
								ne.get(f.$fMb),
							),
							re = se.preserveFocus;
						return Promise.all(
							se.groupedEditors.map(async ({ group: le, editors: oe }) => {
								const ae = oe.filter((pe) => !Z || !le.isSticky(pe));
								await le.closeEditors(ae, { preserveFocus: re });
							}),
						);
					}
					o.$TX.registerCommandAndKeybindingRule({
						id: e.$YVb,
						weight: o.KeybindingWeight.WorkbenchContrib,
						when: void 0,
						primary: t.KeyMod.CtrlCmd | t.KeyCode.KeyW,
						win: {
							primary: t.KeyMod.CtrlCmd | t.KeyCode.F4,
							secondary: [t.KeyMod.CtrlCmd | t.KeyCode.KeyW],
						},
						handler: (ne, ...ee) => ie(ne, !1, ...ee),
					}),
						h.$fk.registerCommand(e.$ZVb, (ne, ...ee) => ie(ne, !0, ...ee)),
						o.$TX.registerCommandAndKeybindingRule({
							id: e.$VVb,
							weight: o.KeybindingWeight.WorkbenchContrib,
							when: void 0,
							primary: (0, t.$os)(t.$ps, t.KeyCode.KeyW),
							mac: { primary: (0, t.$os)(t.$qs, t.KeyCode.KeyW) },
							handler: (ne, ...ee) => {
								const _ = (0, O.$TVb)(
									ee,
									ne.get(M.$IY),
									ne.get(L.$EY),
									ne.get(f.$fMb),
								);
								return Promise.all(
									_.groupedEditors.map(async ({ group: te }) => {
										await te.closeAllEditors({ excludeSticky: !0 });
									}),
								);
							},
						}),
						o.$TX.registerCommandAndKeybindingRule({
							id: e.$1Vb,
							weight: o.KeybindingWeight.WorkbenchContrib,
							when: n.$Kj.and(S.$ZPb, S.$4Pb),
							primary: t.KeyMod.CtrlCmd | t.KeyCode.KeyW,
							win: {
								primary: t.KeyMod.CtrlCmd | t.KeyCode.F4,
								secondary: [t.KeyMod.CtrlCmd | t.KeyCode.KeyW],
							},
							handler: (ne, ...ee) => {
								const _ = ne.get(L.$EY),
									te = (0, O.$TVb)(ee, ne.get(M.$IY), _, ne.get(f.$fMb));
								te.groupedEditors.length &&
									_.removeGroup(te.groupedEditors[0].group);
							},
						}),
						o.$TX.registerCommandAndKeybindingRule({
							id: e.$UVb,
							weight: o.KeybindingWeight.WorkbenchContrib,
							when: void 0,
							primary: (0, t.$os)(t.$ps, t.KeyCode.KeyU),
							mac: { primary: (0, t.$os)(t.$qs, t.KeyCode.KeyU) },
							handler: (ne, ...ee) => {
								const _ = (0, O.$TVb)(
									ee,
									ne.get(M.$IY),
									ne.get(L.$EY),
									ne.get(f.$fMb),
								);
								return Promise.all(
									_.groupedEditors.map(async ({ group: te }) => {
										await te.closeEditors(
											{ savedOnly: !0, excludeSticky: !0 },
											{ preserveFocus: _.preserveFocus },
										);
									}),
								);
							},
						}),
						o.$TX.registerCommandAndKeybindingRule({
							id: e.$2Vb,
							weight: o.KeybindingWeight.WorkbenchContrib,
							when: void 0,
							primary: void 0,
							mac: {
								primary: t.KeyMod.CtrlCmd | t.KeyMod.Alt | t.KeyCode.KeyT,
							},
							handler: (ne, ...ee) => {
								const _ = (0, O.$TVb)(
									ee,
									ne.get(M.$IY),
									ne.get(L.$EY),
									ne.get(f.$fMb),
								);
								return Promise.all(
									_.groupedEditors.map(async ({ group: te, editors: Q }) => {
										const Z = te
											.getEditors(I.EditorsOrder.SEQUENTIAL, {
												excludeSticky: !0,
											})
											.filter((se) => !Q.includes(se));
										for (const se of Q) se && te.pinEditor(se);
										await te.closeEditors(Z, {
											preserveFocus: _.preserveFocus,
										});
									}),
								);
							},
						}),
						o.$TX.registerCommandAndKeybindingRule({
							id: e.$XVb,
							weight: o.KeybindingWeight.WorkbenchContrib,
							when: void 0,
							primary: void 0,
							handler: async (ne, ...ee) => {
								const _ = (0, O.$TVb)(
									ee,
									ne.get(M.$IY),
									ne.get(L.$EY),
									ne.get(f.$fMb),
								);
								if (_.groupedEditors.length) {
									const { group: te, editors: Q } = _.groupedEditors[0];
									te.activeEditor && te.pinEditor(te.activeEditor),
										await te.closeEditors(
											{
												direction: I.CloseDirection.RIGHT,
												except: Q[0],
												excludeSticky: !0,
											},
											{ preserveFocus: _.preserveFocus },
										);
								}
							},
						}),
						o.$TX.registerCommandAndKeybindingRule({
							id: e.$_Vb,
							weight: o.KeybindingWeight.WorkbenchContrib,
							when: void 0,
							primary: void 0,
							handler: async (ne, ...ee) => {
								const _ = ne.get(M.$IY),
									te = ne.get(D.$E6),
									Q = ne.get(l.$km),
									Z = (0, O.$TVb)(ee, _, ne.get(L.$EY), ne.get(f.$fMb)),
									se = new Map();
								for (const { group: re, editors: le } of Z.groupedEditors)
									for (const oe of le) {
										const ae = oe.toUntyped();
										if (!ae) return;
										ae.options = {
											..._.activeEditorPane?.options,
											override: g.EditorResolution.PICK,
										};
										const pe = await te.resolveEditor(ae, re);
										if (!(0, I.$w1)(pe)) return;
										let $e = se.get(re);
										$e || (($e = []), se.set(re, $e)),
											$e.push({
												editor: oe,
												replacement: pe.editor,
												forceReplaceDirty:
													oe.resource?.scheme === i.Schemas.untitled,
												options: pe.options,
											}),
											Q.publicLog2("workbenchEditorReopen", {
												scheme: oe.resource?.scheme ?? "",
												ext: oe.resource ? (0, w.$lh)(oe.resource) : "",
												from: oe.editorId ?? "",
												to: pe.editor.editorId ?? "",
											});
									}
								for (const [re, le] of se)
									await re.replaceEditors(le),
										await re.openEditor(le[0].replacement);
							},
						}),
						h.$fk.registerCommand(e.$WVb, async (ne, ...ee) => {
							const _ = ne.get(L.$EY),
								te = (0, O.$TVb)(ee, ne.get(M.$IY), _, ne.get(f.$fMb));
							if (te.groupedEditors.length) {
								const { group: Q } = te.groupedEditors[0];
								await Q.closeAllEditors(),
									Q.count === 0 && _.getGroup(Q.id) && _.removeGroup(Q);
							}
						});
				}
				function K() {
					const ie = [
						{ id: e.$pWb, direction: L.GroupDirection.LEFT },
						{ id: e.$qWb, direction: L.GroupDirection.RIGHT },
						{ id: e.$rWb, direction: L.GroupDirection.UP },
						{ id: e.$sWb, direction: L.GroupDirection.DOWN },
					];
					for (const ne of ie)
						h.$fk.registerCommand(ne.id, async (ee) => {
							const _ = ee.get(L.$EY);
							_.findGroup(
								{ direction: ne.direction },
								_.activeGroup,
								!1,
							)?.focus();
						});
				}
				function J() {
					async function ie(ee, _) {
						const te = ee.get(p.$Li);
						if (!_.groupedEditors.length) return;
						const { group: Q, editors: Z } = _.groupedEditors[0],
							se = Z[0];
						se &&
							(await Q.replaceEditors([
								{
									editor: se,
									replacement: te.createInstance(P.$iY, void 0, void 0, se, se),
									forceReplaceDirty: !0,
								},
							]));
					}
					(0, a.$4X)(
						class extends a.$3X {
							constructor() {
								super({
									id: e.$iWb,
									title: (0, r.localize2)(3422, "Split Editor in Group"),
									category: u.$ck.View,
									precondition: S.$SPb,
									f1: !0,
									keybinding: {
										weight: o.KeybindingWeight.WorkbenchContrib,
										when: S.$SPb,
										primary: (0, t.$os)(
											t.$ps,
											t.KeyMod.CtrlCmd | t.KeyMod.Shift | t.KeyCode.Backslash,
										),
										mac: {
											primary: (0, t.$os)(
												t.$qs,
												t.KeyMod.CtrlCmd | t.KeyMod.Shift | t.KeyCode.Backslash,
											),
										},
									},
								});
							}
							run(ee, ..._) {
								return ie(
									ee,
									(0, O.$TVb)(_, ee.get(M.$IY), ee.get(L.$EY), ee.get(f.$fMb)),
								);
							}
						},
					);
					async function ne(ee) {
						if (!ee.groupedEditors.length) return;
						const { group: _, editors: te } = ee.groupedEditors[0],
							Q = te[0];
						if (!Q || !(Q instanceof P.$iY)) return;
						let Z;
						const se = _.activeEditorPane;
						if (se instanceof $.$AVb && _.activeEditor === Q) {
							for (const re of [
								se.getPrimaryEditorPane(),
								se.getSecondaryEditorPane(),
							])
								if (re?.hasFocus()) {
									Z = { viewState: re.getViewState() };
									break;
								}
						}
						await _.replaceEditors([
							{ editor: Q, replacement: Q.primary, options: Z },
						]);
					}
					(0, a.$4X)(
						class extends a.$3X {
							constructor() {
								super({
									id: e.$kWb,
									title: (0, r.localize2)(3423, "Join Editor in Group"),
									category: u.$ck.View,
									precondition: S.$XPb,
									f1: !0,
									keybinding: {
										weight: o.KeybindingWeight.WorkbenchContrib,
										when: S.$XPb,
										primary: (0, t.$os)(
											t.$ps,
											t.KeyMod.CtrlCmd | t.KeyMod.Shift | t.KeyCode.Backslash,
										),
										mac: {
											primary: (0, t.$os)(
												t.$qs,
												t.KeyMod.CtrlCmd | t.KeyMod.Shift | t.KeyCode.Backslash,
											),
										},
									},
								});
							}
							run(ee, ..._) {
								return ne(
									(0, O.$TVb)(_, ee.get(M.$IY), ee.get(L.$EY), ee.get(f.$fMb)),
								);
							}
						},
					),
						(0, a.$4X)(
							class extends a.$3X {
								constructor() {
									super({
										id: e.$jWb,
										title: (0, r.localize2)(
											3424,
											"Toggle Split Editor in Group",
										),
										category: u.$ck.View,
										precondition: n.$Kj.or(S.$SPb, S.$XPb),
										f1: !0,
									});
								}
								async run(ee, ..._) {
									const te = (0, O.$TVb)(
										_,
										ee.get(M.$IY),
										ee.get(L.$EY),
										ee.get(f.$fMb),
									);
									if (!te.groupedEditors.length) return;
									const { editors: Q } = te.groupedEditors[0];
									Q[0] instanceof P.$iY
										? await ne(te)
										: Q[0] && (await ie(ee, te));
								}
							},
						),
						(0, a.$4X)(
							class extends a.$3X {
								constructor() {
									super({
										id: e.$lWb,
										title: (0, r.localize2)(
											3425,
											"Toggle Layout of Split Editor in Group",
										),
										category: u.$ck.View,
										precondition: S.$XPb,
										f1: !0,
									});
								}
								async run(ee) {
									const _ = ee.get(c.$gj),
										te = _.getValue($.$AVb.SIDE_BY_SIDE_LAYOUT_SETTING);
									let Q;
									return (
										te !== "horizontal" ? (Q = "horizontal") : (Q = "vertical"),
										_.updateValue($.$AVb.SIDE_BY_SIDE_LAYOUT_SETTING, Q)
									);
								}
							},
						);
				}
				function W() {
					(0, a.$4X)(
						class extends a.$3X {
							constructor() {
								super({
									id: e.$mWb,
									title: (0, r.localize2)(
										3426,
										"Focus First Side in Active Editor",
									),
									category: u.$ck.View,
									precondition: n.$Kj.or(S.$XPb, S.$WPb),
									f1: !0,
								});
							}
							async run(ie) {
								const ne = ie.get(M.$IY),
									ee = ie.get(h.$ek),
									_ = ne.activeEditorPane;
								_ instanceof $.$AVb
									? _.getSecondaryEditorPane()?.focus()
									: _ instanceof v.$IVb && (await ee.executeCommand(R.$NVb));
							}
						},
					),
						(0, a.$4X)(
							class extends a.$3X {
								constructor() {
									super({
										id: e.$nWb,
										title: (0, r.localize2)(
											3427,
											"Focus Second Side in Active Editor",
										),
										category: u.$ck.View,
										precondition: n.$Kj.or(S.$XPb, S.$WPb),
										f1: !0,
									});
								}
								async run(ie) {
									const ne = ie.get(M.$IY),
										ee = ie.get(h.$ek),
										_ = ne.activeEditorPane;
									_ instanceof $.$AVb
										? _.getPrimaryEditorPane()?.focus()
										: _ instanceof v.$IVb && (await ee.executeCommand(R.$MVb));
								}
							},
						),
						(0, a.$4X)(
							class extends a.$3X {
								constructor() {
									super({
										id: e.$oWb,
										title: (0, r.localize2)(
											3428,
											"Focus Other Side in Active Editor",
										),
										category: u.$ck.View,
										precondition: n.$Kj.or(S.$XPb, S.$WPb),
										f1: !0,
									});
								}
								async run(ie) {
									const ne = ie.get(M.$IY),
										ee = ie.get(h.$ek),
										_ = ne.activeEditorPane;
									_ instanceof $.$AVb
										? _.getPrimaryEditorPane()?.hasFocus()
											? _.getSecondaryEditorPane()?.focus()
											: _.getPrimaryEditorPane()?.focus()
										: _ instanceof v.$IVb && (await ee.executeCommand(R.$OVb));
								}
							},
						);
				}
				function X() {
					o.$TX.registerCommandAndKeybindingRule({
						id: e.$6Vb,
						weight: o.KeybindingWeight.WorkbenchContrib,
						when: void 0,
						primary: (0, t.$os)(t.$ps, t.KeyCode.Enter),
						mac: { primary: (0, t.$os)(t.$qs, t.KeyCode.Enter) },
						handler: async (ne, ...ee) => {
							const _ = (0, O.$TVb)(
								ee,
								ne.get(M.$IY),
								ne.get(L.$EY),
								ne.get(f.$fMb),
							);
							for (const { group: te, editors: Q } of _.groupedEditors)
								for (const Z of Q) te.pinEditor(Z);
						},
					}),
						h.$fk.registerCommand({
							id: e.$7Vb,
							handler: (ne) => {
								const ee = ne.get(c.$gj),
									te = ee.getValue("workbench.editor.enablePreview") !== !0;
								ee.updateValue("workbench.editor.enablePreview", te);
							},
						});
					function ie(ne, ee, ..._) {
						const Q = (0, O.$TVb)(
							_,
							ne.get(M.$IY),
							ne.get(L.$EY),
							ne.get(f.$fMb),
						).groupedEditors[0]?.group;
						Q?.lock(ee ?? !Q.isLocked);
					}
					(0, a.$4X)(
						class extends a.$3X {
							constructor() {
								super({
									id: e.$8Vb,
									title: (0, r.localize2)(3429, "Toggle Editor Group Lock"),
									category: u.$ck.View,
									f1: !0,
								});
							}
							async run(ne, ...ee) {
								ie(ne, void 0, ...ee);
							}
						},
					),
						(0, a.$4X)(
							class extends a.$3X {
								constructor() {
									super({
										id: e.$9Vb,
										title: (0, r.localize2)(3430, "Lock Editor Group"),
										category: u.$ck.View,
										precondition: S.$3Pb.toNegated(),
										f1: !0,
									});
								}
								async run(ne, ...ee) {
									ie(ne, !0, ...ee);
								}
							},
						),
						(0, a.$4X)(
							class extends a.$3X {
								constructor() {
									super({
										id: e.$0Vb,
										title: (0, r.localize2)(3431, "Unlock Editor Group"),
										precondition: S.$3Pb,
										category: u.$ck.View,
										f1: !0,
									});
								}
								async run(ne, ...ee) {
									ie(ne, !1, ...ee);
								}
							},
						),
						o.$TX.registerCommandAndKeybindingRule({
							id: e.$aWb,
							weight: o.KeybindingWeight.WorkbenchContrib,
							when: S.$NPb.toNegated(),
							primary: (0, t.$os)(t.$ps, t.KeyMod.Shift | t.KeyCode.Enter),
							mac: {
								primary: (0, t.$os)(t.$qs, t.KeyMod.Shift | t.KeyCode.Enter),
							},
							handler: async (ne, ...ee) => {
								const _ = (0, O.$TVb)(
									ee,
									ne.get(M.$IY),
									ne.get(L.$EY),
									ne.get(f.$fMb),
								);
								for (const { group: te, editors: Q } of _.groupedEditors)
									for (const Z of Q) te.stickEditor(Z);
							},
						}),
						o.$TX.registerCommandAndKeybindingRule({
							id: R.$PVb,
							weight: o.KeybindingWeight.WorkbenchContrib,
							when: m.EditorContextKeys.inDiffEditor,
							primary: (0, t.$os)(t.$ps, t.KeyMod.Shift | t.KeyCode.KeyO),
							mac: {
								primary: (0, t.$os)(t.$qs, t.KeyMod.Shift | t.KeyCode.KeyO),
							},
							handler: async (ne) => {
								const ee = ne.get(M.$IY),
									_ = ne.get(L.$EY),
									te = ee.activeEditor,
									Q = ee.activeTextEditorControl;
								if (!(0, d.$$sb)(Q) || !(te instanceof T.$GVb)) return;
								let Z;
								return (
									Q.getOriginalEditor().hasTextFocus()
										? (Z = te.original)
										: (Z = te.modified),
									_.activeGroup.openEditor(Z)
								);
							},
						}),
						o.$TX.registerCommandAndKeybindingRule({
							id: e.$bWb,
							weight: o.KeybindingWeight.WorkbenchContrib,
							when: S.$NPb,
							primary: (0, t.$os)(t.$ps, t.KeyMod.Shift | t.KeyCode.Enter),
							mac: {
								primary: (0, t.$os)(t.$qs, t.KeyMod.Shift | t.KeyCode.Enter),
							},
							handler: async (ne, ...ee) => {
								const _ = (0, O.$TVb)(
									ee,
									ne.get(M.$IY),
									ne.get(L.$EY),
									ne.get(f.$fMb),
								);
								for (const { group: te, editors: Q } of _.groupedEditors)
									for (const Z of Q) te.unstickEditor(Z);
							},
						}),
						o.$TX.registerCommandAndKeybindingRule({
							id: e.$$Vb,
							weight: o.KeybindingWeight.WorkbenchContrib,
							when: void 0,
							primary: void 0,
							handler: (ne, ...ee) => {
								const _ = ne.get(L.$EY),
									te = ne.get(s.$DJ),
									Z = (0, O.$TVb)(ee, ne.get(M.$IY), _, ne.get(f.$fMb))
										.groupedEditors[0]?.group;
								return (
									Z && _.activateGroup(Z), te.quickAccess.show(y.$sVb.PREFIX)
								);
							},
						});
				}
				function Y() {
					U(), z(), (0, R.$SVb)(), F(), x(), G(), X(), J(), W(), H(), V(), K();
				}
			},
		),
		define(
			de[1340],
			he([
				1, 0, 4, 50, 24, 44, 313, 96, 245, 39, 31, 247, 66, 18, 10, 256, 57, 63,
				1015, 14, 26, 170, 231, 12, 11, 8, 27, 43, 34, 99, 100, 7, 84, 1014, 93,
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
				L,
				D,
				M,
				N,
				A,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$htc =
						e.$gtc =
						e.$ftc =
						e.$etc =
						e.$dtc =
						e.$ctc =
						e.$btc =
						e.$atc =
						e.$_sc =
						e.$$sc =
						e.$0sc =
						e.$9sc =
						e.$8sc =
						e.$7sc =
						e.$6sc =
						e.$5sc =
						e.$4sc =
						e.$3sc =
						e.$2sc =
						e.$1sc =
						e.$Zsc =
						e.$Ysc =
						e.$Xsc =
						e.$Wsc =
						e.$Vsc =
						e.$Usc =
						e.$Tsc =
						e.$Ssc =
						e.$Rsc =
						e.$Qsc =
						e.$Psc =
						e.$Osc =
						e.$Nsc =
						e.$Msc =
						e.$Lsc =
						e.$Ksc =
						e.$Jsc =
						e.$Isc =
						e.$Hsc =
						e.$Gsc =
						e.$Fsc =
						e.$Esc =
						e.$Dsc =
						e.$Csc =
						e.$Bsc =
						e.$Asc =
						e.$zsc =
						e.$ysc =
						e.$xsc =
						e.$wsc =
						e.$vsc =
						e.$usc =
						e.$tsc =
						e.$ssc =
						e.$rsc =
						e.$qsc =
						e.$psc =
						e.$osc =
						e.$nsc =
						e.$msc =
						e.$lsc =
						e.$ksc =
						e.$jsc =
						e.$isc =
						e.$hsc =
						e.$gsc =
						e.$fsc =
						e.$esc =
						e.$dsc =
						e.$csc =
						e.$bsc =
						e.$asc =
						e.$_rc =
						e.$$rc =
						e.$0rc =
						e.$9rc =
						e.$8rc =
						e.$7rc =
						e.$6rc =
						e.$5rc =
						e.$4rc =
						e.$3rc =
						e.$2rc =
						e.$1rc =
						e.$Zrc =
						e.$Yrc =
						e.$Xrc =
						e.$Wrc =
						e.$Vrc =
						e.$Urc =
						e.$Trc =
						e.$Src =
						e.$Rrc =
						e.$Qrc =
						e.$Prc =
						e.$Orc =
						e.$Nrc =
						e.$Mrc =
						e.$Lrc =
						e.$Krc =
						e.$Jrc =
						e.$Irc =
						e.$Hrc =
						e.$Grc =
						e.$Frc =
						e.$Erc =
						e.$Drc =
						e.$Crc =
						e.$Brc =
						e.$Arc =
						e.$zrc =
							void 0);
				class R extends v.$3X {
					constructor(Yt, ni, bi) {
						super(Yt), (this.a = ni), (this.b = bi);
					}
					run(Yt) {
						return Yt.get(u.$ek).executeCommand(this.a, this.b);
					}
				}
				class O extends v.$3X {
					a(Yt) {
						return (0, h.$HY)(Yt);
					}
					async run(Yt, ...ni) {
						const bi = Yt.get(h.$EY),
							fi = Yt.get(n.$gj),
							Ti = this.a(fi),
							wt = (0, N.$TVb)(ni, Yt.get(c.$IY), bi, Yt.get(A.$fMb));
						(0, a.$DWb)(bi, Ti, wt);
					}
				}
				class B extends O {
					static {
						this.ID = a.$cWb;
					}
					constructor() {
						super({
							id: B.ID,
							title: (0, t.localize2)(3308, "Split Editor"),
							f1: !0,
							keybinding: {
								weight: T.KeybindingWeight.WorkbenchContrib,
								primary: I.KeyMod.CtrlCmd | I.KeyCode.Backslash,
							},
							category: k.$ck.View,
						});
					}
				}
				e.$zrc = B;
				class U extends O {
					constructor() {
						super({
							id: "workbench.action.splitEditorOrthogonal",
							title: (0, t.localize2)(3309, "Split Editor Orthogonal"),
							f1: !0,
							keybinding: {
								weight: T.KeybindingWeight.WorkbenchContrib,
								primary: (0, I.$os)(
									I.$ps,
									I.KeyMod.CtrlCmd | I.KeyCode.Backslash,
								),
								mac: {
									primary: (0, I.$os)(
										I.$qs,
										I.KeyMod.CtrlCmd | I.KeyCode.Backslash,
									),
								},
							},
							category: k.$ck.View,
						});
					}
					a(Yt) {
						return (0, h.$HY)(Yt) === h.GroupDirection.RIGHT
							? h.GroupDirection.DOWN
							: h.GroupDirection.RIGHT;
					}
				}
				e.$Arc = U;
				class z extends R {
					constructor() {
						super(
							{
								id: a.$fWb,
								title: (0, t.localize2)(3310, "Split Editor Left"),
								f1: !0,
								keybinding: {
									weight: T.KeybindingWeight.WorkbenchContrib,
									primary: (0, I.$os)(
										I.$ps,
										I.KeyMod.CtrlCmd | I.KeyCode.Backslash,
									),
									mac: {
										primary: (0, I.$os)(
											I.$qs,
											I.KeyMod.CtrlCmd | I.KeyCode.Backslash,
										),
									},
								},
								category: k.$ck.View,
							},
							a.$fWb,
						);
					}
				}
				e.$Brc = z;
				class F extends R {
					constructor() {
						super(
							{
								id: a.$gWb,
								title: (0, t.localize2)(3311, "Split Editor Right"),
								f1: !0,
								keybinding: {
									weight: T.KeybindingWeight.WorkbenchContrib,
									primary: (0, I.$os)(
										I.$ps,
										I.KeyMod.CtrlCmd | I.KeyCode.Backslash,
									),
									mac: {
										primary: (0, I.$os)(
											I.$qs,
											I.KeyMod.CtrlCmd | I.KeyCode.Backslash,
										),
									},
								},
								category: k.$ck.View,
							},
							a.$gWb,
						);
					}
				}
				e.$Crc = F;
				class x extends R {
					static {
						this.LABEL = (0, t.localize)(3285, null);
					}
					constructor() {
						super(
							{
								id: a.$dWb,
								title: (0, t.localize2)(3312, "Split Editor Up"),
								f1: !0,
								keybinding: {
									weight: T.KeybindingWeight.WorkbenchContrib,
									primary: (0, I.$os)(
										I.$ps,
										I.KeyMod.CtrlCmd | I.KeyCode.Backslash,
									),
									mac: {
										primary: (0, I.$os)(
											I.$qs,
											I.KeyMod.CtrlCmd | I.KeyCode.Backslash,
										),
									},
								},
								category: k.$ck.View,
							},
							a.$dWb,
						);
					}
				}
				e.$Drc = x;
				class H extends R {
					static {
						this.LABEL = (0, t.localize)(3286, null);
					}
					constructor() {
						super(
							{
								id: a.$eWb,
								title: (0, t.localize2)(3313, "Split Editor Down"),
								f1: !0,
								keybinding: {
									weight: T.KeybindingWeight.WorkbenchContrib,
									primary: (0, I.$os)(
										I.$ps,
										I.KeyMod.CtrlCmd | I.KeyCode.Backslash,
									),
									mac: {
										primary: (0, I.$os)(
											I.$qs,
											I.KeyMod.CtrlCmd | I.KeyCode.Backslash,
										),
									},
								},
								category: k.$ck.View,
							},
							a.$eWb,
						);
					}
				}
				e.$Erc = H;
				class q extends v.$3X {
					constructor() {
						super({
							id: "workbench.action.joinTwoGroups",
							title: (0, t.localize2)(
								3314,
								"Join Editor Group with Next Group",
							),
							f1: !0,
							category: k.$ck.View,
						});
					}
					async run(Yt, ni) {
						const bi = Yt.get(h.$EY);
						let fi;
						if (
							(ni && typeof ni.groupId == "number"
								? (fi = bi.getGroup(ni.groupId))
								: (fi = bi.activeGroup),
							fi)
						) {
							const Ti = [
								h.GroupDirection.RIGHT,
								h.GroupDirection.DOWN,
								h.GroupDirection.LEFT,
								h.GroupDirection.UP,
							];
							for (const wt of Ti) {
								const We = bi.findGroup({ direction: wt }, fi);
								if (We && fi !== We) {
									bi.mergeGroup(fi, We);
									break;
								}
							}
						}
					}
				}
				e.$Frc = q;
				class V extends v.$3X {
					constructor() {
						super({
							id: "workbench.action.joinAllGroups",
							title: (0, t.localize2)(3315, "Join All Editor Groups"),
							f1: !0,
							category: k.$ck.View,
						});
					}
					async run(Yt) {
						const ni = Yt.get(h.$EY);
						ni.mergeAllGroups(ni.activeGroup);
					}
				}
				e.$Grc = V;
				class G extends v.$3X {
					constructor() {
						super({
							id: "workbench.action.navigateEditorGroups",
							title: (0, t.localize2)(3316, "Navigate Between Editor Groups"),
							f1: !0,
							category: k.$ck.View,
						});
					}
					async run(Yt) {
						const ni = Yt.get(h.$EY);
						ni.findGroup(
							{ location: h.GroupLocation.NEXT },
							ni.activeGroup,
							!0,
						)?.focus();
					}
				}
				e.$Hrc = G;
				class K extends v.$3X {
					constructor() {
						super({
							id: "workbench.action.focusActiveEditorGroup",
							title: (0, t.localize2)(3317, "Focus Active Editor Group"),
							f1: !0,
							category: k.$ck.View,
						});
					}
					async run(Yt) {
						Yt.get(h.$EY).activeGroup.focus();
					}
				}
				e.$Irc = K;
				class J extends v.$3X {
					constructor(Yt, ni) {
						super(Yt), (this.a = ni);
					}
					async run(Yt) {
						const ni = Yt.get(h.$EY);
						ni.findGroup(this.a, ni.activeGroup, !0)?.focus();
					}
				}
				class W extends J {
					constructor() {
						super(
							{
								id: "workbench.action.focusFirstEditorGroup",
								title: (0, t.localize2)(3318, "Focus First Editor Group"),
								f1: !0,
								keybinding: {
									weight: T.KeybindingWeight.WorkbenchContrib,
									primary: I.KeyMod.CtrlCmd | I.KeyCode.Digit1,
								},
								category: k.$ck.View,
							},
							{ location: h.GroupLocation.FIRST },
						);
					}
				}
				e.$Jrc = W;
				class X extends J {
					constructor() {
						super(
							{
								id: "workbench.action.focusLastEditorGroup",
								title: (0, t.localize2)(3319, "Focus Last Editor Group"),
								f1: !0,
								category: k.$ck.View,
							},
							{ location: h.GroupLocation.LAST },
						);
					}
				}
				e.$Krc = X;
				class Y extends J {
					constructor() {
						super(
							{
								id: "workbench.action.focusNextGroup",
								title: (0, t.localize2)(3320, "Focus Next Editor Group"),
								f1: !0,
								category: k.$ck.View,
							},
							{ location: h.GroupLocation.NEXT },
						);
					}
				}
				e.$Lrc = Y;
				class ie extends J {
					constructor() {
						super(
							{
								id: "workbench.action.focusPreviousGroup",
								title: (0, t.localize2)(3321, "Focus Previous Editor Group"),
								f1: !0,
								category: k.$ck.View,
							},
							{ location: h.GroupLocation.PREVIOUS },
						);
					}
				}
				e.$Mrc = ie;
				class ne extends J {
					constructor() {
						super(
							{
								id: "workbench.action.focusLeftGroup",
								title: (0, t.localize2)(3322, "Focus Left Editor Group"),
								f1: !0,
								keybinding: {
									weight: T.KeybindingWeight.WorkbenchContrib,
									primary: (0, I.$os)(
										I.$ps,
										I.KeyMod.CtrlCmd | I.KeyCode.LeftArrow,
									),
									mac: {
										primary: (0, I.$os)(
											I.$qs,
											I.KeyMod.CtrlCmd | I.KeyCode.LeftArrow,
										),
									},
								},
								category: k.$ck.View,
							},
							{ direction: h.GroupDirection.LEFT },
						);
					}
				}
				e.$Nrc = ne;
				class ee extends J {
					constructor() {
						super(
							{
								id: "workbench.action.focusRightGroup",
								title: (0, t.localize2)(3323, "Focus Right Editor Group"),
								f1: !0,
								keybinding: {
									weight: T.KeybindingWeight.WorkbenchContrib,
									primary: (0, I.$os)(
										I.$ps,
										I.KeyMod.CtrlCmd | I.KeyCode.RightArrow,
									),
									mac: {
										primary: (0, I.$os)(
											I.$qs,
											I.KeyMod.CtrlCmd | I.KeyCode.RightArrow,
										),
									},
								},
								category: k.$ck.View,
							},
							{ direction: h.GroupDirection.RIGHT },
						);
					}
				}
				e.$Orc = ee;
				class _ extends J {
					constructor() {
						super(
							{
								id: "workbench.action.focusAboveGroup",
								title: (0, t.localize2)(3324, "Focus Editor Group Above"),
								f1: !0,
								keybinding: {
									weight: T.KeybindingWeight.WorkbenchContrib,
									primary: (0, I.$os)(
										I.$ps,
										I.KeyMod.CtrlCmd | I.KeyCode.UpArrow,
									),
									mac: {
										primary: (0, I.$os)(
											I.$qs,
											I.KeyMod.CtrlCmd | I.KeyCode.UpArrow,
										),
									},
								},
								category: k.$ck.View,
							},
							{ direction: h.GroupDirection.UP },
						);
					}
				}
				e.$Prc = _;
				class te extends J {
					constructor() {
						super(
							{
								id: "workbench.action.focusBelowGroup",
								title: (0, t.localize2)(3325, "Focus Editor Group Below"),
								f1: !0,
								keybinding: {
									weight: T.KeybindingWeight.WorkbenchContrib,
									primary: (0, I.$os)(
										I.$ps,
										I.KeyMod.CtrlCmd | I.KeyCode.DownArrow,
									),
									mac: {
										primary: (0, I.$os)(
											I.$qs,
											I.KeyMod.CtrlCmd | I.KeyCode.DownArrow,
										),
									},
								},
								category: k.$ck.View,
							},
							{ direction: h.GroupDirection.DOWN },
						);
					}
				}
				e.$Qrc = te;
				let Q = class extends i.$rj {
					static {
						this.ID = "workbench.action.closeActiveEditor";
					}
					static {
						this.LABEL = (0, t.localize)(3287, null);
					}
					constructor(Yt, ni, bi) {
						super(Yt, ni, s.ThemeIcon.asClassName(b.$ak.close)), (this.a = bi);
					}
					run(Yt) {
						return this.a.executeCommand(a.$YVb, void 0, Yt);
					}
				};
				(e.$Rrc = Q), (e.$Rrc = Q = Ne([j(2, u.$ek)], Q));
				let Z = class extends i.$rj {
					static {
						this.ID = "workbench.action.unpinActiveEditor";
					}
					static {
						this.LABEL = (0, t.localize)(3288, null);
					}
					constructor(Yt, ni, bi) {
						super(Yt, ni, s.ThemeIcon.asClassName(b.$ak.pinned)), (this.a = bi);
					}
					run(Yt) {
						return this.a.executeCommand(a.$bWb, void 0, Yt);
					}
				};
				(e.$Src = Z), (e.$Src = Z = Ne([j(2, u.$ek)], Z));
				let se = class extends i.$rj {
					static {
						this.ID = "workbench.action.closeActiveEditor";
					}
					static {
						this.LABEL = (0, t.localize)(3289, null);
					}
					constructor(Yt, ni, bi) {
						super(Yt, ni, s.ThemeIcon.asClassName(b.$ak.close)), (this.a = bi);
					}
					async run(Yt) {
						const ni = Yt ? this.a.getGroup(Yt.groupId) : this.a.activeGroup;
						if (!ni) return;
						const bi =
							Yt?.editorIndex !== void 0
								? ni.getEditorByIndex(Yt.editorIndex)
								: ni.activeEditor;
						if (!bi) return;
						const fi = [];
						ni.isSelected(bi) ? fi.push(...ni.selectedEditors) : fi.push(bi);
						for (const Ti of fi)
							await ni.closeEditor(Ti, { preserveFocus: Yt?.preserveFocus });
					}
				};
				(e.$Trc = se), (e.$Trc = se = Ne([j(2, h.$EY)], se));
				class re extends v.$3X {
					constructor() {
						super({
							id: "workbench.action.revertAndCloseActiveEditor",
							title: (0, t.localize2)(3326, "Revert and Close Editor"),
							f1: !0,
							category: k.$ck.View,
						});
					}
					async run(Yt) {
						const ni = Yt.get(c.$IY),
							bi = Yt.get(P.$ik),
							fi = ni.activeEditorPane;
						if (fi) {
							const Ti = fi.input,
								wt = fi.group;
							try {
								await ni.revert({ editor: Ti, groupId: wt.id });
							} catch (We) {
								bi.error(We),
									await ni.revert({ editor: Ti, groupId: wt.id }, { soft: !0 });
							}
							await wt.closeEditor(Ti);
						}
					}
				}
				e.$Urc = re;
				class le extends v.$3X {
					constructor() {
						super({
							id: "workbench.action.closeEditorsToTheLeft",
							title: (0, t.localize2)(
								3327,
								"Close Editors to the Left in Group",
							),
							f1: !0,
							category: k.$ck.View,
						});
					}
					async run(Yt, ni) {
						const bi = Yt.get(h.$EY),
							{ group: fi, editor: Ti } = this.a(bi, ni);
						fi &&
							Ti &&
							(await fi.closeEditors({
								direction: E.CloseDirection.LEFT,
								except: Ti,
								excludeSticky: !0,
							}));
					}
					a(Yt, ni) {
						return ni
							? { editor: ni.editor, group: Yt.getGroup(ni.groupId) }
							: { group: Yt.activeGroup, editor: Yt.activeGroup.activeEditor };
					}
				}
				e.$Vrc = le;
				class oe extends v.$3X {
					a(Yt) {
						const ni = [],
							bi = Yt.getGroups(h.GroupsOrder.GRID_APPEARANCE);
						for (let fi = bi.length - 1; fi >= 0; fi--) ni.push(bi[fi]);
						return ni;
					}
					async run(Yt) {
						const ni = Yt.get(c.$IY),
							bi = Yt.get(P.$ik),
							fi = Yt.get(M.$8N),
							Ti = Yt.get(h.$EY),
							wt = Yt.get(l.$_Y),
							We = Yt.get(p.$IO),
							_e = new Set(),
							Si = new Set(),
							gi = new Set(),
							ki = new Map();
						for (const { editor: Pi, groupId: Hi } of ni.getEditors(
							E.EditorsOrder.SEQUENTIAL,
							{ excludeSticky: this.e },
						)) {
							let Ji = !1;
							if (
								(Pi.closeHandler
									? (Ji = Pi.closeHandler.showConfirm())
									: (Ji = Pi.isDirty() && !Pi.isSaving()),
								!!Ji)
							)
								if (typeof Pi.closeHandler?.confirm == "function") {
									let cn = ki.get(Pi.typeId);
									cn || ((cn = new Set()), ki.set(Pi.typeId, cn)),
										cn.add({ editor: Pi, groupId: Hi });
								} else
									!Pi.hasCapability(E.EditorInputCapabilities.Untitled) &&
									wt.getAutoSaveMode(Pi).mode === l.AutoSaveMode.ON_FOCUS_CHANGE
										? Si.add({ editor: Pi, groupId: Hi })
										: $.$p &&
												($.$l || $.$n) &&
												!Pi.hasCapability(E.EditorInputCapabilities.Untitled) &&
												wt.getAutoSaveMode(Pi).mode ===
													l.AutoSaveMode.ON_WINDOW_CHANGE
											? gi.add({ editor: Pi, groupId: Hi })
											: _e.add({ editor: Pi, groupId: Hi });
						}
						if (_e.size > 0) {
							const Pi = Array.from(_e.values());
							switch (
								(await this.d(Pi, Ti),
								await We.showSaveConfirm(
									Pi.map(({ editor: Ji }) =>
										Ji instanceof C.$iY ? Ji.primary.getName() : Ji.getName(),
									),
								))
							) {
								case p.ConfirmResult.CANCEL:
									return;
								case p.ConfirmResult.DONT_SAVE:
									await this.b(ni, bi, fi, Pi);
									break;
								case p.ConfirmResult.SAVE:
									await ni.save(Pi, { reason: E.SaveReason.EXPLICIT });
									break;
							}
						}
						for (const [, Pi] of ki) {
							const Hi = Array.from(Pi.values());
							await this.d(Hi, Ti);
							const Ji = await (0, w.$Sb)(Hi)?.editor.closeHandler?.confirm?.(
								Hi,
							);
							if (typeof Ji == "number")
								switch (Ji) {
									case p.ConfirmResult.CANCEL:
										return;
									case p.ConfirmResult.DONT_SAVE:
										await this.b(ni, bi, fi, Hi);
										break;
									case p.ConfirmResult.SAVE:
										await ni.save(Hi, { reason: E.SaveReason.EXPLICIT });
										break;
								}
						}
						if (Si.size > 0) {
							const Pi = Array.from(Si.values());
							await ni.save(Pi, { reason: E.SaveReason.FOCUS_CHANGE });
						}
						if (gi.size > 0) {
							const Pi = Array.from(gi.values());
							await ni.save(Pi, { reason: E.SaveReason.WINDOW_CHANGE });
						}
						return this.f(Ti);
					}
					b(Yt, ni, bi, fi) {
						return bi.withProgress(
							{
								location: M.ProgressLocation.Window,
								delay: 800,
								title: (0, t.localize)(3290, null),
							},
							() => this.c(Yt, ni, fi),
						);
					}
					async c(Yt, ni, bi) {
						try {
							await Yt.revert(bi);
						} catch (fi) {
							ni.error(fi), await Yt.revert(bi, { soft: !0 });
						}
					}
					async d(Yt, ni) {
						try {
							const bi = new Set();
							for (const { editor: fi, groupId: Ti } of Yt) {
								if (bi.has(Ti)) continue;
								bi.add(Ti), await ni.getGroup(Ti)?.openEditor(fi);
							}
						} catch {}
					}
					async f(Yt) {
						await Promise.all(
							this.a(Yt).map((ni) =>
								ni.closeAllEditors({ excludeSticky: this.e }),
							),
						);
					}
				}
				class ae extends oe {
					static {
						this.ID = "workbench.action.closeAllEditors";
					}
					static {
						this.LABEL = (0, t.localize2)(3328, "Close All Editors");
					}
					constructor() {
						super({
							id: ae.ID,
							title: ae.LABEL,
							f1: !0,
							keybinding: {
								weight: T.KeybindingWeight.WorkbenchContrib,
								primary: (0, I.$os)(I.$ps, I.KeyMod.CtrlCmd | I.KeyCode.KeyW),
								mac: {
									primary: (0, I.$os)(I.$qs, I.KeyMod.CtrlCmd | I.KeyCode.KeyW),
								},
							},
							icon: b.$ak.closeAll,
							category: k.$ck.View,
						});
					}
					get e() {
						return !0;
					}
				}
				e.$Wrc = ae;
				class pe extends oe {
					constructor() {
						super({
							id: "workbench.action.closeAllGroups",
							title: (0, t.localize2)(3329, "Close All Editor Groups"),
							f1: !0,
							keybinding: {
								weight: T.KeybindingWeight.WorkbenchContrib,
								primary: (0, I.$os)(
									I.$ps,
									I.KeyMod.CtrlCmd | I.KeyMod.Shift | I.KeyCode.KeyW,
								),
								mac: {
									primary: (0, I.$os)(
										I.$qs,
										I.KeyMod.CtrlCmd | I.KeyMod.Shift | I.KeyCode.KeyW,
									),
								},
							},
							category: k.$ck.View,
						});
					}
					get e() {
						return !1;
					}
					async f(Yt) {
						await super.f(Yt);
						for (const ni of this.a(Yt)) Yt.removeGroup(ni);
					}
				}
				e.$Xrc = pe;
				class $e extends v.$3X {
					constructor() {
						super({
							id: "workbench.action.closeEditorsInOtherGroups",
							title: (0, t.localize2)(3330, "Close Editors in Other Groups"),
							f1: !0,
							category: k.$ck.View,
						});
					}
					async run(Yt, ni) {
						const bi = Yt.get(h.$EY),
							fi = ni ? bi.getGroup(ni.groupId) : bi.activeGroup;
						await Promise.all(
							bi
								.getGroups(h.GroupsOrder.MOST_RECENTLY_ACTIVE)
								.map(async (Ti) => {
									if (!(fi && Ti.id === fi.id))
										return Ti.closeAllEditors({ excludeSticky: !0 });
								}),
						);
					}
				}
				e.$Yrc = $e;
				class ye extends v.$3X {
					constructor() {
						super({
							id: "workbench.action.closeEditorInAllGroups",
							title: (0, t.localize2)(3331, "Close Editor in All Groups"),
							f1: !0,
							category: k.$ck.View,
						});
					}
					async run(Yt) {
						const ni = Yt.get(c.$IY),
							bi = Yt.get(h.$EY),
							fi = ni.activeEditor;
						fi &&
							(await Promise.all(
								bi
									.getGroups(h.GroupsOrder.MOST_RECENTLY_ACTIVE)
									.map((Ti) => Ti.closeEditor(fi)),
							));
					}
				}
				e.$Zrc = ye;
				class ue extends v.$3X {
					constructor(Yt, ni, bi) {
						super(Yt), (this.a = ni), (this.b = bi);
					}
					async run(Yt, ni) {
						const bi = Yt.get(h.$EY);
						let fi;
						if (
							(ni && typeof ni.groupId == "number"
								? (fi = bi.getGroup(ni.groupId))
								: (fi = bi.activeGroup),
							fi)
						) {
							let Ti;
							if (this.b) {
								const wt = this.c(bi, fi);
								wt && (Ti = bi.moveGroup(fi, wt, this.a));
							} else Ti = bi.copyGroup(fi, fi, this.a);
							Ti && bi.activateGroup(Ti);
						}
					}
					c(Yt, ni) {
						const bi = [this.a];
						switch (this.a) {
							case h.GroupDirection.LEFT:
							case h.GroupDirection.RIGHT:
								bi.push(h.GroupDirection.UP, h.GroupDirection.DOWN);
								break;
							case h.GroupDirection.UP:
							case h.GroupDirection.DOWN:
								bi.push(h.GroupDirection.LEFT, h.GroupDirection.RIGHT);
								break;
						}
						for (const fi of bi) {
							const Ti = Yt.findGroup({ direction: fi }, ni);
							if (Ti) return Ti;
						}
					}
				}
				class fe extends ue {
					constructor(Yt, ni) {
						super(Yt, ni, !0);
					}
				}
				class me extends fe {
					constructor() {
						super(
							{
								id: "workbench.action.moveActiveEditorGroupLeft",
								title: (0, t.localize2)(3332, "Move Editor Group Left"),
								f1: !0,
								keybinding: {
									weight: T.KeybindingWeight.WorkbenchContrib,
									primary: (0, I.$os)(I.$ps, I.KeyCode.LeftArrow),
									mac: { primary: (0, I.$os)(I.$qs, I.KeyCode.LeftArrow) },
								},
								category: k.$ck.View,
							},
							h.GroupDirection.LEFT,
						);
					}
				}
				e.$1rc = me;
				class ve extends fe {
					constructor() {
						super(
							{
								id: "workbench.action.moveActiveEditorGroupRight",
								title: (0, t.localize2)(3333, "Move Editor Group Right"),
								f1: !0,
								keybinding: {
									weight: T.KeybindingWeight.WorkbenchContrib,
									primary: (0, I.$os)(I.$ps, I.KeyCode.RightArrow),
									mac: { primary: (0, I.$os)(I.$qs, I.KeyCode.RightArrow) },
								},
								category: k.$ck.View,
							},
							h.GroupDirection.RIGHT,
						);
					}
				}
				e.$2rc = ve;
				class ge extends fe {
					constructor() {
						super(
							{
								id: "workbench.action.moveActiveEditorGroupUp",
								title: (0, t.localize2)(3334, "Move Editor Group Up"),
								f1: !0,
								keybinding: {
									weight: T.KeybindingWeight.WorkbenchContrib,
									primary: (0, I.$os)(I.$ps, I.KeyCode.UpArrow),
									mac: { primary: (0, I.$os)(I.$qs, I.KeyCode.UpArrow) },
								},
								category: k.$ck.View,
							},
							h.GroupDirection.UP,
						);
					}
				}
				e.$3rc = ge;
				class be extends fe {
					constructor() {
						super(
							{
								id: "workbench.action.moveActiveEditorGroupDown",
								title: (0, t.localize2)(3335, "Move Editor Group Down"),
								f1: !0,
								keybinding: {
									weight: T.KeybindingWeight.WorkbenchContrib,
									primary: (0, I.$os)(I.$ps, I.KeyCode.DownArrow),
									mac: { primary: (0, I.$os)(I.$qs, I.KeyCode.DownArrow) },
								},
								category: k.$ck.View,
							},
							h.GroupDirection.DOWN,
						);
					}
				}
				e.$4rc = be;
				class Ce extends ue {
					constructor(Yt, ni) {
						super(Yt, ni, !1);
					}
				}
				class Le extends Ce {
					constructor() {
						super(
							{
								id: "workbench.action.duplicateActiveEditorGroupLeft",
								title: (0, t.localize2)(3336, "Duplicate Editor Group Left"),
								f1: !0,
								category: k.$ck.View,
							},
							h.GroupDirection.LEFT,
						);
					}
				}
				e.$5rc = Le;
				class Fe extends Ce {
					constructor() {
						super(
							{
								id: "workbench.action.duplicateActiveEditorGroupRight",
								title: (0, t.localize2)(3337, "Duplicate Editor Group Right"),
								f1: !0,
								category: k.$ck.View,
							},
							h.GroupDirection.RIGHT,
						);
					}
				}
				e.$6rc = Fe;
				class Oe extends Ce {
					constructor() {
						super(
							{
								id: "workbench.action.duplicateActiveEditorGroupUp",
								title: (0, t.localize2)(3338, "Duplicate Editor Group Up"),
								f1: !0,
								category: k.$ck.View,
							},
							h.GroupDirection.UP,
						);
					}
				}
				e.$7rc = Oe;
				class xe extends Ce {
					constructor() {
						super(
							{
								id: "workbench.action.duplicateActiveEditorGroupDown",
								title: (0, t.localize2)(3339, "Duplicate Editor Group Down"),
								f1: !0,
								category: k.$ck.View,
							},
							h.GroupDirection.DOWN,
						);
					}
				}
				e.$8rc = xe;
				class He extends v.$3X {
					constructor() {
						super({
							id: "workbench.action.minimizeOtherEditors",
							title: (0, t.localize2)(3340, "Expand Editor Group"),
							f1: !0,
							category: k.$ck.View,
							precondition: L.$4Pb,
						});
					}
					async run(Yt) {
						Yt.get(h.$EY).arrangeGroups(h.GroupsArrangement.EXPAND);
					}
				}
				e.$9rc = He;
				class Ke extends v.$3X {
					constructor() {
						super({
							id: "workbench.action.minimizeOtherEditorsHideSidebar",
							title: (0, t.localize2)(
								3341,
								"Expand Editor Group and Hide Side Bars",
							),
							f1: !0,
							category: k.$ck.View,
							precondition: S.$Kj.or(L.$4Pb, L.$gQb, L.$sQb),
						});
					}
					async run(Yt) {
						const ni = Yt.get(h.$EY),
							bi = Yt.get(d.$mEb);
						bi.setPartHidden(!0, d.Parts.SIDEBAR_PART),
							bi.setPartHidden(!0, d.Parts.AUXILIARYBAR_PART),
							ni.arrangeGroups(h.GroupsArrangement.EXPAND);
					}
				}
				e.$0rc = Ke;
				class Je extends v.$3X {
					constructor() {
						super({
							id: "workbench.action.evenEditorWidths",
							title: (0, t.localize2)(3342, "Reset Editor Group Sizes"),
							f1: !0,
							category: k.$ck.View,
						});
					}
					async run(Yt) {
						Yt.get(h.$EY).arrangeGroups(h.GroupsArrangement.EVEN);
					}
				}
				e.$$rc = Je;
				class Te extends v.$3X {
					constructor() {
						super({
							id: "workbench.action.toggleEditorWidths",
							title: (0, t.localize2)(3343, "Toggle Editor Group Sizes"),
							f1: !0,
							category: k.$ck.View,
						});
					}
					async run(Yt) {
						Yt.get(h.$EY).toggleExpandGroup();
					}
				}
				e.$_rc = Te;
				class Ee extends v.$3X {
					constructor() {
						super({
							id: "workbench.action.maximizeEditorHideSidebar",
							title: (0, t.localize2)(
								3344,
								"Maximize Editor Group and Hide Side Bars",
							),
							f1: !0,
							category: k.$ck.View,
							precondition: S.$Kj.or(
								S.$Kj.and(L.$$Pb.negate(), L.$9Pb),
								L.$gQb,
								L.$sQb,
							),
						});
					}
					async run(Yt) {
						const ni = Yt.get(d.$mEb),
							bi = Yt.get(h.$EY);
						Yt.get(c.$IY).activeEditor &&
							(ni.setPartHidden(!0, d.Parts.SIDEBAR_PART),
							ni.setPartHidden(!0, d.Parts.AUXILIARYBAR_PART),
							bi.arrangeGroups(h.GroupsArrangement.MAXIMIZE));
					}
				}
				e.$asc = Ee;
				class Ie extends v.$3X {
					constructor() {
						super({
							id: a.$hWb,
							title: (0, t.localize2)(3345, "Toggle Maximize Editor Group"),
							f1: !0,
							category: k.$ck.View,
							precondition: S.$Kj.or(L.$9Pb, L.$$Pb),
							keybinding: {
								weight: T.KeybindingWeight.WorkbenchContrib,
								primary: (0, I.$os)(I.$ps, I.KeyMod.CtrlCmd | I.KeyCode.KeyM),
								mac: {
									primary: (0, I.$os)(I.$qs, I.KeyMod.CtrlCmd | I.KeyCode.KeyM),
								},
							},
							menu: [
								{
									id: v.$XX.EditorTitle,
									order: -1e4,
									group: "navigation",
									when: L.$$Pb,
								},
								{
									id: v.$XX.EmptyEditorGroup,
									order: -1e4,
									group: "navigation",
									when: L.$$Pb,
								},
							],
							icon: b.$ak.screenFull,
							toggled: L.$$Pb,
						});
					}
					async run(Yt, ...ni) {
						const bi = Yt.get(h.$EY),
							fi = (0, N.$TVb)(ni, Yt.get(c.$IY), bi, Yt.get(A.$fMb));
						fi.groupedEditors.length &&
							bi.toggleMaximizeGroup(fi.groupedEditors[0].group);
					}
				}
				e.$bsc = Ie;
				class Be extends v.$3X {
					async run(Yt) {
						const ni = Yt.get(h.$EY),
							bi = this.a(ni);
						if (!bi) return;
						const { groupId: fi, editor: Ti } = bi;
						if (!Ti) return;
						const wt = ni.getGroup(fi);
						wt && (await wt.openEditor(Ti));
					}
				}
				class Se extends Be {
					constructor() {
						super({
							id: "workbench.action.nextEditor",
							title: (0, t.localize2)(3346, "Open Next Editor"),
							f1: !0,
							keybinding: {
								weight: T.KeybindingWeight.WorkbenchContrib,
								primary: I.KeyMod.CtrlCmd | I.KeyCode.PageDown,
								mac: {
									primary:
										I.KeyMod.CtrlCmd | I.KeyMod.Alt | I.KeyCode.RightArrow,
									secondary: [
										I.KeyMod.CtrlCmd | I.KeyMod.Shift | I.KeyCode.BracketRight,
									],
								},
							},
							category: k.$ck.View,
						});
					}
					a(Yt) {
						const ni = Yt.activeGroup,
							bi = ni.getEditors(E.EditorsOrder.SEQUENTIAL),
							fi = ni.activeEditor ? bi.indexOf(ni.activeEditor) : -1;
						if (fi + 1 < bi.length)
							return { editor: bi[fi + 1], groupId: ni.id };
						const Ti = new Set();
						let wt = Yt.activeGroup;
						for (; wt && !Ti.has(wt.id); )
							if (
								((wt = Yt.findGroup(
									{ location: h.GroupLocation.NEXT },
									wt,
									!0,
								)),
								wt)
							) {
								Ti.add(wt.id);
								const We = wt.getEditors(E.EditorsOrder.SEQUENTIAL);
								if (We.length > 0) return { editor: We[0], groupId: wt.id };
							}
					}
				}
				e.$csc = Se;
				class ke extends Be {
					constructor() {
						super({
							id: "workbench.action.previousEditor",
							title: (0, t.localize2)(3347, "Open Previous Editor"),
							f1: !0,
							keybinding: {
								weight: T.KeybindingWeight.WorkbenchContrib,
								primary: I.KeyMod.CtrlCmd | I.KeyCode.PageUp,
								mac: {
									primary:
										I.KeyMod.CtrlCmd | I.KeyMod.Alt | I.KeyCode.LeftArrow,
									secondary: [
										I.KeyMod.CtrlCmd | I.KeyMod.Shift | I.KeyCode.BracketLeft,
									],
								},
							},
							category: k.$ck.View,
						});
					}
					a(Yt) {
						const ni = Yt.activeGroup,
							bi = ni.getEditors(E.EditorsOrder.SEQUENTIAL),
							fi = ni.activeEditor ? bi.indexOf(ni.activeEditor) : -1;
						if (fi > 0) return { editor: bi[fi - 1], groupId: ni.id };
						const Ti = new Set();
						let wt = Yt.activeGroup;
						for (; wt && !Ti.has(wt.id); )
							if (
								((wt = Yt.findGroup(
									{ location: h.GroupLocation.PREVIOUS },
									wt,
									!0,
								)),
								wt)
							) {
								Ti.add(wt.id);
								const We = wt.getEditors(E.EditorsOrder.SEQUENTIAL);
								if (We.length > 0)
									return { editor: We[We.length - 1], groupId: wt.id };
							}
					}
				}
				e.$dsc = ke;
				class Ue extends Be {
					constructor() {
						super({
							id: "workbench.action.nextEditorInGroup",
							title: (0, t.localize2)(3348, "Open Next Editor in Group"),
							f1: !0,
							keybinding: {
								weight: T.KeybindingWeight.WorkbenchContrib,
								primary: (0, I.$os)(
									I.$ps,
									I.KeyMod.CtrlCmd | I.KeyCode.PageDown,
								),
								mac: {
									primary: (0, I.$os)(
										I.$qs,
										I.KeyMod.CtrlCmd | I.KeyMod.Alt | I.KeyCode.RightArrow,
									),
								},
							},
							category: k.$ck.View,
						});
					}
					a(Yt) {
						const ni = Yt.activeGroup,
							bi = ni.getEditors(E.EditorsOrder.SEQUENTIAL),
							fi = ni.activeEditor ? bi.indexOf(ni.activeEditor) : -1;
						return {
							editor: fi + 1 < bi.length ? bi[fi + 1] : bi[0],
							groupId: ni.id,
						};
					}
				}
				e.$esc = Ue;
				class qe extends Be {
					constructor() {
						super({
							id: "workbench.action.previousEditorInGroup",
							title: (0, t.localize2)(3349, "Open Previous Editor in Group"),
							f1: !0,
							keybinding: {
								weight: T.KeybindingWeight.WorkbenchContrib,
								primary: (0, I.$os)(I.$ps, I.KeyMod.CtrlCmd | I.KeyCode.PageUp),
								mac: {
									primary: (0, I.$os)(
										I.$qs,
										I.KeyMod.CtrlCmd | I.KeyMod.Alt | I.KeyCode.LeftArrow,
									),
								},
							},
							category: k.$ck.View,
						});
					}
					a(Yt) {
						const ni = Yt.activeGroup,
							bi = ni.getEditors(E.EditorsOrder.SEQUENTIAL),
							fi = ni.activeEditor ? bi.indexOf(ni.activeEditor) : -1;
						return {
							editor: fi > 0 ? bi[fi - 1] : bi[bi.length - 1],
							groupId: ni.id,
						};
					}
				}
				e.$fsc = qe;
				class Ae extends Be {
					constructor() {
						super({
							id: "workbench.action.firstEditorInGroup",
							title: (0, t.localize2)(3350, "Open First Editor in Group"),
							f1: !0,
							category: k.$ck.View,
						});
					}
					a(Yt) {
						const ni = Yt.activeGroup;
						return {
							editor: ni.getEditors(E.EditorsOrder.SEQUENTIAL)[0],
							groupId: ni.id,
						};
					}
				}
				e.$gsc = Ae;
				class Me extends Be {
					constructor() {
						super({
							id: "workbench.action.lastEditorInGroup",
							title: (0, t.localize2)(3351, "Open Last Editor in Group"),
							f1: !0,
							keybinding: {
								weight: T.KeybindingWeight.WorkbenchContrib,
								primary: I.KeyMod.Alt | I.KeyCode.Digit0,
								secondary: [I.KeyMod.CtrlCmd | I.KeyCode.Digit9],
								mac: {
									primary: I.KeyMod.WinCtrl | I.KeyCode.Digit0,
									secondary: [I.KeyMod.CtrlCmd | I.KeyCode.Digit9],
								},
							},
							category: k.$ck.View,
						});
					}
					a(Yt) {
						const ni = Yt.activeGroup,
							bi = ni.getEditors(E.EditorsOrder.SEQUENTIAL);
						return { editor: bi[bi.length - 1], groupId: ni.id };
					}
				}
				e.$hsc = Me;
				class De extends v.$3X {
					static {
						this.ID = "workbench.action.navigateForward";
					}
					static {
						this.LABEL = (0, t.localize)(3291, null);
					}
					constructor() {
						super({
							id: De.ID,
							title: {
								...(0, t.localize2)(3352, "Go Forward"),
								mnemonicTitle: (0, t.localize)(3292, null),
							},
							f1: !0,
							icon: b.$ak.arrowRight,
							precondition: S.$Kj.has("canNavigateForward"),
							keybinding: {
								weight: T.KeybindingWeight.WorkbenchContrib,
								win: { primary: I.KeyMod.Alt | I.KeyCode.RightArrow },
								mac: {
									primary: I.KeyMod.WinCtrl | I.KeyMod.Shift | I.KeyCode.Minus,
								},
								linux: {
									primary: I.KeyMod.CtrlCmd | I.KeyMod.Shift | I.KeyCode.Minus,
								},
							},
							menu: [
								{ id: v.$XX.MenubarGoMenu, group: "1_history_nav", order: 2 },
								{ id: v.$XX.CommandCenter, order: 2 },
							],
						});
					}
					async run(Yt) {
						await Yt.get(m.$Feb).goForward(m.GoFilter.NONE);
					}
				}
				e.$isc = De;
				class Re extends v.$3X {
					static {
						this.ID = "workbench.action.navigateBack";
					}
					static {
						this.LABEL = (0, t.localize)(3293, null);
					}
					constructor() {
						super({
							id: Re.ID,
							title: {
								...(0, t.localize2)(3353, "Go Back"),
								mnemonicTitle: (0, t.localize)(3294, null),
							},
							f1: !0,
							precondition: S.$Kj.has("canNavigateBack"),
							icon: b.$ak.arrowLeft,
							keybinding: {
								weight: T.KeybindingWeight.WorkbenchContrib,
								win: { primary: I.KeyMod.Alt | I.KeyCode.LeftArrow },
								mac: { primary: I.KeyMod.WinCtrl | I.KeyCode.Minus },
								linux: {
									primary: I.KeyMod.CtrlCmd | I.KeyMod.Alt | I.KeyCode.Minus,
								},
							},
							menu: [
								{ id: v.$XX.MenubarGoMenu, group: "1_history_nav", order: 1 },
								{ id: v.$XX.CommandCenter, order: 1 },
							],
						});
					}
					async run(Yt) {
						await Yt.get(m.$Feb).goBack(m.GoFilter.NONE);
					}
				}
				e.$jsc = Re;
				class je extends v.$3X {
					constructor() {
						super({
							id: "workbench.action.navigateLast",
							title: (0, t.localize2)(3354, "Go Previous"),
							f1: !0,
						});
					}
					async run(Yt) {
						await Yt.get(m.$Feb).goPrevious(m.GoFilter.NONE);
					}
				}
				e.$ksc = je;
				class Ve extends v.$3X {
					constructor() {
						super({
							id: "workbench.action.navigateForwardInEditLocations",
							title: (0, t.localize2)(3355, "Go Forward in Edit Locations"),
							f1: !0,
						});
					}
					async run(Yt) {
						await Yt.get(m.$Feb).goForward(m.GoFilter.EDITS);
					}
				}
				e.$lsc = Ve;
				class Ze extends v.$3X {
					constructor() {
						super({
							id: "workbench.action.navigateBackInEditLocations",
							title: (0, t.localize2)(3356, "Go Back in Edit Locations"),
							f1: !0,
						});
					}
					async run(Yt) {
						await Yt.get(m.$Feb).goBack(m.GoFilter.EDITS);
					}
				}
				e.$msc = Ze;
				class et extends v.$3X {
					constructor() {
						super({
							id: "workbench.action.navigatePreviousInEditLocations",
							title: (0, t.localize2)(3357, "Go Previous in Edit Locations"),
							f1: !0,
						});
					}
					async run(Yt) {
						await Yt.get(m.$Feb).goPrevious(m.GoFilter.EDITS);
					}
				}
				e.$nsc = et;
				class rt extends v.$3X {
					constructor() {
						super({
							id: "workbench.action.navigateToLastEditLocation",
							title: (0, t.localize2)(3358, "Go to Last Edit Location"),
							f1: !0,
							keybinding: {
								weight: T.KeybindingWeight.WorkbenchContrib,
								primary: (0, I.$os)(I.$ps, I.KeyMod.CtrlCmd | I.KeyCode.KeyQ),
								mac: {
									primary: (0, I.$os)(I.$qs, I.KeyMod.CtrlCmd | I.KeyCode.KeyQ),
								},
							},
						});
					}
					async run(Yt) {
						await Yt.get(m.$Feb).goLast(m.GoFilter.EDITS);
					}
				}
				e.$osc = rt;
				class ft extends v.$3X {
					constructor() {
						super({
							id: "workbench.action.navigateForwardInNavigationLocations",
							title: (0, t.localize2)(
								3359,
								"Go Forward in Navigation Locations",
							),
							f1: !0,
						});
					}
					async run(Yt) {
						await Yt.get(m.$Feb).goForward(m.GoFilter.NAVIGATION);
					}
				}
				e.$psc = ft;
				class bt extends v.$3X {
					constructor() {
						super({
							id: "workbench.action.navigateBackInNavigationLocations",
							title: (0, t.localize2)(3360, "Go Back in Navigation Locations"),
							f1: !0,
						});
					}
					async run(Yt) {
						await Yt.get(m.$Feb).goBack(m.GoFilter.NAVIGATION);
					}
				}
				e.$qsc = bt;
				class nt extends v.$3X {
					constructor() {
						super({
							id: "workbench.action.navigatePreviousInNavigationLocations",
							title: (0, t.localize2)(
								3361,
								"Go Previous in Navigation Locations",
							),
							f1: !0,
						});
					}
					async run(Yt) {
						await Yt.get(m.$Feb).goPrevious(m.GoFilter.NAVIGATION);
					}
				}
				e.$rsc = nt;
				class lt extends v.$3X {
					constructor() {
						super({
							id: "workbench.action.navigateToLastNavigationLocation",
							title: (0, t.localize2)(3362, "Go to Last Navigation Location"),
							f1: !0,
						});
					}
					async run(Yt) {
						await Yt.get(m.$Feb).goLast(m.GoFilter.NAVIGATION);
					}
				}
				e.$ssc = lt;
				class ct extends v.$3X {
					static {
						this.ID = "workbench.action.reopenClosedEditor";
					}
					constructor() {
						super({
							id: ct.ID,
							title: (0, t.localize2)(3363, "Reopen Closed Editor"),
							f1: !0,
							keybinding: {
								weight: T.KeybindingWeight.WorkbenchContrib,
								primary: I.KeyMod.CtrlCmd | I.KeyMod.Shift | I.KeyCode.KeyT,
							},
							category: k.$ck.View,
						});
					}
					async run(Yt) {
						await Yt.get(m.$Feb).reopenLastClosedEditor();
					}
				}
				e.$tsc = ct;
				class gt extends v.$3X {
					static {
						this.ID = "workbench.action.clearRecentFiles";
					}
					constructor() {
						super({
							id: gt.ID,
							title: (0, t.localize2)(3364, "Clear Recently Opened..."),
							f1: !0,
							category: k.$ck.File,
						});
					}
					async run(Yt) {
						const ni = Yt.get(p.$GO),
							bi = Yt.get(g.$cRb),
							fi = Yt.get(m.$Feb),
							{ confirmed: Ti } = await ni.confirm({
								type: "warning",
								message: (0, t.localize)(3295, null),
								detail: (0, t.localize)(3296, null),
								primaryButton: (0, t.localize)(3297, null),
							});
						Ti && (bi.clearRecentlyOpened(), fi.clearRecentlyOpened());
					}
				}
				e.$usc = gt;
				class ht extends v.$3X {
					static {
						this.ID = "workbench.action.showEditorsInActiveGroup";
					}
					constructor() {
						super({
							id: ht.ID,
							title: (0, t.localize2)(
								3365,
								"Show Editors in Active Group By Most Recently Used",
							),
							f1: !0,
							category: k.$ck.View,
						});
					}
					async run(Yt) {
						Yt.get(o.$DJ).quickAccess.show(f.$sVb.PREFIX);
					}
				}
				e.$vsc = ht;
				class Rt extends v.$3X {
					static {
						this.ID = "workbench.action.showAllEditors";
					}
					constructor() {
						super({
							id: Rt.ID,
							title: (0, t.localize2)(3366, "Show All Editors By Appearance"),
							f1: !0,
							keybinding: {
								weight: T.KeybindingWeight.WorkbenchContrib,
								primary: (0, I.$os)(I.$ps, I.KeyMod.CtrlCmd | I.KeyCode.KeyP),
								mac: {
									primary: I.KeyMod.CtrlCmd | I.KeyMod.Alt | I.KeyCode.Tab,
								},
							},
							category: k.$ck.File,
						});
					}
					async run(Yt) {
						Yt.get(o.$DJ).quickAccess.show(f.$tVb.PREFIX);
					}
				}
				e.$wsc = Rt;
				class Nt extends v.$3X {
					static {
						this.ID = "workbench.action.showAllEditorsByMostRecentlyUsed";
					}
					constructor() {
						super({
							id: Nt.ID,
							title: (0, t.localize2)(
								3367,
								"Show All Editors By Most Recently Used",
							),
							f1: !0,
							category: k.$ck.View,
						});
					}
					async run(Yt) {
						Yt.get(o.$DJ).quickAccess.show(f.$uVb.PREFIX);
					}
				}
				e.$xsc = Nt;
				class jt extends v.$3X {
					constructor(Yt, ni, bi) {
						super(Yt), (this.a = ni), (this.b = bi);
					}
					async run(Yt) {
						const ni = Yt.get(r.$uZ),
							bi = Yt.get(o.$DJ),
							fi = ni.lookupKeybindings(this.desc.id);
						bi.quickAccess.show(this.a, {
							quickNavigateConfiguration: { keybindings: fi },
							itemActivation: this.b,
						});
					}
				}
				class ti extends jt {
					constructor() {
						super(
							{
								id: "workbench.action.quickOpenPreviousRecentlyUsedEditor",
								title: (0, t.localize2)(
									3368,
									"Quick Open Previous Recently Used Editor",
								),
								f1: !0,
								category: k.$ck.View,
							},
							f.$uVb.PREFIX,
							void 0,
						);
					}
				}
				e.$ysc = ti;
				class kt extends jt {
					constructor() {
						super(
							{
								id: "workbench.action.quickOpenLeastRecentlyUsedEditor",
								title: (0, t.localize2)(
									3369,
									"Quick Open Least Recently Used Editor",
								),
								f1: !0,
								category: k.$ck.View,
							},
							f.$uVb.PREFIX,
							void 0,
						);
					}
				}
				e.$zsc = kt;
				class hi extends jt {
					constructor() {
						super(
							{
								id: "workbench.action.quickOpenPreviousRecentlyUsedEditorInGroup",
								title: (0, t.localize2)(
									3370,
									"Quick Open Previous Recently Used Editor in Group",
								),
								f1: !0,
								keybinding: {
									weight: T.KeybindingWeight.WorkbenchContrib,
									primary: I.KeyMod.CtrlCmd | I.KeyCode.Tab,
									mac: { primary: I.KeyMod.WinCtrl | I.KeyCode.Tab },
								},
								precondition: L.$ZPb.toNegated(),
								category: k.$ck.View,
							},
							f.$sVb.PREFIX,
							void 0,
						);
					}
				}
				e.$Asc = hi;
				class Kt extends jt {
					constructor() {
						super(
							{
								id: "workbench.action.quickOpenLeastRecentlyUsedEditorInGroup",
								title: (0, t.localize2)(
									3371,
									"Quick Open Least Recently Used Editor in Group",
								),
								f1: !0,
								keybinding: {
									weight: T.KeybindingWeight.WorkbenchContrib,
									primary: I.KeyMod.CtrlCmd | I.KeyMod.Shift | I.KeyCode.Tab,
									mac: {
										primary: I.KeyMod.WinCtrl | I.KeyMod.Shift | I.KeyCode.Tab,
									},
								},
								precondition: L.$ZPb.toNegated(),
								category: k.$ck.View,
							},
							f.$sVb.PREFIX,
							o.ItemActivation.LAST,
						);
					}
				}
				e.$Bsc = Kt;
				class di extends v.$3X {
					static {
						this.a = "workbench.action.openPreviousEditorFromHistory";
					}
					constructor() {
						super({
							id: di.a,
							title: (0, t.localize2)(
								3372,
								"Quick Open Previous Editor from History",
							),
							f1: !0,
						});
					}
					async run(Yt) {
						const ni = Yt.get(r.$uZ),
							bi = Yt.get(o.$DJ),
							fi = Yt.get(h.$EY),
							Ti = ni.lookupKeybindings(di.a);
						let wt;
						fi.activeGroup.count === 0 && (wt = o.ItemActivation.FIRST),
							bi.quickAccess.show("", {
								quickNavigateConfiguration: { keybindings: Ti },
								itemActivation: wt,
							});
					}
				}
				e.$Csc = di;
				class Ye extends v.$3X {
					constructor() {
						super({
							id: "workbench.action.openNextRecentlyUsedEditor",
							title: (0, t.localize2)(3373, "Open Next Recently Used Editor"),
							f1: !0,
							category: k.$ck.View,
						});
					}
					async run(Yt) {
						Yt.get(m.$Feb).openNextRecentlyUsedEditor();
					}
				}
				e.$Dsc = Ye;
				class ze extends v.$3X {
					constructor() {
						super({
							id: "workbench.action.openPreviousRecentlyUsedEditor",
							title: (0, t.localize2)(
								3374,
								"Open Previous Recently Used Editor",
							),
							f1: !0,
							category: k.$ck.View,
						});
					}
					async run(Yt) {
						Yt.get(m.$Feb).openPreviouslyUsedEditor();
					}
				}
				e.$Esc = ze;
				class Xe extends v.$3X {
					constructor() {
						super({
							id: "workbench.action.openNextRecentlyUsedEditorInGroup",
							title: (0, t.localize2)(
								3375,
								"Open Next Recently Used Editor In Group",
							),
							f1: !0,
							category: k.$ck.View,
						});
					}
					async run(Yt) {
						const ni = Yt.get(m.$Feb),
							bi = Yt.get(h.$EY);
						ni.openNextRecentlyUsedEditor(bi.activeGroup.id);
					}
				}
				e.$Fsc = Xe;
				class It extends v.$3X {
					constructor() {
						super({
							id: "workbench.action.openPreviousRecentlyUsedEditorInGroup",
							title: (0, t.localize2)(
								3376,
								"Open Previous Recently Used Editor In Group",
							),
							f1: !0,
							category: k.$ck.View,
						});
					}
					async run(Yt) {
						const ni = Yt.get(m.$Feb),
							bi = Yt.get(h.$EY);
						ni.openPreviouslyUsedEditor(bi.activeGroup.id);
					}
				}
				e.$Gsc = It;
				class Lt extends v.$3X {
					constructor() {
						super({
							id: "workbench.action.clearEditorHistory",
							title: (0, t.localize2)(3377, "Clear Editor History"),
							f1: !0,
						});
					}
					async run(Yt) {
						const ni = Yt.get(p.$GO),
							bi = Yt.get(m.$Feb),
							{ confirmed: fi } = await ni.confirm({
								type: "warning",
								message: (0, t.localize)(3298, null),
								detail: (0, t.localize)(3299, null),
								primaryButton: (0, t.localize)(3300, null),
							});
						fi && bi.clear();
					}
				}
				e.$Hsc = Lt;
				class xt extends R {
					constructor() {
						super(
							{
								id: "workbench.action.moveEditorLeftInGroup",
								title: (0, t.localize2)(3378, "Move Editor Left"),
								keybinding: {
									weight: T.KeybindingWeight.WorkbenchContrib,
									primary: I.KeyMod.CtrlCmd | I.KeyMod.Shift | I.KeyCode.PageUp,
									mac: {
										primary: (0, I.$os)(
											I.$qs,
											I.KeyMod.CtrlCmd | I.KeyMod.Shift | I.KeyCode.LeftArrow,
										),
									},
								},
								f1: !0,
								category: k.$ck.View,
							},
							a.$3Vb,
							{ to: "left" },
						);
					}
				}
				e.$Isc = xt;
				class Vt extends R {
					constructor() {
						super(
							{
								id: "workbench.action.moveEditorRightInGroup",
								title: (0, t.localize2)(3379, "Move Editor Right"),
								keybinding: {
									weight: T.KeybindingWeight.WorkbenchContrib,
									primary:
										I.KeyMod.CtrlCmd | I.KeyMod.Shift | I.KeyCode.PageDown,
									mac: {
										primary: (0, I.$os)(
											I.$qs,
											I.KeyMod.CtrlCmd | I.KeyMod.Shift | I.KeyCode.RightArrow,
										),
									},
								},
								f1: !0,
								category: k.$ck.View,
							},
							a.$3Vb,
							{ to: "right" },
						);
					}
				}
				e.$Jsc = Vt;
				class Bt extends R {
					constructor() {
						super(
							{
								id: "workbench.action.moveEditorToPreviousGroup",
								title: (0, t.localize2)(
									3380,
									"Move Editor into Previous Group",
								),
								keybinding: {
									weight: T.KeybindingWeight.WorkbenchContrib,
									primary:
										I.KeyMod.CtrlCmd | I.KeyMod.Alt | I.KeyCode.LeftArrow,
									mac: {
										primary:
											I.KeyMod.CtrlCmd | I.KeyMod.WinCtrl | I.KeyCode.LeftArrow,
									},
								},
								f1: !0,
								category: k.$ck.View,
							},
							a.$3Vb,
							{ to: "previous", by: "group" },
						);
					}
				}
				e.$Ksc = Bt;
				class Gt extends R {
					constructor() {
						super(
							{
								id: "workbench.action.moveEditorToNextGroup",
								title: (0, t.localize2)(3381, "Move Editor into Next Group"),
								f1: !0,
								keybinding: {
									weight: T.KeybindingWeight.WorkbenchContrib,
									primary:
										I.KeyMod.CtrlCmd | I.KeyMod.Alt | I.KeyCode.RightArrow,
									mac: {
										primary:
											I.KeyMod.CtrlCmd |
											I.KeyMod.WinCtrl |
											I.KeyCode.RightArrow,
									},
								},
								category: k.$ck.View,
							},
							a.$3Vb,
							{ to: "next", by: "group" },
						);
					}
				}
				e.$Lsc = Gt;
				class Mt extends R {
					constructor() {
						super(
							{
								id: "workbench.action.moveEditorToAboveGroup",
								title: (0, t.localize2)(3382, "Move Editor into Group Above"),
								f1: !0,
								category: k.$ck.View,
							},
							a.$3Vb,
							{ to: "up", by: "group" },
						);
					}
				}
				e.$Msc = Mt;
				class Ut extends R {
					constructor() {
						super(
							{
								id: "workbench.action.moveEditorToBelowGroup",
								title: (0, t.localize2)(3383, "Move Editor into Group Below"),
								f1: !0,
								category: k.$ck.View,
							},
							a.$3Vb,
							{ to: "down", by: "group" },
						);
					}
				}
				e.$Nsc = Ut;
				class ei extends R {
					constructor() {
						super(
							{
								id: "workbench.action.moveEditorToLeftGroup",
								title: (0, t.localize2)(3384, "Move Editor into Left Group"),
								f1: !0,
								category: k.$ck.View,
							},
							a.$3Vb,
							{ to: "left", by: "group" },
						);
					}
				}
				e.$Osc = ei;
				class mi extends R {
					constructor() {
						super(
							{
								id: "workbench.action.moveEditorToRightGroup",
								title: (0, t.localize2)(3385, "Move Editor into Right Group"),
								f1: !0,
								category: k.$ck.View,
							},
							a.$3Vb,
							{ to: "right", by: "group" },
						);
					}
				}
				e.$Psc = mi;
				class ii extends R {
					constructor() {
						super(
							{
								id: "workbench.action.moveEditorToFirstGroup",
								title: (0, t.localize2)(3386, "Move Editor into First Group"),
								f1: !0,
								keybinding: {
									weight: T.KeybindingWeight.WorkbenchContrib,
									primary: I.KeyMod.Shift | I.KeyMod.Alt | I.KeyCode.Digit1,
									mac: {
										primary:
											I.KeyMod.CtrlCmd | I.KeyMod.WinCtrl | I.KeyCode.Digit1,
									},
								},
								category: k.$ck.View,
							},
							a.$3Vb,
							{ to: "first", by: "group" },
						);
					}
				}
				e.$Qsc = ii;
				class Dt extends R {
					constructor() {
						super(
							{
								id: "workbench.action.moveEditorToLastGroup",
								title: (0, t.localize2)(3387, "Move Editor into Last Group"),
								f1: !0,
								keybinding: {
									weight: T.KeybindingWeight.WorkbenchContrib,
									primary: I.KeyMod.Shift | I.KeyMod.Alt | I.KeyCode.Digit9,
									mac: {
										primary:
											I.KeyMod.CtrlCmd | I.KeyMod.WinCtrl | I.KeyCode.Digit9,
									},
								},
								category: k.$ck.View,
							},
							a.$3Vb,
							{ to: "last", by: "group" },
						);
					}
				}
				e.$Rsc = Dt;
				class Jt extends R {
					constructor() {
						super(
							{
								id: "workbench.action.splitEditorToPreviousGroup",
								title: (0, t.localize2)(
									3388,
									"Split Editor into Previous Group",
								),
								f1: !0,
								category: k.$ck.View,
							},
							a.$4Vb,
							{ to: "previous", by: "group" },
						);
					}
				}
				e.$Ssc = Jt;
				class si extends R {
					constructor() {
						super(
							{
								id: "workbench.action.splitEditorToNextGroup",
								title: (0, t.localize2)(3389, "Split Editor into Next Group"),
								f1: !0,
								category: k.$ck.View,
							},
							a.$4Vb,
							{ to: "next", by: "group" },
						);
					}
				}
				e.$Tsc = si;
				class Zt extends R {
					constructor() {
						super(
							{
								id: "workbench.action.splitEditorToAboveGroup",
								title: (0, t.localize2)(3390, "Split Editor into Group Above"),
								f1: !0,
								category: k.$ck.View,
							},
							a.$4Vb,
							{ to: "up", by: "group" },
						);
					}
				}
				e.$Usc = Zt;
				class ci extends R {
					constructor() {
						super(
							{
								id: "workbench.action.splitEditorToBelowGroup",
								title: (0, t.localize2)(3391, "Split Editor into Group Below"),
								f1: !0,
								category: k.$ck.View,
							},
							a.$4Vb,
							{ to: "down", by: "group" },
						);
					}
				}
				e.$Vsc = ci;
				class ri extends R {
					static {
						this.ID = "workbench.action.splitEditorToLeftGroup";
					}
					static {
						this.LABEL = (0, t.localize)(3301, null);
					}
					constructor() {
						super(
							{
								id: "workbench.action.splitEditorToLeftGroup",
								title: (0, t.localize2)(3392, "Split Editor into Left Group"),
								f1: !0,
								category: k.$ck.View,
							},
							a.$4Vb,
							{ to: "left", by: "group" },
						);
					}
				}
				e.$Wsc = ri;
				class $i extends R {
					constructor() {
						super(
							{
								id: "workbench.action.splitEditorToRightGroup",
								title: (0, t.localize2)(3393, "Split Editor into Right Group"),
								f1: !0,
								category: k.$ck.View,
							},
							a.$4Vb,
							{ to: "right", by: "group" },
						);
					}
				}
				e.$Xsc = $i;
				class Wt extends R {
					constructor() {
						super(
							{
								id: "workbench.action.splitEditorToFirstGroup",
								title: (0, t.localize2)(3394, "Split Editor into First Group"),
								f1: !0,
								category: k.$ck.View,
							},
							a.$4Vb,
							{ to: "first", by: "group" },
						);
					}
				}
				e.$Ysc = Wt;
				class tt extends R {
					constructor() {
						super(
							{
								id: "workbench.action.splitEditorToLastGroup",
								title: (0, t.localize2)(3395, "Split Editor into Last Group"),
								f1: !0,
								category: k.$ck.View,
							},
							a.$4Vb,
							{ to: "last", by: "group" },
						);
					}
				}
				e.$Zsc = tt;
				class at extends R {
					static {
						this.ID = "workbench.action.editorLayoutSingle";
					}
					constructor() {
						super(
							{
								id: at.ID,
								title: (0, t.localize2)(3396, "Single Column Editor Layout"),
								f1: !0,
								category: k.$ck.View,
							},
							a.$5Vb,
							{ groups: [{}], orientation: h.GroupOrientation.HORIZONTAL },
						);
					}
				}
				e.$1sc = at;
				class pi extends R {
					static {
						this.ID = "workbench.action.editorLayoutTwoColumns";
					}
					constructor() {
						super(
							{
								id: pi.ID,
								title: (0, t.localize2)(3397, "Two Columns Editor Layout"),
								f1: !0,
								category: k.$ck.View,
							},
							a.$5Vb,
							{ groups: [{}, {}], orientation: h.GroupOrientation.HORIZONTAL },
						);
					}
				}
				e.$2sc = pi;
				class Li extends R {
					static {
						this.ID = "workbench.action.editorLayoutThreeColumns";
					}
					constructor() {
						super(
							{
								id: Li.ID,
								title: (0, t.localize2)(3398, "Three Columns Editor Layout"),
								f1: !0,
								category: k.$ck.View,
							},
							a.$5Vb,
							{
								groups: [{}, {}, {}],
								orientation: h.GroupOrientation.HORIZONTAL,
							},
						);
					}
				}
				e.$3sc = Li;
				class Di extends R {
					static {
						this.ID = "workbench.action.editorLayoutTwoRows";
					}
					constructor() {
						super(
							{
								id: Di.ID,
								title: (0, t.localize2)(3399, "Two Rows Editor Layout"),
								f1: !0,
								category: k.$ck.View,
							},
							a.$5Vb,
							{ groups: [{}, {}], orientation: h.GroupOrientation.VERTICAL },
						);
					}
				}
				e.$4sc = Di;
				class Ui extends R {
					static {
						this.ID = "workbench.action.editorLayoutThreeRows";
					}
					constructor() {
						super(
							{
								id: Ui.ID,
								title: (0, t.localize2)(3400, "Three Rows Editor Layout"),
								f1: !0,
								category: k.$ck.View,
							},
							a.$5Vb,
							{
								groups: [{}, {}, {}],
								orientation: h.GroupOrientation.VERTICAL,
							},
						);
					}
				}
				e.$5sc = Ui;
				class Wi extends R {
					static {
						this.ID = "workbench.action.editorLayoutTwoByTwoGrid";
					}
					constructor() {
						super(
							{
								id: Wi.ID,
								title: (0, t.localize2)(3401, "Grid Editor Layout (2x2)"),
								f1: !0,
								category: k.$ck.View,
							},
							a.$5Vb,
							{
								groups: [{ groups: [{}, {}] }, { groups: [{}, {}] }],
								orientation: h.GroupOrientation.HORIZONTAL,
							},
						);
					}
				}
				e.$6sc = Wi;
				class Gi extends R {
					static {
						this.ID = "workbench.action.editorLayoutTwoColumnsBottom";
					}
					constructor() {
						super(
							{
								id: Gi.ID,
								title: (0, t.localize2)(
									3402,
									"Two Columns Bottom Editor Layout",
								),
								f1: !0,
								category: k.$ck.View,
							},
							a.$5Vb,
							{
								groups: [{}, { groups: [{}, {}] }],
								orientation: h.GroupOrientation.VERTICAL,
							},
						);
					}
				}
				e.$7sc = Gi;
				class qi extends R {
					static {
						this.ID = "workbench.action.editorLayoutTwoRowsRight";
					}
					constructor() {
						super(
							{
								id: qi.ID,
								title: (0, t.localize2)(3403, "Two Rows Right Editor Layout"),
								f1: !0,
								category: k.$ck.View,
							},
							a.$5Vb,
							{
								groups: [{}, { groups: [{}, {}] }],
								orientation: h.GroupOrientation.HORIZONTAL,
							},
						);
					}
				}
				e.$8sc = qi;
				class Oi extends v.$3X {
					constructor(Yt, ni) {
						super(Yt), (this.a = ni);
					}
					async run(Yt) {
						const ni = Yt.get(h.$EY),
							bi = Yt.get(d.$mEb),
							fi = (0, D.$Ngb)(),
							Ti =
								bi.hasFocus(d.Parts.EDITOR_PART) ||
								fi.activeElement === fi.body,
							wt = ni.addGroup(ni.activeGroup, this.a);
						ni.activateGroup(wt), Ti && wt.focus();
					}
				}
				class yi extends Oi {
					constructor() {
						super(
							{
								id: "workbench.action.newGroupLeft",
								title: (0, t.localize2)(3404, "New Editor Group to the Left"),
								f1: !0,
								category: k.$ck.View,
							},
							h.GroupDirection.LEFT,
						);
					}
				}
				e.$9sc = yi;
				class Ai extends Oi {
					constructor() {
						super(
							{
								id: "workbench.action.newGroupRight",
								title: (0, t.localize2)(3405, "New Editor Group to the Right"),
								f1: !0,
								category: k.$ck.View,
							},
							h.GroupDirection.RIGHT,
						);
					}
				}
				e.$0sc = Ai;
				class li extends Oi {
					constructor() {
						super(
							{
								id: "workbench.action.newGroupAbove",
								title: (0, t.localize2)(3406, "New Editor Group Above"),
								f1: !0,
								category: k.$ck.View,
							},
							h.GroupDirection.UP,
						);
					}
				}
				e.$$sc = li;
				class Vi extends Oi {
					constructor() {
						super(
							{
								id: "workbench.action.newGroupBelow",
								title: (0, t.localize2)(3407, "New Editor Group Below"),
								f1: !0,
								category: k.$ck.View,
							},
							h.GroupDirection.DOWN,
						);
					}
				}
				e.$_sc = Vi;
				class wi extends v.$3X {
					constructor() {
						super({
							id: "workbench.action.toggleEditorType",
							title: (0, t.localize2)(3408, "Toggle Editor Type"),
							f1: !0,
							category: k.$ck.View,
							precondition: L.$UPb,
						});
					}
					async run(Yt) {
						const ni = Yt.get(c.$IY),
							bi = Yt.get(y.$E6),
							fi = ni.activeEditorPane;
						if (!fi) return;
						const Ti = E.$A1.getCanonicalUri(fi.input);
						if (!Ti) return;
						const wt = bi
							.getEditors(Ti)
							.map((We) => We.id)
							.filter((We) => We !== fi.input.editorId);
						wt.length !== 0 &&
							(await ni.replaceEditors(
								[
									{
										editor: fi.input,
										replacement: { resource: Ti, options: { override: wt[0] } },
									},
								],
								fi.group,
							));
					}
				}
				e.$atc = wi;
				class _t extends v.$3X {
					constructor() {
						super({
							id: "workbench.action.reopenTextEditor",
							title: (0, t.localize2)(3409, "Reopen Editor With Text Editor"),
							f1: !0,
							category: k.$ck.View,
							precondition: L.$UPb,
						});
					}
					async run(Yt) {
						const ni = Yt.get(c.$IY),
							bi = ni.activeEditorPane;
						if (!bi) return;
						const fi = E.$A1.getCanonicalUri(bi.input);
						fi &&
							(await ni.replaceEditors(
								[
									{
										editor: bi.input,
										replacement: {
											resource: fi,
											options: { override: E.$b1.id },
										},
									},
								],
								bi.group,
							));
					}
				}
				e.$btc = _t;
				class ai extends v.$3X {
					constructor(Yt, ni, bi, fi) {
						super({
							id: Yt,
							title: ni,
							category: k.$ck.View,
							precondition: L.$TPb,
							keybinding: bi,
							f1: !0,
						}),
							(this.a = fi);
					}
					async run(Yt, ...ni) {
						const bi = Yt.get(h.$EY),
							fi = (0, N.$TVb)(ni, Yt.get(c.$IY), bi, Yt.get(A.$fMb));
						if (!fi.groupedEditors.length) return;
						const Ti = await bi.createAuxiliaryEditorPart(),
							{ group: wt, editors: We } = fi.groupedEditors[0],
							_e = { preserveFocus: fi.preserveFocus },
							Si = We.map((gi) => ({ editor: gi, options: _e }));
						this.a
							? wt.moveEditors(Si, Ti.activeGroup)
							: wt.copyEditors(Si, Ti.activeGroup),
							Ti.activeGroup.focus();
					}
				}
				class Ft extends ai {
					constructor() {
						super(
							a.$uWb,
							{
								...(0, t.localize2)(3410, "Move Editor into New Window"),
								mnemonicTitle: (0, t.localize)(3302, null),
							},
							void 0,
							!0,
						);
					}
				}
				e.$ctc = Ft;
				class Xt extends ai {
					constructor() {
						super(
							a.$vWb,
							{
								...(0, t.localize2)(3411, "Copy Editor into New Window"),
								mnemonicTitle: (0, t.localize)(3303, null),
							},
							{
								primary: (0, I.$os)(I.$ps, I.KeyCode.KeyO),
								weight: T.KeybindingWeight.WorkbenchContrib,
								mac: { primary: (0, I.$os)(I.$qs, I.KeyCode.KeyO) },
							},
							!1,
						);
					}
				}
				e.$dtc = Xt;
				class $t extends v.$3X {
					constructor(Yt, ni, bi) {
						super({ id: Yt, title: ni, category: k.$ck.View, f1: !0 }),
							(this.a = bi);
					}
					async run(Yt) {
						const ni = Yt.get(h.$EY),
							bi = ni.activeGroup,
							fi = await ni.createAuxiliaryEditorPart();
						ni.mergeGroup(bi, fi.activeGroup, {
							mode: this.a
								? h.MergeGroupMode.MOVE_EDITORS
								: h.MergeGroupMode.COPY_EDITORS,
						}),
							fi.activeGroup.focus();
					}
				}
				class ut extends $t {
					constructor() {
						super(
							a.$wWb,
							{
								...(0, t.localize2)(3412, "Move Editor Group into New Window"),
								mnemonicTitle: (0, t.localize)(3304, null),
							},
							!0,
						);
					}
				}
				e.$etc = ut;
				class Et extends $t {
					constructor() {
						super(
							a.$xWb,
							{
								...(0, t.localize2)(3413, "Copy Editor Group into New Window"),
								mnemonicTitle: (0, t.localize)(3305, null),
							},
							!1,
						);
					}
				}
				e.$ftc = Et;
				class Tt extends v.$3X {
					constructor() {
						super({
							id: "workbench.action.restoreEditorsToMainWindow",
							title: {
								...(0, t.localize2)(3414, "Restore Editors into Main Window"),
								mnemonicTitle: (0, t.localize)(3306, null),
							},
							f1: !0,
							precondition: L.$GPb,
							category: k.$ck.View,
						});
					}
					async run(Yt) {
						const ni = Yt.get(h.$EY);
						ni.mergeAllGroups(ni.mainPart.activeGroup);
					}
				}
				e.$gtc = Tt;
				class qt extends v.$3X {
					constructor() {
						super({
							id: a.$yWb,
							title: {
								...(0, t.localize2)(3415, "New Empty Editor Window"),
								mnemonicTitle: (0, t.localize)(3307, null),
							},
							f1: !0,
							category: k.$ck.View,
						});
					}
					async run(Yt) {
						(
							await Yt.get(h.$EY).createAuxiliaryEditorPart()
						).activeGroup.focus();
					}
				}
				e.$htc = qt;
			},
		),
		define(
			de[849],
			he([
				1, 0, 7, 50, 76, 23, 54, 19, 28, 4, 57, 22, 5, 73, 155, 44, 399, 625,
				355, 623, 66, 170, 96, 631,
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
					(e.$tnc = void 0);
				let S = class extends b.$rnc {
					static {
						v = this;
					}
					static create(T, P, k, L, D) {
						return T.invokeFunction((M) => {
							const N = M.get($.$7Y).getValue(P),
								A = N ? w.$Te.fromString(N) : void 0,
								R = M.get(f.$3Ib).createWebviewOverlay({
									providedViewType: k,
									title: void 0,
									options: { customClasses: D?.customClasses },
									contentOptions: {},
									extension: void 0,
								}),
								O = T.createInstance(v, { resource: P, viewType: k }, R, {
									untitledDocumentData: A,
									oldResource: D?.oldResource,
								});
							return typeof L < "u" && O.updateGroup(L), O;
						});
					}
					static {
						this.typeId = "workbench.editors.webviewEditor";
					}
					get resource() {
						return this.z;
					}
					constructor(T, P, k, L, D, M, N, A, R, O, B, U, z, F) {
						super(
							{ providedId: T.viewType, viewType: T.viewType, name: "" },
							P,
							L,
						),
							(this.I = D),
							(this.J = M),
							(this.L = N),
							(this.M = A),
							(this.N = R),
							(this.O = O),
							(this.P = B),
							(this.Q = U),
							(this.R = z),
							(this.S = F),
							(this.Y = void 0),
							(this.Z = void 0),
							(this.ab = void 0),
							(this.cb = void 0),
							(this.eb = void 0),
							(this.gb = void 0),
							(this.ib = void 0),
							(this.z = T.resource),
							(this.oldResource = k.oldResource),
							(this.C = k.startsDirty),
							(this.F = k.backupId),
							(this.G = k.untitledDocumentData),
							this.U();
					}
					U() {
						this.D(this.J.onDidChangeFormatters((T) => this.W(T.scheme))),
							this.D(
								this.O.onDidChangeFileSystemProviderRegistrations((T) =>
									this.W(T.scheme),
								),
							),
							this.D(
								this.O.onDidChangeFileSystemProviderCapabilities((T) =>
									this.W(T.scheme),
								),
							),
							this.D(this.S.onDidChange(() => this.X()));
					}
					W(T) {
						T === this.resource.scheme && this.X();
					}
					X() {
						(this.Y = void 0),
							(this.Z = void 0),
							(this.ab = void 0),
							(this.cb = void 0),
							(this.eb = void 0),
							(this.gb = void 0),
							(this.ib = void 0),
							this.f.fire();
					}
					get typeId() {
						return v.typeId;
					}
					get editorId() {
						return this.viewType;
					}
					get capabilities() {
						let T = g.EditorInputCapabilities.None;
						return (
							(T |= g.EditorInputCapabilities.CanDropIntoEditor),
							this.L.getCustomEditorCapabilities(this.viewType)
								?.supportsMultipleEditorsPerDocument ||
								(T |= g.EditorInputCapabilities.Singleton),
							this.H
								? this.H.object.isReadonly() &&
									(T |= g.EditorInputCapabilities.Readonly)
								: this.P.isReadonly(this.resource) &&
									(T |= g.EditorInputCapabilities.Readonly),
							this.resource.scheme === E.Schemas.untitled &&
								(T |= g.EditorInputCapabilities.Untitled),
							T
						);
					}
					getName() {
						return (
							typeof this.Y != "string" &&
								(this.Y =
									this.S.getName(this.resource) ??
									(0, C.$sc)(this.J.getUriLabel(this.resource))),
							this.Y
						);
					}
					getDescription(T = g.Verbosity.MEDIUM) {
						switch (T) {
							case g.Verbosity.SHORT:
								return this.$;
							case g.Verbosity.LONG:
								return this.db;
							case g.Verbosity.MEDIUM:
							default:
								return this.bb;
						}
					}
					get $() {
						return (
							typeof this.Z != "string" &&
								(this.Z = this.J.getUriBasenameLabel(
									(0, d.$mh)(this.resource),
								)),
							this.Z
						);
					}
					get bb() {
						return (
							typeof this.ab != "string" &&
								(this.ab = this.J.getUriLabel((0, d.$mh)(this.resource), {
									relative: !0,
								})),
							this.ab
						);
					}
					get db() {
						return (
							typeof this.cb != "string" &&
								(this.cb = this.J.getUriLabel((0, d.$mh)(this.resource))),
							this.cb
						);
					}
					get fb() {
						return (
							typeof this.eb != "string" && (this.eb = this.getName()), this.eb
						);
					}
					get hb() {
						return (
							typeof this.gb != "string" &&
								(this.gb = this.J.getUriLabel(this.resource, { relative: !0 })),
							this.gb
						);
					}
					get jb() {
						return (
							typeof this.ib != "string" &&
								(this.ib = this.J.getUriLabel(this.resource)),
							this.ib
						);
					}
					getTitle(T) {
						switch (T) {
							case g.Verbosity.SHORT:
								return this.fb;
							case g.Verbosity.LONG:
								return this.jb;
							default:
							case g.Verbosity.MEDIUM:
								return this.hb;
						}
					}
					matches(T) {
						return super.matches(T)
							? !0
							: this === T ||
									(T instanceof v &&
										this.viewType === T.viewType &&
										(0, d.$gh)(this.resource, T.resource));
					}
					copy() {
						return v.create(
							this.I,
							this.resource,
							this.viewType,
							this.group,
							this.webview.options,
						);
					}
					isReadonly() {
						return this.H
							? this.H.object.isReadonly()
							: this.P.isReadonly(this.resource);
					}
					isDirty() {
						return this.H ? this.H.object.isDirty() : !!this.C;
					}
					async save(T, P) {
						if (!this.H) return;
						const k = await this.H.object.saveCustomEditor(P);
						if (k) return (0, d.$gh)(k, this.resource) ? this : { resource: k };
					}
					async saveAs(T, P) {
						if (!this.H) return;
						const k = this.z,
							L = await this.M.pickFileToSave(k, P?.availableFileSystems);
						if (L && (await this.H.object.saveCustomEditorAs(this.z, L, P)))
							return (await this.rename(T, L))?.editor;
					}
					async revert(T, P) {
						if (this.H) return this.H.object.revert(P);
						(this.C = !1), this.b.fire();
					}
					async resolve() {
						if ((await super.resolve(), this.isDisposed())) return null;
						if (!this.H) {
							const T = this.capabilities;
							(this.H = this.D(
								(0, m.$wg)(
									await this.L.models.tryRetain(this.resource, this.viewType),
								),
							)),
								this.D(this.H.object.onDidChangeDirty(() => this.b.fire())),
								this.D(this.H.object.onDidChangeReadonly(() => this.g.fire())),
								this.G && (this.C = !0),
								this.isDirty() && this.b.fire(),
								this.capabilities !== T && this.g.fire();
						}
						return null;
					}
					async rename(T, P) {
						return { editor: { resource: P } };
					}
					undo() {
						return (0, m.$wg)(this.H), this.N.undo(this.resource);
					}
					redo() {
						return (0, m.$wg)(this.H), this.N.redo(this.resource);
					}
					onMove(T) {
						this.kb = T;
					}
					s(T) {
						if (super.s(T)) return (T.kb = this.kb), (this.kb = void 0), T;
					}
					get backupId() {
						return this.H ? this.H.object.backupId : this.F;
					}
					get untitledDocumentData() {
						return this.G;
					}
					toUntyped() {
						return {
							resource: this.resource,
							options: { override: this.viewType },
						};
					}
					claim(T, P, k) {
						if (this.mb(P.vscodeWindowId) !== !0)
							throw (0, g.$E1)(
								(0, r.localize)(5122, null),
								[
									(0, i.$wj)({
										id: "openInOriginalWindow",
										label: (0, r.localize)(5123, null),
										run: async () => {
											const L = this.Q.getPart(
												this.R.getContainer(
													(0, t.getWindow)(this.webview.container).window,
												),
											);
											this.Q.getPart(
												this.R.getContainer(P.window),
											).activeGroup.moveEditor(this, L.activeGroup);
										},
									}),
								],
								{ forceMessage: !0 },
							);
						return super.claim(T, P, k);
					}
					canMove(T, P) {
						const k = this.Q.getGroup(P);
						if (k) {
							const L = this.mb(k.windowId);
							if (typeof L == "string") return L;
						}
						return super.canMove(T, P);
					}
					mb(T) {
						return this.isModified() &&
							this.H?.object.canHotExit === !1 &&
							(0, t.getWindow)(this.webview.container).vscodeWindowId !== T
							? (0, r.localize)(5124, null, this.getName())
							: !0;
					}
				};
				(e.$tnc = S),
					(e.$tnc =
						S =
						v =
							Ne(
								[
									j(3, b.$qnc),
									j(4, h.$Li),
									j(5, c.$3N),
									j(6, o.$jnc),
									j(7, u.$IO),
									j(8, n.$GN),
									j(9, a.$ll),
									j(10, l.$_Y),
									j(11, s.$EY),
									j(12, y.$mEb),
									j(13, p.$QIb),
								],
								S,
							));
			},
		),
		define(
			de[3876],
			he([
				1, 0, 6, 3, 19, 9, 10, 34, 88, 44, 296, 1287, 313, 478, 552, 849, 1302,
				711, 712, 360, 833, 566, 446, 66, 18, 101,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Vnc = void 0);
				let I = class {
					constructor(P, k, L, D, M) {
						(this.g = k),
							(this.h = L),
							(this.i = D),
							(this.a = new i.$Zc()),
							(this.c = []),
							(this.d = new Map()),
							(this.e = new Map()),
							(this.f = new i.$0c()),
							(this.b = P.getProxy(m.$mbb.ExtHostEditorTabs)),
							this.a.add(
								M.onDidEditorsChange((N) => {
									try {
										this.w(N);
									} catch {
										this.i.error("Failed to update model, rebuilding"),
											this.v();
									}
								}),
							),
							this.a.add(this.f),
							this.a.add(this.g.onDidAddGroup(() => this.v())),
							this.a.add(this.g.onDidRemoveGroup(() => this.v())),
							this.g.whenReady.then(() => this.v());
					}
					dispose() {
						this.d.clear(), this.e.clear(), this.a.dispose();
					}
					j(P, k, L) {
						const D = k.editorId;
						return {
							id: this.l(k, P.id),
							label: k.getName(),
							editorId: D,
							input: this.k(k),
							isPinned: P.isSticky(L),
							isPreview: !P.isPinned(L),
							isActive: P.isActive(k),
							isDirty: k.isDirty(),
						};
					}
					k(P) {
						if (P instanceof o.$Enc)
							return {
								kind: m.TabInputKind.TextMergeInput,
								base: P.base,
								input1: P.input1.uri,
								input2: P.input2.uri,
								result: P.resource,
							};
						if (P instanceof c.$R1b)
							return { kind: m.TabInputKind.TextInput, uri: P.resource };
						if (P instanceof h.$iY && !(P instanceof u.$GVb)) {
							const k = P.primary.resource,
								L = P.secondary.resource;
							return P.primary instanceof c.$R1b &&
								P.secondary instanceof c.$R1b &&
								(0, w.$gh)(k, L) &&
								k &&
								L
								? { kind: m.TabInputKind.TextInput, uri: k }
								: { kind: m.TabInputKind.UnknownInput };
						}
						if (P instanceof b.$TIb)
							return {
								kind: m.TabInputKind.NotebookInput,
								notebookType: P.viewType,
								uri: P.resource,
							};
						if (P instanceof g.$tnc)
							return {
								kind: m.TabInputKind.CustomEditorInput,
								viewType: P.viewType,
								uri: P.resource,
							};
						if (P instanceof l.$W4b)
							return {
								kind: m.TabInputKind.WebviewEditorInput,
								viewType: P.viewType,
							};
						if (P instanceof s.$Unc)
							return { kind: m.TabInputKind.TerminalEditorInput };
						if (P instanceof u.$GVb) {
							if (P.modified instanceof c.$R1b && P.original instanceof c.$R1b)
								return {
									kind: m.TabInputKind.TextDiffInput,
									modified: P.modified.resource,
									original: P.original.resource,
								};
							if (P.modified instanceof b.$TIb && P.original instanceof b.$TIb)
								return {
									kind: m.TabInputKind.NotebookDiffInput,
									notebookType: P.original.viewType,
									modified: P.modified.resource,
									original: P.original.resource,
								};
						}
						if (P instanceof p.$ync)
							return {
								kind: m.TabInputKind.InteractiveEditorInput,
								uri: P.resource,
								inputBoxUri: P.inputResource,
							};
						if (P instanceof n.$cMb)
							return { kind: m.TabInputKind.ChatEditorInput };
						if (P instanceof f.$Lnc) {
							const k = [];
							for (const L of P?.resources.get() ?? [])
								L.originalUri &&
									L.modifiedUri &&
									k.push({
										kind: m.TabInputKind.TextDiffInput,
										original: L.originalUri,
										modified: L.modifiedUri,
									});
							return {
								kind: m.TabInputKind.MultiDiffEditorInput,
								diffEditors: k,
							};
						}
						return { kind: m.TabInputKind.UnknownInput };
					}
					l(P, k) {
						let L;
						const D = r.$A1.getCanonicalUri(P, {
							supportSideBySide: r.SideBySideEditor.BOTH,
						});
						return (
							D instanceof E.URI
								? (L = D.toString())
								: (L = `${D?.primary?.toString()}-${D?.secondary?.toString()}`),
							`${k}~${P.editorId}-${P.typeId}-${L} `
						);
					}
					m() {
						const P = this.g.activeGroup.id,
							k = this.d.get(P);
						k && ((k.isActive = !0), this.b.$acceptTabGroupUpdate(k));
					}
					n(P, k, L) {
						const D = this.l(k, P),
							M = this.e.get(D);
						M
							? ((M.tab.label = k.getName()),
								this.b.$acceptTabOperation({
									groupId: P,
									index: L,
									tabDto: M.tab,
									kind: m.TabModelOperationKind.TAB_UPDATE,
								}))
							: (this.i.error("Invalid model for label change, rebuilding"),
								this.v());
					}
					o(P, k, L) {
						const D = this.g.getGroup(P),
							M = this.d.get(P) !== void 0;
						if (!D || !M) {
							this.v();
							return;
						}
						const N = this.d.get(P)?.tabs;
						if (!N) return;
						const A = this.j(D, k, L);
						N.splice(L, 0, A);
						const R = this.l(k, P);
						this.e.set(R, { group: D, editorInput: k, tab: A }),
							k instanceof f.$Lnc &&
								this.f.set(
									k,
									t.Event.fromObservableLight(k.resources)(() => {
										const O = this.e.get(R);
										O &&
											((O.tab = this.j(D, k, L)),
											this.b.$acceptTabOperation({
												groupId: P,
												index: L,
												tabDto: O.tab,
												kind: m.TabModelOperationKind.TAB_UPDATE,
											}));
									}),
								),
							this.b.$acceptTabOperation({
								groupId: P,
								index: L,
								tabDto: A,
								kind: m.TabModelOperationKind.TAB_OPEN,
							});
					}
					p(P, k) {
						const L = this.g.getGroup(P),
							D = this.d.get(P)?.tabs;
						if (!L || !D) {
							this.v();
							return;
						}
						const M = D.splice(k, 1);
						M.length !== 0 &&
							(this.e.delete(M[0]?.id ?? ""),
							M[0]?.input instanceof f.$Lnc &&
								this.f.deleteAndDispose(M[0]?.input),
							this.b.$acceptTabOperation({
								groupId: P,
								index: k,
								tabDto: M[0],
								kind: m.TabModelOperationKind.TAB_CLOSE,
							}));
					}
					q(P, k) {
						const L = this.d.get(P)?.tabs;
						if (!L) return;
						const D = L[k];
						(D.isActive = !0),
							this.b.$acceptTabOperation({
								groupId: P,
								index: k,
								tabDto: D,
								kind: m.TabModelOperationKind.TAB_UPDATE,
							});
					}
					r(P, k, L) {
						const D = this.l(L, P),
							M = this.e.get(D);
						if (!M) {
							this.i.error("Invalid model for dirty change, rebuilding"),
								this.v();
							return;
						}
						(M.tab.isDirty = L.isDirty()),
							this.b.$acceptTabOperation({
								groupId: P,
								index: k,
								tabDto: M.tab,
								kind: m.TabModelOperationKind.TAB_UPDATE,
							});
					}
					s(P, k, L) {
						const D = this.l(L, P),
							M = this.e.get(D),
							N = M?.group,
							A = M?.tab;
						if (!N || !A) {
							this.i.error("Invalid model for sticky change, rebuilding"),
								this.v();
							return;
						}
						(A.isPinned = N.isSticky(k)),
							this.b.$acceptTabOperation({
								groupId: P,
								index: k,
								tabDto: A,
								kind: m.TabModelOperationKind.TAB_UPDATE,
							});
					}
					t(P, k, L) {
						const D = this.l(L, P),
							M = this.e.get(D),
							N = M?.group,
							A = M?.tab;
						if (!N || !A) {
							this.i.error("Invalid model for sticky change, rebuilding"),
								this.v();
							return;
						}
						(A.isPreview = !N.isPinned(k)),
							this.b.$acceptTabOperation({
								kind: m.TabModelOperationKind.TAB_UPDATE,
								groupId: P,
								tabDto: A,
								index: k,
							});
					}
					u(P, k, L, D) {
						const M = this.d.get(P)?.tabs;
						if (!M) {
							this.i.error("Invalid model for move change, rebuilding"),
								this.v();
							return;
						}
						const N = M.splice(L, 1);
						N.length !== 0 &&
							(M.splice(k, 0, N[0]),
							this.b.$acceptTabOperation({
								kind: m.TabModelOperationKind.TAB_MOVE,
								groupId: P,
								tabDto: N[0],
								index: k,
								oldIndex: L,
							}));
					}
					v() {
						if (this.g.groups.length === 0) return;
						(this.c = []), this.d.clear(), this.e.clear();
						let P = [];
						for (const k of this.g.groups) {
							const L = {
								groupId: k.id,
								isActive: k.id === this.g.activeGroup.id,
								viewColumn: (0, y.$b8)(this.g, k),
								tabs: [],
							};
							k.editors.forEach((D, M) => {
								const N = this.j(k, D, M);
								P.push(N),
									this.e.set(this.l(D, k.id), {
										group: k,
										tab: N,
										editorInput: D,
									});
							}),
								(L.tabs = P),
								this.c.push(L),
								this.d.set(k.id, L),
								(P = []);
						}
						this.b.$acceptEditorTabModel(this.c);
					}
					w(P) {
						const k = P.event,
							L = P.groupId;
						switch (k.kind) {
							case r.GroupModelChangeKind.GROUP_ACTIVE:
								if (L === this.g.activeGroup.id) {
									this.m();
									break;
								} else return;
							case r.GroupModelChangeKind.EDITOR_LABEL:
								if (k.editor !== void 0 && k.editorIndex !== void 0) {
									this.n(L, k.editor, k.editorIndex);
									break;
								}
							case r.GroupModelChangeKind.EDITOR_OPEN:
								if (k.editor !== void 0 && k.editorIndex !== void 0) {
									this.o(L, k.editor, k.editorIndex);
									break;
								}
							case r.GroupModelChangeKind.EDITOR_CLOSE:
								if (k.editorIndex !== void 0) {
									this.p(L, k.editorIndex);
									break;
								}
							case r.GroupModelChangeKind.EDITOR_ACTIVE:
								if (k.editorIndex !== void 0) {
									this.q(L, k.editorIndex);
									break;
								}
							case r.GroupModelChangeKind.EDITOR_DIRTY:
								if (k.editorIndex !== void 0 && k.editor !== void 0) {
									this.r(L, k.editorIndex, k.editor);
									break;
								}
							case r.GroupModelChangeKind.EDITOR_STICKY:
								if (k.editorIndex !== void 0 && k.editor !== void 0) {
									this.s(L, k.editorIndex, k.editor);
									break;
								}
							case r.GroupModelChangeKind.EDITOR_PIN:
								if (k.editorIndex !== void 0 && k.editor !== void 0) {
									this.t(L, k.editorIndex, k.editor);
									break;
								}
							case r.GroupModelChangeKind.EDITOR_TRANSIENT:
								break;
							case r.GroupModelChangeKind.EDITOR_MOVE:
								if (
									(0, a.$oY)(k) &&
									k.editor &&
									k.editorIndex !== void 0 &&
									k.oldEditorIndex !== void 0
								) {
									this.u(L, k.editorIndex, k.oldEditorIndex, k.editor);
									break;
								}
							default:
								this.v();
						}
					}
					$moveTab(P, k, L, D) {
						const M = (0, y.$a8)(this.g, this.h, L),
							N = this.e.get(P);
						if (!N?.tab)
							throw new Error(
								`Attempted to close tab with id ${P} which does not exist`,
							);
						let R;
						const O = this.g.getGroup(N.group.id);
						if (!O) return;
						if (this.d.get(M) === void 0) {
							let U = $.GroupDirection.RIGHT;
							L === v.$KY && (U = (0, $.$HY)(this.h)),
								(R = this.g.addGroup(
									this.g.groups[this.g.groups.length - 1],
									U,
								));
						} else R = this.g.getGroup(M);
						if (!R) return;
						(k < 0 || k > R.editors.length) && (k = R.editors.length);
						const B = N?.editorInput;
						B && O.moveEditor(B, R, { index: k, preserveFocus: D });
					}
					async $closeTab(P, k) {
						const L = new Map();
						for (const M of P) {
							const N = this.e.get(M),
								A = N?.tab,
								R = N?.group,
								O = N?.editorInput;
							if (!R || !A || !N || !O) continue;
							const B = L.get(R);
							B ? B.push(O) : L.set(R, [O]);
						}
						const D = [];
						for (const [M, N] of L)
							D.push(await M.closeEditors(N, { preserveFocus: k }));
						return D.every((M) => M);
					}
					async $closeGroup(P, k) {
						const L = [];
						for (const D of P) {
							const M = this.g.getGroup(D);
							M &&
								(L.push(await M.closeAllEditors()),
								M.count === 0 &&
									this.g.getGroup(M.id) &&
									this.g.removeGroup(M));
						}
						return L.every((D) => D);
					}
				};
				(e.$Vnc = I),
					(e.$Vnc = I =
						Ne(
							[
								(0, S.$tmc)(m.$lbb.MainThreadEditorTabs),
								j(1, $.$EY),
								j(2, C.$gj),
								j(3, d.$ik),
								j(4, v.$IY),
							],
							I,
						));
			},
		),
		define(
			de[3877],
			he([1, 0, 3, 23, 19, 9, 5, 849, 625, 360, 355, 1831, 623, 335, 403]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Yoc = e.$Xoc = void 0);
				let g = class extends a.$Toc {
					static {
						this.ID = d.$tnc.typeId;
					}
					constructor(b, s, l) {
						super(b), (this.d = s), (this.e = l);
					}
					serialize(b) {
						const s = b.isDirty(),
							l = {
								...this.c(b),
								editorResource: b.resource.toJSON(),
								dirty: s,
								backupId: s ? b.backupId : void 0,
							};
						try {
							return JSON.stringify(l);
						} catch {
							return;
						}
					}
					b(b) {
						return {
							...super.b(b),
							editorResource: E.URI.from(b.editorResource),
							dirty: b.dirty,
						};
					}
					deserialize(b, s) {
						const l = this.b(JSON.parse(s)),
							y = p(this.e, l),
							$ = this.d.createInstance(
								d.$tnc,
								{ resource: l.editorResource, viewType: l.viewType },
								y,
								{ startsDirty: l.dirty, backupId: l.backupId },
							);
						return typeof l.group == "number" && $.updateGroup(l.group), $;
					}
				};
				(e.$Xoc = g),
					(e.$Xoc = g = Ne([j(0, h.$qnc), j(1, C.$Li), j(2, u.$3Ib)], g));
				function p(f, b) {
					const s = f.createWebviewOverlay({
						providedViewType: b.viewType,
						origin: b.origin,
						title: void 0,
						options: {
							purpose: u.WebviewContentPurpose.CustomEditor,
							enableFindWidget: b.webviewOptions.enableFindWidget,
							retainContextWhenHidden: b.webviewOptions.retainContextWhenHidden,
						},
						contentOptions: b.contentOptions,
						extension: b.extension,
					});
					return (s.state = b.state), s;
				}
				let o = class extends t.$1c {
					static {
						this.ID = "workbench.contrib.complexCustomWorkingCopyEditorHandler";
					}
					constructor(b, s, l, y, $) {
						super(),
							(this.a = b),
							(this.b = l),
							(this.c = y),
							this.D(s.registerHandler(this));
					}
					handles(b) {
						return b.resource.scheme === i.Schemas.vscodeCustomEditor;
					}
					isOpen(b, s) {
						if (!this.handles(b)) return !1;
						if (
							b.resource.authority === "jupyter-notebook-ipynb" &&
							s instanceof r.$TIb
						)
							try {
								const l = JSON.parse(b.resource.query),
									y = E.URI.from(l);
								return (0, w.$gh)(y, s.resource);
							} catch {
								return !1;
							}
						if (
							!(s instanceof d.$tnc) ||
							b.resource.authority !==
								s.viewType.replace(/[^a-z0-9\-_]/gi, "-").toLowerCase()
						)
							return !1;
						try {
							const l = JSON.parse(b.resource.query),
								y = E.URI.from(l);
							return (0, w.$gh)(y, s.resource);
						} catch {
							return !1;
						}
					}
					async createEditor(b) {
						const s = await this.b.resolve(b);
						if (!s?.meta)
							throw new Error(
								`No backup found for custom editor: ${b.resource}`,
							);
						const l = s.meta,
							y = (0, a.$Uoc)(l.extension?.id, l.extension?.location),
							$ = p(this.c, {
								viewType: l.viewType,
								origin: l.webview.origin,
								webviewOptions: (0, a.$Voc)(l.webview.options),
								contentOptions: (0, a.$Woc)(l.webview.options),
								state: l.webview.state,
								extension: y,
							}),
							v = this.a.createInstance(
								d.$tnc,
								{
									resource: E.URI.revive(l.editorResource),
									viewType: l.viewType,
								},
								$,
								{ backupId: l.backupId },
							);
						return v.updateGroup(0), v;
					}
				};
				(e.$Yoc = o),
					(e.$Yoc = o =
						Ne(
							[
								j(0, C.$Li),
								j(1, n.$bZ),
								j(2, c.$WO),
								j(3, u.$3Ib),
								j(4, m.$jnc),
							],
							o,
						));
			},
		),
		define(
			de[3878],
			he([
				1, 0, 24, 6, 3, 23, 19, 28, 9, 46, 22, 5, 30, 21, 68, 44, 296, 625,
				3047, 66, 231, 18, 3577, 849, 2424,
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
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$CSc = void 0);
				let v = class extends w.$1c {
					constructor(I, T, P, k, L, D, M) {
						super(),
							(this.n = P),
							(this.q = k),
							(this.r = L),
							(this.s = D),
							(this.t = M),
							(this.b = 0),
							(this.c = this.D(new w.$Zc())),
							(this.g = new Map()),
							(this.h = new f.$zSc()),
							(this.j = this.D(new i.$re())),
							(this.onDidChangeEditorTypes = this.j.event),
							(this.m = h.$Io.as(g.$a1.EditorFactory).getFileEditorFactory()),
							(this.a = this.D(new y.$BSc(T))),
							this.t.bufferChangeEvents(this.w.bind(this)),
							this.D(
								this.a.onChange(() => {
									this.t.bufferChangeEvents(this.w.bind(this)), this.j.fire();
								}),
							);
						const N = {
								contextKey: o.$knc,
								getGroupContextKeyValue: (O) => this.z(O),
								onDidChange: this.onDidChangeEditorTypes,
							},
							A = {
								contextKey: o.$lnc,
								getGroupContextKeyValue: (O) => this.C(O),
								onDidChange: this.onDidChangeEditorTypes,
							};
						this.D(this.q.registerContextKeyProvider(N)),
							this.D(this.q.registerContextKeyProvider(A)),
							this.D(
								I.onDidRunOperation((O) => {
									O.isOperation(u.FileOperation.MOVE) &&
										this.F(
											O.resource,
											this.s.asCanonicalUri(O.target.resource),
										);
								}),
							);
						const R = 105;
						this.D(
							r.$stb.addImplementation(R, "custom-editor", () =>
								this.u((O) => O.undo()),
							),
						),
							this.D(
								r.$ttb.addImplementation(R, "custom-editor", () =>
									this.u((O) => O.redo()),
								),
							);
					}
					getEditorTypes() {
						return [...this.a];
					}
					u(I) {
						const T = this.n.activeEditor;
						if (T instanceof $.$tnc) {
							const P = I(T);
							return P || !0;
						}
						return !1;
					}
					w() {
						this.c.clear();
						for (const I of this.a)
							for (const T of I.selector)
								T.filenamePattern &&
									this.c.add(
										this.t.registerEditor(
											T.filenamePattern,
											{
												id: I.id,
												label: I.displayName,
												detail: I.providerDisplayName,
												priority: I.priority,
											},
											{
												singlePerResource: () =>
													!(
														this.getCustomEditorCapabilities(I.id)
															?.supportsMultipleEditorsPerDocument ?? !1
													),
											},
											{
												createEditorInput: ({ resource: P }, k) => ({
													editor: $.$tnc.create(this.r, P, I.id, k.id),
												}),
												createUntitledEditorInput: ({ resource: P }, k) => ({
													editor: $.$tnc.create(
														this.r,
														P ??
															m.URI.from({
																scheme: E.Schemas.untitled,
																authority: `Untitled-${this.b++}`,
															}),
														I.id,
														k.id,
													),
												}),
												createDiffEditorInput: (P, k) => ({
													editor: this.y(P, I.id, k),
												}),
											},
										),
									);
					}
					y(I, T, P) {
						const k = $.$tnc.create(
								this.r,
								(0, d.$wg)(I.modified.resource),
								T,
								P.id,
								{ customClasses: "modified" },
							),
							L = $.$tnc.create(
								this.r,
								(0, d.$wg)(I.original.resource),
								T,
								P.id,
								{ customClasses: "original" },
							);
						return this.r.createInstance(
							p.$GVb,
							I.label,
							I.description,
							L,
							k,
							!0,
						);
					}
					get models() {
						return this.h;
					}
					getCustomEditor(I) {
						return this.a.get(I);
					}
					getContributedCustomEditors(I) {
						return new o.$nnc(this.a.getContributedEditors(I));
					}
					getUserConfiguredCustomEditors(I) {
						const T = this.t.getAssociationsForResource(I);
						return new o.$nnc((0, t.$Lb)(T.map((P) => this.a.get(P.viewType))));
					}
					getAllCustomEditors(I) {
						return new o.$nnc([
							...this.getUserConfiguredCustomEditors(I).allEditors,
							...this.getContributedCustomEditors(I).allEditors,
						]);
					}
					registerCustomEditorCapabilities(I, T) {
						if (this.g.has(I))
							throw new Error(`Capabilities for ${I} already set`);
						return (
							this.g.set(I, T),
							(0, w.$Yc)(() => {
								this.g.delete(I);
							})
						);
					}
					getCustomEditorCapabilities(I) {
						return this.g.get(I);
					}
					z(I) {
						const T = I.activeEditorPane;
						return T?.input?.resource && T?.input instanceof $.$tnc
							? T.input.viewType
							: "";
					}
					C(I) {
						const T = I.activeEditorPane;
						return T?.input?.resource ? T?.input instanceof $.$tnc : !1;
					}
					async F(I, T) {
						if ((0, C.$lh)(I).toLowerCase() === (0, C.$lh)(T).toLowerCase())
							return;
						const P = this.getAllCustomEditors(T);
						if (
							!P.allEditors.some(
								(L) => L.priority !== s.RegisteredEditorPriority.option,
							)
						)
							return;
						const k = new Map();
						for (const L of this.q.groups)
							for (const D of L.editors)
								if (
									this.m.isFileEditor(D) &&
									!(D instanceof $.$tnc) &&
									(0, C.$gh)(D.resource, T)
								) {
									let M = k.get(L.id);
									M || ((M = []), k.set(L.id, M)), M.push(D);
								}
						if (k.size)
							for (const [L, D] of k)
								this.n.replaceEditors(
									D.map((M) => {
										let N;
										if (P.defaultEditor) {
											const A = P.defaultEditor.id;
											N = $.$tnc.create(this.r, T, A, L);
										} else N = { resource: T, options: { override: g.$b1.id } };
										return {
											editor: M,
											replacement: N,
											options: { preserveFocus: !0 },
										};
									}),
									L,
								);
					}
				};
				(e.$CSc = v),
					(e.$CSc = v =
						Ne(
							[
								j(0, u.$ll),
								j(1, c.$lq),
								j(2, l.$IY),
								j(3, b.$EY),
								j(4, a.$Li),
								j(5, n.$Vl),
								j(6, s.$E6),
							],
							v,
						));
			},
		),
		define(
			de[3879],
			he([1, 0, 102, 20, 30, 192, 55, 44, 3877, 625, 1025, 849, 3878]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(0, i.$lK)(r.$jnc, h.$CSc, i.InstantiationType.Delayed),
					w.$Io
						.as(d.$a1.EditorPane)
						.registerEditorPane(
							E.$vVb.create(u.$pnc, u.$pnc.ID, "Webview Editor"),
							[new t.$Ji(a.$tnc)],
						),
					w.$Io
						.as(d.$a1.EditorFactory)
						.registerEditorSerializer(m.$Xoc.ID, m.$Xoc),
					(0, C.$s6)(m.$Yoc.ID, m.$Yoc, C.WorkbenchPhase.BlockStartup);
			},
		),
		define(
			de[1341],
			he([
				1, 0, 4, 9, 6, 23, 163, 33, 717, 247, 1737, 8, 11, 19, 31, 44, 22, 227,
				57, 18, 100, 63, 252, 67, 61, 73, 24, 1246, 165, 59, 245, 3,
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
				L,
				D,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$i2c = void 0),
					(e.$j2c = x),
					(e.$k2c = H);
				const M = (0, t.localize2)(7378, "Local History"),
					N = a.$Kj.has("config.workbench.localHistory.enabled");
				(e.$i2c = (0, t.localize2)(7379, "Compare with File")),
					(0, h.$4X)(
						class extends h.$3X {
							constructor() {
								super({
									id: "workbench.action.localHistory.compareWithFile",
									title: e.$i2c,
									menu: {
										id: h.$XX.TimelineItemContext,
										group: "1_compare",
										order: 1,
										when: T.$f2c,
									},
								});
							}
							async run(G, K) {
								const J = G.get(n.$ek),
									W = G.get(m.$a2c),
									{ entry: X } = await H(W, K);
								if (X)
									return J.executeCommand(
										r.$AWb,
										...x(X, X.workingCopy.resource),
									);
							}
						},
					),
					(0, h.$4X)(
						class extends h.$3X {
							constructor() {
								super({
									id: "workbench.action.localHistory.compareWithPrevious",
									title: (0, t.localize2)(7380, "Compare with Previous"),
									menu: {
										id: h.$XX.TimelineItemContext,
										group: "1_compare",
										order: 2,
										when: T.$f2c,
									},
								});
							}
							async run(G, K) {
								const J = G.get(n.$ek),
									W = G.get(m.$a2c),
									X = G.get(b.$IY),
									{ entry: Y, previous: ie } = await H(W, K);
								if (Y)
									return ie ? J.executeCommand(r.$AWb, ...x(ie, Y)) : z(Y, X);
							}
						},
					);
				let A;
				const R = new a.$5j("localHistoryItemSelectedForCompare", !1, !0);
				(0, h.$4X)(
					class extends h.$3X {
						constructor() {
							super({
								id: "workbench.action.localHistory.selectForCompare",
								title: (0, t.localize2)(7381, "Select for Compare"),
								menu: {
									id: h.$XX.TimelineItemContext,
									group: "2_compare_with",
									order: 2,
									when: T.$f2c,
								},
							});
						}
						async run(G, K) {
							const J = G.get(m.$a2c),
								W = G.get(a.$6j),
								{ entry: X } = await H(J, K);
							X && ((A = K), R.bindTo(W).set(!0));
						}
					},
				),
					(0, h.$4X)(
						class extends h.$3X {
							constructor() {
								super({
									id: "workbench.action.localHistory.compareWithSelected",
									title: (0, t.localize2)(7382, "Compare with Selected"),
									menu: {
										id: h.$XX.TimelineItemContext,
										group: "2_compare_with",
										order: 1,
										when: a.$Kj.and(T.$f2c, R),
									},
								});
							}
							async run(G, K) {
								const J = G.get(m.$a2c),
									W = G.get(n.$ek);
								if (!A) return;
								const X = (await H(J, A)).entry;
								if (!X) return;
								const { entry: Y } = await H(J, K);
								if (Y) return W.executeCommand(r.$AWb, ...x(X, Y));
							}
						},
					),
					(0, h.$4X)(
						class extends h.$3X {
							constructor() {
								super({
									id: "workbench.action.localHistory.open",
									title: (0, t.localize2)(7383, "Show Contents"),
									menu: {
										id: h.$XX.TimelineItemContext,
										group: "3_contents",
										order: 1,
										when: T.$f2c,
									},
								});
							}
							async run(G, K) {
								const J = G.get(m.$a2c),
									W = G.get(b.$IY),
									{ entry: X } = await H(J, K);
								if (X) return z(X, W);
							}
						},
					);
				const O = (0, t.localize2)(7384, "Restore Contents");
				(0, h.$4X)(
					class extends h.$3X {
						constructor() {
							super({
								id: "workbench.action.localHistory.restoreViaEditor",
								title: O,
								menu: {
									id: h.$XX.EditorTitle,
									group: "navigation",
									order: -10,
									when: s.$BQb.Scheme.isEqualTo(u.$c2c.SCHEMA),
								},
								icon: T.$h2c,
							});
						}
						async run(G, K) {
							const { associatedResource: J, location: W } =
								u.$c2c.fromLocalHistoryFileSystem(K);
							return U(G, { uri: J, handle: (0, c.$jh)(W) });
						}
					},
				),
					(0, h.$4X)(
						class extends h.$3X {
							constructor() {
								super({
									id: "workbench.action.localHistory.restore",
									title: O,
									menu: {
										id: h.$XX.TimelineItemContext,
										group: "3_contents",
										order: 2,
										when: T.$f2c,
									},
								});
							}
							async run(G, K) {
								return U(G, K);
							}
						},
					);
				const B = g.$p1.registerSource(
					"localHistoryRestore.source",
					(0, t.localize)(7358, null),
				);
				async function U(G, K) {
					const J = G.get(p.$ll),
						W = G.get(f.$GO),
						X = G.get(o.$gY),
						Y = G.get(m.$a2c),
						ie = G.get(b.$IY),
						{ entry: ne } = await H(Y, K);
					if (ne) {
						const { confirmed: ee } = await W.confirm({
							type: "warning",
							message: (0, t.localize)(
								7359,
								null,
								(0, c.$kh)(ne.workingCopy.resource),
							),
							detail: (0, t.localize)(7360, null),
							primaryButton: (0, t.localize)(7361, null),
						});
						if (!ee) return;
						const _ = X.getAll(ne.workingCopy.resource);
						if (_)
							for (const te of _)
								te.isDirty() && (await te.revert({ soft: !0 }));
						try {
							await J.cloneFile(ne.location, ne.workingCopy.resource);
						} catch (te) {
							await W.error(
								(0, t.localize)(
									7362,
									null,
									(0, c.$kh)(ne.workingCopy.resource),
								),
								(0, C.$xj)(te),
							);
							return;
						}
						if (_) for (const te of _) await te.revert({ force: !0 });
						await ie.openEditor({ resource: ne.workingCopy.resource }),
							await Y.addEntry(
								{ resource: ne.workingCopy.resource, source: B },
								d.CancellationToken.None,
							),
							await F(ne, ie);
					}
				}
				(0, h.$4X)(
					class extends h.$3X {
						constructor() {
							super({
								id: "workbench.action.localHistory.restoreViaPicker",
								title: (0, t.localize2)(7385, "Find Entry to Restore"),
								f1: !0,
								category: M,
								precondition: N,
							});
						}
						async run(G) {
							const K = G.get(m.$a2c),
								J = G.get(l.$DJ),
								W = G.get($.$QO),
								X = G.get(v.$nM),
								Y = G.get(S.$3N),
								ie = G.get(b.$IY),
								ne = G.get(p.$ll),
								ee = G.get(n.$ek),
								_ = G.get(L.$Feb),
								te = new D.$Zc(),
								Q = te.add(J.createQuickPick());
							let Z = new d.$Ce();
							te.add(Q.onDidHide(() => Z.dispose(!0))), (Q.busy = !0), Q.show();
							const se = new k.$Hc(await K.getAll(Z.token)),
								re = new k.$Hc(
									(0, I.$Lb)(_.getHistory().map(({ resource: ye }) => ye)),
								),
								le = [];
							for (const ye of re) se.has(ye) && (le.push(ye), se.delete(ye));
							le.push(
								...[...se].sort((ye, ue) => (ye.fsPath < ue.fsPath ? -1 : 1)),
							),
								(Q.busy = !1),
								(Q.placeholder = (0, t.localize)(7363, null)),
								(Q.matchOnLabel = !0),
								(Q.matchOnDescription = !0),
								(Q.items = [...le].map((ye) => ({
									resource: ye,
									label: (0, c.$jh)(ye),
									description: Y.getUriLabel((0, c.$mh)(ye), { relative: !0 }),
									iconClasses: (0, y.$BDb)(W, X, ye),
								}))),
								await w.Event.toPromise(Q.onDidAccept),
								te.dispose();
							const oe = (0, I.$Sb)(Q.selectedItems)?.resource;
							if (!oe) return;
							const ae = new D.$Zc(),
								pe = ae.add(J.createQuickPick());
							(Z = new d.$Ce()),
								ae.add(pe.onDidHide(() => Z.dispose(!0))),
								(pe.busy = !0),
								pe.show();
							const $e = await K.getEntries(oe, Z.token);
							(pe.busy = !1),
								(pe.canAcceptInBackground = !0),
								(pe.placeholder = (0, t.localize)(7364, null)),
								(pe.matchOnLabel = !0),
								(pe.matchOnDescription = !0),
								(pe.items = Array.from($e)
									.reverse()
									.map((ye) => ({
										entry: ye,
										label: `$(circle-outline) ${g.$p1.getSourceLabel(ye.source)}`,
										description: V(ye.timestamp),
									}))),
								ae.add(
									pe.onDidAccept(async (ye) => {
										ye.inBackground || ae.dispose();
										const ue = (0, I.$Sb)(pe.selectedItems);
										return ue
											? (await ne.exists(ue.entry.workingCopy.resource))
												? ee.executeCommand(
														r.$AWb,
														...x(ue.entry, ue.entry.workingCopy.resource, {
															preserveFocus: ye.inBackground,
														}),
													)
												: z(ue.entry, ie, { preserveFocus: ye.inBackground })
											: void 0;
									}),
								);
						}
					},
				),
					h.$ZX.appendMenuItem(h.$XX.TimelineTitle, {
						command: {
							id: "workbench.action.localHistory.restoreViaPicker",
							title: (0, t.localize2)(
								7386,
								"Local History: Find Entry to Restore...",
							),
						},
						group: "submenu",
						order: 1,
						when: N,
					}),
					(0, h.$4X)(
						class extends h.$3X {
							constructor() {
								super({
									id: "workbench.action.localHistory.rename",
									title: (0, t.localize2)(7387, "Rename"),
									menu: {
										id: h.$XX.TimelineItemContext,
										group: "5_edit",
										order: 1,
										when: T.$f2c,
									},
								});
							}
							async run(G, K) {
								const J = G.get(m.$a2c),
									W = G.get(l.$DJ),
									{ entry: X } = await H(J, K);
								if (X) {
									const Y = new D.$Zc(),
										ie = Y.add(W.createInputBox());
									(ie.title = (0, t.localize)(7365, null)),
										(ie.ignoreFocusOut = !0),
										(ie.placeholder = (0, t.localize)(7366, null)),
										(ie.value = g.$p1.getSourceLabel(X.source)),
										ie.show(),
										Y.add(
											ie.onDidAccept(() => {
												ie.value &&
													J.updateEntry(
														X,
														{ source: ie.value },
														d.CancellationToken.None,
													),
													Y.dispose();
											}),
										);
								}
							}
						},
					),
					(0, h.$4X)(
						class extends h.$3X {
							constructor() {
								super({
									id: "workbench.action.localHistory.delete",
									title: (0, t.localize2)(7388, "Delete"),
									menu: {
										id: h.$XX.TimelineItemContext,
										group: "5_edit",
										order: 2,
										when: T.$f2c,
									},
								});
							}
							async run(G, K) {
								const J = G.get(m.$a2c),
									W = G.get(b.$IY),
									X = G.get(f.$GO),
									{ entry: Y } = await H(J, K);
								if (Y) {
									const { confirmed: ie } = await X.confirm({
										type: "warning",
										message: (0, t.localize)(
											7367,
											null,
											Y.workingCopy.name,
											V(Y.timestamp),
										),
										detail: (0, t.localize)(7368, null),
										primaryButton: (0, t.localize)(7369, null),
									});
									if (!ie) return;
									await J.removeEntry(Y, d.CancellationToken.None),
										await F(Y, W);
								}
							}
						},
					),
					(0, h.$4X)(
						class extends h.$3X {
							constructor() {
								super({
									id: "workbench.action.localHistory.deleteAll",
									title: (0, t.localize2)(7389, "Delete All"),
									f1: !0,
									category: M,
									precondition: N,
								});
							}
							async run(G) {
								const K = G.get(f.$GO),
									J = G.get(m.$a2c),
									{ confirmed: W } = await K.confirm({
										type: "warning",
										message: (0, t.localize)(7370, null),
										detail: (0, t.localize)(7371, null),
										primaryButton: (0, t.localize)(7372, null),
									});
								W && (await J.removeAll(d.CancellationToken.None));
							}
						},
					),
					(0, h.$4X)(
						class extends h.$3X {
							constructor() {
								super({
									id: "workbench.action.localHistory.create",
									title: (0, t.localize2)(7390, "Create Entry"),
									f1: !0,
									category: M,
									precondition: a.$Kj.and(N, s.$TPb),
								});
							}
							async run(G) {
								const K = G.get(m.$a2c),
									J = G.get(l.$DJ),
									W = G.get(b.$IY),
									X = G.get(S.$3N),
									Y = G.get(P.$I8),
									ie = g.$A1.getOriginalUri(W.activeEditor, {
										supportSideBySide: g.SideBySideEditor.PRIMARY,
									});
								if (
									ie?.scheme !== Y.defaultUriScheme &&
									ie?.scheme !== E.Schemas.vscodeUserData
								)
									return;
								const ne = new D.$Zc(),
									ee = ne.add(J.createInputBox());
								(ee.title = (0, t.localize)(7373, null)),
									(ee.ignoreFocusOut = !0),
									(ee.placeholder = (0, t.localize)(
										7374,
										null,
										X.getUriBasenameLabel(ie),
									)),
									ee.show(),
									ne.add(
										ee.onDidAccept(async () => {
											const _ = ee.value;
											ne.dispose(),
												_ &&
													(await K.addEntry(
														{ resource: ie, source: ee.value },
														d.CancellationToken.None,
													));
										}),
									);
							}
						},
					);
				async function z(G, K, J) {
					const W = u.$c2c.toLocalHistoryFileSystem({
						location: G.location,
						associatedResource: G.workingCopy.resource,
					});
					await K.openEditor({
						resource: W,
						label: (0, t.localize)(
							7375,
							null,
							G.workingCopy.name,
							g.$p1.getSourceLabel(G.source),
							V(G.timestamp),
						),
						options: J,
					});
				}
				async function F(G, K) {
					const J = u.$c2c.toLocalHistoryFileSystem({
							location: G.location,
							associatedResource: G.workingCopy.resource,
						}),
						W = K.findEditors(J, { supportSideBySide: g.SideBySideEditor.ANY });
					await K.closeEditors(W, { preserveFocus: !0 });
				}
				function x(G, K, J) {
					const W = u.$c2c.toLocalHistoryFileSystem({
						location: G.location,
						associatedResource: G.workingCopy.resource,
					});
					let X, Y;
					if (i.URI.isUri(K))
						(Y = K),
							(X = (0, t.localize)(
								7376,
								null,
								G.workingCopy.name,
								g.$p1.getSourceLabel(G.source),
								V(G.timestamp),
								G.workingCopy.name,
							));
					else {
						const ie = K;
						(Y = u.$c2c.toLocalHistoryFileSystem({
							location: ie.location,
							associatedResource: ie.workingCopy.resource,
						})),
							(X = (0, t.localize)(
								7377,
								null,
								G.workingCopy.name,
								g.$p1.getSourceLabel(G.source),
								V(G.timestamp),
								ie.workingCopy.name,
								g.$p1.getSourceLabel(ie.source),
								V(ie.timestamp),
							));
					}
					return [W, Y, X, J ? [void 0, J] : void 0];
				}
				async function H(G, K) {
					const J = await G.getEntries(K.uri, d.CancellationToken.None);
					let W, X;
					for (let Y = 0; Y < J.length; Y++) {
						const ie = J[Y];
						if (ie.id === K.handle) {
							(W = ie), (X = J[Y - 1]);
							break;
						}
					}
					return { entry: W, previous: X };
				}
				const q = /\//g;
				function V(G) {
					return `${(0, T.$d2c)().format(G).replace(q, "-")}`;
				}
			},
		),
		define(
			de[3880],
			he([
				1, 0, 4, 6, 3, 814, 717, 9, 165, 247, 22, 1737, 78, 44, 10, 1341, 94,
				1246, 23, 25, 349,
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
			) {
				"use strict";
				var l;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$l2c = void 0);
				let y = class extends w.$1c {
					static {
						l = this;
					}
					static {
						this.ID = "workbench.contrib.localHistoryTimeline";
					}
					static {
						this.a = "workbench.localHistory.enabled";
					}
					constructor(v, S, I, T, P, k, L) {
						super(),
							(this.f = v),
							(this.g = S),
							(this.h = I),
							(this.j = T),
							(this.m = P),
							(this.n = k),
							(this.q = L),
							(this.id = "timeline.localHistory"),
							(this.label = (0, t.localize)(7391, null)),
							(this.scheme = "*"),
							(this.b = this.D(new i.$re())),
							(this.onDidChange = this.b.event),
							(this.c = this.D(new w.$2c())),
							this.r(),
							this.t();
					}
					r() {
						this.s(),
							this.D(
								this.j.registerProvider(a.$c2c.SCHEMA, new a.$c2c(this.j)),
							);
					}
					s() {
						this.n.getValue(l.a)
							? (this.c.value = this.f.registerTimelineProvider(this))
							: this.c.clear();
					}
					t() {
						this.D(this.g.onDidAddEntry((v) => this.u(v.entry))),
							this.D(this.g.onDidChangeEntry((v) => this.u(v.entry))),
							this.D(this.g.onDidReplaceEntry((v) => this.u(v.entry))),
							this.D(this.g.onDidRemoveEntry((v) => this.u(v.entry))),
							this.D(this.g.onDidRemoveEntries(() => this.u(void 0))),
							this.D(this.g.onDidMoveEntries(() => this.u(void 0))),
							this.D(
								this.n.onDidChangeConfiguration((v) => {
									v.affectsConfiguration(l.a) && this.s();
								}),
							);
					}
					u(v) {
						this.b.fire({
							id: this.id,
							uri: v?.workingCopy.resource,
							reset: !0,
						});
					}
					async provideTimeline(v, S, I) {
						const T = [];
						let P;
						if (
							(v.scheme === a.$c2c.SCHEMA
								? (P = a.$c2c.fromLocalHistoryFileSystem(v).associatedResource)
								: v.scheme === this.h.defaultUriScheme ||
										v.scheme === f.Schemas.vscodeUserData
									? (P = v)
									: this.j.hasProvider(v) &&
										(P = d.URI.from({
											scheme: this.h.defaultUriScheme,
											authority:
												this.m.remoteAuthority ??
												(0, s.$G8)(this.q.getWorkspace()),
											path: v.path,
										})),
							P)
						) {
							const k = await this.g.getEntries(P, I);
							for (const L of k) T.push(this.w(L));
						}
						return { source: this.id, items: T };
					}
					w(v) {
						return {
							handle: v.id,
							label: c.$p1.getSourceLabel(v.source),
							tooltip: new p.$cl(
								`$(history) ${(0, o.$d2c)().format(v.timestamp)}

${c.$p1.getSourceLabel(v.source)}${v.sourceDescription ? ` (${v.sourceDescription})` : ""}`,
								{ supportThemeIcons: !0 },
							),
							source: this.id,
							timestamp: v.timestamp,
							themeIcon: o.$g2c,
							contextValue: o.$e2c,
							command: {
								id: r.$AWb,
								title: g.$i2c.value,
								arguments: (0, g.$j2c)(v, v.workingCopy.resource),
							},
						};
					}
				};
				(e.$l2c = y),
					(e.$l2c =
						y =
						l =
							Ne(
								[
									j(0, E.$57),
									j(1, C.$a2c),
									j(2, m.$I8),
									j(3, u.$ll),
									j(4, h.$r8),
									j(5, n.$gj),
									j(6, b.$Vi),
								],
								y,
							));
			},
		),
		