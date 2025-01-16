define(
		de[715],
		he([
			1, 0, 7, 3, 280, 20, 5, 45, 134, 25, 65, 204, 359, 42, 7, 66, 18, 41,
			1728, 22, 9, 1325, 2423,
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
		) {
			"use strict";
			var y;
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$dEb = e.$cEb = void 0),
				(n = mt(n)),
				(l = xi(l)),
				(e.$cEb = (0, C.$Mi)("contextGraphService"));
			let $ = class extends i.$1c {
				static {
					y = this;
				}
				static {
					this.j = 5 * 60 * 1e3;
				}
				constructor(S, I, T, P, k, L, D, M, N, A, R) {
					super(),
						(this.m = S),
						(this.n = I),
						(this.q = T),
						(this.r = P),
						(this.s = k),
						(this.t = L),
						(this.u = D),
						(this.w = M),
						(this.y = N),
						(this.z = A),
						(this.C = R),
						(this.a = []),
						(this.b = []),
						(this.c = []),
						(this.f = null),
						(this.g = null),
						(this.h = null),
						this.D(
							this.m.onChangeEffectManuallyDisposed({
								deps: [
									() =>
										this.m.applicationUserPersistentStorage
											.shouldHotReloadContextGraphRelatedFiles,
								],
								onChange: () => {
									this.m.applicationUserPersistentStorage
										.shouldHotReloadContextGraphRelatedFiles
										? (this.I(), this.H())
										: (this.I(), this.F());
								},
							}),
						),
						this.m.applicationUserPersistentStorage
							.shouldHotReloadContextGraphRelatedFiles && this.H();
				}
				async updateCurrentEditorRelatedFiles() {
					const I = (
						this.r.getActiveCodeEditor() || this.r.getFocusedCodeEditor()
					)?.getModel();
					if (!I) return;
					const T = await this.getRelatedFiles({
						uri: I.uri,
						maxNumFiles: f.$aEb,
					});
					this.m.setNonPersistentStorage("contextGraphState", "relatedFiles", {
						baseRelativePath: this.q.asRelativePath(I.uri),
						nodes: T.map((P) => ({
							relativePath: this.q.asRelativePath(P.uri),
							weight: P.weight,
						})),
					});
				}
				F() {
					this.m.setNonPersistentStorage(
						"contextGraphState",
						"relatedFiles",
						null,
					);
				}
				dispose() {
					this.b.forEach((S) => S.dispose()), (this.b = []), super.dispose();
				}
				async getRelatedFiles({ uri: S, maxNumFiles: I }) {
					const T = await this.n.provider?.runCommand(
						m.ContextGraphActions.GetRelatedFiles,
						{ absolutePath: S.fsPath, maxNumFiles: I },
					);
					if (!T) return [];
					const P = await this.G(),
						k = (0, l.default)().add(P);
					return T.filter((L) => {
						const D = s.URI.file(L.absolutePath),
							M = this.q.asRelativePath(D);
						return M !== D.fsPath && !k.ignores(M);
					}).map((L) => ({
						uri: s.URI.file(L.absolutePath),
						weight: L.weight,
					}));
				}
				async getWorkspaceContextSyncStatus() {
					const S = this.n.provider;
					return S
						? ((await S.runCommand(
								m.ContextGraphActions.GetWorkspaceSyncStatus,
								{},
							)) ?? null)
						: null;
				}
				async G() {
					const S = Date.now();
					return this.f !== null && this.h !== null && S - this.h < y.j
						? this.f
						: (this.h !== null &&
								S - this.h >= y.j &&
								((this.f = null), (this.g = null)),
							this.g
								? this.g
								: ((this.g = (async () => {
										const I = this.q
											.getWorkspace()
											.folders[0].toResource(".cursorignore");
										try {
											const T = await this.C.readFile(I);
											this.f = T.value.toString().split(`
`);
										} catch {
											this.f = [];
										}
										return (this.h = Date.now()), this.f;
									})()),
									this.g));
				}
				H() {
					this.b.push(
						this.t.onDidActiveEditorChange(() => {
							this.a.forEach((P) => P.dispose()), (this.a.length = 0);
							const T =
								this.r.getActiveCodeEditor() || this.r.getFocusedCodeEditor();
							T &&
								this.a.push(
									T.onDidChangeModel((P) => {
										this.updateCurrentEditorRelatedFiles();
									}),
								),
								this.updateCurrentEditorRelatedFiles();
						}),
					);
					const S = (T) => {
							if (!T.altKey) return;
							const P =
								this.m.nonPersistentStorage.contextGraphState?.relatedFiles;
							if (!P) return;
							const k = parseInt(T.code.replace("Digit", ""), 10);
							if (k <= 0 || k > f.$_Db) return;
							const L = P.nodes[k - 1];
							L &&
								(T.preventDefault(),
								T.stopImmediatePropagation(),
								this.z.open(this.q.resolveRelativePath(L.relativePath), {
									editorOptions: { pinned: !1, revealIfOpened: !0 },
								}));
						},
						I = (0, t.getWindows)();
					for (const T of I)
						this.c.push(n.$0fb(T.window.document, "keydown", S));
				}
				I() {
					this.a.forEach((S) => S.dispose()),
						(this.a.length = 0),
						this.b.forEach((S) => S.dispose()),
						(this.b.length = 0),
						this.c.forEach((S) => S.dispose()),
						(this.c.length = 0);
				}
			};
			(e.$dEb = $),
				(e.$dEb =
					$ =
					y =
						Ne(
							[
								j(0, d.$0zb),
								j(1, w.$3Db),
								j(2, r.$Vi),
								j(3, u.$dtb),
								j(4, g.$EY),
								j(5, p.$IY),
								j(6, a.$9Db),
								j(7, h.$$Db),
								j(8, c.$MO),
								j(9, o.$7rb),
								j(10, b.$ll),
							],
							$,
						)),
				(0, E.$lK)(e.$cEb, $, E.InstantiationType.Delayed);
		},
	),
		