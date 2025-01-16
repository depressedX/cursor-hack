define(
			de[1830],
			he([
				1, 0, 56, 46, 71, 4, 8, 63, 33, 5, 674, 17, 32, 109, 30, 81, 55, 52, 53,
				3, 10, 40, 61, 157, 602, 57, 69, 1024, 18, 31, 47,
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
			) {
				"use strict";
				var D;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$sIc = void 0),
					(E = mt(E));
				let M = class extends b.$1c {
					static {
						D = this;
					}
					static {
						this.configName = "editor.defaultFormatter";
					}
					static {
						this.extensionIds = [];
					}
					static {
						this.extensionItemLabels = [];
					}
					static {
						this.extensionDescriptions = [];
					}
					constructor(O, B, U, z, F, x, H, q, V, G) {
						super(),
							(this.f = O),
							(this.g = B),
							(this.h = U),
							(this.j = z),
							(this.m = F),
							(this.n = x),
							(this.q = H),
							(this.r = q),
							(this.t = V),
							(this.u = G),
							(this.c = this.B.add(new b.$Zc())),
							this.B.add(this.f.onDidChangeExtensions(this.w, this)),
							this.B.add(
								u.$Khc.setFormatterSelector((K, J, W, X) => this.z(K, J, W, X)),
							),
							this.B.add(G.onDidActiveEditorChange(this.F, this)),
							this.B.add(
								q.documentFormattingEditProvider.onDidChange(this.F, this),
							),
							this.B.add(
								q.documentRangeFormattingEditProvider.onDidChange(this.F, this),
							),
							this.B.add(
								U.onDidChangeConfiguration(
									(K) => K.affectsConfiguration(D.configName) && this.F(),
								),
							),
							this.w();
					}
					async w() {
						await this.f.whenInstalledExtensionsRegistered();
						let O = [...this.f.extensions];
						(O = O.sort((B, U) => {
							const z = B.categories?.find(
									(x) => x === "Formatters" || x === "Programming Languages",
								),
								F = U.categories?.find(
									(x) => x === "Formatters" || x === "Programming Languages",
								);
							return z && !F ? -1 : !z && F ? 1 : B.name.localeCompare(U.name);
						})),
							(D.extensionIds.length = 0),
							(D.extensionItemLabels.length = 0),
							(D.extensionDescriptions.length = 0),
							D.extensionIds.push(null),
							D.extensionItemLabels.push(E.localize(7043, null)),
							D.extensionDescriptions.push(E.localize(7044, null));
						for (const B of O)
							(B.main || B.browser) &&
								(D.extensionIds.push(B.identifier.value),
								D.extensionItemLabels.push(B.displayName ?? ""),
								D.extensionDescriptions.push(B.description ?? ""));
					}
					static _maybeQuotes(O) {
						return O.match(/\s/) ? `'${O}'` : O;
					}
					async y(O, B, U) {
						const z = this.h.getValue(D.configName, {
							resource: U.uri,
							overrideIdentifier: U.getLanguageId(),
						});
						if (z) {
							const H = B.find((V) => c.$Gn.equals(V.extensionId, z));
							if (H) return H;
							const q = await this.f.getExtension(z);
							if (q && this.g.isEnabled((0, f.$x2)(q))) {
								const V =
									this.q.getLanguageName(U.getLanguageId()) ||
									U.getLanguageId();
								return O === u.FormattingKind.File
									? E.localize(7045, null, q.displayName || q.name, V)
									: E.localize(7046, null, q.displayName || q.name, V);
							}
						} else if (B.length === 1) return B[0];
						const F =
							this.q.getLanguageName(U.getLanguageId()) || U.getLanguageId();
						return z
							? E.localize(7048, null, z)
							: E.localize(7047, null, D._maybeQuotes(F));
					}
					async z(O, B, U, z) {
						const F = await this.y(z, O, B);
						if (typeof F != "string") return F;
						if (U !== u.FormattingMode.Silent) {
							const { confirmed: x } = await this.m.confirm({
								message: E.localize(7049, null),
								detail: F,
								primaryButton: E.localize(7050, null),
							});
							if (x) return this.C(O, B);
						} else
							this.j.prompt(
								l.Severity.Info,
								F,
								[{ label: E.localize(7051, null), run: () => this.C(O, B) }],
								{ priority: l.NotificationPriority.SILENT },
							);
					}
					async C(O, B) {
						const U = O.map((x, H) => ({
								index: H,
								label:
									x.displayName || (x.extensionId ? x.extensionId.value : "?"),
								description: x.extensionId && x.extensionId.value,
							})),
							z =
								this.q.getLanguageName(B.getLanguageId()) || B.getLanguageId(),
							F = await this.n.pick(U, {
								placeHolder: E.localize(7052, null, D._maybeQuotes(z)),
							});
						if (!(!F || !O[F.index].extensionId))
							return (
								this.h.updateValue(D.configName, O[F.index].extensionId.value, {
									resource: B.uri,
									overrideIdentifier: B.getLanguageId(),
								}),
								O[F.index]
							);
					}
					F() {
						this.c.clear();
						const O = (0, t.$btb)(this.u.activeTextEditorControl);
						if (!O || !O.hasModel()) return;
						const B = O.getModel(),
							U = (0, u.$Jhc)(
								this.r.documentFormattingEditProvider,
								this.r.documentRangeFormattingEditProvider,
								B,
							);
						if (U.length === 0) return;
						const z = new m.$Ce();
						this.c.add((0, b.$Yc)(() => z.dispose(!0))),
							this.y(u.FormattingKind.File, U, B).then((F) => {
								if (z.token.isCancellationRequested || typeof F != "string")
									return;
								const x = {
									id: `formatter/configure/dfl/${(0, L.$9g)()}`,
									title: E.localize(7053, null),
								};
								this.c.add(k.$fk.registerCommand(x.id, () => this.C(U, B))),
									this.c.add(
										this.t.addStatus({
											id: "formatter.conflict",
											name: E.localize(7054, null),
											selector: {
												language: B.getLanguageId(),
												pattern: B.uri.fsPath,
											},
											severity: l.Severity.Error,
											label: E.localize(7055, null),
											detail: F,
											busy: !1,
											source: "",
											command: x,
											accessibilityInfo: void 0,
										}),
									);
							});
					}
				};
				(e.$sIc = M),
					(e.$sIc =
						M =
						D =
							Ne(
								[
									j(0, f.$q2),
									j(1, $.$IQb),
									j(2, s.$gj),
									j(3, l.$4N),
									j(4, S.$GO),
									j(5, d.$DJ),
									j(6, y.$nM),
									j(7, I.$k3),
									j(8, T.$c8),
									j(9, P.$IY),
								],
								M,
							)),
					n.$Io
						.as(p.Extensions.Workbench)
						.registerWorkbenchContribution(M, o.LifecyclePhase.Restored),
					n.$Io
						.as(g.$No.Configuration)
						.registerConfiguration({
							...v.$DAb,
							properties: {
								[M.configName]: {
									description: E.localize(7056, null),
									type: ["string", "null"],
									default: null,
									enum: M.extensionIds,
									enumItemLabels: M.extensionItemLabels,
									markdownEnumDescriptions: M.extensionDescriptions,
								},
							},
						});
				function N(R, O, B, U) {
					function z(F) {
						return F.extensionId ? c.$Gn.toKey(F.extensionId) : "unknown";
					}
					R.publicLog2("formatterpick", {
						mode: O,
						extensions: B.map(z),
						pick: U ? z(U) : "none",
					});
				}
				async function A(R, O, B) {
					const U = R.get(d.$DJ),
						z = R.get(s.$gj),
						F = R.get(y.$nM),
						x = { resource: O.uri, overrideIdentifier: O.getLanguageId() },
						H = z.getValue(M.configName, x);
					let q;
					const V = B.map((J, W) => {
							const X = c.$Gn.equals(J.extensionId, H),
								Y = {
									index: W,
									label: J.displayName || "",
									description: X ? E.localize(7057, null) : void 0,
								};
							return X && (q = Y), Y;
						}),
						G = { label: E.localize(7058, null) },
						K = await U.pick([...V, { type: "separator" }, G], {
							placeHolder: E.localize(7059, null),
							activeItem: q,
						});
					if (K)
						if (K === G) {
							const J =
									F.getLanguageName(O.getLanguageId()) || O.getLanguageId(),
								W = await U.pick(V, {
									placeHolder: E.localize(7060, null, M._maybeQuotes(J)),
								});
							W &&
								B[W.index].extensionId &&
								z.updateValue(M.configName, B[W.index].extensionId.value, x);
							return;
						} else return K.index;
					else return;
				}
				(0, i.$ntb)(
					class extends i.$itb {
						constructor() {
							super({
								id: "editor.action.formatDocument.multiple",
								label: E.localize(7061, null),
								alias: "Format Document...",
								precondition: C.$Kj.and(
									w.EditorContextKeys.writable,
									w.EditorContextKeys.hasMultipleDocumentFormattingProvider,
								),
								contextMenuOpts: { group: "1_modification", order: 1.3 },
							});
						}
						async run(O, B, U) {
							if (!B.hasModel()) return;
							const z = O.get(r.$Li),
								F = O.get(h.$km),
								x = O.get(I.$k3),
								H = B.getModel(),
								q = (0, u.$Jhc)(
									x.documentFormattingEditProvider,
									x.documentRangeFormattingEditProvider,
									H,
								),
								V = await z.invokeFunction(A, H, q);
							typeof V == "number" &&
								(await z.invokeFunction(
									u.$Ohc,
									q[V],
									B,
									u.FormattingMode.Explicit,
									m.CancellationToken.None,
								)),
								N(F, "document", q, (typeof V == "number" && q[V]) || void 0);
						}
					},
				),
					(0, i.$ntb)(
						class extends i.$itb {
							constructor() {
								super({
									id: "editor.action.formatSelection.multiple",
									label: E.localize(7062, null),
									alias: "Format Code...",
									precondition: C.$Kj.and(
										C.$Kj.and(w.EditorContextKeys.writable),
										w.EditorContextKeys
											.hasMultipleDocumentSelectionFormattingProvider,
									),
									contextMenuOpts: {
										when: C.$Kj.and(w.EditorContextKeys.hasNonEmptySelection),
										group: "1_modification",
										order: 1.31,
									},
								});
							}
							async run(O, B) {
								if (!B.hasModel()) return;
								const U = O.get(r.$Li),
									z = O.get(I.$k3),
									F = O.get(h.$km),
									x = B.getModel();
								let H = B.getSelection();
								H.isEmpty() &&
									(H = new a.$iL(
										H.startLineNumber,
										1,
										H.startLineNumber,
										x.getLineMaxColumn(H.startLineNumber),
									));
								const q = z.documentRangeFormattingEditProvider.ordered(x),
									V = await U.invokeFunction(A, x, q);
								typeof V == "number" &&
									(await U.invokeFunction(
										u.$Mhc,
										q[V],
										B,
										H,
										m.CancellationToken.None,
										!0,
									)),
									N(F, "range", q, (typeof V == "number" && q[V]) || void 0);
							}
						},
					);
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	