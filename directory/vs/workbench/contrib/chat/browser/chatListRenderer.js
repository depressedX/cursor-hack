define(
			de[1954],
			he([
				1, 0, 7, 595, 114, 437, 95, 24, 14, 6, 94, 27, 3, 59, 23, 201, 77, 26,
				9, 4, 92, 173, 11, 31, 10, 8, 49, 72, 5, 128, 34, 212, 35, 1328, 208,
				1353, 3679, 3262, 3014, 3015, 4064, 1721, 1946, 4023, 3762, 4024, 3008,
				1720, 1354, 3277, 845, 207, 329, 218, 283, 790, 376, 982,
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
			) {
				"use strict";
				var se;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$$Xb = e.$0Xb = e.$9Xb = void 0),
					(t = mt(t));
				const re = t.$,
					le = !1;
				let oe = class extends h.$1c {
					static {
						se = this;
					}
					static {
						this.ID = "item";
					}
					constructor(ue, fe, me, ve, ge, be, Ce, Le, Fe, Oe, xe, He, Ke) {
						super(),
							(this.z = fe),
							(this.C = me),
							(this.F = ve),
							(this.G = ge),
							(this.H = Ce),
							(this.I = Fe),
							(this.J = Oe),
							(this.L = xe),
							(this.M = He),
							(this.N = Ke),
							(this.a = new Map()),
							(this.b = new c.$Gc()),
							(this.c = new Map()),
							(this.f = new Map()),
							(this.j = this.D(new r.$re())),
							(this.onDidClickFollowup = this.j.event),
							(this.m = new r.$re()),
							(this.onDidClickRerunWithAgentOrCommandDetection = this.m.event),
							(this.n = this.D(new r.$re())),
							(this.onDidChangeItemHeight = this.n.event),
							(this.u = 0),
							(this.w = !0),
							(this.y = this.D(new r.$re())),
							(this.g = this.D(this.H.createInstance(X.$3Xb, void 0))),
							(this.h = this.H.createInstance(W.$qUb)),
							(this.q = this.D(this.H.createInstance(F.$tUb, ue, ve, be))),
							(this.r = this.D(this.H.createInstance(V.$NXb, ue, ve, be))),
							(this.s = this.D(this.H.createInstance(G.$PXb, this.y.event))),
							(this.t = this.D(this.H.createInstance(H.$KXb, this.y.event))),
							this.D(this.H.createInstance(Y.$DYb));
					}
					get templateId() {
						return se.ID;
					}
					editorsInUse() {
						return this.q.inUse();
					}
					O(ue, fe) {
						le
							? this.I.info(`ChatListItemRenderer#${ue}: ${fe}`)
							: this.I.trace(`ChatListItemRenderer#${ue}: ${fe}`);
					}
					P(ue) {
						if (ue.isComplete) return 80;
						if (
							ue.contentUpdateTimings &&
							ue.contentUpdateTimings.impliedWordLoadRate
						) {
							const ve = ue.contentUpdateTimings.impliedWordLoadRate;
							return (0, g.$Zm)(ve, 5, 80);
						}
						return 8;
					}
					getCodeBlockInfosForResponse(ue) {
						return this.a.get(ue.id) ?? [];
					}
					getCodeBlockInfoForEditor(ue) {
						return this.b.get(ue);
					}
					getFileTreeInfosForResponse(ue) {
						return this.c.get(ue.id) ?? [];
					}
					getLastFocusedFileTreeForResponse(ue) {
						const fe = this.c.get(ue.id),
							me = this.f.get(ue.id);
						if (fe?.length && me !== void 0 && me < fe.length) return fe[me];
					}
					setVisible(ue) {
						(this.w = ue), this.y.fire(ue);
					}
					layout(ue) {
						this.u = ue - (this.C.noPadding ? 0 : 40);
						for (const fe of this.q.inUse()) fe.layout(this.u);
						for (const fe of this.r.inUse()) fe.layout(this.u);
					}
					renderTemplate(ue) {
						const fe = new h.$Zc(),
							me = t.$fhb(ue, re(".interactive-item-container"));
						this.C.renderStyle === "compact" &&
							me.classList.add("interactive-item-compact"),
							this.C.noPadding && me.classList.add("no-padding");
						let ve = me,
							ge = me,
							be,
							Ce;
						if (this.C.renderStyle === "minimal") {
							me.classList.add("interactive-item-compact"),
								me.classList.add("minimal");
							const qe = t.$fhb(me, re(".column.left")),
								Ae = t.$fhb(me, re(".column.right"));
							(ve = qe), (be = Ae), (ge = Ae), (Ce = t.$fhb(me, re(".header")));
						}
						const Le = t.$fhb(ve, re(".header")),
							Fe = t.$fhb(Le, re(".user"));
						(Fe.tabIndex = 0), (Fe.role = "toolbar");
						const Oe = t.$fhb(Fe, re(".avatar-container")),
							xe = t.$fhb(Fe, re("h3.username")),
							He = t.$fhb(be ?? Fe, re("span.detail-container")),
							Ke = t.$fhb(He, re("span.detail"));
						t.$fhb(He, re("span.chat-animated-ellipsis"));
						const Je = t.$fhb(ge, re(".value")),
							Te = new h.$Zc(),
							Ee = fe.add(this.J.createScoped(me)),
							Ie = fe.add(this.H.createChild(new k.$Ki([S.$6j, Ee]))),
							Be = fe.add(this.H.createInstance(R.$2Tb)),
							Se = () => {
								if (
									(0, _.$$Tb)(Ue.currentElement) &&
									Ue.currentElement.agent &&
									!Ue.currentElement.agent.isDefault
								)
									return Be.setAgent(Ue.currentElement.agent.id), Be.domNode;
							},
							ke = (0, R.$3Tb)(
								() =>
									(0, _.$$Tb)(Ue.currentElement)
										? Ue.currentElement.agent
										: void 0,
								this.M,
							);
						fe.add(
							this.N.setupManagedHover((0, C.$cib)("element"), Fe, Se, ke),
						),
							fe.add(
								t.$0fb(Fe, t.$$gb.KEY_DOWN, (qe) => {
									const Ae = new w.$7fb(qe);
									if (
										Ae.equals(a.KeyCode.Space) ||
										Ae.equals(a.KeyCode.Enter)
									) {
										const Me = Se();
										Me &&
											this.N.showHover(
												{
													content: Me,
													target: Fe,
													trapFocus: !0,
													actions: ke.actions,
												},
												!0,
											);
									} else Ae.equals(a.KeyCode.Escape) && this.N.hideHover();
								}),
							);
						const Ue = {
							avatarContainer: Oe,
							username: xe,
							detail: Ke,
							value: Je,
							rowContainer: me,
							elementDisposables: Te,
							templateDisposables: fe,
							contextKeyService: Ee,
							instantiationService: Ie,
							agentHover: Be,
						};
						return (
							this.C.noHeader
								? Le.classList.add("hidden")
								: (Ue.titleToolbar = fe.add(
										Ie.createInstance(
											l.$Tyb,
											Ce ?? Le,
											y.$XX.ChatMessageTitle,
											{
												menuOptions: { shouldForwardArgs: !0 },
												toolbarOptions: {
													shouldInlineSubmenu: (qe) => qe.actions.length <= 1,
												},
												actionViewItemProvider: (qe, Ae) => {
													const Me = Ue.currentElement;
													return qe instanceof y.$2X &&
														qe.item.id === N.$7Yb &&
														(0, _.$$Tb)(Me)
														? Ie.createInstance($e, qe, Ae)
														: (0, s.$Pyb)(Ie, qe, Ae);
												},
											},
										),
									)),
							Ue
						);
					}
					renderElement(ue, fe, me) {
						this.renderChatTreeItem(ue.element, fe, me);
					}
					renderChatTreeItem(ue, fe, me) {
						me.currentElement = ue;
						const ve = (0, _.$0Tb)(ue)
							? "request"
							: (0, _.$$Tb)(ue)
								? "response"
								: "welcome";
						this.O("renderElement", `${ve}, index=${fe}`),
							ie.$X1.bindTo(me.contextKeyService).set((0, _.$$Tb)(ue)),
							ie.$Y1.bindTo(me.contextKeyService).set((0, _.$0Tb)(ue)),
							ie.$S1
								.bindTo(me.contextKeyService)
								.set((0, _.$$Tb)(ue) && ue.agentOrSlashCommandDetected),
							(0, _.$$Tb)(ue)
								? (ie.$T1
										.bindTo(me.contextKeyService)
										.set(!!ue.agent?.metadata.supportIssueReporting),
									ie.$Q1
										.bindTo(me.contextKeyService)
										.set(
											ue.vote === ee.ChatAgentVoteDirection.Up
												? "up"
												: ue.vote === ee.ChatAgentVoteDirection.Down
													? "down"
													: "",
										))
								: ie.$Q1.bindTo(me.contextKeyService).set(""),
							me.titleToolbar && (me.titleToolbar.context = ue),
							ie.$V1
								.bindTo(me.contextKeyService)
								.set((0, _.$$Tb)(ue) && !!ue.errorDetails);
						const ge = !!(
							(0, _.$$Tb)(ue) && ue.errorDetails?.responseIsFiltered
						);
						if (
							(ie.$U1.bindTo(me.contextKeyService).set(ge),
							me.rowContainer.classList.toggle(
								"interactive-request",
								(0, _.$0Tb)(ue),
							),
							me.rowContainer.classList.toggle(
								"interactive-response",
								(0, _.$$Tb)(ue),
							),
							me.rowContainer.classList.toggle(
								"interactive-welcome",
								(0, _.$_Tb)(ue),
							),
							me.rowContainer.classList.toggle(
								"show-detail-progress",
								(0, _.$$Tb)(ue) &&
									!ue.isComplete &&
									!ue.progressMessages.length,
							),
							(me.username.textContent = ue.username),
							this.C.noHeader || this.U(ue, me),
							t.$9fb(me.detail),
							(0, _.$$Tb)(ue) && this.Q(ue, me),
							(0, _.$0Tb)(ue) && ue.confirmation && this.S(ue, me),
							(0, _.$$Tb)(ue) &&
								fe === this.F.getListLength() - 1 &&
								(!ue.isComplete || ue.renderData) &&
								ue.response.value.length)
						) {
							this.O(
								"renderElement",
								`start progressive render ${ve}, index=${fe}`,
							);
							const be = me.elementDisposables.add(new t.$jgb()),
								Ce = (Le) => {
									try {
										this.ab(ue, fe, me, !!Le) && be.cancel();
									} catch (Fe) {
										be.cancel(), this.I.error(Fe);
									}
								};
							be.cancelAndSet(Ce, 50, t.getWindow(me.rowContainer)), Ce(!0);
						} else
							(0, _.$$Tb)(ue)
								? this.X(ue, fe, me)
								: (0, _.$0Tb)(ue)
									? this.X(ue, fe, me)
									: this.Z(ue, me);
					}
					Q(ue, fe) {
						fe.elementDisposables.add(
							(0, p.autorun)((me) => {
								this.R(ue, fe);
							}),
						);
					}
					R(ue, fe) {
						if ((t.$9fb(fe.detail), ue.agentOrSlashCommandDetected)) {
							const me = ue.slashCommand
								? (0, b.localize)(
										4678,
										null,
										`${ne.$R2}${ue.slashCommand.name}`,
									)
								: (0, b.localize)(4679, null);
							t.$hhb(
								fe.detail,
								(0, i.$kib)(me, {
									className: "agentOrSlashCommandDetected",
									inline: !0,
									actionHandler: {
										disposables: fe.elementDisposables,
										callback: (ve) => {
											this.m.fire(ue);
										},
									},
								}),
							);
						} else ue.isComplete || (fe.detail.textContent = A.$LYb);
					}
					S(ue, fe) {
						t.$9fb(fe.detail),
							ue.confirmation &&
								(fe.detail.textContent = (0, b.localize)(
									4680,
									null,
									ue.confirmation,
								));
					}
					U(ue, fe) {
						const me = (0, _.$$Tb)(ue)
							? this.W(ue.agent?.metadata)
							: (ue.avatarIcon ?? m.$ak.account);
						if (me instanceof f.URI) {
							const ve = t.$("img.icon");
							(ve.src = n.$7g.uriToBrowserUri(me).toString(!0)),
								fe.avatarContainer.replaceChildren(t.$(".avatar", void 0, ve));
						} else {
							const ve = t.$(o.ThemeIcon.asCSSSelector(me));
							fe.avatarContainer.replaceChildren(
								t.$(".avatar.codicon-avatar", void 0, ve),
							);
						}
					}
					W(ue) {
						return ue?.themeIcon
							? ue.themeIcon
							: ue?.iconDark &&
									this.L.getColorTheme().type === D.ColorScheme.DARK
								? ue.iconDark
								: ue?.icon
									? ue.icon
									: m.$ak.copilot;
					}
					X(ue, fe, me) {
						let ve = [];
						if ((0, _.$0Tb)(ue) && !ue.confirmation) {
							const Fe =
								"message" in ue.message
									? ue.message.message
									: this.h.convertParsedRequestToMarkdown(ue.message);
							ve = [{ content: new u.$cl(Fe), kind: "markdownContent" }];
						} else
							(0, _.$$Tb)(ue) &&
								(ue.contentReferences.length &&
									ve.push({
										kind: "references",
										references: ue.contentReferences,
									}),
								ve.push(...(0, Z.$6Tb)(ue.response.value)),
								ue.codeCitations.length &&
									ve.push({
										kind: "codeCitations",
										citations: ue.codeCitations,
									}));
						t.$9fb(me.value), (0, _.$$Tb)(ue) && this.Q(ue, me);
						const ge = !!(
								(0, _.$$Tb)(ue) && ue.errorDetails?.responseIsFiltered
							),
							be = [];
						if (
							(ge ||
								ve.forEach((Fe, Oe) => {
									const xe = {
											element: ue,
											index: Oe,
											content: ve,
											preceedingContentParts: be,
										},
										He = this.fb(Fe, me, xe);
									He && (me.value.appendChild(He.domNode), be.push(He));
								}),
							me.renderedParts && (0, h.$Vc)(me.renderedParts),
							(me.renderedParts = be),
							!ge && (0, _.$0Tb)(ue) && ue.variables.length)
						) {
							const Fe = this.lb(ue.variables, ue.contentReferences, me);
							Fe &&
								(me.value.appendChild(Fe.domNode),
								me.elementDisposables.add(Fe));
						}
						if ((0, _.$$Tb)(ue) && ue.errorDetails?.message) {
							const Fe = this.H.createInstance(
								K.$QXb,
								ue.errorDetails.responseIsFiltered ? "info" : "error",
								new u.$cl(ue.errorDetails.message),
								this.g,
							);
							me.elementDisposables.add(Fe), me.value.appendChild(Fe.domNode);
						}
						const Ce = me.rowContainer.offsetHeight,
							Le = !ue.currentRenderedHeight || ue.currentRenderedHeight !== Ce;
						if (((ue.currentRenderedHeight = Ce), Le)) {
							const Fe = me.elementDisposables.add(
								t.$hgb(t.getWindow(me.value), () => {
									(ue.currentRenderedHeight = me.rowContainer.offsetHeight),
										Fe.dispose(),
										this.n.fire({
											element: ue,
											height: ue.currentRenderedHeight,
										});
								}),
							);
						}
					}
					Y(ue) {
						if (!ue.currentElement) return;
						const fe = ue.rowContainer.offsetHeight;
						(ue.currentElement.currentRenderedHeight = fe),
							this.n.fire({ element: ue.currentElement, height: fe });
					}
					Z(ue, fe) {
						t.$9fb(fe.value),
							ue.content.forEach((ge, be) => {
								if (Array.isArray(ge)) {
									const Ce = fe.elementDisposables.add(
										this.H.createChild(
											new k.$Ki([S.$6j, fe.contextKeyService]),
										),
									);
									fe.elementDisposables.add(
										Ce.createInstance(
											J.$RXb,
											fe.value,
											ge,
											this.z,
											void 0,
											(Le) => this.j.fire(Le),
										),
									);
								} else {
									const Ce = {
											element: ue,
											index: be,
											content: [],
											preceedingContentParts: [],
										},
										Le = this.nb(ge, fe, Ce);
									fe.value.appendChild(Le.domNode),
										fe.elementDisposables.add(Le);
								}
							});
						const me = fe.rowContainer.offsetHeight,
							ve = !ue.currentRenderedHeight || ue.currentRenderedHeight !== me;
						if (((ue.currentRenderedHeight = me), ve)) {
							const ge = fe.elementDisposables.add(
								t.$hgb(t.getWindow(fe.value), () => {
									(ue.currentRenderedHeight = fe.rowContainer.offsetHeight),
										ge.dispose(),
										this.n.fire({
											element: ue,
											height: ue.currentRenderedHeight,
										});
								}),
							);
						}
					}
					ab(ue, fe, me, ve) {
						if (!this.w) return !0;
						if (ue.isCanceled)
							return (
								this.O("doNextProgressiveRender", `canceled, index=${fe}`),
								(ue.renderData = void 0),
								this.X(ue, fe, me),
								!0
							);
						let ge = !1;
						this.O(
							"doNextProgressiveRender",
							`START progressive render, index=${fe}, renderData=${JSON.stringify(ue.renderData)}`,
						);
						const be = this.cb(ue),
							Ce = this.eb(me.renderedParts ?? [], be, ue);
						if (((ge = Ce.every((Fe) => Fe === null)), ge))
							return ue.isComplete
								? (this.O(
										"doNextProgressiveRender",
										`END progressive render, index=${fe} and clearing renderData, response is complete`,
									),
									(ue.renderData = void 0),
									this.X(ue, fe, me),
									!0)
								: (this.O(
										"doNextProgressiveRender",
										"caught up with the stream- no new content to render",
									),
									!1);
						this.O(
							"doNextProgressiveRender",
							`doing progressive render, ${Ce.length} parts to render`,
						),
							this.bb(Ce, be, ue, me);
						const Le = me.rowContainer.offsetHeight;
						return (
							(ue.currentRenderedHeight = Le),
							ve ||
								this.n.fire({
									element: ue,
									height: me.rowContainer.offsetHeight,
								}),
							!1
						);
					}
					bb(ue, fe, me, ve) {
						const ge = ve.renderedParts ?? [];
						(ve.renderedParts = ge),
							ue.forEach((be, Ce) => {
								if (!be) return;
								const Le = ve.renderedParts?.[Ce];
								Le && Le.dispose();
								const Fe = ge.slice(0, Ce),
									Oe = {
										element: me,
										content: fe,
										preceedingContentParts: Fe,
										index: Ce,
									},
									xe = this.fb(be, ve, Oe);
								if (xe) {
									if (Le)
										try {
											Le.domNode.replaceWith(xe.domNode);
										} catch (He) {
											this.I.error(
												"ChatListItemRenderer#renderChatContentDiff: error replacing part",
												He,
											);
										}
									else ve.value.appendChild(xe.domNode);
									ge[Ce] = xe;
								} else Le && Le.domNode.remove();
							});
					}
					cb(ue) {
						const fe = this.db(ue),
							me = (0, Z.$6Tb)(ue.response.value);
						this.O(
							"getNextProgressiveRenderContent",
							`Want to render ${fe.numWordsToRender} at ${fe.rate} words/s, counting...`,
						);
						let ve = fe.numWordsToRender;
						const ge = [];
						ue.contentReferences.length &&
							ge.push({ kind: "references", references: ue.contentReferences });
						for (let Fe = 0; Fe < me.length; Fe++) {
							const Oe = me[Fe];
							if (ve <= 0) break;
							if (Oe.kind === "markdownContent") {
								const xe = (0, te.$RKb)(Oe.content.value, ve);
								xe.isFullString
									? ge.push(Oe)
									: ge.push({
											kind: "markdownContent",
											content: new u.$cl(xe.value, Oe.content),
										}),
									this.O(
										"getNextProgressiveRenderContent",
										`  Chunk ${Fe}: Want to render ${ve} words and found ${xe.returnedWordCount} words. Total words in chunk: ${xe.totalWordCount}`,
									),
									(ve -= xe.returnedWordCount);
							} else ge.push(Oe);
						}
						const be = ue.contentUpdateTimings?.lastWordCount ?? 0,
							Ce = fe.numWordsToRender - ve,
							Le = be - Ce;
						return (
							this.O(
								"getNextProgressiveRenderContent",
								`Want to render ${fe.numWordsToRender} words. Rendering ${Ce} words. Buffer: ${Le} words`,
							),
							Ce > 0 &&
								Ce !== ue.renderData?.renderedWordCount &&
								(ue.renderData = {
									lastRenderTime: Date.now(),
									renderedWordCount: Ce,
									renderedParts: ge,
								}),
							ge
						);
					}
					db(ue) {
						const fe = ue.renderData ?? {
								lastRenderTime: 0,
								renderedWordCount: 0,
							},
							me = this.P(ue);
						return {
							numWordsToRender:
								fe.lastRenderTime === 0
									? 1
									: fe.renderedWordCount +
										Math.floor(((Date.now() - fe.lastRenderTime) / 1e3) * me),
							rate: me,
						};
					}
					eb(ue, fe, me) {
						const ve = [];
						for (let ge = 0; ge < fe.length; ge++) {
							const be = fe[ge],
								Ce = ue[ge];
							!Ce || !Ce.hasSameContent(be, fe.slice(ge + 1), me)
								? ve.push(be)
								: ve.push(null);
						}
						return ve;
					}
					fb(ue, fe, me) {
						if (ue.kind === "treeData") return this.gb(ue, fe, me);
						if (ue.kind === "progressMessage")
							return this.H.createInstance(x.$uUb, ue, this.g, me);
						if (ue.kind === "progressTask") return this.jb(ue, fe, me);
						if (ue.kind === "command")
							return this.H.createInstance(U.$eUb, ue, me);
						if (ue.kind === "textEditGroup") return this.mb(me, ue, fe);
						if (ue.kind === "confirmation") return this.kb(me, ue, fe);
						if (ue.kind === "warning")
							return this.H.createInstance(
								K.$QXb,
								"warning",
								ue.content,
								this.g,
							);
						if (ue.kind === "markdownContent")
							return this.nb(ue.content, fe, me);
						if (ue.kind === "references") return this.hb(ue, void 0, me, fe);
						if (ue.kind === "codeCitations") return this.ib(ue, me, fe);
					}
					gb(ue, fe, me) {
						const ve = ue.treeData,
							ge = me.preceedingContentParts.filter(
								(Ce) => Ce instanceof G.$OXb,
							).length,
							be = this.H.createInstance(G.$OXb, ve, me.element, this.s, ge);
						if (
							(be.addDisposable(
								be.onDidChangeHeight(() => {
									this.Y(fe);
								}),
							),
							(0, _.$$Tb)(me.element))
						) {
							const Ce = {
								treeDataId: ve.uri.toString(),
								treeIndex: ge,
								focus() {
									be.domFocus();
								},
							};
							be.addDisposable(
								be.onDidFocus(() => {
									this.f.set(me.element.id, Ce.treeIndex);
								}),
							);
							const Le = this.c.get(me.element.id) ?? [];
							Le.push(Ce),
								this.c.set(
									me.element.id,
									(0, d.$Qb)(Le, (Fe) => Fe.treeDataId),
								),
								be.addDisposable(
									(0, h.$Yc)(() =>
										this.c.set(
											me.element.id,
											Le.filter((Fe) => Fe.treeDataId !== ve.uri.toString()),
										),
									),
								);
						}
						return be;
					}
					hb(ue, fe, me, ve) {
						const ge = this.H.createInstance(
							H.$JXb,
							ue.references,
							fe,
							me.element,
							this.t,
						);
						return (
							ge.addDisposable(
								ge.onDidChangeHeight(() => {
									this.Y(ve);
								}),
							),
							ge
						);
					}
					ib(ue, fe, me) {
						return this.H.createInstance(B.$dUb, ue, fe);
					}
					jb(ue, fe, me) {
						if (!(0, _.$$Tb)(me.element)) return;
						const ve = this.H.createInstance(q.$LXb, ue, this.t, this.g, me);
						return (
							ve.addDisposable(
								ve.onDidChangeHeight(() => {
									this.Y(fe);
								}),
							),
							ve
						);
					}
					kb(ue, fe, me) {
						const ve = this.H.createInstance(z.$gUb, fe, ue);
						return ve.addDisposable(ve.onDidChangeHeight(() => this.Y(me))), ve;
					}
					lb(ue, fe, me) {
						return this.H.createInstance(O.$4Tb, ue, fe, void 0);
					}
					mb(ue, fe, me) {
						const ve = this.H.createInstance(
							V.$MXb,
							fe,
							ue,
							this.C,
							this.r,
							this.u,
						);
						return (
							ve.addDisposable(
								ve.onDidChangeHeight(() => {
									ve.layout(this.u), this.Y(me);
								}),
							),
							ve
						);
					}
					nb(ue, fe, me) {
						const ve = me.element,
							ge =
								(0, _.$$Tb)(ve) &&
								(!ve.isComplete ||
									ve.isCanceled ||
									ve.errorDetails?.responseIsFiltered ||
									ve.errorDetails?.responseIsIncomplete ||
									!!ve.renderData),
							be = me.preceedingContentParts.reduce(
								(Fe, Oe) =>
									Fe + (Oe instanceof F.$sUb ? Oe.codeblocks.length : 0),
								0,
							),
							Ce = this.H.createInstance(
								F.$sUb,
								ue,
								me,
								this.q,
								ge,
								be,
								this.g,
								this.u,
								this.G,
								this.C,
							);
						Ce.addDisposable(
							Ce.onDidChangeHeight(() => {
								Ce.layout(this.u), this.Y(fe);
							}),
						);
						const Le = this.a.get(ve.id) ?? [];
						return (
							this.a.set(ve.id, Le),
							Ce.addDisposable(
								(0, h.$Yc)(() => {
									const Fe = this.a.get(ve.id);
									Fe && Ce.codeblocks.forEach((Oe, xe) => delete Fe[be + xe]);
								}),
							),
							Ce.codeblocks.forEach((Fe, Oe) => {
								if (((Le[be + Oe] = Fe), Fe.uri)) {
									const xe = Fe.uri;
									this.b.set(xe, Fe),
										Ce.addDisposable((0, h.$Yc)(() => this.b.delete(xe)));
								}
							}),
							Ce
						);
					}
					disposeElement(ue, fe, me) {
						if (
							(this.O("disposeElement", `Disposing element, index=${fe}`),
							me.renderedParts)
						)
							try {
								(0, h.$Vc)((0, d.$Lb)(me.renderedParts)),
									(me.renderedParts = void 0),
									t.$9fb(me.value);
							} catch (ve) {
								throw ve;
							}
						(me.currentElement = void 0), me.elementDisposables.clear();
					}
					disposeTemplate(ue) {
						ue.templateDisposables.dispose();
					}
				};
				(e.$9Xb = oe),
					(e.$9Xb =
						oe =
						se =
							Ne(
								[
									j(6, P.$Li),
									j(7, v.$gj),
									j(8, L.$ik),
									j(9, S.$6j),
									j(10, M.$iP),
									j(11, $.$ek),
									j(12, T.$Uyb),
								],
								oe,
							));
				let ae = class {
					constructor(ue, fe) {
						(this.a = ue), (this.b = fe);
					}
					c(ue, fe) {
						le
							? this.b.info(`ChatListDelegate#${ue}: ${fe}`)
							: this.b.trace(`ChatListDelegate#${ue}: ${fe}`);
					}
					getHeight(ue) {
						const fe = (0, _.$0Tb)(ue) ? "request" : "response",
							me =
								("currentRenderedHeight" in ue
									? ue.currentRenderedHeight
									: void 0) ?? this.a;
						return this.c("getHeight", `${fe}, height=${me}`), me;
					}
					getTemplateId(ue) {
						return oe.ID;
					}
					hasDynamicHeight(ue) {
						return !0;
					}
				};
				(e.$0Xb = ae), (e.$0Xb = ae = Ne([j(1, L.$ik)], ae));
				const pe = {
					[ee.ChatAgentVoteDownReason.IncorrectCode]: (0, b.localize)(
						4681,
						null,
					),
					[ee.ChatAgentVoteDownReason.DidNotFollowInstructions]: (0,
					b.localize)(4682, null),
					[ee.ChatAgentVoteDownReason.MissingContext]: (0, b.localize)(
						4683,
						null,
					),
					[ee.ChatAgentVoteDownReason.OffensiveOrUnsafe]: (0, b.localize)(
						4684,
						null,
					),
					[ee.ChatAgentVoteDownReason.PoorlyWrittenOrFormatted]: (0,
					b.localize)(4685, null),
					[ee.ChatAgentVoteDownReason.RefusedAValidRequest]: (0, b.localize)(
						4686,
						null,
					),
					[ee.ChatAgentVoteDownReason.IncompleteCode]: (0, b.localize)(
						4687,
						null,
					),
					[ee.ChatAgentVoteDownReason.WillReportIssue]: (0, b.localize)(
						4688,
						null,
					),
					[ee.ChatAgentVoteDownReason.Other]: (0, b.localize)(4689, null),
				};
				let $e = class extends E.$Pob {
					constructor(ue, fe, me, ve, ge, be) {
						super(ue, { getActions: () => this.getActions() }, be, {
							...fe,
							classNames: o.ThemeIcon.asClassNameArray(m.$ak.thumbsdown),
						}),
							(this.a = me),
							(this.g = ve),
							(this.r = ge);
					}
					getActions() {
						return [
							this.O(ee.ChatAgentVoteDownReason.IncorrectCode),
							this.O(ee.ChatAgentVoteDownReason.DidNotFollowInstructions),
							this.O(ee.ChatAgentVoteDownReason.IncompleteCode),
							this.O(ee.ChatAgentVoteDownReason.MissingContext),
							this.O(ee.ChatAgentVoteDownReason.PoorlyWrittenOrFormatted),
							this.O(ee.ChatAgentVoteDownReason.RefusedAValidRequest),
							this.O(ee.ChatAgentVoteDownReason.OffensiveOrUnsafe),
							this.O(ee.ChatAgentVoteDownReason.Other),
							{
								id: "reportIssue",
								label: pe[ee.ChatAgentVoteDownReason.WillReportIssue],
								tooltip: "",
								enabled: !0,
								class: void 0,
								run: async (ue) => {
									if (!(0, _.$$Tb)(ue)) {
										this.r.error("ChatVoteDownButton#run: invalid context");
										return;
									}
									await this.a.executeCommand(
										N.$7Yb,
										ue,
										ee.ChatAgentVoteDownReason.WillReportIssue,
									),
										await this.g.openReporter({
											extensionId: ue.agent?.extensionId.value,
										});
								},
							},
						];
					}
					render(ue) {
						super.render(ue),
							this.element?.classList.toggle("checked", this.action.checked);
					}
					O(ue) {
						const fe = pe[ue];
						return {
							id: N.$7Yb,
							label: fe,
							tooltip: "",
							enabled: !0,
							checked: this._context.voteDownReason === ue,
							class: void 0,
							run: async (me) => {
								if (!(0, _.$$Tb)(me)) {
									this.r.error(
										"ChatVoteDownButton#getVoteDownDetailAction: invalid context",
									);
									return;
								}
								await this.a.executeCommand(N.$7Yb, me, ue);
							},
						};
					}
				};
				(e.$$Xb = $e),
					(e.$$Xb = $e =
						Ne([j(2, $.$ek), j(3, Q.$7Xb), j(4, L.$ik), j(5, I.$Xxb)], $e));
			},
		),
		