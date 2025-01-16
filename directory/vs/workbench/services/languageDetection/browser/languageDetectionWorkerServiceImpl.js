define(
			de[3399],
			he([
				1, 0, 3, 474, 23, 78, 10, 61, 9, 12, 20, 67, 32, 768, 25, 18, 21, 59,
				34, 455, 540, 935, 3398,
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
					(e.$ryc = e.$qyc = void 0);
				const v = 12,
					S = `${w.$3g}/vscode-regexp-languagedetection`,
					I = `${w.$4g}/vscode-regexp-languagedetection`,
					T = `${w.$3g}/@vscode/vscode-languagedetection`,
					P = `${w.$4g}/@vscode/vscode-languagedetection`;
				let k = class extends t.$1c {
					static {
						$ = this;
					}
					static {
						this.enablementSettingKey = "workbench.editor.languageDetection";
					}
					static {
						this.historyBasedEnablementConfig =
							"workbench.editor.historyBasedLanguageDetection";
					}
					static {
						this.preferHistoryConfig =
							"workbench.editor.preferHistoryBasedLanguageDetection";
					}
					static {
						this.workspaceOpenedLanguagesStorageKey =
							"workbench.editor.languageDetectionOpenedLanguages.workspace";
					}
					static {
						this.globalOpenedLanguagesStorageKey =
							"workbench.editor.languageDetectionOpenedLanguages.global";
					}
					constructor(M, N, A, R, O, B, U, z, F, x) {
						super(),
							(this.n = M),
							(this.q = A),
							(this.r = R),
							(this.s = O),
							(this.t = U),
							(this.u = x),
							(this.b = !1),
							(this.c = new Set()),
							(this.f = new Set()),
							(this.g = new o.$Jc(v)),
							(this.h = new o.$Jc(v)),
							(this.j = !0),
							(this.m = {});
						const H = b.$W && this.n.isBuilt && !r.$r;
						(this.a = this.D(
							new L(
								B,
								N,
								z,
								H
									? w.$7g.asBrowserUri(`${P}/dist/lib/index.js`).toString(!0)
									: w.$7g.asBrowserUri(`${T}/dist/lib/index.js`).toString(!0),
								H
									? w.$7g.asBrowserUri(`${P}/model/model.json`).toString(!0)
									: w.$7g.asBrowserUri(`${T}/model/model.json`).toString(!0),
								H
									? w.$7g
											.asBrowserUri(`${P}/model/group1-shard1of1.bin`)
											.toString(!0)
									: w.$7g
											.asBrowserUri(`${T}/model/group1-shard1of1.bin`)
											.toString(!0),
								H
									? w.$7g.asBrowserUri(`${I}/dist/index.js`).toString(!0)
									: w.$7g.asBrowserUri(`${S}/dist/index.js`).toString(!0),
							),
						)),
							this.z(F);
					}
					async w() {
						if (this.b) return;
						this.b = !0;
						const M = await this.r.getWorkspaceFileExtensions(
							this.s.getWorkspace(),
						);
						let N = 0;
						for (const A of M.extensions) {
							const R = this.a.getLanguageId(A);
							if (R && N < v && (this.c.add(R), N++, N > v)) break;
						}
						this.j = !0;
					}
					isEnabledForLanguage(M) {
						return (
							!!M &&
							this.q.getValue($.enablementSettingKey, { overrideIdentifier: M })
						);
					}
					y() {
						if (!this.j) return this.m;
						const M = {};
						return (
							this.f.forEach((N) => (M[N] = (M[N] ?? 0) + 7)),
							this.c.forEach((N) => (M[N] = (M[N] ?? 0) + 5)),
							[...this.h.keys()].forEach((N) => (M[N] = (M[N] ?? 0) + 3)),
							[...this.g.keys()].forEach((N) => (M[N] = (M[N] ?? 0) + 1)),
							this.u.trace("Session Languages:", JSON.stringify([...this.f])),
							this.u.trace("Workspace Languages:", JSON.stringify([...this.c])),
							this.u.trace(
								"Historical Workspace Opened Languages:",
								JSON.stringify([...this.h.keys()]),
							),
							this.u.trace(
								"Historical Globally Opened Languages:",
								JSON.stringify([...this.g.keys()]),
							),
							this.u.trace(
								"Computed Language Detection Biases:",
								JSON.stringify(M),
							),
							(this.j = !1),
							(this.m = M),
							M
						);
					}
					async detectLanguage(M, N) {
						const A = this.q.getValue($.historyBasedEnablementConfig),
							R = this.q.getValue($.preferHistoryConfig);
						A && (await this.w());
						const O = A ? this.y() : void 0;
						return this.a.detectLanguage(M, O, R, N);
					}
					z(M) {
						try {
							const N = JSON.parse(
								M.get(
									$.globalOpenedLanguagesStorageKey,
									p.StorageScope.PROFILE,
									"[]",
								),
							);
							this.g.fromJSON(N);
						} catch (N) {
							console.error(N);
						}
						try {
							const N = JSON.parse(
								M.get(
									$.workspaceOpenedLanguagesStorageKey,
									p.StorageScope.WORKSPACE,
									"[]",
								),
							);
							this.h.fromJSON(N);
						} catch (N) {
							console.error(N);
						}
						this.D(
							this.t.onDidActiveEditorChange(() => {
								const N = this.t.activeTextEditorLanguageId;
								N &&
									this.t.activeEditor?.resource?.scheme !==
										w.Schemas.untitled &&
									(this.f.add(N),
									this.g.set(N, !0),
									this.h.set(N, !0),
									M.store(
										$.globalOpenedLanguagesStorageKey,
										JSON.stringify(this.g.toJSON()),
										p.StorageScope.PROFILE,
										p.StorageTarget.MACHINE,
									),
									M.store(
										$.workspaceOpenedLanguagesStorageKey,
										JSON.stringify(this.h.toJSON()),
										p.StorageScope.WORKSPACE,
										p.StorageTarget.MACHINE,
									),
									(this.j = !0));
							}),
						);
					}
				};
				(e.$qyc = k),
					(e.$qyc =
						k =
						$ =
							Ne(
								[
									j(0, E.$r8),
									j(1, d.$nM),
									j(2, C.$gj),
									j(3, c.$8m),
									j(4, n.$Vi),
									j(5, a.$QO),
									j(6, g.$IY),
									j(7, h.$km),
									j(8, p.$lq),
									j(9, f.$ik),
								],
								k,
							));
				class L extends t.$1c {
					constructor(M, N, A, R, O, B, U) {
						super(),
							(this.b = M),
							(this.c = N),
							(this.f = A),
							(this.g = R),
							(this.h = O),
							(this.j = B),
							(this.m = U);
					}
					n() {
						if (!this.a) {
							const M = this.D(
								(0, s.$ijb)(
									"vs/workbench/services/languageDetection/browser/languageDetectionSimpleWorker",
									"LanguageDetectionWorker",
								),
							);
							y.$pyc.setChannel(M, {
								$getIndexJsUri: async () => this.getIndexJsUri(),
								$getLanguageId: async (A) => this.getLanguageId(A),
								$sendTelemetryEvent: async (A, R, O) =>
									this.sendTelemetryEvent(A, R, O),
								$getRegexpModelUri: async () => this.getRegexpModelUri(),
								$getModelJsonUri: async () => this.getModelJsonUri(),
								$getWeightsUri: async () => this.getWeightsUri(),
							});
							const N = l.$wxb.create(M, this.b);
							this.a = { workerClient: M, workerTextModelSyncClient: N };
						}
						return this.a;
					}
					q(M) {
						const N = this.c.guessLanguageIdByFilepathOrFirstLine(M);
						if (N && N !== "unknown") return N;
					}
					async getIndexJsUri() {
						return this.g;
					}
					getLanguageId(M) {
						if (!M) return;
						if (this.c.isRegisteredLanguageId(M)) return M;
						const N = this.q(m.URI.file(`file.${M}`));
						if (!(!N || N === "unknown")) return N;
					}
					async getModelJsonUri() {
						return this.h;
					}
					async getWeightsUri() {
						return this.j;
					}
					async getRegexpModelUri() {
						return this.m;
					}
					async sendTelemetryEvent(M, N, A) {
						this.f.publicLog2(i.$UO, {
							languages: M.join(","),
							confidences: N.join(","),
							timeSpent: A,
						});
					}
					async detectLanguage(M, N, A, R) {
						const O = Date.now(),
							B = this.q(M);
						if (B) return B;
						const { workerClient: U, workerTextModelSyncClient: z } = this.n();
						await z.ensureSyncedResources([M]);
						const F = await U.proxy.$detectLanguage(M.toString(), N, A, R),
							x = this.getLanguageId(F);
						return (
							this.f.publicLog2("automaticlanguagedetection.perf", {
								timeSpent: Date.now() - O,
								detection: x || "unknown",
							}),
							x
						);
					}
				}
				(e.$ryc = L), (0, u.$lK)(i.$RO, k, u.InstantiationType.Eager);
			},
		),
		