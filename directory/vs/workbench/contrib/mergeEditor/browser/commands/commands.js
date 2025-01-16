define(
			de[3867],
			he([1, 0, 14, 19, 9, 4, 11, 8, 57, 41, 21, 711, 1050, 687, 18]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$dSc =
						e.$cSc =
						e.$bSc =
						e.$aSc =
						e.$_Rc =
						e.$$Rc =
						e.$0Rc =
						e.$9Rc =
						e.$8Rc =
						e.$7Rc =
						e.$6Rc =
						e.$5Rc =
						e.$4Rc =
						e.$3Rc =
						e.$2Rc =
						e.$1Rc =
						e.$ZRc =
						e.$YRc =
						e.$XRc =
						e.$WRc =
							void 0);
				class g extends C.$3X {
					constructor(x) {
						super(x);
					}
					run(x) {
						const { activeEditorPane: H } = x.get(n.$IY);
						if (H instanceof h.$TRc) {
							const q = H.viewModel.get();
							if (!q) return;
							this.runWithViewModel(q, x);
						}
					}
				}
				class p extends C.$3X {
					constructor(x) {
						super(x);
					}
					run(x, ...H) {
						const { activeEditorPane: q } = x.get(n.$IY);
						if (q instanceof h.$TRc) {
							const V = q.viewModel.get();
							return V
								? this.runWithMergeEditor(
										{
											viewModel: V,
											inputModel: q.inputModel.get(),
											input: q.input,
											editorIdentifier: {
												editor: q.input,
												groupId: q.group.id,
											},
										},
										x,
										...H,
									)
								: void 0;
						}
					}
				}
				class o extends C.$3X {
					constructor() {
						super({
							id: "_open.mergeEditor",
							title: (0, E.localize2)(7554, "Open Merge Editor"),
						});
					}
					run(x, ...H) {
						const q = f.validate(H[0]),
							V = {
								base: { resource: q.base },
								input1: {
									resource: q.input1.uri,
									label: q.input1.title,
									description: q.input1.description,
									detail: q.input1.detail,
								},
								input2: {
									resource: q.input2.uri,
									label: q.input2.title,
									description: q.input2.description,
									detail: q.input2.detail,
								},
								result: { resource: q.output },
								options: { preserveFocus: !0 },
							};
						x.get(n.$IY).openEditor(V);
					}
				}
				e.$WRc = o;
				var f;
				(function (F) {
					function x(G) {
						if (!G || typeof G != "object")
							throw new TypeError("invalid argument");
						const K = G,
							J = q(K.base),
							W = q(K.output),
							X = H(K.input1),
							Y = H(K.input2);
						return { base: J, input1: X, input2: Y, output: W };
					}
					F.validate = x;
					function H(G) {
						if (typeof G == "string")
							return new a.$Dnc(w.URI.parse(G, !0), void 0, void 0, void 0);
						if (!G || typeof G != "object")
							throw new TypeError("invalid argument");
						if (V(G))
							return new a.$Dnc(w.URI.revive(G), void 0, void 0, void 0);
						const K = G,
							J = K.title,
							W = q(K.uri),
							X = K.detail,
							Y = K.description;
						return new a.$Dnc(W, J, X, Y);
					}
					function q(G) {
						if (typeof G == "string") return w.URI.parse(G, !0);
						if (G && typeof G == "object") return w.URI.revive(G);
						throw new TypeError("invalid argument");
					}
					function V(G) {
						if (!G || typeof G != "object") return !1;
						const K = G;
						return (
							typeof K.scheme == "string" &&
							typeof K.authority == "string" &&
							typeof K.path == "string" &&
							typeof K.query == "string" &&
							typeof K.fragment == "string"
						);
					}
				})(f || (f = {}));
				class b extends C.$3X {
					constructor() {
						super({
							id: "merge.mixedLayout",
							title: (0, E.localize2)(7555, "Mixed Layout"),
							toggled: c.$a1b.isEqualTo("mixed"),
							menu: [
								{
									id: C.$XX.EditorTitle,
									when: c.$$Zb,
									group: "1_merge",
									order: 9,
								},
							],
							precondition: c.$$Zb,
						});
					}
					run(x) {
						const { activeEditorPane: H } = x.get(n.$IY);
						H instanceof h.$TRc && H.setLayoutKind("mixed");
					}
				}
				e.$XRc = b;
				class s extends C.$3X {
					constructor() {
						super({
							id: "merge.columnLayout",
							title: (0, E.localize2)(7556, "Column Layout"),
							toggled: c.$a1b.isEqualTo("columns"),
							menu: [
								{
									id: C.$XX.EditorTitle,
									when: c.$$Zb,
									group: "1_merge",
									order: 10,
								},
							],
							precondition: c.$$Zb,
						});
					}
					run(x) {
						const { activeEditorPane: H } = x.get(n.$IY);
						H instanceof h.$TRc && H.setLayoutKind("columns");
					}
				}
				e.$YRc = s;
				class l extends C.$3X {
					constructor() {
						super({
							id: "merge.showNonConflictingChanges",
							title: (0, E.localize2)(7557, "Show Non-Conflicting Changes"),
							toggled: c.$d1b.isEqualTo(!0),
							menu: [
								{
									id: C.$XX.EditorTitle,
									when: c.$$Zb,
									group: "3_merge",
									order: 9,
								},
							],
							precondition: c.$$Zb,
						});
					}
					run(x) {
						const { activeEditorPane: H } = x.get(n.$IY);
						H instanceof h.$TRc && H.toggleShowNonConflictingChanges();
					}
				}
				e.$ZRc = l;
				class y extends C.$3X {
					constructor() {
						super({
							id: "merge.showBase",
							title: (0, E.localize2)(7558, "Show Base"),
							toggled: c.$b1b.isEqualTo(!0),
							menu: [
								{
									id: C.$XX.EditorTitle,
									when: d.$Kj.and(c.$$Zb, c.$a1b.isEqualTo("columns")),
									group: "2_merge",
									order: 9,
								},
							],
						});
					}
					run(x) {
						const { activeEditorPane: H } = x.get(n.$IY);
						H instanceof h.$TRc && H.toggleBase();
					}
				}
				e.$1Rc = y;
				class $ extends C.$3X {
					constructor() {
						super({
							id: "merge.showBaseTop",
							title: (0, E.localize2)(7559, "Show Base Top"),
							toggled: d.$Kj.and(c.$b1b, c.$c1b),
							menu: [
								{
									id: C.$XX.EditorTitle,
									when: d.$Kj.and(c.$$Zb, c.$a1b.isEqualTo("mixed")),
									group: "2_merge",
									order: 10,
								},
							],
						});
					}
					run(x) {
						const { activeEditorPane: H } = x.get(n.$IY);
						H instanceof h.$TRc && H.toggleShowBaseTop();
					}
				}
				e.$2Rc = $;
				class v extends C.$3X {
					constructor() {
						super({
							id: "merge.showBaseCenter",
							title: (0, E.localize2)(7560, "Show Base Center"),
							toggled: d.$Kj.and(c.$b1b, c.$c1b.negate()),
							menu: [
								{
									id: C.$XX.EditorTitle,
									when: d.$Kj.and(c.$$Zb, c.$a1b.isEqualTo("mixed")),
									group: "2_merge",
									order: 11,
								},
							],
						});
					}
					run(x) {
						const { activeEditorPane: H } = x.get(n.$IY);
						H instanceof h.$TRc && H.toggleShowBaseCenter();
					}
				}
				e.$3Rc = v;
				const S = (0, E.localize2)(7561, "Merge Editor");
				class I extends g {
					constructor() {
						super({
							id: "merge.openResult",
							icon: t.$ak.goToFile,
							title: (0, E.localize2)(7562, "Open File"),
							category: S,
							menu: [
								{
									id: C.$XX.EditorTitle,
									when: c.$$Zb,
									group: "navigation",
									order: 1,
								},
							],
							precondition: c.$$Zb,
						});
					}
					runWithViewModel(x, H) {
						H.get(n.$IY).openEditor({ resource: x.model.resultTextModel.uri });
					}
				}
				e.$4Rc = I;
				class T extends g {
					constructor() {
						super({
							id: "merge.goToNextUnhandledConflict",
							category: S,
							title: (0, E.localize2)(7563, "Go to Next Unhandled Conflict"),
							icon: t.$ak.arrowDown,
							menu: [
								{
									id: C.$XX.EditorTitle,
									when: c.$$Zb,
									group: "navigation",
									order: 3,
								},
							],
							f1: !0,
							precondition: c.$$Zb,
						});
					}
					runWithViewModel(x) {
						x.model.telemetry.reportNavigationToNextConflict(),
							x.goToNextModifiedBaseRange((H) => !x.model.isHandled(H).get());
					}
				}
				e.$5Rc = T;
				class P extends g {
					constructor() {
						super({
							id: "merge.goToPreviousUnhandledConflict",
							category: S,
							title: (0, E.localize2)(
								7564,
								"Go to Previous Unhandled Conflict",
							),
							icon: t.$ak.arrowUp,
							menu: [
								{
									id: C.$XX.EditorTitle,
									when: c.$$Zb,
									group: "navigation",
									order: 2,
								},
							],
							f1: !0,
							precondition: c.$$Zb,
						});
					}
					runWithViewModel(x) {
						x.model.telemetry.reportNavigationToPreviousConflict(),
							x.goToPreviousModifiedBaseRange(
								(H) => !x.model.isHandled(H).get(),
							);
					}
				}
				e.$6Rc = P;
				class k extends g {
					constructor() {
						super({
							id: "merge.toggleActiveConflictInput1",
							category: S,
							title: (0, E.localize2)(
								7565,
								"Toggle Current Conflict from Left",
							),
							f1: !0,
							precondition: c.$$Zb,
						});
					}
					runWithViewModel(x) {
						x.toggleActiveConflict(1);
					}
				}
				e.$7Rc = k;
				class L extends g {
					constructor() {
						super({
							id: "merge.toggleActiveConflictInput2",
							category: S,
							title: (0, E.localize2)(
								7566,
								"Toggle Current Conflict from Right",
							),
							f1: !0,
							precondition: c.$$Zb,
						});
					}
					runWithViewModel(x) {
						x.toggleActiveConflict(2);
					}
				}
				e.$8Rc = L;
				class D extends g {
					constructor() {
						super({
							id: "mergeEditor.compareInput1WithBase",
							category: S,
							title: (0, E.localize2)(7567, "Compare Input 1 With Base"),
							shortTitle: (0, E.localize)(7548, null),
							f1: !0,
							precondition: c.$$Zb,
							menu: { id: C.$XX.MergeInput1Toolbar, group: "primary" },
							icon: t.$ak.compareChanges,
						});
					}
					runWithViewModel(x, H) {
						const q = H.get(n.$IY);
						N(x, q, 1);
					}
				}
				e.$9Rc = D;
				class M extends g {
					constructor() {
						super({
							id: "mergeEditor.compareInput2WithBase",
							category: S,
							title: (0, E.localize2)(7568, "Compare Input 2 With Base"),
							shortTitle: (0, E.localize)(7549, null),
							f1: !0,
							precondition: c.$$Zb,
							menu: { id: C.$XX.MergeInput2Toolbar, group: "primary" },
							icon: t.$ak.compareChanges,
						});
					}
					runWithViewModel(x, H) {
						const q = H.get(n.$IY);
						N(x, q, 2);
					}
				}
				e.$0Rc = M;
				async function N(F, x, H) {
					x.openEditor(x.activeEditor, { pinned: !0 });
					const V = F.model.base,
						G =
							H === 1
								? F.inputCodeEditorView1.editor
								: F.inputCodeEditorView2.editor,
						K = G.getPosition().lineNumber;
					await x.openEditor({
						original: { resource: V.uri },
						modified: { resource: G.getModel().uri },
						options: {
							selection: { startLineNumber: K, startColumn: 1 },
							revealIfOpened: !0,
							revealIfVisible: !0,
						},
					});
				}
				class A extends g {
					constructor() {
						super({
							id: "merge.openBaseEditor",
							category: S,
							title: (0, E.localize2)(7569, "Open Base File"),
							f1: !0,
							precondition: c.$$Zb,
						});
					}
					runWithViewModel(x, H) {
						H.get(r.$7rb).open(x.model.base.uri);
					}
				}
				e.$$Rc = A;
				class R extends g {
					constructor() {
						super({
							id: "merge.acceptAllInput1",
							category: S,
							title: (0, E.localize2)(7570, "Accept All Changes from Left"),
							f1: !0,
							precondition: c.$$Zb,
							menu: { id: C.$XX.MergeInput1Toolbar, group: "primary" },
							icon: t.$ak.checkAll,
						});
					}
					runWithViewModel(x) {
						x.acceptAll(1);
					}
				}
				e.$_Rc = R;
				class O extends g {
					constructor() {
						super({
							id: "merge.acceptAllInput2",
							category: S,
							title: (0, E.localize2)(7571, "Accept All Changes from Right"),
							f1: !0,
							precondition: c.$$Zb,
							menu: { id: C.$XX.MergeInput2Toolbar, group: "primary" },
							icon: t.$ak.checkAll,
						});
					}
					runWithViewModel(x) {
						x.acceptAll(2);
					}
				}
				e.$aSc = O;
				class B extends g {
					constructor() {
						super({
							id: "mergeEditor.resetResultToBaseAndAutoMerge",
							category: S,
							title: (0, E.localize2)(7572, "Reset Result"),
							shortTitle: (0, E.localize)(7550, null),
							f1: !0,
							precondition: c.$$Zb,
							menu: { id: C.$XX.MergeInputResultToolbar, group: "primary" },
							icon: t.$ak.discard,
						});
					}
					runWithViewModel(x, H) {
						x.model.reset();
					}
				}
				e.$bSc = B;
				class U extends C.$3X {
					constructor() {
						super({
							id: "mergeEditor.resetCloseWithConflictsChoice",
							category: S,
							title: (0, E.localize2)(
								7573,
								"Reset Choice for 'Close with Conflicts'",
							),
							f1: !0,
						});
					}
					run(x) {
						x.get(u.$lq).remove(c.$g1b, u.StorageScope.PROFILE);
					}
				}
				e.$cSc = U;
				class z extends p {
					constructor() {
						super({
							id: "mergeEditor.acceptMerge",
							category: S,
							title: (0, E.localize2)(7574, "Complete Merge"),
							f1: !1,
							precondition: c.$$Zb,
						});
					}
					async runWithMergeEditor(
						{ inputModel: x, editorIdentifier: H, viewModel: q },
						V,
					) {
						const G = V.get(m.$GO),
							K = V.get(n.$IY);
						if (q.model.unhandledConflictsCount.get() > 0) {
							const { confirmed: J } = await G.confirm({
								message: (0, E.localize)(7551, null, (0, i.$kh)(x.resultUri)),
								detail: (0, E.localize)(7552, null),
								primaryButton: (0, E.localize)(7553, null),
							});
							if (!J) return { successful: !1 };
						}
						return await x.accept(), await K.closeEditor(H), { successful: !0 };
					}
				}
				e.$dSc = z;
			},
		),
		