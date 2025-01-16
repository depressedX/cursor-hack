define(
			de[3530],
			he([
				1, 0, 7, 267, 50, 3, 221, 4, 92, 173, 11, 8, 5, 41, 63, 26, 60, 141,
				108, 284, 294, 70, 190, 161, 142, 1845, 1837, 77, 176,
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
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Z3b = void 0),
					(t = mt(t)),
					(d = mt(d));
				let k = class extends E.$1c {
					constructor(R, O, B, U, z, F, x, H, q, V, G) {
						super(),
							(this.g = R),
							(this.h = O),
							(this.j = B),
							(this.n = U),
							(this.output = z),
							(this.q = F),
							(this.r = x),
							(this.s = q),
							(this.t = V),
							(this.u = G),
							(this.b = this.D(new E.$Zc())),
							(this.f = !1),
							(this.L = null),
							(this.c = H),
							this.D(
								this.output.model.onDidChangeData(() => {
									this.rerender();
								}),
							),
							this.D(
								this.output.onDidResetRenderer(() => {
									this.rerender();
								}),
							);
					}
					detach() {
						this.renderedOutputContainer?.remove();
						let R = 0;
						if (this.innerContainer) {
							for (
								let O = 0;
								O < this.innerContainer.childNodes.length &&
								(this.innerContainer.childNodes[O].className ===
									"rendered-output" && R++,
								!(R > 1));
								O++
							);
							R === 0 && this.innerContainer.remove();
						}
						this.g.removeInset(this.output);
					}
					updateDOMTop(R) {
						this.innerContainer && (this.innerContainer.style.top = `${R}px`);
					}
					rerender() {
						if (
							this.g.hasModel() &&
							this.innerContainer &&
							this.renderResult &&
							this.renderResult.type === f.RenderOutputType.Extension
						) {
							const [R, O] = this.output.resolveMimeTypes(
									this.g.textModel,
									this.g.activeKernel?.preloadProvides,
								),
								B = R[O];
							if (
								B.mimeType === this.renderResult.mimeType &&
								B.rendererId === this.renderResult.renderer.id
							) {
								const U = this.h.outputsViewModels.indexOf(this.output);
								this.g.updateOutput(
									this.h,
									this.renderResult,
									this.h.getOutputOffset(U),
								);
								return;
							}
						}
						if (this.innerContainer) {
							const R = this.innerContainer.nextElementSibling;
							this.b.clear();
							const O = this.innerContainer;
							O && (O.remove(), this.g.removeInset(this.output)),
								this.render(R);
						} else {
							const R = this.j.renderedOutputEntries.findIndex(
									(B) => B.element === this,
								),
								O =
									R > 0 &&
									this.j.renderedOutputEntries[R - 1].element.innerContainer
										?.parentElement
										? this.j.renderedOutputEntries[R - 1].element.innerContainer
										: void 0;
							this.render(O);
						}
						this.N();
					}
					w(R, O) {
						return (
							(this.innerContainer = t.$(".output-inner-container")),
							R && R.nextElementSibling
								? this.n.domNode.insertBefore(
										this.innerContainer,
										R.nextElementSibling,
									)
								: this.n.domNode.appendChild(this.innerContainer),
							this.innerContainer.setAttribute("output-mime-type", O.mimeType),
							this.innerContainer
						);
					}
					render(R) {
						const O = this.h.outputsViewModels.indexOf(this.output);
						if (this.h.isOutputCollapsed || !this.g.hasModel()) {
							this.j.flagAsStale();
							return;
						}
						if (!l.CellUri.parse(this.h.uri)?.notebook) return;
						const U = this.g.textModel,
							[z, F] = this.output.resolveMimeTypes(
								U,
								this.g.activeKernel?.preloadProvides,
							);
						if (!z.find((V) => V.isTrusted) || z.length === 0) {
							this.h.updateOutputHeight(O, 0, "CellOutputElement#noMimeType");
							return;
						}
						const x = z[F];
						let H = this.q.getRendererInfo(x.rendererId);
						!H &&
							x.mimeType.indexOf("text/") > -1 &&
							(H = this.q.getRendererInfo("vscode.builtin-renderer"));
						const q = this.w(R, x);
						if (
							(O === 0 || this.output.visible.get()
								? this.G(q, U, this.g.activeKernel, O, z)
								: (this.D(
										(0, T.autorun)((V) => {
											const G = V.readObservable(this.output.visible);
											G && !this.f
												? this.G(q, U, this.g.activeKernel, O, z)
												: G || this.b.clear(),
												this.j.checkForHiddenOutputs();
										}),
									),
									this.j.hasHiddenOutputs.set(!0, void 0)),
							(this.renderedOutputContainer = t.$fhb(
								q,
								t.$(".rendered-output"),
							)),
							(this.renderResult = H
								? {
										type: f.RenderOutputType.Extension,
										renderer: H,
										source: this.output,
										mimeType: x.mimeType,
									}
								: this.y(this.output, x.mimeType)),
							(this.output.pickedMimeType = x),
							!this.renderResult)
						) {
							this.h.updateOutputHeight(
								O,
								0,
								"CellOutputElement#renderResultUndefined",
							);
							return;
						}
						return (
							this.g.createOutput(
								this.h,
								this.renderResult,
								this.h.getOutputOffset(O),
								!1,
							),
							q.classList.add("background"),
							{ initRenderIsSynchronous: !1 }
						);
					}
					y(R, O) {
						if (!R.model.outputs.length)
							return this.C(R, d.localize(8188, null));
						if (!O) {
							const U = R.model.outputs.map((z) => z.mime).join(", ");
							return this.C(R, d.localize(8189, null, U));
						}
						return this.z(R, O);
					}
					z(R, O) {
						const B = `@tag:notebookRenderer ${O}`,
							U = t.$(
								"p",
								void 0,
								`No renderer could be found for mimetype "${O}", but one might be available on the Marketplace.`,
							),
							z = t.$(
								"a",
								{
									href: `command:workbench.extensions.search?%22${B}%22`,
									class: "monaco-button monaco-text-button",
									tabindex: 0,
									role: "button",
									style:
										"padding: 8px; text-decoration: none; color: rgb(255, 255, 255); background-color: rgb(14, 99, 156); max-width: 200px;",
								},
								"Search Marketplace",
							);
						return {
							type: f.RenderOutputType.Html,
							source: R,
							htmlContent: U.outerHTML + z.outerHTML,
						};
					}
					C(R, O) {
						const B = t.$("p", void 0, O);
						return {
							type: f.RenderOutputType.Html,
							source: R,
							htmlContent: B.outerHTML,
						};
					}
					F(R) {
						if (
							!R.find(
								(O) =>
									I.$W3b.indexOf(O.mimeType) || O.mimeType.startsWith("image/"),
							)
						)
							return !1;
						if ((0, l.$76)(R[0].mimeType)) {
							const O = this.output.cellViewModel,
								B = O.outputsViewModels.indexOf(this.output);
							if (B > 0) {
								const U = O.model.outputs[B - 1];
								return !(0, l.$76)(U.outputs[0].mime);
							}
						}
						return !0;
					}
					async G(R, O, B, U, z) {
						const F = z.filter((Y) => Y.isTrusted).length > 1,
							x = this.F(z);
						if ((U > 0 && !F && !x) || !this.g.hasModel()) return;
						R.style.position = "relative";
						const H = t.$(".cell-output-toolbar");
						R.appendChild(H);
						const q = this.b.add(
							this.u.createInstance(r.$Syb, H, {
								renderDropdownAsChildElement: !1,
							}),
						);
						q.context = {
							ui: !0,
							cell: this.output.cellViewModel,
							outputViewModel: this.output,
							notebookEditor: this.g,
							$mid: C.MarshalledId.NotebookCellActionContext,
						};
						const V = this.b.add(
								new w.$rj(
									"notebook.output.pickMimetype",
									d.localize(8190, null),
									g.ThemeIcon.asClassName(b.$qOb),
									void 0,
									async (Y) => this.H(R, O, B, this.output),
								),
							),
							G = this.b.add(this.c.createScoped(R)),
							K = P.$MJb.bindTo(G);
						P.$LJb.bindTo(G).set(U === 0),
							this.b.add(
								(0, T.autorun)((Y) => {
									K.set(Y.readObservable(this.j.hasHiddenOutputs));
								}),
							);
						const W = this.b.add(
								this.s.createMenu(u.$XX.NotebookOutputToolbar, G),
							),
							X = () => {
								const Y = [];
								let ie = [];
								const ne = { primary: Y, secondary: ie };
								(0, m.$Kyb)(W, { shouldForwardArgs: !0 }, ne, () => !1),
									x || (ie = ie.filter((ee) => ee.id !== S.$X3b)),
									F && (ie = [V, ...ie]),
									q.setActions([], ie);
							};
						X(), this.b.add(W.onDidChange(X));
					}
					async H(R, O, B, U) {
						const [z, F] = U.resolveMimeTypes(O, B?.preloadProvides),
							x = [],
							H = [];
						z.forEach((Y, ie) => {
							Y.isTrusted &&
								(Y.rendererId === l.$X6 ? H : x).push({
									label: Y.mimeType,
									id: Y.mimeType,
									index: ie,
									picked: ie === F,
									detail: this.J(Y.rendererId),
									description: ie === F ? d.localize(8191, null) : void 0,
								});
						}),
							H.some((Y) => N.includes(Y.id)) &&
								H.push({
									label: d.localize(8192, null),
									id: "installRenderers",
									index: z.length,
								});
						const q = new E.$Zc(),
							V = q.add(this.r.createQuickPick({ useSeparators: !0 }));
						(V.items = [...x, { type: "separator" }, ...H]),
							(V.activeItems = x.filter((Y) => !!Y.picked)),
							(V.placeholder =
								x.length !== z.length
									? d.localize(8193, null)
									: d.localize(8194, null));
						const G = await new Promise((Y) => {
							q.add(
								V.onDidAccept(() => {
									Y(V.selectedItems.length === 1 ? V.selectedItems[0] : void 0),
										q.dispose();
								}),
							),
								V.show();
						});
						if (G === void 0 || G.index === F) return;
						if (G.id === "installRenderers") {
							this.I();
							return;
						}
						const K = R.nextElementSibling;
						this.b.clear();
						const J = this.innerContainer;
						J && (J.remove(), this.g.removeInset(U)),
							(U.pickedMimeType = z[G.index]),
							this.h.updateOutputMinHeight(this.h.layoutInfo.outputTotalHeight);
						const { mimeType: W, rendererId: X } = z[G.index];
						this.q.updateMimePreferredRenderer(
							O.viewType,
							W,
							X,
							z.map((Y) => Y.mimeType),
						),
							this.render(K),
							this.M(!1),
							this.N();
					}
					async I() {
						(
							await this.t.openPaneComposite(
								o.$LQb,
								p.ViewContainerLocation.Sidebar,
								!0,
							)
						)
							?.getViewPaneContainer()
							?.search(`@id:${f.$bJb}`);
					}
					J(R) {
						const O = this.q.getRendererInfo(R);
						return O
							? `${O.displayName !== "" ? O.displayName : O.id} (${O.extensionId.value})`
							: d.localize(8195, null);
					}
					M(R) {
						this.L !== null && clearTimeout(this.L),
							R
								? this.h.unlockOutputHeight()
								: (this.L = setTimeout(() => {
										this.h.unlockOutputHeight();
									}, 1e3));
					}
					N() {
						this.g.layoutNotebookCell(this.h, this.h.layoutInfo.totalHeight);
					}
					dispose() {
						this.L && (this.h.unlockOutputHeight(), clearTimeout(this.L)),
							super.dispose();
					}
				};
				k = Ne(
					[
						j(5, $.$MIb),
						j(6, n.$DJ),
						j(7, a.$6j),
						j(8, u.$YX),
						j(9, v.$6Sb),
						j(10, h.$Li),
					],
					k,
				);
				class L {
					constructor(R, O) {
						(this.model = R), (this.element = O);
					}
				}
				var D;
				(function (A) {
					(A[(A.Execution = 1)] = "Execution"), (A[(A.Other = 2)] = "Other");
				})(D || (D = {}));
				let M = class extends s.$A1b {
					checkForHiddenOutputs() {
						this.b.find((R) => R.model.visible)
							? this.hasHiddenOutputs.set(!0, void 0)
							: this.hasHiddenOutputs.set(!1, void 0);
					}
					get renderedOutputEntries() {
						return this.b;
					}
					constructor(R, O, B, U, z, F, x) {
						super(),
							(this.h = R),
							(this.j = O),
							(this.n = B),
							(this.q = U),
							(this.r = z),
							(this.s = F),
							(this.t = x),
							(this.b = []),
							(this.g = !1),
							(this.hasHiddenOutputs = (0, T.observableValue)(
								"hasHiddenOutputs",
								!1,
							)),
							(this.w = null),
							this.D(
								O.onDidStartExecution(() => {
									O.updateOutputMinHeight(O.layoutInfo.outputTotalHeight);
								}),
							),
							this.D(
								O.onDidStopExecution(() => {
									this.y(!1);
								}),
							),
							this.D(
								O.onDidChangeOutputs((H) => {
									const V = this.s.getCellExecution(O.uri)
										? D.Execution
										: D.Other;
									this.z(H, V);
								}),
							),
							this.D(
								O.onDidChangeLayout(() => {
									this.updateInternalLayoutNow(O);
								}),
							);
					}
					updateInternalLayoutNow(R) {
						this.n.outputContainer.setTop(R.layoutInfo.outputContainerOffset),
							this.n.outputShowMoreContainer.setTop(
								R.layoutInfo.outputShowMoreContainerOffset,
							),
							this.b.forEach((O) => {
								const B = this.j.outputsViewModels.indexOf(O.model);
								if (B >= 0) {
									const U = this.j.getOutputOffsetInContainer(B);
									O.element.updateDOMTop(U);
								}
							});
					}
					render() {
						try {
							this.u();
						} finally {
							this.G();
						}
					}
					flagAsStale() {
						this.g = !0;
					}
					u() {
						if (this.j.outputsViewModels.length > 0) {
							this.j.layoutInfo.outputTotalHeight !== 0 &&
								this.j.updateOutputMinHeight(
									this.j.layoutInfo.outputTotalHeight,
								),
								t.show(this.n.outputContainer.domNode);
							for (
								let R = 0;
								R < Math.min(this.q.limit, this.j.outputsViewModels.length);
								R++
							) {
								const O = this.j.outputsViewModels[R],
									B = this.t.createInstance(
										k,
										this.h,
										this.j,
										this,
										this.n.outputContainer,
										O,
									);
								this.b.push(new L(O, B)), B.render(void 0);
							}
							this.j.outputsViewModels.length > this.q.limit &&
								(t.show(this.n.outputShowMoreContainer.domNode),
								this.j.updateOutputShowMoreContainerHeight(46)),
								this.y(!1);
						} else t.hide(this.n.outputContainer.domNode);
						(this.n.outputShowMoreContainer.domNode.innerText = ""),
							this.j.outputsViewModels.length > this.q.limit
								? this.n.outputShowMoreContainer.domNode.appendChild(
										this.F(this.n.templateDisposables),
									)
								: (t.hide(this.n.outputShowMoreContainer.domNode),
									this.j.updateOutputShowMoreContainerHeight(0));
					}
					viewUpdateShowOutputs(R) {
						this.g &&
							((this.g = !1),
							this.b.forEach((O) => {
								O.element.rerender();
							}));
						for (let O = 0; O < this.b.length; O++) {
							const U = this.b[O].element;
							U.renderResult
								? this.h.createOutput(
										this.j,
										U.renderResult,
										this.j.getOutputOffset(O),
										!1,
									)
								: U.render(void 0);
						}
						this.G();
					}
					viewUpdateHideOuputs() {
						for (let R = 0; R < this.b.length; R++)
							this.h.hideInset(this.b[R].model);
					}
					y(R) {
						this.w !== null && clearTimeout(this.w);
						const O = this.s.getCellExecution(this.j.uri);
						R
							? this.j.unlockOutputHeight()
							: O?.state !== l.NotebookCellExecutionState.Executing &&
								(this.w = setTimeout(() => {
									this.j.unlockOutputHeight();
								}, 200));
					}
					z(R, O = D.Other) {
						const B = this.j.layoutInfo.outputTotalHeight;
						this.j.updateOutputMinHeight(B),
							this.j.outputsViewModels.length
								? t.show(this.n.outputContainer.domNode)
								: t.hide(this.n.outputContainer.domNode),
							this.j.spliceOutputHeights(
								R.start,
								R.deleteCount,
								R.newOutputs.map((U) => 0),
							),
							this.C(R, O);
					}
					C(R, O) {
						if (R.start >= this.q.limit) return;
						const B = this.b.slice(0, R.start),
							U = this.b.slice(R.start, R.start + R.deleteCount),
							z = this.b.slice(R.start + R.deleteCount);
						let F = this.j.outputsViewModels.slice(
							R.start,
							R.start + R.newOutputs.length,
						);
						if (B.length + F.length + z.length > this.q.limit)
							if (B.length + F.length > this.q.limit) {
								[...U, ...z].forEach((H) => {
									H.element.detach(), H.element.dispose();
								}),
									(F = F.slice(0, this.q.limit - B.length));
								const x = F.map(
									(H) =>
										new L(
											H,
											this.t.createInstance(
												k,
												this.h,
												this.j,
												this,
												this.n.outputContainer,
												H,
											),
										),
								);
								this.b = [...B, ...x];
								for (let H = B.length; H < this.b.length; H++)
									this.b[H].element.render(void 0);
							} else {
								const x = z.slice(this.q.limit - B.length - F.length);
								[...U, ...x].forEach((V) => {
									V.element.detach(), V.element.dispose();
								});
								const H = B.length + F.length,
									q = F.map(
										(V) =>
											new L(
												V,
												this.t.createInstance(
													k,
													this.h,
													this.j,
													this,
													this.n.outputContainer,
													V,
												),
											),
									);
								this.b = [
									...B,
									...q,
									...z.slice(0, this.q.limit - B.length - F.length),
								];
								for (let V = B.length; V < H; V++) {
									const G =
										V - 1 >= 0 &&
										this.b[V - 1] &&
										this.b[V - 1].element.innerContainer?.parentElement
											? this.b[V - 1].element.innerContainer
											: void 0;
									this.b[V].element.render(G);
								}
							}
						else {
							U.forEach((V) => {
								V.element.detach(), V.element.dispose();
							});
							const x = B.length + F.length,
								H = F.map(
									(V) =>
										new L(
											V,
											this.t.createInstance(
												k,
												this.h,
												this.j,
												this,
												this.n.outputContainer,
												V,
											),
										),
								);
							let q = [];
							if (
								B.length + H.length + z.length <
								this.j.outputsViewModels.length
							) {
								const V = Math.min(
									this.q.limit,
									this.j.outputsViewModels.length,
								);
								q = this.j.outputsViewModels
									.slice(B.length + H.length + z.length, V)
									.map(
										(G) =>
											new L(
												G,
												this.t.createInstance(
													k,
													this.h,
													this.j,
													this,
													this.n.outputContainer,
													G,
												),
											),
									);
							}
							this.b = [...B, ...H, ...z, ...q];
							for (let V = B.length; V < x; V++) {
								const G =
									V - 1 >= 0 &&
									this.b[V - 1] &&
									this.b[V - 1].element.innerContainer?.parentElement
										? this.b[V - 1].element.innerContainer
										: void 0;
								this.b[V].element.render(G);
							}
							for (let V = 0; V < q.length; V++)
								this.b[B.length + F.length + z.length + V].element.render(
									void 0,
								);
						}
						this.j.outputsViewModels.length > this.q.limit
							? (t.show(this.n.outputShowMoreContainer.domNode),
								this.n.outputShowMoreContainer.domNode.hasChildNodes() ||
									this.n.outputShowMoreContainer.domNode.appendChild(
										this.F(this.n.templateDisposables),
									),
								this.j.updateOutputShowMoreContainerHeight(46))
							: t.hide(this.n.outputShowMoreContainer.domNode),
							this.G(),
							this.y(O === D.Other && this.j.outputsViewModels.length === 0);
					}
					F(R) {
						const O = {
								value: `There are more than ${this.q.limit} outputs, [show more (open the raw output data in a text editor) ...](command:workbench.action.openLargeOutput)`,
								isTrusted: !0,
								supportThemeIcons: !0,
							},
							B = (0, i.$Uib)(O, {
								actionHandler: {
									callback: (U) => {
										U === "command:workbench.action.openLargeOutput" &&
											this.r.open(
												l.CellUri.generateCellOutputUri(this.h.textModel.uri),
											);
									},
									disposables: R,
								},
							});
						return (
							R.add(B), B.element.classList.add("output-show-more"), B.element
						);
					}
					G() {
						this.h.layoutNotebookCell(this.j, this.j.layoutInfo.totalHeight);
					}
					dispose() {
						this.j.updateOutputMinHeight(0),
							this.w && clearTimeout(this.w),
							this.b.forEach((R) => {
								R.element.dispose();
							}),
							super.dispose();
					}
				};
				(e.$Z3b = M),
					(e.$Z3b = M = Ne([j(4, c.$7rb), j(5, y.$d6), j(6, h.$Li)], M));
				const N = [
					"application/geo+json",
					"application/vdom.v1+json",
					"application/vnd.dataresource+json",
					"application/vnd.plotly.v1+json",
					"application/vnd.vega.v2+json",
					"application/vnd.vega.v3+json",
					"application/vnd.vega.v4+json",
					"application/vnd.vega.v5+json",
					"application/vnd.vegalite.v1+json",
					"application/vnd.vegalite.v2+json",
					"application/vnd.vegalite.v3+json",
					"application/vnd.vegalite.v4+json",
					"application/x-nteract-model-debug+json",
					"image/svg+xml",
					"text/latex",
					"text/vnd.plotly.v1+html",
					"application/vnd.jupyter.widget-view+json",
					"application/vnd.code.notebook.error",
				];
			},
		),
		