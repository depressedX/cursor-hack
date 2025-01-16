define(
			de[1985],
			he([
				1, 0, 35, 550, 7, 6, 51, 66, 5, 759, 44, 123, 24, 548, 1984, 10, 3, 21,
				1287, 4008, 97, 2682, 29, 96, 28, 362, 15, 1291, 18, 87, 8, 128, 100,
				75,
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
				var A;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Huc = e.$Guc = void 0);
				class R {
					constructor() {
						(this.element = (0, w.$)(".grid-view-container")),
							(this.a = new E.$Ae()),
							(this.onDidChange = this.a.event);
					}
					get minimumWidth() {
						return this.gridWidget ? this.gridWidget.minimumWidth : 0;
					}
					get maximumWidth() {
						return this.gridWidget
							? this.gridWidget.maximumWidth
							: Number.POSITIVE_INFINITY;
					}
					get minimumHeight() {
						return this.gridWidget ? this.gridWidget.minimumHeight : 0;
					}
					get maximumHeight() {
						return this.gridWidget
							? this.gridWidget.maximumHeight
							: Number.POSITIVE_INFINITY;
					}
					get gridWidget() {
						return this.b;
					}
					set gridWidget(z) {
						(this.element.innerText = ""),
							z
								? (this.element.appendChild(z.element),
									(this.a.input = z.onDidChange))
								: (this.a.input = E.Event.None),
							(this.b = z);
					}
					layout(z, F, x, H) {
						this.gridWidget?.layout(z, F, x, H);
					}
					dispose() {
						this.a.dispose();
					}
				}
				let O = class extends i.Part {
					static {
						A = this;
					}
					static {
						this.a = "editorpart.state";
					}
					static {
						this.b = "editorpart.centeredview";
					}
					constructor(z, F, x, H, q, V, G, K, J, W, X) {
						super(F, { hasTitle: !1 }, V, K, J),
							(this.Ab = z),
							(this.Bb = x),
							(this.windowId = H),
							(this.Cb = q),
							(this.Db = G),
							(this.Eb = W),
							(this.Fb = X),
							(this.y = this.D(new E.$re())),
							(this.onDidFocus = this.y.event),
							(this.bb = this.D(new E.$re())),
							(this.onDidLayout = this.bb.event),
							(this.cb = this.D(new E.$re())),
							(this.onDidChangeActiveGroup = this.cb.event),
							(this.db = this.D(new E.$re())),
							(this.onDidChangeGroupIndex = this.db.event),
							(this.eb = this.D(new E.$re())),
							(this.onDidChangeGroupLabel = this.eb.event),
							(this.fb = this.D(new E.$re())),
							(this.onDidChangeGroupLocked = this.fb.event),
							(this.gb = this.D(new E.$re())),
							(this.onDidChangeGroupMaximized = this.gb.event),
							(this.hb = this.D(new E.$re())),
							(this.onDidActivateGroup = this.hb.event),
							(this.ib = this.D(new E.$ue())),
							(this.onDidAddGroup = this.ib.event),
							(this.jb = this.D(new E.$ue())),
							(this.onDidRemoveGroup = this.jb.event),
							(this.kb = this.D(new E.$re())),
							(this.onDidMoveGroup = this.kb.event),
							(this.lb = this.D(new E.$re())),
							(this.mb = this.D(new E.$Ae())),
							(this.onDidChangeSizeConstraints = E.Event.any(
								this.lb.event,
								this.mb.event,
							)),
							(this.nb = this.D(new E.$Ae())),
							(this.onDidScroll = E.Event.any(this.lb.event, this.nb.event)),
							(this.ob = this.D(new E.$re())),
							(this.onDidChangeEditorPartOptions = this.ob.event),
							(this.pb = this.D(new E.$re())),
							(this.onWillDispose = this.pb.event),
							(this.qb = this.F(
								o.StorageScope.WORKSPACE,
								o.StorageTarget.USER,
							)),
							(this.rb = this.F(
								o.StorageScope.PROFILE,
								o.StorageTarget.MACHINE,
							)),
							(this.sb = new Map()),
							(this.tb = []),
							(this.yb = this.D(new p.$Zc())),
							(this.zb = this.D(new R())),
							(this.Jb = []),
							(this.Kb = (0, c.$HEb)(this.Db, this.n)),
							(this.Lb = 0),
							(this.Mb = 0),
							(this.sideGroup = {
								openEditor: (Y, ie) => {
									const [ne] = this.vb.invokeFunction((ee) =>
										(0, T.$ydc)(ee, { editor: Y, options: ie }, P.$KY),
									);
									return ne.openEditor(Y, ie);
								},
							}),
							(this.Pb = !1),
							(this.Qb = new I.$0h()),
							(this.whenReady = this.Qb.p),
							(this.Rb = new I.$0h()),
							(this.whenRestored = this.Rb.p),
							(this.Sb = !1),
							(this.priority = r.LayoutPriority.High),
							this.Gb();
					}
					Gb() {
						this.D(this.Db.onDidChangeConfiguration((z) => this.Hb(z))),
							this.D(this.n.onDidFileIconThemeChange(() => this.Ib())),
							this.D(
								this.H(o.StorageScope.WORKSPACE, this.B)((z) => this.Cc(z)),
							);
					}
					Hb(z) {
						(0, c.$GEb)(z) && this.Ib();
					}
					Ib() {
						const z = this.Kb,
							F = (0, c.$HEb)(this.Db, this.n);
						for (const x of this.Jb) Object.assign(F, x);
						(this.Kb = F),
							this.ob.fire({ oldPartOptions: z, newPartOptions: F });
					}
					get partOptions() {
						return this.Kb;
					}
					enforcePartOptions(z) {
						return (
							this.Jb.push(z),
							this.Ib(),
							(0, p.$Yc)(() => {
								this.Jb.splice(this.Jb.indexOf(z), 1), this.Ib();
							})
						);
					}
					get contentDimension() {
						return this.Nb;
					}
					get activeGroup() {
						return this.Ob;
					}
					get groups() {
						return Array.from(this.sb.values());
					}
					get count() {
						return this.sb.size;
					}
					get orientation() {
						return this.xb && this.xb.orientation === r.Orientation.VERTICAL
							? d.GroupOrientation.VERTICAL
							: d.GroupOrientation.HORIZONTAL;
					}
					get isReady() {
						return this.Pb;
					}
					get hasRestorableState() {
						return !!this.qb[A.a];
					}
					get willRestoreState() {
						return this.Sb;
					}
					getGroups(z = d.GroupsOrder.CREATION_TIME) {
						switch (z) {
							case d.GroupsOrder.CREATION_TIME:
								return this.groups;
							case d.GroupsOrder.MOST_RECENTLY_ACTIVE: {
								const F = (0, h.$Lb)(this.tb.map((x) => this.getGroup(x)));
								return (0, h.$Qb)([...F, ...this.groups]);
							}
							case d.GroupsOrder.GRID_APPEARANCE: {
								const F = [];
								return this.xb && this.Tb(F, this.xb.getViews()), F;
							}
						}
					}
					Tb(z, F) {
						(0, r.$zob)(F)
							? F.children.forEach((x) => this.Tb(z, x))
							: z.push(F.view);
					}
					hasGroup(z) {
						return this.sb.has(z);
					}
					getGroup(z) {
						return this.sb.get(z);
					}
					findGroup(z, F = this.activeGroup, x) {
						if (typeof z.direction == "number")
							return this.Ub(z.direction, F, x);
						if (typeof z.location == "number") return this.Vb(z.location, F, x);
						throw new Error("invalid arguments");
					}
					Ub(z, F, x) {
						const H = this.jc(F),
							q = this.xb.getNeighborViews(H, this.fc(z), x);
						return (
							q.sort((V, G) => this.tb.indexOf(V.id) - this.tb.indexOf(G.id)),
							q[0]
						);
					}
					Vb(z, F, x) {
						const H = this.jc(F),
							q = this.getGroups(d.GroupsOrder.GRID_APPEARANCE),
							V = q.indexOf(H);
						switch (z) {
							case d.GroupLocation.FIRST:
								return q[0];
							case d.GroupLocation.LAST:
								return q[q.length - 1];
							case d.GroupLocation.NEXT: {
								let G = q[V + 1];
								return !G && x && (G = this.Vb(d.GroupLocation.FIRST, F)), G;
							}
							case d.GroupLocation.PREVIOUS: {
								let G = q[V - 1];
								return !G && x && (G = this.Vb(d.GroupLocation.LAST, F)), G;
							}
						}
					}
					activateGroup(z, F) {
						const x = this.jc(z);
						return (
							this.cc(x),
							F || this.Eb.moveTop((0, w.getWindow)(this.element)),
							x
						);
					}
					restoreGroup(z) {
						const F = this.jc(z);
						return this.dc(F), F;
					}
					getSize(z) {
						const F = this.jc(z);
						return this.xb.getViewSize(F);
					}
					setSize(z, F) {
						const x = this.jc(z);
						this.xb.resizeView(x, F);
					}
					arrangeGroups(z, F = this.activeGroup) {
						if (this.count < 2 || !this.xb) return;
						const x = this.jc(F);
						switch (z) {
							case d.GroupsArrangement.EVEN:
								this.xb.distributeViewSizes();
								break;
							case d.GroupsArrangement.MAXIMIZE:
								if (this.groups.length < 2) return;
								this.xb.maximizeView(x), x.focus();
								break;
							case d.GroupsArrangement.EXPAND:
								this.xb.expandView(x);
								break;
						}
					}
					toggleMaximizeGroup(z = this.activeGroup) {
						this.hasMaximizedGroup()
							? this.Wb()
							: this.arrangeGroups(d.GroupsArrangement.MAXIMIZE, z);
					}
					toggleExpandGroup(z = this.activeGroup) {
						this.isGroupExpanded(this.activeGroup)
							? this.arrangeGroups(d.GroupsArrangement.EVEN)
							: this.arrangeGroups(d.GroupsArrangement.EXPAND, z);
					}
					Wb() {
						this.xb.exitMaximizedView(), this.Ob.focus();
					}
					hasMaximizedGroup() {
						return this.xb.hasMaximizedView();
					}
					Xb(z) {
						return this.xb.isViewMaximized(z);
					}
					isGroupExpanded(z) {
						return this.xb.isViewExpanded(z);
					}
					setGroupOrientation(z) {
						if (!this.xb) return;
						const F =
							z === d.GroupOrientation.HORIZONTAL
								? r.Orientation.HORIZONTAL
								: r.Orientation.VERTICAL;
						this.xb.orientation !== F && (this.xb.orientation = F);
					}
					applyLayout(z) {
						const F = this.Zb(this.ub);
						let x = 0;
						function H(K) {
							for (const J of K) Array.isArray(J.groups) ? H(J.groups) : x++;
						}
						H(z.groups);
						let q = this.getGroups(d.GroupsOrder.GRID_APPEARANCE);
						if (x < q.length) {
							const K = q[x - 1];
							q.forEach((J, W) => {
								W >= x && this.mergeGroup(J, K);
							}),
								(q = this.getGroups(d.GroupsOrder.GRID_APPEARANCE));
						}
						const V = this.activeGroup,
							G = (0, r.$Eob)({
								orientation: this.gc(
									z.orientation,
									this.$b()
										? this.xb.orientation
										: (0, r.orthogonal)(this.xb.orientation),
								),
								groups: z.groups,
							});
						this.Bc(G, V.id, q), F && this.Ob.focus();
					}
					getLayout() {
						const z = this.xb.serialize(),
							F =
								z.orientation === r.Orientation.HORIZONTAL
									? d.GroupOrientation.HORIZONTAL
									: d.GroupOrientation.VERTICAL,
							x = this.Yb(z.root);
						return { orientation: F, groups: x.groups };
					}
					Yb(z) {
						return z.type === "branch"
							? { size: z.size, groups: z.data.map((F) => this.Yb(F)) }
							: { size: z.size };
					}
					Zb(z) {
						return z
							? (0, w.$Jgb)() === z.ownerDocument.body
								? !0
								: (0, w.$Lgb)(z)
							: !1;
					}
					$b() {
						const z = this.xb.getViews();
						return (0, r.$zob)(z) ? z.children.some((F) => (0, r.$zob)(F)) : !1;
					}
					addGroup(z, F, x) {
						const H = this.jc(z);
						let q;
						if (H.groupsView === this) {
							const V = this.Zb(H.element),
								G = this.sb.size > 1 && this.isGroupExpanded(H);
							(q = this.bc(x)),
								this.xb.addView(q, this.ac(), H, this.fc(F)),
								this.sc(),
								this.ib.fire(q),
								this.tc(),
								G && this.arrangeGroups(d.GroupsArrangement.EXPAND, q),
								V && H.focus();
						} else q = H.groupsView.addGroup(H, F, x);
						return q;
					}
					ac() {
						switch (this.Kb.splitSizing) {
							case "distribute":
								return r.Sizing.Distribute;
							case "split":
								return r.Sizing.Split;
							default:
								return r.Sizing.Auto;
						}
					}
					bc(z, F) {
						let x;
						z instanceof n.$Euc
							? (x = n.$Euc.createCopy(
									z,
									this.Ab,
									this,
									this.Bb,
									this.count,
									this.vb,
									F,
								))
							: (0, f.$lY)(z)
								? (x = n.$Euc.createFromSerialized(
										z,
										this.Ab,
										this,
										this.Bb,
										this.count,
										this.vb,
										F,
									))
								: (x = n.$Euc.createNew(
										this.Ab,
										this,
										this.Bb,
										this.count,
										this.vb,
										F,
									)),
							this.sb.set(x.id, x);
						const H = new p.$Zc();
						return (
							H.add(
								x.onDidFocus(() => {
									this.cc(x), this.y.fire();
								}),
							),
							H.add(
								x.onDidModelChange((q) => {
									switch (q.kind) {
										case u.GroupModelChangeKind.GROUP_LOCKED:
											this.fb.fire(x);
											break;
										case u.GroupModelChangeKind.GROUP_INDEX:
											this.db.fire(x);
											break;
										case u.GroupModelChangeKind.GROUP_LABEL:
											this.eb.fire(x);
											break;
									}
								}),
							),
							H.add(
								x.onDidActiveEditorChange(() => {
									this.sc();
								}),
							),
							E.Event.once(x.onWillDispose)(() => {
								(0, p.$Vc)(H), this.sb.delete(x.id), this.ec(x);
							}),
							x
						);
					}
					cc(z) {
						if (this.Ob !== z) {
							const F = this.Ob;
							(this.Ob = z),
								this.ec(z, !0),
								F && !F.disposed && F.setActive(!1),
								z.setActive(!0),
								this.dc(z),
								this.cb.fire(z);
						}
						this.hb.fire(z);
					}
					dc(z) {
						if (this.xb) {
							this.hasMaximizedGroup() && !this.Xb(z) && this.Wb();
							try {
								const F = this.xb.getViewSize(z);
								(F.width === z.minimumWidth || F.height === z.minimumHeight) &&
									this.arrangeGroups(d.GroupsArrangement.EXPAND, z);
							} catch {}
						}
					}
					ec(z, F) {
						const x = this.tb.indexOf(z.id);
						x !== -1 && this.tb.splice(x, 1), F && this.tb.unshift(z.id);
					}
					fc(z) {
						switch (z) {
							case d.GroupDirection.UP:
								return r.Direction.Up;
							case d.GroupDirection.DOWN:
								return r.Direction.Down;
							case d.GroupDirection.LEFT:
								return r.Direction.Left;
							case d.GroupDirection.RIGHT:
								return r.Direction.Right;
						}
					}
					gc(z, F) {
						return typeof z == "number"
							? z === d.GroupOrientation.HORIZONTAL
								? r.Orientation.HORIZONTAL
								: r.Orientation.VERTICAL
							: F;
					}
					removeGroup(z, F) {
						const x = this.jc(z);
						this.count !== 1 && (x.isEmpty ? this.ic(x, F) : this.hc(x));
					}
					hc(z) {
						const F = this.getGroups(d.GroupsOrder.MOST_RECENTLY_ACTIVE);
						let x;
						this.Ob === z ? (x = F[1]) : (x = F[0]), this.mergeGroup(z, x);
					}
					ic(z, F) {
						const x = !F && this.Zb(this.ub);
						if (this.Ob === z) {
							const q = this.getGroups(d.GroupsOrder.MOST_RECENTLY_ACTIVE)[1];
							this.cc(q);
						}
						this.xb.removeView(z, this.ac()),
							z.dispose(),
							x && this.Ob.focus(),
							this.tc(),
							this.sc(),
							this.jb.fire(z);
					}
					moveGroup(z, F, x) {
						const H = this.jc(z),
							q = this.jc(F);
						if (H.id === q.id)
							throw new Error("Cannot move group into its own");
						const V = this.Zb(H.element);
						let G;
						return (
							H.groupsView === q.groupsView
								? (this.xb.moveView(H, this.ac(), q, this.fc(x)), (G = H))
								: ((G = q.groupsView.addGroup(q, x, H)),
									H.closeAllEditors(),
									this.removeGroup(H, V)),
							V && G.focus(),
							this.kb.fire(G),
							this.tc(),
							G
						);
					}
					copyGroup(z, F, x) {
						const H = this.jc(z),
							q = this.jc(F),
							V = this.Zb(H.element),
							G = this.addGroup(q, x, H);
						return V && G.focus(), G;
					}
					mergeGroup(z, F, x) {
						const H = this.jc(z),
							q = this.jc(F),
							V = [];
						let G = x && typeof x.index == "number" ? x.index : q.count;
						for (const J of H.editors) {
							const W = !H.isActive(J) || this.Ob !== H,
								Y = {
									index: H.isSticky(J) ? void 0 : G,
									inactive: W,
									preserveFocus: W,
								};
							V.push({ editor: J, options: Y }), G++;
						}
						let K = !0;
						return (
							x?.mode === d.MergeGroupMode.COPY_EDITORS
								? H.copyEditors(V, q)
								: (K = H.moveEditors(V, q)),
							H.isEmpty && !H.disposed && this.removeGroup(H, !0),
							K
						);
					}
					mergeAllGroups(z) {
						const F = this.jc(z);
						let x = !0;
						for (const H of this.getGroups(
							d.GroupsOrder.MOST_RECENTLY_ACTIVE,
						)) {
							if (H === F) continue;
							this.mergeGroup(H, F) || (x = !1);
						}
						return x;
					}
					jc(z) {
						let F;
						if (
							(typeof z == "number" ? (F = this.Ab.getGroup(z)) : (F = z), !F)
						)
							throw new Error("Invalid editor group provided!");
						return F;
					}
					createEditorDropTarget(z, F) {
						return (
							(0, v.$vg)((0, w.$Ygb)(z)), this.vb.createInstance(b.$Fuc, z, F)
						);
					}
					get minimumWidth() {
						return Math.min(
							this.wb.minimumWidth,
							this.M.getMaximumEditorDimensions(
								this.M.getContainer((0, w.getWindow)(this.ub)),
							).width,
						);
					}
					get maximumWidth() {
						return this.wb.maximumWidth;
					}
					get minimumHeight() {
						return Math.min(
							this.wb.minimumHeight,
							this.M.getMaximumEditorDimensions(
								this.M.getContainer((0, w.getWindow)(this.ub)),
							).height,
						);
					}
					get maximumHeight() {
						return this.wb.maximumHeight;
					}
					get snap() {
						return this.M.getPanelAlignment() === "center";
					}
					get onDidChange() {
						return E.Event.any(this.wb.onDidChange, this.lb.event);
					}
					get kc() {
						return (
							this.h.getColor(a.$jFb) ||
							this.h.getColor(C.$OP) ||
							s.$UL.transparent
						);
					}
					updateStyles() {
						const z = (0, v.$wg)(this.ub);
						z.style.backgroundColor = this.w(C.$8P) || "";
						const F = {
							separatorBorder: this.kc,
							background: this.h.getColor(a.$cFb) || s.$UL.transparent,
						};
						this.xb.style(F), this.wb.styles(F);
					}
					Q(z, F) {
						(this.element = z),
							(this.ub = document.createElement("div")),
							this.ub.classList.add("content"),
							this.windowId !== N.$Bfb.vscodeWindowId &&
								this.ub.classList.add("auxiliary"),
							z.appendChild(this.ub);
						const x = this.D(this.Fb.createScoped(this.ub));
						return (
							(this.vb = this.D(this.Cb.createChild(new D.$Ki([L.$6j, x])))),
							(this.Sb = !F || F.restorePreviousState),
							this.oc(),
							(this.wb = this.D(
								new l.$Fob(
									this.ub,
									this.zb,
									this.rb[A.b],
									this.Kb.centeredLayoutFixedWidth,
								),
							)),
							this.D(
								this.onDidChangeEditorPartOptions((H) =>
									this.wb.setFixedWidth(
										H.newPartOptions.centeredLayoutFixedWidth ?? !1,
									),
								),
							),
							this.nc(z, this.ub),
							this.mc(x),
							this.Qb.complete(),
							(this.Pb = !0),
							I.Promises.settled(
								this.groups.map((H) => H.whenRestored),
							).finally(() => {
								this.Rb.complete();
							}),
							this.ub
						);
					}
					mc(z) {
						M.$_Pb.bindTo(z).set(this.windowId !== N.$Bfb.vscodeWindowId);
						const x = M.$9Pb.bindTo(z),
							H = M.$$Pb.bindTo(z),
							q = () => {
								this.count > 1 ? x.set(!0) : x.reset(),
									this.hasMaximizedGroup() ? H.set(!0) : H.reset();
							};
						q(),
							this.D(this.onDidAddGroup(() => q())),
							this.D(this.onDidRemoveGroup(() => q())),
							this.D(this.onDidChangeGroupMaximized(() => q()));
					}
					nc(z, F) {
						this.D(this.createEditorDropTarget(F, Object.create(null)));
						const x = document.createElement("div");
						x.classList.add("drop-block-overlay"),
							z.appendChild(x),
							this.D((0, w.$bgb)(x, () => x.classList.remove("visible"))),
							this.D(
								S.$TSb.INSTANCE.registerTarget(this.element, {
									onDragStart: (W) => x.classList.add("visible"),
									onDragEnd: (W) => x.classList.remove("visible"),
								}),
							);
						let H, q, V, G;
						const K = (W) => {
								!this.M.isVisible($.Parts.PANEL_PART) &&
								W === this.M.getPanelPosition()
									? this.M.setPartHidden(!1, $.Parts.PANEL_PART)
									: !this.M.isVisible($.Parts.AUXILIARYBAR_PART) &&
										W ===
											(this.M.getSideBarPosition() === $.Position.RIGHT
												? $.Position.LEFT
												: $.Position.RIGHT) &&
										this.M.setPartHidden(!1, $.Parts.AUXILIARYBAR_PART);
							},
							J = () => {
								H && (clearTimeout(H), (H = void 0)),
									q && (clearTimeout(q), (q = void 0));
							};
						this.D(
							S.$TSb.INSTANCE.registerTarget(x, {
								onDragOver: (W) => {
									w.$ahb.stop(W.eventData, !0),
										W.eventData.dataTransfer &&
											(W.eventData.dataTransfer.dropEffect = "none");
									const X = x.getBoundingClientRect();
									let Y, ie;
									const ne = 100;
									W.eventData.clientX < X.left + ne && (Y = $.Position.LEFT),
										W.eventData.clientX > X.right - ne &&
											(Y = $.Position.RIGHT),
										W.eventData.clientY > X.bottom - ne &&
											(ie = $.Position.BOTTOM),
										W.eventData.clientY < X.top + ne && (ie = $.Position.TOP),
										H && Y !== V && (clearTimeout(H), (H = void 0)),
										q && ie !== G && (clearTimeout(q), (q = void 0)),
										!H &&
											Y !== void 0 &&
											((V = Y), (H = setTimeout(() => K(Y), 200))),
										!q &&
											ie !== void 0 &&
											((G = ie), (q = setTimeout(() => K(ie), 200)));
								},
								onDragLeave: () => J(),
								onDragEnd: () => J(),
								onDrop: () => J(),
							}),
						);
					}
					centerLayout(z) {
						this.wb.activate(z), this.Ob.focus();
					}
					isLayoutCentered() {
						return this.wb ? this.wb.isActive() : !1;
					}
					oc() {
						let z = !1;
						if ((this.Sb && (z = !this.pc()), !this.xb || z)) {
							const F = this.bc();
							this.rc(new r.$Cob(F)), this.cc(F);
						}
						this.sc(), this.tc();
					}
					pc() {
						const z = this.xc();
						if (z?.serializedGrid)
							try {
								(this.tb = z.mostRecentActiveGroups),
									this.qc(z.serializedGrid, z.activeGroup);
							} catch (F) {
								return (
									(0, y.$4)(
										new Error(
											`Error restoring editor grid widget: ${F} (with state: ${JSON.stringify(z)})`,
										),
									),
									this.Dc(),
									!1
								);
							}
						return !0;
					}
					qc(z, F, x, H) {
						let q;
						x ? (q = x.slice(0)) : (q = []);
						const V = [],
							G = r.$Cob.deserialize(
								z,
								{
									fromJSON: (K) => {
										let J;
										return (
											q.length > 0 ? (J = q.shift()) : (J = this.bc(K, H)),
											V.push(J),
											J.id === F && this.cc(J),
											J
										);
									},
								},
								{ styles: { separatorBorder: this.kc } },
							);
						this.Ob || this.cc(V[0]),
							this.tb.some((K) => !this.getGroup(K)) &&
								(this.tb = V.map((K) => K.id)),
							this.rc(G);
					}
					rc(z) {
						let F = {};
						this.xb && ((F = this.xb.boundarySashes), this.xb.dispose()),
							(this.xb = z),
							(this.xb.boundarySashes = F),
							(this.zb.gridWidget = z),
							(this.mb.input = z.onDidChange),
							(this.nb.input = z.onDidScroll),
							this.yb.clear(),
							this.yb.add(z.onDidChangeViewMaximized((x) => this.gb.fire(x))),
							this.gb.fire(this.hasMaximizedGroup()),
							this.lb.fire(void 0);
					}
					sc() {
						(0, v.$wg)(this.ub).classList.toggle("empty", this.uc);
					}
					tc() {
						this.getGroups(d.GroupsOrder.GRID_APPEARANCE).forEach((z, F) =>
							z.notifyIndexChanged(F),
						);
					}
					notifyGroupsLabelChange(z) {
						for (const F of this.groups) F.notifyLabelChanged(z);
					}
					get uc() {
						return this.count === 1 && this.Ob.isEmpty;
					}
					setBoundarySashes(z) {
						(this.xb.boundarySashes = z), (this.wb.boundarySashes = z);
					}
					layout(z, F, x, H) {
						(this.Lb = x), (this.Mb = H);
						const q = super.Z(z, F).contentSize;
						this.vc(w.$pgb.lift(q), x, H);
					}
					vc(z, F = this.Lb, x = this.Mb) {
						(this.Nb = z),
							this.wb.layout(this.Nb.width, this.Nb.height, F, x),
							this.bb.fire(z);
					}
					I() {
						if (
							(this.xb &&
								(this.uc
									? delete this.qb[A.a]
									: (this.qb[A.a] = this.createState())),
							this.wb)
						) {
							const z = this.wb.state;
							this.wb.isDefault(z) ? delete this.rb[A.b] : (this.rb[A.b] = z);
						}
						super.I();
					}
					xc() {
						return this.qb[A.a];
					}
					createState() {
						return {
							serializedGrid: this.xb.serialize(),
							activeGroup: this.Ob.id,
							mostRecentActiveGroups: this.tb,
						};
					}
					applyState(z, F) {
						return z === "empty" ? this.zc() : this.yc(z, F);
					}
					async yc(z, F) {
						const x = await this.Ac();
						this.ib.pause(),
							this.jb.pause(),
							this.Dc(),
							(this.tb = z.mostRecentActiveGroups);
						try {
							this.Bc(z.serializedGrid, z.activeGroup, void 0, F);
						} finally {
							this.jb.resume(), this.ib.resume();
						}
						await this.activeGroup.openEditors(
							x
								.flatMap((H) => H.editors)
								.filter((H) => this.Ab.groups.every((q) => !q.contains(H)))
								.map((H) => ({
									editor: H,
									options: { pinned: !0, preserveFocus: !0, inactive: !0 },
								})),
						);
					}
					async zc() {
						await this.Ac(), this.mergeAllGroups(this.activeGroup);
					}
					async Ac() {
						const z = this.getGroups(d.GroupsOrder.MOST_RECENTLY_ACTIVE);
						for (const F of z)
							await F.closeAllEditors({ excludeConfirming: !0 });
						return z;
					}
					Bc(z, F, x, H) {
						this.qc(z, F, x, H), this.vc(this.Nb), this.sc();
						for (const q of this.getGroups(d.GroupsOrder.GRID_APPEARANCE))
							x?.includes(q) || this.ib.fire(q);
						this.tc();
					}
					Cc(z) {
						if (z.external && z.scope === o.StorageScope.WORKSPACE) {
							this.G(z.scope);
							const F = this.xc();
							F && this.applyState(F);
						}
					}
					toJSON() {
						return { type: $.Parts.EDITOR_PART };
					}
					Dc() {
						for (const z of this.groups) z.dispose(), this.jb.fire(z);
						this.sb.clear(), (this.tb = []);
					}
					dispose() {
						this.pb.fire(), this.Dc(), this.xb?.dispose(), super.dispose();
					}
				};
				(e.$Guc = O),
					(e.$Guc =
						O =
						A =
							Ne(
								[
									j(4, m.$Li),
									j(5, t.$iP),
									j(6, g.$gj),
									j(7, o.$lq),
									j(8, $.$mEb),
									j(9, k.$asb),
									j(10, L.$6j),
								],
								O,
							));
				let B = class extends O {
					constructor(z, F, x, H, q, V, G, K) {
						super(
							z,
							$.Parts.EDITOR_PART,
							"",
							N.$Bfb.vscodeWindowId,
							F,
							x,
							H,
							q,
							V,
							G,
							K,
						);
					}
				};
				(e.$Huc = B),
					(e.$Huc = B =
						Ne(
							[
								j(1, m.$Li),
								j(2, t.$iP),
								j(3, g.$gj),
								j(4, o.$lq),
								j(5, $.$mEb),
								j(6, k.$asb),
								j(7, L.$6j),
							],
							B,
						));
			},
		),
		