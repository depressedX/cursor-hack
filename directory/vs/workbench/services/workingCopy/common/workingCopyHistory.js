define(de[717], he([1, 0, 5]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$b2c = e.$a2c = void 0),
				(e.$a2c = (0, t.$Mi)("workingCopyHistoryService")),
				(e.$b2c = 20);
		}),
		define(
			de[227],
			he([1, 0, 5, 20, 6, 9, 3, 59]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$hY = e.$gY = void 0),
					(e.$gY = (0, t.$Mi)("workingCopyService"));
				class m extends C.$1c {
					constructor() {
						super(...arguments),
							(this.a = this.D(new w.$re())),
							(this.onDidRegister = this.a.event),
							(this.b = this.D(new w.$re())),
							(this.onDidUnregister = this.b.event),
							(this.f = this.D(new w.$re())),
							(this.onDidChangeDirty = this.f.event),
							(this.g = this.D(new w.$re())),
							(this.onDidChangeContent = this.g.event),
							(this.h = this.D(new w.$re())),
							(this.onDidSave = this.h.event),
							(this.j = new Set()),
							(this.m = new d.$Gc()),
							(this.n = this.D(new C.$0c()));
					}
					get workingCopies() {
						return Array.from(this.j.values());
					}
					registerWorkingCopy(u) {
						let a = this.m.get(u.resource);
						if (a?.has(u.typeId))
							throw new Error(
								`Cannot register more than one working copy with the same resource ${u.resource.toString()} and type ${u.typeId}.`,
							);
						this.j.add(u),
							a || ((a = new Map()), this.m.set(u.resource, a)),
							a.set(u.typeId, u);
						const h = new C.$Zc();
						return (
							h.add(u.onDidChangeContent(() => this.g.fire(u))),
							h.add(u.onDidChangeDirty(() => this.f.fire(u))),
							h.add(u.onDidSave((c) => this.h.fire({ workingCopy: u, ...c }))),
							this.n.set(u, h),
							this.a.fire(u),
							u.isDirty() && this.f.fire(u),
							(0, C.$Yc)(() => {
								this.q(u), this.b.fire(u);
							})
						);
					}
					q(u) {
						this.j.delete(u);
						const a = this.m.get(u.resource);
						a?.delete(u.typeId) && a.size === 0 && this.m.delete(u.resource),
							u.isDirty() && this.f.fire(u),
							this.n.deleteAndDispose(u);
					}
					has(u) {
						return E.URI.isUri(u)
							? this.m.has(u)
							: (this.m.get(u.resource)?.has(u.typeId) ?? !1);
					}
					get(u) {
						return this.m.get(u.resource)?.get(u.typeId);
					}
					getAll(u) {
						const a = this.m.get(u);
						if (a) return Array.from(a.values());
					}
					get hasDirty() {
						for (const u of this.j) if (u.isDirty()) return !0;
						return !1;
					}
					get dirtyCount() {
						let u = 0;
						for (const a of this.j) a.isDirty() && u++;
						return u;
					}
					get dirtyWorkingCopies() {
						return this.workingCopies.filter((u) => u.isDirty());
					}
					get modifiedCount() {
						let u = 0;
						for (const a of this.j) a.isModified() && u++;
						return u;
					}
					get modifiedWorkingCopies() {
						return this.workingCopies.filter((u) => u.isModified());
					}
					isDirty(u, a) {
						const h = this.m.get(u);
						if (h) {
							if (typeof a == "string") return h.get(a)?.isDirty() ?? !1;
							for (const [, c] of h) if (c.isDirty()) return !0;
						}
						return !1;
					}
				}
				(e.$hY = m), (0, i.$lK)(e.$gY, m, i.InstantiationType.Delayed);
			},
		),
		define(
			de[1913],
			he([1, 0, 29, 3, 82, 9, 65, 31, 116, 88, 446, 18, 66, 113, 227, 56, 10]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				var o;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$hnc = void 0);
				let f = class {
					static {
						o = this;
					}
					static {
						this.a = 0;
					}
					constructor(s, l, y, $, v, S) {
						(this.i = s),
							(this.j = y),
							(this.k = $),
							(this.l = v),
							(this.m = S),
							(this.e = new i.$Zc()),
							(this.b = String(++o.a)),
							(this.c = l.getProxy(r.$mbb.ExtHostEditors)),
							(this.f = Object.create(null)),
							(this.g = null),
							this.e.add(this.k.onDidVisibleEditorsChange(() => this.n())),
							this.e.add(this.l.onDidRemoveGroup(() => this.n())),
							this.e.add(this.l.onDidMoveGroup(() => this.n())),
							(this.h = Object.create(null));
					}
					dispose() {
						Object.keys(this.f).forEach((s) => {
							(0, i.$Vc)(this.f[s]);
						}),
							(this.f = Object.create(null)),
							this.e.dispose();
						for (const s in this.h) this.j.removeDecorationType(s);
						this.h = Object.create(null);
					}
					handleTextEditorAdded(s) {
						const l = s.getId(),
							y = [];
						y.push(
							s.onPropertiesChanged(($) => {
								this.c.$acceptEditorPropertiesChanged(l, $);
							}),
						),
							(this.f[l] = y);
					}
					handleTextEditorRemoved(s) {
						(0, i.$Vc)(this.f[s]), delete this.f[s];
					}
					n() {
						const s = this.o();
						(0, w.$zo)(this.g, s) ||
							((this.g = s), this.c.$acceptEditorPositionData(this.g));
					}
					o() {
						const s = Object.create(null);
						for (const l of this.k.visibleEditorPanes) {
							const y = this.i.findTextEditorIdFor(l);
							y && (s[y] = (0, u.$b8)(this.l, l.group));
						}
						return s;
					}
					async $tryShowTextDocument(s, l) {
						const y = E.URI.revive(s),
							$ = {
								preserveFocus: l.preserveFocus,
								pinned: l.pinned,
								selection: l.selection,
								activation: l.preserveFocus
									? m.EditorActivation.RESTORE
									: void 0,
								override: m.EditorResolution.EXCLUSIVE_ONLY,
							},
							v = { resource: y, options: $ },
							S = await this.k.openEditor(
								v,
								(0, u.$a8)(this.l, this.m, l.position),
							);
						if (!S) return;
						const I = S.getControl(),
							T = (0, g.$btb)(I);
						return T ? this.i.getIdOfCodeEditor(T) : void 0;
					}
					async $tryShowEditor(s, l) {
						const y = this.i.getEditor(s);
						if (y) {
							const $ = y.getModel();
							await this.k.openEditor(
								{ resource: $.uri, options: { preserveFocus: !1 } },
								(0, u.$a8)(this.l, this.m, l),
							);
							return;
						}
					}
					async $tryHideEditor(s) {
						const l = this.i.getEditor(s);
						if (l) {
							const y = this.k.visibleEditorPanes;
							for (const $ of y)
								if (l.matches($)) {
									await $.group.closeEditor($.input);
									return;
								}
						}
					}
					$trySetSelections(s, l) {
						const y = this.i.getEditor(s);
						return y
							? (y.setSelections(l), Promise.resolve(void 0))
							: Promise.reject((0, t.$$)(`TextEditor(${s})`));
					}
					$trySetDecorations(s, l, y) {
						l = `${this.b}-${l}`;
						const $ = this.i.getEditor(s);
						return $
							? ($.setDecorations(l, y), Promise.resolve(void 0))
							: Promise.reject((0, t.$$)(`TextEditor(${s})`));
					}
					$trySetDecorationsFast(s, l, y) {
						l = `${this.b}-${l}`;
						const $ = this.i.getEditor(s);
						return $
							? ($.setDecorationsFast(l, y), Promise.resolve(void 0))
							: Promise.reject((0, t.$$)(`TextEditor(${s})`));
					}
					$tryRevealRange(s, l, y) {
						const $ = this.i.getEditor(s);
						return $
							? ($.revealRange(l, y), Promise.resolve())
							: Promise.reject((0, t.$$)(`TextEditor(${s})`));
					}
					$trySetOptions(s, l) {
						const y = this.i.getEditor(s);
						return y
							? (y.setConfiguration(l), Promise.resolve(void 0))
							: Promise.reject((0, t.$$)(`TextEditor(${s})`));
					}
					$tryApplyEdits(s, l, y, $) {
						const v = this.i.getEditor(s);
						return v
							? Promise.resolve(v.applyEdits(l, y, $))
							: Promise.reject((0, t.$$)(`TextEditor(${s})`));
					}
					$tryInsertSnippet(s, l, y, $, v) {
						const S = this.i.getEditor(s);
						return S
							? Promise.resolve(S.insertSnippet(l, y, $, v))
							: Promise.reject((0, t.$$)(`TextEditor(${s})`));
					}
					$registerTextEditorDecorationType(s, l, y) {
						(l = `${this.b}-${l}`),
							(this.h[l] = !0),
							this.j.registerDecorationType(`exthost-api-${s}`, l, y);
					}
					$removeTextEditorDecorationType(s) {
						(s = `${this.b}-${s}`),
							delete this.h[s],
							this.j.removeDecorationType(s);
					}
					$getDiffInformation(s) {
						const l = this.i.getEditor(s);
						if (!l) return Promise.reject(new Error("No such TextEditor"));
						const y = l.getCodeEditor();
						if (!y) return Promise.reject(new Error("No such CodeEditor"));
						const $ = y.getId(),
							v = this.j.listDiffEditors(),
							[S] = v.filter(
								(T) =>
									T.getOriginalEditor().getId() === $ ||
									T.getModifiedEditor().getId() === $,
							);
						if (S) return Promise.resolve(S.getLineChanges() || []);
						const I = y.getContribution("editor.contrib.dirtydiff");
						return I ? Promise.resolve(I.getChanges()) : Promise.resolve([]);
					}
				};
				(e.$hnc = f),
					(e.$hnc =
						f =
						o =
							Ne([j(2, C.$dtb), j(3, a.$IY), j(4, h.$EY), j(5, p.$gj)], f)),
					d.$fk.registerCommand(
						"_workbench.revertAllDirty",
						async function (b) {
							if (!b.get(c.$Ti).extensionTestsLocationURI)
								throw new Error(
									"Command is only available when running extension tests.",
								);
							const l = b.get(n.$gY);
							for (const y of l.dirtyWorkingCopies)
								await y.revert({ soft: !0 });
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
		de[3857],
		he([
			1, 0, 4, 39, 265, 97, 6, 3, 7, 10, 8, 114, 15, 180, 30, 11, 21, 201, 27,
			81, 34, 227, 99, 335, 390, 57, 297, 705, 22, 63, 133, 18, 372, 31, 113,
			2331,
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
			Object.defineProperty(e, "__esModule", { value: !0 }), (M = xi(M));
			class R extends g.$3X {
				constructor() {
					super({
						id: "workbench.action.inspectContextKeys",
						title: (0, t.localize2)(2767, "Inspect Context Keys"),
						category: y.$ck.Developer,
						f1: !0,
					});
				}
				run(W) {
					const X = W.get(u.$6j),
						Y = new d.$Zc(),
						ie = (0, m.$Rgb)(void 0, void 0, Y);
					(0, m.$Wgb)("*", "cursor: crosshair !important;", ie);
					const ne = document.createElement("div"),
						ee = (0, m.$Ngb)();
					ee.body.appendChild(ne),
						Y.add((0, d.$Yc)(() => ne.remove())),
						(ne.style.position = "absolute"),
						(ne.style.pointerEvents = "none"),
						(ne.style.backgroundColor = "rgba(255, 0, 0, 0.5)"),
						(ne.style.zIndex = "1000");
					const _ = Y.add(new w.$mib(ee, "mousemove", !0));
					Y.add(
						_.event((Z) => {
							const se = Z.target,
								re = (0, m.$tgb)(se);
							(ne.style.top = `${re.top}px`),
								(ne.style.left = `${re.left}px`),
								(ne.style.width = `${re.width}px`),
								(ne.style.height = `${re.height}px`);
						}),
					);
					const te = Y.add(new w.$mib(ee, "mousedown", !0));
					C.Event.once(te.event)(
						(Z) => {
							Z.preventDefault(), Z.stopPropagation();
						},
						null,
						Y,
					);
					const Q = Y.add(new w.$mib(ee, "mouseup", !0));
					C.Event.once(Q.event)(
						(Z) => {
							Z.preventDefault(), Z.stopPropagation();
							const se = X.getContext(Z.target);
							console.log(se.collectAllValues()), (0, d.$Vc)(Y);
						},
						null,
						Y,
					);
				}
			}
			class O extends g.$3X {
				constructor() {
					super({
						id: "workbench.action.toggleScreencastMode",
						title: (0, t.localize2)(2768, "Toggle Screencast Mode"),
						category: y.$ck.Developer,
						f1: !0,
					});
				}
				run(W) {
					if (O.disposable) {
						O.disposable.dispose(), (O.disposable = void 0);
						return;
					}
					const X = W.get(c.$jEb),
						Y = W.get(r.$gj),
						ie = W.get(i.$uZ),
						ne = new d.$Zc(),
						ee = X.activeContainer,
						_ = (0, m.$fhb)(ee, (0, m.$)(".screencast-mouse"));
					ne.add((0, d.$Yc)(() => _.remove()));
					const te = (0, m.$fhb)(ee, (0, m.$)(".screencast-keyboard"));
					ne.add((0, d.$Yc)(() => te.remove()));
					const Q = ne.add(new C.$re()),
						Z = ne.add(new C.$re()),
						se = ne.add(new C.$re());
					function re(xe, He) {
						He.add(
							He.add(new w.$mib(xe, "mousedown", !0)).event((Ke) => Q.fire(Ke)),
						),
							He.add(
								He.add(new w.$mib(xe, "mouseup", !0)).event((Ke) => Z.fire(Ke)),
							),
							He.add(
								He.add(new w.$mib(xe, "mousemove", !0)).event((Ke) =>
									se.fire(Ke),
								),
							);
					}
					for (const { window: xe, disposables: He } of (0, m.getWindows)())
						re(X.getContainer(xe), He);
					ne.add(
						(0, m.onDidRegisterWindow)(({ window: xe, disposables: He }) =>
							re(X.getContainer(xe), He),
						),
					),
						ne.add(
							X.onDidChangeActiveContainer(() => {
								X.activeContainer.appendChild(_),
									X.activeContainer.appendChild(te);
							}),
						);
					const le = () => {
						_.style.borderColor = E.$UL
							.fromHex(Y.getValue("screencastMode.mouseIndicatorColor"))
							.toString();
					};
					let oe;
					const ae = () => {
						(oe = (0, o.$Zm)(
							Y.getValue("screencastMode.mouseIndicatorSize") || 20,
							20,
							100,
						)),
							(_.style.height = `${oe}px`),
							(_.style.width = `${oe}px`);
					};
					le(),
						ae(),
						ne.add(
							Q.event((xe) => {
								(_.style.top = `${xe.clientY - oe / 2}px`),
									(_.style.left = `${xe.clientX - oe / 2}px`),
									(_.style.display = "block"),
									(_.style.transform = "scale(1)"),
									(_.style.transition = "transform 0.1s");
								const He = se.event((Ke) => {
									(_.style.top = `${Ke.clientY - oe / 2}px`),
										(_.style.left = `${Ke.clientX - oe / 2}px`),
										(_.style.transform = `scale(${0.8})`);
								});
								C.Event.once(Z.event)(() => {
									(_.style.display = "none"), He.dispose();
								});
							}),
						);
					const pe = () => {
							te.style.fontSize = `${(0, o.$Zm)(Y.getValue("screencastMode.fontSize") || 56, 20, 100)}px`;
						},
						$e = () => {
							te.style.bottom = `${(0, o.$Zm)(Y.getValue("screencastMode.verticalOffset") || 0, 0, 90)}%`;
						};
					let ye;
					const ue = () => {
						ye = (0, o.$Zm)(
							Y.getValue("screencastMode.keyboardOverlayTimeout") || 800,
							500,
							5e3,
						);
					};
					pe(),
						$e(),
						ue(),
						ne.add(
							Y.onDidChangeConfiguration((xe) => {
								xe.affectsConfiguration("screencastMode.verticalOffset") &&
									$e(),
									xe.affectsConfiguration("screencastMode.fontSize") && pe(),
									xe.affectsConfiguration(
										"screencastMode.keyboardOverlayTimeout",
									) && ue(),
									xe.affectsConfiguration(
										"screencastMode.mouseIndicatorColor",
									) && le(),
									xe.affectsConfiguration(
										"screencastMode.mouseIndicatorSize",
									) && ae();
							}),
						);
					const fe = ne.add(new C.$re()),
						me = ne.add(new C.$re()),
						ve = ne.add(new C.$re()),
						ge = ne.add(new C.$re());
					function be(xe, He) {
						He.add(
							He.add(new w.$mib(xe, "keydown", !0)).event((Ke) => fe.fire(Ke)),
						),
							He.add(
								He.add(new w.$mib(xe, "compositionstart", !0)).event((Ke) =>
									me.fire(Ke),
								),
							),
							He.add(
								He.add(new w.$mib(xe, "compositionupdate", !0)).event((Ke) =>
									ve.fire(Ke),
								),
							),
							He.add(
								He.add(new w.$mib(xe, "compositionend", !0)).event((Ke) =>
									ge.fire(Ke),
								),
							);
					}
					for (const { window: xe, disposables: He } of (0, m.getWindows)())
						be(xe, He);
					ne.add(
						(0, m.onDidRegisterWindow)(({ window: xe, disposables: He }) =>
							be(xe, He),
						),
					);
					let Ce = 0,
						Le,
						Fe = !1;
					const Oe = new h.$Yh(() => {
						(te.textContent = ""), (Le = void 0), (Ce = 0);
					}, ye);
					ne.add(
						me.event((xe) => {
							Fe = !0;
						}),
					),
						ne.add(
							ve.event((xe) => {
								xe.data && Fe
									? (Ce > 20 && ((te.innerText = ""), (Ce = 0)),
										(Le = Le ?? (0, m.$fhb)(te, (0, m.$)("span.key"))),
										(Le.textContent = xe.data))
									: Fe &&
										((te.innerText = ""),
										(0, m.$fhb)(te, (0, m.$)("span.key", {}, "Backspace"))),
									Oe.schedule();
							}),
						),
						ne.add(
							ge.event((xe) => {
								(Le = void 0), Ce++;
							}),
						),
						ne.add(
							fe.event((xe) => {
								if (
									xe.key === "Process" ||
									/[\uac00-\ud787\u3131-\u314e\u314f-\u3163\u3041-\u3094\u30a1-\u30f4\u30fc\u3005\u3006\u3024\u4e00-\u9fa5]/u.test(
										xe.key,
									)
								) {
									xe.code === "Backspace" || xe.code.includes("Key")
										? (Fe = !0)
										: ((Le = void 0), (Fe = !1)),
										Oe.schedule();
									return;
								}
								if (xe.isComposing) return;
								const He = Y.getValue("screencastMode.keyboardOptions"),
									Ke = new a.$7fb(xe),
									Je = ie.softDispatch(Ke, Ke.target);
								if (
									Je.kind === v.ResultKind.KbFound &&
									Je.commandId &&
									!(He.showSingleEditorCursorMoves ?? !0) &&
									[
										"cursorLeft",
										"cursorRight",
										"cursorUp",
										"cursorDown",
									].includes(Je.commandId)
								)
									return;
								(Ke.ctrlKey ||
									Ke.altKey ||
									Ke.metaKey ||
									Ke.shiftKey ||
									Ce > 20 ||
									Ke.keyCode === f.KeyCode.Backspace ||
									Ke.keyCode === f.KeyCode.Escape ||
									Ke.keyCode === f.KeyCode.UpArrow ||
									Ke.keyCode === f.KeyCode.DownArrow ||
									Ke.keyCode === f.KeyCode.LeftArrow ||
									Ke.keyCode === f.KeyCode.RightArrow) &&
									((te.innerText = ""), (Ce = 0));
								const Te = ie.resolveKeyboardEvent(Ke),
									Ee =
										this.a(Je) && Je.commandId ? this.b(Je.commandId) : void 0;
								let Ie = Ee?.title,
									Be = Te.getLabel();
								if (
									Ee &&
									((He.showCommandGroups ?? !1) &&
										Ee.category &&
										(Ie = `${Ee.category}: ${Ie} `),
									this.a(Je) && Je.commandId)
								) {
									const Se = ie
										.lookupKeybindings(Je.commandId)
										.filter((ke) => ke.getLabel()?.endsWith(Be ?? ""));
									Se.length > 0 && (Be = Se[Se.length - 1].getLabel());
								}
								(He.showCommands ?? !0) &&
									Ie &&
									(0, m.$fhb)(te, (0, m.$)("span.title", {}, `${Ie} `)),
									((He.showKeys ?? !0) ||
										((He.showKeybindings ?? !0) && this.a(Je))) &&
										((Be = Be?.replace("UpArrow", "\u2191")
											?.replace("DownArrow", "\u2193")
											?.replace("LeftArrow", "\u2190")
											?.replace("RightArrow", "\u2192")),
										(0, m.$fhb)(te, (0, m.$)("span.key", {}, Be ?? ""))),
									Ce++,
									Oe.schedule();
							}),
						),
						(O.disposable = ne);
				}
				a(W) {
					return W.kind === v.ResultKind.KbFound;
				}
				b(W) {
					const X = g.$ZX.getCommand(W);
					if (X)
						return {
							title: typeof X.title == "string" ? X.title : X.title.value,
							category: X.category
								? typeof X.category == "string"
									? X.category
									: X.category.value
								: void 0,
						};
					const Y = N.$fk.getCommand(W);
					if (Y && Y.metadata?.description)
						return {
							title:
								typeof Y.metadata.description == "string"
									? Y.metadata.description
									: Y.metadata.description.value,
						};
				}
			}
			class B extends g.$3X {
				constructor() {
					super({
						id: "workbench.action.logStorage",
						title: (0, t.localize2)(2769, "Log Storage Database Contents"),
						category: y.$ck.Developer,
						f1: !0,
					});
				}
				run(W) {
					const X = W.get(p.$lq),
						Y = W.get(S.$GO);
					X.log(),
						Y.info((0, t.localize)(2741, null), (0, t.localize)(2742, null));
				}
			}
			class U extends g.$3X {
				constructor() {
					super({
						id: "workbench.action.logWorkingCopies",
						title: (0, t.localize2)(2770, "Log Working Copies"),
						category: y.$ck.Developer,
						f1: !0,
					});
				}
				async run(W) {
					const X = W.get(l.$gY),
						Y = W.get($.$WO),
						ie = W.get(s.$ik),
						ne = W.get(I.$o8),
						ee = await Y.getBackups(),
						_ = [
							"",
							"[Working Copies]",
							...(X.workingCopies.length > 0
								? X.workingCopies.map(
										(te) =>
											`${te.isDirty() ? "\u25CF " : ""}${te.resource.toString(!0)} (typeId: ${te.typeId || "<no typeId>"})`,
									)
								: ["<none>"]),
							"",
							"[Backups]",
							...(ee.length > 0
								? ee.map(
										(te) =>
											`${te.resource.toString(!0)} (typeId: ${te.typeId || "<no typeId>"})`,
									)
								: ["<none>"]),
						];
					ie.info(
						_.join(`
`),
					),
						ne.showChannel(T.$9Sb, !0);
				}
			}
			class z extends g.$3X {
				static {
					this.a = 1024 * 16;
				}
				constructor() {
					super({
						id: "workbench.action.removeLargeStorageDatabaseEntries",
						title: (0, t.localize2)(
							2771,
							"Remove Large Storage Database Entries...",
						),
						category: y.$ck.Developer,
						f1: !0,
					});
				}
				async run(W) {
					const X = W.get(p.$lq),
						Y = W.get(k.$DJ),
						ie = W.get(L.$P8),
						ne = W.get(S.$GO),
						ee = W.get(A.$Ti),
						_ = [];
					for (const se of [
						p.StorageScope.APPLICATION,
						p.StorageScope.PROFILE,
						p.StorageScope.WORKSPACE,
					])
						if (!(se === p.StorageScope.PROFILE && ie.currentProfile.isDefault))
							for (const re of [p.StorageTarget.MACHINE, p.StorageTarget.USER])
								for (const le of X.keys(se, re)) {
									const oe = X.get(le, se);
									oe &&
										(!ee.isBuilt || oe.length > z.a) &&
										_.push({
											key: le,
											scope: se,
											target: re,
											size: oe.length,
											label: le,
											description: P.$Tl.formatSize(oe.length),
											detail: (0, t.localize)(
												2743,
												null,
												se === p.StorageScope.APPLICATION
													? (0, t.localize)(2744, null)
													: se === p.StorageScope.PROFILE
														? (0, t.localize)(2745, null)
														: (0, t.localize)(2746, null),
												re === p.StorageTarget.MACHINE
													? (0, t.localize)(2747, null)
													: (0, t.localize)(2748, null),
											),
										});
								}
					_.sort((se, re) => re.size - se.size);
					const te = await new Promise((se) => {
						const re = new d.$Zc(),
							le = re.add(Y.createQuickPick());
						(le.items = _),
							(le.canSelectMany = !0),
							(le.ok = !1),
							(le.customButton = !0),
							(le.hideCheckAll = !0),
							(le.customLabel = (0, t.localize)(2749, null)),
							(le.placeholder = (0, t.localize)(2750, null)),
							_.length === 0 && (le.description = (0, t.localize)(2751, null)),
							le.show(),
							re.add(
								le.onDidCustom(() => {
									se(le.selectedItems), le.hide();
								}),
							),
							re.add(le.onDidHide(() => re.dispose()));
					});
					if (te.length === 0) return;
					const { confirmed: Q } = await ne.confirm({
						type: "warning",
						message: (0, t.localize)(2752, null),
						detail: (0, t.localize)(
							2753,
							null,
							te
								.map((se) => se.label)
								.join(`
`),
						),
						primaryButton: (0, t.localize)(2754, null),
					});
					if (!Q) return;
					const Z = new Set();
					for (const se of te) X.remove(se.key, se.scope), Z.add(se.scope);
					for (const se of Z) await X.optimize(se);
				}
			}
			let F,
				x = new Set();
			const H = new u.$5j("dirtyWorkingCopies", "stopped");
			class q extends g.$3X {
				constructor() {
					super({
						id: "workbench.action.startTrackDisposables",
						title: (0, t.localize2)(2772, "Start Tracking Disposables"),
						category: y.$ck.Developer,
						f1: !0,
						precondition: u.$Kj.and(
							H.isEqualTo("pending").negate(),
							H.isEqualTo("started").negate(),
						),
					});
				}
				run(W) {
					H.bindTo(W.get(u.$6j)).set("started"),
						x.clear(),
						(F = new d.$Pc()),
						(0, d.$Qc)(F);
				}
			}
			class V extends g.$3X {
				constructor() {
					super({
						id: "workbench.action.snapshotTrackedDisposables",
						title: (0, t.localize2)(2773, "Snapshot Tracked Disposables"),
						category: y.$ck.Developer,
						f1: !0,
						precondition: H.isEqualTo("started"),
					});
				}
				run(W) {
					H.bindTo(W.get(u.$6j)).set("pending"),
						(x = new Set(
							F?.computeLeakingDisposables(1e3)?.leaks.map((Y) => Y.value),
						));
				}
			}
			class G extends g.$3X {
				constructor() {
					super({
						id: "workbench.action.stopTrackDisposables",
						title: (0, t.localize2)(2774, "Stop Tracking Disposables"),
						category: y.$ck.Developer,
						f1: !0,
						precondition: H.isEqualTo("pending"),
					});
				}
				run(W) {
					const X = W.get(D.$IY);
					if ((H.bindTo(W.get(u.$6j)).set("stopped"), F)) {
						const ie = new Set();
						for (const ee of new Set(F.computeLeakingDisposables(1e3)?.leaks) ??
							[])
							x.has(ee.value) && ie.add(ee);
						const ne = F.computeLeakingDisposables(1e3, Array.from(ie));
						ne && X.openEditor({ resource: void 0, contents: ne.details });
					}
					(0, d.$Qc)(null), (F = void 0), x.clear();
				}
			}
			(0, g.$4X)(R),
				(0, g.$4X)(O),
				(0, g.$4X)(B),
				(0, g.$4X)(U),
				(0, g.$4X)(z),
				M.default.commit || ((0, g.$4X)(q), (0, g.$4X)(V), (0, g.$4X)(G)),
				n.$Io
					.as(b.$No.Configuration)
					.registerConfiguration({
						id: "screencastMode",
						order: 9,
						title: (0, t.localize)(2755, null),
						type: "object",
						properties: {
							"screencastMode.verticalOffset": {
								type: "number",
								default: 20,
								minimum: 0,
								maximum: 90,
								description: (0, t.localize)(2756, null),
							},
							"screencastMode.fontSize": {
								type: "number",
								default: 56,
								minimum: 20,
								maximum: 100,
								description: (0, t.localize)(2757, null),
							},
							"screencastMode.keyboardOptions": {
								type: "object",
								description: (0, t.localize)(2758, null),
								properties: {
									showKeys: {
										type: "boolean",
										default: !0,
										description: (0, t.localize)(2759, null),
									},
									showKeybindings: {
										type: "boolean",
										default: !0,
										description: (0, t.localize)(2760, null),
									},
									showCommands: {
										type: "boolean",
										default: !0,
										description: (0, t.localize)(2761, null),
									},
									showCommandGroups: {
										type: "boolean",
										default: !1,
										description: (0, t.localize)(2762, null),
									},
									showSingleEditorCursorMoves: {
										type: "boolean",
										default: !0,
										description: (0, t.localize)(2763, null),
									},
								},
								default: {
									showKeys: !0,
									showKeybindings: !0,
									showCommands: !0,
									showCommandGroups: !1,
									showSingleEditorCursorMoves: !0,
								},
								additionalProperties: !1,
							},
							"screencastMode.keyboardOverlayTimeout": {
								type: "number",
								default: 800,
								minimum: 500,
								maximum: 5e3,
								description: (0, t.localize)(2764, null),
							},
							"screencastMode.mouseIndicatorColor": {
								type: "string",
								format: "color-hex",
								default: "#FF0000",
								description: (0, t.localize)(2765, null),
							},
							"screencastMode.mouseIndicatorSize": {
								type: "number",
								default: 20,
								minimum: 20,
								maximum: 100,
								description: (0, t.localize)(2766, null),
							},
						},
					});
		},
	),
		define(
			de[3858],
			he([
				1, 0, 6, 3, 8, 179, 100, 7, 66, 10, 78, 25, 96, 438, 349, 227, 12, 142,
				762, 62, 253, 75, 139, 18,
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
					(e.$l3c = void 0);
				let v = class extends i.$1c {
					constructor(I, T, P, k, L, D, M, N, A, R) {
						super(),
							(this.S = I),
							(this.U = T),
							(this.W = P),
							(this.X = k),
							(this.Y = L),
							(this.Z = D),
							(this.$ = M),
							(this.ab = N),
							(this.bb = A),
							(this.cb = R),
							E.$4Lb.bindTo(this.S),
							E.$5Lb.bindTo(this.S),
							E.$6Lb.bindTo(this.S),
							E.$7Lb.bindTo(this.S),
							E.$8Lb.bindTo(this.S),
							E.$9Lb.bindTo(this.S),
							E.$0Lb.bindTo(this.S),
							C.$CPb
								.bindTo(this.S)
								.set((0, c.$xn)(this.X.remoteAuthority) || ""),
							(this.w = C.$DPb.bindTo(this.S)),
							(this.y = C.$EPb.bindTo(this.S)),
							this.pb(),
							C.$HPb
								.bindTo(this.S)
								.set(f.WebFileSystemAccess.supported(l.$Bfb));
						const O = !this.X.isBuilt || this.X.isExtensionDevelopment;
						E.$$Lb.bindTo(this.S).set(O),
							(0, w.$Ij)(E.$$Lb.key, O),
							E.$_Lb.bindTo(this.S).set(this.Y.quality || ""),
							C.$IPb.bindTo(this.S).set(L.embedderIdentifier),
							(this.c = C.$ZPb.bindTo(this.S)),
							(this.f = C.$1Pb.bindTo(this.S)),
							(this.g = C.$2Pb.bindTo(this.S)),
							(this.h = C.$3Pb.bindTo(this.S)),
							(this.j = C.$4Pb.bindTo(this.S)),
							(this.m = C.$aQb.bindTo(this.S)),
							(this.b = C.$BPb.bindTo(this.S)),
							this.b.set(this.cb.hasDirty),
							(this.a = E.$bMb.bindTo(this.S)),
							(this.q = C.$wPb.bindTo(this.S)),
							this.jb(),
							(this.r = C.$xPb.bindTo(this.S)),
							this.kb(),
							(this.s = C.$yPb.bindTo(this.S)),
							this.s.set(p.$p || typeof this.X.remoteAuthority == "string"),
							(this.u = C.$APb.bindTo(this.S)),
							this.u.set(p.$p || typeof this.X.remoteAuthority == "string"),
							(this.t = C.$zPb.bindTo(this.S)),
							this.t.set(p.$p || typeof this.X.remoteAuthority == "string"),
							(this.n = C.$dQb.bindTo(this.S)),
							this.lb(),
							(this.C = C.$FPb.bindTo(this.S)),
							(this.F = C.$GPb.bindTo(this.S)),
							(this.z = C.$bQb.bindTo(this.S)),
							(this.G = C.$cQb.bindTo(this.S)),
							(this.I = C.$eQb.bindTo(this.S)),
							(this.P = C.$fQb.bindTo(this.S)),
							(this.H = C.$gQb.bindTo(this.S)),
							(this.Q = C.$lQb.bindTo(this.S)),
							(this.R = C.$kQb.bindTo(this.S)),
							this.ob(),
							(this.J = C.$vQb.bindTo(this.S)),
							this.J.set((0, h.$oEb)(this.ab.getPanelPosition())),
							(this.L = C.$xQb.bindTo(this.S)),
							this.L.set(this.ab.isVisible(h.Parts.PANEL_PART)),
							(this.N = C.$yQb.bindTo(this.S)),
							this.N.set(this.ab.isPanelMaximized()),
							(this.M = C.$wQb.bindTo(this.S)),
							this.M.set(this.ab.getPanelAlignment()),
							(this.O = C.$sQb.bindTo(this.S)),
							this.O.set(this.ab.isVisible(h.Parts.AUXILIARYBAR_PART)),
							this.db();
					}
					db() {
						this.Z.whenReady.then(() => {
							this.hb(), this.fb(), this.eb();
						}),
							this.D(this.$.onDidActiveEditorChange(() => this.fb())),
							this.D(this.$.onDidVisibleEditorsChange(() => this.eb())),
							this.D(this.Z.onDidAddGroup(() => this.gb())),
							this.D(this.Z.onDidRemoveGroup(() => this.gb())),
							this.D(this.Z.onDidChangeGroupIndex(() => this.fb())),
							this.D(this.Z.onDidChangeGroupLocked(() => this.fb())),
							this.D(this.Z.onDidChangeEditorPartOptions(() => this.hb())),
							this.D(
								t.Event.runAndSubscribe(
									d.onDidRegisterWindow,
									({ window: I, disposables: T }) =>
										T.add(
											(0, d.$0fb)(
												I,
												d.$$gb.FOCUS_IN,
												() => this.ib(I.document),
												!0,
											),
										),
									{ window: l.$Bfb, disposables: this.B },
								),
							),
							this.D(this.U.onDidChangeWorkbenchState(() => this.jb())),
							this.D(
								this.U.onDidChangeWorkspaceFolders(() => {
									this.kb(), this.pb();
								}),
							),
							this.D(
								this.W.onDidChangeConfiguration((I) => {
									I.affectsConfiguration(
										"workbench.editor.openSideBySideDirection",
									) && this.lb();
								}),
							),
							this.D(this.ab.onDidChangeZenMode((I) => this.z.set(I))),
							this.D(
								this.ab.onDidChangeActiveContainer(() =>
									this.F.set(this.ab.activeContainer !== this.ab.mainContainer),
								),
							),
							this.D(
								(0, y.$Nfb)((I) => {
									I === l.$Bfb.vscodeWindowId &&
										this.C.set((0, y.$Mfb)(l.$Bfb));
								}),
							),
							this.D(
								this.ab.onDidChangeMainEditorCenteredLayout((I) =>
									this.G.set(I),
								),
							),
							this.D(this.ab.onDidChangePanelPosition((I) => this.J.set(I))),
							this.D(this.ab.onDidChangePanelAlignment((I) => this.M.set(I))),
							this.D(this.bb.onDidPaneCompositeClose(() => this.nb())),
							this.D(this.bb.onDidPaneCompositeOpen(() => this.nb())),
							this.D(
								this.ab.onDidChangePartVisibility(() => {
									this.I.set(this.ab.isVisible(h.Parts.EDITOR_PART, l.$Bfb)),
										this.L.set(this.ab.isVisible(h.Parts.PANEL_PART)),
										this.N.set(this.ab.isPanelMaximized()),
										this.O.set(this.ab.isVisible(h.Parts.AUXILIARYBAR_PART)),
										this.ob();
								}),
							),
							this.D(
								this.cb.onDidChangeDirty((I) =>
									this.b.set(I.isDirty() || this.cb.hasDirty),
								),
							);
					}
					eb() {
						this.$.visibleEditorPanes.length > 0
							? this.m.set(!0)
							: this.m.reset();
					}
					fb() {
						this.$.activeEditor ? this.c.reset() : this.c.set(!0);
						const I = this.Z.activeGroup;
						this.f.set(I.index + 1), this.h.set(I.isLocked), this.gb();
					}
					gb() {
						const I = this.Z.count;
						I > 1 ? this.j.set(!0) : this.j.reset();
						const T = this.Z.activeGroup;
						this.g.set(T.index === I - 1);
					}
					hb() {
						this.P.set(this.Z.partOptions.showTabs === "multiple");
					}
					ib(I) {
						function T() {
							return (
								!!I.activeElement &&
								(I.activeElement.tagName === "INPUT" ||
									I.activeElement.tagName === "TEXTAREA")
							);
						}
						const P = T();
						if ((this.a.set(P), P)) {
							const k = (0, d.$dhb)(I.activeElement);
							t.Event.once(k.onDidBlur)(() => {
								(0, d.$Ogb)().document === I && this.a.set(T()), k.dispose();
							});
						}
					}
					jb() {
						this.q.set(this.mb());
					}
					kb() {
						this.r.set(this.U.getWorkspace().folders.length);
					}
					lb() {
						const I = (0, m.$HY)(this.W);
						this.n.set(I === m.GroupDirection.DOWN);
					}
					mb() {
						switch (this.U.getWorkbenchState()) {
							case a.WorkbenchState.EMPTY:
								return "empty";
							case a.WorkbenchState.FOLDER:
								return "folder";
							case a.WorkbenchState.WORKSPACE:
								return "workspace";
						}
					}
					nb() {
						this.H.set(this.ab.isVisible(h.Parts.SIDEBAR_PART));
					}
					ob() {
						this.Q.set(this.ab.isVisible(h.Parts.TITLEBAR_PART, l.$Bfb)),
							this.R.set((0, s.$zY)(this.W));
					}
					pb() {
						this.w.set((0, n.$F8)(this.U.getWorkspace()) || ""),
							this.y.set((0, a.$bj)(this.U.getWorkspace()));
					}
				};
				(e.$l3c = v),
					(e.$l3c = v =
						Ne(
							[
								j(0, w.$6j),
								j(1, a.$Vi),
								j(2, r.$gj),
								j(3, u.$r8),
								j(4, b.$Bk),
								j(5, m.$EY),
								j(6, $.$IY),
								j(7, h.$mEb),
								j(8, o.$6Sb),
								j(9, g.$gY),
							],
							v,
						));
			},
		),
		define(
			de[192],
			he([1, 0, 4, 44, 30, 3, 15, 18, 68, 227, 23, 103, 6]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$wVb = e.$vVb = void 0),
					(e.$xVb = g),
					(e.$yVb = p);
				class c {
					static {
						this.a = new Set();
					}
					static didInstantiateEditorPane(f) {
						return c.a.has(f);
					}
					static {
						this.b = new h.$re();
					}
					static {
						this.onWillInstantiateEditorPane = c.b.event;
					}
					static create(f, b, s) {
						return new c(f, b, s);
					}
					constructor(f, b, s) {
						(this.c = f), (this.typeId = b), (this.name = s);
					}
					instantiate(f, b) {
						c.b.fire({ typeId: this.typeId });
						const s = f.createInstance(this.c, b);
						return c.a.add(this.typeId), s;
					}
					describes(f) {
						return f.getId() === this.typeId;
					}
				}
				e.$vVb = c;
				class n {
					constructor() {
						this.a = new Map();
					}
					registerEditorPane(f, b) {
						return (
							this.a.set(f, b),
							(0, E.$Yc)(() => {
								this.a.delete(f);
							})
						);
					}
					getEditorPane(f) {
						const b = this.b(f);
						if (b.length !== 0)
							return b.length === 1 ? b[0] : f.prefersEditorPane(b);
					}
					b(f, b) {
						const s = [];
						for (const l of this.a.keys()) {
							const y = this.a.get(l) || [];
							for (const $ of y) {
								const v = $.ctor;
								if (!b && f.constructor === v) {
									s.push(l);
									break;
								} else if (b && f instanceof v) {
									s.push(l);
									break;
								}
							}
						}
						return !b && s.length === 0 ? this.b(f, !0) : s;
					}
					getEditorPaneByType(f) {
						return a.Iterable.find(this.a.keys(), (b) => b.typeId === f);
					}
					getEditorPanes() {
						return Array.from(this.a.keys());
					}
					getEditors() {
						const f = [];
						for (const b of this.a.keys()) {
							const s = this.a.get(b);
							s && f.push(...s.map((l) => l.ctor));
						}
						return f;
					}
				}
				(e.$wVb = n), w.$Io.add(i.$a1.EditorPane, new n());
				function g(o, f) {
					const b = o.get(d.$IY),
						s = o.get(m.$Vl),
						l = o.get(r.$gY);
					return new Promise((y) => {
						let $ = [...f];
						const v = b.onDidCloseEditor(async (S) => {
							if (S.context === i.EditorCloseContext.MOVE) return;
							let I = i.$A1.getOriginalUri(S.editor, {
									supportSideBySide: i.SideBySideEditor.PRIMARY,
								}),
								T = i.$A1.getOriginalUri(S.editor, {
									supportSideBySide: i.SideBySideEditor.SECONDARY,
								});
							if (S.context === i.EditorCloseContext.REPLACE) {
								const P = i.$A1.getOriginalUri(b.activeEditor, {
										supportSideBySide: i.SideBySideEditor.PRIMARY,
									}),
									k = i.$A1.getOriginalUri(b.activeEditor, {
										supportSideBySide: i.SideBySideEditor.SECONDARY,
									});
								s.extUri.isEqual(I, P) && (I = void 0),
									s.extUri.isEqual(T, k) && (T = void 0);
							}
							if (
								(($ = $.filter(
									(P) =>
										!(
											s.extUri.isEqual(P, I) ||
											s.extUri.isEqual(P, T) ||
											(S.context !== i.EditorCloseContext.REPLACE &&
												((I?.scheme === u.Schemas.untitled &&
													s.extUri.isEqual(P, I.with({ scheme: P.scheme }))) ||
													(T?.scheme === u.Schemas.untitled &&
														s.extUri.isEqual(P, T.with({ scheme: P.scheme })))))
										),
								)),
								$.length === 0)
							) {
								const P = f.filter((k) => l.isDirty(k));
								return (
									P.length > 0 &&
										(await C.Promises.settled(
											P.map(
												async (k) =>
													await new Promise((L) => {
														if (!l.isDirty(k)) return L();
														const D = l.onDidChangeDirty((M) => {
															if (
																!M.isDirty() &&
																s.extUri.isEqual(k, M.resource)
															)
																return D.dispose(), L();
														});
													}),
											),
										)),
									v.dispose(),
									y()
								);
							}
						});
					});
				}
				function p(o, f, b, s) {
					let l = o.getAriaLabel();
					return (
						b && !b.isPinned(o) && (l = (0, t.localize)(3006, null, l)),
						b?.isSticky(f ?? o) && (l = (0, t.localize)(3007, null, l)),
						b && typeof s == "number" && s > 1 && (l = `${l}, ${b.ariaLabel}`),
						l
					);
				}
			},
		),
		define(
			de[3859],
			he([1, 0, 3, 170, 87, 44, 18, 66, 227, 334, 34, 90, 59, 68]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$wuc = void 0);
				let n = class extends t.$1c {
					static {
						this.ID = "workbench.contrib.editorAutoSave";
					}
					constructor(p, o, f, b, s, l, y, $) {
						super(),
							(this.j = p),
							(this.m = o),
							(this.n = f),
							(this.q = b),
							(this.r = s),
							(this.s = l),
							(this.t = y),
							(this.u = $),
							(this.a = new Map()),
							(this.b = void 0),
							(this.c = void 0),
							(this.f = this.D(new t.$Zc())),
							(this.g = new h.$Gc((v) => this.u.extUri.getComparisonKey(v))),
							(this.h = new h.$Gc((v) => this.u.extUri.getComparisonKey(v)));
						for (const v of this.r.dirtyWorkingCopies) this.J(v);
						this.w();
					}
					w() {
						this.D(this.m.onDidChangeFocus((p) => this.z(p))),
							this.D(this.m.onDidChangeActiveWindow(() => this.C())),
							this.D(this.n.onDidActiveEditorChange(() => this.F())),
							this.D(this.j.onDidChangeAutoSaveConfiguration(() => this.H())),
							this.D(this.r.onDidRegister((p) => this.J(p))),
							this.D(this.r.onDidUnregister((p) => this.L(p))),
							this.D(this.r.onDidChangeDirty((p) => this.M(p))),
							this.D(this.r.onDidChangeContent((p) => this.N(p))),
							this.D(
								this.t.onMarkerChanged((p) =>
									this.y(p, i.AutoSaveDisabledReason.ERRORS),
								),
							),
							this.D(
								this.j.onDidChangeAutoSaveDisabled((p) =>
									this.y([p], i.AutoSaveDisabledReason.DISABLED),
								),
							);
					}
					y(p, o) {
						for (const f of p) {
							const b = this.g.get(f);
							if (b?.condition === o)
								b.workingCopy.isDirty() &&
									this.j.getAutoSaveMode(b.workingCopy.resource, b.reason)
										.mode !== i.AutoSaveMode.OFF &&
									(this.P(b.workingCopy),
									this.s.trace(
										"[editor auto save] running auto save from condition change event",
										b.workingCopy.resource.toString(),
										b.workingCopy.typeId,
									),
									b.workingCopy.save({ reason: b.reason }));
							else {
								const s = this.h.get(f);
								s?.condition === o &&
									!s.editor.editor.isDisposed() &&
									s.editor.editor.isDirty() &&
									this.j.getAutoSaveMode(s.editor.editor, s.reason).mode !==
										i.AutoSaveMode.OFF &&
									(this.h.delete(f),
									this.s.trace(
										`[editor auto save] running auto save from condition change event with reason ${s.reason}`,
									),
									this.n.save(s.editor, { reason: s.reason }));
							}
						}
					}
					z(p) {
						p || this.G(E.SaveReason.WINDOW_CHANGE);
					}
					C() {
						this.G(E.SaveReason.WINDOW_CHANGE);
					}
					F() {
						this.b &&
							typeof this.c == "number" &&
							this.G(E.SaveReason.FOCUS_CHANGE, {
								groupId: this.c,
								editor: this.b,
							});
						const p = this.q.activeGroup,
							o = (this.b = p.activeEditor ?? void 0);
						(this.c = p.id), this.f.clear();
						const f = this.n.activeEditorPane;
						o &&
							f &&
							this.f.add(
								f.onDidBlur(() => {
									this.G(E.SaveReason.FOCUS_CHANGE, {
										groupId: p.id,
										editor: o,
									});
								}),
							);
					}
					G(p, o) {
						if (o) {
							if (
								!o.editor.isDirty() ||
								o.editor.isReadonly() ||
								o.editor.hasCapability(E.EditorInputCapabilities.Untitled)
							)
								return;
							const f = this.j.getAutoSaveMode(o.editor, p);
							f.mode !== i.AutoSaveMode.OFF
								? ((p === E.SaveReason.WINDOW_CHANGE &&
										(f.mode === i.AutoSaveMode.ON_FOCUS_CHANGE ||
											f.mode === i.AutoSaveMode.ON_WINDOW_CHANGE)) ||
										(p === E.SaveReason.FOCUS_CHANGE &&
											f.mode === i.AutoSaveMode.ON_FOCUS_CHANGE)) &&
									(this.s.trace(
										`[editor auto save] triggering auto save with reason ${p}`,
									),
									this.n.save(o, { reason: p }))
								: o.editor.resource &&
									(f.reason === i.AutoSaveDisabledReason.ERRORS ||
										f.reason === i.AutoSaveDisabledReason.DISABLED) &&
									this.h.set(o.editor.resource, {
										editor: o,
										reason: p,
										condition: f.reason,
									});
						} else this.I(p);
					}
					H() {
						let p;
						switch (this.j.getAutoSaveMode(void 0).mode) {
							case i.AutoSaveMode.ON_FOCUS_CHANGE:
								p = E.SaveReason.FOCUS_CHANGE;
								break;
							case i.AutoSaveMode.ON_WINDOW_CHANGE:
								p = E.SaveReason.WINDOW_CHANGE;
								break;
							case i.AutoSaveMode.AFTER_SHORT_DELAY:
							case i.AutoSaveMode.AFTER_LONG_DELAY:
								p = E.SaveReason.AUTO;
								break;
						}
						p && this.I(p);
					}
					I(p) {
						for (const o of this.r.dirtyWorkingCopies) {
							if (o.capabilities & r.WorkingCopyCapabilities.Untitled) continue;
							const f = this.j.getAutoSaveMode(o.resource, p);
							f.mode !== i.AutoSaveMode.OFF
								? o.save({ reason: p })
								: (f.reason === i.AutoSaveDisabledReason.ERRORS ||
										f.reason === i.AutoSaveDisabledReason.DISABLED) &&
									this.g.set(o.resource, {
										workingCopy: o,
										reason: p,
										condition: f.reason,
									});
						}
					}
					J(p) {
						p.isDirty() && this.O(p);
					}
					L(p) {
						this.P(p);
					}
					M(p) {
						p.isDirty() ? this.O(p) : this.P(p);
					}
					N(p) {
						p.isDirty() && this.O(p);
					}
					O(p) {
						if (p.capabilities & r.WorkingCopyCapabilities.Untitled) return;
						const o = this.j.getAutoSaveConfiguration(p.resource).autoSaveDelay;
						if (typeof o != "number") return;
						this.P(p),
							this.s.trace(
								`[editor auto save] scheduling auto save after ${o}ms`,
								p.resource.toString(),
								p.typeId,
							);
						const f = setTimeout(() => {
							if ((this.P(p), p.isDirty())) {
								const b = E.SaveReason.AUTO,
									s = this.j.getAutoSaveMode(p.resource, b);
								s.mode !== i.AutoSaveMode.OFF
									? (this.s.trace(
											"[editor auto save] running auto save",
											p.resource.toString(),
											p.typeId,
										),
										p.save({ reason: b }))
									: (s.reason === i.AutoSaveDisabledReason.ERRORS ||
											s.reason === i.AutoSaveDisabledReason.DISABLED) &&
										this.g.set(p.resource, {
											workingCopy: p,
											reason: b,
											condition: s.reason,
										});
							}
						}, o);
						this.a.set(
							p,
							(0, t.$Yc)(() => {
								this.s.trace(
									"[editor auto save] clearing pending auto save",
									p.resource.toString(),
									p.typeId,
								),
									clearTimeout(f);
							}),
						);
					}
					P(p) {
						(0, t.$Vc)(this.a.get(p)),
							this.a.delete(p),
							this.g.delete(p.resource),
							this.h.delete(p.resource);
					}
				};
				(e.$wuc = n),
					(e.$wuc = n =
						Ne(
							[
								j(0, i.$_Y),
								j(1, w.$asb),
								j(2, C.$IY),
								j(3, d.$EY),
								j(4, m.$gY),
								j(5, u.$ik),
								j(6, a.$aM),
								j(7, c.$Vl),
							],
							n,
						));
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	define(
		de[1914],
		he([
			1, 0, 4, 37, 111, 44, 217, 32, 203, 195, 35, 7, 3, 21, 28, 31, 25, 116,
			192, 183, 106, 758, 22, 163, 57, 2340,
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
			var S, I, T;
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$ouc = e.$nuc = e.$muc = void 0),
				(w = xi(w));
			let P = class extends C.$JEb {
				static {
					S = this;
				}
				static {
					this.a = 1024;
				}
				constructor(M, N, A, R, O) {
					super(M, N, A, R, O), (this.f = this.D(new h.$2c()));
				}
				Y(M) {
					(this.b = document.createElement("div")),
						(this.b.className = "monaco-editor-pane-placeholder"),
						(this.b.style.outline = "none"),
						(this.b.tabIndex = 0),
						(this.c = this.D(
							new m.$8hb(this.b, {
								horizontal: r.ScrollbarVisibility.Auto,
								vertical: r.ScrollbarVisibility.Auto,
							}),
						)),
						M.appendChild(this.c.getDomNode());
				}
				async setInput(M, N, A, R) {
					await super.setInput(M, N, A, R),
						!R.isCancellationRequested && (this.f.value = await this.j(M, N));
				}
				async j(M, N) {
					const [A, R] = (0, n.$xg)(this.b, this.c);
					(0, a.$9fb)(A);
					const O = new h.$Zc(),
						{ icon: B, label: U, actions: z } = await this.m(M, N, O),
						F = (0, i.$qf)(U, S.a),
						x = A.appendChild((0, a.$)(".editor-placeholder-icon-container")),
						H = O.add(new l.$Yob(x));
					H.text = B;
					const q = A.appendChild(
							(0, a.$)(".editor-placeholder-label-container"),
						),
						V = document.createElement("span");
					if (
						((V.textContent = F),
						q.appendChild(V),
						A.setAttribute(
							"aria-label",
							`${(0, f.$yVb)(M, void 0, this.group, void 0)}, ${F}`,
						),
						z.length)
					) {
						const G = A.appendChild(
								(0, a.$)(".editor-placeholder-buttons-container"),
							),
							K = O.add(new b.$rob(G));
						for (let J = 0; J < z.length; J++) {
							const W = O.add(K.addButton({ ...s.$lyb, secondary: J !== 0 }));
							(W.label = z[J].label),
								O.add(
									W.onDidClick((X) => {
										X && a.$ahb.stop(X, !0), z[J].run();
									}),
								);
						}
					}
					return R.scanDomNode(), O;
				}
				clearInput() {
					this.b && (0, a.$9fb)(this.b), this.f.clear(), super.clearInput();
				}
				layout(M) {
					const [N, A] = (0, n.$xg)(this.b, this.c);
					(0, a.size)(N, M.width, M.height),
						A.scanDomNode(),
						N.classList.toggle("max-height-200px", M.height <= 200);
				}
				focus() {
					super.focus(), this.b?.focus();
				}
				dispose() {
					this.b?.remove(), super.dispose();
				}
			};
			(e.$muc = P),
				(e.$muc = P = S = Ne([j(2, d.$km), j(3, u.$iP), j(4, c.$lq)], P));
			let k = class extends P {
				static {
					I = this;
				}
				static {
					this.ID = "workbench.editors.workspaceTrustRequiredEditor";
				}
				static {
					this.r = (0, t.localize)(3469, null);
				}
				static {
					this.DESCRIPTOR = f.$vVb.create(I, this.ID, this.r);
				}
				constructor(M, N, A, R, O, B) {
					super(I.ID, M, N, A, B), (this.s = R), (this.u = O);
				}
				getTitle() {
					return I.r;
				}
				async m() {
					return {
						icon: "$(workspace-untrusted)",
						label: (0, p.$Wi)((0, p.$1i)(this.u.getWorkspace()))
							? (0, t.localize)(3470, null)
							: (0, t.localize)(3471, null),
						actions: [
							{
								label: (0, t.localize)(3472, null),
								run: () => this.s.executeCommand("workbench.trust.manage"),
							},
						],
					};
				}
			};
			(e.$nuc = k),
				(e.$nuc =
					k =
					I =
						Ne(
							[j(1, d.$km), j(2, u.$iP), j(3, g.$ek), j(4, p.$Vi), j(5, c.$lq)],
							k,
						));
			let L = class extends P {
				static {
					T = this;
				}
				static {
					this.r = "workbench.editors.errorEditor";
				}
				static {
					this.s = (0, t.localize)(3473, null);
				}
				static {
					this.DESCRIPTOR = f.$vVb.create(T, this.r, this.s);
				}
				constructor(M, N, A, R, O, B) {
					super(T.r, M, N, A, R), (this.u = O), (this.cb = B);
				}
				async m(M, N, A) {
					const R = M.resource,
						O = N.error,
						B = O?.fileOperationResult === y.FileOperationResult.FILE_NOT_FOUND;
					let U;
					B
						? (U = (0, t.localize)(3474, null))
						: (0, E.$D1)(O) && O.forceMessage
							? (U = O.message)
							: O
								? (U = (0, t.localize)(
										3475,
										null,
										(0, i.$rf)((0, $.$xj)(O), P.a / 2),
									))
								: (U = (0, t.localize)(3476, null));
					let z = "$(error)";
					(0, E.$D1)(O) &&
						(O.forceSeverity === w.default.Info
							? (z = "$(info)")
							: O.forceSeverity === w.default.Warning && (z = "$(warning)"));
					let F;
					return (
						(0, E.$D1)(O) && O.actions.length > 0
							? (F = O.actions.map((x) => ({
									label: x.label,
									run: () => {
										const H = x.run();
										H instanceof Promise &&
											H.catch((q) => this.cb.error((0, $.$xj)(q)));
									},
								})))
							: (F = [
									{
										label: (0, t.localize)(3477, null),
										run: () =>
											this.group.openEditor(M, {
												...N,
												source: o.EditorOpenSource.USER,
											}),
									},
								]),
						B &&
							R &&
							this.u.hasProvider(R) &&
							A.add(
								this.u.onDidFilesChange((x) => {
									x.contains(
										R,
										y.FileChangeType.ADDED,
										y.FileChangeType.UPDATED,
									) && this.group.openEditor(M, N);
								}),
							),
						{ icon: z, label: U, actions: F ?? [] }
					);
				}
			};
			(e.$ouc = L),
				(e.$ouc =
					L =
					T =
						Ne(
							[j(1, d.$km), j(2, u.$iP), j(3, c.$lq), j(4, y.$ll), j(5, v.$GO)],
							L,
						));
		},
	),
		define(
			de[1336],
			he([1, 0, 4, 6, 1225, 21, 22, 1914]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$puc = void 0);
				let m = class extends d.$muc {
					constructor(u, a, h, c, n, g) {
						super(u, a, c, n, g),
							(this.cb = h),
							(this.r = this.D(new i.$re())),
							(this.onDidChangeMetadata = this.r.event),
							(this.s = this.D(new i.$re())),
							(this.onDidOpenInPlace = this.s.event);
					}
					getTitle() {
						return this.input
							? this.input.getName()
							: (0, t.localize)(3064, null);
					}
					async m(u, a) {
						const h = await u.resolve();
						if (!(h instanceof w.$mec))
							throw new Error("Unable to open file as binary");
						const c = h.getSize();
						return (
							this.eb(typeof c == "number" ? C.$Tl.formatSize(c) : ""),
							{
								icon: "$(warning)",
								label: (0, t.localize)(3065, null),
								actions: [
									{
										label: (0, t.localize)(3066, null),
										run: async () => {
											await this.cb.openInternal(u, a), this.s.fire();
										},
									},
								],
							}
						);
					}
					eb(u) {
						(this.u = u), this.r.fire();
					}
					getMetadata() {
						return this.u;
					}
				};
				(e.$puc = m), (e.$puc = m = Ne([j(5, E.$lq)], m));
			},
		),
		define(
			de[1915],
			he([1, 0, 4, 44, 32, 35, 825, 5, 1336, 21, 10, 125, 66, 18]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$quc = void 0);
				let n = class extends C.$AVb {
					static {
						this.ID = i.$e1;
					}
					constructor(p, o, f, b, s, l, y, $, v) {
						super(p, o, f, b, s, l, y, $, v);
					}
					getMetadata() {
						const p = this.getPrimaryEditorPane(),
							o = this.getSecondaryEditorPane();
						if (p instanceof m.$puc && o instanceof m.$puc)
							return (0, t.localize)(
								3063,
								null,
								o.getMetadata(),
								p.getMetadata(),
							);
					}
				};
				(e.$quc = n),
					(e.$quc = n =
						Ne(
							[
								j(1, w.$km),
								j(2, d.$Li),
								j(3, E.$iP),
								j(4, r.$lq),
								j(5, u.$gj),
								j(6, a.$XO),
								j(7, c.$IY),
								j(8, h.$EY),
							],
							n,
						));
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	define(
		de[3860],
		he([
			1, 0, 4, 6, 111, 3, 44, 7, 30, 96, 5, 84, 548, 28, 174, 1914, 116, 29,
			163, 34, 57, 87,
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
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Auc = void 0),
				(w = xi(w));
			let y = class extends E.$1c {
				get minimumWidth() {
					return this.c?.minimumWidth ?? h.$DEb.width;
				}
				get minimumHeight() {
					return this.c?.minimumHeight ?? h.$DEb.height;
				}
				get maximumWidth() {
					return this.c?.maximumWidth ?? h.$EEb.width;
				}
				get maximumHeight() {
					return this.c?.maximumHeight ?? h.$EEb.height;
				}
				get activeEditorPane() {
					return this.c;
				}
				constructor(v, S, I, T, P, k, L, D, M, N) {
					super(),
						(this.q = v),
						(this.r = S),
						(this.s = I),
						(this.t = T),
						(this.u = P),
						(this.w = k),
						(this.y = L),
						(this.z = D),
						(this.C = M),
						(this.F = N),
						(this.a = this.D(new i.$re())),
						(this.onDidFocus = this.a.event),
						(this.b = this.D(new i.$re())),
						(this.onDidChangeSizeConstraints = this.b.event),
						(this.c = null),
						(this.f = []),
						(this.g = this.D(new E.$Zc())),
						(this.m = this.D(new a.$aO(this.w))),
						(this.n = m.$Io.as(C.$a1.EditorPane)),
						this.G();
				}
				G() {
					this.D(this.y.onDidChangeTrust(() => this.H()));
				}
				H() {
					const v = this.c?.input,
						S = this.c?.options;
					v?.hasCapability(C.EditorInputCapabilities.RequiresTrust) &&
						this.s.openEditor(v, S);
				}
				async openEditor(v, S, I, T = Object.create(null)) {
					try {
						return await this.L(this.N(v), v, S, I, T);
					} catch (P) {
						return S?.ignoreError ? { error: P } : this.I(P, v, S, I, T);
					}
				}
				async I(v, S, I, T, P) {
					this.z.error(v);
					let k = !1;
					if (
						(I?.source === p.EditorOpenSource.USER &&
							(!(0, C.$D1)(v) || v.allowDialog) &&
							(k = await this.J(v, S)),
						k)
					)
						return { error: v };
					const L = { ...I };
					return (
						(0, o.$8)(v) || (L.error = v),
						{ ...(await this.L(g.$ouc.DESCRIPTOR, S, L, T, P)), error: v }
					);
				}
				async J(v, S) {
					let I = w.default.Error,
						T,
						P = (0, f.$xj)(v),
						k;
					(0, C.$D1)(v) &&
						((k = v.actions),
						(I = v.forceSeverity ?? w.default.Error),
						v.forceMessage && ((T = v.message), (P = void 0))),
						T || (T = (0, t.localize)(3466, null, S.getName()));
					const L = [];
					if (k && k.length > 0)
						for (const A of k) L.push({ label: A.label, run: () => A });
					else L.push({ label: (0, t.localize)(3467, null), run: () => {} });
					let D;
					L.length === 1 &&
						(D = {
							run: () => {
								M = !0;
							},
						});
					let M = !1;
					const { result: N } = await this.C.prompt({
						type: I,
						message: T,
						detail: P,
						buttons: L,
						cancelButton: D,
					});
					if (N) {
						const A = N.run();
						A instanceof Promise && A.catch((R) => this.C.error((0, f.$xj)(R))),
							(M = !0);
					}
					return M;
				}
				async L(v, S, I, T, P = Object.create(null)) {
					const k = this.O(v),
						L = (0, d.$Jgb)(),
						{ changed: D, cancelled: M } = await this.S(k, S, I, P);
					return (
						M ||
							((!I || !I.preserveFocus) && this.M(L)
								? k.focus()
								: T?.preserveWindowOrder ||
									this.F.moveTop(
										(0, d.getWindowById)(this.s.windowId, !0).window,
									)),
						{ pane: k, changed: D, cancelled: M }
					);
				}
				M(v) {
					if (!this.t.isRestored() || !v) return !0;
					const S = (0, d.$Jgb)();
					return !!(
						!S ||
						S === v.ownerDocument.body ||
						v === S ||
						(S.tagName !== "INPUT" && S.tagName !== "TEXTAREA") ||
						(0, d.$Bgb)(S, this.q)
					);
				}
				N(v) {
					return v.hasCapability(C.EditorInputCapabilities.RequiresTrust) &&
						!this.y.isWorkspaceTrusted()
						? g.$nuc.DESCRIPTOR
						: (0, c.$wg)(this.n.getEditorPane(v));
				}
				O(v) {
					if (this.c && v.describes(this.c)) return this.c;
					this.U();
					const S = this.P(v);
					this.R(S);
					const I = (0, c.$wg)(S.getContainer());
					return (
						this.r.appendChild(I),
						(0, d.show)(I),
						S.setVisible(!0),
						this.h &&
							S.layout(new d.$pgb(this.h.width, this.h.height), {
								top: this.h.top,
								left: this.h.left,
							}),
						this.j && S.setBoundarySashes(this.j),
						S
					);
				}
				P(v) {
					const S = this.Q(v);
					if (!S.getContainer()) {
						const I = document.createElement("div");
						I.classList.add("editor-instance"),
							this.r.appendChild(I),
							S.create(I);
					}
					return S;
				}
				Q(v) {
					const S = this.f.find((T) => v.describes(T));
					if (S) return S;
					const I = this.D(v.instantiate(this.u, this.s));
					return this.f.push(I), I;
				}
				R(v) {
					(this.c = v),
						this.g.clear(),
						v &&
							(this.g.add(v.onDidChangeSizeConstraints((S) => this.b.fire(S))),
							this.g.add(v.onDidFocus(() => this.a.fire()))),
						this.b.fire(void 0);
				}
				async S(v, S, I, T) {
					const P = v.input?.matches(S);
					if (P && !I?.forceReload)
						return v.setOptions(I), { changed: !1, cancelled: !1 };
					const k = this.m.start(this.t.isRestored() ? 800 : 3200);
					let L = !1;
					try {
						v.clearInput(),
							await v.setInput(S, I, T, k.token),
							k.isCurrent() || (L = !0);
					} catch (D) {
						if (!k.isCurrent()) L = !0;
						else throw D;
					} finally {
						k.stop();
					}
					return { changed: !P, cancelled: L };
				}
				U() {
					if (!this.c) return;
					this.m.stop(),
						this.W(() => this.c?.clearInput()),
						this.W(() => this.c?.setVisible(!1));
					const v = this.c.getContainer();
					v && (v.remove(), (0, d.hide)(v)), this.R(null);
				}
				closeEditor(v) {
					this.c?.input && v.matches(this.c.input) && this.U();
				}
				setVisible(v) {
					this.W(() => this.c?.setVisible(v));
				}
				layout(v) {
					(this.h = v),
						this.W(() => this.c?.layout(new d.$pgb(v.width, v.height), v));
				}
				setBoundarySashes(v) {
					(this.j = v), this.W(() => this.c?.setBoundarySashes(v));
				}
				W(v) {
					try {
						v();
					} catch (S) {
						this.z.error(S);
					}
				}
			};
			(e.$Auc = y),
				(e.$Auc = y =
					Ne(
						[
							j(3, r.$mEb),
							j(4, u.$Li),
							j(5, a.$bO),
							j(6, n.$pO),
							j(7, b.$ik),
							j(8, s.$GO),
							j(9, l.$asb),
						],
						y,
					));
		},
	),
		define(
			de[3861],
			he([
				1, 0, 4, 7, 37, 19, 28, 9, 50, 12, 628, 44, 3, 64, 1645, 1644, 1336,
				1915, 18, 22, 5, 61, 17, 104, 31, 119, 85, 842, 38, 125, 10, 82, 56, 23,
				131, 63, 252, 15, 6, 166, 90, 32, 313, 474, 8, 11, 43, 27, 653, 66,
				2342,
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
			) {
				"use strict";
				var Y;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$vuc = e.$uuc = e.$tuc = e.$suc = e.$ruc = void 0);
				class ie {
					constructor(Ce, Le) {
						(this.c = Ce), (this.d = Le);
					}
					getEncoding() {
						return this.c.getEncoding();
					}
					async setEncoding(Ce, Le) {
						await B.Promises.settled(
							[this.c, this.d].map((Fe) => Fe.setEncoding(Ce, Le)),
						);
					}
				}
				class ne {
					constructor(Ce, Le) {
						(this.c = Ce), (this.d = Le);
					}
					setLanguageId(Ce, Le) {
						[this.c, this.d].forEach((Fe) => Fe.setLanguageId(Ce, Le));
					}
				}
				function ee(be) {
					if (be instanceof u.$T1b) return be;
					if (be instanceof H.$iY) {
						const Le = ee(be.primary),
							Fe = ee(be.secondary);
						return Le && Fe ? new ie(Le, Fe) : Le;
					}
					const Ce = be;
					return (0, C.$Ag)(Ce.setEncoding, Ce.getEncoding) ? Ce : null;
				}
				function _(be) {
					if (be instanceof u.$T1b) return be;
					if (be instanceof H.$iY) {
						const Le = _(be.primary),
							Fe = _(be.secondary);
						return Le && Fe ? new ne(Le, Fe) : Le;
					}
					const Ce = be;
					return typeof Ce.setLanguageId == "function" ? Ce : null;
				}
				class te {
					constructor() {
						(this.indentation = !1),
							(this.selectionStatus = !1),
							(this.languageId = !1),
							(this.languageStatus = !1),
							(this.encoding = !1),
							(this.EOL = !1),
							(this.tabFocusMode = !1),
							(this.columnSelectionMode = !1),
							(this.metadata = !1);
					}
					combine(Ce) {
						(this.indentation = this.indentation || Ce.indentation),
							(this.selectionStatus =
								this.selectionStatus || Ce.selectionStatus),
							(this.languageId = this.languageId || Ce.languageId),
							(this.languageStatus = this.languageStatus || Ce.languageStatus),
							(this.encoding = this.encoding || Ce.encoding),
							(this.EOL = this.EOL || Ce.EOL),
							(this.tabFocusMode = this.tabFocusMode || Ce.tabFocusMode),
							(this.columnSelectionMode =
								this.columnSelectionMode || Ce.columnSelectionMode),
							(this.metadata = this.metadata || Ce.metadata);
					}
					hasChanges() {
						return (
							this.indentation ||
							this.selectionStatus ||
							this.languageId ||
							this.languageStatus ||
							this.encoding ||
							this.EOL ||
							this.tabFocusMode ||
							this.columnSelectionMode ||
							this.metadata
						);
					}
				}
				class Q {
					get selectionStatus() {
						return this.c;
					}
					get languageId() {
						return this.d;
					}
					get encoding() {
						return this.f;
					}
					get EOL() {
						return this.g;
					}
					get indentation() {
						return this.h;
					}
					get tabFocusMode() {
						return this.i;
					}
					get columnSelectionMode() {
						return this.j;
					}
					get metadata() {
						return this.l;
					}
					update(Ce) {
						const Le = new te();
						switch (Ce.type) {
							case "selectionStatus":
								this.c !== Ce.selectionStatus &&
									((this.c = Ce.selectionStatus), (Le.selectionStatus = !0));
								break;
							case "indentation":
								this.h !== Ce.indentation &&
									((this.h = Ce.indentation), (Le.indentation = !0));
								break;
							case "languageId":
								this.d !== Ce.languageId &&
									((this.d = Ce.languageId), (Le.languageId = !0));
								break;
							case "encoding":
								this.f !== Ce.encoding &&
									((this.f = Ce.encoding), (Le.encoding = !0));
								break;
							case "EOL":
								this.g !== Ce.EOL && ((this.g = Ce.EOL), (Le.EOL = !0));
								break;
							case "tabFocusMode":
								this.i !== Ce.tabFocusMode &&
									((this.i = Ce.tabFocusMode), (Le.tabFocusMode = !0));
								break;
							case "columnSelectionMode":
								this.j !== Ce.columnSelectionMode &&
									((this.j = Ce.columnSelectionMode),
									(Le.columnSelectionMode = !0));
								break;
							case "metadata":
								this.l !== Ce.metadata &&
									((this.l = Ce.metadata), (Le.metadata = !0));
								break;
						}
						return Le;
					}
				}
				let Z = class extends h.$1c {
					constructor(Ce) {
						super(),
							(this.f = Ce),
							(this.c = this.D(new U.$re())),
							(this.onDidChange = this.c.event),
							this.g();
						const Le = Ce.getValue("editor.tabFocusMode") === !0;
						W.$rsb.setTabFocusMode(Le);
					}
					g() {
						this.D(W.$rsb.onDidChangeTabFocus((Ce) => this.c.fire(Ce))),
							this.D(
								this.f.onDidChangeConfiguration((Ce) => {
									if (Ce.affectsConfiguration("editor.tabFocusMode")) {
										const Le = this.f.getValue("editor.tabFocusMode") === !0;
										W.$rsb.setTabFocusMode(Le), this.c.fire(Le);
									}
								}),
							);
					}
				};
				Z = Ne([j(0, L.$gj)], Z);
				const se = (0, t.localize)(3483, null),
					re = (0, t.localize)(3484, null),
					le = (0, t.localize)(3485, null),
					oe = (0, t.localize)(3486, null),
					ae = (0, t.localize)(3487, null),
					pe = (0, t.localize)(3488, null);
				let $e = class extends h.$1c {
					constructor(Ce, Le, Fe, Oe, xe, He, Ke, Je) {
						super(),
							(this.C = Ce),
							(this.F = Le),
							(this.G = Fe),
							(this.H = Oe),
							(this.I = xe),
							(this.J = He),
							(this.L = Ke),
							(this.M = Je),
							(this.c = this.D(new h.$2c())),
							(this.f = this.D(new h.$2c())),
							(this.g = this.D(new h.$2c())),
							(this.h = this.D(new h.$2c())),
							(this.j = this.D(new h.$2c())),
							(this.m = this.D(new h.$2c())),
							(this.n = this.D(new h.$2c())),
							(this.q = this.D(new h.$2c())),
							(this.s = this.D(this.L.createInstance(ue))),
							(this.t = this.D(this.L.createInstance(Z))),
							(this.u = new Q()),
							(this.w = void 0),
							(this.y = this.D(new h.$Zc())),
							(this.z = this.D(new h.$2c())),
							this.O(),
							this.N();
					}
					N() {
						this.D(this.F.onDidActiveEditorChange(() => this.db())),
							this.D(
								this.I.untitled.onDidChangeEncoding((Ce) =>
									this.lb(Ce.resource),
								),
							),
							this.D(
								this.I.files.onDidChangeEncoding((Ce) => this.lb(Ce.resource)),
							),
							this.D(
								U.Event.runAndSubscribe(this.t.onDidChange, (Ce) => {
									Ce !== void 0
										? this.mb(Ce)
										: this.mb(this.M.getValue("editor.tabFocusMode"));
								}),
							);
					}
					O() {
						this.D(
							v.$fk.registerCommand({
								id: `changeEditorIndentation${this.C}`,
								handler: () => this.P(),
							}),
						);
					}
					async P() {
						const Ce = (0, M.$btb)(this.F.activeTextEditorControl);
						if (!Ce)
							return this.G.pick([{ label: (0, t.localize)(3489, null) }]);
						if (this.F.activeEditor?.isReadonly())
							return this.G.pick([{ label: (0, t.localize)(3490, null) }]);
						const Le = [
							(0, C.$wg)(Ce.getAction(g.$Eic.ID)),
							(0, C.$wg)(Ce.getAction(g.$Dic.ID)),
							(0, C.$wg)(Ce.getAction(g.$Fic.ID)),
							(0, C.$wg)(Ce.getAction(g.$Gic.ID)),
							(0, C.$wg)(Ce.getAction(g.$Aic.ID)),
							(0, C.$wg)(Ce.getAction(g.$Bic.ID)),
							(0, C.$wg)(Ce.getAction(n.$Zic.ID)),
						].map((Oe) => ({
							id: Oe.id,
							label: Oe.label,
							detail:
								r.Language.isDefaultVariant() || Oe.label === Oe.alias
									? void 0
									: Oe.alias,
							run: () => {
								Ce.focus(), Oe.run();
							},
						}));
						return (
							Le.splice(3, 0, {
								type: "separator",
								label: (0, t.localize)(3491, null),
							}),
							Le.unshift({
								type: "separator",
								label: (0, t.localize)(3492, null),
							}),
							(
								await this.G.pick(Le, {
									placeHolder: (0, t.localize)(3493, null),
									matchOnDetail: !0,
								})
							)?.run()
						);
					}
					Q(Ce) {
						if (Ce) {
							if (!this.c.value) {
								const Le = (0, t.localize)(3494, null);
								this.c.value = this.J.addEntry(
									{
										name: (0, t.localize)(3495, null),
										text: Le,
										ariaLabel: Le,
										tooltip: (0, t.localize)(3496, null),
										command: "editor.action.toggleTabFocusMode",
										kind: "prominent",
									},
									"status.editor.tabFocusMode",
									z.StatusbarAlignment.RIGHT,
									100.7,
								);
							}
						} else this.c.clear();
					}
					R(Ce) {
						if (Ce) {
							if (!this.f.value) {
								const Le = (0, t.localize)(3497, null);
								this.f.value = this.J.addEntry(
									{
										name: (0, t.localize)(3498, null),
										text: Le,
										ariaLabel: Le,
										tooltip: (0, t.localize)(3499, null),
										command: "editor.action.toggleColumnSelection",
										kind: "prominent",
									},
									"status.editor.columnSelectionMode",
									z.StatusbarAlignment.RIGHT,
									100.8,
								);
							}
						} else this.f.clear();
					}
					S(Ce) {
						if (!Ce) {
							this.h.clear();
							return;
						}
						if (
							(0, M.$btb)(this.F.activeTextEditorControl)?.getModel()?.uri
								?.scheme === N.Schemas.vscodeNotebookCell
						) {
							this.h.clear();
							return;
						}
						const Fe = {
							name: (0, t.localize)(3500, null),
							text: Ce,
							ariaLabel: Ce,
							tooltip: (0, t.localize)(3501, null),
							command: "workbench.action.gotoLine",
						};
						this.$(
							this.h,
							Fe,
							"status.editor.selection",
							z.StatusbarAlignment.RIGHT,
							100.5,
						);
					}
					U(Ce) {
						if (!Ce) {
							this.g.clear();
							return;
						}
						if (
							(0, M.$btb)(this.F.activeTextEditorControl)?.getModel()?.uri
								?.scheme === N.Schemas.vscodeNotebookCell
						) {
							this.g.clear();
							return;
						}
						const Fe = {
							name: (0, t.localize)(3502, null),
							text: Ce,
							ariaLabel: Ce,
							tooltip: (0, t.localize)(3503, null),
							command: `changeEditorIndentation${this.C}`,
						};
						this.$(
							this.g,
							Fe,
							"status.editor.indentation",
							z.StatusbarAlignment.RIGHT,
							100.4,
						);
					}
					W(Ce) {
						if (!Ce) {
							this.j.clear();
							return;
						}
						const Le = {
							name: (0, t.localize)(3504, null),
							text: Ce,
							ariaLabel: Ce,
							tooltip: (0, t.localize)(3505, null),
							command: "workbench.action.editor.changeEncoding",
						};
						this.$(
							this.j,
							Le,
							"status.editor.encoding",
							z.StatusbarAlignment.RIGHT,
							100.3,
						);
					}
					X(Ce) {
						if (!Ce) {
							this.m.clear();
							return;
						}
						const Le = {
							name: (0, t.localize)(3506, null),
							text: Ce,
							ariaLabel: Ce,
							tooltip: (0, t.localize)(3507, null),
							command: "workbench.action.editor.changeEOL",
						};
						this.$(
							this.m,
							Le,
							"status.editor.eol",
							z.StatusbarAlignment.RIGHT,
							100.2,
						);
					}
					Y(Ce) {
						if (!Ce) {
							this.n.clear();
							return;
						}
						const Le = {
							name: (0, t.localize)(3508, null),
							text: Ce,
							ariaLabel: Ce,
							tooltip: (0, t.localize)(3509, null),
							command: "workbench.action.editor.changeLanguageMode",
						};
						this.$(
							this.n,
							Le,
							"status.editor.mode",
							z.StatusbarAlignment.RIGHT,
							100.1,
						);
					}
					Z(Ce) {
						if (!Ce) {
							this.q.clear();
							return;
						}
						const Le = {
							name: (0, t.localize)(3510, null),
							text: Ce,
							ariaLabel: Ce,
							tooltip: (0, t.localize)(3511, null),
						};
						this.$(
							this.q,
							Le,
							"status.editor.info",
							z.StatusbarAlignment.RIGHT,
							100,
						);
					}
					$(Ce, Le, Fe, Oe, xe) {
						Ce.value
							? Ce.value.update(Le)
							: (Ce.value = this.J.addEntry(Le, Fe, Oe, xe));
					}
					ab(Ce) {
						const Le = this.u.update(Ce);
						Le.hasChanges() &&
							(this.w
								? this.w.combine(Le)
								: ((this.w = Le),
									(this.z.value = (0, i.$ggb)(
										(0, i.getWindowById)(this.C, !0).window,
										() => {
											this.z.clear();
											const Fe = this.w;
											(this.w = void 0), Fe && this.bb();
										},
									))));
					}
					bb() {
						this.Q(!!this.u.tabFocusMode),
							this.R(!!this.u.columnSelectionMode),
							this.U(this.u.indentation),
							this.S(this.u.selectionStatus),
							this.W(this.u.encoding),
							this.X(
								this.u.EOL
									? this.u.EOL ===
										`\r
`
										? pe
										: ae
									: void 0,
							),
							this.Y(this.u.languageId),
							this.Z(this.u.metadata);
					}
					cb(Ce) {
						if (!(!Ce || !Ce.selections)) {
							if (Ce.selections.length === 1)
								return Ce.charactersSelected
									? (0, w.$kf)(
											se,
											Ce.selections[0].positionLineNumber,
											Ce.selections[0].positionColumn,
											Ce.charactersSelected,
										)
									: (0, w.$kf)(
											re,
											Ce.selections[0].positionLineNumber,
											Ce.selections[0].positionColumn,
										);
							if (Ce.charactersSelected)
								return (0, w.$kf)(
									le,
									Ce.selections.length,
									Ce.charactersSelected,
								);
							if (Ce.selections.length > 0)
								return (0, w.$kf)(oe, Ce.selections.length);
						}
					}
					db() {
						const Ce = this.F.activeEditor,
							Le = this.F.activeEditorPane,
							Fe = Le ? ((0, M.$btb)(Le.getControl()) ?? void 0) : void 0;
						if (
							(this.hb(Fe),
							this.ib(Fe),
							this.eb(Fe, Ce),
							this.jb(Fe),
							this.kb(Le, Fe),
							this.fb(Fe),
							this.gb(Le),
							this.s.update(Fe),
							this.y.clear(),
							Le &&
								this.y.add(
									Le.onDidChangeControl(() => {
										this.db();
									}),
								),
							Fe)
						)
							this.y.add(
								Fe.onDidChangeConfiguration((Oe) => {
									Oe.hasChanged(P.EditorOption.columnSelection) && this.hb(Fe);
								}),
							),
								this.y.add(
									U.Event.defer(Fe.onDidChangeCursorPosition)(() => {
										this.ib(Fe), this.s.update(Fe);
									}),
								),
								this.y.add(
									Fe.onDidChangeModelLanguage(() => {
										this.eb(Fe, Ce);
									}),
								),
								this.y.add(
									U.Event.accumulate(Fe.onDidChangeModelContent)((Oe) => {
										this.jb(Fe), this.s.update(Fe);
										const xe = Fe.getSelections();
										if (xe) {
											for (const He of Oe)
												for (const Ke of He.changes)
													if (
														xe.some((Je) => y.$iL.areIntersecting(Je, Ke.range))
													) {
														this.ib(Fe);
														break;
													}
										}
									}),
								),
								this.y.add(
									Fe.onDidChangeModelOptions(() => {
										this.fb(Fe);
									}),
								);
						else if (Le instanceof p.$puc || Le instanceof o.$quc) {
							const Oe = [];
							if (Le instanceof o.$quc) {
								const xe = Le.getPrimaryEditorPane();
								xe instanceof p.$puc && Oe.push(xe);
								const He = Le.getSecondaryEditorPane();
								He instanceof p.$puc && Oe.push(He);
							} else Oe.push(Le);
							for (const xe of Oe)
								this.y.add(
									xe.onDidChangeMetadata(() => {
										this.gb(Le);
									}),
								),
									this.y.add(
										xe.onDidOpenInPlace(() => {
											this.db();
										}),
									);
						}
					}
					eb(Ce, Le) {
						const Fe = { type: "languageId", languageId: void 0 };
						if (Ce && Le && _(Le)) {
							const Oe = Ce.getModel();
							if (Oe) {
								const xe = Oe.getLanguageId();
								Fe.languageId = this.H.getLanguageName(xe) ?? void 0;
							}
						}
						this.ab(Fe);
					}
					fb(Ce) {
						const Le = { type: "indentation", indentation: void 0 };
						if (Ce) {
							const Fe = Ce.getModel();
							if (Fe) {
								const Oe = Fe.getOptions();
								Le.indentation = Oe.insertSpaces
									? Oe.tabSize === Oe.indentSize
										? (0, t.localize)(3512, null, Oe.indentSize)
										: (0, t.localize)(3513, null, Oe.indentSize, Oe.tabSize)
									: (0, t.localize)(3514, null, Oe.tabSize);
							}
						}
						this.ab(Le);
					}
					gb(Ce) {
						const Le = { type: "metadata", metadata: void 0 };
						(Ce instanceof p.$puc || Ce instanceof o.$quc) &&
							(Le.metadata = Ce.getMetadata()),
							this.ab(Le);
					}
					hb(Ce) {
						const Le = { type: "columnSelectionMode", columnSelectionMode: !1 };
						Ce?.getOption(P.EditorOption.columnSelection) &&
							(Le.columnSelectionMode = !0),
							this.ab(Le);
					}
					ib(Ce) {
						const Le = Object.create(null);
						if (Ce) {
							(Le.selections = Ce.getSelections() || []),
								(Le.charactersSelected = 0);
							const Fe = Ce.getModel();
							if (Fe)
								for (const Oe of Le.selections)
									typeof Le.charactersSelected != "number" &&
										(Le.charactersSelected = 0),
										(Le.charactersSelected += Fe.getCharacterCountInRange(Oe));
							if (Le.selections.length === 1) {
								const Oe = Ce.getPosition(),
									xe = new $.$kL(
										Le.selections[0].selectionStartLineNumber,
										Le.selections[0].selectionStartColumn,
										Le.selections[0].positionLineNumber,
										Oe
											? Ce.getStatusbarColumn(Oe)
											: Le.selections[0].positionColumn,
									);
								Le.selections[0] = xe;
							}
						}
						this.ab({ type: "selectionStatus", selectionStatus: this.cb(Le) });
					}
					jb(Ce) {
						const Le = { type: "EOL", EOL: void 0 };
						if (Ce && !Ce.getOption(P.EditorOption.readOnly)) {
							const Fe = Ce.getModel();
							Fe && (Le.EOL = Fe.getEOL());
						}
						this.ab(Le);
					}
					kb(Ce, Le) {
						if (Ce && !this.nb(Ce)) return;
						const Fe = { type: "encoding", encoding: void 0 };
						if (Ce && Le?.hasModel()) {
							const Oe = Ce.input ? ee(Ce.input) : null;
							if (Oe) {
								const xe = Oe.getEncoding(),
									He = typeof xe == "string" ? T.$4Y[xe] : void 0;
								He ? (Fe.encoding = He.labelShort) : (Fe.encoding = xe);
							}
						}
						this.ab(Fe);
					}
					lb(Ce) {
						const Le = this.F.activeEditorPane;
						if (Le) {
							const Fe = a.$A1.getCanonicalUri(Le.input, {
								supportSideBySide: a.SideBySideEditor.PRIMARY,
							});
							if (Fe && (0, E.$gh)(Fe, Ce)) {
								const Oe = (0, M.$btb)(Le.getControl()) ?? void 0;
								return this.kb(Le, Oe);
							}
						}
					}
					mb(Ce) {
						const Le = { type: "tabFocusMode", tabFocusMode: Ce };
						this.ab(Le);
					}
					nb(Ce) {
						const Le = this.F.activeEditorPane;
						return !!Le && Le === Ce;
					}
				};
				$e = Ne(
					[
						j(1, f.$IY),
						j(2, R.$DJ),
						j(3, l.$nM),
						j(4, I.$kZ),
						j(5, z.$d6b),
						j(6, s.$Li),
						j(7, L.$gj),
					],
					$e,
				);
				let ye = class extends h.$1c {
					static {
						this.ID = "workbench.contrib.editorStatus";
					}
					constructor(Ce) {
						super(), (this.c = Ce);
						for (const Le of Ce.parts) this.f(Le);
						this.D(Ce.onDidCreateAuxiliaryEditorPart((Le) => this.f(Le)));
					}
					f(Ce) {
						const Le = new h.$Zc();
						U.Event.once(Ce.onWillDispose)(() => Le.dispose());
						const Fe = this.c.getScopedInstantiationService(Ce);
						Le.add(Fe.createInstance($e, Ce.windowId));
					}
				};
				(e.$ruc = ye), (e.$ruc = ye = Ne([j(0, X.$EY)], ye));
				let ue = class extends h.$1c {
					constructor(Ce, Le, Fe) {
						super(),
							(this.j = Ce),
							(this.m = Le),
							(this.n = Fe),
							(this.f = void 0),
							(this.g = []),
							(this.h = null),
							(this.c = this.D(new h.$2c())),
							this.D(Le.onMarkerChanged((Oe) => this.w(Oe))),
							this.D(
								U.Event.filter(Fe.onDidChangeConfiguration, (Oe) =>
									Oe.affectsConfiguration("problems.showCurrentInStatus"),
								)(() => this.q()),
							);
					}
					update(Ce) {
						(this.f = Ce), this.y(), this.q();
					}
					q() {
						const Ce = this.h;
						if (((this.h = this.u()), this.s(Ce, this.h)))
							if (this.h) {
								const Le = (0, w.$zf)(this.h.message)[0],
									Fe = `${this.t(this.h)} ${Le}`;
								this.c.value ||
									(this.c.value = this.j.addEntry(
										{
											name: (0, t.localize)(3515, null),
											text: "",
											ariaLabel: "",
										},
										"statusbar.currentProblem",
										z.StatusbarAlignment.LEFT,
									)),
									this.c.value.update({
										name: (0, t.localize)(3516, null),
										text: Fe,
										ariaLabel: Fe,
									});
							} else this.c.clear();
					}
					s(Ce, Le) {
						return !Le || !Ce
							? !0
							: F.IMarkerData.makeKey(Ce) !== F.IMarkerData.makeKey(Le);
					}
					t(Ce) {
						switch (Ce.severity) {
							case F.MarkerSeverity.Error:
								return "$(error)";
							case F.MarkerSeverity.Warning:
								return "$(warning)";
							case F.MarkerSeverity.Info:
								return "$(info)";
						}
						return "";
					}
					u() {
						if (
							!this.n.getValue("problems.showCurrentInStatus") ||
							!this.f ||
							!this.f.getModel()
						)
							return null;
						const Le = this.f.getPosition();
						return (
							(Le && this.g.find((Fe) => y.$iL.containsPosition(Fe, Le))) ||
							null
						);
					}
					w(Ce) {
						if (!this.f) return;
						const Le = this.f.getModel();
						Le &&
							((Le && !Ce.some((Fe) => (0, E.$gh)(Le.uri, Fe))) || this.y());
					}
					y() {
						if (!this.f) return;
						const Ce = this.f.getModel();
						Ce &&
							(Ce
								? ((this.g = this.m.read({
										resource: Ce.uri,
										severities:
											F.MarkerSeverity.Error |
											F.MarkerSeverity.Warning |
											F.MarkerSeverity.Info,
									})),
									this.g.sort(this.z))
								: (this.g = []),
							this.q());
					}
					z(Ce, Le) {
						let Fe = (0, w.$Ff)(Ce.resource.toString(), Le.resource.toString());
						return (
							Fe === 0 &&
								(Fe = F.MarkerSeverity.compare(Ce.severity, Le.severity)),
							Fe === 0 && (Fe = y.$iL.compareRangesUsingStarts(Ce, Le)),
							Fe
						);
					}
				};
				ue = Ne([j(0, z.$d6b), j(1, F.$aM), j(2, L.$gj)], ue);
				let fe = class extends m.$rj {
					static {
						Y = this;
					}
					static {
						this.ID = "workbench.action.showLanguageExtensions";
					}
					constructor(Ce, Le, Fe) {
						super(Y.ID, (0, t.localize)(3517, null, Ce)),
							(this.c = Ce),
							(this.f = Le),
							(this.enabled = Fe.isEnabled());
					}
					async run() {
						await this.f.executeCommand(
							"workbench.extensions.action.showExtensionsForLanguage",
							this.c,
						);
					}
				};
				(e.$suc = fe), (e.$suc = fe = Y = Ne([j(1, v.$ek), j(2, S.$Ep)], fe));
				class me extends G.$3X {
					static {
						this.ID = "workbench.action.editor.changeLanguageMode";
					}
					constructor() {
						super({
							id: me.ID,
							title: (0, t.localize2)(3542, "Change Language Mode"),
							f1: !0,
							keybinding: {
								weight: K.KeybindingWeight.WorkbenchContrib,
								primary: (0, J.$os)(J.$ps, J.KeyCode.KeyM),
								mac: { primary: (0, J.$os)(J.$qs, J.KeyCode.KeyM) },
							},
							precondition: V.$Kj.not("notebookEditorFocused"),
							metadata: {
								description: (0, t.localize)(3518, null),
								args: [
									{
										name: (0, t.localize)(3519, null),
										constraint: (Ce) => typeof Ce == "string",
									},
								],
							},
						});
					}
					async run(Ce, Le) {
						const Fe = Ce.get(R.$DJ),
							Oe = Ce.get(f.$IY),
							xe = Ce.get(l.$nM),
							He = Ce.get(q.$RO),
							Ke = Ce.get(I.$kZ),
							Je = Ce.get(A.$7Z),
							Te = Ce.get(s.$Li),
							Ee = Ce.get(L.$gj),
							Ie = Ce.get(x.$km),
							Be = (0, M.$btb)(Oe.activeTextEditorControl);
						if (!Be) {
							await Fe.pick([{ label: (0, t.localize)(3520, null) }]);
							return;
						}
						const Se = Be.getModel(),
							ke = a.$A1.getOriginalUri(Oe.activeEditor, {
								supportSideBySide: a.SideBySideEditor.PRIMARY,
							});
						let Ue, qe;
						Se &&
							((qe = Se.getLanguageId()),
							(Ue = xe.getLanguageName(qe) ?? void 0));
						let Ae = !!ke;
						ke?.scheme === N.Schemas.untitled &&
							!Ke.untitled.get(ke)?.hasAssociatedFilePath &&
							(Ae = !1);
						const De = xe
							.getSortedRegisteredLanguageNames()
							.map(({ languageName: ft, languageId: bt }) => {
								const nt = xe.getExtensions(bt).join(" ");
								let lt;
								return (
									Ue === ft
										? (lt = (0, t.localize)(3521, null, bt))
										: (lt = (0, t.localize)(3522, null, bt)),
									{
										label: ft,
										meta: nt,
										iconClasses: (0, O.$CDb)(bt),
										description: lt,
									}
								);
							});
						De.unshift({
							type: "separator",
							label: (0, t.localize)(3523, null),
						});
						let Re, je, Ve;
						if (Ae && ke) {
							const ft = (0, E.$lh)(ke) || (0, E.$kh)(ke);
							(Ve = Te.createInstance(fe, ft)),
								Ve.enabled && De.unshift(Ve),
								(je = { label: (0, t.localize)(3524, null, Ue) }),
								De.unshift(je),
								(Re = { label: (0, t.localize)(3525, null, ft) }),
								De.unshift(Re);
						}
						const Ze = { label: (0, t.localize)(3526, null) };
						De.unshift(Ze);
						const et =
							typeof Le == "string"
								? { label: Le }
								: await Fe.pick(De, {
										placeHolder: (0, t.localize)(3527, null),
										matchOnDescription: !0,
									});
						if (!et) return;
						if (et === Ve) {
							Ve.run();
							return;
						}
						if (et === Re) {
							ke && this.c(ke, xe, Fe, Ee);
							return;
						}
						if (et === je) {
							Je.openUserSettings({
								jsonEditor: !0,
								revealSetting: { key: `[${qe ?? null}]`, edit: !0 },
							});
							return;
						}
						const rt = Oe.activeEditor;
						if (rt) {
							const ft = _(rt);
							if (ft) {
								let bt, nt;
								if (et === Ze) {
									if (Se) {
										const lt = a.$A1.getOriginalUri(rt, {
											supportSideBySide: a.SideBySideEditor.PRIMARY,
										});
										if (lt) {
											let ct =
												xe.guessLanguageIdByFilepathOrFirstLine(
													lt,
													Se.getLineContent(1),
												) ?? void 0;
											(!ct || ct === "unknown") &&
												((nt = await He.detectLanguage(lt)), (ct = nt)),
												ct && (bt = xe.createById(ct));
										}
									}
								} else {
									const lt = xe.getLanguageIdByLanguageName(et.label);
									(bt = xe.createById(lt)),
										ke &&
											He.detectLanguage(ke).then((ct) => {
												const gt =
													xe.getLanguageIdByLanguageName(et.label) || "unknown";
												if (ct === qe && qe !== gt) {
													const ht = Ee.getValue(
														"workbench.editor.preferHistoryBasedLanguageDetection",
													)
														? "history"
														: "classic";
													Ie.publicLog2(q.$TO, {
														currentLanguageId: Ue ?? "unknown",
														nextLanguageId: et.label,
														lineCount: Se?.getLineCount() ?? -1,
														modelPreference: ht,
													});
												}
											});
								}
								if (
									typeof bt < "u" &&
									(ft.setLanguageId(bt.languageId, me.ID),
									ke?.scheme === N.Schemas.untitled)
								) {
									const lt = Ee.getValue(
										"workbench.editor.preferHistoryBasedLanguageDetection",
									)
										? "history"
										: "classic";
									Ie.publicLog2("setUntitledDocumentLanguage", {
										to: bt.languageId,
										from: qe ?? "none",
										modelPreference: lt,
									});
								}
							}
							Be.focus();
						}
					}
					c(Ce, Le, Fe, Oe) {
						const xe = (0, E.$lh)(Ce),
							He = (0, E.$kh)(Ce),
							Ke = Le.guessLanguageIdByFilepathOrFirstLine(d.URI.file(He)),
							Te = Le.getSortedRegisteredLanguageNames().map(
								({ languageName: Ee, languageId: Ie }) => ({
									id: Ie,
									label: Ee,
									iconClasses: (0, O.$CDb)(Ie),
									description: Ie === Ke ? (0, t.localize)(3528, null) : void 0,
								}),
							);
						setTimeout(async () => {
							const Ee = await Fe.pick(Te, {
								placeHolder: (0, t.localize)(3529, null, xe || He),
							});
							if (Ee) {
								const Ie = Oe.inspect(b.$Ll);
								let Be;
								xe && He[0] !== "." ? (Be = `*${xe}`) : (Be = He);
								let Se = L.ConfigurationTarget.USER;
								Ie.workspaceValue &&
									Ie.workspaceValue[Be] &&
									(Se = L.ConfigurationTarget.WORKSPACE);
								const ke =
									(0, D.$vo)(
										Se === L.ConfigurationTarget.WORKSPACE
											? Ie.workspaceValue
											: Ie.userValue,
									) || Object.create(null);
								(ke[Be] = Ee.id), Oe.updateValue(b.$Ll, ke, Se);
							}
						}, 50);
					}
				}
				e.$tuc = me;
				class ve extends G.$3X {
					constructor() {
						super({
							id: "workbench.action.editor.changeEOL",
							title: (0, t.localize2)(3543, "Change End of Line Sequence"),
							f1: !0,
						});
					}
					async run(Ce) {
						const Le = Ce.get(f.$IY),
							Fe = Ce.get(R.$DJ),
							Oe = (0, M.$btb)(Le.activeTextEditorControl);
						if (!Oe) {
							await Fe.pick([{ label: (0, t.localize)(3530, null) }]);
							return;
						}
						if (Le.activeEditor?.isReadonly()) {
							await Fe.pick([{ label: (0, t.localize)(3531, null) }]);
							return;
						}
						let xe = Oe.getModel();
						const He = [
								{ label: ae, eol: c.EndOfLineSequence.LF },
								{ label: pe, eol: c.EndOfLineSequence.CRLF },
							],
							Ke =
								xe?.getEOL() ===
								`
`
									? 0
									: 1,
							Je = await Fe.pick(He, {
								placeHolder: (0, t.localize)(3532, null),
								activeItem: He[Ke],
							});
						if (Je) {
							const Te = (0, M.$btb)(Le.activeTextEditorControl);
							Te?.hasModel() &&
								!Le.activeEditor?.isReadonly() &&
								((xe = Te.getModel()),
								xe.pushStackElement(),
								xe.pushEOL(Je.eol),
								xe.pushStackElement());
						}
						Oe.focus();
					}
				}
				e.$uuc = ve;
				class ge extends G.$3X {
					constructor() {
						super({
							id: "workbench.action.editor.changeEncoding",
							title: (0, t.localize2)(3544, "Change File Encoding"),
							f1: !0,
						});
					}
					async run(Ce) {
						const Le = Ce.get(f.$IY),
							Fe = Ce.get(R.$DJ),
							Oe = Ce.get(b.$ll),
							xe = Ce.get(I.$kZ),
							He = Ce.get(k.$XO),
							Ke = (0, M.$btb)(Le.activeTextEditorControl);
						if (!Ke) {
							await Fe.pick([{ label: (0, t.localize)(3533, null) }]);
							return;
						}
						const Je = Le.activeEditorPane;
						if (!Je) {
							await Fe.pick([{ label: (0, t.localize)(3534, null) }]);
							return;
						}
						const Te = ee(Je.input);
						if (!Te) {
							await Fe.pick([{ label: (0, t.localize)(3535, null) }]);
							return;
						}
						const Ee = { label: (0, t.localize)(3536, null) },
							Ie = { label: (0, t.localize)(3537, null) };
						if (!r.Language.isDefaultVariant()) {
							const Ze = "Save with Encoding";
							Ze !== Ee.label && (Ee.detail = Ze);
							const et = "Reopen with Encoding";
							et !== Ie.label && (Ie.detail = et);
						}
						let Be;
						if (
							(Te instanceof u.$T1b
								? (Be = Ee)
								: Je.input.isReadonly()
									? (Be = Ie)
									: (Be = await Fe.pick([Ie, Ee], {
											placeHolder: (0, t.localize)(3538, null),
											matchOnDetail: !0,
										})),
							!Be)
						)
							return;
						await (0, B.$Nh)(50);
						const Se = a.$A1.getOriginalUri(Je.input, {
							supportSideBySide: a.SideBySideEditor.PRIMARY,
						});
						if (
							!Se ||
							(!Oe.hasProvider(Se) && Se.scheme !== N.Schemas.untitled)
						)
							return;
						let ke;
						Oe.hasProvider(Se) &&
							(ke = (
								await xe.readStream(Se, {
									autoGuessEncoding: !0,
									candidateGuessEncodings: He.getValue(
										Se,
										"files.candidateGuessEncodings",
									),
								})
							).encoding);
						const Ue = Be === Ie,
							qe = He.getValue(Se, "files.encoding");
						let Ae, Me;
						const De = Object.keys(T.$4Y)
								.sort((Ze, et) =>
									Ze === qe
										? -1
										: et === qe
											? 1
											: T.$4Y[Ze].order - T.$4Y[et].order,
								)
								.filter((Ze) =>
									Ze === ke && ke !== qe ? !1 : !Ue || !T.$4Y[Ze].encodeOnly,
								)
								.map(
									(Ze, et) => (
										Ze === Te.getEncoding()
											? (Ae = et)
											: T.$4Y[Ze].alias === Te.getEncoding() && (Me = et),
										{ id: Ze, label: T.$4Y[Ze].labelLong, description: Ze }
									),
								),
							Re = De.slice();
						ke &&
							qe !== ke &&
							T.$4Y[ke] &&
							(De.unshift({ type: "separator" }),
							De.unshift({
								id: ke,
								label: T.$4Y[ke].labelLong,
								description: (0, t.localize)(3539, null),
							}));
						const je = await Fe.pick(De, {
							placeHolder: Ue
								? (0, t.localize)(3540, null)
								: (0, t.localize)(3541, null),
							activeItem:
								Re[
									typeof Ae == "number" ? Ae : typeof Me == "number" ? Me : -1
								],
						});
						if (!je || !Le.activeEditorPane) return;
						const Ve = ee(Le.activeEditorPane.input);
						typeof je.id < "u" &&
							Ve &&
							(await Ve.setEncoding(
								je.id,
								Ue ? I.EncodingMode.Decode : I.EncodingMode.Encode,
							)),
							Ke.focus();
					}
				}
				e.$vuc = ge;
			},
		),
		define(
			de[718],
			he([
				1, 0, 4, 82, 6, 28, 3, 44, 192, 1016, 21, 5, 32, 35, 125, 66, 18, 116,
				22,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f) {
				"use strict";
				var b;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$CVb = e.$BVb = void 0);
				let s = class extends r.$zVb {
					static {
						b = this;
					}
					static {
						this.qb = "textEditorViewState";
					}
					constructor($, v, S, I, T, P, k, L, D, M) {
						super($, v, b.qb, S, I, T, P, k, L, D),
							(this.xb = M),
							(this.rb = this.D(new w.$re())),
							(this.onDidChangeSelection = this.rb.event),
							(this.sb = this.D(new w.$re())),
							(this.onDidChangeScroll = this.sb.event),
							(this.wb = this.D(new C.$2c())),
							this.D(this.s.onDidChangeConfiguration((N) => this.yb(N))),
							this.D(
								w.Event.any(
									this.cb.onDidAddGroup,
									this.cb.onDidRemoveGroup,
								)(() => {
									const N = this.Cb();
									this.tb?.setAttribute("aria-label", N),
										this.Mb({ ariaLabel: N });
								}),
							),
							this.D(
								this.xb.onDidChangeFileSystemProviderCapabilities((N) =>
									this.Db(N.scheme),
								),
							),
							this.D(
								this.xb.onDidChangeFileSystemProviderRegistrations((N) =>
									this.Db(N.scheme),
								),
							);
					}
					yb($) {
						const v = this.Rb();
						this.zb($, v) && (this.isVisible() ? this.Qb(v) : (this.ub = !0));
					}
					zb($, v) {
						return (
							$.affectsConfiguration(v, "editor") ||
							$.affectsConfiguration(v, "problems.visibility")
						);
					}
					Ab() {
						this.ub && (this.Qb(), (this.ub = !1));
					}
					Bb($) {
						const v = (0, E.$ng)($.editor)
							? (0, i.$vo)($.editor)
							: Object.create(null);
						return Object.assign(v, this.Hb($)), (v.ariaLabel = this.Cb()), v;
					}
					Cb() {
						return this.input
							? (0, m.$yVb)(this.input, void 0, this.group, this.cb.count)
							: (0, t.localize)(3553, null);
					}
					Db($) {
						this.input && this.Rb()?.scheme === $ && this.Fb(this.input);
					}
					Eb($) {
						this.input === $ && this.Fb($);
					}
					Fb($) {
						this.Mb({ ...this.Gb($.isReadonly()) });
					}
					Gb($) {
						return {
							readOnly: !!$,
							readOnlyMessage: typeof $ != "boolean" ? $ : void 0,
						};
					}
					Hb($) {
						return {
							overviewRulerLanes: 3,
							lineNumbersMinChars: 3,
							fixedOverflowWidgets: !0,
							...this.Gb(this.input?.isReadonly()),
							renderValidationDecorations:
								$.problems?.visibility !== !1 ? "on" : "off",
						};
					}
					Y($) {
						(this.tb = $),
							this.Lb($, this.Bb(this.s.getValue(this.Rb()))),
							this.Jb();
					}
					Jb() {
						const $ = this.Nb();
						$ &&
							(this.D($.onDidChangeModelLanguage(() => this.Qb())),
							this.D($.onDidChangeModel(() => this.Qb())),
							this.D(
								$.onDidChangeCursorPosition((v) =>
									this.rb.fire({ reason: this.Kb(v) }),
								),
							),
							this.D(
								$.onDidChangeModelContent(() =>
									this.rb.fire({
										reason: d.EditorPaneSelectionChangeReason.EDIT,
									}),
								),
							),
							this.D($.onDidScrollChange(() => this.sb.fire())));
					}
					Kb($) {
						switch ($.source) {
							case o.TextEditorSelectionSource.PROGRAMMATIC:
								return d.EditorPaneSelectionChangeReason.PROGRAMMATIC;
							case o.TextEditorSelectionSource.NAVIGATION:
								return d.EditorPaneSelectionChangeReason.NAVIGATION;
							case o.TextEditorSelectionSource.JUMP:
								return d.EditorPaneSelectionChangeReason.JUMP;
							default:
								return d.EditorPaneSelectionChangeReason.USER;
						}
					}
					getSelection() {
						const $ = this.Nb();
						if ($) {
							const v = $.getSelection();
							if (v) return new l(v);
						}
					}
					async setInput($, v, S, I) {
						await super.setInput($, v, S, I),
							(this.wb.value = $.onDidChangeCapabilities(() => this.Eb($))),
							this.Qb(),
							(0, E.$wg)(this.tb).setAttribute("aria-label", this.Cb());
					}
					clearInput() {
						this.wb.clear(), super.clearInput();
					}
					getScrollPosition() {
						const $ = this.Nb();
						if (!$) throw new Error("Control has not yet been initialized");
						return {
							scrollTop: $.getScrollTop() - $.getTopForLineNumber(1),
							scrollLeft: $.getScrollLeft(),
						};
					}
					setScrollPosition($) {
						const v = this.Nb();
						if (!v) throw new Error("Control has not yet been initialized");
						v.setScrollTop($.scrollTop),
							$.scrollLeft && v.setScrollLeft($.scrollLeft);
					}
					Z($) {
						$ && this.Ab(), super.Z($);
					}
					pb($) {
						return $.resource;
					}
					Qb($ = this.Rb()) {
						let v;
						if (($ && (v = this.s.getValue($)), !v)) return;
						const S = this.Bb(v);
						let I = S;
						this.vb && (I = (0, i.$Bo)(this.vb, I)),
							Object.keys(I).length > 0 && ((this.vb = S), this.Mb(I));
					}
					Rb() {
						const $ = this.Nb();
						if ($) {
							const v = $.getModel();
							if (v) return v.uri;
						}
						if (this.input) return this.input.resource;
					}
					dispose() {
						(this.vb = void 0), super.dispose();
					}
				};
				(e.$BVb = s),
					(e.$BVb =
						s =
						b =
							Ne(
								[
									j(2, h.$km),
									j(3, a.$Li),
									j(4, u.$lq),
									j(5, n.$XO),
									j(6, c.$iP),
									j(7, p.$IY),
									j(8, g.$EY),
									j(9, f.$ll),
								],
								s,
							));
				class l {
					static {
						this.a = 10;
					}
					constructor($) {
						this.b = $;
					}
					compare($) {
						if (!($ instanceof l))
							return d.EditorPaneSelectionCompareResult.DIFFERENT;
						const v = Math.min(
								this.b.selectionStartLineNumber,
								this.b.positionLineNumber,
							),
							S = Math.min(
								$.b.selectionStartLineNumber,
								$.b.positionLineNumber,
							);
						return v === S
							? d.EditorPaneSelectionCompareResult.IDENTICAL
							: Math.abs(v - S) < l.a
								? d.EditorPaneSelectionCompareResult.SIMILAR
								: d.EditorPaneSelectionCompareResult.DIFFERENT;
					}
					restore($) {
						return {
							...$,
							selection: this.b,
							selectionRevealType:
								o.TextEditorSelectionRevealType.CenterIfOutsideViewport,
						};
					}
					getSelection() {
						return this.b;
					}
					log() {
						return `line: ${this.b.startLineNumber}-${this.b.endLineNumber}, col:  ${this.b.startColumn}-${this.b.endColumn}`;
					}
				}
				e.$CVb = l;
			},
		),
		define(
			de[1337],
			he([1, 0, 4, 28, 549, 8, 19, 206, 98, 718]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$lec = void 0);
				class u extends r.$BVb {
					constructor() {
						super(...arguments), (this.a = void 0);
					}
					get scopedContextKeyService() {
						return this.a?.invokeWithinContext((h) => h.get(E.$6j));
					}
					getTitle() {
						return this.input
							? this.input.getName()
							: (0, t.localize)(3549, null);
					}
					Lb(h, c) {
						this.a = this.D(this.m.createInstance(d.$rwb, h, c, this.Sb()));
					}
					Sb() {
						return Object.create(null);
					}
					Mb(h) {
						this.a?.updateOptions(h);
					}
					Nb() {
						return this.a;
					}
					getControl() {
						return this.a;
					}
					mb(h) {
						if (!this.a) return;
						const c = this.a.getModel();
						if (!c) return;
						const n = c.uri;
						if (n && (0, C.$gh)(n, h)) return this.a.saveViewState() ?? void 0;
					}
					setOptions(h) {
						super.setOptions(h),
							h &&
								(0, w.applyTextEditorOptions)(
									h,
									(0, i.$wg)(this.a),
									m.ScrollType.Smooth,
								);
					}
					focus() {
						super.focus(), this.a?.focus();
					}
					hasFocus() {
						return this.a?.hasTextFocus() || super.hasFocus();
					}
					Z(h) {
						super.Z(h), h ? this.a?.onVisible() : this.a?.onHide();
					}
					layout(h) {
						this.a?.layout(h);
					}
				}
				e.$lec = u;
			},
		),
		define(
			de[1338],
			he([
				1, 0, 4, 82, 28, 718, 44, 549, 296, 1226, 32, 21, 125, 5, 35, 85, 98,
				30, 9, 66, 18, 116, 8, 19, 7, 22, 131, 162, 309,
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
					(e.$IVb = void 0);
				let L = class extends E.$BVb {
					static {
						k = this;
					}
					static {
						this.ID = C.$d1;
					}
					get scopedContextKeyService() {
						if (!this.a) return;
						const M = this.a.getOriginalEditor(),
							N = this.a.getModifiedEditor();
						return (M.hasTextFocus() ? M : N).invokeWithinContext((A) =>
							A.get(y.$6j),
						);
					}
					constructor(M, N, A, R, O, B, U, z, F, x) {
						super(k.ID, M, N, A, R, O, U, B, z, F),
							(this.f = x),
							(this.a = void 0),
							(this.c = void 0),
							(this.Tb = null);
					}
					getTitle() {
						return this.input
							? this.input.getName()
							: (0, t.localize)(3550, null);
					}
					Lb(M, N) {
						this.a = this.D(this.m.createInstance(P.$3yb, M, N, {}));
					}
					Mb(M) {
						this.a?.updateOptions(M);
					}
					Nb() {
						return this.a?.getModifiedEditor();
					}
					async setInput(M, N, A, R) {
						this.Tb && (this.Tb.dispose(), (this.Tb = null)),
							(this.c = void 0),
							await super.setInput(M, N, A, R);
						try {
							const O = await M.resolve();
							if (R.isCancellationRequested) return;
							if (!(O instanceof r.$FVb)) {
								this.Wb(M, N);
								return;
							}
							const B = (0, w.$wg)(this.a),
								U = O,
								z = U.textDiffEditorModel
									? B.createViewModel(U.textDiffEditorModel)
									: null;
							(this.Tb = z), await z?.waitForDiff(), B.setModel(z);
							let F = !1;
							(0, C.$C1)(N?.viewState) || (F = this.Vb(M, N, A, B));
							let x = !1;
							N &&
								(x = (0, d.applyTextEditorOptions)(
									N,
									B,
									p.ScrollType.Immediate,
								)),
								!x && !F && B.revealFirstDiff(),
								B.updateOptions({
									...this.Gb(U.modifiedModel?.isReadonly()),
									originalEditable: !U.originalModel?.isReadonly(),
								}),
								B.handleInitialized(),
								(this.c = new T.$le(!1));
						} catch (O) {
							await this.Ub(O, M, N);
						}
					}
					async Ub(M, N, A) {
						if (this.ac(M)) return this.Wb(N, A);
						if (
							M.fileOperationResult === S.FileOperationResult.FILE_TOO_LARGE
						) {
							let R;
							throw (
								(M instanceof S.$Hl
									? (R = (0, t.localize)(3551, null, S.$Tl.formatSize(M.size)))
									: (R = (0, t.localize)(3552, null)),
								(0, C.$u1)(this.group, N, A, R, this.f))
							);
						}
						throw M;
					}
					Vb(M, N, A, R) {
						const O = this.jb(M, A);
						return O
							? (N?.selection && O.modified && (O.modified.cursorState = []),
								R.restoreViewState(O),
								N?.revealIfVisible && R.revealFirstDiff(),
								!0)
							: !1;
					}
					Wb(M, N) {
						const A = M.original,
							R = M.modified,
							O = this.m.createInstance(
								m.$GVb,
								M.getName(),
								M.getDescription(),
								A,
								R,
								!0,
							),
							B = o.$Io.as(C.$a1.EditorFactory).getFileEditorFactory();
						B.isFileEditor(A) && A.setForceOpenAsBinary(),
							B.isFileEditor(R) && R.setForceOpenAsBinary(),
							this.group.replaceEditors([
								{
									editor: M,
									replacement: O,
									options: {
										...N,
										activation: l.EditorActivation.PRESERVE,
										pinned: this.group.isPinned(M),
										sticky: this.group.isSticky(M),
									},
								},
							]);
					}
					setOptions(M) {
						super.setOptions(M),
							M &&
								(0, d.applyTextEditorOptions)(
									M,
									(0, w.$wg)(this.a),
									p.ScrollType.Smooth,
								);
					}
					zb(M, N) {
						return super.zb(M, N)
							? !0
							: M.affectsConfiguration(N, "diffEditor") ||
									M.affectsConfiguration(
										N,
										"accessibility.verbosity.diffEditor",
									);
					}
					Bb(M) {
						const N = super.Bb(M);
						if ((0, w.$ng)(M.diffEditor)) {
							const R = (0, i.$vo)(M.diffEditor);
							(R.diffCodeLens = R.codeLens),
								delete R.codeLens,
								(R.diffWordWrap = R.wordWrap),
								delete R.wordWrap,
								Object.assign(N, R);
						}
						const A = M.accessibility?.verbosity?.diffEditor ?? !1;
						return (N.accessibilityVerbose = A), N;
					}
					Hb(M) {
						return {
							...super.Hb(M),
							...this.Gb(this.input?.isReadonly()),
							originalEditable:
								this.input instanceof m.$GVb &&
								!this.input.original.isReadonly(),
							lineDecorationsWidth: "2ch",
						};
					}
					Fb(M) {
						M instanceof m.$GVb
							? this.a?.updateOptions({
									...this.Gb(M.isReadonly()),
									originalEditable: !M.original.isReadonly(),
								})
							: super.Fb(M);
					}
					ac(M) {
						return Array.isArray(M)
							? M.some((A) => this.ac(A))
							: M.textFileOperationResult ===
									g.TextFileOperationResult.FILE_IS_BINARY;
					}
					clearInput() {
						this.Tb && (this.Tb.dispose(), (this.Tb = null)),
							super.clearInput();
						const M = this.c?.elapsed();
						(this.c = void 0),
							typeof M == "number" &&
								this.bc(
									M,
									this.getControl()?.getModel()?.modified?.getLanguageId(),
								),
							this.a?.setModel(null);
					}
					bc(M, N) {
						let A = !1;
						this.a instanceof P.$3yb && (A = this.a.collapseUnchangedRegions),
							this.Q.publicLog2("diffEditor.editorVisibleTime", {
								editorVisibleTimeMs: M,
								languageId: N ?? "",
								collapseUnchangedRegions: A,
							});
					}
					getControl() {
						return this.a;
					}
					focus() {
						super.focus(), this.a?.focus();
					}
					hasFocus() {
						return this.a?.hasTextFocus() || super.hasFocus();
					}
					Z(M) {
						super.Z(M), M ? this.a?.onVisible() : this.a?.onHide();
					}
					layout(M) {
						this.a?.layout(M);
					}
					setBoundarySashes(M) {
						this.a?.setBoundarySashes(M);
					}
					nb(M) {
						return M instanceof m.$GVb;
					}
					mb(M) {
						if (!this.a) return;
						const N = this.a.getModel();
						if (!N || !N.modified || !N.original) return;
						const A = this.pb(N);
						if (A && (0, $.$gh)(A, M)) return this.a.saveViewState() ?? void 0;
					}
					pb(M) {
						let N, A;
						if (
							(M instanceof m.$GVb
								? ((N = M.original.resource), (A = M.modified.resource))
								: (0, C.$r1)(M) || ((N = M.original.uri), (A = M.modified.uri)),
							!(!N || !A))
						)
							return f.URI.from({
								scheme: "diff",
								path: `${(0, v.$Ehb)(N.toString())}${(0, v.$Ehb)(A.toString())}`,
							});
					}
				};
				(e.$IVb = L),
					(e.$IVb =
						L =
						k =
							Ne(
								[
									j(1, u.$km),
									j(2, c.$Li),
									j(3, a.$lq),
									j(4, h.$XO),
									j(5, s.$IY),
									j(6, n.$iP),
									j(7, b.$EY),
									j(8, S.$ll),
									j(9, I.$7Z),
								],
								L,
							));
			},
		),
		define(
			de[1916],
			he([1, 0, 27, 19, 9, 125, 4, 11, 8, 43, 1338, 100, 296, 18]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$RVb =
						e.$QVb =
						e.$PVb =
						e.$OVb =
						e.$NVb =
						e.$MVb =
						e.$LVb =
						e.$KVb =
						e.$JVb =
							void 0),
					(e.$SVb = n),
					(e.$JVb = "toggle.diff.renderSideBySide"),
					(e.$KVb = "workbench.action.compareEditor.nextChange"),
					(e.$LVb = "workbench.action.compareEditor.previousChange"),
					(e.$MVb = "workbench.action.compareEditor.focusPrimarySide"),
					(e.$NVb = "workbench.action.compareEditor.focusSecondarySide"),
					(e.$OVb = "workbench.action.compareEditor.focusOtherSide"),
					(e.$PVb = "workbench.action.compareEditor.openSide"),
					(e.$QVb = "toggle.diff.ignoreTrimWhitespace"),
					(e.$RVb = "workbench.action.compareEditor.swapSides");
				function n() {
					r.$TX.registerCommandAndKeybindingRule({
						id: e.$KVb,
						weight: r.KeybindingWeight.WorkbenchContrib,
						when: a.$VPb,
						primary: t.KeyMod.Alt | t.KeyCode.F5,
						handler: (y, ...$) => p(y, $, !0),
					}),
						d.$ZX.appendMenuItem(d.$XX.CommandPalette, {
							command: {
								id: e.$KVb,
								title: (0, C.localize2)(3122, "Go to Next Change"),
							},
						}),
						r.$TX.registerCommandAndKeybindingRule({
							id: e.$LVb,
							weight: r.KeybindingWeight.WorkbenchContrib,
							when: a.$VPb,
							primary: t.KeyMod.Alt | t.KeyMod.Shift | t.KeyCode.F5,
							handler: (y, ...$) => p(y, $, !1),
						}),
						d.$ZX.appendMenuItem(d.$XX.CommandPalette, {
							command: {
								id: e.$LVb,
								title: (0, C.localize2)(3123, "Go to Previous Change"),
							},
						});
					function g(y, $) {
						const v = y.get(c.$IY),
							S = $.length > 0 && $[0] instanceof w.URI ? $[0] : void 0;
						for (const I of [v.activeEditorPane, ...v.visibleEditorPanes])
							if (
								I instanceof u.$IVb &&
								(!S ||
									(I.input instanceof h.$GVb &&
										(0, i.$gh)(I.input.primary.resource, S)))
							)
								return I;
					}
					function p(y, $, v) {
						const S = g(y, $);
						S && S.getControl()?.goToDiff(v ? "next" : "previous");
					}
					let o;
					(function (y) {
						(y[(y.Original = 0)] = "Original"),
							(y[(y.Modified = 1)] = "Modified"),
							(y[(y.Toggle = 2)] = "Toggle");
					})(o || (o = {}));
					function f(y, $, v) {
						const S = g(y, $);
						if (S)
							switch (v) {
								case o.Original:
									S.getControl()?.getOriginalEditor().focus();
									break;
								case o.Modified:
									S.getControl()?.getModifiedEditor().focus();
									break;
								case o.Toggle:
									return S.getControl()?.getModifiedEditor().hasWidgetFocus()
										? f(y, $, o.Original)
										: f(y, $, o.Modified);
							}
					}
					function b(y, $) {
						const v = y.get(E.$XO),
							I = g(y, $)?.getControl()?.getModifiedEditor()?.getModel();
						if (!I) return;
						const T = "diffEditor.renderSideBySide",
							P = v.getValue(I.uri, T);
						v.updateValue(I.uri, T, !P);
					}
					function s(y, $) {
						const v = y.get(E.$XO),
							I = g(y, $)?.getControl()?.getModifiedEditor()?.getModel();
						if (!I) return;
						const T = "diffEditor.ignoreTrimWhitespace",
							P = v.getValue(I.uri, T);
						v.updateValue(I.uri, T, !P);
					}
					async function l(y, $) {
						const v = y.get(c.$IY),
							S = g(y, $),
							I = S?.group,
							T = S?.input;
						if (
							!S ||
							typeof I > "u" ||
							!(T instanceof h.$GVb) ||
							!T.modified.resource
						)
							return;
						const P = T.toUntyped({
							preserveViewState: I.id,
							preserveResource: !0,
						});
						P &&
							(T.modified.isModified() &&
								v.findEditors({
									resource: T.modified.resource,
									typeId: T.modified.typeId,
									editorId: T.modified.editorId,
								}).length === 0 &&
								(await v.openEditor(
									{
										...P.modified,
										options: {
											...P.modified.options,
											pinned: !0,
											inactive: !0,
										},
									},
									I,
								)),
							await v.replaceEditors(
								[
									{
										editor: T,
										replacement: {
											...P,
											original: P.modified,
											modified: P.original,
											options: { ...P.options, pinned: !0 },
										},
									},
								],
								I,
							));
					}
					r.$TX.registerCommandAndKeybindingRule({
						id: e.$JVb,
						weight: r.KeybindingWeight.WorkbenchContrib,
						when: void 0,
						primary: void 0,
						handler: (y, ...$) => b(y, $),
					}),
						r.$TX.registerCommandAndKeybindingRule({
							id: e.$MVb,
							weight: r.KeybindingWeight.WorkbenchContrib,
							when: void 0,
							primary: void 0,
							handler: (y, ...$) => f(y, $, o.Modified),
						}),
						r.$TX.registerCommandAndKeybindingRule({
							id: e.$NVb,
							weight: r.KeybindingWeight.WorkbenchContrib,
							when: void 0,
							primary: void 0,
							handler: (y, ...$) => f(y, $, o.Original),
						}),
						r.$TX.registerCommandAndKeybindingRule({
							id: e.$OVb,
							weight: r.KeybindingWeight.WorkbenchContrib,
							when: void 0,
							primary: void 0,
							handler: (y, ...$) => f(y, $, o.Toggle),
						}),
						r.$TX.registerCommandAndKeybindingRule({
							id: e.$QVb,
							weight: r.KeybindingWeight.WorkbenchContrib,
							when: void 0,
							primary: void 0,
							handler: (y, ...$) => s(y, $),
						}),
						r.$TX.registerCommandAndKeybindingRule({
							id: e.$RVb,
							weight: r.KeybindingWeight.WorkbenchContrib,
							when: void 0,
							primary: void 0,
							handler: (y, ...$) => l(y, $),
						}),
						d.$ZX.appendMenuItem(d.$XX.CommandPalette, {
							command: {
								id: e.$JVb,
								title: (0, C.localize2)(3124, "Toggle Inline View"),
								category: (0, C.localize)(3120, null),
							},
							when: a.$WPb,
						}),
						d.$ZX.appendMenuItem(d.$XX.CommandPalette, {
							command: {
								id: e.$RVb,
								title: (0, C.localize2)(
									3125,
									"Swap Left and Right Editor Side",
								),
								category: (0, C.localize)(3121, null),
							},
							when: m.$Kj.and(a.$WPb, a.$PPb),
						});
				}
			},
		),
		define(
			de[1917],
			he([
				1, 0, 28, 44, 549, 478, 702, 628, 1337, 32, 21, 125, 5, 35, 98, 66, 18,
				67, 61, 172, 38, 64, 22,
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
					(e.$luc = e.$kuc = void 0);
				let v = class extends m.$lec {
					constructor(T, P, k, L, D, M, N, A, R, O) {
						super(T, P, k, L, D, M, N, R, A, O);
					}
					async setInput(T, P, k, L) {
						await super.setInput(T, P, k, L);
						const D = await T.resolve();
						if (L.isCancellationRequested) return;
						if (!(D instanceof C.$VO))
							throw new Error("Unable to open file as text");
						const M = (0, t.$wg)(this.a),
							N = D.textEditorModel;
						if ((M.setModel(N), !(0, i.$C1)(P?.viewState))) {
							const A = this.jb(T, k);
							A &&
								(P?.selection && (A.cursorState = []), M.restoreViewState(A));
						}
						P && (0, w.applyTextEditorOptions)(P, M, n.ScrollType.Immediate),
							M.updateOptions(this.Gb(D.isReadonly()));
					}
					revealLastLine() {
						const T = this.a;
						if (!T) return;
						const P = T.getModel();
						if (P) {
							const k = P.getLineCount();
							T.revealPosition(
								{ lineNumber: k, column: P.getLineMaxColumn(k) },
								n.ScrollType.Smooth,
							);
						}
					}
					clearInput() {
						super.clearInput(), this.a?.setModel(null);
					}
					nb(T) {
						return T instanceof d.$T1b || T instanceof E.$S1b;
					}
				};
				(e.$kuc = v),
					(e.$kuc = v =
						Ne(
							[
								j(2, r.$km),
								j(3, h.$Li),
								j(4, u.$lq),
								j(5, a.$XO),
								j(6, c.$iP),
								j(7, g.$EY),
								j(8, p.$IY),
								j(9, y.$ll),
							],
							v,
						));
				let S = class extends v {
					static {
						$ = this;
					}
					static {
						this.ID = "workbench.editors.textResourceEditor";
					}
					constructor(T, P, k, L, D, M, N, A, R, O, B) {
						super($.ID, T, P, k, L, D, M, A, N, B), (this.$ = R), (this.Xb = O);
					}
					Lb(T, P) {
						super.Lb(T, P);
						const k = this.a;
						k && this.D(k.onDidPaste((L) => this.Zb(L, k)));
					}
					Zb(T, P) {
						if (
							(this.input instanceof d.$T1b &&
								this.input.hasLanguageSetExplicitly) ||
							T.range.startLineNumber !== 1 ||
							T.range.startColumn !== 1 ||
							P.getOption(s.EditorOption.readOnly)
						)
							return;
						const k = P.getModel();
						if (
							!k ||
							!(
								k.getLineCount() === T.range.endLineNumber &&
								k.getLineMaxColumn(T.range.endLineNumber) === T.range.endColumn
							) ||
							k.getLanguageId() !== b.$0M
						)
							return;
						let M;
						if (T.languageId) M = { id: T.languageId, source: "event" };
						else {
							const N =
								this.Xb.guessLanguageIdByFilepathOrFirstLine(
									k.uri,
									k
										.getLineContent(1)
										.substr(
											0,
											l.ModelConstants.FIRST_LINE_DETECTION_LENGTH_LIMIT,
										),
								) ?? void 0;
							N && (M = { id: N, source: "guess" });
						}
						if (M && M.id !== b.$0M) {
							this.input instanceof d.$T1b && M.source === "event"
								? this.input.setLanguageId(M.id)
								: k.setLanguage(this.Xb.createById(M.id));
							const N = this.$.getCreationOptions(
								k.getLanguageId(),
								k.uri,
								k.isForSimpleWidget,
							);
							k.detectIndentation(N.insertSpaces, N.tabSize);
						}
					}
				};
				(e.$luc = S),
					(e.$luc =
						S =
						$ =
							Ne(
								[
									j(1, r.$km),
									j(2, h.$Li),
									j(3, u.$lq),
									j(4, a.$XO),
									j(5, c.$iP),
									j(6, p.$IY),
									j(7, g.$EY),
									j(8, o.$QO),
									j(9, f.$nM),
									j(10, y.$ll),
								],
								S,
							));
			},
		),
		