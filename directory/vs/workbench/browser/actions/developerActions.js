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
		