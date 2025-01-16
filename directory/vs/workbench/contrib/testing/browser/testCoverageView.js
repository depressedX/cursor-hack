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
		