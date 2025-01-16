define(de[3883], he([1, 0, 3882]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 });
		}),
		define(
			de[3884],
			he([
				1, 0, 4, 7, 50, 33, 275, 138, 6, 132, 103, 3, 23, 73, 37, 9, 325, 146,
				93, 39, 49, 8, 10, 5, 814, 18, 44, 31, 35, 26, 60, 84, 41, 105, 92, 11,
				32, 198, 212, 14, 79, 247, 221, 28, 267, 68, 53, 21, 95, 72, 2503,
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
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$$1c = e.$01c = e.$91c = e.$81c = e.$71c = e.$61c = void 0),
					(i = mt(i));
				const Y = 22;
				function ie(fe) {
					return fe instanceof te;
				}
				function ne(fe) {
					return !!fe && !fe.handle.startsWith("vscode-command:");
				}
				function ee(fe, me) {
					return (
						(fe.relativeTime = ne(fe) ? (0, C.$dn)(fe.timestamp) : void 0),
						(fe.relativeTimeFullWord = ne(fe)
							? (0, C.$dn)(fe.timestamp, !1, !0)
							: void 0),
						me === void 0 || fe.relativeTime !== me
							? ((me = fe.relativeTime), (fe.hideRelativeTime = !1))
							: (fe.hideRelativeTime = !0),
						me
					);
				}
				class _ {
					constructor(me) {
						(this.d = !1),
							(this.f = !1),
							(this.source = me.source),
							(this.items = me.items),
							(this.c = me.paging?.cursor),
							(this.lastRenderedIndex = -1);
					}
					get cursor() {
						return this.c;
					}
					get more() {
						return this.c !== void 0;
					}
					get newest() {
						return this.items[0];
					}
					get oldest() {
						return this.items[this.items.length - 1];
					}
					add(me, ve) {
						let ge = !1;
						if (me.items.length !== 0 && this.items.length !== 0) {
							ge = !0;
							const be = new Set(),
								Ce = new Set();
							for (const Oe of me.items)
								Oe.id === void 0 ? Ce.add(Oe.timestamp) : be.add(Oe.id);
							let Le = this.items.length,
								Fe;
							for (; Le--; )
								(Fe = this.items[Le]),
									((Fe.id !== void 0 && be.has(Fe.id)) ||
										Ce.has(Fe.timestamp)) &&
										this.items.splice(Le, 1);
							(me.items[me.items.length - 1]?.timestamp ?? 0) >=
							(this.newest?.timestamp ?? 0)
								? this.items.splice(0, 0, ...me.items)
								: this.items.push(...me.items);
						} else
							me.items.length !== 0 &&
								((ge = !0), this.items.push(...me.items));
						return (
							(ve.cursor !== void 0 || typeof ve.limit != "object") &&
								(this.c = me.paging?.cursor),
							ge &&
								this.items.sort(
									(be, Ce) =>
										Ce.timestamp - be.timestamp ||
										(be.source === void 0
											? Ce.source === void 0
												? 0
												: 1
											: Ce.source === void 0
												? -1
												: Ce.source.localeCompare(be.source, void 0, {
														numeric: !0,
														sensitivity: "base",
													})),
								),
							ge
						);
					}
					get stale() {
						return this.d;
					}
					get requiresReset() {
						return this.f;
					}
					invalidate(me) {
						(this.d = !0), (this.f = me);
					}
				}
				class te {
					constructor(me) {
						(this.handle = "vscode-command:loadMore"),
							(this.timestamp = 0),
							(this.description = void 0),
							(this.tooltip = void 0),
							(this.contextValue = void 0),
							(this.id = void 0),
							(this.icon = void 0),
							(this.iconDark = void 0),
							(this.source = void 0),
							(this.relativeTime = void 0),
							(this.relativeTimeFullWord = void 0),
							(this.hideRelativeTime = void 0),
							(this.c = !1),
							(this.c = me);
					}
					get loading() {
						return this.c;
					}
					set loading(me) {
						this.c = me;
					}
					get ariaLabel() {
						return this.label;
					}
					get label() {
						return this.loading
							? (0, t.localize)(11008, null)
							: (0, t.localize)(11009, null);
					}
					get themeIcon() {}
				}
				(e.$61c = new l.$5j("timelineFollowActiveEditor", !0, !0)),
					(e.$71c = new l.$5j("timelineExcludeSources", "[]", !0));
				let Q = class extends o.$TMb {
					static {
						this.TITLE = (0, t.localize2)(11023, "Timeline");
					}
					constructor(
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
						ke,
						Ue,
					) {
						super(
							{ ...me, titleMenuId: R.$XX.TimelineTitle },
							ve,
							ge,
							Ce,
							be,
							Fe,
							Oe,
							Te,
							Ee,
							Ie,
							Be,
						),
							(this.dc = Le),
							(this.ec = xe),
							(this.fc = He),
							(this.gc = Ke),
							(this.hc = Je),
							(this.ic = Se),
							(this.jc = ke),
							(this.kc = Ue),
							(this.ab = new Map()),
							(this.sb = new Map()),
							(this.lc = !0),
							(this.zc = !0),
							(this.Ac = 0),
							(this.Bc = 0),
							(this.Hc = !1),
							(this.m = this.D(this.Db.createInstance(ue, this))),
							(this.r = e.$61c.bindTo(this.Bb)),
							(this.t = e.$71c.bindTo(this.Bb));
						const qe = Le.get(
							"timeline.excludeSources",
							J.StorageScope.PROFILE,
							"[]",
						);
						this.t.set(qe),
							(this.L = new Set(JSON.parse(qe))),
							this.D(
								Le.onDidChangeValue(
									J.StorageScope.PROFILE,
									"timeline.excludeSources",
									this.D(new a.$Zc()),
								)(this.oc, this),
							),
							this.D(Ce.onDidChangeConfiguration(this.pc, this)),
							this.D(Je.onDidChangeProviders(this.rc, this)),
							this.D(Je.onDidChangeTimeline(this.sc, this)),
							this.D(Je.onDidChangeUri((Ae) => this.setUri(Ae), this));
					}
					get followActiveEditor() {
						return this.lc;
					}
					set followActiveEditor(me) {
						this.lc !== me &&
							((this.lc = me),
							this.r.set(me),
							this.updateFilename(this.tc),
							me && this.qc());
					}
					get pageOnScroll() {
						return (
							this.mc === void 0 &&
								(this.mc = this.Ab.getValue("timeline.pageOnScroll") ?? !1),
							this.mc
						);
					}
					get pageSize() {
						let me = this.Ab.getValue("timeline.pageSize");
						return (
							me == null &&
								(me = Math.max(
									20,
									Math.floor(
										(this.h?.renderHeight ?? 0 / Y) +
											(this.pageOnScroll ? 1 : -1),
									),
								)),
							me
						);
					}
					reset() {
						this.Ec(!0);
					}
					setUri(me) {
						this.nc(me, !0);
					}
					nc(me, ve) {
						ve && (this.followActiveEditor = !1),
							(this.cc = me),
							this.updateFilename(
								me ? this.ic.getUriBasenameLabel(me) : void 0,
							),
							this.j?.setUri(me),
							this.Ec(!0);
					}
					oc() {
						const me = this.dc.get(
							"timeline.excludeSources",
							J.StorageScope.PROFILE,
							"[]",
						);
						this.t.set(me), (this.L = new Set(JSON.parse(me)));
						const ve = this.hc
							.getSources()
							.filter(({ id: ge }) => !this.L.has(ge) && !this.sb.has(ge));
						ve.length !== 0
							? this.Ec(
									!0,
									ve.map(({ id: ge }) => ge),
								)
							: this.Kc();
					}
					pc(me) {
						me.affectsConfiguration("timeline.pageOnScroll") &&
							(this.mc = void 0);
					}
					qc() {
						if (!this.followActiveEditor || !this.isExpanded()) return;
						const me = I.$A1.getOriginalUri(this.ec.activeEditor, {
							supportSideBySide: I.SideBySideEditor.PRIMARY,
						});
						if (
							(this.jc.extUri.isEqual(me, this.cc) && me !== void 0) ||
							(me?.fsPath === this.cc?.fsPath &&
								(me?.scheme === h.Schemas.file || me?.scheme === "git") &&
								(this.cc?.scheme === h.Schemas.file ||
									this.cc?.scheme === "git"))
						) {
							for (const ve of this.hc.getSources()) {
								if (this.L.has(ve.id)) continue;
								const ge = this.sb.get(ve.id);
								(ge !== void 0 && !ge.stale) ||
									(ge !== void 0
										? this.Gc(ge, ge.requiresReset)
										: this.Fc(ve.id, me, !0));
							}
							return;
						}
						this.nc(me, !1);
					}
					rc(me) {
						if (me.removed) {
							for (const ve of me.removed) this.sb.delete(ve);
							this.Kc();
						}
						me.added && this.Ec(!0, me.added);
					}
					sc(me) {
						if (
							me?.uri === void 0 ||
							this.jc.extUri.isEqual(g.URI.revive(me.uri), this.cc)
						) {
							const ve = this.sb.get(me.id);
							if (ve === void 0) return;
							this.isBodyVisible()
								? this.Gc(ve, me.reset)
								: ve.invalidate(me.reset);
						}
					}
					updateFilename(me) {
						(this.tc = me),
							this.followActiveEditor || !me
								? this.Ub(me)
								: this.Ub(`${me} (pinned)`);
					}
					get message() {
						return this.uc;
					}
					set message(me) {
						(this.uc = me), this.vc();
					}
					vc() {
						this.uc !== void 0 ? this.wc(this.uc) : this.xc();
					}
					wc(me) {
						this.f &&
							(this.f.classList.remove("hide"),
							this.yc(),
							(this.f.textContent = me));
					}
					xc() {
						this.yc(), this.f.classList.add("hide");
					}
					yc() {
						i.$9fb(this.f);
					}
					get Cc() {
						return this.Bc > 0;
					}
					Dc(me) {
						if (
							((this.Bc = 0), (this.Ac = this.pageSize), this.sb.clear(), me)
						) {
							for (const { tokenSource: ve } of this.ab.values())
								ve.dispose(!0);
							this.ab.clear(),
								!this.isBodyVisible() &&
									this.h &&
									(this.h.setChildren(null, void 0), (this.zc = !0));
						}
					}
					async Ec(me, ve) {
						if (ve === void 0) {
							if (
								(me && this.Dc(!0),
								this.cc?.scheme === h.Schemas.vscodeSettings ||
									this.cc?.scheme === h.Schemas.webviewPanel ||
									this.cc?.scheme === h.Schemas.walkThrough ||
									this.cc?.scheme === h.Schemas.aiSettings)
							) {
								(this.cc = void 0), this.Dc(!1), this.Kc();
								return;
							}
							this.zc && this.cc !== void 0 && this.setLoadingUriMessage();
						}
						if (this.cc === void 0) {
							this.Dc(!1), this.Kc();
							return;
						}
						if (!this.isBodyVisible()) return;
						let ge = !1;
						for (const be of ve ?? this.hc.getSources().map((Ce) => Ce.id))
							this.Fc(be, this.cc, me) && (ge = !0);
						ge ? this.zc && this.setLoadingUriMessage() : this.Kc();
					}
					Fc(me, ve, ge, be) {
						if (this.L.has(me)) return !1;
						const Ce = this.sb.get(me);
						if (
							!ge &&
							be?.cursor !== void 0 &&
							Ce !== void 0 &&
							(!Ce?.more ||
								Ce.items.length > Ce.lastRenderedIndex + this.pageSize)
						)
							return !1;
						if (be === void 0) {
							if (!ge && Ce !== void 0 && Ce.items.length > 0 && !Ce.more)
								return !1;
							be = { cursor: ge ? void 0 : Ce?.cursor, limit: this.pageSize };
						}
						let Le = this.ab.get(me);
						return (
							Le !== void 0 &&
								((be.cursor = Le.options.cursor),
								typeof be.limit == "number" &&
									(typeof Le.options.limit == "number"
										? (be.limit += Le.options.limit)
										: (be.limit = Le.options.limit))),
							Le?.tokenSource.dispose(!0),
							(be.cacheResults = !0),
							(be.resetCache = ge),
							(Le = this.hc.getTimeline(me, ve, be, new E.$Ce())),
							Le === void 0
								? !1
								: (this.ab.set(me, Le),
									Le.tokenSource.token.onCancellationRequested(() =>
										this.ab.delete(me),
									),
									this.Ic(Le),
									!0)
						);
					}
					Gc(me, ve) {
						if (ve) {
							this.sb.delete(me.source);
							const { oldest: ge } = me;
							this.Fc(
								me.source,
								this.cc,
								!0,
								ge !== void 0
									? { limit: { timestamp: ge.timestamp, id: ge.id } }
									: void 0,
							);
						} else {
							const { newest: ge } = me;
							this.Fc(
								me.source,
								this.cc,
								!1,
								ge !== void 0
									? { limit: { timestamp: ge.timestamp, id: ge.id } }
									: { limit: this.pageSize },
							);
						}
					}
					async Ic(me) {
						let ve;
						try {
							ve = await this.gc.withProgress(
								{ location: this.id },
								() => me.result,
							);
						} finally {
							this.ab.delete(me.source);
						}
						if (
							ve === void 0 ||
							me.tokenSource.token.isCancellationRequested ||
							me.uri !== this.cc
						) {
							this.ab.size === 0 && this.Hc && this.Kc();
							return;
						}
						const ge = me.source;
						let be = !1;
						const Ce = this.sb.get(ge);
						Ce === void 0
							? (this.sb.set(ge, new _(ve)), (be = !0))
							: (be = Ce.add(ve, me.options)),
							be
								? ((this.Hc = !0),
									this.Cc && this.ab.size !== 0 ? this.Lc() : this.Kc())
								: this.ab.size === 0 &&
									(this.Hc ? this.Kc() : this.h.rerender());
					}
					*Jc() {
						let me = !1;
						if (this.cc === void 0 || this.sb.size === 0) {
							this.Bc = 0;
							return;
						}
						const ve = this.Ac;
						let ge = 0;
						if (this.sb.size === 1) {
							const [be, Ce] = u.Iterable.first(this.sb);
							if (((Ce.lastRenderedIndex = -1), this.L.has(be))) {
								this.Bc = 0;
								return;
							}
							Ce.items.length !== 0 && (this.Bc = 1), (me = Ce.more);
							let Le;
							for (const Fe of Ce.items) {
								if (
									((Fe.relativeTime = void 0),
									(Fe.hideRelativeTime = void 0),
									ge++,
									ge > ve)
								) {
									me = !0;
									break;
								}
								(Le = ee(Fe, Le)), yield { element: Fe };
							}
							Ce.lastRenderedIndex = ge - 1;
						} else {
							let Fe = function () {
								return be
									.filter((He) => !He.nextItem.done)
									.reduce(
										(He, Ke) =>
											He === void 0 ||
											Ke.nextItem.value.timestamp >= He.nextItem.value.timestamp
												? Ke
												: He,
										void 0,
									);
							};
							const be = [];
							let Ce = !1,
								Le = 0;
							for (const [He, Ke] of this.sb) {
								if (((Ke.lastRenderedIndex = -1), this.L.has(He) || Ke.stale))
									continue;
								if ((Ke.items.length !== 0 && (Ce = !0), Ke.more)) {
									me = !0;
									const Te = Ke.items[Math.min(ve, Ke.items.length - 1)];
									Te.timestamp > Le && (Le = Te.timestamp);
								}
								const Je = Ke.items[Symbol.iterator]();
								be.push({ timeline: Ke, iterator: Je, nextItem: Je.next() });
							}
							this.Bc = Ce ? 1 : 0;
							let Oe, xe;
							for (; (xe = Fe()); ) {
								xe.timeline.lastRenderedIndex++;
								const He = xe.nextItem.value;
								if (
									((He.relativeTime = void 0),
									(He.hideRelativeTime = void 0),
									He.timestamp >= Le)
								) {
									if ((ge++, ge > ve)) {
										me = !0;
										break;
									}
									(Oe = ee(He, Oe)), yield { element: He };
								}
								xe.nextItem = xe.iterator.next();
							}
						}
						(this.Bc = ge),
							ge > 0 &&
								(me
									? yield { element: new te(this.ab.size !== 0) }
									: this.ab.size !== 0 && (yield { element: new te(!0) }));
					}
					Kc() {
						if (this.isBodyVisible()) {
							if (
								(this.h.setChildren(null, this.Jc()),
								(this.zc = !this.Cc),
								this.cc === void 0)
							)
								this.updateFilename(void 0),
									(this.message = (0, t.localize)(11010, null));
							else if (this.zc)
								if (this.ab.size !== 0) this.setLoadingUriMessage();
								else {
									this.updateFilename(this.ic.getUriBasenameLabel(this.cc));
									const me = this.Bb.getContextKeyValue("scm.providerCount");
									this.hc.getSources().filter(({ id: ve }) => !this.L.has(ve))
										.length === 0
										? (this.message = (0, t.localize)(11011, null))
										: this.Ab.getValue("workbench.localHistory.enabled") &&
												!this.L.has("timeline.localHistory")
											? (this.message = (0, t.localize)(11012, null))
											: this.L.size > 0
												? (this.message = (0, t.localize)(11013, null))
												: (this.message = (0, t.localize)(11014, null)),
										(!me || me === 0) &&
											(this.message += " " + (0, t.localize)(11015, null));
								}
							else
								this.updateFilename(this.ic.getUriBasenameLabel(this.cc)),
									(this.message = void 0);
							this.Hc = !1;
						}
					}
					Lc() {
						this.Kc();
					}
					focus() {
						super.focus(), this.h.domFocus();
					}
					setExpanded(me) {
						const ve = super.setExpanded(me);
						return (
							ve &&
								this.isBodyVisible() &&
								(this.followActiveEditor ? this.qc() : this.nc(this.cc, !0)),
							ve
						);
					}
					setVisible(me) {
						me
							? (this.kc.activateByEvent("onView:timeline"),
								(this.n = new a.$Zc()),
								this.ec.onDidActiveEditorChange(this.qc, this, this.n),
								this.onDidFocus(() => this.Lc(), this, this.n),
								super.setVisible(me),
								this.qc())
							: (this.n?.dispose(), super.setVisible(me));
					}
					X(me, ve) {
						super.X(me, ve), this.h.layout(me, ve);
					}
					Qb(me) {
						super.Qb(me, this.title), me.classList.add("timeline-view");
					}
					W(me) {
						super.W(me),
							(this.c = me),
							me.classList.add(
								"tree-explorer-viewlet-tree-view",
								"timeline-tree-view",
							),
							(this.f = i.$fhb(this.c, i.$(".message"))),
							this.f.classList.add("timeline-subtle"),
							(this.message = (0, t.localize)(11016, null)),
							(this.g = document.createElement("div")),
							this.g.classList.add(
								"customview-tree",
								"file-icon-themable-tree",
								"hide-arrows",
							),
							me.appendChild(this.g),
							(this.j = this.Db.createInstance(ae, this.m)),
							this.j.onDidScrollToEnd((ve) => {
								this.pageOnScroll && this.Pc(ve);
							}),
							(this.h = this.Db.createInstance(
								f.$CMb,
								"TimelinePane",
								this.g,
								new oe(),
								[this.j],
								{
									identityProvider: new se(),
									accessibilityProvider: {
										getAriaLabel(ve) {
											return ie(ve)
												? ve.ariaLabel
												: ve.accessibilityInformation
													? ve.accessibilityInformation.label
													: (0, t.localize)(
															11017,
															null,
															ve.relativeTimeFullWord ?? "",
															ve.label,
														);
										},
										getRole(ve) {
											return ie(ve)
												? "treeitem"
												: ve.accessibilityInformation &&
														ve.accessibilityInformation.role
													? ve.accessibilityInformation.role
													: "treeitem";
										},
										getWidgetAriaLabel() {
											return (0, t.localize)(11018, null);
										},
									},
									keyboardNavigationLabelProvider: new le(),
									multipleSelectionSupport: !1,
									overrideStyles: this.Zb().listOverrideStyles,
								},
							)),
							this.D(this.h.onContextMenu((ve) => this.Qc(this.m, ve))),
							this.D(
								this.h.onDidChangeSelection((ve) => this.ensureValidItems()),
							),
							this.D(
								this.h.onDidOpen((ve) => {
									if (!ve.browserEvent || !this.ensureValidItems()) return;
									const ge = this.h.getSelection();
									let be;
									if ((ge.length === 1 && (be = ge[0]), be !== null))
										if (ne(be)) {
											if (be.command) {
												let Ce = be.command.arguments ?? [];
												(be.command.id === x.$zWb ||
													be.command.id === x.$AWb) &&
													(Ce = [...Ce, ve]),
													this.fc.executeCommand(be.command.id, ...Ce);
											}
										} else ie(be) && this.Pc(be);
								}),
							);
					}
					Pc(me) {
						me.loading ||
							((me.loading = !0),
							this.h.rerender(me),
							this.ab.size === 0 &&
								((this.Ac = this.Bc + this.pageSize), this.Ec(!1)));
					}
					ensureValidItems() {
						return !this.Cc ||
							!this.hc
								.getSources()
								.some(({ id: me }) => !this.L.has(me) && this.sb.has(me))
							? (this.h.setChildren(null, void 0),
								(this.zc = !0),
								this.setLoadingUriMessage(),
								!1)
							: !0;
					}
					setLoadingUriMessage() {
						const me = this.cc && this.ic.getUriBasenameLabel(this.cc);
						this.updateFilename(me),
							(this.message = me ? (0, t.localize)(11019, null, me) : "");
					}
					Qc(me, ve) {
						const ge = ve.element;
						if (ge === null) return;
						const be = ve.browserEvent;
						if (
							(be.preventDefault(),
							be.stopPropagation(),
							!this.ensureValidItems())
						)
							return;
						this.h.setFocus([ge]);
						const Ce = me.getItemContextActions(ge);
						Ce.length &&
							this.zb.showContextMenu({
								getAnchor: () => ve.anchor,
								getActions: () => Ce,
								getActionViewItem: (Le) => {
									const Fe = this.yb.lookupKeybinding(Le.id);
									if (Fe)
										return new B.$_ib(Le, Le, {
											label: !0,
											keybinding: Fe.getLabel(),
										});
								},
								onHide: (Le) => {
									Le && this.h.domFocus();
								},
								getActionsContext: () => ({ uri: this.cc, item: ge }),
								actionRunner: new re(),
							});
					}
				};
				(e.$81c = Q),
					Ne([(0, d.$fi)(500)], Q.prototype, "Lc", null),
					(e.$81c = Q =
						Ne(
							[
								j(1, b.$uZ),
								j(2, s.$Xxb),
								j(3, l.$6j),
								j(4, y.$gj),
								j(5, J.$lq),
								j(6, L.$K1),
								j(7, $.$Li),
								j(8, S.$IY),
								j(9, T.$ek),
								j(10, D.$8N),
								j(11, v.$57),
								j(12, M.$7rb),
								j(13, P.$iP),
								j(14, O.$km),
								j(15, X.$Uyb),
								j(16, c.$3N),
								j(17, G.$Vl),
								j(18, K.$q2),
							],
							Q,
						));
				class Z {
					static {
						this.id = "TimelineElementTemplate";
					}
					constructor(me, ve, ge) {
						me.classList.add("custom-view-tree-node-item"),
							(this.icon = i.$fhb(me, i.$(".custom-view-tree-node-item-icon"))),
							(this.iconLabel = new p.$Xob(me, {
								supportHighlights: !0,
								supportIcons: !0,
								hoverDelegate: ge,
							}));
						const be = i.$fhb(
							this.iconLabel.element,
							i.$(".timeline-timestamp-container"),
						);
						this.timestamp = i.$fhb(be, i.$("span.timeline-timestamp"));
						const Ce = i.$fhb(this.iconLabel.element, i.$(".actions"));
						this.actionBar = new N.$eib(Ce, { actionViewItemProvider: ve });
					}
					dispose() {
						this.iconLabel.dispose(), this.actionBar.dispose();
					}
					reset() {
						(this.icon.className = ""),
							(this.icon.style.backgroundImage = ""),
							this.actionBar.clear();
					}
				}
				class se {
					getId(me) {
						return me.handle;
					}
				}
				e.$91c = se;
				class re extends w.$sj {
					async q(me, { uri: ve, item: ge }) {
						if (!ne(ge)) {
							await me.run();
							return;
						}
						await me.run(
							{
								$mid: H.MarshalledId.TimelineActionContext,
								handle: ge.handle,
								source: ge.source,
								uri: ve,
							},
							ve,
							ge.source,
						);
					}
				}
				class le {
					getKeyboardNavigationLabel(me) {
						return me.label;
					}
				}
				e.$01c = le;
				class oe {
					getHeight(me) {
						return Y;
					}
					getTemplateId(me) {
						return Z.id;
					}
				}
				e.$$1c = oe;
				let ae = class {
					constructor(me, ve, ge) {
						(this.g = me),
							(this.h = ve),
							(this.j = ge),
							(this.c = new m.$re()),
							(this.onDidScrollToEnd = this.c.event),
							(this.templateId = Z.id),
							(this.f = A.$Pyb.bind(void 0, this.h)),
							(this.d = (0, W.$cib)("mouse"));
					}
					setUri(me) {
						this.k = me;
					}
					renderTemplate(me) {
						return new Z(me, this.f, this.d);
					}
					renderElement(me, ve, ge, be) {
						ge.reset();
						const { element: Ce } = me,
							Le = this.j.getColorTheme(),
							Fe = Le.type === U.ColorScheme.LIGHT ? Ce.icon : Ce.iconDark,
							Oe = Fe ? g.URI.revive(Fe) : null;
						Oe
							? ((ge.icon.className = "custom-view-tree-node-item-icon"),
								(ge.icon.style.backgroundImage = i.$vhb(Oe)),
								(ge.icon.style.color = ""))
							: Ce.themeIcon
								? ((ge.icon.className = `custom-view-tree-node-item-icon ${k.ThemeIcon.asClassName(Ce.themeIcon)}`),
									Ce.themeIcon.color
										? (ge.icon.style.color =
												Le.getColor(Ce.themeIcon.color.id)?.toString() ?? "")
										: (ge.icon.style.color = ""),
									(ge.icon.style.backgroundImage = ""))
								: ((ge.icon.className = "custom-view-tree-node-item-icon"),
									(ge.icon.style.backgroundImage = ""),
									(ge.icon.style.color = ""));
						const xe = Ce.tooltip
							? (0, q.$lg)(Ce.tooltip)
								? Ce.tooltip
								: {
										markdown: Ce.tooltip,
										markdownNotSupportedFallback: (0, V.$Xib)(Ce.tooltip),
									}
							: void 0;
						ge.iconLabel.setLabel(Ce.label, Ce.description, {
							title: xe,
							matches: (0, r.$3k)(me.filterData),
						}),
							(ge.timestamp.textContent = Ce.relativeTime ?? ""),
							(ge.timestamp.ariaLabel = Ce.relativeTimeFullWord ?? ""),
							ge.timestamp.parentElement.classList.toggle(
								"timeline-timestamp--duplicate",
								ne(Ce) && Ce.hideRelativeTime,
							),
							(ge.actionBar.context = { uri: this.k, item: Ce }),
							(ge.actionBar.actionRunner = new re()),
							ge.actionBar.push(this.g.getItemActions(Ce), {
								icon: !0,
								label: !1,
							}),
							ie(Ce) && setTimeout(() => this.c.fire(Ce), 0);
					}
					disposeTemplate(me) {
						me.dispose();
					}
				};
				ae = Ne([j(1, $.$Li), j(2, P.$iP)], ae);
				const pe = (0, F.$$O)(
						"timeline-refresh",
						z.$ak.refresh,
						(0, t.localize)(11020, null),
					),
					$e = (0, F.$$O)(
						"timeline-pin",
						z.$ak.pin,
						(0, t.localize)(11021, null),
					),
					ye = (0, F.$$O)(
						"timeline-unpin",
						z.$ak.pinned,
						(0, t.localize)(11022, null),
					);
				let ue = class extends a.$1c {
					constructor(me, ve, ge, be, Ce) {
						super(),
							(this.f = me),
							(this.g = ve),
							(this.h = ge),
							(this.j = be),
							(this.m = Ce),
							this.D((this.c = new a.$Zc())),
							this.D(
								(0, R.$4X)(
									class extends R.$3X {
										constructor() {
											super({
												id: "timeline.refresh",
												title: (0, t.localize2)(11024, "Refresh"),
												icon: pe,
												category: (0, t.localize2)(11025, "Timeline"),
												menu: {
													id: R.$XX.TimelineTitle,
													group: "navigation",
													order: 99,
												},
											});
										}
										run(Le, ...Fe) {
											me.reset();
										}
									},
								),
							),
							this.D(
								T.$fk.registerCommand(
									"timeline.toggleFollowActiveEditor",
									(Le, ...Fe) =>
										(me.followActiveEditor = !me.followActiveEditor),
								),
							),
							this.D(
								R.$ZX.appendMenuItem(R.$XX.TimelineTitle, {
									command: {
										id: "timeline.toggleFollowActiveEditor",
										title: (0, t.localize2)(11026, "Pin the Current Timeline"),
										icon: $e,
										category: (0, t.localize2)(11027, "Timeline"),
									},
									group: "navigation",
									order: 98,
									when: e.$61c,
								}),
							),
							this.D(
								R.$ZX.appendMenuItem(R.$XX.TimelineTitle, {
									command: {
										id: "timeline.toggleFollowActiveEditor",
										title: (0, t.localize2)(
											11028,
											"Unpin the Current Timeline",
										),
										icon: ye,
										category: (0, t.localize2)(11029, "Timeline"),
									},
									group: "navigation",
									order: 98,
									when: e.$61c.toNegated(),
								}),
							),
							this.D(ve.onDidChangeProviders(() => this.q())),
							this.q();
					}
					getItemActions(me) {
						return this.n(R.$XX.TimelineItemContext, {
							key: "timelineItem",
							value: me.contextValue,
						}).primary;
					}
					getItemContextActions(me) {
						return this.n(R.$XX.TimelineItemContext, {
							key: "timelineItem",
							value: me.contextValue,
						}).secondary;
					}
					n(me, ve) {
						const ge = this.j.createOverlay([
								["view", this.f.id],
								[ve.key, ve.value],
							]),
							be = this.m.getMenuActions(me, ge, { shouldForwardArgs: !0 }),
							Fe = { primary: [], secondary: [] };
						return (0, A.$Jyb)(be, Fe, "inline"), Fe;
					}
					q() {
						this.c.clear();
						const me = new Set(
							JSON.parse(
								this.h.get(
									"timeline.excludeSources",
									J.StorageScope.PROFILE,
									"[]",
								),
							),
						);
						for (const ve of this.g.getSources())
							this.c.add(
								(0, R.$4X)(
									class extends R.$3X {
										constructor() {
											super({
												id: `timeline.toggleExcludeSource:${ve.id}`,
												title: ve.label,
												menu: {
													id: R.$XX.TimelineFilterSubMenu,
													group: "navigation",
												},
												toggled: l.$Kj
													.regex(
														"timelineExcludeSources",
														new RegExp(`\\b${(0, n.$of)(ve.id)}\\b`),
													)
													.negate(),
											});
										}
										run(ge, ...be) {
											me.has(ve.id) ? me.delete(ve.id) : me.add(ve.id),
												ge
													.get(J.$lq)
													.store(
														"timeline.excludeSources",
														JSON.stringify([...me.keys()]),
														J.StorageScope.PROFILE,
														J.StorageTarget.USER,
													);
										}
									},
								),
							);
					}
				};
				ue = Ne([j(1, v.$57), j(2, J.$lq), j(3, l.$6j), j(4, R.$YX)], ue);
			},
		),
		define(
			de[719],
			he([
				1, 0, 6, 30, 59, 5, 44, 631, 23, 296, 313, 478, 628, 19, 9, 68, 22, 231,
				3, 20,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f, b) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Adc = e.$zdc = void 0),
					(e.$zdc = (0, E.$Mi)("textEditorService"));
				let s = class extends f.$1c {
					constructor(y, $, v, S, I) {
						super(),
							(this.c = y),
							(this.f = $),
							(this.g = v),
							(this.h = S),
							(this.j = I),
							(this.a = new w.$Gc()),
							(this.b = i.$Io.as(C.$a1.EditorFactory).getFileEditorFactory()),
							this.m();
					}
					m() {
						this.D(
							this.j.registerEditor(
								"*",
								{
									id: C.$b1.id,
									label: C.$b1.displayName,
									detail: C.$b1.providerDisplayName,
									priority: o.RegisteredEditorPriority.builtin,
								},
								{},
								{
									createEditorInput: (y) => ({
										editor: this.createTextEditor(y),
									}),
									createUntitledEditorInput: (y) => ({
										editor: this.createTextEditor(y),
									}),
									createDiffEditorInput: (y) => ({
										editor: this.createTextEditor(y),
									}),
								},
							),
						);
					}
					async resolveTextEditor(y) {
						return this.createTextEditor(y);
					}
					createTextEditor(y) {
						if ((0, C.$o1)(y)) return this.createTextEditor(y.result);
						if ((0, C.$j1)(y)) {
							const S = this.createTextEditor(y.original),
								I = this.createTextEditor(y.modified);
							return this.f.createInstance(
								r.$GVb,
								y.label,
								y.description,
								S,
								I,
								void 0,
							);
						}
						if ((0, C.$m1)(y)) {
							const S = this.createTextEditor(y.primary),
								I = this.createTextEditor(y.secondary);
							return this.f.createInstance(u.$iY, y.label, y.description, I, S);
						}
						const $ = y;
						if (
							$.forceUntitled ||
							!$.resource ||
							$.resource.scheme === m.Schemas.untitled
						) {
							const S = {
								languageId: $.languageId,
								initialValue: $.contents,
								encoding: $.encoding,
							};
							let I;
							return (
								$.resource?.scheme === m.Schemas.untitled
									? (I = this.c.create({ untitledResource: $.resource, ...S }))
									: (I = this.c.create({
											associatedResource: $.resource,
											...S,
										})),
								this.n(I.resource, () => this.f.createInstance(h.$T1b, I))
							);
						}
						const v = y;
						if (v.resource instanceof n.URI) {
							const S = v.label || (0, c.$kh)(v.resource),
								I = v.resource,
								T = this.g.asCanonicalUri(I);
							return this.n(
								T,
								() =>
									v.forceFile || this.h.hasProvider(T)
										? this.b.createFileEditor(
												T,
												I,
												v.label,
												v.description,
												v.encoding,
												v.languageId,
												v.contents,
												this.f,
											)
										: this.f.createInstance(
												a.$S1b,
												T,
												v.label,
												v.description,
												v.languageId,
												v.contents,
											),
								(P) => {
									P instanceof h.$T1b ||
										(P instanceof a.$S1b
											? (S && P.setName(S),
												v.description && P.setDescription(v.description),
												v.languageId && P.setPreferredLanguageId(v.languageId),
												typeof v.contents == "string" &&
													P.setPreferredContents(v.contents))
											: (P.setPreferredResource(I),
												v.label && P.setPreferredName(v.label),
												v.description &&
													P.setPreferredDescription(v.description),
												v.encoding && P.setPreferredEncoding(v.encoding),
												v.languageId && P.setPreferredLanguageId(v.languageId),
												typeof v.contents == "string" &&
													P.setPreferredContents(v.contents)));
								},
							);
						}
						throw new Error(
							`ITextEditorService: Unable to create texteditor from ${JSON.stringify(y)}`,
						);
					}
					n(y, $, v) {
						let S = this.a.get(y);
						return S
							? (v?.(S), S)
							: ((S = $()),
								this.a.set(y, S),
								t.Event.once(S.onWillDispose)(() => this.a.delete(y)),
								S);
					}
				};
				(e.$Adc = s),
					(e.$Adc = s =
						Ne(
							[j(0, d.$7Y), j(1, E.$Li), j(2, g.$Vl), j(3, p.$ll), j(4, o.$E6)],
							s,
						)),
					(0, b.$lK)(e.$zdc, s, b.InstantiationType.Eager);
			},
		),
		define(
			de[3885],
			he([1, 0, 3, 9, 719, 19, 334, 403, 22]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$8Mc = e.$7Mc = void 0);
				class r {
					canSerialize(h) {
						return !0;
					}
					serialize(h) {
						const c = h,
							n = c.resource,
							g = c.preferredResource,
							p = {
								resourceJSON: n.toJSON(),
								preferredResourceJSON: (0, E.$gh)(n, g) ? void 0 : g,
								name: c.getPreferredName(),
								description: c.getPreferredDescription(),
								encoding: c.getEncoding(),
								modeId: c.getPreferredLanguageId(),
							};
						return JSON.stringify(p);
					}
					deserialize(h, c) {
						return h.invokeFunction((n) => {
							const g = JSON.parse(c),
								p = i.URI.revive(g.resourceJSON),
								o = i.URI.revive(g.preferredResourceJSON),
								f = g.name,
								b = g.description,
								s = g.encoding,
								l = g.modeId,
								y = n
									.get(w.$zdc)
									.createTextEditor({
										resource: p,
										label: f,
										description: b,
										encoding: s,
										languageId: l,
										forceFile: !0,
									});
							return o && y.setPreferredResource(o), y;
						});
					}
				}
				e.$7Mc = r;
				let u = class extends t.$1c {
					static {
						this.ID = "workbench.contrib.fileEditorWorkingCopyEditorHandler";
					}
					constructor(h, c, n) {
						super(),
							(this.a = c),
							(this.b = n),
							this.D(h.registerHandler(this));
					}
					handles(h) {
						return h.typeId === C.$OO && this.b.canHandleResource(h.resource);
					}
					c(h) {
						return h.typeId === C.$OO && this.b.hasProvider(h.resource);
					}
					isOpen(h, c) {
						return this.c(h) ? (0, E.$gh)(h.resource, c.resource) : !1;
					}
					createEditor(h) {
						return this.a.createTextEditor({
							resource: h.resource,
							forceFile: !0,
						});
					}
				};
				(e.$8Mc = u),
					(e.$8Mc = u = Ne([j(0, d.$bZ), j(1, w.$zdc), j(2, m.$ll)], u));
			},
		),
		define(
			de[3886],
			he([
				1, 0, 3, 19, 4, 10, 81, 30, 25, 224, 313, 231, 719, 131, 133, 22, 3536,
				5,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$cEc = void 0),
					(w = mt(w));
				let f = class extends t.$1c {
					static {
						this.ID = "workbench.contrib.preferences";
					}
					constructor(l, y, $, v, S, I, T, P) {
						super(),
							(this.b = y),
							(this.c = $),
							(this.f = v),
							(this.g = S),
							(this.h = I),
							(this.j = T),
							(this.m = P),
							this.D(
								this.h.onDidChangeConfiguration((L) => {
									(L.affectsConfiguration(c.$$Z) ||
										L.affectsConfiguration(c.$0Z)) &&
										this.n();
								}),
							),
							this.n();
						const k = this.D(this.b.createInstance(p.$bEc));
						this.D(l.registerProvider(p.$bEc.SCHEMA, k));
					}
					n() {
						(0, t.$Vc)(this.a),
							(this.h.getValue(c.$$Z) || this.h.getValue(c.$0Z)) &&
								(this.a = this.j.registerEditor(
									"**/settings.json",
									{
										id: u.$iY.ID,
										label: w.localize(8660, null),
										priority: a.RegisteredEditorPriority.builtin,
									},
									{},
									{
										createEditorInput: ({ resource: l, options: y }) => {
											if ((0, i.$gh)(l, this.f.currentProfile.settingsResource))
												return {
													editor: this.c.createSplitJsonEditorInput(
														E.ConfigurationTarget.USER_LOCAL,
														l,
													),
													options: y,
												};
											const $ = this.g.getWorkbenchState();
											if ($ === m.WorkbenchState.FOLDER) {
												const v = this.g.getWorkspace().folders;
												if ((0, i.$gh)(l, v[0].toResource(c.$9Z)))
													return {
														editor: this.c.createSplitJsonEditorInput(
															E.ConfigurationTarget.WORKSPACE,
															l,
														),
														options: y,
													};
											} else if ($ === m.WorkbenchState.WORKSPACE) {
												const v = this.g.getWorkspace().folders;
												for (const S of v)
													if ((0, i.$gh)(l, S.toResource(c.$9Z)))
														return {
															editor: this.c.createSplitJsonEditorInput(
																E.ConfigurationTarget.WORKSPACE_FOLDER,
																l,
															),
															options: y,
														};
											}
											return {
												editor: this.m.createTextEditor({ resource: l }),
												options: y,
											};
										},
									},
								));
					}
					dispose() {
						(0, t.$Vc)(this.a), super.dispose();
					}
				};
				(e.$cEc = f),
					(e.$cEc = f =
						Ne(
							[
								j(0, g.$ll),
								j(1, o.$Li),
								j(2, c.$7Z),
								j(3, n.$P8),
								j(4, m.$Vi),
								j(5, E.$gj),
								j(6, a.$E6),
								j(7, h.$zdc),
							],
							f,
						)),
					d.$Io
						.as(C.$No.Configuration)
						.registerConfiguration({
							...r.$v6,
							properties: {
								"workbench.settings.enableNaturalLanguageSearch": {
									type: "boolean",
									description: w.localize(8661, null),
									default: !0,
									scope: C.ConfigurationScope.WINDOW,
									tags: ["usesOnlineServices"],
								},
								"workbench.settings.settingsSearchTocBehavior": {
									type: "string",
									enum: ["hide", "filter"],
									enumDescriptions: [
										w.localize(8662, null),
										w.localize(8663, null),
									],
									description: w.localize(8664, null),
									default: "filter",
									scope: C.ConfigurationScope.WINDOW,
								},
							},
						});
			},
		),
		define(
			de[1051],
			he([
				1, 0, 5, 44, 223, 313, 59, 22, 6, 9, 19, 296, 825, 66, 18, 10, 3, 24,
				56, 20, 28, 3257, 15, 25, 249, 68, 231, 174, 87, 1291, 719, 45, 90, 102,
				1706,
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
				var R;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Bdc = void 0);
				let O = class extends p.$1c {
					static {
						R = this;
					}
					constructor(U, z, F, x, H, q, V, G, K, J, W, X, Y, ie) {
						if (
							(super(),
							(this.n = z),
							(this.q = F),
							(this.r = x),
							(this.s = H),
							(this.t = q),
							(this.u = V),
							(this.w = G),
							(this.y = K),
							(this.z = J),
							(this.C = W),
							(this.F = X),
							(this.G = Y),
							(this.H = ie),
							(this.a = this.D(new m.$re())),
							(this.onDidActiveEditorChange = this.a.event),
							(this.b = this.D(new m.$re())),
							(this.onDidVisibleEditorsChange = this.b.event),
							(this.c = this.D(new m.$re())),
							(this.onDidEditorsChange = this.c.event),
							(this.f = this.D(new m.$re())),
							(this.onWillOpenEditor = this.f.event),
							(this.g = this.D(new m.$re())),
							(this.onDidCloseEditor = this.g.event),
							(this.h = this.D(new m.$re())),
							(this.onDidOpenEditorFail = this.h.event),
							(this.j = this.D(new m.$re())),
							(this.onDidMostRecentlyActiveEditorsChange = this.j.event),
							(this.J = void 0),
							(this.P = new C.$Gc()),
							(this.W = !1),
							(this.m = U ?? z),
							(this.$ = this.D(this.q.createInstance(l.$xdc, this.m))),
							this.X(),
							this.I(),
							!R.hasRegisteredActions)
						)
							for (const ne of R.registeredActions)
								ne[1](this.F, this, this.G, this.H);
						R.hasRegisteredActions = !0;
					}
					static {
						this.hasRegisteredActions = !1;
					}
					static {
						this.registeredActions = [];
					}
					static registerEditorAction(U, z) {
						if (this.registeredActions.find(([F, x]) => F === U)) {
							console.error(`Editor action with id ${U} already registered`);
							return;
						}
						this.registeredActions.push([U, z]);
					}
					createScoped(U, z) {
						return z.add(
							new R(
								U === "main" ? this.n.mainPart : U,
								this.n,
								this.q,
								this.r,
								this.s,
								this.t,
								this.u,
								this.w,
								this.y,
								this.z,
								this.C,
								this.F,
								this.G,
								this.H,
							),
						);
					}
					I() {
						this.m === this.n.mainPart || this.m === this.n
							? this.n.whenReady.then(() => this.L())
							: this.L(),
							this.D(this.m.onDidChangeActiveGroup((U) => this.M(U))),
							this.D(this.m.onDidAddGroup((U) => this.O(U))),
							this.D(
								this.$.onDidMostRecentlyActiveEditorsChange(() =>
									this.j.fire(),
								),
							),
							this.D(this.onDidVisibleEditorsChange(() => this.Q())),
							this.D(this.r.onDidRunOperation((U) => this.R(U))),
							this.D(this.r.onDidFilesChange((U) => this.S(U))),
							this.D(this.s.onDidChangeConfiguration((U) => this.X(U)));
					}
					L() {
						for (const U of this.m.groups) this.O(U);
						this.activeEditor && (this.N(), this.b.fire());
					}
					M(U) {
						U === this.m.activeGroup &&
							((!this.J && !U.activeEditor) || this.N());
					}
					N() {
						const U = this.m.activeGroup;
						(this.J = U.activeEditor ?? void 0), this.a.fire();
					}
					O(U) {
						const z = new p.$Zc();
						z.add(
							U.onDidModelChange((F) => {
								this.c.fire({ groupId: U.id, event: F });
							}),
						),
							z.add(
								U.onDidActiveEditorChange(() => {
									this.M(U), this.b.fire();
								}),
							),
							z.add(
								U.onWillOpenEditor((F) => {
									this.f.fire(F);
								}),
							),
							z.add(
								U.onDidCloseEditor((F) => {
									this.g.fire(F);
								}),
							),
							z.add(
								U.onDidOpenEditorFail((F) => {
									this.h.fire({ editor: F, groupId: U.id });
								}),
							),
							m.Event.once(U.onWillDispose)(() => {
								(0, p.$Vc)(z);
							});
					}
					Q() {
						const U = new C.$Hc();
						for (const z of this.visibleEditors) {
							const F = (0, o.$Qb)(
								(0, o.$Lb)([
									i.$A1.getCanonicalUri(z, {
										supportSideBySide: i.SideBySideEditor.PRIMARY,
									}),
									i.$A1.getCanonicalUri(z, {
										supportSideBySide: i.SideBySideEditor.SECONDARY,
									}),
								]),
								(x) => x.toString(),
							);
							for (const x of F)
								this.r.hasProvider(x) &&
									!this.t.isInsideWorkspace(x) &&
									U.add(x);
						}
						for (const z of this.P.keys())
							U.has(z) || ((0, p.$Vc)(this.P.get(z)), this.P.delete(z));
						for (const z of U.keys())
							if (!this.P.get(z)) {
								const F = this.r.watch(z);
								this.P.set(z, F);
							}
					}
					async R(U) {
						U.isOperation(d.FileOperation.MOVE) &&
							this.U(U.resource, U.target.resource),
							(U.isOperation(d.FileOperation.DELETE) ||
								U.isOperation(d.FileOperation.MOVE)) &&
								this.Y(U.resource, !1, U.target ? U.target.resource : void 0);
					}
					S(U) {
						U.gotDeleted() && this.Y(U, !0);
					}
					async U(U, z) {
						for (const F of this.m.groups) {
							const x = [];
							for (const H of F.editors) {
								const q = H.resource;
								if (!q || !this.u.extUri.isEqualOrParent(q, U)) continue;
								let V;
								if (this.u.extUri.isEqual(U, q)) V = z;
								else {
									const J = (0, v.$Sg)(
										q.path,
										U.path,
										this.u.extUri.ignorePathCasing(q),
									);
									V = (0, u.$nh)(z, q.path.substr(J + U.path.length + 1));
								}
								const G = await H.rename(F.id, V);
								if (!G) return;
								const K = {
									preserveFocus: !0,
									pinned: F.isPinned(H),
									sticky: F.isSticky(H),
									index: F.getIndexOfEditor(H),
									inactive: !F.isActive(H),
								};
								(0, i.$r1)(G.editor)
									? x.push({
											editor: H,
											replacement: G.editor,
											options: { ...G.options, ...K },
										})
									: x.push({
											editor: H,
											replacement: {
												...G.editor,
												options: { ...G.editor.options, ...K },
											},
										});
							}
							x.length && this.replaceEditors(x, F);
						}
					}
					X(U) {
						if (
							U &&
							!U.affectsConfiguration("workbench.editor.closeOnFileDelete")
						)
							return;
						const z = this.s.getValue();
						typeof z.workbench?.editor?.closeOnFileDelete == "boolean"
							? (this.W = z.workbench.editor.closeOnFileDelete)
							: (this.W = !1);
					}
					Y(U, z, F) {
						for (const x of this.Z({
							includeUntitled: !1,
							supportSideBySide: !0,
						}))
							(async () => {
								const H = x.resource;
								if (H && (this.W || !z)) {
									if (F && this.u.extUri.isEqualOrParent(H, F)) return;
									let q = !1;
									if (
										(U instanceof d.$El
											? (q = U.contains(H, d.FileChangeType.DELETED))
											: (q = this.u.extUri.isEqualOrParent(H, U)),
										!q)
									)
										return;
									let V = !1;
									z &&
										this.r.hasProvider(H) &&
										(await (0, y.$Nh)(100), (V = await this.r.exists(H))),
										!V && !x.isDisposed() && x.dispose();
								}
							})();
					}
					Z(U) {
						const z = [];
						function F(x) {
							(x.hasCapability(i.EditorInputCapabilities.Untitled) &&
								!U.includeUntitled) ||
								x.isDirty() ||
								z.push(x);
						}
						for (const x of this.editors)
							U.supportSideBySide && x instanceof E.$iY
								? (F(x.primary), F(x.secondary))
								: F(x);
						return z;
					}
					get activeEditorPane() {
						return this.m.activeGroup?.activeEditorPane;
					}
					get activeTextEditorControl() {
						const U = this.activeEditorPane;
						if (U) {
							const z = U.getControl();
							if ((0, f.$0sb)(z) || (0, f.$$sb)(z)) return z;
							if ((0, f.$atb)(z) && (0, f.$0sb)(z.activeCodeEditor))
								return z.activeCodeEditor;
						}
					}
					get activeTextEditorLanguageId() {
						let U;
						const z = this.activeTextEditorControl;
						return (
							(0, f.$$sb)(z) ? (U = z.getModifiedEditor()) : (U = z),
							U?.getModel()?.getLanguageId()
						);
					}
					get count() {
						return this.$.count;
					}
					get editors() {
						return this.getEditors(i.EditorsOrder.SEQUENTIAL).map(
							({ editor: U }) => U,
						);
					}
					getEditors(U, z) {
						switch (U) {
							case i.EditorsOrder.MOST_RECENTLY_ACTIVE:
								return z?.excludeSticky
									? this.$.editors.filter(
											({ groupId: F, editor: x }) =>
												!this.m.getGroup(F)?.isSticky(x),
										)
									: this.$.editors;
							case i.EditorsOrder.SEQUENTIAL: {
								const F = [];
								for (const x of this.m.getGroups(c.GroupsOrder.GRID_APPEARANCE))
									F.push(
										...x
											.getEditors(i.EditorsOrder.SEQUENTIAL, z)
											.map((H) => ({ editor: H, groupId: x.id })),
									);
								return F;
							}
						}
					}
					get activeEditor() {
						const U = this.m.activeGroup;
						return U ? (U.activeEditor ?? void 0) : void 0;
					}
					get visibleEditorPanes() {
						return (0, o.$Lb)(this.m.groups.map((U) => U.activeEditorPane));
					}
					get visibleTextEditorControls() {
						const U = [];
						for (const z of this.visibleEditorPanes) {
							const F = [];
							z instanceof h.$AVb
								? (F.push(z.getPrimaryEditorPane()?.getControl()),
									F.push(z.getSecondaryEditorPane()?.getControl()))
								: F.push(z.getControl());
							for (const x of F)
								((0, f.$0sb)(x) || (0, f.$$sb)(x)) && U.push(x);
						}
						return U;
					}
					get visibleEditors() {
						return (0, o.$Lb)(this.m.groups.map((U) => U.activeEditor));
					}
					async openEditor(U, z, F) {
						let x,
							H = (0, i.$r1)(U) ? z : U.options,
							q;
						if (((0, n.$MY)(z) && (F = z), !(0, i.$r1)(U))) {
							const V = await this.w.resolveEditor(U, F);
							if (V === I.ResolvedStatus.ABORT) return;
							(0, i.$w1)(V) && ((x = V.editor), (H = V.options), (q = V.group));
						}
						if (
							(x || (x = (0, i.$r1)(U) ? U : await this.C.resolveTextEditor(U)),
							!q)
						) {
							let V;
							const G = this.q.invokeFunction(
								k.$ydc,
								{ editor: x, options: H },
								F,
							);
							G instanceof Promise ? ([q, V] = await G) : ([q, V] = G),
								V && (H = { ...H, activation: V });
						}
						return q.openEditor(x, H);
					}
					async openEditors(U, z, F) {
						if (F?.validateTrust && !(await this.ab(U))) return [];
						const x = new Map();
						for (const q of U) {
							let V, G;
							if (!(0, i.$v1)(q)) {
								const J = await this.w.resolveEditor(q, z);
								if (J === I.ResolvedStatus.ABORT) continue;
								(0, i.$w1)(J) && ((V = J), (G = J.group));
							}
							if (
								(V ||
									(V = (0, i.$v1)(q)
										? q
										: {
												editor: await this.C.resolveTextEditor(q),
												options: q.options,
											}),
								!G)
							) {
								const J = this.q.invokeFunction(k.$ydc, V, z);
								J instanceof Promise ? ([G] = await J) : ([G] = J);
							}
							let K = x.get(G);
							K || ((K = []), x.set(G, K)), K.push(V);
						}
						const H = [];
						for (const [q, V] of x) H.push(q.openEditors(V));
						return (0, o.$Lb)(await y.Promises.settled(H));
					}
					async ab(U) {
						const { resources: z, diffMode: F, mergeMode: x } = this.bb(U);
						switch (await this.y.requestOpenFilesTrust(z)) {
							case T.WorkspaceTrustUriResponse.Open:
								return !0;
							case T.WorkspaceTrustUriResponse.OpenInNewWindow:
								return (
									await this.z.openWindow(
										z.map((q) => ({ fileUri: q })),
										{ forceNewWindow: !0, diffMode: F, mergeMode: x },
									),
									!1
								);
							case T.WorkspaceTrustUriResponse.Cancel:
								return !1;
						}
					}
					bb(U) {
						const z = new C.$Hc();
						let F = !1,
							x = !1;
						for (const H of U)
							if ((0, i.$v1)(H)) {
								const q = i.$A1.getOriginalUri(H.editor, {
									supportSideBySide: i.SideBySideEditor.BOTH,
								});
								r.URI.isUri(q)
									? z.add(q)
									: q &&
										(q.primary && z.add(q.primary),
										q.secondary && z.add(q.secondary),
										(F = H.editor instanceof a.$GVb));
							} else
								(0, i.$o1)(H) &&
									(r.URI.isUri(H.input1) && z.add(H.input1.resource),
									r.URI.isUri(H.input2) && z.add(H.input2.resource),
									r.URI.isUri(H.base) && z.add(H.base.resource),
									r.URI.isUri(H.result) && z.add(H.result.resource),
									(x = !0)),
									(0, i.$j1)(H)
										? (r.URI.isUri(H.original.resource) &&
												z.add(H.original.resource),
											r.URI.isUri(H.modified.resource) &&
												z.add(H.modified.resource),
											(F = !0))
										: (0, i.$i1)(H) && z.add(H.resource);
						return {
							resources: Array.from(z.keys()),
							diffMode: F,
							mergeMode: x,
						};
					}
					isOpened(U) {
						return this.$.hasEditor({
							resource: this.u.asCanonicalUri(U.resource),
							typeId: U.typeId,
							editorId: U.editorId,
						});
					}
					isVisible(U) {
						for (const z of this.m.groups)
							if (z.activeEditor?.matches(U)) return !0;
						return !1;
					}
					async closeEditor({ editor: U, groupId: z }, F) {
						await this.m.getGroup(z)?.closeEditor(U, F);
					}
					async closeEditors(U, z) {
						const F = new Map();
						for (const { editor: x, groupId: H } of U) {
							const q = this.m.getGroup(H);
							if (!q) continue;
							let V = F.get(q);
							V || ((V = []), F.set(q, V)), V.push(x);
						}
						for (const [x, H] of F) await x.closeEditors(H, z);
					}
					findEditors(U, z, F) {
						const x = r.URI.isUri(U) ? U : U.resource,
							H = r.URI.isUri(U) ? void 0 : U.typeId;
						if (
							z?.supportSideBySide !== i.SideBySideEditor.ANY &&
							z?.supportSideBySide !== i.SideBySideEditor.SECONDARY &&
							!this.$.hasEditors(x)
						)
							return r.URI.isUri(U) || (0, s.$sg)(F) ? [] : void 0;
						if ((0, s.$sg)(F)) {
							const q = [];
							for (const V of this.m.getGroups(
								c.GroupsOrder.MOST_RECENTLY_ACTIVE,
							)) {
								const G = [];
								if (r.URI.isUri(U)) G.push(...this.findEditors(U, z, V));
								else {
									const K = this.findEditors(U, z, V);
									K && G.push(K);
								}
								q.push(...G.map((K) => ({ editor: K, groupId: V.id })));
							}
							return q;
						} else {
							const q = typeof F == "number" ? this.m.getGroup(F) : F;
							if (r.URI.isUri(U)) return q ? q.findEditors(x, z) : [];
							{
								if (!q) return;
								const V = q.findEditors(x, z);
								for (const G of V) if (G.typeId === H) return G;
								return;
							}
						}
					}
					async replaceEditors(U, z) {
						const F = typeof z == "number" ? this.m.getGroup(z) : z,
							x = [];
						for (const H of U) {
							let q;
							if (!(0, i.$r1)(H.replacement)) {
								const V = await this.w.resolveEditor(H.replacement, F);
								if (V === I.ResolvedStatus.ABORT) continue;
								(0, i.$w1)(V) &&
									(q = {
										editor: H.editor,
										replacement: V.editor,
										options: V.options,
										forceReplaceDirty: H.forceReplaceDirty,
									});
							}
							q ||
								(q = {
									editor: H.editor,
									replacement: (0, c.$FY)(H)
										? H.replacement
										: await this.C.resolveTextEditor(H.replacement),
									options: (0, c.$FY)(H) ? H.options : H.replacement.options,
									forceReplaceDirty: H.forceReplaceDirty,
								}),
								x.push(q);
						}
						return F?.replaceEditors(x);
					}
					async save(U, z) {
						Array.isArray(U) || (U = [U]);
						const F = this.db(U),
							x = [],
							H = [];
						if (z?.saveAs) H.push(...F);
						else
							for (const { groupId: V, editor: G } of F)
								G.hasCapability(i.EditorInputCapabilities.Untitled)
									? H.push({ groupId: V, editor: G })
									: x.push({ groupId: V, editor: G });
						const q = await y.Promises.settled(
							x.map(
								({ groupId: V, editor: G }) => (
									z?.reason === i.SaveReason.EXPLICIT &&
										this.m.getGroup(V)?.pinEditor(G),
									G.save(V, z)
								),
							),
						);
						for (const { groupId: V, editor: G } of H) {
							if (G.isDisposed()) continue;
							const J = {
									pinned: !0,
									viewState: (await this.openEditor(G, V))?.getViewState(),
								},
								W = z?.saveAs ? await G.saveAs(V, z) : await G.save(V, z);
							if ((q.push(W), !W)) break;
							if (!G.matches(W)) {
								const X = G.hasCapability(i.EditorInputCapabilities.Untitled)
									? this.m.groups.map((Y) => Y.id)
									: [V];
								for (const Y of X)
									W instanceof w.$LO
										? await this.replaceEditors(
												[{ editor: G, replacement: W, options: J }],
												Y,
											)
										: await this.replaceEditors(
												[{ editor: G, replacement: { ...W, options: J } }],
												Y,
											);
							}
						}
						return { success: q.every((V) => !!V), editors: (0, o.$Lb)(q) };
					}
					saveAll(U) {
						return this.save(this.cb(U), U);
					}
					async revert(U, z) {
						Array.isArray(U) || (U = [U]);
						const F = this.db(U);
						return (
							await y.Promises.settled(
								F.map(
									async ({ groupId: x, editor: H }) => (
										this.m.getGroup(x)?.pinEditor(H), H.revert(x, z)
									),
								),
							),
							!F.some(({ editor: x }) => x.isDirty())
						);
					}
					async revertAll(U) {
						return this.revert(this.cb(U), U);
					}
					cb(U) {
						const z = [];
						for (const F of this.m.getGroups(
							c.GroupsOrder.MOST_RECENTLY_ACTIVE,
						))
							for (const x of F.getEditors(i.EditorsOrder.MOST_RECENTLY_ACTIVE))
								x.isModified() &&
									(((typeof U?.includeUntitled == "boolean" ||
										!U?.includeUntitled?.includeScratchpad) &&
										x.hasCapability(i.EditorInputCapabilities.Scratchpad)) ||
										(!U?.includeUntitled &&
											x.hasCapability(i.EditorInputCapabilities.Untitled)) ||
										(U?.excludeSticky && F.isSticky(x)) ||
										z.push({ groupId: F.id, editor: x }));
						return z;
					}
					db(U) {
						const z = [];
						for (const { editor: F, groupId: x } of U)
							z.some((H) => H.editor.matches(F)) ||
								z.push({ editor: F, groupId: x });
						return z;
					}
					dispose() {
						super.dispose(),
							this.P.forEach((U) => (0, p.$Vc)(U)),
							this.P.clear();
					}
				};
				(e.$Bdc = O),
					(e.$Bdc =
						O =
						R =
							Ne(
								[
									j(1, c.$EY),
									j(2, t.$Li),
									j(3, d.$ll),
									j(4, g.$gj),
									j(5, $.$Vi),
									j(6, S.$Vl),
									j(7, I.$E6),
									j(8, T.$qO),
									j(9, P.$asb),
									j(10, L.$zdc),
									j(11, D.$0zb),
									j(12, M.$aM),
									j(13, A.$Tcc),
								],
								O,
							)),
					(0, b.$lK)(n.$IY, new N.$Ji(O, [void 0], !1));
			},
		),
		define(
			de[3887],
			he([
				1, 0, 29, 6, 187, 3, 23, 9, 498, 56, 67, 42, 4, 10, 81, 22, 20, 5, 39,
				73, 40, 30, 25, 44, 313, 423, 66, 18, 1310, 131, 1312, 838, 143, 719,
				85, 28, 328, 133, 129, 59, 19, 465, 37, 53, 84,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$vvc = void 0),
					(C = mt(C)),
					(h = mt(h));
				const G = `{
}`;
				let K = class extends E.$1c {
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
					) {
						super(),
							(this.n = W),
							(this.q = X),
							(this.r = Y),
							(this.s = ie),
							(this.t = ne),
							(this.u = ee),
							(this.w = _),
							(this.y = te),
							(this.z = Q),
							(this.C = Z),
							(this.F = le),
							(this.G = oe),
							(this.H = ae),
							(this.I = pe),
							(this.J = ye),
							(this.L = ue),
							(this.a = this.D(new i.$re())),
							(this.b = this.D(new i.$re())),
							(this.onDidDefaultSettingsContentChanged = this.b.event),
							(this.j = new z.$Hc()),
							(this.m = void 0),
							(this.defaultKeybindingsResource = d.URI.from({
								scheme: C.Schemas.vscode,
								authority: "defaultsettings",
								path: "/keybindings.json",
							})),
							(this.M = d.URI.from({
								scheme: C.Schemas.vscode,
								authority: "defaultsettings",
								path: "/defaultSettings.json",
							})),
							this.D(
								se.onDidUpdateKeybindings(() => {
									const fe = re.getModel(this.defaultKeybindingsResource);
									fe && re.updateModel(fe, (0, D.$4Z)(se));
								}),
							),
							this.D($e.registerHandler(this));
					}
					get userSettingsResource() {
						return this.y.currentProfile.settingsResource;
					}
					get workspaceSettingsResource() {
						if (this.u.getWorkbenchState() === y.WorkbenchState.EMPTY)
							return null;
						const W = this.u.getWorkspace();
						return W.configuration || W.folders[0].toResource(k.$9Z);
					}
					createSettingsEditor2Input() {
						return new L.$uvc(this);
					}
					getFolderSettingsResource(W) {
						const X = this.u.getWorkspaceFolder(W);
						return X ? X.toResource(k.$9Z) : null;
					}
					hasDefaultSettingsContent(W) {
						return (
							this.W(W) ||
							(0, F.$gh)(W, this.M) ||
							(0, F.$gh)(W, this.defaultKeybindingsResource)
						);
					}
					getDefaultSettingsContent(W) {
						if (this.W(W)) {
							const X = this.U(W),
								Y = this.db(X);
							return (
								this.j.has(W) ||
									(this.D(Y.onDidChange(() => this.b.fire(W))), this.j.add(W)),
								Y.getContentWithoutMostCommonlyUsed(!0)
							);
						}
						if ((0, F.$gh)(W, this.M))
							return (
								this.h ||
									((this.h = this.D(
										this.w.createInstance(
											D.$3Z,
											this.db(c.ConfigurationTarget.USER_LOCAL),
										),
									)),
									this.D(this.h.onDidContentChanged(() => this.b.fire(W)))),
								this.h.content
							);
						if ((0, F.$gh)(W, this.defaultKeybindingsResource))
							return this.w.createInstance(D.$5Z, W).content;
					}
					async createPreferencesEditorModel(W) {
						if (this.W(W)) return this.cb(W);
						if (
							this.userSettingsResource.toString() === W.toString() ||
							this.z.defaultProfile.settingsResource.toString() === W.toString()
						)
							return this.bb(c.ConfigurationTarget.USER_LOCAL, W);
						const X = await this.getEditableSettingsURI(
							c.ConfigurationTarget.WORKSPACE,
						);
						if (X && X.toString() === W.toString())
							return this.bb(c.ConfigurationTarget.WORKSPACE, X);
						if (this.u.getWorkbenchState() === y.WorkbenchState.WORKSPACE) {
							const ne = await this.getEditableSettingsURI(
								c.ConfigurationTarget.WORKSPACE_FOLDER,
								W,
							);
							if (ne && ne.toString() === W.toString())
								return this.bb(c.ConfigurationTarget.WORKSPACE_FOLDER, W);
						}
						const Y = await this.H.getEnvironment(),
							ie = Y ? Y.settingsPath : null;
						return ie && ie.toString() === W.toString()
							? this.bb(c.ConfigurationTarget.USER_REMOTE, W)
							: null;
					}
					openRawDefaultSettings() {
						return this.n.openEditor({ resource: this.M });
					}
					openRawUserSettings() {
						return this.n.openEditor({ resource: this.userSettingsResource });
					}
					N() {
						return this.s.getValue("workbench.settings.editor") === "json";
					}
					openSettings(W = {}) {
						return (
							(W = { ...W, target: c.ConfigurationTarget.USER_LOCAL }),
							W.query && (W.jsonEditor = !1),
							this.O(this.userSettingsResource, W)
						);
					}
					openLanguageSpecificSettings(W, X = {}) {
						return (
							this.N()
								? ((X.query = void 0),
									(X.revealSetting = { key: `[${W}]`, edit: !0 }))
								: (X.query = `@lang:${W}${X.query ? ` ${X.query}` : ""}`),
							(X.target = X.target ?? c.ConfigurationTarget.USER_LOCAL),
							this.O(this.userSettingsResource, X)
						);
					}
					O(W, X) {
						return (
							(X = { ...X, jsonEditor: X.jsonEditor ?? this.N() }),
							X.jsonEditor ? this.Q(W, X) : this.P(X)
						);
					}
					async P(W) {
						const X = this.createSettingsEditor2Input();
						return (
							(W = { ...W, focusSearch: !0 }),
							await this.n.openEditor(
								X,
								(0, k.$6Z)(W),
								W.openToSide ? T.$KY : void 0,
							),
							this.q.activeGroup.activeEditorPane
						);
					}
					openApplicationSettings(W = {}) {
						return (
							(W = { ...W, target: c.ConfigurationTarget.USER_LOCAL }),
							this.O(this.z.defaultProfile.settingsResource, W)
						);
					}
					openUserSettings(W = {}) {
						return (
							(W = { ...W, target: c.ConfigurationTarget.USER_LOCAL }),
							this.O(this.userSettingsResource, W)
						);
					}
					async openRemoteSettings(W = {}) {
						const X = await this.H.getEnvironment();
						X &&
							((W = { ...W, target: c.ConfigurationTarget.USER_REMOTE }),
							this.O(X.settingsPath, W));
					}
					openWorkspaceSettings(W = {}) {
						return this.workspaceSettingsResource
							? ((W = { ...W, target: c.ConfigurationTarget.WORKSPACE }),
								this.O(this.workspaceSettingsResource, W))
							: (this.t.info(h.localize(12581, null)), Promise.reject(null));
					}
					async openFolderSettings(W = {}) {
						if (
							((W = { ...W, target: c.ConfigurationTarget.WORKSPACE_FOLDER }),
							!W.folderUri)
						)
							throw new Error("Missing folder URI");
						const X = await this.getEditableSettingsURI(
							c.ConfigurationTarget.WORKSPACE_FOLDER,
							W.folderUri,
						);
						if (!X)
							throw new Error(`Invalid folder URI - ${W.folderUri.toString()}`);
						return this.O(X, W);
					}
					async openGlobalKeybindingSettings(W, X) {
						if (((X = { pinned: !0, revealIfOpened: !0, ...X }), W)) {
							const Y =
									"// " +
									h.localize(12582, null) +
									`
[
]`,
								ie = this.y.currentProfile.keybindingsResource,
								ne = !!this.s.getValue(
									"workbench.settings.openDefaultKeybindings",
								);
							if ((await this.fb(ie, Y), ne)) {
								const ee = this.q.activeGroup,
									_ = this.q.addGroup(ee.id, I.GroupDirection.RIGHT);
								await Promise.all([
									this.n.openEditor({
										resource: this.defaultKeybindingsResource,
										options: {
											pinned: !0,
											preserveFocus: !0,
											revealIfOpened: !0,
											override: $.$b1.id,
										},
										label: h.localize(12583, null),
										description: "",
									}),
									this.n.openEditor({ resource: ie, options: X }, _.id),
								]);
							} else await this.n.openEditor({ resource: ie, options: X });
						} else {
							const Y = await this.n.openEditor(this.w.createInstance(P.$tvc), {
								...X,
							});
							X.query && Y.search(X.query);
						}
					}
					openDefaultKeybindingsFile() {
						return this.n.openEditor({
							resource: this.defaultKeybindingsResource,
							label: h.localize(12584, null),
						});
					}
					async Q(W, X) {
						const Y = X?.openToSide ? T.$KY : void 0,
							ie = await this.R(W, X, Y);
						return (
							ie &&
								X?.revealSetting &&
								(await this.hb(
									X.revealSetting.key,
									!!X.revealSetting.edit,
									ie,
									W,
								)),
							ie
						);
					}
					async R(W, X, Y) {
						const ie = !!this.s.getValue(k.$$Z),
							ne = !!this.s.getValue(k.$0Z);
						if (ie || ne) return this.S(W, X, Y);
						const ee = X?.target ?? c.ConfigurationTarget.USER,
							_ = await this.ab(ee, W);
						return (
							(X = { ...X, pinned: !0 }),
							await this.n.openEditor(_, (0, k.$6Z)(X), Y)
						);
					}
					async S(W, X = {}, Y) {
						const ie = X.target ?? c.ConfigurationTarget.USER;
						await this.eb(ie, W);
						const ne = this.createSplitJsonEditorInput(ie, W);
						return (
							(X = { ...X, pinned: !0 }),
							this.n.openEditor(ne, (0, k.$6Z)(X), Y)
						);
					}
					createSplitJsonEditorInput(W, X) {
						const Y = this.I.createTextEditor({ resource: X }),
							ie = this.I.createTextEditor({ resource: this.$(W) });
						return this.w.createInstance(v.$iY, Y.getName(), void 0, ie, Y);
					}
					createSettings2EditorModel() {
						return this.w.createInstance(
							D.$YZ,
							this.db(c.ConfigurationTarget.USER_LOCAL),
						);
					}
					U(W) {
						return this.Y(W)
							? c.ConfigurationTarget.WORKSPACE
							: this.Z(W)
								? c.ConfigurationTarget.WORKSPACE_FOLDER
								: c.ConfigurationTarget.USER_LOCAL;
					}
					W(W) {
						return this.X(W) || this.Y(W) || this.Z(W);
					}
					X(W) {
						return (
							W.authority === "defaultsettings" &&
							W.scheme === C.Schemas.vscode &&
							!!W.path.match(/\/(\d+\/)?settings\.json$/)
						);
					}
					Y(W) {
						return (
							W.authority === "defaultsettings" &&
							W.scheme === C.Schemas.vscode &&
							!!W.path.match(/\/(\d+\/)?workspaceSettings\.json$/)
						);
					}
					Z(W) {
						return (
							W.authority === "defaultsettings" &&
							W.scheme === C.Schemas.vscode &&
							!!W.path.match(/\/(\d+\/)?resourceSettings\.json$/)
						);
					}
					$(W) {
						switch (W) {
							case c.ConfigurationTarget.WORKSPACE:
								return d.URI.from({
									scheme: C.Schemas.vscode,
									authority: "defaultsettings",
									path: "/workspaceSettings.json",
								});
							case c.ConfigurationTarget.WORKSPACE_FOLDER:
								return d.URI.from({
									scheme: C.Schemas.vscode,
									authority: "defaultsettings",
									path: "/resourceSettings.json",
								});
						}
						return d.URI.from({
							scheme: C.Schemas.vscode,
							authority: "defaultsettings",
							path: "/settings.json",
						});
					}
					async ab(W, X) {
						return (
							await this.eb(W, X), this.I.createTextEditor({ resource: X })
						);
					}
					async bb(W, X) {
						const Y = this.u.getWorkspace();
						if (
							Y.configuration &&
							Y.configuration.toString() === X.toString()
						) {
							const ne = await this.C.createModelReference(X);
							return this.w.createInstance(D.$ZZ, ne, W);
						}
						const ie = await this.C.createModelReference(X);
						return this.w.createInstance(D.$XZ, ie, W);
					}
					async cb(W) {
						const X = await this.C.createModelReference(W),
							Y = this.U(W);
						return this.w.createInstance(D.$2Z, W, X, this.db(Y));
					}
					db(W) {
						return W === c.ConfigurationTarget.WORKSPACE
							? ((this.f ??= this.D(new D.$1Z(this.gb(), W, this.s))), this.f)
							: W === c.ConfigurationTarget.WORKSPACE_FOLDER
								? ((this.g ??= this.D(new D.$1Z(this.gb(), W, this.s))), this.g)
								: ((this.c ??= this.D(new D.$1Z(this.gb(), W, this.s))),
									this.c);
					}
					async getEditableSettingsURI(W, X) {
						switch (W) {
							case c.ConfigurationTarget.APPLICATION:
								return this.z.defaultProfile.settingsResource;
							case c.ConfigurationTarget.USER:
							case c.ConfigurationTarget.USER_LOCAL:
								return this.userSettingsResource;
							case c.ConfigurationTarget.USER_REMOTE: {
								const Y = await this.H.getEnvironment();
								return Y ? Y.settingsPath : null;
							}
							case c.ConfigurationTarget.WORKSPACE:
								return this.workspaceSettingsResource;
							case c.ConfigurationTarget.WORKSPACE_FOLDER:
								if (X) return this.getFolderSettingsResource(X);
						}
						return null;
					}
					async eb(W, X) {
						if (
							this.u.getWorkbenchState() === y.WorkbenchState.WORKSPACE &&
							W === c.ConfigurationTarget.WORKSPACE
						) {
							const Y = this.u.getWorkspace().configuration;
							if (!Y) return;
							const ie = await this.r.read(Y);
							Object.keys((0, w.$do)(ie.value)).indexOf("settings") === -1 &&
								(await this.F.write(
									X,
									[{ path: ["settings"], value: {} }],
									!0,
								));
							return;
						}
						await this.fb(X, G);
					}
					async fb(W, X) {
						try {
							await this.r.read(W, { acceptTextOnly: !0 });
						} catch (Y) {
							if (
								Y.fileOperationResult === g.FileOperationResult.FILE_NOT_FOUND
							)
								try {
									await this.r.write(W, X);
									return;
								} catch (ie) {
									throw new Error(
										h.localize(
											12585,
											null,
											this.G.getUriLabel(W, { relative: !0 }),
											(0, t.$bb)(ie),
										),
									);
								}
							else throw Y;
						}
					}
					gb() {
						return [
							"files.autoSave",
							"editor.fontSize",
							"editor.fontFamily",
							"editor.tabSize",
							"editor.renderWhitespace",
							"editor.cursorStyle",
							"editor.multiCursorModifier",
							"editor.insertSpaces",
							"editor.wordWrap",
							"files.exclude",
							"files.associations",
							"workbench.editor.enablePreview",
						];
					}
					async hb(W, X, Y, ie) {
						const ne = Y ? (0, r.$btb)(Y.getControl()) : null;
						if (!ne) return;
						const ee = await this.createPreferencesEditorModel(ie);
						if (!ee) return;
						const _ = await this.ib(W, X, ee, ne);
						_ &&
							(ne.setPosition(_),
							ne.revealPositionNearTop(_),
							ne.focus(),
							X && O.$KDb.get(ne)?.triggerSuggest());
					}
					async ib(W, X, Y, ie) {
						const ne = ie.getModel();
						if (!ne) return null;
						const ee = l.$Io
								.as(n.$No.Configuration)
								.getConfigurationProperties()[W],
							_ = n.$Xo.test(W);
						if (!ee && !_) return null;
						let te = null;
						const Q = ee?.type ?? "object";
						let Z = Y.getPreference(W);
						if (!Z && X) {
							let se =
								Q === "object" || Q === "array"
									? this.s.inspect(W).defaultValue
									: (0, n.$1o)(Q);
							if (((se = se === void 0 && _ ? {} : se), se !== void 0)) {
								const re = Y instanceof D.$ZZ ? ["settings", W] : [W];
								await this.F.write(Y.uri, [{ path: re, value: se }], !1),
									(Z = Y.getPreference(W));
							}
						}
						if (Z)
							if (X)
								if ((0, R.$ng)(Z.value) || Array.isArray(Z.value)) {
									(te = {
										lineNumber: Z.valueRange.startLineNumber,
										column: Z.valueRange.startColumn + 1,
									}),
										ie.setPosition(te),
										await m.CoreEditingCommands.LineBreakInsert.runEditorCommand(
											null,
											ie,
											null,
										),
										(te = {
											lineNumber: te.lineNumber + 1,
											column: ne.getLineMaxColumn(te.lineNumber + 1),
										});
									const se = ne.getLineFirstNonWhitespaceColumn(te.lineNumber);
									se &&
										(ie.setPosition({ lineNumber: te.lineNumber, column: se }),
										await m.CoreEditingCommands.LineBreakInsert.runEditorCommand(
											null,
											ie,
											null,
										),
										(te = {
											lineNumber: te.lineNumber,
											column: ne.getLineMaxColumn(te.lineNumber),
										}));
								} else
									te = {
										lineNumber: Z.valueRange.startLineNumber,
										column: Z.valueRange.endColumn,
									};
							else
								te = {
									lineNumber: Z.keyRange.startLineNumber,
									column: Z.keyRange.startColumn,
								};
						return te;
					}
					getSetting(W) {
						if (!this.m) {
							const X = this.db(c.ConfigurationTarget.USER),
								Y = this.D(new E.$2c());
							(Y.value = X.onDidChange(() => {
								(this.m = void 0), Y.clear();
							})),
								(this.m = X.getSettingsGroups());
						}
						for (const X of this.m)
							for (const Y of X.sections)
								for (const ie of Y.settings)
									if ((0, H.$Hf)(ie.key, W) === 0) return ie;
					}
					async handleURL(W) {
						if ((0, H.$Hf)(W.authority, k.$_Z) !== 0) return !1;
						const X = W.path.split("/").filter((ee) => !!ee),
							Y = X.length > 0 ? X[0] : void 0;
						if (!Y) return this.openSettings(), !0;
						let ie = this.getSetting(Y);
						!ie &&
							this.J.extensions.length === 0 &&
							(await this.L.withProgress(
								{ location: V.ProgressLocation.Window },
								() => i.Event.toPromise(this.J.onDidRegisterExtensions),
							),
							(ie = this.getSetting(Y)));
						const ne = {};
						return ie && (ne.query = Y), this.openSettings(ne), !0;
					}
					dispose() {
						this.a.fire(), super.dispose();
					}
				};
				(e.$vvc = K),
					(e.$vvc = K =
						Ne(
							[
								j(0, T.$IY),
								j(1, I.$EY),
								j(2, A.$kZ),
								j(3, c.$gj),
								j(4, s.$4N),
								j(5, y.$Vi),
								j(6, o.$Li),
								j(7, B.$P8),
								j(8, U.$Xl),
								j(9, a.$MO),
								j(10, f.$uZ),
								j(11, u.$QO),
								j(12, S.$$Qb),
								j(13, b.$3N),
								j(14, M.$$m),
								j(15, N.$zdc),
								j(16, x.$2rb),
								j(17, q.$q2),
								j(18, V.$8N),
							],
							K,
						)),
					(0, p.$lK)(k.$7Z, K, p.InstantiationType.Delayed);
			},
		),
		define(
			de[3888],
			he([1, 0, 23, 3, 9, 719, 19, 172, 78, 170, 165, 628, 334, 403, 631]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$yuc = e.$xuc = void 0);
				let g = class {
					constructor(f, b, s) {
						(this.a = f), (this.b = b), (this.c = s);
					}
					canSerialize(f) {
						return this.a.isHotExitEnabled && !f.isDisposed();
					}
					serialize(f) {
						if (!this.canSerialize(f)) return;
						const b = f;
						let s = b.resource;
						b.hasAssociatedFilePath &&
							(s = (0, C.$xh)(
								s,
								this.b.remoteAuthority,
								this.c.defaultUriScheme,
							));
						let l;
						const y = b.getLanguageId();
						(y !== d.$0M || b.hasLanguageSetExplicitly) && (l = y);
						const $ = {
							resourceJSON: s.toJSON(),
							modeId: l,
							encoding: b.getEncoding(),
						};
						return JSON.stringify($);
					}
					deserialize(f, b) {
						return f.invokeFunction((s) => {
							const l = JSON.parse(b),
								y = w.URI.revive(l.resourceJSON),
								$ = l.modeId,
								v = l.encoding;
							return s
								.get(E.$zdc)
								.createTextEditor({
									resource: y,
									languageId: $,
									encoding: v,
									forceUntitled: !0,
								});
						});
					}
				};
				(e.$xuc = g),
					(e.$xuc = g = Ne([j(0, r.$_Y), j(1, m.$r8), j(2, u.$I8)], g));
				let p = class extends i.$1c {
					static {
						this.ID =
							"workbench.contrib.untitledTextEditorWorkingCopyEditorHandler";
					}
					constructor(f, b, s, l, y) {
						super(),
							(this.a = b),
							(this.b = s),
							(this.c = l),
							(this.f = y),
							this.D(f.registerHandler(this));
					}
					handles(f) {
						return (
							f.resource.scheme === t.Schemas.untitled && f.typeId === h.$OO
						);
					}
					isOpen(f, b) {
						return this.handles(f)
							? b instanceof a.$T1b && (0, C.$gh)(f.resource, b.resource)
							: !1;
					}
					createEditor(f) {
						let b;
						return (
							this.f.isUntitledWithAssociatedResource(f.resource)
								? (b = (0, C.$xh)(
										f.resource,
										this.a.remoteAuthority,
										this.b.defaultUriScheme,
									))
								: (b = f.resource),
							this.c.createTextEditor({ resource: b, forceUntitled: !0 })
						);
					}
				};
				(e.$yuc = p),
					(e.$yuc = p =
						Ne(
							[
								j(0, c.$bZ),
								j(1, m.$r8),
								j(2, u.$I8),
								j(3, E.$zdc),
								j(4, n.$7Y),
							],
							p,
						));
			},
		),
		define(
			de[3889],
			he([
				1, 0, 30, 4, 192, 44, 100, 313, 1917, 825, 296, 628, 478, 1338, 1915,
				3861, 99, 11, 102, 27, 1340, 247, 1916, 473, 43, 8, 12, 46, 824, 55,
				3859, 348, 1015, 23, 14, 79, 3888, 3575, 716, 71,
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
					t.$Io
						.as(E.$a1.EditorPane)
						.registerEditorPane(
							w.$vVb.create(m.$luc, m.$luc.ID, (0, i.localize)(3126, null)),
							[new f.$Ji(a.$T1b), new f.$Ji(h.$S1b)],
						),
					t.$Io
						.as(E.$a1.EditorPane)
						.registerEditorPane(
							w.$vVb.create(c.$IVb, c.$IVb.ID, (0, i.localize)(3127, null)),
							[new f.$Ji(u.$GVb)],
						),
					t.$Io
						.as(E.$a1.EditorPane)
						.registerEditorPane(
							w.$vVb.create(n.$quc, n.$quc.ID, (0, i.localize)(3128, null)),
							[new f.$Ji(u.$GVb)],
						),
					t.$Io
						.as(E.$a1.EditorPane)
						.registerEditorPane(
							w.$vVb.create(r.$AVb, r.$AVb.ID, (0, i.localize)(3129, null)),
							[new f.$Ji(d.$iY)],
						),
					t.$Io
						.as(E.$a1.EditorFactory)
						.registerEditorSerializer(a.$T1b.ID, O.$xuc),
					t.$Io
						.as(E.$a1.EditorFactory)
						.registerEditorSerializer(d.$iY.ID, d.$kY),
					t.$Io
						.as(E.$a1.EditorFactory)
						.registerEditorSerializer(u.$GVb.ID, u.$HVb),
					(0, k.$s6)(L.$wuc.ID, L.$wuc, k.WorkbenchPhase.BlockRestore),
					(0, k.$s6)(g.$ruc.ID, g.$ruc, k.WorkbenchPhase.BlockRestore),
					(0, k.$s6)(O.$yuc.ID, O.$yuc, k.WorkbenchPhase.BlockRestore),
					(0, k.$s6)(B.$zuc.ID, B.$zuc, k.WorkbenchPhase.BlockRestore),
					(0, T.$qtb)(
						P.$w4b.ID,
						P.$w4b,
						T.EditorContributionInstantiation.AfterFirstRender,
					);
				const F = t.$Io.as(D.$1r.Quickaccess),
					x = "inEditorsPicker",
					H = S.$Kj.and($.$g9b, S.$Kj.has(x));
				F.registerQuickAccessProvider({
					ctor: M.$sVb,
					prefix: M.$sVb.PREFIX,
					contextKey: x,
					placeholder: (0, i.localize)(3130, null),
					helpEntries: [
						{ description: (0, i.localize)(3131, null), commandId: s.$vsc.ID },
					],
				}),
					F.registerQuickAccessProvider({
						ctor: M.$tVb,
						prefix: M.$tVb.PREFIX,
						contextKey: x,
						placeholder: (0, i.localize)(3132, null),
						helpEntries: [
							{
								description: (0, i.localize)(3133, null),
								commandId: s.$wsc.ID,
							},
						],
					}),
					F.registerQuickAccessProvider({
						ctor: M.$uVb,
						prefix: M.$uVb.PREFIX,
						contextKey: x,
						placeholder: (0, i.localize)(3134, null),
						helpEntries: [
							{
								description: (0, i.localize)(3135, null),
								commandId: s.$xsc.ID,
							},
						],
					}),
					(0, o.$4X)(g.$tuc),
					(0, o.$4X)(g.$uuc),
					(0, o.$4X)(g.$vuc),
					(0, o.$4X)(s.$isc),
					(0, o.$4X)(s.$jsc),
					(0, o.$4X)(s.$csc),
					(0, o.$4X)(s.$dsc),
					(0, o.$4X)(s.$esc),
					(0, o.$4X)(s.$fsc),
					(0, o.$4X)(s.$gsc),
					(0, o.$4X)(s.$hsc),
					(0, o.$4X)(s.$Dsc),
					(0, o.$4X)(s.$Esc),
					(0, o.$4X)(s.$Fsc),
					(0, o.$4X)(s.$Gsc),
					(0, o.$4X)(s.$tsc),
					(0, o.$4X)(s.$usc),
					(0, o.$4X)(s.$wsc),
					(0, o.$4X)(s.$xsc),
					(0, o.$4X)(s.$vsc),
					(0, o.$4X)(s.$Wrc),
					(0, o.$4X)(s.$Xrc),
					(0, o.$4X)(s.$Vrc),
					(0, o.$4X)(s.$Yrc),
					(0, o.$4X)(s.$Zrc),
					(0, o.$4X)(s.$Urc),
					(0, o.$4X)(s.$zrc),
					(0, o.$4X)(s.$Arc),
					(0, o.$4X)(s.$Brc),
					(0, o.$4X)(s.$Crc),
					(0, o.$4X)(s.$Drc),
					(0, o.$4X)(s.$Erc),
					(0, o.$4X)(s.$Frc),
					(0, o.$4X)(s.$Grc),
					(0, o.$4X)(s.$Hrc),
					(0, o.$4X)(s.$$rc),
					(0, o.$4X)(s.$_rc),
					(0, o.$4X)(s.$asc),
					(0, o.$4X)(s.$bsc),
					(0, o.$4X)(s.$9rc),
					(0, o.$4X)(s.$0rc),
					(0, o.$4X)(s.$Isc),
					(0, o.$4X)(s.$Jsc),
					(0, o.$4X)(s.$1rc),
					(0, o.$4X)(s.$2rc),
					(0, o.$4X)(s.$3rc),
					(0, o.$4X)(s.$4rc),
					(0, o.$4X)(s.$5rc),
					(0, o.$4X)(s.$6rc),
					(0, o.$4X)(s.$7rc),
					(0, o.$4X)(s.$8rc),
					(0, o.$4X)(s.$Ksc),
					(0, o.$4X)(s.$Lsc),
					(0, o.$4X)(s.$Qsc),
					(0, o.$4X)(s.$Rsc),
					(0, o.$4X)(s.$Osc),
					(0, o.$4X)(s.$Psc),
					(0, o.$4X)(s.$Msc),
					(0, o.$4X)(s.$Nsc),
					(0, o.$4X)(s.$Ssc),
					(0, o.$4X)(s.$Tsc),
					(0, o.$4X)(s.$Ysc),
					(0, o.$4X)(s.$Zsc),
					(0, o.$4X)(s.$Wsc),
					(0, o.$4X)(s.$Xsc),
					(0, o.$4X)(s.$Usc),
					(0, o.$4X)(s.$Vsc),
					(0, o.$4X)(s.$Irc),
					(0, o.$4X)(s.$Jrc),
					(0, o.$4X)(s.$Krc),
					(0, o.$4X)(s.$Mrc),
					(0, o.$4X)(s.$Lrc),
					(0, o.$4X)(s.$Nrc),
					(0, o.$4X)(s.$Orc),
					(0, o.$4X)(s.$Prc),
					(0, o.$4X)(s.$Qrc),
					(0, o.$4X)(s.$9sc),
					(0, o.$4X)(s.$0sc),
					(0, o.$4X)(s.$$sc),
					(0, o.$4X)(s.$_sc),
					(0, o.$4X)(s.$ksc),
					(0, o.$4X)(s.$lsc),
					(0, o.$4X)(s.$msc),
					(0, o.$4X)(s.$nsc),
					(0, o.$4X)(s.$osc),
					(0, o.$4X)(s.$psc),
					(0, o.$4X)(s.$qsc),
					(0, o.$4X)(s.$rsc),
					(0, o.$4X)(s.$ssc),
					(0, o.$4X)(s.$Hsc),
					(0, o.$4X)(s.$1sc),
					(0, o.$4X)(s.$2sc),
					(0, o.$4X)(s.$3sc),
					(0, o.$4X)(s.$4sc),
					(0, o.$4X)(s.$5sc),
					(0, o.$4X)(s.$6sc),
					(0, o.$4X)(s.$8sc),
					(0, o.$4X)(s.$7sc),
					(0, o.$4X)(s.$atc),
					(0, o.$4X)(s.$btc),
					(0, o.$4X)(s.$ysc),
					(0, o.$4X)(s.$zsc),
					(0, o.$4X)(s.$Asc),
					(0, o.$4X)(s.$Bsc),
					(0, o.$4X)(s.$Csc),
					(0, o.$4X)(s.$ctc),
					(0, o.$4X)(s.$dtc),
					(0, o.$4X)(s.$etc),
					(0, o.$4X)(s.$ftc),
					(0, o.$4X)(s.$gtc),
					(0, o.$4X)(s.$htc);
				const q = "workbench.action.quickOpenNavigateNextInEditorPicker";
				v.$TX.registerCommandAndKeybindingRule({
					id: q,
					weight: v.KeybindingWeight.WorkbenchContrib + 50,
					handler: (0, $.$j9b)(q, !0),
					when: H,
					primary: b.KeyMod.CtrlCmd | b.KeyCode.Tab,
					mac: { primary: b.KeyMod.WinCtrl | b.KeyCode.Tab },
				});
				const V = "workbench.action.quickOpenNavigatePreviousInEditorPicker";
				v.$TX.registerCommandAndKeybindingRule({
					id: V,
					weight: v.KeybindingWeight.WorkbenchContrib + 50,
					handler: (0, $.$j9b)(V, !1),
					when: H,
					primary: b.KeyMod.CtrlCmd | b.KeyMod.Shift | b.KeyCode.Tab,
					mac: { primary: b.KeyMod.WinCtrl | b.KeyMod.Shift | b.KeyCode.Tab },
				}),
					(0, l.$EWb)(),
					I.$m &&
						(o.$ZX.appendMenuItem(o.$XX.TouchBarContext, {
							command: {
								id: s.$jsc.ID,
								title: s.$jsc.LABEL,
								icon: {
									dark: N.$7g.asFileUri(
										"vs/workbench/browser/parts/editor/media/back-tb.png",
									),
								},
							},
							group: "navigation",
							order: 0,
						}),
						o.$ZX.appendMenuItem(o.$XX.TouchBarContext, {
							command: {
								id: s.$isc.ID,
								title: s.$isc.LABEL,
								icon: {
									dark: N.$7g.asFileUri(
										"vs/workbench/browser/parts/editor/media/forward-tb.png",
									),
								},
							},
							group: "navigation",
							order: 1,
						})),
					o.$ZX.appendMenuItem(o.$XX.EmptyEditorGroup, {
						command: {
							id: l.$9Vb,
							title: (0, i.localize)(3136, null),
							icon: A.$ak.unlock,
						},
						group: "navigation",
						order: 10,
						when: S.$Kj.and(C.$_Pb, C.$3Pb.toNegated()),
					}),
					o.$ZX.appendMenuItem(o.$XX.EmptyEditorGroup, {
						command: {
							id: l.$0Vb,
							title: (0, i.localize)(3137, null),
							icon: A.$ak.lock,
							toggled: S.$Kj.true(),
						},
						group: "navigation",
						order: 10,
						when: C.$3Pb,
					}),
					o.$ZX.appendMenuItem(o.$XX.EmptyEditorGroup, {
						command: {
							id: l.$1Vb,
							title: (0, i.localize)(3138, null),
							icon: A.$ak.close,
						},
						group: "navigation",
						order: 20,
						when: S.$Kj.or(C.$_Pb, C.$9Pb),
					}),
					o.$ZX.appendMenuItem(o.$XX.EmptyEditorGroupContext, {
						command: { id: l.$dWb, title: (0, i.localize)(3139, null) },
						group: "2_split",
						order: 10,
					}),
					o.$ZX.appendMenuItem(o.$XX.EmptyEditorGroupContext, {
						command: { id: l.$eWb, title: (0, i.localize)(3140, null) },
						group: "2_split",
						order: 20,
					}),
					o.$ZX.appendMenuItem(o.$XX.EmptyEditorGroupContext, {
						command: { id: l.$fWb, title: (0, i.localize)(3141, null) },
						group: "2_split",
						order: 30,
					}),
					o.$ZX.appendMenuItem(o.$XX.EmptyEditorGroupContext, {
						command: { id: l.$gWb, title: (0, i.localize)(3142, null) },
						group: "2_split",
						order: 40,
					}),
					o.$ZX.appendMenuItem(o.$XX.EmptyEditorGroupContext, {
						command: { id: l.$yWb, title: (0, i.localize)(3143, null) },
						group: "3_window",
						order: 10,
					}),
					o.$ZX.appendMenuItem(o.$XX.EmptyEditorGroupContext, {
						command: {
							id: l.$8Vb,
							title: (0, i.localize)(3144, null),
							toggled: C.$3Pb,
						},
						group: "4_lock",
						order: 10,
						when: C.$_Pb.toNegated(),
					}),
					o.$ZX.appendMenuItem(o.$XX.EmptyEditorGroupContext, {
						command: { id: l.$1Vb, title: (0, i.localize)(3145, null) },
						group: "5_close",
						order: 10,
						when: C.$4Pb,
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorTabsBarContext, {
						command: { id: l.$dWb, title: (0, i.localize)(3146, null) },
						group: "2_split",
						order: 10,
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorTabsBarContext, {
						command: { id: l.$eWb, title: (0, i.localize)(3147, null) },
						group: "2_split",
						order: 20,
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorTabsBarContext, {
						command: { id: l.$fWb, title: (0, i.localize)(3148, null) },
						group: "2_split",
						order: 30,
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorTabsBarContext, {
						command: { id: l.$gWb, title: (0, i.localize)(3149, null) },
						group: "2_split",
						order: 40,
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorTabsBarContext, {
						command: { id: l.$wWb, title: (0, i.localize)(3150, null) },
						group: "3_window",
						order: 10,
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorTabsBarContext, {
						command: { id: l.$xWb, title: (0, i.localize)(3151, null) },
						group: "3_window",
						order: 20,
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorTabsBarContext, {
						submenu: o.$XX.EditorTabsBarShowTabsSubmenu,
						title: (0, i.localize)(3152, null),
						group: "4_config",
						order: 10,
						when: C.$bQb.negate(),
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorTabsBarShowTabsSubmenu, {
						command: {
							id: U.$X5b.ID,
							title: (0, i.localize)(3153, null),
							toggled: S.$Kj.equals(
								"config.workbench.editor.showTabs",
								"multiple",
							),
						},
						group: "1_config",
						order: 10,
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorTabsBarShowTabsSubmenu, {
						command: {
							id: U.$Z5b.ID,
							title: (0, i.localize)(3154, null),
							toggled: S.$Kj.equals(
								"config.workbench.editor.showTabs",
								"single",
							),
						},
						group: "1_config",
						order: 20,
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorTabsBarShowTabsSubmenu, {
						command: {
							id: U.$V5b.ID,
							title: (0, i.localize)(3155, null),
							toggled: S.$Kj.equals("config.workbench.editor.showTabs", "none"),
						},
						group: "1_config",
						order: 30,
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorTabsBarContext, {
						submenu: o.$XX.EditorTabsBarShowTabsZenModeSubmenu,
						title: (0, i.localize)(3156, null),
						group: "4_config",
						order: 10,
						when: C.$bQb,
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorTabsBarShowTabsZenModeSubmenu, {
						command: {
							id: U.$Y5b.ID,
							title: (0, i.localize)(3157, null),
							toggled: S.$Kj.equals("config.zenMode.showTabs", "multiple"),
						},
						group: "1_config",
						order: 10,
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorTabsBarShowTabsZenModeSubmenu, {
						command: {
							id: U.$15b.ID,
							title: (0, i.localize)(3158, null),
							toggled: S.$Kj.equals("config.zenMode.showTabs", "single"),
						},
						group: "1_config",
						order: 20,
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorTabsBarShowTabsZenModeSubmenu, {
						command: {
							id: U.$W5b.ID,
							title: (0, i.localize)(3159, null),
							toggled: S.$Kj.equals("config.zenMode.showTabs", "none"),
						},
						group: "1_config",
						order: 30,
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorTabsBarContext, {
						submenu: o.$XX.EditorActionsPositionSubmenu,
						title: (0, i.localize)(3160, null),
						group: "4_config",
						order: 20,
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorActionsPositionSubmenu, {
						command: {
							id: U.$35b.ID,
							title: (0, i.localize)(3161, null),
							toggled: S.$Kj.equals(
								"config.workbench.editor.editorActionsLocation",
								"default",
							),
						},
						group: "1_config",
						order: 10,
						when: S.$Kj
							.equals("config.workbench.editor.showTabs", "none")
							.negate(),
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorActionsPositionSubmenu, {
						command: {
							id: U.$25b.ID,
							title: (0, i.localize)(3162, null),
							toggled: S.$Kj.or(
								S.$Kj.equals(
									"config.workbench.editor.editorActionsLocation",
									"titleBar",
								),
								S.$Kj.and(
									S.$Kj.equals("config.workbench.editor.showTabs", "none"),
									S.$Kj.equals(
										"config.workbench.editor.editorActionsLocation",
										"default",
									),
								),
							),
						},
						group: "1_config",
						order: 20,
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorActionsPositionSubmenu, {
						command: {
							id: U.$45b.ID,
							title: (0, i.localize)(3163, null),
							toggled: S.$Kj.equals(
								"config.workbench.editor.editorActionsLocation",
								"hidden",
							),
						},
						group: "1_config",
						order: 30,
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorTabsBarContext, {
						command: { id: U.$65b.ID, title: (0, i.localize)(3164, null) },
						group: "9_configure",
						order: 10,
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorTitleContext, {
						command: { id: l.$YVb, title: (0, i.localize)(3165, null) },
						group: "1_close",
						order: 10,
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorTitleContext, {
						command: {
							id: l.$2Vb,
							title: (0, i.localize)(3166, null),
							precondition: C.$YPb.notEqualsTo("1"),
						},
						group: "1_close",
						order: 20,
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorTitleContext, {
						command: {
							id: l.$XVb,
							title: (0, i.localize)(3167, null),
							precondition: S.$Kj.and(C.$MPb.toNegated(), C.$6Pb.negate()),
						},
						group: "1_close",
						order: 30,
						when: C.$fQb,
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorTitleContext, {
						command: { id: l.$UVb, title: (0, i.localize)(3168, null) },
						group: "1_close",
						order: 40,
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorTitleContext, {
						command: { id: l.$VVb, title: (0, i.localize)(3169, null) },
						group: "1_close",
						order: 50,
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorTitleContext, {
						command: { id: l.$_Vb, title: (0, i.localize)(3170, null) },
						group: "1_open",
						order: 10,
						when: C.$UPb,
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorTitleContext, {
						command: {
							id: l.$6Vb,
							title: (0, i.localize)(3171, null),
							precondition: C.$KPb.toNegated(),
						},
						group: "3_preview",
						order: 10,
						when: S.$Kj.has("config.workbench.editor.enablePreview"),
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorTitleContext, {
						command: { id: l.$aWb, title: (0, i.localize)(3172, null) },
						group: "3_preview",
						order: 20,
						when: C.$NPb.toNegated(),
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorTitleContext, {
						command: { id: l.$bWb, title: (0, i.localize)(3173, null) },
						group: "3_preview",
						order: 20,
						when: C.$NPb,
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorTitleContext, {
						command: { id: l.$dWb, title: (0, i.localize)(3174, null) },
						group: "5_split",
						order: 10,
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorTitleContext, {
						command: { id: l.$eWb, title: (0, i.localize)(3175, null) },
						group: "5_split",
						order: 20,
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorTitleContext, {
						command: { id: l.$fWb, title: (0, i.localize)(3176, null) },
						group: "5_split",
						order: 30,
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorTitleContext, {
						command: { id: l.$gWb, title: (0, i.localize)(3177, null) },
						group: "5_split",
						order: 40,
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorTitleContext, {
						command: {
							id: l.$iWb,
							title: (0, i.localize)(3178, null),
							precondition: C.$6Pb.negate(),
						},
						group: "6_split_in_group",
						order: 10,
						when: C.$SPb,
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorTitleContext, {
						command: {
							id: l.$kWb,
							title: (0, i.localize)(3179, null),
							precondition: C.$6Pb.negate(),
						},
						group: "6_split_in_group",
						order: 10,
						when: C.$XPb,
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorTitleContext, {
						command: { id: l.$uWb, title: (0, i.localize)(3180, null) },
						group: "7_new_window",
						order: 10,
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorTitleContext, {
						command: { id: l.$vWb, title: (0, i.localize)(3181, null) },
						group: "7_new_window",
						order: 20,
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorTitleContext, {
						submenu: o.$XX.EditorTitleContextShare,
						title: (0, i.localize)(3182, null),
						group: "11_share",
						order: -1,
						when: C.$6Pb.negate(),
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorTitle, {
						command: {
							id: y.$JVb,
							title: (0, i.localize)(3183, null),
							toggled: S.$Kj.equals("config.diffEditor.renderSideBySide", !1),
						},
						group: "1_diff",
						order: 10,
						when: S.$Kj.has("isInDiffEditor"),
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorTitle, {
						command: { id: l.$$Vb, title: (0, i.localize)(3184, null) },
						group: "3_open",
						order: 10,
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorTitle, {
						command: { id: l.$VVb, title: (0, i.localize)(3185, null) },
						group: "5_close",
						order: 10,
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorTitle, {
						command: { id: l.$UVb, title: (0, i.localize)(3186, null) },
						group: "5_close",
						order: 20,
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorTitle, {
						command: {
							id: l.$7Vb,
							title: (0, i.localize)(3187, null),
							toggled: S.$Kj.has("config.workbench.editor.enablePreview"),
						},
						group: "7_settings",
						order: 10,
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorTitle, {
						command: { id: l.$hWb, title: (0, i.localize)(3188, null) },
						group: "8_group_operations",
						order: 5,
						when: S.$Kj.and(C.$$Pb.negate(), C.$9Pb),
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorTitle, {
						command: { id: l.$hWb, title: (0, i.localize)(3189, null) },
						group: "8_group_operations",
						order: 5,
						when: C.$$Pb,
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorTitle, {
						command: {
							id: l.$8Vb,
							title: (0, i.localize)(3190, null),
							toggled: C.$3Pb,
						},
						group: "8_group_operations",
						order: 10,
						when: C.$_Pb.toNegated(),
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorTitle, {
						command: { id: U.$75b.ID, title: (0, i.localize)(3191, null) },
						group: "9_configure",
						order: 10,
					});
				function G(ie, ne, ee, _, te) {
					const Q = {
						command: {
							id: ie.id,
							title: ie.title,
							icon: ie.icon,
							toggled: ie.toggled,
							precondition: te,
						},
						group: "navigation",
						when: ne,
						order: ee,
					};
					_ && (Q.alt = { id: _.id, title: _.title, icon: _.icon }),
						o.$ZX.appendMenuItem(o.$XX.EditorTitle, Q);
				}
				const K = 1e5,
					J = 1e6;
				G(
					{
						id: l.$cWb,
						title: (0, i.localize)(3192, null),
						icon: A.$ak.splitHorizontal,
					},
					S.$Kj.not("splitEditorsVertically"),
					K,
					{
						id: l.$eWb,
						title: (0, i.localize)(3193, null),
						icon: A.$ak.splitVertical,
					},
				),
					G(
						{
							id: l.$cWb,
							title: (0, i.localize)(3194, null),
							icon: A.$ak.splitVertical,
						},
						S.$Kj.has("splitEditorsVertically"),
						K,
						{
							id: l.$gWb,
							title: (0, i.localize)(3195, null),
							icon: A.$ak.splitHorizontal,
						},
					),
					G(
						{
							id: l.$lWb,
							title: (0, i.localize)(3196, null),
							icon: A.$ak.editorLayout,
						},
						C.$XPb,
						K - 1,
					),
					G(
						{
							id: l.$YVb,
							title: (0, i.localize)(3197, null),
							icon: A.$ak.close,
						},
						S.$Kj.and(
							C.$fQb.toNegated(),
							C.$JPb.toNegated(),
							C.$NPb.toNegated(),
						),
						J,
						{
							id: l.$VVb,
							title: (0, i.localize)(3198, null),
							icon: A.$ak.closeAll,
						},
					),
					G(
						{
							id: l.$YVb,
							title: (0, i.localize)(3199, null),
							icon: A.$ak.closeDirty,
						},
						S.$Kj.and(C.$fQb.toNegated(), C.$JPb, C.$NPb.toNegated()),
						J,
						{
							id: l.$VVb,
							title: (0, i.localize)(3200, null),
							icon: A.$ak.closeAll,
						},
					),
					G(
						{
							id: l.$bWb,
							title: (0, i.localize)(3201, null),
							icon: A.$ak.pinned,
						},
						S.$Kj.and(C.$fQb.toNegated(), C.$JPb.toNegated(), C.$NPb),
						J,
						{
							id: l.$YVb,
							title: (0, i.localize)(3202, null),
							icon: A.$ak.close,
						},
					),
					G(
						{
							id: l.$bWb,
							title: (0, i.localize)(3203, null),
							icon: A.$ak.pinnedDirty,
						},
						S.$Kj.and(C.$fQb.toNegated(), C.$JPb, C.$NPb),
						J,
						{
							id: l.$YVb,
							title: (0, i.localize)(3204, null),
							icon: A.$ak.close,
						},
					),
					G(
						{
							id: l.$9Vb,
							title: (0, i.localize)(3205, null),
							icon: A.$ak.unlock,
						},
						S.$Kj.and(C.$_Pb, C.$3Pb.toNegated()),
						J - 1,
					),
					G(
						{
							id: l.$0Vb,
							title: (0, i.localize)(3206, null),
							icon: A.$ak.lock,
							toggled: S.$Kj.true(),
						},
						C.$3Pb,
						J - 1,
					);
				const W = (0, R.$$O)(
					"diff-editor-previous-change",
					A.$ak.arrowUp,
					(0, i.localize)(3207, null),
				);
				G(
					{ id: y.$LVb, title: (0, i.localize)(3208, null), icon: W },
					C.$WPb,
					10,
					void 0,
					z.EditorContextKeys.hasChanges,
				);
				const X = (0, R.$$O)(
					"diff-editor-next-change",
					A.$ak.arrowDown,
					(0, i.localize)(3209, null),
				);
				G(
					{ id: y.$KVb, title: (0, i.localize)(3210, null), icon: X },
					C.$WPb,
					11,
					void 0,
					z.EditorContextKeys.hasChanges,
				),
					G(
						{
							id: y.$RVb,
							title: (0, i.localize)(3211, null),
							icon: A.$ak.arrowSwap,
						},
						S.$Kj.and(C.$WPb, C.$PPb),
						15,
						void 0,
						void 0,
					);
				const Y = (0, R.$$O)(
					"diff-editor-toggle-whitespace",
					A.$ak.whitespace,
					(0, i.localize)(3212, null),
				);
				o.$ZX.appendMenuItem(o.$XX.EditorTitle, {
					command: {
						id: y.$QVb,
						title: (0, i.localize)(3213, null),
						icon: Y,
						precondition: C.$WPb,
						toggled: S.$Kj.equals("config.diffEditor.ignoreTrimWhitespace", !1),
					},
					group: "navigation",
					when: C.$WPb,
					order: 20,
				}),
					o.$ZX.appendMenuItem(o.$XX.CommandPalette, {
						command: {
							id: l.$6Vb,
							title: (0, i.localize2)(3258, "Keep Editor"),
							category: p.$ck.View,
						},
						when: S.$Kj.has("config.workbench.editor.enablePreview"),
					}),
					o.$ZX.appendMenuItem(o.$XX.CommandPalette, {
						command: {
							id: l.$aWb,
							title: (0, i.localize2)(3259, "Pin Editor"),
							category: p.$ck.View,
						},
					}),
					o.$ZX.appendMenuItem(o.$XX.CommandPalette, {
						command: {
							id: l.$bWb,
							title: (0, i.localize2)(3260, "Unpin Editor"),
							category: p.$ck.View,
						},
					}),
					o.$ZX.appendMenuItem(o.$XX.CommandPalette, {
						command: {
							id: l.$YVb,
							title: (0, i.localize2)(3261, "Close Editor"),
							category: p.$ck.View,
						},
					}),
					o.$ZX.appendMenuItem(o.$XX.CommandPalette, {
						command: {
							id: l.$ZVb,
							title: (0, i.localize2)(3262, "Close Pinned Editor"),
							category: p.$ck.View,
						},
					}),
					o.$ZX.appendMenuItem(o.$XX.CommandPalette, {
						command: {
							id: l.$VVb,
							title: (0, i.localize2)(3263, "Close All Editors in Group"),
							category: p.$ck.View,
						},
					}),
					o.$ZX.appendMenuItem(o.$XX.CommandPalette, {
						command: {
							id: l.$UVb,
							title: (0, i.localize2)(3264, "Close Saved Editors in Group"),
							category: p.$ck.View,
						},
					}),
					o.$ZX.appendMenuItem(o.$XX.CommandPalette, {
						command: {
							id: l.$2Vb,
							title: (0, i.localize2)(3265, "Close Other Editors in Group"),
							category: p.$ck.View,
						},
					}),
					o.$ZX.appendMenuItem(o.$XX.CommandPalette, {
						command: {
							id: l.$XVb,
							title: (0, i.localize2)(
								3266,
								"Close Editors to the Right in Group",
							),
							category: p.$ck.View,
						},
						when: C.$MPb.toNegated(),
					}),
					o.$ZX.appendMenuItem(o.$XX.CommandPalette, {
						command: {
							id: l.$WVb,
							title: (0, i.localize2)(3267, "Close Editor Group"),
							category: p.$ck.View,
						},
						when: C.$4Pb,
					}),
					o.$ZX.appendMenuItem(o.$XX.CommandPalette, {
						command: {
							id: l.$_Vb,
							title: (0, i.localize2)(3268, "Reopen Editor With..."),
							category: p.$ck.View,
						},
						when: C.$UPb,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarRecentMenu, {
						group: "1_editor",
						command: {
							id: s.$tsc.ID,
							title: (0, i.localize)(3214, null),
							precondition: S.$Kj.has("canReopenClosedEditor"),
						},
						order: 1,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarRecentMenu, {
						group: "z_clear",
						command: { id: s.$usc.ID, title: (0, i.localize)(3215, null) },
						order: 1,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarFileMenu, {
						title: (0, i.localize)(3216, null),
						submenu: o.$XX.MenubarShare,
						group: "45_share",
						order: 1,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarViewMenu, {
						group: "2_appearance",
						title: (0, i.localize)(3217, null),
						submenu: o.$XX.MenubarLayoutMenu,
						order: 2,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarLayoutMenu, {
						group: "1_split",
						command: {
							id: l.$dWb,
							title: {
								...(0, i.localize2)(3269, "Split Up"),
								mnemonicTitle: (0, i.localize)(3218, null),
							},
						},
						order: 1,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarLayoutMenu, {
						group: "1_split",
						command: {
							id: l.$eWb,
							title: {
								...(0, i.localize2)(3270, "Split Down"),
								mnemonicTitle: (0, i.localize)(3219, null),
							},
						},
						order: 2,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarLayoutMenu, {
						group: "1_split",
						command: {
							id: l.$fWb,
							title: {
								...(0, i.localize2)(3271, "Split Left"),
								mnemonicTitle: (0, i.localize)(3220, null),
							},
						},
						order: 3,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarLayoutMenu, {
						group: "1_split",
						command: {
							id: l.$gWb,
							title: {
								...(0, i.localize2)(3272, "Split Right"),
								mnemonicTitle: (0, i.localize)(3221, null),
							},
						},
						order: 4,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarLayoutMenu, {
						group: "2_split_in_group",
						command: {
							id: l.$iWb,
							title: {
								...(0, i.localize2)(3273, "Split in Group"),
								mnemonicTitle: (0, i.localize)(3222, null),
							},
						},
						when: C.$SPb,
						order: 1,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarLayoutMenu, {
						group: "2_split_in_group",
						command: {
							id: l.$kWb,
							title: {
								...(0, i.localize2)(3274, "Join in Group"),
								mnemonicTitle: (0, i.localize)(3223, null),
							},
						},
						when: C.$XPb,
						order: 1,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarLayoutMenu, {
						group: "3_new_window",
						command: {
							id: l.$uWb,
							title: {
								...(0, i.localize2)(3275, "Move Editor into New Window"),
								mnemonicTitle: (0, i.localize)(3224, null),
							},
						},
						order: 1,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarLayoutMenu, {
						group: "3_new_window",
						command: {
							id: l.$vWb,
							title: {
								...(0, i.localize2)(3276, "Copy Editor into New Window"),
								mnemonicTitle: (0, i.localize)(3225, null),
							},
						},
						order: 2,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarLayoutMenu, {
						group: "4_layouts",
						command: {
							id: s.$1sc.ID,
							title: {
								...(0, i.localize2)(3277, "Single"),
								mnemonicTitle: (0, i.localize)(3226, null),
							},
						},
						order: 1,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarLayoutMenu, {
						group: "4_layouts",
						command: {
							id: s.$2sc.ID,
							title: {
								...(0, i.localize2)(3278, "Two Columns"),
								mnemonicTitle: (0, i.localize)(3227, null),
							},
						},
						order: 3,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarLayoutMenu, {
						group: "4_layouts",
						command: {
							id: s.$3sc.ID,
							title: {
								...(0, i.localize2)(3279, "Three Columns"),
								mnemonicTitle: (0, i.localize)(3228, null),
							},
						},
						order: 4,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarLayoutMenu, {
						group: "4_layouts",
						command: {
							id: s.$4sc.ID,
							title: {
								...(0, i.localize2)(3280, "Two Rows"),
								mnemonicTitle: (0, i.localize)(3229, null),
							},
						},
						order: 5,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarLayoutMenu, {
						group: "4_layouts",
						command: {
							id: s.$5sc.ID,
							title: {
								...(0, i.localize2)(3281, "Three Rows"),
								mnemonicTitle: (0, i.localize)(3230, null),
							},
						},
						order: 6,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarLayoutMenu, {
						group: "4_layouts",
						command: {
							id: s.$6sc.ID,
							title: {
								...(0, i.localize2)(3282, "Grid (2x2)"),
								mnemonicTitle: (0, i.localize)(3231, null),
							},
						},
						order: 7,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarLayoutMenu, {
						group: "4_layouts",
						command: {
							id: s.$8sc.ID,
							title: {
								...(0, i.localize2)(3283, "Two Rows Right"),
								mnemonicTitle: (0, i.localize)(3232, null),
							},
						},
						order: 8,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarLayoutMenu, {
						group: "4_layouts",
						command: {
							id: s.$7sc.ID,
							title: {
								...(0, i.localize2)(3284, "Two Columns Bottom"),
								mnemonicTitle: (0, i.localize)(3233, null),
							},
						},
						order: 9,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarGoMenu, {
						group: "1_history_nav",
						command: {
							id: "workbench.action.navigateToLastEditLocation",
							title: (0, i.localize)(3234, null),
							precondition: S.$Kj.has("canNavigateToLastEditLocation"),
						},
						order: 3,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarSwitchEditorMenu, {
						group: "1_sideBySide",
						command: { id: l.$mWb, title: (0, i.localize)(3235, null) },
						when: S.$Kj.or(C.$XPb, C.$WPb),
						order: 1,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarSwitchEditorMenu, {
						group: "1_sideBySide",
						command: { id: l.$nWb, title: (0, i.localize)(3236, null) },
						when: S.$Kj.or(C.$XPb, C.$WPb),
						order: 2,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarSwitchEditorMenu, {
						group: "2_any",
						command: {
							id: "workbench.action.nextEditor",
							title: (0, i.localize)(3237, null),
						},
						order: 1,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarSwitchEditorMenu, {
						group: "2_any",
						command: {
							id: "workbench.action.previousEditor",
							title: (0, i.localize)(3238, null),
						},
						order: 2,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarSwitchEditorMenu, {
						group: "3_any_used",
						command: {
							id: "workbench.action.openNextRecentlyUsedEditor",
							title: (0, i.localize)(3239, null),
						},
						order: 1,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarSwitchEditorMenu, {
						group: "3_any_used",
						command: {
							id: "workbench.action.openPreviousRecentlyUsedEditor",
							title: (0, i.localize)(3240, null),
						},
						order: 2,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarSwitchEditorMenu, {
						group: "4_group",
						command: {
							id: "workbench.action.nextEditorInGroup",
							title: (0, i.localize)(3241, null),
						},
						order: 1,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarSwitchEditorMenu, {
						group: "4_group",
						command: {
							id: "workbench.action.previousEditorInGroup",
							title: (0, i.localize)(3242, null),
						},
						order: 2,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarSwitchEditorMenu, {
						group: "5_group_used",
						command: {
							id: "workbench.action.openNextRecentlyUsedEditorInGroup",
							title: (0, i.localize)(3243, null),
						},
						order: 1,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarSwitchEditorMenu, {
						group: "5_group_used",
						command: {
							id: "workbench.action.openPreviousRecentlyUsedEditorInGroup",
							title: (0, i.localize)(3244, null),
						},
						order: 2,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarGoMenu, {
						group: "2_editor_nav",
						title: (0, i.localize)(3245, null),
						submenu: o.$XX.MenubarSwitchEditorMenu,
						order: 1,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarSwitchGroupMenu, {
						group: "1_focus_index",
						command: {
							id: "workbench.action.focusFirstEditorGroup",
							title: (0, i.localize)(3246, null),
						},
						order: 1,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarSwitchGroupMenu, {
						group: "1_focus_index",
						command: {
							id: "workbench.action.focusSecondEditorGroup",
							title: (0, i.localize)(3247, null),
						},
						order: 2,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarSwitchGroupMenu, {
						group: "1_focus_index",
						command: {
							id: "workbench.action.focusThirdEditorGroup",
							title: (0, i.localize)(3248, null),
							precondition: C.$4Pb,
						},
						order: 3,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarSwitchGroupMenu, {
						group: "1_focus_index",
						command: {
							id: "workbench.action.focusFourthEditorGroup",
							title: (0, i.localize)(3249, null),
							precondition: C.$4Pb,
						},
						order: 4,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarSwitchGroupMenu, {
						group: "1_focus_index",
						command: {
							id: "workbench.action.focusFifthEditorGroup",
							title: (0, i.localize)(3250, null),
							precondition: C.$4Pb,
						},
						order: 5,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarSwitchGroupMenu, {
						group: "2_next_prev",
						command: {
							id: "workbench.action.focusNextGroup",
							title: (0, i.localize)(3251, null),
							precondition: C.$4Pb,
						},
						order: 1,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarSwitchGroupMenu, {
						group: "2_next_prev",
						command: {
							id: "workbench.action.focusPreviousGroup",
							title: (0, i.localize)(3252, null),
							precondition: C.$4Pb,
						},
						order: 2,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarSwitchGroupMenu, {
						group: "3_directional",
						command: {
							id: "workbench.action.focusLeftGroup",
							title: (0, i.localize)(3253, null),
							precondition: C.$4Pb,
						},
						order: 1,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarSwitchGroupMenu, {
						group: "3_directional",
						command: {
							id: "workbench.action.focusRightGroup",
							title: (0, i.localize)(3254, null),
							precondition: C.$4Pb,
						},
						order: 2,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarSwitchGroupMenu, {
						group: "3_directional",
						command: {
							id: "workbench.action.focusAboveGroup",
							title: (0, i.localize)(3255, null),
							precondition: C.$4Pb,
						},
						order: 3,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarSwitchGroupMenu, {
						group: "3_directional",
						command: {
							id: "workbench.action.focusBelowGroup",
							title: (0, i.localize)(3256, null),
							precondition: C.$4Pb,
						},
						order: 4,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarGoMenu, {
						group: "2_editor_nav",
						title: (0, i.localize)(3257, null),
						submenu: o.$XX.MenubarSwitchGroupMenu,
						order: 2,
					});
			},
		),
		define(
			de[3890],
			he([1, 0, 4, 5, 34, 21, 68, 129, 681, 247, 60]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$jxc = e.$ixc = e.$hxc = e.$gxc = e.$fxc = void 0);
				let a = class {
					constructor(o) {
						this.a = o;
					}
					async initialize(o) {
						const f = JSON.parse(o),
							b = Object.keys(f.storage);
						if (b.length) {
							const s = [];
							for (const l of b)
								s.push({
									key: l,
									value: f.storage[l],
									scope: E.StorageScope.PROFILE,
									target: E.StorageTarget.USER,
								});
							this.a.storeAll(s, !0);
						}
					}
				};
				(e.$fxc = a), (e.$fxc = a = Ne([j(0, E.$lq)], a));
				let h = class {
					constructor(o, f, b) {
						(this.a = o), (this.b = f), (this.c = b);
					}
					async getContent(o) {
						const f = await this.getGlobalState(o);
						return JSON.stringify(f);
					}
					async apply(o, f) {
						const b = JSON.parse(o);
						await this.d(b, f);
					}
					async getGlobalState(o) {
						const f = {},
							b = await this.b.readStorageData(o);
						for (const [s, l] of b)
							l.value !== void 0 &&
								l.target === E.StorageTarget.USER &&
								(f[s] = l.value);
						return { storage: f };
					}
					async d(o, f) {
						const b = Object.keys(o.storage);
						if (b.length) {
							const s = new Map(),
								l = [
									...this.a.keys(
										E.StorageScope.APPLICATION,
										E.StorageTarget.MACHINE,
									),
									...this.a.keys(
										E.StorageScope.WORKSPACE,
										E.StorageTarget.USER,
									),
									...this.a.keys(
										E.StorageScope.WORKSPACE,
										E.StorageTarget.MACHINE,
									),
								];
							for (const y of b)
								l.includes(y)
									? this.c.info(
											`Importing Profile (${f.name}): Ignoring global state key '${y}' because it is not a profile key.`,
										)
									: s.set(y, o.storage[y]);
							await this.b.updateStorageData(f, s, E.StorageTarget.USER);
						}
					}
				};
				(e.$gxc = h),
					(e.$gxc = h = Ne([j(0, E.$lq), j(1, m.$0wc), j(2, w.$ik)], h));
				class c {
					constructor(o, f) {
						(this.a = o),
							(this.b = f),
							(this.type = d.ProfileResourceType.GlobalState),
							(this.handle = d.ProfileResourceType.GlobalState),
							(this.label = { label: (0, t.localize)(12907, null) }),
							(this.collapsibleState = u.TreeItemCollapsibleState.Collapsed);
					}
					async getChildren() {
						return [
							{
								handle: this.a.toString(),
								resourceUri: this.a,
								collapsibleState: u.TreeItemCollapsibleState.None,
								accessibilityInformation: {
									label: this.b.extUri.basename(this.a),
								},
								parent: this,
								command: {
									id: r.$zWb,
									title: "",
									arguments: [this.a, void 0, void 0],
								},
							},
						];
					}
				}
				e.$hxc = c;
				let n = class extends c {
					constructor(o, f, b, s) {
						super(f, b), (this.c = o), (this.d = s);
					}
					async hasContent() {
						const o = await this.d.createInstance(h).getGlobalState(this.c);
						return Object.keys(o.storage).length > 0;
					}
					async getContent() {
						return this.d.createInstance(h).getContent(this.c);
					}
					isFromDefaultProfile() {
						return !this.c.isDefault && !!this.c.useDefaultFlags?.globalState;
					}
				};
				(e.$ixc = n), (e.$ixc = n = Ne([j(2, C.$Vl), j(3, i.$Li)], n));
				let g = class extends c {
					constructor(o, f, b) {
						super(f, b), (this.c = o);
					}
					async getContent() {
						return this.c;
					}
					isFromDefaultProfile() {
						return !1;
					}
				};
				(e.$jxc = g), (e.$jxc = g = Ne([j(2, C.$Vl)], g));
			},
		),
		define(
			de[1921],
			he([1, 0, 76, 22, 34, 133, 12, 60, 129, 247, 5, 4, 68]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Wwc = e.$Vwc = e.$Uwc = void 0);
				let c = class {
					constructor(o, f, b) {
						(this.a = o), (this.b = f), (this.c = b);
					}
					async initialize(o) {
						const f = JSON.parse(o);
						if (f.keybindings === null) {
							this.c.info("Initializing Profile: No keybindings to apply...");
							return;
						}
						await this.b.writeFile(
							this.a.currentProfile.keybindingsResource,
							t.$Te.fromString(f.keybindings),
						);
					}
				};
				(e.$Uwc = c),
					(e.$Uwc = c = Ne([j(0, E.$P8), j(1, i.$ll), j(2, w.$ik)], c));
				let n = class {
					constructor(o, f) {
						(this.a = o), (this.b = f);
					}
					async getContent(o) {
						const f = await this.getKeybindingsResourceContent(o);
						return JSON.stringify(f);
					}
					async getKeybindingsResourceContent(o) {
						return { keybindings: await this.c(o), platform: C.$x };
					}
					async apply(o, f) {
						const b = JSON.parse(o);
						if (b.keybindings === null) {
							this.b.info(
								`Importing Profile (${f.name}): No keybindings to apply...`,
							);
							return;
						}
						await this.a.writeFile(
							f.keybindingsResource,
							t.$Te.fromString(b.keybindings),
						);
					}
					async c(o) {
						try {
							return (
								await this.a.readFile(o.keybindingsResource)
							).value.toString();
						} catch (f) {
							if (
								f instanceof i.$Gl &&
								f.fileOperationResult === i.FileOperationResult.FILE_NOT_FOUND
							)
								return null;
							throw f;
						}
					}
				};
				(e.$Vwc = n), (e.$Vwc = n = Ne([j(0, i.$ll), j(1, w.$ik)], n));
				let g = class {
					constructor(o, f, b) {
						(this.a = o),
							(this.b = f),
							(this.c = b),
							(this.type = m.ProfileResourceType.Keybindings),
							(this.handle = m.ProfileResourceType.Keybindings),
							(this.label = { label: (0, a.localize)(12908, null) }),
							(this.collapsibleState = d.TreeItemCollapsibleState.Expanded);
					}
					isFromDefaultProfile() {
						return !this.a.isDefault && !!this.a.useDefaultFlags?.keybindings;
					}
					async getChildren() {
						return [
							{
								handle: this.a.keybindingsResource.toString(),
								resourceUri: this.a.keybindingsResource,
								collapsibleState: d.TreeItemCollapsibleState.None,
								parent: this,
								accessibilityInformation: {
									label: this.b.extUri.basename(this.a.settingsResource),
								},
								command: {
									id: r.$zWb,
									title: "",
									arguments: [this.a.keybindingsResource, void 0, void 0],
								},
							},
						];
					}
					async hasContent() {
						return (
							(
								await this.c
									.createInstance(n)
									.getKeybindingsResourceContent(this.a)
							).keybindings !== null
						);
					}
					async getContent() {
						return this.c.createInstance(n).getContent(this.a);
					}
				};
				(e.$Wwc = g), (e.$Wwc = g = Ne([j(1, h.$Vl), j(2, u.$Li)], g));
			},
		),
		define(
			de[1922],
			he([1, 0, 76, 81, 22, 34, 30, 133, 1670, 150, 60, 129, 247, 5, 4, 68]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Twc = e.$Swc = e.$Rwc = void 0);
				let p = class {
					constructor(s, l, y) {
						(this.a = s), (this.b = l), (this.c = y);
					}
					async initialize(s) {
						const l = JSON.parse(s);
						if (l.settings === null) {
							this.c.info("Initializing Profile: No settings to apply...");
							return;
						}
						await this.b.writeFile(
							this.a.currentProfile.settingsResource,
							t.$Te.fromString(l.settings),
						);
					}
				};
				(e.$Rwc = p),
					(e.$Rwc = p = Ne([j(0, d.$P8), j(1, w.$ll), j(2, E.$ik)], p));
				let o = class {
					constructor(s, l, y) {
						(this.a = s), (this.b = l), (this.c = y);
					}
					async getContent(s) {
						const l = await this.getSettingsContent(s);
						return JSON.stringify(l);
					}
					async getSettingsContent(s) {
						const l = await this.e(s);
						if (l === null) return { settings: null };
						{
							const y = this.d(),
								$ = await this.b.resolveFormattingOptions(s.settingsResource);
							return { settings: (0, m.$Nwc)(l || "{}", "{}", y, $) };
						}
					}
					async apply(s, l) {
						const y = JSON.parse(s);
						if (y.settings === null) {
							this.c.info(
								`Importing Profile (${l.name}): No settings to apply...`,
							);
							return;
						}
						const $ = await this.e(l),
							v = await this.b.resolveFormattingOptions(l.settingsResource),
							S = (0, m.$Nwc)(y.settings, $ || "{}", this.d(), v);
						await this.a.writeFile(l.settingsResource, t.$Te.fromString(S));
					}
					d() {
						const s = C.$Io
							.as(i.$No.Configuration)
							.getConfigurationProperties();
						return Object.keys(s).filter(
							(y) =>
								s[y]?.scope === i.ConfigurationScope.MACHINE ||
								s[y]?.scope === i.ConfigurationScope.MACHINE_OVERRIDABLE,
						);
					}
					async e(s) {
						try {
							return (
								await this.a.readFile(s.settingsResource)
							).value.toString();
						} catch (l) {
							if (
								l instanceof w.$Gl &&
								l.fileOperationResult === w.FileOperationResult.FILE_NOT_FOUND
							)
								return null;
							throw l;
						}
					}
				};
				(e.$Swc = o),
					(e.$Swc = o = Ne([j(0, w.$ll), j(1, r.$8Rb), j(2, E.$ik)], o));
				let f = class {
					constructor(s, l, y) {
						(this.a = s),
							(this.b = l),
							(this.c = y),
							(this.type = a.ProfileResourceType.Settings),
							(this.handle = a.ProfileResourceType.Settings),
							(this.label = { label: (0, n.localize)(12909, null) }),
							(this.collapsibleState = u.TreeItemCollapsibleState.Expanded);
					}
					async getChildren() {
						return [
							{
								handle: this.a.settingsResource.toString(),
								resourceUri: this.a.settingsResource,
								collapsibleState: u.TreeItemCollapsibleState.None,
								parent: this,
								accessibilityInformation: {
									label: this.b.extUri.basename(this.a.settingsResource),
								},
								command: {
									id: h.$zWb,
									title: "",
									arguments: [this.a.settingsResource, void 0, void 0],
								},
							},
						];
					}
					async hasContent() {
						return (
							(await this.c.createInstance(o).getSettingsContent(this.a))
								.settings !== null
						);
					}
					async getContent() {
						return this.c.createInstance(o).getContent(this.a);
					}
					isFromDefaultProfile() {
						return !this.a.isDefault && !!this.a.useDefaultFlags?.settings;
					}
				};
				(e.$Twc = f), (e.$Twc = f = Ne([j(1, g.$Vl), j(2, c.$Li)], f));
			},
		),
		define(
			de[1923],
			he([1, 0, 76, 59, 4, 22, 5, 68, 129, 247, 60, 133]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Zwc = e.$Ywc = e.$Xwc = void 0);
				let h = class {
					constructor(p, o, f) {
						(this.a = p), (this.b = o), (this.c = f);
					}
					async initialize(p) {
						const o = JSON.parse(p);
						for (const f in o.snippets) {
							const b = this.c.extUri.joinPath(
								this.a.currentProfile.snippetsHome,
								f,
							);
							await this.b.writeFile(b, t.$Te.fromString(o.snippets[f]));
						}
					}
				};
				(e.$Xwc = h),
					(e.$Xwc = h = Ne([j(0, a.$P8), j(1, E.$ll), j(2, d.$Vl)], h));
				let c = class {
					constructor(p, o) {
						(this.a = p), (this.b = o);
					}
					async getContent(p, o) {
						const f = await this.c(p, o);
						return JSON.stringify({ snippets: f });
					}
					async apply(p, o) {
						const f = JSON.parse(p);
						for (const b in f.snippets) {
							const s = this.b.extUri.joinPath(o.snippetsHome, b);
							await this.a.writeFile(s, t.$Te.fromString(f.snippets[b]));
						}
					}
					async c(p, o) {
						const f = {},
							b = await this.getSnippetsResources(p, o);
						for (const s of b) {
							const l = this.b.extUri.relativePath(p.snippetsHome, s),
								y = await this.a.readFile(s);
							f[l] = y.value.toString();
						}
						return f;
					}
					async getSnippetsResources(p, o) {
						const f = [];
						let b;
						try {
							b = await this.a.resolve(p.snippetsHome);
						} catch (s) {
							if (
								s instanceof E.$Gl &&
								s.fileOperationResult === E.FileOperationResult.FILE_NOT_FOUND
							)
								return f;
							throw s;
						}
						for (const { resource: s } of b.children || []) {
							if (o?.has(s)) continue;
							const l = this.b.extUri.extname(s);
							(l === ".json" || l === ".code-snippets") && f.push(s);
						}
						return f;
					}
				};
				(e.$Ywc = c), (e.$Ywc = c = Ne([j(0, E.$ll), j(1, d.$Vl)], c));
				let n = class {
					constructor(p, o, f) {
						(this.b = p),
							(this.c = o),
							(this.d = f),
							(this.type = m.ProfileResourceType.Snippets),
							(this.handle = this.b.snippetsHome.toString()),
							(this.label = { label: (0, w.localize)(12910, null) }),
							(this.collapsibleState = u.TreeItemCollapsibleState.Collapsed),
							(this.a = new i.$Hc());
					}
					async getChildren() {
						const p = await this.c
								.createInstance(c)
								.getSnippetsResources(this.b),
							o = this;
						return p.map((f) => ({
							handle: f.toString(),
							parent: o,
							resourceUri: f,
							collapsibleState: u.TreeItemCollapsibleState.None,
							accessibilityInformation: { label: this.d.extUri.basename(f) },
							checkbox: o.checkbox
								? {
										get isChecked() {
											return !o.a.has(f);
										},
										set isChecked(b) {
											b ? o.a.delete(f) : o.a.add(f);
										},
										accessibilityInformation: {
											label: (0, w.localize)(
												12911,
												null,
												this.d.extUri.basename(f),
											),
										},
									}
								: void 0,
							command: {
								id: r.$zWb,
								title: "",
								arguments: [f, void 0, void 0],
							},
						}));
					}
					async hasContent() {
						return (
							(await this.c.createInstance(c).getSnippetsResources(this.b))
								.length > 0
						);
					}
					async getContent() {
						return this.c.createInstance(c).getContent(this.b, this.a);
					}
					isFromDefaultProfile() {
						return !this.b.isDefault && !!this.b.useDefaultFlags?.snippets;
					}
				};
				(e.$Zwc = n), (e.$Zwc = n = Ne([j(1, C.$Li), j(2, d.$Vl)], n));
			},
		),
		define(
			de[1924],
			he([1, 0, 76, 4, 22, 5, 34, 68, 129, 247, 60, 133]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$3wc = e.$2wc = e.$1wc = void 0);
				let h = class {
					constructor(p, o, f) {
						(this.a = p), (this.b = o), (this.c = f);
					}
					async initialize(p) {
						const o = JSON.parse(p);
						if (!o.tasks) {
							this.c.info("Initializing Profile: No tasks to apply...");
							return;
						}
						await this.b.writeFile(
							this.a.currentProfile.tasksResource,
							t.$Te.fromString(o.tasks),
						);
					}
				};
				(e.$1wc = h),
					(e.$1wc = h = Ne([j(0, a.$P8), j(1, w.$ll), j(2, C.$ik)], h));
				let c = class {
					constructor(p, o) {
						(this.a = p), (this.b = o);
					}
					async getContent(p) {
						const o = await this.getTasksResourceContent(p);
						return JSON.stringify(o);
					}
					async getTasksResourceContent(p) {
						return { tasks: await this.c(p) };
					}
					async apply(p, o) {
						const f = JSON.parse(p);
						if (!f.tasks) {
							this.b.info(
								`Importing Profile (${o.name}): No tasks to apply...`,
							);
							return;
						}
						await this.a.writeFile(o.tasksResource, t.$Te.fromString(f.tasks));
					}
					async c(p) {
						try {
							return (await this.a.readFile(p.tasksResource)).value.toString();
						} catch (o) {
							if (
								o instanceof w.$Gl &&
								o.fileOperationResult === w.FileOperationResult.FILE_NOT_FOUND
							)
								return null;
							throw o;
						}
					}
				};
				(e.$2wc = c), (e.$2wc = c = Ne([j(0, w.$ll), j(1, C.$ik)], c));
				let n = class {
					constructor(p, o, f) {
						(this.a = p),
							(this.b = o),
							(this.c = f),
							(this.type = m.ProfileResourceType.Tasks),
							(this.handle = m.ProfileResourceType.Tasks),
							(this.label = { label: (0, i.localize)(12912, null) }),
							(this.collapsibleState = u.TreeItemCollapsibleState.Expanded);
					}
					async getChildren() {
						return [
							{
								handle: this.a.tasksResource.toString(),
								resourceUri: this.a.tasksResource,
								collapsibleState: u.TreeItemCollapsibleState.None,
								parent: this,
								accessibilityInformation: {
									label: this.b.extUri.basename(this.a.settingsResource),
								},
								command: {
									id: r.$zWb,
									title: "",
									arguments: [this.a.tasksResource, void 0, void 0],
								},
							},
						];
					}
					async hasContent() {
						return (
							(await this.c.createInstance(c).getTasksResourceContent(this.a))
								.tasks !== null
						);
					}
					async getContent() {
						return this.c.createInstance(c).getContent(this.a);
					}
					isFromDefaultProfile() {
						return !this.a.isDefault && !!this.a.useDefaultFlags?.tasks;
					}
				};
				(e.$3wc = n), (e.$3wc = n = Ne([j(1, d.$Vl), j(2, E.$Li)], n));
			},
		),
		define(
			de[3891],
			he([
				1, 0, 50, 6, 26, 4, 5, 32, 129, 133, 3, 9, 82, 416, 1902, 1922, 1921,
				1924, 1923, 14, 57, 1613, 22, 47, 15, 87, 33, 247, 18, 31, 10, 224, 59,
				29, 12, 62, 41,
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
					(e.$q1c = e.$p1c = e.$o1c = e.$n1c = void 0),
					(e.$l1c = U),
					(e.$m1c = z);
				function U(G) {
					return G.resourceType !== void 0;
				}
				function z(G) {
					return G.label !== void 0;
				}
				let F = class extends u.$1c {
					constructor(K, J, W, X, Y, ie, ne, ee) {
						super(),
							(this.g = Y),
							(this.h = ie),
							(this.j = ne),
							(this.m = ee),
							(this.c = this.D(new i.$re())),
							(this.onDidChange = this.c.event),
							(this.f = this.D(new v.$Yh(() => this.H(), 500))),
							(this.n = ""),
							(this.t = !1),
							(this.w = !1),
							(this.n = K),
							(this.q = J),
							(this.s = W),
							(this.t = X),
							this.D(
								this.onDidChange((_) => {
									_.message || this.validate(), this.save();
								}),
							);
					}
					get name() {
						return this.n;
					}
					set name(K) {
						(K = K.trim()),
							this.n !== K && ((this.n = K), this.c.fire({ name: !0 }));
					}
					get icon() {
						return this.q;
					}
					set icon(K) {
						this.q !== K && ((this.q = K), this.c.fire({ icon: !0 }));
					}
					get flags() {
						return this.s;
					}
					set flags(K) {
						(0, h.$zo)(this.s, K) || ((this.s = K), this.c.fire({ flags: !0 }));
					}
					get active() {
						return this.t;
					}
					set active(K) {
						this.t !== K && ((this.t = K), this.c.fire({ active: !0 }));
					}
					get message() {
						return this.u;
					}
					set message(K) {
						this.u !== K && ((this.u = K), this.c.fire({ message: !0 }));
					}
					get disabled() {
						return this.w;
					}
					set disabled(K) {
						this.w !== K && ((this.w = K), this.c.fire({ disabled: !0 }));
					}
					getFlag(K) {
						return this.flags?.[K] ?? !1;
					}
					setFlag(K, J) {
						const W = this.flags ? { ...this.flags } : {};
						J ? (W[K] = !0) : delete W[K], (this.flags = W);
					}
					validate() {
						if (!this.name) {
							this.message = (0, E.localize)(11208, null);
							return;
						}
						if (
							this.shouldValidateName() &&
							this.name !== this.getInitialName() &&
							this.h.profiles.some((K) => K.name === this.name)
						) {
							this.message = (0, E.localize)(11209, null, this.name);
							return;
						}
						if (
							this.flags &&
							this.flags.settings &&
							this.flags.keybindings &&
							this.flags.tasks &&
							this.flags.snippets &&
							this.flags.extensions
						) {
							this.message = (0, E.localize)(11210, null);
							return;
						}
						this.message = void 0;
					}
					async getChildren(K) {
						if (K === void 0) {
							const J = [
								m.ProfileResourceType.Settings,
								m.ProfileResourceType.Keybindings,
								m.ProfileResourceType.Tasks,
								m.ProfileResourceType.Snippets,
								m.ProfileResourceType.Extensions,
							];
							return Promise.all(
								J.map(async (W) => {
									const X =
										W === m.ProfileResourceType.Settings ||
										W === m.ProfileResourceType.Keybindings ||
										W === m.ProfileResourceType.Tasks
											? await this.y(W)
											: [];
									return {
										handle: W,
										checkbox: void 0,
										resourceType: W,
										action: X.length
											? new t.$rj(
													"_open",
													(0, E.localize)(11211, null),
													w.ThemeIcon.asClassName(b.$ak.goToFile),
													!0,
													() => X[0]?.action?.run(),
												)
											: void 0,
									};
								}),
							);
						}
						return this.y(K);
					}
					async y(K) {
						return [];
					}
					async z(K, J) {
						K = this.getFlag(J) ? this.h.defaultProfile : K;
						let W = [];
						switch (J) {
							case m.ProfileResourceType.Settings:
								W = await this.m.createInstance(g.$Twc, K).getChildren();
								break;
							case m.ProfileResourceType.Keybindings:
								W = await this.m.createInstance(p.$Wwc, K).getChildren();
								break;
							case m.ProfileResourceType.Snippets:
								W =
									(await this.m.createInstance(f.$Zwc, K).getChildren()) ?? [];
								break;
							case m.ProfileResourceType.Tasks:
								W = await this.m.createInstance(o.$3wc, K).getChildren();
								break;
							case m.ProfileResourceType.Extensions:
								W = await this.m.createInstance(n.$dxc, K).getChildren();
								break;
						}
						return W.map((X) => this.C(X));
					}
					C(K) {
						return {
							handle: K.handle,
							checkbox: K.checkbox,
							label: K.label?.label ?? "",
							resource: a.URI.revive(K.resourceUri),
							icon: K.themeIcon,
							action: new t.$rj(
								"_openChild",
								(0, E.localize)(11212, null),
								w.ThemeIcon.asClassName(b.$ak.goToFile),
								!0,
								async () => {
									K.parent.type === m.ProfileResourceType.Extensions
										? await this.j.executeCommand(
												"extension.open",
												K.handle,
												void 0,
												!0,
												void 0,
												!0,
											)
										: K.resourceUri &&
											(await this.j.executeCommand(
												T.$zWb,
												K.resourceUri,
												[P.$KY],
												void 0,
											));
								},
							),
						};
					}
					getInitialName() {
						return "";
					}
					shouldValidateName() {
						return !0;
					}
					save() {
						this.f.schedule();
					}
					F(K) {
						return (
							this.name !== K.name ||
							this.icon !== K.icon ||
							!(0, h.$zo)(this.flags ?? {}, K.useDefaultFlags ?? {})
						);
					}
					async G(K) {
						if (!this.F(K) || (this.validate(), this.message)) return;
						const J = this.flags
							? this.flags.settings &&
								this.flags.keybindings &&
								this.flags.tasks &&
								this.flags.globalState &&
								this.flags.extensions
								? void 0
								: this.flags
							: void 0;
						return await this.g.updateProfile(K, {
							name: this.name,
							icon: this.icon,
							useDefaultFlags: K.useDefaultFlags && !J ? {} : J,
						});
					}
				};
				(e.$n1c = F),
					(e.$n1c = F =
						Ne([j(4, r.$Q8), j(5, m.$Xl), j(6, k.$ek), j(7, C.$Li)], F));
				let x = class extends F {
					get profile() {
						return this.I;
					}
					constructor(K, J, W, X, Y, ie, ne, ee, _) {
						super(
							K.name,
							K.icon,
							K.useDefaultFlags,
							X.currentProfile.id === K.id,
							ie,
							ne,
							ee,
							_,
						),
							(this.I = K),
							(this.titleButtons = J),
							(this.actions = W),
							(this.J = X),
							(this.L = Y),
							(this.M = !1),
							(this.M = this.L.getValue(D.$C6) === this.profile.name),
							this.D(
								Y.onDidChangeConfiguration((te) => {
									te.affectsConfiguration(D.$C6) &&
										(this.isNewWindowProfile =
											this.L.getValue(D.$C6) === this.profile.name);
								}),
							),
							this.D(
								this.J.onDidChangeCurrentProfile(
									() =>
										(this.active =
											this.J.currentProfile.id === this.profile.id),
								),
							),
							this.D(
								this.h.onDidChangeProfiles(({ updated: te }) => {
									const Q = te.find((Z) => Z.id === this.profile.id);
									Q &&
										((this.I = Q), this.reset(), this.c.fire({ profile: !0 }));
								}),
							);
					}
					reset() {
						(this.name = this.I.name),
							(this.icon = this.I.icon),
							(this.flags = this.I.useDefaultFlags);
					}
					async toggleNewWindowProfile() {
						this.M
							? await this.L.updateValue(D.$C6, null)
							: await this.L.updateValue(D.$C6, this.profile.name);
					}
					get isNewWindowProfile() {
						return this.M;
					}
					set isNewWindowProfile(K) {
						this.M !== K &&
							((this.M = K), this.c.fire({ newWindowProfile: !0 }));
					}
					async toggleCurrentWindowProfile() {
						this.J.currentProfile.id === this.profile.id
							? await this.g.switchProfile(this.h.defaultProfile)
							: await this.g.switchProfile(this.profile);
					}
					async H() {
						await this.G(this.profile);
					}
					async y(K) {
						return this.z(this.profile, K);
					}
					getInitialName() {
						return this.profile.name;
					}
				};
				(e.$o1c = x),
					(e.$o1c = x =
						Ne(
							[
								j(3, r.$P8),
								j(4, L.$gj),
								j(5, r.$Q8),
								j(6, m.$Xl),
								j(7, k.$ek),
								j(8, C.$Li),
							],
							x,
						));
				const H = "userdataprofiletemplatepreview";
				let q = class extends F {
					get copyFromTemplates() {
						return this.I;
					}
					constructor(K, J, W, X, Y, ie, ne, ee, _, te) {
						super(K, void 0, void 0, !1, ne, ee, _, te),
							(this.titleButtons = W),
							(this.actions = X),
							(this.O = Y),
							(this.P = ie),
							(this.I = new M.$Gc()),
							(this.L = null),
							(this.M = K),
							(this.Q = J),
							(this.R = this.U(J)),
							this.W(),
							this.D(this.O.registerProvider(H, this.D(new l.$kxc())));
					}
					get copyFrom() {
						return this.Q;
					}
					set copyFrom(K) {
						this.Q !== K &&
							((this.Q = K),
							this.c.fire({ copyFrom: !0 }),
							(this.flags = void 0),
							(this.copyFlags = this.U(K)),
							K instanceof a.URI && (this.J?.cancel(), (this.J = void 0)),
							this.W());
					}
					get copyFlags() {
						return this.R;
					}
					set copyFlags(K) {
						(0, h.$zo)(this.R, K) ||
							((this.R = K), this.c.fire({ copyFlags: !0 }));
					}
					get previewProfile() {
						return this.S;
					}
					set previewProfile(K) {
						this.S !== K && ((this.S = K), this.c.fire({ preview: !0 }));
					}
					U(K) {
						return K
							? {
									settings: !0,
									keybindings: !0,
									snippets: !0,
									tasks: !0,
									extensions: !0,
								}
							: void 0;
					}
					async W() {
						this.disabled = !0;
						try {
							if (this.copyFrom instanceof a.URI) {
								await this.resolveTemplate(this.copyFrom),
									this.L &&
										(this.copyFromTemplates.set(this.copyFrom, this.L.name),
										this.M === this.name &&
											(this.name = this.M = this.L.name ?? ""),
										this.N === this.icon && (this.icon = this.N = this.L.icon),
										this.setCopyFlag(
											m.ProfileResourceType.Settings,
											!!this.L.settings,
										),
										this.setCopyFlag(
											m.ProfileResourceType.Keybindings,
											!!this.L.keybindings,
										),
										this.setCopyFlag(
											m.ProfileResourceType.Tasks,
											!!this.L.tasks,
										),
										this.setCopyFlag(
											m.ProfileResourceType.Snippets,
											!!this.L.snippets,
										),
										this.setCopyFlag(
											m.ProfileResourceType.Extensions,
											!!this.L.extensions,
										),
										this.c.fire({ copyFromInfo: !0 }));
								return;
							}
							if ((0, m.$Wl)(this.copyFrom)) {
								this.M === this.name &&
									(this.name = this.M =
										(0, E.localize)(11213, null, this.copyFrom.name)),
									this.N === this.icon &&
										(this.icon = this.N = this.copyFrom.icon),
									this.setCopyFlag(m.ProfileResourceType.Settings, !0),
									this.setCopyFlag(m.ProfileResourceType.Keybindings, !0),
									this.setCopyFlag(m.ProfileResourceType.Tasks, !0),
									this.setCopyFlag(m.ProfileResourceType.Snippets, !0),
									this.setCopyFlag(m.ProfileResourceType.Extensions, !0),
									this.c.fire({ copyFromInfo: !0 });
								return;
							}
							this.M === this.name &&
								(this.name = this.M = (0, E.localize)(11214, null)),
								this.N === this.icon && (this.icon = this.N = void 0),
								this.setCopyFlag(m.ProfileResourceType.Settings, !1),
								this.setCopyFlag(m.ProfileResourceType.Keybindings, !1),
								this.setCopyFlag(m.ProfileResourceType.Tasks, !1),
								this.setCopyFlag(m.ProfileResourceType.Snippets, !1),
								this.setCopyFlag(m.ProfileResourceType.Extensions, !1),
								this.c.fire({ copyFromInfo: !0 });
						} finally {
							this.disabled = !1;
						}
					}
					async resolveTemplate(K) {
						return (
							this.J ||
								(this.J = (0, v.$zh)(async (J) => {
									const W = await this.P.resolveProfileTemplate(K);
									J.isCancellationRequested || (this.L = W);
								})),
							await this.J,
							this.L
						);
					}
					hasResource(K) {
						if (this.L)
							switch (K) {
								case m.ProfileResourceType.Settings:
									return !!this.L.settings;
								case m.ProfileResourceType.Keybindings:
									return !!this.L.keybindings;
								case m.ProfileResourceType.Snippets:
									return !!this.L.snippets;
								case m.ProfileResourceType.Tasks:
									return !!this.L.tasks;
								case m.ProfileResourceType.Extensions:
									return !!this.L.extensions;
							}
						return !0;
					}
					getCopyFlag(K) {
						return this.copyFlags?.[K] ?? !1;
					}
					setCopyFlag(K, J) {
						const W = this.copyFlags ? { ...this.copyFlags } : {};
						(W[K] = J), (this.copyFlags = W);
					}
					getCopyFromName() {
						if ((0, m.$Wl)(this.copyFrom)) return this.copyFrom.name;
						if (this.copyFrom instanceof a.URI)
							return this.copyFromTemplates.get(this.copyFrom);
					}
					async y(K) {
						return this.getFlag(K)
							? this.z(this.h.defaultProfile, K)
							: this.getCopyFlag(K)
								? this.copyFrom instanceof a.URI
									? (await this.resolveTemplate(this.copyFrom),
										this.L ? this.Y(this.L, K) : [])
									: this.copyFrom
										? this.z(this.copyFrom, K)
										: []
								: [];
					}
					async Y(K, J) {
						const W = (0, m.$Zl)(
							(0, $.$9g)(),
							this.name,
							a.URI.file("/root").with({ scheme: H }),
							a.URI.file("/cache").with({ scheme: H }),
						);
						switch (J) {
							case m.ProfileResourceType.Settings:
								return K.settings
									? (await this.m.createInstance(g.$Swc).apply(K.settings, W),
										this.z(W, J))
									: [];
							case m.ProfileResourceType.Keybindings:
								return K.keybindings
									? (await this.m
											.createInstance(p.$Vwc)
											.apply(K.keybindings, W),
										this.z(W, J))
									: [];
							case m.ProfileResourceType.Snippets:
								return K.snippets
									? (await this.m.createInstance(f.$Ywc).apply(K.snippets, W),
										this.z(W, J))
									: [];
							case m.ProfileResourceType.Tasks:
								return K.tasks
									? (await this.m.createInstance(o.$2wc).apply(K.tasks, W),
										this.z(W, J))
									: [];
							case m.ProfileResourceType.Extensions:
								return K.extensions
									? (
											await this.m
												.createInstance(n.$exc, K.extensions)
												.getChildren()
										).map((Y) => this.C(Y))
									: [];
						}
						return [];
					}
					shouldValidateName() {
						return !this.copyFrom;
					}
					getInitialName() {
						return this.previewProfile?.name ?? "";
					}
					async H() {
						if (this.previewProfile) {
							const K = await this.G(this.previewProfile);
							K && (this.previewProfile = K);
						}
					}
				};
				(e.$p1c = q),
					(e.$p1c = q =
						Ne(
							[
								j(4, y.$ll),
								j(5, r.$W8),
								j(6, r.$Q8),
								j(7, m.$Xl),
								j(8, k.$ek),
								j(9, C.$Li),
							],
							q,
						));
				let V = class extends c.$PO {
					static {
						B = this;
					}
					static getInstance(K) {
						return B.c || (B.c = K.createInstance(B)), B.c;
					}
					get profiles() {
						return this.g
							.map(([K]) => K)
							.sort((K, J) =>
								K instanceof q
									? 1
									: J instanceof q || (K instanceof x && K.profile.isDefault)
										? -1
										: J instanceof x && J.profile.isDefault
											? 1
											: K.name.localeCompare(J.name),
							);
					}
					constructor(K, J, W, X, Y, ie, ne, ee, _, te) {
						super(),
							(this.q = K),
							(this.s = J),
							(this.t = W),
							(this.u = X),
							(this.w = Y),
							(this.y = ie),
							(this.z = ne),
							(this.C = ee),
							(this.F = _),
							(this.G = te),
							(this.g = []),
							(this.m = this.D(new i.$re())),
							(this.onDidChange = this.m.event);
						for (const Q of J.profiles) Q.isTransient || this.g.push(this.I(Q));
						this.D(
							(0, u.$Yc)(() =>
								this.g.splice(0, this.g.length).map(([, Q]) => Q.dispose()),
							),
						),
							this.D(J.onDidChangeProfiles((Q) => this.H(Q)));
					}
					H(K) {
						let J = !1;
						for (const W of K.added)
							!W.isTransient &&
								W.name !== this.j?.name &&
								((J = !0), this.g.push(this.I(W)));
						for (const W of K.removed) {
							W.id === this.j?.previewProfile?.id &&
								(this.j.previewProfile = void 0);
							const X = this.g.findIndex(
								([Y]) => Y instanceof x && Y.profile.id === W.id,
							);
							X !== -1 &&
								((J = !0), this.g.splice(X, 1).map(([, Y]) => Y.dispose()));
						}
						J && this.m.fire(void 0);
					}
					getTemplates() {
						return (
							this.n || (this.n = this.t.getBuiltinProfileTemplates()), this.n
						);
					}
					I(K) {
						const J = new u.$Zc(),
							W = J.add(
								new t.$rj(
									"userDataProfile.activate",
									(0, E.localize)(11215, null),
									w.ThemeIcon.asClassName(b.$ak.check),
									!0,
									() => this.t.switchProfile(te.profile),
								),
							),
							X = J.add(
								new t.$rj(
									"userDataProfile.copyFromProfile",
									(0, E.localize)(11216, null),
									w.ThemeIcon.asClassName(b.$ak.copy),
									!0,
									() => this.createNewProfile(te.profile),
								),
							),
							Y = J.add(
								new t.$rj(
									"userDataProfile.export",
									(0, E.localize)(11217, null),
									w.ThemeIcon.asClassName(b.$ak.export),
									!0,
									() => this.u.exportProfile(K),
								),
							),
							ie = J.add(
								new t.$rj(
									"userDataProfile.delete",
									(0, E.localize)(11218, null),
									w.ThemeIcon.asClassName(b.$ak.trash),
									!0,
									() => this.O(te.profile),
								),
							),
							ne = J.add(
								new t.$rj(
									"userDataProfile.newWindow",
									(0, E.localize)(11219, null),
									w.ThemeIcon.asClassName(b.$ak.emptyWindow),
									!0,
									() => this.P(te.profile),
								),
							),
							ee = [];
						ee.push(W), ee.push(ne);
						const _ = [];
						_.push(X),
							_.push(Y),
							K.isDefault || (_.push(new t.$tj()), _.push(ie));
						const te = J.add(this.G.createInstance(x, K, [[], []], [ee, _]));
						return (
							(W.enabled = this.q.currentProfile.id !== te.profile.id),
							J.add(
								this.q.onDidChangeCurrentProfile(
									() =>
										(W.enabled = this.q.currentProfile.id !== te.profile.id),
								),
							),
							[te, J]
						);
					}
					async createNewProfile(K) {
						if (this.j) {
							if (
								!(
									await this.w.confirm({
										type: "info",
										message: (0, E.localize)(11220, null),
										primaryButton: (0, E.localize)(11221, null),
										cancelButton: (0, E.localize)(11222, null),
									})
								).confirmed
							)
								return;
							this.revert();
						}
						if (K instanceof a.URI)
							try {
								await this.u.resolveProfileTemplate(K);
							} catch (J) {
								this.w.error((0, N.$bb)(J));
								return;
							}
						if (!this.j) {
							const J = new u.$Zc(),
								W = new I.$Ce();
							J.add((0, u.$Yc)(() => W.dispose(!0)));
							const X = [],
								Y = [],
								ie = J.add(
									new t.$rj(
										"userDataProfile.create",
										(0, E.localize)(11223, null),
										void 0,
										!0,
										() => this.saveNewProfile(!1, W.token),
									),
								);
							X.push(ie),
								A.$r &&
									K instanceof a.URI &&
									(0, r.$V8)(K) &&
									X.push(
										new t.$rj(
											"userDataProfile.createInDesktop",
											(0, E.localize)(11224, null, this.C.nameLong),
											void 0,
											!0,
											() => this.F.open(K, { openExternal: !0 }),
										),
									);
							const ne = J.add(
								new t.$rj(
									"userDataProfile.cancel",
									(0, E.localize)(11225, null),
									w.ThemeIcon.asClassName(b.$ak.trash),
									!0,
									() => this.N(),
								),
							);
							Y.push(ne);
							const ee = J.add(
								new t.$rj(
									"userDataProfile.preview",
									(0, E.localize)(11226, null),
									w.ThemeIcon.asClassName(b.$ak.openPreview),
									!0,
									() => this.L(W.token),
								),
							);
							A.$r || Y.push(ee);
							const _ = J.add(
								new t.$rj(
									"userDataProfile.export",
									(0, E.localize)(11227, null),
									w.ThemeIcon.asClassName(b.$ak.export),
									(0, m.$Wl)(K),
									() => this.M(W.token),
								),
							);
							this.j = J.add(
								this.G.createInstance(
									q,
									K ? "" : (0, E.localize)(11228, null),
									K,
									[X, Y],
									[[ne], [_]],
								),
							);
							const te = () => {
								ie.enabled &&
									(this.j?.copyFrom &&
									this.s.profiles.some((Q) => Q.name === this.j?.name)
										? (ie.label = (0, E.localize)(11229, null))
										: (ie.label = (0, E.localize)(11230, null)));
							};
							te(),
								J.add(
									this.j.onDidChange((Q) => {
										Q.preview && (ee.checked = !!this.j?.previewProfile),
											(Q.disabled || Q.message) &&
												(ee.enabled = ie.enabled =
													!this.j?.disabled && !this.j?.message),
											(Q.name || Q.copyFrom) &&
												(te(), (_.enabled = (0, m.$Wl)(this.j?.copyFrom)));
									}),
								),
								J.add(
									this.s.onDidChangeProfiles((Q) => {
										te(), this.j?.validate();
									}),
								),
								this.g.push([this.j, J]),
								this.m.fire(this.j);
						}
						return this.j;
					}
					revert() {
						this.J(), this.m.fire(void 0);
					}
					J() {
						if (this.j) {
							const K = this.g.findIndex(([J]) => J === this.j);
							K !== -1 && this.g.splice(K, 1).map(([, J]) => J.dispose()),
								(this.j = void 0);
						}
					}
					async L(K) {
						if (!this.j || this.j.previewProfile) return;
						const J = await this.saveNewProfile(!0, K);
						J && ((this.j.previewProfile = J), await this.P(J));
					}
					async M(K) {
						if (!this.j || !(0, m.$Wl)(this.j.copyFrom)) return;
						const J = (0, m.$Zl)(
							(0, $.$9g)(),
							this.j.name,
							this.j.copyFrom.location,
							this.j.copyFrom.cacheHome,
							{ icon: this.j.icon, useDefaultFlags: this.j.flags },
							this.s.defaultProfile,
						);
						await this.u.exportProfile(J, this.j.copyFlags);
					}
					async saveNewProfile(K, J) {
						if (!this.j || (this.j.validate(), this.j.message)) return;
						this.j.disabled = !0;
						let W;
						try {
							if (this.j.previewProfile)
								K ||
									(W = await this.t.updateProfile(this.j.previewProfile, {
										transient: !1,
									}));
							else {
								const { flags: X, icon: Y, name: ie, copyFrom: ne } = this.j,
									ee = X
										? X.settings &&
											X.keybindings &&
											X.tasks &&
											X.globalState &&
											X.extensions
											? void 0
											: X
										: void 0,
									_ = {
										source:
											ne instanceof a.URI
												? "template"
												: (0, m.$Wl)(ne)
													? "profile"
													: ne
														? "external"
														: void 0,
									};
								if (ne instanceof a.URI) {
									const te = await this.j.resolveTemplate(ne);
									te &&
										(this.y.publicLog2("userDataProfile.createFromTemplate", _),
										(W = await this.u.createProfileFromTemplate(
											te,
											{
												name: ie,
												useDefaultFlags: ee,
												icon: Y,
												resourceTypeFlags: this.j.copyFlags,
												transient: K,
											},
											J ?? I.CancellationToken.None,
										)));
								} else
									(0, m.$Wl)(ne)
										? (this.y.publicLog2(
												"userDataProfile.createFromProfile",
												_,
											),
											(W = await this.u.createFromProfile(
												ne,
												{
													name: ie,
													useDefaultFlags: ee,
													icon: Y,
													resourceTypeFlags: this.j.copyFlags,
													transient: K,
												},
												J ?? I.CancellationToken.None,
											)))
										: (this.y.publicLog2(
												"userDataProfile.createEmptyProfile",
												_,
											),
											(W = await this.t.createProfile(ie, {
												useDefaultFlags: ee,
												icon: Y,
												transient: K,
											})));
							}
						} finally {
							this.j && (this.j.disabled = !1);
						}
						if (J?.isCancellationRequested) {
							if (W)
								try {
									await this.t.removeProfile(W);
								} catch {}
							return;
						}
						if (W && !W.isTransient && this.j) {
							this.J();
							const X = this.g.find(([Y]) => Y.name === W.name);
							X
								? this.m.fire(X[0])
								: this.H({
										added: [W],
										removed: [],
										updated: [],
										all: this.s.profiles,
									});
						}
						return W;
					}
					async N() {
						this.j &&
							(this.j.previewProfile &&
								(await this.t.removeProfile(this.j.previewProfile)),
							this.J(),
							this.m.fire(void 0));
					}
					async O(K) {
						(
							await this.w.confirm({
								type: "info",
								message: (0, E.localize)(11231, null, K.name),
								primaryButton: (0, E.localize)(11232, null),
								cancelButton: (0, E.localize)(11233, null),
							})
						).confirmed && (await this.t.removeProfile(K));
					}
					async P(K) {
						await this.z.openWindow({ forceProfile: K.name });
					}
				};
				(e.$q1c = V),
					(e.$q1c =
						V =
						B =
							Ne(
								[
									j(0, r.$P8),
									j(1, m.$Xl),
									j(2, r.$Q8),
									j(3, r.$W8),
									j(4, s.$GO),
									j(5, d.$km),
									j(6, S.$asb),
									j(7, R.$Bk),
									j(8, O.$7rb),
									j(9, C.$Li),
								],
								V,
							));
			},
		),
		define(
			de[3892],
			he([
				1, 0, 7, 50, 6, 26, 4, 49, 5, 21, 32, 35, 129, 217, 223, 133, 279, 183,
				106, 51, 123, 93, 431, 3, 292, 268, 1903, 1896, 114, 27, 72, 160, 596,
				9, 84, 28, 19, 411, 233, 57, 63, 3891, 173, 95, 14, 2683, 94, 613, 267,
				68, 2532,
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
				var Y, ie, ne, ee, _;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$u1c = e.$t1c = e.$s1c = e.$r1c = void 0),
					(e.$r1c = (0, b.$wP)(
						"profiles.sashBorder",
						s.$rFb,
						(0, C.localize)(11150, null),
					));
				const te = (0, f.$Eyb)({
					listActiveSelectionBackground: b.$8P,
					listActiveSelectionForeground: b.$IP,
					listFocusAndSelectionBackground: b.$8P,
					listFocusAndSelectionForeground: b.$IP,
					listFocusBackground: b.$8P,
					listFocusForeground: b.$IP,
					listHoverForeground: b.$IP,
					listHoverBackground: b.$8P,
					listHoverOutline: b.$8P,
					listFocusOutline: b.$8P,
					listInactiveSelectionBackground: b.$8P,
					listInactiveSelectionForeground: b.$IP,
					listInactiveFocusBackground: b.$8P,
					listInactiveFocusOutline: b.$8P,
					treeIndentGuidesStroke: void 0,
					treeInactiveIndentGuidesStroke: void 0,
				});
				let Q = class extends c.$JEb {
					static {
						Y = this;
					}
					static {
						this.ID = "workbench.editor.userDataProfiles";
					}
					constructor(Ke, Je, Te, Ee, Ie, Be, Se, ke) {
						super(Y.ID, Ke, Je, Te, Ee),
							(this.m = Ie),
							(this.r = Be),
							(this.s = Se),
							(this.u = ke),
							(this.j = []);
					}
					layout(Ke, Je) {
						if (this.a && this.b) {
							const Te = Ke.height - 20;
							this.b.layout(this.a?.clientWidth, Te),
								(this.b.el.style.height = `${Te}px`);
						}
					}
					Y(Ke) {
						this.a = (0, t.$fhb)(Ke, (0, t.$)(".profiles-editor"));
						const Je = (0, t.$fhb)(this.a, (0, t.$)(".sidebar-view")),
							Te = (0, t.$fhb)(Je, (0, t.$)(".sidebar-container")),
							Ee = (0, t.$fhb)(this.a, (0, t.$)(".contents-view")),
							Ie = (0, t.$fhb)(Ee, (0, t.$)(".contents-container"));
						(this.f = this.D(this.u.createInstance(re, Ie))),
							(this.b = new p.$vob(this.a, {
								orientation: p.Orientation.HORIZONTAL,
								proportionalLayout: !0,
							})),
							this.db(Te),
							this.b.addView(
								{
									onDidChange: w.Event.None,
									element: Je,
									minimumSize: 200,
									maximumSize: 350,
									layout: (Be, Se, ke) => {
										if (((Je.style.width = `${Be}px`), ke && this.c)) {
											const Ue = ke - 40 - 15;
											(this.c.getHTMLElement().style.height = `${Ue}px`),
												this.c.layout(Ue, Be);
										}
									},
								},
								300,
								void 0,
								!0,
							),
							this.b.addView(
								{
									onDidChange: w.Event.None,
									element: Ee,
									minimumSize: 550,
									maximumSize: Number.POSITIVE_INFINITY,
									layout: (Be, Se, ke) => {
										(Ee.style.width = `${Be}px`),
											ke && this.f?.layout(new t.$pgb(Be, ke));
									},
								},
								p.Sizing.Distribute,
								void 0,
								!0,
							),
							this.gb(),
							this.updateStyles();
					}
					updateStyles() {
						const Ke = this.h.getColor(e.$r1c);
						this.b?.style({ separatorBorder: Ke });
					}
					db(Ke) {
						this.eb((0, t.$fhb)(Ke, (0, t.$)(".new-profile-button")));
						const Je = this.u.createInstance(se),
							Te = new Z();
						this.c = this.D(
							this.u.createInstance(
								l.$yMb,
								"ProfilesList",
								(0, t.$fhb)(Ke, (0, t.$)(".profiles-list")),
								Te,
								[Je],
								{
									multipleSelectionSupport: !1,
									setRowLineHeight: !1,
									horizontalScrolling: !1,
									accessibilityProvider: {
										getAriaLabel(Ee) {
											return Ee?.name ?? "";
										},
										getWidgetAriaLabel() {
											return (0, C.localize)(11151, null);
										},
									},
									openOnSingleClick: !0,
									identityProvider: {
										getId(Ee) {
											return Ee instanceof x.$o1c ? Ee.profile.id : Ee.name;
										},
									},
									alwaysConsumeMouseWheel: !1,
								},
							),
						);
					}
					eb(Ke) {
						const Je = this.D(
							new o.$pob(Ke, {
								actions: {
									getActions: () => {
										const Te = [];
										return (
											this.j.length &&
												(Te.push(
													new i.$uj(
														"from.template",
														(0, C.localize)(11152, null),
														this.fb(),
													),
												),
												Te.push(new i.$tj())),
											Te.push(
												new i.$rj(
													"importProfile",
													(0, C.localize)(11153, null),
													void 0,
													!0,
													() => this.ib(),
												),
											),
											Te
										);
									},
								},
								addPrimaryActionToDropdown: !1,
								contextMenuProvider: this.s,
								supportIcons: !0,
								...f.$lyb,
							}),
						);
						(Je.label = (0, C.localize)(11154, null)),
							this.D(Je.onDidClick((Te) => this.createNewProfile()));
					}
					fb() {
						return this.j.map(
							(Ke) =>
								new i.$rj(`template:${Ke.url}`, Ke.name, void 0, !0, () =>
									this.createNewProfile(N.URI.parse(Ke.url)),
								),
						);
					}
					gb() {
						this.c &&
							(this.D(
								this.c.onDidChangeSelection((Ke) => {
									const [Je] = Ke.elements;
									Je instanceof x.$n1c && this.f?.render(Je);
								}),
							),
							this.D(
								this.c.onContextMenu((Ke) => {
									const Je = [];
									Ke.element || Je.push(...this.hb()),
										Ke.element instanceof x.$n1c &&
											Je.push(...Ke.element.actions[1]),
										Je.length &&
											this.s.showContextMenu({
												getAnchor: () => Ke.anchor,
												getActions: () => Je,
												getActionsContext: () => Ke.element,
											});
								}),
							),
							this.D(
								this.c.onMouseDblClick((Ke) => {
									Ke.element || this.createNewProfile();
								}),
							));
					}
					hb() {
						const Ke = [];
						Ke.push(
							new i.$rj(
								"newProfile",
								(0, C.localize)(11155, null),
								void 0,
								!0,
								() => this.createNewProfile(),
							),
						);
						const Je = this.fb();
						return (
							Je.length &&
								Ke.push(
									new i.$uj("from.template", (0, C.localize)(11156, null), Je),
								),
							Ke.push(new i.$tj()),
							Ke.push(
								new i.$rj(
									"importProfile",
									(0, C.localize)(11157, null),
									void 0,
									!0,
									() => this.ib(),
								),
							),
							Ke
						);
					}
					async ib() {
						const Ke = new $.$Zc(),
							Je = Ke.add(this.m.createQuickPick()),
							Te = (Ee) => {
								const Ie = [];
								Ee &&
									Ie.push({
										label: Je.value,
										description: (0, C.localize)(11158, null),
									}),
									Ie.push({ label: (0, C.localize)(11159, null) }),
									(Je.items = Ie);
							};
						(Je.title = (0, C.localize)(11160, null)),
							(Je.placeholder = (0, C.localize)(11161, null)),
							(Je.ignoreFocusOut = !0),
							Ke.add(Je.onDidChangeValue(Te)),
							Te(),
							(Je.matchOnLabel = !1),
							(Je.matchOnDescription = !1),
							Ke.add(
								Je.onDidAccept(async () => {
									Je.hide();
									const Ee = Je.selectedItems[0];
									if (!Ee) return;
									const Ie =
										Ee.label === Je.value
											? N.URI.parse(Je.value)
											: await this.jb();
									Ie && this.createNewProfile(Ie);
								}),
							),
							Ke.add(Je.onDidHide(() => Ke.dispose())),
							Je.show();
					}
					async createNewProfile(Ke) {
						await this.g?.createNewProfile(Ke);
					}
					selectProfile(Ke) {
						const Je = this.g?.profiles.findIndex(
							(Te) => Te instanceof x.$o1c && Te.profile.id === Ke.id,
						);
						Je !== void 0 && Je >= 0 && this.c?.setSelection([Je]);
					}
					async jb() {
						const Ke = await this.r.showOpenDialog({
							canSelectFolders: !1,
							canSelectFiles: !0,
							canSelectMany: !1,
							filters: g.$28,
							title: (0, C.localize)(11162, null),
						});
						return Ke ? Ke[0] : null;
					}
					async setInput(Ke, Je, Te, Ee) {
						await super.setInput(Ke, Je, Te, Ee),
							(this.g = await Ke.resolve()),
							this.g.getTemplates().then((Ie) => {
								(this.j = Ie), this.f && (this.f.templates = Ie);
							}),
							this.kb(),
							this.D(this.g.onDidChange((Ie) => this.kb(Ie)));
					}
					focus() {
						super.focus(), this.c?.domFocus();
					}
					kb(Ke) {
						if (!this.g) return;
						const Je = this.c?.getSelection()?.[0],
							Te = Je !== void 0 ? this.c?.element(Je) : void 0;
						if ((this.c?.splice(0, this.c.length, this.g.profiles), Ke))
							this.c?.setSelection([this.g.profiles.indexOf(Ke)]);
						else if (Te) {
							if (!this.g.profiles.includes(Te)) {
								const Ee =
									this.g.profiles.find((Ie) => Ie.name === Te.name) ??
									this.g.profiles[0];
								Ee && this.c?.setSelection([this.g.profiles.indexOf(Ee)]);
							}
						} else {
							const Ee =
								this.g.profiles.find((Ie) => Ie.active) ?? this.g.profiles[0];
							Ee && this.c?.setSelection([this.g.profiles.indexOf(Ee)]);
						}
					}
				};
				(e.$s1c = Q),
					(e.$s1c =
						Q =
						Y =
							Ne(
								[
									j(1, u.$km),
									j(2, a.$iP),
									j(3, r.$lq),
									j(4, F.$DJ),
									j(5, z.$IO),
									j(6, d.$Xxb),
									j(7, m.$Li),
								],
								Q,
							));
				class Z {
					getHeight(Ke) {
						return 22;
					}
					getTemplateId() {
						return "profileListElement";
					}
				}
				let se = class {
					constructor(Ke) {
						(this.a = Ke), (this.templateId = "profileListElement");
					}
					renderTemplate(Ke) {
						const Je = new $.$Zc(),
							Te = new $.$Zc();
						Ke.classList.add("profile-list-item");
						const Ee = (0, t.$fhb)(Ke, (0, t.$)(".profile-list-item-icon")),
							Ie = (0, t.$fhb)(Ke, (0, t.$)(".profile-list-item-label")),
							Be = (0, t.$fhb)(
								Ke,
								(0, t.$)(
									`span${E.ThemeIcon.asCSSSelector(V.$ak.circleFilled)}`,
								),
							),
							Se = (0, t.$fhb)(Ke, (0, t.$)(".profile-list-item-description"));
						(0, t.$fhb)(
							Se,
							(0, t.$)(`span${E.ThemeIcon.asCSSSelector(V.$ak.check)}`),
							(0, t.$)("span", void 0, (0, C.localize)(11163, null)),
						);
						const ke = (0, t.$fhb)(
								Ke,
								(0, t.$)(".profile-tree-item-actions-container"),
							),
							Ue = Je.add(
								this.a.createInstance(H.$Syb, ke, {
									hoverDelegate: Je.add((0, q.$dib)()),
									highlightToggledItems: !0,
								}),
							);
						return {
							label: Ie,
							icon: Ee,
							dirty: Be,
							description: Se,
							actionBar: Ue,
							disposables: Je,
							elementDisposables: Te,
						};
					}
					renderElement(Ke, Je, Te, Ee) {
						Te.elementDisposables.clear(),
							(Te.label.textContent = Ke.name),
							Te.label.classList.toggle("new-profile", Ke instanceof x.$p1c),
							(Te.icon.className = E.ThemeIcon.asClassName(
								Ke.icon ? E.ThemeIcon.fromId(Ke.icon) : I.$frc,
							)),
							Te.dirty.classList.toggle("hide", !(Ke instanceof x.$p1c)),
							Te.description.classList.toggle("hide", !Ke.active),
							Ke.onDidChange &&
								Te.elementDisposables.add(
									Ke.onDidChange((Ie) => {
										Ie.name && (Te.label.textContent = Ke.name),
											Ie.icon &&
												(Ke.icon
													? (Te.icon.className = E.ThemeIcon.asClassName(
															E.ThemeIcon.fromId(Ke.icon),
														))
													: (Te.icon.className = "hide")),
											Ie.active &&
												Te.description.classList.toggle("hide", !Ke.active);
									}),
								),
							Te.actionBar.setActions([...Ke.actions[0]], [...Ke.actions[1]]);
					}
					disposeElement(Ke, Je, Te, Ee) {
						Te.elementDisposables.clear();
					}
					disposeTemplate(Ke) {
						Ke.disposables.dispose(), Ke.elementDisposables.dispose();
					}
				};
				se = Ne([j(0, m.$Li)], se);
				let re = class extends $.$1c {
					set templates(Ke) {
						this.g.setTemplates(Ke), this.f.rerender();
					}
					constructor(Ke, Je, Te) {
						super(),
							(this.j = Je),
							(this.m = Te),
							(this.h = this.D(new $.$2c()));
						const Ee = (0, t.$fhb)(Ke, (0, t.$)(".profile-header")),
							Ie = (0, t.$fhb)(Ee, (0, t.$)(".profile-title-container"));
						this.a = (0, t.$fhb)(Ie, (0, t.$)(""));
						const Be = (0, t.$fhb)(Ke, (0, t.$)(".profile-body")),
							Se = new le(),
							ke = this.D(this.m.createInstance(be));
						(this.g = this.D(this.m.createInstance(ge))),
							(this.b = (0, t.$fhb)(Be, (0, t.$)(".profile-tree"))),
							(this.f = this.D(
								this.m.createInstance(
									l.$FMb,
									"ProfileEditor-Tree",
									this.b,
									Se,
									[
										this.D(this.m.createInstance(ue)),
										this.D(this.m.createInstance(fe)),
										this.D(this.m.createInstance(me)),
										this.D(this.m.createInstance(ve)),
										this.g,
										ke,
									],
									this.m.createInstance(oe),
									{
										multipleSelectionSupport: !1,
										horizontalScrolling: !1,
										accessibilityProvider: {
											getAriaLabel(Ue) {
												return Ue?.element ?? "";
											},
											getWidgetAriaLabel() {
												return "";
											},
										},
										identityProvider: {
											getId(Ue) {
												return Ue.element;
											},
										},
										expandOnlyOnTwistieClick: !0,
										renderIndentGuides: B.RenderIndentGuides.None,
										enableStickyScroll: !1,
										openOnSingleClick: !1,
										setRowLineHeight: !1,
										supportDynamicHeights: !0,
										alwaysConsumeMouseWheel: !1,
									},
								),
							)),
							this.f.style(te),
							this.D(
								ke.onDidChangeContentHeight((Ue) =>
									this.f.updateElementHeight(Ue, void 0),
								),
							),
							this.D(
								ke.onDidChangeSelection((Ue) => {
									Ue.selected && (this.f.setFocus([]), this.f.setSelection([]));
								}),
							),
							this.D(
								this.f.onDidChangeContentHeight((Ue) => {
									this.n && this.layout(this.n);
								}),
							),
							this.D(
								this.f.onDidChangeSelection((Ue) => {
									Ue.elements.length && ke.clearSelection();
								}),
							),
							(this.c = (0, t.$fhb)(
								Be,
								(0, t.$)(".profile-row-container.profile-button-container"),
							));
					}
					layout(Ke) {
						this.n = Ke;
						const Je = this.f.contentHeight,
							Te = Math.min(
								Je,
								Ke.height -
									(this.h.value?.element instanceof x.$p1c ? 116 : 54),
							);
						(this.b.style.height = `${Te}px`), this.f.layout(Te, Ke.width);
					}
					render(Ke) {
						if (this.h.value?.element === Ke) return;
						this.h.value?.element instanceof x.$o1c &&
							this.h.value.element.reset(),
							this.f.setInput(Ke);
						const Je = new $.$Zc();
						(this.h.value = { element: Ke, dispose: () => Je.dispose() }),
							(this.a.textContent = Ke.name),
							Je.add(
								Ke.onDidChange((Ie) => {
									Ie.name && (this.a.textContent = Ke.name);
								}),
							);
						const [Te, Ee] = Ke.titleButtons;
						if (Te?.length || Ee?.length) {
							if ((this.c.classList.remove("hide"), Ee?.length))
								for (const Ie of Ee) {
									const Be = Je.add(
										new o.$oob(this.c, { ...f.$lyb, secondary: !0 }),
									);
									(Be.label = Ie.label),
										(Be.enabled = Ie.enabled),
										Je.add(Be.onDidClick(() => this.j.showWhile(Ie.run()))),
										Je.add(
											Ie.onDidChange((Se) => {
												(0, R.$sg)(Se.enabled) || (Be.enabled = Ie.enabled),
													(0, R.$sg)(Se.label) || (Be.label = Ie.label);
											}),
										);
								}
							if (Te?.length)
								for (const Ie of Te) {
									const Be = Je.add(new o.$oob(this.c, { ...f.$lyb }));
									(Be.label = Ie.label),
										(Be.enabled = Ie.enabled),
										Je.add(Be.onDidClick(() => this.j.showWhile(Ie.run()))),
										Je.add(
											Ie.onDidChange((Se) => {
												(0, R.$sg)(Se.enabled) || (Be.enabled = Ie.enabled),
													(0, R.$sg)(Se.label) || (Be.label = Ie.label);
											}),
										),
										Je.add(
											Ke.onDidChange((Se) => {
												Se.message &&
													(Be.setTitle(Ke.message ?? Ie.label),
													Be.element.classList.toggle("error", !!Ke.message));
											}),
										);
								}
						} else this.c.classList.add("hide");
						Ke instanceof x.$p1c && this.f.focusFirst(),
							this.n && this.layout(this.n);
					}
				};
				re = Ne([j(1, A.$bO), j(2, m.$Li)], re);
				class le extends y.$Cib {
					getTemplateId({ element: Ke }) {
						return Ke;
					}
					hasDynamicHeight({ element: Ke }) {
						return Ke === "contents";
					}
					d({ element: Ke }) {
						switch (Ke) {
							case "name":
								return 72;
							case "icon":
								return 68;
							case "copyFrom":
								return 90;
							case "useForCurrent":
							case "useAsDefault":
								return 68;
							case "contents":
								return 250;
						}
					}
				}
				class oe {
					hasChildren(Ke) {
						return Ke instanceof x.$n1c;
					}
					async getChildren(Ke) {
						if (Ke instanceof x.$n1c) {
							const Je = [];
							return (
								Ke instanceof x.$p1c
									? (Je.push({ element: "name", root: Ke }),
										Je.push({ element: "icon", root: Ke }),
										Je.push({ element: "copyFrom", root: Ke }),
										Je.push({ element: "contents", root: Ke }))
									: Ke instanceof x.$o1c &&
										(Ke.profile.isDefault ||
											(Je.push({ element: "name", root: Ke }),
											Je.push({ element: "icon", root: Ke })),
										Je.push({ element: "useAsDefault", root: Ke }),
										Je.push({ element: "contents", root: Ke })),
								Je
							);
						}
						return [];
					}
				}
				class ae {
					getTemplateId(Ke) {
						return Ke.element.resourceType
							? Ke.root instanceof x.$p1c
								? Le.TEMPLATE_ID
								: Ce.TEMPLATE_ID
							: Fe.TEMPLATE_ID;
					}
					getHeight(Ke) {
						return 24;
					}
				}
				let pe = class {
					constructor(Ke) {
						this.a = Ke;
					}
					hasChildren(Ke) {
						if (Ke instanceof x.$n1c) return !0;
						if (Ke.element.resourceType) {
							if (
								Ke.element.resourceType !== h.ProfileResourceType.Extensions &&
								Ke.element.resourceType !== h.ProfileResourceType.Snippets
							)
								return !1;
							if (Ke.root instanceof x.$p1c) {
								const Je = Ke.element.resourceType;
								if (Ke.root.getFlag(Je)) return !0;
								if (
									!Ke.root.hasResource(Je) ||
									Ke.root.copyFrom === void 0 ||
									!Ke.root.getCopyFlag(Je)
								)
									return !1;
							}
							return !0;
						}
						return !1;
					}
					async getChildren(Ke) {
						if (Ke instanceof x.$n1c)
							return (await Ke.getChildren()).map((Te) => ({
								element: Te,
								root: Ke,
							}));
						if (Ke.element.resourceType) {
							const Je = this.a.show(!0, 500);
							try {
								return (await Ke.root.getChildren(Ke.element.resourceType)).map(
									(Ee) => ({ element: Ee, root: Ke.root }),
								);
							} finally {
								Je.done();
							}
						}
						return [];
					}
				};
				pe = Ne([j(0, A.$bO)], pe);
				class $e extends $.$1c {
					a(Ke) {
						switch (Ke) {
							case h.ProfileResourceType.Settings:
								return (0, C.localize)(11164, null);
							case h.ProfileResourceType.Keybindings:
								return (0, C.localize)(11165, null);
							case h.ProfileResourceType.Snippets:
								return (0, C.localize)(11166, null);
							case h.ProfileResourceType.Tasks:
								return (0, C.localize)(11167, null);
							case h.ProfileResourceType.Extensions:
								return (0, C.localize)(11168, null);
						}
						return "";
					}
					disposeElement(Ke, Je, Te, Ee) {
						Te.elementDisposables.clear();
					}
					disposeTemplate(Ke) {
						Ke.disposables.dispose();
					}
				}
				class ye extends $e {
					renderElement({ element: Ke }, Je, Te, Ee) {
						Te.elementDisposables.clear(), (Te.element = Ke);
					}
				}
				let ue = class extends ye {
					constructor(Ke, Je) {
						super(), (this.b = Ke), (this.c = Je), (this.templateId = "name");
					}
					renderTemplate(Ke) {
						const Je = new $.$Zc(),
							Te = Je.add(new $.$Zc());
						let Ee;
						const Ie = (0, t.$fhb)(Ke, (0, t.$)(".profile-row-container"));
						(0, t.$fhb)(
							Ie,
							(0, t.$)(
								".profile-label-element",
								void 0,
								(0, C.localize)(11169, null),
							),
						);
						const Be = Je.add(
							new v.$Mob(Ie, this.c, {
								inputBoxStyles: (0, f.$xyb)({ inputBorder: J.$hCc }),
								ariaLabel: (0, C.localize)(11170, null),
								placeholder: (0, C.localize)(11171, null),
								validationOptions: {
									validation: (Ue) => {
										if (!Ue)
											return {
												content: (0, C.localize)(11172, null),
												type: v.MessageType.WARNING,
											};
										if (Ee?.root.disabled || !Ee?.root.shouldValidateName())
											return null;
										const qe = Ee?.root.getInitialName();
										return (
											(Ue = Ue.trim()),
											qe !== Ue &&
											this.b.profiles.some(
												(Ae) => !Ae.isTransient && Ae.name === Ue,
											)
												? {
														content: (0, C.localize)(11173, null, Ue),
														type: v.MessageType.WARNING,
													}
												: null
										);
									},
								},
							}),
						);
						Be.onDidChange((Ue) => {
							Ee && Ue && (Ee.root.name = Ue);
						});
						const Se = Je.add((0, t.$dhb)(Be.inputElement));
						Je.add(
							Se.onDidBlur(() => {
								Ee && !Be.value && (Be.value = Ee.root.name);
							}),
						);
						const ke = (Ue) => {
							(Be.value = Ue.root.name),
								Be.validate(),
								Ue.root.disabled ? Be.disable() : Be.enable();
						};
						return {
							set element(Ue) {
								(Ee = Ue),
									ke(Ee),
									Te.add(
										Ee.root.onDidChange((qe) => {
											(qe.name || qe.disabled) && ke(Ue),
												qe.profile && Be.validate();
										}),
									);
							},
							disposables: Je,
							elementDisposables: Te,
						};
					}
				};
				ue = Ne([j(0, h.$Xl), j(1, d.$Wxb)], ue);
				let fe = class extends ye {
					constructor(Ke, Je) {
						super(), (this.b = Ke), (this.c = Je), (this.templateId = "icon");
					}
					renderTemplate(Ke) {
						const Je = new $.$Zc(),
							Te = Je.add(new $.$Zc());
						let Ee;
						const Ie = (0, t.$fhb)(Ke, (0, t.$)(".profile-row-container"));
						(0, t.$fhb)(
							Ie,
							(0, t.$)(
								".profile-label-element",
								void 0,
								(0, C.localize)(11174, null),
							),
						);
						const Be = (0, t.$fhb)(Ie, (0, t.$)(".profile-icon-container")),
							Se = (0, t.$fhb)(
								Be,
								(0, t.$)(`${E.ThemeIcon.asCSSSelector(I.$frc)}`, {
									tabindex: "0",
									role: "button",
									"aria-label": (0, C.localize)(11175, null),
								}),
							),
							ke = Je.add(
								this.b.createInstance(T.$iVc, {
									icons: I.$grc,
									inputBoxStyles: f.$wyb,
								}),
							);
						let Ue;
						const qe = () => {
							(Ee?.root instanceof x.$o1c && Ee.root.profile.isDefault) ||
								Ee?.root.disabled ||
								(ke.clearInput(),
								(Ue = this.c.showHover(
									{
										content: ke.domNode,
										target: Se,
										position: { hoverPosition: D.HoverPosition.BELOW },
										persistence: { sticky: !0 },
										appearance: { showPointer: !0 },
									},
									!0,
								)),
								Ue && (ke.layout(new t.$pgb(486, 260)), ke.focus()));
						};
						Je.add(
							(0, t.$0fb)(Se, t.$$gb.CLICK, (Me) => {
								t.$ahb.stop(Me, !0), qe();
							}),
						),
							Je.add(
								(0, t.$0fb)(Se, t.$$gb.KEY_DOWN, (Me) => {
									const De = new P.$7fb(Me);
									(De.equals(k.KeyCode.Enter) || De.equals(k.KeyCode.Space)) &&
										(t.$ahb.stop(De, !0), qe());
								}),
							),
							Je.add(
								(0, t.$0fb)(ke.domNode, t.$$gb.KEY_DOWN, (Me) => {
									const De = new P.$7fb(Me);
									De.equals(k.KeyCode.Escape) &&
										(t.$ahb.stop(De, !0), Ue?.dispose(), Se.focus());
								}),
							),
							Je.add(
								ke.onDidSelect((Me) => {
									Ue?.dispose(), Se.focus(), Ee && (Ee.root.icon = Me.id);
								}),
							),
							(0, t.$fhb)(
								Be,
								(0, t.$)(
									".profile-description-element",
									void 0,
									(0, C.localize)(11176, null),
								),
							);
						const Ae = (Me) => {
							Me.root.icon
								? (Se.className = E.ThemeIcon.asClassName(
										E.ThemeIcon.fromId(Me.root.icon),
									))
								: (Se.className = E.ThemeIcon.asClassName(
										E.ThemeIcon.fromId(I.$frc.id),
									));
						};
						return {
							set element(Me) {
								(Ee = Me),
									Ae(Ee),
									Te.add(
										Ee.root.onDidChange((De) => {
											De.icon && Ae(Me);
										}),
									);
							},
							disposables: Je,
							elementDisposables: Te,
						};
					}
				};
				fe = Ne([j(0, m.$Li), j(1, L.$Uyb)], fe);
				let me = class extends ye {
					constructor(Ke) {
						super(), (this.b = Ke), (this.templateId = "useForCurrent");
					}
					renderTemplate(Ke) {
						const Je = new $.$Zc(),
							Te = Je.add(new $.$Zc());
						let Ee;
						const Ie = (0, t.$fhb)(Ke, (0, t.$)(".profile-row-container"));
						(0, t.$fhb)(
							Ie,
							(0, t.$)(
								".profile-label-element",
								void 0,
								(0, C.localize)(11177, null),
							),
						);
						const Be = (0, t.$fhb)(
								Ie,
								(0, t.$)(".profile-use-for-current-container"),
							),
							Se = (0, C.localize)(11178, null),
							ke = Je.add(new S.$9ib(Se, !1, f.$syb));
						(0, t.$fhb)(Be, ke.domNode);
						const Ue = (0, t.$fhb)(
							Be,
							(0, t.$)(".profile-description-element", void 0, Se),
						);
						Je.add(
							ke.onChange(() => {
								Ee?.root instanceof x.$o1c &&
									Ee.root.toggleCurrentWindowProfile();
							}),
						),
							Je.add(
								(0, t.$0fb)(Ue, t.$$gb.CLICK, () => {
									Ee?.root instanceof x.$o1c &&
										Ee.root.toggleCurrentWindowProfile();
								}),
							);
						const qe = (Me) => {
								(ke.checked =
									Me.root instanceof x.$o1c &&
									this.b.currentProfile.id === Me.root.profile.id),
									ke.checked && this.b.currentProfile.isDefault
										? ke.disable()
										: ke.enable();
							},
							Ae = this;
						return {
							set element(Me) {
								(Ee = Me),
									qe(Ee),
									Te.add(
										Ae.b.onDidChangeCurrentProfile((De) => {
											qe(Me);
										}),
									);
							},
							disposables: Je,
							elementDisposables: Te,
						};
					}
				};
				me = Ne([j(0, g.$P8)], me);
				class ve extends ye {
					constructor() {
						super(...arguments), (this.templateId = "useAsDefault");
					}
					renderTemplate(Ke) {
						const Je = new $.$Zc(),
							Te = Je.add(new $.$Zc());
						let Ee;
						const Ie = (0, t.$fhb)(Ke, (0, t.$)(".profile-row-container"));
						(0, t.$fhb)(
							Ie,
							(0, t.$)(
								".profile-label-element",
								void 0,
								(0, C.localize)(11179, null),
							),
						);
						const Be = (0, t.$fhb)(
								Ie,
								(0, t.$)(".profile-use-as-default-container"),
							),
							Se = (0, C.localize)(11180, null),
							ke = Je.add(new S.$9ib(Se, !1, f.$syb));
						(0, t.$fhb)(Be, ke.domNode);
						const Ue = (0, t.$fhb)(
							Be,
							(0, t.$)(".profile-description-element", void 0, Se),
						);
						Je.add(
							ke.onChange(() => {
								Ee?.root instanceof x.$o1c && Ee.root.toggleNewWindowProfile();
							}),
						),
							Je.add(
								(0, t.$0fb)(Ue, t.$$gb.CLICK, () => {
									Ee?.root instanceof x.$o1c &&
										Ee.root.toggleNewWindowProfile();
								}),
							);
						const qe = (Ae) => {
							ke.checked =
								Ae.root instanceof x.$o1c && Ae.root.isNewWindowProfile;
						};
						return {
							set element(Ae) {
								(Ee = Ae),
									qe(Ee),
									Te.add(
										Ee.root.onDidChange((Me) => {
											Me.newWindowProfile && qe(Ae);
										}),
									);
							},
							disposables: Je,
							elementDisposables: Te,
						};
					}
				}
				let ge = class extends ye {
					constructor(Ke, Je, Te, Ee) {
						super(),
							(this.c = Ke),
							(this.f = Je),
							(this.g = Te),
							(this.h = Ee),
							(this.templateId = "copyFrom"),
							(this.b = []);
					}
					renderTemplate(Ke) {
						const Je = new $.$Zc(),
							Te = Je.add(new $.$Zc());
						let Ee;
						const Ie = (0, t.$fhb)(
							Ke,
							(0, t.$)(".profile-row-container.profile-copy-from-container"),
						);
						(0, t.$fhb)(
							Ie,
							(0, t.$)(
								".profile-label-element",
								void 0,
								(0, C.localize)(11181, null),
							),
						),
							(0, t.$fhb)(
								Ie,
								(0, t.$)(
									".profile-description-element",
									void 0,
									(0, C.localize)(11182, null),
								),
							);
						const Be = Je.add(
							this.f.createInstance(M.$5ib, [], 0, this.h, f.$Fyb, {
								useCustomDrawn: !0,
								ariaLabel: (0, C.localize)(11183, null),
							}),
						);
						Be.render((0, t.$fhb)(Ie, (0, t.$)(".profile-select-container")));
						const Se = (Ue, qe) => {
								Be.setOptions(qe);
								const Ae =
										Ue.copyFrom instanceof N.URI
											? Ue.copyFrom.toString()
											: Ue.copyFrom?.id,
									Me = Ae ? qe.findIndex((De) => De.id === Ae) : 0;
								Be.select(Me);
							},
							ke = this;
						return {
							set element(Ue) {
								if (((Ee = Ue), Ee.root instanceof x.$p1c)) {
									const qe = Ee.root;
									let Ae = ke.j(qe);
									Se(qe, Ae),
										Be.setEnabled(!qe.previewProfile && !qe.disabled),
										Te.add(
											Ee.root.onDidChange((Me) => {
												(Me.copyFrom || Me.copyFromInfo) &&
													((Ae = ke.j(qe)), Se(qe, Ae)),
													(Me.preview || Me.disabled) &&
														Be.setEnabled(!qe.previewProfile && !qe.disabled);
											}),
										),
										Te.add(
											Be.onDidSelect((Me) => {
												qe.copyFrom = Ae[Me.index].source;
											}),
										);
								}
							},
							disposables: Je,
							elementDisposables: Te,
						};
					}
					setTemplates(Ke) {
						this.b = Ke;
					}
					j(Ke) {
						const Je = {
								text: "\u2500\u2500\u2500\u2500\u2500\u2500",
								isDisabled: !0,
							},
							Te = [];
						Te.push({ text: (0, C.localize)(11184, null) });
						for (const [Ee, Ie] of Ke.copyFromTemplates)
							this.b.some((Be) =>
								this.g.extUri.isEqual(N.URI.parse(Be.url), Ee),
							) ||
								Te.push({
									text: `${Ie} (${(0, O.$kh)(Ee)})`,
									id: Ee.toString(),
									source: Ee,
								});
						if (this.b.length) {
							Te.push({ ...Je, decoratorRight: (0, C.localize)(11185, null) });
							for (const Ee of this.b)
								Te.push({
									text: Ee.name,
									id: Ee.url,
									source: N.URI.parse(Ee.url),
								});
						}
						Te.push({ ...Je, decoratorRight: (0, C.localize)(11186, null) });
						for (const Ee of this.c.profiles)
							Te.push({ text: Ee.name, id: Ee.id, source: Ee });
						return Te;
					}
				};
				ge = Ne([j(0, h.$Xl), j(1, m.$Li), j(2, X.$Vl), j(3, d.$Wxb)], ge);
				let be = class extends ye {
					constructor(Ke, Je) {
						super(),
							(this.g = Ke),
							(this.h = Je),
							(this.templateId = "contents"),
							(this.b = this.D(new w.$re())),
							(this.onDidChangeContentHeight = this.b.event),
							(this.c = this.D(new w.$re())),
							(this.onDidChangeSelection = this.c.event);
					}
					renderTemplate(Ke) {
						const Je = new $.$Zc(),
							Te = Je.add(new $.$Zc());
						let Ee;
						const Ie = (0, t.$fhb)(Ke, (0, t.$)(".profile-row-container"));
						(0, t.$fhb)(
							Ie,
							(0, t.$)(
								".profile-label-element",
								void 0,
								(0, C.localize)(11187, null),
							),
						);
						const Be = (0, t.$fhb)(
								Ie,
								(0, t.$)(".profile-description-element"),
							),
							Se = (0, t.$fhb)(Ie, (0, t.$)(".profile-content-tree-header")),
							ke = (0, t.$)(
								".options-header",
								void 0,
								(0, t.$)("span", void 0, (0, C.localize)(11188, null)),
							);
						(0, t.$fhb)(
							Se,
							(0, t.$)(""),
							(0, t.$)("", void 0, (0, C.localize)(11189, null)),
							ke,
							(0, t.$)(".actions-header", void 0, (0, C.localize)(11190, null)),
						);
						const Ue = new ae(),
							qe = (this.f = Je.add(
								this.h.createInstance(
									l.$FMb,
									"ProfileEditor-ContentsTree",
									(0, t.$fhb)(
										Ie,
										(0, t.$)(
											".profile-content-tree.file-icon-themable-tree.show-file-icons",
										),
									),
									Ue,
									[
										this.h.createInstance(Ce),
										this.h.createInstance(Le),
										this.h.createInstance(Fe),
									],
									this.h.createInstance(pe),
									{
										multipleSelectionSupport: !1,
										horizontalScrolling: !1,
										accessibilityProvider: {
											getAriaLabel(De) {
												return (De?.element).resourceType
													? (De?.element).resourceType
													: (De?.element).label
														? (De?.element).label
														: "";
											},
											getWidgetAriaLabel() {
												return "";
											},
										},
										identityProvider: {
											getId(De) {
												return De?.element.handle ? De.element.handle : "";
											},
										},
										expandOnlyOnTwistieClick: !0,
										renderIndentGuides: B.RenderIndentGuides.None,
										enableStickyScroll: !1,
										openOnSingleClick: !1,
										alwaysConsumeMouseWheel: !1,
									},
								),
							));
						this.f.style(te),
							Je.add((0, $.$Yc)(() => (this.f = void 0))),
							Je.add(
								this.f.onDidChangeContentHeight((De) => {
									this.f?.layout(De), Ee && this.b.fire(Ee);
								}),
							),
							Je.add(
								this.f.onDidChangeSelection((De) => {
									Ee &&
										this.c.fire({
											element: Ee,
											selected: !!De.elements.length,
										});
								}),
							),
							Je.add(
								this.f.onDidOpen(async (De) => {
									De.browserEvent &&
										((De.browserEvent.target &&
											De.browserEvent.target.classList.contains(
												S.$9ib.CLASS_NAME,
											)) ||
											(De.element?.element.action &&
												(await De.element.element.action.run())));
								}),
							);
						const Ae = (De) => {
								const Re = (0, C.localize)(11191, null),
									je = new K.$cl().appendMarkdown((0, C.localize)(11192, null));
								if (
									((0, t.$9fb)(Be),
									!(De.root instanceof x.$o1c && De.root.profile.isDefault))
								) {
									if (De.root instanceof x.$p1c) {
										const Ve = De.root.getCopyFromName(),
											Ze =
												Ve === this.g.defaultProfile.name
													? (0, C.localize)(11193, null, Ve)
													: Ve;
										Ze &&
											je.appendMarkdown((0, C.localize)(11194, null, Ze, Ve)),
											je
												.appendMarkdown(Re)
												.appendMarkdown((0, C.localize)(11195, null));
									} else
										De.root instanceof x.$o1c &&
											je
												.appendMarkdown(Re)
												.appendMarkdown(
													(0, C.localize)(
														11196,
														null,
														De.root.profile.name,
														De.root.profile.name,
													),
												);
									(0, t.$fhb)(Be, Te.add((0, W.$Uib)(je)).element);
								}
							},
							Me = this;
						return {
							set element(De) {
								(Ee = De),
									Ae(De),
									De.root instanceof x.$p1c
										? Se.classList.remove("default-profile")
										: De.root instanceof x.$o1c &&
											Se.classList.toggle(
												"default-profile",
												De.root.profile.isDefault,
											),
									qe.setInput(Ee.root),
									Te.add(
										Ee.root.onDidChange((Re) => {
											(Re.copyFrom || Re.copyFlags || Re.flags) &&
												qe.updateChildren(De.root),
												Re.copyFromInfo && (Ae(De), Me.b.fire(De));
										}),
									);
							},
							disposables: Je,
							elementDisposables: new $.$Zc(),
						};
					}
					clearSelection() {
						this.f && (this.f.setSelection([]), this.f.setFocus([]));
					}
				};
				be = Ne([j(0, h.$Xl), j(1, m.$Li)], be);
				let Ce = class extends $e {
					static {
						ie = this;
					}
					static {
						this.TEMPLATE_ID = "ExistingProfileResourceTemplate";
					}
					constructor(Ke) {
						super(), (this.b = Ke), (this.templateId = ie.TEMPLATE_ID);
					}
					renderTemplate(Ke) {
						const Je = new $.$Zc(),
							Te = (0, t.$fhb)(
								Ke,
								(0, t.$)(
									".profile-tree-item-container.existing-profile-resource-type-container",
								),
							),
							Ee = (0, t.$fhb)(Te, (0, t.$)(".profile-resource-type-label")),
							Ie = Je.add(new G.$cpb({ items: [] }));
						(0, t.$fhb)(
							(0, t.$fhb)(Te, (0, t.$)(".profile-resource-options-container")),
							Ie.domNode,
						);
						const Be = (0, t.$fhb)(
								Te,
								(0, t.$)(".profile-resource-actions-container"),
							),
							Se = Je.add(
								this.b.createInstance(H.$Syb, Be, {
									hoverDelegate: Je.add((0, q.$dib)()),
									highlightToggledItems: !0,
								}),
							);
						return {
							label: Ee,
							radio: Ie,
							actionBar: Se,
							disposables: Je,
							elementDisposables: Je.add(new $.$Zc()),
						};
					}
					renderElement({ element: Ke }, Je, Te, Ee) {
						Te.elementDisposables.clear();
						const { element: Ie, root: Be } = Ke;
						if (!(Be instanceof x.$o1c))
							throw new Error(
								"ExistingProfileResourceTreeRenderer can only render existing profile element",
							);
						if ((0, R.$lg)(Ie) || !(0, x.$l1c)(Ie))
							throw new Error("Invalid profile resource element");
						const Se = () => {
								Te.radio.setItems([
									{
										text: (0, C.localize)(11197, null),
										tooltip: (0, C.localize)(11198, null, ke),
										isActive: Be.getFlag(Ie.resourceType),
									},
									{
										text: Be.name,
										tooltip: (0, C.localize)(11199, null, ke, Be.name),
										isActive: !Be.getFlag(Ie.resourceType),
									},
								]);
							},
							ke = this.a(Ie.resourceType);
						(Te.label.textContent = ke),
							Be instanceof x.$o1c && Be.profile.isDefault
								? Te.radio.domNode.classList.add("hide")
								: (Te.radio.domNode.classList.remove("hide"),
									Se(),
									Te.elementDisposables.add(
										Be.onDidChange((Ue) => {
											Ue.name && Se();
										}),
									),
									Te.elementDisposables.add(
										Te.radio.onDidSelect((Ue) =>
											Be.setFlag(Ie.resourceType, Ue === 0),
										),
									)),
							Te.actionBar.setActions(Ie.action ? [Ie.action] : []);
					}
				};
				Ce = ie = Ne([j(0, m.$Li)], Ce);
				let Le = class extends $e {
					static {
						ne = this;
					}
					static {
						this.TEMPLATE_ID = "NewProfileResourceTemplate";
					}
					constructor(Ke, Je) {
						super(),
							(this.b = Ke),
							(this.c = Je),
							(this.templateId = ne.TEMPLATE_ID);
					}
					renderTemplate(Ke) {
						const Je = new $.$Zc(),
							Te = (0, t.$fhb)(
								Ke,
								(0, t.$)(
									".profile-tree-item-container.new-profile-resource-type-container",
								),
							),
							Ee = (0, t.$fhb)(
								Te,
								(0, t.$)(".profile-resource-type-label-container"),
							),
							Ie = (0, t.$fhb)(
								Ee,
								(0, t.$)("span.profile-resource-type-label"),
							),
							Be = Je.add(new G.$cpb({ items: [] }));
						(0, t.$fhb)(
							(0, t.$fhb)(Te, (0, t.$)(".profile-resource-options-container")),
							Be.domNode,
						);
						const Se = (0, t.$fhb)(
								Te,
								(0, t.$)(".profile-resource-actions-container"),
							),
							ke = Je.add(
								this.c.createInstance(H.$Syb, Se, {
									hoverDelegate: Je.add((0, q.$dib)()),
									highlightToggledItems: !0,
								}),
							);
						return {
							label: Ie,
							radio: Be,
							actionBar: ke,
							disposables: Je,
							elementDisposables: Je.add(new $.$Zc()),
						};
					}
					renderElement({ element: Ke }, Je, Te, Ee) {
						Te.elementDisposables.clear();
						const { element: Ie, root: Be } = Ke;
						if (!(Be instanceof x.$p1c))
							throw new Error(
								"NewProfileResourceTreeRenderer can only render new profile element",
							);
						if ((0, R.$lg)(Ie) || !(0, x.$l1c)(Ie))
							throw new Error("Invalid profile resource element");
						const Se = this.a(Ie.resourceType);
						Te.label.textContent = Se;
						const ke = () => {
							const Ue = [
									{
										text: (0, C.localize)(11200, null),
										tooltip: (0, C.localize)(11201, null, Se),
									},
									{
										text: (0, C.localize)(11202, null),
										tooltip: (0, C.localize)(11203, null, Se),
									},
								],
								qe = Be.getCopyFromName(),
								Ae =
									qe === this.b.defaultProfile.name
										? (0, C.localize)(11204, null, qe)
										: qe;
							Be.copyFrom && Ae
								? (Te.radio.setItems([
										{
											text: Ae,
											tooltip: Ae
												? (0, C.localize)(11205, null, Se, Ae)
												: (0, C.localize)(11206, null),
										},
										...Ue,
									]),
									Te.radio.setActiveItem(
										Be.getCopyFlag(Ie.resourceType)
											? 0
											: Be.getFlag(Ie.resourceType)
												? 1
												: 2,
									))
								: (Te.radio.setItems(Ue),
									Te.radio.setActiveItem(Be.getFlag(Ie.resourceType) ? 0 : 1));
						};
						Be.copyFrom
							? Te.elementDisposables.add(
									Te.radio.onDidSelect((Ue) => {
										Be.setFlag(Ie.resourceType, Ue === 1),
											Be.setCopyFlag(Ie.resourceType, Ue === 0);
									}),
								)
							: Te.elementDisposables.add(
									Te.radio.onDidSelect((Ue) => {
										Be.setFlag(Ie.resourceType, Ue === 0);
									}),
								),
							ke(),
							Te.radio.setEnabled(!Be.disabled),
							Te.elementDisposables.add(
								Be.onDidChange((Ue) => {
									Ue.disabled && Te.radio.setEnabled(!Be.disabled),
										(Ue.copyFrom || Ue.copyFromInfo) && ke();
								}),
							),
							Te.actionBar.setActions(Ie.action ? [Ie.action] : []);
					}
				};
				Le = ne = Ne([j(0, h.$Xl), j(1, m.$Li)], Le);
				let Fe = class extends $e {
					static {
						ee = this;
					}
					static {
						this.TEMPLATE_ID = "ProfileResourceChildTreeItemTemplate";
					}
					constructor(Ke) {
						super(),
							(this.f = Ke),
							(this.templateId = ee.TEMPLATE_ID),
							(this.b = Ke.createInstance(U.$uPb, U.$tPb)),
							(this.c = this.D(Ke.createInstance(L.$Vyb, "mouse", !1, {})));
					}
					renderTemplate(Ke) {
						const Je = new $.$Zc(),
							Te = (0, t.$fhb)(
								Ke,
								(0, t.$)(
									".profile-tree-item-container.profile-resource-child-container",
								),
							),
							Ee = Je.add(new S.$9ib("", !1, f.$syb));
						(0, t.$fhb)(Te, Ee.domNode);
						const Ie = Je.add(this.b.create(Te, { hoverDelegate: this.c })),
							Be = (0, t.$fhb)(
								Te,
								(0, t.$)(".profile-resource-actions-container"),
							),
							Se = Je.add(
								this.f.createInstance(H.$Syb, Be, {
									hoverDelegate: Je.add((0, q.$dib)()),
									highlightToggledItems: !0,
								}),
							);
						return {
							checkbox: Ee,
							resourceLabel: Ie,
							actionBar: Se,
							disposables: Je,
							elementDisposables: Je.add(new $.$Zc()),
						};
					}
					renderElement({ element: Ke }, Je, Te, Ee) {
						Te.elementDisposables.clear();
						const { element: Ie } = Ke;
						if ((0, R.$lg)(Ie) || !(0, x.$m1c)(Ie))
							throw new Error("Invalid profile resource element");
						Ie.checkbox
							? (Te.checkbox.domNode.setAttribute("tabindex", "0"),
								Te.checkbox.domNode.classList.remove("hide"),
								(Te.checkbox.checked = Ie.checkbox.isChecked),
								(Te.checkbox.domNode.ariaLabel =
									Ie.checkbox.accessibilityInformation?.label ?? ""),
								Ie.checkbox.accessibilityInformation?.role &&
									(Te.checkbox.domNode.role =
										Ie.checkbox.accessibilityInformation.role))
							: (Te.checkbox.domNode.removeAttribute("tabindex"),
								Te.checkbox.domNode.classList.add("hide")),
							Te.resourceLabel.setResource(
								{
									name: Ie.resource ? (0, O.$kh)(Ie.resource) : Ie.label,
									resource: Ie.resource,
								},
								{
									forceLabel: !0,
									icon: Ie.icon,
									hideIcon: !Ie.resource && !Ie.icon,
								},
							),
							Te.actionBar.setActions(Ie.action ? [Ie.action] : []);
					}
				};
				Fe = ee = Ne([j(0, m.$Li)], Fe);
				let Oe = class extends n.$LO {
					static {
						_ = this;
					}
					static {
						this.ID = "workbench.input.userDataProfiles";
					}
					get dirty() {
						return this.c;
					}
					set dirty(Ke) {
						this.c !== Ke && ((this.c = Ke), this.b.fire());
					}
					constructor(Ke) {
						super(),
							(this.h = Ke),
							(this.resource = void 0),
							(this.c = !1),
							(this.a = x.$q1c.getInstance(this.h)),
							this.D(
								this.a.onDidChange(
									(Je) =>
										(this.dirty = this.a.profiles.some(
											(Te) => Te instanceof x.$p1c,
										)),
								),
							);
					}
					get typeId() {
						return _.ID;
					}
					getName() {
						return (0, C.localize)(11207, null);
					}
					getIcon() {
						return g.$X8;
					}
					async resolve() {
						return await this.a.resolve(), this.a;
					}
					isDirty() {
						return this.dirty;
					}
					async save() {
						return await this.a.saveNewProfile(), this;
					}
					async revert() {
						this.a.revert();
					}
					matches(Ke) {
						return Ke instanceof _;
					}
					dispose() {
						for (const Ke of this.a.profiles)
							Ke instanceof x.$o1c && Ke.reset();
						super.dispose();
					}
				};
				(e.$t1c = Oe), (e.$t1c = Oe = _ = Ne([j(0, m.$Li)], Oe));
				class xe {
					canSerialize(Ke) {
						return !0;
					}
					serialize(Ke) {
						return "";
					}
					deserialize(Ke) {
						return Ke.createInstance(Oe);
					}
				}
				e.$u1c = xe;
			},
		),
		define(
			de[3893],
			he([
				1, 0, 3, 12, 4, 11, 8, 129, 52, 133, 63, 40, 9, 32, 25, 1260, 99, 41,
				30, 192, 44, 3892, 102, 66, 5, 87, 465, 286,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$w1c = e.$v1c = void 0),
					(e.$v1c = new E.$XX("OpenProfile"));
				let P = class extends t.$1c {
					static {
						this.ID = "workbench.contrib.userDataProfiles";
					}
					constructor(L, D, M, N, A, R, O, B, U, z, F, x) {
						super(),
							(this.h = L),
							(this.j = D),
							(this.m = M),
							(this.n = N),
							(this.q = A),
							(this.r = R),
							(this.s = B),
							(this.t = U),
							(this.u = z),
							(this.w = F),
							(this.G = this.D(new t.$2c())),
							(this.c = r.$48.bindTo(O)),
							r.$38.bindTo(O).set(this.j.isEnabled()),
							(this.f = r.$58.bindTo(O)),
							this.c.set(this.h.currentProfile.id),
							this.f.set(!!this.h.currentProfile.isTransient),
							this.D(
								this.h.onDidChangeCurrentProfile((H) => {
									this.c.set(this.h.currentProfile.id),
										this.f.set(!!this.h.currentProfile.isTransient);
								}),
							),
							(this.g = r.$68.bindTo(O)),
							this.g.set(this.j.profiles.length > 1),
							this.D(
								this.j.onDidChangeProfiles((H) =>
									this.g.set(this.j.profiles.length > 1),
								),
							),
							this.z(),
							this.C(),
							this.D(this.w.registerHandler(this)),
							i.$r &&
								z.when(m.LifecyclePhase.Eventually).then(() => D.cleanUp()),
							this.S(),
							x.options?.profileToPreview &&
								z
									.when(m.LifecyclePhase.Restored)
									.then(() =>
										this.handleURL(h.URI.revive(x.options.profileToPreview)),
									);
					}
					async handleURL(L) {
						if ((0, r.$V8)(L)) {
							const D = await this.y();
							if (D) return D.createNewProfile(L), !0;
						}
						return !1;
					}
					async y() {
						return await this.s.activeGroup.openEditor(new l.$t1c(this.t));
					}
					z() {
						f.$Io
							.as(s.$a1.EditorPane)
							.registerEditorPane(
								b.$vVb.create(l.$s1c, l.$s1c.ID, (0, w.localize)(11127, null)),
								[new y.$Ji(l.$t1c)],
							),
							f.$Io
								.as(s.$a1.EditorFactory)
								.registerEditorSerializer(l.$t1c.ID, l.$u1c);
					}
					C() {
						this.D(this.M()),
							this.D(this.L()),
							this.F(),
							this.I(),
							this.H(),
							this.D(this.j.onDidChangeProfiles(() => this.H())),
							this.D(this.N()),
							this.O(),
							this.P(),
							this.Q(),
							this.R();
					}
					F() {
						E.$ZX.appendMenuItem(E.$XX.MenubarFileMenu, {
							title: (0, w.localize)(11128, null),
							submenu: e.$v1c,
							group: "1_new",
							order: 4,
						});
					}
					H() {
						this.G.value = new t.$Zc();
						for (const L of this.j.profiles)
							L.isTransient || this.G.value.add(this.J(L));
					}
					I() {
						return (0, E.$4X)(
							class extends E.$3X {
								constructor() {
									super({
										id: "workbench.profiles.actions.newWindowWithProfile",
										title: (0, w.localize2)(
											11136,
											"New Window with Profile...",
										),
										category: r.$Z8,
										precondition: r.$68,
										f1: !0,
									});
								}
								async run(D) {
									const M = D.get(u.$DJ),
										N = D.get(d.$Xl),
										A = D.get(S.$asb),
										R = await M.pick(
											N.profiles.map((O) => ({ label: O.name, profile: O })),
											{
												title: (0, w.localize)(11129, null),
												placeHolder: (0, w.localize)(11130, null),
												canPickMany: !1,
											},
										);
									if (R)
										return A.openWindow({
											remoteAuthority: null,
											forceProfile: R.profile.name,
										});
								}
							},
						);
					}
					J(L) {
						const D = new t.$Zc(),
							M = `workbench.action.openProfile.${L.name.replace("/s+/", "_")}`;
						return (
							D.add(
								(0, E.$4X)(
									class extends E.$3X {
										constructor() {
											super({
												id: M,
												title: (0, w.localize2)(11137, "{0}", L.name),
												menu: { id: e.$v1c, group: "0_profiles", when: r.$68 },
											});
										}
										run(A) {
											return A.get(S.$asb).openWindow({
												remoteAuthority: null,
												forceProfile: L.name,
											});
										}
									},
								),
							),
							D.add(
								E.$ZX.appendMenuItem(E.$XX.CommandPalette, {
									command: {
										id: M,
										category: r.$Z8,
										title: (0, w.localize2)(11138, "Open {0} Profile", L.name),
										precondition: r.$68,
									},
								}),
							),
							D
						);
					}
					L() {
						const L = this;
						return (0, E.$4X)(
							class extends E.$3X {
								constructor() {
									super({
										id: "workbench.profiles.actions.switchProfile",
										title: (0, w.localize2)(11139, "Switch Profile..."),
										category: r.$Z8,
										f1: !0,
										precondition: r.$38,
									});
								}
								async run(M) {
									const N = M.get(u.$DJ),
										A = [];
									for (const O of L.j.profiles)
										A.push({
											id: O.id,
											label:
												O.id === L.h.currentProfile.id
													? `$(check) ${O.name}`
													: O.name,
											profile: O,
										});
									const R = await N.pick(
										A.sort((O, B) =>
											O.profile.name.localeCompare(B.profile.name),
										),
										{ placeHolder: (0, w.localize)(11131, null) },
									);
									R && (await L.m.switchProfile(R.profile));
								}
							},
						);
					}
					M() {
						const L = new t.$Zc();
						return (
							L.add(
								(0, E.$4X)(
									class extends E.$3X {
										constructor() {
											super({
												id: "workbench.profiles.actions.manageProfiles",
												title: {
													...(0, w.localize2)(11140, "Profiles"),
													mnemonicTitle: (0, w.localize)(11132, null),
												},
												menu: [
													{
														id: E.$XX.GlobalActivity,
														group: "2_configuration",
														order: 1,
													},
													{
														id: E.$XX.MenubarPreferencesMenu,
														group: "2_configuration",
														order: 1,
													},
												],
											});
										}
										run(M) {
											const N = M.get($.$EY),
												A = M.get(v.$Li);
											return N.activeGroup.openEditor(new l.$t1c(A));
										}
									},
								),
							),
							L.add(
								E.$ZX.appendMenuItem(E.$XX.CommandPalette, {
									command: {
										id: "workbench.profiles.actions.manageProfiles",
										category: p.$ck.Preferences,
										title: (0, w.localize2)(11141, "Open Profiles (UI)"),
									},
								}),
							),
							L
						);
					}
					N() {
						const L = this,
							D = new t.$Zc(),
							M = "workbench.profiles.actions.exportProfile";
						return (
							D.add(
								(0, E.$4X)(
									class extends E.$3X {
										constructor() {
											super({
												id: M,
												title: (0, w.localize2)(11142, "Export Profile..."),
												category: r.$Z8,
												f1: !0,
											});
										}
										async run() {
											(await L.y())?.selectProfile(L.h.currentProfile);
										}
									},
								),
							),
							D.add(
								E.$ZX.appendMenuItem(E.$XX.MenubarShare, {
									command: {
										id: M,
										title: (0, w.localize2)(
											11143,
											"Export Profile ({0})...",
											L.h.currentProfile.name,
										),
										precondition: r.$38,
									},
								}),
							),
							D
						);
					}
					O() {
						const L = this;
						this.D(
							(0, E.$4X)(
								class extends E.$3X {
									constructor() {
										super({
											id: "workbench.profiles.actions.createFromCurrentProfile",
											title: (0, w.localize2)(
												11144,
												"Save Current Profile As...",
											),
											category: r.$Z8,
											f1: !0,
											precondition: r.$38,
										});
									}
									async run() {
										(await L.y())?.createNewProfile(L.h.currentProfile);
									}
								},
							),
						);
					}
					P() {
						const L = this;
						this.D(
							(0, E.$4X)(
								class extends E.$3X {
									constructor() {
										super({
											id: "workbench.profiles.actions.createProfile",
											title: (0, w.localize2)(11145, "New Profile..."),
											category: r.$Z8,
											precondition: r.$38,
											f1: !0,
											menu: [
												{ id: e.$v1c, group: "1_manage_profiles", order: 1 },
											],
										});
									}
									async run(M) {
										return (await L.y())?.createNewProfile();
									}
								},
							),
						);
					}
					Q() {
						this.D(
							(0, E.$4X)(
								class extends E.$3X {
									constructor() {
										super({
											id: "workbench.profiles.actions.deleteProfile",
											title: (0, w.localize2)(11146, "Delete Profile..."),
											category: r.$Z8,
											f1: !0,
											precondition: C.$Kj.and(r.$38, r.$68),
										});
									}
									async run(D) {
										const M = D.get(u.$DJ),
											N = D.get(r.$P8),
											A = D.get(d.$Xl),
											R = D.get(r.$Q8),
											O = D.get(a.$4N),
											B = A.profiles.filter(
												(U) => !U.isDefault && !U.isTransient,
											);
										if (B.length) {
											const U = await M.pick(
												B.map((z) => ({
													label: z.name,
													description:
														z.id === N.currentProfile.id
															? (0, w.localize)(11133, null)
															: void 0,
													profile: z,
												})),
												{
													title: (0, w.localize)(11134, null),
													placeHolder: (0, w.localize)(11135, null),
													canPickMany: !0,
												},
											);
											if (U)
												try {
													await Promise.all(
														U.map((z) => R.removeProfile(z.profile)),
													);
												} catch (z) {
													O.error(z);
												}
										}
									}
								},
							),
						);
					}
					R() {
						this.D(
							(0, E.$4X)(
								class extends E.$3X {
									constructor() {
										super({
											id: "workbench.profiles.actions.help",
											title: r.$Y8,
											category: p.$ck.Help,
											menu: [{ id: E.$XX.CommandPalette }],
										});
									}
									run(D) {
										return D.get(o.$7rb).open(
											h.URI.parse("https://aka.ms/vscode-profiles-help"),
										);
									}
								},
							),
						);
					}
					async S() {
						await this.u.when(m.LifecyclePhase.Eventually);
						const L = await this.r.getTelemetryWorkspaceId(
							this.q.getWorkspace(),
							this.q.getWorkbenchState(),
						);
						this.n.publicLog2("workspaceProfileInfo", {
							workspaceId: L,
							defaultProfile: this.h.currentProfile.isDefault,
						});
					}
				};
				(e.$w1c = P),
					(e.$w1c = P =
						Ne(
							[
								j(0, r.$P8),
								j(1, d.$Xl),
								j(2, r.$Q8),
								j(3, c.$km),
								j(4, n.$Vi),
								j(5, g.$j1c),
								j(6, C.$6j),
								j(7, $.$EY),
								j(8, v.$Li),
								j(9, m.$n6),
								j(10, I.$2rb),
								j(11, T.$5rb),
							],
							P,
						));
			},
		),
		