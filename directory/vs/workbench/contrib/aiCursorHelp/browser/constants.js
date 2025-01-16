define(de[3804], he([1, 0, 58, 1326, 145]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$JDc = e.$IDc = void 0),
				(e.$IDc = {
					"open-terminal-cmdk": {
						name: "Open Terminal AI",
						action: (E) => (
							E.commandService.executeCommand(i.$P5b.ID),
							E.commandService.executeCommand(w.TerminalCommandId.Toggle),
							E.commandService.executeCommand(t.$_V),
							!0
						),
					},
					"open-forums": {
						name: "Visit Forums",
						action: (E) => (
							E.openerService.open("https://forum.cursor.com/"), !1
						),
					},
					"email-cursor": {
						name: "Email Us",
						action: (E) => (E.openerService.open("mailto:hi@cursor.sh"), !1),
					},
					"open-chat": {
						name: "Open Chat",
						action: (E) => (E.commandService.executeCommand(t.$dX), !0),
					},
					"cursor-settings-general": {
						name: "Cursor Settings > General",
						action: (E) => (
							E.commandService.executeCommand(t.$QV, "general"), !0
						),
					},
					"cursor-settings-model": {
						name: "Cursor Settings > Model",
						action: (E) => (
							E.commandService.executeCommand(t.$QV, "models"), !0
						),
					},
					"cursor-settings-features": {
						name: "Cursor Settings > Features",
						action: (E) => (
							E.commandService.executeCommand(t.$QV, "features"), !0
						),
					},
					"cursor-settings-beta": {
						name: "Cursor Settings > Beta",
						action: (E) => (E.commandService.executeCommand(t.$QV, "beta"), !0),
					},
					"open-cursor-website": {
						name: "Visit Cursor Website",
						action: (E) => (E.openerService.open("https://cursor.com"), !1),
					},
					"open-anysphere-website": {
						name: "Visit Anysphere Website",
						action: (E) => (E.openerService.open("https://anysphere.co"), !1),
					},
					"open-changelog": {
						name: "View Changelog",
						action: (E) => (
							E.openerService.open("https://changelog.cursor.com"), !1
						),
					},
					"open-twitter": {
						name: "Open Twitter",
						action: (E) => (
							E.openerService.open("https://twitter.com/cursor_ai"), !1
						),
					},
				}),
				(e.$JDc = [
					{ question: "Introduce me to a random feature!", priority: 100 },
					{ question: "What's the best way to use Cursor?", priority: 100 },
					{ question: "How do I use terminal AI?", priority: 100 },
					{ question: "How to upgrade to Pro?", priority: 100 },
					{ question: "Where's my data stored?", priority: 100 },
					{ question: "How do I talk to my codebase?", priority: 100 },
					{ question: "What is codebase indexing for?", priority: 100 },
					{ question: "What is Cursor Tab?", priority: 100 },
					{ question: "Is Cursor hiring?", priority: 100 },
					{ question: "How do I try out Beta features?", priority: 100 },
					{ question: "Can Cursor help me refactor my code?", priority: 100 },
					{ question: "How can I customize my Cursor editor?", priority: 100 },
					{
						question: "What are the keyboard shortcuts for Cursor?",
						priority: 100,
					},
					{
						question: "How does Cursor integrate with version control systems?",
						priority: 100,
					},
					{ question: "How do I report a bug in Cursor?", priority: 100 },
					{ question: "Where's the Cursor Forum?", priority: 100 },
					{ question: "How do I use Cursor with my codebase?", priority: 100 },
					{ question: "How do I learn new skills with Cursor?", priority: 100 },
				].sort((E, C) => E.priority - C.priority));
		}),
		define(
			de[3805],
			he([
				1, 0, 183, 744, 3, 9, 42, 4, 11, 10, 8, 49, 57, 72, 5, 39, 73, 93, 41,
				21, 32, 106, 35, 233, 146, 60, 1843, 3486, 18, 2388,
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
			) {
				"use strict";
				var k;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$tNc = void 0);
				var L;
				(function (M) {
					(M.Data = "data"), (M.Message = "message");
				})(L || (L = {}));
				let D = class extends v.$TMb {
					static {
						k = this;
					}
					static {
						this.ID = "refactorPreview";
					}
					static {
						this.Schema = "vscode-bulkeditpreview-multieditor";
					}
					static {
						this.ctxHasCategories = new u.$5j(
							"refactorPreview.hasCategories",
							!1,
						);
					}
					static {
						this.ctxGroupByFile = new u.$5j("refactorPreview.groupByFile", !0);
					}
					static {
						this.ctxHasCheckedChanges = new u.$5j(
							"refactorPreview.hasCheckedChanges",
							!0,
						);
					}
					static {
						this.a = `${this.ID}.groupByFile`;
					}
					constructor(N, A, R, O, B, U, z, F, x, H, q, V, G, K, J, W, X) {
						super(
							{ ...N, titleMenuId: m.$XX.BulkEditTitle },
							q,
							V,
							G,
							x,
							H,
							A,
							K,
							J,
							W,
							X,
						),
							(this.ab = A),
							(this.sb = R),
							(this.cc = O),
							(this.dc = B),
							(this.ec = U),
							(this.fc = z),
							(this.gc = F),
							(this.f = new Map()),
							(this.n = new w.$Zc()),
							(this.r = new w.$Zc()),
							(this.nc = new i.$ff(async (Y) => {
								const ie = new i.$gf(async (te) => {
										const Q = te.uri,
											Z = this.L.asPreviewUri(Q);
										if (te.type & I.BulkFileOperationType.Delete)
											return {
												original: { resource: E.URI.revive(Z) },
												modified: { resource: void 0 },
												goToFileResource: te.uri,
											};
										{
											let se;
											try {
												(await this.dc.createModelReference(Q)).dispose(),
													(se = Q);
											} catch {
												se = I.$fNc.emptyPreview;
											}
											return {
												original: { resource: E.URI.revive(se) },
												modified: { resource: E.URI.revive(Z) },
												goToFileResource: se,
											};
										}
									}),
									ne = Y.slice().sort(T.$lNc),
									ee = [];
								for (const te of ne) ee.push(await ie.get(te));
								return {
									resources: ee,
									getResourceDiffEditorInputIdOfOperation: async (te) => {
										const Q = await ie.get(te);
										return {
											original: Q.original.resource,
											modified: Q.modified.resource,
										};
									},
								};
							})),
							this.element.classList.add("bulk-edit-panel", "show-file-icons"),
							(this.h = k.ctxHasCategories.bindTo(x)),
							(this.j = k.ctxGroupByFile.bindTo(x)),
							(this.m = k.ctxHasCheckedChanges.bindTo(x)),
							this.Gb.publicLog2("views.bulkEditPane");
					}
					dispose() {
						this.b.dispose(), this.n.dispose(), super.dispose();
					}
					W(N) {
						super.W(N);
						const A = this.ab.createInstance($.$uPb, {
							onDidChangeVisibility: this.onDidChangeBodyVisibility,
						});
						this.n.add(A);
						const R = document.createElement("div");
						(R.className = "content"), N.appendChild(R);
						const O = document.createElement("div");
						R.appendChild(O),
							(this.c = this.ab.createInstance(T.$jNc)),
							(this.c.groupByFile = this.gc.getBoolean(
								k.a,
								b.StorageScope.PROFILE,
								!0,
							)),
							this.j.set(this.c.groupByFile),
							(this.b = this.ab.createInstance(
								o.$FMb,
								this.id,
								O,
								new T.$rNc(),
								[
									this.ab.createInstance(T.$qNc),
									this.ab.createInstance(T.$pNc, A),
									this.ab.createInstance(T.$oNc),
								],
								this.c,
								{
									accessibilityProvider: this.ab.createInstance(T.$mNc),
									identityProvider: new T.$nNc(),
									expandOnlyOnTwistieClick: !0,
									multipleSelectionSupport: !1,
									keyboardNavigationLabelProvider: new T.$sNc(),
									sorter: new T.$kNc(),
									selectionNavigation: !0,
								},
							)),
							this.n.add(this.b.onContextMenu(this.oc, this)),
							this.n.add(this.b.onDidOpen((x) => this.mc(x)));
						const B = document.createElement("div");
						(B.className = "buttons"), R.appendChild(B);
						const U = new t.$rob(B);
						this.n.add(U);
						const z = U.addButton({ supportIcons: !0, ...l.$lyb });
						(z.label = (0, d.localize)(4498, null)),
							z.onDidClick(() => this.accept(), this, this.n);
						const F = U.addButton({ ...l.$lyb, secondary: !0 });
						(F.label = (0, d.localize)(4499, null)),
							F.onDidClick(() => this.discard(), this, this.n),
							(this.g = document.createElement("span")),
							(this.g.className = "message"),
							(this.g.innerText = (0, d.localize)(4500, null)),
							N.appendChild(this.g),
							this.jc(L.Message);
					}
					X(N, A) {
						super.X(N, A);
						const R = N - 50;
						(this.b.getHTMLElement().parentElement.style.height = `${R}px`),
							this.b.layout(R, A);
					}
					jc(N) {
						this.element.dataset.state = N;
					}
					async setInput(N, A) {
						this.jc(L.Data),
							this.r.clear(),
							this.f.clear(),
							this.s && (this.s(void 0), (this.s = void 0));
						const R = await this.ab.invokeFunction(I.$eNc.create, N);
						(this.L = this.ab.createInstance(I.$fNc, R)),
							this.r.add(this.L),
							this.r.add(R);
						const O = R.categories.length > 1;
						return (
							this.h.set(O),
							(this.c.groupByFile = !O || this.c.groupByFile),
							this.m.set(R.checked.checkedCount > 0),
							(this.t = R),
							new Promise((B) => {
								A.onCancellationRequested(() => B(void 0)),
									(this.s = B),
									this.kc(R),
									this.r.add(
										R.checked.onDidChange(() => {
											this.b.updateChildren(),
												this.m.set(R.checked.checkedCount > 0);
										}),
									);
							})
						);
					}
					hasInput() {
						return !!this.t;
					}
					async kc(N) {
						const A = this.f.get(this.c.groupByFile);
						if ((await this.b.setInput(N, A), this.b.domFocus(), A)) return;
						const R = [...this.b.getNode(N).children].slice(0, 10);
						for (; R.length > 0; ) {
							const { element: O } = R.shift();
							O instanceof T.$hNc && (await this.b.expand(O, !0)),
								O instanceof T.$gNc &&
									(await this.b.expand(O, !0),
									R.push(...this.b.getNode(O).children));
						}
					}
					accept() {
						const N = this.t?.conflicts.list();
						if (!N || N.length === 0) {
							this.lc(!0);
							return;
						}
						let A;
						N.length === 1
							? (A = (0, d.localize)(
									4501,
									null,
									this.cc.getUriLabel(N[0], { relative: !0 }),
								))
							: (A = (0, d.localize)(4502, null, N.length)),
							this.ec.warn(A).finally(() => this.lc(!1));
					}
					discard() {
						this.lc(!1);
					}
					lc(N) {
						this.s?.(N ? this.t?.getWorkspaceEdit() : void 0),
							(this.t = void 0),
							this.jc(L.Message),
							this.r.clear();
					}
					toggleChecked() {
						const [N] = this.b.getFocus();
						(((N instanceof T.$hNc || N instanceof T.$iNc) &&
							!N.isDisabled()) ||
							N instanceof T.$gNc) &&
							N.setChecked(!N.isChecked());
					}
					groupByFile() {
						this.c.groupByFile || this.toggleGrouping();
					}
					groupByType() {
						this.c.groupByFile && this.toggleGrouping();
					}
					toggleGrouping() {
						const N = this.b.getInput();
						if (N) {
							const A = this.b.getViewState();
							this.f.set(this.c.groupByFile, A),
								(this.c.groupByFile = !this.c.groupByFile),
								this.kc(N),
								this.gc.store(
									k.a,
									this.c.groupByFile,
									b.StorageScope.PROFILE,
									b.StorageTarget.USER,
								),
								this.j.set(this.c.groupByFile);
						}
					}
					async mc(N) {
						const A = this.t?.fileOperations;
						if (!A) return;
						let R, O;
						if (N.element instanceof T.$iNc)
							(O = N.element.parent),
								(R = N.element.edit.textEdit.textEdit.range);
						else if (N.element instanceof T.$hNc)
							(O = N.element),
								(R = N.element.edit.textEdits[0]?.textEdit.textEdit.range);
						else return;
						const B = await this.nc.get(A),
							U = await B.getResourceDiffEditorInputIdOfOperation(O.edit),
							z = {
								...N.editorOptions,
								viewState: { revealData: { resource: U, range: R } },
							},
							F = E.URI.from({ scheme: k.Schema }),
							x = "Refactor Preview";
						this.sb.openEditor(
							{
								multiDiffSource: F,
								label: x,
								options: z,
								isTransient: !0,
								description: x,
								resources: B.resources,
							},
							N.sideBySide ? P.$KY : P.$JY,
						);
					}
					oc(N) {
						this.fc.showContextMenu({
							menuId: m.$XX.BulkEditContext,
							contextKeyService: this.Bb,
							getAnchor: () => N.anchor,
						});
					}
				};
				(e.$tNc = D),
					(e.$tNc =
						D =
						k =
							Ne(
								[
									j(1, n.$Li),
									j(2, P.$IY),
									j(3, p.$3N),
									j(4, C.$MO),
									j(5, h.$GO),
									j(6, a.$Xxb),
									j(7, b.$lq),
									j(8, u.$6j),
									j(9, S.$K1),
									j(10, g.$uZ),
									j(11, a.$Xxb),
									j(12, r.$gj),
									j(13, f.$7rb),
									j(14, y.$iP),
									j(15, s.$km),
									j(16, c.$Uyb),
								],
								D,
							));
			},
		),
		define(
			de[402],
			he([
				1, 0, 24, 14, 275, 27, 3, 26, 46, 4, 11, 8, 179, 43, 63, 1288, 208, 552,
				207, 218, 283, 1235, 66, 18, 89,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$4Yb = e.$3Yb = void 0),
					(e.$2Yb = S),
					(e.$5Yb = k),
					(e.$6Yb = L);
				function S(D) {
					return D instanceof Object && "chatView" in D;
				}
				(e.$3Yb = (0, r.localize2)(4565, "Chat")),
					(e.$4Yb = "workbench.action.chat.open");
				class I extends u.$3X {
					constructor() {
						super({
							id: e.$4Yb,
							title: (0, r.localize2)(4566, "Open Chat"),
							icon: i.$ak.commentDiscussion,
							f1: !1,
							category: e.$3Yb,
							keybinding: {
								weight: c.KeybindingWeight.WorkbenchContrib,
								primary: E.KeyMod.CtrlCmd | E.KeyMod.Alt | E.KeyCode.KeyI,
								mac: {
									primary: E.KeyMod.CtrlCmd | E.KeyMod.WinCtrl | E.KeyCode.KeyI,
								},
							},
						});
					}
					async run(M, N) {
						N = typeof N == "string" ? { query: N } : N;
						const A = M.get(b.$J2),
							R = await (0, p.$HYb)(M.get(v.$HMb));
						if (R) {
							if (N?.previousRequests?.length && R.viewModel)
								for (const { request: O, response: B } of N.previousRequests)
									A.addCompleteRequest(R.viewModel.sessionId, O, void 0, 0, {
										message: B,
									});
							N?.query &&
								(N.isPartialQuery
									? R.setInput(N.query)
									: R.acceptInput(N.query)),
								R.focusInput();
						}
					}
				}
				class T extends u.$3X {
					constructor() {
						super({
							id: "workbench.action.chat.history",
							title: (0, r.localize2)(4567, "Show Chats..."),
							menu: {
								id: u.$XX.ViewTitle,
								when: a.$Kj.equals("view", p.$MYb),
								group: "navigation",
								order: -1,
							},
							category: e.$3Yb,
							icon: i.$ak.history,
							f1: !0,
							precondition: f.$51,
						});
					}
					async run(M) {
						const N = M.get(b.$J2),
							A = M.get(n.$DJ),
							R = M.get(v.$HMb),
							O = M.get($.$IY),
							B = () => {
								const U = {
										iconClass: d.ThemeIcon.asClassName(i.$ak.file),
										tooltip: (0, r.localize)(4559, null),
									},
									z = {
										iconClass: d.ThemeIcon.asClassName(i.$ak.x),
										tooltip: (0, r.localize)(4560, null),
									},
									F = {
										iconClass: d.ThemeIcon.asClassName(i.$ak.pencil),
										tooltip: (0, r.localize)(4561, null),
									},
									x = () => {
										const G = N.getHistory();
										G.sort(
											(W, X) =>
												(X.lastMessageDate ?? 0) - (W.lastMessageDate ?? 0),
										);
										let K;
										const J = G.flatMap((W) => {
											const X = (0, w.$en)(W.lastMessageDate, !0, !0),
												Y = X !== K ? { type: "separator", label: X } : void 0;
											return (
												(K = X),
												[
													Y,
													{
														label: W.title,
														description: W.isActive
															? `(${(0, r.localize)(4562, null)})`
															: "",
														chat: W,
														buttons: W.isActive ? [F] : [F, U, z],
													},
												]
											);
										});
										return (0, t.$Lb)(J);
									},
									H = new C.$Zc(),
									q = H.add(A.createQuickPick({ useSeparators: !0 }));
								q.placeholder = (0, r.localize)(4563, null);
								const V = x();
								(q.items = V),
									H.add(
										q.onDidTriggerItemButton(async (G) => {
											if (G.button === U) {
												const K = {
													target: { sessionId: G.item.chat.sessionId },
													pinned: !0,
												};
												O.openEditor(
													{ resource: o.$cMb.getNewEditorUri(), options: K },
													$.$JY,
												),
													q.hide();
											} else if (G.button === z)
												N.removeHistoryEntry(G.item.chat.sessionId),
													(q.items = x());
											else if (G.button === F) {
												const K = await A.input({
													title: (0, r.localize)(4564, null),
													value: G.item.chat.title,
												});
												K && N.setChatSessionTitle(G.item.chat.sessionId, K),
													B();
											}
										}),
									),
									H.add(
										q.onDidAccept(async () => {
											try {
												const K = q.selectedItems[0].chat.sessionId;
												(await R.openView(p.$MYb)).loadSession(K);
											} finally {
												q.hide();
											}
										}),
									),
									H.add(q.onDidHide(() => H.dispose())),
									q.show();
							};
						B();
					}
				}
				class P extends u.$3X {
					constructor() {
						super({
							id: "workbench.action.openChat",
							title: (0, r.localize2)(4568, "Open Editor"),
							f1: !0,
							category: e.$3Yb,
							precondition: f.$51,
						});
					}
					async run(M) {
						await M.get($.$IY).openEditor({
							resource: o.$cMb.getNewEditorUri(),
							options: { pinned: !0 },
						});
					}
				}
				function k() {
					(0, u.$4X)(I),
						(0, u.$4X)(T),
						(0, u.$4X)(P),
						(0, u.$4X)(
							class extends u.$3X {
								constructor() {
									super({
										id: "workbench.action.chat.clearInputHistory",
										title: (0, r.localize2)(4569, "Clear Input History"),
										precondition: f.$51,
										category: e.$3Yb,
										f1: !0,
									});
								}
								async run(M, ...N) {
									M.get(l.$TYb).clearHistory();
								}
							},
						),
						(0, u.$4X)(
							class extends u.$3X {
								constructor() {
									super({
										id: "workbench.action.chat.clearHistory",
										title: (0, r.localize2)(4570, "Clear All Workspace Chats"),
										precondition: f.$51,
										category: e.$3Yb,
										f1: !0,
									});
								}
								async run(M, ...N) {
									const A = M.get(y.$EY),
										R = M.get(v.$HMb);
									M.get(b.$J2).clearAllHistoryEntries();
									const B = R.getViewWithId(p.$MYb);
									B && B.widget.clear(),
										A.groups.forEach((U) => {
											U.editors.forEach((z) => {
												z instanceof o.$cMb && (0, g.$1Yb)(M, z);
											});
										});
								}
							},
						),
						(0, u.$4X)(
							class extends m.$ktb {
								constructor() {
									super({
										id: "chat.action.focus",
										title: (0, r.localize2)(4571, "Focus Chat List"),
										precondition: a.$Kj.and(f.$31),
										category: e.$3Yb,
										keybinding: [
											{
												when: f.$81,
												primary: E.KeyMod.CtrlCmd | E.KeyCode.UpArrow,
												weight: c.KeybindingWeight.EditorContrib,
											},
											{
												when: a.$Kj.or(h.$6Lb, h.$5Lb),
												primary: E.KeyMod.CtrlCmd | E.KeyCode.UpArrow,
												weight: c.KeybindingWeight.EditorContrib,
											},
										],
									});
								}
								runEditorCommand(M, N) {
									const A = N.getModel()?.uri;
									A && M.get(p.$GYb).getWidgetByInputUri(A)?.focusLastMessage();
								}
							},
						),
						(0, u.$4X)(
							class extends u.$3X {
								constructor() {
									super({
										id: "workbench.action.chat.focusInput",
										title: (0, r.localize2)(4572, "Focus Chat Input"),
										f1: !1,
										keybinding: {
											primary: E.KeyMod.CtrlCmd | E.KeyCode.DownArrow,
											weight: c.KeybindingWeight.WorkbenchContrib,
											when: a.$Kj.and(f.$41, f.$31.negate()),
										},
									});
								}
								run(M, ...N) {
									M.get(p.$GYb).lastFocusedWidget?.focusInput();
								}
							},
						);
				}
				function L(D, M = !0) {
					return (0, s.$0Tb)(D)
						? (M ? `${D.username}: ` : "") + D.messageText
						: (M ? `${D.username}: ` : "") + D.response.toString();
				}
			},
		),
		define(
			de[3806],
			he([1, 0, 14, 27, 4, 184, 11, 8, 43, 100, 402, 1288, 208, 552, 207, 89]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$yIc = void 0),
					(e.$zIc = p),
					(e.$yIc = "workbench.action.chat.newChat");
				function p() {
					(0, C.$4X)(
						class extends C.$3X {
							constructor() {
								super({
									id: "workbench.action.chatEditor.newChat",
									title: (0, w.localize2)(4573, "New Chat"),
									icon: t.$ak.plus,
									f1: !1,
									precondition: n.$51,
									menu: [
										{
											id: C.$XX.EditorTitle,
											group: "navigation",
											order: 0,
											when: r.$TPb.isEqualTo(c.$cMb.EditorID),
										},
									],
								});
							}
							async run(b, ...s) {
								o(b.get(E.$Owb)), await (0, a.$1Yb)(b);
							}
						},
					),
						(0, C.$4X)(
							class extends C.$3X {
								constructor() {
									super({
										id: e.$yIc,
										title: (0, w.localize2)(4574, "New Chat"),
										category: u.$3Yb,
										icon: t.$ak.plus,
										precondition: n.$51,
										f1: !0,
										keybinding: {
											weight: m.KeybindingWeight.WorkbenchContrib,
											primary: i.KeyMod.CtrlCmd | i.KeyCode.KeyL,
											mac: { primary: i.KeyMod.WinCtrl | i.KeyCode.KeyL },
											when: n.$41,
										},
										menu: [
											{ id: C.$XX.ChatContext, group: "z_clear" },
											{
												id: C.$XX.ViewTitle,
												when: d.$Kj.equals("view", h.$MYb),
												group: "navigation",
												order: -1,
											},
										],
									});
								}
								async run(b, ...s) {
									const l = s[0],
										y = b.get(E.$Owb);
									if ((0, u.$2Yb)(l))
										o(y),
											l.chatView.widget.clear(),
											l.chatView.widget.focusInput();
									else {
										const $ = b.get(h.$GYb),
											v = b.get(g.$HMb);
										let S = $.lastFocusedWidget;
										S || (S = (await v.openView(h.$MYb)).widget),
											o(y),
											S.clear(),
											S.focusInput();
									}
								}
							},
						);
				}
				function o(f) {
					f.playSignal(E.$Twb.clear);
				}
			},
		),
		define(
			de[3807],
			he([1, 0, 4, 11, 121, 402, 208, 207, 283]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$GIc = r);
				function r() {
					(0, i.$4X)(
						class extends i.$3X {
							constructor() {
								super({
									id: "workbench.action.chat.copyAll",
									title: (0, t.localize2)(4591, "Copy All"),
									f1: !1,
									category: E.$3Yb,
									menu: {
										id: i.$XX.ChatContext,
										when: d.$U1.toNegated(),
										group: "copy",
									},
								});
							}
							run(a, ...h) {
								const c = a.get(w.$Vxb),
									g = a.get(C.$GYb).lastFocusedWidget;
								if (g) {
									const o = g.viewModel
										?.getItems()
										.filter(
											(f) =>
												(0, m.$0Tb)(f) ||
												((0, m.$$Tb)(f) && !f.errorDetails?.responseIsFiltered),
										)
										.map((f) => (0, E.$6Yb)(f))
										.join(`

`);
									o && c.writeText(o);
								}
							}
						},
					),
						(0, i.$4X)(
							class extends i.$3X {
								constructor() {
									super({
										id: "workbench.action.chat.copyItem",
										title: (0, t.localize2)(4592, "Copy"),
										f1: !1,
										category: E.$3Yb,
										menu: {
											id: i.$XX.ChatContext,
											when: d.$U1.toNegated(),
											group: "copy",
										},
									});
								}
								run(a, ...h) {
									const c = h[0];
									if (!(0, m.$0Tb)(c) && !(0, m.$$Tb)(c)) return;
									const n = a.get(w.$Vxb),
										g = (0, E.$6Yb)(c, !1);
									n.writeText(g);
								}
							},
						);
				}
			},
		),
		define(
			de[1047],
			he([1, 0, 14, 27, 4, 11, 8, 43, 402, 208, 153, 207, 329, 218]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$RYb = e.$QYb = e.$PYb = void 0),
					(e.$SYb = f);
				class n extends E.$3X {
					static {
						this.ID = "workbench.action.chat.submit";
					}
					constructor() {
						super({
							id: n.ID,
							title: (0, w.localize2)(4594, "Send"),
							f1: !1,
							category: m.$3Yb,
							icon: t.$ak.send,
							precondition: C.$Kj.and(a.$11, a.$W1.negate()),
							keybinding: {
								when: a.$31,
								primary: i.KeyCode.Enter,
								weight: d.KeybindingWeight.EditorContrib,
							},
							menu: [
								{ id: E.$XX.ChatExecuteSecondary, group: "group_1" },
								{
									id: E.$XX.ChatExecute,
									when: a.$W1.negate(),
									group: "navigation",
								},
							],
						});
					}
					run(s, ...l) {
						const y = l[0],
							$ = s.get(r.$GYb);
						(y?.widget ?? $.lastFocusedWidget)?.acceptInput(y?.inputValue);
					}
				}
				e.$PYb = n;
				class g extends E.$3X {
					static {
						this.ID = "workbench.action.chat.submitSecondaryAgent";
					}
					constructor() {
						super({
							id: g.ID,
							title: (0, w.localize2)(4595, "Submit to Secondary Agent"),
							precondition: C.$Kj.and(a.$11, a.$91.negate(), a.$W1.negate()),
							keybinding: {
								when: a.$31,
								primary: i.KeyMod.CtrlCmd | i.KeyCode.Enter,
								weight: d.KeybindingWeight.EditorContrib,
							},
							menu: { id: E.$XX.ChatExecuteSecondary, group: "group_1" },
						});
					}
					run(s, ...l) {
						const y = l[0],
							v = s.get(u.$c3).getSecondaryAgent();
						if (!v) return;
						const S = s.get(r.$GYb),
							I = y?.widget ?? S.lastFocusedWidget;
						I &&
							((0, h.$Z2)(I.parsedInput).agentPart
								? I.acceptInput()
								: ((I.lastSelectedAgent = v),
									I.acceptInputWithPrefix(`${h.$Q2}${v.name}`)));
					}
				}
				e.$QYb = g;
				class p extends E.$3X {
					constructor() {
						super({
							id: "workbench.action.chat.sendToNewChat",
							title: (0, w.localize2)(4596, "Send to New Chat"),
							precondition: C.$Kj.and(a.$W1.negate(), a.$11),
							category: m.$3Yb,
							f1: !1,
							menu: { id: E.$XX.ChatExecuteSecondary, group: "group_2" },
							keybinding: {
								weight: d.KeybindingWeight.WorkbenchContrib,
								primary: i.KeyMod.CtrlCmd | i.KeyMod.Shift | i.KeyCode.Enter,
								when: a.$31,
							},
						});
					}
					async run(s, ...l) {
						const y = l[0],
							$ = s.get(r.$GYb),
							v = y?.widget ?? $.lastFocusedWidget;
						v && (v.clear(), v.acceptInput(y?.inputValue));
					}
				}
				class o extends E.$3X {
					static {
						this.ID = "workbench.action.chat.cancel";
					}
					constructor() {
						super({
							id: o.ID,
							title: (0, w.localize2)(4597, "Cancel"),
							f1: !1,
							category: m.$3Yb,
							icon: t.$ak.debugStop,
							menu: { id: E.$XX.ChatExecute, when: a.$W1, group: "navigation" },
							keybinding: {
								weight: d.KeybindingWeight.WorkbenchContrib,
								primary: i.KeyMod.CtrlCmd | i.KeyCode.Escape,
								win: { primary: i.KeyMod.Alt | i.KeyCode.Backspace },
							},
						});
					}
					run(s, ...l) {
						const y = l[0],
							$ = s.get(r.$GYb),
							v = y?.widget ?? $.lastFocusedWidget;
						if (!v) return;
						const S = s.get(c.$J2);
						v.viewModel &&
							S.cancelCurrentRequestForSession(v.viewModel.sessionId);
					}
				}
				e.$RYb = o;
				function f() {
					(0, E.$4X)(n), (0, E.$4X)(o), (0, E.$4X)(p), (0, E.$4X)(g);
				}
			},
		),
		define(
			de[3808],
			he([1, 0, 27, 4, 11, 43, 402, 208, 207, 283]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$IIc = u);
				function u() {
					(0, w.$4X)(
						class extends w.$3X {
							constructor() {
								super({
									id: "workbench.action.chat.nextFileTree",
									title: (0, i.localize2)(4598, "Next File Tree"),
									keybinding: {
										primary: t.KeyMod.CtrlCmd | t.KeyCode.F9,
										weight: E.KeybindingWeight.WorkbenchContrib,
										when: m.$41,
									},
									precondition: m.$51,
									f1: !0,
									category: C.$3Yb,
								});
							}
							run(c, ...n) {
								a(c, !1);
							}
						},
					),
						(0, w.$4X)(
							class extends w.$3X {
								constructor() {
									super({
										id: "workbench.action.chat.previousFileTree",
										title: (0, i.localize2)(4599, "Previous File Tree"),
										keybinding: {
											primary: t.KeyMod.CtrlCmd | t.KeyMod.Shift | t.KeyCode.F9,
											weight: E.KeybindingWeight.WorkbenchContrib,
											when: m.$41,
										},
										precondition: m.$51,
										f1: !0,
										category: C.$3Yb,
									});
								}
								run(c, ...n) {
									a(c, !0);
								}
							},
						);
				}
				function a(h, c) {
					const g = h.get(d.$GYb).lastFocusedWidget;
					if (!g) return;
					const p = !g.inputEditor.hasWidgetFocus() && g.getFocus(),
						f =
							((0, r.$$Tb)(p) ? p : void 0) ??
							g.viewModel
								?.getItems()
								.reverse()
								.find((y) => (0, r.$$Tb)(y));
					if (!f) return;
					g.reveal(f);
					const b = g.getFileTreeInfosForResponse(f),
						s = g.getLastFocusedFileTreeForResponse(f),
						l = s
							? (s.treeIndex + (c ? -1 : 1) + b.length) % b.length
							: c
								? b.length - 1
								: 0;
					b[l]?.focus();
				}
			},
		),
		define(
			de[3809],
			he([1, 0, 76, 19, 4, 11, 57, 22, 402, 208, 552, 207, 441, 218, 18]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$JIc = o);
				const g = "chat.json",
					p = [{ name: (0, w.localize)(4600, null), extensions: ["json"] }];
				function o() {
					(0, E.$4X)(
						class extends E.$3X {
							constructor() {
								super({
									id: "workbench.action.chat.export",
									category: m.$3Yb,
									title: (0, w.localize2)(4601, "Export Chat..."),
									precondition: a.$51,
									f1: !0,
								});
							}
							async run(b, ...s) {
								const l = b.get(r.$GYb),
									y = b.get(C.$IO),
									$ = b.get(d.$ll),
									v = b.get(c.$J2),
									S = l.lastFocusedWidget;
								if (!S || !S.viewModel) return;
								const I = (0, i.$nh)(await y.defaultFilePath(), g),
									T = await y.showSaveDialog({ defaultUri: I, filters: p });
								if (!T) return;
								const P = v.getSession(S.viewModel.sessionId);
								if (!P) return;
								const k = t.$Te.fromString(
									JSON.stringify(P.toExport(), void 0, 2),
								);
								await $.writeFile(T, k);
							}
						},
					),
						(0, E.$4X)(
							class extends E.$3X {
								constructor() {
									super({
										id: "workbench.action.chat.import",
										title: (0, w.localize2)(4602, "Import Chat..."),
										category: m.$3Yb,
										precondition: a.$51,
										f1: !0,
									});
								}
								async run(b, ...s) {
									const l = b.get(C.$IO),
										y = b.get(d.$ll),
										$ = b.get(n.$IY),
										v = (0, i.$nh)(await l.defaultFilePath(), g),
										S = await l.showOpenDialog({
											defaultUri: v,
											canSelectFiles: !0,
											filters: p,
										});
									if (!S) return;
									const I = await y.readFile(S[0]);
									try {
										const T = JSON.parse(I.value.toString());
										if (!(0, h.$62)(T))
											throw new Error("Invalid chat session data");
										const P = { target: { data: T }, pinned: !0 };
										await $.openEditor({
											resource: u.$cMb.getNewEditorUri(),
											options: P,
										});
									} catch (T) {
										throw T;
									}
								}
							},
						);
				}
			},
		),
		define(
			de[3810],
			he([1, 0, 4, 11, 8, 100, 402, 208, 552, 207, 66, 18, 89]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$KIc = n);
				var c;
				(function (o) {
					(o.Editor = "Editor"), (o.Window = "Window");
				})(c || (c = {}));
				function n() {
					(0, i.$4X)(
						class extends i.$3X {
							constructor() {
								super({
									id: "workbench.action.chat.openInEditor",
									title: (0, t.localize2)(4603, "Open Chat in Editor"),
									category: C.$3Yb,
									precondition: r.$51,
									f1: !0,
									menu: {
										id: i.$XX.ViewTitle,
										when: w.$Kj.equals("view", d.$MYb),
										order: 0,
									},
								});
							}
							async run(f, ...b) {
								const s = b[0];
								g(f, c.Editor, (0, C.$2Yb)(s) ? s.chatView : void 0);
							}
						},
					),
						(0, i.$4X)(
							class extends i.$3X {
								constructor() {
									super({
										id: "workbench.action.chat.openInNewWindow",
										title: (0, t.localize2)(4604, "Open Chat in New Window"),
										category: C.$3Yb,
										precondition: r.$51,
										f1: !0,
										menu: {
											id: i.$XX.ViewTitle,
											when: w.$Kj.equals("view", d.$MYb),
											order: 0,
										},
									});
								}
								async run(f, ...b) {
									const s = b[0];
									g(f, c.Window, (0, C.$2Yb)(s) ? s.chatView : void 0);
								}
							},
						),
						(0, i.$4X)(
							class extends i.$3X {
								constructor() {
									super({
										id: "workbench.action.chat.openInSidebar",
										title: (0, t.localize2)(4605, "Open Chat in Side Bar"),
										category: C.$3Yb,
										precondition: r.$51,
										f1: !0,
										menu: [
											{
												id: i.$XX.EditorTitle,
												order: 0,
												when: E.$TPb.isEqualTo(m.$cMb.EditorID),
											},
										],
									});
								}
								async run(f, ...b) {
									return p(f);
								}
							},
						);
				}
				async function g(o, f, b) {
					const s = o.get(d.$GYb),
						l = o.get(a.$IY),
						y = b?.widget ?? s.lastFocusedWidget;
					if (!y || !("viewId" in y.viewContext)) {
						await l.openEditor(
							{ resource: m.$cMb.getNewEditorUri(), options: { pinned: !0 } },
							f === c.Window ? a.$LY : a.$JY,
						);
						return;
					}
					const $ = y.viewModel;
					if (!$) return;
					const v = $.sessionId,
						S = y.getViewState();
					y.clear();
					const I = { target: { sessionId: v }, pinned: !0, viewState: S };
					await l.openEditor(
						{ resource: m.$cMb.getNewEditorUri(), options: I },
						f === c.Window ? a.$LY : a.$JY,
					);
				}
				async function p(o) {
					const f = o.get(h.$HMb),
						b = o.get(a.$IY),
						s = o.get(u.$EY),
						l = b.activeEditor;
					let y;
					l instanceof m.$cMb && l.sessionId
						? (await b.closeEditor({ editor: l, groupId: s.activeGroup.id }),
							(y = await f.openView(d.$MYb)),
							y.loadSession(l.sessionId))
						: (y = await f.openView(d.$MYb)),
						y.focus();
				}
			},
		),
		define(
			de[1328],
			he([
				1, 0, 14, 27, 434, 199, 4, 11, 8, 43, 572, 402, 208, 207, 218, 283, 257,
				70, 176, 18,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f, b) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$7Yb = void 0),
					(e.$8Yb = s),
					(e.$7Yb = "workbench.action.chat.markUnhelpful");
				function s() {
					(0, d.$4X)(
						class extends d.$3X {
							constructor() {
								super({
									id: "workbench.action.chat.markHelpful",
									title: (0, C.localize2)(4615, "Helpful"),
									f1: !1,
									category: a.$3Yb,
									icon: t.$ak.thumbsup,
									toggled: c.$Q1.isEqualTo("up"),
									menu: [
										{
											id: d.$XX.ChatMessageTitle,
											group: "navigation",
											order: 1,
											when: m.$Kj.and(c.$X1, c.$R1, c.$V1.negate()),
										},
										{
											id: p.$kLb,
											group: "navigation",
											order: 1,
											when: m.$Kj.and(c.$X1, c.$R1, c.$V1.negate()),
										},
									],
								});
							}
							run($, ...v) {
								const S = v[0];
								if (!(0, g.$$Tb)(S)) return;
								$.get(n.$J2).notifyUserAction({
									agentId: S.agent?.id,
									command: S.slashCommand?.name,
									sessionId: S.sessionId,
									requestId: S.requestId,
									result: S.result,
									action: {
										kind: "vote",
										direction: n.ChatAgentVoteDirection.Up,
										reason: void 0,
									},
								}),
									S.setVote(n.ChatAgentVoteDirection.Up),
									S.setVoteDownReason(void 0);
							}
						},
					),
						(0, d.$4X)(
							class extends d.$3X {
								constructor() {
									super({
										id: e.$7Yb,
										title: (0, C.localize2)(4616, "Unhelpful"),
										f1: !1,
										category: a.$3Yb,
										icon: t.$ak.thumbsdown,
										toggled: c.$Q1.isEqualTo("down"),
										menu: [
											{
												id: d.$XX.ChatMessageTitle,
												group: "navigation",
												order: 2,
												when: m.$Kj.and(c.$X1, c.$V1.negate()),
											},
											{
												id: p.$kLb,
												group: "navigation",
												order: 2,
												when: m.$Kj.and(c.$X1, c.$V1.negate()),
											},
										],
									});
								}
								run($, ...v) {
									const S = v[0];
									if (!(0, g.$$Tb)(S)) return;
									const I = v[1];
									if (typeof I != "string") return;
									S.setVote(n.ChatAgentVoteDirection.Down),
										S.setVoteDownReason(I),
										$.get(n.$J2).notifyUserAction({
											agentId: S.agent?.id,
											command: S.slashCommand?.name,
											sessionId: S.sessionId,
											requestId: S.requestId,
											result: S.result,
											action: {
												kind: "vote",
												direction: n.ChatAgentVoteDirection.Down,
												reason: S.voteDownReason,
											},
										});
								}
							},
						),
						(0, d.$4X)(
							class extends d.$3X {
								constructor() {
									super({
										id: "workbench.action.chat.reportIssueForBug",
										title: (0, C.localize2)(4617, "Report Issue"),
										f1: !1,
										category: a.$3Yb,
										icon: t.$ak.report,
										menu: [
											{
												id: d.$XX.ChatMessageTitle,
												group: "navigation",
												order: 3,
												when: m.$Kj.and(c.$T1, c.$X1),
											},
											{
												id: p.$kLb,
												group: "navigation",
												order: 3,
												when: m.$Kj.and(c.$T1, c.$X1),
											},
										],
									});
								}
								run($, ...v) {
									const S = v[0];
									if (!(0, g.$$Tb)(S)) return;
									$.get(n.$J2).notifyUserAction({
										agentId: S.agent?.id,
										command: S.slashCommand?.name,
										sessionId: S.sessionId,
										requestId: S.requestId,
										result: S.result,
										action: { kind: "bug" },
									});
								}
							},
						),
						(0, d.$4X)(
							class extends d.$3X {
								constructor() {
									super({
										id: "workbench.action.chat.insertIntoNotebook",
										title: (0, C.localize2)(4618, "Insert into Notebook"),
										f1: !1,
										category: a.$3Yb,
										icon: t.$ak.insert,
										menu: {
											id: d.$XX.ChatMessageTitle,
											group: "navigation",
											isHiddenByDefault: !0,
											when: m.$Kj.and(f.$mJb, c.$X1, c.$U1.negate()),
										},
									});
								}
								async run($, ...v) {
									const S = v[0];
									if (!(0, g.$$Tb)(S)) return;
									const I = $.get(b.$IY);
									if (I.activeEditorPane?.getId() === o.$O6) {
										const T = I.activeEditorPane.getControl();
										if (!T.hasModel() || T.isReadOnly) return;
										const P = S.response.toString(),
											k = l(P),
											L = T.getFocus(),
											D = Math.max(L.end, 0);
										await $.get(E.$rzb).apply(
											[
												new u.$hJb(T.textModel.uri, {
													editType: o.CellEditType.Replace,
													index: D,
													count: 0,
													cells: k.map((N) => {
														const A =
																N.type === "markdown"
																	? o.CellKind.Markup
																	: o.CellKind.Code,
															R =
																N.type === "markdown" ? "markdown" : N.language,
															O =
																N.type === "markdown"
																	? "text/markdown"
																	: `text/x-${N.language}`;
														return {
															cellKind: A,
															language: R,
															mime: O,
															source: N.content,
															outputs: [],
															metadata: {},
														};
													}),
												}),
											],
											{ quotableLabel: "Insert into Notebook" },
										);
									}
								}
							},
						),
						(0, d.$4X)(
							class extends d.$3X {
								constructor() {
									super({
										id: "workbench.action.chat.remove",
										title: (0, C.localize2)(
											4619,
											"Remove Request and Response",
										),
										f1: !1,
										category: a.$3Yb,
										icon: t.$ak.x,
										keybinding: {
											primary: i.KeyCode.Delete,
											mac: { primary: i.KeyMod.CtrlCmd | i.KeyCode.Backspace },
											when: m.$Kj.and(c.$41, c.$31.negate()),
											weight: r.KeybindingWeight.WorkbenchContrib,
										},
										menu: {
											id: d.$XX.ChatMessageTitle,
											group: "navigation",
											order: 2,
											when: c.$Y1,
										},
									});
								}
								run($, ...v) {
									let S = v[0];
									(0, g.$0Tb)(S) ||
										(S = $.get(h.$GYb).lastFocusedWidget?.getFocus());
									const I = (0, g.$0Tb)(S)
										? S.id
										: (0, g.$$Tb)(S)
											? S.requestId
											: void 0;
									I && $.get(n.$J2).removeRequest(S.sessionId, I);
								}
							},
						);
				}
				function l(y) {
					const v = new w.marked.Lexer().lex(y),
						S = [];
					let I = "";
					return (
						v.forEach((T) => {
							T.type === "code"
								? (I.trim() &&
										(S.push({ type: "markdown", content: I }), (I = "")),
									S.push({
										type: "code",
										language: T.lang || "",
										content: T.text,
									}))
								: (I += T.raw);
						}),
						I.trim() && S.push({ type: "markdown", content: I }),
						S
					);
				}
			},
		),
		define(
			de[1329],
			he([
				1, 0, 7, 661, 114, 127, 183, 14, 6, 647, 27, 3, 54, 12, 9, 46, 206, 17,
				67, 448, 603, 4, 91, 607, 92, 173, 11, 10, 8, 49, 22, 413, 5, 128, 39,
				34, 40, 35, 233, 130, 417, 1047, 1720, 153, 207, 1235, 521,
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
				B,
				U,
				z,
				F,
				x,
				H,
				q,
				V,
				G,
				K,
			) {
				"use strict";
				var J;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$VYb = void 0),
					(t = mt(t)),
					(E = mt(E));
				const W = t.$,
					X = 250;
				let Y = class extends a.$1c {
					static {
						J = this;
					}
					static {
						this.INPUT_SCHEME = "chatSessionInput";
					}
					static {
						this.b = 0;
					}
					get attachedContext() {
						return this.q;
					}
					get inputPartHeight() {
						return this.H;
					}
					get inputEditor() {
						return this.I;
					}
					constructor(Q, Z, se, re, le, oe, ae, pe, $e, ye, ue) {
						super(),
							(this.Y = Q),
							(this.Z = Z),
							(this.ab = se),
							(this.bb = re),
							(this.cb = le),
							(this.db = oe),
							(this.eb = ae),
							(this.fb = pe),
							(this.gb = $e),
							(this.hb = ye),
							(this.ib = ue),
							(this.c = this.D(new m.$re())),
							(this.onDidLoadInputState = this.c.event),
							(this.f = this.D(new m.$re())),
							(this.onDidChangeHeight = this.f.event),
							(this.g = this.D(new m.$re())),
							(this.onDidFocus = this.g.event),
							(this.h = this.D(new m.$re())),
							(this.onDidBlur = this.h.event),
							(this.j = this.D(new m.$re())),
							(this.onDidChangeContext = this.j.event),
							(this.m = this.D(new m.$re())),
							(this.onDidAcceptFollowup = this.m.event),
							(this.n = -1),
							(this.q = new Set()),
							(this.r = this.D(new m.$re())),
							(this.s = this.db.createInstance(U.$uPb, {
								onDidChangeVisibility: this.r.event,
							})),
							(this.u = 0),
							(this.C = this.D(new a.$Zc())),
							(this.G = this.D(new a.$Zc())),
							(this.H = 0),
							(this.P = !1),
							(this.inputUri = n.URI.parse(`${J.INPUT_SCHEME}:input-${J.b++}`)),
							(this.t = this.Z.renderStyle === "compact" ? X / 3 : X),
							(this.R = V.$11.bindTo(ae)),
							(this.S = V.$81.bindTo(ae)),
							(this.U = V.$21.bindTo(ae)),
							(this.M = this.jb()),
							this.D(
								this.bb.onDidClearHistory(
									() => (this.M = new r.$Kob([{ text: "" }], 50, ie)),
								),
							),
							this.D(
								this.fb.onDidChangeConfiguration((fe) => {
									fe.affectsConfiguration(
										z.AccessibilityVerbositySettingId.Chat,
									) && this.inputEditor.updateOptions({ ariaLabel: this.kb() });
								}),
							);
					}
					jb() {
						const Q = this.bb.getHistory(this.Y);
						return (
							Q.length === 0 && Q.push({ text: "" }), new r.$Kob(Q, 50, ie)
						);
					}
					kb() {
						if (this.fb.getValue(z.AccessibilityVerbositySettingId.Chat)) {
							const Z = this.gb
								.lookupKeybinding(
									F.AccessibilityCommandId.OpenAccessibilityHelp,
								)
								?.getLabel();
							return Z
								? (0, l.localize)(4670, null, Z)
								: (0, l.localize)(4671, null);
						}
						return (0, l.localize)(4672, null);
					}
					updateState(Q) {
						if (this.P) return;
						const Z = { text: this.I.getValue(), state: Q };
						this.M.isAtEnd()
							? this.M.replaceLast(Z)
							: (this.M.replaceLast(Z), this.M.resetCursor());
					}
					initForNewChatModel(Q, Z) {
						(this.M = this.jb()),
							this.M.add({ text: Q ?? this.M.current().text, state: Z }),
							Q && this.setValue(Q, !1);
					}
					logInputHistory() {
						const Q = [...this.M]
							.map((Z) => JSON.stringify(Z))
							.join(`
`);
						this.ib.info(`[${this.Y}] Chat input history:`, Q);
					}
					setVisible(Q) {
						this.r.fire(Q);
					}
					get element() {
						return this.w;
					}
					showPreviousValue() {
						const Q = this.ab();
						this.M.isAtEnd()
							? this.mb(Q)
							: this.M.has({ text: this.I.getValue(), state: Q }) ||
								(this.mb(Q), this.M.resetCursor()),
							this.lb(!0);
					}
					showNextValue() {
						const Q = this.ab();
						this.M.isAtEnd() ||
							(this.M.has({ text: this.I.getValue(), state: Q }) ||
								(this.mb(Q), this.M.resetCursor()),
							this.lb(!1));
					}
					lb(Q) {
						const Z = Q ? this.M.previous() : this.M.next();
						if (
							(E.$pib(Z.text),
							(this.P = !0),
							this.setValue(Z.text, !0),
							(this.P = !1),
							this.c.fire(Z.state),
							Q)
						)
							this.I.setPosition({ lineNumber: 1, column: 1 });
						else {
							const se = this.I.getModel();
							if (!se) return;
							this.I.setPosition(ne(se));
						}
					}
					setValue(Q, Z) {
						this.inputEditor.setValue(Q),
							this.inputEditor.setPosition({
								lineNumber: 1,
								column: Q.length + 1,
							}),
							Z || this.mb(this.ab());
					}
					mb(Q) {
						const Z = { text: this.I.getValue(), state: Q };
						this.M.replaceLast(Z);
					}
					focus() {
						this.I.focus();
					}
					hasFocus() {
						return this.I.hasWidgetFocus();
					}
					async acceptInput(Q) {
						if (Q) {
							const se = { text: this.I.getValue(), state: this.ab() };
							this.M.replaceLast(se), this.M.add({ text: "" });
						}
						this.q.clear(),
							this.c.fire({}),
							this.hb.isScreenReaderOptimized() && c.$m
								? this.nb()
								: (this.I.focus(), this.I.setValue(""));
					}
					nb() {
						const Q = this.I.getDomNode();
						Q &&
							(Q.remove(),
							this.I.setValue(""),
							this.J.appendChild(Q),
							this.I.focus());
					}
					attachContext(Q, ...Z) {
						const se = [];
						if (
							(Q && (se.push(...Array.from(this.q)), this.q.clear()),
							Z.length > 0)
						)
							for (const re of Z) this.q.add(re);
						(se.length > 0 || Z.length > 0) &&
							(this.ob(this.F), Q || this.j.fire({ removed: se, added: Z }));
					}
					render(Q, Z, se) {
						(this.w = t.$fhb(Q, W(".interactive-input-part"))),
							this.w.classList.toggle(
								"compact",
								this.Z.renderStyle === "compact",
							);
						let re, le;
						this.Z.renderStyle === "compact"
							? ((le = t.$fhb(
									this.w,
									W(".interactive-input-and-side-toolbar"),
								)),
								(this.z = t.$fhb(this.w, W(".interactive-input-followups"))),
								(re = t.$fhb(le, W(".interactive-input-and-execute-toolbar"))),
								(this.F = t.$fhb(this.w, W(".chat-attached-context"))))
							: ((this.z = t.$fhb(this.w, W(".interactive-input-followups"))),
								(this.F = t.$fhb(this.w, W(".chat-attached-context"))),
								(le = t.$fhb(this.w, W(".interactive-input-and-side-toolbar"))),
								(re = t.$fhb(le, W(".interactive-input-and-execute-toolbar")))),
							this.ob(this.F);
						const oe = this.D(this.eb.createScoped(re));
						V.$31.bindTo(oe).set(!0);
						const ae = this.D(this.db.createChild(new N.$Ki([P.$6j, oe]))),
							{
								historyNavigationBackwardsEnablement: pe,
								historyNavigationForwardsEnablement: $e,
							} = this.D((0, D.$UCb)(oe, this));
						(this.N = pe), (this.O = $e);
						const ye = (0, K.$xYb)(this.fb);
						(ye.overflowWidgetsDomNode = this.Z.editorOverflowWidgetsDomNode),
							(ye.readOnly = !1),
							(ye.ariaLabel = this.kb()),
							(ye.fontFamily = i.$njb),
							(ye.fontSize = 13),
							(ye.lineHeight = 20),
							(ye.padding =
								this.Z.renderStyle === "compact"
									? { top: 2, bottom: 2 }
									: { top: 8, bottom: 8 }),
							(ye.cursorWidth = 1),
							(ye.wrappingStrategy = "advanced"),
							(ye.bracketPairColorization = { enabled: !1 }),
							(ye.suggest = {
								showIcons: !1,
								showSnippets: !1,
								showWords: !0,
								showStatusBar: !1,
								insertMode: "replace",
							}),
							(ye.scrollbar = { ...(ye.scrollbar ?? {}), vertical: "hidden" }),
							(ye.stickyScroll = { enabled: !1 }),
							(this.J = t.$fhb(re, W(_)));
						const ue = (0, K.$yYb)();
						if (
							(ue.contributions?.push(
								...g.EditorExtensionsRegistry.getSomeEditorContributions([
									b.$whc.ID,
									s.$2Ob.ID,
								]),
							),
							(this.I = this.D(ae.createInstance(p.$rwb, this.J, ye, ue))),
							this.D(
								this.I.onDidChangeModelContent(() => {
									const ve = Math.min(this.I.getContentHeight(), this.t);
									ve !== this.u && ((this.u = ve), this.f.fire());
									const ge = this.I.getModel(),
										be = !!ge && ge.getValue().trim().length > 0;
									this.R.set(be);
								}),
							),
							this.D(
								this.I.onDidFocusEditorText(() => {
									this.U.set(!0),
										this.g.fire(),
										re.classList.toggle("focused", !0);
								}),
							),
							this.D(
								this.I.onDidBlurEditorText(() => {
									this.U.set(!1),
										re.classList.toggle("focused", !1),
										this.h.fire();
								}),
							),
							(this.L = this.D(
								this.db.createInstance(
									S.$Tyb,
									re,
									this.Z.menus.executeToolbar,
									{
										telemetrySource: this.Z.menus.telemetrySource,
										menuOptions: { shouldForwardArgs: !0 },
										hiddenItemStrategy: S.HiddenItemStrategy.Ignore,
										actionViewItemProvider: (ve, ge) => {
											if (
												this.Y === q.ChatAgentLocation.Panel &&
												(ve.id === x.$PYb.ID || ve.id === x.$RYb.ID) &&
												ve instanceof I.$2X
											) {
												const be = this.db.createInstance(
													I.$2X,
													{
														id: "chat.moreExecuteActions",
														title: (0, l.localize)(4673, null),
														icon: d.$ak.chevronDown,
													},
													void 0,
													void 0,
													void 0,
													void 0,
												);
												return this.db.createInstance(ee, ve, be);
											}
										},
									},
								),
							)),
							this.L.getElement().classList.add("interactive-execute-toolbar"),
							(this.L.context = { widget: se }),
							this.D(
								this.L.onDidChangeMenuItems(() => {
									this.W &&
										typeof this.X == "number" &&
										this.X !== this.L.getItemsWidth() &&
										this.layout(this.W.height, this.W.width);
								}),
							),
							this.Z.menus.inputSideToolbar)
						) {
							const ve = this.D(
								this.db.createInstance(
									S.$Tyb,
									le,
									this.Z.menus.inputSideToolbar,
									{
										telemetrySource: this.Z.menus.telemetrySource,
										menuOptions: { shouldForwardArgs: !0 },
									},
								),
							);
							(this.y = ve.getElement()),
								ve.getElement().classList.add("chat-side-toolbar"),
								(ve.context = { widget: se });
						}
						let fe = this.cb.getModel(this.inputUri);
						if (
							(fe ||
								((fe = this.cb.createModel("", null, this.inputUri, !0)),
								this.D(fe)),
							(this.Q = fe),
							this.Q.updateOptions({
								bracketColorizationOptions: {
									enabled: !1,
									independentColorPoolPerBracketType: !1,
								},
							}),
							this.I.setModel(this.Q),
							Z)
						) {
							this.Q.setValue(Z);
							const ve = this.Q.getLineCount();
							this.I.setPosition({
								lineNumber: ve,
								column: this.Q.getLineMaxColumn(ve),
							});
						}
						const me = () => {
							const ve = this.I.getModel();
							if (!ve) return;
							const ge = this.I.getPosition();
							if (!ge) return;
							const be = ge.column === 1 && ge.lineNumber === 1;
							this.S.set(be), this.N.set(be), this.O.set(ge.equals(ne(ve)));
						};
						this.D(this.I.onDidChangeCursorPosition((ve) => me())), me();
					}
					ob(Q, Z = !1) {
						const se = Q.offsetHeight;
						t.$9fb(Q),
							this.G.clear(),
							t.$khb(!!this.attachedContext.size, this.F),
							this.attachedContext.size || (this.n = -1),
							[...this.attachedContext.values()].forEach((re, le) => {
								const oe = t.$fhb(
										Q,
										W(".chat-attached-context-attachment.show-file-icons"),
									),
									ae = this.s.create(oe, { supportIcons: !0 }),
									pe = n.URI.isUri(re.value)
										? re.value
										: re.value &&
												typeof re.value == "object" &&
												"uri" in re.value &&
												n.URI.isUri(re.value.uri)
											? re.value.uri
											: void 0,
									$e =
										re.value &&
										typeof re.value == "object" &&
										"range" in re.value &&
										o.$iL.isIRange(re.value.range)
											? re.value.range
											: void 0;
								if (pe && re.isFile) {
									const fe = (0, h.$sc)(pe.path),
										me = (0, h.$rc)(pe.path),
										ve = `${fe} ${me}`,
										ge = $e
											? (0, l.localize)(
													4674,
													null,
													ve,
													$e.startLineNumber,
													$e.endLineNumber,
												)
											: (0, l.localize)(4675, null, ve);
									ae.setFile(pe, {
										fileKind: L.FileKind.FILE,
										hidePath: !0,
										range: $e,
									}),
										(oe.ariaLabel = ge),
										(oe.tabIndex = 0);
								} else {
									const fe = re.fullName ?? re.name,
										me = re.icon?.id ? `$(${re.icon.id}) ${fe}` : fe;
									ae.setLabel(me, void 0),
										(oe.ariaLabel = (0, l.localize)(4676, null, re.name)),
										(oe.tabIndex = 0);
								}
								const ye = new C.$oob(oe, { supportIcons: !0 });
								le === Math.min(this.n, this.attachedContext.size - 1) &&
									ye.focus(),
									this.G.add(ye),
									(ye.icon = d.$ak.close);
								const ue = ye.onDidClick((fe) => {
									if ((this.q.delete(re), ue.dispose(), t.$8gb(fe))) {
										const me = new w.$7fb(fe);
										(me.equals(u.KeyCode.Enter) ||
											me.equals(u.KeyCode.Space)) &&
											(this.n = le);
									}
									this.f.fire(), this.j.fire({ removed: [re] });
								});
								this.G.add(ue);
							}),
							se !== Q.offsetHeight && !Z && this.f.fire();
					}
					async renderFollowups(Q, Z) {
						this.Z.renderFollowups &&
							(this.C.clear(),
							t.$9fb(this.z),
							Q &&
								Q.length > 0 &&
								this.C.add(
									this.db.createInstance(
										H.$RXb,
										this.z,
										Q,
										this.Y,
										void 0,
										(se) => this.m.fire({ followup: se, response: Z }),
									),
								),
							this.f.fire());
					}
					get contentHeight() {
						const Q = this.rb();
						return (
							Q.followupsHeight +
							Q.inputPartEditorHeight +
							Q.inputPartVerticalPadding +
							Q.inputEditorBorder +
							Q.implicitContextHeight
						);
					}
					layout(Q, Z) {
						return (this.W = new t.$pgb(Z, Q)), this.qb(Q, Z);
					}
					qb(Q, Z, se = !0) {
						this.ob(this.F, !0);
						const re = this.rb(),
							le = Math.min(
								re.inputPartEditorHeight,
								Q - re.followupsHeight - re.inputPartVerticalPadding,
							),
							oe = Z - re.inputPartHorizontalPadding;
						(this.z.style.width = `${oe}px`),
							(this.H =
								re.followupsHeight +
								le +
								re.inputPartVerticalPadding +
								re.inputEditorBorder +
								re.implicitContextHeight);
						const ae = this.I.getScrollWidth(),
							$e = {
								width:
									Z -
									re.inputPartHorizontalPadding -
									re.editorBorder -
									re.editorPadding -
									re.executeToolbarWidth -
									re.sideToolbarWidth -
									re.toolbarPadding,
								height: le,
							};
						if (
							((!this.pb ||
								this.pb.width !== $e.width ||
								this.pb.height !== $e.height) &&
								(this.I.layout($e), (this.pb = $e)),
							se && ae < 10)
						)
							return this.qb(Q, Z, !1);
					}
					rb() {
						return {
							inputEditorBorder: 2,
							followupsHeight: this.z.offsetHeight,
							inputPartEditorHeight: Math.min(
								this.I.getContentHeight(),
								this.t,
							),
							inputPartHorizontalPadding:
								this.Z.renderStyle === "compact" ? 12 : 40,
							inputPartVerticalPadding:
								this.Z.renderStyle === "compact" ? 12 : 24,
							implicitContextHeight: this.F.offsetHeight,
							editorBorder: 2,
							editorPadding: 12,
							toolbarPadding: (this.L.getItemsLength() - 1) * 4,
							executeToolbarWidth: (this.X = this.L.getItemsWidth()),
							sideToolbarWidth: this.y ? t.$vgb(this.y) + 4 : 0,
						};
					}
					saveState() {
						this.mb(this.ab());
						const Q = [...this.M];
						this.bb.saveHistory(this.Y, Q);
					}
				};
				(e.$VYb = Y),
					(e.$VYb =
						Y =
						J =
							Ne(
								[
									j(3, G.$TYb),
									j(4, f.$QO),
									j(5, M.$Li),
									j(6, P.$6j),
									j(7, T.$gj),
									j(8, A.$uZ),
									j(9, y.$XK),
									j(10, R.$ik),
								],
								Y,
							));
				const ie = (te) => JSON.stringify(te);
				function ne(te) {
					return {
						lineNumber: te.getLineCount(),
						column: te.getLineLength(te.getLineCount()) + 1,
					};
				}
				let ee = class extends $.$OYb {
					constructor(Q, Z, se, re, le, oe, ae, pe, $e, ye) {
						super(
							Q,
							Z,
							[],
							"",
							re,
							{ getKeyBinding: (me) => ae.lookupKeybinding(me.id, oe) },
							ae,
							pe,
							oe,
							$e,
							ye,
						);
						const ue = se.createMenu(I.$XX.ChatExecuteSecondary, oe),
							fe = () => {
								const me = [];
								(0, v.$Kyb)(ue, { shouldForwardArgs: !0 }, me);
								const ve = le.getSecondaryAgent();
								ve &&
									me.forEach(
										(ge) => (
											ge.id === x.$QYb.ID &&
												(ge.label = (0, l.localize)(4677, null, ve.name)),
											ge
										),
									),
									this.update(Z, me);
							};
						fe(), this.D(ue.onDidChange(() => fe()));
					}
				};
				ee = Ne(
					[
						j(2, I.$YX),
						j(3, k.$Xxb),
						j(4, q.$c3),
						j(5, P.$6j),
						j(6, A.$uZ),
						j(7, O.$4N),
						j(8, B.$iP),
						j(9, y.$XK),
					],
					ee,
				);
				const _ = ".interactive-input-editor";
				(0, K.$zYb)(_);
			},
		),
		define(
			de[1048],
			he([
				1, 0, 50, 24, 214, 15, 29, 3, 56, 65, 17, 98, 122, 74, 4, 49, 5, 63,
				1723, 447, 3765, 18, 281, 38, 89, 683, 10, 791, 1323, 6, 8, 3030, 127,
				505, 130, 417, 39, 91, 9, 983, 1143,
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
				B,
				U,
				z,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$rpc = e.ID = void 0),
					(e.$qpc = H),
					(c = mt(c)),
					(n = mt(n)),
					(e.ID = "editor.contrib.review");
				class F {
					get id() {
						return this.c;
					}
					set id(G) {
						this.c = G;
					}
					get range() {
						return {
							startLineNumber: this.d,
							startColumn: 1,
							endLineNumber: this.f,
							endColumn: 1,
						};
					}
					constructor(G, K, J, W, X, Y, ie, ne = !1) {
						(this.g = G),
							(this.h = K),
							(this.j = J),
							(this.k = W),
							(this.l = X),
							(this.options = Y),
							(this.m = ie),
							(this.isHover = ne),
							(this.d = X.startLineNumber),
							(this.f = X.endLineNumber);
					}
					getCommentAction() {
						return {
							extensionId: this.j,
							label: this.k,
							ownerId: this.h,
							commentingRangesInfo: this.m,
						};
					}
					getOriginalRange() {
						return this.l;
					}
					getActiveRange() {
						return this.id
							? this.g.getModel().getDecorationRange(this.id)
							: void 0;
					}
				}
				class x {
					static {
						this.description = "commenting-range-decorator";
					}
					constructor() {
						(this.g = []),
							(this.h = []),
							(this.l = -1),
							(this.o = new k.$re()),
							(this.onDidChangeDecorationsCount = this.o.event);
						const G = {
							description: x.description,
							isWholeLine: !0,
							linesDecorationsClassName:
								"comment-range-glyph comment-diff-added",
						};
						this.c = h.$eY.createDynamic(G);
						const K = {
							description: x.description,
							isWholeLine: !0,
							linesDecorationsClassName: "comment-range-glyph line-hover",
						};
						this.d = h.$eY.createDynamic(K);
						const J = {
							description: x.description,
							isWholeLine: !0,
							linesDecorationsClassName: "comment-range-glyph multiline-add",
						};
						this.f = h.$eY.createDynamic(J);
					}
					updateHover(G) {
						this.j && this.k && G !== this.l && this.q(this.j, this.k, G),
							(this.l = G ?? -1);
					}
					updateSelection(G, K = new u.$iL(0, 0, 0, 0)) {
						(this.m = K.isEmpty() ? void 0 : K),
							(this.n = K.isEmpty() ? void 0 : G),
							this.j && this.k && this.q(this.j, this.k, G, K);
					}
					update(G, K, J, W) {
						G && ((this.j = G), (this.k = K), this.q(G, K, J, W));
					}
					p(G, K) {
						return G.getDecorationsInRange(K)?.find(
							(J) => J.options.description === f.$jpc.description,
						);
					}
					q(G, K, J = -1, W = this.m) {
						if (!G.getModel()) return;
						J = this.n ?? J;
						const Y = [];
						for (const ne of K)
							ne.commentingRanges.ranges.forEach((ee) => {
								const _ = new u.$iL(
									ee.startLineNumber,
									ee.startColumn,
									ee.endLineNumber,
									ee.endColumn,
								);
								let te = W ? _.intersectRanges(W) : void 0;
								if (
									W &&
									J >= 0 &&
									te &&
									!(
										te.startLineNumber === te.endLineNumber &&
										J === te.startLineNumber
									)
								) {
									let Q;
									J <= te.startLineNumber
										? ((Q = te.collapseToStart()),
											(te = new u.$iL(
												te.startLineNumber + 1,
												1,
												te.endLineNumber,
												1,
											)))
										: ((Q = new u.$iL(
												te.endLineNumber,
												1,
												te.endLineNumber,
												1,
											)),
											(te = new u.$iL(
												te.startLineNumber,
												1,
												te.endLineNumber - 1,
												1,
											))),
										Y.push(
											new F(
												G,
												ne.uniqueOwner,
												ne.extensionId,
												ne.label,
												te,
												this.f,
												ne.commentingRanges,
												!0,
											),
										),
										this.p(G, Q) ||
											Y.push(
												new F(
													G,
													ne.uniqueOwner,
													ne.extensionId,
													ne.label,
													Q,
													this.d,
													ne.commentingRanges,
													!0,
												),
											);
									const Z = Math.min(Q.startLineNumber, te.startLineNumber) - 1,
										se = _.startLineNumber <= Z,
										re = Math.max(Q.endLineNumber, te.endLineNumber) + 1,
										le = _.endLineNumber >= re;
									if (se) {
										const oe = new u.$iL(ee.startLineNumber, 1, Z, 1);
										Y.push(
											new F(
												G,
												ne.uniqueOwner,
												ne.extensionId,
												ne.label,
												oe,
												this.c,
												ne.commentingRanges,
												!0,
											),
										);
									}
									if (le) {
										const oe = new u.$iL(re, 1, ee.endLineNumber, 1);
										Y.push(
											new F(
												G,
												ne.uniqueOwner,
												ne.extensionId,
												ne.label,
												oe,
												this.c,
												ne.commentingRanges,
												!0,
											),
										);
									}
								} else if (_.startLineNumber <= J && J <= _.endLineNumber) {
									if (_.startLineNumber < J) {
										const Z = new u.$iL(ee.startLineNumber, 1, J - 1, 1);
										Y.push(
											new F(
												G,
												ne.uniqueOwner,
												ne.extensionId,
												ne.label,
												Z,
												this.c,
												ne.commentingRanges,
												!0,
											),
										);
									}
									const Q = new u.$iL(J, 1, J, 1);
									if (
										(this.p(G, Q) ||
											Y.push(
												new F(
													G,
													ne.uniqueOwner,
													ne.extensionId,
													ne.label,
													Q,
													this.d,
													ne.commentingRanges,
													!0,
												),
											),
										J < _.endLineNumber)
									) {
										const Z = new u.$iL(J + 1, 1, ee.endLineNumber, 1);
										Y.push(
											new F(
												G,
												ne.uniqueOwner,
												ne.extensionId,
												ne.label,
												Z,
												this.c,
												ne.commentingRanges,
												!0,
											),
										);
									}
								} else
									Y.push(
										new F(
											G,
											ne.uniqueOwner,
											ne.extensionId,
											ne.label,
											ee,
											this.c,
											ne.commentingRanges,
										),
									);
							});
						G.changeDecorations((ne) => {
							(this.h = ne.deltaDecorations(this.h, Y)),
								Y.forEach((ee, _) => (ee.id = this.h[_]));
						});
						const ie = this.g.length - Y.length;
						(this.g = Y), ie && this.o.fire(this.g.length);
					}
					r(G, K) {
						return !(
							G.endLineNumber < K.startLineNumber - 1 ||
							K.endLineNumber + 1 < G.startLineNumber
						);
					}
					getMatchedCommentAction(G) {
						if (G === void 0) {
							const W = this.k?.filter((X) => X.commentingRanges.fileComments);
							return W
								? W.map((X) => ({
										action: {
											ownerId: X.uniqueOwner,
											extensionId: X.extensionId,
											label: X.label,
											commentingRangesInfo: X.commentingRanges,
										},
									}))
								: [];
						}
						const K = new Map();
						for (const W of this.g) {
							const X = W.getActiveRange();
							if (X && this.r(X, G)) {
								const Y = W.getCommentAction(),
									ie = K.get(Y.ownerId);
								if (
									ie?.action.commentingRangesInfo === Y.commentingRangesInfo
								) {
									const ne = new u.$iL(
										X.startLineNumber < ie.range.startLineNumber
											? X.startLineNumber
											: ie.range.startLineNumber,
										X.startColumn < ie.range.startColumn
											? X.startColumn
											: ie.range.startColumn,
										X.endLineNumber > ie.range.endLineNumber
											? X.endLineNumber
											: ie.range.endLineNumber,
										X.endColumn > ie.range.endColumn
											? X.endColumn
											: ie.range.endColumn,
									);
									K.set(Y.ownerId, { range: ne, action: Y });
								} else K.set(Y.ownerId, { range: X, action: Y });
							}
						}
						const J = new Set();
						return Array.from(K.values()).filter((W) =>
							J.has(W.action.ownerId) ? !1 : (J.add(W.action.ownerId), !0),
						);
					}
					getNearestCommentingRange(G, K) {
						let J, W;
						if (K) {
							W = [];
							for (let X = this.g.length - 1; X >= 0; X--) W.push(this.g[X]);
						} else W = this.g;
						for (const X of W) {
							const Y = X.getActiveRange();
							if (Y) {
								if (J && this.r(Y, J)) {
									J = u.$iL.plusRange(J, Y);
									continue;
								}
								if (
									Y.startLineNumber <= G.lineNumber &&
									G.lineNumber <= Y.endLineNumber
								) {
									J = new u.$iL(
										Y.startLineNumber,
										Y.startColumn,
										Y.endLineNumber,
										Y.endColumn,
									);
									continue;
								}
								if (
									!(!K && Y.endLineNumber < G.lineNumber) &&
									!(K && Y.startLineNumber > G.lineNumber)
								)
									return Y;
							}
						}
						return W.length > 0 ? (W[0].getActiveRange() ?? void 0) : void 0;
					}
					dispose() {
						this.g = [];
					}
				}
				function H(V, G, K, J, W, X, Y, ie, ne) {
					if (!J.resource) return;
					V.isCommentingEnabled || V.enableCommenting(!0);
					const ee = J.range,
						_ = X
							? s.CommentWidgetFocus.Editor
							: ie
								? s.CommentWidgetFocus.None
								: s.CommentWidgetFocus.Widget,
						te = G.activeTextEditorControl,
						Q = (0, m.$$sb)(te)
							? [te.getOriginalEditor(), te.getModifiedEditor()]
							: te
								? [te]
								: [],
						Z = J.threadId,
						se = W?.uniqueIdInThread,
						re = U.URI.parse(J.resource);
					for (const le of Q) {
						const oe = le.getModel();
						if (oe instanceof h.$$X && K.extUri.isEqual(re, oe.uri)) {
							Z &&
								(0, m.$0sb)(le) &&
								q.get(le)?.revealCommentThread(Z, se, !0, _);
							return;
						}
					}
					G.openEditor(
						{
							resource: re,
							options: {
								pinned: Y,
								preserveFocus: ie,
								selection: ee ?? new u.$iL(1, 1, 1, 1),
							},
						},
						ne ? l.$KY : l.$JY,
					).then((le) => {
						if (le) {
							const oe = le.getControl();
							Z &&
								(0, m.$0sb)(oe) &&
								q.get(oe)?.revealCommentThread(Z, se, !0, _);
						}
					});
				}
				let q = class {
					constructor(G, K, J, W, X, Y, ie, ne, ee, _, te, Q) {
						(this.B = K),
							(this.C = J),
							(this.D = W),
							(this.E = X),
							(this.F = Y),
							(this.G = ie),
							(this.H = ne),
							(this.I = _),
							(this.J = te),
							(this.K = Q),
							(this.c = new d.$Zc()),
							(this.d = new d.$Zc()),
							(this.l = null),
							(this.m = !1),
							(this.n = 0),
							(this.r = []),
							(this.w = new Map()),
							(this.x = []),
							(this.A = !1),
							(this.h = []),
							(this.g = []),
							(this.u = {}),
							(this.v = {}),
							(this.o = null),
							(this.y =
								N.CommentContextKeys.activeCursorHasCommentingRange.bindTo(ee)),
							(this.z =
								N.CommentContextKeys.activeEditorHasCommentingRange.bindTo(ee)),
							!(G instanceof y.$wDb) &&
								((this.f = G),
								(this.j = new x()),
								this.c.add(
									this.j.onDidChangeDecorationsCount((Z) => {
										Z === 0 ? this.M() : this.x.length === 0 && this.L();
									}),
								),
								this.c.add((this.k = new D.$opc(this.B))),
								this.c.add(
									this.B.onDidDeleteDataProvider((Z) => {
										Z
											? (delete this.u[Z], delete this.v[Z])
											: ((this.u = {}), (this.v = {})),
											this.S();
									}),
								),
								this.c.add(this.B.onDidSetDataProvider((Z) => this.Z())),
								this.c.add(this.B.onDidUpdateCommentingRanges((Z) => this.Z())),
								this.c.add(
									this.B.onDidSetResourceCommentInfos(async (Z) => {
										const se =
											this.f && this.f.hasModel() && this.f.getModel().uri;
										se &&
											se.toString() === Z.resource.toString() &&
											(await this.ob(
												Z.commentInfos.filter((re) => re !== null),
											));
									}),
								),
								this.c.add(
									this.B.onDidChangeCommentingEnabled((Z) => {
										Z
											? (this.L(), this.S())
											: (this.nb(),
												this.M(),
												this.j.update(this.f, []),
												this.k.update(this.f, []),
												(0, d.$Vc)(this.g),
												(this.g = []));
									}),
								),
								this.c.add(this.f.onWillChangeModel((Z) => this.W(Z))),
								this.c.add(
									this.f.onDidChangeModel((Z) => this.onModelChanged()),
								),
								this.c.add(
									this.H.onDidChangeConfiguration((Z) => {
										Z.affectsConfiguration("diffEditor.renderSideBySide") &&
											this.S();
									}),
								),
								this.onModelChanged(),
								this.D.registerDecorationType("comment-controller", P.$m3b, {}),
								this.c.add(
									this.B.registerContinueOnCommentProvider({
										provideContinueOnComments: () => {
											const Z = [];
											if (this.g)
												for (const se of this.g) {
													const le = se.getPendingComments().newComment;
													if (!le) continue;
													let oe;
													if (
														se.commentThread.comments &&
														se.commentThread.comments.length
													) {
														const ae =
															se.commentThread.comments[
																se.commentThread.comments.length - 1
															];
														typeof ae.body == "string"
															? (oe = ae.body)
															: (oe = ae.body.value);
													}
													le !== oe &&
														Z.push({
															uniqueOwner: se.uniqueOwner,
															uri: se.editor.getModel().uri,
															range: se.commentThread.range,
															body: le,
															isReply:
																se.commentThread.comments !== void 0 &&
																se.commentThread.comments.length > 0,
														});
												}
											return Z;
										},
									}),
								));
					}
					L() {
						(this.x = []),
							this.f &&
								(this.x.push(this.f.onMouseMove((G) => this.O(G))),
								this.x.push(this.f.onMouseLeave(() => this.N())),
								this.x.push(
									this.f.onDidChangeCursorPosition((G) => this.Q(G.position)),
								),
								this.x.push(
									this.f.onDidFocusEditorWidget(() =>
										this.Q(this.f?.getPosition() ?? null),
									),
								),
								this.x.push(
									this.f.onDidChangeCursorSelection((G) => this.P(G)),
								),
								this.x.push(this.f.onDidBlurEditorWidget(() => this.P())));
					}
					M() {
						(0, d.$Vc)(this.x), (this.x = []);
					}
					N() {
						this.j.updateHover();
					}
					O(G) {
						const K = G.target.position?.lineNumber;
						G.event.leftButton.valueOf() && K && this.l
							? this.j.updateSelection(K, new u.$iL(this.l.lineNumber, 1, K, 1))
							: this.j.updateHover(K);
					}
					P(G) {
						const K = this.f?.getPosition()?.lineNumber;
						K && this.j.updateSelection(K, G?.selection);
					}
					Q(G) {
						const K = G
							? this.f?.getDecorationsInRange(
									u.$iL.fromPositions(G, {
										column: -1,
										lineNumber: G.lineNumber,
									}),
								)
							: void 0;
						let J = !1;
						if (K)
							for (const W of K)
								if (W.options.description === f.$jpc.description) {
									J = !1;
									break;
								} else W.options.description === x.description && (J = !0);
						this.y.set(J);
					}
					R(G) {
						return this.H.getValue("diffEditor.renderSideBySide")
							? !1
							: !!this.I.visibleTextEditorControls.find((J) =>
									J.getEditorType() === a.EditorType.IDiffEditor
										? J.getOriginalEditor() === G
										: !1,
								);
					}
					S() {
						return (
							(this.o = (0, E.$zh)((G) => {
								const K = this.f && this.f.hasModel() && this.f.getModel().uri;
								return K ? this.B.getDocumentComments(K) : Promise.resolve([]);
							})),
							(this.p = this.o.then(
								async (G) => {
									await this.ob((0, i.$Lb)(G)), (this.o = null);
								},
								(G) => console.log(G),
							)),
							this.o.then(() => (this.p = void 0)),
							this.p
						);
					}
					T() {
						this.t &&
							(this.s && (this.s.cancel(), (this.s = null)),
							this.t
								.trigger(() => {
									const G =
										this.f && this.f.hasModel() && this.f.getModel().uri;
									return G
										? this.B.getDocumentComments(G)
										: Promise.resolve([]);
								})
								.then(
									(G) => {
										if (this.B.isCommentingEnabled) {
											const K = (0, i.$Lb)(G);
											this.j.update(
												this.f,
												K,
												this.f?.getPosition()?.lineNumber,
												this.f?.getSelection() ?? void 0,
											);
										}
									},
									(G) => ((0, C.$4)(G), null),
								));
					}
					static get(G) {
						return G.getContribution(e.ID);
					}
					revealCommentThread(G, K, J, W) {
						const X = this.g.filter((Y) => Y.commentThread.threadId === G);
						X.length === 1
							? X[0].reveal(K, W)
							: J &&
								(this.p
									? this.p.then((Y) => {
											this.revealCommentThread(G, K, !1, W);
										})
									: this.S().then((Y) => {
											this.revealCommentThread(G, K, !1, W);
										}));
					}
					collapseAll() {
						for (const G of this.g) G.collapse();
					}
					expandAll() {
						for (const G of this.g) G.expand();
					}
					expandUnresolved() {
						for (const G of this.g)
							G.commentThread.state === c.CommentThreadState.Unresolved &&
								G.expand();
					}
					nextCommentThread() {
						this.U();
					}
					U(G) {
						if (!this.g.length || !this.f?.hasModel()) return;
						const K = G
								? this.f.getSelection().getStartPosition()
								: this.f.getSelection().getEndPosition(),
							J = this.g.sort((Y, ie) => {
								if (G) {
									const ne = Y;
									(Y = ie), (ie = ne);
								}
								return Y.commentThread.range === void 0
									? -1
									: ie.commentThread.range === void 0
										? 1
										: Y.commentThread.range.startLineNumber <
												ie.commentThread.range.startLineNumber
											? -1
											: Y.commentThread.range.startLineNumber >
													ie.commentThread.range.startLineNumber
												? 1
												: Y.commentThread.range.startColumn <
														ie.commentThread.range.startColumn
													? -1
													: Y.commentThread.range.startColumn >
															ie.commentThread.range.startColumn
														? 1
														: 0;
							}),
							W = (0, w.$ob)(J, (Y) => {
								const ie = G
										? K.lineNumber
										: (Y.commentThread.range?.startLineNumber ?? 0),
									ne = G
										? (Y.commentThread.range?.startLineNumber ?? 0)
										: K.lineNumber,
									ee = G ? K.column : (Y.commentThread.range?.startColumn ?? 0),
									_ = G ? (Y.commentThread.range?.startColumn ?? 0) : K.column;
								return ie > ne ? !0 : ie < ne ? !1 : ee > _;
							});
						let X;
						W === this.g.length ? (X = this.g[0]) : (X = J[W]),
							this.f.setSelection(
								X.commentThread.range ?? new u.$iL(1, 1, 1, 1),
							),
							X.reveal(void 0, s.CommentWidgetFocus.Widget);
					}
					previousCommentThread() {
						this.U(!0);
					}
					V(G) {
						if (!this.f?.hasModel()) return;
						const K = this.f.getSelection().getEndPosition(),
							J = this.j.getNearestCommentingRange(K, G);
						if (J) {
							const W = G ? J.getEndPosition() : J.getStartPosition();
							this.f.setPosition(W),
								this.f.revealLineInCenterIfOutsideViewport(W.lineNumber);
						}
						if (this.K.isScreenReaderOptimized()) {
							const W = J?.getStartPosition().lineNumber,
								X = J?.getEndPosition().lineNumber;
							W &&
								X &&
								(W === X
									? (0, M.$pib)(n.localize(5039, null, W))
									: (0, M.$pib)(n.localize(5040, null, W, X)));
						}
					}
					nextCommentingRange() {
						this.V();
					}
					previousCommentingRange() {
						this.V(!0);
					}
					dispose() {
						this.c.dispose(),
							this.d.dispose(),
							(0, d.$Vc)(this.x),
							(0, d.$Vc)(this.g),
							(this.f = null);
					}
					W(G) {
						G.newModelUrl && this.nb(G.newModelUrl);
					}
					async X(G, K, J) {
						if (
							this.g.filter(
								(te) =>
									te.uniqueOwner === K &&
									te.commentThread.threadId === J.threadId,
							).length
						)
							return;
						const X = this.g.filter(
							(te) =>
								te.uniqueOwner === K &&
								te.commentThread.commentThreadHandle === -1 &&
								u.$iL.equalsRange(te.commentThread.range, J.range),
						);
						if (X.length) {
							X[0].update(J);
							return;
						}
						const Y = this.w
							.get(K)
							?.findIndex((te) =>
								te.range === void 0
									? J.range === void 0
									: u.$iL.lift(te.range).equalsRange(J.range),
							);
						let ie;
						Y !== void 0 &&
							Y >= 0 &&
							(ie = this.w.get(K)?.splice(Y, 1)[0].body);
						const ne = (this.u[K] && this.u[K][J.threadId]) ?? ie,
							ee = this.v[K] && this.v[K][J.threadId],
							_ =
								J.canReply &&
								J.isTemplate &&
								(!J.comments || J.comments.length === 0) &&
								(!J.editorId || J.editorId === G);
						await this.ab(K, J, _, ne, ee),
							this.h.filter((te) => te.uniqueOwner === K)[0].threads.push(J),
							this.nb();
					}
					onModelChanged() {
						this.d.clear(),
							this.nb(),
							this.pb(),
							this.f &&
								((this.A = !1),
								this.d.add(this.f.onMouseDown((G) => this.bb(G))),
								this.d.add(this.f.onMouseUp((G) => this.cb(G))),
								this.x.length && (this.M(), this.L()),
								(this.t = new E.$Jh(200)),
								this.d.add({
									dispose: () => {
										this.t?.cancel(), (this.t = null);
									},
								}),
								this.d.add(
									this.f.onDidChangeModelContent(async () => {
										this.T();
									}),
								),
								this.d.add(
									this.B.onDidUpdateCommentThreads(async (G) => {
										const K =
											this.f && this.f.hasModel() && this.f.getModel().uri;
										if (!K || !this.B.isCommentingEnabled) return;
										this.o && (await this.o);
										const J = this.h.filter(
											(ee) => ee.uniqueOwner === G.uniqueOwner,
										);
										if (!J || !J.length) return;
										const W = G.added.filter(
												(ee) => ee.resource && ee.resource === K.toString(),
											),
											X = G.removed.filter(
												(ee) => ee.resource && ee.resource === K.toString(),
											),
											Y = G.changed.filter(
												(ee) => ee.resource && ee.resource === K.toString(),
											),
											ie = G.pending.filter(
												(ee) => ee.uri.toString() === K.toString(),
											);
										X.forEach((ee) => {
											const _ = this.g.filter(
												(Q) =>
													Q.uniqueOwner === G.uniqueOwner &&
													Q.commentThread.threadId === ee.threadId &&
													Q.commentThread.threadId !== "",
											);
											if (_.length) {
												const Q = _[0],
													Z = this.g.indexOf(Q);
												this.g.splice(Z, 1), Q.dispose();
											}
											const te = this.h.filter(
												(Q) => Q.uniqueOwner === G.uniqueOwner,
											)[0].threads;
											for (let Q = 0; Q < te.length; Q++)
												te[Q] === ee && (te.splice(Q, 1), Q--);
										});
										for (const ee of Y) {
											const _ = this.g.filter(
												(te) =>
													te.uniqueOwner === G.uniqueOwner &&
													te.commentThread.threadId === ee.threadId,
											);
											_.length && (_[0].update(ee), this.$(ee));
										}
										const ne = this.f?.getId();
										for (const ee of W) await this.X(ne, G.uniqueOwner, ee);
										for (const ee of ie) await this.Y(K, ee);
										this.k.update(this.f, J);
									}),
								),
								this.Z());
					}
					async Y(G, K) {
						const J = this.g.filter(
							(W) =>
								W.uniqueOwner === K.uniqueOwner &&
								u.$iL.lift(W.commentThread.range)?.equalsRange(K.range),
						);
						if (K.isReply && J.length)
							this.B.removeContinueOnComment({
								uniqueOwner: K.uniqueOwner,
								uri: G,
								range: K.range,
								isReply: !0,
							}),
								J[0].setPendingComment(K.body);
						else if (J.length) {
							this.B.removeContinueOnComment({
								uniqueOwner: K.uniqueOwner,
								uri: G,
								range: K.range,
								isReply: !1,
							});
							const W = J[0].getPendingComments().newComment;
							let X;
							!W || K.body.includes(W)
								? (X = K.body)
								: W.includes(K.body)
									? (X = W)
									: (X = `${W}
${K.body}`),
								J[0].setPendingComment(X);
						} else if (!K.isReply) {
							if (
								!this.B.removeContinueOnComment({
									uniqueOwner: K.uniqueOwner,
									uri: G,
									range: K.range,
									isReply: !1,
								})
							)
								return;
							this.w.has(K.uniqueOwner) || this.w.set(K.uniqueOwner, []),
								this.w.get(K.uniqueOwner)?.push(K),
								await this.B.createCommentThreadTemplate(
									K.uniqueOwner,
									K.uri,
									K.range ? u.$iL.lift(K.range) : void 0,
								);
						}
					}
					Z() {
						this.S().then(() => {
							if (
								!this.A &&
								this.h.some(
									(G) =>
										G.commentingRanges.ranges.length > 0 ||
										G.commentingRanges.fileComments,
								)
							)
								if (
									((this.A = !0),
									this.H.getValue(A.AccessibilityVerbositySettingId.Comments))
								) {
									const K = this.J.lookupKeybinding(
										R.AccessibilityCommandId.OpenAccessibilityHelp,
									)?.getAriaLabel();
									K
										? (0, M.$pib)(n.localize(5041, null, K))
										: (0, M.$pib)(n.localize(5042, null));
								} else (0, M.$pib)(n.localize(5043, null));
						});
					}
					async $(G) {
						if (G.comments && G.comments.length > 0 && (0, z.$42b)(G)) {
							const K = this.H.getValue(T.$32b).openView;
							if (K === "file") return this.G.openView(S.$$oc);
							if (
								(K === "firstFile" ||
									(K === "firstFileUnresolved" &&
										G.state === c.CommentThreadState.Unresolved)) &&
								!this.G.getViewWithId(S.$$oc)?.hasRendered
							)
								return this.G.openView(S.$$oc);
						}
					}
					async ab(G, K, J, W, X) {
						const Y = this.f?.getModel();
						if (!Y || !this.f || this.R(this.f)) return;
						let ie;
						K.range &&
							!W &&
							(ie = this.B.removeContinueOnComment({
								uniqueOwner: G,
								uri: Y.uri,
								range: K.range,
								isReply: !0,
							}));
						const ne = this.C.createInstance(
							s.$npc,
							this.f,
							G,
							K,
							W ?? ie?.body,
							X,
						);
						await ne.display(K.range, J), this.g.push(ne), this.$(K);
					}
					bb(G) {
						this.l = (0, s.$kpc)(G);
					}
					cb(G) {
						const K = (0, s.$lpc)(this.l, G);
						if (((this.l = null), !this.f || K === null || !G.target.element))
							return;
						const J =
								G.target.element.className.indexOf("comment-range-glyph") >= 0,
							W = G.target.position.lineNumber;
						let X, Y;
						K !== W
							? K > W
								? (Y = new u.$iL(
										K,
										this.f.getModel().getLineLength(K) + 1,
										W,
										1,
									))
								: (Y = new u.$iL(
										K,
										1,
										W,
										this.f.getModel().getLineLength(W) + 1,
									))
							: J && (Y = this.f.getSelection()),
							Y && Y.startLineNumber <= W && W <= Y.endLineNumber
								? ((X = Y),
									this.f.setSelection(
										new u.$iL(Y.endLineNumber, 1, Y.endLineNumber, 1),
									))
								: J && (X = new u.$iL(W, 1, W, 1)),
							X && this.addOrToggleCommentAtLine(X, G);
					}
					async addOrToggleCommentAtLine(G, K) {
						if (this.q) this.r.push([G, K]);
						else {
							this.q = !0;
							const J = this.g.filter(
								(W) => W.getGlyphPosition() === (G ? G.endLineNumber : 0),
							);
							if (J.length) {
								const W = J.every((X) => X.expanded);
								J.forEach(W ? (X) => X.collapse() : (X) => X.expand(!0)),
									this.db();
								return;
							} else this.addCommentAtLine(G, K);
						}
					}
					db() {
						this.q = !1;
						const G = this.r.shift();
						G && this.addOrToggleCommentAtLine(G[0], G[1]);
					}
					eb(G, K) {
						return (
							G.startLineNumber < K.startLineNumber &&
								(G = new u.$iL(
									K.startLineNumber,
									K.startColumn,
									G.endLineNumber,
									G.endColumn,
								)),
							G.endLineNumber > K.endLineNumber &&
								(G = new u.$iL(
									G.startLineNumber,
									G.startColumn,
									K.endLineNumber,
									K.endColumn,
								)),
							G
						);
					}
					addCommentAtLine(G, K) {
						const J = this.j.getMatchedCommentAction(G);
						if (!J.length || !this.f?.hasModel()) {
							if (((this.q = !1), !J.length))
								throw new Error(
									`There are no commenting ranges at the current position (${G ? "with range" : "without range"}).`,
								);
							return Promise.resolve();
						}
						if (J.length > 1) {
							if (K && G)
								return (
									this.E.showContextMenu({
										getAnchor: () => K.event,
										getActions: () => this.gb(J, G),
										getActionsContext: () => (J.length ? J[0] : void 0),
										onHide: () => {
											this.q = !1;
										},
									}),
									Promise.resolve()
								);
							{
								const W = this.fb(J);
								return this.F.pick(W, {
									placeHolder: n.localize(5044, null),
									matchOnDescription: !0,
								})
									.then((X) => {
										if (!X) return;
										const Y = J.filter((ie) => ie.action.ownerId === X.id);
										if (Y.length) {
											const { ownerId: ie } = Y[0].action,
												ne = G && Y[0].range ? this.eb(G, Y[0].range) : G;
											this.addCommentAtLine2(ne, ie);
										}
									})
									.then(() => {
										this.q = !1;
									});
							}
						} else {
							const { ownerId: W } = J[0].action,
								X = G && J[0].range ? this.eb(G, J[0].range) : G;
							this.addCommentAtLine2(X, W);
						}
						return Promise.resolve();
					}
					fb(G) {
						return G.map((J) => {
							const { ownerId: W, extensionId: X, label: Y } = J.action;
							return { label: Y ?? X ?? W, id: W };
						});
					}
					gb(G, K) {
						const J = [];
						return (
							G.forEach((W) => {
								const { ownerId: X, extensionId: Y, label: ie } = W.action;
								J.push(
									new t.$rj(
										"addCommentThread",
										`${ie || Y}`,
										void 0,
										!0,
										() => {
											const ne = W.range ? this.eb(K, W.range) : K;
											return this.addCommentAtLine2(ne, X), Promise.resolve();
										},
									),
								);
							}),
							J
						);
					}
					addCommentAtLine2(G, K) {
						this.f &&
							(this.B.createCommentThreadTemplate(
								K,
								this.f.getModel().uri,
								G,
								this.f.getId(),
							),
							this.db());
					}
					hb(G) {
						const K = G.getOption($.EditorOption.lineDecorationsWidth);
						let J = [];
						const W = G.getRawOptions().extraEditorClassName;
						return (
							W && (J = W.split(" ")),
							{ lineDecorationsWidth: K, extraEditorClassName: J }
						);
					}
					ib(G, K, J) {
						let W = J;
						const X = K.findIndex((ie) => ie === "inline-comment");
						X >= 0 && K.splice(X, 1);
						const Y = G.getOptions();
						return (
							Y.get($.EditorOption.folding) &&
								Y.get($.EditorOption.showFoldingControls) !== "never" &&
								(W += 11),
							(W -= 24),
							{ extraEditorClassName: K, lineDecorationsWidth: W }
						);
					}
					jb(G, K) {
						let J = K;
						const W = G.getOptions();
						return (
							W.get($.EditorOption.folding) &&
								W.get($.EditorOption.showFoldingControls) !== "never" &&
								(J -= 11),
							(J += 24),
							(this.n = J),
							this.n
						);
					}
					kb(G, K, J) {
						return (
							K.push("inline-comment"),
							{ lineDecorationsWidth: this.jb(G, J), extraEditorClassName: K }
						);
					}
					lb(G, K, J) {
						G.updateOptions({
							extraEditorClassName: K.join(" "),
							lineDecorationsWidth: J,
						});
					}
					mb(G) {
						const K = this.hb(G);
						K.lineDecorationsWidth !== this.n &&
							G.updateOptions({
								lineDecorationsWidth: this.jb(G, K.lineDecorationsWidth),
							});
					}
					nb(G) {
						if (!this.f) return;
						const K = this.h.some(
							(X) =>
								!!(
									X.commentingRanges &&
									(Array.isArray(X.commentingRanges)
										? X.commentingRanges
										: X.commentingRanges.ranges
									).length
								) || X.threads.length > 0,
						);
						G = G ?? this.f.getModel()?.uri;
						const J = G ? this.B.resourceHasCommentingRanges(G) : !1,
							W = K || J;
						if (W && this.B.isCommentingEnabled)
							if (this.m) this.mb(this.f);
							else {
								this.m = !0;
								const { lineDecorationsWidth: X, extraEditorClassName: Y } =
										this.hb(this.f),
									ie = this.kb(this.f, Y, X);
								this.lb(
									this.f,
									ie.extraEditorClassName,
									ie.lineDecorationsWidth,
								);
							}
						else if ((!W || !this.B.isCommentingEnabled) && this.m) {
							this.m = !1;
							const { lineDecorationsWidth: X, extraEditorClassName: Y } =
									this.hb(this.f),
								ie = this.ib(this.f, Y, X);
							this.lb(this.f, ie.extraEditorClassName, ie.lineDecorationsWidth);
						}
					}
					async ob(G) {
						if (!this.f || !this.B.isCommentingEnabled) return;
						(this.h = G), this.nb(), this.pb();
						let K = !1;
						for (const J of this.h) {
							!K &&
								(J.commentingRanges.ranges.length > 0 ||
									J.commentingRanges.fileComments) &&
								(K = !0);
							const W = this.u[J.uniqueOwner],
								X = this.v[J.uniqueOwner];
							J.threads = J.threads.filter((Y) => !Y.isDisposed);
							for (const Y of J.threads) {
								let ie;
								W && (ie = W[Y.threadId]);
								let ne;
								X && (ne = X[Y.threadId]),
									await this.ab(J.uniqueOwner, Y, !1, ie, ne);
							}
							for (const Y of J.pendingCommentThreads ?? [])
								this.Y(this.f.getModel().uri, Y);
						}
						this.j.update(this.f, this.h),
							this.k.update(this.f, this.h),
							K ? this.z.set(!0) : this.z.set(!1);
					}
					closeWidget() {
						this.g?.forEach((G) => G.hide()),
							this.f &&
								(this.f.focus(),
								this.f.revealRangeInCenter(this.f.getSelection()));
					}
					pb() {
						this.g &&
							this.g.forEach((G) => {
								const K = G.getPendingComments(),
									J = K.newComment,
									W = this.u[G.uniqueOwner];
								let X;
								if (
									G.commentThread.comments &&
									G.commentThread.comments.length
								) {
									const ne =
										G.commentThread.comments[
											G.commentThread.comments.length - 1
										];
									typeof ne.body == "string"
										? (X = ne.body)
										: (X = ne.body.value);
								}
								J && J !== X
									? (W || (this.u[G.uniqueOwner] = {}),
										(this.u[G.uniqueOwner][G.commentThread.threadId] = J))
									: W && delete W[G.commentThread.threadId];
								const Y = K.edits,
									ie = this.v[G.uniqueOwner];
								Object.keys(Y).length > 0
									? (ie || (this.v[G.uniqueOwner] = {}),
										(this.v[G.uniqueOwner][G.commentThread.threadId] = Y))
									: ie && delete ie[G.commentThread.threadId],
									G.dispose();
							}),
							(this.g = []);
					}
				};
				(e.$rpc = q),
					(e.$rpc = q =
						Ne(
							[
								j(1, b.$62b),
								j(2, p.$Li),
								j(3, r.$dtb),
								j(4, g.$Xxb),
								j(5, o.$DJ),
								j(6, v.$HMb),
								j(7, I.$gj),
								j(8, L.$6j),
								j(9, l.$IY),
								j(10, O.$uZ),
								j(11, B.$XK),
							],
							q,
						));
			},
		),
		define(
			de[3811],
			he([
				1, 0, 27, 56, 46, 65, 4, 31, 43, 447, 846, 18, 11, 71, 1048, 17, 40,
				505, 91, 8, 130, 1238, 55, 3768, 178, 1143,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$nSc = S),
					(C = mt(C)),
					(0, w.$qtb)(
						n.ID,
						n.$rpc,
						w.EditorContributionInstantiation.AfterFirstRender,
					),
					(0, y.$s6)($.$mSc.ID, $.$mSc, y.WorkbenchPhase.BlockRestore),
					m.$TX.registerCommandAndKeybindingRule({
						id: l.CommentCommandId.NextThread,
						handler: async (T, P) => {
							const k = S(T);
							if (!k) return Promise.resolve();
							const L = n.$rpc.get(k);
							if (!L) return Promise.resolve();
							L.nextCommentThread();
						},
						weight: m.KeybindingWeight.EditorContrib,
						primary: t.KeyMod.Alt | t.KeyCode.F9,
					}),
					m.$TX.registerCommandAndKeybindingRule({
						id: l.CommentCommandId.PreviousThread,
						handler: async (T, P) => {
							const k = S(T);
							if (!k) return Promise.resolve();
							const L = n.$rpc.get(k);
							if (!L) return Promise.resolve();
							L.previousCommentThread();
						},
						weight: m.KeybindingWeight.EditorContrib,
						primary: t.KeyMod.Shift | t.KeyMod.Alt | t.KeyCode.F9,
					}),
					m.$TX.registerCommandAndKeybindingRule({
						id: l.CommentCommandId.NextRange,
						handler: async (T, P) => {
							const k = S(T);
							if (!k) return Promise.resolve();
							const L = n.$rpc.get(k);
							if (!L) return Promise.resolve();
							L.nextCommentingRange();
						},
						when: b.$Kj.and(
							f.$YK,
							b.$Kj.or(
								c.EditorContextKeys.focus,
								o.CommentContextKeys.commentFocused,
								b.$Kj.and(
									s.$MLb,
									s.$SLb.isEqualTo(v.AccessibleViewProviderId.Comments),
								),
							),
						),
						primary: (0, t.$os)(
							t.$ps,
							t.KeyMod.CtrlCmd | t.KeyMod.Alt | t.KeyCode.DownArrow,
						),
						mac: {
							primary: (0, t.$os)(
								t.$qs,
								t.KeyMod.CtrlCmd | t.KeyMod.Alt | t.KeyCode.DownArrow,
							),
						},
						weight: m.KeybindingWeight.EditorContrib,
					}),
					h.$ZX.appendMenuItem(h.$XX.CommandPalette, {
						command: {
							id: l.CommentCommandId.NextRange,
							title: C.localize(5045, null),
							category: "Comments",
						},
						when: o.CommentContextKeys.activeEditorHasCommentingRange,
					}),
					m.$TX.registerCommandAndKeybindingRule({
						id: l.CommentCommandId.PreviousRange,
						handler: async (T, P) => {
							const k = S(T);
							if (!k) return Promise.resolve();
							const L = n.$rpc.get(k);
							if (!L) return Promise.resolve();
							L.previousCommentingRange();
						},
						when: b.$Kj.and(
							f.$YK,
							b.$Kj.or(
								c.EditorContextKeys.focus,
								o.CommentContextKeys.commentFocused,
								b.$Kj.and(
									s.$MLb,
									s.$SLb.isEqualTo(v.AccessibleViewProviderId.Comments),
								),
							),
						),
						primary: (0, t.$os)(
							t.$ps,
							t.KeyMod.CtrlCmd | t.KeyMod.Alt | t.KeyCode.UpArrow,
						),
						mac: {
							primary: (0, t.$os)(
								t.$qs,
								t.KeyMod.CtrlCmd | t.KeyMod.Alt | t.KeyCode.UpArrow,
							),
						},
						weight: m.KeybindingWeight.EditorContrib,
					}),
					h.$ZX.appendMenuItem(h.$XX.CommandPalette, {
						command: {
							id: l.CommentCommandId.PreviousRange,
							title: C.localize(5046, null),
							category: "Comments",
						},
						when: o.CommentContextKeys.activeEditorHasCommentingRange,
					}),
					d.$fk.registerCommand({
						id: l.CommentCommandId.ToggleCommenting,
						handler: (T) => {
							const P = T.get(r.$62b),
								k = P.isCommentingEnabled;
							P.enableCommenting(!k);
						},
					}),
					h.$ZX.appendMenuItem(h.$XX.CommandPalette, {
						command: {
							id: l.CommentCommandId.ToggleCommenting,
							title: C.localize(5047, null),
							category: "Comments",
						},
						when: o.CommentContextKeys.WorkspaceHasCommenting,
					}),
					m.$TX.registerCommandAndKeybindingRule({
						id: l.CommentCommandId.Add,
						handler: async (T, P) => {
							const k = S(T);
							if (!k) return Promise.resolve();
							const L = n.$rpc.get(k);
							if (!L) return Promise.resolve();
							const D = P?.range
									? new g.$iL(
											P.range.startLineNumber,
											P.range.startLineNumber,
											P.range.endLineNumber,
											P.range.endColumn,
										)
									: P?.fileComment
										? void 0
										: k.getSelection(),
								M = T.get(p.$4N);
							try {
								await L.addOrToggleCommentAtLine(D, void 0);
							} catch {
								M.error(C.localize(5048, null));
							}
						},
						weight: m.KeybindingWeight.EditorContrib,
						primary: (0, t.$os)(
							t.$ps,
							t.KeyMod.CtrlCmd | t.KeyMod.Alt | t.KeyCode.KeyC,
						),
						mac: {
							primary: (0, t.$os)(
								t.$qs,
								t.KeyMod.CtrlCmd | t.KeyMod.Alt | t.KeyCode.KeyC,
							),
						},
					}),
					h.$ZX.appendMenuItem(h.$XX.CommandPalette, {
						command: {
							id: l.CommentCommandId.Add,
							title: C.localize(5049, null),
							category: "Comments",
						},
						when: o.CommentContextKeys.activeCursorHasCommentingRange,
					}),
					d.$fk.registerCommand({
						id: l.CommentCommandId.CollapseAll,
						handler: (T) => I(T)?.collapseAll(),
					}),
					h.$ZX.appendMenuItem(h.$XX.CommandPalette, {
						command: {
							id: l.CommentCommandId.CollapseAll,
							title: C.localize(5050, null),
							category: "Comments",
						},
						when: o.CommentContextKeys.WorkspaceHasCommenting,
					}),
					d.$fk.registerCommand({
						id: l.CommentCommandId.ExpandAll,
						handler: (T) => I(T)?.expandAll(),
					}),
					h.$ZX.appendMenuItem(h.$XX.CommandPalette, {
						command: {
							id: l.CommentCommandId.ExpandAll,
							title: C.localize(5051, null),
							category: "Comments",
						},
						when: o.CommentContextKeys.WorkspaceHasCommenting,
					}),
					d.$fk.registerCommand({
						id: l.CommentCommandId.ExpandUnresolved,
						handler: (T) => I(T)?.expandUnresolved(),
					}),
					h.$ZX.appendMenuItem(h.$XX.CommandPalette, {
						command: {
							id: l.CommentCommandId.ExpandUnresolved,
							title: C.localize(5052, null),
							category: "Comments",
						},
						when: o.CommentContextKeys.WorkspaceHasCommenting,
					}),
					m.$TX.registerCommandAndKeybindingRule({
						id: l.CommentCommandId.Submit,
						weight: m.KeybindingWeight.EditorContrib,
						primary: t.KeyMod.CtrlCmd | t.KeyCode.Enter,
						when: u.$h3b,
						handler: (T, P) => {
							const k = T.get(E.$dtb).getFocusedCodeEditor();
							k instanceof u.$k3b && k.getParentThread().submitComment();
						},
					}),
					m.$TX.registerCommandAndKeybindingRule({
						id: l.CommentCommandId.Hide,
						weight: m.KeybindingWeight.EditorContrib,
						primary: t.KeyCode.Escape,
						secondary: [t.KeyMod.Shift | t.KeyCode.Escape],
						when: u.$h3b,
						handler: (T, P) => {
							const k = T.get(E.$dtb).getFocusedCodeEditor();
							k instanceof u.$k3b && k.getParentThread().collapse();
						},
					});
				function S(T) {
					let P = T.get(a.$IY).activeTextEditorControl;
					return (
						(0, i.$$sb)(P) &&
							(P.getOriginalEditor().hasTextFocus()
								? (P = P.getOriginalEditor())
								: (P = P.getModifiedEditor())),
						!(0, i.$0sb)(P) || !P.hasModel() ? null : P
					);
				}
				function I(T) {
					const P = S(T);
					if (!P) return;
					const k = n.$rpc.get(P);
					if (k) return k;
				}
			},
		),
		define(
			de[3812],
			he([1, 0, 27, 3, 4, 8, 6, 1724, 11, 146, 43, 683, 100, 1224, 14]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$gpc = e.CommentsSortOrder = void 0);
				var g;
				(function (l) {
					(l.ResourceAscending = "resourceAscending"),
						(l.UpdatedAtDescending = "updatedAtDescending");
				})(g || (e.CommentsSortOrder = g = {}));
				const p = new E.$5j("commentsView.showResolvedFilter", !0),
					o = new E.$5j("commentsView.showUnResolvedFilter", !0),
					f = new E.$5j("commentsView.sortBy", g.ResourceAscending);
				class b extends i.$1c {
					constructor(y, $) {
						super(),
							(this.b = $),
							(this.a = this.D(new C.$re())),
							(this.onDidChange = this.a.event),
							(this.c = o.bindTo(this.b)),
							(this.f = p.bindTo(this.b)),
							(this.g = f.bindTo(this.b)),
							this.f.set(y.showResolved),
							this.c.set(y.showUnresolved),
							this.g.set(y.sortBy);
					}
					get showUnresolved() {
						return !!this.c.get();
					}
					set showUnresolved(y) {
						this.c.get() !== y &&
							(this.c.set(y), this.a.fire({ showUnresolved: !0 }));
					}
					get showResolved() {
						return !!this.f.get();
					}
					set showResolved(y) {
						this.f.get() !== y &&
							(this.f.set(y), this.a.fire({ showResolved: !0 }));
					}
					get sortBy() {
						return this.g.get() ?? g.ResourceAscending;
					}
					set sortBy(y) {
						this.g.get() !== y && (this.g.set(y), this.a.fire({ sortBy: y }));
					}
				}
				(e.$gpc = b),
					(0, m.$4X)(
						class extends r.$WMb {
							constructor() {
								super({
									id: "commentsFocusViewFromFilter",
									title: (0, w.localize)(5077, null),
									keybinding: {
										when: d.$hpc,
										weight: u.KeybindingWeight.WorkbenchContrib,
										primary: t.KeyMod.CtrlCmd | t.KeyCode.DownArrow,
									},
									viewId: a.$$oc,
								});
							}
							async runInView(l, y) {
								y.focus();
							}
						},
					),
					(0, m.$4X)(
						class extends r.$WMb {
							constructor() {
								super({
									id: "commentsClearFilterText",
									title: (0, w.localize)(5078, null),
									keybinding: {
										when: d.$hpc,
										weight: u.KeybindingWeight.WorkbenchContrib,
										primary: t.KeyCode.Escape,
									},
									viewId: a.$$oc,
								});
							}
							async runInView(l, y) {
								y.clearFilterText();
							}
						},
					),
					(0, m.$4X)(
						class extends r.$WMb {
							constructor() {
								super({
									id: "commentsFocusFilter",
									title: (0, w.localize)(5079, null),
									keybinding: {
										when: h.$zQb.isEqualTo(a.$$oc),
										weight: u.KeybindingWeight.WorkbenchContrib,
										primary: t.KeyMod.CtrlCmd | t.KeyCode.KeyF,
									},
									viewId: a.$$oc,
								});
							}
							async runInView(l, y) {
								y.focusFilter();
							}
						},
					),
					(0, m.$4X)(
						class extends r.$WMb {
							constructor() {
								super({
									id: `workbench.actions.${a.$$oc}.toggleUnResolvedComments`,
									title: (0, w.localize)(5080, null),
									category: (0, w.localize)(5081, null),
									toggled: { condition: o, title: (0, w.localize)(5082, null) },
									menu: {
										id: c.$OMb,
										group: "1_filter",
										when: E.$Kj.equals("view", a.$$oc),
										order: 1,
									},
									viewId: a.$$oc,
								});
							}
							async runInView(l, y) {
								y.filters.showUnresolved = !y.filters.showUnresolved;
							}
						},
					),
					(0, m.$4X)(
						class extends r.$WMb {
							constructor() {
								super({
									id: `workbench.actions.${a.$$oc}.toggleResolvedComments`,
									title: (0, w.localize)(5083, null),
									category: (0, w.localize)(5084, null),
									toggled: { condition: p, title: (0, w.localize)(5085, null) },
									menu: {
										id: c.$OMb,
										group: "1_filter",
										when: E.$Kj.equals("view", a.$$oc),
										order: 1,
									},
									viewId: a.$$oc,
								});
							}
							async runInView(l, y) {
								y.filters.showResolved = !y.filters.showResolved;
							}
						},
					);
				const s = new m.$XX("submenu.filter.commentSort");
				m.$ZX.appendMenuItem(c.$OMb, {
					submenu: s,
					title: (0, w.localize)(5086, null),
					group: "2_sort",
					icon: n.$ak.history,
					when: E.$Kj.equals("view", a.$$oc),
				}),
					(0, m.$4X)(
						class extends r.$WMb {
							constructor() {
								super({
									id: `workbench.actions.${a.$$oc}.toggleSortByUpdatedAt`,
									title: (0, w.localize)(5087, null),
									category: (0, w.localize)(5088, null),
									icon: n.$ak.history,
									viewId: a.$$oc,
									toggled: {
										condition: E.$Kj.equals(f.key, g.UpdatedAtDescending),
										title: (0, w.localize)(5089, null),
									},
									menu: {
										id: s,
										group: "navigation",
										order: 1,
										isHiddenByDefault: !1,
									},
								});
							}
							async runInView(l, y) {
								y.filters.sortBy = g.UpdatedAtDescending;
							}
						},
					),
					(0, m.$4X)(
						class extends r.$WMb {
							constructor() {
								super({
									id: `workbench.actions.${a.$$oc}.toggleSortByResource`,
									title: (0, w.localize)(5090, null),
									category: (0, w.localize)(5091, null),
									icon: n.$ak.history,
									viewId: a.$$oc,
									toggled: {
										condition: E.$Kj.equals(f.key, g.ResourceAscending),
										title: (0, w.localize)(5092, null),
									},
									menu: {
										id: s,
										group: "navigation",
										order: 0,
										isHiddenByDefault: !1,
									},
								});
							}
							async runInView(l, y) {
								y.filters.sortBy = g.ResourceAscending;
							}
						},
					);
			},
		),
		define(
			de[1330],
			he([
				1, 0, 4, 7, 19, 5, 35, 1240, 447, 18, 233, 683, 146, 60, 10, 8, 49, 39,
				41, 32, 68, 1724, 3812, 282, 21, 1725, 74, 1048, 518, 983, 72, 130,
				1032, 165, 2403,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$xpc = e.$wpc = e.$vpc = e.$upc = void 0),
					(t = mt(t)),
					(i = mt(i)),
					(e.$upc = new g.$5j("commentsView.hasComments", !1)),
					(e.$vpc = new g.$5j("commentsView.someCommentsExpanded", !1)),
					(e.$wpc = new g.$5j("commentsView.commentFocused", !1));
				const A = "commentsViewState";
				function R(B) {
					const U = [];
					for (const z of B.resourceCommentThreads) {
						const F = [];
						for (const x of z.commentThreads)
							(0, k.$42b)(x.thread) && F.push({ element: x });
						F.length > 0 && U.push({ element: z, children: F });
					}
					return U;
				}
				let O = class extends h.$UMb {
					get focusedCommentNode() {
						const U = this.f?.getFocus();
						if (U?.length === 1 && U[0] instanceof d.$Z2b) return U[0];
					}
					get focusedCommentInfo() {
						if (this.focusedCommentNode)
							return this.uc(this.focusedCommentNode);
					}
					focusNextNode() {
						if (!this.f) return;
						const U = this.f.getFocus()?.[0];
						if (!U) return;
						let z = this.f.navigate(U).next();
						for (; z && !(z instanceof d.$Z2b); ) z = this.f.navigate(z).next();
						z && this.f.setFocus([z]);
					}
					focusPreviousNode() {
						if (!this.f) return;
						const U = this.f.getFocus()?.[0];
						if (!U) return;
						let z = this.f.navigate(U).previous();
						for (; z && !(z instanceof d.$Z2b); )
							z = this.f.navigate(z).previous();
						z && this.f.setFocus([z]);
					}
					constructor(U, z, F, x, H, q, V, G, K, J, W, X, Y, ie, ne, ee) {
						const _ = new $.$eEb(A, ne),
							te = _.getMemento(
								v.StorageScope.WORKSPACE,
								v.StorageTarget.MACHINE,
							);
						super(
							{
								...U,
								filterOptions: {
									placeholder: t.localize(5064, null),
									ariaLabel: t.localize(5065, null),
									history: te.filterHistory || [],
									text: te.filter || "",
									focusContextKey: l.$hpc.key,
								},
							},
							G,
							V,
							H,
							q,
							F,
							z,
							K,
							J,
							X,
							Y,
						),
							(this.kc = x),
							(this.lc = W),
							(this.mc = ie),
							(this.nc = ee),
							(this.ab = 0),
							(this.fc = 0),
							(this.gc = 0),
							(this.jc = void 0),
							(this.onDidChangeVisibility = this.onDidChangeBodyVisibility),
							(this.sb = e.$upc.bindTo(q)),
							(this.cc = e.$vpc.bindTo(q)),
							(this.dc = e.$wpc.bindTo(q)),
							(this.ic = _),
							(this.hc = te),
							(this.filters = this.D(
								new y.$gpc(
									{
										showResolved: this.hc.showResolved !== !1,
										showUnresolved: this.hc.showUnresolved !== !1,
										sortBy:
											this.hc.sortBy ?? y.CommentsSortOrder.ResourceAscending,
									},
									this.Bb,
								),
							)),
							(this.ec = new a.$epc(
								new S.$0oc(
									this.filterWidget.getFilterText(),
									this.filters.showResolved,
									this.filters.showUnresolved,
								),
							)),
							this.D(
								this.filters.onDidChange((Q) => {
									(Q.showResolved || Q.showUnresolved) && this.oc(),
										Q.sortBy && this.zc();
								}),
							),
							this.D(this.filterWidget.onDidChangeFilterText(() => this.oc()));
					}
					saveState() {
						(this.hc.filter = this.filterWidget.getFilterText()),
							(this.hc.filterHistory = this.filterWidget.getHistory()),
							(this.hc.showResolved = this.filters.showResolved),
							(this.hc.showUnresolved = this.filters.showUnresolved),
							(this.hc.sortBy = this.filters.sortBy),
							this.ic.saveMemento(),
							super.saveState();
					}
					render() {
						super.render(),
							this.D(
								(0, P.$D3b)({
									name: "commentsView",
									focusNotifiers: [this, this.filterWidget],
									focusNextWidget: () => {
										this.filterWidget.hasFocus() && this.focus();
									},
									focusPreviousWidget: () => {
										this.filterWidget.hasFocus() || this.focusFilter();
									},
								}),
							);
					}
					focusFilter() {
						this.filterWidget.focus();
					}
					clearFilterText() {
						this.filterWidget.setFilterText("");
					}
					getFilterStats() {
						return (
							this.jc ||
								(this.jc = {
									total: this.ab,
									filtered: this.f?.getVisibleItemCount() ?? 0,
								}),
							this.jc
						);
					}
					oc() {
						(this.ec.options = new S.$0oc(
							this.filterWidget.getFilterText(),
							this.filters.showResolved,
							this.filters.showUnresolved,
						)),
							this.f?.filterComments(),
							(this.jc = void 0);
						const { total: U, filtered: z } = this.getFilterStats();
						this.filterWidget.updateBadge(
							U === z || U === 0 ? void 0 : t.localize(5066, null, z, U),
						),
							this.filterWidget.checkMoreFilters(
								!this.filters.showResolved || !this.filters.showUnresolved,
							);
					}
					W(U) {
						super.W(U), U.classList.add("comments-panel");
						const z = i.$fhb(U, i.$(".comments-panel-container"));
						(this.h = i.$fhb(z, i.$(".tree-container"))),
							this.h.classList.add(
								"file-icon-themable-tree",
								"show-file-icons",
							),
							(this.jc = void 0),
							this.xc(),
							this.sc(z),
							this.D(this.lc.onDidSetAllCommentThreads(this.Ac, this)),
							this.D(this.lc.onDidUpdateCommentThreads(this.Bc, this)),
							this.D(this.lc.onDidDeleteDataProvider(this.Cc, this)),
							this.D(
								this.onDidChangeBodyVisibility((F) => {
									F && this.zc();
								}),
							),
							this.qc();
					}
					focus() {
						super.focus();
						const U = this.f?.getHTMLElement();
						(U && i.$Kgb(U)) ||
							(!this.lc.commentsModel.hasCommentThreads() && this.s
								? this.s.focus()
								: this.f && this.f.domFocus());
					}
					qc() {
						this.h.classList.toggle(
							"hidden",
							!this.lc.commentsModel.hasCommentThreads(),
						),
							this.tc(),
							this.f?.setChildren(null, R(this.lc.commentsModel));
					}
					collapseAll() {
						this.f &&
							(this.f.collapseAll(),
							this.f.setSelection([]),
							this.f.setFocus([]),
							this.f.domFocus(),
							this.f.focusFirst());
					}
					expandAll() {
						this.f &&
							(this.f.expandAll(),
							this.f.setSelection([]),
							this.f.setFocus([]),
							this.f.domFocus(),
							this.f.focusFirst());
					}
					get hasRendered() {
						return !!this.f;
					}
					L(U = this.fc, z = this.gc) {
						this.s && (this.s.style.height = `${U}px`),
							this.f?.layout(U, z),
							(this.fc = U),
							(this.gc = z);
					}
					sc(U) {
						(this.s = i.$fhb(U, i.$(".message-box-container"))),
							this.s.setAttribute("tabIndex", "0");
					}
					tc() {
						(this.s.textContent = this.lc.commentsModel.getMessage()),
							this.s.classList.toggle(
								"hidden",
								this.lc.commentsModel.hasCommentThreads(),
							);
					}
					uc(U, z) {
						let F = "";
						if (
							z &&
							this.Ab.getValue(D.AccessibilityVerbositySettingId.Comments)
						) {
							const q = this.yb.lookupKeybinding(M.$tpc.id)?.getAriaLabel();
							F = q ? t.localize(5067, null, q) : t.localize(5068, null);
						}
						const x = this.wc(U, z),
							H = this.vc(U, z);
						return U.range
							? U.threadRelevance === I.CommentThreadApplicability.Outdated
								? F +
									t.localize(
										5069,
										null,
										U.comment.userName,
										U.range.startLineNumber,
										U.range.startColumn,
										(0, w.$kh)(U.resource),
										x,
										typeof U.comment.body == "string"
											? U.comment.body
											: U.comment.body.value,
									) +
									H
								: F +
									t.localize(
										5070,
										null,
										U.comment.userName,
										U.range.startLineNumber,
										U.range.startColumn,
										(0, w.$kh)(U.resource),
										x,
										typeof U.comment.body == "string"
											? U.comment.body
											: U.comment.body.value,
									) +
									H
							: U.threadRelevance === I.CommentThreadApplicability.Outdated
								? F +
									t.localize(
										5071,
										null,
										U.comment.userName,
										(0, w.$kh)(U.resource),
										x,
										typeof U.comment.body == "string"
											? U.comment.body
											: U.comment.body.value,
									) +
									H
								: F +
									t.localize(
										5072,
										null,
										U.comment.userName,
										(0, w.$kh)(U.resource),
										x,
										typeof U.comment.body == "string"
											? U.comment.body
											: U.comment.body.value,
									) +
									H;
					}
					vc(U, z) {
						return !U.replies.length || z
							? ""
							: `
` +
									U.replies
										.map((F) =>
											t.localize(
												5073,
												null,
												F.comment.userName,
												typeof F.comment.body == "string"
													? F.comment.body
													: F.comment.body.value,
											),
										)
										.join(`
`);
					}
					wc(U, z) {
						return U.replies.length && !z
							? t.localize(5074, null, U.replies.length)
							: "";
					}
					xc() {
						(this.c = this.D(this.Db.createInstance(u.$uPb, this))),
							(this.f = this.D(
								this.Db.createInstance(a.$fpc, this.c, this.h, {
									overrideStyles: this.Zb().listOverrideStyles,
									selectionNavigation: !0,
									filter: this.ec,
									sorter: {
										compare: (U, z) => {
											if (U instanceof k.$52b || z instanceof k.$52b) return 0;
											if (
												this.filters.sortBy ===
												y.CommentsSortOrder.UpdatedAtDescending
											)
												return U.lastUpdatedAt > z.lastUpdatedAt ? -1 : 1;
											if (
												this.filters.sortBy ===
												y.CommentsSortOrder.ResourceAscending
											) {
												if (U instanceof d.$12b && z instanceof d.$12b) {
													const F = this.nc.defaultUriScheme;
													return U.resource.scheme !== z.resource.scheme &&
														(U.resource.scheme === F || z.resource.scheme === F)
														? z.resource.scheme === F
															? 1
															: -1
														: U.resource.toString() > z.resource.toString()
															? 1
															: -1;
												} else if (
													U instanceof d.$Z2b &&
													z instanceof d.$Z2b &&
													U.thread.range &&
													z.thread.range
												)
													return U.thread.range?.startLineNumber >
														z.thread.range?.startLineNumber
														? 1
														: -1;
											}
											return 0;
										},
									},
									keyboardNavigationLabelProvider: {
										getKeyboardNavigationLabel: (U) => {},
									},
									accessibilityProvider: {
										getAriaLabel: (U) =>
											U instanceof k.$52b
												? t.localize(5075, null)
												: U instanceof d.$12b
													? t.localize(
															5076,
															null,
															(0, w.$kh)(U.resource),
															U.resource.fsPath,
														)
													: U instanceof d.$Z2b
														? this.uc(U, !0)
														: "",
										getWidgetAriaLabel() {
											return a.$apc.value;
										},
									},
								}),
							)),
							this.D(
								this.f.onDidOpen((U) => {
									this.yc(
										U.element,
										U.editorOptions.pinned,
										U.editorOptions.preserveFocus,
										U.sideBySide,
									);
								}),
							),
							this.D(
								this.f.onDidChangeModel(() => {
									this.Dc();
								}),
							),
							this.D(
								this.f.onDidChangeCollapseState(() => {
									this.Dc();
								}),
							),
							this.D(this.f.onDidFocus(() => this.dc.set(!0))),
							this.D(this.f.onDidBlur(() => this.dc.set(!1)));
					}
					yc(U, z, F, x) {
						if (!U || !(U instanceof d.$12b || U instanceof d.$Z2b)) return;
						const H =
								U instanceof d.$12b ? U.commentThreads[0].thread : U.thread,
							q = U instanceof d.$12b ? U.commentThreads[0].comment : void 0;
						return (0, T.$qpc)(this.lc, this.kc, this.mc, H, q, !1, z, F, x);
					}
					async zc() {
						if (
							this.f &&
							this.isVisible() &&
							(this.sb.set(this.lc.commentsModel.hasCommentThreads()),
							(this.jc = void 0),
							this.qc(),
							this.f.getSelection().length === 0 &&
								this.lc.commentsModel.hasCommentThreads())
						) {
							const U =
								this.lc.commentsModel.resourceCommentThreads[0]
									.commentThreads[0];
							U && (this.f.setFocus([U]), this.f.setSelection([U]));
						}
					}
					Ac(U) {
						(this.jc = void 0), (this.ab += U.commentThreads.length);
						let z = 0;
						for (const F of U.commentThreads)
							F.state === I.CommentThreadState.Unresolved && z++;
						this.zc();
					}
					Bc(U) {
						(this.jc = void 0),
							(this.ab += U.added.length),
							(this.ab -= U.removed.length);
						let z = 0;
						for (const F of this.lc.commentsModel.resourceCommentThreads)
							for (const x of F.commentThreads)
								x.threadState === I.CommentThreadState.Unresolved && z++;
						this.zc();
					}
					Cc(U) {
						(this.jc = void 0), (this.ab = 0), this.zc();
					}
					Dc() {
						this.cc.set(this.isSomeCommentsExpanded());
					}
					areAllCommentsExpanded() {
						if (!this.f) return !1;
						const U = this.f.navigate();
						for (; U.next(); ) if (this.f.isCollapsed(U.current())) return !1;
						return !0;
					}
					isSomeCommentsExpanded() {
						if (!this.f) return !1;
						const U = this.f.navigate();
						for (; U.next(); ) if (!this.f.isCollapsed(U.current())) return !0;
						return !1;
					}
				};
				(e.$xpc = O),
					(e.$xpc = O =
						Ne(
							[
								j(1, E.$Li),
								j(2, c.$K1),
								j(3, r.$IY),
								j(4, n.$gj),
								j(5, g.$6j),
								j(6, p.$Xxb),
								j(7, o.$uZ),
								j(8, f.$7rb),
								j(9, C.$iP),
								j(10, m.$62b),
								j(11, b.$km),
								j(12, L.$Uyb),
								j(13, s.$Vl),
								j(14, v.$lq),
								j(15, N.$I8),
							],
							O,
						));
			},
		),
		define(
			de[3813],
			he([1, 0, 3, 221, 178, 11, 8, 130, 683, 1330, 89]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$oSc = void 0);
				class a extends t.$1c {
					getProvider(n) {
						const g = n.get(C.$6j),
							p = n.get(u.$HMb),
							o = n.get(E.$YX),
							f = p.getActiveViewWithId(m.$$oc),
							b = f?.focusedCommentNode;
						if (!f || !b) return;
						const s = this.D(new m.$cpc(o));
						return s.setContextKeyService(g), new h(f, b, s);
					}
					constructor() {
						super(),
							(this.priority = 90),
							(this.name = "comment"),
							(this.when = r.$wpc),
							(this.type = w.AccessibleViewType.View);
					}
				}
				e.$oSc = a;
				class h extends t.$1c {
					constructor(n, g, p) {
						super(),
							(this.a = n),
							(this.b = g),
							(this.c = p),
							(this.id = w.AccessibleViewProviderId.Comments),
							(this.verbositySettingKey =
								d.AccessibilityVerbositySettingId.Comments),
							(this.options = { type: w.AccessibleViewType.View }),
							(this.actions = [...this.c.getResourceContextActions(this.b)]
								.filter((o) => o.enabled)
								.map((o) => ({
									...o,
									run: () => {
										this.a.focus(),
											o.run({
												thread: this.b.thread,
												$mid: i.MarshalledId.CommentThread,
												commentControlHandle: this.b.controllerHandle,
												commentThreadHandle: this.b.threadHandle,
											});
									},
								})));
					}
					provideContent() {
						const n = this.a.focusedCommentNode,
							g = this.a.focusedCommentInfo?.toString();
						if (!n || !g)
							throw new Error(
								"Comment tree is focused but no comment is selected",
							);
						return g;
					}
					onClose() {
						this.a.focus();
					}
					provideNextContent() {
						return this.a.focusNextNode(), this.provideContent();
					}
					providePreviousContent() {
						return this.a.focusPreviousNode(), this.provideContent();
					}
				}
			},
		),
		define(
			de[3814],
			he([
				1, 0, 4, 20, 30, 447, 81, 3, 8, 55, 260, 683, 74, 52, 11, 1330, 146, 14,
				18, 68, 1048, 130, 178, 412, 3813, 1900, 3811,
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
					(e.$rSc = void 0),
					(t = mt(t)),
					(0, n.$4X)(
						class extends p.$WMb {
							constructor() {
								super({
									viewId: a.$$oc,
									id: "comments.collapse",
									title: t.localize(5013, null),
									f1: !1,
									icon: o.$ak.collapseAll,
									menu: {
										id: n.$XX.ViewTitle,
										group: "navigation",
										when: m.$Kj.and(
											m.$Kj.and(m.$Kj.equals("view", a.$$oc), g.$upc),
											g.$vpc,
										),
										order: 100,
									},
								});
							}
							runInView(P, k) {
								k.collapseAll();
							}
						},
					),
					(0, n.$4X)(
						class extends p.$WMb {
							constructor() {
								super({
									viewId: a.$$oc,
									id: "comments.expand",
									title: t.localize(5014, null),
									f1: !1,
									icon: o.$ak.expandAll,
									menu: {
										id: n.$XX.ViewTitle,
										group: "navigation",
										when: m.$Kj.and(
											m.$Kj.and(m.$Kj.equals("view", a.$$oc), g.$upc),
											m.$Kj.not(g.$vpc.key),
										),
										order: 100,
									},
								});
							}
							runInView(P, k) {
								k.expandAll();
							}
						},
					),
					(0, n.$4X)(
						class extends n.$3X {
							constructor() {
								super({
									id: "comments.reply",
									title: t.localize(5015, null),
									icon: o.$ak.reply,
									precondition: m.$Kj.equals("canReply", !0),
									menu: [
										{ id: n.$XX.CommentsViewThreadActions, order: 100 },
										{
											id: n.$XX.AccessibleView,
											when: m.$Kj.and(
												l.$NLb,
												m.$Kj.equals(
													l.$SLb.key,
													y.AccessibleViewProviderId.Comments,
												),
											),
										},
									],
								});
							}
							run(P, k) {
								const L = P.get(E.$62b),
									D = P.get(f.$IY),
									M = P.get(b.$Vl);
								(0, s.$qpc)(
									L,
									D,
									M,
									k.thread,
									k.thread.comments[k.thread.comments.length - 1],
									!0,
								);
							}
						},
					),
					w.$Io
						.as(C.$No.Configuration)
						.registerConfiguration({
							id: "comments",
							order: 20,
							title: t.localize(5016, null),
							type: "object",
							properties: {
								"comments.openPanel": {
									enum: [
										"neverOpen",
										"openOnSessionStart",
										"openOnSessionStartWithComments",
									],
									default: "openOnSessionStartWithComments",
									description: t.localize(5017, null),
									restricted: !1,
									markdownDeprecationMessage: t.localize(5018, null),
								},
								"comments.openView": {
									enum: ["never", "file", "firstFile", "firstFileUnresolved"],
									enumDescriptions: [
										t.localize(5019, null),
										t.localize(5020, null),
										t.localize(5021, null),
										t.localize(5022, null),
									],
									default: "firstFile",
									description: t.localize(5023, null),
									restricted: !1,
								},
								"comments.useRelativeTime": {
									type: "boolean",
									default: !0,
									description: t.localize(5024, null),
								},
								"comments.visible": {
									type: "boolean",
									default: !0,
									description: t.localize(5025, null),
								},
								"comments.maxHeight": {
									type: "boolean",
									default: !0,
									description: t.localize(5026, null),
								},
								"comments.collapseOnResolve": {
									type: "boolean",
									default: !0,
									description: t.localize(5027, null),
								},
							},
						}),
					(0, i.$lK)(E.$62b, E.$72b, i.InstantiationType.Delayed);
				let I = class extends d.$1c {
					constructor(P, k) {
						super(),
							(this.c = P),
							(this.f = k),
							(this.a = this.D(new d.$2c())),
							(this.b = 0),
							this.D(this.c.onDidSetAllCommentThreads(this.g, this)),
							this.D(this.c.onDidUpdateCommentThreads(this.h, this));
					}
					g(P) {
						let k = 0;
						for (const L of P.commentThreads)
							L.state === h.CommentThreadState.Unresolved && k++;
						this.j(k);
					}
					h() {
						let P = 0;
						for (const k of this.c.commentsModel.resourceCommentThreads)
							for (const L of k.commentThreads)
								L.threadState === h.CommentThreadState.Unresolved && P++;
						this.j(P);
					}
					j(P) {
						if (P === this.b) return;
						this.b = P;
						const k = t.localize(5028, null, this.b);
						this.a.value = this.f.showViewActivity(a.$$oc, {
							badge: new u.$8qc(this.b, () => k),
						});
					}
				};
				(e.$rSc = I),
					(e.$rSc = I = Ne([j(0, E.$62b), j(1, u.$7qc)], I)),
					w.$Io
						.as(r.Extensions.Workbench)
						.registerWorkbenchContribution(I, c.LifecyclePhase.Eventually),
					$.$Whc.register(new v.$oSc()),
					$.$Whc.register(new S.$qSc());
			},
		),
		define(
			de[1049],
			he([
				1, 0, 7, 159, 105, 95, 325, 292, 279, 50, 24, 15, 14, 94, 27, 3, 19, 26,
				210, 56, 61, 4, 92, 11, 10, 8, 49, 116, 72, 5, 39, 73, 93, 41, 63, 32,
				106, 35, 146, 60, 352, 112, 300, 797, 18, 40, 89,
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
				B,
				U,
				z,
				F,
				x,
				H,
				q,
				V,
				G,
				K,
			) {
				"use strict";
				var J, W, X, Y;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$mGc = void 0),
					(e.$lGc = _),
					(e.$nGc = fe),
					(e.$oGc = me),
					(t = mt(t)),
					(p = mt(p)),
					(F = mt(F));
				const ie = t.$;
				function ne(ge) {
					const be = ie("input");
					return (
						(be.type = "checkbox"),
						(be.tabIndex = -1),
						ge.push(i.$Qhb.ignoreTarget(be)),
						be
					);
				}
				const ee = 9;
				function _(ge, be, Ce) {
					const Le =
						ge.getBreakpoints().length +
						ge.getExceptionBreakpointsForSession(be).length +
						ge.getFunctionBreakpoints().length +
						ge.getDataBreakpoints().length +
						ge.getInstructionBreakpoints().length;
					return Math.min(Ce, Le) * 22;
				}
				let te = class extends U.$TMb {
					constructor(
						be,
						Ce,
						Le,
						Fe,
						Oe,
						xe,
						He,
						Ke,
						Je,
						Te,
						Ee,
						Ie,
						Be,
						Se,
						ke,
						Ue,
						qe,
					) {
						super(be, Fe, Ce, Je, Ee, Te, Oe, Ie, xe, Be, Ue),
							(this.cc = Le),
							(this.dc = He),
							(this.ec = Ke),
							(this.fc = Se),
							(this.Hb = Ue),
							(this.hc = qe),
							(this.b = !1),
							(this.c = !1),
							(this.f = !1),
							(this.L = -1),
							(this.g = ke.createMenu($.$XX.DebugBreakpointsContext, Ee)),
							this.D(this.g),
							(this.h = x.$k5.bindTo(Ee)),
							(this.j = x.$l5.bindTo(Ee)),
							(this.m = x.$m5.bindTo(Ee)),
							(this.s = x.$n5.bindTo(Ee)),
							(this.breakpointInputFocused = x.$d5.bindTo(Ee)),
							this.D(
								this.cc.getModel().onDidChangeBreakpoints(() => this.oc()),
							),
							this.D(this.cc.getViewModel().onDidFocusSession(() => this.oc())),
							this.D(this.cc.onDidChangeState(() => this.pc())),
							(this.sb = this.D(new a.$Yh(() => this.nc(!0), 4e3)));
					}
					W(be) {
						super.W(be),
							this.element.classList.add("debug-pane"),
							be.classList.add("debug-breakpoints");
						const Ce = new Q(this);
						(this.a = this.Db.createInstance(
							M.$yMb,
							"Breakpoints",
							be,
							Ce,
							[
								this.Db.createInstance(se, this.g, this.m, this.s, this.h),
								new re(this.g, this.m, this.s, this.h, this.cc, this.Hb),
								new ye(this, this.cc, this.ec),
								this.Db.createInstance(le, this.g, this.s, this.h),
								new pe(this, this.cc, this.ec, this.Hb, this.fc),
								this.Db.createInstance(
									oe,
									this.g,
									this.m,
									this.s,
									this.h,
									this.j,
								),
								new $e(this, this.cc, this.ec, this.Hb, this.fc),
								this.Db.createInstance(ae),
							],
							{
								identityProvider: { getId: (Fe) => Fe.getId() },
								multipleSelectionSupport: !1,
								keyboardNavigationLabelProvider: {
									getKeyboardNavigationLabel: (Fe) => Fe,
								},
								accessibilityProvider: new ue(this.cc, this.fc),
								overrideStyles: this.Zb().listOverrideStyles,
							},
						)),
							x.$$4.bindTo(this.a.contextKeyService),
							this.D(this.a.onContextMenu(this.lc, this)),
							this.a.onMouseMiddleClick(async ({ element: Fe }) => {
								Fe instanceof H.$T3
									? await this.cc.removeBreakpoints(Fe.getId())
									: Fe instanceof H.$U3
										? await this.cc.removeFunctionBreakpoints(Fe.getId())
										: Fe instanceof H.$V3
											? await this.cc.removeDataBreakpoints(Fe.getId())
											: Fe instanceof H.$X3 &&
												(await this.cc.removeInstructionBreakpoints(
													Fe.instructionReference,
													Fe.offset,
												));
							}),
							this.D(
								this.a.onDidOpen(async (Fe) => {
									Fe.element &&
										((t.$7gb(Fe.browserEvent) &&
											Fe.browserEvent.button === 1) ||
											(Fe.element instanceof H.$T3 &&
												fe(
													Fe.element,
													Fe.sideBySide,
													Fe.editorOptions.preserveFocus || !1,
													Fe.editorOptions.pinned ||
														!Fe.editorOptions.preserveFocus,
													this.cc,
													this.dc,
												),
											Fe.element instanceof H.$X3 &&
												(
													await this.dc.openEditor(q.$G3.instance)
												).goToInstructionAndOffset(
													Fe.element.instructionReference,
													Fe.element.offset,
													t.$7gb(Fe.browserEvent) &&
														Fe.browserEvent.detail === 2,
												),
											t.$7gb(Fe.browserEvent) &&
												Fe.browserEvent.detail === 2 &&
												Fe.element instanceof H.$U3 &&
												Fe.element !== this.inputBoxData?.breakpoint &&
												this.renderInputBox({
													breakpoint: Fe.element,
													type: "name",
												})));
								}),
							),
							this.a.splice(0, this.a.length, this.qc),
							this.D(
								this.onDidChangeBodyVisibility((Fe) => {
									Fe && (this.b && this.oc(), this.c && this.pc());
								}),
							);
						const Le = this.Cb.getViewContainerModel(
							this.Cb.getViewContainerByViewId(this.id),
						);
						this.D(
							Le.onDidChangeAllViewDescriptors(() => {
								this.mc();
							}),
						);
					}
					Qb(be, Ce) {
						super.Qb(be, Ce);
						const Le = t.$fhb(be, ie("span.breakpoint-warning"));
						(this.ab = this.D(
							new C.$Xob(Le, {
								supportIcons: !0,
								hoverDelegate: {
									showHover: (Fe, Oe) =>
										this.Hb.showHover(
											{ content: Fe.content, target: this.ab.element },
											Oe,
										),
									delay: this.Ab.getValue("workbench.hover.delay"),
								},
							}),
						)),
							t.hide(this.ab.element);
					}
					focus() {
						super.focus(), this.a?.domFocus();
					}
					renderInputBox(be) {
						(this.t = be), this.oc(), (this.t = void 0);
					}
					get inputBoxData() {
						return this.t;
					}
					X(be, Ce) {
						if (!this.f) {
							super.X(be, Ce), this.a?.layout(be, Ce);
							try {
								(this.f = !0), this.mc();
							} finally {
								this.f = !1;
							}
						}
					}
					lc(be) {
						const Ce = be.element,
							Le =
								Ce instanceof H.$T3
									? "breakpoint"
									: Ce instanceof H.$W3
										? "exceptionBreakpoint"
										: Ce instanceof H.$U3
											? "functionBreakpoint"
											: Ce instanceof H.$V3
												? "dataBreakpoint"
												: Ce instanceof H.$X3
													? "instructionBreakpoint"
													: void 0;
						this.h.set(Le);
						const Fe = this.cc.getViewModel().focusedSession,
							Oe =
								Ce instanceof H.$W3
									? Ce.supportsCondition
									: !Fe || !!Fe.capabilities.supportsConditionalBreakpoints;
						this.s.set(Oe),
							this.j.set(
								Ce instanceof H.$V3 &&
									Ce.src.type === x.DataBreakpointSetType.Address,
							);
						const xe = [];
						(0, y.$Jyb)(
							this.g,
							{ arg: be.element, shouldForwardArgs: !1 },
							{ primary: [], secondary: xe },
							"inline",
						),
							this.zb.showContextMenu({
								getAnchor: () => be.anchor,
								getActions: () => xe,
								getActionsContext: () => Ce,
							});
					}
					mc() {
						const be = this.Cb.getViewContainerModel(
								this.Cb.getViewContainerByViewId(this.id),
							),
							Ce = this.cc.getViewModel().focusedSession?.getId();
						(this.minimumBodySize =
							this.orientation === m.Orientation.VERTICAL
								? _(this.cc.getModel(), Ce, ee)
								: 170),
							(this.maximumBodySize =
								this.orientation === m.Orientation.VERTICAL &&
								be.visibleViewDescriptors.length > 1
									? _(this.cc.getModel(), Ce, Number.POSITIVE_INFINITY)
									: Number.POSITIVE_INFINITY);
					}
					nc(be = !1) {
						if (!this.ab) return;
						const Ce =
								this.cc.getViewModel().focusedSession?.configuration.type,
							Le = Ce ? this.cc.getAdapterManager().getDebugger(Ce) : void 0,
							Fe = Le?.strings?.[x.DebuggerString.UnverifiedBreakpoints],
							Oe =
								Fe &&
								this.cc
									.getModel()
									.getBreakpoints()
									.filter((xe) => {
										if (xe.verified || !xe.enabled) return !1;
										const He = this.hc.guessLanguageIdByFilepathOrFirstLine(
											xe.uri,
										);
										return He && Le.interestedInLanguage(He);
									});
						if (
							Fe &&
							Oe?.length &&
							this.cc.getModel().areBreakpointsActivated()
						)
							if (be) {
								const xe = new c.$cl(void 0, { isTrusted: !0 }).appendMarkdown(
									Fe,
								);
								this.ab.setLabel("$(warning)", void 0, {
									title: { markdown: xe, markdownNotSupportedFallback: Fe },
								}),
									t.show(this.ab.element);
							} else this.sb.schedule();
						else t.hide(this.ab.element);
					}
					oc() {
						if (this.isBodyVisible()) {
							if ((this.mc(), this.a)) {
								const be = this.a.getFocus()[0],
									Ce = be && !this.qc.includes(this.a.element(be));
								this.a.splice(0, this.a.length, this.qc),
									(this.b = !1),
									Ce && this.a.focusNth(Math.min(be, this.a.length - 1));
							}
							this.nc();
						} else this.b = !0;
					}
					pc() {
						if (this.isBodyVisible()) {
							this.c = !1;
							const be = this.cc.getViewModel().focusedThread;
							let Ce = !1;
							if (
								be &&
								be.stoppedDetails &&
								be.stoppedDetails.hitBreakpointIds &&
								be.stoppedDetails.hitBreakpointIds.length > 0
							) {
								const Le = be.stoppedDetails.hitBreakpointIds,
									Oe = this.qc.findIndex((xe) => {
										const He = xe.getIdFromAdapter(be.session.getId());
										return typeof He == "number" && Le.indexOf(He) !== -1;
									});
								Oe >= 0 &&
									(this.a.setFocus([Oe]),
									this.a.setSelection([Oe]),
									(Ce = !0),
									(this.L = Oe));
							}
							if (!Ce) {
								const Le = this.a.getFocus(),
									Fe = this.a.getSelection();
								this.L >= 0 &&
									(0, u.$yb)(Le, Fe) &&
									Le.indexOf(this.L) >= 0 &&
									(this.a.setFocus([]), this.a.setSelection([])),
									(this.L = -1);
							}
							this.nc();
						} else this.c = !0;
					}
					get qc() {
						const be = this.cc.getModel(),
							Ce = this.cc.getViewModel().focusedSession?.getId();
						return be
							.getExceptionBreakpointsForSession(Ce)
							.concat(be.getFunctionBreakpoints())
							.concat(be.getDataBreakpoints())
							.concat(be.getBreakpoints())
							.concat(be.getInstructionBreakpoints());
					}
				};
				(e.$mGc = te),
					(e.$mGc = te =
						Ne(
							[
								j(1, I.$Xxb),
								j(2, x.$75),
								j(3, L.$uZ),
								j(4, k.$Li),
								j(5, B.$iP),
								j(6, V.$IY),
								j(7, I.$Wxb),
								j(8, v.$gj),
								j(9, z.$K1),
								j(10, S.$6j),
								j(11, N.$7rb),
								j(12, R.$km),
								j(13, D.$3N),
								j(14, $.$YX),
								j(15, P.$Uyb),
								j(16, s.$nM),
							],
							te,
						));
				class Q {
					constructor(be) {
						this.a = be;
					}
					getHeight(be) {
						return 22;
					}
					getTemplateId(be) {
						if (be instanceof H.$T3) return se.ID;
						if (be instanceof H.$U3) {
							const Ce = this.a.inputBoxData?.breakpoint;
							return !be.name || (Ce && Ce.getId() === be.getId())
								? pe.ID
								: le.ID;
						}
						if (be instanceof H.$W3) {
							const Ce = this.a.inputBoxData?.breakpoint;
							return Ce && Ce.getId() === be.getId() ? ye.ID : re.ID;
						}
						if (be instanceof H.$V3) {
							const Ce = this.a.inputBoxData?.breakpoint;
							return Ce && Ce.getId() === be.getId() ? $e.ID : oe.ID;
						}
						return be instanceof H.$X3 ? ae.ID : "";
					}
				}
				const Z = new Map();
				let se = class {
					static {
						J = this;
					}
					constructor(be, Ce, Le, Fe, Oe, xe, He) {
						(this.a = be),
							(this.b = Ce),
							(this.c = Le),
							(this.d = Fe),
							(this.f = Oe),
							(this.g = xe),
							(this.h = He);
					}
					static {
						this.ID = "breakpoints";
					}
					get templateId() {
						return J.ID;
					}
					renderTemplate(be) {
						const Ce = Object.create(null);
						(Ce.toDispose = []),
							(Ce.breakpoint = t.$fhb(be, ie(".breakpoint"))),
							(Ce.icon = ie(".icon")),
							(Ce.checkbox = ne(Ce.toDispose)),
							Ce.toDispose.push(
								t.$$fb(Ce.checkbox, "change", (Fe) => {
									this.f.enableOrDisableBreakpoints(
										!Ce.context.enabled,
										Ce.context,
									);
								}),
							),
							t.$fhb(Ce.breakpoint, Ce.icon),
							t.$fhb(Ce.breakpoint, Ce.checkbox),
							(Ce.name = t.$fhb(Ce.breakpoint, ie("span.name"))),
							(Ce.filePath = t.$fhb(Ce.breakpoint, ie("span.file-path"))),
							(Ce.actionBar = new w.$eib(Ce.breakpoint)),
							Ce.toDispose.push(Ce.actionBar);
						const Le = t.$fhb(Ce.breakpoint, ie(".badge-container"));
						return (
							(Ce.badge = t.$fhb(
								Le,
								ie("span.line-number.monaco-count-badge"),
							)),
							Ce
						);
					}
					renderElement(be, Ce, Le) {
						(Le.context = be),
							Le.breakpoint.classList.toggle(
								"disabled",
								!this.f.getModel().areBreakpointsActivated(),
							),
							(Le.name.textContent = p.$jh(be.uri));
						let Fe = be.lineNumber.toString();
						be.column && (Fe += `:${be.column}`),
							be.modeLabel && (Fe = `${be.modeLabel}: ${Fe}`),
							(Le.badge.textContent = Fe),
							(Le.filePath.textContent = this.h.getUriLabel(p.$mh(be.uri), {
								relative: !0,
							})),
							(Le.checkbox.checked = be.enabled);
						const { message: Oe, icon: xe } = me(
							this.f.state,
							this.f.getModel().areBreakpointsActivated(),
							be,
							this.h,
							this.f.getModel(),
						);
						(Le.icon.className = o.ThemeIcon.asClassName(xe)),
							Le.toDispose.push(
								this.g.setupManagedHover(
									(0, E.$cib)("mouse"),
									Le.breakpoint,
									be.message || Oe || "",
								),
							),
							(this.f.state === x.State.Running ||
								this.f.state === x.State.Stopped) &&
								!be.verified &&
								Le.breakpoint.classList.add("disabled");
						const Ke = [],
							Je = this.f.getViewModel().focusedSession;
						this.c.set(!Je || !!Je.capabilities.supportsConditionalBreakpoints),
							this.d.set("breakpoint"),
							this.b.set(
								this.f.getModel().getBreakpointModes("source").length > 1,
							),
							(0, y.$Kyb)(
								this.a,
								{ arg: be, shouldForwardArgs: !0 },
								{ primary: Ke, secondary: [] },
								"inline",
							),
							Le.actionBar.clear(),
							Le.actionBar.push(Ke, { icon: !0, label: !1 }),
							Z.set(be.getId(), Le.actionBar.domNode);
					}
					disposeTemplate(be) {
						(0, g.$Vc)(be.toDispose);
					}
				};
				se = J = Ne([j(4, x.$75), j(5, P.$Uyb), j(6, D.$3N)], se);
				class re {
					constructor(be, Ce, Le, Fe, Oe, xe) {
						(this.a = be),
							(this.b = Ce),
							(this.c = Le),
							(this.d = Fe),
							(this.f = Oe),
							(this.g = xe);
					}
					static {
						this.ID = "exceptionbreakpoints";
					}
					get templateId() {
						return re.ID;
					}
					renderTemplate(be) {
						const Ce = Object.create(null);
						(Ce.toDispose = []),
							(Ce.breakpoint = t.$fhb(be, ie(".breakpoint"))),
							(Ce.checkbox = ne(Ce.toDispose)),
							Ce.toDispose.push(
								t.$$fb(Ce.checkbox, "change", (Fe) => {
									this.f.enableOrDisableBreakpoints(
										!Ce.context.enabled,
										Ce.context,
									);
								}),
							),
							t.$fhb(Ce.breakpoint, Ce.checkbox),
							(Ce.name = t.$fhb(Ce.breakpoint, ie("span.name"))),
							(Ce.condition = t.$fhb(Ce.breakpoint, ie("span.condition"))),
							Ce.breakpoint.classList.add("exception"),
							(Ce.actionBar = new w.$eib(Ce.breakpoint)),
							Ce.toDispose.push(Ce.actionBar);
						const Le = t.$fhb(Ce.breakpoint, ie(".badge-container"));
						return (
							(Ce.badge = t.$fhb(
								Le,
								ie("span.line-number.monaco-count-badge"),
							)),
							Ce
						);
					}
					renderElement(be, Ce, Le) {
						(Le.context = be),
							(Le.name.textContent = be.label || `${be.filter} exceptions`);
						const Fe = be.verified
							? be.description || Le.name.textContent
							: be.message || (0, l.localize)(5180, null);
						Le.toDispose.push(
							this.g.setupManagedHover((0, E.$cib)("mouse"), Le.breakpoint, Fe),
						),
							Le.breakpoint.classList.toggle("disabled", !be.verified),
							(Le.checkbox.checked = be.enabled),
							(Le.condition.textContent = be.condition || ""),
							Le.toDispose.push(
								this.g.setupManagedHover(
									(0, E.$cib)("mouse"),
									Le.condition,
									(0, l.localize)(5181, null, be.condition),
								),
							),
							be.modeLabel
								? ((Le.badge.textContent = be.modeLabel),
									(Le.badge.style.display = "block"))
								: (Le.badge.style.display = "none");
						const Oe = [];
						this.c.set(be.supportsCondition),
							this.d.set("exceptionBreakpoint"),
							this.b.set(
								this.f.getModel().getBreakpointModes("exception").length > 1,
							),
							(0, y.$Kyb)(
								this.a,
								{ arg: be, shouldForwardArgs: !0 },
								{ primary: Oe, secondary: [] },
								"inline",
							),
							Le.actionBar.clear(),
							Le.actionBar.push(Oe, { icon: !0, label: !1 }),
							Z.set(be.getId(), Le.actionBar.domNode);
					}
					disposeTemplate(be) {
						(0, g.$Vc)(be.toDispose);
					}
				}
				let le = class {
					static {
						W = this;
					}
					constructor(be, Ce, Le, Fe, Oe, xe) {
						(this.a = be),
							(this.b = Ce),
							(this.c = Le),
							(this.d = Fe),
							(this.f = Oe),
							(this.g = xe);
					}
					static {
						this.ID = "functionbreakpoints";
					}
					get templateId() {
						return W.ID;
					}
					renderTemplate(be) {
						const Ce = Object.create(null);
						(Ce.toDispose = []),
							(Ce.breakpoint = t.$fhb(be, ie(".breakpoint"))),
							(Ce.icon = ie(".icon")),
							(Ce.checkbox = ne(Ce.toDispose)),
							Ce.toDispose.push(
								t.$$fb(Ce.checkbox, "change", (Fe) => {
									this.d.enableOrDisableBreakpoints(
										!Ce.context.enabled,
										Ce.context,
									);
								}),
							),
							t.$fhb(Ce.breakpoint, Ce.icon),
							t.$fhb(Ce.breakpoint, Ce.checkbox),
							(Ce.name = t.$fhb(Ce.breakpoint, ie("span.name"))),
							(Ce.condition = t.$fhb(Ce.breakpoint, ie("span.condition"))),
							(Ce.actionBar = new w.$eib(Ce.breakpoint)),
							Ce.toDispose.push(Ce.actionBar);
						const Le = t.$fhb(Ce.breakpoint, ie(".badge-container"));
						return (
							(Ce.badge = t.$fhb(
								Le,
								ie("span.line-number.monaco-count-badge"),
							)),
							Ce
						);
					}
					renderElement(be, Ce, Le) {
						(Le.context = be), (Le.name.textContent = be.name);
						const { icon: Fe, message: Oe } = me(
							this.d.state,
							this.d.getModel().areBreakpointsActivated(),
							be,
							this.g,
							this.d.getModel(),
						);
						(Le.icon.className = o.ThemeIcon.asClassName(Fe)),
							Le.toDispose.push(
								this.f.setupManagedHover(
									(0, E.$cib)("mouse"),
									Le.icon,
									Oe || "",
								),
							),
							(Le.checkbox.checked = be.enabled),
							Le.toDispose.push(
								this.f.setupManagedHover(
									(0, E.$cib)("mouse"),
									Le.breakpoint,
									Oe || "",
								),
							),
							be.condition && be.hitCondition
								? (Le.condition.textContent = (0, l.localize)(
										5182,
										null,
										be.condition,
										be.hitCondition,
									))
								: (Le.condition.textContent =
										be.condition || be.hitCondition || ""),
							be.modeLabel
								? ((Le.badge.textContent = be.modeLabel),
									(Le.badge.style.display = "block"))
								: (Le.badge.style.display = "none");
						const xe = this.d.getViewModel().focusedSession;
						Le.breakpoint.classList.toggle(
							"disabled",
							(xe && !xe.capabilities.supportsFunctionBreakpoints) ||
								!this.d.getModel().areBreakpointsActivated(),
						),
							xe &&
								!xe.capabilities.supportsFunctionBreakpoints &&
								Le.toDispose.push(
									this.f.setupManagedHover(
										(0, E.$cib)("mouse"),
										Le.breakpoint,
										(0, l.localize)(5183, null),
									),
								);
						const He = [];
						this.b.set(!xe || !!xe.capabilities.supportsConditionalBreakpoints),
							this.c.set("functionBreakpoint"),
							(0, y.$Kyb)(
								this.a,
								{ arg: be, shouldForwardArgs: !0 },
								{ primary: He, secondary: [] },
								"inline",
							),
							Le.actionBar.clear(),
							Le.actionBar.push(He, { icon: !0, label: !1 }),
							Z.set(be.getId(), Le.actionBar.domNode);
					}
					disposeTemplate(be) {
						(0, g.$Vc)(be.toDispose);
					}
				};
				le = W = Ne([j(3, x.$75), j(4, P.$Uyb), j(5, D.$3N)], le);
				let oe = class {
					static {
						X = this;
					}
					constructor(be, Ce, Le, Fe, Oe, xe, He, Ke) {
						(this.a = be),
							(this.b = Ce),
							(this.c = Le),
							(this.d = Fe),
							(this.f = Oe),
							(this.g = xe),
							(this.h = He),
							(this.i = Ke);
					}
					static {
						this.ID = "databreakpoints";
					}
					get templateId() {
						return X.ID;
					}
					renderTemplate(be) {
						const Ce = Object.create(null);
						(Ce.breakpoint = t.$fhb(be, ie(".breakpoint"))),
							(Ce.toDispose = []),
							(Ce.icon = ie(".icon")),
							(Ce.checkbox = ne(Ce.toDispose)),
							Ce.toDispose.push(
								t.$$fb(Ce.checkbox, "change", (Fe) => {
									this.g.enableOrDisableBreakpoints(
										!Ce.context.enabled,
										Ce.context,
									);
								}),
							),
							t.$fhb(Ce.breakpoint, Ce.icon),
							t.$fhb(Ce.breakpoint, Ce.checkbox),
							(Ce.name = t.$fhb(Ce.breakpoint, ie("span.name"))),
							(Ce.accessType = t.$fhb(Ce.breakpoint, ie("span.access-type"))),
							(Ce.condition = t.$fhb(Ce.breakpoint, ie("span.condition"))),
							(Ce.actionBar = new w.$eib(Ce.breakpoint)),
							Ce.toDispose.push(Ce.actionBar);
						const Le = t.$fhb(Ce.breakpoint, ie(".badge-container"));
						return (
							(Ce.badge = t.$fhb(
								Le,
								ie("span.line-number.monaco-count-badge"),
							)),
							Ce
						);
					}
					renderElement(be, Ce, Le) {
						(Le.context = be), (Le.name.textContent = be.description);
						const { icon: Fe, message: Oe } = me(
							this.g.state,
							this.g.getModel().areBreakpointsActivated(),
							be,
							this.i,
							this.g.getModel(),
						);
						(Le.icon.className = o.ThemeIcon.asClassName(Fe)),
							Le.toDispose.push(
								this.h.setupManagedHover(
									(0, E.$cib)("mouse"),
									Le.icon,
									Oe || "",
								),
							),
							(Le.checkbox.checked = be.enabled),
							Le.toDispose.push(
								this.h.setupManagedHover(
									(0, E.$cib)("mouse"),
									Le.breakpoint,
									Oe || "",
								),
							),
							be.modeLabel
								? ((Le.badge.textContent = be.modeLabel),
									(Le.badge.style.display = "block"))
								: (Le.badge.style.display = "none");
						const xe = this.g.getViewModel().focusedSession;
						if (
							(Le.breakpoint.classList.toggle(
								"disabled",
								(xe && !xe.capabilities.supportsDataBreakpoints) ||
									!this.g.getModel().areBreakpointsActivated(),
							),
							xe &&
								!xe.capabilities.supportsDataBreakpoints &&
								Le.toDispose.push(
									this.h.setupManagedHover(
										(0, E.$cib)("mouse"),
										Le.breakpoint,
										(0, l.localize)(5184, null),
									),
								),
							be.accessType)
						) {
							const Ke =
								be.accessType === "read"
									? (0, l.localize)(5185, null)
									: be.accessType === "write"
										? (0, l.localize)(5186, null)
										: (0, l.localize)(5187, null);
							Le.accessType.textContent = Ke;
						} else Le.accessType.textContent = "";
						be.condition && be.hitCondition
							? (Le.condition.textContent = (0, l.localize)(
									5188,
									null,
									be.condition,
									be.hitCondition,
								))
							: (Le.condition.textContent =
									be.condition || be.hitCondition || "");
						const He = [];
						this.c.set(!xe || !!xe.capabilities.supportsConditionalBreakpoints),
							this.b.set(
								this.g.getModel().getBreakpointModes("data").length > 1,
							),
							this.d.set("dataBreakpoint"),
							this.f.set(be.src.type === x.DataBreakpointSetType.Address),
							(0, y.$Kyb)(
								this.a,
								{ arg: be, shouldForwardArgs: !0 },
								{ primary: He, secondary: [] },
								"inline",
							),
							Le.actionBar.clear(),
							Le.actionBar.push(He, { icon: !0, label: !1 }),
							Z.set(be.getId(), Le.actionBar.domNode),
							this.f.reset();
					}
					disposeTemplate(be) {
						(0, g.$Vc)(be.toDispose);
					}
				};
				oe = X = Ne([j(5, x.$75), j(6, P.$Uyb), j(7, D.$3N)], oe);
				let ae = class {
					static {
						Y = this;
					}
					constructor(be, Ce, Le) {
						(this.a = be), (this.b = Ce), (this.c = Le);
					}
					static {
						this.ID = "instructionBreakpoints";
					}
					get templateId() {
						return Y.ID;
					}
					renderTemplate(be) {
						const Ce = Object.create(null);
						(Ce.toDispose = []),
							(Ce.breakpoint = t.$fhb(be, ie(".breakpoint"))),
							(Ce.icon = ie(".icon")),
							(Ce.checkbox = ne(Ce.toDispose)),
							Ce.toDispose.push(
								t.$$fb(Ce.checkbox, "change", (Fe) => {
									this.a.enableOrDisableBreakpoints(
										!Ce.context.enabled,
										Ce.context,
									);
								}),
							),
							t.$fhb(Ce.breakpoint, Ce.icon),
							t.$fhb(Ce.breakpoint, Ce.checkbox),
							(Ce.name = t.$fhb(Ce.breakpoint, ie("span.name"))),
							(Ce.address = t.$fhb(Ce.breakpoint, ie("span.file-path"))),
							(Ce.actionBar = new w.$eib(Ce.breakpoint)),
							Ce.toDispose.push(Ce.actionBar);
						const Le = t.$fhb(Ce.breakpoint, ie(".badge-container"));
						return (
							(Ce.badge = t.$fhb(
								Le,
								ie("span.line-number.monaco-count-badge"),
							)),
							Ce
						);
					}
					renderElement(be, Ce, Le) {
						(Le.context = be),
							Le.breakpoint.classList.toggle(
								"disabled",
								!this.a.getModel().areBreakpointsActivated(),
							),
							(Le.name.textContent = "0x" + be.address.toString(16)),
							Le.toDispose.push(
								this.b.setupManagedHover(
									(0, E.$cib)("mouse"),
									Le.name,
									"Decimal address: breakpoint.address.toString()",
								),
							),
							(Le.checkbox.checked = be.enabled);
						const { message: Fe, icon: Oe } = me(
							this.a.state,
							this.a.getModel().areBreakpointsActivated(),
							be,
							this.c,
							this.a.getModel(),
						);
						(Le.icon.className = o.ThemeIcon.asClassName(Oe)),
							Le.toDispose.push(
								this.b.setupManagedHover(
									(0, E.$cib)("mouse"),
									Le.breakpoint,
									be.message || Fe || "",
								),
							),
							(this.a.state === x.State.Running ||
								this.a.state === x.State.Stopped) &&
								!be.verified &&
								Le.breakpoint.classList.add("disabled"),
							be.modeLabel
								? ((Le.badge.textContent = be.modeLabel),
									(Le.badge.style.display = "block"))
								: (Le.badge.style.display = "none");
					}
					disposeTemplate(be) {
						(0, g.$Vc)(be.toDispose);
					}
				};
				ae = Y = Ne([j(0, x.$75), j(1, P.$Uyb), j(2, D.$3N)], ae);
				class pe {
					constructor(be, Ce, Le, Fe, Oe) {
						(this.a = be),
							(this.b = Ce),
							(this.c = Le),
							(this.d = Fe),
							(this.f = Oe);
					}
					static {
						this.ID = "functionbreakpointinput";
					}
					get templateId() {
						return pe.ID;
					}
					renderTemplate(be) {
						const Ce = Object.create(null),
							Le = [],
							Fe = t.$fhb(be, ie(".breakpoint"));
						(Ce.icon = ie(".icon")),
							(Ce.checkbox = ne(Le)),
							t.$fhb(Fe, Ce.icon),
							t.$fhb(Fe, Ce.checkbox),
							this.a.breakpointInputFocused.set(!0);
						const Oe = t.$fhb(Fe, ie(".inputBoxContainer")),
							xe = new d.$Mob(Oe, this.c, { inputBoxStyles: O.$wyb }),
							He = (Ke) => {
								Ce.updating = !0;
								try {
									this.a.breakpointInputFocused.set(!1);
									const Je = Ce.breakpoint.getId();
									Ke
										? (Ce.type === "name" &&
												this.b.updateFunctionBreakpoint(Je, { name: xe.value }),
											Ce.type === "condition" &&
												this.b.updateFunctionBreakpoint(Je, {
													condition: xe.value,
												}),
											Ce.type === "hitCount" &&
												this.b.updateFunctionBreakpoint(Je, {
													hitCondition: xe.value,
												}))
										: Ce.type === "name" && !Ce.breakpoint.name
											? this.b.removeFunctionBreakpoints(Je)
											: this.a.renderInputBox(void 0);
								} finally {
									Ce.updating = !1;
								}
							};
						return (
							Le.push(
								t.$$fb(xe.inputElement, "keydown", (Ke) => {
									const Je = Ke.equals(n.KeyCode.Escape),
										Te = Ke.equals(n.KeyCode.Enter);
									(Je || Te) &&
										(Ke.preventDefault(), Ke.stopPropagation(), He(Te));
								}),
							),
							Le.push(
								t.$0fb(xe.inputElement, "blur", () => {
									Ce.updating || He(!!xe.value);
								}),
							),
							(Ce.inputBox = xe),
							(Ce.toDispose = Le),
							Ce
						);
					}
					renderElement(be, Ce, Le) {
						(Le.breakpoint = be),
							(Le.type = this.a.inputBoxData?.type || "name");
						const { icon: Fe, message: Oe } = me(
							this.b.state,
							this.b.getModel().areBreakpointsActivated(),
							be,
							this.f,
							this.b.getModel(),
						);
						(Le.icon.className = o.ThemeIcon.asClassName(Fe)),
							Le.toDispose.push(
								this.d.setupManagedHover(
									(0, E.$cib)("mouse"),
									Le.icon,
									Oe || "",
								),
							),
							(Le.checkbox.checked = be.enabled),
							(Le.checkbox.disabled = !0),
							(Le.inputBox.value = be.name || "");
						let xe = (0, l.localize)(5189, null),
							He = (0, l.localize)(5190, null);
						Le.type === "condition"
							? ((Le.inputBox.value = be.condition || ""),
								(xe = (0, l.localize)(5191, null)),
								(He = (0, l.localize)(5192, null)))
							: Le.type === "hitCount" &&
								((Le.inputBox.value = be.hitCondition || ""),
								(xe = (0, l.localize)(5193, null)),
								(He = (0, l.localize)(5194, null))),
							Le.inputBox.setAriaLabel(He),
							Le.inputBox.setPlaceHolder(xe),
							setTimeout(() => {
								Le.inputBox.focus(), Le.inputBox.select();
							}, 0);
					}
					disposeTemplate(be) {
						(0, g.$Vc)(be.toDispose);
					}
				}
				class $e {
					constructor(be, Ce, Le, Fe, Oe) {
						(this.a = be),
							(this.b = Ce),
							(this.c = Le),
							(this.d = Fe),
							(this.f = Oe);
					}
					static {
						this.ID = "databreakpointinput";
					}
					get templateId() {
						return $e.ID;
					}
					renderTemplate(be) {
						const Ce = Object.create(null),
							Le = [],
							Fe = t.$fhb(be, ie(".breakpoint"));
						(Ce.icon = ie(".icon")),
							(Ce.checkbox = ne(Le)),
							t.$fhb(Fe, Ce.icon),
							t.$fhb(Fe, Ce.checkbox),
							this.a.breakpointInputFocused.set(!0);
						const Oe = t.$fhb(Fe, ie(".inputBoxContainer")),
							xe = new d.$Mob(Oe, this.c, { inputBoxStyles: O.$wyb }),
							He = (Ke) => {
								Ce.updating = !0;
								try {
									this.a.breakpointInputFocused.set(!1);
									const Je = Ce.breakpoint.getId();
									Ke
										? (Ce.type === "condition" &&
												this.b.updateDataBreakpoint(Je, {
													condition: xe.value,
												}),
											Ce.type === "hitCount" &&
												this.b.updateDataBreakpoint(Je, {
													hitCondition: xe.value,
												}))
										: this.a.renderInputBox(void 0);
								} finally {
									Ce.updating = !1;
								}
							};
						return (
							Le.push(
								t.$$fb(xe.inputElement, "keydown", (Ke) => {
									const Je = Ke.equals(n.KeyCode.Escape),
										Te = Ke.equals(n.KeyCode.Enter);
									(Je || Te) &&
										(Ke.preventDefault(), Ke.stopPropagation(), He(Te));
								}),
							),
							Le.push(
								t.$0fb(xe.inputElement, "blur", () => {
									Ce.updating || He(!!xe.value);
								}),
							),
							(Ce.inputBox = xe),
							(Ce.toDispose = Le),
							Ce
						);
					}
					renderElement(be, Ce, Le) {
						(Le.breakpoint = be),
							(Le.type = this.a.inputBoxData?.type || "condition");
						const { icon: Fe, message: Oe } = me(
							this.b.state,
							this.b.getModel().areBreakpointsActivated(),
							be,
							this.f,
							this.b.getModel(),
						);
						(Le.icon.className = o.ThemeIcon.asClassName(Fe)),
							Le.toDispose.push(
								this.d.setupManagedHover(
									(0, E.$cib)("mouse"),
									Le.icon,
									Oe ?? "",
								),
							),
							(Le.checkbox.checked = be.enabled),
							(Le.checkbox.disabled = !0),
							(Le.inputBox.value = "");
						let xe = "",
							He = "";
						Le.type === "condition"
							? ((Le.inputBox.value = be.condition || ""),
								(xe = (0, l.localize)(5195, null)),
								(He = (0, l.localize)(5196, null)))
							: Le.type === "hitCount" &&
								((Le.inputBox.value = be.hitCondition || ""),
								(xe = (0, l.localize)(5197, null)),
								(He = (0, l.localize)(5198, null))),
							Le.inputBox.setAriaLabel(He),
							Le.inputBox.setPlaceHolder(xe),
							setTimeout(() => {
								Le.inputBox.focus(), Le.inputBox.select();
							}, 0);
					}
					disposeTemplate(be) {
						(0, g.$Vc)(be.toDispose);
					}
				}
				class ye {
					constructor(be, Ce, Le) {
						(this.a = be), (this.b = Ce), (this.c = Le);
					}
					static {
						this.ID = "exceptionbreakpointinput";
					}
					get templateId() {
						return ye.ID;
					}
					renderTemplate(be) {
						const Ce = Object.create(null),
							Le = [],
							Fe = t.$fhb(be, ie(".breakpoint"));
						Fe.classList.add("exception"),
							(Ce.checkbox = ne(Le)),
							t.$fhb(Fe, Ce.checkbox),
							this.a.breakpointInputFocused.set(!0);
						const Oe = t.$fhb(Fe, ie(".inputBoxContainer")),
							xe = new d.$Mob(Oe, this.c, {
								ariaLabel: (0, l.localize)(5199, null),
								inputBoxStyles: O.$wyb,
							}),
							He = (Ke) => {
								this.a.breakpointInputFocused.set(!1);
								let Je = Ce.breakpoint.condition;
								Ke && (Je = xe.value !== "" ? xe.value : void 0),
									this.b.setExceptionBreakpointCondition(Ce.breakpoint, Je);
							};
						return (
							Le.push(
								t.$$fb(xe.inputElement, "keydown", (Ke) => {
									const Je = Ke.equals(n.KeyCode.Escape),
										Te = Ke.equals(n.KeyCode.Enter);
									(Je || Te) &&
										(Ke.preventDefault(), Ke.stopPropagation(), He(Te));
								}),
							),
							Le.push(
								t.$0fb(xe.inputElement, "blur", () => {
									setTimeout(() => {
										He(!0);
									});
								}),
							),
							(Ce.inputBox = xe),
							(Ce.toDispose = Le),
							Ce
						);
					}
					renderElement(be, Ce, Le) {
						const Fe = be.conditionDescription || (0, l.localize)(5200, null);
						Le.inputBox.setPlaceHolder(Fe),
							(Le.breakpoint = be),
							(Le.checkbox.checked = be.enabled),
							(Le.checkbox.disabled = !0),
							(Le.inputBox.value = be.condition || ""),
							setTimeout(() => {
								Le.inputBox.focus(), Le.inputBox.select();
							}, 0);
					}
					disposeTemplate(be) {
						(0, g.$Vc)(be.toDispose);
					}
				}
				class ue {
					constructor(be, Ce) {
						(this.a = be), (this.b = Ce);
					}
					getWidgetAriaLabel() {
						return (0, l.localize)(5201, null);
					}
					getRole() {
						return "checkbox";
					}
					isChecked(be) {
						return be.enabled;
					}
					getAriaLabel(be) {
						if (be instanceof H.$W3) return be.toString();
						const { message: Ce } = me(
								this.a.state,
								this.a.getModel().areBreakpointsActivated(),
								be,
								this.b,
								this.a.getModel(),
							),
							Le = be.toString();
						return Ce ? `${Le}, ${Ce}` : Le;
					}
				}
				function fe(ge, be, Ce, Le, Fe, Oe) {
					if (ge.uri.scheme === x.$25 && Fe.state === x.State.Inactive)
						return Promise.resolve(void 0);
					const xe = ge.endLineNumber
						? {
								startLineNumber: ge.lineNumber,
								endLineNumber: ge.endLineNumber,
								startColumn: ge.column || 1,
								endColumn: ge.endColumn || f.Constants.MAX_SAFE_SMALL_INTEGER,
							}
						: {
								startLineNumber: ge.lineNumber,
								startColumn: ge.column || 1,
								endLineNumber: ge.lineNumber,
								endColumn: ge.column || f.Constants.MAX_SAFE_SMALL_INTEGER,
							};
					return Oe.openEditor(
						{
							resource: ge.uri,
							options: {
								preserveFocus: Ce,
								selection: xe,
								revealIfOpened: !0,
								selectionRevealType:
									T.TextEditorSelectionRevealType.CenterIfOutsideViewport,
								pinned: Le,
							},
						},
						be ? V.$KY : V.$JY,
					);
				}
				function me(ge, be, Ce, Le, Fe) {
					const Oe = ge === x.State.Running || ge === x.State.Stopped,
						xe =
							Ce instanceof H.$V3
								? F.$$Jb
								: Ce instanceof H.$U3
									? F.$9Jb
									: Ce.logMessage
										? F.$_Jb
										: F.$8Jb;
					if (!Ce.enabled || !be)
						return {
							icon: xe.disabled,
							message: Ce.logMessage
								? (0, l.localize)(5202, null)
								: (0, l.localize)(5203, null),
						};
					const He = (Te) =>
						"message" in Ce && Ce.message ? Te.concat(", " + Ce.message) : Te;
					if (Oe && Ce instanceof H.$T3 && Ce.pending)
						return { icon: F.$8Jb.pending };
					if (Oe && !Ce.verified)
						return {
							icon: xe.unverified,
							message:
								"message" in Ce && Ce.message
									? Ce.message
									: Ce.logMessage
										? (0, l.localize)(5204, null)
										: (0, l.localize)(5205, null),
							showAdapterUnverifiedMessage: !0,
						};
					if (Ce instanceof H.$V3)
						return Ce.supported
							? {
									icon: xe.regular,
									message: Ce.message || (0, l.localize)(5207, null),
								}
							: { icon: xe.unverified, message: (0, l.localize)(5206, null) };
					if (Ce instanceof H.$U3) {
						if (!Ce.supported)
							return {
								icon: xe.unverified,
								message: (0, l.localize)(5208, null),
							};
						const Te = [];
						return (
							Te.push(Ce.message || (0, l.localize)(5209, null)),
							Ce.condition &&
								Te.push((0, l.localize)(5210, null, Ce.condition)),
							Ce.hitCondition &&
								Te.push((0, l.localize)(5211, null, Ce.hitCondition)),
							{
								icon: xe.regular,
								message: He(
									Te.join(`
`),
								),
							}
						);
					}
					if (Ce instanceof H.$X3) {
						if (!Ce.supported)
							return {
								icon: xe.unverified,
								message: (0, l.localize)(5212, null),
							};
						const Te = [];
						return (
							Ce.message
								? Te.push(Ce.message)
								: Ce.instructionReference
									? Te.push(
											(0, l.localize)(5213, null, Ce.instructionReference),
										)
									: Te.push((0, l.localize)(5214, null)),
							Ce.hitCondition &&
								Te.push((0, l.localize)(5215, null, Ce.hitCondition)),
							{
								icon: xe.regular,
								message: He(
									Te.join(`
`),
								),
							}
						);
					}
					let Ke;
					if (
						(Ce instanceof H.$T3 &&
							Ce.triggeredBy &&
							(Ke = Fe.getBreakpoints().find(
								(Te) => Te.getId() === Ce.triggeredBy,
							)),
						Ce.logMessage || Ce.condition || Ce.hitCondition || Ke)
					) {
						const Te = [];
						let Ee = Ce.logMessage ? F.$_Jb.regular : F.$0Jb.regular;
						return (
							Ce.supported ||
								((Ee = F.$bKb), Te.push((0, l.localize)(5216, null))),
							Ce.logMessage &&
								Te.push((0, l.localize)(5217, null, Ce.logMessage)),
							Ce.condition &&
								Te.push((0, l.localize)(5218, null, Ce.condition)),
							Ce.hitCondition &&
								Te.push((0, l.localize)(5219, null, Ce.hitCondition)),
							Ke &&
								Te.push(
									(0, l.localize)(
										5220,
										null,
										`${Le.getUriLabel(Ke.uri, { relative: !0 })}: ${Ke.lineNumber}`,
									),
								),
							{
								icon: Ee,
								message: He(
									Te.join(`
`),
								),
							}
						);
					}
					const Je =
						"message" in Ce && Ce.message
							? Ce.message
							: Ce instanceof H.$T3 && Le
								? Le.getUriLabel(Ce.uri)
								: (0, l.localize)(5221, null);
					return { icon: xe.regular, message: Je };
				}
				(0, $.$4X)(
					class extends $.$3X {
						constructor() {
							super({
								id: "workbench.debug.viewlet.action.addFunctionBreakpointAction",
								title: {
									...(0, l.localize2)(5241, "Add Function Breakpoint"),
									mnemonicTitle: (0, l.localize)(5222, null),
								},
								f1: !0,
								icon: F.$EKb,
								menu: [
									{
										id: $.$XX.ViewTitle,
										group: "navigation",
										order: 10,
										when: S.$Kj.equals("view", x.$V4),
									},
									{
										id: $.$XX.MenubarNewBreakpointMenu,
										group: "1_breakpoints",
										order: 3,
										when: x.$y5,
									},
								],
							});
						}
						async run(ge) {
							const be = ge.get(x.$75);
							await ge.get(K.$HMb).openView(x.$V4), be.addFunctionBreakpoint();
						}
					},
				);
				class ve extends $.$3X {
					async run(be, Ce) {
						const Le = be.get(x.$75),
							Fe = Le.getViewModel().focusedSession;
						if (!Fe) return;
						let Oe;
						Ce &&
							Ce.src.type === x.DataBreakpointSetType.Address &&
							(Oe = `${Ce.src.address} + ${Ce.src.bytes}`);
						const xe = be.get(A.$DJ),
							He = be.get(G.$4N),
							Ke = await this.a(xe, Oe);
						if (!Ke) return;
						let Je;
						try {
							Je = await Fe.dataBytesBreakpointInfo(Ke.address, Ke.bytes);
						} catch (Ie) {
							He.error((0, l.localize)(5223, null, Ke.address, Ie.message));
						}
						if (!Je?.dataId) return;
						let Te = "write";
						if (Je.accessTypes && Je.accessTypes?.length > 1) {
							const Ie = Je.accessTypes.map((Se) => ({ label: Se })),
								Be = await xe.pick(Ie, {
									placeHolder: (0, l.localize)(5224, null),
								});
							if (!Be) return;
							Te = Be.label;
						}
						const Ee = { type: x.DataBreakpointSetType.Address, ...Ke };
						Ce && (await Le.removeDataBreakpoints(Ce.getId())),
							await Le.addDataBreakpoint({
								description: Je.description,
								src: Ee,
								canPersist: !0,
								accessTypes: Je.accessTypes,
								accessType: Te,
								initialSessionData: { session: Fe, dataId: Je.dataId },
							});
					}
					a(be, Ce) {
						return new Promise((Le) => {
							const Fe = new g.$Zc(),
								Oe = Fe.add(be.createInputBox());
							(Oe.prompt = (0, l.localize)(5225, null)),
								(Oe.placeholder = (0, l.localize)(5226, null)),
								Ce && ((Oe.value = Ce), (Oe.valueSelection = [0, Ce.length])),
								Fe.add(
									Oe.onDidChangeValue((xe) => {
										const He = this.b(xe, !1);
										Oe.validationMessage = He?.error;
									}),
								),
								Fe.add(
									Oe.onDidAccept(() => {
										const xe = this.b(Oe.value, !0);
										"error" in xe ? (Oe.validationMessage = xe.error) : Le(xe),
											Oe.dispose();
									}),
								),
								Fe.add(
									Oe.onDidHide(() => {
										Le(void 0), Fe.dispose();
									}),
								),
								(Oe.ignoreFocusOut = !0),
								Oe.show();
						});
					}
					b(be, Ce) {
						const Le = /^(\S+)\s*(?:([+-])\s*(\S+))?/.exec(be);
						if (!Le) return { error: (0, l.localize)(5227, null) };
						const Fe = (Ee) =>
								Ce
									? /^0x[0-9a-f]*|[0-9]*$/i.test(Ee)
									: /^0x[0-9a-f]+|[0-9]+$/i.test(Ee),
							[, Oe, xe = "+", He = "1"] = Le;
						for (const Ee of [Oe, He])
							if (!Fe(Ee)) return { error: (0, l.localize)(5228, null, Ee) };
						if (!Ce) return;
						const Ke = BigInt(Oe),
							Je = BigInt(He),
							Te = `0x${Ke.toString(16)}`;
						return xe === "-"
							? { address: Te, bytes: Number(Ke - Je) }
							: { address: Te, bytes: Number(Je) };
					}
				}
				(0, $.$4X)(
					class extends ve {
						constructor() {
							super({
								id: "workbench.debug.viewlet.action.addDataBreakpointOnAddress",
								title: {
									...(0, l.localize2)(5242, "Add Data Breakpoint at Address"),
									mnemonicTitle: (0, l.localize)(5229, null),
								},
								f1: !0,
								icon: F.$FKb,
								menu: [
									{
										id: $.$XX.ViewTitle,
										group: "navigation",
										order: 11,
										when: S.$Kj.and(x.$C5, S.$Kj.equals("view", x.$V4)),
									},
									{
										id: $.$XX.MenubarNewBreakpointMenu,
										group: "1_breakpoints",
										order: 4,
										when: x.$C5,
									},
								],
							});
						}
					},
				),
					(0, $.$4X)(
						class extends ve {
							constructor() {
								super({
									id: "workbench.debug.viewlet.action.editDataBreakpointOnAddress",
									title: (0, l.localize2)(5243, "Edit Address..."),
									menu: [
										{
											id: $.$XX.DebugBreakpointsContext,
											when: S.$Kj.and(x.$C5, x.$l5),
											group: "navigation",
											order: 15,
										},
									],
								});
							}
						},
					),
					(0, $.$4X)(
						class extends $.$3X {
							constructor() {
								super({
									id: "workbench.debug.viewlet.action.toggleBreakpointsActivatedAction",
									title: (0, l.localize2)(5244, "Toggle Activate Breakpoints"),
									f1: !0,
									icon: F.$HKb,
									menu: {
										id: $.$XX.ViewTitle,
										group: "navigation",
										order: 20,
										when: S.$Kj.equals("view", x.$V4),
									},
								});
							}
							run(ge) {
								const be = ge.get(x.$75);
								be.setBreakpointsActivated(
									!be.getModel().areBreakpointsActivated(),
								);
							}
						},
					),
					(0, $.$4X)(
						class extends $.$3X {
							constructor() {
								super({
									id: "workbench.debug.viewlet.action.removeBreakpoint",
									title: (0, l.localize)(5230, null),
									icon: h.$ak.removeClose,
									menu: [
										{
											id: $.$XX.DebugBreakpointsContext,
											group: "3_modification",
											order: 10,
											when: x.$k5.notEqualsTo("exceptionBreakpoint"),
										},
										{
											id: $.$XX.DebugBreakpointsContext,
											group: "inline",
											order: 20,
											when: x.$k5.notEqualsTo("exceptionBreakpoint"),
										},
									],
								});
							}
							async run(ge, be) {
								const Ce = ge.get(x.$75);
								be instanceof H.$T3
									? await Ce.removeBreakpoints(be.getId())
									: be instanceof H.$U3
										? await Ce.removeFunctionBreakpoints(be.getId())
										: be instanceof H.$V3
											? await Ce.removeDataBreakpoints(be.getId())
											: be instanceof H.$X3 &&
												(await Ce.removeInstructionBreakpoints(
													be.instructionReference,
													be.offset,
												));
							}
						},
					),
					(0, $.$4X)(
						class extends $.$3X {
							constructor() {
								super({
									id: "workbench.debug.viewlet.action.removeAllBreakpoints",
									title: {
										...(0, l.localize2)(5245, "Remove All Breakpoints"),
										mnemonicTitle: (0, l.localize)(5231, null),
									},
									f1: !0,
									icon: F.$GKb,
									menu: [
										{
											id: $.$XX.ViewTitle,
											group: "navigation",
											order: 30,
											when: S.$Kj.equals("view", x.$V4),
										},
										{
											id: $.$XX.DebugBreakpointsContext,
											group: "3_modification",
											order: 20,
											when: S.$Kj.and(
												x.$x5,
												x.$k5.notEqualsTo("exceptionBreakpoint"),
											),
										},
										{
											id: $.$XX.MenubarDebugMenu,
											group: "5_breakpoints",
											order: 3,
											when: x.$y5,
										},
									],
								});
							}
							run(ge) {
								const be = ge.get(x.$75);
								be.removeBreakpoints(),
									be.removeFunctionBreakpoints(),
									be.removeDataBreakpoints(),
									be.removeInstructionBreakpoints();
							}
						},
					),
					(0, $.$4X)(
						class extends $.$3X {
							constructor() {
								super({
									id: "workbench.debug.viewlet.action.enableAllBreakpoints",
									title: {
										...(0, l.localize2)(5246, "Enable All Breakpoints"),
										mnemonicTitle: (0, l.localize)(5232, null),
									},
									f1: !0,
									precondition: x.$y5,
									menu: [
										{
											id: $.$XX.DebugBreakpointsContext,
											group: "z_commands",
											order: 10,
											when: S.$Kj.and(
												x.$x5,
												x.$k5.notEqualsTo("exceptionBreakpoint"),
											),
										},
										{
											id: $.$XX.MenubarDebugMenu,
											group: "5_breakpoints",
											order: 1,
											when: x.$y5,
										},
									],
								});
							}
							async run(ge) {
								await ge.get(x.$75).enableOrDisableBreakpoints(!0);
							}
						},
					),
					(0, $.$4X)(
						class extends $.$3X {
							constructor() {
								super({
									id: "workbench.debug.viewlet.action.disableAllBreakpoints",
									title: {
										...(0, l.localize2)(5247, "Disable All Breakpoints"),
										mnemonicTitle: (0, l.localize)(5233, null),
									},
									f1: !0,
									precondition: x.$y5,
									menu: [
										{
											id: $.$XX.DebugBreakpointsContext,
											group: "z_commands",
											order: 20,
											when: S.$Kj.and(
												x.$x5,
												x.$k5.notEqualsTo("exceptionBreakpoint"),
											),
										},
										{
											id: $.$XX.MenubarDebugMenu,
											group: "5_breakpoints",
											order: 2,
											when: x.$y5,
										},
									],
								});
							}
							async run(ge) {
								await ge.get(x.$75).enableOrDisableBreakpoints(!1);
							}
						},
					),
					(0, $.$4X)(
						class extends $.$3X {
							constructor() {
								super({
									id: "workbench.debug.viewlet.action.reapplyBreakpointsAction",
									title: (0, l.localize2)(5248, "Reapply All Breakpoints"),
									f1: !0,
									precondition: x.$74,
									menu: [
										{
											id: $.$XX.DebugBreakpointsContext,
											group: "z_commands",
											order: 30,
											when: S.$Kj.and(
												x.$x5,
												x.$k5.notEqualsTo("exceptionBreakpoint"),
											),
										},
									],
								});
							}
							async run(ge) {
								await ge.get(x.$75).setBreakpointsActivated(!0);
							}
						},
					),
					(0, $.$4X)(
						class extends U.$WMb {
							constructor() {
								super({
									id: "debug.editBreakpoint",
									viewId: x.$V4,
									title: (0, l.localize)(5234, null),
									icon: h.$ak.edit,
									precondition: x.$n5,
									menu: [
										{
											id: $.$XX.DebugBreakpointsContext,
											when: x.$k5.notEqualsTo("functionBreakpoint"),
											group: "navigation",
											order: 10,
										},
										{
											id: $.$XX.DebugBreakpointsContext,
											group: "inline",
											order: 10,
										},
									],
								});
							}
							async runInView(ge, be, Ce) {
								const Le = ge.get(x.$75),
									Fe = ge.get(V.$IY);
								if (Ce instanceof H.$T3) {
									const Oe = await fe(Ce, !1, !1, !0, Le, Fe);
									if (Oe) {
										const xe = Oe.getControl();
										(0, b.$0sb)(xe) &&
											xe
												.getContribution(x.$15)
												?.showBreakpointWidget(Ce.lineNumber, Ce.column);
									}
								} else if (Ce instanceof H.$U3) {
									const Oe = ge.get(I.$Xxb),
										xe = [
											new r.$rj(
												"breakpoint.editCondition",
												(0, l.localize)(5235, null),
												void 0,
												!0,
												async () =>
													be.renderInputBox({
														breakpoint: Ce,
														type: "condition",
													}),
											),
											new r.$rj(
												"breakpoint.editCondition",
												(0, l.localize)(5236, null),
												void 0,
												!0,
												async () =>
													be.renderInputBox({
														breakpoint: Ce,
														type: "hitCount",
													}),
											),
										],
										He = Z.get(Ce.getId());
									He &&
										Oe.showContextMenu({
											getActions: () => xe,
											getAnchor: () => He,
											onHide: () => (0, g.$Vc)(xe),
										});
								} else be.renderInputBox({ breakpoint: Ce, type: "condition" });
							}
						},
					),
					(0, $.$4X)(
						class extends U.$WMb {
							constructor() {
								super({
									id: "debug.editFunctionBreakpoint",
									viewId: x.$V4,
									title: (0, l.localize)(5237, null),
									menu: [
										{
											id: $.$XX.DebugBreakpointsContext,
											group: "navigation",
											order: 10,
											when: x.$k5.isEqualTo("functionBreakpoint"),
										},
									],
								});
							}
							runInView(ge, be, Ce) {
								be.renderInputBox({ breakpoint: Ce, type: "name" });
							}
						},
					),
					(0, $.$4X)(
						class extends U.$WMb {
							constructor() {
								super({
									id: "debug.editFunctionBreakpointHitCount",
									viewId: x.$V4,
									title: (0, l.localize)(5238, null),
									precondition: x.$n5,
									menu: [
										{
											id: $.$XX.DebugBreakpointsContext,
											group: "navigation",
											order: 20,
											when: S.$Kj.or(
												x.$k5.isEqualTo("functionBreakpoint"),
												x.$k5.isEqualTo("dataBreakpoint"),
											),
										},
									],
								});
							}
							runInView(ge, be, Ce) {
								be.renderInputBox({ breakpoint: Ce, type: "hitCount" });
							}
						},
					),
					(0, $.$4X)(
						class extends U.$WMb {
							constructor() {
								super({
									id: "debug.editBreakpointMode",
									viewId: x.$V4,
									title: (0, l.localize)(5239, null),
									menu: [
										{
											id: $.$XX.DebugBreakpointsContext,
											group: "navigation",
											order: 20,
											when: S.$Kj.and(
												x.$m5,
												S.$Kj.or(
													x.$k5.isEqualTo("breakpoint"),
													x.$k5.isEqualTo("exceptionBreakpoint"),
													x.$k5.isEqualTo("instructionBreakpoint"),
												),
											),
										},
									],
								});
							}
							async runInView(ge, be, Ce) {
								const Le =
										Ce instanceof H.$T3
											? "source"
											: Ce instanceof H.$X3
												? "instruction"
												: "exception",
									Fe = ge.get(x.$75),
									Oe = Fe.getModel().getBreakpointModes(Le),
									xe = await ge.get(A.$DJ).pick(
										Oe.map((He) => ({
											label: He.label,
											description: He.description,
											mode: He.mode,
										})),
										{ placeHolder: (0, l.localize)(5240, null) },
									);
								if (xe)
									if (Le === "source") {
										const He = new Map();
										He.set(Ce.getId(), { mode: xe.mode, modeLabel: xe.label }),
											Fe.updateBreakpoints(Ce.originalUri, He, !1);
									} else
										Ce instanceof H.$X3
											? (Fe.removeInstructionBreakpoints(
													Ce.instructionReference,
													Ce.offset,
												),
												Fe.addInstructionBreakpoint({
													...Ce.toJSON(),
													mode: xe.mode,
													modeLabel: xe.label,
												}))
											: Ce instanceof H.$W3 &&
												((Ce.mode = xe.mode),
												(Ce.modeLabel = xe.label),
												Fe.setExceptionBreakpointCondition(Ce, Ce.condition));
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
	define(
		de[1331],
		he([
			1, 0, 139, 459, 7, 168, 50, 24, 15, 138, 29, 94, 3, 12, 111, 37, 26, 47,
			56, 38, 17, 61, 64, 4, 10, 8, 49, 57, 5, 73, 51, 35, 1236, 1049, 3769,
			352, 112,
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
				(e.$sGc = e.$rGc = void 0),
				(e.$qGc = z),
				(w = mt(w)),
				(c = mt(c)),
				(n = xi(n)),
				($ = mt($)),
				(R = mt(R));
			const B = w.$,
				U = {
					description: "breakpoint-helper-decoration",
					glyphMarginClassName: p.ThemeIcon.asClassName(R.$aKb),
					glyphMargin: { position: y.GlyphMarginLane.Right },
					glyphMarginHoverMessage: new a.$cl().appendText(
						$.localize(5140, null),
					),
					stickiness: y.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
				};
			function z(X, Y, ie, ne, ee, _) {
				const te = [];
				return (
					ie.forEach((Q) => {
						if (Q.lineNumber > Y.getLineCount()) return;
						const Z = ie.some(
								(le) => le !== Q && le.lineNumber === Q.lineNumber,
							),
							se = Y.getLineFirstNonWhitespaceColumn(Q.lineNumber),
							re = Y.validateRange(
								Q.column
									? new s.$iL(
											Q.lineNumber,
											Q.column,
											Q.lineNumber,
											Q.column + 1,
										)
									: new s.$iL(Q.lineNumber, se, Q.lineNumber, se + 1),
							);
						te.push({ options: F(X, Y, Q, ne, ee, _, Z), range: re });
					}),
					te
				);
			}
			function F(X, Y, ie, ne, ee, _, te) {
				const Q = X.get(O.$75),
					Z = X.get(l.$nM),
					se = X.get(k.$3N),
					{
						icon: re,
						message: le,
						showAdapterUnverifiedMessage: oe,
					} = (0, N.$oGc)(ne, ee, ie, se, Q.getModel());
				let ae, pe;
				if (oe) {
					let ue;
					pe = Q.getModel()
						.getSessions()
						.map((fe) => {
							const me = Q.getAdapterManager().getDebugger(
									fe.configuration.type,
								),
								ve = me?.strings?.[O.DebuggerString.UnverifiedBreakpoints];
							if (ve)
								return (
									ue ||
										(ue =
											Z.guessLanguageIdByFilepathOrFirstLine(ie.uri) ?? void 0),
									ue && me.interestedInLanguage(ue) ? ve : void 0
								);
						})
						.find((fe) => !!fe);
				}
				if (le)
					if (
						((ae = new a.$cl(void 0, { isTrusted: !0, supportThemeIcons: !0 })),
						ie.condition || ie.hitCondition)
					) {
						const ue = Y.getLanguageId();
						ae.appendCodeblock(ue, le),
							pe && ae.appendMarkdown("$(warning) " + pe);
					} else
						ae.appendText(le),
							pe &&
								ae.appendMarkdown(
									`

$(warning) ` + pe,
								);
				else
					pe &&
						(ae = new a.$cl(void 0, {
							isTrusted: !0,
							supportThemeIcons: !0,
						}).appendMarkdown(pe));
				let $e = null;
				_ &&
					($e = {
						color: (0, D.$jP)(e.$sGc),
						position: y.OverviewRulerLane.Left,
					});
				const ye =
					ie.column &&
					(te || ie.column > Y.getLineFirstNonWhitespaceColumn(ie.lineNumber));
				return {
					description: "breakpoint-decoration",
					glyphMargin: { position: y.GlyphMarginLane.Right },
					glyphMarginClassName: p.ThemeIcon.asClassName(re),
					glyphMarginHoverMessage: ae,
					stickiness: y.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
					before: ye
						? {
								content: g.$ig,
								inlineClassName: "debug-breakpoint-placeholder",
								inlineClassNameAffectsLetterSpacing: !0,
							}
						: void 0,
					overviewRuler: $e,
					zIndex: 9999,
				};
			}
			async function x(X, Y, ie) {
				return ie.capabilities.supportsBreakpointLocationsRequest
					? await Promise.all(
							(0, d.$Qb)(Y, (ne) => ne).map(async (ne) => {
								try {
									return {
										lineNumber: ne,
										positions: await ie.breakpointsLocations(X.uri, ne),
									};
								} catch {
									return { lineNumber: ne, positions: [] };
								}
							}),
						)
					: [];
			}
			function H(X, Y, ie) {
				const ne = [];
				for (const { positions: ee, lineNumber: _ } of ie) {
					if (ee.length === 0) continue;
					const te = X.getLineFirstNonWhitespaceColumn(_),
						Q = X.getLineLastNonWhitespaceColumn(_);
					ee.forEach((Z) => {
						const se = new s.$iL(
							Z.lineNumber,
							Z.column,
							Z.lineNumber,
							Z.column + 1,
						);
						if (
							(Z.column <= te &&
								!Y.some(
									(le) =>
										le.range.startColumn > te &&
										le.range.startLineNumber === Z.lineNumber,
								)) ||
							Z.column > Q
						)
							return;
						const re = Y.find((le) => le.range.equalsRange(se));
						(re && re.inlineWidget) ||
							ne.push({
								range: se,
								options: {
									description: "breakpoint-placeholder-decoration",
									stickiness:
										y.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
									before: re
										? void 0
										: {
												content: g.$ig,
												inlineClassName: "debug-breakpoint-placeholder",
												inlineClassNameAffectsLetterSpacing: !0,
											},
								},
								breakpoint: re ? re.breakpoint : void 0,
							});
					});
				}
				return ne;
			}
			let q = class {
				constructor(Y, ie, ne, ee, _, te, Q, Z) {
					(this.q = Y),
						(this.r = ie),
						(this.t = ne),
						(this.u = ee),
						(this.w = te),
						(this.x = Q),
						(this.y = Z),
						(this.a = null),
						(this.h = []),
						(this.j = !1),
						(this.k = !1),
						(this.m = []),
						(this.n = []),
						(this.g = O.$94.bindTo(_)),
						(this.o = new m.$Yh(() => this.D(), 30)),
						this.o.schedule(),
						this.z();
				}
				getContextMenuActionsAtPosition(Y, ie) {
					if (!this.r.getAdapterManager().hasEnabledDebuggers()) return [];
					if (!this.r.canSetBreakpointsIn(ie)) return [];
					const ne = this.r
						.getModel()
						.getBreakpoints({ lineNumber: Y, uri: ie.uri });
					return this.A(ne, ie.uri, Y);
				}
				z() {
					this.h.push(
						this.q.onMouseDown(async (Y) => {
							if (!this.r.getAdapterManager().hasEnabledDebuggers()) return;
							const ie = this.q.getModel();
							if (
								!Y.target.position ||
								!ie ||
								Y.target.type !== f.MouseTargetType.GUTTER_GLYPH_MARGIN ||
								Y.target.detail.isAfterLines ||
								(!this.B(Y.target.position.lineNumber) &&
									!Y.target.element?.className.includes("breakpoint"))
							)
								return;
							const ne = this.r.canSetBreakpointsIn(ie),
								ee = Y.target.position.lineNumber,
								_ = ie.uri;
							if (
								!(
									Y.event.rightButton ||
									(c.$m && Y.event.leftButton && Y.event.ctrlKey)
								)
							) {
								const te = this.r
									.getModel()
									.getBreakpoints({ uri: _, lineNumber: ee });
								if (te.length) {
									const Q = Y.event.shiftKey,
										Z = te.some((se) => se.enabled);
									if (Q)
										te.forEach((se) =>
											this.r.enableOrDisableBreakpoints(!Z, se),
										);
									else if (
										!c.$n &&
										te.some(
											(se) =>
												!!se.condition ||
												!!se.logMessage ||
												!!se.hitCondition ||
												!!se.triggeredBy,
										)
									) {
										const se = te.every((ae) => !!ae.logMessage),
											re = se ? $.localize(5141, null) : $.localize(5142, null),
											le = $.localize(
												5143,
												null,
												re.toLowerCase(),
												se ? $.localize(5144, null) : $.localize(5145, null),
											),
											oe = $.localize(
												5146,
												null,
												re.toLowerCase(),
												se ? $.localize(5147, null) : $.localize(5148, null),
											);
										await this.w.prompt({
											type: n.default.Info,
											message: Z ? oe : le,
											buttons: [
												{
													label: $.localize(5149, null, re),
													run: () =>
														te.forEach((ae) =>
															this.r.removeBreakpoints(ae.getId()),
														),
												},
												{
													label: $.localize(
														5150,
														null,
														Z ? $.localize(5151, null) : $.localize(5152, null),
														re,
													),
													run: () =>
														te.forEach((ae) =>
															this.r.enableOrDisableBreakpoints(!Z, ae),
														),
												},
											],
											cancelButton: !0,
										});
									} else
										Z
											? te.forEach((se) => this.r.removeBreakpoints(se.getId()))
											: te.forEach((se) =>
													this.r.enableOrDisableBreakpoints(!Z, se),
												);
								} else if (ne)
									if (Y.event.middleButton) {
										const Q = this.x.getValue("debug").gutterMiddleClickAction;
										if (Q !== "none") {
											let Z;
											switch (Q) {
												case "logpoint":
													Z = O.BreakpointWidgetContext.LOG_MESSAGE;
													break;
												case "conditionalBreakpoint":
													Z = O.BreakpointWidgetContext.CONDITION;
													break;
												case "triggeredBreakpoint":
													Z = O.BreakpointWidgetContext.TRIGGER_POINT;
											}
											this.showBreakpointWidget(ee, void 0, Z);
										}
									} else this.r.addBreakpoints(_, [{ lineNumber: ee }]);
							}
						}),
					),
						(i.$Yfb.pointerEvents && t.$Rfb) ||
							(this.h.push(
								this.q.onMouseMove((Y) => {
									if (!this.r.getAdapterManager().hasEnabledDebuggers()) return;
									let ie = -1;
									const ne = this.q.getModel();
									ne &&
										Y.target.position &&
										(Y.target.type === f.MouseTargetType.GUTTER_GLYPH_MARGIN ||
											Y.target.type ===
												f.MouseTargetType.GUTTER_LINE_NUMBERS) &&
										this.r.canSetBreakpointsIn(ne) &&
										this.B(Y.target.position.lineNumber) &&
										(Y.target.detail.isAfterLines ||
											(ie = Y.target.position.lineNumber)),
										this.C(ie);
								}),
							),
							this.h.push(
								this.q.onMouseLeave(() => {
									this.C(-1);
								}),
							)),
						this.h.push(
							this.q.onDidChangeModel(async () => {
								this.closeBreakpointWidget(), await this.D();
							}),
						),
						this.h.push(
							this.r.getModel().onDidChangeBreakpoints(() => {
								!this.k && !this.o.isScheduled() && this.o.schedule();
							}),
						),
						this.h.push(
							this.r.onDidChangeState(() => {
								this.o.isScheduled() || this.o.schedule();
							}),
						),
						this.h.push(this.q.onDidChangeModelDecorations(() => this.E())),
						this.h.push(
							this.x.onDidChangeConfiguration(async (Y) => {
								(Y.affectsConfiguration(
									"debug.showBreakpointsInOverviewRuler",
								) ||
									Y.affectsConfiguration(
										"debug.showInlineBreakpointCandidates",
									)) &&
									(await this.D());
							}),
						);
				}
				A(Y, ie, ne, ee) {
					const _ = [];
					if (Y.length === 1) {
						const te = Y[0].logMessage
							? $.localize(5153, null)
							: $.localize(5154, null);
						_.push(
							new C.$rj(
								"debug.removeBreakpoint",
								$.localize(5155, null, te),
								void 0,
								!0,
								async () => {
									await this.r.removeBreakpoints(Y[0].getId());
								},
							),
						),
							_.push(
								new C.$rj(
									"workbench.debug.action.editBreakpointAction",
									$.localize(5156, null, te),
									void 0,
									!0,
									() =>
										Promise.resolve(
											this.showBreakpointWidget(Y[0].lineNumber, Y[0].column),
										),
								),
							),
							_.push(
								new C.$rj(
									"workbench.debug.viewlet.action.toggleBreakpoint",
									Y[0].enabled
										? $.localize(5157, null, te)
										: $.localize(5158, null, te),
									void 0,
									!0,
									() => this.r.enableOrDisableBreakpoints(!Y[0].enabled, Y[0]),
								),
							);
					} else if (Y.length > 1) {
						const te = Y.slice().sort((Q, Z) =>
							Q.column && Z.column ? Q.column - Z.column : 1,
						);
						_.push(
							new C.$uj(
								"debug.removeBreakpoints",
								$.localize(5159, null),
								te.map(
									(Q) =>
										new C.$rj(
											"removeInlineBreakpoint",
											Q.column
												? $.localize(5160, null, Q.column)
												: $.localize(5161, null),
											void 0,
											!0,
											() => this.r.removeBreakpoints(Q.getId()),
										),
								),
							),
						),
							_.push(
								new C.$uj(
									"debug.editBreakpoints",
									$.localize(5162, null),
									te.map(
										(Q) =>
											new C.$rj(
												"editBreakpoint",
												Q.column
													? $.localize(5163, null, Q.column)
													: $.localize(5164, null),
												void 0,
												!0,
												() =>
													Promise.resolve(
														this.showBreakpointWidget(Q.lineNumber, Q.column),
													),
											),
									),
								),
							),
							_.push(
								new C.$uj(
									"debug.enableDisableBreakpoints",
									$.localize(5165, null),
									te.map(
										(Q) =>
											new C.$rj(
												Q.enabled
													? "disableColumnBreakpoint"
													: "enableColumnBreakpoint",
												Q.enabled
													? Q.column
														? $.localize(5166, null, Q.column)
														: $.localize(5167, null)
													: Q.column
														? $.localize(5168, null, Q.column)
														: $.localize(5169, null),
												void 0,
												!0,
												() => this.r.enableOrDisableBreakpoints(!Q.enabled, Q),
											),
									),
								),
							);
					} else
						_.push(
							new C.$rj(
								"addBreakpoint",
								$.localize(5170, null),
								void 0,
								!0,
								() =>
									this.r.addBreakpoints(ie, [{ lineNumber: ne, column: ee }]),
							),
						),
							_.push(
								new C.$rj(
									"addConditionalBreakpoint",
									$.localize(5171, null),
									void 0,
									!0,
									() =>
										Promise.resolve(
											this.showBreakpointWidget(
												ne,
												ee,
												O.BreakpointWidgetContext.CONDITION,
											),
										),
								),
							),
							_.push(
								new C.$rj(
									"addLogPoint",
									$.localize(5172, null),
									void 0,
									!0,
									() =>
										Promise.resolve(
											this.showBreakpointWidget(
												ne,
												ee,
												O.BreakpointWidgetContext.LOG_MESSAGE,
											),
										),
								),
							),
							_.push(
								new C.$rj(
									"addTriggeredBreakpoint",
									$.localize(5173, null),
									void 0,
									!0,
									() =>
										Promise.resolve(
											this.showBreakpointWidget(
												ne,
												ee,
												O.BreakpointWidgetContext.TRIGGER_POINT,
											),
										),
								),
							);
					return (
						this.r.state === O.State.Stopped &&
							(_.push(new C.$tj()),
							_.push(
								new C.$rj("runToLine", $.localize(5174, null), void 0, !0, () =>
									this.r.runTo(ie, ne).catch(u.$4),
								),
							)),
						_
					);
				}
				B(Y) {
					const ie = this.q.getLineDecorations(Y);
					if (ie)
						for (const { options: ne } of ie) {
							const ee = ne.glyphMarginClassName;
							if (!ee) continue;
							if (
								!(ee.includes("codicon-") || ee.startsWith("coverage-deco-")) ||
								ee.includes("codicon-testing-") ||
								ee.includes("codicon-merge-") ||
								ee.includes("codicon-arrow-") ||
								ee.includes("codicon-loading") ||
								ee.includes("codicon-fold") ||
								ee.includes("codicon-gutter-lightbulb") ||
								ee.includes("codicon-lightbulb-sparkle")
							)
								return !1;
						}
					return !0;
				}
				C(Y) {
					this.q.changeDecorations((ie) => {
						this.a && (ie.removeDecoration(this.a), (this.a = null)),
							Y !== -1 &&
								(this.a = ie.addDecoration(
									{
										startLineNumber: Y,
										startColumn: 1,
										endLineNumber: Y,
										endColumn: 1,
									},
									U,
								));
					});
				}
				async D() {
					if (!this.q.hasModel()) return;
					const Y = (re, le) => {
							const oe = H(ne, this.m, le),
								ae = re.deltaDecorations(
									this.n.map((pe) => pe.decorationId),
									oe,
								);
							this.n.forEach((pe) => {
								pe.inlineWidget.dispose();
							}),
								(this.n = ae.map((pe, $e) => {
									const ye = oe[$e],
										ue = ye.breakpoint
											? (0, N.$oGc)(
													this.r.state,
													this.r.getModel().areBreakpointsActivated(),
													ye.breakpoint,
													this.y,
													this.r.getModel(),
												).icon
											: R.$8Jb.disabled,
										fe = () =>
											this.A(
												ye.breakpoint ? [ye.breakpoint] : [],
												ie.getModel().uri,
												ye.range.startLineNumber,
												ye.range.startColumn,
											),
										me = new V(
											ie,
											pe,
											p.ThemeIcon.asClassName(ue),
											ye.breakpoint,
											this.r,
											this.t,
											fe,
										);
									return { decorationId: pe, inlineWidget: me };
								}));
						},
						ie = this.q,
						ne = ie.getModel(),
						ee = this.r.getModel().getBreakpoints({ uri: ne.uri }),
						_ = this.x.getValue("debug"),
						te = this.u.invokeFunction((re) =>
							z(
								re,
								ne,
								ee,
								this.r.state,
								this.r.getModel().areBreakpointsActivated(),
								_.showBreakpointsInOverviewRuler,
							),
						),
						Q = this.r.getViewModel().focusedSession,
						Z =
							_.showInlineBreakpointCandidates && Q
								? x(
										this.q.getModel(),
										te.map((re) => re.range.startLineNumber),
										Q,
									)
								: Promise.resolve([]),
						se = await Promise.race([Z, (0, m.$Nh)(500).then(() => {})]);
					se === void 0 &&
						Z.then((re) => ie.changeDecorations((le) => Y(le, re)));
					try {
						(this.j = !0),
							ie.changeDecorations((re) => {
								const le = re.deltaDecorations(
									this.m.map((oe) => oe.decorationId),
									te,
								);
								this.m.forEach((oe) => {
									oe.inlineWidget?.dispose();
								}),
									(this.m = le.map((oe, ae) => {
										let pe;
										const $e = ee[ae];
										if (te[ae].options.before) {
											const ye = () =>
												this.A(
													[$e],
													ie.getModel().uri,
													$e.lineNumber,
													$e.column,
												);
											pe = new V(
												ie,
												oe,
												te[ae].options.glyphMarginClassName,
												$e,
												this.r,
												this.t,
												ye,
											);
										}
										return {
											decorationId: oe,
											breakpoint: $e,
											range: te[ae].range,
											inlineWidget: pe,
										};
									})),
									se && Y(re, se);
							});
					} finally {
						this.j = !1;
					}
					for (const re of this.m)
						re.inlineWidget && this.q.layoutContentWidget(re.inlineWidget);
				}
				async E() {
					if (this.m.length === 0 || this.j || !this.q.hasModel()) return;
					let Y = !1;
					const ie = this.q.getModel();
					if (
						(this.m.forEach((ee) => {
							if (Y) return;
							const _ = ie.getDecorationRange(ee.decorationId);
							_ && !ee.range.equalsRange(_) && ((Y = !0), (ee.range = _));
						}),
						!Y)
					)
						return;
					const ne = new Map();
					for (let ee = 0, _ = this.m.length; ee < _; ee++) {
						const te = this.m[ee],
							Q = ie.getDecorationRange(te.decorationId);
						Q &&
							te.breakpoint &&
							ne.set(te.breakpoint.getId(), {
								lineNumber: Q.startLineNumber,
								column: te.breakpoint.column ? Q.startColumn : void 0,
							});
					}
					try {
						(this.k = !0), await this.r.updateBreakpoints(ie.uri, ne, !0);
					} finally {
						this.k = !1;
					}
				}
				showBreakpointWidget(Y, ie, ne) {
					this.f?.dispose(),
						(this.f = this.u.createInstance(A.$pGc, this.q, Y, ie, ne)),
						this.f.show({ lineNumber: Y, column: 1 }),
						this.g.set(!0);
				}
				closeBreakpointWidget() {
					this.f &&
						(this.f.dispose(),
						(this.f = void 0),
						this.g.reset(),
						this.q.focus());
				}
				dispose() {
					this.f?.dispose(),
						this.q.removeDecorations(this.m.map((Y) => Y.decorationId)),
						(0, h.$Vc)(this.h);
				}
			};
			(e.$rGc = q),
				(e.$rGc = q =
					Ne(
						[
							j(1, O.$75),
							j(2, I.$Xxb),
							j(3, P.$Li),
							j(4, S.$6j),
							j(5, T.$GO),
							j(6, v.$gj),
							j(7, k.$3N),
						],
						q,
					)),
				M.$aGc.registerGutterActionsGenerator(
					({ lineNumber: X, editor: Y, accessor: ie }, ne) => {
						const ee = Y.getModel(),
							_ = ie.get(O.$75);
						if (
							!ee ||
							!_.getAdapterManager().hasEnabledDebuggers() ||
							!_.canSetBreakpointsIn(ee)
						)
							return;
						const te = Y.getContribution(O.$15);
						if (!te) return;
						const Q = te.getContextMenuActionsAtPosition(X, ee);
						for (const Z of Q) ne.push(Z, "2_debug");
					},
				);
			class V {
				constructor(Y, ie, ne, ee, _, te, Q) {
					(this.h = Y),
						(this.j = ie),
						(this.k = ee),
						(this.m = _),
						(this.n = te),
						(this.o = Q),
						(this.allowEditorOverflow = !1),
						(this.suppressMouseDown = !0),
						(this.g = []),
						(this.f = this.h.getModel().getDecorationRange(ie)),
						this.g.push(
							this.h.onDidChangeModelDecorations(() => {
								const se = this.h.getModel().getDecorationRange(this.j);
								this.f &&
									!this.f.equalsRange(se) &&
									((this.f = se), this.h.layoutContentWidget(this));
							}),
						),
						this.q(ne),
						this.h.addContentWidget(this),
						this.h.layoutContentWidget(this);
				}
				q(Y) {
					(this.a = B(".inline-breakpoint-widget")),
						Y && this.a.classList.add(...Y.split(" ")),
						this.g.push(
							w.$0fb(this.a, w.$$gb.CLICK, async (ne) => {
								switch (this.k?.enabled) {
									case void 0:
										await this.m.addBreakpoints(this.h.getModel().uri, [
											{
												lineNumber: this.f.startLineNumber,
												column: this.f.startColumn,
											},
										]);
										break;
									case !0:
										await this.m.removeBreakpoints(this.k.getId());
										break;
									case !1:
										this.m.enableOrDisableBreakpoints(!0, this.k);
										break;
								}
							}),
						),
						this.g.push(
							w.$0fb(this.a, w.$$gb.CONTEXT_MENU, (ne) => {
								const ee = new E.$2fb(w.getWindow(this.a), ne),
									_ = this.o();
								this.n.showContextMenu({
									getAnchor: () => ee,
									getActions: () => _,
									getActionsContext: () => this.k,
									onHide: () => (0, h.$Wc)(_),
								});
							}),
						);
					const ie = () => {
						const ne = this.h.getOption(b.EditorOption.lineHeight);
						(this.a.style.height = `${ne}px`),
							(this.a.style.width = `${Math.ceil(0.8 * ne)}px`),
							(this.a.style.marginLeft = "4px");
					};
					ie(),
						this.g.push(
							this.h.onDidChangeConfiguration((ne) => {
								(ne.hasChanged(b.EditorOption.fontSize) ||
									ne.hasChanged(b.EditorOption.lineHeight)) &&
									ie();
							}),
						);
				}
				getId() {
					return (0, o.$9g)();
				}
				getDomNode() {
					return this.a;
				}
				getPosition() {
					return this.f
						? (this.a.classList.toggle("line-start", this.f.startColumn === 1),
							{
								position: {
									lineNumber: this.f.startLineNumber,
									column: this.f.startColumn - 1,
								},
								preference: [f.ContentWidgetPositionPreference.EXACT],
							})
						: null;
				}
				dispose() {
					this.h.removeContentWidget(this), (0, h.$Vc)(this.g);
				}
			}
			Ne([r.$ei], V.prototype, "getId", null),
				(0, D.$oP)((X, Y) => {
					const ie =
							".monaco-editor .glyph-margin-widgets, .monaco-workbench .debug-breakpoints, .monaco-workbench .disassembly-view, .monaco-editor .contentWidgets",
						ne = X.getColor(e.$sGc);
					ne &&
						(Y.addRule(`${ie} {
			${R.$cKb
				.map((Z) => `${p.ThemeIcon.asCSSSelector(Z.regular)}`)
				.join(`,
		`)},
			${p.ThemeIcon.asCSSSelector(R.$bKb)},
			${p.ThemeIcon.asCSSSelector(R.$aKb)}:not([class*='codicon-debug-breakpoint']):not([class*='codicon-debug-stackframe']),
			${p.ThemeIcon.asCSSSelector(R.$8Jb.regular)}${p.ThemeIcon.asCSSSelector(R.$eKb)}::after,
			${p.ThemeIcon.asCSSSelector(R.$8Jb.regular)}${p.ThemeIcon.asCSSSelector(R.$dKb)}::after {
				color: ${ne} !important;
			}
		}`),
						Y.addRule(`${ie} {
			${p.ThemeIcon.asCSSSelector(R.$8Jb.pending)} {
				color: ${ne} !important;
				font-size: 12px !important;
			}
		}`));
					const ee = X.getColor(G);
					ee &&
						Y.addRule(`${ie} {
			${R.$cKb
				.map((Z) => p.ThemeIcon.asCSSSelector(Z.disabled))
				.join(`,
		`)} {
				color: ${ee};
			}
		}`);
					const _ = X.getColor(K);
					_ &&
						Y.addRule(`${ie} {
			${R.$cKb
				.map((Z) => p.ThemeIcon.asCSSSelector(Z.unverified))
				.join(`,
		`)} {
				color: ${_};
			}
		}`);
					const te = X.getColor(J);
					te &&
						Y.addRule(`
		.monaco-editor .debug-top-stack-frame-column {
			color: ${te} !important;
		}
		${ie} {
			${p.ThemeIcon.asCSSSelector(R.$dKb)} {
				color: ${te} !important;
			}
		}
		`);
					const Q = X.getColor(W);
					Q &&
						Y.addRule(`${ie} {
			${p.ThemeIcon.asCSSSelector(R.$eKb)} {
				color: ${Q} !important;
			}
		}`);
				}),
				(e.$sGc = (0, L.$wP)(
					"debugIcon.breakpointForeground",
					"#E51400",
					$.localize(5175, null),
				));
			const G = (0, L.$wP)(
					"debugIcon.breakpointDisabledForeground",
					"#848484",
					$.localize(5176, null),
				),
				K = (0, L.$wP)(
					"debugIcon.breakpointUnverifiedForeground",
					"#848484",
					$.localize(5177, null),
				),
				J = (0, L.$wP)(
					"debugIcon.breakpointCurrentStackframeForeground",
					{
						dark: "#FFCC00",
						light: "#BE8700",
						hcDark: "#FFCC00",
						hcLight: "#BE8700",
					},
					$.localize(5178, null),
				),
				W = (0, L.$wP)(
					"debugIcon.breakpointStackframeForeground",
					"#89D185",
					$.localize(5179, null),
				);
		},
	),
		define(
			de[3815],
			he([
				1, 0, 7, 50, 27, 46, 65, 48, 71, 69, 440, 4, 11, 10, 8, 49, 43, 68, 100,
				207, 1049, 1881, 112, 396, 797, 18, 89,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$tQc = e.$sQc = e.$rQc = void 0),
					(a = mt(a));
				class T extends h.$3X {
					constructor() {
						super({
							id: "editor.debug.action.toggleBreakpoint",
							title: {
								...a.localize2(5488, "Debug: Toggle Breakpoint"),
								mnemonicTitle: a.localize(5471, null),
							},
							f1: !0,
							precondition: y.$y5,
							keybinding: {
								when: n.$Kj.or(m.EditorContextKeys.editorTextFocus, y.$V5),
								primary: w.KeyCode.F9,
								weight: p.KeybindingWeight.EditorContrib,
							},
							menu: {
								id: h.$XX.MenubarDebugMenu,
								when: y.$y5,
								group: "4_new_breakpoint",
								order: 1,
							},
						});
					}
					async run(G) {
						const K = G.get(S.$IY),
							J = G.get(y.$75),
							W = K.activeEditorPane;
						if (W instanceof l.$jGc) {
							const ie = W.focusedAddressAndOffset;
							if (ie) {
								const ee = J.getModel()
									.getInstructionBreakpoints()
									.find((_) => _.address === ie.address);
								ee
									? J.removeInstructionBreakpoints(
											ee.instructionReference,
											ee.offset,
										)
									: J.addInstructionBreakpoint({
											instructionReference: ie.reference,
											offset: ie.offset,
											address: ie.address,
											canPersist: !1,
										});
							}
							return;
						}
						const X = G.get(C.$dtb),
							Y = X.getFocusedCodeEditor() || X.getActiveCodeEditor();
						if (Y?.hasModel()) {
							const ie = Y.getModel().uri,
								ne = J.canSetBreakpointsIn(Y.getModel()),
								ee = [
									...new Set(
										Y.getSelections().map((_) => _.getPosition().lineNumber),
									),
								];
							await Promise.all(
								ee.map(async (_) => {
									const te = J.getModel().getBreakpoints({
										lineNumber: _,
										uri: ie,
									});
									te.length
										? await Promise.all(
												te.map((Q) => J.removeBreakpoints(Q.getId())),
											)
										: ne && (await J.addBreakpoints(ie, [{ lineNumber: _ }]));
								}),
							);
						}
					}
				}
				class P extends E.$itb {
					constructor() {
						super({
							id: "editor.debug.action.conditionalBreakpoint",
							label: a.localize(5472, null),
							alias: "Debug: Add Conditional Breakpoint...",
							precondition: y.$y5,
							menuOpts: {
								menuId: h.$XX.MenubarNewBreakpointMenu,
								title: a.localize(5473, null),
								group: "1_breakpoints",
								order: 1,
								when: y.$y5,
							},
						});
					}
					async run(G, K) {
						const J = G.get(y.$75),
							W = K.getPosition();
						W &&
							K.hasModel() &&
							J.canSetBreakpointsIn(K.getModel()) &&
							K.getContribution(y.$15)?.showBreakpointWidget(
								W.lineNumber,
								void 0,
								y.BreakpointWidgetContext.CONDITION,
							);
					}
				}
				class k extends E.$itb {
					constructor() {
						super({
							id: "editor.debug.action.addLogPoint",
							label: a.localize(5474, null),
							precondition: y.$y5,
							alias: "Debug: Add Logpoint...",
							menuOpts: [
								{
									menuId: h.$XX.MenubarNewBreakpointMenu,
									title: a.localize(5475, null),
									group: "1_breakpoints",
									order: 4,
									when: y.$y5,
								},
							],
						});
					}
					async run(G, K) {
						const J = G.get(y.$75),
							W = K.getPosition();
						W &&
							K.hasModel() &&
							J.canSetBreakpointsIn(K.getModel()) &&
							K.getContribution(y.$15)?.showBreakpointWidget(
								W.lineNumber,
								W.column,
								y.BreakpointWidgetContext.LOG_MESSAGE,
							);
					}
				}
				class L extends E.$itb {
					constructor() {
						super({
							id: "editor.debug.action.triggerByBreakpoint",
							label: a.localize(5476, null),
							precondition: y.$y5,
							alias: "Debug: Triggered Breakpoint...",
							menuOpts: [
								{
									menuId: h.$XX.MenubarNewBreakpointMenu,
									title: a.localize(5477, null),
									group: "1_breakpoints",
									order: 4,
									when: y.$y5,
								},
							],
						});
					}
					async run(G, K) {
						const J = G.get(y.$75),
							W = K.getPosition();
						W &&
							K.hasModel() &&
							J.canSetBreakpointsIn(K.getModel()) &&
							K.getContribution(y.$15)?.showBreakpointWidget(
								W.lineNumber,
								W.column,
								y.BreakpointWidgetContext.TRIGGER_POINT,
							);
					}
				}
				class D extends E.$itb {
					constructor() {
						super({
							id: "editor.debug.action.editBreakpoint",
							label: a.localize(5478, null),
							alias: "Debug: Edit Existing Breakpoint",
							precondition: y.$y5,
							menuOpts: {
								menuId: h.$XX.MenubarNewBreakpointMenu,
								title: a.localize(5479, null),
								group: "1_breakpoints",
								order: 1,
								when: y.$y5,
							},
						});
					}
					async run(G, K) {
						const J = G.get(y.$75),
							W = K.getPosition(),
							X = J.getModel();
						if (!(K.hasModel() && W)) return;
						const Y = X.getBreakpoints({ lineNumber: W.lineNumber });
						if (Y.length === 0) return;
						const ie = Y.map((_) =>
								_.column ? Math.abs(_.column - W.column) : W.column,
							),
							ne = ie.indexOf(Math.min(...ie)),
							ee = Y[ne];
						K.getContribution(y.$15)?.showBreakpointWidget(
							ee.lineNumber,
							ee.column,
						);
					}
				}
				class M extends h.$3X {
					static {
						this.ID = "debug.action.openDisassemblyView";
					}
					constructor() {
						super({
							id: M.ID,
							title: {
								...a.localize2(5489, "Open Disassembly View"),
								mnemonicTitle: a.localize(5480, null),
							},
							precondition: y.$X5,
							menu: [
								{
									id: h.$XX.EditorContext,
									group: "debug",
									order: 5,
									when: n.$Kj.and(
										y.$74,
										f.$uQb.toNegated(),
										y.$24.isEqualTo("stopped"),
										m.EditorContextKeys.editorTextFocus,
										y.$U5,
										y.$W5,
									),
								},
								{
									id: h.$XX.DebugCallStackContext,
									group: "z_commands",
									order: 50,
									when: n.$Kj.and(
										y.$74,
										y.$24.isEqualTo("stopped"),
										y.$e5.isEqualTo("stackFrame"),
										y.$U5,
									),
								},
								{
									id: h.$XX.CommandPalette,
									when: n.$Kj.and(y.$74, y.$24.isEqualTo("stopped"), y.$U5),
								},
							],
						});
					}
					run(G) {
						G.get(S.$IY).openEditor(v.$G3.instance, {
							pinned: !0,
							revealIfOpened: !0,
						});
					}
				}
				class N extends h.$3X {
					static {
						this.ID = "debug.action.toggleDisassemblyViewSourceCode";
					}
					static {
						this.configID = "debug.disassemblyView.showSourceCode";
					}
					constructor() {
						super({
							id: N.ID,
							title: {
								...a.localize2(5490, "Toggle Source Code in Disassembly View"),
								mnemonicTitle: a.localize(5481, null),
							},
							metadata: {
								description: a.localize2(
									5491,
									"Shows or hides source code in disassembly",
								),
							},
							f1: !0,
						});
					}
					run(G, K, ...J) {
						const W = G.get(c.$gj);
						if (W) {
							const X = W.getValue("debug").disassemblyView.showSourceCode;
							W.updateValue(N.configID, !X);
						}
					}
				}
				class A extends E.$itb {
					static {
						this.ID = "editor.debug.action.runToCursor";
					}
					static {
						this.LABEL = a.localize2(5492, "Run to Cursor");
					}
					constructor() {
						super({
							id: A.ID,
							label: A.LABEL.value,
							alias: "Debug: Run to Cursor",
							precondition: n.$Kj.and(
								y.$y5,
								f.$uQb.toNegated(),
								n.$Kj.or(m.EditorContextKeys.editorTextFocus, y.$V5),
								b.$41.negate(),
							),
							contextMenuOpts: { group: "debug", order: 2, when: y.$74 },
						});
					}
					async run(G, K) {
						const J = K.getPosition();
						if (!(K.hasModel() && J)) return;
						const W = K.getModel().uri,
							X = G.get(y.$75),
							Y = X.getViewModel(),
							ie = G.get(o.$Vl);
						let ne;
						const ee = Y.focusedStackFrame;
						ee &&
							ie.extUri.isEqual(ee.source.uri, W) &&
							ee.range.startLineNumber === J.lineNumber &&
							(ne = J.column),
							await X.runTo(W, J.lineNumber, ne);
					}
				}
				e.$rQc = A;
				class R extends E.$itb {
					static {
						this.ID = "editor.debug.action.selectionToRepl";
					}
					static {
						this.LABEL = a.localize2(5493, "Evaluate in Debug Console");
					}
					constructor() {
						super({
							id: R.ID,
							label: R.LABEL.value,
							alias: "Debug: Evaluate in Console",
							precondition: n.$Kj.and(
								y.$74,
								m.EditorContextKeys.editorTextFocus,
								b.$41.negate(),
							),
							contextMenuOpts: { group: "debug", order: 0 },
						});
					}
					async run(G, K) {
						const J = G.get(y.$75),
							W = G.get(I.$HMb),
							Y = J.getViewModel().focusedSession;
						if (!K.hasModel() || !Y) return;
						const ie = K.getSelection();
						let ne;
						ie.isEmpty()
							? (ne = K.getModel()
									.getLineContent(ie.selectionStartLineNumber)
									.trim())
							: (ne = K.getModel().getValueInRange(ie)),
							(await W.openView(y.$Y4, !1))?.sendReplInput(ne);
					}
				}
				e.$sQc = R;
				class O extends E.$itb {
					static {
						this.ID = "editor.debug.action.selectionToWatch";
					}
					static {
						this.LABEL = a.localize2(5494, "Add to Watch");
					}
					constructor() {
						super({
							id: O.ID,
							label: O.LABEL.value,
							alias: "Debug: Add to Watch",
							precondition: n.$Kj.and(
								y.$74,
								m.EditorContextKeys.editorTextFocus,
								b.$41.negate(),
							),
							contextMenuOpts: { group: "debug", order: 1 },
						});
					}
					async run(G, K) {
						const J = G.get(y.$75),
							W = G.get(I.$HMb),
							X = G.get(r.$k3);
						if (!K.hasModel()) return;
						let Y;
						const ie = K.getModel(),
							ne = K.getSelection();
						if (!ne.isEmpty()) Y = ie.getValueInRange(ne);
						else {
							const ee = K.getPosition(),
								_ = await (0, $.$r3)(X, ie, ee);
							if (!_) return;
							Y = _.matchingExpression;
						}
						Y && (await W.openView(y.$S4), J.addWatchExpression(Y));
					}
				}
				e.$tQc = O;
				class B extends E.$itb {
					constructor() {
						super({
							id: "editor.debug.action.showDebugHover",
							label: a.localize(5482, null),
							alias: "Debug: Show Hover",
							precondition: y.$74,
							kbOpts: {
								kbExpr: m.EditorContextKeys.editorTextFocus,
								primary: (0, w.$os)(w.$ps, w.KeyMod.CtrlCmd | w.KeyCode.KeyI),
								mac: {
									primary: (0, w.$os)(w.$qs, w.KeyMod.CtrlCmd | w.KeyCode.KeyI),
								},
								weight: p.KeybindingWeight.EditorContrib,
							},
						});
					}
					async run(G, K) {
						const J = K.getPosition();
						if (!(!J || !K.hasModel()))
							return K.getContribution(y.$Z5)?.showHover(J, !0);
					}
				}
				const U = a.localize(5483, null);
				class z extends E.$itb {
					static {
						this.ID = "editor.debug.action.stepIntoTargets";
					}
					static {
						this.LABEL = a.localize(5484, null);
					}
					constructor() {
						super({
							id: z.ID,
							label: z.LABEL,
							alias: "Debug: Step Into Target",
							precondition: n.$Kj.and(
								y.$w5,
								y.$74,
								y.$24.isEqualTo("stopped"),
								m.EditorContextKeys.editorTextFocus,
							),
							contextMenuOpts: { group: "debug", order: 1.5 },
						});
					}
					async run(G, K) {
						const J = G.get(y.$75),
							W = G.get(g.$Xxb),
							X = G.get(o.$Vl),
							Y = J.getViewModel().focusedSession,
							ie = J.getViewModel().focusedStackFrame,
							ne = K.getSelection(),
							ee =
								ne?.getPosition() ||
								(ie && {
									lineNumber: ie.range.startLineNumber,
									column: ie.range.startColumn,
								});
						if (
							!Y ||
							!ie ||
							!K.hasModel() ||
							!X.extUri.isEqual(K.getModel().uri, ie.source.uri)
						) {
							ee && u.$Szb.get(K)?.showMessage(U, ee);
							return;
						}
						const _ = await Y.stepInTargets(ie.frameId);
						if (!_?.length) {
							u.$Szb.get(K)?.showMessage(U, ee);
							return;
						}
						if (ne) {
							const re = [];
							for (const ae of _)
								ae.line &&
									re.push({
										start: new d.$hL(ae.line, ae.column || 1),
										end: ae.endLine
											? new d.$hL(ae.endLine, ae.endColumn || 1)
											: void 0,
										target: ae,
									});
							re.sort(
								(ae, pe) =>
									pe.start.lineNumber - ae.start.lineNumber ||
									pe.start.column - ae.start.column,
							);
							const le = ne.getPosition(),
								oe =
									re.find(
										(ae) =>
											ae.end &&
											le.isBefore(ae.end) &&
											ae.start.isBeforeOrEqual(le),
									) ||
									re.find(
										(ae) => ae.end === void 0 && ae.start.isBeforeOrEqual(le),
									);
							if (oe) {
								Y.stepIn(ie.thread.threadId, oe.target.id);
								return;
							}
						}
						K.revealLineInCenterIfOutsideViewport(ie.range.startLineNumber);
						const te = K.getScrolledVisiblePosition(ee),
							Q = (0, t.$tgb)(K.getDomNode()),
							Z = Q.left + te.left,
							se = Q.top + te.top + te.height;
						W.showContextMenu({
							getAnchor: () => ({ x: Z, y: se }),
							getActions: () =>
								_.map(
									(re) =>
										new i.$rj(
											`stepIntoTarget:${re.id}`,
											re.label,
											void 0,
											!0,
											() => Y.stepIn(ie.thread.threadId, re.id),
										),
								),
						});
					}
				}
				class F extends E.$itb {
					constructor(G, K) {
						super(K), (this.d = G);
					}
					async run(G, K) {
						const J = G.get(y.$75),
							W = G.get(S.$IY),
							X = G.get(o.$Vl);
						if (K.hasModel()) {
							const Y = K.getModel().uri,
								ie = K.getPosition().lineNumber,
								ne = J.getModel().getBreakpoints({ enabledOnly: !0 });
							let ee = this.d
								? ne
										.filter(
											(_) => X.extUri.isEqual(_.uri, Y) && _.lineNumber > ie,
										)
										.shift()
								: ne
										.filter(
											(_) => X.extUri.isEqual(_.uri, Y) && _.lineNumber < ie,
										)
										.pop();
							if (
								(ee ||
									(ee = this.d
										? ne.filter((_) => _.uri.toString() > Y.toString()).shift()
										: ne.filter((_) => _.uri.toString() < Y.toString()).pop()),
								!ee && ne.length && (ee = this.d ? ne[0] : ne[ne.length - 1]),
								ee)
							)
								return (0, s.$nGc)(ee, !1, !0, !1, J, W);
						}
					}
				}
				class x extends F {
					constructor() {
						super(!0, {
							id: "editor.debug.action.goToNextBreakpoint",
							label: a.localize(5485, null),
							alias: "Debug: Go to Next Breakpoint",
							precondition: y.$y5,
						});
					}
				}
				class H extends F {
					constructor() {
						super(!1, {
							id: "editor.debug.action.goToPreviousBreakpoint",
							label: a.localize(5486, null),
							alias: "Debug: Go to Previous Breakpoint",
							precondition: y.$y5,
						});
					}
				}
				class q extends E.$itb {
					constructor() {
						super({
							id: "editor.debug.action.closeExceptionWidget",
							label: a.localize(5487, null),
							alias: "Close Exception Widget",
							precondition: y.$R5,
							kbOpts: {
								primary: w.KeyCode.Escape,
								weight: p.KeybindingWeight.EditorContrib,
							},
						});
					}
					async run(G, K) {
						K.getContribution(y.$Z5)?.closeExceptionWidget();
					}
				}
				(0, h.$4X)(M),
					(0, h.$4X)(N),
					(0, h.$4X)(T),
					(0, E.$ntb)(P),
					(0, E.$ntb)(k),
					(0, E.$ntb)(L),
					(0, E.$ntb)(D),
					(0, E.$ntb)(A),
					(0, E.$ntb)(z),
					(0, E.$ntb)(R),
					(0, E.$ntb)(O),
					(0, E.$ntb)(B),
					(0, E.$ntb)(x),
					(0, E.$ntb)(H),
					(0, E.$ntb)(q);
			},
		),
		define(
			de[3816],
			he([1, 0, 6, 3, 84, 112, 89]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$JQc = void 0);
				let d = class {
					constructor(r, u, a) {
						this.a = [];
						let h;
						const c = (n) => {
							h && (h.dispose(), (h = void 0)),
								n &&
									(h = n.onDidProgressStart(async (g) => {
										const p = new Promise((f) => {
											const b = t.Event.any(
												t.Event.filter(
													n.onDidProgressEnd,
													(s) => s.body.progressId === g.body.progressId,
												),
												n.onDidEndAdapter,
											)(() => {
												b.dispose(), f();
											});
										});
										a.isViewContainerVisible(E.$Q4) &&
											u.withProgress({ location: E.$Q4 }, () => p);
										const o = r
											.getAdapterManager()
											.getDebuggerLabel(n.configuration.type);
										u.withProgress(
											{
												location: w.ProgressLocation.Notification,
												title: g.body.title,
												cancellable: g.body.cancellable,
												source: o,
												delay: 500,
											},
											(f) => {
												let b = 0;
												const s = (y) => {
													let $;
													typeof y.percentage == "number" &&
														(($ = y.percentage - b), (b += $)),
														f.report({
															message: y.message,
															increment: $,
															total: typeof $ == "number" ? 100 : void 0,
														});
												};
												g.body.message && s(g.body);
												const l = n.onDidProgressUpdate((y) => {
													y.body.progressId === g.body.progressId && s(y.body);
												});
												return p.then(() => l.dispose());
											},
											() => n.cancel(g.body.progressId),
										);
									}));
						};
						this.a.push(r.getViewModel().onDidFocusSession(c)),
							c(r.getViewModel().focusedSession),
							this.a.push(
								r.onWillNewSession((n) => {
									h || c(n);
								}),
							);
					}
					dispose() {
						(0, i.$Vc)(this.a);
					}
				};
				(e.$JQc = d),
					(e.$JQc = d = Ne([j(0, E.$75), j(1, w.$8N), j(2, C.$HMb)], d));
			},
		),
		define(
			de[3817],
			he([1, 0, 4, 132, 3, 112, 63, 89, 31]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$WGc = r),
					(t = mt(t));
				async function r(c, n) {
					const g = c.get(C.$DJ),
						p = c.get(E.$75),
						o = c.get(d.$HMb),
						f = c.get(m.$ek),
						b = new w.$Zc(),
						s = g.createQuickPick({ useSeparators: !0 });
					b.add(s),
						(s.matchOnLabel =
							s.matchOnDescription =
							s.matchOnDetail =
							s.sortByLabel =
								!1),
						(s.placeholder = t.localize(5632, null));
					const l = u(s.value, n, p, o, f);
					(s.items = l.picks),
						(s.activeItems = l.activeItems),
						b.add(
							s.onDidChangeValue(async () => {
								s.items = u(s.value, n, p, o, f).picks;
							}),
						),
						b.add(
							s.onDidAccept(() => {
								s.selectedItems[0].accept(), s.hide(), b.dispose();
							}),
						),
						s.show();
				}
				function u(c, n, g, p, o) {
					const f = [],
						b = [],
						s = g.getViewModel().focusedSession,
						l = g.getModel().getSessions(!1),
						y = [];
					l.forEach((v) => {
						v.compact && v.parentSession && b.push(v.parentSession);
					}),
						l.forEach((v) => {
							const S = b.includes(v);
							if (
								(v.parentSession ||
									f.push({ type: "separator", label: S ? v.name : void 0 }),
								!S)
							) {
								const I = h(v, c, g, p, o);
								I && (f.push(I), v.getId() === s?.getId() && y.push(I));
							}
						}),
						f.length && f.push({ type: "separator" });
					const $ = t.localize(5633, null);
					return (
						f.push({
							label: `$(plus) ${$}`,
							ariaLabel: $,
							accept: () => o.executeCommand(n),
						}),
						{ picks: f, activeItems: y }
					);
				}
				function a(c) {
					const n = c.configuration.name.length ? c.configuration.name : c.name,
						g = c.compact ? void 0 : c.parentSession?.configuration.name;
					let p = "",
						o = "";
					return (
						g && ((o = t.localize(5634, null, n, g)), (p = g)),
						{ label: n, description: p, ariaLabel: o }
					);
				}
				function h(c, n, g, p, o) {
					const f = a(c),
						b = (0, i.$Zk)(n, f.label, !0);
					if (b)
						return {
							label: f.label,
							description: f.description,
							ariaLabel: f.ariaLabel,
							highlights: { label: b },
							accept: () => {
								g.focusStackFrame(void 0, void 0, c, { explicit: !0 }),
									p.isViewVisible(E.$Y4) || p.openView(E.$Y4, !0);
							},
						};
				}
			},
		),
		define(
			de[425],
			he([
				1, 0, 4, 27, 278, 43, 93, 112, 300, 141, 56, 11, 18, 71, 8, 1049, 40,
				179, 100, 31, 125, 121, 10, 63, 60, 89, 82, 12, 396, 142, 3265, 3817,
				220, 207, 3,
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
					(e.$6Hc =
						e.$5Hc =
						e.$4Hc =
						e.$3Hc =
						e.$2Hc =
						e.$1Hc =
						e.$ZHc =
						e.$YHc =
						e.$XHc =
						e.$WHc =
						e.$VHc =
						e.$UHc =
						e.$THc =
						e.$SHc =
						e.$RHc =
						e.$QHc =
						e.$PHc =
						e.$OHc =
						e.$NHc =
						e.$MHc =
						e.$LHc =
						e.$KHc =
						e.$JHc =
						e.$IHc =
						e.$HHc =
						e.$GHc =
						e.$FHc =
						e.$EHc =
						e.$DHc =
						e.$CHc =
						e.$BHc =
						e.$AHc =
						e.$zHc =
						e.$yHc =
						e.$xHc =
						e.$wHc =
						e.$vHc =
						e.$uHc =
						e.$tHc =
						e.$sHc =
						e.$rHc =
						e.$qHc =
						e.$pHc =
						e.$oHc =
						e.$nHc =
						e.$mHc =
						e.$lHc =
						e.$kHc =
						e.$jHc =
						e.$iHc =
						e.$hHc =
						e.$gHc =
						e.$fHc =
						e.$eHc =
						e.$dHc =
						e.$cHc =
						e.$bHc =
						e.$aHc =
						e.$_Gc =
						e.$$Gc =
						e.$0Gc =
						e.$9Gc =
						e.$8Gc =
						e.$7Gc =
						e.$6Gc =
						e.$5Gc =
						e.$4Gc =
						e.$3Gc =
						e.$2Gc =
						e.$1Gc =
						e.$ZGc =
						e.$YGc =
						e.$XGc =
							void 0),
					(t = mt(t)),
					(e.$XGc = "debug.addConfiguration"),
					(e.$YGc = "editor.debug.action.toggleInlineBreakpoint"),
					(e.$ZGc = "debug.copyStackTrace"),
					(e.$1Gc = "workbench.action.debug.reverseContinue"),
					(e.$2Gc = "workbench.action.debug.stepBack"),
					(e.$3Gc = "workbench.action.debug.restart"),
					(e.$4Gc = "workbench.action.debug.terminateThread"),
					(e.$5Gc = "workbench.action.debug.stepOver"),
					(e.$6Gc = "workbench.action.debug.stepInto"),
					(e.$7Gc = "workbench.action.debug.stepIntoTarget"),
					(e.$8Gc = "workbench.action.debug.stepOut"),
					(e.$9Gc = "workbench.action.debug.pause"),
					(e.$0Gc = "workbench.action.debug.disconnect"),
					(e.$$Gc = "workbench.action.debug.disconnectAndSuspend"),
					(e.$_Gc = "workbench.action.debug.stop"),
					(e.$aHc = "workbench.action.debug.restartFrame"),
					(e.$bHc = "workbench.action.debug.continue"),
					(e.$cHc = "workbench.action.debug.recordStepByStep"),
					(e.$dHc = "workbench.action.debug.stopRecording"),
					(e.$eHc = "workbench.debug.action.focusRepl"),
					(e.$fHc = "debug.jumpToCursor"),
					(e.$gHc = "workbench.action.debug.focusProcess"),
					(e.$hHc = "workbench.action.debug.selectandstart"),
					(e.$iHc = "workbench.action.debug.selectDebugConsole"),
					(e.$jHc = "workbench.action.debug.selectDebugSession"),
					(e.$kHc = "workbench.action.debug.configure"),
					(e.$lHc = "workbench.action.debug.start"),
					(e.$mHc = "workbench.action.debug.run"),
					(e.$nHc = "debug.renameWatchExpression"),
					(e.$oHc = "debug.setWatchExpression"),
					(e.$pHc = "debug.removeWatchExpression"),
					(e.$qHc = "workbench.action.debug.nextConsole"),
					(e.$rHc = "workbench.action.debug.prevConsole"),
					(e.$sHc = "workbench.action.debug.showLoadedScripts"),
					(e.$tHc = "workbench.action.debug.callStackTop"),
					(e.$uHc = "workbench.action.debug.callStackBottom"),
					(e.$vHc = "workbench.action.debug.callStackUp"),
					(e.$wHc = "workbench.action.debug.callStackDown"),
					(e.$xHc = "debug.addToWatchExpressions"),
					(e.$yHc = "debug.copyEvaluatePath"),
					(e.$zHc = "workbench.debug.viewlet.action.copyValue"),
					(e.$AHc = t.localize2(5435, "Debug")),
					(e.$BHc = t.localize2(5436, "Restart")),
					(e.$CHc = t.localize2(5437, "Step Over")),
					(e.$DHc = t.localize2(5438, "Step Into")),
					(e.$EHc = t.localize2(5439, "Record Step By Step")),
					(e.$FHc = t.localize2(5440, "Stop Recording")),
					(e.$GHc = t.localize2(5441, "Step Into Target")),
					(e.$HHc = t.localize2(5442, "Step Out")),
					(e.$IHc = t.localize2(5443, "Pause")),
					(e.$JHc = t.localize2(5444, "Disconnect")),
					(e.$KHc = t.localize2(5445, "Disconnect and Suspend")),
					(e.$LHc = t.localize2(5446, "Stop")),
					(e.$MHc = t.localize2(5447, "Continue")),
					(e.$NHc = t.localize2(5448, "Focus Session")),
					(e.$OHc = t.localize2(5449, "Select and Start Debugging")),
					(e.$PHc = t.localize(5429, null, "launch.json")),
					(e.$QHc = t.localize2(5450, "Start Debugging")),
					(e.$RHc = t.localize2(5451, "Start Without Debugging")),
					(e.$SHc = t.localize2(5452, "Focus Next Debug Console")),
					(e.$THc = t.localize2(5453, "Focus Previous Debug Console")),
					(e.$UHc = t.localize2(5454, "Open Loaded Script...")),
					(e.$VHc = t.localize2(5455, "Navigate to Top of Call Stack")),
					(e.$WHc = t.localize2(5456, "Navigate to Bottom of Call Stack")),
					(e.$XHc = t.localize2(5457, "Navigate Up Call Stack")),
					(e.$YHc = t.localize2(5458, "Navigate Down Call Stack")),
					(e.$ZHc = t.localize2(5459, "Copy as Expression")),
					(e.$1Hc = t.localize2(5460, "Copy Value")),
					(e.$2Hc = t.localize2(5461, "Add to Watch")),
					(e.$3Hc = t.localize2(5462, "Select Debug Console")),
					(e.$4Hc = t.localize2(5463, "Select Debug Session")),
					(e.$5Hc = "debug "),
					(e.$6Hc = "debug consoles ");
				function R(W) {
					return (
						W && typeof W.sessionId == "string" && typeof W.threadId == "string"
					);
				}
				async function O(W, X, Y) {
					const ie = W.get(d.$75);
					let ne;
					if (R(X)) {
						const ee = ie.getModel().getSession(X.sessionId);
						ee &&
							(ne = ee.getAllThreads().find((_) => _.getId() === X.threadId));
					} else if (z(X)) {
						const ee = ie.getModel().getSession(X.sessionId);
						if (ee) {
							const _ = ee.getAllThreads();
							ne = _.length > 0 ? _[0] : void 0;
						}
					}
					if (!ne && ((ne = ie.getViewModel().focusedThread), !ne)) {
						const ee = ie.getViewModel().focusedSession,
							_ = ee ? ee.getAllThreads() : void 0;
						ne = _ && _.length ? _[0] : void 0;
					}
					ne && (await Y(ne));
				}
				function B(W) {
					return (
						W &&
						typeof W.sessionId == "string" &&
						typeof W.threadId == "string" &&
						typeof W.frameId == "string"
					);
				}
				function U(W, X) {
					if (B(X)) {
						const Y = W.getModel().getSession(X.sessionId);
						if (Y) {
							const ie = Y.getAllThreads().find(
								(ne) => ne.getId() === X.threadId,
							);
							if (ie)
								return ie.getCallStack().find((ne) => ne.getId() === X.frameId);
						}
					} else return W.getViewModel().focusedStackFrame;
				}
				function z(W) {
					return W && typeof W.sessionId == "string";
				}
				async function F(W, X) {
					const Y = W.get(d.$75),
						ie = W.get(S.$HMb),
						ne = Y.getModel()
							.getSessions(!0)
							.filter((te) => te.hasSeparateRepl());
					let ee = Y.getViewModel().focusedSession,
						_ = 0;
					if (ne.length > 0 && ee) {
						for (; ee && !ee.hasSeparateRepl(); ) ee = ee.parentSession;
						if (ee) {
							const te = ne.indexOf(ee);
							X
								? (_ = te === ne.length - 1 ? 0 : te + 1)
								: (_ = te === 0 ? ne.length - 1 : te - 1);
						}
					}
					await Y.focusStackFrame(void 0, void 0, ne[_], { explicit: !0 }),
						ie.isViewVisible(d.$Y4) || (await ie.openView(d.$Y4, !0));
				}
				async function x(W, X) {
					const Y = W.getViewModel().focusedStackFrame;
					if (Y) {
						let ie = Y.thread.getCallStack(),
							ne = ie.findIndex((_) => _.frameId === Y.frameId),
							ee;
						if (X) {
							if (ne >= ie.length - 1)
								if (Y.thread.reachedEndOfCallStack) {
									q(W);
									return;
								} else
									await W.getModel().fetchCallstack(Y.thread, 20),
										(ie = Y.thread.getCallStack()),
										(ne = ie.findIndex((_) => _.frameId === Y.frameId));
							ee = V(!0, ie, ne);
						} else {
							if (ne <= 0) {
								H(W);
								return;
							}
							ee = V(!1, ie, ne);
						}
						ee && W.focusStackFrame(ee, void 0, void 0, { preserveFocus: !1 });
					}
				}
				async function H(W) {
					const X = W.getViewModel().focusedThread;
					if (X) {
						await W.getModel().fetchCallstack(X);
						const Y = X.getCallStack();
						if (Y.length > 0) {
							const ie = V(!1, Y, 0);
							ie &&
								W.focusStackFrame(ie, void 0, void 0, { preserveFocus: !1 });
						}
					}
				}
				function q(W) {
					const X = W.getViewModel().focusedThread;
					X &&
						W.focusStackFrame(X.getTopStackFrame(), void 0, void 0, {
							preserveFocus: !1,
						});
				}
				function V(W, X, Y) {
					Y >= X.length ? (Y = X.length - 1) : Y < 0 && (Y = 0);
					let ie = Y,
						ne;
					do
						if (
							(W
								? ie === X.length - 1
									? (ie = 0)
									: ie++
								: ie === 0
									? (ie = X.length - 1)
									: ie--,
							(ne = X[ie]),
							!(0, d.$65)(ne))
						)
							return ne;
					while (ie !== Y);
				}
				b.$fk.registerCommand({
					id: e.$ZGc,
					handler: async (W, X, Y) => {
						const ie = W.get(s.$YO),
							ne = W.get(l.$Vxb),
							ee = W.get(d.$75),
							_ = U(ee, Y);
						if (_) {
							const te = ie.getEOL(_.source.uri);
							await ne.writeText(
								_.thread
									.getCallStack()
									.map((Q) => Q.toString())
									.join(te),
							);
						}
					},
				}),
					b.$fk.registerCommand({
						id: e.$1Gc,
						handler: async (W, X, Y) => {
							await O(W, Y, (ie) => ie.reverseContinue());
						},
					}),
					b.$fk.registerCommand({
						id: e.$2Gc,
						handler: async (W, X, Y) => {
							const ie = W.get(n.$6j);
							d.$V5.getValue(ie)
								? await O(W, Y, (ne) => ne.stepBack("instruction"))
								: await O(W, Y, (ne) => ne.stepBack());
						},
					}),
					b.$fk.registerCommand({
						id: e.$4Gc,
						handler: async (W, X, Y) => {
							await O(W, Y, (ie) => ie.terminate());
						},
					}),
					b.$fk.registerCommand({
						id: e.$fHc,
						handler: async (W) => {
							const Y = W.get(d.$75).getViewModel().focusedStackFrame,
								ne = W.get(h.$IY).activeTextEditorControl,
								ee = W.get(p.$4N),
								_ = W.get($.$DJ);
							if (Y && (0, u.$0sb)(ne) && ne.hasModel()) {
								const te = ne.getPosition(),
									Q = ne.getModel().uri,
									Z = Y.thread.session.getSourceForUri(Q);
								if (Z) {
									const re = (
										await Y.thread.session.gotoTargets(
											Z.raw,
											te.lineNumber,
											te.column,
										)
									)?.body.targets;
									if (re && re.length) {
										let le = re[0].id;
										if (re.length > 1) {
											const oe = re.map((pe) => ({
													label: pe.label,
													_id: pe.id,
												})),
												ae = await _.pick(oe, {
													placeHolder: t.localize(5430, null),
												});
											if (!ae) return;
											le = ae._id;
										}
										return await Y.thread.session
											.goto(Y.thread.threadId, le)
											.catch((oe) => ee.warn(oe));
									}
								}
							}
							return ee.warn(t.localize(5431, null));
						},
					}),
					b.$fk.registerCommand({
						id: e.$tHc,
						handler: async (W, X, Y) => {
							const ie = W.get(d.$75);
							q(ie);
						},
					}),
					b.$fk.registerCommand({
						id: e.$uHc,
						handler: async (W, X, Y) => {
							const ie = W.get(d.$75);
							await H(ie);
						},
					}),
					b.$fk.registerCommand({
						id: e.$vHc,
						handler: async (W, X, Y) => {
							const ie = W.get(d.$75);
							x(ie, !1);
						},
					}),
					b.$fk.registerCommand({
						id: e.$wHc,
						handler: async (W, X, Y) => {
							const ie = W.get(d.$75);
							x(ie, !0);
						},
					}),
					a.$ZX.appendMenuItem(a.$XX.EditorContext, {
						command: {
							id: e.$fHc,
							title: t.localize(5432, null),
							category: e.$AHc,
						},
						when: n.$Kj.and(d.$v5, c.EditorContextKeys.editorTextFocus),
						group: "debug",
						order: 3,
					}),
					E.$TX.registerCommandAndKeybindingRule({
						id: e.$qHc,
						weight: E.KeybindingWeight.WorkbenchContrib + 1,
						when: d.$84,
						primary: i.KeyMod.CtrlCmd | i.KeyCode.PageDown,
						mac: {
							primary:
								i.KeyMod.Shift | i.KeyMod.CtrlCmd | i.KeyCode.BracketRight,
						},
						handler: async (W, X, Y) => {
							F(W, !0);
						},
					}),
					E.$TX.registerCommandAndKeybindingRule({
						id: e.$rHc,
						weight: E.KeybindingWeight.WorkbenchContrib + 1,
						when: d.$84,
						primary: i.KeyMod.CtrlCmd | i.KeyCode.PageUp,
						mac: {
							primary:
								i.KeyMod.Shift | i.KeyMod.CtrlCmd | i.KeyCode.BracketLeft,
						},
						handler: async (W, X, Y) => {
							F(W, !1);
						},
					}),
					E.$TX.registerCommandAndKeybindingRule({
						id: e.$3Gc,
						weight: E.KeybindingWeight.WorkbenchContrib,
						primary: i.KeyMod.Shift | i.KeyMod.CtrlCmd | i.KeyCode.F5,
						when: d.$74,
						handler: async (W, X, Y) => {
							const ie = W.get(d.$75),
								ne = W.get(y.$gj);
							let ee;
							if (
								(z(Y)
									? (ee = ie.getModel().getSession(Y.sessionId))
									: (ee = ie.getViewModel().focusedSession),
								ee)
							) {
								const _ = ne.getValue("debug").showSubSessionsInToolBar;
								for (; !_ && ee.lifecycleManagedByParent && ee.parentSession; )
									ee = ee.parentSession;
								ee.removeReplExpressions(), await ie.restartSession(ee);
							} else {
								const { launch: _, name: te } =
									ie.getConfigurationManager().selectedConfiguration;
								await ie.startDebugging(_, te, {
									noDebug: !1,
									startedByUser: !0,
								});
							}
						},
					}),
					E.$TX.registerCommandAndKeybindingRule({
						id: e.$5Gc,
						weight: E.KeybindingWeight.WorkbenchContrib,
						primary: i.KeyCode.F10,
						when: d.$24.isEqualTo("stopped"),
						handler: async (W, X, Y) => {
							const ie = W.get(n.$6j);
							d.$V5.getValue(ie)
								? await O(W, Y, (ne) => ne.next("instruction"))
								: await O(W, Y, (ne) => ne.next());
						},
					}),
					b.$fk.registerCommand({
						id: e.$cHc,
						handler: async (W, X, Y) => {
							await O(W, Y, (ie) => ie.recordStepByStep(W.get(d.$75)));
						},
					}),
					b.$fk.registerCommand({
						id: e.$dHc,
						handler: async (W, X, Y) => {
							W.get(d.$75).setIsRecording(!1);
						},
					});
				const G = T.$r && T.$l ? i.KeyMod.Alt | i.KeyCode.F11 : i.KeyCode.F11;
				E.$TX.registerCommandAndKeybindingRule({
					id: e.$6Gc,
					weight: E.KeybindingWeight.WorkbenchContrib + 10,
					primary: G,
					when: d.$24.notEqualsTo("inactive"),
					handler: async (W, X, Y) => {
						const ie = W.get(n.$6j);
						d.$V5.getValue(ie)
							? await O(W, Y, (ne) => ne.stepIn("instruction"))
							: await O(W, Y, (ne) => ne.stepIn());
					},
				}),
					E.$TX.registerCommandAndKeybindingRule({
						id: e.$8Gc,
						weight: E.KeybindingWeight.WorkbenchContrib,
						primary: i.KeyMod.Shift | i.KeyCode.F11,
						when: d.$24.isEqualTo("stopped"),
						handler: async (W, X, Y) => {
							const ie = W.get(n.$6j);
							d.$V5.getValue(ie)
								? await O(W, Y, (ne) => ne.stepOut("instruction"))
								: await O(W, Y, (ne) => ne.stepOut());
						},
					}),
					E.$TX.registerCommandAndKeybindingRule({
						id: e.$9Gc,
						weight: E.KeybindingWeight.WorkbenchContrib + 2,
						primary: i.KeyCode.F6,
						when: d.$24.isEqualTo("running"),
						handler: async (W, X, Y) => {
							await O(W, Y, (ie) => ie.pause());
						},
					}),
					E.$TX.registerCommandAndKeybindingRule({
						id: e.$7Gc,
						primary: G | i.KeyMod.CtrlCmd,
						when: n.$Kj.and(d.$w5, d.$74, d.$24.isEqualTo("stopped")),
						weight: E.KeybindingWeight.WorkbenchContrib,
						handler: async (W, X, Y) => {
							const ie = W.get($.$DJ),
								ne = W.get(d.$75),
								ee = ne.getViewModel().focusedSession,
								_ = ne.getViewModel().focusedStackFrame;
							if (!_ || !ee) return;
							const te = await W.get(h.$IY).openEditor({
								resource: _.source.uri,
								options: { revealIfOpened: !0 },
							});
							let Q;
							if (te) {
								const re = te?.getControl();
								(0, u.$0sb)(re) && (Q = re);
							}
							const Z = new A.$Zc(),
								se = Z.add(ie.createQuickPick());
							(se.busy = !0),
								se.show(),
								Z.add(
									se.onDidChangeActive(([re]) => {
										Q &&
											re &&
											re.target.line !== void 0 &&
											(Q.revealLineInCenterIfOutsideViewport(re.target.line),
											Q.setSelection({
												startLineNumber: re.target.line,
												startColumn: re.target.column || 1,
												endLineNumber: re.target.endLine || re.target.line,
												endColumn: re.target.endColumn || re.target.column || 1,
											}));
									}),
								),
								Z.add(
									se.onDidAccept(() => {
										se.activeItems.length &&
											ee.stepIn(_.thread.threadId, se.activeItems[0].target.id);
									}),
								),
								Z.add(se.onDidHide(() => Z.dispose())),
								ee.stepInTargets(_.frameId).then((re) => {
									(se.busy = !1),
										re?.length
											? (se.items = re?.map((le) => ({
													target: le,
													label: le.label,
												})))
											: (se.placeholder = t.localize(5433, null));
								});
						},
					});
				async function K(W, X, Y, ie, ne) {
					const ee = W.get(d.$75);
					let _;
					z(Y)
						? (_ = ee.getModel().getSession(Y.sessionId))
						: (_ = ee.getViewModel().focusedSession);
					const Q = W.get(y.$gj).getValue("debug").showSubSessionsInToolBar;
					for (; !Q && _ && _.lifecycleManagedByParent && _.parentSession; )
						_ = _.parentSession;
					await ee.stopSession(_, ie, ne);
				}
				E.$TX.registerCommandAndKeybindingRule({
					id: e.$0Gc,
					weight: E.KeybindingWeight.WorkbenchContrib,
					primary: i.KeyMod.Shift | i.KeyCode.F5,
					when: n.$Kj.and(d.$q5, d.$74),
					handler: (W, X, Y) => K(W, X, Y, !0),
				}),
					b.$fk.registerCommand({
						id: e.$$Gc,
						handler: (W, X, Y) => K(W, X, Y, !0, !0),
					}),
					E.$TX.registerCommandAndKeybindingRule({
						id: e.$_Gc,
						weight: E.KeybindingWeight.WorkbenchContrib,
						primary: i.KeyMod.Shift | i.KeyCode.F5,
						when: n.$Kj.and(d.$q5.toNegated(), d.$74),
						handler: (W, X, Y) => K(W, X, Y, !1),
					}),
					b.$fk.registerCommand({
						id: e.$aHc,
						handler: async (W, X, Y) => {
							const ie = W.get(d.$75),
								ne = W.get(p.$4N),
								ee = U(ie, Y);
							if (ee)
								try {
									await ee.restart();
								} catch (_) {
									ne.error(_);
								}
						},
					}),
					E.$TX.registerCommandAndKeybindingRule({
						id: e.$bHc,
						weight: E.KeybindingWeight.WorkbenchContrib + 10,
						primary: i.KeyCode.F5,
						when: d.$24.isEqualTo("stopped"),
						handler: async (W, X, Y) => {
							await O(W, Y, (ie) => ie.continue());
						},
					}),
					b.$fk.registerCommand({
						id: e.$sHc,
						handler: async (W) => {
							await (0, L.$VGc)(W);
						},
					}),
					b.$fk.registerCommand({
						id: e.$eHc,
						handler: async (W) => {
							await W.get(S.$HMb).openView(d.$Y4, !0);
						},
					}),
					b.$fk.registerCommand({
						id: "debug.startFromConfig",
						handler: async (W, X) => {
							await W.get(d.$75).startDebugging(void 0, X);
						},
					}),
					b.$fk.registerCommand({
						id: e.$gHc,
						handler: async (W, X) => {
							const Y = W.get(d.$75),
								ie = W.get(h.$IY),
								ne = Y.getModel()
									.getSessions()
									.find(
										(_) => _.parentSession === X && _.state === d.State.Stopped,
									);
							ne && X.state !== d.State.Stopped && (X = ne),
								await Y.focusStackFrame(void 0, void 0, X, { explicit: !0 });
							const ee = Y.getViewModel().focusedStackFrame;
							ee && (await ee.openInEditor(ie, !0));
						},
					}),
					b.$fk.registerCommand({
						id: e.$hHc,
						handler: async (W, X, Y) => {
							const ie = W.get($.$DJ),
								ne = W.get(d.$75);
							if (X) {
								const ee = ne.getConfigurationManager(),
									_ = await ee.getDynamicProviders();
								for (const te of _)
									if (te.type === X) {
										const Q = await te.pick();
										if (Q) {
											await ee.selectConfiguration(
												Q.launch,
												Q.config.name,
												Q.config,
												{ type: te.type },
											),
												ne.startDebugging(Q.launch, Q.config, {
													noDebug: Y?.noDebug,
													startedByUser: !0,
												});
											return;
										}
									}
							}
							ie.quickAccess.show(e.$5Hc);
						},
					}),
					b.$fk.registerCommand({
						id: e.$iHc,
						handler: async (W) => {
							W.get($.$DJ).quickAccess.show(e.$6Hc);
						},
					}),
					b.$fk.registerCommand({
						id: e.$jHc,
						handler: async (W) => {
							(0, D.$WGc)(W, e.$hHc);
						},
					}),
					E.$TX.registerCommandAndKeybindingRule({
						id: e.$lHc,
						weight: E.KeybindingWeight.WorkbenchContrib,
						primary: i.KeyCode.F5,
						when: n.$Kj.and(d.$y5, d.$24.isEqualTo("inactive")),
						handler: async (W, X) => {
							const Y = W.get(d.$75);
							await (0, P.$w3)(W.get(y.$gj), W.get(h.$IY));
							const {
									launch: ie,
									name: ne,
									getConfig: ee,
								} = Y.getConfigurationManager().selectedConfiguration,
								_ = await ee(),
								te = _ ? Object.assign((0, I.$vo)(_), X?.config) : ne;
							await Y.startDebugging(
								ie,
								te,
								{ noDebug: X?.noDebug, startedByUser: !0 },
								!1,
							);
						},
					}),
					E.$TX.registerCommandAndKeybindingRule({
						id: e.$mHc,
						weight: E.KeybindingWeight.WorkbenchContrib,
						primary: i.KeyMod.CtrlCmd | i.KeyCode.F5,
						mac: { primary: i.KeyMod.WinCtrl | i.KeyCode.F5 },
						when: n.$Kj.and(
							d.$y5,
							d.$24.notEqualsTo((0, d.$45)(d.State.Initializing)),
						),
						handler: async (W) => {
							await W.get(b.$ek).executeCommand(e.$lHc, { noDebug: !0 });
						},
					}),
					E.$TX.registerCommandAndKeybindingRule({
						id: "debug.toggleBreakpoint",
						weight: E.KeybindingWeight.WorkbenchContrib + 5,
						when: n.$Kj.and(d.$$4, o.$bMb.toNegated()),
						primary: i.KeyCode.Space,
						handler: (W) => {
							const X = W.get(C.$fMb),
								Y = W.get(d.$75),
								ie = X.lastFocusedList;
							if (ie instanceof w.List) {
								const ne = ie.getFocusedElements();
								ne &&
									ne.length &&
									Y.enableOrDisableBreakpoints(!ne[0].enabled, ne[0]);
							}
						},
					}),
					E.$TX.registerCommandAndKeybindingRule({
						id: "debug.enableOrDisableBreakpoint",
						weight: E.KeybindingWeight.WorkbenchContrib,
						primary: void 0,
						when: c.EditorContextKeys.editorTextFocus,
						handler: (W) => {
							const X = W.get(d.$75),
								ie = W.get(h.$IY).activeTextEditorControl;
							if ((0, u.$0sb)(ie)) {
								const ne = ie.getModel();
								if (ne) {
									const ee = ie.getPosition();
									if (ee) {
										const _ = X.getModel().getBreakpoints({
											uri: ne.uri,
											lineNumber: ee.lineNumber,
										});
										_.length &&
											X.enableOrDisableBreakpoints(!_[0].enabled, _[0]);
									}
								}
							}
						},
					}),
					E.$TX.registerCommandAndKeybindingRule({
						id: e.$nHc,
						weight: E.KeybindingWeight.WorkbenchContrib + 5,
						when: d.$_4,
						primary: i.KeyCode.F2,
						mac: { primary: i.KeyCode.Enter },
						handler: (W, X) => {
							const Y = W.get(d.$75);
							if (!(X instanceof m.$J3)) {
								const ne = W.get(C.$fMb).lastFocusedList;
								if (ne) {
									const ee = ne.getFocus();
									Array.isArray(ee) && ee[0] instanceof m.$J3 && (X = ee[0]);
								}
							}
							X instanceof m.$J3 &&
								Y.getViewModel().setSelectedExpression(X, !1);
						},
					}),
					b.$fk.registerCommand({
						id: e.$oHc,
						handler: async (W, X) => {
							const Y = W.get(d.$75);
							(X instanceof m.$J3 || X instanceof m.$K3) &&
								Y.getViewModel().setSelectedExpression(X, !0);
						},
					}),
					E.$TX.registerCommandAndKeybindingRule({
						id: "debug.setVariable",
						weight: E.KeybindingWeight.WorkbenchContrib + 5,
						when: d.$b5,
						primary: i.KeyCode.F2,
						mac: { primary: i.KeyCode.Enter },
						handler: (W) => {
							const X = W.get(C.$fMb),
								Y = W.get(d.$75),
								ie = X.lastFocusedList;
							if (ie) {
								const ne = ie.getFocus();
								Array.isArray(ne) &&
									ne[0] instanceof m.$K3 &&
									Y.getViewModel().setSelectedExpression(ne[0], !1);
							}
						},
					}),
					E.$TX.registerCommandAndKeybindingRule({
						id: e.$pHc,
						weight: E.KeybindingWeight.WorkbenchContrib,
						when: n.$Kj.and(d.$_4, d.$c5.toNegated()),
						primary: i.KeyCode.Delete,
						mac: { primary: i.KeyMod.CtrlCmd | i.KeyCode.Backspace },
						handler: (W, X) => {
							const Y = W.get(d.$75);
							if (X instanceof m.$J3) {
								Y.removeWatchExpressions(X.getId());
								return;
							}
							const ne = W.get(C.$fMb).lastFocusedList;
							if (ne) {
								let ee = ne.getFocus();
								if (Array.isArray(ee) && ee[0] instanceof m.$J3) {
									const _ = ne.getSelection();
									_ && _.indexOf(ee[0]) >= 0 && (ee = _),
										ee.forEach((te) => Y.removeWatchExpressions(te.getId()));
								}
							}
						},
					}),
					E.$TX.registerCommandAndKeybindingRule({
						id: "debug.removeBreakpoint",
						weight: E.KeybindingWeight.WorkbenchContrib,
						when: n.$Kj.and(d.$$4, d.$d5.toNegated()),
						primary: i.KeyCode.Delete,
						mac: { primary: i.KeyMod.CtrlCmd | i.KeyCode.Backspace },
						handler: (W) => {
							const X = W.get(C.$fMb),
								Y = W.get(d.$75),
								ie = X.lastFocusedList;
							if (ie instanceof w.List) {
								const ne = ie.getFocusedElements(),
									ee = ne.length ? ne[0] : void 0;
								ee instanceof m.$T3
									? Y.removeBreakpoints(ee.getId())
									: ee instanceof m.$U3
										? Y.removeFunctionBreakpoints(ee.getId())
										: ee instanceof m.$V3 &&
											Y.removeDataBreakpoints(ee.getId());
							}
						},
					}),
					E.$TX.registerCommandAndKeybindingRule({
						id: "debug.installAdditionalDebuggers",
						weight: E.KeybindingWeight.WorkbenchContrib,
						when: void 0,
						primary: void 0,
						handler: async (W, X) => {
							const ie = (
								await W.get(k.$6Sb).openPaneComposite(
									r.$LQb,
									v.ViewContainerLocation.Sidebar,
									!0,
								)
							)?.getViewPaneContainer();
							let ne = "@category:debuggers";
							typeof X == "string" && (ne += ` ${X}`),
								ie.search(ne),
								ie.focus();
						},
					}),
					(0, a.$4X)(
						class extends a.$3X {
							constructor() {
								super({
									id: e.$XGc,
									title: t.localize2(5464, "Add Configuration..."),
									category: e.$AHc,
									f1: !0,
									menu: {
										id: a.$XX.EditorContent,
										when: n.$Kj.and(
											n.$Kj.regex(
												f.$BQb.Path.key,
												/\.vscode[/\\]launch\.json$/,
											),
											f.$TPb.isEqualTo(M.$PUb),
										),
									},
								});
							}
							async run(X, Y) {
								const ie = X.get(d.$75).getConfigurationManager(),
									ne =
										ie.getLaunches().find((ee) => ee.uri.toString() === Y) ||
										ie.selectedConfiguration.launch;
								if (ne) {
									const { editor: ee, created: _ } = await ne.openConfigFile({
										preserveFocus: !1,
									});
									if (ee && !_) {
										const te = ee.getControl();
										te &&
											(await te
												.getContribution(d.$Z5)
												?.addLaunchConfiguration());
									}
								}
							}
						},
					);
				const J = (W) => {
					const X = W.get(d.$75),
						ie = W.get(h.$IY).activeTextEditorControl;
					if ((0, u.$0sb)(ie)) {
						const ne = ie.getPosition();
						if (ne && ie.hasModel() && X.canSetBreakpointsIn(ie.getModel())) {
							const ee = ie.getModel().uri;
							X.getModel()
								.getBreakpoints({ lineNumber: ne.lineNumber, uri: ee })
								.some(
									(te) =>
										te.sessionAgnosticData.column === ne.column ||
										(!te.column && ne.column <= 1),
								) ||
								X.addBreakpoints(ee, [
									{
										lineNumber: ne.lineNumber,
										column: ne.column > 1 ? ne.column : void 0,
									},
								]);
						}
					}
				};
				E.$TX.registerCommandAndKeybindingRule({
					weight: E.KeybindingWeight.WorkbenchContrib,
					primary: i.KeyMod.Shift | i.KeyCode.F9,
					when: c.EditorContextKeys.editorTextFocus,
					id: e.$YGc,
					handler: J,
				}),
					a.$ZX.appendMenuItem(a.$XX.EditorContext, {
						command: {
							id: e.$YGc,
							title: t.localize(5434, null),
							category: e.$AHc,
						},
						when: n.$Kj.and(
							d.$74,
							f.$uQb.toNegated(),
							c.EditorContextKeys.editorTextFocus,
							N.$41.toNegated(),
						),
						group: "debug",
						order: 1,
					}),
					E.$TX.registerCommandAndKeybindingRule({
						id: "debug.openBreakpointToSide",
						weight: E.KeybindingWeight.WorkbenchContrib,
						when: d.$$4,
						primary: i.KeyMod.CtrlCmd | i.KeyCode.Enter,
						secondary: [i.KeyMod.Alt | i.KeyCode.Enter],
						handler: (W) => {
							const Y = W.get(C.$fMb).lastFocusedList;
							if (Y instanceof w.List) {
								const ie = Y.getFocusedElements();
								if (ie.length && ie[0] instanceof m.$T3)
									return (0, g.$nGc)(
										ie[0],
										!0,
										!1,
										!0,
										W.get(d.$75),
										W.get(h.$IY),
									);
							}
						},
					}),
					E.$TX.registerCommandAndKeybindingRule({
						id: "debug.openView",
						weight: E.KeybindingWeight.WorkbenchContrib,
						when: d.$y5.toNegated(),
						primary: i.KeyCode.F5,
						secondary: [i.KeyMod.CtrlCmd | i.KeyCode.F5],
						handler: async (W) => {
							await W.get(k.$6Sb).openPaneComposite(
								d.$Q4,
								v.ViewContainerLocation.Sidebar,
								!0,
							);
						},
					});
			},
		),
		define(
			de[629],
			he([
				1, 0, 7, 105, 410, 95, 292, 14, 132, 288, 27, 3, 26, 4, 31, 49, 72, 106,
				425, 709, 112, 300, 1039, 843,
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
					(e.$gIc = e.$fIc = void 0),
					(e.$cIc = P),
					(e.$dIc = k),
					(e.$eIc = L),
					(t = mt(t));
				const v = 1024,
					S = /^(true|false)$/i,
					I = /^(['"]).*\1$/,
					T = t.$;
				function P(N) {
					const A = T(".");
					return A.classList.add("debug-view-content"), N.appendChild(A), A;
				}
				function k(N, A, R, O, B) {
					let U = typeof A == "string" ? A : A.value;
					(R.className = "value"),
						U === null ||
						((A instanceof l.$J3 ||
							A instanceof l.$K3 ||
							A instanceof $.$_Hc) &&
							!A.available)
							? (R.classList.add("unavailable"),
								U !== l.$J3.DEFAULT_VALUE && R.classList.add("error"))
							: (typeof A != "string" &&
									O.showChanged &&
									A.valueChanged &&
									U !== l.$J3.DEFAULT_VALUE &&
									((R.className = "value changed"), (A.valueChanged = !1)),
								O.colorize &&
									typeof A != "string" &&
									(A.type === "number" ||
									A.type === "boolean" ||
									A.type === "string"
										? R.classList.add(A.type)
										: isNaN(+U)
											? S.test(U)
												? R.classList.add("boolean")
												: I.test(U) && R.classList.add("string")
											: R.classList.add("number"))),
						O.maxValueLength &&
							U &&
							U.length > O.maxValueLength &&
							(U = U.substring(0, O.maxValueLength) + "..."),
						U || (U = "");
					const z = l.$H3.allValuesWithHistory;
					if (A instanceof l.$J3 && z.has(A.getId())) {
						const H = z.get(A.getId());
						H &&
							H.length > 0 &&
							((U += " (history: "),
							H.forEach((q, V) => {
								(U += `${q.value}`),
									q.source &&
										(U += ` [${q.source.uri.path}:${q.source.line}:${q.source.column}]`),
									V < H.length - 1 && (U += ", ");
							}),
							(U += ")"));
					}
					const F = A instanceof l.$H3 ? A.getSession() : void 0,
						x =
							O.hover === !1
								? { type: b.DebugLinkHoverBehavior.Rich, store: N }
								: { type: b.DebugLinkHoverBehavior.None };
					if (
						(A instanceof l.$H3 &&
						A.valueLocationReference !== void 0 &&
						F &&
						O.linkDetector
							? ((R.textContent = ""),
								R.appendChild(
									O.linkDetector.linkifyLocation(
										U,
										A.valueLocationReference,
										F,
										x,
									),
								))
							: O.linkDetector
								? ((R.textContent = ""),
									R.appendChild(
										O.linkDetector.linkify(U, !1, F ? F.root : void 0, !0, x),
									))
								: (R.textContent = U),
						O.hover !== !1)
					) {
						const { commands: H = [], commandService: q } = O.hover || {};
						N.add(
							B.setupManagedHover(
								(0, E.$cib)("mouse"),
								R,
								() => {
									const V = t.$("div"),
										G = t.$("div.hover-row"),
										K = t.$fhb(G, t.$("div.hover-contents")),
										J = t.$fhb(K, t.$("pre.debug-var-hover-pre"));
									return (J.textContent = U), V.appendChild(G), V;
								},
								{
									actions: H.map(({ id: V, args: G }) => {
										const K = n.$fk.getCommand(V)?.metadata?.description;
										return {
											label: typeof K == "string" ? K : K ? K.value : V,
											commandId: V,
											run: () => q.executeCommand(V, ...G),
										};
									}),
								},
							),
						);
					}
				}
				function L(N, A, R, O, B, U, z, F, x) {
					if (O.available) {
						B.type.textContent = "";
						let q = O.name;
						O.value &&
							typeof O.name == "string" &&
							(O.type && x
								? ((q += ": "), (B.type.textContent = O.type + " ="))
								: (q += " =")),
							B.label.set(q, z, O.type && !x ? O.type : O.name),
							B.name.classList.toggle(
								"virtual",
								O.presentationHint?.kind === "virtual",
							),
							B.name.classList.toggle(
								"internal",
								O.presentationHint?.visibility === "internal",
							);
					} else
						O.value && typeof O.name == "string" && O.name && B.label.set(":");
					B.expression.classList.toggle("lazy", !!O.presentationHint?.lazy);
					const H = [{ id: f.$zHc, args: [O, [O]] }];
					O.evaluateName && H.push({ id: f.$yHc, args: [{ variable: O }] }),
						k(
							N,
							O,
							B.value,
							{
								showChanged: U,
								maxValueLength: v,
								hover: { commands: H, commandService: A },
								colorize: !0,
								linkDetector: F,
							},
							R,
						);
				}
				let D = class {
					constructor(A, R) {
						(this.a = A), (this.b = R);
					}
					async getChildren(A) {
						const R = this.a.getViewModel(),
							O = await this.c(A);
						return Promise.all(
							O.map(async (B) => {
								const U = R.getVisualizedExpression(B);
								if (typeof U == "string") {
									const z = await this.b.getVisualizedNodeFor(U, B);
									if (z) return R.setVisualizedExpression(B, z), z;
								} else if (U) return U;
								return B;
							}),
						);
					}
				};
				(e.$fIc = D), (e.$fIc = D = Ne([j(0, s.$75), j(1, y.$D3)], D));
				let M = class {
					constructor(A, R, O) {
						(this.a = A), (this.b = R), (this.c = O);
					}
					renderTemplate(A) {
						const R = new a.$Zc(),
							O = t.$fhb(A, T(".expression")),
							B = t.$fhb(O, T("span.name")),
							U = t.$fhb(O, T("span.lazy-button"));
						U.classList.add(...h.ThemeIcon.asClassNameArray(d.$ak.eye)),
							R.add(
								this.c.setupManagedHover(
									(0, E.$cib)("mouse"),
									U,
									(0, c.localize)(5139, null),
								),
							);
						const z = t.$fhb(O, T("span.type")),
							F = t.$fhb(O, T("span.value")),
							x = R.add(new w.$Wob(B)),
							H = t.$fhb(O, T(".inputBoxContainer"));
						let q;
						this.h &&
							(t.$fhb(O, T(".span.actionbar-spacer")),
							(q = R.add(new i.$eib(O))));
						const V = {
							expression: O,
							name: B,
							type: z,
							value: F,
							label: x,
							inputBoxContainer: H,
							actionBar: q,
							elementDisposable: new a.$Zc(),
							templateDisposable: R,
							lazyButton: U,
							currentElement: void 0,
						};
						return (
							R.add(
								t.$0fb(U, t.$$gb.CLICK, () => {
									V.currentElement &&
										this.a
											.getViewModel()
											.evaluateLazyExpression(V.currentElement);
								}),
							),
							V
						);
					}
					d(A, R, O) {
						(O.currentElement = A),
							this.f(R.element, O, (0, m.$3k)(R.filterData)),
							O.actionBar && this.h(O.actionBar, A, O);
						const B = this.a.getViewModel().getSelectedExpression();
						if (A === B?.expression || (A instanceof l.$K3 && A.errorMessage)) {
							const U = this.g(A, !!B?.settingWatch);
							U &&
								O.elementDisposable.add(
									this.renderInputBox(O.name, O.value, O.inputBoxContainer, U),
								);
						}
					}
					renderInputBox(A, R, O, B) {
						(A.style.display = "none"),
							(R.style.display = "none"),
							(O.style.display = "initial"),
							t.$9fb(O);
						const U = new C.$Mob(O, this.b, { ...B, inputBoxStyles: o.$wyb });
						(U.value = B.initialValue), U.focus(), U.select();
						const z = (0, r.$hb)((x, H) => {
								(A.style.display = ""),
									(R.style.display = ""),
									(O.style.display = "none");
								const q = U.value;
								(0, a.$Vc)(F),
									H &&
										(this.a.getViewModel().setSelectedExpression(void 0, !1),
										B.onFinish(q, x));
							}),
							F = [
								U,
								t.$$fb(U.inputElement, t.$$gb.KEY_DOWN, (x) => {
									const H = x.equals(u.KeyCode.Escape),
										q = x.equals(u.KeyCode.Enter);
									(H || q) &&
										(x.preventDefault(), x.stopPropagation(), z(q, !0));
								}),
								t.$0fb(U.inputElement, t.$$gb.BLUR, () => {
									z(!0, !0);
								}),
								t.$0fb(U.inputElement, t.$$gb.CLICK, (x) => {
									x.preventDefault(), x.stopPropagation();
								}),
							];
						return (0, a.$Yc)(() => {
							z(!1, !1);
						});
					}
					disposeElement(A, R, O) {
						O.elementDisposable.clear();
					}
					disposeTemplate(A) {
						A.elementDisposable.dispose(), A.templateDisposable.dispose();
					}
				};
				(e.$gIc = M),
					(e.$gIc = M = Ne([j(0, s.$75), j(1, g.$Wxb), j(2, p.$Uyb)], M));
			},
		),
		define(
			de[1332],
			he([
				1, 0, 4, 27, 7, 114, 596, 10, 31, 112, 26, 51, 49, 25, 3, 425, 198, 352,
				39, 106, 95, 72, 130, 417, 8,
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
			) {
				"use strict";
				var S;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$zJc = e.$yJc = void 0),
					(t = mt(t)),
					(w = mt(w));
				const I = w.$;
				let T = class extends p.$$ib {
					static {
						S = this;
					}
					static {
						this.a = "\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500";
					}
					constructor(L, D, M, N, A, R, O, B, U, z, F) {
						super(L, D, M),
							(this.I = L),
							(this.J = N),
							(this.L = A),
							(this.M = R),
							(this.N = O),
							(this.O = U),
							(this.P = z),
							(this.Q = F),
							(this.h = []),
							(this.r = 0),
							(this.y = []),
							(this.n = []),
							(this.g = new C.$5ib([], -1, B, b.$Fyb, {
								ariaLabel: t.localize(5398, null),
							})),
							this.g.setFocusable(!1),
							this.n.push(this.g),
							this.R();
					}
					R() {
						this.n.push(
							this.L.onDidChangeConfiguration((L) => {
								L.affectsConfiguration("launch") && this.S();
							}),
						),
							this.n.push(
								this.J.getConfigurationManager().onDidSelectConfiguration(
									() => {
										this.S();
									},
								),
							);
					}
					render(L) {
						(this.b = L),
							L.classList.add("start-debug-action-item"),
							(this.c = w.$fhb(L, I(u.ThemeIcon.asCSSSelector(o.$uKb))));
						const D = this.O.lookupKeybinding(this.action.id)?.getLabel(),
							M = D ? ` (${D})` : "",
							N = this.action.label + M;
						this.n.push(
							this.P.setupManagedHover((0, s.$cib)("mouse"), this.c, N),
						),
							this.c.setAttribute("role", "button"),
							this.U(N),
							this.n.push(
								w.$0fb(this.c, w.$$gb.CLICK, () => {
									this.c.blur(),
										this.J.state !== r.State.Initializing &&
											this.actionRunner.run(this.action, this.I);
								}),
							),
							this.n.push(
								w.$0fb(this.c, w.$$gb.MOUSE_DOWN, (B) => {
									this.action.enabled &&
										B.button === 0 &&
										this.c.classList.add("active");
								}),
							),
							this.n.push(
								w.$0fb(this.c, w.$$gb.MOUSE_UP, () => {
									this.c.classList.remove("active");
								}),
							),
							this.n.push(
								w.$0fb(this.c, w.$$gb.MOUSE_OUT, () => {
									this.c.classList.remove("active");
								}),
							),
							this.n.push(
								w.$0fb(this.c, w.$$gb.KEY_DOWN, (B) => {
									const U = new E.$7fb(B);
									U.equals(i.KeyCode.RightArrow) &&
										((this.c.tabIndex = -1),
										this.g.focus(),
										U.stopPropagation());
								}),
							),
							this.n.push(
								this.g.onDidSelect(async (B) => {
									const U = this.h[B.index];
									(U.handler ? await U.handler() : !1)
										? (this.r = B.index)
										: this.g.select(this.r);
								}),
							);
						const A = I(".configuration");
						this.g.render(w.$fhb(L, A)),
							this.n.push(
								w.$0fb(A, w.$$gb.KEY_DOWN, (B) => {
									const U = new E.$7fb(B);
									U.equals(i.KeyCode.LeftArrow) &&
										(this.g.setFocusable(!1),
										(this.c.tabIndex = 0),
										this.c.focus(),
										U.stopPropagation());
								}),
							),
							(this.b.style.border = `1px solid ${(0, a.$rP)(a.$bS)}`),
							(A.style.borderLeft = `1px solid ${(0, a.$rP)(a.$bS)}`),
							(this.b.style.backgroundColor = (0, a.$rP)(a.$$R));
						const R = this.J.getConfigurationManager(),
							O = () =>
								R.getDynamicProviders().then((B) => {
									B.length !== this.y.length && ((this.y = B), this.S());
								});
						this.n.push(R.onDidChangeConfigurationProviders(O)), O(), this.S();
					}
					setActionContext(L) {
						this.I = L;
					}
					isEnabled() {
						return !0;
					}
					focus(L) {
						L ? this.g.focus() : ((this.c.tabIndex = 0), this.c.focus());
					}
					blur() {
						(this.c.tabIndex = -1), this.g.blur(), this.b.blur();
					}
					setFocusable(L) {
						L
							? (this.c.tabIndex = 0)
							: ((this.c.tabIndex = -1), this.g.setFocusable(!1));
					}
					dispose() {
						(this.n = (0, n.$Vc)(this.n)), super.dispose();
					}
					S() {
						(this.r = 0), (this.h = []);
						const L = this.J.getConfigurationManager(),
							D = this.N.getWorkbenchState() === c.WorkbenchState.WORKSPACE;
						let M;
						const N = [];
						L.getAllConfigurations().forEach(
							({ launch: A, name: R, presentation: O }) => {
								M !== O?.group &&
									((M = O?.group),
									this.h.length &&
										(this.h.push({
											label: S.a,
											handler: () => Promise.resolve(!1),
										}),
										N.push(this.h.length - 1))),
									R === L.selectedConfiguration.name &&
										A === L.selectedConfiguration.launch &&
										(this.r = this.h.length);
								const B = D ? `${R} (${A.name})` : R;
								this.h.push({
									label: B,
									handler: async () => (await L.selectConfiguration(A, R), !0),
								});
							},
						),
							L.getRecentDynamicConfigurations()
								.slice(0, 3)
								.forEach(({ name: A, type: R }) => {
									R === L.selectedConfiguration.type &&
										L.selectedConfiguration.name === A &&
										(this.r = this.h.length),
										this.h.push({
											label: A,
											handler: async () => (
												await L.selectConfiguration(void 0, A, void 0, {
													type: R,
												}),
												!0
											),
										});
								}),
							this.h.length === 0 &&
								this.h.push({
									label: t.localize(5399, null),
									handler: async () => !1,
								}),
							this.h.push({ label: S.a, handler: () => Promise.resolve(!1) }),
							N.push(this.h.length - 1),
							this.y.forEach((A) => {
								this.h.push({
									label: `${A.label}...`,
									handler: async () => {
										const R = await A.pick();
										return R
											? (await L.selectConfiguration(
													R.launch,
													R.config.name,
													R.config,
													{ type: A.type },
												),
												!0)
											: !1;
									},
								});
							}),
							L.getLaunches()
								.filter((A) => !A.hidden)
								.forEach((A) => {
									const R = D
										? t.localize(5400, null, A.name)
										: t.localize(5401, null);
									this.h.push({
										label: R,
										handler: async () => (
											await this.M.executeCommand(g.$XGc, A.uri.toString()), !1
										),
									});
								}),
							this.g.setOptions(
								this.h.map((A, R) => ({
									text: A.label,
									isDisabled: N.indexOf(R) !== -1,
								})),
								this.r,
							);
					}
					U(L) {
						let D = L,
							M;
						this.L.getValue(y.AccessibilityVerbositySettingId.Debug) &&
							(M =
								this.O.lookupKeybinding(
									$.AccessibilityCommandId.OpenAccessibilityHelp,
									this.Q,
								)?.getLabel() ?? void 0),
							M
								? (D = t.localize(5402, null, D, M))
								: (D = t.localize(5403, null, D)),
							(this.c.ariaLabel = D);
					}
				};
				(e.$yJc = T),
					(e.$yJc =
						T =
						S =
							Ne(
								[
									j(3, r.$75),
									j(4, d.$gj),
									j(5, m.$ek),
									j(6, c.$Vi),
									j(7, h.$Wxb),
									j(8, f.$uZ),
									j(9, l.$Uyb),
									j(10, v.$6j),
								],
								T,
							));
				let P = class extends p.$ajb {
					constructor(L, D, M, N, A) {
						super(null, L, [], -1, N, b.$Fyb, {
							ariaLabel: t.localize(5404, null),
						}),
							(this.a = M),
							(this.y = A),
							this.D(
								this.a.getViewModel().onDidFocusSession(() => {
									const O = this.L();
									if (O) {
										const B = this.M().indexOf(O);
										this.select(B);
									}
								}),
							),
							this.D(
								this.a.onDidNewSession((O) => {
									const B = [];
									B.push(O.onDidChangeName(() => this.J())),
										B.push(O.onDidEndAdapter(() => (0, n.$Vc)(B))),
										this.J();
								}),
							),
							this.M().forEach((O) => {
								this.D(O.onDidChangeName(() => this.J()));
							}),
							this.D(this.a.onDidEndSession(() => this.J()));
						const R = D ? this.N(D) : void 0;
						this.J(R);
					}
					r(L, D) {
						return this.M()[D];
					}
					J(L) {
						L || (L = this.L());
						const D = this.M(),
							M = D.map((N) => {
								const A = N.getLabel();
								return N.parentSession ? `\xA0\xA0${A}` : A;
							});
						this.setOptions(
							M.map((N) => ({ text: N })),
							L ? D.indexOf(L) : void 0,
						);
					}
					L() {
						const L = this.a.getViewModel().focusedSession;
						return L ? this.N(L) : void 0;
					}
					M() {
						const L = this.y.getValue("debug").showSubSessionsInToolBar,
							D = this.a.getModel().getSessions();
						return L ? D : D.filter((M) => !M.parentSession);
					}
					N(L) {
						const D = this.y.getValue("debug").showSubSessionsInToolBar;
						for (; L.parentSession && !D; ) L = L.parentSession;
						return L;
					}
				};
				(e.$zJc = P),
					(e.$zJc = P = Ne([j(2, r.$75), j(3, h.$Wxb), j(4, d.$gj)], P));
			},
		),
		define(
			de[3818],
			he([1, 0, 132, 4, 31, 392, 89, 425, 112]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$qQc = void 0);
				let r = class extends E.$GLb {
					constructor(a, h, c) {
						super(d.$6Hc, { canAcceptInBackground: !0 }),
							(this.a = a),
							(this.b = h),
							(this.h = c);
					}
					g(a, h, c) {
						const n = [];
						this.a
							.getModel()
							.getSessions(!0)
							.filter((p) => p.hasSeparateRepl())
							.forEach((p, o) => {
								const f = this.m(p, o, a);
								f && n.push(f);
							}),
							n.length > 0 && n.push({ type: "separator" });
						const g = (0, i.localize)(5470, null);
						return (
							n.push({
								label: `$(plus) ${g}`,
								ariaLabel: g,
								accept: () => this.h.executeCommand(d.$hHc),
							}),
							n
						);
					}
					m(a, h, c) {
						const n = a.name,
							g = (0, t.$Zk)(c, n, !0);
						if (g)
							return {
								label: n,
								highlights: { label: g },
								accept: (p, o) => {
									this.a.focusStackFrame(void 0, void 0, a, { explicit: !0 }),
										this.b.isViewVisible(m.$Y4) || this.b.openView(m.$Y4, !0);
								},
							};
					}
				};
				(e.$qQc = r),
					(e.$qQc = r = Ne([j(0, m.$75), j(1, C.$HMb), j(2, w.$ek)], r));
			},
		),
		define(
			de[3819],
			he([1, 0, 392, 4, 40, 112, 25, 31, 132, 425, 352, 26]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$KQc = void 0);
				let h = class extends t.$GLb {
					constructor(n, g, p, o) {
						super(r.$5Hc, {
							noResultsPick: { label: (0, i.localize)(5559, null) },
						}),
							(this.a = n),
							(this.b = g),
							(this.h = p),
							(this.j = o);
					}
					async g(n) {
						const g = [];
						if (!this.a.getAdapterManager().hasEnabledDebuggers()) return [];
						g.push({ type: "separator", label: "launch.json" });
						const p = this.a.getConfigurationManager();
						let o;
						for (const s of p.getAllConfigurations()) {
							const l = (0, m.$Zk)(n, s.name, !0);
							l &&
								(o !== s.presentation?.group &&
									(g.push({ type: "separator" }), (o = s.presentation?.group)),
								g.push({
									label: s.name,
									description:
										this.b.getWorkbenchState() === C.WorkbenchState.WORKSPACE
											? s.launch.name
											: "",
									highlights: { label: l },
									buttons: [
										{
											iconClass: a.ThemeIcon.asClassName(u.$vKb),
											tooltip: (0, i.localize)(5560, null),
										},
									],
									trigger: () => (
										s.launch.openConfigFile({ preserveFocus: !1 }),
										t.TriggerAction.CLOSE_PICKER
									),
									accept: async () => {
										await p.selectConfiguration(s.launch, s.name);
										try {
											await this.a.startDebugging(s.launch, void 0, {
												startedByUser: !0,
											});
										} catch (y) {
											this.j.error(y);
										}
									},
								}));
						}
						const f = await p.getDynamicProviders();
						f.length > 0 &&
							g.push({ type: "separator", label: (0, i.localize)(5561, null) }),
							p
								.getRecentDynamicConfigurations()
								.forEach(({ name: s, type: l }) => {
									const y = (0, m.$Zk)(n, s, !0);
									y &&
										g.push({
											label: s,
											highlights: { label: y },
											buttons: [
												{
													iconClass: a.ThemeIcon.asClassName(u.$xKb),
													tooltip: (0, i.localize)(5562, null),
												},
											],
											trigger: () => (
												p.removeRecentDynamicConfigurations(s, l),
												t.TriggerAction.CLOSE_PICKER
											),
											accept: async () => {
												await p.selectConfiguration(void 0, s, void 0, {
													type: l,
												});
												try {
													const { launch: $, getConfig: v } =
															p.selectedConfiguration,
														S = await v();
													await this.a.startDebugging($, S, {
														startedByUser: !0,
													});
												} catch ($) {
													this.j.error($);
												}
											},
										});
								}),
							f.forEach((s) => {
								g.push({
									label: `$(folder) ${s.label}...`,
									ariaLabel: (0, i.localize)(5563, null, s.label),
									accept: async () => {
										const l = await s.pick();
										l &&
											(await p.selectConfiguration(
												l.launch,
												l.config.name,
												l.config,
												{ type: s.type },
											),
											this.a.startDebugging(l.launch, l.config, {
												startedByUser: !0,
											}));
									},
								});
							});
						const b = p.getLaunches().filter((s) => !s.hidden);
						b.length > 0 &&
							g.push({ type: "separator", label: (0, i.localize)(5564, null) });
						for (const s of b) {
							const l =
								this.b.getWorkbenchState() === C.WorkbenchState.WORKSPACE
									? (0, i.localize)(5565, null, s.name)
									: (0, i.localize)(5566, null);
							g.push({
								label: l,
								description:
									this.b.getWorkbenchState() === C.WorkbenchState.WORKSPACE
										? s.name
										: "",
								highlights: { label: (0, m.$Zk)(n, l, !0) ?? void 0 },
								accept: () => this.h.executeCommand(r.$XGc, s.uri.toString()),
							});
						}
						return g;
					}
				};
				(e.$KQc = h),
					(e.$KQc = h =
						Ne([j(0, E.$75), j(1, C.$Vi), j(2, d.$ek), j(3, w.$4N)], h));
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	define(
		de[3820],
		he([
			1, 0, 50, 15, 33, 163, 6, 3, 111, 4, 31, 10, 57, 90, 84, 21, 425, 555,
			424, 419, 89,
		]),
		function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f, b, s) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$ZQc = e.TaskRunResult = void 0),
				(m = xi(m)),
				(r = mt(r));
			const l = (P, k) => C.Event.once(C.Event.filter(P, k));
			var y;
			(function (P) {
				(P[(P.Failure = 0)] = "Failure"), (P[(P.Success = 1)] = "Success");
			})(y || (e.TaskRunResult = y = {}));
			const $ = "debug.taskerrorchoice",
				v = r.localize(5638, null),
				S = r.localize(5639, null),
				I = r.localize(5640, null);
			let T = class {
				constructor(k, L, D, M, N, A, R, O) {
					(this.b = k),
						(this.c = L),
						(this.d = D),
						(this.f = M),
						(this.g = N),
						(this.h = A),
						(this.i = R),
						(this.j = O),
						(this.a = new w.$Ce());
				}
				cancel() {
					this.a.dispose(!0), (this.a = new w.$Ce());
				}
				dispose() {
					this.a.dispose(!0);
				}
				async runTaskAndCheckErrors(k, L) {
					try {
						const D = await this.runTask(k, L, this.a.token);
						if (D && (D.exitCode === void 0 || D.cancelled)) return y.Failure;
						const M = L
								? this.c.read({ severities: c.MarkerSeverity.Error, take: 2 })
										.length
								: 0,
							N = D && D.exitCode === 0,
							A = D && D.exitCode !== 0,
							R = this.d.getValue("debug").onTaskErrors;
						if (N || R === "debugAnyway" || (M === 0 && !A)) return y.Success;
						if (R === "showErrors")
							return (
								await this.f.openView(o.Markers.MARKERS_VIEW_ID, !0),
								Promise.resolve(y.Failure)
							);
						if (R === "abort") return Promise.resolve(y.Failure);
						const O = typeof L == "string" ? L : L ? L.name : "",
							B =
								M > 1
									? r.localize(5641, null, O)
									: M === 1
										? r.localize(5642, null, O)
										: D && typeof D.exitCode == "number"
											? r.localize(5643, null, O, D.exitCode)
											: r.localize(5644, null, O);
						let U;
						(function (q) {
							(q[(q.DebugAnyway = 1)] = "DebugAnyway"),
								(q[(q.ShowErrors = 2)] = "ShowErrors"),
								(q[(q.Cancel = 0)] = "Cancel");
						})(U || (U = {}));
						const { result: z, checkboxChecked: F } = await this.g.prompt({
								type: m.default.Warning,
								message: B,
								buttons: [
									{ label: S, run: () => U.DebugAnyway },
									{ label: r.localize(5645, null), run: () => U.ShowErrors },
								],
								cancelButton: { label: v, run: () => U.Cancel },
								checkbox: { label: r.localize(5646, null) },
							}),
							x = z === U.DebugAnyway,
							H = z === U.Cancel;
						return (
							F &&
								this.d.updateValue(
									"debug.onTaskErrors",
									z === U.DebugAnyway
										? "debugAnyway"
										: H
											? "abort"
											: "showErrors",
								),
							H
								? Promise.resolve(y.Failure)
								: x
									? y.Success
									: (await this.f.openView(o.Markers.MARKERS_VIEW_ID, !0),
										Promise.resolve(y.Failure))
						);
					} catch (D) {
						const M = this.b.configureAction(),
							N = JSON.parse(this.h.get($, g.StorageScope.WORKSPACE, "{}"));
						let A = -1,
							R;
						if (
							((function (O) {
								(O[(O.DebugAnyway = 0)] = "DebugAnyway"),
									(O[(O.ConfigureTask = 1)] = "ConfigureTask"),
									(O[(O.Cancel = 2)] = "Cancel");
							})(R || (R = {})),
							N[D.message] !== void 0)
						)
							A = N[D.message];
						else {
							const { result: O, checkboxChecked: B } = await this.g.prompt({
								type: m.default.Error,
								message: D.message,
								buttons: [
									{ label: r.localize(5647, null), run: () => R.DebugAnyway },
									{ label: M.label, run: () => R.ConfigureTask },
								],
								cancelButton: { run: () => R.Cancel },
								checkbox: { label: r.localize(5648, null) },
							});
							(A = O),
								B &&
									((N[D.message] = A),
									this.h.store(
										$,
										JSON.stringify(N),
										g.StorageScope.WORKSPACE,
										g.StorageTarget.MACHINE,
									));
						}
						return (
							A === R.ConfigureTask && (await M.run()),
							A === R.DebugAnyway ? y.Success : y.Failure
						);
					}
				}
				async runTask(k, L, D = this.a.token) {
					if (!L) return Promise.resolve(null);
					if (!k)
						return Promise.reject(
							new Error(
								r.localize(5649, null, typeof L == "string" ? L : L.type),
							),
						);
					const M = await this.b.getTask(k, L);
					if (!M) {
						const x =
							typeof L == "string"
								? r.localize(5650, null, L)
								: r.localize(5651, null);
						return Promise.reject(
							(0, E.$zj)(x, [
								new t.$rj(p.$kHc, p.$PHc, void 0, !0, () =>
									this.i.executeCommand(p.$kHc),
								),
							]),
						);
					}
					let N = !1;
					const A = new d.$Zc(),
						R = (x) => x.getKey() ?? x.getMapKey(),
						O = R(M),
						B = new Promise((x) =>
							A.add(
								l(
									this.b.onDidStateChange,
									(H) =>
										(H.kind === f.TaskEventKind.Inactive ||
											(H.kind === f.TaskEventKind.ProcessEnded &&
												H.exitCode === void 0)) &&
										R(H.__task) === O,
								)((H) => {
									(N = !0),
										x(
											H.kind === f.TaskEventKind.ProcessEnded
												? { exitCode: H.exitCode }
												: null,
										);
								}),
							),
						);
					A.add(
						l(
							this.b.onDidStateChange,
							(x) =>
								(x.kind === f.TaskEventKind.Active ||
									x.kind === f.TaskEventKind.DependsOnStarted) &&
								R(x.__task) === O,
						)(() => {
							N = !0;
						}),
					);
					const U = A.add(new C.$re());
					A.add(
						l(
							this.b.onDidStateChange,
							(x) =>
								x.kind === f.TaskEventKind.AcquiredInput && R(x.__task) === O,
						)(() => U.fire()),
					);
					const z = this.b.getActiveTasks().then(async (x) => {
							if (x.find((q) => R(q) === O))
								return (
									U.fire(),
									(await this.b.getBusyTasks()).find((V) => R(V) === O)
										? ((N = !0), B)
										: Promise.resolve(null)
								);
							const H = this.b.run(M);
							return M.configurationProperties.isBackground
								? B
								: H.then((q) => q ?? null);
						}),
						F = new Promise((x, H) => {
							z.then(
								(q) => {
									(N = !0), x(q);
								},
								(q) => H(q),
							),
								A.add(
									D.onCancellationRequested(() => {
										x({ exitCode: void 0, cancelled: !0 }),
											this.b.terminate(M).catch(() => {});
									}),
								),
								A.add(
									U.event(() => {
										const q = M.configurationProperties.isBackground
											? 5e3
											: 1e4;
										A.add(
											(0, i.$Oh)(() => {
												if (!N) {
													const V = r.localize(
														5652,
														null,
														typeof L == "string" ? L : JSON.stringify(L),
													);
													H({ severity: m.default.Error, message: V });
												}
											}, q),
										),
											A.add(
												(0, i.$Oh)(() => {
													const V = r.localize(
															5653,
															null,
															M.configurationProperties.name,
														),
														G = [I, v],
														K = M instanceof f.$e4 || M instanceof f.$f4;
													K && G.splice(1, 0, r.localize(5654, null)),
														this.j.withProgress(
															{
																location: n.ProgressLocation.Notification,
																title: V,
																buttons: G,
															},
															() => F.catch(() => {}),
															(J) => {
																J === void 0 ||
																	(J === 0
																		? x({ exitCode: 0 })
																		: (x({ exitCode: void 0, cancelled: !0 }),
																			this.b.terminate(M).catch(() => {}),
																			K && J === 1 && this.b.openConfig(M)));
															},
														);
												}, 1e4),
											);
									}),
								);
						});
					return F.finally(() => A.dispose());
				}
			};
			(e.$ZQc = T),
				(e.$ZQc = T =
					Ne(
						[
							j(0, b.$Zpc),
							j(1, c.$aM),
							j(2, a.$gj),
							j(3, s.$HMb),
							j(4, h.$GO),
							j(5, g.$lq),
							j(6, u.$ek),
							j(7, n.$8N),
						],
						T,
					));
		},
	);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	define(
		de[3821],
		he([
			1, 0, 127, 50, 24, 15, 33, 163, 29, 6, 3, 82, 111, 9, 47, 56, 4, 31, 10,
			8, 767, 57, 22, 5, 40, 63, 68, 25, 174, 44, 60, 3422, 425, 3681, 3051,
			3685, 3820, 112, 3052, 300, 826, 3683, 3053, 396, 3055, 797, 220, 379,
			260, 18, 53, 96, 52, 142, 89,
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
			B,
			U,
			z,
			F,
			x,
			H,
			q,
			V,
			G,
			K,
			J,
			W,
			X,
			Y,
			ie,
			ne,
			ee,
			_,
		) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$3Qc = void 0),
				(e.$4Qc = Q),
				(t = mt(t)),
				(m = mt(m)),
				(h = xi(h)),
				(p = mt(p));
			let te = class {
				constructor(
					re,
					le,
					oe,
					ae,
					pe,
					$e,
					ye,
					ue,
					fe,
					me,
					ve,
					ge,
					be,
					Ce,
					Le,
					Fe,
					Oe,
					xe,
					He,
					Ke,
					Je,
				) {
					(this.J = re),
						(this.K = le),
						(this.L = oe),
						(this.M = ae),
						(this.N = pe),
						(this.O = $e),
						(this.P = ye),
						(this.Q = ue),
						(this.R = fe),
						(this.S = me),
						(this.T = ve),
						(this.U = ge),
						(this.V = be),
						(this.W = Ce),
						(this.X = Le),
						(this.Y = Fe),
						(this.Z = Oe),
						(this.$ = xe),
						(this.ab = He),
						(this.bb = Ke),
						(this.cb = Je),
						(this.g = new Set()),
						(this.q = new u.$Zc()),
						(this.C = !1),
						(this.F = new Map()),
						(this.I = !1),
						(this.B = new Set()),
						(this.a = new r.$re()),
						(this.b = new r.$re()),
						(this.d = new r.$re()),
						(this.f = new r.$re()),
						(this.p = this.T.createInstance(D.$TQc, {
							onDidNewSession: this.onDidNewSession,
						})),
						this.q.add(this.p),
						(this.o = this.T.createInstance(N.$UQc, this.p)),
						this.q.add(this.o),
						(this.h = this.q.add(this.T.createInstance(x.$B3))),
						(this.H = this.h.loadChosenEnvironments()),
						(this.i = this.T.createInstance(z.$Z3, this.h)),
						(this.k = this.T.createInstance(H.$1Qc, this.i)),
						(this.j = new V.$2Qc(fe)),
						(this.m = this.T.createInstance(O.$ZQc)),
						this.q.add(this.V.onDidFilesChange((Te) => this.vb(Te))),
						this.q.add(this.S.onWillShutdown(this.dispose, this)),
						this.q.add(
							this.X.onAttachSession((Te) => {
								const Ee = this.i.getSession(Te.sessionId, !0);
								Ee &&
									((Ee.configuration.request = "attach"),
									(Ee.configuration.port = Te.port),
									Ee.setSubId(Te.subId),
									this.lb(Ee));
							}),
						),
						this.q.add(
							this.X.onTerminateSession((Te) => {
								const Ee = this.i.getSession(Te.sessionId);
								Ee && Ee.subId === Te.subId && Ee.disconnect();
							}),
						),
						this.q.add(
							this.j.onDidFocusStackFrame(() => {
								this.hb();
							}),
						),
						this.q.add(
							this.j.onDidFocusSession((Te) => {
								this.hb(),
									Te && this.setExceptionBreakpointFallbackSession(Te.getId());
							}),
						),
						this.q.add(
							r.Event.any(
								this.p.onDidRegisterDebugger,
								this.o.onDidSelectConfiguration,
							)(() => {
								const Te =
									this.state !== B.State.Inactive ||
									(this.o.getAllConfigurations().length > 0 &&
										this.p.hasEnabledDebuggers())
										? "default"
										: "simple";
								this.w.set(Te), this.h.storeDebugUxState(Te);
							}),
						),
						this.q.add(
							this.i.onDidChangeCallStack(() => {
								const Te = this.i
									.getSessions()
									.filter((Ee) => !Ee.parentSession).length;
								if ((this.G?.dispose(), Te > 0)) {
									const Ee = this.M.getViewContainerByViewId(B.$T4);
									Ee &&
										(this.G = this.Y.showViewContainerActivity(Ee.id, {
											badge: new W.$8qc(Te, (Ie) =>
												Ie === 1
													? p.localize(5567, null)
													: p.localize(5568, null, Ie),
											),
										}));
								}
							}),
						),
						this.q.add(
							re.onDidActiveEditorChange(() => {
								this.R.bufferChangeEvents(() => {
									re.activeEditor === G.$G3.instance
										? this.A.set(!0)
										: this.A?.reset();
								});
							}),
						),
						this.q.add(
							this.S.onBeforeShutdown(() => {
								for (const Te of re.editors)
									Te.resource?.scheme === B.$55 && Te.dispose();
							}),
						),
						this.q.add(
							ge.onWillStop((Te) => {
								Te.veto(
									this.i.getSessions().length > 0,
									p.localize(5569, null),
								);
							}),
						),
						this.db(fe);
				}
				db(re) {
					queueMicrotask(() => {
						re.bufferChangeEvents(() => {
							(this.r = B.$Z4.bindTo(re)),
								(this.u = B.$24.bindTo(re)),
								(this.y = B.$64.bindTo(re)),
								(this.v = B.$74.bindTo(re)),
								(this.x = B.$34.bindTo(re)),
								(this.w = B.$54.bindTo(re)),
								this.w.set(this.h.loadDebugUxState()),
								(this.z = B.$x5.bindTo(re)),
								(this.A = B.$V5.bindTo(re));
						});
						const le = () =>
							this.z.set(
								!!(
									this.i.getBreakpoints().length ||
									this.i.getDataBreakpoints().length ||
									this.i.getFunctionBreakpoints().length
								),
							);
						le(), this.q.add(this.i.onDidChangeBreakpoints(() => le()));
					});
				}
				getModel() {
					return this.i;
				}
				getViewModel() {
					return this.j;
				}
				getConfigurationManager() {
					return this.o;
				}
				getAdapterManager() {
					return this.p;
				}
				sourceIsNotAvailable(re) {
					this.i.sourceIsNotAvailable(re);
				}
				dispose() {
					this.q.dispose();
				}
				get state() {
					const re = this.j.focusedSession;
					return re
						? re.state
						: this.C
							? B.State.Initializing
							: B.State.Inactive;
				}
				get initializingOptions() {
					return this.D;
				}
				eb(re) {
					this.C || ((this.C = !0), (this.D = re), this.hb());
				}
				fb() {
					this.C && ((this.C = !1), (this.D = void 0), this.hb());
				}
				gb(re) {
					if (re) {
						const le = this.F.get(re);
						le && (le.cancel(), this.F.delete(re));
					} else this.F.forEach((le) => le.cancel()), this.F.clear();
				}
				hb() {
					const re = this.state;
					this.E !== re &&
						(this.R.bufferChangeEvents(() => {
							this.u.set((0, B.$45)(re)), this.v.set(re !== B.State.Inactive);
							const le =
								(re !== B.State.Inactive && re !== B.State.Initializing) ||
								(this.p.hasEnabledDebuggers() &&
									this.o.selectedConfiguration.name)
									? "default"
									: "simple";
							this.w.set(le), this.h.storeDebugUxState(le);
						}),
						(this.E = re),
						this.a.fire(re));
				}
				get onDidChangeState() {
					return this.a.event;
				}
				get onDidNewSession() {
					return this.b.event;
				}
				get onWillNewSession() {
					return this.d.event;
				}
				get onDidEndSession() {
					return this.f.event;
				}
				ib() {
					this.I ||
						(this.q.add(this.V.registerProvider(B.$55, new A.$VQc(this))),
						(this.I = !0));
				}
				setIsRecording(re) {
					this.x.set(re);
				}
				getIsRecording() {
					return this.x.get() ?? !1;
				}
				async startDebugging(re, le, oe, ae = !oe?.parentSession) {
					const pe =
						oe && oe.noDebug ? p.localize(5570, null) : p.localize(5571, null);
					if (!(await this.ab.requestWorkspaceTrust({ message: pe })))
						return !1;
					this.ib(), this.eb(oe), this.y.set(!0);
					try {
						await this.U.activateByEvent("onDebug"),
							ae && (await (0, q.$w3)(this.W, this.J)),
							await this.U.whenInstalledExtensionsRegistered();
						let ye, ue;
						if (
							(le || (le = this.o.selectedConfiguration.name),
							typeof le == "string" && re
								? ((ye = re.getConfiguration(le)), (ue = re.getCompound(le)))
								: typeof le != "string" && (ye = le),
							ue)
						) {
							if (!ue.configurations) throw new Error(p.localize(5572, null));
							if (
								ue.preLaunchTask &&
								(await this.m.runTaskAndCheckErrors(
									re?.workspace || this.Q.getWorkspace(),
									ue.preLaunchTask,
								)) === O.TaskRunResult.Failure
							)
								return this.fb(), !1;
							ue.stopAll && (oe = { ...oe, compoundRoot: new U.$j3() });
							const ve = (
								await Promise.all(
									ue.configurations.map((ge) => {
										const be = typeof ge == "string" ? ge : ge.name;
										if (be === ue.name) return Promise.resolve(!1);
										let Ce;
										if (typeof ge == "string") {
											const Le = this.o
												.getLaunches()
												.filter((Fe) => !!Fe.getConfiguration(be));
											if (Le.length === 1) Ce = Le[0];
											else if (re && Le.length > 1 && Le.indexOf(re) >= 0)
												Ce = re;
											else
												throw new Error(
													Le.length === 0
														? p.localize(5573, null, be)
														: p.localize(5574, null, be),
												);
										} else if (ge.folder) {
											const Le = this.o
												.getLaunches()
												.filter(
													(Fe) =>
														Fe.workspace &&
														Fe.workspace.name === ge.folder &&
														!!Fe.getConfiguration(ge.name),
												);
											if (Le.length === 1) Ce = Le[0];
											else
												throw new Error(
													p.localize(5575, null, ge.folder, ge.name, ue.name),
												);
										}
										return this.jb(Ce, Ce.getConfiguration(be), oe);
									}),
								)
							).every((ge) => !!ge);
							return this.fb(), ve;
						}
						if (le && !ye) {
							const me = re
								? p.localize(5576, null, typeof le == "string" ? le : le.name)
								: p.localize(5577, null);
							throw new Error(me);
						}
						const fe = await this.jb(re, ye, oe);
						return this.fb(), fe;
					} catch (ye) {
						return this.N.error(ye), this.fb(), Promise.reject(ye);
					}
				}
				async jb(re, le, oe) {
					let ae;
					le ? (ae = le.type) : (le = Object.create(null)),
						((oe && oe.noDebug) ||
							(oe &&
								typeof oe.noDebug > "u" &&
								oe.parentSession &&
								oe.parentSession.configuration.noDebug)) &&
							(le.noDebug = !0);
					const pe = (0, a.$vo)(le);
					let $e, ye;
					ae ||
						((ye = this.J.activeEditor),
						ye && ye.resource && (ae = this.H[ye.resource.toString()]),
						ae ||
							(($e = await this.p.guessDebugger(!1)), $e && (ae = $e.type)));
					const ue = new C.$Ce(),
						fe = (0, n.$9g)();
					this.F.set(fe, ue);
					const me = await this.o.resolveConfigurationByProviders(
						re && re.workspace ? re.workspace.uri : void 0,
						ae,
						le,
						ue.token,
					);
					if (me && me.type)
						try {
							let ve = await this.nb(re, me);
							if (!ve || ue.token.isCancellationRequested) return !1;
							const ge = re?.workspace || this.Q.getWorkspace();
							if (
								(await this.m.runTaskAndCheckErrors(ge, ve.preLaunchTask)) ===
								O.TaskRunResult.Failure
							)
								return !1;
							const Ce =
								await this.o.resolveDebugConfigurationWithSubstitutedVariables(
									re && re.workspace ? re.workspace.uri : void 0,
									ve.type,
									ve,
									ue.token,
								);
							if (!Ce)
								return (
									re &&
										ae &&
										Ce === null &&
										!ue.token.isCancellationRequested &&
										(await re.openConfigFile(
											{ preserveFocus: !0, type: ae },
											ue.token,
										)),
									!1
								);
							ve = Ce;
							const Le = this.p.getDebugger(ve.type);
							if (!Le || (me.request !== "attach" && me.request !== "launch")) {
								let Oe;
								me.request !== "attach" && me.request !== "launch"
									? (Oe = me.request
											? p.localize(5578, null, "request", me.request)
											: p.localize(5579, null, "request"))
									: (Oe = ve.type
											? p.localize(5580, null, ve.type)
											: p.localize(5581, null));
								const xe = [];
								return (
									xe.push(
										new i.$rj(
											"installAdditionalDebuggers",
											p.localize(5582, null, ve.type),
											void 0,
											!0,
											async () =>
												this.Z.executeCommand(
													"debug.installAdditionalDebuggers",
													ve?.type,
												),
										),
									),
									await this.ob(Oe, xe),
									!1
								);
							}
							if (!Le.enabled)
								return await this.ob((0, B.$Y5)(Le.type), []), !1;
							const Fe = await this.kb(
								fe,
								re?.workspace,
								{ resolved: ve, unresolved: pe },
								oe,
							);
							return (
								Fe &&
									$e &&
									ye &&
									ye.resource &&
									((this.H[ye.resource.toString()] = $e.type),
									this.h.storeChosenEnvironments(this.H)),
								Fe
							);
						} catch (ve) {
							return (
								ve && ve.message
									? await this.ob(ve.message)
									: this.Q.getWorkbenchState() === T.WorkbenchState.EMPTY &&
										(await this.ob(p.localize(5583, null))),
								re &&
									!ue.token.isCancellationRequested &&
									(await re.openConfigFile({ preserveFocus: !0 }, ue.token)),
								!1
							);
						}
					return (
						re &&
							ae &&
							me === null &&
							!ue.token.isCancellationRequested &&
							(await re.openConfigFile(
								{ preserveFocus: !0, type: ae },
								ue.token,
							)),
						!1
					);
				}
				async kb(re, le, oe, ae) {
					const pe = this.T.createInstance(R.$XQc, re, oe, le, this.i, ae);
					if (
						ae?.startedByUser &&
						this.i
							.getSessions()
							.some((ye) => ye.getLabel() === pe.getLabel()) &&
						oe.resolved.suppressMultipleSessionWarning !== !0 &&
						!(
							await this.O.confirm({
								message: p.localize(5584, null, pe.getLabel()),
							})
						).confirmed
					)
						return !1;
					this.i.addSession(pe), this.d.fire(pe);
					const $e = this.W.getValue("debug").openDebug;
					!oe.resolved.noDebug &&
						($e === "openOnSessionStart" ||
							($e !== "neverOpen" && this.j.firstSessionStart)) &&
						!pe.suppressDebugView &&
						(await this.K.openPaneComposite(
							B.$Q4,
							L.ViewContainerLocation.Sidebar,
						));
					try {
						await this.lb(pe);
						const ye =
							pe.configuration.internalConsoleOptions ||
							this.W.getValue("debug").internalConsoleOptions;
						(ye === "openOnSessionStart" ||
							(this.j.firstSessionStart && ye === "openOnFirstSessionStart")) &&
							this.L.openView(B.$Y4, !1),
							(this.j.firstSessionStart = !1);
						const ue = this.W.getValue("debug").showSubSessionsInToolBar,
							fe = this.i.getSessions();
						return (
							(ue ? fe : fe.filter((ve) => !ve.parentSession)).length > 1 &&
								this.j.setMultiSessionView(!0),
							this.b.fire(pe),
							!0
						);
					} catch (ye) {
						if (
							m.$8(ye) ||
							(pe &&
								pe.getReplElements().length > 0 &&
								this.L.openView(B.$Y4, !1),
							pe.configuration &&
								pe.configuration.request === "attach" &&
								pe.configuration.__autoAttach)
						)
							return !1;
						const ue = ye instanceof Error ? ye.message : ye;
						return (
							ye.showUser !== !1 &&
								(await this.ob(ue, (0, d.$yj)(ye) ? ye.actions : [])),
							!1
						);
					}
				}
				async lb(re, le = !1) {
					this.mb(re);
					const oe = this.p.getDebugger(re.configuration.type);
					try {
						await re.initialize(oe), await re.launchOrAttach(re.configuration);
						const ae =
							!!re.root &&
							!!this.W.getValue("launch", { resource: re.root.uri });
						await this.k.logDebugSessionStart(oe, ae),
							(le ||
								!this.j.focusedSession ||
								(re.parentSession === this.j.focusedSession && re.compact)) &&
								(await this.focusStackFrame(void 0, void 0, re));
					} catch (ae) {
						return (
							this.j.focusedSession === re &&
								(await this.focusStackFrame(void 0)),
							Promise.reject(ae)
						);
					}
				}
				mb(re) {
					const le = new u.$Zc();
					this.q.add(le);
					const oe = le.add(
						new E.$Yh(() => {
							re.state === B.State.Running &&
								this.j.focusedSession === re &&
								this.j.setFocus(void 0, this.j.focusedThread, re, !1);
						}, 200),
					);
					le.add(
						re.onDidChangeState(() => {
							re.state === B.State.Running &&
								this.j.focusedSession === re &&
								oe.schedule(),
								re === this.j.focusedSession && this.hb();
						}),
					),
						le.add(
							this.onDidEndSession((ae) => {
								ae.session === re && this.q.delete(le);
							}),
						),
						le.add(
							re.onDidEndAdapter(async (ae) => {
								ae &&
									(ae.error &&
										this.N.error(
											p.localize(
												5585,
												null,
												ae.error.message || ae.error.toString(),
											),
										),
									this.k.logDebugSessionStop(re, ae));
								const pe = (0, q.$o3)(re);
								if (
									(pe &&
										pe.state === B.State.Running &&
										pe.configuration.noDebug &&
										this.X.close(pe.getId()),
									re.configuration.postDebugTask)
								) {
									const ye = re.root ?? this.Q.getWorkspace();
									try {
										await this.m.runTask(ye, re.configuration.postDebugTask);
									} catch (ue) {
										this.N.error(ue);
									}
								}
								if (
									(this.fb(),
									this.gb(re.getId()),
									this.W.getValue("debug").closeReadonlyTabsOnEnd)
								) {
									const ye = this.J.getEditors(
										k.EditorsOrder.SEQUENTIAL,
									).filter(
										({ editor: ue }) =>
											ue.resource?.scheme === B.$25 &&
											re.getId() ===
												F.$z3.getEncodedDebugData(ue.resource).sessionId,
									);
									this.J.closeEditors(ye);
								}
								this.f.fire({ session: re, restart: this.g.has(re) });
								const $e = this.j.focusedSession;
								if ($e && $e.getId() === re.getId()) {
									const {
										session: ye,
										thread: ue,
										stackFrame: fe,
									} = Q(this.i, void 0, void 0, void 0, $e);
									this.j.setFocus(fe, ue, ye, !1);
								}
								if (
									this.i.getSessions().length === 0 &&
									(this.j.setMultiSessionView(!1),
									this.P.isVisible(ie.Parts.SIDEBAR_PART) &&
										this.W.getValue("debug").openExplorerOnEnd &&
										this.K.openPaneComposite(
											K.$vUb,
											L.ViewContainerLocation.Sidebar,
										),
									this.i
										.getDataBreakpoints()
										.filter((ue) => !ue.canPersist)
										.forEach((ue) => this.i.removeDataBreakpoints(ue.getId())),
									this.W.getValue("debug").console.closeOnEnd)
								) {
									const ue = this.M.getViewContainerByViewId(B.$Y4);
									ue &&
										this.L.isViewContainerVisible(ue.id) &&
										this.L.closeViewContainer(ue.id);
								}
								this.i.removeExceptionBreakpointsForSession(re.getId());
							}),
						);
				}
				async restartSession(re, le) {
					re.saveBeforeRestart && (await (0, q.$w3)(this.W, this.J));
					const oe = !!le,
						ae = async () => {
							if (oe) return Promise.resolve(O.TaskRunResult.Success);
							const ge = re.root || this.Q.getWorkspace();
							await this.m.runTask(ge, re.configuration.preRestartTask),
								await this.m.runTask(ge, re.configuration.postDebugTask);
							const be = await this.m.runTaskAndCheckErrors(
								ge,
								re.configuration.preLaunchTask,
							);
							return be !== O.TaskRunResult.Success
								? be
								: this.m.runTaskAndCheckErrors(
										ge,
										re.configuration.postRestartTask,
									);
						},
						pe = (0, q.$o3)(re);
					if (pe) {
						(await ae()) === O.TaskRunResult.Success &&
							this.X.reload(pe.getId());
						return;
					}
					let $e = !1,
						ye;
					const ue = re.root ? this.o.getLaunch(re.root.uri) : void 0;
					ue &&
						((ye = ue.getConfiguration(re.configuration.name)),
						ye &&
							!(0, a.$zo)(ye, re.unresolvedConfiguration) &&
							((ye.noDebug = re.configuration.noDebug), ($e = !0)));
					let fe = re.configuration;
					if (ue && $e && ye) {
						const ge = new C.$Ce();
						this.F.set(re.getId(), ge);
						const be = await this.o.resolveConfigurationByProviders(
							ue.workspace ? ue.workspace.uri : void 0,
							ye.type,
							ye,
							ge.token,
						);
						be
							? ((fe = await this.nb(ue, be)),
								fe &&
									!ge.token.isCancellationRequested &&
									(fe =
										await this.o.resolveDebugConfigurationWithSubstitutedVariables(
											ue && ue.workspace ? ue.workspace.uri : void 0,
											fe.type,
											fe,
											ge.token,
										)))
							: (fe = be);
					}
					fe && re.setConfiguration({ resolved: fe, unresolved: ye }),
						(re.configuration.__restart = le);
					const me = async (ge) => {
						this.g.add(re);
						let be = !1;
						try {
							be = (await ge()) !== !1;
						} catch (Ce) {
							throw ((be = !1), Ce);
						} finally {
							this.g.delete(re),
								be || this.f.fire({ session: re, restart: !1 });
						}
					};
					if (re.correlatedTestRun) {
						re.correlatedTestRun.completedAt ||
							(this.cb.cancelTestRun(re.correlatedTestRun.id),
							await r.Event.toPromise(re.correlatedTestRun.onComplete)),
							this.cb.runResolvedTests(re.correlatedTestRun.request);
						return;
					}
					if (re.capabilities.supportsRestartRequest) {
						(await ae()) === O.TaskRunResult.Success &&
							(await me(async () => (await re.restart(), !0)));
						return;
					}
					const ve =
						!!this.j.focusedSession &&
						re.getId() === this.j.focusedSession.getId();
					return me(
						async () => (
							oe ? await re.disconnect(!0) : await re.terminate(!0),
							new Promise((ge, be) => {
								setTimeout(async () => {
									if ((await ae()) !== O.TaskRunResult.Success || !fe)
										return ge(!1);
									try {
										await this.lb(re, ve), this.b.fire(re), ge(!0);
									} catch (Le) {
										be(Le);
									}
								}, 300);
							})
						),
					);
				}
				async stopSession(re, le = !1, oe = !1) {
					if (re) return le ? re.disconnect(void 0, oe) : re.terminate();
					const ae = this.i.getSessions();
					return (
						ae.length === 0 &&
							(this.m.cancel(),
							await this.$.cancel(),
							this.fb(),
							this.gb(void 0)),
						Promise.all(
							ae.map((pe) => (le ? pe.disconnect(void 0, oe) : pe.terminate())),
						)
					);
				}
				async nb(re, le) {
					const oe = this.p.getDebugger(le.type);
					if (oe) {
						let ae;
						if (re && re.workspace) ae = re.workspace;
						else {
							const pe = this.Q.getWorkspace().folders;
							pe.length === 1 && (ae = pe[0]);
						}
						try {
							return await oe.substituteVariables(ae, le);
						} catch (pe) {
							this.ob(pe.message, void 0, !!re?.getConfiguration(le.name));
							return;
						}
					}
					return Promise.resolve(le);
				}
				async ob(re, le = [], oe = !0) {
					const ae = new i.$rj(M.$kHc, M.$PHc, void 0, !0, () =>
							this.Z.executeCommand(M.$kHc),
						),
						pe =
							le.filter(($e) => $e.id.endsWith(".command")).length > 0
								? le
								: [...le, ...(oe ? [ae] : [])];
					await this.O.prompt({
						type: h.default.Error,
						message: re,
						buttons: pe.map(($e) => ({ label: $e.label, run: () => $e.run() })),
						cancelButton: !0,
					});
				}
				async focusStackFrame(re, le, oe, ae) {
					const {
						stackFrame: pe,
						thread: $e,
						session: ye,
					} = Q(this.i, re, le, oe);
					if (pe) {
						const ue = await pe.openInEditor(
							this.J,
							ae?.preserveFocus ?? !0,
							ae?.sideBySide,
							ae?.pinned,
						);
						if (ue && ue.input !== G.$G3.instance) {
							const fe = ue.getControl();
							if (pe && (0, g.$0sb)(fe) && fe.hasModel()) {
								const me = fe.getModel(),
									ve = pe.range.startLineNumber;
								if (ve >= 1 && ve <= me.getLineCount()) {
									const ge = fe.getModel().getLineContent(ve);
									t.$oib(
										p.localize(
											5586,
											null,
											ge,
											$e && $e.stoppedDetails
												? `, reason ${$e.stoppedDetails.reason}`
												: "",
											pe.source ? pe.source.name : "",
											pe.range.startLineNumber,
										),
									);
								}
							}
						}
					}
					ye ? this.r.set(ye.configuration.type) : this.r.reset(),
						this.j.setFocus(pe, $e, ye, !!ae?.explicit);
				}
				addWatchExpression(re) {
					const le = this.i.addWatchExpression(re);
					re || this.j.setSelectedExpression(le, !1),
						this.h.storeWatchExpressions(this.i.getWatchExpressions());
				}
				renameWatchExpression(re, le) {
					this.i.renameWatchExpression(re, le),
						this.h.storeWatchExpressions(this.i.getWatchExpressions());
				}
				moveWatchExpression(re, le) {
					this.i.moveWatchExpression(re, le),
						this.h.storeWatchExpressions(this.i.getWatchExpressions());
				}
				removeWatchExpressions(re) {
					this.i.removeWatchExpressions(re),
						this.h.storeWatchExpressions(this.i.getWatchExpressions());
				}
				canSetBreakpointsIn(re) {
					return this.p.canSetBreakpointsIn(re);
				}
				async enableOrDisableBreakpoints(re, le) {
					le
						? (this.i.setEnablement(le, re),
							this.h.storeBreakpoints(this.i),
							le instanceof z.$T3
								? (await this.qb(re, le),
									await this.sendBreakpoints(le.originalUri))
								: le instanceof z.$U3
									? await this.rb()
									: le instanceof z.$V3
										? await this.sb()
										: le instanceof z.$X3
											? await this.tb()
											: await this.ub())
						: (this.i.enableOrDisableAllBreakpoints(re),
							this.h.storeBreakpoints(this.i),
							await this.sendAllBreakpoints()),
						this.h.storeBreakpoints(this.i);
				}
				async addBreakpoints(re, le, oe = !0) {
					const ae = this.i.addBreakpoints(re, le);
					return (
						oe &&
							ae.forEach((pe) =>
								t.$pib(p.localize(5587, null, pe.lineNumber, re.fsPath)),
							),
						this.h.storeBreakpoints(this.i),
						await this.sendBreakpoints(re),
						this.h.storeBreakpoints(this.i),
						ae
					);
				}
				async updateBreakpoints(re, le, oe) {
					this.i.updateBreakpoints(le),
						this.h.storeBreakpoints(this.i),
						oe
							? this.B.add(re)
							: (await this.sendBreakpoints(re),
								this.h.storeBreakpoints(this.i));
				}
				async removeBreakpoints(re) {
					const le = this.i.getBreakpoints(),
						oe = le.filter((pe) => !re || pe.getId() === re);
					oe.forEach((pe) =>
						t.$pib(p.localize(5588, null, pe.lineNumber, pe.uri.fsPath)),
					);
					const ae = new Set(oe.map((pe) => pe.originalUri.toString()));
					this.i.removeBreakpoints(oe),
						this.pb(le, oe).forEach((pe) => ae.add(pe.toString())),
						this.h.storeBreakpoints(this.i),
						await Promise.all(
							[...ae].map((pe) => this.sendBreakpoints(c.URI.parse(pe))),
						);
				}
				setBreakpointsActivated(re) {
					return this.i.setBreakpointsActivated(re), this.sendAllBreakpoints();
				}
				async addFunctionBreakpoint(re, le) {
					this.i.addFunctionBreakpoint(re ?? { name: "" }, le),
						re &&
							(this.h.storeBreakpoints(this.i),
							await this.rb(),
							this.h.storeBreakpoints(this.i));
				}
				async updateFunctionBreakpoint(re, le) {
					this.i.updateFunctionBreakpoint(re, le),
						this.h.storeBreakpoints(this.i),
						await this.rb();
				}
				async removeFunctionBreakpoints(re) {
					this.i.removeFunctionBreakpoints(re),
						this.h.storeBreakpoints(this.i),
						await this.rb();
				}
				async addDataBreakpoint(re) {
					this.i.addDataBreakpoint(re),
						this.h.storeBreakpoints(this.i),
						await this.sb(),
						this.h.storeBreakpoints(this.i);
				}
				async updateDataBreakpoint(re, le) {
					this.i.updateDataBreakpoint(re, le),
						this.h.storeBreakpoints(this.i),
						await this.sb();
				}
				async removeDataBreakpoints(re) {
					this.i.removeDataBreakpoints(re),
						this.h.storeBreakpoints(this.i),
						await this.sb();
				}
				async addInstructionBreakpoint(re) {
					this.i.addInstructionBreakpoint(re),
						this.h.storeBreakpoints(this.i),
						await this.tb(),
						this.h.storeBreakpoints(this.i);
				}
				async removeInstructionBreakpoints(re, le) {
					this.i.removeInstructionBreakpoints(re, le),
						this.h.storeBreakpoints(this.i),
						await this.tb();
				}
				setExceptionBreakpointFallbackSession(re) {
					this.i.setExceptionBreakpointFallbackSession(re),
						this.h.storeBreakpoints(this.i);
				}
				setExceptionBreakpointsForSession(re, le) {
					this.i.setExceptionBreakpointsForSession(re.getId(), le),
						this.h.storeBreakpoints(this.i);
				}
				async setExceptionBreakpointCondition(re, le) {
					this.i.setExceptionBreakpointCondition(re, le),
						this.h.storeBreakpoints(this.i),
						await this.ub();
				}
				async sendAllBreakpoints(re) {
					const le = (0, w.$Qb)(this.i.getBreakpoints(), (oe) =>
						oe.originalUri.toString(),
					).map((oe) => this.sendBreakpoints(oe.originalUri, !1, re));
					re?.capabilities.supportsConfigurationDoneRequest
						? await Promise.all([
								...le,
								this.rb(re),
								this.sb(re),
								this.tb(re),
								this.ub(re),
							])
						: (await Promise.all(le),
							await this.rb(re),
							await this.sb(re),
							await this.tb(re),
							await this.ub(re));
				}
				pb(re, le) {
					const oe = [];
					for (const ae of le)
						for (const pe of re)
							!le.includes(pe) &&
								pe.triggeredBy === ae.getId() &&
								(this.i.updateBreakpoints(
									new Map([[pe.getId(), { triggeredBy: void 0 }]]),
								),
								oe.push(pe.originalUri));
					return oe;
				}
				async qb(re, le) {
					if (re && le.triggeredBy) {
						const oe = this.i
							.getBreakpoints()
							.find((ae) => le.triggeredBy === ae.getId());
						oe &&
							!oe.enabled &&
							(await this.enableOrDisableBreakpoints(re, oe));
					}
					await Promise.all(
						this.i
							.getBreakpoints()
							.filter(
								(oe) => oe.triggeredBy === le.getId() && oe.enabled !== re,
							)
							.map((oe) => this.enableOrDisableBreakpoints(re, oe)),
					);
				}
				async sendBreakpoints(re, le = !1, oe) {
					const ae = this.i.getBreakpoints({
						originalUri: re,
						enabledOnly: !0,
					});
					await Z(this.i, oe, async (pe) => {
						if (!pe.configuration.noDebug) {
							const $e = ae.filter(
								(ye) => !ye.triggeredBy || ye.getSessionDidTrigger(pe.getId()),
							);
							await pe.sendBreakpoints(re, $e, le);
						}
					});
				}
				async rb(re) {
					const le = this.i
						.getFunctionBreakpoints()
						.filter((oe) => oe.enabled && this.i.areBreakpointsActivated());
					await Z(this.i, re, async (oe) => {
						oe.capabilities.supportsFunctionBreakpoints &&
							!oe.configuration.noDebug &&
							(await oe.sendFunctionBreakpoints(le));
					});
				}
				async sb(re) {
					const le = this.i
						.getDataBreakpoints()
						.filter((oe) => oe.enabled && this.i.areBreakpointsActivated());
					await Z(this.i, re, async (oe) => {
						oe.capabilities.supportsDataBreakpoints &&
							!oe.configuration.noDebug &&
							(await oe.sendDataBreakpoints(le));
					});
				}
				async tb(re) {
					const le = this.i
						.getInstructionBreakpoints()
						.filter((oe) => oe.enabled && this.i.areBreakpointsActivated());
					await Z(this.i, re, async (oe) => {
						oe.capabilities.supportsInstructionBreakpoints &&
							!oe.configuration.noDebug &&
							(await oe.sendInstructionBreakpoints(le));
					});
				}
				ub(re) {
					return Z(this.i, re, async (le) => {
						const oe = this.i
							.getExceptionBreakpointsForSession(le.getId())
							.filter((ae) => ae.enabled);
						(le.capabilities.supportsConfigurationDoneRequest &&
							(!le.capabilities.exceptionBreakpointFilters ||
								le.capabilities.exceptionBreakpointFilters.length === 0)) ||
							le.configuration.noDebug ||
							(await le.sendExceptionBreakpoints(oe));
					});
				}
				vb(re) {
					const le = this.i
						.getBreakpoints()
						.filter((ae) =>
							re.contains(ae.originalUri, y.FileChangeType.DELETED),
						);
					le.length && this.i.removeBreakpoints(le);
					const oe = [];
					for (const ae of this.B)
						re.contains(ae, y.FileChangeType.UPDATED) && oe.push(ae);
					for (const ae of oe) this.B.delete(ae), this.sendBreakpoints(ae, !0);
				}
				async runTo(re, le, oe) {
					let ae,
						pe = this.getViewModel().focusedThread;
					const $e = async () => {
							if (
								!!!this.getModel().getBreakpoints({
									column: oe,
									lineNumber: le,
									uri: re,
								}).length
							) {
								const fe = await this.wb(re, le, oe);
								fe.thread && (pe = fe.thread),
									fe.breakpoint && (ae = fe.breakpoint);
							}
							return { threadToContinue: pe, breakpointToRemove: ae };
						},
						ye = (ue) =>
							ue === B.State.Stopped || ue === B.State.Inactive
								? (ae && this.removeBreakpoints(ae.getId()), !0)
								: !1;
					if ((await $e(), this.state === B.State.Inactive)) {
						const {
								launch: ue,
								name: fe,
								getConfig: me,
							} = this.getConfigurationManager().selectedConfiguration,
							ve = await me(),
							ge = ve ? Object.assign((0, a.$vo)(ve), {}) : fe,
							be = this.onDidChangeState((Ce) => {
								ye(Ce) && be.dispose();
							});
						await this.startDebugging(ue, ge, void 0, !0);
					}
					if (this.state === B.State.Stopped) {
						const ue = this.getViewModel().focusedSession;
						if (!ue || !pe) return;
						const fe = pe.session.onDidChangeState(() => {
							ye(ue.state) && fe.dispose();
						});
						await pe.continue();
					}
				}
				async wb(re, le, oe) {
					const ae = this.getModel(),
						pe = this.getViewModel(),
						ye = (
							await this.addBreakpoints(
								re,
								[{ lineNumber: le, column: oe }],
								!1,
							)
						)?.[0];
					if (!ye) return { breakpoint: void 0, thread: pe.focusedThread };
					if (!ye.verified) {
						let ve;
						await (0, E.$Dh)(
							new Promise((ge) => {
								ve = ae.onDidChangeBreakpoints(() => {
									ye.verified && ge();
								});
							}),
							2e3,
						),
							ve.dispose();
					}
					let ue;
					(function (ve) {
						(ve[(ve.Focused = 0)] = "Focused"),
							(ve[(ve.Verified = 1)] = "Verified"),
							(ve[(ve.VerifiedAndPausedInFile = 2)] =
								"VerifiedAndPausedInFile"),
							(ve[(ve.VerifiedAndFocused = 3)] = "VerifiedAndFocused");
					})(ue || (ue = {}));
					let fe = pe.focusedThread,
						me = ue.Focused;
					for (const ve of ye.sessionsThatVerified) {
						const ge = ae.getSession(ve);
						if (!ge) continue;
						const be = ge.getAllThreads().filter((Ce) => Ce.stopped);
						if (
							(me < ue.VerifiedAndFocused &&
								pe.focusedThread &&
								be.includes(pe.focusedThread) &&
								((fe = pe.focusedThread), (me = ue.VerifiedAndFocused)),
							me < ue.VerifiedAndPausedInFile)
						) {
							const Ce = be.find((Le) => {
								const Fe = Le.getTopStackFrame();
								return Fe && this.bb.extUri.isEqual(Fe.source.uri, re);
							});
							Ce && ((fe = Ce), (me = ue.VerifiedAndPausedInFile));
						}
						me < ue.Verified &&
							((fe = be[0]), (me = ue.VerifiedAndPausedInFile));
					}
					return { thread: fe, breakpoint: ye };
				}
			};
			(e.$3Qc = te),
				(e.$3Qc = te =
					Ne(
						[
							j(0, X.$IY),
							j(1, ee.$6Sb),
							j(2, _.$HMb),
							j(3, L.$K1),
							j(4, v.$4N),
							j(5, l.$GO),
							j(6, ie.$mEb),
							j(7, T.$Vi),
							j(8, b.$6j),
							j(9, ne.$n6),
							j(10, $.$Li),
							j(11, Y.$q2),
							j(12, y.$ll),
							j(13, f.$gj),
							j(14, s.$dp),
							j(15, W.$7qc),
							j(16, o.$ek),
							j(17, S.$DJ),
							j(18, P.$qO),
							j(19, I.$Vl),
							j(20, J.$sqc),
						],
						te,
					));
			function Q(se, re, le, oe, ae) {
				if (!oe)
					if (re || le) oe = re ? re.thread.session : le.session;
					else {
						const pe = se.getSessions();
						oe =
							pe.find((ye) => ye.state === B.State.Stopped) ||
							pe.find((ye) => ye !== ae && ye !== ae?.parentSession) ||
							(pe.length ? pe[0] : void 0);
					}
				if (!le)
					if (re) le = re.thread;
					else {
						const pe = oe ? oe.getAllThreads() : void 0;
						le =
							(pe && pe.find((ye) => ye.stopped)) ||
							(pe && pe.length ? pe[0] : void 0);
					}
				return (
					!re && le && (re = le.getTopStackFrame()),
					{ session: oe, thread: le, stackFrame: re }
				);
			}
			async function Z(se, re, le) {
				re
					? await le(re)
					: await Promise.all(se.getSessions().map((oe) => le(oe)));
			}
		},
	),
		define(
			de[1333],
			he([
				1, 0, 7, 168, 105, 50, 24, 15, 29, 3, 4, 607, 92, 11, 10, 8, 49, 5, 40,
				21, 32, 51, 35, 26, 1332, 984, 425, 352, 112, 96, 14, 75, 201, 345,
				2430,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$jQc = void 0),
					(e.$kQc = B),
					(t = mt(t)),
					(C = mt(C)),
					(m = mt(m)),
					(T = mt(T));
				const A = "debug.actionswidgetposition",
					R = "debug.actionswidgety";
				let O = class extends y.$pP {
					constructor(H, q, V, G, K, J, W, X, Y, ie) {
						super(W),
							(this.C = H),
							(this.F = q),
							(this.G = V),
							(this.H = G),
							(this.I = K),
							(this.J = J),
							(this.L = X),
							(this.m = !1),
							(this.r = !1),
							(this.t = this.D(new r.$Zc())),
							(this.u = new WeakMap()),
							(this.z = this.D(new r.$2c())),
							(this.a = t.$("div.debug-toolbar")),
							(this.a.style.top = `${G.mainContainerOffset.top}px`),
							(this.b = t.$fhb(
								this.a,
								t.$("div.drag-area" + $.ThemeIcon.asCSSSelector(T.$fKb)),
							));
						const ne = t.$fhb(this.a, t.$("div.action-bar-container"));
						(this.j = Y.createMenu(c.$XX.DebugToolBar, ie)),
							this.D(this.j),
							(this.f = []),
							(this.c = this.D(
								new w.$eib(ne, {
									orientation: w.ActionsOrientation.HORIZONTAL,
									actionViewItemProvider: (ee, _) => {
										if (ee.id === I.$gHc)
											return this.L.createInstance(v.$zJc, ee, void 0);
										if (ee.id === I.$_Gc || ee.id === I.$0Gc) {
											this.t.clear();
											const te = this.L.invokeFunction((Q) =>
												B(ee, this.t, Q, { hoverDelegate: _.hoverDelegate }),
											);
											if (te) return te;
										}
										return (0, h.$Pyb)(this.L, ee, _);
									},
								}),
							)),
							(this.g = this.D(
								new d.$Yh(() => {
									const ee = this.G.state,
										_ = this.J.getValue("debug").toolBarLocation;
									if (
										ee === P.State.Inactive ||
										_ !== "floating" ||
										this.G.getModel()
											.getSessions()
											.every((Q) => Q.suppressDebugToolbar) ||
										(ee === P.State.Initializing &&
											this.G.initializingOptions?.suppressDebugToolbar)
									)
										return this.X();
									const te = [];
									(0, h.$Kyb)(this.j, { shouldForwardArgs: !0 }, te),
										C.$yb(
											te,
											this.f,
											(Q, Z) => Q.id === Z.id && Q.enabled === Z.enabled,
										) ||
											(this.c.clear(),
											this.c.push(te, { icon: !0, label: !1 }),
											(this.f = te)),
										this.U();
								}, 20),
							)),
							this.updateStyles(),
							this.M(),
							this.X();
					}
					M() {
						this.D(this.G.onDidChangeState(() => this.g.schedule())),
							this.D(
								this.J.onDidChangeConfiguration((V) => {
									V.affectsConfiguration("debug.toolBarLocation") &&
										this.g.schedule(),
										(V.affectsConfiguration(
											k.LayoutSettings.EDITOR_TABS_MODE,
										) ||
											V.affectsConfiguration(
												k.LayoutSettings.COMMAND_CENTER,
											)) &&
											((this.R = void 0), this.O());
								}),
							),
							this.D(this.j.onDidChange(() => this.g.schedule())),
							this.D(
								this.c.actionRunner.onDidRun((V) => {
									V.error && !m.$8(V.error) && this.C.warn(V.error),
										this.F.publicLog2("workbenchActionExecuted", {
											id: V.action.id,
											from: "debugActionsWidget",
										});
								}),
							),
							this.D(
								t.$dgb(this.b, (V) => {
									const G = new i.$2fb(t.getWindow(this.b), V),
										K = t.getWindow(this.H.activeContainer);
									if (G.detail === 2) {
										const J = this.a.clientWidth;
										this.O(0.5 * K.innerWidth - 0.5 * J, this.Q), this.N();
									}
								}),
							),
							this.D(
								t.$bgb(this.b, (V) => {
									this.b.classList.add("dragged");
									const G = t.getWindow(this.H.activeContainer),
										K = t.$cgb(G, (W) => {
											const X = new i.$2fb(G, W);
											X.preventDefault(), this.O(X.posx - 14, X.posy - 14);
										}),
										J = t.$dgb(G, (W) => {
											this.N(),
												this.b.classList.remove("dragged"),
												K.dispose(),
												J.dispose();
										});
								}),
							),
							this.D(this.H.onDidChangePartVisibility(() => this.O()));
						const H = this.D(new r.$2c()),
							q = () => {
								H.value = this.D(
									t.$0fb(
										t.getWindow(this.H.activeContainer),
										t.$$gb.RESIZE,
										() => this.O(),
									),
								);
							};
						this.D(
							this.H.onDidChangeActiveContainer(async () => {
								(this.R = void 0),
									await this.H.whenContainerStylesLoaded(
										t.getWindow(this.H.activeContainer),
									),
									this.r && (this.W(), this.O()),
									q();
							}),
						),
							q();
					}
					N() {
						const H = t.getWindow(this.H.activeContainer),
							q = this.H.activeContainer === this.H.mainContainer,
							V = this.a.getBoundingClientRect(),
							G = V.top,
							K = V.left / H.innerWidth;
						q
							? (this.I.store(
									A,
									K,
									b.StorageScope.PROFILE,
									b.StorageTarget.MACHINE,
								),
								this.I.store(
									R,
									G,
									b.StorageScope.PROFILE,
									b.StorageTarget.MACHINE,
								))
							: this.u.set(H, { x: K, y: G });
					}
					updateStyles() {
						if ((super.updateStyles(), this.a)) {
							this.a.style.backgroundColor = this.w(S.$LKb) || "";
							const H = this.w(l.$bR);
							this.a.style.boxShadow = H ? `0 0 8px 2px ${H}` : "";
							const q = this.w(l.$cR),
								V = this.w(S.$MKb);
							q
								? (this.a.style.border = `1px solid ${q}`)
								: ((this.a.style.border = V ? `solid ${V}` : "none"),
									(this.a.style.border = "1px 0"));
						}
					}
					O(H, q) {
						if (!this.m) return;
						const V = this.a.clientWidth,
							G = t.getWindow(this.H.activeContainer),
							K = G === D.$Bfb;
						if (H === void 0) {
							const J = K
								? Number(this.I.get(A, b.StorageScope.PROFILE))
								: this.u.get(G)?.x;
							H =
								J !== void 0 && !isNaN(J)
									? J * G.innerWidth
									: 0.5 * G.innerWidth - 0.5 * V;
						}
						(H = (0, M.$Zm)(H, 0, G.innerWidth - V)),
							(this.a.style.left = `${H}px`),
							q === void 0 &&
								(q = K
									? this.I.getNumber(R, b.StorageScope.PROFILE)
									: this.u.get(G)?.y),
							this.P(q ?? this.Q);
					}
					P(H) {
						const [q, V] = this.S;
						(H = Math.max(q, Math.min(H, V))), (this.a.style.top = `${H}px`);
					}
					get Q() {
						return this.H.mainContainerOffset.top;
					}
					get S() {
						if (!this.R) {
							const H = this.H.isVisible(
									k.Parts.TITLEBAR_PART,
									t.getWindow(this.H.activeContainer),
								),
								q = H ? 0 : this.H.mainContainerOffset.top;
							let V = 0;
							H &&
								(this.J.getValue(k.LayoutSettings.COMMAND_CENTER) === !0
									? (V += 35)
									: (V += 28)),
								this.J.getValue(k.LayoutSettings.EDITOR_TABS_MODE) !==
									k.EditorTabsMode.NONE && (V += 35),
								(this.R = [q, V]);
						}
						return this.R;
					}
					U() {
						if (this.m) {
							this.O();
							return;
						}
						this.r || ((this.r = !0), this.W()),
							(this.m = !0),
							t.show(this.a),
							this.O();
					}
					W() {
						this.H.activeContainer.appendChild(this.a),
							(this.z.value = N.$sjb
								.getInstance(t.getWindow(this.a))
								.onDidChange(() => this.O()));
					}
					X() {
						(this.m = !1), t.hide(this.a);
					}
					dispose() {
						super.dispose(), this.a?.remove();
					}
				};
				(e.$jQc = O),
					(e.$jQc = O =
						Ne(
							[
								j(0, f.$4N),
								j(1, s.$km),
								j(2, P.$75),
								j(3, k.$mEb),
								j(4, b.$lq),
								j(5, n.$gj),
								j(6, y.$iP),
								j(7, o.$Li),
								j(8, c.$YX),
								j(9, g.$6j),
							],
							O,
						));
				function B(x, H, q, V) {
					const G = q.get(c.$YX),
						K = q.get(g.$6j),
						J = q.get(o.$Li),
						W = q.get(p.$Xxb),
						X = G.getMenuActions(c.$XX.DebugToolBarStop, K, {
							shouldForwardArgs: !0,
						}),
						Y = [];
					if (((0, h.$Kyb)(X, Y), !Y.length)) return;
					const ie = H.add(
						new E.$rj(
							"notebook.moreRunActions",
							(0, u.localize)(5655, null),
							"codicon-chevron-down",
							!0,
						),
					);
					return J.createInstance(a.$OYb, x, ie, Y, "debug-stop-actions", W, V);
				}
				const U = [],
					z = (x, H, q, V, G, K, J) => {
						c.$ZX.appendMenuItem(c.$XX.DebugToolBar, {
							group: "navigation",
							when: G,
							order: q,
							command: { id: x, title: H, icon: V, precondition: K },
							alt: J,
						}),
							U.push(
								c.$ZX.appendMenuItem(c.$XX.ViewContainerTitle, {
									group: "navigation",
									when: g.$Kj.and(
										G,
										g.$Kj.equals("viewContainer", P.$Q4),
										P.$24.notEqualsTo("inactive"),
										g.$Kj.equals("config.debug.toolBarLocation", "docked"),
									),
									order: q,
									command: { id: x, title: H, icon: V, precondition: K },
								}),
							);
					};
				(0, r.$Tc)(
					c.$ZX.onDidChangeMenu((x) => {
						if (x.has(c.$XX.DebugToolBar)) {
							(0, r.$Vc)(U);
							const H = c.$ZX.getMenuItems(c.$XX.DebugToolBar);
							for (const q of H)
								U.push(
									c.$ZX.appendMenuItem(c.$XX.ViewContainerTitle, {
										...q,
										when: g.$Kj.and(
											q.when,
											g.$Kj.equals("viewContainer", P.$Q4),
											P.$24.notEqualsTo("inactive"),
											g.$Kj.equals("config.debug.toolBarLocation", "docked"),
										),
									}),
								);
						}
					}),
				);
				const F = g.$Kj.equals("config.debug.toolBarLocation", "commandCenter");
				c.$ZX.appendMenuItem(c.$XX.CommandCenterCenter, {
					submenu: c.$XX.DebugToolBar,
					title: "Debug",
					icon: L.$ak.debug,
					order: 1,
					when: g.$Kj.and(P.$74, F),
				}),
					z(I.$bHc, I.$MHc, 10, T.$pKb, P.$24.isEqualTo("stopped")),
					z(
						I.$9Gc,
						I.$IHc,
						10,
						T.$oKb,
						P.$24.notEqualsTo("stopped"),
						g.$Kj.and(P.$24.isEqualTo("running"), P.$r5.toNegated()),
					),
					z(I.$_Gc, I.$LHc, 70, T.$hKb, P.$q5.toNegated(), void 0, {
						id: I.$0Gc,
						title: I.$JHc,
						icon: T.$iKb,
						precondition: g.$Kj.and(P.$q5.toNegated(), P.$H5),
					}),
					z(I.$0Gc, I.$JHc, 70, T.$iKb, P.$q5, void 0, {
						id: I.$_Gc,
						title: I.$LHc,
						icon: T.$hKb,
						precondition: g.$Kj.and(P.$q5, P.$H5),
					}),
					z(I.$5Gc, I.$CHc, 20, T.$kKb, void 0, P.$24.isEqualTo("stopped")),
					z(I.$6Gc, I.$DHc, 30, T.$lKb, void 0, P.$24.isEqualTo("stopped")),
					z(I.$8Gc, I.$HHc, 40, T.$mKb, void 0, P.$24.isEqualTo("stopped")),
					z(I.$3Gc, I.$BHc, 60, T.$jKb),
					z(
						I.$2Gc,
						(0, u.localize)(5656, null),
						50,
						T.$nKb,
						P.$s5,
						P.$24.isEqualTo("stopped"),
					),
					z(
						I.$1Gc,
						(0, u.localize)(5657, null),
						55,
						T.$qKb,
						P.$s5,
						P.$24.isEqualTo("stopped"),
					),
					z(I.$gHc, I.$NHc, 100, L.$ak.listTree, g.$Kj.and(P.$T5, F.negate())),
					c.$ZX.appendMenuItem(c.$XX.DebugToolBarStop, {
						group: "navigation",
						when: g.$Kj.and(P.$q5.toNegated(), P.$H5),
						order: 0,
						command: { id: I.$0Gc, title: I.$JHc, icon: T.$iKb },
					}),
					c.$ZX.appendMenuItem(c.$XX.DebugToolBarStop, {
						group: "navigation",
						when: g.$Kj.and(P.$q5, P.$H5),
						order: 0,
						command: { id: I.$_Gc, title: I.$LHc, icon: T.$hKb },
					}),
					c.$ZX.appendMenuItem(c.$XX.DebugToolBarStop, {
						group: "navigation",
						when: g.$Kj.or(
							g.$Kj.and(P.$q5.toNegated(), P.$I5, P.$H5),
							g.$Kj.and(P.$q5, P.$I5),
						),
						order: 0,
						command: { id: I.$$Gc, title: I.$KHc, icon: T.$iKb },
					});
			},
		),
		define(
			de[3822],
			he([
				1, 0, 7, 105, 410, 50, 15, 14, 6, 132, 3, 54, 37, 4, 92, 11, 10, 8, 49,
				5, 39, 73, 93, 40, 41, 32, 51, 35, 26, 146, 60, 629, 425, 352, 1333,
				112, 300, 396, 95, 72,
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
				B,
				U,
				z,
			) {
				"use strict";
				var F, x, H, q;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$oQc = void 0),
					(e.$lQc = W),
					(e.$mQc = X),
					(e.$nQc = Y),
					(t = mt(t)),
					(N = mt(N));
				const V = t.$;
				function G(Ce, Le) {
					return (Le.sessionId = Ce.getId()), Le;
				}
				function K(Ce, Le) {
					return (Le.threadId = Ce.getId()), G(Ce.session, Le), Le;
				}
				function J(Ce, Le) {
					return (
						(Le.frameId = Ce.getId()),
						(Le.frameName = Ce.name),
						(Le.frameLocation = { range: Ce.range, source: Ce.source.raw }),
						K(Ce.thread, Le),
						Le
					);
				}
				function W(Ce) {
					return Ce instanceof O.$N3
						? J(Ce, {})
						: Ce instanceof O.$O3
							? K(Ce, {})
							: ue(Ce)
								? G(Ce, {})
								: void 0;
				}
				function X(Ce) {
					return Ce instanceof O.$N3
						? Ce.source.inMemory
							? Ce.source.raw.path || Ce.source.reference || Ce.source.name
							: Ce.source.uri.toString()
						: Ce instanceof O.$O3
							? Ce.threadId
							: ue(Ce)
								? Ce.getId()
								: "";
				}
				function Y(Ce) {
					let Le = Ce.thread.getStaleCallStack();
					Le = Le.length > 0 ? Le : Ce.thread.getCallStack();
					const Fe = Le.map((He) => He.source).filter((He) => He !== Ce.source);
					let Oe = 0;
					if (
						(Fe.forEach((He) => {
							He.name === Ce.source.name &&
								(Oe = Math.max(
									Oe,
									(0, h.$Pf)(Ce.source.uri.path, He.uri.path),
								));
						}),
						Oe === 0)
					)
						return Ce.source.name;
					const xe = Math.max(
						0,
						Ce.source.uri.path.lastIndexOf(
							a.$lc.sep,
							Ce.source.uri.path.length - Oe - 1,
						),
					);
					return (xe > 0 ? "..." : "") + Ce.source.uri.path.substring(xe);
				}
				async function ie(Ce, Le) {
					Ce.parentSession && (await ie(Ce.parentSession, Le)),
						await Le.expand(Ce);
				}
				let ne = class extends k.$TMb {
					constructor(Le, Fe, Oe, xe, He, Ke, Je, Te, Ee, Ie, Be, Se, ke) {
						super(Le, xe, Fe, Je, Te, Ke, He, Ee, Ie, Be, Se),
							(this.ab = Le),
							(this.sb = Oe),
							(this.cc = ke),
							(this.g = !1),
							(this.h = !1),
							(this.j = !1),
							(this.r = new Set()),
							(this.L = !1),
							(this.f = this.D(
								new C.$Yh(async () => {
									const Ue = this.sb.getModel().getSessions();
									Ue.length === 0 && this.r.clear();
									const qe =
											Ue.length === 1 && Ue[0].getAllThreads().length === 1
												? Ue[0].getAllThreads()[0]
												: void 0,
										Ae = Ue.length === 1 ? Ue[0].getStoppedDetails() : void 0;
									Ae && (qe || typeof Ae.threadId != "number")
										? ((this.b.textContent = $e(Ae)),
											this.c.update(pe(Ae)),
											this.b.classList.toggle(
												"exception",
												Ae.reason === "exception",
											),
											(this.a.hidden = !1))
										: Ue.length === 1 && Ue[0].state === R.State.Running
											? ((this.b.textContent = (0, c.localize)(5265, null)),
												this.c.update(Ue[0].getLabel()),
												this.b.classList.remove("exception"),
												(this.a.hidden = !1))
											: (this.a.hidden = !0),
										this.bc(),
										(this.g = !1),
										(this.m.deemphasizedStackFramesToShow = []),
										await this.n.updateChildren();
									try {
										const Me = new Set();
										Ue.forEach((De) => {
											De.parentSession &&
												!this.r.has(De.parentSession) &&
												Me.add(De.parentSession);
										});
										for (const De of Me) await ie(De, this.n), this.r.add(De);
									} catch {}
									this.L && ((this.L = !1), await this.gc());
								}, 50),
							));
					}
					Qb(Le) {
						super.Qb(Le, this.ab.title),
							(this.a = t.$fhb(Le, V("span.call-stack-state-message"))),
							(this.a.hidden = !0),
							(this.b = t.$fhb(this.a, V("span.label"))),
							(this.c = this.D(
								this.Hb.setupManagedHover((0, U.$cib)("mouse"), this.a, ""),
							));
					}
					W(Le) {
						super.W(Le),
							this.element.classList.add("debug-pane"),
							Le.classList.add("debug-call-stack");
						const Fe = (0, D.$cIc)(Le);
						(this.m = new fe(this.sb)),
							(this.n = this.Db.createInstance(
								y.$GMb,
								"CallStackView",
								Fe,
								new ae(),
								new ve(this.sb),
								[
									this.Db.createInstance(_),
									this.Db.createInstance(Q),
									this.Db.createInstance(se),
									this.Db.createInstance(re),
									new le(),
									new oe(),
								],
								this.m,
								{
									accessibilityProvider: new me(),
									compressionEnabled: !0,
									autoExpandSingleChildren: !0,
									identityProvider: {
										getId: (xe) =>
											typeof xe == "string"
												? xe
												: xe instanceof Array
													? `showMore ${xe[0].getId()}`
													: xe.getId(),
									},
									keyboardNavigationLabelProvider: {
										getKeyboardNavigationLabel: (xe) =>
											ue(xe)
												? xe.getLabel()
												: xe instanceof O.$O3
													? `${xe.name} ${xe.stateLabel}`
													: xe instanceof O.$N3 || typeof xe == "string"
														? xe
														: xe instanceof O.$Y3
															? le.LABEL
															: (0, c.localize)(5266, null),
										getCompressedNodeKeyboardNavigationLabel: (xe) => {
											const He = xe[0];
											return ue(He) ? He.getLabel() : "";
										},
									},
									expandOnlyOnTwistieClick: !0,
									overrideStyles: this.Zb().listOverrideStyles,
								},
							)),
							this.n.setInput(this.sb.getModel()),
							this.D(this.n),
							this.D(
								this.n.onDidOpen(async (xe) => {
									if (this.h) return;
									const He = (Je, Te, Ee, Ie = {}) => {
											this.j = !0;
											try {
												this.sb.focusStackFrame(Je, Te, Ee, {
													...Ie,
													explicit: !0,
												});
											} finally {
												this.j = !1;
											}
										},
										Ke = xe.element;
									if (Ke instanceof O.$N3) {
										const Je = {
											preserveFocus: xe.editorOptions.preserveFocus,
											sideBySide: xe.sideBySide,
											pinned: xe.editorOptions.pinned,
										};
										He(Ke, Ke.thread, Ke.thread.session, Je);
									}
									if (
										(Ke instanceof O.$O3 && He(void 0, Ke, Ke.session),
										ue(Ke) && He(void 0, void 0, Ke),
										Ke instanceof O.$Y3)
									) {
										const Je = this.sb.getModel().getSession(Ke.sessionId),
											Te = Je && Je.getThread(Ke.threadId);
										if (Te) {
											const Ee = Te.stoppedDetails?.totalFrames,
												Ie =
													typeof Ee == "number"
														? Ee - Te.getCallStack().length
														: void 0;
											await Te.fetchCallStack(Ie),
												await this.n.updateChildren();
										}
									}
									Ke instanceof Array &&
										(this.m.deemphasizedStackFramesToShow.push(...Ke),
										this.n.updateChildren());
								}),
							),
							this.D(
								this.sb.getModel().onDidChangeCallStack(() => {
									if (!this.isBodyVisible()) {
										this.g = !0;
										return;
									}
									this.f.isScheduled() || this.f.schedule();
								}),
							);
						const Oe = m.Event.any(
							this.sb.getViewModel().onDidFocusStackFrame,
							this.sb.getViewModel().onDidFocusSession,
						);
						this.D(
							Oe(async () => {
								if (!this.j) {
									if (!this.isBodyVisible()) {
										(this.g = !0), (this.L = !0);
										return;
									}
									if (this.f.isScheduled()) {
										this.L = !0;
										return;
									}
									await this.gc();
								}
							}),
						),
							this.D(this.n.onContextMenu((xe) => this.hc(xe))),
							this.sb.state === R.State.Stopped && this.f.schedule(0),
							this.D(
								this.onDidChangeBodyVisibility((xe) => {
									xe && this.g && this.f.schedule();
								}),
							),
							this.D(
								this.sb.onDidNewSession((xe) => {
									const He = [];
									He.push(
										xe.onDidChangeName(() => {
											this.n.hasNode(xe) && this.n.rerender(xe);
										}),
									),
										He.push(xe.onDidEndAdapter(() => (0, u.$Vc)(He))),
										xe.parentSession && this.r.delete(xe.parentSession);
								}),
							);
					}
					X(Le, Fe) {
						super.X(Le, Fe), this.n.layout(Le, Fe);
					}
					focus() {
						super.focus(), this.n.domFocus();
					}
					collapseAll() {
						this.n.collapseAll();
					}
					async gc() {
						if (!this.n || !this.n.getInput()) return;
						const Le = (He) => {
								this.h = !0;
								try {
									this.n.setSelection([He]),
										this.n.getRelativeTop(He) === null
											? this.n.reveal(He, 0.5)
											: this.n.reveal(He);
								} catch {
								} finally {
									this.h = !1;
								}
							},
							Fe = this.sb.getViewModel().focusedThread,
							Oe = this.sb.getViewModel().focusedSession,
							xe = this.sb.getViewModel().focusedStackFrame;
						if (!Fe) Oe ? Le(Oe) : this.n.setSelection([]);
						else {
							try {
								await ie(Fe.session, this.n);
							} catch {}
							try {
								await this.n.expand(Fe);
							} catch {}
							const He = xe || Oe;
							He && Le(He);
						}
					}
					hc(Le) {
						const Fe = Le.element;
						let Oe = [];
						ue(Fe)
							? (Oe = ee(Fe))
							: Fe instanceof O.$O3
								? (Oe = te(Fe))
								: Fe instanceof O.$N3 && (Oe = Z(Fe));
						const Ke = { primary: [], secondary: [] },
							Je = this.Bb.createOverlay(Oe),
							Te = this.cc.getMenuActions(g.$XX.DebugCallStackContext, Je, {
								arg: X(Fe),
								shouldForwardArgs: !0,
							});
						(0, n.$Jyb)(Te, Ke, "inline"),
							this.zb.showContextMenu({
								getAnchor: () => Le.anchor,
								getActions: () => Ke.secondary,
								getActionsContext: () => W(Fe),
							});
					}
				};
				(e.$oQc = ne),
					(e.$oQc = ne =
						Ne(
							[
								j(1, f.$Xxb),
								j(2, R.$75),
								j(3, s.$uZ),
								j(4, b.$Li),
								j(5, L.$K1),
								j(6, p.$gj),
								j(7, o.$6j),
								j(8, v.$7rb),
								j(9, T.$iP),
								j(10, S.$km),
								j(11, z.$Uyb),
								j(12, g.$YX),
							],
							ne,
						));
				function ee(Ce) {
					return [
						[R.$e5.key, "session"],
						[R.$f5.key, (0, B.$n3)(Ce)],
						[R.$g5.key, Ce.state === R.State.Stopped],
						[R.$h5.key, Ce.getAllThreads().length === 1],
					];
				}
				let _ = class {
					static {
						F = this;
					}
					static {
						this.ID = "session";
					}
					constructor(Le, Fe, Oe, xe) {
						(this.a = Le), (this.b = Fe), (this.c = Oe), (this.d = xe);
					}
					get templateId() {
						return F.ID;
					}
					renderTemplate(Le) {
						const Fe = t.$fhb(Le, V(".session"));
						t.$fhb(Fe, V(P.ThemeIcon.asCSSSelector(N.$zKb)));
						const Oe = t.$fhb(Fe, V(".name")),
							xe = t.$fhb(Fe, V("span.state.label.monaco-count-badge.long")),
							He = new u.$Zc(),
							Ke = He.add(new w.$Wob(Oe)),
							Je = He.add(new u.$Zc()),
							Te = He.add(
								new i.$eib(Fe, {
									actionViewItemProvider: (Ie, Be) => {
										if (
											(Ie.id === M.$_Gc || Ie.id === M.$0Gc) &&
											Ie instanceof g.$2X
										) {
											Je.clear();
											const Se = this.a.invokeFunction((ke) =>
												(0, A.$kQc)(Ie, Je, ke, { ...Be, menuAsChild: !1 }),
											);
											if (Se) return Se;
										}
										if (Ie instanceof g.$2X)
											return this.a.createInstance(n.$Lyb, Ie, {
												hoverDelegate: Be.hoverDelegate,
											});
										if (Ie instanceof g.$1X)
											return this.a.createInstance(n.$Nyb, Ie, {
												hoverDelegate: Be.hoverDelegate,
											});
									},
								}),
							),
							Ee = He.add(new u.$Zc());
						return {
							session: Fe,
							name: Oe,
							stateLabel: xe,
							label: Ke,
							actionBar: Te,
							elementDisposable: Ee,
							templateDisposable: He,
						};
					}
					renderElement(Le, Fe, Oe) {
						this.f(Le.element, (0, r.$3k)(Le.filterData), Oe);
					}
					renderCompressedElements(Le, Fe, Oe) {
						const xe = Le.element.elements[Le.element.elements.length - 1],
							He = (0, r.$3k)(Le.filterData);
						this.f(xe, He, Oe);
					}
					f(Le, Fe, Oe) {
						const xe = Oe.elementDisposable.add(
							this.c.setupManagedHover(
								(0, U.$cib)("mouse"),
								Oe.session,
								(0, c.localize)(5267, null),
							),
						);
						Oe.label.set(Le.getLabel(), Fe);
						const He = Le.getStoppedDetails(),
							Ke = Le.getAllThreads().find((Ie) => Ie.stopped),
							Je = this.b.createOverlay(ee(Le)),
							Te = Oe.elementDisposable.add(
								this.d.createMenu(g.$XX.DebugCallStackContext, Je),
							),
							Ee = () => {
								Oe.actionBar.clear();
								const Ie = [],
									Se = { primary: Ie, secondary: [] };
								(0, n.$Kyb)(
									Te,
									{ arg: X(Le), shouldForwardArgs: !0 },
									Se,
									"inline",
								),
									Oe.actionBar.push(Ie, { icon: !0, label: !1 }),
									(Oe.actionBar.context = W(Le));
							};
						Oe.elementDisposable.add(Te.onDidChange(() => Ee())),
							Ee(),
							(Oe.stateLabel.style.display = ""),
							He
								? ((Oe.stateLabel.textContent = $e(He)),
									xe.update(`${Le.getLabel()}: ${pe(He)}`),
									Oe.stateLabel.classList.toggle(
										"exception",
										He.reason === "exception",
									))
								: Ke && Ke.stoppedDetails
									? ((Oe.stateLabel.textContent = $e(Ke.stoppedDetails)),
										xe.update(`${Le.getLabel()}: ${pe(Ke.stoppedDetails)}`),
										Oe.stateLabel.classList.toggle(
											"exception",
											Ke.stoppedDetails.reason === "exception",
										))
									: ((Oe.stateLabel.textContent = (0, c.localize)(5268, null)),
										Oe.stateLabel.classList.remove("exception"));
					}
					disposeTemplate(Le) {
						Le.templateDisposable.dispose();
					}
					disposeElement(Le, Fe, Oe) {
						Oe.elementDisposable.clear();
					}
					disposeCompressedElements(Le, Fe, Oe, xe) {
						Oe.elementDisposable.clear();
					}
				};
				_ = F = Ne([j(0, b.$Li), j(1, o.$6j), j(2, z.$Uyb), j(3, g.$YX)], _);
				function te(Ce) {
					return [
						[R.$e5.key, "thread"],
						[R.$g5.key, Ce.stopped],
					];
				}
				let Q = class {
					static {
						x = this;
					}
					static {
						this.ID = "thread";
					}
					constructor(Le, Fe, Oe) {
						(this.a = Le), (this.b = Fe), (this.c = Oe);
					}
					get templateId() {
						return x.ID;
					}
					renderTemplate(Le) {
						const Fe = t.$fhb(Le, V(".thread")),
							Oe = t.$fhb(Fe, V(".name")),
							xe = t.$fhb(Fe, V("span.state.label.monaco-count-badge.long")),
							He = new u.$Zc(),
							Ke = He.add(new w.$Wob(Oe)),
							Je = He.add(new i.$eib(Fe)),
							Te = He.add(new u.$Zc());
						return {
							thread: Fe,
							name: Oe,
							stateLabel: xe,
							label: Ke,
							actionBar: Je,
							elementDisposable: Te,
							templateDisposable: He,
						};
					}
					renderElement(Le, Fe, Oe) {
						const xe = Le.element;
						Oe.elementDisposable.add(
							this.b.setupManagedHover(
								(0, U.$cib)("mouse"),
								Oe.thread,
								xe.name,
							),
						),
							Oe.label.set(xe.name, (0, r.$3k)(Le.filterData)),
							(Oe.stateLabel.textContent = xe.stateLabel),
							Oe.stateLabel.classList.toggle(
								"exception",
								xe.stoppedDetails?.reason === "exception",
							);
						const He = this.a.createOverlay(te(xe)),
							Ke = Oe.elementDisposable.add(
								this.c.createMenu(g.$XX.DebugCallStackContext, He),
							),
							Je = () => {
								Oe.actionBar.clear();
								const Te = [],
									Ie = { primary: Te, secondary: [] };
								(0, n.$Kyb)(
									Ke,
									{ arg: X(xe), shouldForwardArgs: !0 },
									Ie,
									"inline",
								),
									Oe.actionBar.push(Te, { icon: !0, label: !1 }),
									(Oe.actionBar.context = W(xe));
							};
						Oe.elementDisposable.add(Ke.onDidChange(() => Je())), Je();
					}
					renderCompressedElements(Le, Fe, Oe, xe) {
						throw new Error("Method not implemented.");
					}
					disposeElement(Le, Fe, Oe) {
						Oe.elementDisposable.clear();
					}
					disposeTemplate(Le) {
						Le.templateDisposable.dispose();
					}
				};
				Q = x = Ne([j(0, o.$6j), j(1, z.$Uyb), j(2, g.$YX)], Q);
				function Z(Ce) {
					return [
						[R.$e5.key, "stackFrame"],
						[R.$u5.key, Ce.canRestart],
					];
				}
				let se = class {
					static {
						H = this;
					}
					static {
						this.ID = "stackFrame";
					}
					constructor(Le, Fe, Oe) {
						(this.a = Le), (this.b = Fe), (this.c = Oe);
					}
					get templateId() {
						return H.ID;
					}
					renderTemplate(Le) {
						const Fe = t.$fhb(Le, V(".stack-frame")),
							Oe = t.$fhb(Fe, V("span.label.expression")),
							xe = t.$fhb(Fe, V(".file")),
							He = t.$fhb(xe, V("span.file-name")),
							Ke = t.$fhb(xe, V("span.line-number-wrapper")),
							Je = t.$fhb(Ke, V("span.line-number.monaco-count-badge")),
							Te = new u.$Zc(),
							Ee = Te.add(new w.$Wob(Oe)),
							Ie = Te.add(new i.$eib(Fe));
						return {
							file: xe,
							fileName: He,
							label: Ee,
							lineNumber: Je,
							stackFrame: Fe,
							actionBar: Ie,
							templateDisposable: Te,
						};
					}
					renderElement(Le, Fe, Oe) {
						const xe = Le.element;
						Oe.stackFrame.classList.toggle(
							"disabled",
							!xe.source || !xe.source.available || (0, R.$65)(xe),
						),
							Oe.stackFrame.classList.toggle(
								"label",
								xe.presentationHint === "label",
							);
						const He =
							!!xe.thread.session.capabilities.supportsRestartFrame &&
							xe.presentationHint !== "label" &&
							xe.presentationHint !== "subtle" &&
							xe.canRestart;
						Oe.stackFrame.classList.toggle("has-actions", He);
						let Ke = xe.source.inMemory
							? xe.source.uri.path
							: this.b.getUriLabel(xe.source.uri);
						if (
							(xe.source.raw.origin &&
								(Ke += `
${xe.source.raw.origin}`),
							Oe.templateDisposable.add(
								this.a.setupManagedHover((0, U.$cib)("mouse"), Oe.file, Ke),
							),
							Oe.label.set(xe.name, (0, r.$3k)(Le.filterData), xe.name),
							(Oe.fileName.textContent = Y(xe)),
							xe.range.startLineNumber !== void 0
								? ((Oe.lineNumber.textContent = `${xe.range.startLineNumber}`),
									xe.range.startColumn &&
										(Oe.lineNumber.textContent += `:${xe.range.startColumn}`),
									Oe.lineNumber.classList.remove("unavailable"))
								: Oe.lineNumber.classList.add("unavailable"),
							Oe.actionBar.clear(),
							He)
						) {
							const Je = new E.$rj(
								"debug.callStack.restartFrame",
								(0, c.localize)(5269, null),
								P.ThemeIcon.asClassName(N.$gKb),
								!0,
								async () => {
									try {
										await xe.restart();
									} catch (Te) {
										this.c.error(Te);
									}
								},
							);
							Oe.actionBar.push(Je, { icon: !0, label: !1 });
						}
					}
					renderCompressedElements(Le, Fe, Oe, xe) {
						throw new Error("Method not implemented.");
					}
					disposeTemplate(Le) {
						Le.actionBar.dispose();
					}
				};
				se = H = Ne([j(0, z.$Uyb), j(1, l.$3N), j(2, $.$4N)], se);
				let re = class {
					static {
						q = this;
					}
					static {
						this.ID = "error";
					}
					get templateId() {
						return q.ID;
					}
					constructor(Le) {
						this.a = Le;
					}
					renderTemplate(Le) {
						return {
							label: t.$fhb(Le, V(".error")),
							templateDisposable: new u.$Zc(),
						};
					}
					renderElement(Le, Fe, Oe) {
						const xe = Le.element;
						(Oe.label.textContent = xe),
							Oe.templateDisposable.add(
								this.a.setupManagedHover((0, U.$cib)("mouse"), Oe.label, xe),
							);
					}
					renderCompressedElements(Le, Fe, Oe, xe) {
						throw new Error("Method not implemented.");
					}
					disposeTemplate(Le) {}
				};
				re = q = Ne([j(0, z.$Uyb)], re);
				class le {
					static {
						this.ID = "loadMore";
					}
					static {
						this.LABEL = (0, c.localize)(5270, null);
					}
					constructor() {}
					get templateId() {
						return le.ID;
					}
					renderTemplate(Le) {
						const Fe = t.$fhb(Le, V(".load-all"));
						return (Fe.style.color = (0, I.$rP)(I.$RP)), { label: Fe };
					}
					renderElement(Le, Fe, Oe) {
						Oe.label.textContent = le.LABEL;
					}
					renderCompressedElements(Le, Fe, Oe, xe) {
						throw new Error("Method not implemented.");
					}
					disposeTemplate(Le) {}
				}
				class oe {
					static {
						this.ID = "showMore";
					}
					constructor() {}
					get templateId() {
						return oe.ID;
					}
					renderTemplate(Le) {
						const Fe = t.$fhb(Le, V(".show-more"));
						return (Fe.style.color = (0, I.$rP)(I.$RP)), { label: Fe };
					}
					renderElement(Le, Fe, Oe) {
						const xe = Le.element;
						xe.every(
							(He) =>
								!!(
									He.source &&
									He.source.origin &&
									He.source.origin === xe[0].source.origin
								),
						)
							? (Oe.label.textContent = (0, c.localize)(
									5271,
									null,
									xe.length,
									xe[0].source.origin,
								))
							: (Oe.label.textContent = (0, c.localize)(5272, null, xe.length));
					}
					renderCompressedElements(Le, Fe, Oe, xe) {
						throw new Error("Method not implemented.");
					}
					disposeTemplate(Le) {}
				}
				class ae {
					getHeight(Le) {
						return (Le instanceof O.$N3 && Le.presentationHint === "label") ||
							Le instanceof O.$Y3 ||
							Le instanceof Array
							? 16
							: 22;
					}
					getTemplateId(Le) {
						return ue(Le)
							? _.ID
							: Le instanceof O.$O3
								? Q.ID
								: Le instanceof O.$N3
									? se.ID
									: typeof Le == "string"
										? re.ID
										: Le instanceof O.$Y3
											? le.ID
											: oe.ID;
					}
				}
				function pe(Ce) {
					return Ce.text ?? $e(Ce);
				}
				function $e(Ce) {
					return (
						Ce.description ||
						(Ce.reason
							? (0, c.localize)(5273, null, Ce.reason)
							: (0, c.localize)(5274, null))
					);
				}
				function ye(Ce) {
					return typeof Ce.getSessions == "function";
				}
				function ue(Ce) {
					return Ce && typeof Ce.getAllThreads == "function";
				}
				class fe {
					constructor(Le) {
						(this.a = Le), (this.deemphasizedStackFramesToShow = []);
					}
					hasChildren(Le) {
						if (ue(Le)) {
							const Fe = Le.getAllThreads();
							return (
								Fe.length > 1 ||
								(Fe.length === 1 && Fe[0].stopped) ||
								!!this.a
									.getModel()
									.getSessions()
									.find((Oe) => Oe.parentSession === Le)
							);
						}
						return ye(Le) || (Le instanceof O.$O3 && Le.stopped);
					}
					async getChildren(Le) {
						if (ye(Le)) {
							const Fe = Le.getSessions();
							if (Fe.length === 0) return Promise.resolve([]);
							if (Fe.length > 1 || this.a.getViewModel().isMultiSessionView())
								return Promise.resolve(Fe.filter((xe) => !xe.parentSession));
							const Oe = Fe[0].getAllThreads();
							return Oe.length === 1 ? this.b(Oe[0]) : Promise.resolve(Oe);
						} else if (ue(Le)) {
							const Fe = this.a
									.getModel()
									.getSessions()
									.filter((xe) => xe.parentSession === Le),
								Oe = Le.getAllThreads();
							return Oe.length === 1
								? (await this.b(Oe[0])).concat(Fe)
								: Promise.resolve(Oe.concat(Fe));
						} else return this.b(Le);
					}
					b(Le) {
						return this.c(Le).then((Fe) => {
							const Oe = [];
							return (
								Fe.forEach((xe, He) => {
									if (
										xe instanceof O.$N3 &&
										xe.source &&
										(0, R.$65)(xe) &&
										this.deemphasizedStackFramesToShow.indexOf(xe) === -1
									) {
										if (Oe.length) {
											const Je = Oe[Oe.length - 1];
											if (Je instanceof Array) {
												Je.push(xe);
												return;
											}
										}
										const Ke = He < Fe.length - 1 ? Fe[He + 1] : void 0;
										if (Ke instanceof O.$N3 && Ke.source && (0, R.$65)(Ke)) {
											Oe.push([xe]);
											return;
										}
									}
									Oe.push(xe);
								}),
								Oe
							);
						});
					}
					async c(Le) {
						let Fe = Le.getCallStack();
						return (
							(!Fe || !Fe.length) &&
								(await Le.fetchCallStack(), (Fe = Le.getCallStack())),
							Fe.length === 1 &&
								Le.session.capabilities.supportsDelayedStackTraceLoading &&
								Le.stoppedDetails &&
								Le.stoppedDetails.totalFrames &&
								Le.stoppedDetails.totalFrames > 1 &&
								(Fe = Fe.concat(Le.getStaleCallStack().slice(1))),
							Le.stoppedDetails &&
								Le.stoppedDetails.framesErrorMessage &&
								(Fe = Fe.concat([Le.stoppedDetails.framesErrorMessage])),
							!Le.reachedEndOfCallStack &&
								Le.stoppedDetails &&
								(Fe = Fe.concat([new O.$Y3(Le.session.getId(), Le.threadId)])),
							Fe
						);
					}
				}
				class me {
					getWidgetAriaLabel() {
						return (0, c.localize)(5275, null);
					}
					getWidgetRole() {
						return "treegrid";
					}
					getRole(Le) {
						return "row";
					}
					getAriaLabel(Le) {
						if (Le instanceof O.$O3)
							return (0, c.localize)(5276, null, Le.name, Le.stateLabel);
						if (Le instanceof O.$N3)
							return (0, c.localize)(
								5277,
								null,
								Le.name,
								Le.range.startLineNumber,
								Y(Le),
							);
						if (ue(Le)) {
							const Fe = Le.getAllThreads().find((xe) => xe.stopped),
								Oe = Fe ? Fe.stateLabel : (0, c.localize)(5278, null);
							return (0, c.localize)(5279, null, Le.getLabel(), Oe);
						}
						return typeof Le == "string"
							? Le
							: Le instanceof Array
								? (0, c.localize)(5280, null, Le.length)
								: le.LABEL;
					}
				}
				class ve {
					constructor(Le) {
						this.a = Le;
					}
					isIncompressible(Le) {
						return ue(Le)
							? !(
									Le.compact ||
									this.a
										.getModel()
										.getSessions()
										.some((Oe) => Oe.parentSession === Le && Oe.compact)
								)
							: !0;
					}
				}
				(0, g.$4X)(
					class extends k.$WMb {
						constructor() {
							super({
								id: "callStack.collapse",
								viewId: R.$T4,
								title: (0, c.localize)(5281, null),
								f1: !1,
								icon: d.$ak.collapseAll,
								precondition: R.$24.isEqualTo((0, R.$45)(R.State.Stopped)),
								menu: {
									id: g.$XX.ViewTitle,
									order: 10,
									group: "navigation",
									when: o.$Kj.equals("view", R.$T4),
								},
							});
						}
						runInView(Le, Fe) {
							Fe.collapseAll();
						}
					},
				);
				function ge(Ce, Le, Fe, Oe, xe, He) {
					g.$ZX.appendMenuItem(g.$XX.DebugCallStackContext, {
						group: "inline",
						order: xe,
						when: Oe,
						command: { id: Ce, title: Le, icon: Fe, precondition: He },
					});
				}
				const be = o.$Kj.or(
					R.$e5.isEqualTo("thread"),
					o.$Kj.and(R.$e5.isEqualTo("session"), R.$h5),
				);
				ge(
					M.$9Gc,
					M.$IHc,
					N.$oKb,
					o.$Kj.and(be, R.$g5.toNegated()),
					10,
					R.$r5.toNegated(),
				),
					ge(M.$bHc, M.$MHc, N.$pKb, o.$Kj.and(be, R.$g5), 10),
					ge(M.$5Gc, M.$CHc, N.$kKb, be, 20, R.$g5),
					ge(M.$6Gc, M.$DHc, N.$lKb, be, 30, R.$g5),
					ge(M.$8Gc, M.$HHc, N.$mKb, be, 40, R.$g5),
					ge(M.$3Gc, M.$BHc, N.$jKb, R.$e5.isEqualTo("session"), 50),
					ge(
						M.$_Gc,
						M.$LHc,
						N.$hKb,
						o.$Kj.and(R.$f5.toNegated(), R.$e5.isEqualTo("session")),
						60,
					),
					ge(
						M.$0Gc,
						M.$JHc,
						N.$iKb,
						o.$Kj.and(R.$f5, R.$e5.isEqualTo("session")),
						60,
					);
			},
		),
		define(
			de[3823],
			he([
				1, 0, 4, 54, 146, 5, 49, 39, 10, 629, 112, 25, 8, 222, 12, 9, 37, 15,
				233, 22, 264, 18, 93, 3, 132, 1800, 73, 11, 14, 60, 41, 35, 32, 165,
				411, 72,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$0Qc = void 0),
					(t = mt(t));
				const O = !0,
					B = /^[a-zA-Z][a-zA-Z0-9\+\-\.]+:/;
				class U {
					constructor(X, Y, ie = !1) {
						(this.h = X),
							(this.j = Y),
							(this.isIncompressible = ie),
							(this.d = new Map()),
							(this.c = !1);
					}
					updateLabel(X) {
						this.j = X;
					}
					isLeaf() {
						return this.d.size === 0;
					}
					getSession() {
						if (this.h) return this.h.getSession();
					}
					setSource(X, Y) {
						if (((this.g = Y), this.d.clear(), Y.raw && Y.raw.sources)) {
							for (const ie of Y.raw.sources)
								if (ie.name && ie.path) {
									const ne = new U(this, ie.name);
									this.d.set(ie.path, ne);
									const ee = X.getSource(ie);
									ne.setSource(X, ee);
								}
						}
					}
					createIfNeeded(X, Y) {
						let ie = this.d.get(X);
						return ie || ((ie = Y(this, X)), this.d.set(X, ie)), ie;
					}
					getChild(X) {
						return this.d.get(X);
					}
					remove(X) {
						this.d.delete(X);
					}
					removeFromParent() {
						this.h &&
							(this.h.remove(this.j),
							this.h.d.size === 0 && this.h.removeFromParent());
					}
					getTemplateId() {
						return "id";
					}
					getId() {
						const X = this.getParent();
						return X
							? `${X.getId()}/${this.getInternalId()}`
							: this.getInternalId();
					}
					getInternalId() {
						return this.j;
					}
					getParent() {
						if (this.h) return this.h.isSkipped() ? this.h.getParent() : this.h;
					}
					isSkipped() {
						return this.h ? !!this.h.m() : !0;
					}
					hasChildren() {
						const X = this.m();
						return X ? X.hasChildren() : this.d.size > 0;
					}
					getChildren() {
						const X = this.m();
						if (X) return X.getChildren();
						const Y = [];
						for (const ie of this.d.values()) Y.push(ie);
						return Y.sort((ie, ne) => this.k(ie, ne));
					}
					getLabel(X = !0) {
						const Y = this.m();
						if (Y) {
							const ie = this instanceof z && X ? " \u2022 " : i.$lc.sep;
							return `${this.j}${ie}${Y.getLabel()}`;
						}
						return this.j;
					}
					getHoverLabel() {
						if (this.g && this.h && this.h.g)
							return this.g.raw.path || this.g.raw.name;
						const X = this.getLabel(!1),
							Y = this.getParent();
						if (Y) {
							const ie = Y.getHoverLabel();
							if (ie) return `${ie}/${X}`;
						}
						return X;
					}
					getSource() {
						const X = this.m();
						return X ? X.getSource() : this.g;
					}
					k(X, Y) {
						return X.j && Y.j ? X.j.localeCompare(Y.j) : 0;
					}
					m() {
						if (!this.g && !this.c && this.n()) {
							if (this.d.size === 1) return this.d.values().next().value;
							this.d.size > 1 && (this.c = !0);
						}
					}
					n() {
						return O
							? this instanceof F
							: !(this instanceof z) && !(this instanceof x);
					}
				}
				class z extends U {
					constructor(X, Y) {
						super(X, Y.name, !0), (this.folder = Y);
					}
				}
				class F extends U {
					constructor(X, Y, ie) {
						super(void 0, "Root"), (this.o = X), (this.p = Y), (this.q = ie);
					}
					add(X) {
						return this.createIfNeeded(
							X.getId(),
							() => new x(this.q, this, X, this.o, this.p),
						);
					}
					find(X) {
						return this.getChild(X.getId());
					}
				}
				class x extends U {
					static {
						this.o = /^(https?:\/\/[^/]+)(\/.*)$/;
					}
					constructor(X, Y, ie, ne, ee) {
						super(Y, ie.getLabel(), !0),
							(this.t = ne),
							(this.u = ee),
							(this.q = new Map()),
							(this.r = X),
							(this.p = ie);
					}
					getInternalId() {
						return this.p.getId();
					}
					getSession() {
						return this.p;
					}
					getHoverLabel() {}
					hasChildren() {
						return !0;
					}
					k(X, Y) {
						const ie = this.w(X),
							ne = this.w(Y);
						return ie !== ne ? ie - ne : super.k(X, Y);
					}
					w(X) {
						if (X instanceof z) return X.folder.index;
						const Y = X.getLabel();
						return Y && /^<.+>$/.test(Y) ? 1e3 : 999;
					}
					async addPath(X) {
						let Y,
							ie,
							ne = X.raw.path;
						if (!ne) return;
						this.r && B.test(ne) && (ne = this.r.getUriLabel(g.URI.parse(ne)));
						const ee = x.o.exec(ne);
						if (ee && ee.length === 3) (ie = ee[1]), (ne = decodeURI(ee[2]));
						else if ((0, i.$nc)(ne)) {
							const te = g.URI.file(ne);
							(Y = this.u ? this.u.getWorkspaceFolder(te) : null),
								Y
									? ((ne = (0, i.$mc)(
											(0, p.$tf)(
												te.path.substring(Y.uri.path.length),
												i.$lc.sep,
											),
										)),
										this.u.getWorkspace().folders.length > 1
											? (ne = i.$lc.sep + ne)
											: (Y = null))
									: ((ne = (0, i.$mc)(ne)),
										n.$l
											? (ne = (0, c.$xO)(ne))
											: (ne = (0, c.$yO)(
													ne,
													(await this.t.userHome()).fsPath,
												)));
						}
						let _ = this;
						ne.split(/[\/\\]/).forEach((te, Q) => {
							if (Q === 0 && Y) {
								const Z = Y;
								_ = _.createIfNeeded(Y.name, (se) => new z(se, Z));
							} else
								Q === 0 && ie
									? (_ = _.createIfNeeded(ie, (Z) => new U(Z, ie)))
									: (_ = _.createIfNeeded(te, (Z) => new U(Z, te)));
						}),
							_.setSource(this.p, X),
							X.raw.path && this.q.set(X.raw.path, _);
					}
					removePath(X) {
						if (X.raw.path) {
							const Y = this.q.get(X.raw.path);
							if (Y) return Y.removeFromParent(), !0;
						}
						return !1;
					}
				}
				function H(W, X) {
					const Y = W.getChildren(),
						ie = X ? !X.expanded.has(W.getId()) : !(W instanceof x);
					return {
						element: W,
						collapsed: ie,
						collapsible: W.hasChildren(),
						children: Y.map((ne) => H(ne, X)),
					};
				}
				let q = class extends w.$TMb {
					constructor(
						X,
						Y,
						ie,
						ne,
						ee,
						_,
						te,
						Q,
						Z,
						se,
						re,
						le,
						oe,
						ae,
						pe,
						$e,
					) {
						super(X, ie, Y, _, Q, ee, ne, oe, ae, pe, $e),
							(this.t = te),
							(this.L = Z),
							(this.ab = se),
							(this.sb = re),
							(this.cc = le),
							(this.n = !1),
							(this.g = u.$p5.bindTo(Q));
					}
					W(X) {
						super.W(X),
							this.element.classList.add("debug-pane"),
							X.classList.add("debug-loaded-scripts"),
							X.classList.add("show-file-icons"),
							(this.c = (0, r.$cIc)(X)),
							(this.r = new J());
						const Y = new F(this.cc, this.L, this.sb);
						(this.j = this.Db.createInstance(f.$uPb, {
							onDidChangeVisibility: this.onDidChangeBodyVisibility,
						})),
							this.D(this.j),
							(this.h = this.Db.createInstance(
								y.$DMb,
								"LoadedScriptsView",
								this.c,
								new V(),
								[new G(this.j)],
								{
									compressionEnabled: O,
									collapseByDefault: !0,
									hideTwistiesOfChildlessElements: !0,
									identityProvider: { getId: (Q) => Q.getId() },
									keyboardNavigationLabelProvider: {
										getKeyboardNavigationLabel: (Q) => Q.getLabel(),
										getCompressedNodeKeyboardNavigationLabel: (Q) =>
											Q.map((Z) => Z.getLabel()).join("/"),
									},
									filter: this.r,
									accessibilityProvider: new K(),
									overrideStyles: this.Zb().listOverrideStyles,
								},
							));
						const ie = (Q) => this.h.setChildren(null, H(Y, Q).children);
						ie(),
							(this.m = new o.$Yh(() => {
								(this.n = !1), this.h && ie();
							}, 300)),
							this.D(this.m),
							this.D(
								this.h.onDidOpen((Q) => {
									if (Q.element instanceof U) {
										const Z = Q.element.getSource();
										if (Z && Z.available) {
											const se = {
												startLineNumber: 0,
												startColumn: 0,
												endLineNumber: 0,
												endColumn: 0,
											};
											Z.openInEditor(
												this.t,
												se,
												Q.editorOptions.preserveFocus,
												Q.sideBySide,
												Q.editorOptions.pinned,
											);
										}
									}
								}),
							),
							this.D(
								this.h.onDidChangeFocus(() => {
									this.h.getFocus() instanceof x
										? this.g.set("session")
										: this.g.reset();
								}),
							);
						const ne = () => {
								this.isBodyVisible() ? this.m.schedule() : (this.n = !0);
							},
							ee = async (Q) => {
								if (Q.capabilities.supportsLoadedSourcesRequest) {
									const Z = Y.add(Q),
										se = await Q.getLoadedSources();
									for (const re of se) await Z.addPath(re);
									ne();
								}
							},
							_ = (Q) => {
								this.D(
									Q.onDidChangeName(async () => {
										const Z = Y.find(Q);
										Z && (Z.updateLabel(Q.getLabel()), ne());
									}),
								),
									this.D(
										Q.onDidLoadedSource(async (Z) => {
											let se;
											switch (Z.reason) {
												case "new":
												case "changed":
													(se = Y.add(Q)),
														await se.addPath(Z.source),
														ne(),
														Z.reason === "changed" &&
															S.$9Qc.refreshDebugContent(Z.source.uri);
													break;
												case "removed":
													(se = Y.find(Q)),
														se && se.removePath(Z.source) && ne();
													break;
												default:
													this.r.setFilter(Z.source.name), this.h.refilter();
													break;
											}
										}),
									);
							};
						this.D(this.ab.onDidNewSession(_)),
							this.ab.getModel().getSessions().forEach(_),
							this.D(
								this.ab.onDidEndSession(({ session: Q }) => {
									Y.remove(Q.getId()), this.m.schedule();
								}),
							),
							this.m.schedule(0),
							this.D(
								this.onDidChangeBodyVisibility((Q) => {
									Q && this.n && this.m.schedule();
								}),
							);
						let te;
						this.D(
							this.h.onDidChangeFindPattern((Q) => {
								if (this.h.findMode !== A.TreeFindMode.Highlight)
									if (!te && Q) {
										const Z = new Set(),
											se = (re) => {
												re.element &&
													!re.collapsed &&
													Z.add(re.element.getId());
												for (const le of re.children) se(le);
											};
										se(this.h.getNode()),
											(te = { expanded: Z }),
											this.h.expandAll();
									} else
										!Q && te && (this.h.setFocus([]), ie(te), (te = void 0));
							}),
						),
							this.ab
								.getModel()
								.getSessions()
								.forEach((Q) => ee(Q));
					}
					X(X, Y) {
						super.X(X, Y), this.h.layout(X, Y);
					}
					collapseAll() {
						this.h.collapseAll();
					}
					dispose() {
						(0, $.$Vc)(this.h), (0, $.$Vc)(this.j), super.dispose();
					}
				};
				(e.$0Qc = q),
					(e.$0Qc = q =
						Ne(
							[
								j(1, C.$Xxb),
								j(2, d.$uZ),
								j(3, E.$Li),
								j(4, k.$K1),
								j(5, m.$gj),
								j(6, l.$IY),
								j(7, h.$6j),
								j(8, a.$Vi),
								j(9, u.$75),
								j(10, I.$3N),
								j(11, N.$I8),
								j(12, L.$7rb),
								j(13, D.$iP),
								j(14, M.$km),
								j(15, R.$Uyb),
							],
							q,
						));
				class V {
					getHeight(X) {
						return 22;
					}
					getTemplateId(X) {
						return G.ID;
					}
				}
				class G {
					static {
						this.ID = "lsrenderer";
					}
					constructor(X) {
						this.c = X;
					}
					get templateId() {
						return G.ID;
					}
					renderTemplate(X) {
						return { label: this.c.create(X, { supportHighlights: !0 }) };
					}
					renderElement(X, Y, ie) {
						const ne = X.element,
							ee = ne.getLabel();
						this.d(ne, ee, ie, X.filterData);
					}
					renderCompressedElements(X, Y, ie, ne) {
						const ee = X.element.elements[X.element.elements.length - 1],
							_ = X.element.elements.map((te) => te.getLabel());
						this.d(ee, _, ie, X.filterData);
					}
					d(X, Y, ie, ne) {
						const ee = { name: Y },
							_ = { title: X.getHoverLabel() };
						if (X instanceof z) _.fileKind = b.FileKind.ROOT_FOLDER;
						else if (X instanceof x)
							(_.title = t.localize(5681, null)), (_.hideIcon = !0);
						else if (X instanceof U) {
							const te = X.getSource();
							te && te.uri
								? ((ee.resource = te.uri), (_.fileKind = b.FileKind.FILE))
								: (_.fileKind = b.FileKind.FOLDER);
						}
						(_.matches = (0, v.$3k)(ne)), ie.label.setResource(ee, _);
					}
					disposeTemplate(X) {
						X.label.dispose();
					}
				}
				class K {
					getWidgetAriaLabel() {
						return t.localize(5682, null);
					}
					getAriaLabel(X) {
						return X instanceof z
							? t.localize(5683, null, X.getLabel())
							: X instanceof x
								? t.localize(5684, null, X.getLabel())
								: X.hasChildren()
									? t.localize(5685, null, X.getLabel())
									: t.localize(5686, null, X.getLabel());
					}
				}
				class J {
					setFilter(X) {
						this.c = X;
					}
					filter(X, Y) {
						return this.c
							? X.isLeaf()
								? X.getLabel().indexOf(this.c) >= 0
									? s.TreeVisibility.Visible
									: s.TreeVisibility.Hidden
								: s.TreeVisibility.Recurse
							: s.TreeVisibility.Visible;
					}
				}
				(0, T.$4X)(
					class extends w.$WMb {
						constructor() {
							super({
								id: "loadedScripts.collapse",
								viewId: u.$U4,
								title: t.localize(5687, null),
								f1: !1,
								icon: P.$ak.collapseAll,
								menu: {
									id: T.$XX.ViewTitle,
									order: 30,
									group: "navigation",
									when: h.$Kj.equals("view", u.$U4),
								},
							});
						}
						runInView(X, Y) {
							Y.collapseAll();
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
	define(
		de[3824],
		he([
			1, 0, 7, 495, 410, 95, 431, 132, 3, 54, 111, 26, 4, 31, 49, 72, 5, 73,
			106, 35, 629, 3150, 352, 112, 300, 843, 18,
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
		) {
			"use strict";
			var T, P, k;
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$MJc =
					e.$LJc =
					e.$KJc =
					e.$JJc =
					e.$IJc =
					e.$HJc =
					e.$GJc =
					e.$FJc =
					e.$EJc =
						void 0),
				(t = mt(t)),
				(u = xi(u));
			const L = t.$;
			class D {
				static {
					this.ID = "replEvaluationInput";
				}
				get templateId() {
					return D.ID;
				}
				renderTemplate(V) {
					t.$fhb(V, L("span.arrow" + a.ThemeIcon.asCSSSelector(y.$IKb)));
					const G = t.$fhb(V, L(".expression"));
					return { label: new w.$Wob(G) };
				}
				renderElement(V, G, K) {
					const J = V.element;
					K.label.set(J.value, (0, d.$3k)(V.filterData));
				}
				disposeTemplate(V) {
					V.label.dispose();
				}
			}
			e.$EJc = D;
			let M = class {
				static {
					T = this;
				}
				static {
					this.ID = "replGroup";
				}
				constructor(V, G, K) {
					(this.a = V), (this.b = G), (this.c = K);
				}
				get templateId() {
					return T.ID;
				}
				renderTemplate(V) {
					V.classList.add("group");
					const G = t.$fhb(V, L(".output.expression.value-and-source")),
						K = t.$fhb(G, L("span.label")),
						J = this.c.createInstance(H, G);
					return { label: K, source: J };
				}
				renderElement(V, G, K) {
					const J = V.element;
					t.$9fb(K.label);
					const W = (0, l.$BJc)(J.name, this.a, this.b, void 0);
					K.label.appendChild(W), K.source.setSource(J.sourceData);
				}
				disposeTemplate(V) {
					V.source.dispose();
				}
			};
			(e.$FJc = M), (e.$FJc = M = T = Ne([j(1, b.$iP), j(2, p.$Li)], M));
			class N {
				static {
					this.ID = "replEvaluationResult";
				}
				get templateId() {
					return N.ID;
				}
				constructor(V, G) {
					(this.a = V), (this.b = G);
				}
				renderTemplate(V) {
					const G = t.$fhb(V, L(".evaluation-result.expression"));
					return {
						value: t.$fhb(G, L("span.value")),
						elementStore: new m.$Zc(),
					};
				}
				renderElement(V, G, K) {
					K.elementStore.clear();
					const J = V.element;
					(0, s.$dIc)(
						K.elementStore,
						J,
						K.value,
						{ colorize: !0, hover: !1, linkDetector: this.a },
						this.b,
					);
				}
				disposeTemplate(V) {
					V.elementStore.dispose();
				}
			}
			e.$GJc = N;
			let A = class {
				static {
					P = this;
				}
				static {
					this.ID = "outputReplElement";
				}
				constructor(V, G, K) {
					(this.a = V), (this.b = G), (this.c = K);
				}
				get templateId() {
					return P.ID;
				}
				renderTemplate(V) {
					const G = Object.create(null);
					V.classList.add("output");
					const K = t.$fhb(V, L(".output.expression.value-and-source"));
					return (
						(G.container = V),
						(G.countContainer = t.$fhb(K, L(".count-badge-wrapper"))),
						(G.count = new i.$Hob(G.countContainer, {}, f.$zyb)),
						(G.value = t.$fhb(K, L("span.value.label"))),
						(G.source = this.c.createInstance(H, K)),
						G
					);
				}
				renderElement({ element: V }, G, K) {
					this.d(V, K),
						(K.elementListener = V.onDidChangeCount(() => this.d(V, K))),
						t.$9fb(K.value),
						(K.value.className = "value"),
						K.value.appendChild(
							(0, l.$BJc)(V.value, this.a, this.b, V.session.root),
						),
						K.value.classList.add(
							V.severity === u.default.Warning
								? "warn"
								: V.severity === u.default.Error
									? "error"
									: V.severity === u.default.Ignore
										? "ignore"
										: "info",
						),
						K.source.setSource(V.sourceData),
						(K.getReplElementSource = () => V.sourceData);
				}
				d(V, G) {
					V.count >= 2
						? (G.count.setCount(V.count), (G.countContainer.hidden = !1))
						: (G.countContainer.hidden = !0);
				}
				disposeTemplate(V) {
					V.source.dispose();
				}
				disposeElement(V, G, K) {
					K.elementListener.dispose();
				}
			};
			(e.$HJc = A), (e.$HJc = A = P = Ne([j(1, b.$iP), j(2, p.$Li)], A));
			let R = class extends s.$gIc {
				static {
					k = this;
				}
				static {
					this.ID = "replVariable";
				}
				get templateId() {
					return k.ID;
				}
				constructor(V, G, K, J, W) {
					super(G, K, W), (this.i = V), (this.j = J);
				}
				renderElement(V, G, K) {
					const J = V.element;
					K.elementDisposable.clear(),
						super.d(J instanceof S.$9Hc ? J.expression : J, V, K);
				}
				f(V, G, K) {
					const J = V instanceof S.$9Hc;
					J || !V.name
						? (G.label.set(""),
							(0, s.$dIc)(
								G.elementDisposable,
								J ? V.expression : V,
								G.value,
								{ colorize: !0, linkDetector: this.i, hover: !1 },
								this.c,
							),
							G.expression.classList.remove("nested-variable"))
						: ((0, s.$eIc)(
								G.elementDisposable,
								this.j,
								this.c,
								V,
								G,
								!0,
								K,
								this.i,
							),
							G.expression.classList.toggle("nested-variable", B(V)));
				}
				g(V) {}
			};
			(e.$IJc = R),
				(e.$IJc =
					R =
					k =
						Ne([j(1, $.$75), j(2, n.$Wxb), j(3, c.$ek), j(4, g.$Uyb)], R));
			class O {
				static {
					this.ID = "rawObject";
				}
				constructor(V, G) {
					(this.a = V), (this.b = G);
				}
				get templateId() {
					return O.ID;
				}
				renderTemplate(V) {
					V.classList.add("output");
					const G = t.$fhb(V, L(".output.expression")),
						K = t.$fhb(G, L("span.name")),
						J = new w.$Wob(K),
						W = t.$fhb(G, L("span.value"));
					return {
						container: V,
						expression: G,
						name: K,
						label: J,
						value: W,
						elementStore: new m.$Zc(),
					};
				}
				renderElement(V, G, K) {
					K.elementStore.clear();
					const J = V.element;
					K.label.set(J.name ? `${J.name}:` : "", (0, d.$3k)(V.filterData)),
						J.name
							? (K.name.textContent = `${J.name}:`)
							: (K.name.textContent = ""),
						(0, s.$dIc)(
							K.elementStore,
							J.value,
							K.value,
							{ linkDetector: this.a, hover: !1 },
							this.b,
						);
				}
				disposeTemplate(V) {
					V.elementStore.dispose(), V.label.dispose();
				}
			}
			e.$JJc = O;
			function B(q) {
				return (
					q instanceof v.$K3 &&
					(q.parent instanceof S.$_Hc || q.parent instanceof v.$K3)
				);
			}
			class U extends C.$Cib {
				constructor(V, G) {
					super(), (this.a = V), (this.b = G);
				}
				getHeight(V) {
					return this.a.getValue("debug").console.wordWrap
						? super.getHeight(V)
						: this.d(V, !0);
				}
				d(V, G = !1) {
					const K = this.b.replConfiguration.lineHeight,
						J = (X) => X.match(/\n/g)?.length ?? 0;
					if (((X) => typeof X.value == "string")(V) && !B(V)) {
						const X = V.value,
							Y =
								J(X) +
								(G ? 0 : Math.floor(X.length / 70)) +
								(V instanceof S.$8Hc ? 0 : 1);
						return Math.max(Y, 1) * K;
					}
					return K;
				}
				getTemplateId(V) {
					return V instanceof v.$K3 || V instanceof S.$9Hc
						? R.ID
						: V instanceof S.$_Hc
							? N.ID
							: V instanceof S.$$Hc
								? D.ID
								: V instanceof S.$8Hc
									? A.ID
									: V instanceof S.$aIc
										? M.ID
										: O.ID;
				}
				hasDynamicHeight(V) {
					return B(V) ? !1 : V.toString().length > 0;
				}
			}
			e.$KJc = U;
			function z(q) {
				return typeof q.getReplElements == "function";
			}
			class F {
				hasChildren(V) {
					return z(V) ? !0 : !!V.hasChildren;
				}
				getChildren(V) {
					return z(V)
						? Promise.resolve(V.getReplElements())
						: Promise.resolve(V.getChildren());
				}
			}
			e.$LJc = F;
			class x {
				getWidgetAriaLabel() {
					return (0, h.localize)(5718, null);
				}
				getAriaLabel(V) {
					return V instanceof v.$K3
						? (0, h.localize)(5719, null, V.name, V.value)
						: V instanceof S.$8Hc || V instanceof S.$$Hc || V instanceof S.$_Hc
							? V.value +
								(V instanceof S.$8Hc && V.count > 1
									? (0, h.localize)(5720, null, V.count)
									: "")
							: V instanceof S.$0Hc
								? (0, h.localize)(5721, null, V.name, V.value)
								: V instanceof S.$aIc
									? (0, h.localize)(5722, null, V.name)
									: "";
				}
			}
			e.$MJc = x;
			let H = class extends m.$1c {
				constructor(V, G, K, J) {
					super(),
						(this.f = K),
						(this.g = J),
						(this.a = t.$fhb(V, L(".source"))),
						this.D(
							t.$0fb(this.a, "click", (W) => {
								W.preventDefault(),
									W.stopPropagation(),
									this.b &&
										this.b.source.openInEditor(G, {
											startLineNumber: this.b.lineNumber,
											startColumn: this.b.column,
											endLineNumber: this.b.lineNumber,
											endColumn: this.b.column,
										});
							}),
						);
				}
				setSource(V) {
					(this.b = V),
						(this.a.textContent = V
							? `${(0, r.$sc)(V.source.name)}:${V.lineNumber}`
							: ""),
						(this.c ??= this.D(
							this.f.setupManagedHover((0, E.$cib)("mouse"), this.a, ""),
						)),
						this.c.update(
							V ? `${this.g.getUriLabel(V.source.uri)}:${V.lineNumber}` : "",
						);
				}
			};
			H = Ne([j(1, I.$IY), j(2, g.$Uyb), j(3, o.$3N)], H);
		},
	),
		define(
			de[847],
			he([
				1, 0, 7, 127, 651, 15, 138, 6, 647, 27, 3, 37, 26, 9, 56, 46, 65, 206,
				38, 17, 71, 74, 69, 67, 125, 328, 4, 92, 11, 121, 10, 8, 49, 413, 5,
				128, 39, 43, 93, 34, 41, 21, 32, 51, 35, 146, 60, 89, 521, 1332, 352,
				709, 3686, 3824, 112, 300, 843, 18, 518, 184, 72, 130, 417, 14, 2433,
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
				B,
				U,
				z,
				F,
				x,
				H,
				q,
				V,
				G,
				K,
				J,
				W,
				X,
				Y,
				ie,
				ne,
				ee,
				_,
				te,
				Q,
				Z,
				se,
				re,
				le,
				oe,
				ae,
				pe,
			) {
				"use strict";
				var $e, ye;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.Repl = void 0),
					(e.$OJc = Ee),
					(t = mt(t)),
					(i = mt(i));
				const ue = t.$,
					fe = "debug.repl.history",
					me = "debug.repl.filterHistory",
					ve = "debug.repl.filterValue",
					ge = "replinputdecoration";
				function be(Be) {
					Be.scrollTop = Be.scrollHeight - Be.renderHeight;
				}
				const Ce = new Set(),
					Le = { getId: (Be) => Be.getId() };
				let Fe = class extends G.$UMb {
					static {
						$e = this;
					}
					static {
						this.a = 50;
					}
					static {
						this.b = c.URI.parse(`${_.$25}:replinput`);
					}
					constructor(
						Se,
						ke,
						Ue,
						qe,
						Ae,
						Me,
						De,
						Re,
						je,
						Ve,
						Ze,
						et,
						rt,
						ft,
						bt,
						nt,
						lt,
						ct,
						gt,
						ht,
					) {
						const Rt = qe.get(ve, x.StorageScope.WORKSPACE, "");
						super(
							{
								...Se,
								filterOptions: {
									placeholder: (0, I.localize)(5693, null),
									text: Rt,
									history: JSON.parse(
										qe.get(me, x.StorageScope.WORKSPACE, "[]"),
									),
								},
							},
							ft,
							Ve,
							Ze,
							De,
							je,
							Ue,
							bt,
							Ae,
							nt,
							lt,
						),
							(this.vc = ke),
							(this.wc = qe),
							(this.xc = Me),
							(this.Ab = Ze),
							(this.zc = et),
							(this.Ac = rt),
							(this.yb = ft),
							(this.Cc = gt),
							(this.Dc = ht),
							(this.ab = 0),
							(this.hc = 1),
							(this.nc = !1),
							(this.pc = u.$1c.None),
							(this.uc = !1),
							(this.sc = ct.createMenu(P.$XX.DebugConsoleContext, De)),
							this.D(this.sc),
							(this.f = new m.$Job(
								JSON.parse(this.wc.get(fe, x.StorageScope.WORKSPACE, "[]")),
								100,
							)),
							(this.qc = new ne.$AJc()),
							(this.qc.filterQuery = Rt),
							(this.rc = _.$S5.bindTo(De)),
							(this.r = this.D(
								this.Db.createInstance(Oe, this.id, () => this.Zb().background),
							)),
							this.D(this.r.onDidChange(() => this.Hc())),
							Re.registerDecorationType("repl-decoration", ge, {}),
							this.rc.set(this.Kc),
							this.Ec();
					}
					Ec() {
						this.vc.getViewModel().focusedSession &&
							this.Fc(this.vc.getViewModel().focusedSession),
							this.D(
								this.vc
									.getViewModel()
									.onDidFocusSession(async (Se) => this.Fc(Se)),
							),
							this.D(
								this.vc
									.getViewModel()
									.onDidEvaluateLazyExpression(async (Se) => {
										Se instanceof te.$K3 &&
											this.m?.hasNode(Se) &&
											(await this.m.updateChildren(Se, !1, !0),
											await this.m.expand(Se));
									}),
							),
							this.D(
								this.vc.onWillNewSession(async (Se) => {
									const ke = this.m?.getInput();
									(!ke || ke.state === _.State.Inactive) &&
										(await this.selectSession(Se)),
										this.rc.set(this.Kc);
								}),
							),
							this.D(
								this.vc.onDidEndSession(async () => {
									await Promise.resolve(), this.rc.set(this.Kc);
								}),
							),
							this.D(
								this.Fb.onDidColorThemeChange(() => {
									this.Rc(!1), this.isVisible() && this.Sc();
								}),
							),
							this.D(
								this.onDidChangeBodyVisibility((Se) => {
									Se &&
										(this.ic ||
											(this.ic =
												this.xc.getModel($e.b) ||
												this.xc.createModel("", null, $e.b, !0)),
										this.Gc(),
										this.ec.setModel(this.ic),
										this.Sc(),
										this.Rc(!0),
										this.nc && ((this.nc = !1), this.Hc()));
								}),
							),
							this.D(
								this.Ab.onDidChangeConfiguration((Se) => {
									if (
										(Se.affectsConfiguration("debug.console.wordWrap") &&
											this.m &&
											(this.m.dispose(),
											(this.dc.innerText = ""),
											t.$9fb(this.dc),
											this.Nc()),
										Se.affectsConfiguration(
											"debug.console.acceptSuggestionOnEnter",
										))
									) {
										const ke = this.Ab.getValue("debug");
										this.ec.updateOptions({
											acceptSuggestionOnEnter:
												ke.console.acceptSuggestionOnEnter === "on"
													? "on"
													: "off",
										});
									}
								}),
							),
							this.D(
								this.Ac.onDidActiveEditorChange(() => {
									this.Gc();
								}),
							),
							this.D(
								this.filterWidget.onDidChangeFilterText(() => {
									(this.qc.filterQuery = this.filterWidget.getFilterText()),
										this.m && (this.m.refilter(), be(this.m));
								}),
							);
					}
					async Fc(Se) {
						Se &&
							(Ce.delete(Se),
							this.oc?.dispose(),
							Se.capabilities.supportsCompletionsRequest &&
								(this.oc = this.Cc.completionProvider.register(
									{
										scheme: _.$25,
										pattern: "**/replinput",
										hasAccessToAllModels: !0,
									},
									{
										_debugDisplayName: "debugConsole",
										triggerCharacters: Se.capabilities
											.completionTriggerCharacters || ["."],
										provideCompletionItems: async (ke, Ue, qe, Ae) => {
											this.jc(!1);
											const Me = this.ec.getModel();
											if (Me) {
												const De = Me.getWordAtPosition(Ue),
													Re = De ? De.word.length : 0,
													je = Me.getValue(),
													Ve = this.vc.getViewModel().focusedStackFrame,
													Ze = Ve ? Ve.frameId : void 0,
													et = await Se.completions(
														Ze,
														Ve?.thread.threadId || 0,
														je,
														Ue,
														Re,
														Ae,
													),
													rt = [],
													ft = (bt) =>
														b.$iL.fromPositions(Ue.delta(0, -bt), Ue);
												if (
													(et &&
														et.body &&
														et.body.targets &&
														et.body.targets.forEach((bt) => {
															if (bt && bt.label) {
																let nt,
																	lt = bt.text || bt.label;
																if (typeof bt.selectionStart == "number") {
																	nt =
																		l.CompletionItemInsertTextRule
																			.InsertAsSnippet;
																	const ct =
																			typeof bt.selectionLength == "number"
																				? bt.selectionLength
																				: 0,
																		gt =
																			ct > 0
																				? "${1:" +
																					lt.substring(
																						bt.selectionStart,
																						bt.selectionStart + ct,
																					) +
																					"}$0"
																				: "$0";
																	lt =
																		lt.substring(0, bt.selectionStart) +
																		gt +
																		lt.substring(bt.selectionStart + ct);
																}
																rt.push({
																	label: bt.label,
																	insertText: lt,
																	detail: bt.detail,
																	kind: l.CompletionItemKinds.fromString(
																		bt.type || "property",
																	),
																	filterText:
																		bt.start && bt.length
																			? je
																					.substring(
																						bt.start,
																						bt.start + bt.length,
																					)
																					.concat(bt.label)
																			: void 0,
																	range: ft(bt.length || Re),
																	sortText: bt.sortText,
																	insertTextRules: nt,
																});
															}
														}),
													this.Ab.getValue("debug").console.historySuggestions)
												) {
													const bt = this.f.getHistory(),
														nt = String(bt.length).length;
													bt.forEach((lt, ct) =>
														rt.push({
															label: lt,
															insertText: lt,
															kind: l.CompletionItemKind.Text,
															range: ft(lt.length),
															sortText:
																"ZZZ" +
																String(bt.length - ct).padStart(nt, "0"),
														}),
													);
												}
												return { suggestions: rt };
											}
											return Promise.resolve({ suggestions: [] });
										},
									},
								))),
							await this.selectSession();
					}
					getFilterStats() {
						return {
							total: this.m?.getNode().children.length ?? 0,
							filtered:
								this.m?.getNode().children.filter((Se) => Se.visible).length ??
								0,
						};
					}
					get isReadonly() {
						const Se = this.m?.getInput();
						return !(Se && Se.state !== _.State.Inactive);
					}
					showPreviousValue() {
						this.isReadonly || this.Ic(!0);
					}
					showNextValue() {
						this.isReadonly || this.Ic(!1);
					}
					focusFilter() {
						this.filterWidget.focus();
					}
					openFind() {
						this.m?.openFind();
					}
					Gc() {
						if (!this.isVisible()) return;
						const Se = this.Ac.activeTextEditorControl;
						(0, n.$0sb)(Se) &&
							(this.pc.dispose(),
							(this.pc = Se.onDidChangeModelLanguage(() => this.Gc())),
							this.ic &&
								Se.hasModel() &&
								this.ic.setLanguage(Se.getModel().getLanguageId()));
					}
					Hc() {
						if (!this.isVisible()) {
							this.nc = !0;
							return;
						}
						if (this.mc) {
							this.ec.updateOptions({
								fontSize: this.r.replConfiguration.fontSize,
								lineHeight: this.r.replConfiguration.lineHeight,
								fontFamily:
									this.r.replConfiguration.fontFamily === "default"
										? f.EDITOR_FONT_DEFAULTS.fontFamily
										: this.r.replConfiguration.fontFamily,
							});
							const Se = this.ec.getOption(f.EditorOption.lineHeight);
							this.mc.textContent = `
				.repl .repl-input-wrapper .repl-input-chevron {
					line-height: ${Se}px
				}

				.repl .repl-input-wrapper .monaco-editor .lines-content {
					background-color: ${this.r.replConfiguration.backgroundColor};
				}
			`;
							const ke =
								this.r.replConfiguration.fontFamily === "default"
									? "var(--monaco-monospace-font)"
									: this.r.replConfiguration.fontFamily;
							this.cc.style.setProperty("--vscode-repl-font-family", ke),
								this.cc.style.setProperty(
									"--vscode-repl-font-size",
									`${this.r.replConfiguration.fontSize}px`,
								),
								this.cc.style.setProperty(
									"--vscode-repl-font-size-for-twistie",
									`${this.r.replConfiguration.fontSizeForTwistie}px`,
								),
								this.cc.style.setProperty(
									"--vscode-repl-line-height",
									this.r.replConfiguration.cssLineHeight,
								),
								this.m?.rerender(),
								this.gc && this.L(this.gc.height, this.gc.width);
						}
					}
					Ic(Se) {
						const ke =
							(Se ? (this.f.previous() ?? this.f.first()) : this.f.next()) ??
							"";
						this.ec.setValue(ke),
							i.$pib(ke),
							this.ec.setPosition({ lineNumber: 1, column: ke.length + 1 }),
							this.jc(!0);
					}
					async selectSession(Se) {
						const ke = this.m?.getInput();
						if (!Se) {
							const Ue = this.vc.getViewModel().focusedSession;
							Ue
								? (Se = Ue)
								: (!ke || Ce.has(ke)) &&
									(Se = this.vc
										.getModel()
										.getSessions(!0)
										.find((qe) => !Ce.has(qe)));
						}
						if (
							Se &&
							(this.lc?.dispose(),
							(this.lc = Se.onDidChangeReplElements(() => {
								this.Rc(Se.getReplElements().length === 0);
							})),
							this.m && ke !== Se)
						) {
							try {
								await this.m.setInput(Se);
							} catch (Ue) {
								this.Dc.error(Ue);
							}
							be(this.m);
						}
						this.ec?.updateOptions({ readOnly: this.isReadonly }), this.Sc();
					}
					async clearRepl() {
						const Se = this.m?.getInput();
						Se &&
							(Se.removeReplExpressions(),
							Se.state === _.State.Inactive &&
								(Ce.add(Se), await this.selectSession(), this.rc.set(this.Kc))),
							this.ec.focus();
					}
					acceptReplInput() {
						const Se = this.m?.getInput();
						if (Se && !this.isReadonly) {
							Se.addReplExpression(
								this.vc.getViewModel().focusedStackFrame,
								this.ec.getValue(),
							),
								be(this.m),
								this.f.add(this.ec.getValue()),
								this.ec.setValue("");
							const ke = this.hc > 1;
							(this.hc = 1),
								ke && this.gc && this.L(this.gc.height, this.gc.width);
						}
					}
					sendReplInput(Se) {
						const ke = this.m?.getInput();
						ke &&
							!this.isReadonly &&
							(ke.addReplExpression(
								this.vc.getViewModel().focusedStackFrame,
								Se,
							),
							be(this.m),
							this.f.add(Se));
					}
					getVisibleContent() {
						let Se = "";
						if (this.ic && this.m) {
							const ke = this.zc.getEOL(this.ic.uri),
								Ue = (qe) => {
									qe.children.forEach((Ae) => {
										Ae.visible &&
											((Se += Ae.element.toString().trimRight() + ke),
											!Ae.collapsed && Ae.children.length && Ue(Ae));
									});
								};
							Ue(this.m.getNode());
						}
						return (0, a.$9f)(Se);
					}
					L(Se, ke) {
						this.gc = new t.$pgb(ke, Se);
						const Ue = Math.min(this.ec.getContentHeight(), Se);
						if (this.m) {
							const qe =
									this.m.scrollTop + this.m.renderHeight >= this.m.scrollHeight,
								Ae = Se - Ue;
							(this.m.getHTMLElement().style.height = `${Ae}px`),
								this.m.layout(Ae, ke),
								qe && be(this.m);
						}
						(this.fc.style.height = `${Ue}px`),
							this.ec.layout({ width: ke - 30, height: Ue });
					}
					collapseAll() {
						this.m?.collapseAll();
					}
					getDebugSession() {
						return this.m?.getInput();
					}
					getReplInput() {
						return this.ec;
					}
					getReplDataSource() {
						return this.tc;
					}
					getFocusedElement() {
						return this.m?.getFocus()?.[0];
					}
					focusTree() {
						this.m?.domFocus();
					}
					focus() {
						super.focus(), setTimeout(() => this.ec.focus(), 0);
					}
					getActionViewItem(Se) {
						if (Se.id === Ie) {
							const ke =
								(this.m ? this.m.getInput() : void 0) ??
								this.vc.getViewModel().focusedSession;
							return this.Db.createInstance(Te, Se, ke);
						}
						return super.getActionViewItem(Se);
					}
					get Kc() {
						return (
							this.vc
								.getModel()
								.getSessions(!0)
								.filter((Se) => Se.hasSeparateRepl() && !Ce.has(Se)).length > 1
						);
					}
					get Lc() {
						const Se = new Set();
						return new E.$Yh(async () => {
							if (!this.m || !this.m.getInput()) return;
							await this.m.updateChildren(void 0, !0, !1, {
								diffIdentityProvider: Le,
							});
							const ke = this.m.getInput();
							if (ke) {
								const Ae = async (Me) => {
									for (const De of Me)
										De instanceof Q.$aIc &&
											(De.autoExpand &&
												!Se.has(De.getId()) &&
												(Se.add(De.getId()), await this.m.expand(De)),
											this.m.isCollapsed(De) || (await Ae(De.getChildren())));
								};
								await Ae(ke.getReplElements());
							}
							const { total: Ue, filtered: qe } = this.getFilterStats();
							this.filterWidget.updateBadge(
								Ue === qe || Ue === 0
									? void 0
									: (0, I.localize)(5694, null, qe, Ue),
							);
						}, $e.a);
					}
					render() {
						super.render(),
							this.D(
								(0, se.$D3b)({
									name: "repl",
									focusNotifiers: [this, this.filterWidget],
									focusNextWidget: () => {
										const Se = this.m?.getHTMLElement();
										this.filterWidget.hasFocus()
											? this.m?.domFocus()
											: Se && t.$Kgb(Se) && this.focus();
									},
									focusPreviousWidget: () => {
										const Se = this.m?.getHTMLElement();
										this.ec.hasTextFocus()
											? this.m?.domFocus()
											: Se && t.$Kgb(Se) && this.focusFilter();
									},
								}),
							);
					}
					W(Se) {
						super.W(Se),
							(this.cc = t.$fhb(Se, ue(".repl"))),
							(this.dc = t.$fhb(this.cc, ue(`.repl-tree.${w.$0ob}`))),
							this.Oc(this.cc),
							this.Nc();
					}
					Nc() {
						this.sb = new ee.$KJc(this.Ab, this.r);
						const Se = this.Ab.getValue("debug").console.wordWrap;
						this.dc.classList.toggle("word-wrap", Se);
						const ke = this.Db.createInstance(ie.$7Hc);
						this.tc = new ee.$LJc();
						const Ue = (this.m = this.Db.createInstance(
							U.$FMb,
							"DebugRepl",
							this.dc,
							this.sb,
							[
								this.Db.createInstance(ee.$IJc, ke),
								this.Db.createInstance(ee.$HJc, ke),
								new ee.$EJc(),
								this.Db.createInstance(ee.$FJc, ke),
								new ee.$GJc(ke, this.Hb),
								new ee.$JJc(ke, this.Hb),
							],
							this.tc,
							{
								filter: this.qc,
								accessibilityProvider: new ee.$MJc(),
								identityProvider: Le,
								mouseSupport: !1,
								findWidgetEnabled: !0,
								keyboardNavigationLabelProvider: {
									getKeyboardNavigationLabel: (Ae) => Ae.toString(!0),
								},
								horizontalScrolling: !Se,
								setRowLineHeight: !1,
								supportDynamicHeights: Se,
								overrideStyles: this.Zb().listOverrideStyles,
							},
						));
						this.D(
							Ue.onDidChangeContentHeight(() => {
								Ue.scrollHeight !== this.ab &&
									Ue.scrollTop + Ue.renderHeight >= this.ab - 2 &&
									setTimeout(() => {
										be(Ue);
									}, 0),
									(this.ab = Ue.scrollHeight);
							}),
						),
							this.D(Ue.onContextMenu((Ae) => this.Qc(Ae))),
							this.D(Ue.onDidChangeFindOpenState((Ae) => (this.uc = Ae)));
						let qe;
						this.D(
							Ue.onMouseClick(() => {
								if (this.uc) return;
								const Ae = t.getWindow(this.dc).getSelection();
								(!Ae || Ae.type !== "Range" || qe === Ae.toString()) &&
									this.ec.focus(),
									(qe = Ae ? Ae.toString() : "");
							}),
						),
							this.selectSession(),
							(this.mc = t.$Rgb(this.cc)),
							this.Hc();
					}
					Oc(Se) {
						(this.fc = t.$fhb(Se, ue(".repl-input-wrapper"))),
							t.$fhb(
								this.fc,
								ue(".repl-input-chevron" + h.ThemeIcon.asCSSSelector(Y.$JKb)),
							);
						const {
							historyNavigationBackwardsEnablement: ke,
							historyNavigationForwardsEnablement: Ue,
						} = this.D((0, N.$UCb)(this.xb, this));
						(this.jc = (Me) => {
							ke.set(Me), Ue.set(Me);
						}),
							_.$84.bindTo(this.xb).set(!0),
							(this.kc = this.D(
								this.Db.createChild(new R.$Ki([D.$6j, this.xb])),
							));
						const qe = (0, W.$xYb)(this.Ab);
						(qe.readOnly = !0), (qe.suggest = { showStatusBar: !0 });
						const Ae = this.Ab.getValue("debug");
						(qe.acceptSuggestionOnEnter =
							Ae.console.acceptSuggestionOnEnter === "on" ? "on" : "off"),
							(qe.ariaLabel = this.Pc()),
							(this.ec = this.kc.createInstance(
								o.$rwb,
								this.fc,
								qe,
								(0, W.$yYb)(),
							)),
							this.D(
								this.ec.onDidChangeModelContent(() => {
									const Me = this.ec.getModel();
									this.jc(!!Me && Me.getValue() === "");
									const De = Me ? Math.min(10, Me.getLineCount()) : 1;
									De !== this.hc &&
										((this.hc = De),
										this.gc && this.L(this.gc.height, this.gc.width));
								}),
							),
							this.D(this.ec.onDidFocusEditorText(() => this.Sc())),
							this.D(this.ec.onDidBlurEditorText(() => this.Sc())),
							this.D(
								t.$$fb(this.fc, t.$$gb.FOCUS, () =>
									this.fc.classList.add("synthetic-focus"),
								),
							),
							this.D(
								t.$$fb(this.fc, t.$$gb.BLUR, () =>
									this.fc.classList.remove("synthetic-focus"),
								),
							);
					}
					Pc() {
						let Se = (0, I.localize)(5695, null);
						if (!this.Ab.getValue(oe.AccessibilityVerbositySettingId.Debug))
							return Se;
						const ke = this.yb
							.lookupKeybinding(ae.AccessibilityCommandId.OpenAccessibilityHelp)
							?.getAriaLabel();
						return (
							ke
								? (Se = (0, I.localize)(5696, null, Se, ke))
								: (Se = (0, I.localize)(5697, null, Se)),
							Se
						);
					}
					Qc(Se) {
						const ke = [];
						(0, T.$Jyb)(
							this.sc,
							{ arg: Se.element, shouldForwardArgs: !1 },
							ke,
						),
							this.zb.showContextMenu({
								getAnchor: () => Se.anchor,
								getActions: () => ke,
								getActionsContext: () => Se.element,
							});
					}
					Rc(Se) {
						if (this.m && this.isVisible()) {
							if (this.Lc.isScheduled()) return;
							this.Lc.schedule(Se ? 0 : void 0);
						}
					}
					Sc() {
						if (!this.ec) return;
						const Se = [];
						if (
							this.isReadonly &&
							this.ec.hasTextFocus() &&
							!this.ec.getValue()
						) {
							const ke = (0, q.$GP)(
								q.$9P,
								this.Fb.getColorTheme(),
							)?.transparent(0.4);
							Se.push({
								range: {
									startLineNumber: 0,
									endLineNumber: 0,
									startColumn: 0,
									endColumn: 1,
								},
								renderOptions: {
									after: {
										contentText: (0, I.localize)(5698, null),
										color: ke ? ke.toString() : void 0,
									},
								},
							});
						}
						this.ec.setDecorationsByType("repl-decoration", ge, Se);
					}
					saveState() {
						const Se = this.f.getHistory();
						Se.length
							? this.wc.store(
									fe,
									JSON.stringify(Se),
									x.StorageScope.WORKSPACE,
									x.StorageTarget.MACHINE,
								)
							: this.wc.remove(fe, x.StorageScope.WORKSPACE);
						const ke = this.filterWidget.getHistory();
						ke.length
							? this.wc.store(
									me,
									JSON.stringify(ke),
									x.StorageScope.WORKSPACE,
									x.StorageTarget.MACHINE,
								)
							: this.wc.remove(me, x.StorageScope.WORKSPACE);
						const Ue = this.filterWidget.getFilterText();
						Ue
							? this.wc.store(
									ve,
									Ue,
									x.StorageScope.WORKSPACE,
									x.StorageTarget.MACHINE,
								)
							: this.wc.remove(ve, x.StorageScope.WORKSPACE),
							super.saveState();
					}
					dispose() {
						this.ec?.dispose(),
							this.lc?.dispose(),
							this.Lc.dispose(),
							this.pc.dispose(),
							super.dispose();
					}
				};
				(e.Repl = Fe),
					Ne([C.$ei], Fe.prototype, "Lc", null),
					(e.Repl =
						Fe =
						$e =
							Ne(
								[
									j(1, _.$75),
									j(2, A.$Li),
									j(3, x.$lq),
									j(4, V.$iP),
									j(5, $.$QO),
									j(6, D.$6j),
									j(7, p.$dtb),
									j(8, K.$K1),
									j(9, M.$Xxb),
									j(10, L.$gj),
									j(11, v.$YO),
									j(12, Z.$IY),
									j(13, O.$uZ),
									j(14, F.$7rb),
									j(15, H.$km),
									j(16, le.$Uyb),
									j(17, P.$YX),
									j(18, y.$k3),
									j(19, z.$ik),
								],
								Fe,
							));
				let Oe = class extends u.$1c {
					static {
						ye = this;
					}
					static {
						this.a = 1.4;
					}
					get replConfiguration() {
						return this.f;
					}
					constructor(Se, ke, Ue, qe, Ae) {
						super(),
							(this.g = ke),
							(this.j = Ue),
							(this.m = qe),
							(this.n = Ae),
							(this.b = this.D(new d.$re())),
							(this.onDidChange = this.b.event),
							this.D(this.m.onDidColorThemeChange((Me) => this.q())),
							this.D(
								this.n.onDidChangeLocation((Me) => {
									Me.views.some((De) => De.id === Se) && this.q();
								}),
							),
							this.D(
								this.j.onDidChangeConfiguration((Me) => {
									(Me.affectsConfiguration("debug.console.lineHeight") ||
										Me.affectsConfiguration("debug.console.fontSize") ||
										Me.affectsConfiguration("debug.console.fontFamily")) &&
										this.q();
								}),
							),
							this.q();
					}
					q() {
						const Se = this.j.getValue("debug").console;
						(this.f = {
							fontSize: Se.fontSize,
							fontFamily: Se.fontFamily,
							lineHeight: Se.lineHeight ? Se.lineHeight : ye.a * Se.fontSize,
							cssLineHeight: Se.lineHeight ? `${Se.lineHeight}px` : `${ye.a}em`,
							backgroundColor: this.m.getColorTheme().getColor(this.g()),
							fontSizeForTwistie: (Se.fontSize * ye.a) / 2 - 8,
						}),
							this.b.fire();
					}
				};
				Oe = ye = Ne([j(2, L.$gj), j(3, V.$iP), j(4, K.$K1)], Oe);
				class xe extends g.$itb {
					constructor() {
						super({
							id: "repl.action.acceptInput",
							label: (0, I.localize)(5699, null),
							alias: "Debug Console: Accept Input",
							precondition: _.$84,
							kbOpts: {
								kbExpr: s.EditorContextKeys.textInputFocus,
								primary: r.KeyCode.Enter,
								weight: B.KeybindingWeight.EditorContrib,
							},
						});
					}
					run(Se, ke) {
						S.$KDb.get(ke)?.cancelSuggestWidget(),
							Ee(Se.get(J.$HMb))?.acceptReplInput();
					}
				}
				class He extends G.$WMb {
					constructor() {
						super({
							viewId: _.$Y4,
							id: "repl.action.filter",
							title: (0, I.localize)(5700, null),
							precondition: _.$84,
							keybinding: [
								{
									when: s.EditorContextKeys.textInputFocus,
									primary: r.KeyMod.CtrlCmd | r.KeyCode.KeyF,
									weight: B.KeybindingWeight.EditorContrib,
								},
							],
						});
					}
					runInView(Se, ke) {
						ke.focusFilter();
					}
				}
				class Ke extends G.$WMb {
					constructor() {
						super({
							viewId: _.$Y4,
							id: "repl.action.find",
							title: (0, I.localize)(5701, null),
							precondition: _.$84,
							keybinding: [
								{
									when: D.$Kj.or(
										_.$84,
										D.$Kj.equals("focusedView", "workbench.panel.repl.view"),
									),
									primary: r.KeyMod.CtrlCmd | r.KeyMod.Alt | r.KeyCode.KeyF,
									weight: B.KeybindingWeight.EditorContrib,
								},
							],
							icon: pe.$ak.search,
							menu: [
								{
									id: P.$XX.ViewTitle,
									group: "navigation",
									when: D.$Kj.equals("view", _.$Y4),
									order: 15,
								},
								{
									id: P.$XX.DebugConsoleContext,
									group: "z_commands",
									order: 25,
								},
							],
						});
					}
					runInView(Se, ke) {
						ke.openFind();
					}
				}
				class Je extends g.$itb {
					constructor() {
						super({
							id: "repl.action.copyAll",
							label: (0, I.localize)(5702, null),
							alias: "Debug Console Copy All",
							precondition: _.$84,
						});
					}
					run(Se, ke) {
						const Ue = Se.get(k.$Vxb),
							qe = Ee(Se.get(J.$HMb));
						if (qe) return Ue.writeText(qe.getVisibleContent());
					}
				}
				(0, g.$ntb)(xe), (0, g.$ntb)(Je), (0, P.$4X)(He), (0, P.$4X)(Ke);
				class Te extends X.$zJc {
					M() {
						return this.a
							.getModel()
							.getSessions(!0)
							.filter((Se) => Se.hasSeparateRepl() && !Ce.has(Se));
					}
					N(Se) {
						for (; Se.parentSession && !Se.hasSeparateRepl(); )
							Se = Se.parentSession;
						return Se;
					}
				}
				function Ee(Be) {
					return Be.getActiveViewWithId(_.$Y4) ?? void 0;
				}
				const Ie = "workbench.action.debug.selectRepl";
				(0, P.$4X)(
					class extends G.$WMb {
						constructor() {
							super({
								id: Ie,
								viewId: _.$Y4,
								title: (0, I.localize)(5703, null),
								f1: !1,
								menu: {
									id: P.$XX.ViewTitle,
									group: "navigation",
									when: D.$Kj.and(D.$Kj.equals("view", _.$Y4), _.$S5),
									order: 20,
								},
							});
						}
						async runInView(Be, Se, ke) {
							const Ue = Be.get(_.$75);
							if (
								ke &&
								ke.state !== _.State.Inactive &&
								ke !== Ue.getViewModel().focusedSession
							) {
								if (ke.state !== _.State.Stopped) {
									const qe = Ue.getModel()
										.getSessions()
										.find(
											(Ae) =>
												Ae.parentSession === ke && Ae.state === _.State.Stopped,
										);
									qe && (ke = qe);
								}
								await Ue.focusStackFrame(void 0, void 0, ke, { explicit: !0 });
							}
							await Se.selectSession(ke);
						}
					},
				),
					(0, P.$4X)(
						class extends G.$WMb {
							constructor() {
								super({
									id: "workbench.debug.panel.action.clearReplAction",
									viewId: _.$Y4,
									title: (0, I.localize2)(5708, "Clear Console"),
									metadata: {
										description: (0, I.localize2)(
											5709,
											"Clears all program output from your debug REPL",
										),
									},
									f1: !0,
									icon: Y.$AKb,
									menu: [
										{
											id: P.$XX.ViewTitle,
											group: "navigation",
											when: D.$Kj.equals("view", _.$Y4),
											order: 30,
										},
										{
											id: P.$XX.DebugConsoleContext,
											group: "z_commands",
											order: 20,
										},
									],
									keybinding: [
										{
											primary: 0,
											mac: { primary: r.KeyMod.CtrlCmd | r.KeyCode.KeyK },
											weight: B.KeybindingWeight.WorkbenchContrib + 1,
											when: D.$Kj.equals(
												"focusedView",
												"workbench.panel.repl.view",
											),
										},
									],
								});
							}
							runInView(Be, Se) {
								const ke = Be.get(re.$Owb);
								Se.clearRepl(), ke.playSignal(re.$Twb.clear);
							}
						},
					),
					(0, P.$4X)(
						class extends G.$WMb {
							constructor() {
								super({
									id: "debug.collapseRepl",
									title: (0, I.localize)(5704, null),
									viewId: _.$Y4,
									menu: {
										id: P.$XX.DebugConsoleContext,
										group: "z_commands",
										order: 10,
									},
								});
							}
							runInView(Be, Se) {
								Se.collapseAll(), Se.focus();
							}
						},
					),
					(0, P.$4X)(
						class extends G.$WMb {
							constructor() {
								super({
									id: "debug.replPaste",
									title: (0, I.localize)(5705, null),
									viewId: _.$Y4,
									precondition: _.$24.notEqualsTo((0, _.$45)(_.State.Inactive)),
									menu: {
										id: P.$XX.DebugConsoleContext,
										group: "2_cutcopypaste",
										order: 30,
									},
								});
							}
							async runInView(Be, Se) {
								const Ue = await Be.get(k.$Vxb).readText();
								if (Ue) {
									const qe = Se.getReplInput();
									qe.setValue(qe.getValue().concat(Ue)), Se.focus();
									const Ae = qe.getModel(),
										Me = Ae ? Ae.getLineCount() : 0,
										De = Ae?.getLineMaxColumn(Me);
									typeof Me == "number" &&
										typeof De == "number" &&
										qe.setPosition({ lineNumber: Me, column: De });
								}
							}
						},
					),
					(0, P.$4X)(
						class extends G.$WMb {
							constructor() {
								super({
									id: "workbench.debug.action.copyAll",
									title: (0, I.localize)(5706, null),
									viewId: _.$Y4,
									menu: {
										id: P.$XX.DebugConsoleContext,
										group: "2_cutcopypaste",
										order: 20,
									},
								});
							}
							async runInView(Be, Se) {
								await Be.get(k.$Vxb).writeText(Se.getVisibleContent());
							}
						},
					),
					(0, P.$4X)(
						class extends P.$3X {
							constructor() {
								super({
									id: "debug.replCopy",
									title: (0, I.localize)(5707, null),
									menu: {
										id: P.$XX.DebugConsoleContext,
										group: "2_cutcopypaste",
										order: 10,
									},
								});
							}
							async run(Be, Se) {
								const ke = Be.get(k.$Vxb),
									Ue = Be.get(_.$75),
									Ae = t.$Ogb().getSelection()?.toString();
								if (Ae && Ae.length > 0) return ke.writeText(Ae);
								if (Se)
									return ke.writeText((await this.a(Ue, Se)) || Se.toString());
							}
							async a(Be, Se) {
								if (!(Se instanceof Q.$_Hc)) return;
								const ke = Be.getViewModel().focusedStackFrame,
									Ue = Be.getViewModel().focusedSession;
								if (!(!ke || !Ue || !Ue.capabilities.supportsClipboardContext))
									try {
										return (
											await Ue.evaluate(
												Se.originalExpression,
												ke.frameId,
												"clipboard",
											)
										)?.body.result;
									} catch {
										return;
									}
							}
						},
					);
			},
		),
		define(
			de[3825],
			he([1, 0, 178, 8, 3, 847, 89, 130, 4]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$nRc = void 0);
				class r {
					constructor() {
						(this.priority = 120),
							(this.name = "replHelp"),
							(this.when = i.$Kj.equals(
								"focusedView",
								"workbench.panel.repl.view",
							)),
							(this.type = t.AccessibleViewType.Help);
					}
					getProvider(h) {
						const c = h.get(C.$HMb),
							n = (0, E.$OJc)(c);
						if (n) return new u(n);
					}
				}
				e.$nRc = r;
				class u extends w.$1c {
					constructor(h) {
						super(),
							(this.b = h),
							(this.id = t.AccessibleViewProviderId.ReplHelp),
							(this.verbositySettingKey =
								d.AccessibilityVerbositySettingId.Debug),
							(this.options = { type: t.AccessibleViewType.Help }),
							(this.a = !1),
							(this.a = !!h.getFocusedElement());
					}
					onClose() {
						if (this.a) return this.b.focusTree();
						this.b.getReplInput().focus();
					}
					provideContent() {
						return [
							(0, m.localize)(
								5710,
								null,
								"<keybinding:workbench.panel.repl.view.focus>",
							),
							(0, m.localize)(
								5711,
								null,
								"<keybinding:widgetNavigation.focusPrevious>",
							),
							(0, m.localize)(
								5712,
								null,
								"<keybinding:widgetNavigation.focusNext>",
							),
							(0, m.localize)(5713, null),
							(0, m.localize)(
								5714,
								null,
								"<keybinding:editor.action.accessibleView>",
							),
							(0, m.localize)(5715, null, "<keybinding:workbench.view.debug>"),
							(0, m.localize)(
								5716,
								null,
								"<keybinding:workbench.debug.panel.action.clearReplAction>",
							),
							(0, m.localize)(5717, null),
						].join(`
`);
					}
				}
			},
		),
		define(
			de[3826],
			he([1, 0, 178, 130, 847, 89, 8, 6, 3, 48]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$pQc = void 0);
				class u {
					constructor() {
						(this.priority = 70),
							(this.name = "debugConsole"),
							(this.when = C.$Kj.equals(
								"focusedView",
								"workbench.panel.repl.view",
							)),
							(this.type = t.AccessibleViewType.View);
					}
					getProvider(c) {
						const n = c.get(E.$HMb),
							g = c.get(t.$HLb),
							p = (0, w.$OJc)(n);
						if (!p) return;
						const o = p.getFocusedElement();
						return new a(p, o, g);
					}
				}
				e.$pQc = u;
				let a = class extends m.$1c {
					constructor(c, n, g) {
						super(),
							(this.h = c),
							(this.j = n),
							(this.m = g),
							(this.id = t.AccessibleViewProviderId.Repl),
							(this.b = this.D(new d.$re())),
							(this.onDidChangeContent = this.b.event),
							(this.c = this.D(new d.$re())),
							(this.onDidResolveChildren = this.c.event),
							(this.verbositySettingKey =
								i.AccessibilityVerbositySettingId.Debug),
							(this.options = { type: t.AccessibleViewType.View }),
							(this.f = new Map()),
							(this.g = !1),
							(this.g = !!n);
					}
					provideContent() {
						const c = this.h.getDebugSession();
						if (!c) return "No debug session available.";
						const n = c.getReplElements();
						return n.length
							? (this.a || this.n(n),
								this.a ??
									n
										.map((g) => g.toString(!0))
										.join(`
`))
							: "No output in the debug console.";
					}
					onClose() {
						if (((this.a = void 0), this.f.clear(), this.g))
							return this.h.focusTree();
						this.h.getReplInput().focus();
					}
					onOpen() {
						this.D(
							this.onDidResolveChildren(() => {
								this.b.fire(),
									queueMicrotask(() => {
										if (this.j) {
											const c = this.f.get(this.j.getId());
											c && this.m.setPosition(c, !0);
										}
									});
							}),
						);
					}
					async n(c) {
						const n = this.h.getReplDataSource();
						if (!n) return;
						let g = 1;
						const p = [];
						for (const o of c)
							if (
								(p.push(o.toString().replace(/\n/g, "")),
								this.f.set(o.getId(), new r.$hL(g, 1)),
								g++,
								n.hasChildren(o))
							) {
								const f = [],
									b = await n.getChildren(o);
								for (const s of b) {
									const l = s.getId();
									this.f.has(l) || this.f.set(l, new r.$hL(g, 1)),
										f.push("  " + s.toString()),
										g++;
								}
								p.push(
									f.join(`
`),
								);
							}
						(this.a = p.join(`
`)),
							this.c.fire();
					}
				};
				a = Ne([j(2, t.$HLb)], a);
			},
		),
		define(
			de[3827],
			he([1, 0, 178, 8, 3, 130, 4, 31, 89, 761, 100, 112]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$pRc = void 0);
				class h {
					constructor() {
						(this.priority = 120),
							(this.name = "runAndDebugHelp"),
							(this.when = i.$Kj.or(
								i.$Kj.and(
									i.$Kj.equals("activeViewlet", "workbench.view.debug"),
									u.$hQb,
								),
								i.$Kj.equals(u.$zQb.key, a.$R4),
								i.$Kj.equals(u.$zQb.key, a.$S4),
								i.$Kj.equals(u.$zQb.key, a.$T4),
								i.$Kj.equals(u.$zQb.key, a.$U4),
								i.$Kj.equals(u.$zQb.key, a.$V4),
							)),
							(this.type = t.AccessibleViewType.Help);
					}
					getProvider(g) {
						return new c(g.get(d.$ek), g.get(m.$HMb));
					}
				}
				e.$pRc = h;
				let c = class extends w.$1c {
					constructor(g, p) {
						super(),
							(this.b = g),
							(this.c = p),
							(this.id = t.AccessibleViewProviderId.RunAndDebug),
							(this.verbositySettingKey =
								E.AccessibilityVerbositySettingId.Debug),
							(this.options = { type: t.AccessibleViewType.Help }),
							(this.a = this.c.getFocusedViewName());
					}
					onClose() {
						switch (this.a) {
							case "Watch":
								this.b.executeCommand("workbench.debug.action.focusWatchView");
								break;
							case "Variables":
								this.b.executeCommand(
									"workbench.debug.action.focusVariablesView",
								);
								break;
							case "Call Stack":
								this.b.executeCommand(
									"workbench.debug.action.focusCallStackView",
								);
								break;
							case "Breakpoints":
								this.b.executeCommand(
									"workbench.debug.action.focusBreakpointsView",
								);
								break;
							default:
								this.b.executeCommand("workbench.view.debug");
						}
					}
					provideContent() {
						return [
							(0, C.localize)(5723, null, "<keybinding:workbench.view.debug>"),
							(0, C.localize)(
								5724,
								null,
								"<keybinding:workbench.action.debug.start>",
							),
							(0, C.localize)(
								5725,
								null,
								"<keybinding:workbench.panel.repl.view.focus>",
							),
							r.AccessibilityHelpNLS.setBreakpoint,
							r.AccessibilityHelpNLS.addToWatch,
							(0, C.localize)(5726, null),
							(0, C.localize)(
								5727,
								null,
								"<keybinding:workbench.action.debug.restart>",
							),
							(0, C.localize)(
								5728,
								null,
								"<keybinding:workbench.action.debug.stop>",
							),
							(0, C.localize)(
								5729,
								null,
								"<keybinding:workbench.action.debug.continue>",
							),
							(0, C.localize)(
								5730,
								null,
								"<keybinding:workbench.action.debug.stepInto>",
							),
							(0, C.localize)(
								5731,
								null,
								"<keybinding:workbench.action.debug.stepOver>",
							),
							(0, C.localize)(
								5732,
								null,
								"<keybinding:workbench.action.debug.stepOut>",
							),
							(0, C.localize)(5733, null),
							(0, C.localize)(
								5734,
								null,
								"<keybinding:workbench.debug.action.focusBreakpointsView>",
							),
							(0, C.localize)(
								5735,
								null,
								"<keybinding:workbench.debug.action.focusCallStackView>",
							),
							(0, C.localize)(
								5736,
								null,
								"<keybinding:workbench.debug.action.focusVariablesView>",
							),
							(0, C.localize)(
								5737,
								null,
								"<keybinding:workbench.debug.action.focusWatchView>",
							),
							(0, C.localize)(
								5738,
								null,
								"accessibility.debugWatchVariableAnnouncements",
							),
						].join(`
`);
					}
				};
				c = Ne([j(0, d.$ek), j(1, m.$HMb)], c);
			},
		),
		define(
			de[1334],
			he([
				1, 0, 7, 410, 50, 24, 15, 33, 14, 132, 3, 26, 4, 92, 11, 121, 31, 10, 8,
				49, 72, 5, 39, 93, 40, 41, 84, 32, 35, 146, 60, 629, 425, 709, 112,
				1730, 300, 1039, 141, 18, 53,
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
				B,
				U,
				z,
				F,
			) {
				"use strict";
				var x, H;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$CQc =
						e.$BQc =
						e.$AQc =
						e.$zQc =
						e.$yQc =
						e.$xQc =
						e.$wQc =
						e.$uQc =
							void 0),
					(e.$vQc = W),
					(t = mt(t));
				const q = t.$;
				let V = !0,
					G,
					K,
					J = class extends k.$TMb {
						constructor($e, ye, ue, fe, me, ve, ge, be, Ce, Le, Fe, Oe, xe) {
							super($e, fe, ye, me, be, ge, ve, Ce, Le, Fe, Oe),
								(this.h = ue),
								(this.j = xe),
								(this.b = !1),
								(this.f = new Map()),
								(this.g = new Set()),
								(this.a = new C.$Yh(async () => {
									const He = this.h.getViewModel().focusedStackFrame;
									this.b = !1;
									const Ke = this.c.getInput();
									if (
										(Ke && this.f.set(Ke.getId(), this.c.getViewState()), !He)
									) {
										await this.c.setInput(null);
										return;
									}
									const Je = this.f.get(He.getId());
									await this.c.setInput(He, Je);
									const Ee = (await He.getScopes()).find((Ie) => !Ie.expensive);
									Ee &&
										this.c.hasNode(Ee) &&
										(this.g.add(Ee.getId()), await this.c.expand(Ee));
								}, 400));
						}
						W($e) {
							super.W($e),
								this.element.classList.add("debug-pane"),
								$e.classList.add("debug-variables");
							const ye = (0, D.$cIc)($e),
								ue = this.Db.createInstance(N.$7Hc);
							(this.c = this.Db.createInstance(
								$.$FMb,
								"VariablesView",
								ye,
								new _(),
								[
									this.Db.createInstance(se, ue),
									this.Db.createInstance(Z, ue),
									new te(),
									new Q(),
								],
								this.Db.createInstance(ee),
								{
									accessibilityProvider: new re(),
									identityProvider: { getId: (me) => me.getId() },
									keyboardNavigationLabelProvider: {
										getKeyboardNavigationLabel: (me) => me.name,
									},
									overrideStyles: this.Zb().listOverrideStyles,
								},
							)),
								this.D(
									Z.rendererOnVisualizationRange(this.h.getViewModel(), this.c),
								),
								this.c.setInput(
									this.h.getViewModel().focusedStackFrame ?? null,
								),
								A.$b5.bindTo(this.c.contextKeyService),
								this.D(
									this.h.getViewModel().onDidFocusStackFrame((me) => {
										if (!this.isBodyVisible()) {
											this.b = !0;
											return;
										}
										const ve = me.explicit ? 0 : void 0;
										this.a.schedule(ve);
									}),
								),
								this.D(
									this.h.getViewModel().onWillUpdateViews(() => {
										const me = this.h.getViewModel().focusedStackFrame;
										me && V && me.forgetScopes(),
											(V = !0),
											this.c.updateChildren();
									}),
								),
								this.D(this.c),
								this.D(this.c.onMouseDblClick((me) => this.r(me))),
								this.D(this.c.onContextMenu(async (me) => await this.L(me))),
								this.D(
									this.onDidChangeBodyVisibility((me) => {
										me && this.b && this.a.schedule();
									}),
								);
							let fe;
							this.D(
								this.h.getViewModel().onDidSelectExpression((me) => {
									const ve = me?.expression;
									ve && this.c.hasNode(ve)
										? ((fe = this.c.options.horizontalScrolling),
											fe && this.c.updateOptions({ horizontalScrolling: !1 }),
											this.c.rerender(ve))
										: !me &&
											fe !== void 0 &&
											(this.c.updateOptions({ horizontalScrolling: fe }),
											(fe = void 0));
								}),
							),
								this.D(
									this.h
										.getViewModel()
										.onDidEvaluateLazyExpression(async (me) => {
											me instanceof O.$K3 &&
												this.c.hasNode(me) &&
												(await this.c.updateChildren(me, !1, !0),
												await this.c.expand(me));
										}),
								),
								this.D(
									this.h.onDidEndSession(() => {
										this.f.clear(), this.g.clear();
									}),
								);
						}
						X($e, ye) {
							super.X(ye, $e), this.c.layout($e, ye);
						}
						focus() {
							super.focus(), this.c.domFocus();
						}
						collapseAll() {
							this.c.collapseAll();
						}
						r($e) {
							this.t($e.element) &&
								this.h.getViewModel().setSelectedExpression($e.element, !1);
						}
						t($e) {
							return this.h.getViewModel().focusedSession
								? $e instanceof O.$I3
									? !!$e.treeItem.canEdit
									: $e instanceof O.$K3 &&
										!$e.presentationHint?.attributes?.includes("readOnly") &&
										!$e.presentationHint?.lazy
								: !1;
						}
						async L($e) {
							const ye = $e.element;
							if (!(!(ye instanceof O.$K3) || !ye.value))
								return W(
									this.Bb,
									this.j,
									this.zb,
									n.$XX.DebugVariablesContext,
									$e,
								);
						}
					};
				(e.$uQc = J),
					(e.$uQc = J =
						Ne(
							[
								j(1, b.$Xxb),
								j(2, A.$75),
								j(3, y.$uZ),
								j(4, o.$gj),
								j(5, l.$Li),
								j(6, L.$K1),
								j(7, f.$6j),
								j(8, S.$7rb),
								j(9, P.$iP),
								j(10, T.$km),
								j(11, s.$Uyb),
								j(12, n.$YX),
							],
							J,
						));
				async function W(pe, $e, ye, ue, fe) {
					const me = fe.element;
					if (!(me instanceof O.$K3) || !me.value) return;
					const ve = await Y(pe, me),
						ge = X(me),
						be = $e.getMenuActions(ue, ve, { arg: ge, shouldForwardArgs: !1 }),
						Ce = [];
					(0, c.$Jyb)(be, { primary: [], secondary: Ce }, "inline"),
						ye.showContextMenu({
							getAnchor: () => fe.anchor,
							getActions: () => Ce,
						});
				}
				const X = (pe) => ({
					sessionId: pe.getSession()?.getId(),
					container:
						pe.parent instanceof O.$J3
							? { expression: pe.parent.name }
							: pe.parent.toDebugProtocolObject(),
					variable: pe.toDebugProtocolObject(),
				});
				async function Y(pe, $e) {
					const ye = $e.getSession();
					if (!ye || !ye.capabilities.supportsDataBreakpoints)
						return ie(pe, $e);
					const ue = [];
					K = await ye.dataBreakpointInfo($e.name, $e.parent.reference);
					const fe = K?.dataId,
						me = K?.accessTypes;
					if (!me) ue.push([A.$E5.key, !!fe]);
					else
						for (const ve of me)
							switch (ve) {
								case "read":
									ue.push([A.$G5.key, !!fe]);
									break;
								case "write":
									ue.push([A.$E5.key, !!fe]);
									break;
								case "readWrite":
									ue.push([A.$F5.key, !!fe]);
									break;
							}
					return ie(pe, $e, ue);
				}
				function ie(pe, $e, ye = []) {
					return (G = $e), (0, R.$C3)(pe, $e, ye);
				}
				function ne(pe) {
					return pe instanceof O.$N3;
				}
				class ee extends D.$fIc {
					hasChildren($e) {
						return $e ? (ne($e) ? !0 : $e.hasChildren) : !1;
					}
					c($e) {
						return ne($e) ? $e.getScopes() : $e.getChildren();
					}
				}
				class _ {
					getHeight($e) {
						return 22;
					}
					getTemplateId($e) {
						return $e instanceof O.$M3
							? Q.ID
							: $e instanceof O.$L3
								? te.ID
								: $e instanceof O.$I3
									? Z.ID
									: se.ID;
					}
				}
				class te {
					static {
						this.ID = "scope";
					}
					get templateId() {
						return te.ID;
					}
					renderTemplate($e) {
						const ye = t.$fhb($e, q(".scope")),
							ue = new i.$Wob(ye);
						return { name: ye, label: ue };
					}
					renderElement($e, ye, ue) {
						ue.label.set($e.element.name, (0, r.$3k)($e.filterData));
					}
					disposeTemplate($e) {
						$e.label.dispose();
					}
				}
				class Q {
					static {
						this.ID = "scopeError";
					}
					get templateId() {
						return Q.ID;
					}
					renderTemplate($e) {
						const ye = t.$fhb($e, q(".scope"));
						return { error: t.$fhb(ye, q(".error")) };
					}
					renderElement($e, ye, ue) {
						ue.error.innerText = $e.element.name;
					}
					disposeTemplate() {}
				}
				let Z = class extends D.$gIc {
					static {
						x = this;
					}
					static {
						this.ID = "viz";
					}
					static rendererOnVisualizationRange($e, ye) {
						return $e.onDidChangeVisualization(({ original: ue }) => {
							if (!ye.hasNode(ue)) return;
							const fe = ye.getParentElement(ue);
							ye.updateChildren(fe, !1, !1);
						});
					}
					constructor($e, ye, ue, fe, me, ve) {
						super(ye, ue, fe), (this.i = $e), (this.j = me), (this.k = ve);
					}
					get templateId() {
						return x.ID;
					}
					renderElement($e, ye, ue) {
						ue.elementDisposable.clear(), super.d($e.element, $e, ue);
					}
					f($e, ye, ue) {
						const fe = $e;
						let me = fe.name;
						fe.value && typeof fe.name == "string" && (me += ":"),
							ye.label.set(me, ue, fe.name),
							(0, D.$dIc)(
								ye.elementDisposable,
								fe,
								ye.value,
								{
									showChanged: !1,
									maxValueLength: 1024,
									colorize: !0,
									linkDetector: this.i,
								},
								this.c,
							);
					}
					g($e) {
						const ye = $e;
						return {
							initialValue: $e.value,
							ariaLabel: (0, h.localize)(5743, null),
							validationOptions: {
								validation: () =>
									ye.errorMessage ? { content: ye.errorMessage } : null,
							},
							onFinish: (ue, fe) => {
								(ye.errorMessage = void 0),
									fe &&
										ye.edit(ue).then(() => {
											(V = !1), this.a.getViewModel().updateViews();
										});
							},
						};
					}
					h($e, ye, ue) {
						const fe = ye,
							me = fe.original ? ie(this.k, fe.original) : this.k,
							ve = fe.original ? X(fe.original) : void 0,
							ge = this.j.getMenuActions(n.$XX.DebugVariablesContext, me, {
								arg: ve,
								shouldForwardArgs: !1,
							}),
							be = [];
						if (
							((0, c.$Jyb)(ge, { primary: be, secondary: [] }, "inline"),
							fe.original)
						) {
							const Ce = new w.$rj(
								"debugViz",
								(0, h.localize)(5744, null),
								a.ThemeIcon.asClassName(m.$ak.eye),
								!0,
								() =>
									this.a
										.getViewModel()
										.setVisualizedExpression(fe.original, void 0),
							);
							(Ce.checked = !0),
								be.push(Ce),
								($e.domNode.style.display = "initial");
						}
						$e.clear(), ($e.context = ve), $e.push(be, { icon: !0, label: !1 });
					}
				};
				(e.$wQc = Z),
					(e.$wQc =
						Z =
						x =
							Ne(
								[
									j(1, A.$75),
									j(2, b.$Wxb),
									j(3, s.$Uyb),
									j(4, n.$YX),
									j(5, f.$6j),
								],
								Z,
							));
				let se = class extends D.$gIc {
					static {
						H = this;
					}
					static {
						this.ID = "variable";
					}
					constructor($e, ye, ue, fe, me, ve, ge, be, Ce, Le) {
						super(ge, be, Ce),
							(this.i = $e),
							(this.j = ye),
							(this.k = ue),
							(this.l = fe),
							(this.m = me),
							(this.n = ve),
							(this.o = Le);
					}
					get templateId() {
						return H.ID;
					}
					f($e, ye, ue) {
						const fe = this.o.getValue("debug").showVariableTypes;
						(0, D.$eIc)(
							ye.elementDisposable,
							this.n,
							this.c,
							$e,
							ye,
							!0,
							ue,
							this.i,
							fe,
						);
					}
					renderElement($e, ye, ue) {
						ue.elementDisposable.clear(),
							ue.elementDisposable.add(
								this.o.onDidChangeConfiguration((fe) => {
									fe.affectsConfiguration("debug.showVariableTypes") &&
										super.d($e.element, $e, ue);
								}),
							),
							super.d($e.element, $e, ue);
					}
					g($e) {
						const ye = $e;
						return {
							initialValue: $e.value,
							ariaLabel: (0, h.localize)(5745, null),
							validationOptions: {
								validation: () =>
									ye.errorMessage ? { content: ye.errorMessage } : null,
							},
							onFinish: (ue, fe) => {
								ye.errorMessage = void 0;
								const me = this.a.getViewModel().focusedStackFrame;
								fe &&
									ye.value !== ue &&
									me &&
									ye.setVariable(ue, me).then(() => {
										(V = !1), this.a.getViewModel().updateViews();
									});
							},
						};
					}
					h($e, ye, ue) {
						const fe = ye,
							me = ie(this.k, fe),
							ve = [],
							ge = X(fe),
							be = this.j.getMenuActions(n.$XX.DebugVariablesContext, me, {
								arg: ge,
								shouldForwardArgs: !1,
							});
						(0, c.$Jyb)(be, { primary: ve, secondary: [] }, "inline"),
							$e.clear(),
							($e.context = ge),
							$e.push(ve, { icon: !0, label: !1 });
						const Ce = new d.$Ce();
						ue.elementDisposable.add((0, u.$Yc)(() => Ce.dispose(!0))),
							this.l.getApplicableFor(ye, Ce.token).then((Le) => {
								ue.elementDisposable.add(Le);
								const Fe = (ye instanceof O.$I3 && ye.original) || ye,
									Oe = Le.object.map(
										(xe) =>
											new w.$rj(
												"debugViz",
												xe.name,
												xe.iconClass || "debug-viz-icon",
												void 0,
												this.w(xe, Fe, Ce.token),
											),
									);
								Oe.length === 0 ||
									(Oe.length === 1
										? $e.push(Oe[0], { icon: !0, label: !1 })
										: $e.push(
												new w.$rj(
													"debugViz",
													(0, h.localize)(5746, null),
													a.ThemeIcon.asClassName(m.$ak.eye),
													void 0,
													() => this.u(Oe, Fe, ue),
												),
												{ icon: !0, label: !1 },
											));
							});
					}
					u($e, ye, ue) {
						this.m.showContextMenu({
							getAnchor: () => ue.actionBar.getContainer(),
							getActions: () => $e,
						});
					}
					w($e, ye, ue) {
						return async () => {
							const fe = await $e.resolve(ue);
							if (!ue.isCancellationRequested)
								if (fe.type === A.DebugVisualizationType.Command) $e.execute();
								else {
									const me = await this.l.getVisualizedNodeFor(fe.id, ye);
									me && this.a.getViewModel().setVisualizedExpression(ye, me);
								}
						};
					}
				};
				(e.$xQc = se),
					(e.$xQc =
						se =
						H =
							Ne(
								[
									j(1, n.$YX),
									j(2, f.$6j),
									j(3, B.$D3),
									j(4, b.$Xxb),
									j(5, p.$ek),
									j(6, A.$75),
									j(7, b.$Wxb),
									j(8, s.$Uyb),
									j(9, o.$gj),
								],
								se,
							));
				class re {
					getWidgetAriaLabel() {
						return (0, h.localize)(5747, null);
					}
					getAriaLabel($e) {
						return $e instanceof O.$L3
							? (0, h.localize)(5748, null, $e.name)
							: $e instanceof O.$K3
								? (0, h.localize)(5749, null, $e.name, $e.value)
								: null;
					}
				}
				(e.$yQc = "debug.setVariable"),
					p.$fk.registerCommand({
						id: e.$yQc,
						handler: (pe) => {
							pe.get(A.$75).getViewModel().setSelectedExpression(G, !1);
						},
					}),
					p.$fk.registerCommand({
						metadata: { description: M.$1Hc },
						id: M.$zHc,
						handler: async (pe, $e, ye) => {
							const ue = pe.get(A.$75),
								fe = pe.get(g.$Vxb);
							let me = "",
								ve;
							$e instanceof O.$K3 || $e instanceof O.$J3
								? ((me = "watch"), (ve = ye || []))
								: ((me = "variables"), (ve = G ? [G] : []));
							const ge = ue.getViewModel().focusedStackFrame,
								be = ue.getViewModel().focusedSession;
							if (!ge || !be || ve.length === 0) return;
							const Ce = be.capabilities.supportsClipboardContext
									? "clipboard"
									: me,
								Le = ve.map((Fe) =>
									Fe instanceof O.$K3 ? Fe.evaluateName || Fe.value : Fe.name,
								);
							try {
								const Fe = await Promise.all(
										Le.map((xe) => be.evaluate(xe, ge.frameId, Ce)),
									),
									Oe = (0, E.$Lb)(Fe).map((xe) => xe.body.result);
								Oe.length &&
									fe.writeText(
										Oe.join(`
`),
									);
							} catch {
								const Oe = ve.map((xe) => xe.value);
								fe.writeText(
									Oe.join(`
`),
								);
							}
						},
					}),
					(e.$zQc = "workbench.debug.viewlet.action.viewMemory");
				const le = "ms-vscode.hexeditor",
					oe = "hexEditor.hexedit";
				p.$fk.registerCommand({
					id: e.$zQc,
					handler: async (pe, $e, ye) => {
						const ue = pe.get(A.$75);
						let fe, me;
						if ("sessionId" in $e) {
							if (!$e.sessionId || !$e.variable.memoryReference) return;
							(fe = $e.sessionId), (me = $e.variable.memoryReference);
						} else {
							if (!$e.memoryReference) return;
							const Oe = ue.getViewModel().focusedSession;
							if (!Oe) return;
							(fe = Oe.getId()), (me = $e.memoryReference);
						}
						const ve = pe.get(U.$MQb),
							ge = pe.get(z.$IY),
							be = pe.get(v.$4N),
							Ce = pe.get(F.$q2),
							Le = pe.get(T.$km);
						((await Ce.getExtension(le)) || (await ae(ve, be))) &&
							(Le.publicLog("debug/didViewMemory", {
								debugType: ue.getModel().getSession(fe)?.configuration.type,
							}),
							await ge.openEditor(
								{
									resource: (0, O.$P3)(fe, me),
									options: { revealIfOpened: !0, override: oe },
								},
								z.$KY,
							));
					},
				});
				async function ae(pe, $e) {
					try {
						return (
							await pe.install(
								le,
								{ justification: (0, h.localize)(5750, null), enable: !0 },
								I.ProgressLocation.Notification,
							),
							!0
						);
					} catch (ye) {
						return $e.error(ye), !1;
					}
				}
				(e.$AQc = "debug.breakWhenValueChanges"),
					p.$fk.registerCommand({
						id: e.$AQc,
						handler: async (pe) => {
							const $e = pe.get(A.$75);
							K &&
								(await $e.addDataBreakpoint({
									description: K.description,
									src: {
										type: A.DataBreakpointSetType.Variable,
										dataId: K.dataId,
									},
									canPersist: !!K.canPersist,
									accessTypes: K.accessTypes,
									accessType: "write",
								}));
						},
					}),
					(e.$BQc = "debug.breakWhenValueIsAccessed"),
					p.$fk.registerCommand({
						id: e.$BQc,
						handler: async (pe) => {
							const $e = pe.get(A.$75);
							K &&
								(await $e.addDataBreakpoint({
									description: K.description,
									src: {
										type: A.DataBreakpointSetType.Variable,
										dataId: K.dataId,
									},
									canPersist: !!K.canPersist,
									accessTypes: K.accessTypes,
									accessType: "readWrite",
								}));
						},
					}),
					(e.$CQc = "debug.breakWhenValueIsRead"),
					p.$fk.registerCommand({
						id: e.$CQc,
						handler: async (pe) => {
							const $e = pe.get(A.$75);
							K &&
								(await $e.addDataBreakpoint({
									description: K.description,
									src: {
										type: A.DataBreakpointSetType.Variable,
										dataId: K.dataId,
									},
									canPersist: !!K.canPersist,
									accessTypes: K.accessTypes,
									accessType: "read",
								}));
						},
					}),
					p.$fk.registerCommand({
						metadata: { description: M.$ZHc },
						id: M.$yHc,
						handler: async (pe, $e) => {
							await pe.get(g.$Vxb).writeText($e.variable.evaluateName);
						},
					}),
					p.$fk.registerCommand({
						metadata: { description: M.$2Hc },
						id: M.$xHc,
						handler: async (pe, $e) => {
							pe.get(A.$75).addWatchExpression($e.variable.evaluateName);
						},
					}),
					(0, n.$4X)(
						class extends k.$WMb {
							constructor() {
								super({
									id: "variables.collapse",
									viewId: A.$R4,
									title: (0, h.localize)(5751, null),
									f1: !1,
									icon: m.$ak.collapseAll,
									menu: {
										id: n.$XX.ViewTitle,
										group: "navigation",
										when: f.$Kj.equals("view", A.$R4),
									},
								});
							}
							runInView(pe, $e) {
								$e.collapseAll();
							}
						},
					);
			},
		),
		define(
			de[3828],
			he([
				1, 0, 7, 203, 24, 33, 27, 3, 201, 12, 195, 56, 38, 17, 122, 69, 4, 11,
				8, 49, 72, 5, 93, 34, 51, 629, 709, 1334, 112, 300, 396,
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
					(e.$EQc = e.ShowDebugHoverResult = void 0),
					(e.$DQc = R),
					(t = mt(t)),
					(d = mt(d)),
					(p = mt(p));
				const M = t.$;
				var N;
				(function (x) {
					(x[(x.NOT_CHANGED = 0)] = "NOT_CHANGED"),
						(x[(x.NOT_AVAILABLE = 1)] = "NOT_AVAILABLE"),
						(x[(x.CANCELLED = 2)] = "CANCELLED");
				})(N || (e.ShowDebugHoverResult = N = {}));
				async function A(x, H) {
					if (!x) return null;
					const V = (await x.getChildren()).filter((G) => H[0] === G.name);
					return V.length !== 1
						? null
						: H.length === 1
							? V[0]
							: A(V[0], H.slice(1));
				}
				async function R(x, H) {
					const V = (await x.getScopes()).filter((K) => !K.expensive),
						G = (0, w.$Lb)(await Promise.all(V.map((K) => A(K, H))));
					return G.length > 0 && G.every((K) => K.value === G[0].value)
						? G[0]
						: void 0;
				}
				let O = class {
					static {
						D = this;
					}
					static {
						this.ID = "debug.hoverWidget";
					}
					get isShowingComplexValue() {
						return this.j?.hidden === !1;
					}
					constructor(H, q, V, G, K, J, W) {
						(this.t = H),
							(this.u = q),
							(this.w = V),
							(this.z = G),
							(this.A = K),
							(this.B = J),
							(this.C = W),
							(this.allowEditorOverflow = !0),
							(this.i = this.t.createDecorationsCollection()),
							(this.r = !1),
							(this.n = []),
							(this.g = null),
							(this.h = [
								a.ContentWidgetPositionPreference.ABOVE,
								a.ContentWidgetPositionPreference.BELOW,
							]),
							(this.p = this.w.createInstance(F, this.t));
					}
					D() {
						(this.d = M(".debug-hover-widget")),
							(this.j = t.$fhb(this.d, M(".complex-value"))),
							(this.k = t.$fhb(this.j, M(".title"))),
							(this.m = t.$fhb(this.j, M(".debug-hover-tree"))),
							this.m.setAttribute("role", "tree");
						const H = t.$fhb(this.j, M(".tip"));
						H.textContent = p.localize(5497, null, r.$m ? "Option" : "Alt");
						const q = this.w.createInstance(U),
							V = this.w.createInstance(I.$7Hc);
						(this.f = this.w.createInstance(
							y.$FMb,
							"DebugHover",
							this.m,
							new z(),
							[
								this.w.createInstance(T.$xQc, V),
								this.w.createInstance(T.$wQc, V),
							],
							q,
							{
								accessibilityProvider: new B(),
								mouseSupport: !1,
								horizontalScrolling: !0,
								useShadows: !1,
								keyboardNavigationLabelProvider: {
									getKeyboardNavigationLabel: (G) => G.name,
								},
								overrideStyles: { listBackground: v.$FQ },
							},
						)),
							this.n.push(
								T.$wQc.rendererOnVisualizationRange(
									this.u.getViewModel(),
									this.f,
								),
							),
							(this.l = M(".value")),
							(this.l.tabIndex = 0),
							this.l.setAttribute("role", "tooltip"),
							(this.o = new i.$8hb(this.l, {
								horizontal: u.ScrollbarVisibility.Hidden,
							})),
							this.d.appendChild(this.o.getDomNode()),
							this.n.push(this.o),
							this.t.applyFontInfo(this.d),
							(this.d.style.backgroundColor = (0, v.$rP)(v.$FQ)),
							(this.d.style.border = `1px solid ${(0, v.$rP)(v.$HQ)}`),
							(this.d.style.color = (0, v.$rP)(v.$GQ)),
							this.n.push(this.f.onContextMenu(async (G) => await this.E(G))),
							this.n.push(
								this.f.onDidChangeContentHeight(() => {
									this.r || this.I();
								}),
							),
							this.n.push(
								this.f.onDidChangeContentWidth(() => {
									this.r || this.I();
								}),
							),
							this.F(),
							this.t.addContentWidget(this);
					}
					async E(H) {
						const q = H.element;
						if (!(!(q instanceof k.$K3) || !q.value))
							return (0, T.$vQc)(
								this.A,
								this.z,
								this.B,
								o.$XX.DebugHoverContext,
								H,
							);
					}
					F() {
						this.n.push(
							t.$$fb(this.d, "keydown", (H) => {
								H.equals(C.KeyCode.Escape) && this.hide();
							}),
						),
							this.n.push(
								this.t.onDidChangeConfiguration((H) => {
									H.hasChanged(h.EditorOption.fontInfo) &&
										this.t.applyFontInfo(this.d);
								}),
							),
							this.n.push(
								this.u.getViewModel().onDidEvaluateLazyExpression(async (H) => {
									H instanceof k.$K3 &&
										this.f.hasNode(H) &&
										(await this.f.updateChildren(H, !1, !0),
										await this.f.expand(H));
								}),
							);
					}
					isHovered() {
						return !!this.d?.matches(":hover");
					}
					isVisible() {
						return !!this.a;
					}
					willBeVisible() {
						return !!this.c;
					}
					getId() {
						return D.ID;
					}
					getDomNode() {
						return this.d;
					}
					isInSafeTriangle(H, q) {
						return this.a && !!this.b?.contains(H, q);
					}
					async showAt(H, q, V) {
						this.c?.dispose(!0);
						const G = (this.c = new E.$Ce()),
							K = this.u.getViewModel().focusedSession;
						if (!K || !this.t.hasModel()) return this.hide(), N.NOT_AVAILABLE;
						const J = await this.p.compute(H, G.token);
						if (G.token.isCancellationRequested)
							return this.hide(), N.CANCELLED;
						if (!J.range) return this.hide(), N.NOT_AVAILABLE;
						if (this.isVisible() && !J.rangeChanged) return N.NOT_CHANGED;
						const W = await this.p.evaluate(K);
						return G.token.isCancellationRequested
							? (this.hide(), N.CANCELLED)
							: !W || (W instanceof k.$J3 && !W.available)
								? (this.hide(), N.NOT_AVAILABLE)
								: (this.i.set([{ range: J.range, options: D.G }]),
									this.H(J.range.getStartPosition(), W, q, V));
					}
					static {
						this.G = n.$eY.register({
							description: "bdebug-hover-highlight",
							className: "hoverHighlight",
						});
					}
					async H(H, q, V, G) {
						this.d || this.D(), (this.g = H);
						const K = new d.$Zc();
						if (((this.a = { store: K }), !q.hasChildren)) {
							(this.j.hidden = !0),
								(this.l.hidden = !1),
								(0, S.$dIc)(
									K,
									q,
									this.l,
									{ showChanged: !1, colorize: !0, hover: !1 },
									this.C,
								),
								(this.l.title = ""),
								this.t.layoutContentWidget(this),
								this.o.scanDomNode(),
								V && (this.t.render(), this.l.focus());
							return;
						}
						(this.l.hidden = !0),
							(this.q = q),
							(this.k.textContent = q.value),
							(this.k.title = q.value),
							this.t.layoutContentWidget(this),
							(this.f.scrollTop = 0),
							(this.f.scrollLeft = 0),
							(this.j.hidden = !1),
							(this.b = G && new t.$Mhb(G.posx, G.posy, this.d)),
							V && (this.t.render(), this.f.domFocus());
					}
					I() {
						this.J(), this.t.layoutContentWidget(this);
					}
					J() {
						let q = 1 / 0;
						if (this.g) {
							const J = this.t.getDomNode()?.offsetTop || 0,
								W = this.m.offsetTop + J,
								X =
									this.t.getTopForLineNumber(this.g.lineNumber, !0) -
									this.t.getScrollTop();
							W < X && (q = X + J - 22);
						}
						const V = Math.min(
								Math.max(266, this.t.getLayoutInfo().height * 0.55),
								this.f.contentHeight + 10,
								q,
							),
							G = this.f.contentWidth,
							K = (0, m.$Zm)(G, 400, 550);
						this.f.layout(V, K),
							(this.m.style.height = `${V}px`),
							this.o.scanDomNode();
					}
					beforeRender() {
						if (this.q) {
							const H = this.q;
							(this.q = void 0),
								(this.r = !0),
								this.f.setInput(H).finally(() => {
									this.r = !1;
								});
						}
						return null;
					}
					afterRender(H) {
						H && (this.h = [H]);
					}
					hide() {
						this.c && (this.c.dispose(!0), (this.c = void 0)),
							this.a &&
								(t.$Lgb(this.d) && this.t.focus(),
								this.a.store.dispose(),
								(this.a = void 0),
								this.i.clear(),
								this.t.layoutContentWidget(this),
								(this.h = [
									a.ContentWidgetPositionPreference.ABOVE,
									a.ContentWidgetPositionPreference.BELOW,
								]));
					}
					getPosition() {
						return this.a ? { position: this.g, preference: this.h } : null;
					}
					dispose() {
						this.n = d.$Vc(this.n);
					}
				};
				(e.$EQc = O),
					(e.$EQc =
						O =
						D =
							Ne(
								[
									j(1, P.$75),
									j(2, l.$Li),
									j(3, o.$YX),
									j(4, f.$6j),
									j(5, b.$Xxb),
									j(6, s.$Uyb),
								],
								O,
							));
				class B {
					getWidgetAriaLabel() {
						return p.localize(5498, null);
					}
					getAriaLabel(H) {
						return p.localize(5499, null, H.name, H.value);
					}
				}
				class U extends S.$fIc {
					hasChildren(H) {
						return H.hasChildren;
					}
					c(H) {
						return H.getChildren();
					}
				}
				class z {
					getHeight(H) {
						return 18;
					}
					getTemplateId(H) {
						return H instanceof k.$I3 ? T.$wQc.ID : T.$xQc.ID;
					}
				}
				let F = class {
					constructor(H, q, V, G) {
						(this.b = H), (this.c = q), (this.d = V), (this.f = G);
					}
					async compute(H, q) {
						if (!this.c.getViewModel().focusedSession || !this.b.hasModel())
							return { rangeChanged: !1 };
						const G = this.b.getModel(),
							K = await (0, L.$r3)(this.d, G, H, q);
						if (!K) return { rangeChanged: !1 };
						const { range: J, matchingExpression: W } = K,
							X = !this.a?.range.equalsRange(J);
						return (
							(this.a = { expression: W, range: c.$iL.lift(J) }),
							{ rangeChanged: X, range: this.a.range }
						);
					}
					async evaluate(H) {
						if (!this.a) {
							this.f.error("No expression to evaluate");
							return;
						}
						const q = this.b.getModel(),
							V = q && H.getSourceForUri(q?.uri);
						if (H.capabilities.supportsEvaluateForHovers) {
							const G = new k.$J3(this.a.expression);
							return (
								await G.evaluate(
									H,
									this.c.getViewModel().focusedStackFrame,
									"hover",
									void 0,
									V
										? {
												line: this.a.range.startLineNumber,
												column: this.a.range.startColumn,
												source: V.raw,
											}
										: void 0,
								),
								G
							);
						} else {
							const G = this.c.getViewModel().focusedStackFrame;
							if (G)
								return await R(
									G,
									(0, w.$Lb)(this.a.expression.split(".").map((K) => K.trim())),
								);
						}
					}
				};
				F = Ne([j(1, P.$75), j(2, g.$k3), j(3, $.$ik)], F);
			},
		),
		define(
			de[1906],
			he([
				1, 0, 7, 265, 114, 15, 33, 138, 29, 6, 187, 586, 27, 3, 201, 54, 12, 37,
				28, 210, 9, 498, 56, 38, 188, 48, 17, 409, 98, 171, 64, 391, 69, 67,
				448, 601, 4, 31, 10, 8, 5, 51, 68, 3828, 3579, 112, 300, 87,
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
				B,
				U,
				z,
				F,
				x,
				H,
				q,
				V,
				G,
				K,
				J,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$IQc = e.$HQc = e.$GQc = void 0),
					(p = mt(p)),
					(o = mt(o)),
					(O = mt(O));
				const W = 100,
					X = 150,
					Y = 500,
					ie = 200;
				(e.$GQc = (0, x.$wP)(
					"editor.inlineValuesForeground",
					{
						dark: "#ffffff80",
						light: "#00000080",
						hcDark: "#ffffff80",
						hcLight: "#00000080",
					},
					O.localize(5495, null),
				)),
					(e.$HQc = (0, x.$wP)(
						"editor.inlineValuesBackground",
						"#ffc80033",
						O.localize(5496, null),
					));
				class ne {
					constructor(le, oe) {
						(this.column = le), (this.text = oe);
					}
				}
				function ee(re, le, oe = b.Constants.MAX_SAFE_SMALL_INTEGER) {
					return (
						le.length > X && (le = le.substring(0, X) + "..."),
						[
							{
								range: {
									startLineNumber: re,
									endLineNumber: re,
									startColumn: oe,
									endColumn: oe,
								},
								options: {
									description: "debug-inline-value-decoration-spacer",
									after: {
										content: o.$ig,
										cursorStops: L.InjectedTextCursorStops.None,
									},
									showIfCollapsed: !0,
								},
							},
							{
								range: {
									startLineNumber: re,
									endLineNumber: re,
									startColumn: oe,
									endColumn: oe,
								},
								options: {
									description: "debug-inline-value-decoration",
									after: {
										content: _(le),
										inlineClassName: "debug-inline-value",
										inlineClassNameAffectsLetterSpacing: !0,
										cursorStops: L.InjectedTextCursorStops.None,
									},
									showIfCollapsed: !0,
								},
							},
						]
					);
				}
				function _(re) {
					return re.replace(/[ \t]/g, o.$ig);
				}
				function te(re, le, oe, ae) {
					const pe = new Map();
					for (const ye of re)
						if ((pe.set(ye.name, ye.value), pe.size >= W)) break;
					const $e = new Map();
					return (
						pe.forEach((ye, ue) => {
							const fe = ae.get(ue);
							if (fe)
								for (const me of fe)
									le.some(
										(ve) => me >= ve.startLineNumber && me <= ve.endLineNumber,
									) &&
										($e.has(me) || $e.set(me, []),
										$e.get(me).indexOf(ue) === -1 && $e.get(me).push(ue));
						}),
						[...$e].map(([ye, ue]) => ({
							line: ye,
							variables: ue
								.sort((fe, me) => {
									const ve = oe.getLineContent(ye);
									return ve.indexOf(fe) - ve.indexOf(me);
								})
								.map((fe) => ({ name: fe, value: pe.get(fe) })),
						}))
					);
				}
				function Q(re, le, oe) {
					if (re.getLineLength(le) > Y) return;
					const pe = re.getLineContent(le);
					re.tokenization.forceTokenization(le);
					const $e = re.tokenization.getLineTokens(le);
					for (let ye = 0, ue = $e.getCount(); ye < ue; ye++)
						if ($e.getStandardTokenType(ye) === k.StandardTokenType.Other) {
							T.$TK.lastIndex = 0;
							const me = $e.getStartOffset(ye),
								ve = $e.getEndOffset(ye),
								ge = pe.substring(me, ve),
								be = T.$TK.exec(ge);
							if (be) {
								const Ce = be[0];
								oe.has(Ce) || oe.set(Ce, []), oe.get(Ce).push(le);
							}
						}
				}
				let Z = class {
					constructor(le, oe, ae, pe, $e, ye, ue, fe, me, ve) {
						(this.w = le),
							(this.x = oe),
							(this.y = ae),
							(this.z = pe),
							(this.A = $e),
							(this.B = ye),
							(this.C = ue),
							(this.D = me),
							(this.g = !1),
							(this.i = !1),
							(this.l = new c.$2c()),
							(this.m = !1),
							(this.o = this.w.createDecorationsCollection()),
							(this.p = new c.$Zc()),
							(this.u = new c.$2c()),
							(this.t = ve.for(me.inlineValuesProvider, "InlineValues", {
								min: ie,
							})),
							(this.d = this.y.createInstance(q.$EQc, this.w)),
							(this.c = [this.u, this.l, this.p]),
							this.E(),
							(this.h = G.$R5.bindTo(fe)),
							this.S();
					}
					E() {
						this.c.push(
							this.x
								.getViewModel()
								.onDidFocusStackFrame((le) => this.L(le.stackFrame)),
						),
							this.c.push(this.w.onMouseDown((le) => this.P(le))),
							this.c.push(this.w.onMouseUp(() => (this.g = !1))),
							this.c.push(this.w.onMouseMove((le) => this.Q(le))),
							this.c.push(
								this.w.onMouseLeave((le) => {
									const oe = this.d.getDomNode();
									if (!oe) return;
									const ae = oe.getBoundingClientRect();
									(le.event.posx < ae.left ||
										le.event.posx > ae.right ||
										le.event.posy < ae.top ||
										le.event.posy > ae.bottom) &&
										this.O();
								}),
							),
							this.c.push(this.w.onKeyDown((le) => this.R(le))),
							this.c.push(
								this.w.onDidChangeModelContent(() => {
									(this.F = void 0), this.V.schedule();
								}),
							),
							this.c.push(
								this.x
									.getViewModel()
									.onWillUpdateViews(() => this.V.schedule()),
							),
							this.c.push(
								this.x
									.getViewModel()
									.onDidEvaluateLazyExpression(() => this.V.schedule()),
							),
							this.c.push(
								this.w.onDidChangeModel(async () => {
									this.H(), this.S(), this.O(), (this.F = void 0);
									const le = this.x.getViewModel().focusedStackFrame;
									await this.W(le);
								}),
							),
							this.c.push(
								this.w.onDidScrollChange(() => {
									this.O();
									const le = this.w.getModel();
									le &&
										this.D.inlineValuesProvider.has(le) &&
										this.V.schedule();
								}),
							),
							this.c.push(
								this.A.onDidChangeConfiguration((le) => {
									le.affectsConfiguration("editor.hover") && this.G();
								}),
							),
							this.c.push(
								this.x.onDidChangeState((le) => {
									le !== G.State.Stopped && this.S();
								}),
							),
							this.G();
					}
					G() {
						const le = this.w.getModel();
						le &&
							(this.q = this.A.getValue("editor.hover", {
								resource: le.uri,
								overrideIdentifier: le.getLanguageId(),
							}));
					}
					H() {
						const le = this.x.getViewModel().focusedStackFrame,
							oe = this.w.getModel();
						oe && this.I(oe, le);
					}
					I(le, oe) {
						if (!oe || !this.C.extUri.isEqual(le.uri, oe.source.uri)) {
							this.l.clear();
							return;
						}
						const ae = this.w.getContainerDomNode().ownerDocument;
						this.l.value = (0, t.$0fb)(ae, "keydown", (pe) => {
							if (new w.$7fb(pe).keyCode === h.KeyCode.Alt) {
								this.m = !0;
								const ye = this.d.isVisible();
								this.d.hide(),
									this.u.clear(),
									ye && this.f && this.K(this.f.position, !1);
								const ue = new i.$mib(ae, "keyup"),
									fe = r.Event.any(
										this.B.onDidChangeFocus,
										ue.event,
									)((me) => {
										let ve;
										(0, t.$8gb)(me) && (ve = new w.$7fb(me)),
											(!ve || ve.keyCode === h.KeyCode.Alt) &&
												((this.m = !1), this.J(), fe.dispose(), ue.dispose());
									});
							}
						});
					}
					async showHover(le, oe, ae) {
						this.J();
						const pe = this.x.getViewModel().focusedStackFrame,
							$e = this.w.getModel();
						pe && $e && this.C.extUri.isEqual(pe.source.uri, $e.uri)
							? (await this.d.showAt(le, oe, ae)) ===
									q.ShowDebugHoverResult.NOT_AVAILABLE && this.K(le, oe)
							: this.K(le, oe);
					}
					J() {
						if (this.u.value || this.q?.enabled === !1) return;
						this.w.getContribution(A.$whc.ID)?.hideContentHover(),
							this.w.updateOptions({ hover: { enabled: !1 } }),
							(this.u.value = {
								dispose: () => {
									this.w.updateOptions({
										hover: { enabled: this.q?.enabled ?? !0 },
									});
								},
							});
					}
					K(le, oe) {
						const ae = this.w.getContribution(A.$whc.ID),
							pe = new I.$iL(
								le.lineNumber,
								le.column,
								le.lineNumber,
								le.column,
							);
						this.u.clear(),
							ae?.showContentHover(
								pe,
								R.HoverStartMode.Immediate,
								R.HoverStartSource.Mouse,
								oe,
							);
					}
					async L(le) {
						const oe = this.w.getModel();
						oe &&
							(this.I(oe, le),
							le && this.C.extUri.isEqual(le.source.uri, oe.uri)
								? await this.S()
								: this.O()),
							await this.W(le);
					}
					get M() {
						const le = this.q?.delay || 0,
							oe = (0, n.$Zm)(2 - (le - 300) / 600, 1, 2);
						return le * oe;
					}
					get N() {
						const le = new E.$Yh(() => {
							this.f &&
								!this.m &&
								this.showHover(this.f.position, !1, this.f.event);
						}, this.M);
						return this.c.push(le), le;
					}
					O() {
						this.d.willBeVisible() && this.d.hide(),
							this.N.cancel(),
							this.u.clear();
					}
					P(le) {
						(this.g = !0),
							!(
								le.target.type === y.MouseTargetType.CONTENT_WIDGET &&
								le.target.detail === q.$EQc.ID
							) && this.O();
					}
					Q(le) {
						if (this.x.state !== G.State.Stopped) return;
						const oe = le.target,
							ae = p.$m ? "metaKey" : "ctrlKey";
						this.m ||
							(oe.type === y.MouseTargetType.GUTTER_GLYPH_MARGIN
								? (this.u.clear(), (this.i = !0))
								: this.i && ((this.i = !1), this.G())),
							!(
								oe.type === y.MouseTargetType.CONTENT_WIDGET &&
								oe.detail === q.$EQc.ID &&
								!le.event[ae] &&
								((this.q?.sticky ?? !0) || this.d.isShowingComplexValue)
							) &&
								(oe.type === y.MouseTargetType.CONTENT_TEXT
									? oe.position &&
										!S.$hL.equals(oe.position, this.f?.position || null) &&
										!this.d.isInSafeTriangle(le.event.posx, le.event.posy) &&
										((this.f = { position: oe.position, event: le.event }),
										this.J(),
										this.N.schedule(this.M))
									: this.g || this.O());
					}
					R(le) {
						const oe = p.$m ? h.KeyCode.Meta : h.KeyCode.Ctrl;
						le.keyCode !== oe && le.keyCode !== h.KeyCode.Alt && this.O();
					}
					async S() {
						const le = this.w.getModel(),
							oe = this.x.getViewModel().focusedStackFrame,
							ae = oe ? oe.thread.getCallStack() : null;
						if (!le || !oe || !ae || ae.length === 0) {
							this.closeExceptionWidget();
							return;
						}
						const pe = ae.find(
							(ye) =>
								!!(
									ye &&
									ye.source &&
									ye.source.available &&
									ye.source.presentationHint !== "deemphasize"
								),
						);
						if (!pe || pe !== oe) {
							this.closeExceptionWidget();
							return;
						}
						const $e = this.C.extUri.isEqual(pe.source.uri, le.uri);
						if (this.j && !$e) this.closeExceptionWidget();
						else if ($e) {
							const ye = await oe.thread.exceptionInfo;
							ye &&
								this.T(
									ye,
									this.x.getViewModel().focusedSession,
									pe.range.startLineNumber,
									pe.range.startColumn,
								);
						}
					}
					T(le, oe, ae, pe) {
						this.j && this.j.dispose(),
							(this.j = this.y.createInstance(V.$FQc, this.w, le, oe)),
							this.j.show({ lineNumber: ae, column: pe }, 0),
							this.j.focus(),
							this.w.revealRangeInCenter({
								startLineNumber: ae,
								startColumn: pe,
								endLineNumber: ae,
								endColumn: pe,
							}),
							this.h.set(!0);
					}
					closeExceptionWidget() {
						if (this.j) {
							const le = this.j.hasFocus();
							this.j.dispose(),
								(this.j = void 0),
								this.h.set(!1),
								le && this.w.focus();
						}
					}
					async addLaunchConfiguration() {
						const le = this.w.getModel();
						if (!le) return;
						let oe, ae;
						const pe = () => {
							let ye = 0;
							(0, u.$ko)(le.getValue(), {
								onObjectProperty: (ue) => {
									ae = ue;
								},
								onArrayBegin: (ue) => {
									ae === "configurations" &&
										ye === 0 &&
										(oe = le.getPositionAt(ue + 1)),
										ye++;
								},
								onArrayEnd: () => {
									ye--;
								},
							});
						};
						if ((pe(), !oe)) {
							const { tabSize: ye, insertSpaces: ue } = le.getOptions(),
								fe = le.getEOL(),
								me =
									(0, g.$sc)(le.uri.fsPath) === "launch.json"
										? (0, a.$ro)(le.getValue(), ["configurations"], [], {
												tabSize: ye,
												insertSpaces: ue,
												eol: fe,
											})[0]
										: (0, a.$ro)(
												le.getValue(),
												["launch"],
												{ configurations: [] },
												{ tabSize: ye, insertSpaces: ue, eol: fe },
											)[0],
								ve = le.getPositionAt(me.offset),
								ge = ve.lineNumber,
								be = new I.$iL(ge, ve.column, ge, le.getLineMaxColumn(ge));
							le.pushEditOperations(
								null,
								[v.$jL.replace(be, me.content)],
								() => null,
							),
								pe();
						}
						if (!oe) return;
						this.w.focus(),
							await ((ye) => (
								le.getLineLastNonWhitespaceColumn(ye.lineNumber) > ye.column &&
									(this.w.setPosition(ye),
									l.CoreEditingCommands.LineBreakInsert.runEditorCommand(
										null,
										this.w,
										null,
									)),
								this.w.setPosition(ye),
								this.z.executeCommand("editor.action.insertLineAfter")
							))(oe),
							await this.z.executeCommand("editor.action.triggerSuggest");
					}
					get U() {
						return new E.$Yh(() => {
							this.p.clear(), this.o.clear();
						}, 100);
					}
					get V() {
						const le = this.w.getModel();
						return new E.$Yh(
							async () => await this.W(this.x.getViewModel().focusedStackFrame),
							le ? this.t.get(le) : ie,
						);
					}
					async W(le) {
						const oe = "{0} = {1}",
							ae = ", ",
							pe = this.w.getModel(),
							$e = this.A.getValue("debug").inlineValues;
						if (
							!(
								$e === !0 ||
								$e === "on" ||
								($e === "auto" && pe && this.D.inlineValuesProvider.has(pe))
							) ||
							!pe ||
							!le ||
							pe.uri.toString() !== le.source.uri.toString()
						) {
							this.U.isScheduled() || this.U.schedule();
							return;
						}
						this.U.cancel(), this.p.clear();
						const ue = this.w.getVisibleRangesPlusViewportAboveBelow();
						let fe;
						const me = new C.$Ce();
						if (
							(this.p.add((0, c.$Yc)(() => me.dispose(!0))),
							this.D.inlineValuesProvider.has(pe))
						) {
							const ge = async (xe, He) => {
									const Ke = await le.getMostSpecificScopes(le.range),
										Je = He ? xe : xe.toLowerCase();
									for (const Te of Ke) {
										const Ie = (await Te.getChildren()).find((Be) =>
											He ? Be.name === Je : Be.name.toLowerCase() === Je,
										);
										if (Ie) return Ie.value;
									}
								},
								be = {
									frameId: le.frameId,
									stoppedLocation: new I.$iL(
										le.range.startLineNumber,
										le.range.startColumn + 1,
										le.range.endLineNumber,
										le.range.endColumn + 1,
									),
								},
								Ce = this.D.inlineValuesProvider.ordered(pe).reverse();
							fe = [];
							const Le = new Map(),
								Fe = Ce.flatMap((xe) =>
									ue.map((He) =>
										Promise.resolve(
											xe.provideInlineValues(pe, He, be, me.token),
										).then(
											async (Ke) => {
												if (Ke)
													for (const Je of Ke) {
														let Te;
														switch (Je.type) {
															case "text":
																Te = Je.text;
																break;
															case "variable": {
																let Ee = Je.variableName;
																Ee ||
																	(Ee = pe
																		.getLineContent(Je.range.startLineNumber)
																		.substring(
																			Je.range.startColumn - 1,
																			Je.range.endColumn - 1,
																		));
																const Ie = await ge(Ee, Je.caseSensitiveLookup);
																Ie && (Te = o.$kf(oe, Ee, Ie));
																break;
															}
															case "expression": {
																let Ee = Je.expression;
																if (
																	(Ee ||
																		(Ee = pe
																			.getLineContent(Je.range.startLineNumber)
																			.substring(
																				Je.range.startColumn - 1,
																				Je.range.endColumn - 1,
																			)),
																	Ee)
																) {
																	const Ie = new K.$J3(Ee);
																	await Ie.evaluate(
																		le.thread.session,
																		le,
																		"watch",
																		!0,
																	),
																		Ie.available &&
																			(Te = o.$kf(oe, Ee, Ie.value));
																}
																break;
															}
														}
														if (Te) {
															const Ee = Je.range.startLineNumber;
															let Ie = Le.get(Ee);
															Ie || ((Ie = []), Le.set(Ee, Ie)),
																Ie.some((Be) => Be.text === Te) ||
																	Ie.push(new ne(Je.range.startColumn, Te));
														}
													}
											},
											(Ke) => {
												(0, m.$5)(Ke);
											},
										),
									),
								),
								Oe = Date.now();
							await Promise.all(Fe),
								(this.V.delay = this.t.update(pe, Date.now() - Oe)),
								Le.forEach((xe, He) => {
									if (xe.length > 0) {
										xe = xe.sort((Je, Te) => Je.column - Te.column);
										const Ke = xe.map((Je) => Je.text).join(ae);
										fe.push(...ee(He, Ke));
									}
								});
						} else {
							const ge = await le.getMostSpecificScopes(le.range),
								be = await Promise.all(
									ge.map(async (Le) => ({
										scope: Le,
										variables: await Le.getChildren(),
									})),
								),
								Ce = new Map();
							for (const { scope: Le, variables: Fe } of be) {
								let Oe = new I.$iL(
									0,
									0,
									le.range.startLineNumber,
									le.range.startColumn,
								);
								Le.range &&
									(Oe = Oe.setStartPosition(
										Le.range.startLineNumber,
										Le.range.startColumn,
									));
								const xe = ue.map((Ke) => Ke.intersectRanges(Oe)).filter(f.$tg);
								this.F ??= new se(pe);
								for (const Ke of xe) this.F.ensureRangePopulated(Ke);
								const He = te(Fe, xe, pe, this.F.value);
								for (const { line: Ke, variables: Je } of He) {
									let Te = Ce.get(Ke);
									Te || ((Te = new Map()), Ce.set(Ke, Te));
									for (const { name: Ee, value: Ie } of Je)
										Te.has(Ee) || Te.set(Ee, Ie);
								}
							}
							fe = [...Ce.entries()].flatMap(([Le, Fe]) =>
								ee(Le, [...Fe].map(([Oe, xe]) => `${Oe} = ${xe}`).join(", ")),
							);
						}
						if (me.token.isCancellationRequested) return;
						let ve;
						if (this.w.getOption($.EditorOption.wordWrap) !== "off") {
							const ge = this.w.getPosition();
							ge &&
								this.w
									.getVisibleRanges()
									.some((be) => be.containsPosition(ge)) &&
								(ve = {
									position: ge,
									top: this.w.getTopForPosition(ge.lineNumber, ge.column),
								});
						}
						if ((this.o.set(fe), ve)) {
							const ge = this.w.getTopForPosition(
								ve.position.lineNumber,
								ve.position.column,
							);
							this.w.setScrollTop(
								this.w.getScrollTop() - (ve.top - ge),
								P.ScrollType.Immediate,
							);
						}
					}
					dispose() {
						this.d && this.d.dispose(),
							this.k && this.k.dispose(),
							(this.c = (0, c.$Vc)(this.c));
					}
				};
				(e.$IQc = Z),
					Ne([d.$ei], Z.prototype, "N", null),
					Ne([d.$ei], Z.prototype, "U", null),
					Ne([d.$ei], Z.prototype, "V", null),
					(e.$IQc = Z =
						Ne(
							[
								j(1, G.$75),
								j(2, F.$Li),
								j(3, B.$ek),
								j(4, U.$gj),
								j(5, J.$asb),
								j(6, H.$Vl),
								j(7, z.$6j),
								j(8, M.$k3),
								j(9, D.$PBb),
							],
							Z,
						));
				class se {
					constructor(le) {
						(this.d = le),
							(this.value = new Map()),
							(this.c = new Uint8Array(Math.ceil(le.getLineCount() / 8)));
					}
					ensureRangePopulated(le) {
						for (let oe = le.startLineNumber; oe <= le.endLineNumber; oe++) {
							const ae = oe >> 3,
								pe = 1 << (oe & 7);
							this.c[ae] & pe ||
								(Q(this.d, oe, this.value), (this.c[ae] |= pe));
						}
					}
				}
				B.$fk.registerCommand(
					"_executeInlineValueProvider",
					async (re, le, oe, ae) => {
						if (
							((0, f.$vg)(s.URI.isUri(le)),
							(0, f.$vg)(I.$iL.isIRange(oe)),
							!ae ||
								typeof ae.frameId != "number" ||
								!I.$iL.isIRange(ae.stoppedLocation))
						)
							throw (0, m.$$)("context");
						const pe = re.get(N.$QO).getModel(le);
						if (!pe) throw (0, m.$$)("uri");
						const $e = I.$iL.lift(oe),
							{ inlineValuesProvider: ye } = re.get(M.$k3),
							ue = ye.ordered(pe);
						return (
							await Promise.all(
								ue.map((me) =>
									me.provideInlineValues(pe, $e, ae, C.CancellationToken.None),
								),
							)
						)
							.flat()
							.filter(f.$tg);
					},
				);
			},
		),
		define(
			de[3829],
			he([
				1, 0, 431, 539, 15, 14, 4, 92, 11, 10, 8, 49, 72, 5, 39, 93, 41, 32, 35,
				146, 60, 629, 352, 709, 1334, 112, 300,
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
			) {
				"use strict";
				var T;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$jRc = e.$iRc = e.$hRc = e.$gRc = e.$fRc = e.$eRc = void 0);
				const P = 1024;
				let k = !1,
					L = !1,
					D = class extends b.$TMb {
						constructor(F, x, H, q, V, G, K, J, W, X, Y, ie, ne) {
							super(F, q, x, K, J, G, V, W, X, Y, ie),
								(this.m = H),
								(this.b = !1),
								(this.j = ne.createMenu(m.$XX.DebugWatchContext, J)),
								this.D(this.j),
								(this.a = new w.$Yh(() => {
									(this.b = !1), this.c.updateChildren();
								}, 50)),
								(this.f = S.$a5.bindTo(J)),
								(this.h = S.$K5.bindTo(J)),
								this.f.set(this.m.getModel().getWatchExpressions().length > 0),
								(this.g = S.$i5.bindTo(J));
						}
						W(F) {
							super.W(F),
								this.element.classList.add("debug-pane"),
								F.classList.add("debug-watch");
							const x = (0, l.$cIc)(F),
								H = this.Db.createInstance($.$7Hc),
								q = this.Db.createInstance(R, H);
							(this.c = this.Db.createInstance(
								g.$FMb,
								"WatchExpressions",
								x,
								new M(),
								[
									q,
									this.Db.createInstance(v.$xQc, H),
									this.Db.createInstance(v.$wQc, H),
								],
								this.Db.createInstance(A),
								{
									accessibilityProvider: new B(),
									identityProvider: { getId: (G) => G.getId() },
									keyboardNavigationLabelProvider: {
										getKeyboardNavigationLabel: (G) => {
											if (
												G !==
												this.m.getViewModel().getSelectedExpression()
													?.expression
											)
												return G.name;
										},
									},
									dnd: new U(this.m),
									overrideStyles: this.Zb().listOverrideStyles,
								},
							)),
								this.c.setInput(this.m),
								S.$_4.bindTo(this.c.contextKeyService),
								this.D(
									v.$wQc.rendererOnVisualizationRange(
										this.m.getViewModel(),
										this.c,
									),
								),
								this.D(this.c.onContextMenu((G) => this.t(G))),
								this.D(this.c.onMouseDblClick((G) => this.s(G))),
								this.D(
									this.m.getModel().onDidChangeWatchExpressions(async (G) => {
										this.f.set(
											this.m.getModel().getWatchExpressions().length > 0,
										),
											this.isBodyVisible()
												? (G && !G.name && (L = !0),
													await this.c.updateChildren(),
													(L = !1),
													G instanceof I.$J3 && this.c.reveal(G))
												: (this.b = !0);
									}),
								),
								this.D(
									this.m.getViewModel().onDidFocusStackFrame(() => {
										if (!this.isBodyVisible()) {
											this.b = !0;
											return;
										}
										this.a.isScheduled() || this.a.schedule();
									}),
								),
								this.D(
									this.m.getViewModel().onWillUpdateViews(() => {
										k || this.c.updateChildren();
									}),
								),
								this.D(
									this.onDidChangeBodyVisibility((G) => {
										G && this.b && this.a.schedule();
									}),
								);
							let V;
							this.D(
								this.m.getViewModel().onDidSelectExpression((G) => {
									const K = G?.expression;
									K && this.c.hasNode(K)
										? ((V = this.c.options.horizontalScrolling),
											V && this.c.updateOptions({ horizontalScrolling: !1 }),
											K.name && this.c.rerender(K))
										: !K &&
											V !== void 0 &&
											(this.c.updateOptions({ horizontalScrolling: V }),
											(V = void 0));
								}),
							),
								this.D(
									this.m
										.getViewModel()
										.onDidEvaluateLazyExpression(async (G) => {
											G instanceof I.$K3 &&
												this.c.hasNode(G) &&
												(await this.c.updateChildren(G, !1, !0),
												await this.c.expand(G));
										}),
								);
						}
						X(F, x) {
							super.X(F, x), this.c.layout(F, x);
						}
						focus() {
							super.focus(), this.c.domFocus();
						}
						collapseAll() {
							this.c.collapseAll();
						}
						s(F) {
							if (F.browserEvent.target.className.indexOf("twistie") >= 0)
								return;
							const x = F.element,
								H = this.m.getViewModel().getSelectedExpression();
							(x instanceof I.$J3 && x !== H?.expression) ||
							(x instanceof I.$I3 && x.treeItem.canEdit)
								? this.m.getViewModel().setSelectedExpression(x, !1)
								: x || this.m.addWatchExpression();
						}
						t(F) {
							const x = F.element,
								H = this.c.getSelection();
							this.g.set(
								x instanceof I.$J3
									? "expression"
									: x instanceof I.$K3
										? "variable"
										: void 0,
							);
							const q = [],
								V =
									x instanceof I.$K3 ? x.presentationHint?.attributes : void 0;
							this.h.set(
								(!!V && V.indexOf("readOnly") >= 0) ||
									!!x?.presentationHint?.lazy,
							),
								(0, d.$Jyb)(this.j, { arg: x, shouldForwardArgs: !0 }, q),
								this.zb.showContextMenu({
									getAnchor: () => F.anchor,
									getActions: () => q,
									getActionsContext: () =>
										x && H.includes(x) ? H : x ? [x] : [],
								});
						}
					};
				(e.$eRc = D),
					(e.$eRc = D =
						Ne(
							[
								j(1, a.$Xxb),
								j(2, S.$75),
								j(3, n.$uZ),
								j(4, c.$Li),
								j(5, s.$K1),
								j(6, r.$gj),
								j(7, u.$6j),
								j(8, p.$7rb),
								j(9, f.$iP),
								j(10, o.$km),
								j(11, h.$Uyb),
								j(12, m.$YX),
							],
							D,
						));
				class M {
					getHeight(F) {
						return 22;
					}
					getTemplateId(F) {
						return F instanceof I.$J3
							? R.ID
							: F instanceof I.$I3
								? v.$wQc.ID
								: v.$xQc.ID;
					}
				}
				function N(z) {
					return typeof z.getConfigurationManager == "function";
				}
				class A extends l.$fIc {
					hasChildren(F) {
						return N(F) || F.hasChildren;
					}
					c(F) {
						if (N(F)) {
							const x = F,
								H = x.getModel().getWatchExpressions(),
								q = x.getViewModel();
							return Promise.all(
								H.map((V) =>
									V.name && !L
										? V.evaluate(
												q.focusedSession,
												q.focusedStackFrame,
												"watch",
											).then(() => V)
										: Promise.resolve(V),
								),
							);
						}
						return F.getChildren();
					}
				}
				let R = class extends l.$gIc {
					static {
						T = this;
					}
					static {
						this.ID = "watchexpression";
					}
					constructor(F, x, H, q, V, G, K) {
						super(q, V, G),
							(this.i = F),
							(this.j = x),
							(this.k = H),
							(this.l = K);
					}
					get templateId() {
						return T.ID;
					}
					renderElement(F, x, H) {
						H.elementDisposable.clear(),
							H.elementDisposable.add(
								this.l.onDidChangeConfiguration((q) => {
									q.affectsConfiguration("debug.showVariableTypes") &&
										super.d(F.element, F, H);
								}),
							),
							super.d(F.element, F, H);
					}
					f(F, x, H) {
						let q;
						x.type.textContent = "";
						const V = this.l.getValue("debug").showVariableTypes;
						V && F.type
							? ((q = typeof F.value == "string" ? `${F.name}: ` : F.name),
								(x.type.textContent = F.type + " ="))
							: (q = typeof F.value == "string" ? `${F.name} =` : F.name);
						let G;
						F.type
							? V
								? (G = `${F.name}`)
								: (G = F.type === F.value ? F.type : `${F.type}`)
							: (G = F.value),
							x.label.set(q, H, G),
							(0, l.$dIc)(
								x.elementDisposable,
								F,
								x.value,
								{
									showChanged: !0,
									maxValueLength: P,
									linkDetector: this.i,
									colorize: !0,
								},
								this.c,
							);
					}
					g(F, x) {
						return x
							? {
									initialValue: F.value,
									ariaLabel: (0, C.localize)(5752, null),
									onFinish: async (H, q) => {
										if (q && H) {
											const V = this.a.getViewModel().focusedStackFrame;
											V &&
												(F instanceof I.$K3 || F instanceof I.$J3) &&
												(await F.setExpression(H, V),
												this.a.getViewModel().updateViews());
										}
									},
								}
							: {
									initialValue: F.name ? F.name : "",
									ariaLabel: (0, C.localize)(5753, null),
									placeholder: (0, C.localize)(5754, null),
									onFinish: (H, q) => {
										q && H
											? (this.a.renameWatchExpression(F.getId(), H),
												(k = !0),
												this.a.getViewModel().updateViews(),
												(k = !1))
											: F.name || this.a.removeWatchExpressions(F.getId());
									},
								};
					}
					h(F, x) {
						const H = O(this.k, x),
							q = x,
							V = this.j.getMenuActions(m.$XX.DebugWatchContext, H, {
								arg: q,
								shouldForwardArgs: !1,
							}),
							G = [];
						(0, d.$Jyb)(V, { primary: G, secondary: [] }, "inline"),
							F.clear(),
							(F.context = q),
							F.push(G, { icon: !0, label: !1 });
					}
				};
				(e.$fRc = R),
					(e.$fRc =
						R =
						T =
							Ne(
								[
									j(1, m.$YX),
									j(2, u.$6j),
									j(3, S.$75),
									j(4, a.$Wxb),
									j(5, h.$Uyb),
									j(6, r.$gj),
								],
								R,
							));
				function O(z, F) {
					return z.createOverlay([
						[S.$j5.key, F.memoryReference !== void 0],
						[S.$i5.key, "expression"],
					]);
				}
				class B {
					getWidgetAriaLabel() {
						return (0, C.localize)(5755, null);
					}
					getAriaLabel(F) {
						return F instanceof I.$J3
							? (0, C.localize)(5756, null, F.name, F.value)
							: (0, C.localize)(5757, null, F.name, F.value);
					}
				}
				class U {
					constructor(F) {
						this.a = F;
					}
					onDragOver(F, x, H, q, V) {
						if (!(F instanceof i.$wib)) return !1;
						const G = F.elements;
						if (!(G.length > 0 && G[0] instanceof I.$J3)) return !1;
						let K;
						if (H === void 0)
							(K = t.ListDragOverEffectPosition.After), (H = -1);
						else
							switch (q) {
								case i.ListViewTargetSector.TOP:
								case i.ListViewTargetSector.CENTER_TOP:
									K = t.ListDragOverEffectPosition.Before;
									break;
								case i.ListViewTargetSector.CENTER_BOTTOM:
								case i.ListViewTargetSector.BOTTOM:
									K = t.ListDragOverEffectPosition.After;
									break;
							}
						return {
							accept: !0,
							effect: { type: t.ListDragOverEffectType.Move, position: K },
							feedback: [H],
						};
					}
					getDragURI(F) {
						return !(F instanceof I.$J3) ||
							F === this.a.getViewModel().getSelectedExpression()?.expression
							? null
							: F.getId();
					}
					getDragLabel(F) {
						if (F.length === 1) return F[0].name;
					}
					drop(F, x, H, q, V) {
						if (!(F instanceof i.$wib)) return;
						const G = F.elements[0];
						if (!(G instanceof I.$J3))
							throw new Error("Invalid dragged element");
						const K = this.a.getModel().getWatchExpressions(),
							J = K.indexOf(G);
						let W;
						if (x instanceof I.$J3) {
							switch (((W = K.indexOf(x)), q)) {
								case i.ListViewTargetSector.BOTTOM:
								case i.ListViewTargetSector.CENTER_BOTTOM:
									W++;
									break;
							}
							J < W && W--;
						} else W = K.length - 1;
						this.a.moveWatchExpression(G.getId(), W);
					}
					dispose() {}
				}
				(0, m.$4X)(
					class extends b.$WMb {
						constructor() {
							super({
								id: "watch.collapse",
								viewId: S.$S4,
								title: (0, C.localize)(5758, null),
								f1: !1,
								icon: E.$ak.collapseAll,
								precondition: S.$a5,
								menu: {
									id: m.$XX.ViewTitle,
									order: 30,
									group: "navigation",
									when: u.$Kj.equals("view", S.$S4),
								},
							});
						}
						runInView(F, x) {
							x.collapseAll();
						}
					},
				),
					(e.$gRc = "workbench.debug.viewlet.action.addWatchExpression"),
					(e.$hRc = (0, C.localize)(5759, null)),
					(0, m.$4X)(
						class extends m.$3X {
							constructor() {
								super({
									id: e.$gRc,
									title: e.$hRc,
									f1: !1,
									icon: y.$DKb,
									menu: {
										id: m.$XX.ViewTitle,
										group: "navigation",
										when: u.$Kj.equals("view", S.$S4),
									},
								});
							}
							run(F) {
								F.get(S.$75).addWatchExpression();
							}
						},
					),
					(e.$iRc = "workbench.debug.viewlet.action.removeAllWatchExpressions"),
					(e.$jRc = (0, C.localize)(5760, null)),
					(0, m.$4X)(
						class extends m.$3X {
							constructor() {
								super({
									id: e.$iRc,
									title: e.$jRc,
									f1: !1,
									icon: y.$BKb,
									precondition: S.$a5,
									menu: {
										id: m.$XX.ViewTitle,
										order: 20,
										group: "navigation",
										when: u.$Kj.equals("view", S.$S4),
									},
								});
							}
							run(F) {
								F.get(S.$75).removeWatchExpressions();
							}
						},
					);
			},
		),
		define(
			de[3830],
			he([1, 0, 7, 3, 4, 72, 93, 629]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				var m;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$kIc = e.$jIc = e.$iIc = e.$hIc = void 0),
					(t = mt(t));
				const r = t.$,
					u = 1024;
				class a extends C.$CMb {}
				e.$hIc = a;
				class h {
					getHeight(p) {
						return 22;
					}
					getTemplateId(p) {
						return c.ID;
					}
				}
				e.$iIc = h;
				let c = class {
					static {
						m = this;
					}
					static {
						this.ID = "variableElement";
					}
					get templateId() {
						return m.ID;
					}
					constructor(p) {
						this.a = p;
					}
					renderTemplate(p) {
						const o = t.$fhb(p, r(".expression")),
							f = t.$fhb(o, r("span.name")),
							b = t.$fhb(o, r("span.value"));
						return {
							expression: o,
							name: f,
							value: b,
							elementDisposables: new i.$Zc(),
						};
					}
					renderElement(p, o, f) {
						const b =
							p.element.value.trim() !== ""
								? `${p.element.name}:`
								: p.element.name;
						(f.name.textContent = b),
							(f.name.title = p.element.type ?? ""),
							(0, d.$dIc)(
								f.elementDisposables,
								p.element,
								f.value,
								{ colorize: !0, maxValueLength: u },
								this.a,
							);
					}
					disposeElement(p, o, f, b) {
						f.elementDisposables.clear();
					}
					disposeTemplate(p) {
						p.elementDisposables.dispose();
					}
				};
				(e.$jIc = c), (e.$jIc = c = m = Ne([j(0, E.$Uyb)], c));
				class n {
					getWidgetAriaLabel() {
						return (0, w.localize)(7798, null);
					}
					getAriaLabel(p) {
						return (0, w.localize)(7799, null, p.name, p.value);
					}
				}
				e.$kIc = n;
			},
		),
		define(
			de[3831],
			he([
				1, 0, 15, 4, 92, 11, 31, 10, 8, 49, 72, 5, 39, 93, 41, 63, 32, 35, 146,
				60, 112, 3113, 3830, 108, 190, 243, 18,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$lIc = void 0),
					(i = mt(i));
				let T = class extends f.$TMb {
					static {
						this.ID = "notebookVariablesView";
					}
					static {
						this.TITLE = i.localize2(7800, "Notebook Variables");
					}
					constructor(k, L, D, M, N, A, R, O, B, U, z, F, x, H, q, V, G) {
						super(k, N, A, O, R, U, B, z, H, q, V),
							(this.g = L),
							(this.h = D),
							(this.j = M),
							(this.m = F),
							(this.n = x),
							(this.r = G),
							this.D(this.g.onDidActiveEditorChange(this.sb.bind(this))),
							this.D(this.h.onDidNotebookVariablesUpdate(this.dc.bind(this))),
							this.D(this.j.onDidChangeExecution(this.cc.bind(this))),
							this.ab(),
							(this.c = new l.$UGc(this.h)),
							(this.f = new t.$Yh(() => this.a?.updateChildren(), 100));
					}
					W(k) {
						super.W(k),
							this.element.classList.add("debug-pane"),
							(this.a = this.Db.createInstance(
								c.$FMb,
								"notebookVariablesTree",
								k,
								new y.$iIc(),
								[new y.$jIc(this.Hb)],
								this.c,
								{
									accessibilityProvider: new y.$kIc(),
									identityProvider: { getId: (L) => L.id },
								},
							)),
							this.a.layout(),
							this.b && this.a.setInput({ kind: "root", notebook: this.b }),
							this.D(this.a.onContextMenu((L) => this.t(L)));
					}
					t(k) {
						if (!k.element) return;
						const L = k.element,
							D = {
								source: L.notebook.uri.toString(),
								name: L.name,
								value: L.value,
								type: L.type,
								expression: L.expression,
								language: L.language,
								extensionId: L.extensionId,
							},
							M = [],
							N = this.Bb.createOverlay([
								[s.$O5.key, L.name],
								[s.$L5.key, L.value],
								[s.$M5.key, L.type],
								[s.$N5.key, L.interfaces],
								[s.$P5.key, L.language],
								[s.$Q5.key, L.extensionId],
							]),
							A = this.r.getMenuActions(E.$XX.NotebookVariablesContext, N, {
								arg: D,
								shouldForwardArgs: !0,
							});
						(0, w.$Jyb)(A, M),
							this.zb.showContextMenu({
								getAnchor: () => k.anchor,
								getActions: () => M,
							});
					}
					X(k, L) {
						super.X(k, L), this.a?.layout(k, L);
					}
					ab() {
						const k = this.b,
							L = this.g.activeEditorPane;
						if (
							L?.getId() === "workbench.editor.notebook" ||
							L?.getId() === "workbench.editor.interactive"
						) {
							const D = (0, $.$eJb)(L)?.getViewModel()?.notebookDocument;
							this.b = D;
						}
						return k !== this.b;
					}
					sb() {
						this.ab() &&
							this.b &&
							(this.a?.setInput({ kind: "root", notebook: this.b }),
							this.f.schedule());
					}
					cc(k) {
						this.b &&
							k.affectsNotebook(this.b.uri) &&
							(this.c.cancel(),
							k.changed === void 0 ? this.f.schedule() : this.f.cancel());
					}
					dc(k) {
						this.b &&
							k.toString() === this.b.uri.toString() &&
							(this.a?.setInput({ kind: "root", notebook: this.b }),
							this.f.schedule());
					}
				};
				(e.$lIc = T),
					(e.$lIc = T =
						Ne(
							[
								j(1, I.$IY),
								j(2, S.$f6),
								j(3, v.$d6),
								j(4, h.$uZ),
								j(5, r.$Xxb),
								j(6, m.$6j),
								j(7, d.$gj),
								j(8, a.$Li),
								j(9, b.$K1),
								j(10, n.$7rb),
								j(11, g.$DJ),
								j(12, C.$ek),
								j(13, o.$iP),
								j(14, p.$km),
								j(15, u.$Uyb),
								j(16, E.$YX),
							],
							T,
						));
			},
		),
		define(
			de[3832],
			he([
				1, 0, 3, 4, 10, 8, 102, 30, 60, 112, 3090, 3831, 108, 284, 70, 190, 243,
				161, 18,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$mIc = void 0),
					(i = mt(i));
				let b = class extends t.$1c {
					constructor(l, y, $, v, S, I) {
						super(),
							(this.g = y),
							(this.h = $),
							(this.j = v),
							(this.m = S),
							(this.n = I),
							(this.a = []),
							(this.c = !1),
							(this.f = u.$TGc.bindTo(l)),
							this.a.push(this.h.onDidActiveEditorChange(() => this.r())),
							this.a.push(
								this.j.onDidChangeExecution((T) => this.r(T.notebook)),
							),
							(this.b = y.onDidChangeConfiguration((T) => this.q(T)));
					}
					q(l) {
						l.affectsConfiguration(n.$56.notebookVariablesView) &&
							(this.g.getValue(n.$56.notebookVariablesView)
								? this.c
									? this.f.set(!0)
									: this.r()
								: this.f.set(!1));
					}
					r(l) {
						this.g.getValue(n.$56.notebookVariablesView) &&
							(l ||
								this.h.activeEditorPane?.getId() ===
									"workbench.editor.notebook") &&
							this.s(l) &&
							!this.c &&
							this.t() &&
							(this.f.set(!0),
							(this.c = !0),
							this.a.forEach((y) => y.dispose()));
					}
					s(l) {
						const y = l
							? this.n.getNotebookTextModel(l)
							: (0, h.$eJb)(this.h.activeEditorPane)?.getViewModel()
									?.notebookDocument;
						return (
							y && this.m.getMatchingKernel(y).selected?.hasVariableProvider
						);
					}
					t() {
						const l = d.$Io.as("workbench.registry.view.containers").get(r.$Q4);
						if (l) {
							const y = d.$Io.as(m.Extensions.ViewsRegistry),
								$ = {
									id: "NOTEBOOK_VARIABLES",
									name: i.localize2(7796, "Notebook Variables"),
									containerIcon: c.$uOb,
									ctorDescriptor: new C.$Ji(a.$lIc),
									order: 50,
									weight: 5,
									canToggleVisibility: !0,
									canMoveView: !0,
									collapsed: !0,
									when: u.$TGc,
								};
							return y.registerViews([$], l), !0;
						}
						return !1;
					}
					dispose() {
						super.dispose(),
							this.a.forEach((l) => l.dispose()),
							this.b.dispose();
					}
				};
				(e.$mIc = b),
					(e.$mIc = b =
						Ne(
							[
								j(0, E.$6j),
								j(1, w.$gj),
								j(2, f.$IY),
								j(3, g.$d6),
								j(4, p.$f6),
								j(5, o.$MIb),
							],
							b,
						));
			},
		),
		define(
			de[3833],
			he([1, 0, 4, 14, 11, 146, 8, 802]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(0, w.$4X)(
						class extends E.$WMb {
							constructor() {
								super({
									viewId: d.IOutlinePane.Id,
									id: "outline.collapse",
									title: (0, t.localize)(8285, null),
									f1: !1,
									icon: i.$ak.collapseAll,
									menu: {
										id: w.$XX.ViewTitle,
										group: "navigation",
										when: C.$Kj.and(
											C.$Kj.equals("view", d.IOutlinePane.Id),
											d.$F4b.isEqualTo(!1),
										),
									},
								});
							}
							runInView(r, u) {
								u.collapseAll();
							}
						},
					),
					(0, w.$4X)(
						class extends E.$WMb {
							constructor() {
								super({
									viewId: d.IOutlinePane.Id,
									id: "outline.expand",
									title: (0, t.localize)(8286, null),
									f1: !1,
									icon: i.$ak.expandAll,
									menu: {
										id: w.$XX.ViewTitle,
										group: "navigation",
										when: C.$Kj.and(
											C.$Kj.equals("view", d.IOutlinePane.Id),
											d.$F4b.isEqualTo(!0),
										),
									},
								});
							}
							runInView(r, u) {
								u.expandAll();
							}
						},
					),
					(0, w.$4X)(
						class extends E.$WMb {
							constructor() {
								super({
									viewId: d.IOutlinePane.Id,
									id: "outline.followCursor",
									title: (0, t.localize)(8287, null),
									f1: !1,
									toggled: d.$C4b,
									menu: {
										id: w.$XX.ViewTitle,
										group: "config",
										order: 1,
										when: C.$Kj.equals("view", d.IOutlinePane.Id),
									},
								});
							}
							runInView(r, u) {
								u.outlineViewState.followCursor =
									!u.outlineViewState.followCursor;
							}
						},
					),
					(0, w.$4X)(
						class extends E.$WMb {
							constructor() {
								super({
									viewId: d.IOutlinePane.Id,
									id: "outline.filterOnType",
									title: (0, t.localize)(8288, null),
									f1: !1,
									toggled: d.$D4b,
									menu: {
										id: w.$XX.ViewTitle,
										group: "config",
										order: 2,
										when: C.$Kj.equals("view", d.IOutlinePane.Id),
									},
								});
							}
							runInView(r, u) {
								u.outlineViewState.filterOnType =
									!u.outlineViewState.filterOnType;
							}
						},
					),
					(0, w.$4X)(
						class extends E.$WMb {
							constructor() {
								super({
									viewId: d.IOutlinePane.Id,
									id: "outline.sortByPosition",
									title: (0, t.localize)(8289, null),
									f1: !1,
									toggled: d.$E4b.isEqualTo(d.OutlineSortOrder.ByPosition),
									menu: {
										id: w.$XX.ViewTitle,
										group: "sort",
										order: 1,
										when: C.$Kj.equals("view", d.IOutlinePane.Id),
									},
								});
							}
							runInView(r, u) {
								u.outlineViewState.sortBy = d.OutlineSortOrder.ByPosition;
							}
						},
					),
					(0, w.$4X)(
						class extends E.$WMb {
							constructor() {
								super({
									viewId: d.IOutlinePane.Id,
									id: "outline.sortByName",
									title: (0, t.localize)(8290, null),
									f1: !1,
									toggled: d.$E4b.isEqualTo(d.OutlineSortOrder.ByName),
									menu: {
										id: w.$XX.ViewTitle,
										group: "sort",
										order: 2,
										when: C.$Kj.equals("view", d.IOutlinePane.Id),
									},
								});
							}
							runInView(r, u) {
								u.outlineViewState.sortBy = d.OutlineSortOrder.ByName;
							}
						},
					),
					(0, w.$4X)(
						class extends E.$WMb {
							constructor() {
								super({
									viewId: d.IOutlinePane.Id,
									id: "outline.sortByKind",
									title: (0, t.localize)(8291, null),
									f1: !1,
									toggled: d.$E4b.isEqualTo(d.OutlineSortOrder.ByKind),
									menu: {
										id: w.$XX.ViewTitle,
										group: "sort",
										order: 3,
										when: C.$Kj.equals("view", d.IOutlinePane.Id),
									},
								});
							}
							runInView(r, u) {
								u.outlineViewState.sortBy = d.OutlineSortOrder.ByKind;
							}
						},
					);
			},
		),
		define(
			de[3834],
			he([
				1, 0, 7, 436, 15, 3, 59, 4, 10, 8, 49, 5, 39, 93, 21, 35, 146, 18, 19,
				60, 41, 32, 3121, 475, 44, 33, 6, 411, 802, 106, 72, 2473,
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
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$2Yc = void 0),
					(t = mt(t));
				class D {
					constructor(A, R) {
						(this.c = A), (this.order = R);
					}
					compare(A, R) {
						return this.order === P.OutlineSortOrder.ByKind
							? this.c.compareByType(A, R)
							: this.order === P.OutlineSortOrder.ByName
								? this.c.compareByName(A, R)
								: this.c.compareByPosition(A, R);
					}
				}
				let M = class extends p.$TMb {
					static {
						this.Id = "outline";
					}
					constructor(A, R, O, B, U, z, F, x, H, q, V, G, K, J) {
						super(A, x, q, F, H, B, O, V, G, K, J),
							(this.fc = R),
							(this.gc = O),
							(this.hc = U),
							(this.ic = z),
							(this.c = new E.$Zc()),
							(this.f = new E.$Zc()),
							(this.g = new E.$Zc()),
							(this.h = new y.$1Yc()),
							(this.j = new E.$2c()),
							(this.ab = new C.$Jc(10)),
							this.h.restore(this.hc),
							this.c.add(this.h),
							H.bufferChangeEvents(() => {
								(this.sb = P.$C4b.bindTo(H)),
									(this.cc = P.$D4b.bindTo(H)),
									(this.dc = P.$E4b.bindTo(H)),
									(this.ec = P.$F4b.bindTo(H));
							});
						const W = () => {
							this.sb.set(this.h.followCursor),
								this.cc.set(this.h.filterOnType),
								this.dc.set(this.h.sortBy);
						};
						W(), this.c.add(this.h.onDidChange(W));
					}
					dispose() {
						this.c.dispose(),
							this.g.dispose(),
							this.f.dispose(),
							this.j.dispose(),
							super.dispose();
					}
					focus() {
						super.focus(), this.t?.domFocus();
					}
					W(A) {
						super.W(A), (this.m = A), A.classList.add("outline-pane");
						const R = t.$(".outline-progress");
						(this.n = t.$(".outline-message")),
							(this.r = new i.$bpb(R, k.$nyb)),
							(this.s = t.$(".outline-tree")),
							t.$fhb(A, R, this.n, this.s),
							this.c.add(
								this.onDidChangeBodyVisibility((O) => {
									if (!O) this.j.clear(), this.g.clear(), this.f.clear();
									else if (!this.j.value) {
										const B = I.Event.any(
											this.ic.onDidActiveEditorChange,
											this.fc.onDidChange,
										);
										(this.j.value = B(() => this.nc(this.ic.activeEditorPane))),
											this.nc(this.ic.activeEditorPane);
									}
								}),
							);
					}
					X(A, R) {
						super.X(A, R), this.t?.layout(A, R), (this.L = new t.$pgb(R, A));
					}
					collapseAll() {
						this.t?.collapseAll();
					}
					expandAll() {
						this.t?.expandAll();
					}
					get outlineViewState() {
						return this.h;
					}
					lc(A) {
						this.m.classList.add("message"),
							this.r.stop().hide(),
							(this.n.innerText = A);
					}
					mc(A) {
						if (this.t) {
							const R = this.t.getInput();
							if ((A || (A = R?.uri), R && A))
								return (
									this.ab.set(`${R.outlineKind}/${A}`, this.t.getViewState()),
									!0
								);
						}
						return !1;
					}
					nc(A) {
						this.g.clear(),
							A &&
								this.g.add(
									A.onDidChangeControl(() => {
										this.oc(A);
									}),
								),
							this.oc(A);
					}
					async oc(A) {
						const R = v.$A1.getOriginalUri(A?.input),
							O = this.mc();
						if ((this.f.clear(), !A || !this.fc.canCreateOutline(A) || !R))
							return this.lc((0, d.localize)(8292, null));
						let B;
						O ||
							(B = new w.$Wh(() => {
								this.lc((0, d.localize)(8293, null, (0, f.$kh)(R)));
							}, 100)),
							this.r.infinite().show(500);
						const U = new S.$Ce();
						this.f.add((0, E.$Yc)(() => U.dispose(!0)));
						const z = await this.fc.createOutline(
							A,
							$.OutlineTarget.OutlinePane,
							U.token,
						);
						if ((B?.dispose(), !z)) return;
						if (U.token.isCancellationRequested) {
							z?.dispose();
							return;
						}
						this.f.add(z), this.r.stop().hide();
						const F = new D(z.config.comparator, this.h.sortBy),
							x = this.gc.createInstance(
								c.$EMb,
								"OutlinePane",
								this.s,
								z.config.delegate,
								z.config.renderers,
								z.config.treeDataSource,
								{
									...z.config.options,
									sorter: F,
									expandOnDoubleClick: !1,
									expandOnlyOnTwistieClick: !0,
									multipleSelectionSupport: !1,
									hideTwistiesOfChildlessElements: !0,
									defaultFindMode: this.h.filterOnType
										? T.TreeFindMode.Filter
										: T.TreeFindMode.Highlight,
									overrideStyles: this.Zb().listOverrideStyles,
								},
							),
							H = () => {
								if (z.isEmpty)
									this.lc((0, d.localize)(8294, null, (0, f.$kh)(R))),
										this.mc(R),
										x.setInput(void 0);
								else if (x.getInput())
									this.m.classList.remove("message"), x.updateChildren();
								else {
									this.m.classList.remove("message");
									const J = this.ab.get(`${z.outlineKind}/${z.uri}`);
									x.setInput(z, J && T.$spb.lift(J));
								}
							};
						H(),
							this.f.add(z.onDidChange(H)),
							(x.findMode = this.h.filterOnType
								? T.TreeFindMode.Filter
								: T.TreeFindMode.Highlight),
							this.f.add(
								this.Cb.onDidChangeLocation(({ views: J }) => {
									J.some((W) => W.id === this.id) &&
										x.updateOptions({
											overrideStyles: this.Zb().listOverrideStyles,
										});
								}),
							),
							this.f.add(
								x.onDidChangeFindMode(
									(J) => (this.h.filterOnType = J === T.TreeFindMode.Filter),
								),
							);
						let q = 0;
						this.f.add(
							x.onDidOpen(async (J) => {
								const W = ++q,
									X = J.browserEvent?.type === "dblclick";
								(!X && (await (0, w.$Nh)(150), W !== q)) ||
									(await z.reveal(J.element, J.editorOptions, J.sideBySide, X));
							}),
						);
						const V = () => {
							if (!this.h.followCursor || !z.activeElement) return;
							let J = z.activeElement;
							for (; J; ) {
								if (
									(x.getRelativeTop(J) === null && x.reveal(J, 0.5),
									x.getRelativeTop(J) !== null)
								) {
									x.setFocus([J]), x.setSelection([J]);
									break;
								}
								J = x.getParentElement(J);
							}
						};
						V(),
							this.f.add(z.onDidChange(V)),
							this.f.add(
								this.h.onDidChange((J) => {
									this.h.persist(this.hc),
										J.filterOnType &&
											(x.findMode = this.h.filterOnType
												? T.TreeFindMode.Filter
												: T.TreeFindMode.Highlight),
										J.followCursor && V(),
										J.sortBy && ((F.order = this.h.sortBy), x.resort());
								}),
							);
						let G;
						this.f.add(
							x.onDidChangeFindPattern((J) => {
								x.findMode !== T.TreeFindMode.Highlight &&
									(!G && J
										? ((G = x.getViewState()), x.expandAll())
										: !J && G && (x.setInput(x.getInput(), G), (G = void 0)));
							}),
						);
						const K = () => {
							this.ec.set(
								x
									.getNode(null)
									.children.every((J) => !J.collapsible || J.collapsed),
							);
						};
						this.f.add(x.onDidChangeCollapseState(K)),
							this.f.add(x.onDidChangeModel(K)),
							K(),
							x.layout(this.L?.height, this.L?.width),
							(this.t = x),
							this.f.add(
								(0, E.$Yc)(() => {
									x.dispose(), (this.t = void 0);
								}),
							);
					}
				};
				(e.$2Yc = M),
					(e.$2Yc = M =
						Ne(
							[
								j(1, $.$x4b),
								j(2, a.$Li),
								j(3, b.$K1),
								j(4, n.$lq),
								j(5, o.$IY),
								j(6, m.$gj),
								j(7, h.$uZ),
								j(8, r.$6j),
								j(9, u.$Xxb),
								j(10, s.$7rb),
								j(11, g.$iP),
								j(12, l.$km),
								j(13, L.$Uyb),
							],
							M,
						));
			},
		),
		define(
			de[3835],
			he([
				1, 0, 6, 23, 9, 3, 5, 21, 30, 297, 3524, 42, 34, 52, 89, 1853, 61, 8,
				1852, 1019,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f, b) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$bUc = void 0);
				const s = "output.activechannel";
				let l = class extends E.$1c {
					constructor(v, S, I) {
						super(),
							(this.outputChannelDescriptor = v),
							(this.scrollLock = !1),
							(this.id = v.id),
							(this.label = v.label),
							(this.uri = w.URI.from({
								scheme: i.Schemas.outputChannel,
								path: this.id,
							})),
							(this.model = this.D(
								S.createOutputChannelModel(
									this.id,
									this.uri,
									v.languageId
										? I.createById(v.languageId)
										: I.createByMimeType(v.log ? r.$f8 : r.$d8),
									v.file,
								),
							));
					}
					append(v) {
						this.model.append(v);
					}
					update(v, S) {
						this.model.update(v, S, !0);
					}
					clear() {
						this.model.clear();
					}
					replace(v) {
						this.model.replace(v);
					}
				};
				l = Ne([j(1, g.$8Tc), j(2, p.$nM)], l);
				let y = class extends E.$1c {
					constructor(v, S, I, T, P, k, L, D, M) {
						super(),
							(this.q = v),
							(this.r = S),
							(this.s = T),
							(this.t = P),
							(this.u = k),
							(this.w = L),
							(this.y = M),
							(this.a = new Map()),
							(this.f = this.D(new t.$re())),
							(this.onActiveOutputChannel = this.f.event),
							(this.b = this.q.get(s, d.StorageScope.WORKSPACE, "")),
							(this.g = r.$q8.bindTo(D)),
							this.g.set(this.b),
							this.D(this.onActiveOutputChannel((A) => this.g.set(A))),
							(this.h = r.$j8.bindTo(D)),
							(this.j = r.$k8.bindTo(D)),
							(this.m = r.$l8.bindTo(D)),
							(this.n = r.$m8.bindTo(D)),
							this.D(
								I.registerTextModelContentProvider(
									i.Schemas.outputChannel,
									this,
								),
							),
							this.D(S.createInstance(u.$_Tc));
						const N = m.$Io.as(r.$p8.OutputChannels);
						for (const A of N.getChannels()) this.z(A.id);
						if ((this.D(N.onDidRegisterChannel(this.z, this)), !this.c)) {
							const A = this.getChannelDescriptors();
							this.I(A && A.length > 0 ? this.getChannel(A[0].id) : void 0);
						}
						this.D(
							t.Event.filter(
								this.w.onDidChangeViewVisibility,
								(A) => A.id === r.$h8 && A.visible,
							)(() => {
								this.c &&
									this.w.getActiveViewWithId(r.$h8)?.showChannel(this.c, !0);
							}),
						),
							this.D(
								this.t.onDidChangeLogLevel((A) => {
									this.G(), this.H();
								}),
							),
							this.D(
								this.y.onDidChangeDefaultLogLevels(() => {
									this.H();
								}),
							),
							this.D(this.u.onDidShutdown(() => this.dispose()));
					}
					provideTextContent(v) {
						const S = this.getChannel(v.path);
						return S ? S.model.loadModel() : null;
					}
					async showChannel(v, S) {
						const I = this.getChannel(v);
						this.c?.id !== I?.id && (this.I(I), this.f.fire(v));
						const T = await this.w.openView(r.$h8, !S);
						T && I && T.showChannel(I, !!S);
					}
					getChannel(v) {
						return this.a.get(v);
					}
					getChannelDescriptor(v) {
						return m.$Io.as(r.$p8.OutputChannels).getChannel(v);
					}
					getChannelDescriptors() {
						return m.$Io.as(r.$p8.OutputChannels).getChannels();
					}
					getActiveChannel() {
						return this.c;
					}
					async z(v) {
						const S = this.C(v);
						this.a.set(v, S),
							(!this.c || this.b === v) &&
								(this.I(S),
								this.f.fire(v),
								this.w.getActiveViewWithId(r.$h8)?.showChannel(S, !0));
					}
					C(v) {
						const S = this.F(v);
						return (
							this.D(
								t.Event.once(S.model.onDispose)(() => {
									if (this.c === S) {
										const I = this.getChannelDescriptors(),
											T = I.length ? this.getChannel(I[0].id) : void 0;
										T && this.w.isViewVisible(r.$h8)
											? this.showChannel(T.id)
											: this.I(void 0);
									}
									m.$Io.as(r.$p8.OutputChannels).removeChannel(v);
								}),
							),
							S
						);
					}
					F(v) {
						const S = m.$Io.as(r.$p8.OutputChannels).getChannel(v);
						if (!S)
							throw (
								(this.s.error(`Channel '${v}' is not registered yet`),
								new Error(`Channel '${v}' is not registered yet`))
							);
						return this.r.createInstance(l, S);
					}
					G() {
						const v = this.c?.outputChannelDescriptor,
							S = v?.log ? this.t.getLogLevel(v.file) : void 0;
						this.m.set(S !== void 0 ? (0, h.$xk)(S) : "");
					}
					async H() {
						const v = this.c?.outputChannelDescriptor;
						if (v?.log) {
							const S = this.t.getLogLevel(v.file),
								I = await this.y.getDefaultLogLevel(v.extensionId);
							this.n.set(I === S);
						} else this.n.set(!1);
					}
					I(v) {
						this.c = v;
						const S = v?.outputChannelDescriptor;
						this.h.set(!!S?.file),
							this.j.set(S !== void 0 && f.$HMc.isLevelSettable(S)),
							this.H(),
							this.G(),
							this.c
								? this.q.store(
										s,
										this.c.id,
										d.StorageScope.WORKSPACE,
										d.StorageTarget.MACHINE,
									)
								: this.q.remove(s, d.StorageScope.WORKSPACE);
					}
				};
				(e.$bUc = y),
					(e.$bUc = y =
						Ne(
							[
								j(0, d.$lq),
								j(1, C.$Li),
								j(2, a.$MO),
								j(3, h.$ik),
								j(4, h.$jk),
								j(5, c.$n6),
								j(6, n.$HMb),
								j(7, o.$6j),
								j(8, b.$GMc),
							],
							y,
						));
			},
		),
		define(
			de[3836],
			he([
				1, 0, 4, 63, 392, 60, 89, 297, 107, 8, 132, 37, 39, 11, 27, 43, 99, 142,
				112,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f) {
				"use strict";
				var b;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$MMc = e.$LMc = e.$KMc = void 0);
				let s = class extends w.$GLb {
					static {
						b = this;
					}
					static {
						this.PREFIX = "view ";
					}
					constructor(v, S, I, T, P, k, L, D) {
						super(b.PREFIX, {
							noResultsPick: {
								label: (0, t.localize)(8708, null),
								containerLabel: "",
							},
						}),
							(this.h = v),
							(this.j = S),
							(this.m = I),
							(this.n = T),
							(this.q = P),
							(this.r = k),
							(this.t = L),
							(this.u = D);
					}
					g(v) {
						const S = this.y().filter((k) =>
								v
									? ((k.highlights = {
											label: (0, u.$Zk)(v, k.label, !0) ?? void 0,
										}),
										k.highlights.label || (0, a.$bg)(k.containerLabel, v))
									: !0,
							),
							I = new Map();
						for (const k of S)
							I.has(k.label) || I.set(k.label, k.containerLabel);
						const T = [];
						let P;
						for (const k of S) {
							if (P !== k.containerLabel) {
								P = k.containerLabel;
								let L;
								I.has(P) ? (L = `${I.get(P)} / ${P}`) : (L = P),
									T.push({ type: "separator", label: L });
							}
							T.push(k);
						}
						return T;
					}
					y() {
						const v = [],
							S = (k, L) => {
								const D = this.h.getViewContainerModel(L),
									M = [];
								for (const N of D.allViewDescriptors)
									this.u.contextMatchesRules(N.when) &&
										M.push({
											label: N.name.value,
											containerLabel: D.title,
											accept: () => this.j.openView(N.id, !0),
										});
								return M;
							},
							I = (k, L) => {
								const D = this.t.getPaneComposites(k),
									M = this.t.getVisiblePaneCompositeIds(k);
								D.sort((N, A) => {
									let R = M.findIndex((B) => N.id === B),
										O = M.findIndex((B) => A.id === B);
									return (
										R < 0 && (R = D.indexOf(N) + M.length),
										O < 0 && (O = D.indexOf(A) + M.length),
										R - O
									);
								});
								for (const N of D)
									if (this.z(N)) {
										const A = this.h.getViewContainerById(N.id);
										A &&
											v.push({
												label: this.h.getViewContainerModel(A).title,
												containerLabel: L,
												accept: () => this.t.openPaneComposite(N.id, k, !0),
											});
									}
							};
						I(E.ViewContainerLocation.Sidebar, (0, t.localize)(8709, null)),
							I(E.ViewContainerLocation.Panel, (0, t.localize)(8710, null)),
							I(
								E.ViewContainerLocation.AuxiliaryBar,
								(0, t.localize)(8711, null),
							);
						const T = (k) => {
							const L = this.t.getPaneComposites(k);
							for (const D of L) {
								const M = this.h.getViewContainerById(D.id);
								M && v.push(...S(D, M));
							}
						};
						T(E.ViewContainerLocation.Sidebar),
							T(E.ViewContainerLocation.Panel),
							T(E.ViewContainerLocation.AuxiliaryBar),
							this.q.groups.forEach((k, L) => {
								k.terminalInstances.forEach((D, M) => {
									const N = (0, t.localize)(
										8712,
										null,
										`${L + 1}.${M + 1}`,
										D.title,
									);
									v.push({
										label: N,
										containerLabel: (0, t.localize)(8713, null),
										accept: async () => {
											await this.q.showPanel(!0), this.n.setActiveInstance(D);
										},
									});
								});
							}),
							this.r
								.getModel()
								.getSessions(!0)
								.filter((k) => k.hasSeparateRepl())
								.forEach((k, L) => {
									const D = k.name;
									v.push({
										label: D,
										containerLabel: (0, t.localize)(8714, null),
										accept: async () => {
											await this.r.focusStackFrame(void 0, void 0, k, {
												explicit: !0,
											}),
												this.j.isViewVisible(f.$Y4) ||
													(await this.j.openView(f.$Y4, !0));
										},
									});
								});
						const P = this.m.getChannelDescriptors();
						for (const k of P)
							v.push({
								label: k.label,
								containerLabel: (0, t.localize)(8715, null),
								accept: () => this.m.showChannel(k.id),
							});
						return v;
					}
					z(v) {
						const S = this.h.getViewContainerById(v.id);
						return S?.hideIfEmpty
							? this.h.getViewContainerModel(S).activeViewDescriptors.length > 0
							: !0;
					}
				};
				(e.$KMc = s),
					(e.$KMc =
						s =
						b =
							Ne(
								[
									j(0, E.$K1),
									j(1, C.$HMb),
									j(2, d.$o8),
									j(3, m.$iIb),
									j(4, m.$lIb),
									j(5, f.$75),
									j(6, o.$6Sb),
									j(7, r.$6j),
								],
								s,
							));
				class l extends c.$3X {
					static {
						this.ID = "workbench.action.openView";
					}
					constructor() {
						super({
							id: l.ID,
							title: (0, t.localize2)(8716, "Open View"),
							category: p.$ck.View,
							f1: !0,
						});
					}
					async run(v) {
						v.get(i.$DJ).quickAccess.show(s.PREFIX);
					}
				}
				e.$LMc = l;
				class y extends c.$3X {
					static {
						this.ID = "workbench.action.quickOpenView";
					}
					static {
						this.KEYBINDING = {
							primary: n.KeyMod.CtrlCmd | n.KeyCode.KeyQ,
							mac: { primary: n.KeyMod.WinCtrl | n.KeyCode.KeyQ },
							linux: { primary: 0 },
						};
					}
					constructor() {
						super({
							id: y.ID,
							title: (0, t.localize2)(8717, "Quick Open View"),
							category: p.$ck.View,
							f1: !1,
							keybinding: {
								weight: g.KeybindingWeight.WorkbenchContrib,
								when: void 0,
								...y.KEYBINDING,
							},
						});
					}
					async run(v) {
						const S = v.get(h.$uZ),
							I = v.get(i.$DJ),
							T = S.lookupKeybindings(y.ID);
						I.quickAccess.show(s.PREFIX, {
							quickNavigateConfiguration: { keybindings: T },
							itemActivation: i.ItemActivation.FIRST,
						});
					}
				}
				e.$MMc = y;
			},
		),
		define(
			de[3837],
			he([
				1, 0, 4, 7, 60, 89, 39, 49, 8, 10, 5, 41, 63, 31, 6, 78, 3, 105, 325,
				50, 11, 92, 519, 121, 40, 292, 288, 27, 35, 26, 146, 9, 374, 102, 43,
				32, 198, 1256, 1034, 33, 12, 93, 183, 51, 94, 123, 14, 106, 839, 95, 72,
				2483,
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
				B,
				U,
				z,
				F,
				x,
				H,
				q,
				V,
				G,
				K,
				J,
				W,
				X,
				Y,
			) {
				"use strict";
				var ie;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.OpenPortInPreviewAction =
						e.OpenPortInBrowserAction =
						e.ForwardPortAction =
						e.$cuc =
						e.$buc =
						e.$auc =
						e.$_tc =
							void 0),
					(t = mt(t)),
					(i = mt(i)),
					(e.$_tc = new m.$5j("openPreviewEnabled", !1));
				class ne {
					constructor(nt) {
						(this.c = nt), (this.headerRowHeight = 22);
					}
					getHeight(nt) {
						return nt.tunnelType === y.TunnelType.Add &&
							!this.c.getEditableData(void 0)
							? 30
							: 22;
					}
				}
				let ee = class {
					constructor(nt, lt) {
						(this.f = nt),
							(this.g = lt),
							(this.d = new Map()),
							(this.input = {
								label: t.localize(8810, null),
								icon: void 0,
								tunnelType: y.TunnelType.Add,
								hasRunningProcess: !1,
								remoteHost: "",
								remotePort: 0,
								processDescription: "",
								tooltipPostfix: "",
								iconTooltip: "",
								portTooltip: "",
								processTooltip: "",
								originTooltip: "",
								privacyTooltip: "",
								source: { source: W.TunnelSource.User, description: "" },
								protocol: M.TunnelProtocol.Http,
								privacy: {
									id: M.TunnelPrivacyId.Private,
									themeIcon: B.$3tc.id,
									label: t.localize(8811, null),
								},
								strip: () => {},
							}),
							(this.c = nt.tunnelModel),
							(this.onForwardedPortsChanged = n.Event.any(
								this.c.onForwardPort,
								this.c.onClosePort,
								this.c.onPortName,
								this.c.onCandidatesChanged,
							));
					}
					get all() {
						const nt = [];
						return (
							(this.d = new Map()),
							this.c.candidates.forEach((lt) => {
								this.d.set((0, W.$z8)(lt.host, lt.port), lt);
							}),
							(this.c.forwarded.size > 0 || this.f.getEditableData(void 0)) &&
								nt.push(...this.i),
							this.c.detected.size > 0 && nt.push(...this.j),
							nt.push(this.input),
							nt
						);
					}
					h(nt) {
						const lt = (0, W.$z8)(nt.remoteHost, nt.remotePort);
						this.d.has(lt) && (nt.processDescription = this.d.get(lt).detail);
					}
					get i() {
						return Array.from(this.c.forwarded.values())
							.map((lt) => {
								const ct = ae.createFromTunnel(this.f, this.g, lt);
								return this.h(ct), ct;
							})
							.sort((lt, ct) =>
								lt.remotePort === ct.remotePort
									? lt.remoteHost < ct.remoteHost
										? -1
										: 1
									: lt.remotePort < ct.remotePort
										? -1
										: 1,
							);
					}
					get j() {
						return Array.from(this.c.detected.values()).map((nt) => {
							const lt = ae.createFromTunnel(
								this.f,
								this.g,
								nt,
								y.TunnelType.Detected,
								!1,
							);
							return this.h(lt), lt;
						});
					}
					isEmpty() {
						return (
							this.j.length === 0 &&
							(this.i.length === 0 ||
								(this.i.length === 1 &&
									this.i[0].tunnelType === y.TunnelType.Add &&
									!this.f.getEditableData(void 0)))
						);
					}
				};
				(e.$auc = ee), (e.$auc = ee = Ne([j(0, y.$5pc), j(1, M.$cO)], ee));
				function _(bt) {
					return {
						label: "",
						tunnel: bt,
						editId: y.TunnelEditId.None,
						tooltip: "",
					};
				}
				class te {
					constructor() {
						(this.label = ""),
							(this.tooltip = ""),
							(this.weight = 1),
							(this.minimumWidth = 40),
							(this.maximumWidth = 40),
							(this.templateId = "actionbar");
					}
					project(nt) {
						if (nt.tunnelType === y.TunnelType.Add) return _(nt);
						const lt = nt.processDescription ? B.$$tc : B.$0tc;
						let ct = "";
						return (
							nt instanceof ae &&
								(ct = `${nt.iconTooltip} ${nt.tooltipPostfix}`),
							{
								label: "",
								icon: lt,
								tunnel: nt,
								editId: y.TunnelEditId.None,
								tooltip: ct,
							}
						);
					}
				}
				class Q {
					constructor() {
						(this.label = t.localize(8812, null)),
							(this.tooltip = t.localize(8813, null)),
							(this.weight = 1),
							(this.templateId = "actionbar");
					}
					project(nt) {
						const lt = nt.tunnelType === y.TunnelType.Add,
							ct = nt.label;
						let gt = "";
						return (
							nt instanceof ae && !lt
								? (gt = `${nt.portTooltip} ${nt.tooltipPostfix}`)
								: (gt = ct),
							{
								label: ct,
								tunnel: nt,
								menuId: s.$XX.TunnelPortInline,
								editId:
									nt.tunnelType === y.TunnelType.Add
										? y.TunnelEditId.New
										: y.TunnelEditId.Label,
								tooltip: gt,
							}
						);
					}
				}
				class Z {
					constructor() {
						(this.label = t.localize(8814, null)),
							(this.tooltip = t.localize(8815, null)),
							(this.weight = 1),
							(this.templateId = "actionbar");
					}
					project(nt) {
						if (nt.tunnelType === y.TunnelType.Add) return _(nt);
						const lt = nt.localAddress ?? "";
						let ct = lt;
						return (
							nt instanceof ae && (ct = nt.tooltipPostfix),
							{
								label: lt,
								menuId: s.$XX.TunnelLocalAddressInline,
								tunnel: nt,
								editId: y.TunnelEditId.LocalPort,
								tooltip: ct,
								markdownTooltip: lt ? Z.c(lt) : void 0,
							}
						);
					}
					static c(nt) {
						return function (lt) {
							const ct = lt.getValue("editor");
							let gt = "";
							ct.multiCursorModifier === "ctrlCmd"
								? F.$m
									? (gt = t.localize(8816, null))
									: (gt = t.localize(8817, null))
								: F.$m
									? (gt = t.localize(8818, null))
									: (gt = t.localize(8819, null));
							const ht = new V.$cl("", !0),
								Rt = nt.startsWith("http") ? nt : `http://${nt}`;
							return ht
								.appendLink(Rt, "Follow link")
								.appendMarkdown(` (${gt})`);
						};
					}
				}
				class se {
					constructor() {
						(this.label = t.localize(8820, null)),
							(this.tooltip = t.localize(8821, null)),
							(this.weight = 2),
							(this.templateId = "actionbar");
					}
					project(nt) {
						return nt.tunnelType === y.TunnelType.Add
							? _(nt)
							: {
									label: nt.processDescription ?? "",
									tunnel: nt,
									editId: y.TunnelEditId.None,
									tooltip: nt instanceof ae ? nt.processTooltip : "",
								};
					}
				}
				class re {
					constructor() {
						(this.label = t.localize(8822, null)),
							(this.tooltip = t.localize(8823, null)),
							(this.weight = 1),
							(this.templateId = "actionbar");
					}
					project(nt) {
						if (nt.tunnelType === y.TunnelType.Add) return _(nt);
						const lt = nt.source.description,
							ct = `${nt instanceof ae ? nt.originTooltip : ""}. ${nt instanceof ae ? nt.tooltipPostfix : ""}`;
						return {
							label: lt,
							menuId: s.$XX.TunnelOriginInline,
							tunnel: nt,
							editId: y.TunnelEditId.None,
							tooltip: ct,
						};
					}
				}
				class le {
					constructor() {
						(this.label = t.localize(8824, null)),
							(this.tooltip = t.localize(8825, null)),
							(this.weight = 1),
							(this.templateId = "actionbar");
					}
					project(nt) {
						if (nt.tunnelType === y.TunnelType.Add) return _(nt);
						const lt = nt.privacy?.label;
						let ct = "";
						return (
							nt instanceof ae &&
								(ct = `${nt.privacy.label} ${nt.tooltipPostfix}`),
							{
								label: lt,
								tunnel: nt,
								icon: { id: nt.privacy.themeIcon },
								editId: y.TunnelEditId.None,
								tooltip: ct,
							}
						);
					}
				}
				let oe = class extends p.$1c {
					constructor(nt, lt, ct, gt, ht, Rt, Nt) {
						super(),
							(this.h = nt),
							(this.j = lt),
							(this.m = ct),
							(this.n = gt),
							(this.q = ht),
							(this.r = Rt),
							(this.s = Nt),
							(this.templateId = "actionbar"),
							(this.g = (0, X.$cib)("mouse"));
					}
					set actionRunner(nt) {
						this.f = nt;
					}
					renderTemplate(nt) {
						const lt = i.$fhb(nt, i.$(".ports-view-actionbar-cell")),
							ct = i.$fhb(lt, i.$(".ports-view-actionbar-cell-icon")),
							gt = new f.$Xob(lt, {
								supportHighlights: !0,
								hoverDelegate: this.g,
							}),
							ht = i.$fhb(lt, i.$(".actions")),
							Rt = new o.$eib(ht, {
								actionViewItemProvider: l.$Pyb.bind(void 0, this.h),
								hoverDelegate: this.g,
							});
						return {
							label: gt,
							icon: ct,
							actionBar: Rt,
							container: lt,
							elementDisposable: p.$1c.None,
						};
					}
					renderElement(nt, lt, ct) {
						ct.actionBar.clear(),
							(ct.icon.className = "ports-view-actionbar-cell-icon"),
							(ct.icon.style.display = "none"),
							ct.label.setLabel(""),
							(ct.label.element.style.display = "none"),
							(ct.container.style.height = "22px"),
							ct.button &&
								((ct.button.element.style.display = "none"),
								ct.button.dispose()),
							(ct.container.style.paddingLeft = "0px"),
							ct.elementDisposable.dispose();
						let gt;
						nt.editId === y.TunnelEditId.New &&
						(gt = this.q.getEditableData(void 0))
							? this.u(ct.container, gt)
							: ((gt = this.q.getEditableData(nt.tunnel, nt.editId)),
								gt
									? this.u(ct.container, gt)
									: nt.tunnel.tunnelType === y.TunnelType.Add &&
											nt.menuId === s.$XX.TunnelPortInline
										? this.renderButton(nt, ct)
										: this.renderActionBarItem(nt, ct));
					}
					renderButton(nt, lt) {
						(lt.container.style.paddingLeft = "7px"),
							(lt.container.style.height = "28px"),
							(lt.button = this.D(new H.$oob(lt.container, J.$lyb))),
							(lt.button.label = nt.label),
							(lt.button.element.title = nt.tooltip),
							this.D(
								lt.button.onDidClick(() => {
									this.r.executeCommand(Se.INLINE_ID);
								}),
							);
					}
					t(nt) {
						let lt;
						return (
							nt instanceof ae && (lt = nt.strip()),
							lt ||
								(lt = {
									tunnelType: nt.tunnelType,
									remoteHost: nt.remoteHost,
									remotePort: nt.remotePort,
									localAddress: nt.localAddress,
									protocol: nt.protocol,
									localUri: nt.localUri,
									localPort: nt.localPort,
									name: nt.name,
									closeable: nt.closeable,
									source: nt.source,
									privacy: nt.privacy,
									processDescription: nt.processDescription,
									label: nt.label,
								}),
							lt
						);
					}
					renderActionBarItem(nt, lt) {
						(lt.label.element.style.display = "flex"),
							lt.label.setLabel(nt.label, void 0, {
								title: nt.markdownTooltip
									? {
											markdown: nt.markdownTooltip(this.s),
											markdownNotSupportedFallback: nt.tooltip,
										}
									: nt.tooltip,
								extraClasses:
									nt.menuId === s.$XX.TunnelLocalAddressInline
										? ["ports-view-actionbar-cell-localaddress"]
										: void 0,
							}),
							(lt.actionBar.context = this.t(nt.tunnel)),
							(lt.container.style.paddingLeft = "10px");
						const ct = [
								["view", y.$7pc],
								[pe.key, nt.tunnel.tunnelType],
								[$e.key, nt.tunnel.closeable],
								[ye.key, nt.tunnel.privacy.id],
								[fe.key, nt.tunnel.protocol],
							],
							gt = this.j.createOverlay(ct),
							ht = new p.$Zc();
						if (((lt.elementDisposable = ht), nt.menuId)) {
							const Rt = ht.add(this.m.createMenu(nt.menuId, gt));
							let Nt = [];
							if (((0, l.$Kyb)(Rt, { shouldForwardArgs: !0 }, Nt), Nt)) {
								const jt = Nt.filter(
									(ti) => ti.id.toLowerCase().indexOf("label") >= 0,
								);
								jt.length > 1 &&
									(jt.sort((ti, kt) => ti.label.length - kt.label.length),
									jt.pop(),
									(Nt = Nt.filter((ti) => jt.indexOf(ti) < 0))),
									lt.actionBar.push(Nt, { icon: !0, label: !1 }),
									this.f && (lt.actionBar.actionRunner = this.f);
							}
						}
						nt.icon &&
							((lt.icon.className = `ports-view-actionbar-cell-icon ${k.ThemeIcon.asClassName(nt.icon)}`),
							(lt.icon.title = nt.tooltip),
							(lt.icon.style.display = "inline"));
					}
					u(nt, lt) {
						this.c && (this.c(!1, !1), (this.c = void 0)),
							(nt.style.paddingLeft = "5px");
						const ct = lt.startingValue || "",
							gt = new S.$Mob(nt, this.n, {
								ariaLabel: t.localize(8826, null),
								validationOptions: {
									validation: (Nt) => {
										const jt = lt.validationMessage(Nt);
										return jt
											? {
													content: jt.content,
													formatContent: !0,
													type:
														jt.severity === v.Severity.Error
															? S.MessageType.ERROR
															: S.MessageType.INFO,
												}
											: null;
									},
								},
								placeholder: lt.placeholder || "",
								inputBoxStyles: J.$wyb,
							});
						(gt.value = ct),
							gt.focus(),
							gt.select({
								start: 0,
								end: lt.startingValue ? lt.startingValue.length : 0,
							});
						const ht = (0, I.$hb)(async (Nt, jt) => {
							(0, p.$Vc)(Rt),
								this.c && (this.c = void 0),
								(gt.element.style.display = "none");
							const ti = gt.value;
							if (jt) return lt.onFinish(ti, Nt);
						});
						this.c = ht;
						const Rt = [
							gt,
							i.$$fb(gt.inputElement, i.$$gb.KEY_DOWN, async (Nt) => {
								if (Nt.equals(T.KeyCode.Enter))
									return (
										Nt.stopPropagation(),
										gt.validate() !== S.MessageType.ERROR
											? ht(!0, !0)
											: ht(!1, !0)
									);
								if (Nt.equals(T.KeyCode.Escape))
									return Nt.preventDefault(), Nt.stopPropagation(), ht(!1, !0);
							}),
							i.$0fb(gt.inputElement, i.$$gb.BLUR, () =>
								ht(gt.validate() !== S.MessageType.ERROR, !0),
							),
						];
						return (0, p.$Yc)(() => {
							ht(!1, !1);
						});
					}
					disposeElement(nt, lt, ct, gt) {
						ct.elementDisposable.dispose();
					}
					disposeTemplate(nt) {
						nt.label.dispose(),
							nt.actionBar.dispose(),
							nt.elementDisposable.dispose(),
							nt.button?.dispose();
					}
				};
				oe = Ne(
					[
						j(0, u.$Li),
						j(1, m.$6j),
						j(2, s.$YX),
						j(3, d.$Wxb),
						j(4, y.$5pc),
						j(5, c.$ek),
						j(6, r.$gj),
					],
					oe,
				);
				class ae {
					static createFromTunnel(nt, lt, ct, gt = y.TunnelType.Forwarded, ht) {
						return new ae(
							gt,
							ct.remoteHost,
							ct.remotePort,
							ct.source,
							!!ct.hasRunningProcess,
							ct.protocol,
							ct.localUri,
							ct.localAddress,
							ct.localPort,
							ht === void 0 ? ct.closeable : ht,
							ct.name,
							ct.runningProcess,
							ct.pid,
							ct.privacy,
							nt,
							lt,
						);
					}
					strip() {
						return new ae(
							this.tunnelType,
							this.remoteHost,
							this.remotePort,
							this.source,
							this.hasRunningProcess,
							this.protocol,
							this.localUri,
							this.localAddress,
							this.localPort,
							this.closeable,
							this.name,
							this.c,
							this.d,
							this.f,
						);
					}
					constructor(
						nt,
						lt,
						ct,
						gt,
						ht,
						Rt,
						Nt,
						jt,
						ti,
						kt,
						hi,
						Kt,
						di,
						Ye,
						ze,
						Xe,
					) {
						(this.tunnelType = nt),
							(this.remoteHost = lt),
							(this.remotePort = ct),
							(this.source = gt),
							(this.hasRunningProcess = ht),
							(this.protocol = Rt),
							(this.localUri = Nt),
							(this.localAddress = jt),
							(this.localPort = ti),
							(this.closeable = kt),
							(this.name = hi),
							(this.c = Kt),
							(this.d = di),
							(this.f = Ye),
							(this.g = ze),
							(this.h = Xe);
					}
					get label() {
						if (this.tunnelType === y.TunnelType.Add && this.name)
							return this.name;
						const nt =
							(0, M.$iO)(this.remoteHost) || (0, M.$kO)(this.remoteHost)
								? `${this.remotePort}`
								: `${this.remoteHost}:${this.remotePort}`;
						return this.name ? `${this.name} (${nt})` : nt;
					}
					set processDescription(nt) {
						this.c = nt;
					}
					get processDescription() {
						let nt = "";
						return (
							this.c
								? (this.d && this.g?.namedProcesses.has(this.d)
										? (nt = this.g.namedProcesses.get(this.d))
										: (nt = this.c.replace(/\0/g, " ").trim()),
									this.d && (nt += ` (${this.d})`))
								: this.hasRunningProcess && (nt = t.localize(8827, null)),
							nt
						);
					}
					get tooltipPostfix() {
						let nt;
						return (
							this.localAddress
								? (nt = t.localize(
										8828,
										null,
										this.remoteHost,
										this.remotePort,
										this.localAddress,
									))
								: (nt = t.localize(
										8829,
										null,
										this.remoteHost,
										this.remotePort,
									)),
							nt
						);
					}
					get iconTooltip() {
						return this.tunnelType === y.TunnelType.Add
							? this.label
							: `${this.processDescription ? t.localize(8830, null) : t.localize(8831, null)}`;
					}
					get portTooltip() {
						return this.tunnelType === y.TunnelType.Add
							? ""
							: `${this.name ? t.localize(8832, null, this.name) : ""}`;
					}
					get processTooltip() {
						return this.processDescription ?? "";
					}
					get originTooltip() {
						return this.source.description;
					}
					get privacy() {
						return this.h?.privacyOptions
							? (this.h?.privacyOptions.find((nt) => nt.id === this.f) ?? {
									id: "",
									themeIcon: K.$ak.question.id,
									label: t.localize(8833, null),
								})
							: {
									id: M.TunnelPrivacyId.Private,
									themeIcon: B.$3tc.id,
									label: t.localize(8834, null),
								};
					}
				}
				const pe = new m.$5j("tunnelType", y.TunnelType.Add, !0),
					$e = new m.$5j("tunnelCloseable", !1, !0),
					ye = new m.$5j("tunnelPrivacy", void 0, !0),
					ue = new m.$5j("tunnelPrivacyEnabled", !1, !0),
					fe = new m.$5j("tunnelProtocol", M.TunnelProtocol.Http, !0),
					me = new m.$5j("tunnelViewFocus", !1, t.localize(8835, null)),
					ve = "tunnelViewSelection",
					ge = new m.$5j(ve, void 0, !0),
					be = "tunnelViewMultiSelection",
					Ce = new m.$5j(be, void 0, !0),
					Le = new m.$5j("portChangable", !1, !0),
					Fe = new m.$5j("protocolChangable", !0, !0);
				let Oe = class extends L.$TMb {
					static {
						ie = this;
					}
					static {
						this.ID = y.$7pc;
					}
					static {
						this.TITLE = t.localize2(8867, "Ports");
					}
					constructor(
						nt,
						lt,
						ct,
						gt,
						ht,
						Rt,
						Nt,
						jt,
						ti,
						kt,
						hi,
						Kt,
						di,
						Ye,
						ze,
						Xe,
						It,
						Lt,
					) {
						super(lt, ct, gt, Rt, ht, jt, Nt, ti, di, ze, Xe),
							(this.fc = nt),
							(this.gc = kt),
							(this.hc = hi),
							(this.ic = Kt),
							(this.jc = Ye),
							(this.kc = It),
							(this.lc = Lt),
							(this.g = this.D(new p.$Zc())),
							(this.cc = !1),
							(this.dc = []),
							(this.ec = []),
							(this.uc = 0),
							(this.vc = 0),
							(this.h = pe.bindTo(ht)),
							(this.j = $e.bindTo(ht)),
							(this.m = ye.bindTo(ht)),
							(this.n = ue.bindTo(ht)),
							this.n.set(It.canChangePrivacy),
							(this.sb = Fe.bindTo(ht)),
							this.sb.set(It.canChangeProtocol),
							(this.r = fe.bindTo(ht)),
							(this.s = me.bindTo(ht)),
							(this.t = ge.bindTo(ht)),
							(this.L = Ce.bindTo(ht)),
							(this.ab = Le.bindTo(ht));
						const xt = this.Bb.createOverlay([["view", ie.ID]]),
							Vt = this.D(this.ic.createMenu(s.$XX.TunnelTitle, xt)),
							Bt = () => {
								(this.dc = []), (0, l.$Kyb)(Vt, void 0, this.dc), this.bc();
							};
						this.D(Vt.onDidChange(Bt)),
							Bt(),
							this.D(
								(0, p.$Yc)(() => {
									this.dc = [];
								}),
							),
							this.mc(),
							this.D(
								n.Event.once(this.kc.onAddedTunnelProvider)(() => {
									let Gt = !1;
									this.n.get() === !1 &&
										(this.n.set(It.canChangePrivacy), (Gt = !0)),
										this.sb.get() === !0 &&
											(this.sb.set(It.canChangeProtocol), (Gt = !0)),
										Gt &&
											(Bt(),
											this.mc(),
											this.nc(),
											this.f?.layout(this.uc, this.vc));
								}),
							);
					}
					mc() {
						for (const nt of this.kc.privacyOptions) {
							const lt = `remote.tunnel.privacy${nt.id}`;
							c.$fk.registerCommand(lt, je.handler(nt.id)),
								s.$ZX.appendMenuItem(s.$XX.TunnelPrivacy, {
									order: 0,
									command: {
										id: lt,
										title: nt.label,
										toggled: ye.isEqualTo(nt.id),
									},
								});
						}
					}
					get portCount() {
						return (
							this.jc.tunnelModel.forwarded.size +
							this.jc.tunnelModel.detected.size
						);
					}
					nc() {
						if (!this.c) return;
						this.g.clear(), i.$9fb(this.c);
						const nt = i.$fhb(this.c, i.$(".customview-tree"));
						nt.classList.add("ports-view"),
							nt.classList.add("file-icon-themable-tree", "show-file-icons");
						const lt = new oe(
								this.Db,
								this.Bb,
								this.ic,
								this.lc,
								this.jc,
								this.hc,
								this.Ab,
							),
							ct = [new te(), new Q(), new Z(), new se()];
						this.kc.canChangePrivacy && ct.push(new le()),
							ct.push(new re()),
							(this.f = this.Db.createInstance(
								x.$AMb,
								"RemoteTunnels",
								nt,
								new ne(this.jc),
								ct,
								[lt],
								{
									keyboardNavigationLabelProvider: {
										getKeyboardNavigationLabel: (Nt) => Nt.label,
									},
									multipleSelectionSupport: !0,
									accessibilityProvider: {
										getAriaLabel: (Nt) =>
											Nt instanceof ae
												? `${Nt.tooltipPostfix} ${Nt.portTooltip} ${Nt.iconTooltip} ${Nt.processTooltip} ${Nt.originTooltip} ${this.kc.canChangePrivacy ? Nt.privacy.label : ""}`
												: Nt.label,
										getWidgetAriaLabel: () => t.localize(8836, null),
									},
									openOnSingleClick: !0,
								},
							));
						const gt = new b.$sj();
						(lt.actionRunner = gt),
							this.g.add(this.f),
							this.g.add(this.f.onContextMenu((Nt) => this.sc(Nt, gt))),
							this.g.add(this.f.onMouseDblClick((Nt) => this.tc(Nt))),
							this.g.add(this.f.onDidChangeFocus((Nt) => this.pc(Nt))),
							this.g.add(this.f.onDidChangeSelection((Nt) => this.rc(Nt))),
							this.g.add(this.f.onDidFocus(() => this.s.set(!0))),
							this.g.add(this.f.onDidBlur(() => this.s.set(!1)));
						const ht = () =>
							this.f?.splice(0, Number.POSITIVE_INFINITY, this.fc.all);
						ht();
						let Rt = this.portCount;
						this.g.add(
							n.Event.debounce(
								this.fc.onForwardedPortsChanged,
								(Nt, jt) => jt,
								50,
							)(() => {
								const Nt = this.portCount;
								(Rt === 0 || Nt === 0) && Rt !== Nt && this.eb.fire(),
									(Rt = Nt),
									ht();
							}),
						),
							this.g.add(
								this.f.onMouseClick((Nt) => {
									if (this.qc(Nt.browserEvent) && this.f) {
										const jt = this.f.getSelectedElements();
										(jt.length === 0 ||
											(jt.length === 1 && jt[0] === Nt.element)) &&
											this.hc.executeCommand(qe.ID, Nt.element);
									}
								}),
							),
							this.g.add(
								this.f.onDidOpen((Nt) => {
									!Nt.element ||
										Nt.element.tunnelType !== y.TunnelType.Forwarded ||
										(Nt.browserEvent?.type === "dblclick" &&
											this.hc.executeCommand(Ke.ID));
								}),
							),
							this.g.add(
								this.jc.onDidChangeEditable((Nt) => {
									(this.cc = !!this.jc.getEditableData(Nt?.tunnel, Nt?.editId)),
										this.eb.fire(),
										this.cc || nt.classList.remove("highlight"),
										ht(),
										this.cc
											? (nt.classList.add("highlight"),
												Nt || this.f?.reveal(this.f.indexOf(this.fc.input)))
											: (Nt &&
													Nt.tunnel.tunnelType !== y.TunnelType.Add &&
													this.f?.setFocus(this.ec),
												this.focus());
								}),
							);
					}
					W(nt) {
						super.W(nt),
							(this.c = i.$fhb(nt, i.$(".tree-explorer-viewlet-tree-view"))),
							this.nc();
					}
					shouldShowWelcome() {
						return this.fc.isEmpty() && !this.cc;
					}
					focus() {
						super.focus(), this.f?.domFocus();
					}
					pc(nt) {
						nt.indexes.length > 0 &&
							nt.elements.length > 0 &&
							(this.ec = [...nt.indexes]);
						const lt = nt.elements,
							ct = lt && lt.length ? lt[0] : void 0;
						ct
							? (this.t.set((0, W.$z8)(ct.remoteHost, ct.remotePort)),
								this.h.set(ct.tunnelType),
								this.j.set(!!ct.closeable),
								this.m.set(ct.privacy.id),
								this.r.set(
									(ct.protocol === M.TunnelProtocol.Https,
									M.TunnelProtocol.Https),
								),
								this.ab.set(!!ct.localPort))
							: (this.h.reset(),
								this.t.reset(),
								this.j.reset(),
								this.m.reset(),
								this.r.reset(),
								this.ab.reset());
					}
					qc(nt) {
						const lt = this.Ab.getValue("editor");
						let ct = !1;
						return (
							lt.multiCursorModifier === "ctrlCmd"
								? (ct = nt.altKey)
								: F.$m
									? (ct = nt.metaKey)
									: (ct = nt.ctrlKey),
							ct
						);
					}
					rc(nt) {
						const lt = nt.elements;
						lt.length > 1
							? this.L.set(
									lt.map((ct) => (0, W.$z8)(ct.remoteHost, ct.remotePort)),
								)
							: this.L.set(void 0);
					}
					sc(nt, lt) {
						if (nt.element !== void 0 && !(nt.element instanceof ae)) return;
						nt.browserEvent.preventDefault(), nt.browserEvent.stopPropagation();
						const ct = nt.element;
						ct
							? (this.f?.setFocus([this.f.indexOf(ct)]),
								this.h.set(ct.tunnelType),
								this.j.set(!!ct.closeable),
								this.m.set(ct.privacy.id),
								this.r.set(ct.protocol),
								this.ab.set(!!ct.localPort))
							: (this.h.set(y.TunnelType.Add),
								this.j.set(!1),
								this.m.set(void 0),
								this.r.set(void 0),
								this.ab.set(!1)),
							this.zb.showContextMenu({
								menuId: s.$XX.TunnelContext,
								menuActionOptions: { shouldForwardArgs: !0 },
								contextKeyService: this.f?.contextKeyService,
								getAnchor: () => nt.anchor,
								getActionViewItem: (gt) => {
									const ht = this.yb.lookupKeybinding(gt.id);
									if (ht)
										return new O.$_ib(gt, gt, {
											label: !0,
											keybinding: ht.getLabel(),
										});
								},
								onHide: (gt) => {
									gt && this.f?.domFocus();
								},
								getActionsContext: () => ct?.strip(),
								actionRunner: lt,
							});
					}
					tc(nt) {
						nt.element || this.hc.executeCommand(Se.INLINE_ID);
					}
					X(nt, lt) {
						(this.uc = nt),
							(this.vc = lt),
							super.X(nt, lt),
							this.f?.layout(nt, lt);
					}
				};
				(e.$buc = Oe),
					(e.$buc =
						Oe =
						ie =
							Ne(
								[
									j(2, C.$uZ),
									j(3, d.$Xxb),
									j(4, m.$6j),
									j(5, r.$gj),
									j(6, u.$Li),
									j(7, w.$K1),
									j(8, a.$7rb),
									j(9, h.$DJ),
									j(10, c.$ek),
									j(11, s.$YX),
									j(12, P.$iP),
									j(13, y.$5pc),
									j(14, R.$km),
									j(15, Y.$Uyb),
									j(16, M.$cO),
									j(17, d.$Wxb),
								],
								Oe,
							));
				class xe {
					constructor(nt, lt) {
						(this.id = Oe.ID),
							(this.name = Oe.TITLE),
							(this.canToggleVisibility = !0),
							(this.hideByDefault = !1),
							(this.group = "details@0"),
							(this.order = -500),
							(this.canMoveView = !0),
							(this.containerIcon = B.$1tc),
							(this.ctorDescriptor = new N.$Ji(Oe, [nt])),
							(this.remoteAuthority = lt.remoteAuthority
								? lt.remoteAuthority.split("+")[0]
								: void 0);
					}
				}
				e.$cuc = xe;
				function He(bt) {
					return bt && bt.tunnelType && bt.remoteHost && bt.source;
				}
				var Ke;
				(function (bt) {
					(bt.ID = "remote.tunnel.label"),
						(bt.LABEL = t.localize(8837, null)),
						(bt.COMMAND_ID_KEYWORD = "label");
					function nt() {
						return async (lt, ct) => {
							const gt = lt.get(y.$5pc);
							let ht;
							if (He(ct)) ht = ct;
							else {
								const Rt = lt.get(m.$6j).getContextKeyValue(ve),
									Nt = Rt ? gt.tunnelModel.forwarded.get(Rt) : void 0;
								if (Nt) {
									const jt = lt.get(M.$cO);
									ht = ae.createFromTunnel(gt, jt, Nt);
								}
							}
							if (ht) {
								const Rt = ht;
								return new Promise((Nt) => {
									const jt = Rt.name ? Rt.name : `${Rt.remotePort}`;
									gt.setEditable(Rt, y.TunnelEditId.Label, {
										onFinish: async (ti, kt) => {
											(ti = ti.trim()),
												gt.setEditable(Rt, y.TunnelEditId.Label, null);
											const hi = kt && ti !== jt;
											hi &&
												(await gt.tunnelModel.name(
													Rt.remoteHost,
													Rt.remotePort,
													ti,
												)),
												Nt(hi ? { port: Rt.remotePort, label: ti } : void 0);
										},
										validationMessage: () => null,
										placeholder: t.localize(8838, null),
										startingValue: jt,
									});
								});
							}
						};
					}
					bt.handler = nt;
				})(Ke || (Ke = {}));
				const Je = t.localize(8839, null),
					Te = 65536,
					Ee = t.localize(8840, null, Te),
					Ie = t.localize(8841, null),
					Be = t.localize(8842, null);
				var Se;
				(function (bt) {
					(bt.INLINE_ID = "remote.tunnel.forwardInline"),
						(bt.COMMANDPALETTE_ID = "remote.tunnel.forwardCommandPalette"),
						(bt.LABEL = t.localize2(8868, "Forward a Port")),
						(bt.TREEITEM_LABEL = t.localize(8843, null));
					const nt = t.localize(8844, null);
					function lt(Rt, Nt, jt, ti) {
						const kt = (0, W.$u8)(jt);
						if (kt) {
							if (kt.port >= Te)
								return { content: Ee, severity: v.Severity.Error };
							if (ti && Nt.isPortPrivileged(kt.port))
								return { content: Ie, severity: v.Severity.Info };
							if ((0, W.$y8)(Rt.tunnelModel.forwarded, kt.host, kt.port))
								return { content: Be, severity: v.Severity.Error };
						} else return { content: Je, severity: v.Severity.Error };
						return null;
					}
					function ct(Rt, Nt, jt, ti) {
						Nt
							? typeof Nt == "string" &&
								Rt.warn(t.localize(8846, null, jt, ti, Nt))
							: Rt.warn(t.localize(8845, null, jt, ti));
					}
					function gt() {
						return async (Rt, Nt) => {
							const jt = Rt.get(y.$5pc),
								ti = Rt.get(v.$4N),
								kt = Rt.get(M.$cO);
							jt.setEditable(void 0, y.TunnelEditId.New, {
								onFinish: async (hi, Kt) => {
									jt.setEditable(void 0, y.TunnelEditId.New, null);
									let di;
									Kt &&
										(di = (0, W.$u8)(hi)) &&
										jt
											.forward({
												remote: { host: di.host, port: di.port },
												elevateIfNeeded: !0,
											})
											.then((Ye) => ct(ti, Ye, di.host, di.port));
								},
								validationMessage: (hi) => lt(jt, kt, hi, kt.canElevate),
								placeholder: nt,
							});
						};
					}
					bt.inlineHandler = gt;
					function ht() {
						return async (Rt, Nt) => {
							const jt = Rt.get(y.$5pc),
								ti = Rt.get(v.$4N),
								kt = Rt.get(E.$HMb),
								hi = Rt.get(h.$DJ),
								Kt = Rt.get(M.$cO);
							await kt.openView(Oe.ID, !0);
							const di = await hi.input({
								prompt: nt,
								validateInput: (ze) =>
									Promise.resolve(lt(jt, Kt, ze, Kt.canElevate)),
							});
							let Ye;
							di &&
								(Ye = (0, W.$u8)(di)) &&
								jt
									.forward({
										remote: { host: Ye.host, port: Ye.port },
										elevateIfNeeded: !0,
									})
									.then((ze) => ct(ti, ze, Ye.host, Ye.port));
						};
					}
					bt.commandPaletteHandler = ht;
				})(Se || (e.ForwardPortAction = Se = {}));
				function ke(bt, nt, lt) {
					const ct = bt.map((gt) => {
						const ht = ae.createFromTunnel(nt, lt, gt);
						return {
							label: ht.label,
							description: ht.processDescription,
							tunnel: ht,
						};
					});
					return (
						ct.length === 0 &&
							ct.push({ label: t.localize(8847, null, Se.LABEL.value) }),
						ct
					);
				}
				var Ue;
				(function (bt) {
					(bt.INLINE_ID = "remote.tunnel.closeInline"),
						(bt.COMMANDPALETTE_ID = "remote.tunnel.closeCommandPalette"),
						(bt.LABEL = t.localize2(8869, "Stop Forwarding Port"));
					function nt() {
						return async (ct, gt) => {
							const ht = ct.get(m.$6j),
								Rt = ct.get(y.$5pc);
							let Nt = [];
							const jt = ht.getContextKeyValue(be);
							if (jt)
								jt.forEach((ti) => {
									const kt = Rt.tunnelModel.forwarded.get(ti);
									kt && Nt?.push(kt);
								});
							else if (He(gt)) Nt = [gt];
							else {
								const ti = ht.getContextKeyValue(ve),
									kt = ti ? Rt.tunnelModel.forwarded.get(ti) : void 0;
								kt && (Nt = [kt]);
							}
							if (!(!Nt || Nt.length === 0))
								return Promise.all(
									Nt.map((ti) =>
										Rt.close(
											{ host: ti.remoteHost, port: ti.remotePort },
											W.TunnelCloseReason.User,
										),
									),
								);
						};
					}
					bt.inlineHandler = nt;
					function lt() {
						return async (ct) => {
							const gt = ct.get(h.$DJ),
								ht = ct.get(y.$5pc),
								Rt = ct.get(M.$cO),
								Nt = ct.get(c.$ek),
								jt = ke(
									Array.from(ht.tunnelModel.forwarded.values()).filter(
										(kt) => kt.closeable,
									),
									ht,
									Rt,
								),
								ti = await gt.pick(jt, { placeHolder: t.localize(8848, null) });
							ti && ti.tunnel
								? await ht.close(
										{ host: ti.tunnel.remoteHost, port: ti.tunnel.remotePort },
										W.TunnelCloseReason.User,
									)
								: ti && (await Nt.executeCommand(Se.COMMANDPALETTE_ID));
						};
					}
					bt.commandPaletteHandler = lt;
				})(Ue || (Ue = {}));
				var qe;
				(function (bt) {
					(bt.ID = "remote.tunnel.open"), (bt.LABEL = t.localize(8849, null));
					function nt() {
						return async (ct, gt) => {
							let ht;
							if (
								(He(gt)
									? (ht = (0, W.$z8)(gt.remoteHost, gt.remotePort))
									: gt.tunnelRemoteHost &&
										gt.tunnelRemotePort &&
										(ht = (0, W.$z8)(gt.tunnelRemoteHost, gt.tunnelRemotePort)),
								ht)
							) {
								const Rt = ct.get(y.$5pc).tunnelModel,
									Nt = ct.get(a.$7rb);
								return lt(Rt, Nt, ht);
							}
						};
					}
					bt.handler = nt;
					function lt(ct, gt, ht) {
						const Rt = ct.forwarded.get(ht) || ct.detected.get(ht);
						return Rt
							? gt.open(Rt.localUri, { allowContributedOpeners: !1 })
							: Promise.resolve();
					}
					bt.run = lt;
				})(qe || (e.OpenPortInBrowserAction = qe = {}));
				var Ae;
				(function (bt) {
					(bt.ID = "remote.tunnel.openPreview"),
						(bt.LABEL = t.localize(8850, null));
					function nt() {
						return async (ct, gt) => {
							let ht;
							if (
								(He(gt)
									? (ht = (0, W.$z8)(gt.remoteHost, gt.remotePort))
									: gt.tunnelRemoteHost &&
										gt.tunnelRemotePort &&
										(ht = (0, W.$z8)(gt.tunnelRemoteHost, gt.tunnelRemotePort)),
								ht)
							) {
								const Rt = ct.get(y.$5pc).tunnelModel,
									Nt = ct.get(a.$7rb),
									jt = ct.get(U.IExternalUriOpenerService);
								return lt(Rt, Nt, jt, ht);
							}
						};
					}
					bt.handler = nt;
					async function lt(ct, gt, ht, Rt) {
						const Nt = ct.forwarded.get(Rt) || ct.detected.get(Rt);
						if (Nt) {
							const jt = Nt.remoteHost.includes(":")
									? `[${Nt.remoteHost}]`
									: Nt.remoteHost,
								ti = D.URI.parse(`http://${jt}:${Nt.remotePort}`),
								kt = await ht.getOpener(
									Nt.localUri,
									{ sourceUri: ti },
									z.CancellationToken.None,
								);
							return kt
								? kt.openExternalUri(
										Nt.localUri,
										{ sourceUri: ti },
										z.CancellationToken.None,
									)
								: gt.open(Nt.localUri);
						}
						return Promise.resolve();
					}
					bt.run = lt;
				})(Ae || (e.OpenPortInPreviewAction = Ae = {}));
				var Me;
				(function (bt) {
					(bt.ID = "remote.tunnel.openCommandPalette"),
						(bt.LABEL = t.localize(8851, null));
					function nt() {
						return async (lt, ct) => {
							const gt = lt.get(y.$5pc),
								ht = lt.get(M.$cO),
								Rt = gt.tunnelModel,
								Nt = lt.get(h.$DJ),
								jt = lt.get(a.$7rb),
								ti = lt.get(c.$ek),
								kt = [...Rt.forwarded, ...Rt.detected].map((Kt) => {
									const di = ae.createFromTunnel(gt, ht, Kt[1]);
									return {
										label: di.label,
										description: di.processDescription,
										tunnel: di,
									};
								});
							kt.length === 0
								? kt.push({ label: t.localize(8852, null) })
								: kt.push({ label: t.localize(8853, null) });
							const hi = await Nt.pick(kt, {
								placeHolder: t.localize(8854, null),
							});
							if (hi && hi.tunnel)
								return qe.run(
									Rt,
									jt,
									(0, W.$z8)(hi.tunnel.remoteHost, hi.tunnel.remotePort),
								);
							if (hi) return ti.executeCommand(`${y.$7pc}.focus`);
						};
					}
					bt.handler = nt;
				})(Me || (Me = {}));
				var De;
				(function (bt) {
					(bt.INLINE_ID = "remote.tunnel.copyAddressInline"),
						(bt.COMMANDPALETTE_ID = "remote.tunnel.copyAddressCommandPalette"),
						(bt.INLINE_LABEL = t.localize(8855, null)),
						(bt.COMMANDPALETTE_LABEL = t.localize(8856, null));
					async function nt(gt, ht, Rt) {
						const Nt = gt.tunnelModel.address(Rt.remoteHost, Rt.remotePort);
						Nt && (await ht.writeText(Nt.toString()));
					}
					function lt() {
						return async (gt, ht) => {
							const Rt = gt.get(y.$5pc);
							let Nt;
							if (He(ht)) Nt = ht;
							else {
								const jt = gt.get(m.$6j).getContextKeyValue(ve);
								Nt = jt ? Rt.tunnelModel.forwarded.get(jt) : void 0;
							}
							if (Nt) return nt(Rt, gt.get($.$Vxb), Nt);
						};
					}
					bt.inlineHandler = lt;
					function ct() {
						return async (gt, ht) => {
							const Rt = gt.get(h.$DJ),
								Nt = gt.get(y.$5pc),
								jt = gt.get(M.$cO),
								ti = gt.get(c.$ek),
								kt = gt.get($.$Vxb),
								hi = Array.from(Nt.tunnelModel.forwarded.values()).concat(
									Array.from(Nt.tunnelModel.detected.values()),
								),
								Kt = await Rt.pick(ke(hi, Nt, jt), {
									placeHolder: t.localize(8857, null),
								});
							Kt && Kt.tunnel
								? await nt(Nt, kt, Kt.tunnel)
								: Kt && (await ti.executeCommand(Se.COMMANDPALETTE_ID));
						};
					}
					bt.commandPaletteHandler = ct;
				})(De || (De = {}));
				var Re;
				(function (bt) {
					(bt.ID = "remote.tunnel.changeLocalPort"),
						(bt.LABEL = t.localize(8858, null));
					function nt(ct, gt, ht) {
						if (gt.match(/^[0-9]+$/)) {
							if (Number(gt) >= Te)
								return { content: Ee, severity: v.Severity.Error };
							if (ht && ct.isPortPrivileged(Number(gt)))
								return { content: Ie, severity: v.Severity.Info };
						} else
							return {
								content: t.localize(8859, null),
								severity: v.Severity.Error,
							};
						return null;
					}
					function lt() {
						return async (ct, gt) => {
							const ht = ct.get(y.$5pc),
								Rt = ct.get(v.$4N),
								Nt = ct.get(M.$cO);
							let jt;
							if (He(gt)) jt = gt;
							else {
								const ti = ct.get(m.$6j).getContextKeyValue(ve),
									kt = ti ? ht.tunnelModel.forwarded.get(ti) : void 0;
								if (kt) {
									const hi = ct.get(M.$cO);
									jt = ae.createFromTunnel(ht, hi, kt);
								}
							}
							if (jt) {
								const ti = jt;
								ht.setEditable(ti, y.TunnelEditId.LocalPort, {
									onFinish: async (kt, hi) => {
										if (
											(ht.setEditable(ti, y.TunnelEditId.LocalPort, null), hi)
										) {
											await ht.close(
												{ host: ti.remoteHost, port: ti.remotePort },
												W.TunnelCloseReason.Other,
											);
											const Kt = Number(kt),
												di = await ht.forward({
													remote: { host: ti.remoteHost, port: ti.remotePort },
													local: Kt,
													name: ti.name,
													elevateIfNeeded: !0,
													source: ti.source,
												});
											di &&
												typeof di != "string" &&
												di.tunnelLocalPort !== Kt &&
												Rt.warn(
													t.localize(
														8860,
														null,
														kt,
														di.tunnelLocalPort ?? di.localAddress,
													),
												);
										}
									},
									validationMessage: (kt) => nt(Nt, kt, Nt.canElevate),
									placeholder: t.localize(8861, null),
								});
							}
						};
					}
					bt.handler = lt;
				})(Re || (Re = {}));
				var je;
				(function (bt) {
					function nt(lt) {
						return async (ct, gt) => {
							if (He(gt)) {
								const ht = ct.get(y.$5pc);
								return (
									await ht.close(
										{ host: gt.remoteHost, port: gt.remotePort },
										W.TunnelCloseReason.Other,
									),
									ht.forward({
										remote: { host: gt.remoteHost, port: gt.remotePort },
										local: gt.localPort,
										name: gt.name,
										elevateIfNeeded: !0,
										privacy: lt,
										source: gt.source,
									})
								);
							}
						};
					}
					bt.handler = nt;
				})(je || (je = {}));
				var Ve;
				(function (bt) {
					(bt.ID_HTTP = "remote.tunnel.setProtocolHttp"),
						(bt.ID_HTTPS = "remote.tunnel.setProtocolHttps"),
						(bt.LABEL_HTTP = t.localize(8862, null)),
						(bt.LABEL_HTTPS = t.localize(8863, null));
					async function nt(gt, ht, Rt, Nt) {
						if (He(gt)) {
							const jt = { protocol: ht },
								ti = Nt.remoteAuthority
									? r.ConfigurationTarget.USER_REMOTE
									: r.ConfigurationTarget.USER_LOCAL;
							return Rt.tunnelModel.configPortsAttributes.addAttributes(
								gt.remotePort,
								jt,
								ti,
							);
						}
					}
					function lt() {
						return async (gt, ht) =>
							nt(ht, M.TunnelProtocol.Http, gt.get(y.$5pc), gt.get(g.$r8));
					}
					bt.handlerHttp = lt;
					function ct() {
						return async (gt, ht) =>
							nt(ht, M.TunnelProtocol.Https, gt.get(y.$5pc), gt.get(g.$r8));
					}
					bt.handlerHttps = ct;
				})(Ve || (Ve = {}));
				const Ze = 10,
					et = pe.isEqualTo(y.TunnelType.Forwarded),
					rt = m.$Kj.or(et, pe.isEqualTo(y.TunnelType.Detected)),
					ft = Ce.isEqualTo(void 0);
				A.$TX.registerCommandAndKeybindingRule({
					id: Ke.ID,
					weight: A.KeybindingWeight.WorkbenchContrib + Ze,
					when: m.$Kj.and(me, et, ft),
					primary: T.KeyCode.F2,
					mac: { primary: T.KeyCode.Enter },
					handler: Ke.handler(),
				}),
					c.$fk.registerCommand(Se.INLINE_ID, Se.inlineHandler()),
					c.$fk.registerCommand(
						Se.COMMANDPALETTE_ID,
						Se.commandPaletteHandler(),
					),
					A.$TX.registerCommandAndKeybindingRule({
						id: Ue.INLINE_ID,
						weight: A.KeybindingWeight.WorkbenchContrib + Ze,
						when: m.$Kj.and($e, me),
						primary: T.KeyCode.Delete,
						mac: {
							primary: T.KeyMod.CtrlCmd | T.KeyCode.Backspace,
							secondary: [T.KeyCode.Delete],
						},
						handler: Ue.inlineHandler(),
					}),
					c.$fk.registerCommand(
						Ue.COMMANDPALETTE_ID,
						Ue.commandPaletteHandler(),
					),
					c.$fk.registerCommand(qe.ID, qe.handler()),
					c.$fk.registerCommand(Ae.ID, Ae.handler()),
					c.$fk.registerCommand(Me.ID, Me.handler()),
					A.$TX.registerCommandAndKeybindingRule({
						id: De.INLINE_ID,
						weight: A.KeybindingWeight.WorkbenchContrib + Ze,
						when: m.$Kj.and(me, rt, ft),
						primary: T.KeyMod.CtrlCmd | T.KeyCode.KeyC,
						handler: De.inlineHandler(),
					}),
					c.$fk.registerCommand(
						De.COMMANDPALETTE_ID,
						De.commandPaletteHandler(),
					),
					c.$fk.registerCommand(Re.ID, Re.handler()),
					c.$fk.registerCommand(Ve.ID_HTTP, Ve.handlerHttp()),
					c.$fk.registerCommand(Ve.ID_HTTPS, Ve.handlerHttps()),
					s.$ZX.appendMenuItem(s.$XX.CommandPalette, {
						command: { id: Ue.COMMANDPALETTE_ID, title: Ue.LABEL },
						when: W.$t8,
					}),
					s.$ZX.appendMenuItem(s.$XX.CommandPalette, {
						command: { id: Se.COMMANDPALETTE_ID, title: Se.LABEL },
						when: W.$t8,
					}),
					s.$ZX.appendMenuItem(s.$XX.CommandPalette, {
						command: {
							id: De.COMMANDPALETTE_ID,
							title: De.COMMANDPALETTE_LABEL,
						},
						when: W.$t8,
					}),
					s.$ZX.appendMenuItem(s.$XX.CommandPalette, {
						command: { id: Me.ID, title: Me.LABEL },
						when: W.$t8,
					}),
					s.$ZX.appendMenuItem(s.$XX.TunnelContext, {
						group: "._open",
						order: 0,
						command: { id: qe.ID, title: qe.LABEL },
						when: m.$Kj.and(rt, ft),
					}),
					s.$ZX.appendMenuItem(s.$XX.TunnelContext, {
						group: "._open",
						order: 1,
						command: { id: Ae.ID, title: Ae.LABEL },
						when: m.$Kj.and(rt, ft),
					}),
					s.$ZX.appendMenuItem(s.$XX.TunnelContext, {
						group: "0_manage",
						order: 1,
						command: { id: Ke.ID, title: Ke.LABEL, icon: B.$9tc },
						when: m.$Kj.and(et, ft),
					}),
					s.$ZX.appendMenuItem(s.$XX.TunnelContext, {
						group: "2_localaddress",
						order: 0,
						command: { id: De.INLINE_ID, title: De.INLINE_LABEL },
						when: m.$Kj.and(rt, ft),
					}),
					s.$ZX.appendMenuItem(s.$XX.TunnelContext, {
						group: "2_localaddress",
						order: 1,
						command: { id: Re.ID, title: Re.LABEL },
						when: m.$Kj.and(et, Le, ft),
					}),
					s.$ZX.appendMenuItem(s.$XX.TunnelContext, {
						group: "2_localaddress",
						order: 2,
						submenu: s.$XX.TunnelPrivacy,
						title: t.localize(8864, null),
						when: m.$Kj.and(et, ue),
					}),
					s.$ZX.appendMenuItem(s.$XX.TunnelContext, {
						group: "2_localaddress",
						order: 3,
						submenu: s.$XX.TunnelProtocol,
						title: t.localize(8865, null),
						when: m.$Kj.and(et, ft, Fe),
					}),
					s.$ZX.appendMenuItem(s.$XX.TunnelContext, {
						group: "3_forward",
						order: 0,
						command: { id: Ue.INLINE_ID, title: Ue.LABEL },
						when: $e,
					}),
					s.$ZX.appendMenuItem(s.$XX.TunnelContext, {
						group: "3_forward",
						order: 1,
						command: { id: Se.INLINE_ID, title: Se.LABEL },
					}),
					s.$ZX.appendMenuItem(s.$XX.TunnelProtocol, {
						order: 0,
						command: {
							id: Ve.ID_HTTP,
							title: Ve.LABEL_HTTP,
							toggled: fe.isEqualTo(M.TunnelProtocol.Http),
						},
					}),
					s.$ZX.appendMenuItem(s.$XX.TunnelProtocol, {
						order: 1,
						command: {
							id: Ve.ID_HTTPS,
							title: Ve.LABEL_HTTPS,
							toggled: fe.isEqualTo(M.TunnelProtocol.Https),
						},
					}),
					s.$ZX.appendMenuItem(s.$XX.TunnelPortInline, {
						group: "0_manage",
						order: 0,
						command: {
							id: Se.INLINE_ID,
							title: Se.TREEITEM_LABEL,
							icon: B.$4tc,
						},
						when: pe.isEqualTo(y.TunnelType.Candidate),
					}),
					s.$ZX.appendMenuItem(s.$XX.TunnelPortInline, {
						group: "0_manage",
						order: 4,
						command: { id: Ke.ID, title: Ke.LABEL, icon: B.$9tc },
						when: et,
					}),
					s.$ZX.appendMenuItem(s.$XX.TunnelPortInline, {
						group: "0_manage",
						order: 5,
						command: { id: Ue.INLINE_ID, title: Ue.LABEL, icon: B.$5tc },
						when: $e,
					}),
					s.$ZX.appendMenuItem(s.$XX.TunnelLocalAddressInline, {
						order: -1,
						command: { id: De.INLINE_ID, title: De.INLINE_LABEL, icon: B.$8tc },
						when: rt,
					}),
					s.$ZX.appendMenuItem(s.$XX.TunnelLocalAddressInline, {
						order: 0,
						command: { id: qe.ID, title: qe.LABEL, icon: B.$6tc },
						when: rt,
					}),
					s.$ZX.appendMenuItem(s.$XX.TunnelLocalAddressInline, {
						order: 1,
						command: { id: Ae.ID, title: Ae.LABEL, icon: B.$7tc },
						when: rt,
					}),
					(0, q.$wP)(
						"ports.iconRunningProcessForeground",
						G.$mGb,
						t.localize(8866, null),
					);
			},
		),
		define(
			de[3838],
			he([
				1, 0, 4, 6, 146, 7, 258, 5, 49, 8, 39, 35, 93, 10, 60, 41, 32, 1257,
				614, 277, 103, 3, 11, 72, 652,
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
					(e.$dQc = void 0);
				class v {
					getHeight() {
						return 22;
					}
					getTemplateId() {
						return o.$OPc.TEMPLATE_ID;
					}
				}
				let S = class extends w.$TMb {
					constructor(T, P, k, L, D, M, N, A, R, O, B, U) {
						super(
							{ ...T, titleMenuId: y.$XX.SCMSourceControlTitle },
							k,
							L,
							A,
							N,
							M,
							D,
							R,
							O,
							B,
							U,
						),
							(this.c = P),
							(this.b = new l.$Zc());
					}
					W(T) {
						super.W(T);
						const P = (0, E.$fhb)(
								T,
								(0, E.$)(".scm-view.scm-repositories-view"),
							),
							k = () => {
								const N = this.Ab.getValue("scm.providerCountBadge");
								P.classList.toggle("hide-provider-counts", N === "hidden"),
									P.classList.toggle("auto-provider-counts", N === "auto");
							};
						this.D(
							i.Event.filter(
								this.Ab.onDidChangeConfiguration,
								(N) => N.affectsConfiguration("scm.providerCountBadge"),
								this.b,
							)(k),
						),
							k();
						const L = new v(),
							D = this.Db.createInstance(
								o.$OPc,
								y.$XX.SCMSourceControlInline,
								(0, f.$GPc)(this.Db),
							),
							M = { getId: (N) => N.provider.id };
						(this.a = this.Db.createInstance(h.$yMb, "SCM Main", P, L, [D], {
							identityProvider: M,
							horizontalScrolling: !1,
							overrideStyles: this.Zb().listOverrideStyles,
							accessibilityProvider: {
								getAriaLabel(N) {
									return N.provider.label;
								},
								getWidgetAriaLabel() {
									return (0, t.localize)(9081, null);
								},
							},
						})),
							this.D(this.a),
							this.D(this.a.onDidChangeSelection(this.n, this)),
							this.D(this.a.onContextMenu(this.m, this)),
							this.D(this.c.onDidChangeRepositories(this.g, this)),
							this.D(this.c.onDidChangeVisibleRepositories(this.s, this)),
							this.orientation === b.Orientation.VERTICAL &&
								this.D(
									this.Ab.onDidChangeConfiguration((N) => {
										N.affectsConfiguration("scm.repositories.visible") &&
											this.j();
									}),
								),
							this.g(),
							this.s();
					}
					g() {
						this.a.splice(0, this.a.length, this.c.repositories), this.j();
					}
					focus() {
						super.focus(), this.a.domFocus();
					}
					X(T, P) {
						super.X(T, P), this.a.layout(T, P);
					}
					j() {
						if (this.orientation === b.Orientation.HORIZONTAL) return;
						const T = this.Ab.getValue("scm.repositories.visible"),
							P = this.a.length === 0,
							k = Math.min(this.a.length, T) * 22;
						(this.minimumBodySize = T === 0 ? 22 : k),
							(this.maximumBodySize =
								T === 0 || P ? Number.POSITIVE_INFINITY : k);
					}
					m(T) {
						if (!T.element) return;
						const P = T.element.provider,
							L = this.c.menus.getRepositoryMenus(P).repositoryContextMenu,
							D = (0, f.$EPc)(L),
							M = this.D(new o.$NPc(() => this.a.getSelectedElements()));
						M.onWillRun(() => this.a.domFocus()),
							this.zb.showContextMenu({
								actionRunner: M,
								getAnchor: () => T.anchor,
								getActions: () => D,
								getActionsContext: () => P,
							});
					}
					n(T) {
						if (T.browserEvent && T.elements.length > 0) {
							const P = this.a.scrollTop;
							(this.c.visibleRepositories = T.elements), (this.a.scrollTop = P);
						}
					}
					s() {
						const T = this.a.getSelection(),
							P = new Set(s.Iterable.map(T, (N) => this.a.element(N))),
							k = new Set(this.c.visibleRepositories),
							L = new Set(s.Iterable.filter(k, (N) => !P.has(N))),
							D = new Set(s.Iterable.filter(P, (N) => !k.has(N)));
						if (L.size === 0 && D.size === 0) return;
						const M = T.filter((N) => !D.has(this.a.element(N)));
						for (let N = 0; N < this.a.length; N++)
							L.has(this.a.element(N)) && M.push(N);
						this.a.setSelection(M),
							M.length > 0 &&
								M.indexOf(this.a.getFocus()[0]) === -1 &&
								(this.a.setAnchor(M[0]), this.a.setFocus([M[0]]));
					}
					dispose() {
						this.b.dispose(), super.dispose();
					}
				};
				(e.$dQc = S),
					(e.$dQc = S =
						Ne(
							[
								j(1, C.$d7),
								j(2, u.$uZ),
								j(3, m.$Xxb),
								j(4, d.$Li),
								j(5, n.$K1),
								j(6, r.$6j),
								j(7, c.$gj),
								j(8, g.$7rb),
								j(9, a.$iP),
								j(10, p.$km),
								j(11, $.$Uyb),
							],
							S,
						));
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	define(
		de[1907],
		he([
			1, 0, 50, 6, 215, 187, 3, 59, 82, 1500, 12, 919, 19, 111, 28, 9, 47, 4,
			31, 10, 22, 90, 84, 21, 32, 570, 53, 57, 40, 41, 67, 25, 555, 358, 18,
			297, 85, 107, 145, 424, 419, 1757, 3140, 1816, 1817, 63, 8, 699, 15, 33,
			585, 23, 26, 42, 116, 5, 34, 117, 35, 174, 100, 44, 60, 89, 1815, 78, 52,
			142, 165, 131, 143,
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
			B,
			U,
			z,
			F,
			x,
			H,
			q,
			V,
			G,
			K,
			J,
			W,
			X,
			Y,
			ie,
			ne,
			ee,
			_,
			te,
			Q,
			Z,
			se,
			re,
			le,
			oe,
			ae,
			pe,
			$e,
			ye,
			ue,
			fe,
			me,
			ve,
			ge,
		) {
			"use strict";
			var be;
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$jXc = e.ConfigureTaskAction = void 0),
				(w = mt(w)),
				(E = mt(E)),
				(m = mt(m)),
				(u = mt(u)),
				(h = mt(h)),
				(c = xi(c)),
				(n = mt(n)),
				(p = mt(p)),
				(o = mt(o)),
				(q = mt(q));
			const Ce = "task.quickOpen.history",
				Le = "task.problemMatchers.neverPrompt",
				Fe = "task.quickOpen.showAll";
			var Oe;
			(function (Je) {
				(Je.ID = "workbench.action.tasks.configureTaskRunner"),
					(Je.TEXT = o.localize2(9630, "Configure Task"));
			})(Oe || (e.ConfigureTaskAction = Oe = {}));
			class xe {
				constructor(Te) {
					(this.d = Te), (this.c = new r.$13());
				}
				info(Te) {
					(this.c.state = r.ValidationState.Info),
						this.d.append(
							Te +
								`
`,
						);
				}
				warn(Te) {
					(this.c.state = r.ValidationState.Warning),
						this.d.append(
							Te +
								`
`,
						);
				}
				error(Te) {
					(this.c.state = r.ValidationState.Error),
						this.d.append(
							Te +
								`
`,
						);
				}
				fatal(Te) {
					(this.c.state = r.ValidationState.Fatal),
						this.d.append(
							Te +
								`
`,
						);
				}
				get status() {
					return this.c;
				}
			}
			class He {
				constructor() {
					this.c = new Map();
				}
				forEach(Te) {
					this.c.forEach(Te);
				}
				static getKey(Te) {
					let Ee;
					if (n.$lg(Te)) Ee = Te;
					else {
						const Ie = (0, $e.$gXc)(Te) ? Te.uri : Te.configuration;
						Ee = Ie ? Ie.toString() : "";
					}
					return Ee;
				}
				get(Te) {
					const Ee = He.getKey(Te);
					let Ie = this.c.get(Ee);
					return Ie || ((Ie = []), this.c.set(Ee, Ie)), Ie;
				}
				add(Te, ...Ee) {
					const Ie = He.getKey(Te);
					let Be = this.c.get(Ie);
					Be || ((Be = []), this.c.set(Ie, Be)), Be.push(...Ee);
				}
				all() {
					const Te = [];
					return this.c.forEach((Ee) => Te.push(...Ee)), Te;
				}
			}
			let Ke = class extends C.$1c {
				static {
					be = this;
				}
				static {
					this.c = "workbench.tasks.recentlyUsedTasks";
				}
				static {
					this.g = "workbench.tasks.recentlyUsedTasks2";
				}
				static {
					this.h = "workbench.tasks.persistentTasks";
				}
				static {
					this.j = "workbench.tasks.ignoreTask010Shown";
				}
				static {
					this.OutputChannelId = "tasks";
				}
				static {
					this.OutputChannelLabel = o.localize(9528, null);
				}
				static {
					this.m = 0;
				}
				get isReconnected() {
					return this.n;
				}
				constructor(
					Te,
					Ee,
					Ie,
					Be,
					Se,
					ke,
					Ue,
					qe,
					Ae,
					Me,
					De,
					Re,
					je,
					Ve,
					Ze,
					et,
					rt,
					ft,
					bt,
					nt,
					lt,
					ct,
					gt,
					ht,
					Rt,
					Nt,
					jt,
					ti,
					kt,
					hi,
					Kt,
					di,
					Ye,
					ze,
					Xe,
					It,
				) {
					super(),
						(this.ab = Te),
						(this.bb = Ee),
						(this.cb = Ie),
						(this.db = Be),
						(this.eb = Se),
						(this.fb = ke),
						(this.gb = Ue),
						(this.hb = qe),
						(this.ib = Ae),
						(this.jb = Me),
						(this.kb = De),
						(this.lb = Re),
						(this.mb = je),
						(this.nb = Ve),
						(this.ob = Ze),
						(this.pb = et),
						(this.qb = rt),
						(this.rb = ft),
						(this.sb = bt),
						(this.tb = nt),
						(this.ub = lt),
						(this.vb = ct),
						(this.wb = gt),
						(this.xb = ht),
						(this.yb = Rt),
						(this.zb = Nt),
						(this.Ab = jt),
						(this.Bb = ti),
						(this.Cb = kt),
						(this.Db = hi),
						(this.Eb = Kt),
						(this.Fb = di),
						(this.Gb = Ye),
						(this.Hb = ze),
						(this.Ib = It),
						(this.n = !1),
						(this.J = []),
						(this.S = new i.$re()),
						(this.U = new i.$re()),
						(this.W = new i.$re()),
						(this.X = !1),
						(this.onDidChangeTaskSystemInfo = this.W.event),
						(this.Y = new i.$re()),
						(this.onDidReconnectToTasks = this.Y.event),
						(this.Z = new i.$re()),
						(this.onDidChangeTaskConfig = this.Z.event),
						(this.$ = this.D(new i.$re())),
						(this.onDidChangeTaskProviders = this.$.event),
						(this.H = i.Event.toPromise(this.onDidChangeTaskSystemInfo)),
						(this.G = void 0),
						(this.I = void 0),
						(this.J = void 0),
						(this.P = this.cb.getChannel(be.OutputChannelId)),
						(this.z = new Map()),
						(this.C = new Map()),
						(this.F = new Map()),
						this.D(
							this.ib.onDidChangeWorkspaceFolders(() => {
								const Lt = this.cd();
								return (
									this.Ob !== Lt[2] && (this.Vb(), (this.I = void 0)),
									this.Tb(Lt),
									this.Qc(z.TaskRunSource.FolderOpen)
								);
							}),
						),
						this.D(
							this.ab.onDidChangeConfiguration(async (Lt) => {
								!Lt.affectsConfiguration("tasks") ||
									(!this.I && !this.G) ||
									((!this.I || this.I instanceof V.$dXc) && this.P.clear(),
									Lt.affectsConfiguration(z.TaskSettingId.Reconnection) &&
										(this.ab.getValue(z.TaskSettingId.Reconnection) ||
											(this.N?.clear(),
											this.rb.remove(be.h, $.StorageScope.WORKSPACE))),
									this.fc(),
									await this.Qc(z.TaskRunSource.ConfigurationChange),
									this.Z.fire());
							}),
						),
						(this.O = z.$a4.bindTo(gt)),
						(this.Q = this.D(new i.$re())),
						this.Lb().then(() => F.$Vpc.bindTo(this.wb).set(!0)),
						F.$Xpc
							.bindTo(this.wb)
							.set(u.$r && !Xe.getConnection()?.remoteAuthority),
						this.ob.contributeVariable("defaultBuildTask", async () => {
							let Lt = await this.vc(z.TaskGroup.Build, !0);
							if (Lt.length > 0) {
								const Gt = this.ud(Lt);
								if (Gt.length === 1) return Gt[0]._label;
							}
							Lt = await this.vc(z.TaskGroup.Build);
							const xt = this.ud(Lt);
							if (xt.length === 1) return xt[0]._label;
							xt.length && (Lt = xt);
							let Vt;
							Lt &&
								Lt.length > 0 &&
								(Vt = await this.ld(Lt, o.localize(9529, null)));
							const Bt = Vt ? Vt.task : void 0;
							if (Bt) return Bt._label;
						}),
						this.D(
							this.Hb.onBeforeShutdown((Lt) => {
								this.X = Lt.reason !== ue.ShutdownReason.RELOAD;
							}),
						),
						this.D(
							this.onDidStateChange((Lt) => {
								if (
									(this.Wc(o.localize(9530, null, Lt.kind), !0),
									Lt.kind !== z.TaskEventKind.Changed)
								)
									if (
										(this.X ||
											(Lt.kind === z.TaskEventKind.Terminated &&
												Lt.exitReason === Z.TerminalExitReason.User)) &&
										Lt.taskId
									) {
										const xt = Lt.__task.getKey();
										xt && this.removePersistentTask(xt);
									} else
										Lt.kind === z.TaskEventKind.Start &&
											Lt.__task &&
											Lt.__task.getWorkspaceFolder() &&
											this.ic(Lt.__task);
							}),
						),
						(this.R = new Promise((Lt) => {
							i.Event.once(this.U.event)(() => Lt());
						})),
						this.pb.getReconnectedTerminals("Task")?.length
							? this.Jb()
							: this.pb.whenConnected.then(() => {
									this.pb.getReconnectedTerminals("Task")?.length
										? this.Jb()
										: ((this.n = !0), this.Y.fire());
								}),
						this.Nd();
				}
				registerSupportedExecutions(Te, Ee, Ie) {
					Te !== void 0 && F.$Tpc.bindTo(this.wb).set(Te);
					const Be = !!le.$DPb.getValue(this.wb);
					Ee !== void 0 && F.$Upc.bindTo(this.wb).set(Ee && !Be),
						Ie !== void 0 && F.$Wpc.bindTo(this.wb).set(Ie && !Be),
						(this.G = void 0),
						this.S.fire(),
						(u.$r || (Te && Ee && Ie)) && this.U.fire();
				}
				Jb() {
					if (
						(this.Hb.startupKind !== ue.StartupKind.ReloadedWindow &&
							(this.Wc(o.localize(9531, null), !0),
							(this.n = !0),
							this.rb.remove(be.h, $.StorageScope.WORKSPACE)),
						!this.ab.getValue(z.TaskSettingId.Reconnection) || this.n)
					) {
						this.Wc(
							o.localize(
								9532,
								null,
								this.ab.getValue(z.TaskSettingId.Reconnection),
								this.n,
							),
							!0,
						),
							(this.n = !0);
						return;
					}
					this.Wc(o.localize(9533, null), !0),
						this.getWorkspaceTasks(z.TaskRunSource.Reconnect).then(async () => {
							(this.n = await this.Kb()),
								this.Wc(o.localize(9534, null), !0),
								this.Y.fire();
						});
				}
				async Kb() {
					const Te = await this.getSavedTasks("persistent");
					if (!Te.length) return this.Wc(o.localize(9535, null), !0), !0;
					const Ee = Te.map((Ie) => Ie._label).join(", ");
					this.Wc(o.localize(9536, null, Ee), !0);
					for (const Ie of Te)
						if (z.$f4.is(Ie)) {
							const Be = await this.tryResolveTask(Ie);
							Be && this.run(Be, void 0, z.TaskRunSource.Reconnect);
						} else this.run(Ie, void 0, z.TaskRunSource.Reconnect);
					return !0;
				}
				get onDidStateChange() {
					return this.Q.event;
				}
				get supportsMultipleTaskExecutions() {
					return this.inTerminal();
				}
				async Lb() {
					f.$fk.registerCommand({
						id: "workbench.action.tasks.runTask",
						handler: async (Te, Ee) => {
							(await this.pd()) && (await this.qd(Ee));
						},
						metadata: {
							description: "Run Task",
							args: [
								{
									name: "args",
									isOptional: !0,
									description: o.localize(9537, null),
									schema: {
										anyOf: [
											{ type: "string", description: o.localize(9538, null) },
											{
												type: "object",
												properties: {
													type: {
														type: "string",
														description: o.localize(9539, null),
													},
													task: {
														type: "string",
														description: o.localize(9540, null),
													},
												},
											},
										],
									},
								},
							],
						},
					}),
						f.$fk.registerCommand(
							"workbench.action.tasks.reRunTask",
							async (Te, Ee) => {
								(await this.pd()) && this.td();
							},
						),
						f.$fk.registerCommand(
							"workbench.action.tasks.restartTask",
							async (Te, Ee) => {
								(await this.pd()) && this.Ad(Ee);
							},
						),
						f.$fk.registerCommand(
							"workbench.action.tasks.terminate",
							async (Te, Ee) => {
								(await this.pd()) && this.zd(Ee);
							},
						),
						f.$fk.registerCommand("workbench.action.tasks.showLog", () => {
							this.Ub(void 0, !0);
						}),
						f.$fk.registerCommand("workbench.action.tasks.build", async () => {
							(await this.pd()) && this.xd();
						}),
						f.$fk.registerCommand("workbench.action.tasks.test", async () => {
							(await this.pd()) && this.yd();
						}),
						f.$fk.registerCommand(
							"workbench.action.tasks.configureTaskRunner",
							async () => {
								(await this.pd()) && this.Id();
							},
						),
						f.$fk.registerCommand(
							"workbench.action.tasks.configureDefaultBuildTask",
							async () => {
								(await this.pd()) && this.Jd();
							},
						),
						f.$fk.registerCommand(
							"workbench.action.tasks.configureDefaultTestTask",
							async () => {
								(await this.pd()) && this.Kd();
							},
						),
						f.$fk.registerCommand(
							"workbench.action.tasks.showTasks",
							async () => {
								if (await this.pd()) return this.runShowTasks();
							},
						),
						f.$fk.registerCommand("workbench.action.tasks.toggleProblems", () =>
							this.fb.executeCommand(M.Markers.TOGGLE_MARKERS_VIEW_ACTION_ID),
						),
						f.$fk.registerCommand(
							"workbench.action.tasks.openUserTasks",
							async () => {
								const Te = this.Bc(z.TaskSourceKind.User);
								Te && this.Dd(Te, z.TaskSourceKind.User);
							},
						),
						f.$fk.registerCommand(
							"workbench.action.tasks.openWorkspaceFileTasks",
							async () => {
								const Te = this.Bc(z.TaskSourceKind.WorkspaceFile);
								Te && this.Dd(Te, z.TaskSourceKind.WorkspaceFile);
							},
						);
				}
				get Mb() {
					return this.s || this.Tb(), this.s;
				}
				get Nb() {
					return this.w || this.Tb(), this.w;
				}
				get Ob() {
					return this.r === void 0 && this.Tb(), this.r;
				}
				get Pb() {
					return this.q === void 0 && this.Tb(), this.q;
				}
				get Qb() {
					return (
						this.y === void 0 &&
							(this.y = !this.rb.getBoolean(
								be.j,
								$.StorageScope.WORKSPACE,
								!1,
							)),
						this.y
					);
				}
				Rb(Te) {
					const Ee = [];
					if ((Ee.push("onCommand:workbench.action.tasks.runTask"), Te))
						Ee.push(`onTaskType:${Te}`);
					else
						for (const Ie of J.$$3.all()) Ee.push(`onTaskType:${Ie.taskType}`);
					return Ee;
				}
				async Sb(Te) {
					await this.mb.whenInstalledExtensionsRegistered(),
						this.Wc("Activating task providers " + (Te ?? "all")),
						await (0, W.$Dh)(
							Promise.all(this.Rb(Te).map((Ee) => this.mb.activateByEvent(Ee))),
							5e3,
							() =>
								console.warn(
									"Timed out activating extensions for task providers",
								),
						);
				}
				Tb(Te) {
					if ((Te || (Te = this.cd()), (this.s = Te[0]), this.w))
						if (this.w.length !== Te[1].length) this.y = void 0;
						else {
							const Ee = new Set();
							this.w.forEach((Ie) => Ee.add(Ie.uri.toString()));
							for (const Ie of Te[1])
								if (!Ee.has(Ie.uri.toString())) {
									this.y = void 0;
									break;
								}
						}
					(this.w = Te[1]),
						(this.r = Te[2]),
						(this.q = Te[3]),
						(this.u = Te[4]);
				}
				Ub(Te = z.TaskRunSource.User, Ee) {
					!le.$DPb.getValue(this.wb) &&
						(Te === z.TaskRunSource.User ||
							Te === z.TaskRunSource.ConfigurationChange) &&
						(Ee
							? this.cb.showChannel(this.P.id, !0)
							: this.vb.prompt(c.default.Warning, o.localize(9541, null), [
									{
										label: o.localize(9542, null),
										run: () => {
											this.cb.showChannel(this.P.id, !0);
										},
									},
								]));
				}
				Vb() {
					this.J && ((0, C.$Vc)(this.J), (this.J = void 0));
				}
				registerTaskProvider(Te, Ee) {
					if (!Te) return { dispose: () => {} };
					const Ie = be.m++;
					return (
						this.z.set(Ie, Te),
						this.C.set(Ie, Ee),
						this.$.fire(),
						{
							dispose: () => {
								this.z.delete(Ie), this.C.delete(Ie), this.$.fire();
							},
						}
					);
				}
				get hasTaskSystemInfo() {
					const Te = Array.from(this.F.values()).flat().length;
					return this.xb.remoteAuthority ? Te > 1 : Te > 0;
				}
				registerTaskSystem(Te, Ee) {
					if (
						(Ee.platform === u.Platform.Web &&
							(Te = this.Mb.length ? this.Mb[0].uri.scheme : Te),
						!this.F.has(Te))
					)
						this.F.set(Te, [Ee]);
					else {
						const Ie = this.F.get(Te);
						Ee.platform === u.Platform.Web ? Ie.push(Ee) : Ie.unshift(Ee);
					}
					this.hasTaskSystemInfo && this.W.fire();
				}
				Wb(Te) {
					const Ee = this.F.get(Te);
					return Ee && Ee.length ? Ee[0] : void 0;
				}
				extensionCallbackTaskComplete(Te, Ee) {
					return this.I
						? this.I.customExecutionComplete(Te, Ee)
						: Promise.resolve();
				}
				async Xb(Te) {
					const Ee = [],
						Ie = await this.getWorkspaceTasks();
					for (const [, Be] of Ie) {
						if (Be.configurations)
							for (const Se in Be.configurations.byIdentifier) {
								const ke = Be.configurations.byIdentifier[Se];
								Te(ke, Be.workspaceFolder) && Ee.push(ke);
							}
						if (Be.set)
							for (const Se of Be.set.tasks)
								Te(Se, Be.workspaceFolder) && Ee.push(Se);
					}
					return Ee;
				}
				async Yb(Te, Ee) {
					return this.Xb((Ie) => {
						const Be = Ie.configurationProperties.group;
						return Be && typeof Be != "string"
							? Be._id === Te._id && (!Ee || !!Be.isDefault)
							: !1;
					});
				}
				async getTask(Te, Ee, Ie = !1, Be = void 0) {
					if (!(await this.pd())) return;
					const Se = n.$lg(Te)
						? Te
						: (0, $e.$gXc)(Te)
							? Te.name
							: Te.configuration
								? h.$kh(Te.configuration)
								: void 0;
					if (this.Nb.some((De) => De.name === Se))
						return Promise.reject(new Error(o.localize(9543, null, Se)));
					const ke = n.$lg(Ee)
						? Ee
						: z.TaskDefinition.createTaskIdentifier(Ee, console);
					if (ke === void 0) return Promise.resolve(void 0);
					const Ue = He.getKey(Te),
						qe = await this.Xb((De, Re) => {
							const je = He.getKey(Re);
							return je !== Ue && je !== z.$_3 ? !1 : De.matches(ke, Ie);
						});
					if (
						(qe.sort((De) =>
							De._source.kind === z.TaskSourceKind.Extension ? 1 : -1,
						),
						qe.length > 0)
					) {
						const De = qe[0];
						return z.$f4.is(De) ? this.tryResolveTask(De) : De;
					}
					const Ae = await this.Nc({ type: Be });
					let Me = Ae.get(Te);
					if (((Me = Me.concat(Ae.get(z.$_3))), !!Me))
						return (
							(Me = Me.filter((De) => De.matches(ke, Ie)).sort((De) =>
								De._source.kind === z.TaskSourceKind.Extension ? 1 : -1,
							)),
							Me.length > 0 ? Me[0] : void 0
						);
				}
				async tryResolveTask(Te) {
					if (!(await this.pd())) return;
					await this.Sb(Te.type);
					let Ee,
						Ie = !1;
					for (const [Se, ke] of this.z) {
						const Ue = this.C.get(Se);
						if (Te.type === Ue) {
							if (Ue && !this.Mc(Ue)) {
								Ie = !0;
								continue;
							}
							Ee = ke;
							break;
						}
					}
					if (!Ee) {
						Ie && this.Wc(o.localize(9544, null, Te.configures.type));
						return;
					}
					try {
						const Se = await Ee.resolveTask(Te);
						if (Se && Se._id === Te._id) return q.$6Wc(Se, Te);
					} catch {}
					const Be = await this.tasks({ type: Te.type });
					for (const Se of Be) if (Se._id === Te._id) return q.$6Wc(Se, Te);
				}
				async tasks(Te) {
					return (await this.pd())
						? this.Zb(Te)
							? this.Nc(Te).then((Ee) => this.ac(Te, Ee))
							: Promise.resolve([])
						: [];
				}
				async getKnownTasks(Te) {
					return this.Zb(Te)
						? this.Nc(Te, !0, !0).then((Ee) => this.ac(Te, Ee))
						: Promise.resolve([]);
				}
				taskTypes() {
					const Te = [];
					if (this.pc())
						for (const Ee of J.$$3.all())
							this.Mc(Ee.taskType) && Te.push(Ee.taskType);
					return Te;
				}
				createSorter() {
					return new z.$i4(
						this.ib.getWorkspace() ? this.ib.getWorkspace().folders : [],
					);
				}
				$b() {
					return this.I ? this.I.isActive() : Promise.resolve(!1);
				}
				async getActiveTasks() {
					return this.I ? this.I.getActiveTasks() : [];
				}
				async getBusyTasks() {
					return this.I ? this.I.getBusyTasks() : [];
				}
				getRecentlyUsedTasksV1() {
					if (this.L) return this.L;
					const Te = this.ab.getValue(Ce);
					this.L = new d.$Jc(Te);
					const Ee = this.rb.get(be.c, $.StorageScope.WORKSPACE);
					if (Ee)
						try {
							const Ie = JSON.parse(Ee);
							if (Array.isArray(Ie)) for (const Be of Ie) this.L.set(Be, Be);
						} catch {}
					return this.L;
				}
				ac(Te, Ee) {
					if (!Te || !Te.type) return Ee.all();
					const Ie = [];
					return (
						Ee.forEach((Be) => {
							for (const Se of Be)
								if (
									z.$g4.is(Se) &&
									(Se.defines.type === Te.type || Se._source.label === Te.type)
								)
									Ie.push(Se);
								else if (z.$e4.is(Se))
									if (Se.type === Te.type) Ie.push(Se);
									else {
										const ke = Se.customizes();
										ke && ke.type === Te.type && Ie.push(Se);
									}
						}),
						Ie
					);
				}
				bc(Te) {
					return Te === "persistent" ? this.dc() : this.cc();
				}
				cc() {
					if (this.M) return this.M;
					const Te = this.ab.getValue(Ce);
					this.M = new d.$Jc(Te);
					const Ee = this.rb.get(be.g, $.StorageScope.WORKSPACE);
					if (Ee)
						try {
							const Ie = JSON.parse(Ee);
							if (Array.isArray(Ie))
								for (const Be of Ie) this.M.set(Be[0], Be[1]);
						} catch {}
					return this.M;
				}
				dc() {
					if (this.N)
						return this.Wc(o.localize(9545, null, this.N.size), !0), this.N;
					this.N = new d.$Jc(10);
					const Te = this.rb.get(be.h, $.StorageScope.WORKSPACE);
					if (Te)
						try {
							const Ee = JSON.parse(Te);
							if (Array.isArray(Ee))
								for (const Ie of Ee) this.N.set(Ie[0], Ie[1]);
						} catch {}
					return this.N;
				}
				ec(Te) {
					const Ee = JSON.parse(Te);
					return {
						folder: Ee.folder,
						isWorkspaceFile: Ee.id?.endsWith(z.TaskSourceKind.WorkspaceFile),
					};
				}
				async getSavedTasks(Te) {
					const Ee = Object.create(null);
					this.Mb.forEach((Me) => {
						Ee[Me.uri.toString()] = Me;
					});
					const Ie = new Map(),
						Be = new Map(),
						Se = this.bc(Te),
						ke = [];
					this.Wc(o.localize(9546, null), !0);
					function Ue(Me, De, Re) {
						De && !Me.has(De) && Me.set(De, []),
							De && (Ee[De] || De === z.$_3) && Re && Me.get(De).push(Re);
					}
					for (const Me of Se.entries())
						try {
							const De = Me[0],
								Re = JSON.parse(Me[1]),
								je = this.ec(De);
							this.Wc(o.localize(9547, null, De, Re, je.folder), !0),
								Ue(je.isWorkspaceFile ? Be : Ie, je.folder, Re);
						} catch (De) {
							this.Wc(o.localize(9548, null, De), !0);
						}
					const qe = new Map();
					async function Ae(Me, De, Re) {
						for (const je of De.keys()) {
							const Ve = [],
								Ze = Object.create(null),
								et = Ee[je]
									? Re
										? q.TaskConfigSource.WorkspaceFile
										: q.TaskConfigSource.TasksJson
									: q.TaskConfigSource.User;
							await Me.$c(
								Ee[je] ?? (await Me.Rc()),
								{ version: "2.0.0", tasks: De.get(je) },
								z.TaskRunSource.System,
								Ve,
								Ze,
								et,
								!0,
							),
								Ve.forEach((rt) => {
									const ft = rt.getKey();
									ft && qe.set(ft, rt);
								});
							for (const rt in Ze) {
								const ft = Ze[rt].getKey();
								ft && qe.set(ft, Ze[rt]);
							}
						}
					}
					await Ae(this, Ie, !1), await Ae(this, Be, !0);
					for (const Me of Se.keys())
						qe.has(Me)
							? (ke.push(qe.get(Me)), this.Wc(o.localize(9549, null, Me), !0))
							: this.Wc(o.localize(9550, null, Me), !0);
					return ke;
				}
				removeRecentlyUsedTask(Te) {
					this.bc("historical").has(Te) &&
						(this.bc("historical").delete(Te), this.hc());
				}
				removePersistentTask(Te) {
					this.Wc(o.localize(9551, null, Te), !0),
						this.bc("persistent").has(Te) &&
							(this.bc("persistent").delete(Te), this.jc());
				}
				fc() {
					const Te = this.ab.getValue(Ce);
					this.M && (this.M.limit = Te);
				}
				async gc(Te) {
					let Ee = Te.getKey();
					if (!z.$h4.is(Te) && Ee) {
						const Ie = this.zc(Te);
						if (z.$g4.is(Te) && Ie) {
							const Be = [],
								Se = Object.create(null);
							await this.$c(
								Te._source.workspaceFolder ?? this.Mb[0],
								{ version: "2.0.0", tasks: [Ie] },
								z.TaskRunSource.System,
								Be,
								Se,
								q.TaskConfigSource.TasksJson,
								!0,
							);
							for (const ke in Se) Ee = Se[ke].getKey();
						}
						this.bc("historical").set(Ee, JSON.stringify(Ie)), this.hc();
					}
				}
				hc() {
					if (!this.M) return;
					const Te = this.ab.getValue(Ce);
					if (Te === 0) return;
					let Ee = [...this.M.keys()];
					Ee.length > Te && (Ee = Ee.slice(0, Te));
					const Ie = [];
					for (const Be of Ee) Ie.push([Be, this.M.get(Be, d.Touch.None)]);
					this.rb.store(
						be.g,
						JSON.stringify(Ie),
						$.StorageScope.WORKSPACE,
						$.StorageTarget.MACHINE,
					);
				}
				async ic(Te) {
					if (!this.ab.getValue(z.TaskSettingId.Reconnection)) return;
					let Ee = Te.getKey();
					if (!z.$h4.is(Te) && Ee) {
						const Ie = this.zc(Te);
						if (z.$g4.is(Te) && Ie) {
							const Be = [],
								Se = Object.create(null);
							await this.$c(
								Te._source.workspaceFolder ?? this.Mb[0],
								{ version: "2.0.0", tasks: [Ie] },
								z.TaskRunSource.System,
								Be,
								Se,
								q.TaskConfigSource.TasksJson,
								!0,
							);
							for (const ke in Se) Ee = Se[ke].getKey();
						}
						if (!Te.configurationProperties.isBackground) return;
						this.Wc(o.localize(9552, null, Ee), !0),
							this.bc("persistent").set(Ee, JSON.stringify(Ie)),
							this.jc();
					}
				}
				jc() {
					this.N = this.bc("persistent");
					const Te = [...this.N.keys()],
						Ee = [];
					for (const Ie of Te) Ee.push([Ie, this.N.get(Ie, d.Touch.None)]);
					this.Wc(o.localize(9553, null, Te.join(", ")), !0),
						this.rb.store(
							be.h,
							JSON.stringify(Ee),
							$.StorageScope.WORKSPACE,
							$.StorageTarget.MACHINE,
						);
				}
				kc() {
					this.tb.open(
						g.URI.parse(
							"https://code.visualstudio.com/docs/editor/tasks#_defining-a-problem-matcher",
						),
					);
				}
				async lc(Te) {
					const Ee = await this.Yb(Te, !0);
					if (
						Ee.length === 1 &&
						typeof Ee[0].configurationProperties.group != "string" &&
						Ee[0].configurationProperties.group?.isDefault
					) {
						let Ie;
						if (
							(z.$f4.is(Ee[0])
								? (Ie = await this.tryResolveTask(Ee[0]))
								: (Ie = Ee[0]),
							Ie)
						)
							return this.run(Ie, void 0, z.TaskRunSource.User);
					}
				}
				async mc() {
					const Te = await this.lc(z.TaskGroup.Build);
					return Te || this.oc();
				}
				async nc() {
					const Te = await this.lc(z.TaskGroup.Test);
					return Te || this.oc(!0);
				}
				async oc(Te) {
					const Ee = await this.Nc(),
						Ie = this.Dc(Ee, Te ? z.TaskGroup.Test : z.TaskGroup.Build);
					if (!Ie || !Ie.task)
						throw Te
							? this.Pb === z.JsonSchemaVersion.V0_1_0
								? new x.$Spc(
										c.default.Info,
										o.localize(9554, null),
										x.TaskErrors.NoTestTask,
									)
								: new x.$Spc(
										c.default.Info,
										o.localize(9555, null),
										x.TaskErrors.NoTestTask,
									)
							: this.Pb === z.JsonSchemaVersion.V0_1_0
								? new x.$Spc(
										c.default.Info,
										o.localize(9556, null),
										x.TaskErrors.NoBuildTask,
									)
								: new x.$Spc(
										c.default.Info,
										o.localize(9557, null),
										x.TaskErrors.NoBuildTask,
									);
					let Be;
					try {
						Be = await this.Gc(Ie.task, Ie.resolver, z.TaskRunSource.User);
					} catch (Se) {
						return this.gd(Se), Promise.reject(Se);
					}
					return Be;
				}
				async run(Te, Ee, Ie = z.TaskRunSource.System) {
					if (!(await this.pd())) return;
					if (!Te)
						throw new x.$Spc(
							c.default.Info,
							o.localize(9558, null),
							x.TaskErrors.TaskNotFound,
						);
					const Be = this.Ec();
					let Se;
					try {
						if (Ee && Ee.attachProblemMatcher && this.sc(Te) && !z.$h4.is(Te)) {
							const ke = await this.uc(Te);
							ke && (Se = await this.Gc(ke, Be, Ie));
						} else Se = await this.Gc(Te, Be, Ie);
						return Se;
					} catch (ke) {
						return this.gd(ke), Promise.reject(ke);
					}
				}
				pc() {
					return this.ab.getValue(z.TaskSettingId.AutoDetect) === "on";
				}
				qc(Te) {
					const Ee = this.ab.getValue(Le);
					return n.$rg(Ee) ? !Ee : Te === void 0 ? !0 : !Ee[Te];
				}
				rc(Te) {
					let Ee;
					return (
						z.$e4.is(Te)
							? (Ee = Te._source.config.element.type)
							: (Ee = Te.getDefinition().type),
						Ee
					);
				}
				sc(Te) {
					return this.qc(this.rc(Te)) === !1 ||
						!this.wc(Te) ||
						(Te.configurationProperties.group !== void 0 &&
							Te.configurationProperties.group !== z.TaskGroup.Build) ||
						(Te.configurationProperties.problemMatchers !== void 0 &&
							Te.configurationProperties.problemMatchers.length > 0)
						? !1
						: z.$g4.is(Te)
							? !Te.hasDefinedMatchers &&
								!!Te.configurationProperties.problemMatchers &&
								Te.configurationProperties.problemMatchers.length === 0
							: z.$e4.is(Te)
								? Te._source.config.element.problemMatcher === void 0 &&
									!Te.hasDefinedMatchers
								: !1;
				}
				async tc(Te) {
					const Ee = this.ab.getValue(Le);
					if (Ee === !0) return;
					let Ie;
					return (
						Ee !== !1 ? (Ie = Ee) : (Ie = Object.create(null)),
						(Ie[Te] = !0),
						this.ab.updateValue(Le, Ie)
					);
				}
				async uc(Te) {
					let Ee = [];
					for (const Se of S.$03.keys()) {
						const ke = S.$03.get(Se);
						ke.deprecated ||
							(ke.name === ke.label
								? Ee.push({ label: ke.name, matcher: ke })
								: Ee.push({
										label: ke.label,
										description: `$${ke.name}`,
										matcher: ke,
									}));
					}
					if (Ee.length === 0) return;
					(Ee = Ee.sort((Se, ke) =>
						Se.label && ke.label ? Se.label.localeCompare(ke.label) : 0,
					)),
						Ee.unshift({ type: "separator", label: o.localize(9559, null) });
					let Ie;
					z.$e4.is(Te)
						? (Ie = Te._source.config.element.type)
						: (Ie = Te.getDefinition().type),
						Ee.unshift(
							{ label: o.localize(9560, null), matcher: void 0 },
							{ label: o.localize(9561, null), matcher: void 0, never: !0 },
							{
								label: o.localize(9562, null, Ie),
								matcher: void 0,
								setting: Ie,
							},
							{ label: o.localize(9563, null), matcher: void 0, learnMore: !0 },
						);
					const Be = await this.nb.pick(Ee, {
						placeHolder: o.localize(9564, null),
					});
					if (!Be) return Te;
					if (Be.learnMore) {
						this.kc();
						return;
					}
					if (Be.never)
						return this.customize(Te, { problemMatcher: [] }, !0), Te;
					if (Be.matcher) {
						const Se = Te.clone(),
							ke = `$${Be.matcher.name}`,
							Ue = { problemMatcher: [ke] };
						Se.configurationProperties.problemMatchers = [ke];
						const qe = S.$03.get(Be.matcher.name);
						return (
							qe &&
								qe.watching !== void 0 &&
								((Ue.isBackground = !0),
								(Se.configurationProperties.isBackground = !0)),
							this.customize(Te, Ue, !0),
							Se
						);
					}
					return Be.setting && (await this.tc(Be.setting)), Te;
				}
				async vc(Te, Ee) {
					const Ie = await this.Nc(void 0, Ee),
						Be = [];
					return (
						Ie.forEach((Se) => {
							for (const ke of Se)
								z.TaskGroup.from(ke.configurationProperties.group)?._id ===
									Te._id && Be.push(ke);
						}),
						Be
					);
				}
				needsFolderQualification() {
					return this.ib.getWorkbenchState() === D.WorkbenchState.WORKSPACE;
				}
				wc(Te) {
					return this.Pb !== z.JsonSchemaVersion.V2_0_0
						? !1
						: z.$e4.is(Te)
							? !0
							: z.$g4.is(Te)
								? !!Te.getWorkspaceFolder()
								: !1;
				}
				async xc(Te, Ee) {
					let Ie,
						Be = "";
					try {
						Ie = await this.Ab.createModelReference(Te);
						const Se = Ie.object.textEditorModel,
							{ tabSize: ke, insertSpaces: Ue } = Se.getOptions(),
							qe = Se.getEOL();
						let Ae = (0, Y.$no)(Ee, { eol: qe, tabSize: ke, insertSpaces: Ue });
						const Me = new RegExp(qe + (Ue ? " ".repeat(ke) : "\\t"), "g");
						Ae = Ae.replace(Me, qe + (Ue ? " ".repeat(ke * 3) : "			"));
						const De = Ue ? " ".repeat(ke * 2) : "		";
						Be = De + Ae.slice(0, Ae.length - 1) + De + Ae.slice(Ae.length - 1);
					} finally {
						Ie?.dispose();
					}
					return Be;
				}
				async yc(Te, Ee, Ie = -1) {
					if (Te === void 0) return Promise.resolve(!1);
					const Se = (await this.hb.readFile(Te)).value;
					if (!Se || !Ee) return !1;
					const ke = Se.toString();
					let Ue;
					if (Ie !== -1) {
						const Re = this.ab.getValue("tasks", { resource: Te });
						Re.tasks &&
							Re.tasks.length > Ie &&
							(Ue = await this.xc(Te, Re.tasks[Ie]));
					}
					Ue ||
						(typeof Ee == "string" ? (Ue = Ee) : (Ue = await this.xc(Te, Ee)));
					const qe = ke.indexOf(Ue);
					let Ae = 1;
					for (let Re = 0; Re < qe; Re++)
						ke.charAt(Re) ===
							`
` && Ae++;
					let Me = Ae;
					for (let Re = 0; Re < Ue.length; Re++)
						Ue.charAt(Re) ===
							`
` && Me++;
					const De =
						Ae > 1
							? {
									startLineNumber: Ae,
									startColumn: Ae === Me ? 4 : 3,
									endLineNumber: Me,
									endColumn: Ae === Me ? void 0 : 4,
								}
							: void 0;
					return (
						await this.gb.openEditor({
							resource: Te,
							options: {
								pinned: !1,
								forceReload: !0,
								selection: De,
								selectionRevealType:
									_.TextEditorSelectionRevealType.CenterIfOutsideViewport,
							},
						}),
						!!De
					);
				}
				zc(Te) {
					let Ee;
					const Ie = z.$e4.is(Te) || z.$f4.is(Te) ? Te._source.config : void 0;
					if (Ie && Ie.element) Ee = { ...Ie.element };
					else if (z.$g4.is(Te)) {
						Ee = {};
						const Be = Object.assign(Object.create(null), Te.defines);
						delete Be._key,
							Object.keys(Be).forEach((Se) => (Ee[Se] = Be[Se])),
							Te.configurationProperties.problemMatchers &&
								Te.configurationProperties.problemMatchers.length > 0 &&
								n.$mg(Te.configurationProperties.problemMatchers) &&
								(Ee.problemMatcher =
									Te.configurationProperties.problemMatchers),
							Te.configurationProperties.group &&
								(Ee.group = q.GroupKind.to(Te.configurationProperties.group));
					}
					if (Ee)
						return (
							((Ee.problemMatcher === void 0 &&
								Te.configurationProperties.problemMatchers === void 0) ||
								(Te.configurationProperties.problemMatchers &&
									Te.configurationProperties.problemMatchers.length === 0)) &&
								(Ee.problemMatcher = []),
							Te._source.label !== "Workspace"
								? (Ee.label = Te.configurationProperties.identifier)
								: (Ee.label = Te._label),
							(Ee.detail = Te.configurationProperties.detail),
							Ee
						);
				}
				async customize(Te, Ee, Ie) {
					if (!(await this.pd())) return;
					const Be = Te.getWorkspaceFolder();
					if (!Be) return Promise.resolve(void 0);
					const Se = this.fd(Be, Te._source.kind);
					if (Se.hasParseErrors)
						return (
							this.vb.warn(o.localize(9565, null)), Promise.resolve(void 0)
						);
					const ke = Se.config,
						Ue = this.zc(Te);
					if (!Ue) return Promise.resolve(void 0);
					const qe = z.$e4.is(Te) ? Te._source.config.index : void 0;
					if (Ee)
						for (const Ae of Object.getOwnPropertyNames(Ee)) {
							const Me = Ee[Ae];
							Me != null && (Ue[Ae] = Me);
						}
					if (ke)
						qe === -1 && Ee
							? Ee.problemMatcher !== void 0
								? ((ke.problemMatcher = Ee.problemMatcher),
									await this.Ac(
										Be,
										"tasks.problemMatchers",
										ke.problemMatcher,
										Te._source.kind,
									))
								: Ee.group !== void 0 &&
									((ke.group = Ee.group),
									await this.Ac(Be, "tasks.group", ke.group, Te._source.kind))
							: (Array.isArray(ke.tasks) || (ke.tasks = []),
								qe === void 0 ? ke.tasks.push(Ue) : (ke.tasks[qe] = Ue),
								await this.Ac(Be, "tasks.tasks", ke.tasks, Te._source.kind));
					else {
						const Ae = { version: "2.0.0", tasks: [Ue] };
						let Me =
							["{", o.localize(9566, null)].join(`
`) + JSON.stringify(Ae, null, "	").substr(1);
						const De = this.ab.getValue();
						De.editor.insertSpaces &&
							(Me = Me.replace(
								/(\n)(\t+)/g,
								(Re, je, Ve) => je + " ".repeat(Ve.length * De.editor.tabSize),
							)),
							await this.kb.create([
								{ resource: Be.toResource(".vscode/tasks.json"), value: Me },
							]);
					}
					Ie && this.yc(this.Cc(Te), Ue);
				}
				Ac(Te, Ee, Ie, Be) {
					let Se;
					switch (Be) {
						case z.TaskSourceKind.User:
							Se = b.ConfigurationTarget.USER;
							break;
						case z.TaskSourceKind.WorkspaceFile:
							Se = b.ConfigurationTarget.WORKSPACE;
							break;
						default:
							this.ib.getWorkbenchState() === D.WorkbenchState.FOLDER
								? (Se = b.ConfigurationTarget.WORKSPACE)
								: this.ib.getWorkbenchState() === D.WorkbenchState.WORKSPACE &&
									(Se = b.ConfigurationTarget.WORKSPACE_FOLDER);
					}
					if (Se) return this.ab.updateValue(Ee, Ie, { resource: Te.uri }, Se);
				}
				Bc(Te) {
					switch ((this.Tb(), Te)) {
						case z.TaskSourceKind.User:
							return h.$nh(h.$mh(this.Bb.userSettingsResource), "tasks.json");
						case z.TaskSourceKind.WorkspaceFile:
							if (this.u && this.u.configuration) return this.u.configuration;
						default:
							return;
					}
				}
				Cc(Te) {
					if (z.$e4.is(Te)) {
						let Ee = this.Bc(Te._source.kind);
						if (!Ee) {
							const Ie = Te.getWorkspaceFolder();
							Ie
								? (Ee = Ie.toResource(Te._source.config.file))
								: (Ee = this.Mb[0].uri);
						}
						return Ee;
					} else
						return Te.getWorkspaceFolder().toResource(".vscode/tasks.json");
				}
				async openConfig(Te) {
					let Ee;
					return (
						Te
							? (Ee = this.Cc(Te))
							: (Ee =
									this.s && this.s.length > 0
										? this.s[0].toResource(".vscode/tasks.json")
										: void 0),
						this.yc(
							Ee,
							Te ? Te._label : void 0,
							Te ? Te._source.config.index : -1,
						)
					);
				}
				Dc(Te, Ee) {
					const Ie = new Map(),
						Be = [],
						Se = [];
					Te.forEach((Ue, qe) => {
						let Ae = Ie.get(qe);
						Ae ||
							((Ae = {
								id: new Map(),
								label: new Map(),
								identifier: new Map(),
							}),
							Ie.set(qe, Ae));
						for (const Me of Ue)
							Ae.id.set(Me._id, Me),
								Ae.label.set(Me._label, Me),
								Me.configurationProperties.identifier &&
									Ae.identifier.set(Me.configurationProperties.identifier, Me),
								Ee &&
									Me.configurationProperties.group === Ee &&
									(Me._source.kind === z.TaskSourceKind.Workspace
										? Be.push(Me)
										: Se.push(Me));
					});
					const ke = {
						resolve: async (Ue, qe) => {
							const Ae = Ie.get(typeof Ue == "string" ? Ue : Ue.toString());
							if (Ae)
								return (
									Ae.id.get(qe) || Ae.label.get(qe) || Ae.identifier.get(qe)
								);
						},
					};
					if (Be.length > 0)
						return (
							Be.length > 1 && this.Wc(o.localize(9567, null)),
							{ task: Be[0], resolver: ke }
						);
					if (Se.length !== 0) {
						if (Se.length === 1) return { task: Se[0], resolver: ke };
						{
							const Ue = p.$9g();
							return {
								task: new z.$h4(
									Ue,
									{ kind: z.TaskSourceKind.InMemory, label: "inMemory" },
									Ue,
									"inMemory",
									{ reevaluateOnRerun: !0 },
									{
										identifier: Ue,
										dependsOn: Se.map((Ae) => ({
											uri: Ae.getWorkspaceFolder().uri,
											task: Ae._id,
										})),
										name: Ue,
									},
								),
								resolver: ke,
							};
						}
					}
				}
				Ec(Te) {
					let Ee;
					async function Ie(ke, Ue, qe) {
						const Ae = await ke.Xb((De) => {
							const Re =
									z.$f4.is(De) || z.$e4.is(De)
										? De._source.config.workspaceFolder?.uri
										: void 0,
								je = typeof Ue == "string" ? Ue : Ue.toString();
							if (Re?.toString() !== je) return !1;
							if (n.$lg(qe))
								return (
									De._label === qe ||
									De.configurationProperties.identifier === qe
								);
							{
								const Ve = De.getDefinition(!0),
									Ze = z.TaskDefinition.createTaskIdentifier(qe, console);
								return Ze && Ve ? Ze._key === Ve._key : !1;
							}
						});
						if (Ae.length === 0) return;
						const Me = Ae[0];
						return z.$f4.is(Me) ? ke.tryResolveTask(Me) : Me;
					}
					async function Be(ke) {
						return (
							Ee === void 0 &&
								((Ee = new Map()),
								(Te || (await ke.Nc())).forEach((Ue, qe) => {
									let Ae = Ee.get(qe);
									Ae ||
										((Ae = {
											label: new Map(),
											identifier: new Map(),
											taskIdentifier: new Map(),
										}),
										Ee.set(qe, Ae));
									for (const Me of Ue) {
										Ae.label.set(Me._label, Me),
											Me.configurationProperties.identifier &&
												Ae.identifier.set(
													Me.configurationProperties.identifier,
													Me,
												);
										const De = Me.getDefinition(!0);
										De !== void 0 && Ae.taskIdentifier.set(De._key, Me);
									}
								})),
							Ee
						);
					}
					async function Se(ke, Ue, qe) {
						const Me = (await Be(ke)).get(
							typeof Ue == "string" ? Ue : Ue.toString(),
						);
						if (Me) {
							if (n.$lg(qe)) return Me.label.get(qe) || Me.identifier.get(qe);
							{
								const De = z.TaskDefinition.createTaskIdentifier(qe, console);
								return De !== void 0 ? Me.taskIdentifier.get(De._key) : void 0;
							}
						}
					}
					return {
						resolve: async (ke, Ue) => {
							if (Ue)
								return Ee === void 0 && Te === void 0
									? ((await Ie(this, ke, Ue)) ?? Se(this, ke, Ue))
									: Se(this, ke, Ue);
						},
					};
				}
				async Fc() {
					let Te;
					(function (Ie) {
						(Ie.Always = "always"),
							(Ie.Never = "never"),
							(Ie.Prompt = "prompt");
					})(Te || (Te = {}));
					const Ee = this.ab.getValue(z.TaskSettingId.SaveBeforeRun);
					if (Ee === Te.Never) return !1;
					if (Ee === Te.Prompt && this.gb.editors.some((Ie) => Ie.isDirty())) {
						const { confirmed: Ie } = await this.ub.confirm({
							message: o.localize(9568, null),
							detail: o.localize(9569, null),
							primaryButton: o.localize(9570, null),
							cancelButton: o.localize(9571, null),
						});
						if (!Ie) return !1;
					}
					return await this.gb.saveAll({ reason: oe.SaveReason.AUTO }), !0;
				}
				async Gc(Te, Ee, Ie) {
					let Be = Te;
					if (await this.Fc()) {
						await this.ab.reloadConfiguration(), await this.Qc();
						const ke = Te.getWorkspaceFolder(),
							Ue = Te.configurationProperties.identifier,
							qe = z.$e4.is(Te)
								? Te.customizes()?.type
								: z.$g4.is(Te)
									? Te.type
									: void 0;
						Be =
							(ke && Ue && Ie === z.TaskRunSource.User
								? await this.getTask(ke, Ue, !1, qe)
								: Te) ?? Te;
					}
					await S.$03.onReady();
					const Se =
						Ie === z.TaskRunSource.Reconnect
							? this.Lc().reconnect(Be, Ee)
							: this.Lc().run(Be, Ee);
					return Se ? this.Hc(Se, Ie) : { exitCode: 0 };
				}
				async Hc(Te, Ee) {
					if (
						(Ee === z.TaskRunSource.User && (await this.gc(Te.task)),
						Te.kind === x.TaskExecuteKind.Active)
					) {
						const Ie = Te.active;
						if (
							(Ie && Ie.same && Ee === z.TaskRunSource.FolderOpen) ||
							Ee === z.TaskRunSource.Reconnect
						)
							return (
								this.Fb.debug("Ignoring task that is already active", Te.task),
								Te.promise
							);
						if (Ie && Ie.same)
							if (this.I?.isTaskVisible(Te.task)) {
								const Be = o.localize(9572, null, Te.task.getQualifiedLabel()),
									Se = this.Lc().getLastInstance(Te.task) ?? Te.task;
								this.vb.prompt(
									c.default.Warning,
									Be,
									[
										{
											label: o.localize(9573, null),
											run: () => this.terminate(Se),
										},
										{ label: o.localize(9574, null), run: () => this.Ic(Se) },
									],
									{ sticky: !0 },
								);
							} else this.I?.revealTask(Te.task);
						else
							throw new x.$Spc(
								c.default.Warning,
								o.localize(9575, null),
								x.TaskErrors.RunningTask,
							);
					}
					return this.gc(Te.task), Te.promise;
				}
				async Ic(Te) {
					if (!this.I) return;
					if ((await this.I.terminate(Te)).success)
						try {
							await this.run(Te);
						} catch {}
					else
						this.vb.warn(
							o.localize(
								9576,
								null,
								n.$lg(Te) ? Te : Te.configurationProperties.name,
							),
						);
				}
				async terminate(Te) {
					return (await this.pd())
						? this.I
							? this.I.terminate(Te)
							: { success: !0, task: void 0 }
						: { success: !0, task: void 0 };
				}
				Jc() {
					return this.I ? this.I.terminateAll() : Promise.resolve([]);
				}
				Kc() {
					return new V.$dXc(
						this.pb,
						this.qb,
						this.cb,
						this.db,
						this.eb,
						this.bb,
						this.lb,
						this.ob,
						this.ib,
						this.xb,
						be.OutputChannelId,
						this.hb,
						this.yb,
						this.zb,
						this.Cb,
						this.Fb,
						this.vb,
						this.Ib,
						(Te) => {
							if (Te) return this.Wb(Te.uri.scheme);
							if (this.F.size > 0) {
								const Ee = Array.from(this.F.entries()),
									Ie = Ee.filter((Be) => Be[0] !== ie.Schemas.file);
								return Ie.length > 0 ? Ie[0][1][0] : Ee[0][1][0];
							} else return;
						},
					);
				}
				Mc(Te) {
					const Ee = J.$$3.get(Te);
					return !Ee || !Ee.when || this.wb.contextMatchesRules(Ee.when);
				}
				async Nc(Te, Ee, Ie) {
					await this.R;
					const Be = Te?.type,
						Se = this.md();
					Ee || (await this.Sb(Te?.type));
					const ke = Object.create(null);
					J.$$3.all().forEach((Me) => (ke[Me.taskType] = !0)),
						(ke.shell = !0),
						(ke.process = !0);
					const Ue = await new Promise((Me) => {
							const De = [];
							let Re = 0;
							const je = (Ze) => {
									Ze && De.push(Ze), --Re === 0 && Me(De);
								},
								Ve = (Ze) => {
									try {
										Ze && n.$lg(Ze.message)
											? (this.Wc(`Error: ${Ze.message}
`),
												this.Ub())
											: (this.Wc(
													"Unknown error received while collecting tasks from providers.",
												),
												this.Ub());
									} finally {
										--Re === 0 && Me(De);
									}
								};
							if (
								this.pc() &&
								this.Pb === z.JsonSchemaVersion.V2_0_0 &&
								this.z.size > 0
							) {
								let Ze = !1;
								for (const [et, rt] of this.z) {
									const ft = this.C.get(et);
									if (Be === void 0 || Be === ft) {
										if (ft && !this.Mc(ft)) continue;
										(Ze = !0),
											Re++,
											(0, W.$Dh)(
												rt.provideTasks(ke).then((bt) => {
													for (const nt of bt.tasks)
														if (nt.type !== this.C.get(et)) {
															this.Wc(
																o.localize(9577, null, this.C.get(et), nt.type),
															),
																nt.type !== "shell" &&
																	nt.type !== "process" &&
																	this.Ub();
															break;
														}
													return je(bt);
												}, Ve),
												5e3,
												() => {
													console.error("Timed out getting tasks from ", ft),
														je(void 0);
												},
											);
									}
								}
								Ze || Me(De);
							} else Me(De);
						}),
						qe = new He(),
						Ae = new He();
					for (const Me of Ue)
						for (const De of Me.tasks) {
							const Re = De.getWorkspaceFolder();
							Re && Ae.add(Re, De);
						}
					try {
						let Me = [];
						return (
							(!Ie || this.Eb.isWorkspaceTrusted()) &&
								(Me = Array.from(await this.getWorkspaceTasks())),
							await Promise.all(this.Oc(Me, Te, qe, Ae, Ee)),
							Se && (await this.nd(qe.all())),
							qe
						);
					} catch {
						const Me = new He();
						for (const De of Ue)
							for (const Re of De.tasks) {
								const je = Re.getWorkspaceFolder();
								je && Me.add(je, Re);
							}
						return Me;
					}
				}
				Oc(Te, Ee, Ie, Be, Se) {
					return Te.map(async ([ke, Ue]) => {
						const qe = Be.get(ke);
						if (!Ue.set) {
							qe && Ie.add(ke, ...qe);
							return;
						}
						if (this.ib.getWorkbenchState() === D.WorkbenchState.EMPTY)
							Ie.add(ke, ...Ue.set.tasks);
						else {
							const Ae = Ue.configurations,
								Me = Ue.set ? this.Pc(Ue.set) : void 0,
								De = [];
							if (Ae || Me) {
								const Re = new Set();
								Ae && Object.keys(Ae.byIdentifier).forEach((Ze) => Re.add(Ze));
								for (const Ze of qe)
									if (z.$g4.is(Ze))
										if (Ae) {
											const et = Ae.byIdentifier[Ze.defines._key];
											et
												? (Re.delete(Ze.defines._key),
													Ie.add(ke, q.$6Wc(Ze, et)))
												: Ie.add(ke, Ze);
										} else if (Me) {
											const et = Me[Ze.defines._key];
											et
												? (Ie.add(ke, q.$6Wc(Ze, et)), De.push(et))
												: Ie.add(ke, Ze);
										} else Ie.add(ke, Ze);
								if (De.length > 0) {
									const Ze = De.reduce(
										(et, rt) => ((et[rt._id] = !0), et),
										Object.create(null),
									);
									for (const et of Ue.set.tasks) Ze[et._id] || Ie.add(ke, et);
								} else Ie.add(ke, ...Ue.set.tasks);
								const Ve = Array.from(Re).map(async (Ze) => {
									const et = Ae.byIdentifier[Ze];
									if (Ee?.type && Ee.type !== et.configures.type) return;
									let rt = !1;
									for (const [ft, bt] of this.z) {
										const nt = this.C.get(ft);
										if (et.type === nt) {
											if (nt && !this.Mc(nt)) {
												rt = !0;
												continue;
											}
											try {
												const lt = await bt.resolveTask(et);
												if (lt && lt._id === et._id) {
													Ie.add(ke, q.$6Wc(lt, et));
													return;
												}
											} catch {}
										}
									}
									rt
										? this.Wc(o.localize(9578, null, et.configures.type))
										: Se ||
											(this.Wc(
												o.localize(
													9579,
													null,
													et.configures.type,
													JSON.stringify(et._source.config.element, void 0, 4),
												),
											),
											this.Ub());
								});
								await Promise.all(Ve);
							} else Ie.add(ke, ...Ue.set.tasks), Ie.add(ke, ...qe);
						}
					});
				}
				Pc(Te) {
					let Ee;
					function Ie() {
						return Ee || ((Ee = Object.create(null)), Ee);
					}
					for (const Be of Te.tasks)
						if (z.$e4.is(Be)) {
							const Se = Be.command && Be.command.name;
							if (Se === "gulp" || Se === "grunt" || Se === "jake") {
								const ke = z.KeyedTaskIdentifier.create({
									type: Se,
									task: Be.configurationProperties.name,
								});
								Ie()[ke._key] = Be;
							}
						}
					return Ee;
				}
				async getWorkspaceTasks(Te = z.TaskRunSource.User) {
					return (await this.pd())
						? (await (0, W.$Dh)(this.R, 2e3, () => {
								this.Fb.warn("Timed out waiting for all supported executions");
							}),
							await this.H,
							this.G ? this.G : this.Qc(Te))
						: new Map();
				}
				Qc(Te = z.TaskRunSource.User) {
					return (this.G = this.Sc(Te)), this.G;
				}
				async Rc() {
					let Te = this.Mb.length > 0 ? this.Mb[0] : void 0;
					if (!Te) {
						const Ee = await this.zb.userHome();
						Te = new D.$7i({ uri: Ee, name: h.$kh(Ee), index: 0 });
					}
					return Te;
				}
				async Sc(Te = z.TaskRunSource.User) {
					const Ee = [];
					for (const Ue of this.Mb) Ee.push(this.Uc(Ue, Te));
					const Ie = await Promise.all(Ee),
						Be = new Map();
					for (const Ue of Ie)
						Ue && Be.set(Ue.workspaceFolder.uri.toString(), Ue);
					const Se = await this.Rc();
					if (this.ib.getWorkbenchState() !== D.WorkbenchState.EMPTY) {
						const Ue = await this.Xc(Se, Te);
						Ue &&
							this.u &&
							this.u.configuration &&
							Be.set(this.u.configuration.toString(), Ue);
					}
					const ke = await this.Yc(Se, Te);
					return ke && Be.set(z.$_3, ke), Be;
				}
				get Tc() {
					return (
						F.$Upc.getValue(this.wb) === !0 && F.$Wpc.getValue(this.wb) === !0
					);
				}
				async Uc(Te, Ee = z.TaskRunSource.User) {
					const Ie =
						this.r === z.ExecutionEngine.Process
							? await this.bd(Te)
							: await this.ad(Te);
					if (!Ie || !Ie.config || Ie.hasErrors)
						return Promise.resolve({
							workspaceFolder: Te,
							set: void 0,
							configurations: void 0,
							hasErrors: Ie ? Ie.hasErrors : !1,
						});
					await S.$03.onReady();
					const Be = this.Wb(Te.uri.scheme),
						Se = new xe(this.P),
						ke = q.$5Wc(
							Te,
							void 0,
							Be ? Be.platform : u.$x,
							Ie.config,
							Se,
							q.TaskConfigSource.TasksJson,
							this.wb,
						);
					let Ue = !1;
					if (
						(!ke.validationStatus.isOK() &&
							ke.validationStatus.state !== r.ValidationState.Info &&
							((Ue = !0), this.Ub(Ee)),
						Se.status.isFatal())
					)
						return (
							Se.fatal(o.localize(9580, null)),
							{
								workspaceFolder: Te,
								set: void 0,
								configurations: void 0,
								hasErrors: Ue,
							}
						);
					let qe;
					if (ke.configured && ke.configured.length > 0) {
						qe = { byIdentifier: Object.create(null) };
						for (const Ae of ke.configured)
							qe.byIdentifier[Ae.configures._key] = Ae;
					}
					return (
						!this.Tc &&
							ke.custom.length > 0 &&
							console.warn("Custom workspace tasks are not supported."),
						{
							workspaceFolder: Te,
							set: { tasks: this.Tc ? ke.custom : [] },
							configurations: qe,
							hasErrors: Ue,
						}
					);
				}
				Vc(Te, Ee) {
					if (!Te) return { config: void 0, hasParseErrors: !1 };
					const Ie = Te.$parseErrors;
					if (Ie) {
						let Be = !1;
						for (const Se of Ie)
							if (/tasks\.json$/.test(Se)) {
								Be = !0;
								break;
							}
						if (Be)
							return (
								this.Wc(o.localize(9581, null, Ee)),
								this.Ub(),
								{ config: Te, hasParseErrors: !0 }
							);
					}
					return { config: Te, hasParseErrors: !1 };
				}
				Wc(Te, Ee) {
					(!Ee || this.ab.getValue(z.TaskSettingId.VerboseLogging)) &&
						this.P.append(
							Te +
								`
`,
						);
				}
				async Xc(Te, Ee = z.TaskRunSource.User) {
					if (this.r === z.ExecutionEngine.Process) return this.Zc(Te);
					const Ie = this.fd(Te, z.TaskSourceKind.WorkspaceFile),
						Be = this.Vc(Ie.config, o.localize(9582, null)),
						Se = { byIdentifier: Object.create(null) },
						ke = [];
					return (
						await this.$c(
							Te,
							Be.config,
							Ee,
							ke,
							Se.byIdentifier,
							q.TaskConfigSource.WorkspaceFile,
						),
						(Be.config
							? q.ExecutionEngine.from(Be.config)
							: z.ExecutionEngine.Terminal) === z.ExecutionEngine.Process
							? (this.vb.warn(o.localize(9583, null)), this.Zc(Te))
							: {
									workspaceFolder: Te,
									set: { tasks: ke },
									configurations: Se,
									hasErrors: Be.hasParseErrors,
								}
					);
				}
				async Yc(Te, Ee = z.TaskRunSource.User) {
					if (this.r === z.ExecutionEngine.Process) return this.Zc(Te);
					const Ie = this.fd(Te, z.TaskSourceKind.User),
						Be = this.Vc(Ie.config, o.localize(9584, null)),
						Se = { byIdentifier: Object.create(null) },
						ke = [];
					return (
						await this.$c(
							Te,
							Be.config,
							Ee,
							ke,
							Se.byIdentifier,
							q.TaskConfigSource.User,
						),
						(Be.config
							? q.ExecutionEngine.from(Be.config)
							: z.ExecutionEngine.Terminal) === z.ExecutionEngine.Process
							? (this.vb.warn(o.localize(9585, null)), this.Zc(Te))
							: {
									workspaceFolder: Te,
									set: { tasks: ke },
									configurations: Se,
									hasErrors: Be.hasParseErrors,
								}
					);
				}
				Zc(Te) {
					return {
						workspaceFolder: Te,
						set: void 0,
						configurations: void 0,
						hasErrors: !1,
					};
				}
				async $c(Te, Ee, Ie, Be, Se, ke, Ue = !1) {
					if (Ee) {
						if (!Te)
							return (
								this.Fb.trace(
									"TaskService.computeTasksForSingleConfig: no workspace folder for worskspace",
									this.u?.id,
								),
								!1
							);
					} else return !1;
					const qe = this.Wb(Te.uri.scheme),
						Ae = new xe(this.P),
						Me = q.$5Wc(
							Te,
							this.u,
							qe ? qe.platform : u.$x,
							Ee,
							Ae,
							ke,
							this.wb,
							Ue,
						);
					let De = !1;
					if (
						(!Me.validationStatus.isOK() &&
							Me.validationStatus.state !== r.ValidationState.Info &&
							(this.Ub(Ie), (De = !0)),
						Ae.status.isFatal())
					)
						return Ae.fatal(o.localize(9586, null)), De;
					if (Me.configured && Me.configured.length > 0)
						for (const Re of Me.configured) Se[Re.configures._key] = Re;
					if (!this.Tc && Me.custom.length > 0)
						console.warn("Custom workspace tasks are not supported.");
					else for (const Re of Me.custom) Be.push(Re);
					return De;
				}
				ad(Te) {
					const { config: Ee, hasParseErrors: Ie } = this.fd(Te);
					return Promise.resolve({
						workspaceFolder: Te,
						config: Ee,
						hasErrors: Ie,
					});
				}
				cd() {
					const Te = [],
						Ee = [];
					let Ie = z.ExecutionEngine.Terminal,
						Be = z.JsonSchemaVersion.V2_0_0,
						Se;
					if (this.ib.getWorkbenchState() === D.WorkbenchState.FOLDER) {
						const ke = this.ib.getWorkspace().folders[0];
						Te.push(ke), (Ie = this.dd(ke));
						const Ue = { executionEngineVersion: Ie };
						this.jb.publicLog("taskService.engineVersion", Ue),
							(Be = this.ed(ke));
					} else if (
						this.ib.getWorkbenchState() === D.WorkbenchState.WORKSPACE
					) {
						Se = this.ib.getWorkspace();
						for (const ke of this.ib.getWorkspace().folders)
							Be === this.ed(ke)
								? Te.push(ke)
								: (Ee.push(ke), this.Wc(o.localize(9587, null, ke.uri.fsPath)));
					}
					return [Te, Ee, Ie, Be, Se];
				}
				dd(Te) {
					const { config: Ee } = this.fd(Te);
					return Ee ? q.ExecutionEngine.from(Ee) : z.ExecutionEngine._default;
				}
				ed(Te) {
					const { config: Ee } = this.fd(Te);
					return Ee ? q.JsonSchemaVersion.from(Ee) : z.JsonSchemaVersion.V2_0_0;
				}
				fd(Te, Ee) {
					let Ie;
					if (
						Ee !== z.TaskSourceKind.User &&
						this.ib.getWorkbenchState() === D.WorkbenchState.EMPTY
					)
						Ie = void 0;
					else {
						const Se = this.ab.inspect("tasks", { resource: Te.uri });
						switch (Ee) {
							case z.TaskSourceKind.User: {
								Se.userValue !== Se.workspaceFolderValue &&
									(Ie = m.$vo(Se.userValue));
								break;
							}
							case z.TaskSourceKind.Workspace:
								Ie = m.$vo(Se.workspaceFolderValue);
								break;
							case z.TaskSourceKind.WorkspaceFile: {
								this.ib.getWorkbenchState() === D.WorkbenchState.WORKSPACE &&
									Se.workspaceFolderValue !== Se.workspaceValue &&
									(Ie = m.$vo(Se.workspaceValue));
								break;
							}
							default:
								Ie = m.$vo(Se.workspaceFolderValue);
						}
					}
					if (!Ie) return { config: void 0, hasParseErrors: !1 };
					const Be = Ie.$parseErrors;
					if (Be) {
						let Se = !1;
						for (const ke of Be)
							if (/tasks\.json$/.test(ke)) {
								Se = !0;
								break;
							}
						if (Se)
							return (
								this.Wc(o.localize(9588, null)),
								this.Ub(),
								{ config: void 0, hasParseErrors: !0 }
							);
					}
					return { config: Ie, hasParseErrors: !1 };
				}
				inTerminal() {
					return this.I
						? this.I instanceof V.$dXc
						: this.r === z.ExecutionEngine.Terminal;
				}
				configureAction() {
					const Te = this;
					return new (class extends t.$rj {
						constructor() {
							super(
								Oe.ID,
								Oe.TEXT.value,
								void 0,
								!0,
								() => (Te.Id(), Promise.resolve(void 0)),
							);
						}
					})();
				}
				gd(Te) {
					let Ee = !0;
					if (Te instanceof x.$Spc) {
						const Ie = Te,
							Be =
								Ie.code === x.TaskErrors.NotConfigured ||
								Ie.code === x.TaskErrors.NoBuildTask ||
								Ie.code === x.TaskErrors.NoTestTask,
							Se = Ie.code === x.TaskErrors.RunningTask;
						Be || Se
							? this.vb.prompt(Ie.severity, Ie.message, [
									{
										label: Be ? Oe.TEXT.value : o.localize(9589, null),
										run: () => {
											Be ? this.Id() : this.zd();
										},
									},
								])
							: this.vb.notify({ severity: Ie.severity, message: Ie.message });
					} else if (Te instanceof Error) {
						const Ie = Te;
						this.vb.error(Ie.message), (Ee = !1);
					} else
						n.$lg(Te)
							? this.vb.error(Te)
							: this.vb.error(o.localize(9590, null));
					Ee && this.Ub();
				}
				hd() {
					return this.ab.getValue($e.$eXc);
				}
				async jd(Te, Ee = !1, Ie = !1, Be, Se = !0) {
					let ke = {};
					if (Te == null || Te.length === 0) return [];
					const Ue = (Me) => {
						const De = {
							label: Me._label,
							description: this.getTaskDescription(Me),
							task: Me,
							detail: this.hd() ? Me.configurationProperties.detail : void 0,
						};
						return (
							ke[Me._id]
								? (ke[Me._id].length === 1 && (ke[Me._id][0].label += " (1)"),
									(De.label =
										De.label + " (" + (ke[Me._id].length + 1).toString() + ")"))
								: (ke[Me._id] = []),
							ke[Me._id].push(De),
							De
						);
					};
					function qe(Me, De, Re) {
						De.length && Me.push({ type: "separator", label: Re });
						for (const je of De) {
							const Ve = Ue(je);
							(Ve.buttons = [
								{
									iconClass: ne.ThemeIcon.asClassName($e.$hXc),
									tooltip: o.localize(9591, null),
								},
							]),
								Be && je === Be.task ? Me.unshift(Be) : Me.push(Ve);
						}
					}
					let Ae;
					if (Ee)
						if (((Ae = []), Te.length === 1)) Ae.push(Ue(Te[0]));
						else {
							const Me = await this.getSavedTasks("historical"),
								De = [],
								Re = new Set();
							let je = [],
								Ve = [];
							const Ze = Object.create(null);
							Te.forEach((rt) => {
								const ft = rt.getCommonTaskId();
								ft && (Ze[ft] = rt);
							}),
								Me.reverse().forEach((rt) => {
									const ft = rt.getCommonTaskId();
									if (ft) {
										Re.add(ft);
										const bt = Ze[ft];
										bt && De.push(bt);
									}
								});
							for (const rt of Te) {
								const ft = rt.getCommonTaskId();
								(!ft || !Re.has(ft)) &&
									(rt._source.kind === z.TaskSourceKind.Workspace ||
									rt._source.kind === z.TaskSourceKind.User
										? je.push(rt)
										: Ve.push(rt));
							}
							const et = this.createSorter();
							Se && qe(Ae, De, o.localize(9592, null)),
								(je = je.sort((rt, ft) => et.compare(rt, ft))),
								qe(Ae, je, o.localize(9593, null)),
								(Ve = Ve.sort((rt, ft) => et.compare(rt, ft))),
								qe(Ae, Ve, o.localize(9594, null));
						}
					else {
						if (Ie) {
							const Me = this.createSorter();
							Te = Te.sort((De, Re) => Me.compare(De, Re));
						}
						Ae = Te.map((Me) => Ue(Me));
					}
					return (ke = {}), Ae;
				}
				async kd(Te, Ee, Ie, Be) {
					return this.Ib.createInstance($e.$iXc).show(Te, Ee, Ie, Be);
				}
				async ld(Te, Ee, Ie, Be = !1, Se = !1, ke, Ue, qe) {
					const Ae = await Te,
						Me = await (0, W.$Dh)(this.jd(Ae, Be, Se, ke), 200, () => {});
					if (Me)
						return Me.length === 1 && this.ab.getValue($e.$fXc)
							? Me[0]
							: (Me.length === 0 && Ie
									? Me.push(Ie)
									: Me.length > 1 &&
										Ue &&
										Ue.length > 0 &&
										(Me.push({ type: "separator", label: "" }), Me.push(Ue[0])),
								this.nb.pick(Me, {
									value: qe,
									placeHolder: Ee,
									matchOnDescription: !0,
									onDidTriggerItemButton: (De) => {
										const Re = De.item.task;
										this.nb.cancel(),
											z.$g4.is(Re)
												? this.customize(Re, void 0, !0)
												: z.$e4.is(Re) && this.openConfig(Re);
									},
								}));
				}
				md() {
					return (
						this.getRecentlyUsedTasksV1().size > 0 &&
						this.bc("historical").size === 0
					);
				}
				async nd(Te) {
					if (!this.md()) return;
					const Ee = this.getRecentlyUsedTasksV1(),
						Ie = Object.create(null);
					Te.forEach((Se) => {
						const ke = Se.getKey();
						ke && (Ie[ke] = Se);
					});
					const Be = [...Ee.keys()].reverse();
					for (const Se in Be) {
						const ke = Ie[Se];
						ke && (await this.gc(ke));
					}
					this.rb.remove(be.c, $.StorageScope.WORKSPACE);
				}
				od() {
					return (
						this.Nb.length === 0 ||
							!this.Qb ||
							this.vb.prompt(
								c.default.Info,
								o.localize(9595, null, this.Nb.map((Te) => Te.name).join(", ")),
								[
									{
										label: o.localize(9596, null),
										isSecondary: !0,
										run: () => {
											this.rb.store(
												be.j,
												!0,
												$.StorageScope.WORKSPACE,
												$.StorageTarget.MACHINE,
											),
												(this.y = !1);
										},
									},
								],
							),
						Promise.resolve(void 0)
					);
				}
				async pd() {
					return F.$Xpc && !F.$Ypc
						? !1
						: (await this.Eb.workspaceTrustInitialized,
							this.Eb.isWorkspaceTrusted()
								? !0
								: (await this.Db.requestWorkspaceTrust({
										message: o.localize(9597, null),
									})) === !0);
				}
				async qd(Te) {
					if (!this.n) return;
					if (!Te) return this.sd();
					const Ee = typeof Te == "string" ? void 0 : Te.type,
						Ie = typeof Te == "string" ? Te : Te.task,
						Be = await this.Nc({ type: Ee }),
						Se = this.Bd(Te),
						ke = Be.all(),
						Ue = this.Ec(Be),
						qe = this.ib.getWorkspace().folders.map((Me) => Me.uri);
					if (
						(this.ib.getWorkbenchState() === D.WorkbenchState.WORKSPACE &&
							qe.push(this.ib.getWorkspace().configuration),
						qe.push(z.$_3),
						Se)
					)
						for (const Me of qe) {
							const De = await Ue.resolve(Me, Se);
							if (De) {
								this.run(De);
								return;
							}
						}
					if (
						!(Ie
							? ke.find(
									(Me) =>
										Me.configurationProperties.identifier === Ie ||
										Me.getDefinition(!0)?.configurationProperties
											?.identifier === Ie,
								)
							: void 0)
					)
						return this.sd(ke, Ee, Ie);
					for (const Me of qe) {
						const De = await Ue.resolve(Me, Ie);
						if (De) {
							await this.run(
								De,
								{ attachProblemMatcher: !0 },
								z.TaskRunSource.User,
							);
							return;
						}
					}
				}
				rd(Te) {
					if (!this.Zb(Te))
						return {
							tasks: Promise.resolve([]),
							grouped: Promise.resolve(new He()),
						};
					const Ee = this.Nc(Te);
					return {
						tasks: Ee.then((Be) => {
							if (!Te || !Te.type) return Be.all();
							const Se = [];
							return (
								Be.forEach((ke) => {
									for (const Ue of ke)
										if (z.$g4.is(Ue) && Ue.defines.type === Te.type)
											Se.push(Ue);
										else if (z.$e4.is(Ue))
											if (Ue.type === Te.type) Se.push(Ue);
											else {
												const qe = Ue.customizes();
												qe && qe.type === Te.type && Se.push(Ue);
											}
								}),
								Se
							);
						}),
						grouped: Ee,
					};
				}
				sd(Te, Ee, Ie) {
					const Be = (ke) => {
							ke !== void 0 &&
								(ke === null
									? this.Id()
									: this.run(
											ke,
											{ attachProblemMatcher: !0 },
											z.TaskRunSource.User,
										).then(void 0, (Ue) => {}));
						},
						Se = o.localize(9598, null);
					this.od().then(() => {
						if (this.ab.getValue(Fe)) {
							let ke;
							Te || (ke = this.rd()),
								this.ld(
									Te || ke.tasks,
									Se,
									{ label: "$(plus) " + o.localize(9599, null), task: null },
									!0,
									void 0,
									void 0,
									void 0,
									Ie,
								).then((Ue) => Be(Ue ? Ue.task : void 0));
						} else
							this.kd(
								Se,
								{ label: "$(plus) " + o.localize(9600, null), task: null },
								Ee,
								Ie,
							).then(Be);
					});
				}
				td() {
					S.$03.onReady().then(() =>
						this.gb.saveAll({ reason: oe.SaveReason.AUTO }).then(() => {
							const Te = this.Lc().rerun();
							return Te
								? this.Hc(Te)
								: (this.O.get() || this.sd(), Promise.resolve(void 0));
						}),
					);
				}
				ud(Te, Ee = !1) {
					const Ie = [];
					for (const Be of Te.filter(
						(Se) => !!Se.configurationProperties.group,
					))
						((Ee &&
							typeof Be.configurationProperties.group.isDefault == "string") ||
							(!Ee && Be.configurationProperties.group.isDefault === !0)) &&
							Ie.push(Be);
					return Ie;
				}
				vd(Te, Ee, Ie, Be) {
					if (this.Pb === z.JsonSchemaVersion.V0_1_0) {
						Be();
						return;
					}
					const Se = {
							location: y.ProgressLocation.Window,
							title: Ee.fetching,
						},
						ke = (async () => {
							async function Ue(Ve, Ze, et) {
								et.run(Ve, Ze, z.TaskRunSource.User).then(void 0, (rt) => {});
							}
							const qe = (Ve) => {
								this.od().then(() => {
									this.ld(
										Ve,
										Ee.select,
										{ label: Ee.notFoundConfigure, task: null },
										!0,
									).then((Ze) => {
										const et = Ze ? Ze.task : void 0;
										if (et !== void 0) {
											if (et === null) {
												Ie.apply(this);
												return;
											}
											Ue(et, { attachProblemMatcher: !0 }, this);
										}
									});
								});
							};
							let Ae = [];
							const { globGroupTasks: Me, globTasksDetected: De } =
								await this.wd(Te._id);
							(Ae = [...Me]),
								!De && Ae.length === 0 && (Ae = await this.Yb(Te, !0));
							const Re = (Ve) =>
									this.vc(Te).then((Ze) => {
										if (Ze.length > 0) {
											const et = this.ud(Ze, Ve);
											if (et.length === 1) {
												Ue(et[0], void 0, this);
												return;
											} else et.length > 0 && (Ze = et);
										}
										qe(Ze);
									}),
								je = (Ve) => {
									z.$f4.is(Ve)
										? this.tryResolveTask(Ve).then((Ze) => {
												Ue(Ze, void 0, this);
											})
										: Ue(Ve, void 0, this);
								};
							return Ae.length === 1
								? je(Ae[0])
								: De && Ae.length > 1
									? Re(!0)
									: (Ae.length || (Ae = await this.Yb(Te, !0)),
										Ae.length === 1 ? je(Ae[0]) : Re(!1));
						})();
					this.sb.withProgress(Se, () => ke);
				}
				async wd(Te) {
					let Ee = !1;
					const Ie = oe.$A1.getOriginalUri(this.gb.activeEditor);
					if (Ie) {
						const Be = this.ib.getWorkspaceFolder(Ie);
						if (Be) {
							const Se = this.fd(Be)?.config?.tasks;
							if (
								Se &&
								((Ee =
									Se.filter(
										(ke) =>
											ke.group &&
											typeof ke.group != "string" &&
											typeof ke.group.isDefault == "string",
									).length > 0),
								Ee)
							) {
								const ke = Be?.uri ? (h.$ph(Be.uri, Ie) ?? Ie.path) : Ie.path;
								return {
									globGroupTasks: await this.Xb((qe) => {
										const Ae = qe.configurationProperties.group;
										return Ae &&
											typeof Ae != "string" &&
											typeof Ae.isDefault == "string"
											? Ae._id === Te && w.$Ik(Ae.isDefault, ke)
											: ((Ee = !1), !1);
									}),
									globTasksDetected: Ee,
								};
							}
						}
					}
					return { globGroupTasks: [], globTasksDetected: Ee };
				}
				xd() {
					if (this.n)
						return this.vd(
							z.TaskGroup.Build,
							{
								fetching: o.localize(9601, null),
								select: o.localize(9602, null),
								notFoundConfigure: o.localize(9603, null),
							},
							this.Jd,
							this.mc,
						);
				}
				yd() {
					return this.vd(
						z.TaskGroup.Test,
						{
							fetching: o.localize(9604, null),
							select: o.localize(9605, null),
							notFoundConfigure: o.localize(9606, null),
						},
						this.Kd,
						this.nc,
					);
				}
				zd(Te) {
					if (Te === "terminateAll") {
						this.Jc();
						return;
					}
					const Ee = (Ie) => {
						this.ld(
							Ie || this.getActiveTasks(),
							o.localize(9607, null),
							{ label: o.localize(9608, null), task: void 0 },
							!1,
							!0,
							void 0,
							[
								{
									label: o.localize(9609, null),
									id: "terminateAll",
									task: void 0,
								},
							],
						).then((Be) => {
							Be && Be.id === "terminateAll" && this.Jc();
							const Se = Be ? Be.task : void 0;
							Se != null && this.terminate(Se);
						});
					};
					if (this.inTerminal()) {
						const Ie = this.Bd(Te);
						let Be;
						Ie !== void 0
							? ((Be = this.getActiveTasks()),
								Be.then((Se) => {
									for (const ke of Se)
										if (ke.matches(Ie)) {
											this.terminate(ke);
											return;
										}
									Ee(Be);
								}))
							: Ee();
					} else
						this.$b().then((Ie) => {
							Ie &&
								this.Jc().then((Be) => {
									const Se = Be[0];
									Se.success ||
										(Se.code &&
										Se.code === a.TerminateResponseCode.ProcessNotFound
											? this.vb.error(o.localize(9610, null))
											: this.vb.error(o.localize(9611, null)));
								});
						});
				}
				async Ad(Te) {
					const Ee = await this.getActiveTasks();
					if (Ee.length === 1) {
						this.Ic(Ee[0]);
						return;
					}
					if (this.inTerminal()) {
						const Ie = this.Bd(Te);
						if (Ie !== void 0) {
							for (const Se of Ee)
								if (Se.matches(Ie)) {
									this.Ic(Se);
									return;
								}
						}
						const Be = await this.ld(
							Ee,
							o.localize(9612, null),
							{ label: o.localize(9613, null), task: null },
							!1,
							!0,
						);
						Be && Be.task && this.Ic(Be.task);
					} else Ee.length > 0 && this.Ic(Ee[0]);
				}
				Bd(Te) {
					let Ee;
					return (
						n.$lg(Te)
							? (Ee = Te)
							: Te &&
								n.$lg(Te.type) &&
								(Ee = z.TaskDefinition.createTaskIdentifier(Te, console)),
						Ee
					);
				}
				Cd(Te) {
					return !!Te && !!Te.tasks && Te.tasks.length > 0;
				}
				Dd(Te, Ee) {
					let Ie = !1;
					this.hb
						.stat(Te)
						.then(
							(Be) => Be,
							() => {},
						)
						.then(async (Be) => {
							const Se = !!Be,
								ke = this.ab.inspect("tasks", { resource: Te });
							let Ue, qe;
							switch (Ee) {
								case z.TaskSourceKind.User:
									(Ue = this.Cd(ke.userValue)),
										(qe = b.ConfigurationTarget.USER);
									break;
								case z.TaskSourceKind.WorkspaceFile:
									(Ue = this.Cd(ke.workspaceValue)),
										(qe = b.ConfigurationTarget.WORKSPACE);
									break;
								default:
									(Ue = this.Cd(ke.workspaceFolderValue)),
										(qe = b.ConfigurationTarget.WORKSPACE_FOLDER);
							}
							let Ae;
							if (!Ue) {
								const Me = await this.nb.pick((0, H.$3Wc)(), {
									placeHolder: o.localize(9614, null),
								});
								if (!Me) return Promise.resolve(void 0);
								Ae = Me.content;
								const De = this.ab.getValue();
								De.editor.insertSpaces &&
									(Ae = Ae.replace(
										/(\n)(\t+)/g,
										(Re, je, Ve) =>
											je + " ".repeat(Ve.length * De.editor.tabSize),
									)),
									(Ie = !0);
							}
							if (!Se && Ae)
								return this.kb
									.create([{ resource: Te, value: Ae }])
									.then((Me) => Me[0].resource);
							if (Se && (Ue || Ae)) {
								const Me = Be?.resource;
								return (
									Ae &&
										Me &&
										this.ab.updateValue(
											"tasks",
											E.$do(Ae),
											{ resource: Me },
											qe,
										),
									Me
								);
							}
						})
						.then((Be) => {
							Be &&
								this.gb.openEditor({ resource: Be, options: { pinned: Ie } });
						});
				}
				Ed(Te) {
					const Ee = Te;
					return Ee && !!Ee.task;
				}
				Fd(Te) {
					const Ee = Te;
					return Ee && !!Ee.settingType;
				}
				Gd(Te) {
					z.$g4.is(Te)
						? this.customize(Te, void 0, !0)
						: z.$e4.is(Te)
							? this.openConfig(Te)
							: z.$f4.is(Te);
				}
				Hd(Te) {
					if (Te)
						if (this.Ed(Te)) this.Gd(Te.task);
						else if (this.Fd(Te))
							this.Ib.createInstance($e.$iXc).handleSettingOption(
								Te.settingType,
							);
						else if (
							Te.folder &&
							this.ib.getWorkbenchState() !== D.WorkbenchState.EMPTY
						)
							this.Dd(
								Te.folder.toResource(".vscode/tasks.json"),
								z.TaskSourceKind.Workspace,
							);
						else {
							const Ee = this.Bc(z.TaskSourceKind.User);
							Ee && this.Dd(Ee, z.TaskSourceKind.User);
						}
				}
				getTaskDescription(Te) {
					let Ee;
					if (Te._source.kind === z.TaskSourceKind.User)
						Ee = o.localize(9615, null);
					else if (Te._source.kind === z.TaskSourceKind.WorkspaceFile)
						Ee = Te.getWorkspaceFileName();
					else if (this.needsFolderQualification()) {
						const Ie = Te.getWorkspaceFolder();
						Ie && (Ee = Ie.name);
					}
					return Ee;
				}
				async Id() {
					if (!(await this.pd())) return;
					let Te;
					this.Pb === z.JsonSchemaVersion.V2_0_0
						? (Te = this.Nc())
						: (Te = Promise.resolve(new He()));
					const Ee = this.ib.getWorkspace().folders.map((Me) =>
							this.hb.stat(Me.toResource(".vscode/tasks.json")).then(
								(De) => De,
								() => {},
							),
						),
						Ie = o.localize(9616, null),
						Be = o.localize(9617, null),
						Se = new X.$Ce(),
						ke = Se.token,
						Ue = Promise.all(Ee).then((Me) =>
							Te.then((De) => {
								const Re = [];
								let je = 0,
									Ve = De.all();
								if (Ve.length > 0) {
									Ve = Ve.sort((et, rt) => et._label.localeCompare(rt._label));
									for (const et of Ve) {
										const rt = {
											label: $e.$iXc.getTaskLabelWithIcon(et),
											task: et,
											description: this.getTaskDescription(et),
											detail: this.hd()
												? et.configurationProperties.detail
												: void 0,
										};
										$e.$iXc.applyColorStyles(et, rt, this.Gb),
											Re.push(rt),
											z.$g4.is(et) || je++;
									}
								}
								const Ze = je === 0;
								if (Ze || De.get(z.$_3).length === je) {
									const et = Me[0] !== void 0 ? Be : Ie;
									Re.length && Re.push({ type: "separator" }),
										Re.push({
											label: et,
											folder: this.ib.getWorkspace().folders[0],
										});
								}
								return Re.length === 1 && !Ze && Se.cancel(), Re;
							}),
						);
					if (
						!(await Promise.race([
							new Promise((Me) => {
								Ue.then(() => Me(!1));
							}),
							new Promise((Me) => {
								const De = setTimeout(() => {
									clearTimeout(De), Me(!0);
								}, 200);
							}),
						])) &&
						(await Ue).length === 1 &&
						this.ab.getValue($e.$fXc)
					) {
						const Me = (await Ue)[0];
						if (Me.task) {
							this.Hd(Me);
							return;
						}
					}
					const Ae = Ue.then(
						(Me) => (Me.push(...$e.$iXc.allSettingEntries(this.ab)), Me),
					);
					this.nb
						.pick(Ae, { placeHolder: o.localize(9618, null) }, ke)
						.then(async (Me) => {
							if (ke.isCancellationRequested) {
								const De = (await Ue)[0];
								De.task && (Me = De);
							}
							this.Hd(Me);
						});
				}
				Jd() {
					this.Pb === z.JsonSchemaVersion.V2_0_0
						? this.tasks().then((Te) => {
								if (Te.length === 0) {
									this.Id();
									return;
								}
								const Ee = [];
								let Ie, Be;
								this.od().then(async () => {
									const { globGroupTasks: Se } = await this.wd(
										z.TaskGroup.Build._id,
									);
									let ke = Se;
									ke?.length || (ke = this.ud(Te, !1));
									let Ue;
									if (ke.length === 1) {
										const Me = ke[0].configurationProperties.group;
										Me &&
											(typeof Me == "string" && z.TaskGroup.Build._id,
											(Ue = ke[0]));
									}
									for (const Me of Te)
										if (Me === Ue) {
											const De = o.localize(
												9619,
												null,
												$e.$iXc.getTaskLabelWithIcon(
													Me,
													Me.getQualifiedLabel(),
												),
											);
											(Ie = Me),
												(Be = {
													label: De,
													task: Me,
													description: this.getTaskDescription(Me),
													detail: this.hd()
														? Me.configurationProperties.detail
														: void 0,
												}),
												$e.$iXc.applyColorStyles(Me, Be, this.Gb);
										} else {
											const De = {
												label: $e.$iXc.getTaskLabelWithIcon(Me),
												task: Me,
												description: this.getTaskDescription(Me),
												detail: this.hd()
													? Me.configurationProperties.detail
													: void 0,
											};
											$e.$iXc.applyColorStyles(Me, De, this.Gb), Ee.push(De);
										}
									Be && Ee.unshift(Be);
									const Ae = new X.$Ce().token;
									this.nb
										.pick(Ee, { placeHolder: o.localize(9620, null) }, Ae)
										.then(async (Me) => {
											if (Ae.isCancellationRequested) {
												const Re = (await Ee)[0];
												Re.task && (Me = Re);
											}
											const De = Me && "task" in Me ? Me.task : void 0;
											De != null &&
												(De === Ie && z.$e4.is(De) && this.openConfig(De),
												z.$h4.is(De) ||
													this.customize(
														De,
														{ group: { kind: "build", isDefault: !0 } },
														!0,
													).then(() => {
														Ie &&
															De !== Ie &&
															!z.$h4.is(Ie) &&
															this.customize(Ie, { group: "build" }, !1);
													}));
										}),
										this.nb
											.pick(Ee, { placeHolder: o.localize(9621, null) })
											.then((Me) => {
												const De = Me && "task" in Me ? Me.task : void 0;
												De != null &&
													(De === Ie && z.$e4.is(De) && this.openConfig(De),
													z.$h4.is(De) ||
														this.customize(
															De,
															{ group: { kind: "build", isDefault: !0 } },
															!0,
														).then(() => {
															Ie &&
																De !== Ie &&
																!z.$h4.is(Ie) &&
																this.customize(Ie, { group: "build" }, !1);
														}));
											});
								});
							})
						: this.Id();
				}
				Kd() {
					this.Pb === z.JsonSchemaVersion.V2_0_0
						? this.tasks().then((Te) => {
								if (Te.length === 0) {
									this.Id();
									return;
								}
								let Ee, Ie;
								for (const Be of Te) {
									const Se = z.TaskGroup.from(Be.configurationProperties.group);
									if (Se && Se.isDefault && Se._id === z.TaskGroup.Test._id) {
										Ee = Be;
										break;
									}
								}
								Ee &&
									(Ie = {
										label: o.localize(9622, null, Ee.getQualifiedLabel()),
										task: Ee,
										detail: this.hd()
											? Ee.configurationProperties.detail
											: void 0,
									}),
									this.od().then(() => {
										this.ld(
											Te,
											o.localize(9623, null),
											void 0,
											!0,
											!1,
											Ie,
										).then((Be) => {
											const Se = Be ? Be.task : void 0;
											Se &&
												(Se === Ee && z.$e4.is(Se) && this.openConfig(Se),
												z.$h4.is(Se) ||
													this.customize(
														Se,
														{ group: { kind: "test", isDefault: !0 } },
														!0,
													).then(() => {
														Ee &&
															Se !== Ee &&
															!z.$h4.is(Ee) &&
															this.customize(Ee, { group: "test" }, !1);
													}));
										});
									});
							})
						: this.Id();
				}
				async runShowTasks() {
					const Te = this.getActiveTasks(),
						Ee = await Te;
					let Ie;
					Ee.length === 1
						? this.I.revealTask(Ee[0])
						: Ee.length &&
								Ee.every((Be) =>
									z.$h4.is(Be)
										? !1
										: (Ie || (Ie = Be.command.presentation?.group),
											Be.command.presentation?.group &&
												Be.command.presentation.group === Ie),
								)
							? this.I.revealTask(Ee[0])
							: this.ld(
									Te,
									o.localize(9624, null),
									{ label: o.localize(9625, null), task: null },
									!1,
									!0,
								).then((Be) => {
									const Se = Be ? Be.task : void 0;
									Se != null && this.I.revealTask(Se);
								});
				}
				async Ld(Te) {
					const Ee = Te.toResource(".vscode/tasks.json");
					if (await this.hb.exists(Ee)) {
						const Ie = Ee.with({ path: `${Ee.path}.old` });
						return await this.hb.copy(Ee, Ie, !0), [Ie, Ee];
					}
				}
				Md(Te, Ee, Ie) {
					if (!z.$e4.is(Te)) return;
					const Be = { label: Te._label },
						Se = new Set(["gulp", "jake", "grunt"]);
					n.$lg(Te.command.name) && Se.has(Te.command.name)
						? ((Be.type = Te.command.name), (Be.task = Te.command.args[0]))
						: (Te.command.runtime === z.RuntimeType.Shell &&
								(Be.type = z.RuntimeType.toString(z.RuntimeType.Shell)),
							Te.command.name &&
							!Ee &&
							!Ie.windows?.command &&
							!Ie.osx?.command &&
							!Ie.linux?.command
								? (Be.command = Te.command.name)
								: Ee && (Be.command = Te._source.config.element.command),
							Te.command.args &&
								(!Array.isArray(Te.command.args) ||
									Te.command.args.length > 0) &&
								(!Ie.windows?.args && !Ie.osx?.args && !Ie.linux?.args
									? (Be.args = Te.command.args)
									: (Be.args = Te._source.config.element.args))),
						Te.configurationProperties.presentation &&
							(Be.presentation = Te.configurationProperties.presentation),
						Te.configurationProperties.isBackground &&
							(Be.isBackground = Te.configurationProperties.isBackground),
						Te.configurationProperties.problemMatchers &&
							(Be.problemMatcher = Te._source.config.element.problemMatcher),
						Te.configurationProperties.group &&
							(Be.group = Te.configurationProperties.group),
						(Te._source.config.element = Be);
					const ke = new z.$e4(
							Te._id,
							Te._source,
							Te._label,
							Te.type,
							Te.command,
							Te.hasDefinedMatchers,
							Te.runOptions,
							Te.configurationProperties,
						),
						Ue = this.zc(ke);
					if (Ue) return Ue;
				}
				async Nd() {
					if (this.Pb === z.JsonSchemaVersion.V2_0_0) return;
					if (!this.Eb.isWorkspaceTrusted()) {
						this.D(
							i.Event.once(this.Eb.onDidChangeTrust)((Ie) => {
								Ie && this.Nd();
							}),
						);
						return;
					}
					const Te = await this.Nc(),
						Ee = [];
					for (const Ie of this.Mb) {
						const Be = await this.Ld(Ie);
						if ((Be && Ee.push(Be), !Be)) continue;
						const Se = [],
							ke = !!this.ab.getValue(
								z.TasksSchemaProperties.SuppressTaskName,
								{ resource: Ie.uri },
							),
							Ue = {
								windows: this.ab.getValue(z.TasksSchemaProperties.Windows, {
									resource: Ie.uri,
								}),
								osx: this.ab.getValue(z.TasksSchemaProperties.Osx, {
									resource: Ie.uri,
								}),
								linux: this.ab.getValue(z.TasksSchemaProperties.Linux, {
									resource: Ie.uri,
								}),
							};
						Te.get(Ie).forEach((qe) => {
							const Ae = this.Md(qe, ke, Ue);
							Ae && Se.push(Ae);
						}),
							(this.I = void 0),
							(this.G = void 0),
							await this.Ac(Ie, "tasks.tasks", Se),
							await this.Ac(Ie, "tasks.version", "2.0.0"),
							this.ab.getValue(z.TasksSchemaProperties.ShowOutput, {
								resource: Ie.uri,
							}) &&
								(await this.ab.updateValue(
									z.TasksSchemaProperties.ShowOutput,
									void 0,
									{ resource: Ie.uri },
								)),
							this.ab.getValue(z.TasksSchemaProperties.IsShellCommand, {
								resource: Ie.uri,
							}) &&
								(await this.ab.updateValue(
									z.TasksSchemaProperties.IsShellCommand,
									void 0,
									{ resource: Ie.uri },
								)),
							this.ab.getValue(z.TasksSchemaProperties.SuppressTaskName, {
								resource: Ie.uri,
							}) &&
								(await this.ab.updateValue(
									z.TasksSchemaProperties.SuppressTaskName,
									void 0,
									{ resource: Ie.uri },
								));
					}
					this.Tb(),
						this.vb.prompt(
							c.default.Warning,
							Ee.length === 1 ? o.localize(9626, null) : o.localize(9627, null),
							[
								{
									label:
										Ee.length === 1
											? o.localize(9628, null)
											: o.localize(9629, null),
									run: async () => {
										for (const Ie of Ee)
											await this.gb.openEditor({
												original: { resource: Ie[0] },
												modified: { resource: Ie[1] },
											});
									},
								},
							],
						);
				}
			};
			(e.$jXc = Ke),
				(e.$jXc =
					Ke =
					be =
						Ne(
							[
								j(0, b.$gj),
								j(1, l.$aM),
								j(2, R.$o8),
								j(3, fe.$6Sb),
								j(4, pe.$HMb),
								j(5, f.$ek),
								j(6, A.$IY),
								j(7, s.$ll),
								j(8, D.$Vi),
								j(9, v.$km),
								j(10, O.$kZ),
								j(11, L.$QO),
								j(12, I.$q2),
								j(13, G.$DJ),
								j(14, N.$zeb),
								j(15, B.$iIb),
								j(16, B.$lIb),
								j(17, $.$lq),
								j(18, y.$8N),
								j(19, k.$7rb),
								j(20, T.$GO),
								j(21, P.$4N),
								j(22, K.$6j),
								j(23, ye.$r8),
								j(24, U.$reb),
								j(25, me.$I8),
								j(26, ee.$MO),
								j(27, ve.$7Z),
								j(28, ae.$K1),
								j(29, re.$qO),
								j(30, re.$pO),
								j(31, Q.$ik),
								j(32, se.$iP),
								j(33, ue.$n6),
								j(34, ge.$$m),
								j(35, te.$Li),
							],
							Ke,
						));
		},
	);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	define(
		de[3839],
		he([
			1, 0, 4, 3, 30, 52, 11, 570, 84, 250, 166, 297, 424, 419, 55, 3328, 43,
			27, 3326, 3327, 1907, 261, 81, 100, 348, 3330, 8, 699, 1017, 28, 15,
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
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$mXc = e.$lXc = void 0),
				(t = mt(t)),
				(r = mt(r)),
				(f = xi(f)),
				(b = mt(b));
			const D = w.$Io.as(n.Extensions.Workbench);
			D.registerWorkbenchContribution(g.$YWc, E.LifecyclePhase.Eventually),
				(0, C.$4X)(g.$ZWc),
				C.$ZX.appendMenuItem(C.$XX.CommandPalette, {
					command: { id: g.$ZWc.ID, title: g.$ZWc.LABEL, category: h.$b4 },
					when: c.$Ypc,
				});
			let M = class extends i.$1c {
				constructor(H, q, V) {
					super(),
						(this.c = H),
						(this.f = q),
						(this.g = V),
						(this.b = 0),
						this.h();
				}
				h() {
					let H, q;
					this.D(
						this.c.onDidStateChange((V) => {
							if ((V.kind === h.TaskEventKind.Changed && this.j(), !this.m(V)))
								switch (V.kind) {
									case h.TaskEventKind.Active:
										this.b++,
											this.b === 1 &&
												(H || ({ promise: H, resolve: q } = (0, L.$Fh)()));
										break;
									case h.TaskEventKind.Inactive:
										this.b > 0 && (this.b--, this.b === 0 && H && q && q());
										break;
									case h.TaskEventKind.Terminated:
										this.b !== 0 && ((this.b = 0), H && q && q());
										break;
								}
							H &&
								V.kind === h.TaskEventKind.Active &&
								this.b === 1 &&
								this.g
									.withProgress(
										{
											location: m.ProgressLocation.Window,
											command: "workbench.action.tasks.showTasks",
										},
										(G) => (G.report({ message: t.localize(9634, null) }), H),
									)
									.then(() => {
										H = void 0;
									});
						}),
					);
				}
				async j() {
					const H = await this.c.getActiveTasks();
					if (H.length === 0) this.a && (this.a.dispose(), (this.a = void 0));
					else {
						const q = {
							name: t.localize(9635, null),
							text: `$(tools) ${H.length}`,
							ariaLabel: t.localize(9636, null, H.length),
							tooltip: t.localize(9637, null),
							command: "workbench.action.tasks.showTasks",
						};
						this.a
							? this.a.update(q)
							: (this.a = this.f.addEntry(
									q,
									"status.runningTasks",
									u.StatusbarAlignment.LEFT,
									49,
								));
					}
				}
				m(H) {
					return !this.c.inTerminal() || H.kind === h.TaskEventKind.Changed
						? !1
						: ((0, k.$lg)(H.group) ? H.group : H.group?._id) !==
								h.TaskGroup.Build._id
							? !0
							: H.__task.configurationProperties.problemMatchers === void 0 ||
								H.__task.configurationProperties.problemMatchers.length === 0;
				}
			};
			(e.$lXc = M),
				(e.$lXc = M = Ne([j(0, c.$Zpc), j(1, u.$d6b), j(2, m.$8N)], M)),
				D.registerWorkbenchContribution(M, E.LifecyclePhase.Restored),
				C.$ZX.appendMenuItem(C.$XX.MenubarTerminalMenu, {
					group: P.TerminalMenuBarGroup.Run,
					command: {
						id: "workbench.action.tasks.runTask",
						title: t.localize(9638, null),
					},
					order: 1,
					when: c.$Ypc,
				}),
				C.$ZX.appendMenuItem(C.$XX.MenubarTerminalMenu, {
					group: P.TerminalMenuBarGroup.Run,
					command: {
						id: "workbench.action.tasks.build",
						title: t.localize(9639, null),
					},
					order: 2,
					when: c.$Ypc,
				}),
				C.$ZX.appendMenuItem(C.$XX.MenubarTerminalMenu, {
					group: P.TerminalMenuBarGroup.Manage,
					command: {
						precondition: h.$a4,
						id: "workbench.action.tasks.showTasks",
						title: t.localize(9640, null),
					},
					order: 1,
					when: c.$Ypc,
				}),
				C.$ZX.appendMenuItem(C.$XX.MenubarTerminalMenu, {
					group: P.TerminalMenuBarGroup.Manage,
					command: {
						precondition: h.$a4,
						id: "workbench.action.tasks.restartTask",
						title: t.localize(9641, null),
					},
					order: 2,
					when: c.$Ypc,
				}),
				C.$ZX.appendMenuItem(C.$XX.MenubarTerminalMenu, {
					group: P.TerminalMenuBarGroup.Manage,
					command: {
						precondition: h.$a4,
						id: "workbench.action.tasks.terminate",
						title: t.localize(9642, null),
					},
					order: 3,
					when: c.$Ypc,
				}),
				C.$ZX.appendMenuItem(C.$XX.MenubarTerminalMenu, {
					group: P.TerminalMenuBarGroup.Configure,
					command: {
						id: "workbench.action.tasks.configureTaskRunner",
						title: t.localize(9643, null),
					},
					order: 1,
					when: c.$Ypc,
				}),
				C.$ZX.appendMenuItem(C.$XX.MenubarTerminalMenu, {
					group: P.TerminalMenuBarGroup.Configure,
					command: {
						id: "workbench.action.tasks.configureDefaultBuildTask",
						title: t.localize(9644, null),
					},
					order: 2,
					when: c.$Ypc,
				}),
				C.$ZX.appendMenuItem(C.$XX.CommandPalette, {
					command: {
						id: "workbench.action.tasks.openWorkspaceFileTasks",
						title: t.localize2(9669, "Open Workspace Tasks"),
						category: h.$b4,
					},
					when: I.$Kj.and($.$wPb.isEqualTo("workspace"), c.$Ypc),
				}),
				C.$ZX.appendMenuItem(C.$XX.CommandPalette, {
					command: {
						id: s.ConfigureTaskAction.ID,
						title: s.ConfigureTaskAction.TEXT,
						category: h.$b4,
					},
					when: c.$Ypc,
				}),
				C.$ZX.appendMenuItem(C.$XX.CommandPalette, {
					command: {
						id: "workbench.action.tasks.showLog",
						title: t.localize2(9670, "Show Task Log"),
						category: h.$b4,
					},
					when: c.$Ypc,
				}),
				C.$ZX.appendMenuItem(C.$XX.CommandPalette, {
					command: {
						id: "workbench.action.tasks.runTask",
						title: t.localize2(9671, "Run Task"),
						category: h.$b4,
					},
				}),
				C.$ZX.appendMenuItem(C.$XX.CommandPalette, {
					command: {
						id: "workbench.action.tasks.reRunTask",
						title: t.localize2(9672, "Rerun Last Task"),
						category: h.$b4,
					},
					when: c.$Ypc,
				}),
				C.$ZX.appendMenuItem(C.$XX.CommandPalette, {
					command: {
						id: "workbench.action.tasks.restartTask",
						title: t.localize2(9673, "Restart Running Task"),
						category: h.$b4,
					},
					when: c.$Ypc,
				}),
				C.$ZX.appendMenuItem(C.$XX.CommandPalette, {
					command: {
						id: "workbench.action.tasks.showTasks",
						title: t.localize2(9674, "Show Running Tasks"),
						category: h.$b4,
					},
					when: c.$Ypc,
				}),
				C.$ZX.appendMenuItem(C.$XX.CommandPalette, {
					command: {
						id: "workbench.action.tasks.terminate",
						title: t.localize2(9675, "Terminate Task"),
						category: h.$b4,
					},
					when: c.$Ypc,
				}),
				C.$ZX.appendMenuItem(C.$XX.CommandPalette, {
					command: {
						id: "workbench.action.tasks.build",
						title: t.localize2(9676, "Run Build Task"),
						category: h.$b4,
					},
					when: c.$Ypc,
				}),
				C.$ZX.appendMenuItem(C.$XX.CommandPalette, {
					command: {
						id: "workbench.action.tasks.test",
						title: t.localize2(9677, "Run Test Task"),
						category: h.$b4,
					},
					when: c.$Ypc,
				}),
				C.$ZX.appendMenuItem(C.$XX.CommandPalette, {
					command: {
						id: "workbench.action.tasks.configureDefaultBuildTask",
						title: t.localize2(9678, "Configure Default Build Task"),
						category: h.$b4,
					},
					when: c.$Ypc,
				}),
				C.$ZX.appendMenuItem(C.$XX.CommandPalette, {
					command: {
						id: "workbench.action.tasks.configureDefaultTestTask",
						title: t.localize2(9679, "Configure Default Test Task"),
						category: h.$b4,
					},
					when: c.$Ypc,
				}),
				C.$ZX.appendMenuItem(C.$XX.CommandPalette, {
					command: {
						id: "workbench.action.tasks.openUserTasks",
						title: t.localize2(9680, "Open User Tasks"),
						category: h.$b4,
					},
					when: c.$Ypc,
				});
			class N extends i.$1c {
				constructor() {
					super(), this.a();
				}
				a() {
					const H = "workbench.action.tasks.openUserTasks",
						q = t.localize(9645, null);
					this.D(
						C.$ZX.appendMenuItem(C.$XX.GlobalActivity, {
							command: { id: H, title: q },
							when: c.$Ypc,
							group: "2_configuration",
							order: 6,
						}),
					),
						this.D(
							C.$ZX.appendMenuItem(C.$XX.MenubarPreferencesMenu, {
								command: { id: H, title: q },
								when: c.$Ypc,
								group: "2_configuration",
								order: 6,
							}),
						);
				}
			}
			D.registerWorkbenchContribution(N, E.LifecyclePhase.Restored),
				p.$TX.registerKeybindingRule({
					id: "workbench.action.tasks.build",
					weight: p.KeybindingWeight.WorkbenchContrib,
					when: c.$Vpc,
					primary: o.KeyMod.CtrlCmd | o.KeyMod.Shift | o.KeyCode.KeyB,
				}),
				w.$Io
					.as(a.$p8.OutputChannels)
					.registerChannel({
						id: s.$jXc.OutputChannelId,
						label: s.$jXc.OutputChannelLabel,
						log: !1,
					}),
				w.$Io
					.as(v.$1r.Quickaccess)
					.registerQuickAccessProvider({
						ctor: S.$kXc,
						prefix: S.$kXc.PREFIX,
						contextKey: "inTasksPicker",
						placeholder: t.localize(9646, null),
						helpEntries: [
							{ description: t.localize(9647, null), commandCenterOrder: 60 },
						],
					});
			const B = {
				id: l.$FZ,
				description: "Task definition file",
				type: "object",
				allowTrailingCommas: !0,
				allowComments: !0,
				default: {
					version: "2.0.0",
					tasks: [
						{
							label: "My Task",
							command: "echo hello",
							type: "shell",
							args: [],
							problemMatcher: ["$tsc"],
							presentation: { reveal: "always" },
							group: "build",
						},
					],
				},
			};
			(B.definitions = { ...f.default.definitions, ...b.default.definitions }),
				(B.oneOf = [...(b.default.oneOf || []), ...(f.default.oneOf || [])]);
			const U = w.$Io.as(r.$Jo.JSONContribution);
			U.registerSchema(l.$FZ, B);
			class z extends i.$1c {
				static {
					this.ID = "taskRegistryContribution";
				}
				constructor() {
					super(),
						this.D(
							d.$03.onMatcherChanged(() => {
								(0, b.$2Wc)(), U.notifySchemaChanged(l.$FZ);
							}),
						),
						this.D(
							T.$$3.onDefinitionsChanged(() => {
								(0, b.$1Wc)(), U.notifySchemaChanged(l.$FZ);
							}),
						);
				}
			}
			(e.$mXc = z),
				(0, n.$s6)(z.ID, z, n.WorkbenchPhase.AfterRestored),
				w.$Io.as(y.$No.Configuration).registerConfiguration({
					id: "task",
					order: 100,
					title: t.localize(9648, null),
					type: "object",
					properties: {
						[h.TaskSettingId.ProblemMatchersNeverPrompt]: {
							markdownDescription: t.localize(9649, null),
							oneOf: [
								{
									type: "boolean",
									markdownDescription: t.localize(9650, null),
								},
								{
									type: "object",
									patternProperties: { ".*": { type: "boolean" } },
									markdownDescription: t.localize(9651, null),
									default: { shell: !0 },
								},
							],
							default: !1,
						},
						[h.TaskSettingId.AutoDetect]: {
							markdownDescription: t.localize(9652, null),
							type: "string",
							enum: ["on", "off"],
							default: "on",
						},
						[h.TaskSettingId.SlowProviderWarning]: {
							markdownDescription: t.localize(9653, null),
							oneOf: [
								{
									type: "boolean",
									markdownDescription: t.localize(9654, null),
								},
								{
									type: "array",
									items: {
										type: "string",
										markdownDescription: t.localize(9655, null),
									},
								},
							],
							default: !0,
						},
						[h.TaskSettingId.QuickOpenHistory]: {
							markdownDescription: t.localize(9656, null),
							type: "number",
							default: 30,
							minimum: 0,
							maximum: 30,
						},
						[h.TaskSettingId.QuickOpenDetail]: {
							markdownDescription: t.localize(9657, null),
							type: "boolean",
							default: !0,
						},
						[h.TaskSettingId.QuickOpenSkip]: {
							type: "boolean",
							description: t.localize(9658, null),
							default: !1,
						},
						[h.TaskSettingId.QuickOpenShowAll]: {
							type: "boolean",
							description: t.localize(9659, null),
							default: !1,
						},
						[h.TaskSettingId.AllowAutomaticTasks]: {
							type: "string",
							enum: ["on", "off"],
							enumDescriptions: [
								t.localize(9660, null),
								t.localize(9661, null),
							],
							description: t.localize(9662, null),
							default: "on",
							restricted: !0,
						},
						[h.TaskSettingId.Reconnection]: {
							type: "boolean",
							description: t.localize(9663, null),
							default: !0,
						},
						[h.TaskSettingId.SaveBeforeRun]: {
							markdownDescription: t.localize(9664, null),
							type: "string",
							enum: ["always", "never", "prompt"],
							enumDescriptions: [
								t.localize(9665, null),
								t.localize(9666, null),
								t.localize(9667, null),
							],
							default: "always",
						},
						[h.TaskSettingId.VerboseLogging]: {
							type: "boolean",
							description: t.localize(9668, null),
							default: !1,
						},
					},
				});
		},
	);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	define(
		de[3840],
		he([
			1, 0, 4, 464, 25, 424, 1907, 419, 20, 1817, 57, 919, 67, 42, 31, 10, 8,
			22, 34, 90, 40, 41, 84, 63, 21, 32, 60, 89, 297, 107, 358, 18, 78, 53, 52,
			165, 131, 85, 174, 145, 142, 35, 5, 143, 3508, 184,
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
			B,
			U,
			z,
			F,
			x,
			H,
			q,
			V,
			G,
		) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Egd = void 0),
				(t = mt(t)),
				(i = mt(i)),
				(V = xi(V));
			let K = class extends C.$jXc {
				constructor(
					W,
					X,
					Y,
					ie,
					ne,
					ee,
					_,
					te,
					Q,
					Z,
					se,
					re,
					le,
					oe,
					ae,
					pe,
					$e,
					ye,
					ue,
					fe,
					me,
					ve,
					ge,
					be,
					Ce,
					Le,
					Fe,
					Oe,
					xe,
					He,
					Ke,
					Je,
					Te,
					Ee,
					Ie,
					Be,
					Se,
				) {
					super(
						W,
						X,
						Y,
						ie,
						ne,
						ee,
						_,
						te,
						Q,
						Z,
						se,
						le,
						oe,
						ae,
						pe,
						$e,
						ye,
						ue,
						fe,
						me,
						ve,
						ge,
						be,
						Ce,
						Le,
						Fe,
						Oe,
						xe,
						He,
						Ke,
						Je,
						Te,
						Ee,
						re,
						Be,
						Ie,
					),
						V.default.log(this.ub, "checking for unusual line terminators"),
						this.D(
							re.onBeforeShutdown((ke) =>
								ke.veto(this.beforeShutdown(), "veto.tasks"),
							),
						);
				}
				Lc() {
					if (this.I) return this.I;
					const W = this.Kc();
					return (
						(this.I = W),
						(this.J = [
							this.I.onDidStateChange((X) => {
								this.O.set(this.I.isActiveSync()), this.Q.fire(X);
							}),
						]),
						this.I
					);
				}
				bd(W) {
					const { config: X, hasParseErrors: Y } = this.fd(W);
					return Y
						? Promise.resolve({
								workspaceFolder: W,
								hasErrors: !0,
								config: void 0,
							})
						: X
							? Promise.resolve({
									workspaceFolder: W,
									config: X,
									hasErrors: !1,
								})
							: Promise.resolve({
									workspaceFolder: W,
									hasErrors: !0,
									config: void 0,
								});
				}
				Zb(W) {
					const X = W && W.version ? W.version : void 0,
						Y = this.Ob;
					return (
						X === void 0 ||
						(i.satisfies("0.1.0", X) && Y === E.ExecutionEngine.Process) ||
						(i.satisfies("2.0.0", X) && Y === E.ExecutionEngine.Terminal)
					);
				}
				beforeShutdown() {
					if (!this.I || !this.I.isActiveSync() || this.I instanceof r.$dXc)
						return !1;
					let W;
					return (
						this.I.canAutoTerminate()
							? (W = Promise.resolve({ confirmed: !0 }))
							: (W = this.ub.confirm({
									message: t.localize(9957, null),
									primaryButton: t.localize(9958, null),
								})),
						W.then((X) =>
							X.confirmed
								? this.I.terminateAll().then(
										(Y) => {
											let ie = !0,
												ne;
											for (const ee of Y)
												(ie = ie && ee.success),
													ne === void 0 && ee.code !== void 0 && (ne = ee.code);
											return ie
												? ((this.I = void 0), this.Vb(), !1)
												: ne && ne === a.TerminateResponseCode.ProcessNotFound
													? this.ub
															.confirm({
																message: t.localize(9959, null),
																primaryButton: t.localize(9960, null),
																type: "info",
															})
															.then((ee) => !ee.confirmed)
													: !0;
										},
										(Y) => !0,
									)
								: !0,
						)
					);
				}
			};
			(e.$Egd = K),
				(e.$Egd = K =
					Ne(
						[
							j(0, g.$gj),
							j(1, b.$aM),
							j(2, P.$o8),
							j(3, F.$6Sb),
							j(4, T.$HMb),
							j(5, n.$ek),
							j(6, D.$IY),
							j(7, o.$ll),
							j(8, w.$Vi),
							j(9, S.$km),
							j(10, B.$kZ),
							j(11, A.$n6),
							j(12, h.$QO),
							j(13, N.$q2),
							j(14, $.$DJ),
							j(15, L.$zeb),
							j(16, k.$iIb),
							j(17, k.$lIb),
							j(18, v.$lq),
							j(19, y.$8N),
							j(20, l.$7rb),
							j(21, u.$GO),
							j(22, s.$4N),
							j(23, p.$6j),
							j(24, M.$r8),
							j(25, z.$reb),
							j(26, R.$I8),
							j(27, c.$MO),
							j(28, O.$7Z),
							j(29, I.$K1),
							j(30, U.$qO),
							j(31, U.$pO),
							j(32, f.$ik),
							j(33, x.$iP),
							j(34, H.$Li),
							j(35, q.$$m),
							j(36, G.$Owb),
						],
						K,
					)),
				(0, m.$lK)(d.$Zpc, K, m.InstantiationType.Delayed);
		},
	),
		define(
			de[630],
			he([1, 0, 33, 103, 3, 77, 10, 8, 5, 326, 443, 353, 381, 380, 89]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$UJc = e.$TJc = void 0),
					(e.$TJc = (0, m.$Mi)("testCoverageService"));
				let g = class extends w.$1c {
					constructor(o, f, b, s) {
						super(),
							(this.b = s),
							(this.a = this.D(new w.$2c())),
							(this.selected = (0, E.observableValue)("testCoverage", void 0)),
							(this.filterToTest = (0, E.observableValue)(
								"filterToTest",
								void 0,
							)),
							(this.showInline = (0, E.observableValue)("inlineCoverage", !1));
						const l = (0, r.$Mwb)(
							u.TestingConfigKeys.CoverageToolbarEnabled,
							!0,
							b,
						);
						this.D(
							(0, r.$Nwb)(c.TestingContextKeys.coverageToolbarEnabled, o, (y) =>
								l.read(y),
							),
						),
							this.D(
								(0, r.$Nwb)(
									c.TestingContextKeys.inlineCoverageEnabled,
									o,
									(y) => this.showInline.read(y),
								),
							),
							this.D(
								(0, r.$Nwb)(
									c.TestingContextKeys.isTestCoverageOpen,
									o,
									(y) => !!this.selected.read(y),
								),
							),
							this.D(
								(0, r.$Nwb)(
									c.TestingContextKeys.hasPerTestCoverage,
									o,
									(y) =>
										!i.Iterable.isEmpty(this.selected.read(y)?.allPerTestIDs()),
								),
							),
							this.D(
								(0, r.$Nwb)(
									c.TestingContextKeys.isCoverageFilteredToTest,
									o,
									(y) => !!this.filterToTest.read(y),
								),
							),
							this.D(
								f.onResultsChanged((y) => {
									if ("completed" in y) {
										const $ = y.completed.tasks.find((v) => v.coverage.get());
										$ ? this.openCoverage($, !1) : this.closeCoverage();
									} else if ("removed" in y && this.selected.get()) {
										const $ = this.selected.get()?.fromTaskId;
										y.removed.some((v) => v.tasks.some((S) => S.id === $)) &&
											this.closeCoverage();
									}
								}),
							);
					}
					async openCoverage(o, f = !0) {
						this.a.value?.cancel();
						const b = (this.a.value = new t.$Ce()),
							s = o.coverage.get();
						s &&
							((0, E.transaction)((l) => {
								this.filterToTest.set(void 0, l), this.selected.set(s, l);
							}),
							f &&
								!b.token.isCancellationRequested &&
								this.b.openView(a.Testing.CoverageViewId, !0));
					}
					closeCoverage() {
						this.selected.set(void 0, void 0);
					}
				};
				(e.$UJc = g),
					(e.$UJc = g =
						Ne([j(0, d.$6j), j(1, h.$Kqc), j(2, C.$gj), j(3, n.$HMb)], g));
			},
		),
		define(
			de[1335],
			he([
				1, 0, 7, 95, 94, 149, 3, 77, 28, 4, 10, 72, 30, 1732, 1266, 443, 630,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				var o;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$WJc = e.$VJc = void 0),
					(n = mt(n));
				let f = class extends C.$1c {
					get visible() {
						return !!this.a;
					}
					constructor(P, k, L) {
						super(),
							(this.j = P),
							(this.m = k),
							(this.n = L),
							(this.b = new E.$Y(() => {
								if (this.j.compact) {
									const D = (0, t.h)(".test-coverage-bars.compact", [
										(0, t.h)(".tpc@overall"),
										(0, t.h)(".bar@tpcBar"),
									]);
									return this.q(D.tpcBar, S), D;
								} else {
									const D = (0, t.h)(".test-coverage-bars", [
										(0, t.h)(".tpc@overall"),
										(0, t.h)(".bar@statement"),
										(0, t.h)(".bar@function"),
										(0, t.h)(".bar@branch"),
									]);
									return (
										this.q(D.statement, y),
										this.q(D.function, $),
										this.q(D.branch, v),
										D
									);
								}
							})),
							(this.f = this.D(new C.$Zc())),
							(this.g = []);
					}
					q(P, k) {
						this.D(
							this.n.setupManagedHover(
								(0, i.$cib)("element"),
								P,
								() => this.a && k(this.a),
							),
						);
					}
					setCoverageInfo(P) {
						const k = this.f;
						if (!P) {
							this.a &&
								((this.a = void 0), this.g.forEach((L) => L.hide()), k.clear());
							return;
						}
						if (!this.a) {
							const L = this.b.value.root;
							k.add((0, C.$Yc)(() => L.remove())),
								this.j.container.appendChild(L),
								k.add(
									this.m.onDidChangeConfiguration((D) => {
										this.a &&
											(D.affectsConfiguration(
												g.TestingConfigKeys.CoveragePercent,
											) ||
												D.affectsConfiguration(
													g.TestingConfigKeys.CoverageBarThresholds,
												)) &&
											this.r(this.a);
									}),
								);
						}
						(this.a = P), this.r(P);
					}
					r(P) {
						const k = this.b.value,
							L = this.j.compact ? 0 : 2,
							D = (0, g.$RJc)(
								this.m,
								g.TestingConfigKeys.CoverageBarThresholds,
							),
							M = n.$1Jc(
								P,
								(0, g.$RJc)(this.m, g.TestingConfigKeys.CoveragePercent),
							);
						this.j.overall !== !1
							? (k.overall.textContent = n.$ZJc(M, L))
							: (k.overall.style.display = "none"),
							"tpcBar" in k
								? s(k.tpcBar, M, !1, D)
								: (s(
										k.statement,
										n.$XJc(P.statement),
										P.statement.total === 0,
										D,
									),
									s(
										k.function,
										P.declaration && n.$XJc(P.declaration),
										P.declaration?.total === 0,
										D,
									),
									s(
										k.branch,
										P.branch && n.$XJc(P.branch),
										P.branch?.total === 0,
										D,
									));
					}
				};
				(e.$VJc = f), (e.$VJc = f = Ne([j(1, u.$gj), j(2, a.$Uyb)], f));
				const b = 16,
					s = (T, P, k, L) => {
						if (P === void 0) {
							T.style.display = "none";
							return;
						}
						if (
							((T.style.display = "block"),
							(T.style.width = `${b}px`),
							T.style.setProperty(
								"--test-bar-width",
								`${Math.floor(P * 16)}px`,
							),
							k)
						) {
							(T.style.color = "currentColor"), (T.style.opacity = "0.5");
							return;
						}
						(T.style.color = n.$YJc(P, L)), (T.style.opacity = "1");
					},
					l = new Intl.NumberFormat(),
					y = (T) =>
						(0, r.localize)(
							10661,
							null,
							l.format(T.statement.covered),
							l.format(T.statement.total),
							n.$ZJc(n.$XJc(T.statement)),
						),
					$ = (T) =>
						T.declaration &&
						(0, r.localize)(
							10662,
							null,
							l.format(T.declaration.covered),
							l.format(T.declaration.total),
							n.$ZJc(n.$XJc(T.declaration)),
						),
					v = (T) =>
						T.branch &&
						(0, r.localize)(
							10663,
							null,
							l.format(T.branch.covered),
							l.format(T.branch.total),
							n.$ZJc(n.$XJc(T.branch)),
						),
					S = (T) => {
						const P = [y(T), $(T), v(T)].filter(m.$tg).join(`

`);
						return {
							markdown: new w.$cl().appendText(P),
							markdownNotSupportedFallback: P,
						};
					};
				let I = class extends f {
					static {
						o = this;
					}
					static {
						this.t = !1;
					}
					static register() {
						this.t ||
							((this.t = !0),
							h.$Io.as(c.ExplorerExtensions.FileContributionRegistry).register({
								create(P, k) {
									return P.createInstance(o, { compact: !0, container: k });
								},
							}));
					}
					constructor(P, k, L, D) {
						super(P, k, L), (this.s = (0, d.observableValue)(this, void 0));
						const M = (0, g.$SJc)(
							k,
							g.TestingConfigKeys.ShowCoverageInExplorer,
						);
						this.D(
							(0, d.autorun)(async (N) => {
								let A;
								const R = D.selected.read(N);
								if (R && M.read(N)) {
									const O = this.s.read(N);
									O && (A = R.getComputedForUri(O));
								}
								this.setCoverageInfo(A);
							}),
						);
					}
					setResource(P, k) {
						this.s.set(P, k);
					}
					setCoverageInfo(P) {
						super.setCoverageInfo(P),
							this.j.container?.classList.toggle(
								"explorer-item-with-test-coverage",
								this.visible,
							);
					}
				};
				(e.$WJc = I),
					(e.$WJc = I = o = Ne([j(1, u.$gj), j(2, a.$Uyb), j(3, p.$TJc)], I));
			},
		),
		define(
			de[3841],
			he([
				1, 0, 7, 198, 105, 182, 50, 214, 229, 33, 14, 94, 27, 149, 3, 77, 26, 9,
				56, 65, 38, 48, 17, 64, 4, 99, 11, 31, 10, 8, 49, 5, 39, 43, 34, 326,
				63, 1266, 470, 1335, 443, 353, 1e3, 630, 259, 379, 185, 380,
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
				B,
				U,
				z,
				F,
				x,
				H,
				q,
				V,
				G,
				K,
				J,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$RKc = e.$QKc = void 0),
					(t = mt(t)),
					(B = mt(B));
				const W = "coverage-deco-hit",
					X = "coverage-deco-miss",
					Y = (0, v.localize)(10610, null),
					ie = "testing.toggleInlineCoverage",
					ne = 4;
				let ee = class extends n.$1c {
					constructor($e, ye, ue, fe, me) {
						super(),
							(this.t = $e),
							(this.u = ue),
							(this.w = me),
							(this.g = this.D(new n.$Zc())),
							(this.j = this.D(new n.$Zc())),
							(this.n = new Map()),
							(this.m = new c.$Y(() => this.D(ye.createInstance(le, this.t))));
						const ve = (0, g.observableFromEvent)(
								this,
								$e.onDidChangeModel,
								() => $e.getModel(),
							),
							ge = (0, g.observableFromEvent)(
								this,
								$e.onDidChangeConfiguration,
								(Le) => Le,
							),
							be = (0, g.derived)((Le) => {
								const Fe = ue.selected.read(Le);
								if (!Fe) return;
								const Oe = ve.read(Le);
								if (!Oe) return;
								const xe = Fe.getUri(Oe.uri);
								if (xe)
									return (
										Fe.didAddCoverage.read(Le),
										{ file: xe, testId: ue.filterToTest.read(Le) }
									);
							});
						this.D(
							(0, g.autorun)((Le) => {
								const Fe = be.read(Le);
								Fe
									? this.F(
											$e.getModel(),
											Fe.file,
											Fe.testId,
											ue.showInline.read(Le),
										)
									: this.G();
							}),
						);
						const Ce = (0, R.$Mwb)(
							F.TestingConfigKeys.CoverageToolbarEnabled,
							!0,
							fe,
						);
						this.D(
							(0, g.autorun)((Le) => {
								const Fe = be.read(Le);
								Fe && Ce.read(Le)
									? this.m.value.setCoverage(Fe.file, Fe.testId)
									: this.m.rawValue?.clearCoverage();
							}),
						),
							this.D(
								(0, g.autorun)((Le) => {
									be.read(Le) &&
										ge.read(Le)?.hasChanged(s.EditorOption.lineHeight) !== !1 &&
										this.y();
								}),
							),
							this.D(
								$e.onMouseMove((Le) => {
									const Fe = $e.getModel();
									Le.target.type === f.MouseTargetType.GUTTER_LINE_NUMBERS && Fe
										? this.C($e.getModel(), Le.target.position.lineNumber)
										: ue.showInline.get() &&
												Le.target.type === f.MouseTargetType.CONTENT_TEXT &&
												Fe
											? this.z(Fe, Le.target.position)
											: this.j.clear();
								}),
							),
							this.D(
								$e.onWillChangeModel(() => {
									const Le = $e.getModel();
									if (!(!this.s || !Le))
										for (const Fe of Le.getAllDecorations()) {
											const Oe = this.n.get(Fe.id);
											Oe && (Oe.detail.range = Fe.range);
										}
								}),
							);
					}
					y() {
						const $e = this.t.getOption(s.EditorOption.lineHeight),
							{ style: ye } = this.t.getContainerDomNode();
						ye.setProperty("--vscode-testing-coverage-lineHeight", `${$e}px`);
					}
					z($e, ye) {
						const ue = $e.getDecorationsInRange(y.$iL.fromPositions(ye)),
							fe = (0, d.$vb)(ue, ({ id: me }) =>
								this.n.has(me) ? { id: me, deco: this.n.get(me) } : void 0,
							);
						fe !== this.q &&
							(this.j.clear(),
							(this.q = fe),
							fe &&
								($e.changeDecorations((me) => {
									me.changeDecorationOptions(fe.id, {
										...fe.deco.options,
										className: `${fe.deco.options.className} coverage-deco-hovered`,
									});
								}),
								this.j.add(
									(0, n.$Yc)(() => {
										(this.q = void 0),
											$e.changeDecorations((me) => {
												me.changeDecorationOptions(fe.id, fe.deco.options);
											});
									}),
								)));
					}
					C($e, ye) {
						if (ye === this.q || !this.s) return;
						this.j.clear(), (this.q = ye);
						const ue = [{ line: ye, dir: 0 }],
							fe = new Set(),
							me = this.t.getVisibleRanges();
						if (!this.u.showInline.get()) {
							for (let ve = 0; ve < ue.length; ve++) {
								const { line: ge, dir: be } = ue[ve];
								if (
									!me.some(
										(Le) => Le.startLineNumber <= ge && Le.endLineNumber >= ge,
									)
								)
									continue;
								let Ce = !1;
								for (const Le of $e.getLineDecorations(ge))
									this.n.has(Le.id) && (fe.add(Le.id), (Ce = !0));
								Ce &&
									(be <= 0 && ue.push({ line: ge - 1, dir: -1 }),
									be >= 0 && ue.push({ line: ge + 1, dir: 1 }));
							}
							$e.changeDecorations((ve) => {
								for (const ge of fe) {
									const { applyHoverOptions: be, options: Ce } = this.n.get(ge),
										Le = { ...Ce };
									be(Le), ve.changeDecorationOptions(ge, Le);
								}
							});
						}
						this.j.add(
							this.t.onMouseLeave(() => {
								this.j.clear();
							}),
						),
							this.j.add(
								(0, n.$Yc)(() => {
									(this.q = void 0),
										$e.changeDecorations((ve) => {
											for (const ge of fe) {
												const be = this.n.get(ge);
												be && ve.changeDecorationOptions(ge, be.options);
											}
										});
								}),
							);
					}
					async F($e, ye, ue, fe) {
						const me = (this.s = await this.H(ye, ue, $e));
						if (!me) return this.G();
						this.g.clear(),
							$e.changeDecorations((ve) => {
								for (const ge of me.ranges) {
									const {
										metadata: { detail: be, description: Ce },
										range: Le,
										primary: Fe,
									} = ge;
									if (be.type === K.DetailType.Branch) {
										const Oe = be.detail.branches[be.branch].count,
											xe = Oe ? W : X,
											He =
												!Oe &&
												Le.isEmpty() &&
												be.detail.branches.some((Te) => Te.count),
											Ke = {
												showIfCollapsed: He,
												description: "coverage-gutter",
												lineNumberClassName: `coverage-deco-gutter ${xe}`,
											},
											Je = (Te) => {
												(Te.hoverMessage = Ce),
													He
														? (Te.after = {
																content: "\xA0".repeat(ne),
																inlineClassName: `coverage-deco-branch-miss-indicator ${p.ThemeIcon.asClassName(U.$OKc)}`,
																inlineClassNameAffectsLetterSpacing: !0,
																cursorStops: $.InjectedTextCursorStops.None,
															})
														: ((Te.className = `coverage-deco-inline ${xe}`),
															Fe &&
																typeof Oe == "number" &&
																(Te.before = _(Oe)));
											};
										fe && Je(Ke),
											this.n.set(ve.addDecoration(Le, Ke), {
												options: Ke,
												applyHoverOptions: Je,
												detail: ge,
											});
									} else if (be.type === K.DetailType.Statement) {
										const Oe = be.count ? W : X,
											xe = {
												showIfCollapsed: !1,
												description: "coverage-inline",
												lineNumberClassName: `coverage-deco-gutter ${Oe}`,
											},
											He = (Ke) => {
												(Ke.className = `coverage-deco-inline ${Oe}`),
													(Ke.hoverMessage = Ce),
													Fe &&
														typeof be.count == "number" &&
														(Ke.before = _(be.count));
											};
										fe && He(xe),
											this.n.set(ve.addDecoration(Le, xe), {
												options: xe,
												applyHoverOptions: He,
												detail: ge,
											});
									}
								}
							}),
							this.g.add(
								(0, n.$Yc)(() => {
									$e.changeDecorations((ve) => {
										for (const ge of this.n.keys()) ve.removeDecoration(ge);
										this.n.clear();
									});
								}),
							);
					}
					G() {
						this.f?.cancel(), (this.f = void 0), this.g.clear(), this.j.clear();
					}
					async H($e, ye, ue) {
						const fe = (this.f = new r.$Ce());
						this.g.add(this.f);
						try {
							const me = ye
								? await $e.detailsForTest(ye, this.f.token)
								: await $e.details(this.f.token);
							return fe.token.isCancellationRequested ? void 0 : new te(me, ue);
						} catch (me) {
							this.w.error("Error loading coverage details", me);
						}
					}
				};
				(e.$QKc = ee),
					(e.$QKc = ee =
						Ne([j(1, D.$Li), j(2, q.$TJc), j(3, P.$gj), j(4, A.$ik)], ee));
				const _ = (pe) => {
					if (pe !== 0)
						return {
							content: `${pe > 99 ? "99+" : pe}x`,
							cursorStops: $.InjectedTextCursorStops.None,
							inlineClassName: "coverage-deco-inline-count",
							inlineClassNameAffectsLetterSpacing: !0,
						};
				};
				class te {
					constructor($e, ye) {
						(this.details = $e), (this.ranges = []);
						const ue = $e.map((ge) => ({
							range: Z(ge.location),
							primary: !0,
							metadata: { detail: ge, description: this.describe(ge, ye) },
						}));
						for (const {
							range: ge,
							metadata: { detail: be },
						} of ue)
							if (be.type === K.DetailType.Statement && be.branches)
								for (let Ce = 0; Ce < be.branches.length; Ce++) {
									const Le = {
										type: K.DetailType.Branch,
										branch: Ce,
										detail: be,
									};
									ue.push({
										range: Z(
											be.branches[Ce].location ||
												y.$iL.fromPositions(ge.getEndPosition()),
										),
										primary: !0,
										metadata: {
											detail: Le,
											description: this.describe(Le, ye),
										},
									});
								}
						ue.sort(
							(ge, be) =>
								y.$iL.compareRangesUsingStarts(ge.range, be.range) ||
								ge.metadata.detail.type - be.metadata.detail.type,
						);
						const fe = [],
							me = (this.ranges = []),
							ve = () => {
								const ge = fe.pop(),
									be = fe[fe.length - 1];
								be &&
									(be.range = be.range.setStartPosition(
										ge.range.endLineNumber,
										ge.range.endColumn,
									)),
									me.push(ge);
							};
						for (const ge of ue) {
							const be = ge.range.getStartPosition();
							for (; fe[fe.length - 1]?.range.containsPosition(be) === !1; )
								ve();
							if (ge.range.isEmpty()) {
								me.push(ge);
								continue;
							}
							const Ce = fe[fe.length - 1];
							if (Ce) {
								const Le = Ce.primary,
									Fe = Ce.range.setEndPosition(be.lineNumber, be.column);
								(Ce.range = Ce.range.setStartPosition(
									ge.range.endLineNumber,
									ge.range.endColumn,
								)),
									(Ce.primary = !1),
									Ce.range.isEmpty() && fe.pop(),
									me.push({ range: Fe, primary: Le, metadata: Ce.metadata });
							}
							fe.push(ge);
						}
						for (; fe.length; ) ve();
					}
					describe($e, ye) {
						if ($e.type === K.DetailType.Declaration) return Q($e.name, $e);
						if ($e.type === K.DetailType.Statement) {
							const ue = re(
								ye.getValueInRange(Z($e.location)).trim() ||
									"<empty statement>",
							);
							if ($e.branches?.length) {
								const fe = $e.branches.filter((me) => !!me.count).length;
								return new a.$cl().appendMarkdown(
									(0, v.localize)(10611, null, fe, $e.branches.length, ue),
								);
							} else return Q(ue, $e);
						} else if ($e.type === K.DetailType.Branch) {
							const ue = re(
									ye.getValueInRange(Z($e.detail.location)).trim() ||
										"<empty statement>",
								),
								{ count: fe, label: me } = $e.detail.branches[$e.branch],
								ve = me ? se(me) : `#${$e.branch + 1}`;
							return fe
								? fe === !0
									? new a.$cl().appendMarkdown(
											(0, v.localize)(10613, null, ve, ue),
										)
									: new a.$cl().appendMarkdown(
											(0, v.localize)(10614, null, ve, ue, fe),
										)
								: new a.$cl().appendMarkdown(
										(0, v.localize)(10612, null, ve, ue),
									);
						}
						(0, m.$kd)($e);
					}
				}
				e.$RKc = te;
				function Q(pe, $e) {
					return new a.$cl().appendMarkdown(
						$e.count
							? typeof $e.count == "number"
								? (0, v.localize)(10616, null, pe, $e.count)
								: (0, v.localize)(10617, null, pe)
							: (0, v.localize)(10615, null, pe),
					);
				}
				function Z(pe) {
					return pe instanceof l.$hL
						? y.$iL.fromPositions(pe, new l.$hL(pe.lineNumber, 2147483647))
						: pe;
				}
				function se(pe) {
					return "`" + pe.replace(/[\n\r`]/g, "") + "`";
				}
				function re(pe) {
					return pe.length > 50 && (pe = pe.slice(0, 40) + "..."), se(pe);
				}
				let le = class extends n.$1c {
					constructor($e, ye, ue, fe, me, ve, ge, be) {
						super(),
							(this.t = $e),
							(this.u = ye),
							(this.w = ue),
							(this.y = fe),
							(this.z = me),
							(this.C = ve),
							(this.F = ge),
							(this.g = !1),
							(this.j = !1),
							(this.m = this.D(new n.$Zc())),
							(this.q = t.h("div.coverage-summary-widget", [
								t.h("div", [
									t.h("span.bars@bars"),
									t.h("span.toolbar@toolbar"),
								]),
							])),
							(this.s = this.D(
								be.createInstance(z.$VJc, {
									compact: !1,
									overall: !1,
									container: this.q.bars,
								}),
							)),
							(this.n = this.D(
								be.createInstance(w.$eib, this.q.toolbar, {
									orientation: w.ActionsOrientation.HORIZONTAL,
									actionViewItemProvider: (Ce, Le) => {
										const Fe = new ae(void 0, Ce, Le);
										return Ce instanceof oe && (Fe.themeIcon = Ce.icon), Fe;
									},
								}),
							)),
							this.D(
								(0, g.autorun)((Ce) => {
									ge.showInline.read(Ce), this.G();
								}),
							),
							this.D(
								t.$$fb(this.q.root, t.$$gb.CONTEXT_MENU, (Ce) => {
									this.w.showContextMenu({
										menuId: I.$XX.StickyScrollContext,
										getAnchor: () => Ce,
									});
								}),
							);
					}
					getId() {
						return "coverage-summary-widget";
					}
					getDomNode() {
						return this.q.root;
					}
					getPosition() {
						return {
							preference: f.OverlayWidgetPositionPreference.TOP_CENTER,
							stackOridinal: 9,
						};
					}
					clearCoverage() {
						(this.f = void 0), this.s.setCoverageInfo(void 0), this.J();
					}
					setCoverage($e, ye) {
						(this.f = { coverage: $e, testId: ye }),
							this.s.setCoverageInfo($e),
							$e ? (this.G(), this.H()) : this.J();
					}
					G() {
						this.n.clear();
						const $e = this.f;
						if (!$e) return;
						const ye = new oe(
								"toggleInline",
								this.F.showInline.get()
									? (0, v.localize)(10618, null)
									: (0, v.localize)(10619, null),
								U.$MKc,
								void 0,
								() => this.F.showInline.set(!this.F.showInline.get(), void 0),
							),
							ue = this.z.lookupKeybinding(ie);
						if (
							(ue && (ye.tooltip = `${Y} (${ue.getLabel()})`),
							this.n.push(ye),
							$e.testId)
						) {
							const fe = $e.coverage.fromResult.getTestById(
								$e.testId.toString(),
							);
							(0, m.$ld)(!!fe, "got coverage for an unreported test"),
								this.n.push(
									new oe(
										"perTestFilter",
										B.labels.showingFilterFor(fe.label),
										U.$CKc,
										void 0,
										() =>
											this.C.executeCommand(
												x.TestCommandId.CoverageFilterToTestInEditor,
												this.f,
												this.t,
											),
									),
								);
						} else
							$e.coverage.perTestData?.size &&
								this.n.push(
									new oe(
										"perTestFilter",
										(0, v.localize)(10620, null, $e.coverage.perTestData.size),
										U.$CKc,
										void 0,
										() =>
											this.C.executeCommand(
												x.TestCommandId.CoverageFilterToTestInEditor,
												this.f,
												this.t,
											),
									),
								);
						this.n.push(
							new oe(
								"rerun",
								(0, v.localize)(10621, null),
								U.$vKc,
								!this.j,
								() => this.I(),
							),
						);
					}
					H() {
						if (this.g) return;
						this.g = !0;
						let $e;
						const ye = this.m;
						this.t.addOverlayWidget(this),
							this.t.changeViewZones((ue) => {
								$e = ue.addZone({
									afterLineNumber: 0,
									afterColumn: 0,
									domNode: document.createElement("div"),
									heightInPx: 30,
									ordinal: -1,
								});
							}),
							ye.add(
								(0, n.$Yc)(() => {
									(this.g = !1),
										this.t.removeOverlayWidget(this),
										this.t.changeViewZones((ue) => {
											ue.removeZone($e);
										});
								}),
							),
							ye.add(
								this.u.onDidChangeConfiguration((ue) => {
									this.f &&
										(ue.affectsConfiguration(
											F.TestingConfigKeys.CoverageBarThresholds,
										) ||
											ue.affectsConfiguration(
												F.TestingConfigKeys.CoveragePercent,
											)) &&
										this.setCoverage(this.f.coverage, this.f.testId);
								}),
							);
					}
					I() {
						const $e = this.f;
						$e &&
							((this.j = !0),
							this.G(),
							this.y
								.runResolvedTests($e.coverage.fromResult.request)
								.finally(() => {
									(this.j = !1), this.G();
								}));
					}
					J() {
						this.m.clear();
					}
				};
				(le = Ne(
					[
						j(1, P.$gj),
						j(2, L.$Xxb),
						j(3, G.$sqc),
						j(4, M.$uZ),
						j(5, T.$ek),
						j(6, q.$TJc),
						j(7, D.$Li),
					],
					le,
				)),
					(0, I.$4X)(
						class extends I.$3X {
							constructor() {
								super({
									id: ie,
									title: (0, v.localize2)(10623, "Toggle Inline Coverage"),
									category: S.$ck.Test,
									keybinding: {
										weight: N.KeybindingWeight.WorkbenchContrib,
										primary: (0, h.$os)(
											h.KeyMod.CtrlCmd | h.KeyCode.Semicolon,
											h.KeyMod.CtrlCmd | h.KeyMod.Shift | h.KeyCode.KeyI,
										),
									},
									toggled: {
										condition: J.TestingContextKeys.inlineCoverageEnabled,
										title: (0, v.localize)(10622, null),
									},
									icon: U.$MKc,
									menu: [
										{
											id: I.$XX.CommandPalette,
											when: J.TestingContextKeys.isTestCoverageOpen,
										},
										{
											id: I.$XX.EditorTitle,
											when: k.$Kj.and(
												J.TestingContextKeys.isTestCoverageOpen,
												J.TestingContextKeys.coverageToolbarEnabled.notEqualsTo(
													!0,
												),
											),
											group: "navigation",
										},
									],
								});
							}
							run($e) {
								const ye = $e.get(q.$TJc);
								ye.showInline.set(!ye.showInline.get(), void 0);
							}
						},
					),
					(0, I.$4X)(
						class extends I.$3X {
							constructor() {
								super({
									id: x.TestCommandId.CoverageToggleToolbar,
									title: (0, v.localize2)(10624, "Test Coverage Toolbar"),
									metadata: {
										description: (0, v.localize2)(
											10625,
											"Toggle the sticky coverage bar in the editor.",
										),
									},
									category: S.$ck.Test,
									toggled: {
										condition: J.TestingContextKeys.coverageToolbarEnabled,
									},
									menu: [
										{
											id: I.$XX.CommandPalette,
											when: J.TestingContextKeys.isTestCoverageOpen,
										},
										{
											id: I.$XX.StickyScrollContext,
											when: J.TestingContextKeys.isTestCoverageOpen,
										},
										{
											id: I.$XX.EditorTitle,
											when: J.TestingContextKeys.isTestCoverageOpen,
											group: "coverage@1",
										},
									],
								});
							}
							run($e) {
								const ye = $e.get(P.$gj),
									ue = (0, F.$RJc)(
										ye,
										F.TestingConfigKeys.CoverageToolbarEnabled,
									);
								ye.updateValue(F.TestingConfigKeys.CoverageToolbarEnabled, !ue);
							}
						},
					),
					(0, I.$4X)(
						class extends I.$3X {
							constructor() {
								super({
									id: x.TestCommandId.CoverageFilterToTestInEditor,
									title: (0, v.localize2)(10626, "Filter Coverage to Test"),
									category: S.$ck.Test,
									icon: u.$ak.filter,
									toggled: {
										icon: u.$ak.filterFilled,
										condition: J.TestingContextKeys.isCoverageFilteredToTest,
									},
									menu: [
										{
											id: I.$XX.EditorTitle,
											when: k.$Kj.and(
												J.TestingContextKeys.isTestCoverageOpen,
												J.TestingContextKeys.coverageToolbarEnabled.notEqualsTo(
													!0,
												),
											),
											group: "navigation",
										},
									],
								});
							}
							run($e, ye, ue) {
								const fe = $e.get(q.$TJc),
									me = $e.get(O.$DJ),
									ve = ue ?? $e.get(b.$dtb).getActiveCodeEditor();
								let ge;
								if (ye instanceof H.$J4) ge = ye;
								else if ((0, o.$Bc)(ye))
									ge = fe.selected.get()?.getUri(o.URI.from(ye));
								else {
									const Ke = ve?.getModel()?.uri;
									ge = Ke && fe.selected.get()?.getUri(Ke);
								}
								if (!ge || !ge.perTestData?.size) return;
								const be = [...ge.perTestData].map(V.$k4.fromString),
									Ce = V.$k4.getLengthOfCommonPrefix(be.length, (Ke) => be[Ke]),
									Le = ge.fromResult,
									Fe = fe.filterToTest.get(),
									Oe = [
										{ label: B.labels.allTests, testId: void 0 },
										{ type: "separator" },
										...be.map((Ke) => ({
											label: B.$2Jc(Le, Ke, Ce),
											testId: Ke,
										})),
									],
									xe = ve?.getScrollTop() || 0,
									He = new n.$2c();
								me.pick(Oe, {
									activeItem: Oe.find((Ke) => "item" in Ke && Ke.item === ge),
									placeHolder: B.labels.pickShowCoverage,
									onDidFocus: (Ke) => {
										if (!Ke.testId)
											He.clear(),
												ve?.setScrollTop(xe),
												fe.filterToTest.set(void 0, void 0);
										else {
											const Je = (He.value = new r.$Ce());
											ge.detailsForTest(Ke.testId, Je.token).then(
												(Te) => {
													const Ee = Te.find(
														(Ie) => Ie.type === K.DetailType.Statement,
													);
													!Je.token.isCancellationRequested &&
														Ee &&
														ve?.revealLineNearTop(
															Ee.location instanceof l.$hL
																? Ee.location.lineNumber
																: Ee.location.startLineNumber,
														);
												},
												() => {},
											),
												fe.filterToTest.set(Ke.testId, void 0);
										}
									},
								}).then((Ke) => {
									Ke || ve?.setScrollTop(xe),
										He.dispose(),
										fe.filterToTest.set(Ke ? Ke.testId : Fe, void 0);
								});
							}
						},
					);
				class oe extends C.$rj {
					constructor($e, ye, ue, fe, me) {
						super($e, ye, void 0, fe, me), (this.icon = ue);
					}
				}
				class ae extends i.$_ib {
					u() {
						this.m.label &&
							this.I &&
							this.themeIcon &&
							t.$hhb(this.I, (0, E.$Tib)(this.themeIcon), this.action.label);
					}
				}
			},
		),
		define(
			de[3842],
			he([
				1, 0, 7, 214, 229, 14, 138, 132, 103, 3, 77, 19, 26, 48, 17, 4, 99, 11,
				10, 8, 49, 116, 22, 72, 5, 39, 73, 93, 41, 63, 32, 35, 233, 146, 60,
				1266, 470, 1335, 353, 3176, 1e3, 630, 259, 380, 185, 18,
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
				B,
				U,
				z,
				F,
				x,
				H,
				q,
				V,
				G,
			) {
				"use strict";
				var K, J;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$TKc = void 0),
					(t = mt(t)),
					(R = mt(R));
				var W;
				(function ($e) {
					($e[($e.Coverage = 0)] = "Coverage"),
						($e[($e.Location = 1)] = "Location"),
						($e[($e.Name = 2)] = "Name");
				})(W || (W = {}));
				let X = class extends N.$TMb {
					constructor(ye, ue, fe, me, ve, ge, be, Ce, Le, Fe, Oe, xe) {
						super(ye, ue, fe, me, ve, ge, be, Ce, Le, Fe, Oe),
							(this.g = xe),
							(this.f = new r.$2c()),
							(this.sortOrder = (0, u.observableValue)(
								"sortOrder",
								W.Location,
							));
					}
					W(ye) {
						super.W(ye);
						const ue = this.D(
							this.Db.createInstance(M.$uPb, {
								onDidChangeVisibility: this.onDidChangeBodyVisibility,
							}),
						);
						this.D(
							(0, u.autorun)((fe) => {
								const me = this.g.selected.read(fe);
								me
									? (this.f.value ??= this.Db.createInstance(
											Z,
											ye,
											ue,
											this.sortOrder,
										)).setInput(me, this.g.filterToTest.read(fe))
									: this.f.clear();
							}),
						),
							this.D(
								(0, u.autorun)((fe) => {
									this.element.classList.toggle(
										"coverage-view-is-filtered",
										!!this.g.filterToTest.read(fe),
									);
								}),
							);
					}
					X(ye, ue) {
						super.X(ye, ue), this.f.value?.layout(ye, ue);
					}
				};
				(e.$TKc = X),
					(e.$TKc = X =
						Ne(
							[
								j(1, S.$uZ),
								j(2, s.$Xxb),
								j(3, f.$gj),
								j(4, b.$6j),
								j(5, A.$K1),
								j(6, v.$Li),
								j(7, P.$7rb),
								j(8, D.$iP),
								j(9, L.$km),
								j(10, $.$Uyb),
								j(11, x.$TJc),
							],
							X,
						));
				let Y = 0;
				class ie {
					get hits() {
						return this.d.count;
					}
					get label() {
						return this.d.name;
					}
					get location() {
						return this.d.location;
					}
					get tpc() {
						const ye = this.attributableCoverage();
						return ye && (0, F.$F4)(ye.statement, ye.branch, void 0);
					}
					constructor(ye, ue, fe) {
						if (
							((this.uri = ye),
							(this.d = ue),
							(this.id = String(Y++)),
							(this.containedDetails = new Set()),
							(this.children = []),
							ue.location instanceof n.$iL)
						)
							for (const me of fe)
								this.contains(me.location) && this.containedDetails.add(me);
					}
					contains(ye) {
						const ue = this.d.location;
						return (
							ue instanceof n.$iL &&
							(ye instanceof n.$iL
								? ue.containsRange(ye)
								: ue.containsPosition(ye))
						);
					}
					attributableCoverage() {
						const { location: ye, count: ue } = this.d;
						if (!(ye instanceof n.$iL) || !ue) return;
						const fe = { covered: 0, total: 0 },
							me = { covered: 0, total: 0 };
						for (const ve of this.containedDetails)
							if (
								ve.type === V.DetailType.Statement &&
								((fe.covered += ve.count ? 1 : 0), fe.total++, ve.branches)
							)
								for (const { count: ge } of ve.branches)
									(me.covered += ge ? 1 : 0), me.total++;
						return { statement: fe, branch: me };
					}
				}
				Ne([C.$ei], ie.prototype, "attributableCoverage", null);
				class ne {
					get label() {
						return (0, g.localize)(10664, null, this.n);
					}
					constructor(ye) {
						(this.n = ye), (this.id = String(Y++));
					}
				}
				class ee {
					constructor() {
						(this.id = String(Y++)),
							(this.label = (0, g.localize)(10665, null));
					}
				}
				const _ = ($e) => typeof $e == "object" && "value" in $e,
					te = ($e) => $e instanceof ie,
					Q = ($e) =>
						_($e) && $e.value instanceof F.$J4 && !!$e.value.declaration?.total;
				let Z = class extends r.$1c {
					constructor(ye, ue, fe, me, ve) {
						super(),
							(this.g = this.D(new r.$Zc())),
							(this.f = me.createInstance(
								T.$DMb,
								"TestCoverageView",
								ye,
								new se(),
								[
									me.createInstance(le, ue),
									me.createInstance(oe),
									me.createInstance(ae),
								],
								{
									expandOnlyOnTwistieClick: !0,
									sorter: new re(fe),
									keyboardNavigationLabelProvider: {
										getCompressedNodeKeyboardNavigationLabel(ge) {
											return ge
												.map((be) => this.getKeyboardNavigationLabel(be))
												.join("/");
										},
										getKeyboardNavigationLabel(ge) {
											return _(ge) ? (0, a.$jh)(ge.value.uri) : ge.label;
										},
									},
									accessibilityProvider: {
										getAriaLabel(ge) {
											if (_(ge)) {
												const be = (0, a.$jh)(ge.value.uri);
												return (0, g.localize)(
													10666,
													null,
													be,
													(ge.value.tpc * 100).toFixed(2),
												);
											} else return ge.label;
										},
										getWidgetAriaLabel() {
											return (0, g.localize)(10667, null);
										},
									},
									identityProvider: new pe(),
								},
							)),
							this.D(
								(0, u.autorun)((ge) => {
									fe.read(ge), this.f.resort(null, !0);
								}),
							),
							this.D(this.f),
							this.D(
								this.f.onDidChangeCollapseState((ge) => {
									const be = ge.node.element;
									!ge.node.collapsed &&
										!ge.node.children.length &&
										be &&
										Q(be) &&
										(be.value.hasSynchronousDetails &&
											this.f.setChildren(be, [
												{ element: new ee(), incompressible: !0 },
											]),
										be.value.details().then((Ce) => this.h(be, Ce)));
								}),
							),
							this.D(
								this.f.onDidOpen((ge) => {
									let be, Ce;
									ge.element &&
										(_(ge.element) && !ge.element.children?.size
											? (be = ge.element.value.uri)
											: te(ge.element) &&
												((be = ge.element.uri), (Ce = ge.element.location))),
										be &&
											ve.openEditor(
												{
													resource: be,
													options: {
														selection:
															Ce instanceof c.$hL
																? n.$iL.fromPositions(Ce, Ce)
																: Ce,
														revealIfOpened: !0,
														selectionRevealType:
															l.TextEditorSelectionRevealType
																.NearTopIfOutsideViewport,
														preserveFocus: ge.editorOptions.preserveFocus,
														pinned: ge.editorOptions.pinned,
														source: l.EditorOpenSource.USER,
													},
												},
												ge.sideBySide ? G.$KY : G.$JY,
											);
								}),
							);
					}
					setInput(ye, ue) {
						this.g.clear();
						let fe = ye.tree;
						ue && (fe = ye.filterTreeForTest(ue));
						const me = [];
						for (let ge of fe.nodes) {
							for (; !(ge.value instanceof F.$J4) && ge.children?.size === 1; )
								ge = m.Iterable.first(ge.children.values());
							me.push(ge);
						}
						const ve = (ge) => {
							const be = !ge.children?.size;
							return {
								element: ge,
								incompressible: be,
								collapsed: be,
								collapsible: !be || !!ge.value?.declaration?.total,
								children:
									ge.children && m.Iterable.map(ge.children?.values(), ve),
							};
						};
						this.g.add(
							(0, z.$SKc)(ye.didAddCoverage, (ge) => {
								const be = (0, i.$jb)(ge, (Ce) => this.f.hasElement(Ce));
								be &&
									this.f.setChildren(
										be,
										m.Iterable.map(be.children?.values() || [], ve),
										{ diffIdentityProvider: { getId: (Ce) => Ce.value.id } },
									);
							}),
						),
							this.f.setChildren(null, m.Iterable.map(me, ve));
					}
					layout(ye, ue) {
						this.f.layout(ye, ue);
					}
					h(ye, ue) {
						if (!this.f.hasElement(ye)) return;
						const fe = [];
						for (const ve of ue) {
							if (ve.type !== V.DetailType.Declaration) continue;
							let ge = fe;
							for (;;) {
								const be = ge.find((Ce) => Ce.containedDetails.has(ve));
								if (be) ge = be.children;
								else break;
							}
							ge.push(new ie(ye.value.uri, ve, ue));
						}
						const me = (ve) => ({
							element: ve,
							incompressible: !0,
							collapsed: !0,
							collapsible: ve.children.length > 0,
							children: ve.children.map(me),
						});
						this.f.setChildren(ye, fe.map(me));
					}
				};
				Z = Ne([j(3, v.$Li), j(4, G.$IY)], Z);
				class se {
					getHeight(ye) {
						return 22;
					}
					getTemplateId(ye) {
						if (_(ye)) return le.ID;
						if (te(ye)) return oe.ID;
						if (ye instanceof ee || ye instanceof ne) return ae.ID;
						(0, w.$kd)(ye);
					}
				}
				class re {
					constructor(ye) {
						this.d = ye;
					}
					compare(ye, ue) {
						const fe = this.d.get();
						if (_(ye) && _(ue))
							switch (fe) {
								case W.Location:
								case W.Name:
									return ye.value.uri
										.toString()
										.localeCompare(ue.value.uri.toString());
								case W.Coverage:
									return ue.value.tpc - ye.value.tpc;
							}
						else if (te(ye) && te(ue))
							switch (fe) {
								case W.Location:
									return c.$hL.compare(
										ye.location instanceof n.$iL
											? ye.location.getStartPosition()
											: ye.location,
										ue.location instanceof n.$iL
											? ue.location.getStartPosition()
											: ue.location,
									);
								case W.Name:
									return ye.label.localeCompare(ue.label);
								case W.Coverage: {
									const me = ye.tpc,
										ve = ue.tpc;
									return (
										(me !== void 0 && ve !== void 0 && ve - me) ||
										+ue.hits - +ye.hits ||
										ye.label.localeCompare(ue.label)
									);
								}
							}
						else return 0;
					}
				}
				let le = class {
					static {
						K = this;
					}
					static {
						this.ID = "F";
					}
					constructor(ye, ue, fe) {
						(this.d = ye),
							(this.f = ue),
							(this.g = fe),
							(this.templateId = K.ID);
					}
					renderTemplate(ye) {
						const ue = new r.$Zc();
						return (
							ye.classList.add("test-coverage-list-item"),
							{
								container: ye,
								bars: ue.add(
									this.g.createInstance(B.$VJc, { compact: !1, container: ye }),
								),
								label: ue.add(this.d.create(ye, { supportHighlights: !0 })),
								elementsDisposables: ue.add(new r.$Zc()),
								templateDisposables: ue,
							}
						);
					}
					renderElement(ye, ue, fe) {
						this.h(ye.element, fe, ye.filterData);
					}
					renderCompressedElements(ye, ue, fe) {
						this.h(ye.element.elements, fe, ye.filterData);
					}
					disposeTemplate(ye) {
						ye.templateDisposables.dispose();
					}
					h(ye, ue, fe) {
						ue.elementsDisposables.clear();
						const me = ye instanceof Array ? ye[ye.length - 1] : ye,
							ve = me.value,
							ge =
								ye instanceof Array
									? ye.map((be) => (0, a.$jh)(be.value.uri))
									: (0, a.$jh)(ve.uri);
						ve instanceof F.$I4
							? ue.bars.setCoverageInfo(void 0)
							: (ue.elementsDisposables.add(
									(0, u.autorun)((be) => {
										me.value?.didChange.read(be), ue.bars.setCoverageInfo(ve);
									}),
								),
								ue.bars.setCoverageInfo(ve)),
							ue.label.setResource(
								{ resource: ve.uri, name: ge },
								{
									fileKind: me.children?.size
										? y.FileKind.FOLDER
										: y.FileKind.FILE,
									matches: (0, d.$3k)(fe),
									separator: this.f.getSeparator(
										ve.uri.scheme,
										ve.uri.authority,
									),
									extraClasses: ["test-coverage-list-item-label"],
								},
							);
					}
				};
				le = K = Ne([j(1, I.$3N), j(2, v.$Li)], le);
				let oe = class {
					static {
						J = this;
					}
					static {
						this.ID = "N";
					}
					constructor(ye) {
						(this.d = ye), (this.templateId = J.ID);
					}
					renderTemplate(ye) {
						const ue = new r.$Zc();
						ye.classList.add("test-coverage-list-item");
						const fe = t.$fhb(ye, t.$(".state")),
							me = t.$fhb(ye, t.$(".name"));
						return {
							container: ye,
							bars: ue.add(
								this.d.createInstance(B.$VJc, { compact: !1, container: ye }),
							),
							templateDisposables: ue,
							icon: fe,
							label: me,
						};
					}
					renderElement(ye, ue, fe) {
						this.f(ye.element, fe, ye.filterData);
					}
					renderCompressedElements(ye, ue, fe) {
						this.f(
							ye.element.elements[ye.element.elements.length - 1],
							fe,
							ye.filterData,
						);
					}
					disposeTemplate(ye) {
						ye.templateDisposables.dispose();
					}
					f(ye, ue, fe) {
						const me = !!ye.hits,
							ve = me ? O.$NKc : O.$PKc.get(V.TestResultState.Unset);
						ue.container.classList.toggle("not-covered", !me),
							(ue.icon.className = `computed-state ${h.ThemeIcon.asClassName(ve)}`),
							(ue.label.innerText = ye.label),
							ue.bars.setCoverageInfo(ye.attributableCoverage());
					}
				};
				oe = J = Ne([j(0, v.$Li)], oe);
				class ae {
					constructor() {
						this.templateId = ae.ID;
					}
					static {
						this.ID = "B";
					}
					renderCompressedElements(ye, ue, fe) {
						this.d(ye.element.elements[ye.element.elements.length - 1], fe);
					}
					renderTemplate(ye) {
						return ye;
					}
					renderElement(ye, ue, fe) {
						this.d(ye.element, fe);
					}
					disposeTemplate() {}
					d(ye, ue) {
						ue.innerText = ye.label;
					}
				}
				class pe {
					getId(ye) {
						return _(ye) ? ye.value.uri.toString() : ye.id;
					}
				}
				(0, o.$4X)(
					class extends o.$3X {
						constructor() {
							super({
								id: U.TestCommandId.CoverageFilterToTest,
								category: p.$ck.Test,
								title: (0, g.localize2)(10675, "Filter Coverage by Test"),
								icon: E.$ak.filter,
								toggled: {
									icon: E.$ak.filterFilled,
									condition: q.TestingContextKeys.isCoverageFilteredToTest,
								},
								menu: [
									{
										id: o.$XX.CommandPalette,
										when: q.TestingContextKeys.hasPerTestCoverage,
									},
									{
										id: o.$XX.ViewTitle,
										when: b.$Kj.and(
											q.TestingContextKeys.hasPerTestCoverage,
											b.$Kj.equals("view", U.Testing.CoverageViewId),
										),
										group: "navigation",
									},
								],
							});
						}
						run(ye) {
							const ue = ye.get(x.$TJc),
								fe = ye.get(k.$DJ),
								me = ue.selected.get();
							if (!me) return;
							const ve = [...me.allPerTestIDs()].map(H.$k4.fromString),
								ge = H.$k4.getLengthOfCommonPrefix(ve.length, (Oe) => ve[Oe]),
								be = me.result,
								Ce = ue.filterToTest.get(),
								Le = Ce?.toString(),
								Fe = [
									{ label: R.labels.allTests, id: void 0 },
									{ type: "separator" },
									...ve.map((Oe) => ({
										label: R.$2Jc(be, Oe, ge),
										testId: Oe,
									})),
								];
							fe.pick(Fe, {
								activeItem: Fe.find(
									(Oe) => "testId" in Oe && Oe.testId?.toString() === Le,
								),
								placeHolder: R.labels.pickShowCoverage,
								onDidFocus: (Oe) => {
									ue.filterToTest.set(Oe.testId, void 0);
								},
							}).then((Oe) => {
								ue.filterToTest.set(Oe ? Oe.testId : Ce, void 0);
							});
						}
					},
				),
					(0, o.$4X)(
						class extends N.$WMb {
							constructor() {
								super({
									id: U.TestCommandId.CoverageViewChangeSorting,
									viewId: U.Testing.CoverageViewId,
									title: (0, g.localize2)(10676, "Change Sort Order"),
									icon: E.$ak.sortPrecedence,
									menu: {
										id: o.$XX.ViewTitle,
										when: b.$Kj.equals("view", U.Testing.CoverageViewId),
										group: "navigation",
									},
								});
							}
							runInView(ye, ue) {
								const fe = new r.$Zc(),
									me = fe.add(ye.get(k.$DJ).createQuickPick()),
									ve = [
										{
											label: (0, g.localize)(10668, null),
											value: W.Location,
											description: (0, g.localize)(10669, null),
										},
										{
											label: (0, g.localize)(10670, null),
											value: W.Coverage,
											description: (0, g.localize)(10671, null),
										},
										{
											label: (0, g.localize)(10672, null),
											value: W.Name,
											description: (0, g.localize)(10673, null),
										},
									];
								(me.placeholder = (0, g.localize)(10674, null)),
									(me.items = ve),
									me.show(),
									fe.add(me.onDidHide(() => fe.dispose())),
									fe.add(
										me.onDidAccept(() => {
											const ge = me.selectedItems[0]?.value;
											ge !== void 0 &&
												(ue.sortOrder.set(ge, void 0), me.dispose());
										}),
									);
							}
						},
					);
			},
		),
		define(
			de[1908],
			he([
				1, 0, 24, 14, 103, 27, 3, 28, 65, 281, 38, 48, 17, 71, 1036, 541, 440,
				255, 4, 99, 11, 31, 10, 8, 43, 40, 84, 63, 79, 68, 146, 100, 60, 141,
				811, 470, 443, 353, 630, 259, 420, 381, 379, 185, 380, 1268, 812, 563,
				18, 142, 89,
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
				B,
				U,
				z,
				F,
				x,
				H,
				q,
				V,
				G,
				K,
				J,
				W,
				X,
				Y,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$yMc =
						e.$xMc =
						e.$wMc =
						e.$vMc =
						e.$uMc =
						e.$tMc =
						e.$sMc =
						e.$rMc =
						e.$qMc =
						e.$pMc =
						e.$oMc =
						e.$nMc =
						e.$mMc =
						e.$lMc =
						e.$kMc =
						e.$jMc =
						e.$iMc =
						e.$hMc =
						e.$gMc =
						e.$fMc =
						e.$eMc =
						e.$dMc =
						e.$cMc =
						e.$bMc =
						e.$aMc =
						e.$_Lc =
						e.$$Lc =
						e.$0Lc =
						e.$9Lc =
						e.$8Lc =
						e.$7Lc =
						e.$6Lc =
						e.$5Lc =
						e.$4Lc =
						e.$3Lc =
						e.$2Lc =
						e.$1Lc =
						e.$ZLc =
						e.$YLc =
						e.$XLc =
						e.$WLc =
						e.$VLc =
						e.$ULc =
						e.$TLc =
						e.$SLc =
						e.$RLc =
						e.$QLc =
						e.$PLc =
						e.$OLc =
							void 0),
					(R = mt(R));
				const ie = b.$ck.Test;
				var ne;
				(function (Wt) {
					(Wt[(Wt.Refresh = 10)] = "Refresh"),
						(Wt[(Wt.Run = 11)] = "Run"),
						(Wt[(Wt.Debug = 12)] = "Debug"),
						(Wt[(Wt.Coverage = 13)] = "Coverage"),
						(Wt[(Wt.RunContinuous = 14)] = "RunContinuous"),
						(Wt[(Wt.RunUsing = 15)] = "RunUsing"),
						(Wt[(Wt.Collapse = 16)] = "Collapse"),
						(Wt[(Wt.ClearResults = 17)] = "ClearResults"),
						(Wt[(Wt.DisplayMode = 18)] = "DisplayMode"),
						(Wt[(Wt.Sort = 19)] = "Sort"),
						(Wt[(Wt.GoToTest = 20)] = "GoToTest"),
						(Wt[(Wt.HideTest = 21)] = "HideTest"),
						(Wt[(Wt.ContinuousRunTest = 2147483647)] = "ContinuousRunTest");
				})(ne || (ne = {}));
				const ee = $.$Wj.create(V.TestingContextKeys.providerCount.key, 0),
					_ = (0, f.localize2)(10693, "Run Tests"),
					te = (0, f.localize2)(10694, "Debug Tests"),
					Q = (0, f.localize2)(10695, "Run Tests with Coverage");
				class Z extends s.$3X {
					constructor() {
						super({
							id: B.TestCommandId.HideTestAction,
							title: (0, f.localize2)(10696, "Hide Test"),
							menu: {
								id: s.$XX.TestItem,
								group: "builtin@2",
								when: V.TestingContextKeys.testItemIsHidden.isEqualTo(!1),
							},
						});
					}
					run(tt, ...at) {
						const pi = tt.get(H.$sqc);
						for (const Li of at) pi.excluded.toggle(Li.test, !0);
						return Promise.resolve();
					}
				}
				e.$OLc = Z;
				class se extends s.$3X {
					constructor() {
						super({
							id: B.TestCommandId.UnhideTestAction,
							title: (0, f.localize2)(10697, "Unhide Test"),
							menu: {
								id: s.$XX.TestItem,
								order: ne.HideTest,
								when: V.TestingContextKeys.testItemIsHidden.isEqualTo(!0),
							},
						});
					}
					run(tt, ...at) {
						const pi = tt.get(H.$sqc);
						for (const Li of at)
							Li instanceof A.$7Kc && pi.excluded.toggle(Li.test, !1);
						return Promise.resolve();
					}
				}
				e.$PLc = se;
				class re extends s.$3X {
					constructor() {
						super({
							id: B.TestCommandId.UnhideAllTestsAction,
							title: (0, f.localize2)(10698, "Unhide All Tests"),
						});
					}
					run(tt) {
						return tt.get(H.$sqc).excluded.clear(), Promise.resolve();
					}
				}
				e.$QLc = re;
				const le = (Wt, tt) => [
					{ id: s.$XX.TestItem, group: "inline", order: Wt, when: tt },
					{ id: s.$XX.TestItem, group: "builtin@1", order: Wt, when: tt },
				];
				class oe extends L.$WMb {
					constructor(tt, at) {
						super({ ...at, viewId: B.Testing.ExplorerViewId }), (this.c = tt);
					}
					runInView(tt, at, ...pi) {
						const { include: Li, exclude: Di } = at.getTreeIncludeExclude(
							pi.map((Ui) => Ui.test),
						);
						return tt
							.get(H.$sqc)
							.runTests({ tests: Li, exclude: Di, group: this.c });
					}
				}
				class ae extends oe {
					constructor() {
						super(q.TestRunProfileBitset.Debug, {
							id: B.TestCommandId.DebugAction,
							title: (0, f.localize2)(10699, "Debug Test"),
							icon: R.$yKc,
							menu: le(
								ne.Debug,
								V.TestingContextKeys.hasDebuggableTests.isEqualTo(!0),
							),
						});
					}
				}
				e.$RLc = ae;
				class pe extends oe {
					constructor() {
						super(q.TestRunProfileBitset.Coverage, {
							id: B.TestCommandId.RunWithCoverageAction,
							title: (0, f.localize2)(10700, "Run Test with Coverage"),
							icon: R.$zKc,
							menu: le(
								ne.Coverage,
								V.TestingContextKeys.hasCoverableTests.isEqualTo(!0),
							),
						});
					}
				}
				e.$SLc = pe;
				class $e extends s.$3X {
					constructor() {
						super({
							id: B.TestCommandId.RunUsingProfileAction,
							title: (0, f.localize2)(10701, "Execute Using Profile..."),
							icon: R.$yKc,
							menu: {
								id: s.$XX.TestItem,
								order: ne.RunUsing,
								group: "builtin@2",
								when: V.TestingContextKeys.hasNonDefaultProfile.isEqualTo(!0),
							},
						});
					}
					async run(tt, ...at) {
						const pi = tt.get(l.$ek),
							Li = tt.get(H.$sqc),
							Di = await pi.executeCommand("vscode.pickTestProfile", {
								onlyForTest: at[0].test,
							});
						Di &&
							Li.runResolvedTests({
								group: Di.group,
								targets: [
									{
										profileId: Di.profileId,
										controllerId: Di.controllerId,
										testIds: at
											.filter((Ui) => (0, F.$Cqc)(Di, Ui.test))
											.map((Ui) => Ui.test.item.extId),
									},
								],
							});
					}
				}
				e.$TLc = $e;
				class ye extends oe {
					constructor() {
						super(q.TestRunProfileBitset.Run, {
							id: B.TestCommandId.RunAction,
							title: (0, f.localize2)(10702, "Run Test"),
							icon: R.$uKc,
							menu: le(
								ne.Run,
								V.TestingContextKeys.hasRunnableTests.isEqualTo(!0),
							),
						});
					}
				}
				e.$ULc = ye;
				class ue extends s.$3X {
					constructor() {
						super({
							id: B.TestCommandId.SelectDefaultTestProfiles,
							title: (0, f.localize2)(10703, "Select Default Profile"),
							icon: R.$GKc,
							category: ie,
						});
					}
					async run(tt, at) {
						const pi = tt.get(l.$ek),
							Li = tt.get(F.$Bqc),
							Di = await pi.executeCommand("vscode.pickMultipleTestProfiles", {
								showConfigureButtons: !1,
								selected: Li.getGroupDefaultProfiles(at),
								onlyGroup: at,
							});
						Di?.length && Li.setGroupDefaultProfiles(at, Di);
					}
				}
				e.$VLc = ue;
				class fe extends s.$3X {
					constructor() {
						super({
							id: B.TestCommandId.ToggleContinousRunForTest,
							title: (0, f.localize2)(10704, "Turn on Continuous Run"),
							icon: R.$IKc,
							precondition: $.$Kj.or(
								V.TestingContextKeys.isContinuousModeOn.isEqualTo(!0),
								V.TestingContextKeys.isParentRunningContinuously.isEqualTo(!1),
							),
							toggled: {
								condition: V.TestingContextKeys.isContinuousModeOn.isEqualTo(
									!0,
								),
								icon: R.$KKc,
								title: (0, f.localize)(10677, null),
							},
							menu: le(
								ne.ContinuousRunTest,
								V.TestingContextKeys.supportsContinuousRun.isEqualTo(!0),
							),
						});
					}
					async run(tt, ...at) {
						const pi = tt.get(G.$MLc);
						for (const Li of at) {
							const Di = Li.test.item.extId;
							if (pi.isSpecificallyEnabledFor(Di)) {
								pi.stop(Di);
								continue;
							}
							pi.start(q.TestRunProfileBitset.Run, Di);
						}
					}
				}
				e.$WLc = fe;
				class me extends s.$3X {
					constructor() {
						super({
							id: B.TestCommandId.ContinousRunUsingForTest,
							title: (0, f.localize2)(10705, "Start Continous Run Using..."),
							icon: R.$yKc,
							menu: [
								{
									id: s.$XX.TestItem,
									order: ne.RunContinuous,
									group: "builtin@2",
									when: $.$Kj.and(
										V.TestingContextKeys.supportsContinuousRun.isEqualTo(!0),
										V.TestingContextKeys.isContinuousModeOn.isEqualTo(!1),
									),
								},
							],
						});
					}
					async run(tt, ...at) {
						const pi = tt.get(G.$MLc),
							Li = tt.get(F.$Bqc),
							Di = tt.get(S.$4N),
							Ui = tt.get(T.$DJ);
						for (const Wi of at) {
							const Gi = await Ce(pi, Di, Ui, [
								{ profiles: Li.getControllerProfiles(Wi.test.controllerId) },
							]);
							Gi.length && pi.start(Gi, Wi.test.item.extId);
						}
					}
				}
				e.$XLc = me;
				class ve extends s.$3X {
					constructor() {
						super({
							id: B.TestCommandId.ConfigureTestProfilesAction,
							title: (0, f.localize2)(10706, "Configure Test Profiles"),
							icon: R.$GKc,
							f1: !0,
							category: ie,
							menu: {
								id: s.$XX.CommandPalette,
								when: V.TestingContextKeys.hasConfigurableProfile.isEqualTo(!0),
							},
						});
					}
					async run(tt, at) {
						const pi = tt.get(l.$ek),
							Li = tt.get(F.$Bqc),
							Di = await pi.executeCommand("vscode.pickTestProfile", {
								placeholder: (0, f.localize)(10678, null),
								showConfigureButtons: !1,
								onlyConfigurable: !0,
								onlyGroup: at,
							});
						Di && Li.configure(Di.controllerId, Di.profileId);
					}
				}
				e.$YLc = ve;
				const ge = (Wt) => [
					{
						id: s.$XX.ViewTitle,
						group: "navigation",
						order: ne.RunUsing,
						when: $.$Kj.and(
							$.$Kj.equals("view", B.Testing.ExplorerViewId),
							V.TestingContextKeys.supportsContinuousRun.isEqualTo(!0),
							V.TestingContextKeys.isContinuousModeOn.isEqualTo(Wt),
						),
					},
					{
						id: s.$XX.CommandPalette,
						when: V.TestingContextKeys.supportsContinuousRun.isEqualTo(!0),
					},
				];
				class be extends s.$3X {
					constructor() {
						super({
							id: B.TestCommandId.StopContinousRun,
							title: (0, f.localize2)(10707, "Stop Continuous Run"),
							category: ie,
							icon: R.$JKc,
							menu: ge(!0),
						});
					}
					run(tt) {
						tt.get(G.$MLc).stop();
					}
				}
				function Ce(Wt, tt, at, pi) {
					const Li = [];
					for (const { controller: Oi, profiles: yi } of pi)
						for (const Ai of yi)
							Ai.supportsContinuousRun &&
								Li.push({
									label: Ai.label || Oi?.label.get() || "",
									description: Oi?.label.get(),
									profile: Ai,
								});
					if (Li.length === 0)
						return tt.info((0, f.localize)(10679, null)), Promise.resolve([]);
					if (Li.length === 1) return Promise.resolve([Li[0].profile]);
					const Di = [],
						Ui = [],
						Wi = Wt.lastRunProfileIds;
					Li.sort(
						(Oi, yi) =>
							Oi.profile.group - yi.profile.group ||
							Oi.profile.controllerId.localeCompare(yi.profile.controllerId) ||
							Oi.label.localeCompare(yi.label),
					);
					for (let Oi = 0; Oi < Li.length; Oi++) {
						const yi = Li[Oi];
						(Oi === 0 || Li[Oi - 1].profile.group !== yi.profile.group) &&
							Di.push({ type: "separator", label: B.$Aqc[yi.profile.group] }),
							Di.push(yi),
							Wi.has(yi.profile.profileId) && Ui.push(yi);
					}
					const Gi = new C.$Zc(),
						qi = Gi.add(at.createQuickPick({ useSeparators: !0 }));
					return (
						(qi.title = (0, f.localize)(10680, null)),
						(qi.canSelectMany = !0),
						(qi.items = Di),
						(qi.selectedItems = Ui),
						qi.show(),
						new Promise((Oi) => {
							Gi.add(
								qi.onDidAccept(() => {
									Oi(qi.selectedItems.map((yi) => yi.profile)), Gi.dispose();
								}),
							),
								Gi.add(
									qi.onDidHide(() => {
										Oi([]), Gi.dispose();
									}),
								);
						})
					);
				}
				class Le extends s.$3X {
					constructor() {
						super({
							id: B.TestCommandId.StartContinousRun,
							title: (0, f.localize2)(10708, "Start Continuous Run"),
							category: ie,
							icon: R.$IKc,
							menu: ge(!1),
						});
					}
					async run(tt, ...at) {
						const pi = tt.get(G.$MLc),
							Li = await Ce(
								pi,
								tt.get(S.$4N),
								tt.get(T.$DJ),
								tt.get(F.$Bqc).all(),
							);
						Li.length && pi.start(Li);
					}
				}
				class Fe extends L.$WMb {
					constructor(tt, at) {
						super({
							...tt,
							menu: [
								{
									id: s.$XX.ViewTitle,
									order:
										at === q.TestRunProfileBitset.Run
											? ne.Run
											: at === q.TestRunProfileBitset.Debug
												? ne.Debug
												: ne.Coverage,
									group: "navigation",
									when: $.$Kj.and(
										$.$Kj.equals("view", B.Testing.ExplorerViewId),
										V.TestingContextKeys.isRunning.isEqualTo(!1),
										V.TestingContextKeys.capabilityToContextKey[at].isEqualTo(
											!0,
										),
									),
								},
							],
							category: ie,
							viewId: B.Testing.ExplorerViewId,
						}),
							(this.c = at);
					}
					runInView(tt, at) {
						const { include: pi, exclude: Li } = at.getTreeIncludeExclude();
						return tt
							.get(H.$sqc)
							.runTests({ tests: pi, exclude: Li, group: this.c });
					}
				}
				class Oe extends s.$3X {
					constructor() {
						super({
							id: B.TestCommandId.GetSelectedProfiles,
							title: (0, f.localize2)(10709, "Get Selected Profiles"),
						});
					}
					run(tt) {
						const at = tt.get(F.$Bqc);
						return [
							...at.getGroupDefaultProfiles(q.TestRunProfileBitset.Run),
							...at.getGroupDefaultProfiles(q.TestRunProfileBitset.Debug),
							...at.getGroupDefaultProfiles(q.TestRunProfileBitset.Coverage),
						].map((pi) => ({
							controllerId: pi.controllerId,
							label: pi.label,
							kind:
								pi.group & q.TestRunProfileBitset.Coverage
									? q.ExtTestRunProfileKind.Coverage
									: pi.group & q.TestRunProfileBitset.Debug
										? q.ExtTestRunProfileKind.Debug
										: q.ExtTestRunProfileKind.Run,
						}));
					}
				}
				e.$ZLc = Oe;
				class xe extends L.$WMb {
					constructor() {
						super({
							id: B.TestCommandId.GetExplorerSelection,
							title: (0, f.localize2)(10710, "Get Explorer Selection"),
							viewId: B.Testing.ExplorerViewId,
						});
					}
					runInView(tt, at) {
						const { include: pi, exclude: Li } = at.getTreeIncludeExclude(
								void 0,
								void 0,
								"selected",
							),
							Di = (Ui) => Ui.item.extId;
						return { include: pi.map(Di), exclude: Li.map(Di) };
					}
				}
				e.$1Lc = xe;
				class He extends Fe {
					constructor() {
						super(
							{ id: B.TestCommandId.RunSelectedAction, title: _, icon: R.$wKc },
							q.TestRunProfileBitset.Run,
						);
					}
				}
				e.$2Lc = He;
				class Ke extends Fe {
					constructor() {
						super(
							{
								id: B.TestCommandId.DebugSelectedAction,
								title: te,
								icon: R.$xKc,
							},
							q.TestRunProfileBitset.Debug,
						);
					}
				}
				e.$3Lc = Ke;
				class Je extends Fe {
					constructor() {
						super(
							{
								id: B.TestCommandId.CoverageSelectedAction,
								title: Q,
								icon: R.$AKc,
							},
							q.TestRunProfileBitset.Coverage,
						);
					}
				}
				e.$4Lc = Je;
				const Te = (Wt, tt) =>
					Wt.withProgress(
						{
							location: I.ProgressLocation.Window,
							title: (0, f.localize)(10681, null),
						},
						() => tt,
					);
				class Ee extends s.$3X {
					constructor(tt, at, pi) {
						super({
							...tt,
							category: ie,
							menu: [
								{
									id: s.$XX.CommandPalette,
									when: V.TestingContextKeys.capabilityToContextKey[
										at
									].isEqualTo(!0),
								},
							],
						}),
							(this.c = at),
							(this.d = pi);
					}
					async run(tt) {
						const at = tt.get(H.$sqc),
							pi = tt.get(S.$4N),
							Li = [...at.collection.rootItems].filter(
								(Di) =>
									Di.children.size ||
									Di.expand === q.TestItemExpandState.Expandable ||
									Di.expand === q.TestItemExpandState.BusyExpanding,
							);
						if (!Li.length) {
							pi.info(this.d);
							return;
						}
						await at.runTests({ tests: Li, group: this.c });
					}
				}
				class Ie extends Ee {
					constructor() {
						super(
							{
								id: B.TestCommandId.RunAllAction,
								title: (0, f.localize2)(10711, "Run All Tests"),
								icon: R.$wKc,
								keybinding: {
									weight: v.KeybindingWeight.WorkbenchContrib,
									primary: (0, E.$os)(
										E.KeyMod.CtrlCmd | E.KeyCode.Semicolon,
										E.KeyCode.KeyA,
									),
								},
							},
							q.TestRunProfileBitset.Run,
							(0, f.localize)(10682, null),
						);
					}
				}
				e.$5Lc = Ie;
				class Be extends Ee {
					constructor() {
						super(
							{
								id: B.TestCommandId.DebugAllAction,
								title: (0, f.localize2)(10712, "Debug All Tests"),
								icon: R.$yKc,
								keybinding: {
									weight: v.KeybindingWeight.WorkbenchContrib,
									primary: (0, E.$os)(
										E.KeyMod.CtrlCmd | E.KeyCode.Semicolon,
										E.KeyMod.CtrlCmd | E.KeyCode.KeyA,
									),
								},
							},
							q.TestRunProfileBitset.Debug,
							(0, f.localize)(10683, null),
						);
					}
				}
				e.$6Lc = Be;
				class Se extends Ee {
					constructor() {
						super(
							{
								id: B.TestCommandId.RunAllWithCoverageAction,
								title: (0, f.localize2)(10713, "Run All Tests with Coverage"),
								icon: R.$zKc,
								keybinding: {
									weight: v.KeybindingWeight.WorkbenchContrib,
									primary: (0, E.$os)(
										E.KeyMod.CtrlCmd | E.KeyCode.Semicolon,
										E.KeyMod.CtrlCmd | E.KeyMod.Shift | E.KeyCode.KeyA,
									),
								},
							},
							q.TestRunProfileBitset.Coverage,
							(0, f.localize)(10684, null),
						);
					}
				}
				e.$7Lc = Se;
				class ke extends s.$3X {
					constructor() {
						super({
							id: B.TestCommandId.CancelTestRunAction,
							title: (0, f.localize2)(10714, "Cancel Test Run"),
							icon: R.$BKc,
							keybinding: {
								weight: v.KeybindingWeight.WorkbenchContrib,
								primary: (0, E.$os)(
									E.KeyMod.CtrlCmd | E.KeyCode.Semicolon,
									E.KeyMod.CtrlCmd | E.KeyCode.KeyX,
								),
							},
							menu: [
								{
									id: s.$XX.ViewTitle,
									order: ne.Run,
									group: "navigation",
									when: $.$Kj.and(
										$.$Kj.equals("view", B.Testing.ExplorerViewId),
										$.$Kj.equals(
											V.TestingContextKeys.isRunning.serialize(),
											!0,
										),
									),
								},
							],
						});
					}
					async run(tt, at, pi) {
						const Li = tt.get(x.$Kqc),
							Di = tt.get(H.$sqc);
						if (at) Di.cancelTestRun(at, pi);
						else
							for (const Ui of Li.results)
								Ui.completedAt || Di.cancelTestRun(Ui.id);
					}
				}
				e.$8Lc = ke;
				class Ue extends L.$WMb {
					constructor() {
						super({
							id: B.TestCommandId.TestingViewAsListAction,
							viewId: B.Testing.ExplorerViewId,
							title: (0, f.localize2)(10715, "View as List"),
							toggled: V.TestingContextKeys.viewMode.isEqualTo(
								B.TestExplorerViewMode.List,
							),
							menu: {
								id: s.$XX.ViewTitle,
								order: ne.DisplayMode,
								group: "viewAs",
								when: $.$Kj.equals("view", B.Testing.ExplorerViewId),
							},
						});
					}
					runInView(tt, at) {
						at.viewModel.viewMode = B.TestExplorerViewMode.List;
					}
				}
				e.$9Lc = Ue;
				class qe extends L.$WMb {
					constructor() {
						super({
							id: B.TestCommandId.TestingViewAsTreeAction,
							viewId: B.Testing.ExplorerViewId,
							title: (0, f.localize2)(10716, "View as Tree"),
							toggled: V.TestingContextKeys.viewMode.isEqualTo(
								B.TestExplorerViewMode.Tree,
							),
							menu: {
								id: s.$XX.ViewTitle,
								order: ne.DisplayMode,
								group: "viewAs",
								when: $.$Kj.equals("view", B.Testing.ExplorerViewId),
							},
						});
					}
					runInView(tt, at) {
						at.viewModel.viewMode = B.TestExplorerViewMode.Tree;
					}
				}
				e.$0Lc = qe;
				class Ae extends L.$WMb {
					constructor() {
						super({
							id: B.TestCommandId.TestingSortByStatusAction,
							viewId: B.Testing.ExplorerViewId,
							title: (0, f.localize2)(10717, "Sort by Status"),
							toggled: V.TestingContextKeys.viewSorting.isEqualTo(
								B.TestExplorerViewSorting.ByStatus,
							),
							menu: {
								id: s.$XX.ViewTitle,
								order: ne.Sort,
								group: "sortBy",
								when: $.$Kj.equals("view", B.Testing.ExplorerViewId),
							},
						});
					}
					runInView(tt, at) {
						at.viewModel.viewSorting = B.TestExplorerViewSorting.ByStatus;
					}
				}
				e.$$Lc = Ae;
				class Me extends L.$WMb {
					constructor() {
						super({
							id: B.TestCommandId.TestingSortByLocationAction,
							viewId: B.Testing.ExplorerViewId,
							title: (0, f.localize2)(10718, "Sort by Location"),
							toggled: V.TestingContextKeys.viewSorting.isEqualTo(
								B.TestExplorerViewSorting.ByLocation,
							),
							menu: {
								id: s.$XX.ViewTitle,
								order: ne.Sort,
								group: "sortBy",
								when: $.$Kj.equals("view", B.Testing.ExplorerViewId),
							},
						});
					}
					runInView(tt, at) {
						at.viewModel.viewSorting = B.TestExplorerViewSorting.ByLocation;
					}
				}
				e.$_Lc = Me;
				class De extends L.$WMb {
					constructor() {
						super({
							id: B.TestCommandId.TestingSortByDurationAction,
							viewId: B.Testing.ExplorerViewId,
							title: (0, f.localize2)(10719, "Sort by Duration"),
							toggled: V.TestingContextKeys.viewSorting.isEqualTo(
								B.TestExplorerViewSorting.ByDuration,
							),
							menu: {
								id: s.$XX.ViewTitle,
								order: ne.Sort,
								group: "sortBy",
								when: $.$Kj.equals("view", B.Testing.ExplorerViewId),
							},
						});
					}
					runInView(tt, at) {
						at.viewModel.viewSorting = B.TestExplorerViewSorting.ByDuration;
					}
				}
				e.$aMc = De;
				class Re extends s.$3X {
					constructor() {
						super({
							id: B.TestCommandId.ShowMostRecentOutputAction,
							title: (0, f.localize2)(10720, "Show Output"),
							category: ie,
							icon: i.$ak.terminal,
							keybinding: {
								weight: v.KeybindingWeight.WorkbenchContrib,
								primary: (0, E.$os)(
									E.KeyMod.CtrlCmd | E.KeyCode.Semicolon,
									E.KeyMod.CtrlCmd | E.KeyCode.KeyO,
								),
							},
							precondition: V.TestingContextKeys.hasAnyResults.isEqualTo(!0),
							menu: [
								{
									id: s.$XX.ViewTitle,
									order: ne.Collapse,
									group: "navigation",
									when: $.$Kj.equals("view", B.Testing.ExplorerViewId),
								},
								{
									id: s.$XX.CommandPalette,
									when: V.TestingContextKeys.hasAnyResults.isEqualTo(!0),
								},
							],
						});
					}
					async run(tt) {
						(
							await tt.get(Y.$HMb).openView(B.Testing.ResultsViewId, !0)
						)?.showLatestRun();
					}
				}
				e.$bMc = Re;
				class je extends L.$WMb {
					constructor() {
						super({
							id: B.TestCommandId.CollapseAllAction,
							viewId: B.Testing.ExplorerViewId,
							title: (0, f.localize2)(10721, "Collapse All Tests"),
							icon: i.$ak.collapseAll,
							menu: {
								id: s.$XX.ViewTitle,
								order: ne.Collapse,
								group: "displayAction",
								when: $.$Kj.equals("view", B.Testing.ExplorerViewId),
							},
						});
					}
					runInView(tt, at) {
						at.viewModel.collapseAll();
					}
				}
				e.$cMc = je;
				class Ve extends s.$3X {
					constructor() {
						super({
							id: B.TestCommandId.ClearTestResultsAction,
							title: (0, f.localize2)(10722, "Clear All Results"),
							category: ie,
							icon: i.$ak.clearAll,
							menu: [
								{ id: s.$XX.TestPeekTitle },
								{
									id: s.$XX.CommandPalette,
									when: V.TestingContextKeys.hasAnyResults.isEqualTo(!0),
								},
								{
									id: s.$XX.ViewTitle,
									order: ne.ClearResults,
									group: "displayAction",
									when: $.$Kj.equals("view", B.Testing.ExplorerViewId),
								},
								{
									id: s.$XX.ViewTitle,
									order: ne.ClearResults,
									group: "navigation",
									when: $.$Kj.equals("view", B.Testing.ResultsViewId),
								},
							],
						});
					}
					run(tt) {
						tt.get(x.$Kqc).clear();
					}
				}
				e.$dMc = Ve;
				class Ze extends s.$3X {
					constructor() {
						super({
							id: B.TestCommandId.GoToTest,
							title: (0, f.localize2)(10723, "Go to Test"),
							icon: i.$ak.goToFile,
							menu: le(
								ne.GoToTest,
								V.TestingContextKeys.testItemHasUri.isEqualTo(!0),
							),
							keybinding: {
								weight: v.KeybindingWeight.EditorContrib - 10,
								when: D.$zQb.isEqualTo(B.Testing.ExplorerViewId),
								primary: E.KeyCode.Enter | E.KeyMod.Alt,
							},
						});
					}
					async run(tt, at, pi) {
						at ||
							(at = tt.get(Y.$HMb).getActiveViewWithId(B.Testing.ExplorerViewId)
								?.focusedTreeElements[0]),
							at &&
								at instanceof A.$7Kc &&
								tt
									.get(l.$ek)
									.executeCommand("vscode.revealTest", at.test.item.extId, pi);
					}
				}
				e.$eMc = Ze;
				async function et(Wt, tt, at, pi, Li) {
					let Di = [],
						Ui,
						Wi = [],
						Gi;
					for await (const qi of (0, H.$wqc)(Wt, tt, at)) {
						if (!qi.item.range || Li?.(qi) === !1) continue;
						const Oi = h.$iL.lift(qi.item.range);
						Oi.containsPosition(pi)
							? Ui && h.$iL.equalsRange(qi.item.range, Ui)
								? Di.some((yi) =>
										z.$k4.isChild(yi.item.extId, qi.item.extId),
									) || Di.push(qi)
								: ((Ui = Oi), (Di = [qi]))
							: a.$hL.isBefore(Oi.getStartPosition(), pi) &&
								(!Gi || Gi.getStartPosition().isBefore(Oi.getStartPosition())
									? ((Gi = Oi), (Wi = [qi]))
									: Oi.equalsRange(Gi) &&
										!Wi.some((yi) =>
											z.$k4.isChild(yi.item.extId, qi.item.extId),
										) &&
										Wi.push(qi));
					}
					return Di.length ? Di : Wi;
				}
				var rt;
				(function (Wt) {
					(Wt[(Wt.RunAtCursor = 0)] = "RunAtCursor"),
						(Wt[(Wt.DebugAtCursor = 1)] = "DebugAtCursor"),
						(Wt[(Wt.RunInFile = 2)] = "RunInFile"),
						(Wt[(Wt.DebugInFile = 3)] = "DebugInFile"),
						(Wt[(Wt.GoToRelated = 4)] = "GoToRelated"),
						(Wt[(Wt.PeekRelated = 5)] = "PeekRelated");
				})(rt || (rt = {}));
				class ft extends s.$3X {
					constructor(tt, at) {
						super({
							...tt,
							menu: [
								{ id: s.$XX.CommandPalette, when: ee },
								{
									id: s.$XX.EditorContext,
									group: "testing",
									order:
										at === q.TestRunProfileBitset.Run
											? rt.RunAtCursor
											: rt.DebugAtCursor,
									when: $.$Kj.and(
										V.TestingContextKeys.activeEditorHasTests,
										V.TestingContextKeys.capabilityToContextKey[at],
									),
								},
							],
						}),
							(this.c = at);
					}
					async run(tt) {
						const at = tt.get(m.$dtb),
							pi = tt.get(W.$IY),
							Li = pi.activeEditorPane;
						let Di = at.getActiveCodeEditor();
						if (!Li || !Di) return;
						Di instanceof r.$wDb && (Di = Di.getParentEditor());
						const Ui = Di?.getPosition(),
							Wi = Di?.getModel();
						if (!Ui || !Wi || !("uri" in Wi)) return;
						const Gi = tt.get(H.$sqc),
							qi = tt.get(F.$Bqc),
							Oi = tt.get(k.$Vl),
							yi = tt.get(I.$8N),
							Ai = tt.get(y.$gj);
						(0, O.$RJc)(Ai, O.TestingConfigKeys.SaveBeforeTest) &&
							(await pi.save({ editor: Li.input, groupId: Li.group.id }),
							await Gi.syncTests());
						const Vi = await Te(
							yi,
							et(
								Gi,
								Oi,
								Wi.uri,
								Ui,
								(_t) => !!(qi.capabilitiesForTest(_t.item) & this.c),
							),
						);
						if (Vi.length) {
							await Gi.runTests({ group: this.c, tests: Vi });
							return;
						}
						const wi = await Gi.getTestsRelatedToCode(Wi.uri, Ui);
						if (wi.length) {
							await Gi.runTests({ group: this.c, tests: wi });
							return;
						}
						Di && p.$Szb.get(Di)?.showMessage((0, f.localize)(10685, null), Ui);
					}
				}
				class bt extends ft {
					constructor() {
						super(
							{
								id: B.TestCommandId.RunAtCursor,
								title: (0, f.localize2)(10724, "Run Test at Cursor"),
								category: ie,
								keybinding: {
									weight: v.KeybindingWeight.WorkbenchContrib,
									when: c.EditorContextKeys.editorTextFocus,
									primary: (0, E.$os)(
										E.KeyMod.CtrlCmd | E.KeyCode.Semicolon,
										E.KeyCode.KeyC,
									),
								},
							},
							q.TestRunProfileBitset.Run,
						);
					}
				}
				e.$fMc = bt;
				class nt extends ft {
					constructor() {
						super(
							{
								id: B.TestCommandId.DebugAtCursor,
								title: (0, f.localize2)(10725, "Debug Test at Cursor"),
								category: ie,
								keybinding: {
									weight: v.KeybindingWeight.WorkbenchContrib,
									when: c.EditorContextKeys.editorTextFocus,
									primary: (0, E.$os)(
										E.KeyMod.CtrlCmd | E.KeyCode.Semicolon,
										E.KeyMod.CtrlCmd | E.KeyCode.KeyC,
									),
								},
							},
							q.TestRunProfileBitset.Debug,
						);
					}
				}
				e.$gMc = nt;
				class lt extends ft {
					constructor() {
						super(
							{
								id: B.TestCommandId.CoverageAtCursor,
								title: (0, f.localize2)(
									10726,
									"Run Test at Cursor with Coverage",
								),
								category: ie,
								keybinding: {
									weight: v.KeybindingWeight.WorkbenchContrib,
									when: c.EditorContextKeys.editorTextFocus,
									primary: (0, E.$os)(
										E.KeyMod.CtrlCmd | E.KeyCode.Semicolon,
										E.KeyMod.CtrlCmd | E.KeyMod.Shift | E.KeyCode.KeyC,
									),
								},
							},
							q.TestRunProfileBitset.Coverage,
						);
					}
				}
				e.$hMc = lt;
				class ct extends s.$3X {
					constructor(tt, at) {
						super({
							...tt,
							menu: [
								{
									id: s.$XX.ExplorerContext,
									when: V.TestingContextKeys.capabilityToContextKey[
										at
									].isEqualTo(!0),
									group: "6.5_testing",
									order:
										(at === q.TestRunProfileBitset.Run ? ne.Run : ne.Debug) +
										0.1,
								},
							],
						}),
							(this.c = at);
					}
					async run(tt, at) {
						const pi = tt.get(H.$sqc),
							Li = tt.get(S.$4N),
							Di = await w.Iterable.asyncToArray(
								(0, H.$xqc)(pi, tt.get(k.$Vl), at),
							);
						if (!Di.length) {
							Li.notify({
								message: (0, f.localize)(10686, null),
								severity: S.Severity.Info,
							});
							return;
						}
						return pi.runTests({ tests: Di, group: this.c });
					}
				}
				class gt extends ct {
					constructor() {
						super(
							{ id: B.TestCommandId.RunByUri, title: _, category: ie },
							q.TestRunProfileBitset.Run,
						);
					}
				}
				class ht extends ct {
					constructor() {
						super(
							{ id: B.TestCommandId.DebugByUri, title: te, category: ie },
							q.TestRunProfileBitset.Debug,
						);
					}
				}
				class Rt extends ct {
					constructor() {
						super(
							{ id: B.TestCommandId.CoverageByUri, title: Q, category: ie },
							q.TestRunProfileBitset.Coverage,
						);
					}
				}
				class Nt extends s.$3X {
					constructor(tt, at) {
						super({
							...tt,
							menu: [
								{
									id: s.$XX.CommandPalette,
									when: V.TestingContextKeys.capabilityToContextKey[
										at
									].isEqualTo(!0),
								},
								{
									id: s.$XX.EditorContext,
									group: "testing",
									order:
										at === q.TestRunProfileBitset.Run
											? rt.RunInFile
											: rt.DebugInFile,
									when: $.$Kj.and(
										V.TestingContextKeys.activeEditorHasTests,
										V.TestingContextKeys.capabilityToContextKey[at],
									),
								},
							],
						}),
							(this.c = at);
					}
					run(tt) {
						let at = tt.get(m.$dtb).getActiveCodeEditor();
						if (!at) return;
						at instanceof r.$wDb && (at = at.getParentEditor());
						const pi = at?.getPosition(),
							Li = at?.getModel();
						if (!pi || !Li || !("uri" in Li)) return;
						const Di = tt.get(H.$sqc),
							Ui = Li.uri.toString(),
							Wi = [Di.collection.rootIds],
							Gi = [];
						for (; Wi.length; )
							for (const qi of Wi.pop()) {
								const Oi = Di.collection.getNodeById(qi);
								Oi.item.uri?.toString() === Ui
									? Gi.push(Oi)
									: Wi.push(Oi.children);
							}
						if (Gi.length) return Di.runTests({ tests: Gi, group: this.c });
						at && p.$Szb.get(at)?.showMessage((0, f.localize)(10687, null), pi);
					}
				}
				class jt extends Nt {
					constructor() {
						super(
							{
								id: B.TestCommandId.RunCurrentFile,
								title: (0, f.localize2)(10727, "Run Tests in Current File"),
								category: ie,
								keybinding: {
									weight: v.KeybindingWeight.WorkbenchContrib,
									when: c.EditorContextKeys.editorTextFocus,
									primary: (0, E.$os)(
										E.KeyMod.CtrlCmd | E.KeyCode.Semicolon,
										E.KeyCode.KeyF,
									),
								},
							},
							q.TestRunProfileBitset.Run,
						);
					}
				}
				e.$iMc = jt;
				class ti extends Nt {
					constructor() {
						super(
							{
								id: B.TestCommandId.DebugCurrentFile,
								title: (0, f.localize2)(10728, "Debug Tests in Current File"),
								category: ie,
								keybinding: {
									weight: v.KeybindingWeight.WorkbenchContrib,
									when: c.EditorContextKeys.editorTextFocus,
									primary: (0, E.$os)(
										E.KeyMod.CtrlCmd | E.KeyCode.Semicolon,
										E.KeyMod.CtrlCmd | E.KeyCode.KeyF,
									),
								},
							},
							q.TestRunProfileBitset.Debug,
						);
					}
				}
				e.$jMc = ti;
				class kt extends Nt {
					constructor() {
						super(
							{
								id: B.TestCommandId.CoverageCurrentFile,
								title: (0, f.localize2)(
									10729,
									"Run Tests with Coverage in Current File",
								),
								category: ie,
								keybinding: {
									weight: v.KeybindingWeight.WorkbenchContrib,
									when: c.EditorContextKeys.editorTextFocus,
									primary: (0, E.$os)(
										E.KeyMod.CtrlCmd | E.KeyCode.Semicolon,
										E.KeyMod.CtrlCmd | E.KeyMod.Shift | E.KeyCode.KeyF,
									),
								},
							},
							q.TestRunProfileBitset.Coverage,
						);
					}
				}
				e.$kMc = kt;
				const hi = async (Wt, tt, at, pi) => {
					const Li = Promise.all(at.map((Ui) => (0, H.$vqc)(Wt, Ui))),
						Di = (await Te(tt, Li)).filter(d.$tg);
					return Di.length ? await pi(Di) : void 0;
				};
				e.$lMc = hi;
				class Kt extends s.$3X {
					async run(tt, ...at) {
						const pi = tt.get(H.$sqc);
						await (0, e.$lMc)(
							tt.get(H.$sqc).collection,
							tt.get(I.$8N),
							[...this.c(tt, ...at)],
							(Li) => this.d(pi, Li),
						);
					}
				}
				class di extends Kt {
					constructor(tt) {
						super({ ...tt, menu: { id: s.$XX.CommandPalette, when: ee } });
					}
					c(tt) {
						const { results: at } = tt.get(x.$Kqc),
							pi = new Set();
						for (let Li = at.length - 1; Li >= 0; Li--) {
							const Di = at[Li];
							for (const Ui of Di.tests)
								(0, J.$v4)(Ui.ownComputedState)
									? pi.add(Ui.item.extId)
									: pi.delete(Ui.item.extId);
						}
						return pi;
					}
				}
				class Ye extends s.$3X {
					constructor(tt) {
						super({
							...tt,
							menu: {
								id: s.$XX.CommandPalette,
								when: $.$Kj.and(
									ee,
									V.TestingContextKeys.hasAnyResults.isEqualTo(!0),
								),
							},
						});
					}
					d(tt, at) {
						const pi = tt.get(x.$Kqc);
						return (at ? pi.results.find((Di) => Di.id === at) : pi.results[0])
							?.request;
					}
					async run(tt, at) {
						const pi = tt.get(x.$Kqc),
							Li = at ? pi.results.find((qi) => qi.id === at) : pi.results[0];
						if (!Li) return;
						const Di = Li.request,
							Ui = tt.get(H.$sqc),
							Wi = tt.get(F.$Bqc),
							Gi = (qi) =>
								Wi.getControllerProfiles(qi.controllerId).some(
									(Oi) => Oi.profileId === qi.profileId,
								);
						await (0, e.$lMc)(
							Ui.collection,
							tt.get(I.$8N),
							Di.targets.flatMap((qi) => qi.testIds),
							(qi) =>
								this.c() & Di.group && Di.targets.every(Gi)
									? Ui.runResolvedTests({
											targets: Di.targets,
											group: Di.group,
											exclude: Di.exclude,
										})
									: Ui.runTests({ tests: qi, group: this.c() }),
						);
					}
				}
				class ze extends di {
					constructor() {
						super({
							id: B.TestCommandId.ReRunFailedTests,
							title: (0, f.localize2)(10730, "Rerun Failed Tests"),
							category: ie,
							keybinding: {
								weight: v.KeybindingWeight.WorkbenchContrib,
								primary: (0, E.$os)(
									E.KeyMod.CtrlCmd | E.KeyCode.Semicolon,
									E.KeyCode.KeyE,
								),
							},
						});
					}
					d(tt, at) {
						return tt.runTests({
							group: q.TestRunProfileBitset.Run,
							tests: at,
						});
					}
				}
				e.$mMc = ze;
				class Xe extends di {
					constructor() {
						super({
							id: B.TestCommandId.DebugFailedTests,
							title: (0, f.localize2)(10731, "Debug Failed Tests"),
							category: ie,
							keybinding: {
								weight: v.KeybindingWeight.WorkbenchContrib,
								primary: (0, E.$os)(
									E.KeyMod.CtrlCmd | E.KeyCode.Semicolon,
									E.KeyMod.CtrlCmd | E.KeyCode.KeyE,
								),
							},
						});
					}
					d(tt, at) {
						return tt.runTests({
							group: q.TestRunProfileBitset.Debug,
							tests: at,
						});
					}
				}
				e.$nMc = Xe;
				class It extends Ye {
					constructor() {
						super({
							id: B.TestCommandId.ReRunLastRun,
							title: (0, f.localize2)(10732, "Rerun Last Run"),
							category: ie,
							keybinding: {
								weight: v.KeybindingWeight.WorkbenchContrib,
								primary: (0, E.$os)(
									E.KeyMod.CtrlCmd | E.KeyCode.Semicolon,
									E.KeyCode.KeyL,
								),
							},
						});
					}
					c() {
						return q.TestRunProfileBitset.Run;
					}
				}
				e.$oMc = It;
				class Lt extends Ye {
					constructor() {
						super({
							id: B.TestCommandId.DebugLastRun,
							title: (0, f.localize2)(10733, "Debug Last Run"),
							category: ie,
							keybinding: {
								weight: v.KeybindingWeight.WorkbenchContrib,
								primary: (0, E.$os)(
									E.KeyMod.CtrlCmd | E.KeyCode.Semicolon,
									E.KeyMod.CtrlCmd | E.KeyCode.KeyL,
								),
							},
						});
					}
					c() {
						return q.TestRunProfileBitset.Debug;
					}
				}
				e.$pMc = Lt;
				class xt extends Ye {
					constructor() {
						super({
							id: B.TestCommandId.CoverageLastRun,
							title: (0, f.localize2)(10734, "Rerun Last Run with Coverage"),
							category: ie,
							keybinding: {
								weight: v.KeybindingWeight.WorkbenchContrib,
								primary: (0, E.$os)(
									E.KeyMod.CtrlCmd | E.KeyCode.Semicolon,
									E.KeyMod.CtrlCmd | E.KeyMod.Shift | E.KeyCode.KeyL,
								),
							},
						});
					}
					c() {
						return q.TestRunProfileBitset.Coverage;
					}
				}
				e.$qMc = xt;
				class Vt extends s.$3X {
					constructor() {
						super({
							id: B.TestCommandId.SearchForTestExtension,
							title: (0, f.localize2)(10735, "Search for Test Extension"),
						});
					}
					async run(tt) {
						const pi = (
							await tt
								.get(X.$6Sb)
								.openPaneComposite(N.$LQb, M.ViewContainerLocation.Sidebar, !0)
						)?.getViewPaneContainer();
						pi.search('@category:"testing"'), pi.focus();
					}
				}
				e.$rMc = Vt;
				class Bt extends s.$3X {
					constructor() {
						super({
							id: B.TestCommandId.OpenOutputPeek,
							title: (0, f.localize2)(10736, "Peek Output"),
							category: ie,
							keybinding: {
								weight: v.KeybindingWeight.WorkbenchContrib,
								primary: (0, E.$os)(
									E.KeyMod.CtrlCmd | E.KeyCode.Semicolon,
									E.KeyMod.CtrlCmd | E.KeyCode.KeyM,
								),
							},
							menu: {
								id: s.$XX.CommandPalette,
								when: V.TestingContextKeys.hasAnyResults.isEqualTo(!0),
							},
						});
					}
					async run(tt) {
						tt.get(K.$ZKc).open();
					}
				}
				e.$sMc = Bt;
				class Gt extends s.$3X {
					constructor() {
						super({
							id: B.TestCommandId.ToggleInlineTestOutput,
							title: (0, f.localize2)(10737, "Toggle Inline Test Output"),
							category: ie,
							keybinding: {
								weight: v.KeybindingWeight.WorkbenchContrib,
								primary: (0, E.$os)(
									E.KeyMod.CtrlCmd | E.KeyCode.Semicolon,
									E.KeyMod.CtrlCmd | E.KeyCode.KeyI,
								),
							},
							menu: {
								id: s.$XX.CommandPalette,
								when: V.TestingContextKeys.hasAnyResults.isEqualTo(!0),
							},
						});
					}
					async run(tt) {
						const at = tt.get(H.$sqc);
						at.showInlineOutput.value = !at.showInlineOutput.value;
					}
				}
				e.$tMc = Gt;
				const Mt = (Wt) => [
					{
						id: s.$XX.TestItem,
						group: "inline",
						order: ne.Refresh,
						when: $.$Kj.and(
							V.TestingContextKeys.canRefreshTests.isEqualTo(!0),
							V.TestingContextKeys.isRefreshingTests.isEqualTo(Wt),
						),
					},
					{
						id: s.$XX.ViewTitle,
						group: "navigation",
						order: ne.Refresh,
						when: $.$Kj.and(
							$.$Kj.equals("view", B.Testing.ExplorerViewId),
							V.TestingContextKeys.canRefreshTests.isEqualTo(!0),
							V.TestingContextKeys.isRefreshingTests.isEqualTo(Wt),
						),
					},
					{
						id: s.$XX.CommandPalette,
						when: V.TestingContextKeys.canRefreshTests.isEqualTo(!0),
					},
				];
				class Ut extends s.$3X {
					constructor() {
						super({
							id: B.TestCommandId.RefreshTestsAction,
							title: (0, f.localize2)(10738, "Refresh Tests"),
							category: ie,
							icon: R.$HKc,
							keybinding: {
								weight: v.KeybindingWeight.WorkbenchContrib,
								primary: (0, E.$os)(
									E.KeyMod.CtrlCmd | E.KeyCode.Semicolon,
									E.KeyMod.CtrlCmd | E.KeyCode.KeyR,
								),
								when: V.TestingContextKeys.canRefreshTests.isEqualTo(!0),
							},
							menu: Mt(!1),
						});
					}
					async run(tt, ...at) {
						const pi = tt.get(H.$sqc),
							Li = tt.get(I.$8N),
							Di = (0, t.$Qb)(
								at.filter(d.$tg).map((Ui) => Ui.test.controllerId),
							);
						return Li.withProgress(
							{ location: B.Testing.ViewletId },
							async () => {
								Di.length
									? await Promise.all(Di.map((Ui) => pi.refreshTests(Ui)))
									: await pi.refreshTests();
							},
						);
					}
				}
				e.$uMc = Ut;
				class ei extends s.$3X {
					constructor() {
						super({
							id: B.TestCommandId.CancelTestRefreshAction,
							title: (0, f.localize2)(10739, "Cancel Test Refresh"),
							category: ie,
							icon: R.$LKc,
							menu: Mt(!0),
						});
					}
					async run(tt) {
						tt.get(H.$sqc).cancelRefreshTests();
					}
				}
				e.$vMc = ei;
				class mi extends s.$3X {
					constructor() {
						super({
							id: B.TestCommandId.CoverageClear,
							title: (0, f.localize2)(10740, "Clear Coverage"),
							icon: P.$bP,
							category: ie,
							menu: [
								{
									id: s.$XX.ViewTitle,
									group: "navigation",
									order: ne.Refresh,
									when: $.$Kj.equals("view", B.Testing.CoverageViewId),
								},
								{
									id: s.$XX.CommandPalette,
									when: V.TestingContextKeys.isTestCoverageOpen.isEqualTo(!0),
								},
							],
						});
					}
					run(tt) {
						tt.get(U.$TJc).closeCoverage();
					}
				}
				e.$wMc = mi;
				class ii extends s.$3X {
					constructor() {
						super({
							id: B.TestCommandId.OpenCoverage,
							title: (0, f.localize2)(10741, "Open Coverage"),
							category: ie,
							menu: [
								{
									id: s.$XX.CommandPalette,
									when: V.TestingContextKeys.hasAnyResults.isEqualTo(!0),
								},
							],
						});
					}
					run(tt) {
						const at = tt.get(x.$Kqc).results,
							pi = at.length && at[0].tasks.find((Li) => Li.coverage);
						if (!pi) {
							tt.get(S.$4N).info((0, f.localize)(10688, null));
							return;
						}
						tt.get(U.$TJc).openCoverage(pi, !0);
					}
				}
				e.$xMc = ii;
				class Dt extends n.$WOb {
					runEditorCommand(tt, at, ...pi) {
						return (
							(this.q = tt.get(H.$sqc)),
							(this.s = tt.get(k.$Vl)),
							super.runEditorCommand(tt, at, ...pi)
						);
					}
					k(tt) {
						return tt.getOption(u.EditorOption.gotoLocation)
							.alternativeTestsCommand;
					}
					l(tt) {
						return (
							tt.getOption(u.EditorOption.gotoLocation).multipleTests || "peek"
						);
					}
				}
				class Jt extends Dt {
					async h(tt, at, pi, Li) {
						const Di = await this.q.getTestsRelatedToCode(at.uri, pi, Li);
						return new g.$pNb(
							Di.map(
								(Ui) =>
									Ui.item.uri && {
										uri: Ui.item.uri,
										range: Ui.item.range || new h.$iL(1, 1, 1, 1),
									},
							).filter(d.$tg),
							(0, f.localize)(10689, null),
						);
					}
					j() {
						return (0, f.localize)(10690, null);
					}
				}
				class si extends Jt {
					constructor() {
						super(
							{ openToSide: !1, openInPeek: !1, muteMessage: !1 },
							{
								id: B.TestCommandId.GoToRelatedTest,
								title: (0, f.localize2)(10742, "Go to Related Test"),
								category: ie,
								precondition: $.$Kj.and(
									$.$Kj.not(V.TestingContextKeys.activeEditorHasTests.key),
									V.TestingContextKeys.canGoToRelatedTest,
								),
								menu: [
									{
										id: s.$XX.EditorContext,
										group: "testing",
										order: rt.GoToRelated,
									},
								],
							},
						);
					}
				}
				class Zt extends Jt {
					constructor() {
						super(
							{ openToSide: !1, openInPeek: !0, muteMessage: !1 },
							{
								id: B.TestCommandId.PeekRelatedTest,
								title: (0, f.localize2)(10743, "Peek Related Test"),
								category: ie,
								precondition: $.$Kj.and(
									V.TestingContextKeys.canGoToRelatedTest,
									$.$Kj.not(V.TestingContextKeys.activeEditorHasTests.key),
									o.PeekContext.notInPeekEditor,
									c.EditorContextKeys.isInEmbeddedEditor.toNegated(),
								),
								menu: [
									{
										id: s.$XX.EditorContext,
										group: "testing",
										order: rt.PeekRelated,
									},
								],
							},
						);
					}
				}
				class ci extends Dt {
					async h(tt, at, pi, Li) {
						const Di = await et(this.q, this.s, at.uri, pi),
							Ui = await Promise.all(
								Di.map((Wi) => this.q.getCodeRelatedToTest(Wi)),
							);
						return new g.$pNb(Ui.flat(), (0, f.localize)(10691, null));
					}
					j() {
						return (0, f.localize)(10692, null);
					}
				}
				class ri extends ci {
					constructor() {
						super(
							{ openToSide: !1, openInPeek: !1, muteMessage: !1 },
							{
								id: B.TestCommandId.GoToRelatedCode,
								title: (0, f.localize2)(10744, "Go to Related Code"),
								category: ie,
								precondition: $.$Kj.and(
									V.TestingContextKeys.activeEditorHasTests,
									V.TestingContextKeys.canGoToRelatedCode,
								),
								menu: [
									{
										id: s.$XX.EditorContext,
										group: "testing",
										order: rt.GoToRelated,
									},
								],
							},
						);
					}
				}
				class $i extends ci {
					constructor() {
						super(
							{ openToSide: !1, openInPeek: !0, muteMessage: !1 },
							{
								id: B.TestCommandId.PeekRelatedCode,
								title: (0, f.localize2)(10745, "Peek Related Code"),
								category: ie,
								precondition: $.$Kj.and(
									V.TestingContextKeys.activeEditorHasTests,
									V.TestingContextKeys.canGoToRelatedCode,
									o.PeekContext.notInPeekEditor,
									c.EditorContextKeys.isInEmbeddedEditor.toNegated(),
								),
								menu: [
									{
										id: s.$XX.EditorContext,
										group: "testing",
										order: rt.PeekRelated,
									},
								],
							},
						);
					}
				}
				e.$yMc = [
					ei,
					ke,
					mi,
					Ve,
					je,
					ve,
					fe,
					me,
					pe,
					Se,
					lt,
					kt,
					xt,
					Je,
					Rt,
					ae,
					Be,
					nt,
					ti,
					Xe,
					Lt,
					Ke,
					ht,
					xe,
					Oe,
					ri,
					si,
					Ze,
					Z,
					ii,
					Bt,
					$i,
					Zt,
					Ut,
					ze,
					It,
					ye,
					Ie,
					bt,
					jt,
					He,
					gt,
					$e,
					Vt,
					ue,
					Re,
					Le,
					be,
					De,
					Me,
					Ae,
					Ue,
					qe,
					Gt,
					re,
					se,
				];
			},
		),
		define(
			de[3843],
			he([
				1, 0, 7, 105, 182, 50, 15, 14, 6, 103, 3, 221, 77, 37, 26, 28, 4, 92,
				11, 31, 8, 49, 5, 93, 84, 32, 79, 1267, 470, 999, 1002, 353, 630, 1001,
				420, 421, 381, 185, 380, 563, 813, 18,
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
				B,
				U,
				z,
				F,
				x,
			) {
				"use strict";
				var H;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$zLc = void 0),
					(t = mt(t)),
					(P = mt(P));
				class q {
					get icon() {
						return P.$PKc.get(
							this.value.completedAt === void 0
								? B.TestResultState.Running
								: (0, R.$N4)(this.value.counts),
						);
					}
					constructor(Z) {
						(this.value = Z),
							(this.changeEmitter = new m.$re()),
							(this.onDidChange = this.changeEmitter.event),
							(this.type = "result"),
							(this.context = this.value.id),
							(this.id = this.value.id),
							(this.label = this.value.name);
					}
				}
				const V = (0, p.localize)(10820, null),
					G = (0, p.localize)(10821, null);
				class K {
					get label() {
						return this.isOpen ? G : V;
					}
					get icon() {
						return this.isOpen ? I.$bP : P.$MKc;
					}
					get isOpen() {
						return this.f.selected.get()?.fromTaskId === this.task.id;
					}
					constructor(Z, se, re) {
						(this.d = Z),
							(this.task = se),
							(this.f = re),
							(this.type = "coverage"),
							(this.id = `coverage-${this.d.id}/${this.task.id}`),
							(this.onDidChange = m.Event.fromObservableLight(re.selected));
					}
				}
				class J {
					constructor(Z) {
						(this.d = Z),
							(this.type = "older"),
							(this.id = `older-${this.d}`),
							(this.onDidChange = m.Event.None),
							(this.label = (0, p.localize)(10822, null, Z));
					}
				}
				class W {
					get onDidChange() {
						return this.results instanceof R.$O4
							? m.Event.filter(
									this.results.onChange,
									(Z) => Z.item.item.extId === this.test.item.extId,
								)
							: m.Event.None;
					}
					get state() {
						return this.test.tasks[this.taskIndex].state;
					}
					get label() {
						return this.test.item.label;
					}
					get labelWithIcons() {
						return (0, w.$Sib)(this.label);
					}
					get icon() {
						return P.$PKc.get(this.state);
					}
					get outputSubject() {
						return new L.$gLc(this.results, this.taskIndex, this.test);
					}
					constructor(Z, se, re) {
						(this.results = Z),
							(this.test = se),
							(this.taskIndex = re),
							(this.type = "test"),
							(this.context = {
								$mid: a.MarshalledId.TestItemContext,
								tests: [B.InternalTestItem.serialize(this.test)],
							}),
							(this.id = `${this.results.id}/${this.test.item.extId}`);
					}
				}
				class X {
					get icon() {
						return this.results.tasks[this.index].running
							? P.$PKc.get(B.TestResultState.Running)
							: void 0;
					}
					constructor(Z, se, re) {
						(this.results = Z),
							(this.task = se),
							(this.index = re),
							(this.changeEmitter = new m.$re()),
							(this.onDidChange = this.changeEmitter.event),
							(this.type = "task"),
							(this.itemsCache = new _()),
							(this.id = `${Z.id}/${re}`),
							(this.task = Z.tasks[re]),
							(this.context = { resultId: Z.id, taskId: this.task.id }),
							(this.label = this.task.name);
					}
				}
				class Y {
					get onDidChange() {
						return this.result instanceof R.$O4
							? m.Event.filter(
									this.result.onChange,
									(Z) => Z.item.item.extId === this.test.item.extId,
								)
							: m.Event.None;
					}
					get context() {
						return (0, L.$cLc)(this.test, this.message);
					}
					get outputSubject() {
						return new L.$gLc(this.result, this.taskIndex, this.test);
					}
					constructor(Z, se, re, le) {
						(this.result = Z),
							(this.test = se),
							(this.taskIndex = re),
							(this.messageIndex = le),
							(this.type = "message");
						const oe = (this.message = se.tasks[re].messages[le]);
						(this.location = oe.location),
							(this.contextValue =
								oe.type === B.TestMessageType.Error ? oe.contextValue : void 0),
							(this.uri = (0, F.$3Kc)({
								type: F.TestUriType.ResultMessage,
								messageIndex: le,
								resultId: Z.id,
								taskIndex: re,
								testExtId: se.item.extId,
							})),
							(this.id = this.uri.toString());
						const ae = (0, k.$VKc)(oe.message),
							pe = (0, c.$pf)(
								ae.trimEnd(),
								`
`,
							);
						(this.label = te(ae)),
							pe > 0 &&
								(this.description =
									pe > 1
										? (0, p.localize)(10823, null, pe)
										: (0, p.localize)(10824, null));
					}
				}
				let ie = class extends u.$1c {
					constructor(Z, se, re, le, oe, ae, pe, $e, ye, ue) {
						super(),
							(this.q = le),
							(this.f = !1),
							(this.j = this.D(new m.$re())),
							(this.onDidRequestReview = this.j.event),
							(this.h = ae.createInstance(
								ee,
								re.showRevealLocationOnMessages,
								this.j,
							));
						const fe = {
							getId(Ke) {
								return Ke.id;
							},
						};
						this.g = this.D(
							ae.createInstance(
								$.$DMb,
								"Test Output Peek",
								Z,
								{ getHeight: () => 22, getTemplateId: () => ne.ID },
								[ae.createInstance(ne, this.h)],
								{
									compressionEnabled: !0,
									hideTwistiesOfChildlessElements: !0,
									identityProvider: fe,
									sorter: {
										compare(Ke, Je) {
											return Ke instanceof W && Je instanceof W
												? (0, z.$y4)(Ke.state, Je.state)
												: 0;
										},
									},
									accessibilityProvider: {
										getAriaLabel(Ke) {
											return Ke.ariaLabel || Ke.label;
										},
										getWidgetAriaLabel() {
											return (0, p.localize)(10825, null);
										},
									},
								},
							),
						);
						const me = new _(),
							ve = (Ke) => {
								const { results: Je, index: Te, itemsCache: Ee, task: Ie } = Ke,
									Be = r.Iterable.filter(
										Je.tests,
										(ke) =>
											ke.tasks[Te].state >= B.TestResultState.Running ||
											ke.tasks[Te].messages.length > 0,
									);
								let Se = r.Iterable.map(Be, (ke) => ({
									element: Ee.getOrCreate(ke, () => new W(Je, ke, Te)),
									incompressible: !0,
									children: ge(Je, ke, Te),
								}));
								return (
									Ie.coverage.get() &&
										(Se = r.Iterable.concat(
											r.Iterable.single({
												element: new K(Je, Ie, $e),
												collapsible: !0,
												incompressible: !0,
											}),
											Se,
										)),
									Se
								);
							},
							ge = (Ke, Je, Te) =>
								Je.tasks[Te].messages
									.map((Ee, Ie) =>
										Ee.type === B.TestMessageType.Error
											? {
													element: me.getOrCreate(
														Ee,
														() => new Y(Ke, Je, Te, Ie),
													),
													incompressible: !1,
												}
											: void 0,
									)
									.filter(g.$tg),
							be = (Ke) =>
								Ke.tasks.map((Je, Te) => {
									const Ee = me.getOrCreate(Je, () => new X(Ke, Je, Te));
									return {
										element: Ee,
										incompressible: !1,
										collapsible: !0,
										children: ve(Ee),
									};
								}),
							Ce = () => {
								let Ke = [];
								const Je = [];
								for (const Te of oe.results)
									if (!Ke.length && Te.tasks.length) Ke = be(Te);
									else if (Ke) {
										const Ee = me.getOrCreate(Te, () => new q(Te));
										Je.push({
											element: Ee,
											incompressible: !0,
											collapsible: !0,
											collapsed: this.g.hasElement(Ee)
												? this.g.isCollapsed(Ee)
												: !0,
											children: be(Te),
										});
									}
								return Ke.length
									? (Je.length &&
											Ke.push({
												element: new J(Je.length),
												incompressible: !0,
												collapsible: !0,
												collapsed: !0,
												children: Je,
											}),
										Ke)
									: Je;
							},
							Le = new Set(),
							Fe = this.D(
								new C.$Yh(() => {
									for (const Ke of Le)
										this.g.hasElement(Ke) &&
											this.g.setChildren(Ke, ve(Ke), {
												diffIdentityProvider: fe,
											});
									Le.clear();
								}, 300),
							),
							Oe = (Ke) => {
								Le.add(Ke), Fe.isScheduled() || Fe.schedule();
							},
							xe = (Ke) => {
								const Je = new u.$Zc();
								Je.add(
									Ke.onNewTask((Te) => {
										this.g.setChildren(null, Ce(), {
											diffIdentityProvider: fe,
										}),
											Ke.tasks.length === 1 && this.j.fire(new L.$fLc(Ke, 0));
										const Ee = Ke.tasks[Te];
										Je.add(
											(0, h.autorun)((Ie) => {
												Ee.coverage.read(Ie), Oe(me.get(Ee));
											}),
										);
									}),
								),
									Je.add(
										Ke.onEndTask((Te) => {
											me.get(Ke.tasks[Te])?.changeEmitter.fire();
										}),
									),
									Je.add(
										Ke.onChange((Te) => {
											for (const [Ee, Ie] of Ke.tasks.entries()) {
												const Be = me.get(Ie);
												if (!this.g.hasElement(Be)) continue;
												const Se = Be.itemsCache.get(Te.item);
												if (Se && this.g.hasElement(Se)) {
													Te.reason ===
														R.TestResultItemChangeReason.NewMessage &&
														Te.message.type === B.TestMessageType.Error &&
														this.g.setChildren(Se, ge(Ke, Te.item, Ee), {
															diffIdentityProvider: fe,
														});
													return;
												}
												Oe(Be);
											}
										}),
									),
									Je.add(
										Ke.onComplete(() => {
											me.get(Ke)?.changeEmitter.fire(), Je.dispose();
										}),
									);
							};
						this.D(
							oe.onResultsChanged((Ke) => {
								this.f ||
									("completed" in Ke
										? me.get(Ke.completed)?.changeEmitter.fire()
										: "started" in Ke
											? xe(Ke.started)
											: this.g.setChildren(null, Ce(), {
													diffIdentityProvider: fe,
												}));
							}),
						);
						const He = (Ke, Je) => {
							this.g.setFocus([Ke]),
								this.g.setSelection([Ke]),
								Je || this.g.domFocus();
						};
						this.D(
							se(async ({ subject: Ke, preserveFocus: Je = !1 }) => {
								if (Ke instanceof L.$fLc) {
									const Ie = this.g
										.getNode(null)
										.children.find((Be) =>
											Be.element instanceof X
												? Be.element.results.id === Ke.result.id &&
													Be.element.index === Ke.taskIndex
												: Be.element instanceof q
													? Be.element.id === Ke.result.id
													: !1,
										);
									Ie && He(Ie.element, Je);
									return;
								}
								const Te =
									Ke instanceof L.$gLc
										? me.get(Ke.task)?.itemsCache.get(Ke.test)
										: me.get(Ke.message);
								if (!Te || !this.g.hasElement(Te)) return;
								const Ee = [];
								for (
									let Ie = this.g.getParentElement(Te);
									Ie;
									Ie = this.g.getParentElement(Ie)
								)
									Ee.unshift(Ie);
								for (const Ie of Ee) this.g.expand(Ie);
								this.g.getRelativeTop(Te) === null && this.g.reveal(Te, 0.5),
									He(Te, Je);
							}),
						),
							this.D(
								this.g.onDidOpen(async (Ke) => {
									if (Ke.element instanceof Y)
										this.j.fire(
											new L.$eLc(
												Ke.element.result,
												Ke.element.test,
												Ke.element.taskIndex,
												Ke.element.messageIndex,
											),
										);
									else if (Ke.element instanceof W) {
										const Je = Ke.element,
											Te = (0, L.$iLc)(
												Ke.element.test,
												(Ee, Ie, Be, Se) =>
													new L.$eLc(Je.results, Je.test, Se, Be),
											);
										this.j.fire(Te || new L.$gLc(Je.results, 0, Je.test));
									} else if (Ke.element instanceof K) {
										const Je = Ke.element.task;
										if (Ke.element.isOpen) return $e.closeCoverage();
										ye.withProgress({ location: re.locationForProgress }, () =>
											$e.openCoverage(Je, !0),
										);
									}
								}),
							),
							this.D(
								this.g.onDidChangeSelection((Ke) => {
									for (const Je of Ke.elements)
										if (Je && "test" in Je) {
											pe.reveal.value = Je.test.item.extId;
											break;
										}
								}),
							),
							this.D(this.g.onContextMenu((Ke) => this.r(Ke))),
							this.D(
								this.g.onDidChangeCollapseState((Ke) => {
									Ke.node.element instanceof J &&
										!Ke.node.collapsed &&
										ue.publicLog2("testing.expandOlderResults");
								}),
							),
							this.g.setChildren(null, Ce());
						for (const Ke of oe.results)
							!Ke.completedAt && Ke instanceof R.$O4 && xe(Ke);
					}
					layout(Z, se) {
						this.g.layout(Z, se);
					}
					r(Z) {
						if (!Z.element) return;
						const se = this.h.provideActionBar(Z.element);
						this.q.showContextMenu({
							getAnchor: () => Z.anchor,
							getActions: () =>
								se.secondary.length
									? [...se.primary, new E.$tj(), ...se.secondary]
									: se.primary,
							getActionsContext: () => Z.element?.context,
						});
					}
					dispose() {
						super.dispose(), (this.f = !0);
					}
				};
				(e.$zLc = ie),
					(e.$zLc = ie =
						Ne(
							[
								j(3, l.$Xxb),
								j(4, O.$Kqc),
								j(5, y.$Li),
								j(6, N.$xLc),
								j(7, M.$TJc),
								j(8, v.$8N),
								j(9, S.$km),
							],
							ie,
						));
				let ne = class {
					static {
						H = this;
					}
					static {
						this.ID = "testRunElementRenderer";
					}
					constructor(Z, se) {
						(this.d = Z), (this.f = se), (this.templateId = H.ID);
					}
					renderCompressedElements(Z, se, re) {
						const le = Z.element.elements,
							oe = le[le.length - 1];
						(oe instanceof X || oe instanceof Y) && le.length >= 2
							? this.g(le[le.length - 2], re, oe)
							: this.g(oe, re);
					}
					renderTemplate(Z) {
						const se = new u.$Zc(),
							re = t.$fhb(Z, t.$(".test-peek-item")),
							le = t.$fhb(re, t.$(".state")),
							oe = t.$fhb(re, t.$(".name")),
							ae = new i.$eib(re, {
								actionViewItemProvider: ($e, ye) =>
									$e instanceof f.$2X
										? this.f.createInstance(o.$Lyb, $e, {
												hoverDelegate: ye.hoverDelegate,
											})
										: void 0,
							}),
							pe = new u.$Zc();
						return (
							se.add(pe),
							se.add(ae),
							{
								icon: le,
								label: oe,
								actionBar: ae,
								elementDisposable: pe,
								templateDisposable: se,
							}
						);
					}
					renderElement(Z, se, re) {
						this.g(Z.element, re);
					}
					disposeTemplate(Z) {
						Z.templateDisposable.dispose();
					}
					g(Z, se, re) {
						se.elementDisposable.clear(),
							se.elementDisposable.add(Z.onDidChange(() => this.g(Z, se, re))),
							this.h(Z, se, re);
					}
					h(Z, se, re) {
						let { label: le, labelWithIcons: oe, description: ae } = Z;
						re instanceof Y && (ae = re.label);
						const pe = ae ? t.$("span.test-label-description", {}, ae) : "";
						oe ? t.$hhb(se.label, ...oe, pe) : t.$hhb(se.label, le, pe);
						const $e = Z.icon;
						se.icon.className = `computed-state ${$e ? n.ThemeIcon.asClassName($e) : ""}`;
						const ye = this.d.provideActionBar(Z);
						se.actionBar.clear(),
							(se.actionBar.context = Z.context),
							se.actionBar.push(ye.primary, { icon: !0, label: !1 });
					}
				};
				ne = H = Ne([j(1, y.$Li)], ne);
				let ee = class {
					constructor(Z, se, re, le, oe, ae, pe) {
						(this.d = Z),
							(this.f = se),
							(this.g = re),
							(this.h = le),
							(this.j = oe),
							(this.k = ae),
							(this.l = pe);
					}
					provideActionBar(Z) {
						const se = Z instanceof W ? Z.test : void 0,
							re = se ? this.k.capabilitiesForTest(se.item) : 0,
							le = [
								["peek", D.Testing.OutputPeekContributionId],
								[U.TestingContextKeys.peekItemType.key, Z.type],
							];
						let oe = f.$XX.TestPeekElement;
						const ae = [],
							pe = [];
						if (
							(Z instanceof X &&
								(ae.push(
									new E.$rj(
										"testing.outputPeek.showResultOutput",
										(0, p.localize)(10826, null),
										n.ThemeIcon.asClassName(d.$ak.terminal),
										void 0,
										() => this.f.fire(new L.$fLc(Z.results, Z.index)),
									),
								),
								Z.task.running &&
									ae.push(
										new E.$rj(
											"testing.outputPeek.cancel",
											(0, p.localize)(10827, null),
											n.ThemeIcon.asClassName(P.$BKc),
											void 0,
											() =>
												this.j.executeCommand(
													D.TestCommandId.CancelTestRunAction,
													Z.results.id,
													Z.task.id,
												),
										),
									)),
							Z instanceof q &&
								(Z.value.tasks.length === 1 &&
									ae.push(
										new E.$rj(
											"testing.outputPeek.showResultOutput",
											(0, p.localize)(10828, null),
											n.ThemeIcon.asClassName(d.$ak.terminal),
											void 0,
											() => this.f.fire(new L.$fLc(Z.value, 0)),
										),
									),
								ae.push(
									new E.$rj(
										"testing.outputPeek.reRunLastRun",
										(0, p.localize)(10829, null),
										n.ThemeIcon.asClassName(P.$uKc),
										void 0,
										() =>
											this.j.executeCommand("testing.reRunLastRun", Z.value.id),
									),
								),
								re & B.TestRunProfileBitset.Debug &&
									ae.push(
										new E.$rj(
											"testing.outputPeek.debugLastRun",
											(0, p.localize)(10830, null),
											n.ThemeIcon.asClassName(P.$yKc),
											void 0,
											() =>
												this.j.executeCommand(
													"testing.debugLastRun",
													Z.value.id,
												),
										),
									)),
							Z instanceof W || Z instanceof Y)
						) {
							le.push(
								[U.TestingContextKeys.testResultOutdated.key, Z.test.retired],
								[
									U.TestingContextKeys.testResultState.key,
									B.$l4[Z.test.ownComputedState],
								],
								...(0, T.$UKc)(Z.test, re),
							);
							const fe = Z.test.item.extId;
							Z.test.tasks[Z.taskIndex].messages.some(
								(me) => me.type === B.TestMessageType.Output,
							) &&
								ae.push(
									new E.$rj(
										"testing.outputPeek.showResultOutput",
										(0, p.localize)(10831, null),
										n.ThemeIcon.asClassName(d.$ak.terminal),
										void 0,
										() => this.f.fire(Z.outputSubject),
									),
								),
								pe.push(
									new E.$rj(
										"testing.outputPeek.revealInExplorer",
										(0, p.localize)(10832, null),
										n.ThemeIcon.asClassName(d.$ak.listTree),
										void 0,
										() => this.j.executeCommand("_revealTestInExplorer", fe),
									),
								),
								re & B.TestRunProfileBitset.Run &&
									ae.push(
										new E.$rj(
											"testing.outputPeek.runTest",
											(0, p.localize)(10833, null),
											n.ThemeIcon.asClassName(P.$uKc),
											void 0,
											() =>
												this.j.executeCommand(
													"vscode.runTestsById",
													B.TestRunProfileBitset.Run,
													fe,
												),
										),
									),
								re & B.TestRunProfileBitset.Debug &&
									ae.push(
										new E.$rj(
											"testing.outputPeek.debugTest",
											(0, p.localize)(10834, null),
											n.ThemeIcon.asClassName(P.$yKc),
											void 0,
											() =>
												this.j.executeCommand(
													"vscode.runTestsById",
													B.TestRunProfileBitset.Debug,
													fe,
												),
										),
									);
						}
						Z instanceof Y &&
							((oe = f.$XX.TestMessageContext),
							le.push([
								U.TestingContextKeys.testMessageContext.key,
								Z.contextValue,
							]),
							ae.push(
								new E.$rj(
									"testing.outputPeek.goToTest",
									(0, p.localize)(10835, null),
									n.ThemeIcon.asClassName(d.$ak.goToFile),
									void 0,
									() =>
										this.j.executeCommand(
											"vscode.revealTest",
											Z.test.item.extId,
										),
								),
							),
							this.d &&
								Z.location &&
								ae.push(
									new E.$rj(
										"testing.outputPeek.goToError",
										(0, p.localize)(10836, null),
										n.ThemeIcon.asClassName(d.$ak.goToFile),
										void 0,
										() =>
											this.l.openEditor({
												resource: Z.location.uri,
												options: {
													selection: Z.location.range,
													preserveFocus: !0,
												},
											}),
									),
								));
						const $e = this.g.createOverlay(le),
							ye = { primary: ae, secondary: pe },
							ue = this.h.getMenuActions(oe, $e, { arg: Z.context });
						return (0, o.$Kyb)(ue, ye, "inline"), ye;
					}
				};
				ee = Ne(
					[j(2, s.$6j), j(3, f.$YX), j(4, b.$ek), j(5, A.$Bqc), j(6, x.$IY)],
					ee,
				);
				class _ {
					constructor() {
						this.d = new WeakMap();
					}
					get(Z) {
						return this.d.get(Z);
					}
					getOrCreate(Z, se) {
						const re = this.d.get(Z);
						if (re) return re;
						const le = se();
						return this.d.set(Z, le), le;
					}
				}
				const te = (Q) => {
					const Z = Q.indexOf(`
`);
					return Z === -1 ? Q : Q.slice(0, Z);
				};
			},
		),
		define(
			de[3844],
			he([
				1, 0, 7, 114, 182, 279, 24, 15, 33, 6, 27, 3, 77, 42, 4, 1676, 92, 173,
				11, 31, 8, 5, 128, 63, 68, 1880, 470, 3699, 3440, 1002, 3843, 353, 420,
				421, 379, 185, 380, 2502,
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
				var B;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ALc = void 0),
					(t = mt(t)),
					(I = mt(I));
				var U;
				(function (V) {
					(V[(V.Diff = 0)] = "Diff"), (V[(V.History = 1)] = "History");
				})(U || (U = {}));
				let z = class extends S.$mLc {
					constructor(G, K, J, W, X, Y) {
						super(),
							(this.a = G),
							(this.b = K),
							(this.c = J),
							(this.g = W),
							(this.j = X),
							(this.k = Y),
							(this.height = (0, h.observableValue)(
								"MessageStackFrame.height",
								100,
							)),
							(this.icon = I.$sKc),
							(this.label =
								J instanceof k.$eLc
									? J.test.label
									: J instanceof k.$gLc
										? J.test.item.label
										: J.result.name);
					}
					render(G) {
						return (
							(this.a.style.visibility = "visible"),
							G.appendChild(this.a),
							(0, a.$Yc)(() => this.a.remove())
						);
					}
					renderActions(G) {
						const K = new a.$Zc();
						G.appendChild(this.b.domNode),
							K.add((0, a.$Yc)(() => this.b.domNode.remove()));
						const J = (0, k.$jLc)(this.c),
							W = J && this.k.capabilitiesForTest(J);
						let X;
						if (W) X = this.j.createOverlay((0, M.$Dqc)(W));
						else {
							const ne = this.k.getControllerProfiles(this.c.controllerId);
							X = this.j.createOverlay([
								[
									O.TestingContextKeys.hasRunnableTests.key,
									ne.some((ee) => ee.group & R.TestRunProfileBitset.Run),
								],
								[
									O.TestingContextKeys.hasDebuggableTests.key,
									ne.some((ee) => ee.group & R.TestRunProfileBitset.Debug),
								],
							]);
						}
						const Y = K.add(this.g.createChild(new y.$Ki([s.$6j, X]))),
							ie = K.add(
								Y.createInstance(o.$Tyb, G, f.$XX.TestCallStack, {
									menuOptions: { shouldForwardArgs: !0 },
									actionViewItemProvider: (ne, ee) =>
										(0, p.$Pyb)(this.g, ne, ee),
								}),
							);
						return (ie.context = this.c), K.add(ie), K;
					}
				};
				z = Ne([j(3, l.$Li), j(4, s.$6j), j(5, M.$Bqc)], z);
				function F(V, G, K) {
					if (K instanceof k.$fLc)
						return V.get(b.$ek).executeCommand(
							G === R.TestRunProfileBitset.Debug
								? D.TestCommandId.DebugLastRun
								: D.TestCommandId.ReRunLastRun,
							K.result.id,
						);
					const J = V.get(A.$sqc),
						W = K instanceof k.$eLc ? K.test : K.test.item,
						X = J.collection.getNodeById(W.extId);
					if (X) return J.runTests({ group: G, tests: [X] });
				}
				(0, f.$4X)(
					class extends f.$3X {
						constructor() {
							super({
								id: "testing.callStack.run",
								title: (0, n.localize)(10837, null),
								icon: I.$uKc,
								menu: {
									id: f.$XX.TestCallStack,
									when: O.TestingContextKeys.hasRunnableTests,
									group: "navigation",
								},
							});
						}
						run(V, G) {
							F(V, R.TestRunProfileBitset.Run, G);
						}
					},
				),
					(0, f.$4X)(
						class extends f.$3X {
							constructor() {
								super({
									id: "testing.callStack.debug",
									title: (0, n.localize)(10838, null),
									icon: I.$yKc,
									menu: {
										id: f.$XX.TestCallStack,
										when: O.TestingContextKeys.hasDebuggableTests,
										group: "navigation",
									},
								});
							}
							run(V, G) {
								F(V, R.TestRunProfileBitset.Debug, G);
							}
						},
					);
				let x = class extends a.$1c {
					static {
						B = this;
					}
					get uiState() {
						return {
							splitViewWidths: Array.from({ length: this.z.length }, (G, K) =>
								this.z.getViewSize(K),
							),
						};
					}
					constructor(G, K, J, W, X, Y) {
						super(),
							(this.H = G),
							(this.I = K),
							(this.J = J),
							(this.L = W),
							(this.M = X),
							(this.N = Y),
							(this.b = this.D(new r.$re())),
							(this.c = this.D(new a.$Zc())),
							(this.g = this.D(new r.$Ae())),
							(this.G = this.D(new d.$Sh(1))),
							(this.onClose = this.g.event);
					}
					fillBody(G) {
						const K = B.a;
						this.z = new E.$vob(G, { orientation: E.Orientation.HORIZONTAL });
						const { historyVisible: J, showRevealLocationOnMessages: W } =
								this.I,
							X = this.H !== void 0,
							Y = (this.C = t.$(".test-output-peek-message-container"));
						(this.s = t.$fhb(G, t.$(".test-output-call-stack-container"))),
							(this.t = this.D(this.J.createInstance(T.$oLc, this.s, this.H))),
							(this.j = this.D(this.J.createInstance(q, this.H))),
							(this.g.input = this.j.onClose),
							(this.F = [
								this.D(this.J.createInstance(P.$tLc, this.H, Y)),
								this.D(this.J.createInstance(P.$uLc, Y)),
								this.D(this.J.createInstance(P.$wLc, Y, X)),
								this.D(this.J.createInstance(P.$vLc, this.H, Y)),
							]),
							(this.m = this.D(this.M.createScoped(G))),
							(this.n = O.TestingContextKeys.testMessageContext.bindTo(this.m)),
							(this.q = O.TestingContextKeys.testResultOutdated.bindTo(this.m));
						const ie = t.$fhb(G, t.$(".test-output-peek-tree")),
							ne = this.D(
								this.J.createInstance(L.$zLc, ie, this.b.event, {
									showRevealLocationOnMessages: W,
									locationForProgress: this.I.locationForProgress,
								}),
							);
						(this.onDidRequestReveal = ne.onDidRequestReview),
							this.z.addView(
								{
									onDidChange: r.Event.None,
									element: this.s,
									minimumSize: 200,
									maximumSize: Number.MAX_VALUE,
									layout: (ee) => {
										(B.a = ee),
											this.y &&
												(this.t?.layout(this.y.height, ee), this.Q(this.y, ee));
									},
								},
								E.Sizing.Distribute,
							),
							this.z.addView(
								{
									onDidChange: r.Event.None,
									element: ie,
									minimumSize: 100,
									maximumSize: Number.MAX_VALUE,
									layout: (ee) => {
										this.y && ne.layout(this.y.height, ee);
									},
								},
								E.Sizing.Distribute,
							),
							this.z.setViewVisible(U.History, J.value),
							this.D(
								J.onDidChange((ee) => {
									this.z.setViewVisible(U.History, ee);
								}),
							),
							K && queueMicrotask(() => this.z.resizeView(0, K));
					}
					reveal(G) {
						return (
							this.b.fire(G),
							this.current && (0, k.$hLc)(this.current, G.subject)
								? Promise.resolve()
								: ((this.current = G.subject),
									this.G.queue(async () => {
										this.c.clear();
										const K = this.O(G.subject) || [],
											J = await this.P(G.subject, K);
										this.t.update(J, K),
											this.j.show(G.subject),
											this.R(G.subject);
									}))
						);
					}
					collapseStack() {
						this.t.collapseAll();
					}
					O(G) {
						if (!(G instanceof k.$eLc)) return;
						const K = G.stack;
						if (!K?.length || !this.H) return K;
						const J = K[0],
							W = G.revealLocation;
						return W &&
							J.position &&
							J.uri &&
							J.position.lineNumber === W.range.startLineNumber &&
							J.position.column === W.range.startColumn &&
							this.N.extUri.isEqual(J.uri, W.uri)
							? K.slice(1)
							: K;
					}
					async P(G, K) {
						(this.C.style.visibility = "hidden"), this.s.appendChild(this.C);
						const J = (this.u = this.J.createInstance(z, this.C, this.j, G)),
							W = K.length > 0;
						J.showHeader.set(W, void 0);
						const X = await (0, C.$fc)(this.F, (Y) => Y.update(G));
						return (
							X &&
								(this.y && J.height.set(X.layout(this.y, W), void 0),
								X.onDidContentSizeChange &&
									this.c.add(
										X.onDidContentSizeChange(() => {
											this.y &&
												!this.w &&
												((this.w = !0),
												J.height.set(X.layout(this.y, W), void 0),
												(this.w = !1));
										}),
									)),
							J
						);
					}
					Q(G, K = this.z.getViewSize(U.Diff)) {
						this.w = !0;
						for (const J of this.F) {
							const W = J.layout(
								{ height: G.height, width: K },
								!!this.u?.showHeader.get(),
							);
							W && this.u?.height.set(W, void 0);
						}
						this.w = !1;
					}
					R(G) {
						if (!(G instanceof k.$eLc)) return;
						this.c.add(
							(0, a.$Yc)(() => {
								this.q.reset(), this.n.reset();
							}),
						),
							this.n.set(G.contextValue || ""),
							G.result instanceof N.$O4
								? (this.q.set(
										G.result.getStateById(G.test.extId)?.retired ?? !1,
									),
									this.c.add(
										G.result.onChange((J) => {
											J.item.item.extId === G.test.extId &&
												this.q.set(J.item.retired ?? !1);
										}),
									))
								: this.q.set(!0);
						const K = this.c.add(
							this.J.createChild(new y.$Ki([s.$6j, this.m])),
						);
						this.c.add(
							K.createInstance(g.$t4b, {
								container: this.C,
								menuId: f.$XX.TestMessageContent,
								getActionArg: () => G.context,
							}),
						);
					}
					onLayoutBody(G, K) {
						(this.y = new t.$pgb(K, G)), this.z.layout(K);
					}
					onWidth(G) {
						this.z.layout(G);
					}
				};
				(e.$ALc = x),
					(e.$ALc =
						x =
						B =
							Ne([j(2, l.$Li), j(3, c.$MO), j(4, s.$6j), j(5, v.$Vl)], x));
				const H = 500;
				let q = class extends a.$1c {
					get domNode() {
						return this.a.root;
					}
					constructor(G, K, J) {
						super(),
							(this.g = G),
							(this.j = K),
							(this.m = J),
							(this.a = t.h("div.testing-followup-action", [])),
							(this.b = this.D(new a.$Zc())),
							(this.c = this.D(new r.$re())),
							(this.onClose = this.c.event);
					}
					show(G) {
						this.b.clear(), G instanceof k.$eLc && this.n(G);
					}
					async n(G) {
						const K = this.b.add(new m.$Ce()),
							J = Date.now();
						G.result instanceof N.$O4 &&
							!G.result.completedAt &&
							(await new Promise((X) => r.Event.once(G.result.onComplete)(X)));
						const W = await this.j.provideTestFollowups(
							{
								extId: G.test.extId,
								messageIndex: G.messageIndex,
								resultId: G.result.id,
								taskIndex: G.taskIndex,
							},
							K.token,
						);
						if (!W.followups.length || K.token.isCancellationRequested) {
							W.dispose();
							return;
						}
						this.b.add(W),
							t.$9fb(this.a.root),
							this.a.root.classList.toggle("animated", Date.now() - J > H),
							this.a.root.appendChild(this.q(W.followups[0])),
							W.followups.length > 1 &&
								this.a.root.appendChild(this.s(W.followups)),
							this.b.add(
								(0, a.$Yc)(() => {
									this.a.root.remove();
								}),
							);
					}
					q(G) {
						const K = this.t(() => this.u(K, G));
						return t.$hhb(K, ...(0, w.$Sib)(G.message)), K;
					}
					s(G) {
						const K = this.t(() =>
							this.m
								.pick(G.map((J, W) => ({ label: J.message, index: W })))
								.then((J) => {
									J?.length && G[J[0].index].execute();
								}),
						);
						return (
							(K.innerText = (0, n.localize)(10839, null, G.length - 1)), K
						);
					}
					t(G) {
						const K = document.createElement("a");
						return (
							(K.tabIndex = 0),
							this.b.add(t.$0fb(K, "click", G)),
							this.b.add(
								t.$0fb(K, "keydown", (J) => {
									const W = new i.$7fb(J);
									(W.equals(u.KeyCode.Space) || W.equals(u.KeyCode.Enter)) &&
										G();
								}),
							),
							K
						);
					}
					u(G, K) {
						G.ariaDisabled !== "true" &&
							((G.ariaDisabled = "true"), K.execute(), this.g && this.c.fire());
					}
				};
				q = Ne([j(1, A.$sqc), j(2, $.$DJ)], q);
			},
		),
		define(
			de[3845],
			he([
				1, 0, 7, 127, 14, 97, 6, 274, 103, 27, 149, 3, 77, 37, 56, 46, 65, 281,
				784, 38, 17, 98, 71, 42, 255, 4, 99, 92, 11, 31, 10, 8, 49, 116, 72, 5,
				128, 39, 43, 40, 326, 41, 21, 32, 51, 35, 68, 146, 60, 999, 1002, 3844,
				1771, 443, 353, 810, 515, 421, 381, 379, 185, 380, 812, 563, 813, 18,
				89,
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
				B,
				U,
				z,
				F,
				x,
				H,
				q,
				V,
				G,
				K,
				J,
				W,
				X,
				Y,
				ie,
				ne,
				ee,
				_,
				te,
				Q,
				Z,
				se,
				re,
				le,
				oe,
				ae,
				pe,
				$e,
				ye,
				ue,
			) {
				"use strict";
				var fe, me;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$JLc =
						e.$ILc =
						e.$HLc =
						e.$GLc =
						e.$FLc =
						e.$ELc =
						e.$DLc =
						e.$CLc =
						e.$BLc =
							void 0),
					(t = mt(t));
				function* ve(qe) {
					for (const Ae of qe)
						for (const Me of Ae.tests)
							for (let De = 0; De < Me.tasks.length; De++)
								for (let Re = 0; Re < Me.tasks[De].messages.length; Re++)
									yield {
										result: Ae,
										test: Me,
										taskIndex: De,
										messageIndex: Re,
									};
				}
				let ge = class extends a.$1c {
					constructor(Ae, Me, De, Re, je, Ve, Ze, et, rt) {
						super(),
							(this.b = Ae),
							(this.f = Me),
							(this.g = De),
							(this.h = Re),
							(this.j = je),
							(this.n = Ve),
							(this.q = Ze),
							(this.s = et),
							(this.t = rt),
							(this.historyVisible = this.D(
								te.$qqc.stored(
									new Q.$oqc(
										{
											key: "testHistoryVisibleInPeek",
											scope: H.StorageScope.PROFILE,
											target: H.StorageTarget.USER,
										},
										this.n,
									),
									!1,
								),
							)),
							this.D(Re.onTestChanged(this.y, this));
					}
					async open() {
						let Ae;
						const Me = this.f.activeTextEditorControl;
						if ((0, n.$0sb)(Me) && Me.getModel()?.uri) {
							const De = Me.getModel()?.uri;
							De && (Ae = await this.z(De, Me.getPosition()));
						}
						return (
							Ae || (Ae = this.a), Ae || (Ae = this.C()), Ae ? this.w(Ae) : !1
						);
					}
					tryPeekFirstError(Ae, Me, De) {
						const Re = this.F(Me);
						return Re
							? (this.w(
									{
										type: $e.TestUriType.ResultMessage,
										documentUri: Re.location.uri,
										taskIndex: Re.taskId,
										messageIndex: Re.index,
										resultId: Ae.id,
										testExtId: Me.item.extId,
									},
									void 0,
									{
										selection: Re.location.range,
										selectionRevealType:
											N.TextEditorSelectionRevealType.NearTopIfOutsideViewport,
										...De,
									},
								),
								!0)
							: !1;
					}
					peekUri(Ae, Me = {}) {
						const De = (0, $e.$2Kc)(Ae),
							Re = De && this.h.getResult(De.resultId);
						if (!De || !Re || !("testExtId" in De) || !("messageIndex" in De))
							return !1;
						const je = Re.getStateById(De.testExtId)?.tasks[De.taskIndex]
							.messages[De.messageIndex];
						return je?.location
							? (this.w(
									{
										type: $e.TestUriType.ResultMessage,
										documentUri: je.location.uri,
										taskIndex: De.taskIndex,
										messageIndex: De.messageIndex,
										resultId: Re.id,
										testExtId: De.testExtId,
									},
									Me.inEditor,
									{ selection: je.location.range, ...Me.options },
								),
								!0)
							: !1;
					}
					closeAllPeeks() {
						for (const Ae of this.g.listCodeEditors()) be.get(Ae)?.removePeek();
					}
					openCurrentInEditor() {
						const Ae = this.u();
						if (!Ae) return;
						const Me = { pinned: !1, revealIfOpened: !0 };
						if (Ae instanceof Y.$fLc || Ae instanceof Y.$gLc) {
							this.f.openEditor({ resource: Ae.outputUri, options: Me });
							return;
						}
						if (Ae instanceof Y.$gLc) {
							this.f.openEditor({ resource: Ae.outputUri, options: Me });
							return;
						}
						const De = Ae.message;
						Ae.isDiffable
							? this.f.openEditor({
									original: { resource: Ae.expectedUri },
									modified: { resource: Ae.actualUri },
									options: Me,
								})
							: typeof De.message == "string"
								? this.f.openEditor({ resource: Ae.messageUri, options: Me })
								: this.s
										.executeCommand("markdown.showPreview", Ae.messageUri)
										.catch((Re) => {
											this.t.error((0, S.localize)(10798, null, Re.message));
										});
					}
					u() {
						const Ae = Te(this.g);
						return (
							(Ae && be.get(Ae))?.subject ??
							this.q.getActiveViewWithId(_.Testing.ResultsViewId)?.subject
						);
					}
					async w(Ae, Me, De) {
						if ((0, n.$0sb)(Me))
							return (this.a = Ae), be.get(Me)?.show((0, $e.$3Kc)(this.a)), !0;
						const je = (
							await this.f.openEditor({
								resource: Ae.documentUri,
								options: { revealIfOpened: !0, ...De },
							})
						)?.getControl();
						return (0, n.$0sb)(je)
							? ((this.a = Ae), be.get(je)?.show((0, $e.$3Kc)(this.a)), !0)
							: !1;
					}
					y(Ae) {
						if (
							Ae.reason !== Z.TestResultItemChangeReason.OwnStateChange ||
							!this.F(Ae.item) ||
							(Ae.result.request.continuous &&
								!(0, ee.$RJc)(
									this.b,
									ee.TestingConfigKeys.AutoOpenPeekViewDuringContinuousRun,
								))
						)
							return;
						const De = this.g.listCodeEditors();
						switch (
							(0, ee.$RJc)(this.b, ee.TestingConfigKeys.AutoOpenPeekView)
						) {
							case ee.AutoOpenPeekViewWhen.FailureVisible: {
								const Ve = new Set(
									De.map((Ze) => Ze.getModel()?.uri.toString()),
								);
								if (
									!m.Iterable.some(
										(0, Z.$M4)(Ae.result, Ae.item),
										(Ze) => Ze.item.uri && Ve.has(Ze.item.uri.toString()),
									)
								)
									return;
								break;
							}
							case ee.AutoOpenPeekViewWhen.FailureAnywhere:
								break;
							default:
								return;
						}
						De.map(be.get).some((Ve) => Ve?.subject) ||
							this.tryPeekFirstError(Ae.result, Ae.item);
					}
					async z(Ae, Me) {
						let De,
							Re = 1 / 0;
						const je = Ae.toString();
						for (const Ve of this.j.collection.all) {
							const Ze = this.h.getStateById(Ve.item.extId);
							Ze &&
								(0, Y.$iLc)(Ze[1], (et, rt, ft, bt) => {
									if (
										rt.type !== le.TestMessageType.Error ||
										!rt.location ||
										rt.location.uri.toString() !== je
									)
										return;
									const nt = Me
										? Math.abs(
												Me.lineNumber - rt.location.range.startLineNumber,
											)
										: 0;
									(!De || nt <= Re) &&
										((Re = nt),
										(De = {
											type: $e.TestUriType.ResultMessage,
											testExtId: Ze[1].item.extId,
											resultId: Ze[0].id,
											taskIndex: bt,
											messageIndex: ft,
											documentUri: Ae,
										}));
								});
						}
						return De;
					}
					C() {
						const Ae = new Set();
						for (const Me of this.h.results)
							for (const De of Me.tests) {
								if (Ae.has(De.item.extId)) continue;
								Ae.add(De.item.extId);
								const Re = (0, Y.$iLc)(
									De,
									(je, Ve, Ze, et) =>
										Ve.location && {
											type: $e.TestUriType.ResultMessage,
											testExtId: De.item.extId,
											resultId: Me.id,
											taskIndex: et,
											messageIndex: Ze,
											documentUri: Ve.location.uri,
										},
								);
								if (Re) return Re;
							}
					}
					F(Ae) {
						const Me =
							Ae.item.uri && Ae.item.range
								? { uri: Ae.item.uri, range: Ae.item.range }
								: void 0;
						let De;
						return (
							(0, Y.$iLc)(Ae, (Re, je, Ve, Ze) => {
								const et = je.location || Me;
								!(0, pe.$v4)(Re.state) ||
									!et ||
									(De && je.type !== le.TestMessageType.Error) ||
									(De = { taskId: Ze, index: Ve, message: je, location: et });
							}),
							De
						);
					}
				};
				(e.$BLc = ge),
					(e.$BLc = ge =
						Ne(
							[
								j(0, L.$gj),
								j(1, ye.$IY),
								j(2, p.$dtb),
								j(3, se.$Kqc),
								j(4, re.$sqc),
								j(5, H.$lq),
								j(6, ue.$HMb),
								j(7, k.$ek),
								j(8, z.$4N),
							],
							ge,
						));
				let be = (fe = class extends a.$1c {
					static get(Ae) {
						return Ae.getContribution(_.Testing.OutputPeekContributionId);
					}
					get subject() {
						return this.a.value?.current;
					}
					constructor(Ae, Me, De, Re, je) {
						super(),
							(this.f = Ae),
							(this.g = Me),
							(this.h = De),
							(this.j = Re),
							(this.a = this.D(new a.$2c())),
							(this.b = oe.TestingContextKeys.isPeekVisible.bindTo(je)),
							this.D(Ae.onDidChangeModel(() => this.a.clear())),
							this.D(Re.onResultsChanged(this.q, this)),
							this.D(Re.onTestChanged(this.n, this));
					}
					async show(Ae) {
						const Me = this.s(Ae);
						Me && this.showSubject(Me);
					}
					async showSubject(Ae) {
						this.a.value ||
							((this.a.value = this.h.createInstance(Ce, this.f)),
							this.a.value.onDidClose(() => {
								this.b.set(!1), (this.a.value = void 0);
							}),
							this.b.set(!0),
							this.a.value.create()),
							Ae instanceof Y.$eLc &&
								(0, i.$oib)((0, X.$VKc)(Ae.message.message)),
							this.a.value.setModel(Ae);
					}
					async openAndShow(Ae) {
						const Me = this.s(Ae);
						if (!Me) return;
						if (
							!Me.revealLocation ||
							Me.revealLocation.uri.toString() ===
								this.f.getModel()?.uri.toString()
						)
							return this.show(Ae);
						const De = await this.g.openCodeEditor(
							{
								resource: Me.revealLocation.uri,
								options: { pinned: !1, revealIfOpened: !0 },
							},
							this.f,
						);
						if (De) return fe.get(De)?.removePeek(), fe.get(De)?.show(Ae);
					}
					removePeek() {
						this.a.clear();
					}
					collapseStack() {
						this.a.value?.collapseStack();
					}
					next() {
						const Ae = this.a.value?.current;
						if (!Ae) return;
						let Me = !1;
						for (const {
							messageIndex: De,
							taskIndex: Re,
							result: je,
							test: Ve,
						} of ve(this.j.results)) {
							if (
								(Ae instanceof Y.$fLc && je.id === Ae.result.id && (Me = !0),
								Me)
							) {
								this.openAndShow(
									(0, $e.$3Kc)({
										type: $e.TestUriType.ResultMessage,
										messageIndex: De,
										taskIndex: Re,
										resultId: je.id,
										testExtId: Ve.item.extId,
									}),
								);
								return;
							}
							Ae instanceof Y.$gLc &&
								Ae.test.item.extId === Ve.item.extId &&
								Ae.taskIndex === Re &&
								Ae.result.id === je.id &&
								(Me = !0),
								Ae instanceof Y.$eLc &&
									Ae.test.extId === Ve.item.extId &&
									Ae.messageIndex === De &&
									Ae.taskIndex === Re &&
									Ae.result.id === je.id &&
									(Me = !0);
						}
					}
					previous() {
						const Ae = this.a.value?.current;
						if (!Ae) return;
						let Me;
						for (const De of ve(this.j.results)) {
							if (Ae instanceof Y.$fLc) {
								if (De.result.id === Ae.result.id) break;
								continue;
							}
							if (Ae instanceof Y.$gLc) {
								if (
									De.test.item.extId === Ae.test.item.extId &&
									De.result.id === Ae.result.id &&
									De.taskIndex === Ae.taskIndex
								)
									break;
								continue;
							}
							if (
								Ae.test.extId === De.test.item.extId &&
								Ae.messageIndex === De.messageIndex &&
								Ae.taskIndex === De.taskIndex &&
								Ae.result.id === De.result.id
							)
								break;
							Me = De;
						}
						Me &&
							this.openAndShow(
								(0, $e.$3Kc)({
									type: $e.TestUriType.ResultMessage,
									messageIndex: Me.messageIndex,
									taskIndex: Me.taskIndex,
									resultId: Me.result.id,
									testExtId: Me.test.item.extId,
								}),
							);
					}
					removeIfPeekingForTest(Ae) {
						const Me = this.a.value?.current;
						Me &&
							Me instanceof Y.$eLc &&
							Me.test.extId === Ae &&
							this.a.clear();
					}
					n(Ae) {
						Ae.reason !== Z.TestResultItemChangeReason.OwnStateChange ||
							Ae.previousState === Ae.item.ownComputedState ||
							this.removeIfPeekingForTest(Ae.item.item.extId);
					}
					q(Ae) {
						"started" in Ae && this.a.clear(),
							"removed" in Ae && this.j.results.length === 0 && this.a.clear();
					}
					s(Ae) {
						const Me = (0, $e.$2Kc)(Ae);
						if (!Me) return;
						const De = this.j.results.find((et) => et.id === Me.resultId);
						if (!De) return;
						if (Me.type === $e.TestUriType.TaskOutput)
							return new Y.$fLc(De, Me.taskIndex);
						if (Me.type === $e.TestUriType.TestOutput) {
							const et = De.getStateById(Me.testExtId);
							return et ? new Y.$gLc(De, Me.taskIndex, et) : void 0;
						}
						const { testExtId: Re, taskIndex: je, messageIndex: Ve } = Me,
							Ze = De?.getStateById(Re);
						if (!(!Ze || !Ze.tasks[Me.taskIndex]))
							return new Y.$eLc(De, Ze, je, Ve);
					}
				});
				(e.$CLc = be),
					(e.$CLc =
						be =
						fe =
							Ne([j(1, p.$dtb), j(2, R.$Li), j(3, se.$Kqc), j(4, D.$6j)], be));
				let Ce = class extends v.$9Mb {
					static {
						me = this;
					}
					get current() {
						return this.d.get();
					}
					constructor(Ae, Me, De, Re, je, Ve, Ze, et, rt, ft) {
						super(
							Ae,
							{
								showFrame: !0,
								frameWidth: 1,
								showArrow: !0,
								isResizeable: !0,
								isAccessible: !0,
								className: "test-output-peek",
							},
							Ze,
						),
							(this.ab = Me),
							(this.bb = Re),
							(this.cb = je),
							(this.db = Ve),
							(this.eb = et),
							(this.fb = rt),
							(this.gb = ft),
							(this.b = this.o.add(new C.$re())),
							(this.d = (0, h.observableValue)("testPeekCurrent", void 0)),
							this.o.add(Me.onDidColorThemeChange(this.hb, this)),
							this.o.add(this.onDidClose(() => this.b.fire(!1))),
							De.addExclusiveWidget(Ae, this);
					}
					hb() {
						const Ae = this.ab.getColorTheme(),
							Me =
								this.current instanceof Y.$eLc &&
								this.current.message.type === le.TestMessageType.Error,
							De =
								(Me ? Ae.getColor(ne.$0Jc) : Ae.getColor(ne.$$Jc)) ||
								E.$UL.transparent,
							Re =
								(Me ? Ae.getColor(ne.$_Jc) : Ae.getColor(ne.$aKc)) ||
								E.$UL.transparent,
							je = Ae.getColor(V.$8P);
						this.style({
							arrowColor: De,
							frameColor: De,
							headerBackgroundColor: je && Re ? Re.makeOpaque(je) : Re,
							primaryHeadingColor: Ae.getColor(v.$$Mb),
							secondaryHeadingColor: Ae.getColor(v.$_Mb),
						});
					}
					C(Ae) {
						if (!this.Y) {
							(this.Y = this.o.add(this.cb.createScoped(Ae))),
								oe.TestingContextKeys.isInPeek.bindTo(this.Y).set(!0);
							const Me = this.o.add(
								this.M.createChild(new O.$Ki([D.$6j, this.Y])),
							);
							(this.X = this.o.add(
								Me.createInstance(ie.$ALc, this.editor, {
									historyVisible: this.bb.historyVisible,
									showRevealLocationOnMessages: !1,
									locationForProgress: _.Testing.ResultsViewId,
								}),
							)),
								this.o.add(
									this.X.onClose(() => {
										be.get(this.editor)?.removePeek();
									}),
								);
						}
						super.C(Ae);
					}
					P(Ae) {
						super.P(Ae);
						const Me = this.o.add(this.cb.createScoped(Ae));
						this.o.add(
							(0, F.$Nwb)(oe.TestingContextKeys.peekHasStack, Me, (Ve) =>
								(0, Y.$dLc)(this.d.read(Ve)),
							),
						);
						const De = this.db.createMenu(P.$XX.TestPeekTitle, Me),
							Re = this.K;
						this.o.add(
							De.onDidChange(() => {
								for (
									je.length = 0, (0, T.$Kyb)(De, void 0, je);
									Re.getAction(1);
								)
									Re.pull(0);
								Re.push(je, { label: !1, icon: !0, index: 0 });
							}),
						);
						const je = [];
						(0, T.$Kyb)(De, void 0, je),
							Re.push(je, { label: !1, icon: !0, index: 0 });
					}
					T(Ae) {
						this.X.fillBody(Ae),
							this.o.add(
								this.X.onDidRequestReveal((Me) => {
									be.get(this.editor)?.show(
										Me instanceof Y.$eLc ? Me.messageUri : Me.outputUri,
									);
								}),
							);
					}
					setModel(Ae) {
						if (Ae instanceof Y.$fLc || Ae instanceof Y.$gLc)
							return this.d.set(Ae, void 0), this.showInPlace(Ae);
						const Me = Ae.message,
							De = this.current,
							Re = Ae.revealLocation?.range.getStartPosition();
						if (!Re && !De) return Promise.resolve();
						if ((this.d.set(Ae, void 0), !Re)) return this.showInPlace(Ae);
						const je =
							me.a ||
							Math.max((0, Y.$dLc)(Ae) ? Math.ceil(this.lb() / 2) : 0, Fe(Me));
						return (
							this.show(Re, je),
							this.editor.revealRangeNearTopIfOutsideViewport(
								s.$iL.fromPositions(Re),
								l.ScrollType.Smooth,
							),
							this.showInPlace(Ae)
						);
					}
					collapseStack() {
						this.X.collapseStack();
					}
					lb() {
						return Math.round(
							this.editor.getDomNode().clientHeight /
								this.editor.getOption(b.EditorOption.lineHeight),
						);
					}
					async showInPlace(Ae) {
						if (Ae instanceof Y.$eLc) {
							const Me = Ae.message;
							this.setTitle(
								Oe((0, X.$VKc)(Me.message)),
								(0, d.$$k)(Ae.test.label),
							);
						} else this.setTitle((0, S.localize)(10799, null));
						this.hb(), await this.X.reveal({ subject: Ae, preserveFocus: !1 });
					}
					F(Ae) {
						super.F(Ae), (me.a = Ae);
					}
					W(Ae, Me) {
						super.W(Ae, Me), this.X.onLayoutBody(Ae, Me);
					}
					D(Ae) {
						super.D(Ae),
							this.Z && (this.Z = new t.$pgb(Ae, this.Z.height)),
							this.X.onWidth(Ae);
					}
				};
				Ce = me = Ne(
					[
						j(1, G.$iP),
						j(2, v.$7Mb),
						j(3, ae.$ZKc),
						j(4, D.$6j),
						j(5, P.$YX),
						j(6, R.$Li),
						j(7, $.$MO),
						j(8, p.$dtb),
						j(9, K.$Vl),
					],
					Ce,
				);
				let Le = class extends J.$TMb {
					constructor(Ae, Me, De, Re, je, Ve, Ze, et, rt, ft, bt, nt) {
						super(Ae, Me, De, Re, je, Ve, Ze, et, rt, ft, bt),
							(this.b = nt),
							(this.a = new u.$Y(() =>
								this.D(
									this.Db.createInstance(ie.$ALc, void 0, {
										historyVisible: (0, te.$pqc)(!0),
										showRevealLocationOnMessages: !0,
										locationForProgress: _.Testing.ExplorerViewId,
									}),
								),
							));
					}
					get subject() {
						return this.a.rawValue?.current;
					}
					showLatestRun(Ae = !1) {
						const Me = this.b.results.find((De) => De.tasks.length);
						Me &&
							this.a.rawValue?.reveal({
								preserveFocus: Ae,
								subject: new Y.$fLc(Me, 0),
							});
					}
					W(Ae) {
						super.W(Ae),
							this.isBodyVisible()
								? this.h(Ae)
								: this.D(
										C.Event.once(
											C.Event.filter(this.onDidChangeBodyVisibility, Boolean),
										)(() => this.h(Ae)),
									);
					}
					X(Ae, Me) {
						super.X(Ae, Me), this.a.rawValue?.onLayoutBody(Ae, Me);
					}
					h(Ae) {
						const Me = this.a.value;
						Me.fillBody(Ae),
							this.D(
								Me.onDidRequestReveal((Re) =>
									Me.reveal({ preserveFocus: !0, subject: Re }),
								),
							);
						const [De] = this.b.results;
						De &&
							De.tasks.length &&
							Me.reveal({ preserveFocus: !0, subject: new Y.$fLc(De, 0) });
					}
				};
				(e.$DLc = Le),
					(e.$DLc = Le =
						Ne(
							[
								j(1, B.$uZ),
								j(2, M.$Xxb),
								j(3, L.$gj),
								j(4, D.$6j),
								j(5, W.$K1),
								j(6, R.$Li),
								j(7, x.$7rb),
								j(8, G.$iP),
								j(9, q.$km),
								j(10, A.$Uyb),
								j(11, se.$Kqc),
							],
							Le,
						));
				const Fe = (qe) =>
						(le.ITestMessage.isDiffable(qe)
							? Math.max(xe(qe.actual), xe(qe.expected))
							: xe(
									typeof qe.message == "string" ? qe.message : qe.message.value,
								)) + 8,
					Oe = (qe) => {
						const Ae = qe.indexOf(`
`);
						return Ae === -1 ? qe : qe.slice(0, Ae);
					},
					xe = (qe) =>
						Math.min(
							(0, c.$pf)(
								qe,
								`
`,
							),
							24,
						);
				function He(qe) {
					const Ae = qe.listDiffEditors();
					for (const Me of Ae)
						if (Me.hasTextFocus() && Me instanceof f.$7mc)
							return Me.getParentEditor();
					return null;
				}
				class Ke extends g.$ktb {
					constructor() {
						super({
							id: "editor.closeTestPeek",
							title: (0, S.localize2)(10800, "Close"),
							icon: w.$ak.close,
							precondition: D.$Kj.or(
								oe.TestingContextKeys.isInPeek,
								oe.TestingContextKeys.isPeekVisible,
							),
							keybinding: {
								weight: U.KeybindingWeight.EditorContrib - 101,
								primary: r.KeyCode.Escape,
								when: D.$Kj.not("config.editor.stablePeek"),
							},
						});
					}
					runEditorCommand(Ae, Me) {
						const De = Te(Ae.get(p.$dtb));
						be.get(De ?? Me)?.removePeek();
					}
				}
				e.$ELc = Ke;
				const Je = D.$Kj.and(
						y.EditorContextKeys.focus,
						oe.TestingContextKeys.isPeekVisible,
					),
					Te = (qe) => {
						const Ae = qe.getFocusedCodeEditor() || qe.getActiveCodeEditor();
						return Ae && Ee(qe, Ae);
					},
					Ee = (qe, Ae) => {
						if (be.get(Ae)?.subject) return Ae;
						if (Ae instanceof o.$wDb) return Ae.getParentEditor();
						const Me = He(qe);
						return Me || Ae;
					};
				class Ie extends P.$3X {
					static {
						this.ID = "testing.goToNextMessage";
					}
					constructor() {
						super({
							id: Ie.ID,
							f1: !0,
							title: (0, S.localize2)(10801, "Go to Next Test Failure"),
							metadata: {
								description: (0, S.localize2)(
									10802,
									"Shows the next failure message in your file",
								),
							},
							icon: w.$ak.arrowDown,
							category: I.$ck.Test,
							keybinding: {
								primary: r.KeyMod.Alt | r.KeyCode.F8,
								weight: U.KeybindingWeight.EditorContrib + 1,
								when: Je,
							},
							menu: [
								{ id: P.$XX.TestPeekTitle, group: "navigation", order: 2 },
								{ id: P.$XX.CommandPalette, when: Je },
							],
						});
					}
					run(Ae) {
						const Me = Te(Ae.get(p.$dtb));
						Me && be.get(Me)?.next();
					}
				}
				e.$FLc = Ie;
				class Be extends P.$3X {
					static {
						this.ID = "testing.goToPreviousMessage";
					}
					constructor() {
						super({
							id: Be.ID,
							f1: !0,
							title: (0, S.localize2)(10803, "Go to Previous Test Failure"),
							metadata: {
								description: (0, S.localize2)(
									10804,
									"Shows the previous failure message in your file",
								),
							},
							icon: w.$ak.arrowUp,
							category: I.$ck.Test,
							keybinding: {
								primary: r.KeyMod.Shift | r.KeyMod.Alt | r.KeyCode.F8,
								weight: U.KeybindingWeight.EditorContrib + 1,
								when: Je,
							},
							menu: [
								{ id: P.$XX.TestPeekTitle, group: "navigation", order: 1 },
								{ id: P.$XX.CommandPalette, when: Je },
							],
						});
					}
					run(Ae) {
						const Me = Te(Ae.get(p.$dtb));
						Me && be.get(Me)?.previous();
					}
				}
				e.$GLc = Be;
				class Se extends P.$3X {
					static {
						this.ID = "testing.collapsePeekStack";
					}
					constructor() {
						super({
							id: Se.ID,
							title: (0, S.localize2)(10805, "Collapse Stack Frames"),
							icon: w.$ak.collapseAll,
							category: I.$ck.Test,
							menu: [
								{
									id: P.$XX.TestPeekTitle,
									when: oe.TestingContextKeys.peekHasStack,
									group: "navigation",
									order: 4,
								},
							],
						});
					}
					run(Ae) {
						const Me = Te(Ae.get(p.$dtb));
						Me && be.get(Me)?.collapseStack();
					}
				}
				e.$HLc = Se;
				class ke extends P.$3X {
					static {
						this.ID = "testing.openMessageInEditor";
					}
					constructor() {
						super({
							id: ke.ID,
							f1: !1,
							title: (0, S.localize2)(10806, "Open in Editor"),
							icon: w.$ak.goToFile,
							category: I.$ck.Test,
							menu: [{ id: P.$XX.TestPeekTitle }],
						});
					}
					run(Ae) {
						Ae.get(ae.$ZKc).openCurrentInEditor();
					}
				}
				e.$ILc = ke;
				class Ue extends P.$3X {
					static {
						this.ID = "testing.toggleTestingPeekHistory";
					}
					constructor() {
						super({
							id: Ue.ID,
							f1: !0,
							title: (0, S.localize2)(10807, "Toggle Test History in Peek"),
							metadata: {
								description: (0, S.localize2)(
									10808,
									"Shows or hides the history of test runs in the peek view",
								),
							},
							icon: w.$ak.history,
							category: I.$ck.Test,
							menu: [
								{ id: P.$XX.TestPeekTitle, group: "navigation", order: 3 },
							],
							keybinding: {
								weight: U.KeybindingWeight.WorkbenchContrib,
								primary: r.KeyMod.Alt | r.KeyCode.KeyH,
								when: oe.TestingContextKeys.isPeekVisible.isEqualTo(!0),
							},
						});
					}
					run(Ae) {
						const Me = Ae.get(ae.$ZKc);
						Me.historyVisible.value = !Me.historyVisible.value;
					}
				}
				e.$JLc = Ue;
			},
		),
		define(
			de[1909],
			he([1, 0, 3, 77, 4, 10, 1335, 443, 353, 630, 563, 421, 381, 185, 89]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$CMc = e.$BMc = e.$AMc = void 0);
				let g = class extends t.$1c {
					constructor(b, s, l, y) {
						super(),
							(this.a = l),
							(this.b = y),
							this.D(
								b.onResultsChanged((v) => {
									"started" in v && this.c(v.started);
								}),
							);
						const $ = (0, i.autorun)((v) => {
							s.selected.read(v) && ($.dispose(), C.$WJc.register());
						});
						this.D($);
					}
					c(b) {
						if (b.request.preserveFocus === !0) return;
						const s = (0, d.$RJc)(this.a, d.TestingConfigKeys.OpenTesting);
						if (s === d.AutoOpenTesting.NeverOpen) return;
						if (s === d.AutoOpenTesting.OpenExplorerOnTestStart)
							return this.f();
						if (s === d.AutoOpenTesting.OpenOnTestStart) return this.g();
						const l = new t.$Zc();
						l.add(b.onComplete(() => l.dispose())),
							l.add(
								b.onChange((y) => {
									y.reason === a.TestResultItemChangeReason.OwnStateChange &&
										(0, u.$v4)(y.item.ownComputedState) &&
										(this.g(), l.dispose());
								}),
							);
					}
					f() {
						this.b.openView(m.Testing.ExplorerViewId, !1);
					}
					g() {
						this.b.openView(m.Testing.ResultsViewId, !1);
					}
				};
				(e.$AMc = g),
					(e.$AMc = g =
						Ne([j(0, h.$Kqc), j(1, r.$TJc), j(2, E.$gj), j(3, n.$HMb)], g));
				const p = (f, b) => {
					let s = 0,
						l = 0,
						y = 0,
						$ = 0,
						v = 0;
					for (const S of b) {
						const I = S.counts;
						(l += I[c.TestResultState.Errored] + I[c.TestResultState.Failed]),
							(s += I[c.TestResultState.Passed]),
							(y += I[c.TestResultState.Skipped]),
							($ += I[c.TestResultState.Running]),
							(v += I[c.TestResultState.Queued]);
					}
					return {
						isRunning: f,
						passed: s,
						failed: l,
						runSoFar: s + l,
						totalWillBeRun: s + l + v + $,
						skipped: y,
					};
				};
				e.$BMc = p;
				const o = ({
					isRunning: f,
					passed: b,
					runSoFar: s,
					totalWillBeRun: l,
					skipped: y,
					failed: $,
				}) => {
					let v = (b / s) * 100;
					return (
						$ > 0 ? (v = Math.min(v, 99.9)) : s === 0 && (v = 0),
						f
							? s === 0
								? (0, w.localize)(10809, null)
								: y === 0
									? (0, w.localize)(10810, null, b, l, v.toPrecision(3))
									: (0, w.localize)(10811, null, b, l, v.toPrecision(3), y)
							: y === 0
								? (0, w.localize)(10812, null, b, s, v.toPrecision(3))
								: (0, w.localize)(10813, null, b, s, v.toPrecision(3), y)
					);
				};
				e.$CMc = o;
			},
		),
		define(
			de[3846],
			he([
				1, 0, 7, 105, 183, 95, 182, 278, 264, 50, 214, 15, 97, 6, 27, 3, 77, 37,
				26, 28, 251, 4, 607, 92, 11, 31, 10, 8, 49, 72, 5, 39, 41, 84, 21, 32,
				106, 51, 79, 35, 68, 518, 146, 296, 60, 811, 3183, 1267, 3178, 3184,
				470, 1908, 3776, 1909, 443, 353, 515, 1001, 259, 420, 421, 381, 379,
				185, 380, 1268, 812, 563, 260, 66, 18, 2501,
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
				B,
				U,
				z,
				F,
				x,
				H,
				q,
				V,
				G,
				K,
				J,
				W,
				X,
				Y,
				ie,
				ne,
				ee,
				_,
				te,
				Q,
				Z,
				se,
				re,
				le,
				oe,
				ae,
				pe,
				$e,
				ye,
				ue,
				fe,
				me,
				ve,
				ge,
			) {
				"use strict";
				var be, Ce;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$DMc = void 0),
					(t = mt(t)),
					(Y = mt(Y));
				var Le;
				(function (Ze) {
					(Ze[(Ze.Input = 0)] = "Input"), (Ze[(Ze.Tree = 1)] = "Tree");
				})(Le || (Le = {}));
				let Fe = class extends H.$TMb {
					get focusedTreeElements() {
						return this.viewModel.tree.getFocus().filter(b.$tg);
					}
					constructor(
						et,
						rt,
						ft,
						bt,
						nt,
						lt,
						ct,
						gt,
						ht,
						Rt,
						Nt,
						jt,
						ti,
						kt,
						hi,
					) {
						super(et, ft, rt, bt, ct, lt, nt, gt, ht, Nt, jt),
							(this.hc = Rt),
							(this.ic = ti),
							(this.jc = kt),
							(this.kc = hi),
							(this.f = this.D(new g.$2c())),
							(this.cc = this.D(new g.$2c())),
							(this.dc = this.D(new g.$2c())),
							(this.ec = this.D(new g.$2c())),
							(this.fc = { width: 0, height: 0 }),
							(this.gc = Le.Input);
						const Kt = this.D(new a.$Yh(() => this.X(), 1));
						this.D(
							this.onDidChangeViewWelcomeState(() => {
								this.shouldShowWelcome() || Kt.schedule();
							}),
						),
							this.D(
								Rt.collection.onBusyProvidersChange((di) => {
									this.pc(di);
								}),
							),
							this.D(ti.onDidChange(() => this.bc()));
					}
					shouldShowWelcome() {
						return this.viewModel?.welcomeExperience === He.ForWorkspace;
					}
					focus() {
						super.focus(),
							this.gc === Le.Tree
								? this.viewModel.tree.domFocus()
								: this.dc.value?.focus();
					}
					getTreeIncludeExclude(et, rt, ft = "visible") {
						const bt = this.viewModel.projection.value;
						if (!bt) return { include: [], exclude: [] };
						const nt = new Set(),
							lt = [],
							ct = (gt, ht) => {
								if (
									!(gt instanceof G.$7Kc) ||
									!this.viewModel.tree.hasElement(gt)
								)
									return;
								const Rt = this.viewModel.tree.getNode(gt);
								if (!Rt.visible) {
									ht && lt.push(gt.test);
									return;
								}
								!ht &&
									(!rt || (0, re.$Cqc)(rt, gt.test)) &&
									(Rt.children.length === 0 ||
										Rt.visibleChildrenCount * 2 >= Rt.children.length) &&
									Rt.visibleChildrenCount !== 1 &&
									(nt.add(gt.test), (ht = !0));
								for (const Nt of gt.children) ct(Nt, ht);
							};
						if (ft === "selected") {
							const gt = this.viewModel.tree.getSelection().filter(b.$tg);
							if (gt.length) {
								e: for (const ht of gt)
									if (ht instanceof G.$7Kc) {
										for (let Rt = ht; Rt; Rt = Rt.parent)
											if (nt.has(Rt.test)) continue e;
										nt.add(ht.test), ht.children.forEach((Rt) => ct(Rt, !0));
									}
								return { include: [...nt], exclude: lt };
							}
						}
						for (const gt of et || this.hc.collection.rootItems) {
							const ht = bt.getElementByTestId(gt.item.extId);
							if (ht && !(rt && !(0, re.$Cqc)(rt, gt)))
								if (this.viewModel.tree.hasElement(ht)) ct(ht, !1);
								else {
									const Rt = [...ht.children].reduce(
										(Nt, jt) =>
											this.viewModel.tree.hasElement(jt) &&
											this.viewModel.tree.getNode(jt).visible
												? Nt + 1
												: Nt,
										0,
									);
									ht.children.size > 0 && Rt * 2 >= ht.children.size
										? (nt.add(ht.test), ht.children.forEach((Nt) => ct(Nt, !0)))
										: ht.children.forEach((Nt) => ct(Nt, !1));
								}
						}
						return { include: [...nt], exclude: lt };
					}
					render() {
						super.render(),
							this.D(
								(0, x.$D3b)({
									name: "testingExplorerView",
									focusNotifiers: [this],
									focusNextWidget: () => {
										this.viewModel.tree.isDOMFocused() ||
											this.viewModel.tree.domFocus();
									},
									focusPreviousWidget: () => {
										this.viewModel.tree.isDOMFocused() &&
											this.dc.value?.focus();
									},
								}),
							);
					}
					W(et) {
						super.W(et),
							(this.j = t.$fhb(et, t.$(".test-explorer"))),
							(this.m = t.$fhb(this.j, t.$(".test-explorer-header"))),
							(this.f.value = this.oc());
						const rt = t.$fhb(this.m, t.$(".result-summary-container"));
						this.D(this.Db.createInstance(xe, rt));
						const ft = t.$fhb(this.j, t.$(".test-explorer-tree"));
						(this.viewModel = this.Db.createInstance(
							Ke,
							ft,
							this.onDidChangeBodyVisibility,
						)),
							this.D(this.viewModel.tree.onDidFocus(() => (this.gc = Le.Tree))),
							this.D(
								this.viewModel.onChangeWelcomeVisibility(() => this.eb.fire()),
							),
							this.D(this.viewModel),
							this.eb.fire();
					}
					getActionViewItem(et, rt) {
						switch (et.id) {
							case te.TestCommandId.FilterAction:
								return (
									(this.dc.value = this.Db.createInstance(ne.$zMc, et, rt)),
									(this.ec.value = this.dc.value.onDidFocus(
										() => (this.gc = Le.Input),
									)),
									this.dc.value
								);
							case te.TestCommandId.RunSelectedAction:
								return this.nc(pe.TestRunProfileBitset.Run, et, rt);
							case te.TestCommandId.DebugSelectedAction:
								return this.nc(pe.TestRunProfileBitset.Debug, et, rt);
							default:
								return super.getActionViewItem(et, rt);
						}
					}
					mc(et) {
						const rt = [];
						let ft = 0,
							bt = !1;
						const nt = this.ic.getGroupDefaultProfiles(et);
						for (const { profiles: Nt, controller: jt } of this.ic.all()) {
							let ti = !1;
							for (const kt of Nt)
								kt.group === et &&
									(ti ||
										((ti = !0),
										ft++,
										rt.push(
											new r.$rj(`${jt.id}.$root`, jt.label.get(), void 0, !1),
										)),
									(bt = bt || kt.hasConfigurationHandler),
									rt.push(
										new r.$rj(
											`${jt.id}.${kt.profileId}`,
											nt.includes(kt)
												? (0, l.localize)(10785, null, kt.label)
												: kt.label,
											void 0,
											void 0,
											() => {
												const { include: hi, exclude: Kt } =
													this.getTreeIncludeExclude(void 0, kt);
												this.hc.runResolvedTests({
													exclude: Kt.map((di) => di.item.extId),
													group: kt.group,
													targets: [
														{
															profileId: kt.profileId,
															controllerId: kt.controllerId,
															testIds: hi.map((di) => di.item.extId),
														},
													],
												});
											},
										),
									));
						}
						const lt = [],
							ct = [];
						et === pe.TestRunProfileBitset.Run &&
							ct.push(["testing.profile.context.group", "run"]),
							et === pe.TestRunProfileBitset.Debug &&
								ct.push(["testing.profile.context.group", "debug"]),
							et === pe.TestRunProfileBitset.Coverage &&
								ct.push(["testing.profile.context.group", "coverage"]);
						const gt = this.Bb.createOverlay(ct),
							ht = this.kc.getMenuActions(v.$XX.TestProfilesContext, gt);
						(0, $.$Jyb)(ht, lt);
						const Rt = [];
						return (
							rt.length > 1 &&
								Rt.push(
									new r.$rj(
										"selectDefaultTestConfigurations",
										(0, l.localize)(10786, null),
										void 0,
										void 0,
										() =>
											this.jc.executeCommand(
												te.TestCommandId.SelectDefaultTestProfiles,
												et,
											),
									),
								),
							bt &&
								Rt.push(
									new r.$rj(
										"configureTestProfiles",
										(0, l.localize)(10787, null),
										void 0,
										void 0,
										() =>
											this.jc.executeCommand(
												te.TestCommandId.ConfigureTestProfilesAction,
												et,
											),
									),
								),
							lt.length > 0 ? r.$tj.join(rt, lt, Rt) : r.$tj.join(rt, Rt)
						);
					}
					saveState() {
						this.dc.value?.saveState(), super.saveState();
					}
					nc(et, rt, ft) {
						const bt = this.mc(et);
						if (bt.length < 2) return super.getActionViewItem(rt, ft);
						const nt = this.Db.createInstance(
								v.$2X,
								{
									id: rt.id,
									title: rt.label,
									icon: et === pe.TestRunProfileBitset.Run ? Y.$wKc : Y.$xKc,
								},
								void 0,
								void 0,
								void 0,
								void 0,
							),
							lt = new r.$rj(
								"selectRunConfig",
								"Select Configuration...",
								"codicon-chevron-down",
								!0,
							);
						return this.Db.createInstance(y.$OYb, nt, lt, bt, "", this.zb, ft);
					}
					oc() {
						const et = new i.$eib(this.m, {
							actionViewItemProvider: (rt, ft) =>
								this.getActionViewItem(rt, ft),
							triggerKeys: { keyDown: !1, keys: [] },
						});
						return (
							et.push(new r.$rj(te.TestCommandId.FilterAction)),
							et.getContainer().classList.add("testing-filter-action-bar"),
							et
						);
					}
					pc(et) {
						!et && this.cc
							? this.cc.clear()
							: et &&
								!this.cc.value &&
								(this.cc.value = this.Db.createInstance(N.$_N, {
									location: this.Yb(),
								}));
					}
					X(et = this.fc.height, rt = this.fc.width) {
						super.X(et, rt),
							(this.fc.height = et),
							(this.fc.width = rt),
							(this.j.style.height = `${et}px`),
							this.viewModel?.layout(et - this.m.clientHeight, rt),
							this.dc.value?.layout(rt);
					}
				};
				(e.$DMc = Fe),
					(e.$DMc = Fe =
						Ne(
							[
								j(1, P.$Xxb),
								j(2, D.$uZ),
								j(3, I.$gj),
								j(4, L.$Li),
								j(5, V.$K1),
								j(6, T.$6j),
								j(7, M.$7rb),
								j(8, z.$iP),
								j(9, ae.$sqc),
								j(10, R.$km),
								j(11, k.$Uyb),
								j(12, re.$Bqc),
								j(13, S.$ek),
								j(14, v.$YX),
							],
							Fe,
						));
				const Oe = 200;
				let xe = class extends g.$1c {
					constructor(et, rt, ft, bt, nt, lt, ct) {
						super(),
							(this.z = et),
							(this.C = rt),
							(this.F = ft),
							(this.G = bt),
							(this.f = !1),
							(this.u = this.D(new g.$2c())),
							(this.w = this.D(new a.$Yh(() => this.H(), Oe))),
							(this.y = t.h("div.result-summary", [
								t.h("div@status"),
								t.h("div@count"),
								t.h("div@count"),
								t.h("span"),
								t.h("duration@duration"),
								t.h("a@rerun"),
							])),
							(this.j = nt.getValue(_.TestingConfigKeys.CountBadge)),
							this.D(rt.onResultsChanged(this.H, this)),
							this.D(
								nt.onDidChangeConfiguration((ht) => {
									ht.affectsConfiguration(_.TestingConfigKeys.CountBadge) &&
										((this.j = nt.getValue(_.TestingConfigKeys.CountBadge)),
										this.H());
								}),
							),
							(this.q = this.D(
								ct.setupManagedHover((0, E.$cib)("mouse"), this.y.count, ""),
							)),
							this.D(
								new i.$eib(this.y.rerun, {
									actionViewItemProvider: (ht, Rt) => (0, $.$Pyb)(lt, ht, Rt),
								}),
							).push(
								lt.createInstance(
									v.$2X,
									{ ...new ie.$oMc().desc, icon: Y.$vKc },
									{ ...new ie.$pMc().desc, icon: Y.$yKc },
									{},
									void 0,
									void 0,
								),
								{ icon: !0, label: !1 },
							),
							this.H();
					}
					H() {
						const { results: et } = this.C,
							{
								count: rt,
								root: ft,
								status: bt,
								duration: nt,
								rerun: lt,
							} = this.y;
						if (!et.length) {
							this.f && (ft.remove(), (this.f = !1)),
								(this.z.innerText = (0, l.localize)(10788, null)),
								this.u.clear();
							return;
						}
						const ct = et.filter((ht) => !ht.completedAt);
						let gt;
						if (ct.length) {
							(bt.className = f.ThemeIcon.asClassName(U.$fP)),
								(gt = (0, ee.$BMc)(!0, ct)),
								this.w.schedule();
							const ht = ct[ct.length - 1];
							(nt.textContent = je(Date.now() - ht.startedAt)),
								(lt.style.display = "none");
						} else {
							const ht = et[0],
								Rt = (0, u.$vb)(fe.$A4, (Nt) =>
									ht.counts[Nt] > 0 ? Nt : void 0,
								);
							(bt.className = f.ThemeIcon.asClassName(
								Y.$PKc.get(Rt ?? pe.TestResultState.Unset),
							)),
								(gt = (0, ee.$BMc)(!1, [ht])),
								(nt.textContent =
									ht instanceof le.$O4
										? je(ht.completedAt - ht.startedAt)
										: ""),
								(lt.style.display = "block");
						}
						(rt.textContent = `${gt.passed}/${gt.totalWillBeRun}`),
							this.q.update((0, ee.$CMc)(gt)),
							this.I(gt),
							this.f || (t.$9fb(this.z), this.z.appendChild(ft), (this.f = !0));
					}
					I(et) {
						if (et && this.j !== _.TestingCountBadge.Off && et[this.j] !== 0) {
							if (this.m instanceof me.$8qc && this.m.number === et[this.j])
								return;
							this.m = new me.$8qc(et[this.j], (rt) => this.J(this.j, rt));
						} else if (this.G.isEnabled()) {
							if (this.m instanceof me.$9qc && this.m.icon === Y.$KKc) return;
							this.m = new me.$9qc(Y.$KKc, () => (0, l.localize)(10789, null));
						} else {
							if (!this.m) return;
							this.m = void 0;
						}
						this.u.value =
							this.m &&
							this.F.showViewActivity(te.Testing.ExplorerViewId, {
								badge: this.m,
							});
					}
					J(et, rt) {
						switch (et) {
							case _.TestingCountBadge.Passed:
								return (0, l.localize)(10790, null, rt);
							case _.TestingCountBadge.Skipped:
								return (0, l.localize)(10791, null, rt);
							default:
								return (0, l.localize)(10792, null, rt);
						}
					}
				};
				xe = Ne(
					[
						j(1, oe.$Kqc),
						j(2, me.$7qc),
						j(3, ye.$MLc),
						j(4, I.$gj),
						j(5, L.$Li),
						j(6, k.$Uyb),
					],
					xe,
				);
				var He;
				(function (Ze) {
					(Ze[(Ze.None = 0)] = "None"),
						(Ze[(Ze.ForWorkspace = 1)] = "ForWorkspace"),
						(Ze[(Ze.ForDocument = 2)] = "ForDocument");
				})(He || (He = {}));
				let Ke = class extends g.$1c {
					get viewMode() {
						return this.m.get() ?? te.TestExplorerViewMode.Tree;
					}
					set viewMode(et) {
						et !== this.m.get() &&
							(this.m.set(et),
							this.bb(),
							this.M.store(
								"testing.viewMode",
								et,
								A.StorageScope.WORKSPACE,
								A.StorageTarget.MACHINE,
							));
					}
					get viewSorting() {
						return this.q.get() ?? te.TestExplorerViewSorting.ByStatus;
					}
					set viewSorting(et) {
						et !== this.q.get() &&
							(this.q.set(et),
							this.tree.resort(null),
							this.M.store(
								"testing.viewSorting",
								et,
								A.StorageScope.WORKSPACE,
								A.StorageTarget.MACHINE,
							));
					}
					constructor(
						et,
						rt,
						ft,
						bt,
						nt,
						lt,
						ct,
						gt,
						ht,
						Rt,
						Nt,
						jt,
						ti,
						kt,
						hi,
						Kt,
						di,
					) {
						super(),
							(this.F = lt),
							(this.G = ct),
							(this.H = gt),
							(this.I = ht),
							(this.J = Rt),
							(this.M = Nt),
							(this.N = jt),
							(this.O = ti),
							(this.P = kt),
							(this.Q = hi),
							(this.R = Kt),
							(this.projection = this.D(new g.$2c())),
							(this.j = new g.$2c()),
							(this.m = $e.TestingContextKeys.viewMode.bindTo(this.N)),
							(this.q = $e.TestingContextKeys.viewSorting.bindTo(this.N)),
							(this.u = new c.$re()),
							(this.w = new Se(() => this.tree.getSelection().filter(b.$tg))),
							(this.y = this.D(
								new Q.$oqc(
									{
										key: "testing.treeState",
										scope: A.StorageScope.WORKSPACE,
										target: A.StorageTarget.MACHINE,
									},
									this.M,
								),
							)),
							(this.C = !1),
							(this.onChangeWelcomeVisibility = this.u.event),
							(this.welcomeExperience = He.None),
							(this.C = !!ht.reveal.value),
							(this.z = this.D(Rt.createInstance(Be, et))),
							this.m.set(
								this.M.get(
									"testing.viewMode",
									A.StorageScope.WORKSPACE,
									te.TestExplorerViewMode.Tree,
								),
							),
							this.q.set(
								this.M.get(
									"testing.viewSorting",
									A.StorageScope.WORKSPACE,
									te.TestExplorerViewSorting.ByLocation,
								),
							),
							this.Y(),
							(this.f = this.J.createInstance(Ee, gt.collection)),
							(this.tree = Rt.createInstance(
								W.$aLc,
								"Test Explorer List",
								et,
								new Ae(),
								[Rt.createInstance(Re, this.w), Rt.createInstance(De)],
								{
									identityProvider: Rt.createInstance(Me),
									hideTwistiesOfChildlessElements: !1,
									sorter: Rt.createInstance(Ie, this),
									keyboardNavigationLabelProvider: Rt.createInstance(qe),
									accessibilityProvider: Rt.createInstance(Ue),
									filter: this.f,
									findWidgetEnabled: !1,
									openOnSingleClick: !1,
								},
							));
						const Ye = this.D(
							new a.$Yh(() => {
								const Vt = this.tree.getOptimizedViewState(this.y.get({})),
									Bt = this.projection.value;
								Bt && (Bt.lastState = Vt);
							}, 3e3),
						);
						this.D(
							this.tree.onDidChangeCollapseState((Vt) => {
								Vt.node.element instanceof G.$7Kc &&
									(Vt.node.collapsed ||
										this.projection.value?.expandElement(
											Vt.node.element,
											Vt.deep ? 1 / 0 : 0,
										),
									Ye.schedule());
							}),
						),
							this.D(
								this.R.onDidChange((Vt) => {
									if (Vt) {
										const Bt = this.projection.value?.getElementByTestId(Vt);
										this.tree.resort(
											Bt?.parent && this.tree.hasElement(Bt.parent)
												? Bt.parent
												: null,
											!1,
										);
									}
								}),
							),
							this.D(
								rt((Vt) => {
									Vt && this.Z();
								}),
							),
							this.D(this.tree.onContextMenu((Vt) => this.W(Vt))),
							this.D(
								c.Event.any(
									ht.text.onDidChange,
									ht.fuzzy.onDidChange,
									gt.excluded.onTestExclusionsChanged,
								)(this.tree.refilter, this.tree),
							),
							this.D(
								this.tree.onDidOpen((Vt) => {
									Vt.element instanceof G.$7Kc &&
										!Vt.element.children.size &&
										Vt.element.test.item.uri &&
										di.executeCommand(
											"vscode.revealTest",
											Vt.element.test.item.extId,
										);
								}),
							),
							this.D(this.tree),
							this.D(
								this.onChangeWelcomeVisibility((Vt) => {
									this.z.setVisible(Vt === He.ForDocument);
								}),
							),
							this.D(
								t.$$fb(this.tree.getHTMLElement(), "keydown", (Vt) => {
									Vt.equals(n.KeyCode.Enter)
										? this.X(Vt)
										: d.$Lib.mightProducePrintableCharacter(Vt) &&
											((ht.text.value = Vt.browserEvent.key), ht.focusInput());
								}),
							),
							this.D(ht.reveal.onDidChange((Vt) => this.S(Vt, void 0, !1))),
							this.D(
								rt((Vt) => {
									Vt && ht.focusInput();
								}),
							),
							this.D(
								this.tree.onDidChangeSelection((Vt) => {
									if (
										t.$7gb(Vt.browserEvent) &&
										(Vt.browserEvent.altKey || Vt.browserEvent.shiftKey)
									)
										return;
									const Bt = Vt.elements[0];
									Bt &&
										Vt.browserEvent &&
										Bt instanceof G.$7Kc &&
										Bt.children.size === 0 &&
										Bt.test.expand === pe.TestItemExpandState.NotExpandable &&
										this.U(Bt);
								}),
							);
						let ze = (0, _.$RJc)(ft, _.TestingConfigKeys.FollowRunningTest);
						this.D(
							ft.onDidChangeConfiguration((Vt) => {
								Vt.affectsConfiguration(
									_.TestingConfigKeys.FollowRunningTest,
								) &&
									(ze = (0, _.$RJc)(ft, _.TestingConfigKeys.FollowRunningTest));
							}),
						);
						let Xe = (0, _.$RJc)(
							ft,
							_.TestingConfigKeys.AlwaysRevealTestOnStateChange,
						);
						this.D(
							ft.onDidChangeConfiguration((Vt) => {
								Vt.affectsConfiguration(
									_.TestingConfigKeys.AlwaysRevealTestOnStateChange,
								) &&
									(Xe = (0, _.$RJc)(
										ft,
										_.TestingConfigKeys.AlwaysRevealTestOnStateChange,
									));
							}),
						),
							this.D(
								ti.onTestChanged((Vt) => {
									ze &&
										Vt.reason ===
											le.TestResultItemChangeReason.OwnStateChange &&
										(this.tree.selectionSize > 1 ||
											(Vt.item.ownComputedState !==
												pe.TestResultState.Running &&
												!(
													Vt.previousState === pe.TestResultState.Queued &&
													(0, fe.$w4)(Vt.item.ownComputedState)
												)) ||
											this.S(Vt.item.item.extId, Xe, !1));
								}),
							),
							this.D(
								ti.onResultsChanged(() => {
									this.tree.resort(null);
								}),
							),
							this.D(
								this.Q.onDidChange(() => {
									this.tree.rerender();
								}),
							);
						const It = (0, p.observableFromEvent)(
								this,
								bt.onDidEditorsChange,
								() =>
									new Set(
										nt.groups
											.flatMap((Vt) => Vt.editors)
											.map((Vt) => Vt.resource)
											.filter(b.$tg),
									),
							),
							Lt = (0, p.observableFromEvent)(
								this,
								bt.onDidActiveEditorChange,
								() =>
									bt.activeEditor instanceof q.$GVb
										? bt.activeEditor.primary.resource
										: bt.activeEditor?.resource,
							),
							xt = (0, p.observableFromEvent)(
								this.I.text.onDidChange,
								() => this.I.text,
							);
						this.D(
							(0, p.autorun)((Vt) => {
								xt.read(Vt),
									this.I.isFilteringFor(Z.TestFilterTerm.OpenedFiles)
										? this.f.filterToDocumentUri([...It.read(Vt)])
										: this.f.filterToDocumentUri([Lt.read(Vt)].filter(b.$tg)),
									(this.I.isFilteringFor(Z.TestFilterTerm.CurrentDoc) ||
										this.I.isFilteringFor(Z.TestFilterTerm.OpenedFiles)) &&
										this.tree.refilter();
							}),
						),
							this.D(
								this.M.onWillSaveState(({ reason: Vt }) => {
									Vt === A.WillSaveStateReason.SHUTDOWN &&
										this.y.store(this.tree.getOptimizedViewState());
								}),
							);
					}
					layout(et, rt) {
						this.tree.layout(et, rt);
					}
					S(et, rt = !0, ft = !0) {
						if (!et) {
							this.C = !1;
							return;
						}
						const bt = this.Z();
						let nt = 0;
						const lt = [...se.$k4.fromString(et).idsFromRoot()];
						for (let ct = lt.length - 1; ct >= nt; ct--) {
							const gt = bt.getElementByTestId(lt[ct].toString());
							if (!gt || !this.tree.hasElement(gt)) continue;
							if (ct < lt.length - 1 && rt) {
								this.tree.expand(gt), (nt = ct + 1), (ct = lt.length - 1);
								continue;
							}
							let ht = gt;
							for (let Rt = gt; Rt instanceof G.$7Kc; Rt = Rt.parent) {
								if (Rt.test && this.H.excluded.contains(Rt.test)) {
									this.I.toggleFilteringFor(Z.TestFilterTerm.Hidden, !0);
									break;
								}
								!rt &&
									this.tree.hasElement(Rt) &&
									this.tree.isCollapsed(Rt) &&
									(ht = Rt);
							}
							(this.I.reveal.value = void 0),
								(this.C = !1),
								ft && this.tree.domFocus(),
								this.tree.getRelativeTop(ht) === null &&
									this.tree.reveal(ht, 0.5),
								(this.j.value = (0, a.$Oh)(() => {
									this.tree.setFocus([ht]), this.tree.setSelection([ht]);
								}, 1));
							return;
						}
						this.C = !0;
					}
					async collapseAll() {
						this.tree.collapseAll();
					}
					U(et) {
						const rt = et.test && this.O.getStateById(et.test.item.extId);
						return rt && rt[1].tasks.some((ft) => (0, fe.$v4)(ft.state))
							? this.P.tryPeekFirstError(rt[0], rt[1], { preserveFocus: !0 })
							: !1;
					}
					W(et) {
						const rt = et.element;
						if (!(rt instanceof G.$7Kc)) return;
						const { actions: ft } = Ve(
							this.N,
							this.F,
							this.H,
							this.R,
							this.Q,
							rt,
						);
						this.G.showContextMenu({
							getAnchor: () => et.anchor,
							getActions: () => ft.secondary,
							getActionsContext: () => rt,
							actionRunner: this.w,
						});
					}
					X(et) {
						const rt = this.tree.getFocus(),
							ft = this.tree.getSelection();
						let bt;
						rt.length === 1 && ft.includes(rt[0])
							? (et.browserEvent?.preventDefault(), (bt = ft))
							: (bt = rt);
						const nt = bt.filter((lt) => lt instanceof G.$7Kc);
						nt.length &&
							this.H.runTests({
								group: pe.TestRunProfileBitset.Run,
								tests: nt.map((lt) => lt.test),
							});
					}
					Y() {
						const rt =
							this.H.collection.busyProviders === 0 &&
							(0, ae.$tqc)(this.H.collection)
								? this.I.isFilteringFor(Z.TestFilterTerm.CurrentDoc)
									? He.ForDocument
									: He.ForWorkspace
								: He.None;
						rt !== this.welcomeExperience &&
							((this.welcomeExperience = rt), this.u.fire(rt));
					}
					Z() {
						return this.projection.value ?? this.bb();
					}
					bb() {
						this.projection.clear();
						const et = this.y.get({});
						this.m.get() === te.TestExplorerViewMode.List
							? (this.projection.value = this.J.createInstance(K.$_Kc, et))
							: (this.projection.value = this.J.createInstance(X.$bLc, et));
						const rt = this.D(new a.$Yh(() => this.cb(), 200));
						return (
							this.projection.value.onUpdate(() => {
								rt.isScheduled() || rt.schedule();
							}),
							this.cb(),
							this.projection.value
						);
					}
					cb() {
						this.Y(),
							this.projection.value?.applyTo(this.tree),
							this.tree.refilter(),
							this.C && this.S(this.I.reveal.value);
					}
					getSelectedTests() {
						return this.tree.getSelection();
					}
				};
				Ke = Ne(
					[
						j(2, I.$gj),
						j(3, ge.$IY),
						j(4, ve.$EY),
						j(5, v.$YX),
						j(6, P.$Xxb),
						j(7, ae.$sqc),
						j(8, Z.$xLc),
						j(9, L.$Li),
						j(10, A.$lq),
						j(11, T.$6j),
						j(12, oe.$Kqc),
						j(13, ue.$ZKc),
						j(14, re.$Bqc),
						j(15, ye.$MLc),
						j(16, S.$ek),
					],
					Ke,
				);
				var Je;
				(function (Ze) {
					(Ze[(Ze.Exclude = 0)] = "Exclude"),
						(Ze[(Ze.Inherit = 1)] = "Inherit"),
						(Ze[(Ze.Include = 2)] = "Include");
				})(Je || (Je = {}));
				const Te = (Ze, et, rt, ft) => {
					const bt = [ft ? [ft] : Ze.rootIds];
					for (; bt.length; )
						for (const nt of bt.pop()) {
							const lt = Ze.getNodeById(nt);
							if (
								lt &&
								!(!lt.item.uri || !et.extUri.isEqualOrParent(rt, lt.item.uri))
							) {
								if (
									lt.item.range ||
									lt.expand === pe.TestItemExpandState.Expandable
								)
									return !0;
								bt.push(lt.children);
							}
						}
					return !1;
				};
				let Ee = class {
					constructor(et, rt, ft, bt) {
						(this.f = et),
							(this.j = rt),
							(this.k = ft),
							(this.l = bt),
							(this.d = []);
					}
					filter(et) {
						if (et instanceof G.$8Kc) return m.TreeVisibility.Visible;
						if (
							et.test &&
							!this.j.isFilteringFor(Z.TestFilterTerm.Hidden) &&
							this.k.excluded.contains(et.test)
						)
							return m.TreeVisibility.Hidden;
						switch (Math.min(this.u(et), this.q(et), this.o(et), this.m(et))) {
							case Je.Exclude:
								return m.TreeVisibility.Hidden;
							case Je.Include:
								return m.TreeVisibility.Visible;
							default:
								return m.TreeVisibility.Recurse;
						}
					}
					filterToDocumentUri(et) {
						this.d = [...et];
					}
					m(et) {
						return (!this.j.includeTags.size && !this.j.excludeTags.size) ||
							((!this.j.includeTags.size ||
								et.test.item.tags.some((rt) => this.j.includeTags.has(rt))) &&
								et.test.item.tags.every((rt) => !this.j.excludeTags.has(rt)))
							? Je.Include
							: Je.Inherit;
					}
					o(et) {
						return this.j.isFilteringFor(Z.TestFilterTerm.Failed)
							? (0, fe.$v4)(et.state)
								? Je.Include
								: Je.Inherit
							: this.j.isFilteringFor(Z.TestFilterTerm.Executed)
								? et.state !== pe.TestResultState.Unset
									? Je.Include
									: Je.Inherit
								: Je.Include;
					}
					q(et) {
						return this.d.length === 0 ||
							(!this.j.isFilteringFor(Z.TestFilterTerm.CurrentDoc) &&
								!this.j.isFilteringFor(Z.TestFilterTerm.OpenedFiles)) ||
							!(et instanceof G.$7Kc) ||
							this.d.some((rt) => Te(this.f, this.l, rt, et.test.item.extId))
							? Je.Include
							: Je.Inherit;
					}
					u(et) {
						if (this.j.globList.length === 0) return Je.Include;
						const rt = this.j.fuzzy.value;
						for (let ft = et; ft; ft = ft.parent) {
							let bt =
								this.j.globList[0].include === !1 ? Je.Include : Je.Inherit;
							const nt = ft.test.item.label.toLowerCase();
							for (const { include: lt, text: ct } of this.j.globList)
								(rt ? (0, o.$bg)(nt, ct) : nt.includes(ct)) &&
									(bt = lt ? Je.Include : Je.Exclude);
							if (bt !== Je.Inherit) return bt;
						}
						return Je.Inherit;
					}
				};
				Ee = Ne([j(1, Z.$xLc), j(2, ae.$sqc), j(3, F.$Vl)], Ee);
				class Ie {
					constructor(et) {
						this.d = et;
					}
					compare(et, rt) {
						if (et instanceof G.$8Kc || rt instanceof G.$8Kc)
							return (
								(et instanceof G.$8Kc ? -1 : 0) + (rt instanceof G.$8Kc ? 1 : 0)
							);
						const ft = (rt.duration || 0) - (et.duration || 0);
						if (
							this.d.viewSorting === te.TestExplorerViewSorting.ByDuration &&
							ft !== 0
						)
							return ft;
						const bt = (0, fe.$y4)(et.state, rt.state);
						if (
							this.d.viewSorting === te.TestExplorerViewSorting.ByStatus &&
							bt !== 0
						)
							return bt;
						let nt = !1;
						if (
							et instanceof G.$7Kc &&
							rt instanceof G.$7Kc &&
							et.test.item.uri &&
							rt.test.item.uri &&
							et.test.item.uri.toString() === rt.test.item.uri.toString() &&
							et.test.item.range &&
							rt.test.item.range
						) {
							nt = !0;
							const gt =
								et.test.item.range.startLineNumber -
								rt.test.item.range.startLineNumber;
							if (gt !== 0) return gt;
						}
						const lt = et.test.item.sortText,
							ct = rt.test.item.sortText;
						return nt && !lt && !ct
							? 0
							: (lt || et.test.item.label).localeCompare(
									ct || rt.test.item.label,
								);
					}
				}
				let Be = class extends g.$1c {
					constructor(et, rt) {
						super();
						const ft = (this.f = t.$fhb(
								et,
								t.$(".testing-no-test-placeholder"),
							)),
							bt = t.$fhb(ft, t.$("p"));
						bt.innerText = (0, l.localize)(10793, null);
						const nt = (0, l.localize)(10794, null),
							lt = this.D(new w.$oob(ft, { title: nt, ...O.$lyb }));
						(lt.label = nt),
							this.D(
								lt.onDidClick(() =>
									rt.toggleFilteringFor(Z.TestFilterTerm.CurrentDoc, !1),
								),
							);
					}
					setVisible(et) {
						this.f.classList.toggle("visible", et);
					}
				};
				Be = Ne([j(1, Z.$xLc)], Be);
				class Se extends r.$sj {
					constructor(et) {
						super(), (this.j = et);
					}
					async q(et, rt) {
						if (!(et instanceof v.$2X)) return super.q(et, rt);
						const ft = this.j(),
							lt = (ft.some((ct) => ct === rt) ? ft : [rt]).filter(
								(ct) => ct instanceof G.$7Kc,
							);
						await et.run(...lt);
					}
				}
				const ke = (Ze) => {
					let et = (0, te.$zqc)(Ze.description || Ze.test.item.label, Ze.state);
					return (
						Ze instanceof G.$7Kc &&
							(Ze.duration !== void 0 &&
								(et = (0, l.localize)(10795, null, et, je(Ze.duration))),
							Ze.retired && (et = (0, l.localize)(10796, null, et))),
						et
					);
				};
				class Ue {
					getWidgetAriaLabel() {
						return (0, l.localize)(10797, null);
					}
					getAriaLabel(et) {
						return et instanceof G.$8Kc ? et.description : ke(et);
					}
				}
				class qe {
					getKeyboardNavigationLabel(et) {
						return et instanceof G.$8Kc ? et.message : et.test.item.label;
					}
				}
				class Ae {
					getHeight(et) {
						return et instanceof G.$8Kc ? 27 : 22;
					}
					getTemplateId(et) {
						return et instanceof G.$8Kc ? De.ID : Re.ID;
					}
				}
				class Me {
					getId(et) {
						return et.treeId;
					}
				}
				let De = class {
					static {
						be = this;
					}
					static {
						this.ID = "error";
					}
					constructor(et, rt) {
						(this.f = et), (this.d = rt.createInstance(s.$Qzb, {}));
					}
					get templateId() {
						return be.ID;
					}
					renderTemplate(et) {
						return {
							label: t.$fhb(et, t.$(".error")),
							disposable: new g.$Zc(),
						};
					}
					renderElement({ element: et }, rt, ft) {
						if ((t.$9fb(ft.label), typeof et.message == "string"))
							ft.label.innerText = et.message;
						else {
							const bt = this.d.render(et.message, { inline: !0 });
							ft.label.appendChild(bt.element);
						}
						ft.disposable.add(
							this.f.setupManagedHover(
								(0, E.$cib)("mouse"),
								ft.label,
								et.description,
							),
						);
					}
					disposeTemplate(et) {
						et.disposable.dispose();
					}
				};
				De = be = Ne([j(0, k.$Uyb), j(1, L.$Li)], De);
				let Re = class extends g.$1c {
					static {
						Ce = this;
					}
					static {
						this.ID = "testItem";
					}
					constructor(et, rt, ft, bt, nt, lt, ct, gt) {
						super(),
							(this.f = et),
							(this.j = rt),
							(this.m = ft),
							(this.q = bt),
							(this.u = nt),
							(this.w = lt),
							(this.y = ct),
							(this.z = gt),
							(this.templateId = Ce.ID);
					}
					renderTemplate(et) {
						const rt = t.$fhb(et, t.$(".test-item")),
							ft = t.$fhb(rt, t.$(".computed-state")),
							bt = t.$fhb(rt, t.$(".label")),
							nt = new g.$Zc();
						t.$fhb(rt, t.$(f.ThemeIcon.asCSSSelector(Y.$DKc)));
						const lt = nt.add(
							new i.$eib(rt, {
								actionRunner: this.f,
								actionViewItemProvider: (gt, ht) =>
									gt instanceof v.$2X
										? this.w.createInstance($.$Lyb, gt, {
												hoverDelegate: ht.hoverDelegate,
											})
										: void 0,
							}),
						);
						nt.add(
							this.y.onDidChange((gt) => {
								const ht = ct.current?.test.item.extId;
								ht &&
									(!gt || gt === ht || se.$k4.isChild(ht, gt)) &&
									this.C(ct.current, ct);
							}),
						);
						const ct = {
							wrapper: rt,
							label: bt,
							actionBar: lt,
							icon: ft,
							elementDisposable: new g.$Zc(),
							templateDisposable: nt,
						};
						return ct;
					}
					disposeTemplate(et) {
						et.templateDisposable.clear();
					}
					disposeElement(et, rt, ft) {
						ft.elementDisposable.clear();
					}
					C(et, rt) {
						const { actions: ft, contextOverlay: bt } = Ve(
								this.u,
								this.j,
								this.m,
								this.y,
								this.q,
								et,
							),
							nt = !!bt.getContextKeyValue(
								$e.TestingContextKeys.isContinuousModeOn.key,
							),
							lt = !nt && this.y.isEnabledForAChildOf(et.test.item.extId);
						rt.actionBar.domNode.classList.toggle(
							"testing-is-continuous-run",
							nt || lt,
						),
							rt.actionBar.clear(),
							(rt.actionBar.context = et),
							rt.actionBar.push(ft.primary, { icon: !0, label: !1 });
					}
					renderElement(et, rt, ft) {
						ft.elementDisposable.clear(),
							(ft.current = et.element),
							this.C(et.element, ft),
							ft.elementDisposable.add(
								et.element.onChange(() => this._renderElement(et, ft)),
							),
							this._renderElement(et, ft);
					}
					_renderElement(et, rt) {
						const ft = this.m.excluded.contains(et.element.test);
						rt.wrapper.classList.toggle("test-is-hidden", ft);
						const bt = Y.$PKc.get(
							et.element.test.expand === pe.TestItemExpandState.BusyExpanding ||
								et.element.test.item.busy
								? pe.TestResultState.Running
								: et.element.state,
						);
						(rt.icon.className =
							"computed-state " + (bt ? f.ThemeIcon.asClassName(bt) : "")),
							et.element.retired && (rt.icon.className += " retired"),
							rt.elementDisposable.add(
								this.z.setupManagedHover(
									(0, E.$cib)("mouse"),
									rt.label,
									ke(et.element),
								),
							),
							et.element.test.item.label.trim()
								? t.$hhb(rt.label, ...(0, C.$Sib)(et.element.test.item.label))
								: (rt.label.textContent = "\xA0");
						let nt = et.element.description;
						et.element.duration !== void 0 &&
							(nt = nt
								? `${nt}: ${je(et.element.duration)}`
								: je(et.element.duration)),
							nt &&
								t.$fhb(rt.label, t.$("span.test-label-description", {}, nt));
					}
				};
				Re = Ce = Ne(
					[
						j(1, v.$YX),
						j(2, ae.$sqc),
						j(3, re.$Bqc),
						j(4, T.$6j),
						j(5, L.$Li),
						j(6, ye.$MLc),
						j(7, k.$Uyb),
					],
					Re,
				);
				const je = (Ze) =>
						Ze < 10
							? `${Ze.toFixed(1)}ms`
							: Ze < 1e3
								? `${Ze.toFixed(0)}ms`
								: `${(Ze / 1e3).toFixed(1)}s`,
					Ve = (Ze, et, rt, ft, bt, nt) => {
						const lt = nt instanceof G.$7Kc ? nt.test : void 0,
							ct = (0, J.$UKc)(lt, lt ? bt.capabilitiesForTest(lt.item) : 0);
						if ((ct.push(["view", te.Testing.ExplorerViewId]), lt)) {
							const ti = rt.getTestController(lt.controllerId),
								kt =
									!!ti &&
									bt
										.getControllerProfiles(ti.id)
										.some((hi) => hi.supportsContinuousRun);
							ct.push(
								[
									$e.TestingContextKeys.canRefreshTests.key,
									ti &&
										!!(
											ti.capabilities.get() &
											pe.TestControllerCapability.Refresh
										) &&
										se.$k4.isRoot(lt.item.extId),
								],
								[
									$e.TestingContextKeys.testItemIsHidden.key,
									rt.excluded.contains(lt),
								],
								[
									$e.TestingContextKeys.isContinuousModeOn.key,
									kt && ft.isSpecificallyEnabledFor(lt.item.extId),
								],
								[
									$e.TestingContextKeys.isParentRunningContinuously.key,
									kt && ft.isEnabledForAParentOf(lt.item.extId),
								],
								[$e.TestingContextKeys.supportsContinuousRun.key, kt],
							);
						}
						const gt = Ze.createOverlay(ct),
							ht = et.getMenuActions(v.$XX.TestItem, gt, {
								shouldForwardArgs: !0,
							}),
							jt = { primary: [], secondary: [] };
						return (
							(0, $.$Kyb)(ht, jt, "inline"), { actions: jt, contextOverlay: gt }
						);
					};
				(0, z.$oP)((Ze, et) => {
					if (Ze.type === "dark") {
						const rt = Ze.getColor(B.$IP);
						if (rt) {
							const ft = new h.$UL(
								new h.$RL(rt.rgba.r, rt.rgba.g, rt.rgba.b, 0.65),
							);
							et.addRule(
								`.test-explorer .test-explorer-messages { color: ${ft}; }`,
							);
						}
					}
				});
			},
		),
		define(
			de[3847],
			he([1, 0, 6, 34, 814, 89, 10, 8]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$51c = e.$41c = void 0),
					(e.$41c = new d.$5j("timelineHasProvider", !1));
				let m = class {
					constructor(u, a, h, c) {
						(this.j = u),
							(this.k = a),
							(this.l = h),
							(this.m = c),
							(this.c = new t.$re()),
							(this.onDidChangeProviders = this.c.event),
							(this.d = new t.$re()),
							(this.onDidChangeTimeline = this.d.event),
							(this.f = new t.$re()),
							(this.onDidChangeUri = this.f.event),
							(this.h = new Map()),
							(this.i = new Map()),
							(this.g = e.$41c.bindTo(this.m)),
							this.n();
					}
					getSources() {
						return [...this.h.values()].map((u) => ({
							id: u.id,
							label: u.label,
						}));
					}
					getTimeline(u, a, h, c) {
						this.j.trace(
							`TimelineService#getTimeline(${u}): uri=${a.toString()}`,
						);
						const n = this.h.get(u);
						if (n !== void 0) {
							if (typeof n.scheme == "string") {
								if (n.scheme !== "*" && n.scheme !== a.scheme) return;
							} else if (!n.scheme.includes(a.scheme)) return;
							return {
								result: n.provideTimeline(a, h, c.token).then((g) => {
									if (g !== void 0)
										return (
											(g.items = g.items.map((p) => ({ ...p, source: n.id }))),
											g.items.sort(
												(p, o) =>
													o.timestamp - p.timestamp ||
													o.source.localeCompare(p.source, void 0, {
														numeric: !0,
														sensitivity: "base",
													}),
											),
											g
										);
								}),
								options: h,
								source: n.id,
								tokenSource: c,
								uri: a,
							};
						}
					}
					registerTimelineProvider(u) {
						this.j.trace(
							`TimelineService#registerTimelineProvider: id=${u.id}`,
						);
						const a = u.id,
							h = this.h.get(a);
						if (h)
							try {
								h?.dispose();
							} catch {}
						return (
							this.h.set(a, u),
							this.n(),
							u.onDidChange &&
								this.i.set(
									a,
									u.onDidChange((c) => this.d.fire(c)),
								),
							this.c.fire({ added: [a] }),
							{
								dispose: () => {
									this.h.delete(a), this.c.fire({ removed: [a] });
								},
							}
						);
					}
					unregisterTimelineProvider(u) {
						this.j.trace(`TimelineService#unregisterTimelineProvider: id=${u}`),
							this.h.has(u) &&
								(this.h.delete(u),
								this.i.delete(u),
								this.n(),
								this.c.fire({ removed: [u] }));
					}
					setUri(u) {
						this.k.openView(w.$47, !0), this.f.fire(u);
					}
					n() {
						this.g.set(this.h.size !== 0);
					}
				};
				(e.$51c = m),
					(e.$51c = m =
						Ne([j(0, i.$ik), j(1, E.$HMb), j(2, C.$gj), j(3, d.$6j)], m));
			},
		),
		define(
			de[3848],
			he([1, 0, 6, 3, 12, 19, 129, 150, 89, 141, 18, 87, 1310, 1312]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$f1c = void 0);
				let n = class extends i.$1c {
					constructor(p, o, f, b, s) {
						super(), (this.a = o);
						const l = t.Event.filter(
							t.Event.any(
								t.Event.map(p.onDidActiveEditorChange, () =>
									this.b(p.activeEditor),
								),
								t.Event.map(
									t.Event.filter(
										f.onDidChangeViewContainerVisibility,
										(y) => y.id === r.$LQb && y.visible,
									),
									(y) => y.id,
								),
							),
							(y) => y !== void 0,
						);
						w.$r
							? this.D(
									t.Event.debounce(
										t.Event.any(
											t.Event.map(s.onDidChangeFocus, () => "windowFocus"),
											t.Event.map(l, (y) => y),
										),
										(y, $) => (y ? [...y, $] : [$]),
										1e3,
									)((y) => b.triggerSync(y, !0, !1)),
								)
							: this.D(l((y) => b.triggerSync([y], !0, !1)));
					}
					b(p) {
						if (!p) return;
						if (p instanceof c.$uvc) return "settingsEditor";
						if (p instanceof h.$tvc) return "keybindingsEditor";
						const o = p.resource;
						if ((0, E.$gh)(o, this.a.defaultProfile.settingsResource))
							return "settingsEditor";
						if ((0, E.$gh)(o, this.a.defaultProfile.keybindingsResource))
							return "keybindingsEditor";
					}
				};
				(e.$f1c = n),
					(e.$f1c = n =
						Ne(
							[
								j(0, u.$IY),
								j(1, C.$Xl),
								j(2, m.$HMb),
								j(3, d.$7Rb),
								j(4, a.$asb),
							],
							n,
						));
			},
		),
		define(
			de[3849],
			he([
				1, 0, 7, 33, 6, 3, 11, 10, 8, 49, 5, 39, 41, 84, 21, 32, 35, 146, 282,
				60, 89, 355, 1274, 1275, 260, 53, 72,
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
			) {
				"use strict";
				var T;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$iuc = void 0);
				const P = { webviewState: "webviewState" };
				let k = class extends o.$TMb {
					static {
						T = this;
					}
					static b(D) {
						return (this.a ??= new l.$6Ib("webviewViews.origins", D)), this.a;
					}
					constructor(D, M, N, A, R, O, B, U, z, F, x, H, q, V, G, K, J, W) {
						super(
							{
								...D,
								titleMenuId: C.$XX.ViewTitle,
								showActions: o.ViewPaneShowActions.WhenExpanded,
							},
							O,
							A,
							M,
							N,
							x,
							R,
							B,
							F,
							U,
							z,
						),
							(this.dc = H),
							(this.ec = q),
							(this.fc = V),
							(this.gc = G),
							(this.hc = K),
							(this.ic = J),
							(this.jc = W),
							(this.c = this.D(new E.$2c())),
							(this.f = this.D(new E.$Zc())),
							(this.g = !1),
							(this.t = this.D(new E.$2c())),
							(this.kc = this.D(new w.$re())),
							(this.onDidChangeVisibility = this.kc.event),
							(this.lc = this.D(new w.$re())),
							(this.onDispose = this.lc.event),
							(this.sb = D.fromExtensionId),
							(this.n = this.title),
							(this.L = new f.$eEb(`webviewView.${this.id}`, G)),
							(this.ab = this.L.getMemento(
								n.StorageScope.WORKSPACE,
								n.StorageTarget.MACHINE,
							)),
							this.D(this.onDidChangeBodyVisibility(() => this.oc())),
							this.D(
								this.jc.onNewResolverRegistered((X) => {
									X.viewType === this.id && this.oc();
								}),
							),
							this.oc();
					}
					dispose() {
						this.lc.fire(), clearTimeout(this.cc), super.dispose();
					}
					focus() {
						super.focus(), this.c.value?.focus();
					}
					W(D) {
						super.W(D),
							(this.h = D),
							(this.j = void 0),
							this.m ||
								((this.m = new ResizeObserver(() => {
									setTimeout(() => {
										this.uc();
									}, 0);
								})),
								this.D(
									(0, E.$Yc)(() => {
										this.m.disconnect();
									}),
								),
								this.m.observe(D));
					}
					saveState() {
						this.c.value && (this.ab[P.webviewState] = this.c.value.state),
							this.L.saveMemento(),
							super.saveState();
					}
					X(D, M) {
						super.X(D, M), this.uc(new t.$pgb(M, D));
					}
					oc() {
						this.isBodyVisible()
							? (this.pc(),
								this.c.value?.claim(
									this,
									(0, t.getWindow)(this.element),
									void 0,
								))
							: this.c.value?.release(this);
					}
					pc() {
						if (this.g) return;
						this.g = !0;
						const D = this.sb
								? T.b(this.gc).getOrigin(this.id, this.sb)
								: void 0,
							M = this.ic.createWebviewOverlay({
								origin: D,
								providedViewType: this.id,
								title: this.title,
								options: { purpose: l.WebviewContentPurpose.WebviewView },
								contentOptions: {},
								extension: this.sb ? { id: this.sb } : void 0,
							});
						(M.state = this.ab[P.webviewState]),
							(this.c.value = M),
							this.h && this.uc(),
							this.f.add(
								(0, E.$Yc)(() => {
									this.c.value?.release(this);
								}),
							),
							this.f.add(
								M.onDidUpdateState(() => {
									this.ab[P.webviewState] = M.state;
								}),
							);
						for (const A of [
							t.$$gb.DRAG,
							t.$$gb.DRAG_END,
							t.$$gb.DRAG_ENTER,
							t.$$gb.DRAG_LEAVE,
							t.$$gb.DRAG_START,
						])
							this.f.add(
								(0, t.$0fb)(this.c.value.container, A, (R) => {
									R.preventDefault(),
										R.stopImmediatePropagation(),
										this.dropTargetElement.dispatchEvent(
											new DragEvent(R.type, R),
										);
								}),
							);
						this.f.add(
							new y.$R2b((0, t.getWindow)(this.element), () => this.c.value),
						);
						const N = this.f.add(new i.$Ce());
						this.sc(async () => {
							await this.ec.activateByEvent(`onView:${this.id}`);
							const A = this,
								R = {
									webview: M,
									onDidChangeVisibility: this.onDidChangeBodyVisibility,
									onDispose: this.onDispose,
									get title() {
										return A.r;
									},
									set title(O) {
										A.Sb(O);
									},
									get description() {
										return A.titleDescription;
									},
									set description(O) {
										A.Ub(O);
									},
									get badge() {
										return A.s;
									},
									set badge(O) {
										A.rc(O);
									},
									dispose: () => {
										(this.g = !1), this.c.clear(), this.f.clear();
									},
									show: (O) => {
										this.hc.openView(this.id, !O);
									},
								};
							await this.jc.resolve(this.id, R, N.token);
						});
					}
					Sb(D) {
						(this.r = D), super.Sb(typeof D == "string" ? D : this.n);
					}
					rc(D) {
						if (
							!(this.s?.value === D?.value && this.s?.tooltip === D?.tooltip) &&
							((this.s = D), D)
						) {
							const M = {
								badge: new v.$8qc(D.value, () => D.tooltip),
								priority: 150,
							};
							this.t.value = this.dc.showViewActivity(this.id, M);
						}
					}
					async sc(D) {
						return this.fc.withProgress({ location: this.id, delay: 500 }, D);
					}
					onDidScrollRoot() {
						this.uc();
					}
					tc(D) {
						const M = this.c.value;
						!this.h ||
							!M ||
							((!this.j || !this.j.isConnected) && (this.j = this.vc(this.h)),
							M.layoutWebviewOverElement(this.h, D, this.j));
					}
					uc(D) {
						this.tc(D),
							clearTimeout(this.cc),
							(this.cc = setTimeout(() => this.tc(D), 200));
					}
					vc(D) {
						return (0, t.$Egb)(D, "monaco-scrollable-element") ?? void 0;
					}
				};
				(e.$iuc = k),
					(e.$iuc =
						k =
						T =
							Ne(
								[
									j(1, d.$gj),
									j(2, m.$6j),
									j(3, r.$Xxb),
									j(4, u.$Li),
									j(5, a.$uZ),
									j(6, h.$7rb),
									j(7, g.$km),
									j(8, I.$Uyb),
									j(9, p.$iP),
									j(10, b.$K1),
									j(11, v.$7qc),
									j(12, S.$q2),
									j(13, c.$8N),
									j(14, n.$lq),
									j(15, s.$HMb),
									j(16, l.$3Ib),
									j(17, $.$2oc),
								],
								k,
							));
			},
		),
		define(
			de[3850],
			he([
				1, 0, 5, 6, 21, 282, 11, 31, 8, 3, 150, 9, 19, 23, 119, 3723, 708, 87,
				10, 488, 3333, 20, 54, 24, 89, 4, 32, 1315, 25, 33, 157,
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
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$DXc =
						e.$CXc =
						e.$BXc =
						e.$AXc =
						e.$zXc =
						e.$yXc =
						e.$xXc =
							void 0),
					(e.$xXc = new m.$5j("hasMultipleNewFileEntries", !1)),
					(e.$yXc = (0, t.$Mi)("walkthroughsService")),
					(e.$zXc = "workbench.welcomePage.hiddenCategories"),
					(e.$AXc = "workbench.welcomePage.walkthroughMetadata");
				const D = (0, S.localize)(11478, null),
					N = 7 * (24 * 60 * 60 * 1e3);
				let A = class extends r.$1c {
					constructor(F, x, H, q, V, G, K, J, W, X, Y, ie) {
						super(),
							(this.F = F),
							(this.G = x),
							(this.H = H),
							(this.I = q),
							(this.J = V),
							(this.L = G),
							(this.M = K),
							(this.N = J),
							(this.O = W),
							(this.P = X),
							(this.Q = Y),
							(this.R = ie),
							(this.b = new i.$re()),
							(this.onDidAddWalkthrough = this.b.event),
							(this.c = new i.$re()),
							(this.onDidRemoveWalkthrough = this.c.event),
							(this.g = new i.$re()),
							(this.onDidChangeWalkthrough = this.g.event),
							(this.h = new i.$re()),
							(this.onDidProgressStep = this.h.event),
							(this.n = new Set()),
							(this.q = new Map()),
							(this.r = new Map()),
							(this.t = new Map()),
							(this.u = new Set()),
							(this.w = new Set()),
							(this.y = new Set()),
							(this.z = new Set()),
							(this.C = new Map(
								JSON.parse(this.F.get(e.$AXc, w.StorageScope.PROFILE, "[]")),
							)),
							(this.j = new E.$eEb("gettingStartedService", this.F)),
							(this.m = this.j.getMemento(
								w.StorageScope.PROFILE,
								w.StorageTarget.USER,
							)),
							this.U(),
							e.$xXc.bindTo(this.J).set(!1),
							this.S();
					}
					S() {
						g.$vXc.forEach(async (F, x) => {
							this._registerWalkthrough({
								...F,
								icon: { type: "icon", icon: F.icon },
								order: g.$vXc.length - x,
								source: D,
								when: m.$Kj.deserialize(F.when) ?? m.$Kj.true(),
								steps: F.content.steps.map((H, q) => ({
									...H,
									completionEvents: H.completionEvents ?? [],
									description: (0, e.$CXc)(H.description),
									category: F.id,
									order: q,
									when: m.$Kj.deserialize(H.when) ?? m.$Kj.true(),
									media:
										H.media.type === "image"
											? {
													type: "image",
													altText: H.media.altText,
													path: U(H.media.path),
												}
											: H.media.type === "svg"
												? {
														type: "svg",
														altText: H.media.altText,
														path: (0, e.$DXc)(H.media.path).with({
															query: JSON.stringify({
																moduleId:
																	"vs/workbench/contrib/welcomeGettingStarted/common/media/" +
																	H.media.path,
															}),
														}),
													}
												: {
														type: "markdown",
														path: (0, e.$DXc)(H.media.path).with({
															query: JSON.stringify({
																moduleId:
																	"vs/workbench/contrib/welcomeGettingStarted/common/media/" +
																	H.media.path,
															}),
														}),
														base: c.$7g.asFileUri(
															"vs/workbench/contrib/welcomeGettingStarted/common/media/",
														),
														root: c.$7g.asFileUri(
															"vs/workbench/contrib/welcomeGettingStarted/common/media/",
														),
													},
								})),
							});
						}),
							s.$wXc.setHandler((F, { added: x, removed: H }) => {
								x.map((q) => this.W(q.description)),
									H.map((q) => this.X(q.description));
							});
					}
					U() {
						this.D(
							this.G.onDidExecuteCommand((F) =>
								this.progressByEvent(`onCommand:${F.commandId}`),
							),
						),
							this.N.getInstalled().then((F) => {
								F.forEach((x) =>
									this.progressByEvent(
										`extensionInstalled:${x.identifier.id.toLowerCase()}`,
									),
								);
							}),
							this.D(
								this.N.onDidInstallExtensions((F) => {
									for (const x of F)
										x?.context?.[n.$up] ||
											x?.context?.[n.$wp] ||
											this.u.add(x.identifier.id.toLowerCase()),
											this.progressByEvent(
												`extensionInstalled:${x.identifier.id.toLowerCase()}`,
											);
								}),
							),
							this.D(
								this.J.onDidChangeContext((F) => {
									F.affectsSome(this.z) &&
										this.y.forEach((x) => {
											F.affectsSome(new Set(x.keys())) &&
												this.J.contextMatchesRules(x) &&
												this.progressByEvent("onContext:" + x.serialize());
										});
								}),
							),
							this.D(
								this.P.onDidChangeViewVisibility((F) => {
									F.visible && this.progressByEvent("onView:" + F.id);
								}),
							),
							this.D(
								this.M.onDidChangeConfiguration((F) => {
									F.affectedKeys.forEach((x) => {
										this.progressByEvent("onSettingChanged:" + x);
									});
								}),
							),
							this.L.isEnabled() &&
								this.progressByEvent("onEvent:sync-enabled"),
							this.D(
								this.L.onDidChangeEnablement(() => {
									this.L.isEnabled() &&
										this.progressByEvent("onEvent:sync-enabled");
								}),
							);
					}
					markWalkthroughOpened(F) {
						const x = this.r.get(F),
							H = this.C.get(F);
						H &&
							x &&
							this.C.set(F, {
								...H,
								manaullyOpened: !0,
								stepIDs: x.steps.map((q) => q.id),
							}),
							this.F.store(
								e.$AXc,
								JSON.stringify([...this.C.entries()]),
								w.StorageScope.PROFILE,
								w.StorageTarget.USER,
							);
					}
					async W(F) {
						const x = (K) =>
								K.startsWith("https://")
									? a.URI.parse(K, !0)
									: c.$7g.uriToFileUri((0, h.$nh)(F.extensionLocation, K)),
							H = (K) => {
								const J = (W) =>
									W.startsWith("https://")
										? a.URI.parse(W, !0)
										: c.$7g.uriToBrowserUri((0, h.$nh)(F.extensionLocation, W));
								if (typeof K == "string") {
									const W = J(K);
									return { hcDark: W, hcLight: W, dark: W, light: W };
								} else
									return {
										hcDark: J(K.hc),
										hcLight: J(K.hcLight ?? K.light),
										light: J(K.light),
										dark: J(K.dark),
									};
							};
						if (!F.contributes?.walkthroughs?.length) return;
						let q,
							V = Math.min();
						await Promise.all(
							F.contributes?.walkthroughs?.map(async (K, J) => {
								const W = F.identifier.value + "#" + K.id,
									X = !this.C.get(W);
								X &&
									this.C.set(W, {
										firstSeen: +new Date(),
										stepIDs: K.steps?.map((te) => te.id) ?? [],
										manaullyOpened: !1,
									});
								const Y = await Promise.race([
									this.R?.getTreatment(
										`gettingStarted.overrideCategory.${F.identifier.value + "." + K.id}.when`,
									),
									new Promise((te) => setTimeout(() => te(K.when), 5e3)),
								]);
								this.u.has(F.identifier.value.toLowerCase()) &&
									this.J.contextMatchesRules(
										m.$Kj.deserialize(Y ?? K.when) ?? m.$Kj.true(),
									) &&
									(this.u.delete(F.identifier.value.toLowerCase()),
									J < V && X && ((q = W), (V = J)));
								const ie = (K.steps ?? []).map((te, Q) => {
									const Z = (0, e.$CXc)(te.description || ""),
										se = F.identifier.value + "#" + K.id + "#" + te.id;
									let re;
									if (!te.media)
										throw Error(
											"missing media in walkthrough step: " +
												K.id +
												"@" +
												te.id,
										);
									if (te.media.image) {
										const le = te.media.altText;
										le === void 0 &&
											console.error(
												"Walkthrough item:",
												se,
												"is missing altText for its media element.",
											),
											(re = {
												type: "image",
												altText: le,
												path: H(te.media.image),
											});
									} else if (te.media.markdown)
										re = {
											type: "markdown",
											path: x(te.media.markdown),
											base: x((0, y.$rc)(te.media.markdown)),
											root: c.$7g.uriToFileUri(F.extensionLocation),
										};
									else if (te.media.svg)
										re = {
											type: "svg",
											path: x(te.media.svg),
											altText: te.media.svg,
										};
									else
										throw new Error(
											"Unknown walkthrough format detected for " + se,
										);
									return {
										description: Z,
										media: re,
										completionEvents:
											te.completionEvents?.filter(
												(le) => typeof le == "string",
											) ?? [],
										id: se,
										title: te.title,
										when: m.$Kj.deserialize(te.when) ?? m.$Kj.true(),
										category: W,
										order: Q,
									};
								});
								let ne = !1;
								if (K.featuredFor) {
									const te = this.I.getWorkspace().folders.map((Z) => Z.uri),
										Q = new k.$Ce();
									setTimeout(() => Q.cancel(), 2e3),
										(ne = await this.H.invokeFunction((Z) =>
											(0, T.$7oc)(Z, te, K.featuredFor, Q.token),
										));
								}
								const ee = K.icon ?? F.icon,
									_ = {
										description: K.description,
										title: K.title,
										id: W,
										isFeatured: ne,
										source: F.displayName ?? F.name,
										order: 0,
										steps: ie,
										icon: {
											type: "image",
											path: ee
												? c.$7g
														.uriToBrowserUri(
															(0, h.$nh)(F.extensionLocation, ee),
														)
														.toString(!0)
												: L.$FQb,
										},
										when: m.$Kj.deserialize(Y ?? K.when) ?? m.$Kj.true(),
									};
								this._registerWalkthrough(_), this.b.fire(this.Y(_));
							}),
						),
							this.F.store(
								e.$AXc,
								JSON.stringify([...this.C.entries()]),
								w.StorageScope.PROFILE,
								w.StorageTarget.USER,
							),
							(await this.O.hadLastFocus()) &&
								q &&
								this.M.getValue(
									"workbench.welcomePage.walkthroughs.openOnInstall",
								) &&
								(this.Q.publicLog2("gettingStarted.didAutoOpenWalkthrough", {
									id: q,
								}),
								this.G.executeCommand(
									"workbench.action.openWalkthrough",
									q,
									!0,
								));
					}
					X(F) {
						F.contributes?.walkthroughs?.length &&
							F.contributes?.walkthroughs?.forEach((x) => {
								const H = F.identifier.value + "#" + x.id;
								x.steps.forEach((q) => {
									const V = F.identifier.value + "#" + x.id + "#" + q.id;
									this.t.delete(V);
								}),
									this.r.delete(H),
									this.c.fire(H);
							});
					}
					getWalkthrough(F) {
						const x = this.r.get(F);
						if (!x) throw Error("Trying to get unknown walkthrough: " + F);
						return this.Y(x);
					}
					getWalkthroughs() {
						return [...this.r.values()]
							.map((H) => ({
								...H,
								content: { type: "steps", steps: H.steps },
							}))
							.filter(
								(H) => H.content.type !== "steps" || H.content.steps.length,
							)
							.map((H) => this.Y(H));
					}
					Y(F) {
						const x = F.steps.map((Y) => this.Z(Y)),
							H = this.C.get(F.id)?.manaullyOpened,
							q = this.C.get(F.id)?.firstSeen,
							V = q && q > +new Date() - N,
							G = this.C.get(F.id)?.stepIDs,
							K = this.r.get(F.id);
						if (!K) throw Error("Could not find walkthrough with id " + F.id);
						const J = K.steps.map((Y) => Y.id),
							W =
								G && (J.length !== G.length || J.some((Y, ie) => Y !== G[ie]));
						let X = 0;
						if (q) {
							const ie = +new Date() - q;
							X = Math.max(0, (N - ie) / N);
						}
						return {
							...F,
							recencyBonus: X,
							steps: x,
							newItems: !!W,
							newEntry: !!(V && !H),
						};
					}
					Z(F) {
						return { ...F, done: !1, ...this.m[F.id] };
					}
					progressStep(F) {
						const x = this.m[F];
						if (!x || x.done !== !0) {
							(this.m[F] = { done: !0 }), this.j.saveMemento();
							const H = this.bb(F);
							if (!H) throw Error("Tried to progress unknown step");
							this.h.fire(this.Z(H));
						}
					}
					deprogressStep(F) {
						delete this.m[F], this.j.saveMemento();
						const x = this.bb(F);
						this.h.fire(this.Z(x));
					}
					progressByEvent(F) {
						this.n.has(F) ||
							(this.n.add(F),
							this.q.get(F)?.forEach((x) => this.progressStep(x)));
					}
					registerWalkthrough(F) {
						this._registerWalkthrough({
							...F,
							steps: F.steps.map((x) => ({
								...x,
								description: (0, e.$CXc)(x.description),
							})),
						});
					}
					_registerWalkthrough(F) {
						if (this.r.get(F.id)) {
							console.error(
								`Skipping attempt to overwrite walkthrough. (${F.id})`,
							);
							return;
						}
						this.r.set(F.id, F),
							F.steps.forEach((H) => {
								if (this.t.has(H.id))
									throw Error(
										"Attempting to register step with id " +
											H.id +
											" twice. Second is dropped.",
									);
								this.t.set(H.id, H),
									H.when.keys().forEach((q) => this.w.add(q)),
									this.$(H);
							}),
							F.when.keys().forEach((H) => this.w.add(H));
					}
					$(F) {
						if (F.doneOn) {
							console.error(
								"wakthrough step",
								F,
								"uses deprecated 'doneOn' property. Adopt 'completionEvents' to silence this warning",
							);
							return;
						}
						F.completionEvents.length ||
							(F.completionEvents = (0, $.$Lb)(
								F.description
									.filter((x) => x.nodes.length === 1)
									.flatMap((x) =>
										x.nodes
											.filter((H) => typeof H != "string")
											.map(({ href: H }) => {
												if (H.startsWith("command:"))
													return (
														"onCommand:" +
														H.slice(
															8,
															H.includes("?") ? H.indexOf("?") : void 0,
														)
													);
												if (H.startsWith("https://") || H.startsWith("http://"))
													return "onLink:" + H;
											}),
									),
							)),
							F.completionEvents.length ||
								F.completionEvents.push("stepSelected");
						for (let x of F.completionEvents) {
							const [H, q, V] = /^([^:]*):?(.*)$/.exec(x) ?? [];
							if (!q) {
								console.error(
									`Unknown completionEvent ${x} when registering step ${F.id}`,
								);
								continue;
							}
							switch (q) {
								case "onLink":
								case "onEvent":
								case "onView":
								case "onSettingChanged":
									break;
								case "onContext": {
									const G = m.$Kj.deserialize(V);
									G
										? (this.y.add(G),
											G.keys().forEach((K) => this.z.add(K)),
											(x = q + ":" + G.serialize()),
											this.J.contextMatchesRules(G) && this.n.add(x))
										: console.error(
												"Unable to parse context key expression:",
												G,
												"in walkthrough step",
												F.id,
											);
									break;
								}
								case "onStepSelected":
								case "stepSelected":
									x = "stepSelected:" + F.id;
									break;
								case "onCommand":
									x = q + ":" + V.replace(/^toSide:/, "");
									break;
								case "onExtensionInstalled":
								case "extensionInstalled":
									x = "extensionInstalled:" + V.toLowerCase();
									break;
								default:
									console.error(
										`Unknown completionEvent ${x} when registering step ${F.id}`,
									);
									continue;
							}
							this.ab(x, F);
						}
					}
					ab(F, x) {
						this.q.has(F) || this.q.set(F, new Set()), this.q.get(F)?.add(x.id);
					}
					bb(F) {
						const x = this.t.get(F);
						if (!x)
							throw Error(
								"Attempting to access step which does not exist in registry " +
									F,
							);
						return x;
					}
				};
				(e.$BXc = A),
					(e.$BXc = A =
						Ne(
							[
								j(0, w.$lq),
								j(1, d.$ek),
								j(2, t.$Li),
								j(3, P.$Vi),
								j(4, m.$6j),
								j(5, u.$4Rb),
								j(6, f.$gj),
								j(7, n.$Hp),
								j(8, o.$asb),
								j(9, v.$HMb),
								j(10, I.$km),
								j(11, p.$h4b),
							],
							A,
						));
				const R = (z) =>
					z
						.split(`
`)
						.filter((F) => F)
						.map((F) => (0, b.$Zpb)(F));
				e.$CXc = R;
				const O = (z) =>
					z.startsWith("https://")
						? a.URI.parse(z, !0)
						: c.$7g.asFileUri(
								`vs/workbench/contrib/welcomeGettingStarted/common/media/${z}`,
							);
				e.$DXc = O;
				const B = (z) =>
						z.startsWith("https://")
							? a.URI.parse(z, !0)
							: c.$7g.asBrowserUri(
									`vs/workbench/contrib/welcomeGettingStarted/common/media/${z}`,
								),
					U = (z) => {
						if (typeof z == "string") {
							const F = B(z);
							return { hcDark: F, hcLight: F, dark: F, light: F };
						} else
							return {
								hcDark: B(z.hc),
								hcLight: B(z.hcLight ?? z.light),
								light: B(z.light),
								dark: B(z.dark),
							};
					};
				(0, C.$4X)(
					class extends C.$3X {
						constructor() {
							super({
								id: "resetGettingStartedProgress",
								category: (0, S.localize2)(11479, "Developer"),
								title: (0, S.localize2)(
									11480,
									"Reset Welcome Page Walkthrough Progress",
								),
								f1: !0,
								metadata: {
									description: (0, S.localize2)(
										11481,
										"Reset the progress of all Walkthrough steps on the Welcome Page to make them appear as if they are being viewed for the first time, providing a fresh start to the getting started experience.",
									),
								},
							});
						}
						run(z) {
							const F = z.get(e.$yXc),
								x = z.get(w.$lq);
							x.store(
								e.$zXc,
								JSON.stringify([]),
								w.StorageScope.PROFILE,
								w.StorageTarget.USER,
							),
								x.store(
									e.$AXc,
									JSON.stringify([]),
									w.StorageScope.PROFILE,
									w.StorageTarget.USER,
								);
							const H = new E.$eEb("gettingStartedService", z.get(w.$lq)),
								q = H.getMemento(w.StorageScope.PROFILE, w.StorageTarget.USER);
							for (const V in q)
								if (Object.prototype.hasOwnProperty.call(q, V))
									try {
										F.deprogressStep(V);
									} catch (G) {
										console.error(G);
									}
							H.saveMemento();
						}
					},
				),
					(0, l.$lK)(e.$yXc, A, l.InstantiationType.Delayed);
			},
		),
		define(
			de[3851],
			he([
				1, 0, 4, 3, 84, 166, 15, 260, 40, 50, 6, 20, 180, 1583, 39, 7, 488, 60,
				89, 142, 274, 106, 390, 58, 1040, 2538,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$jvc = void 0);
				let S = class extends i.$1c {
					constructor(T, P, k, L, D, M, N, A, R) {
						super(),
							(this.a = T),
							(this.b = P),
							(this.c = k),
							(this.f = L),
							(this.g = D),
							(this.h = M),
							(this.j = N),
							(this.m = A),
							(this.n = R),
							(this.q = []),
							(this.r = void 0);
					}
					async withProgress(T, P, k) {
						const { location: L } = T,
							D = async (N) => {
								const A = this.n.markActive({ whenHeldFor: 15e3 });
								try {
									return await P(N);
								} finally {
									A.dispose();
								}
							},
							M = (N) => {
								if (N.startsWith($.$KX)) {
									if (
										((N = N.slice($.$KX.length)),
										this.c.getViewDescriptorById(N) !== null)
									)
										return this.y(N, D, { ...T, location: N });
								} else if (N.startsWith($.$LX))
									return (
										(N = N.slice($.$LX.length)),
										this.s({ ...T, location: w.ProgressLocation.Window }, D)
									);
								const A = this.c.getViewContainerById(N);
								if (A) {
									const R = this.c.getViewContainerLocation(A);
									if (R !== null) return this.w(N, R, D, { ...T, location: N });
								}
								if (this.c.getViewDescriptorById(N) !== null)
									return this.y(N, D, { ...T, location: N });
								throw new Error(`Bad progress location: ${N}`);
							};
						if (typeof L == "string") return M(L);
						switch (L) {
							case w.ProgressLocation.Notification: {
								let N = T.priority;
								return (
									N !== m.NotificationPriority.URGENT &&
										(this.g.getFilter() === m.NotificationsFilter.ERROR ||
											((0, m.$5N)(T.source) &&
												this.g.getFilter(T.source) ===
													m.NotificationsFilter.ERROR)) &&
										(N = m.NotificationPriority.SILENT),
									this.u({ ...T, location: L, priority: N }, D, k)
								);
							}
							case w.ProgressLocation.Window: {
								const N = T.type;
								return T.command
									? this.s({ ...T, location: L, type: N }, D)
									: this.u(
											{
												delay: 150,
												...T,
												priority: m.NotificationPriority.SILENT,
												location: w.ProgressLocation.Notification,
												type: N,
											},
											D,
											k,
										);
							}
							case w.ProgressLocation.Explorer:
								return this.w(
									"workbench.view.explorer",
									o.ViewContainerLocation.Sidebar,
									D,
									{ ...T, location: L },
								);
							case w.ProgressLocation.Scm:
								return M("workbench.scm");
							case w.ProgressLocation.Extensions:
								return this.w(
									"workbench.view.extensions",
									o.ViewContainerLocation.Sidebar,
									D,
									{ ...T, location: L },
								);
							case w.ProgressLocation.Dialog:
								return this.F(T, D, k);
							default:
								throw new Error(`Bad progress location: ${L}`);
						}
					}
					s(T, P) {
						const k = [T, new w.$0N(() => this.t())],
							L = P(k[1]);
						let D = setTimeout(() => {
							(D = void 0),
								this.q.unshift(k),
								this.t(),
								Promise.all([(0, C.$Nh)(150), L]).finally(() => {
									const M = this.q.indexOf(k);
									this.q.splice(M, 1), this.t();
								});
						}, 150);
						return L.finally(() => clearTimeout(D));
					}
					t(T = 0) {
						if (T < this.q.length) {
							const [P, k] = this.q[T],
								L = P.title,
								D = k.value && k.value.message,
								M = P.command;
							let N, A;
							const R =
								P.source && typeof P.source != "string"
									? P.source.label
									: P.source;
							if (L && D)
								(N = (0, t.localize)(12619, null, L, D)),
									(A = R ? (0, t.localize)(12620, null, R, L, D) : N);
							else if (L)
								(N = L), (A = R ? (0, t.localize)(12621, null, R, L) : N);
							else if (D)
								(N = D), (A = R ? (0, t.localize)(12622, null, R, D) : N);
							else {
								this.t(T + 1);
								return;
							}
							const O = {
								name: (0, t.localize)(12623, null),
								text: N,
								showProgress: P.type || !0,
								ariaLabel: N,
								tooltip: A,
								command: M,
							};
							this.r
								? this.r.update(O)
								: (this.r = this.h.addEntry(
										O,
										"status.progress",
										E.StatusbarAlignment.LEFT,
									));
						} else this.r?.dispose(), (this.r = void 0);
					}
					u(T, P, k) {
						const L = new (class extends i.$1c {
								get step() {
									return this.c;
								}
								get done() {
									return this.f;
								}
								constructor() {
									super(),
										(this.a = this.D(new u.$re())),
										(this.onDidReport = this.a.event),
										(this.b = this.D(new u.$re())),
										(this.onWillDispose = this.b.event),
										(this.c = void 0),
										(this.f = !1),
										(this.promise = P(this)),
										this.promise.finally(() => {
											this.dispose();
										});
								}
								report(z) {
									(this.c = z), this.a.fire(z);
								}
								cancel(z) {
									k?.(z), this.dispose();
								}
								dispose() {
									(this.f = !0), this.b.fire(), super.dispose();
								}
							})(),
							D = () => {
								const z = new C.$0h();
								return (
									this.s(
										{
											location: w.ProgressLocation.Window,
											title: T.title ? (0, p.$Zpb)(T.title).toString() : void 0,
											command: "notifications.showList",
											type: T.type,
										},
										(F) => {
											function x(q) {
												q.message &&
													F.report({
														message: (0, p.$Zpb)(q.message).toString(),
													});
											}
											L.step && x(L.step);
											const H = L.onDidReport((q) => x(q));
											return (
												z.p.finally(() => H.dispose()),
												u.Event.once(L.onWillDispose)(() => z.complete()),
												z.p
											);
										},
									),
									(0, i.$Yc)(() => z.complete())
								);
							},
							M = (z, F, x) => {
								const H = new i.$Zc(),
									q = T.primaryActions ? Array.from(T.primaryActions) : [],
									V = T.secondaryActions ? Array.from(T.secondaryActions) : [];
								if (
									(T.buttons &&
										T.buttons.forEach((W, X) => {
											const Y = new (class extends r.$rj {
												constructor() {
													super(`progress.button.${W}`, W, void 0, !0);
												}
												async run() {
													L.cancel(X);
												}
											})();
											H.add(Y), q.push(Y);
										}),
									T.cancellable)
								) {
									const W = new (class extends r.$rj {
										constructor() {
											super(
												"progress.cancel",
												(0, t.localize)(12624, null),
												void 0,
												!0,
											);
										}
										async run() {
											L.cancel();
										}
									})();
									H.add(W), q.push(W);
								}
								const G = this.g.notify({
									severity: m.Severity.Info,
									message: (0, s.$$k)(z),
									source: T.source,
									actions: { primary: q, secondary: V },
									progress:
										typeof x == "number" && x >= 0
											? { total: 100, worked: x }
											: { infinite: !0 },
									priority: F,
								});
								let K;
								const J = (W) => {
									(0, i.$Vc)(K), !W && !L.done && (K = D());
								};
								return (
									H.add(G.onDidChangeVisibility(J)),
									F === m.NotificationPriority.SILENT && J(!1),
									u.Event.once(G.onDidClose)(() => H.dispose()),
									G
								);
							},
							N = (z, F) => {
								typeof F == "number" && F >= 0
									? (z.progress.total(100), z.progress.worked(F))
									: z.progress.infinite();
							};
						let A, R, O;
						const B = (z) => {
							z?.message && T.title
								? (O = `${T.title}: ${z.message}`)
								: (O = T.title || z?.message),
								!A &&
									O &&
									(typeof T.delay == "number" && T.delay > 0
										? typeof R != "number" &&
											(R = setTimeout(
												() => (A = M(O, T.priority, z?.increment)),
												T.delay,
											))
										: (A = M(O, T.priority, z?.increment))),
								A &&
									(O && A.updateMessage(O),
									typeof z?.increment == "number" && N(A, z.increment));
						};
						B(L.step);
						const U = L.onDidReport((z) => B(z));
						return (
							u.Event.once(L.onWillDispose)(() => U.dispose()),
							(async () => {
								try {
									typeof T.delay == "number" && T.delay > 0
										? await L.promise
										: await Promise.all([(0, C.$Nh)(800), L.promise]);
								} finally {
									clearTimeout(R), A?.close();
								}
							})(),
							L.promise
						);
					}
					w(T, P, k, L) {
						const D = this.b.getProgressIndicator(T, P),
							M = D ? this.C(D, k, L) : k({ report: () => {} });
						return P === o.ViewContainerLocation.Sidebar && this.z(T, L, M), M;
					}
					y(T, P, k) {
						const L = this.f.getViewProgressIndicator(T),
							D = L ? this.C(L, P, k) : P({ report: () => {} });
						if (
							this.c.getViewLocationById(T) !== o.ViewContainerLocation.Sidebar
						)
							return D;
						const N = this.c.getViewContainerByViewId(T)?.id;
						return N === void 0 || this.z(N, k, D), D;
					}
					z(T, P, k) {
						let L,
							D = setTimeout(() => {
								D = void 0;
								const M = this.a.showViewContainerActivity(T, {
										badge: new d.$0qc(() => ""),
										priority: 100,
									}),
									N = Date.now(),
									A = 300;
								L = {
									dispose() {
										const R = Date.now() - N;
										R < A ? setTimeout(() => M.dispose(), A - R) : M.dispose();
									},
								};
							}, P.delay || 300);
						k.finally(() => {
							clearTimeout(D), (0, i.$Vc)(L);
						});
					}
					C(T, P, k) {
						let L;
						function D(N) {
							let A, R;
							return (
								typeof N < "u" &&
									(typeof N == "number"
										? (A = N)
										: typeof N.increment == "number" &&
											((A = N.total ?? 100), (R = N.increment))),
								typeof A == "number"
									? (L ||
											((L = T.show(A, k.delay)),
											M.catch(() => {}).finally(() => L?.done())),
										typeof R == "number" && L.worked(R))
									: (L?.done(), T.showWhile(M, k.delay)),
								L
							);
						}
						const M = P({
							report: (N) => {
								D(N);
							},
						});
						return D(k.total), M;
					}
					F(T, P, k) {
						const L = new i.$Zc(),
							D = [
								"workbench.action.quit",
								"workbench.action.reloadWindow",
								"copy",
								"cut",
								"editor.action.clipboardCopyAction",
								"editor.action.clipboardCutAction",
							];
						let M;
						const N = (z) => {
							const F = T.buttons || [];
							return (
								T.sticky ||
									F.push(
										T.cancellable
											? (0, t.localize)(12625, null)
											: (0, t.localize)(12626, null),
									),
								(M = new c.$Oob(this.j.activeContainer, z, F, {
									type: "pending",
									detail: T.detail,
									cancelId: F.length - 1,
									disableCloseAction: T.sticky,
									disableDefaultAction: T.sticky,
									keyEventProcessor: (x) => {
										const H = this.m.softDispatch(x, this.j.activeContainer);
										H.kind === y.ResultKind.KbFound &&
											H.commandId &&
											(D.includes(H.commandId) || g.$ahb.stop(x, !0));
									},
									buttonStyles: l.$lyb,
									checkboxStyles: l.$syb,
									inputBoxStyles: l.$wyb,
									dialogStyles: l.$uyb,
								})),
								L.add(M),
								M.show().then((x) => {
									k?.(x.button), (0, i.$Vc)(M);
								}),
								M
							);
						};
						let A = T.delay ?? 0,
							R;
						const O = L.add(
								new C.$Yh(() => {
									(A = 0), R && !M ? (M = N(R)) : R && M.updateMessage(R);
								}, 0),
							),
							B = function (z) {
								(R = z), O.isScheduled() || O.schedule(A);
							},
							U = P({
								report: (z) => {
									B(z.message);
								},
							});
						return (
							U.finally(() => {
								(0, i.$Vc)(L);
							}),
							T.title && B(T.title),
							U
						);
					}
				};
				(e.$jvc = S),
					(e.$jvc = S =
						Ne(
							[
								j(0, d.$7qc),
								j(1, b.$6Sb),
								j(2, o.$K1),
								j(3, f.$HMb),
								j(4, m.$4N),
								j(5, E.$d6b),
								j(6, h.$jEb),
								j(7, n.$uZ),
								j(8, v.$Poc),
							],
							S,
						)),
					(0, a.$lK)(w.$8N, S, a.InstantiationType.Delayed);
			},
		),
		define(
			de[3852],
			he([
				1, 0, 150, 32, 20, 522, 3, 6, 830, 357, 1212, 63, 21, 34, 62, 53, 4, 40,
				57, 8, 84, 9, 60, 89, 52, 12, 5, 966, 2937, 29, 15, 33, 18, 68, 44, 286,
				1041, 783, 22, 37, 965,
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
				B,
				U,
				z,
				F,
			) {
				"use strict";
				var x;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$jyc = void 0),
					(e.$iyc = q);
				class H {
					constructor(K, J) {
						(this.authenticationProviderId = K), (this.f = J);
					}
					get sessionId() {
						return this.f.id;
					}
					get accountName() {
						return this.f.account.label;
					}
					get accountId() {
						return this.f.account.id;
					}
					get token() {
						return this.f.idToken || this.f.accessToken;
					}
				}
				function q(G) {
					const K = G;
					return (
						l.URI.isUri(K?.base) &&
						l.URI.isUri(K?.input1?.uri) &&
						l.URI.isUri(K?.input2?.uri) &&
						l.URI.isUri(K?.result)
					);
				}
				let V = class extends C.$1c {
					static {
						x = this;
					}
					static {
						this.f = "userDataSyncAccount.donotUseWorkbenchSession";
					}
					static {
						this.g = "userDataSyncAccountProvider";
					}
					static {
						this.h = "userDataSyncAccountPreference";
					}
					get enabled() {
						return !!this.ab.userDataSyncStore;
					}
					get authenticationProviders() {
						return this.j;
					}
					get accountStatus() {
						return this.n;
					}
					get current() {
						return this.r;
					}
					constructor(
						K,
						J,
						W,
						X,
						Y,
						ie,
						ne,
						ee,
						_,
						te,
						Q,
						Z,
						se,
						re,
						le,
						oe,
						ae,
						pe,
						$e,
						ye,
						ue,
						fe,
						me,
						ve,
						ge,
						be,
						Ce,
						Le,
					) {
						super(),
							(this.F = K),
							(this.G = J),
							(this.H = W),
							(this.I = X),
							(this.J = Y),
							(this.L = ie),
							(this.M = ne),
							(this.N = ee),
							(this.O = _),
							(this.P = te),
							(this.Q = Q),
							(this.R = Z),
							(this.S = se),
							(this.U = re),
							(this.W = le),
							(this.X = oe),
							(this.Y = ae),
							(this.Z = $e),
							(this.$ = ye),
							(this.ab = ue),
							(this.bb = fe),
							(this.cb = me),
							(this.db = ve),
							(this.eb = ge),
							(this.fb = be),
							(this.gb = Ce),
							(this.hb = Le),
							(this.j = []),
							(this.n = E.AccountStatus.Unavailable),
							(this.q = this.D(new d.$re())),
							(this.onDidChangeAccountStatus = this.q.event),
							(this.C = void 0),
							(this.Cb = null),
							(this.Eb = null),
							(this.s = E.$Sxc.bindTo(pe)),
							(this.t = E.$Rxc.bindTo(pe)),
							(this.u = E.$Txc.bindTo(pe)),
							(this.z = E.$Uxc.bindTo(pe)),
							(this.y = E.$Wxc.bindTo(pe)),
							(this.w = E.$Vxc.bindTo(pe)),
							this.ab.userDataSyncStore &&
								(this.t.set(this.F.status),
								this.D(K.onDidChangeStatus((Fe) => this.t.set(Fe))),
								this.s.set(ne.isEnabled()),
								this.D(ne.onDidChangeEnablement((Fe) => this.s.set(Fe))),
								this.kb());
					}
					ib() {
						this.j = (
							this.ab.userDataSyncStore?.authenticationProviders || []
						).filter(({ id: K }) =>
							this.H.declaredProviders.some((J) => J.id === K),
						);
					}
					jb(K) {
						return this.authenticationProviders.some(({ id: J }) => J === K);
					}
					async kb() {
						await Promise.all([
							this.R.whenInstalledExtensionsRegistered(),
							this.eb.whenInitializationFinished(),
						]);
						try {
							await this.lb();
						} catch (K) {
							this.S.extensionTestsLocationURI || this.P.error(K);
						}
					}
					async lb() {
						if (S.$r) {
							const K = await (0, m.$gsb)(this.U, this.Q);
							this.Fb === void 0 &&
								K?.id &&
								(this.S.options?.settingsSyncOptions?.authenticationProvider &&
								this.S.options.settingsSyncOptions.enabled
									? (this.Fb = K.id)
									: this.Hb && (this.Fb = K.id),
								(this.Hb = !1));
						}
						await this.mb(),
							this.D(this.H.onDidChangeDeclaredProviders(() => this.ib())),
							this.D(
								d.Event.filter(
									d.Event.any(
										this.H.onDidRegisterAuthenticationProvider,
										this.H.onDidUnregisterAuthenticationProvider,
									),
									(K) => this.jb(K.id),
								)(() => this.mb()),
							),
							this.D(
								d.Event.filter(
									this.I.onTokenFailed,
									(K) => !K,
								)(() => this.mb("token failure")),
							),
							this.D(
								d.Event.filter(this.H.onDidChangeSessions, (K) =>
									this.jb(K.providerId),
								)(({ event: K }) => this.Ab(K)),
							),
							this.D(
								this.L.onDidChangeValue(
									h.StorageScope.APPLICATION,
									x.h,
									this.D(new C.$Zc()),
								)(() => this.Bb()),
							),
							this.D(
								d.Event.filter(this.I.onTokenFailed, (K) => K)(() => this.zb()),
							),
							this.y.set(this.F.conflicts.length > 0),
							this.D(
								this.F.onDidChangeConflicts((K) => {
									this.y.set(K.length > 0),
										K.length || this.w.reset(),
										this.db.editors
											.filter((J) =>
												((0, A.$t1)(J)
													? J.original.resource
													: q(J)
														? J.input1.uri
														: void 0
												)?.scheme !== t.$$Rb
													? !1
													: !this.F.conflicts.some(({ conflicts: X }) =>
															X.some(({ previewResource: Y }) =>
																this.G.extUri.isEqual(Y, J.resource),
															),
														),
											)
											.forEach((J) => J.dispose());
								}),
							);
					}
					async mb(K) {
						K && this.P.info(`Settings Sync: Updating due to ${K}`),
							this.ib(),
							await this.nb(),
							this.r && (this.Db = this.r.authenticationProviderId),
							await this.ob(this.r),
							this.pb(
								this.r
									? E.AccountStatus.Available
									: E.AccountStatus.Unavailable,
							);
					}
					async nb() {
						const K = this.Fb,
							J = this.Db;
						if (K) {
							const W = J
								? this.authenticationProviders.filter(({ id: X }) => X === J)
								: this.authenticationProviders;
							for (const { id: X, scopes: Y } of W) {
								const ie = (await this.H.getSessions(X, Y)) || [];
								for (const ne of ie)
									if (ne.id === K) {
										this.r = new H(X, ne);
										return;
									}
							}
						}
						this.r = void 0;
					}
					async ob(K) {
						let J;
						if (K)
							try {
								this.P.trace(
									"Settings Sync: Updating the token for the account",
									K.accountName,
								);
								const W = K.token;
								this.P.trace(
									"Settings Sync: Token updated for the account",
									K.accountName,
								),
									(J = {
										token: W,
										authenticationProviderId: K.authenticationProviderId,
									});
							} catch (W) {
								this.P.error(W);
							}
						await this.I.updateAccount(J);
					}
					pb(K) {
						if (this.n !== K) {
							const J = this.n;
							this.P.trace(
								`Settings Sync: Account status changed from ${J} to ${K}`,
							),
								(this.n = K),
								this.u.set(K),
								this.q.fire(K);
						}
					}
					async turnOn() {
						if (!this.authenticationProviders.length)
							throw new Error((0, p.localize)(12965, null));
						if (this.M.isEnabled()) return;
						if (this.F.status !== t.SyncStatus.Idle)
							throw new Error("Cannot turn on sync while syncing");
						if (!(await this.ub())) throw new k.$9();
						if (this.accountStatus !== E.AccountStatus.Available)
							throw new Error((0, p.localize)(12966, null));
						const J = (this.C = new D.$Ce()),
							W = S.$r
								? C.$1c.None
								: this.bb.onBeforeShutdown((X) =>
										X.veto(
											(async () => {
												const { confirmed: Y } = await this.Y.confirm({
													type: "warning",
													message: (0, p.localize)(12967, null),
													title: (0, p.localize)(12968, null),
													primaryButton: (0, p.localize)(12969, null),
													cancelButton: (0, p.localize)(12970, null),
												});
												return Y && J.cancel(), !Y;
											})(),
											"veto.settingsSync",
										),
									);
						try {
							await this.qb(J.token);
						} finally {
							W.dispose(), (this.C = void 0);
						}
						await this.N.turnOn(),
							this.ab.userDataSyncStore?.canSwitch &&
								(await this.synchroniseUserDataSyncStoreType()),
							(this.Db = this.current?.authenticationProviderId),
							this.S.options?.settingsSyncOptions?.enablementHandler &&
								this.Db &&
								this.S.options.settingsSyncOptions.enablementHandler(
									!0,
									this.Db,
								),
							this.W.info((0, p.localize)(12971, null, E.$Pxc.value));
					}
					async turnoff(K) {
						this.M.isEnabled() &&
							(await this.N.turnOff(K),
							this.S.options?.settingsSyncOptions?.enablementHandler &&
								this.Db &&
								this.S.options.settingsSyncOptions.enablementHandler(
									!1,
									this.Db,
								)),
							this.C && this.C.cancel();
					}
					async synchroniseUserDataSyncStoreType() {
						if (!this.I.account)
							throw new Error(
								"Cannot update because you are signed out from settings sync. Please sign in and try again.",
							);
						if (!S.$r || !this.ab.userDataSyncStore) return;
						const K =
								this.ab.userDataSyncStore.type === "insiders"
									? this.ab.userDataSyncStore.stableUrl
									: this.ab.userDataSyncStore.insidersUrl,
							J = this.cb.createInstance(T.$5xc, K);
						J.setAuthToken(
							this.I.account.token,
							this.I.account.authenticationProviderId,
						),
							await this.cb
								.createInstance(P.$hyc, J)
								.sync(this.ab.userDataSyncStore.type);
					}
					syncNow() {
						return this.N.triggerSync(["Sync Now"], !1, !0);
					}
					async qb(K) {
						const J = new C.$Zc(),
							W = await this.F.createManualSyncTask();
						try {
							await this.X.withProgress(
								{
									location: s.ProgressLocation.Window,
									title: E.$Pxc.value,
									command: E.$Yxc,
									delay: 500,
								},
								async (X) => {
									X.report({ message: (0, p.localize)(12972, null) }),
										J.add(
											this.F.onDidChangeStatus((Y) => {
												Y === t.SyncStatus.HasConflicts
													? X.report({ message: (0, p.localize)(12973, null) })
													: X.report({ message: (0, p.localize)(12974, null) });
											}),
										),
										await W.merge(),
										this.F.status === t.SyncStatus.HasConflicts &&
											(await this.rb(K)),
										await W.apply();
								},
							);
						} catch (X) {
							throw (await W.stop(), X);
						} finally {
							J.dispose();
						}
					}
					async rb(K) {
						await this.Y.prompt({
							type: o.Severity.Warning,
							message: (0, p.localize)(12975, null),
							detail: (0, p.localize)(12976, null),
							buttons: [
								{
									label: (0, p.localize)(12977, null),
									run: async () => {
										const J = (0, L.$Bh)(
											d.Event.toPromise(
												d.Event.filter(
													this.F.onDidChangeConflicts,
													(W) => W.length === 0,
												),
											),
											K,
										);
										await this.showConflicts(this.F.conflicts[0]?.conflicts[0]),
											await J;
									},
								},
								{
									label: (0, p.localize)(12978, null),
									run: async () => this.sb(!0),
								},
								{ label: (0, p.localize)(12979, null), run: () => this.sb(!1) },
							],
							cancelButton: {
								run: () => {
									throw new k.$9();
								},
							},
						});
					}
					async sb(K) {
						for (const J of this.F.conflicts)
							for (const W of J.conflicts)
								await this.accept(
									{ syncResource: J.syncResource, profile: J.profile },
									K ? W.remoteResource : W.localResource,
									void 0,
									{ force: !0 },
								);
					}
					async accept(K, J, W, X) {
						return this.F.accept(K, J, W, X);
					}
					async showConflicts(K) {
						if (!this.F.conflicts.length) return;
						this.w.set(!0);
						const J = await this.Z.openView(E.$1xc);
						J && K && (await J.open(K));
					}
					async resetSyncedData() {
						const { confirmed: K } = await this.Y.confirm({
							type: "info",
							message: (0, p.localize)(12980, null),
							title: (0, p.localize)(12981, null),
							primaryButton: (0, p.localize)(12982, null),
						});
						K && (await this.F.resetRemote());
					}
					async getAllLogResources() {
						const K = [],
							J = await this.fb.resolve(this.G.extUri.dirname(this.S.logsHome));
						J.children &&
							K.push(
								...J.children
									.filter((X) => X.isDirectory && /^\d{8}T\d{6}$/.test(X.name))
									.sort()
									.reverse()
									.map((X) => X.resource),
							);
						const W = [];
						for (const X of K) {
							const ie = (await this.fb.resolve(X)).children?.find((ne) =>
								this.G.extUri.basename(ne.resource).startsWith(`${t.$0Rb}.`),
							);
							ie && W.push(ie.resource);
						}
						return W;
					}
					async showSyncActivity() {
						this.z.set(!0),
							await this.tb(),
							await this.Z.openViewContainer(E.$Zxc);
					}
					async downloadSyncActivity() {
						const K = await this.gb.showOpenDialog({
							title: (0, p.localize)(12983, null),
							canSelectFiles: !1,
							canSelectFolders: !0,
							canSelectMany: !1,
							openLabel: (0, p.localize)(12984, null),
						});
						if (K?.[0])
							return this.X.withProgress(
								{ location: s.ProgressLocation.Window },
								async () => {
									const W = (await this.hb.getMachines()).find(
											(_) => _.isCurrent,
										),
										X = (W ? W.name + " - " : "") + "Settings Sync Activity",
										Y = await this.fb.resolve(K[0]),
										ie = new RegExp(`${(0, z.$of)(X)}\\s(\\d+)`),
										ne = [];
									for (const _ of Y.children ?? [])
										if (_.name === X) ne.push(0);
										else {
											const te = ie.exec(_.name);
											te && ne.push(parseInt(te[1]));
										}
									ne.sort((_, te) => _ - te);
									const ee = this.G.extUri.joinPath(
										K[0],
										ne[0] !== 0 ? X : `${X} ${ne[ne.length - 1] + 1}`,
									);
									return (
										await Promise.all([
											this.F.saveRemoteActivityData(
												this.G.extUri.joinPath(ee, "remoteActivity.json"),
											),
											(async () => {
												const _ = await this.getAllLogResources();
												await Promise.all(
													_.map(async (te) =>
														this.fb.copy(
															te,
															this.G.extUri.joinPath(
																ee,
																"logs",
																`${this.G.extUri.basename(this.G.extUri.dirname(te))}.log`,
															),
														),
													),
												);
											})(),
											this.fb.copy(
												this.S.userDataSyncHome,
												this.G.extUri.joinPath(ee, "localActivity"),
											),
										]),
										ee
									);
								},
							);
					}
					async tb() {
						const K = this.$.getViewContainerById(E.$Zxc);
						if (K) {
							const J = this.$.getViewContainerModel(K);
							J.activeViewDescriptors.length ||
								(await d.Event.toPromise(
									d.Event.filter(
										J.onDidChangeActiveViewDescriptors,
										(W) => J.activeViewDescriptors.length > 0,
									),
								));
						}
					}
					async signIn() {
						const K = this.Db,
							J = K
								? this.authenticationProviders.find((W) => W.id === K)
								: void 0;
						J ? await this.yb(J) : await this.ub();
					}
					async ub() {
						const K = await this.vb();
						return K ? (await this.yb(K), !0) : !1;
					}
					async vb() {
						if (this.authenticationProviders.length === 0) return;
						const K = [...this.authenticationProviders].sort(({ id: ne }) =>
								ne === this.Db ? -1 : 1,
							),
							J = new Map();
						if (K.length === 1) {
							const ne = await this.wb(K[0].id, K[0].scopes);
							if (ne.length) J.set(K[0].id, ne);
							else return K[0];
						}
						let W;
						const X = new C.$Zc(),
							Y = X.add(this.J.createQuickPick({ useSeparators: !0 })),
							ie = new Promise((ne) => {
								X.add(
									Y.onDidHide(() => {
										X.dispose(), ne(W);
									}),
								);
							});
						if (
							((Y.title = E.$Pxc.value),
							(Y.ok = !1),
							(Y.ignoreFocusOut = !0),
							(Y.placeholder = (0, p.localize)(12985, null)),
							Y.show(),
							K.length > 1)
						) {
							Y.busy = !0;
							for (const { id: ne, scopes: ee } of K) {
								const _ = await this.wb(ne, ee);
								_.length && J.set(ne, _);
							}
							Y.busy = !1;
						}
						return (
							(Y.items = this.xb(K, J)),
							X.add(
								Y.onDidAccept(() => {
									(W = Y.selectedItems[0]?.account
										? Y.selectedItems[0]?.account
										: Y.selectedItems[0]?.authenticationProvider),
										Y.hide();
								}),
							),
							ie
						);
					}
					async wb(K, J) {
						const W = new Map();
						let X = null;
						const Y = (await this.H.getSessions(K, J)) || [];
						for (const ie of Y) {
							const ne = new H(K, ie);
							W.set(ne.accountId, ne), ne.sessionId === this.Fb && (X = ne);
						}
						return (
							X && W.set(X.accountId, X),
							X
								? [...W.values()]
								: [...W.values()].sort(({ sessionId: ie }) =>
										ie === this.Fb ? -1 : 1,
									)
						);
					}
					xb(K, J) {
						const W = [];
						if (J.size) {
							W.push({
								type: "separator",
								label: (0, p.localize)(12986, null),
							});
							for (const X of K) {
								const Y = (J.get(X.id) || []).sort(({ sessionId: ne }) =>
										ne === this.Fb ? -1 : 1,
									),
									ie = this.H.getProvider(X.id).label;
								for (const ne of Y)
									W.push({
										label: `${ne.accountName} (${ie})`,
										description:
											ne.sessionId === this.current?.sessionId
												? (0, p.localize)(12987, null)
												: void 0,
										account: ne,
										authenticationProvider: X,
									});
							}
							W.push({
								type: "separator",
								label: (0, p.localize)(12988, null),
							});
						}
						for (const X of K) {
							const Y = this.H.getProvider(X.id);
							if (!J.has(X.id) || Y.supportsMultipleAccounts) {
								const ie = Y.label;
								W.push({
									label: (0, p.localize)(12989, null, ie),
									authenticationProvider: X,
								});
							}
						}
						return W;
					}
					async yb(K) {
						let J;
						(0, t.$ORb)(K)
							? (this.S.options?.settingsSyncOptions?.authenticationProvider
									?.id === K.id
									? (J =
											await this.S.options?.settingsSyncOptions?.authenticationProvider?.signIn())
									: (J = (await this.H.createSession(K.id, K.scopes)).id),
								(this.Db = K.id))
							: (this.S.options?.settingsSyncOptions?.authenticationProvider
									?.id === K.authenticationProviderId
									? (J =
											await this.S.options?.settingsSyncOptions?.authenticationProvider?.signIn())
									: (J = K.sessionId),
								(this.Db = K.authenticationProviderId)),
							(this.Fb = J),
							await this.mb();
					}
					async zb() {
						this.O.publicLog2("sync/successiveAuthFailures"),
							(this.Fb = void 0),
							await this.mb("auth failure");
					}
					Ab(K) {
						this.Fb &&
							K.removed?.find((J) => J.id === this.Fb) &&
							(this.Fb = void 0),
							this.mb("change in sessions");
					}
					Bb() {
						this.Fb !== this.Gb() &&
							((this.Eb = null), this.mb("change in storage"));
					}
					get Db() {
						return (
							this.Cb === null &&
								(this.Cb = this.L.get(x.g, h.StorageScope.APPLICATION)),
							this.Cb
						);
					}
					set Db(K) {
						this.Cb !== K &&
							((this.Cb = K),
							K === void 0
								? this.L.remove(x.g, h.StorageScope.APPLICATION)
								: this.L.store(
										x.g,
										K,
										h.StorageScope.APPLICATION,
										h.StorageTarget.MACHINE,
									));
					}
					get Fb() {
						return this.Eb === null && (this.Eb = this.Gb()), this.Eb;
					}
					set Fb(K) {
						this.Eb !== K &&
							((this.Eb = K),
							K === void 0
								? (this.P.info("Settings Sync: Reset current session"),
									this.L.remove(x.h, h.StorageScope.APPLICATION))
								: (this.P.info("Settings Sync: Updated current session", K),
									this.L.store(
										x.h,
										K,
										h.StorageScope.APPLICATION,
										h.StorageTarget.MACHINE,
									)));
					}
					Gb() {
						return this.L.get(x.h, h.StorageScope.APPLICATION);
					}
					get Hb() {
						return !this.L.getBoolean(x.f, h.StorageScope.APPLICATION, !1);
					}
					set Hb(K) {
						this.L.store(
							x.f,
							!K,
							h.StorageScope.APPLICATION,
							h.StorageTarget.MACHINE,
						);
					}
				};
				(e.$jyc = V),
					(e.$jyc =
						V =
						x =
							Ne(
								[
									j(0, t.$5Rb),
									j(1, N.$Vl),
									j(2, r.$$7),
									j(3, u.$vwc),
									j(4, a.$DJ),
									j(5, h.$lq),
									j(6, t.$4Rb),
									j(7, t.$7Rb),
									j(8, i.$km),
									j(9, c.$ik),
									j(10, n.$Bk),
									j(11, g.$q2),
									j(12, R.$5rb),
									j(13, B.$Yrb),
									j(14, o.$4N),
									j(15, s.$8N),
									j(16, f.$GO),
									j(17, b.$6j),
									j(18, $.$HMb),
									j(19, y.$K1),
									j(20, t.$SRb),
									j(21, v.$n6),
									j(22, I.$Li),
									j(23, M.$IY),
									j(24, O.$mwc),
									j(25, U.$ll),
									j(26, f.$IO),
									j(27, F.$FRb),
								],
								V,
							)),
					(0, w.$lK)(E.$Nxc, V, w.InstantiationType.Eager);
			},
		),
		