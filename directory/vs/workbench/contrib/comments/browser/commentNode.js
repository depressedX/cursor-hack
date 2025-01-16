define(
			de[3763],
			he([
				1, 0, 4, 7, 74, 105, 50, 3, 9, 5, 447, 846, 104, 6, 40, 461, 49, 276,
				3031, 11, 92, 8, 1239, 651, 198, 437, 14, 26, 221, 1726, 10, 195, 203,
				265, 505, 23, 791, 168, 91, 39, 72, 42,
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
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$s3b = void 0),
					(t = mt(t)),
					(i = mt(i)),
					(w = mt(w));
				class H extends C.$sj {
					async q(K, J) {
						await K.run(...J);
					}
				}
				let q = class extends d.$1c {
					get domNode() {
						return this.b;
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
					) {
						super(),
							(this.U = K),
							(this.W = J),
							(this.comment = W),
							(this.X = X),
							(this.Y = Y),
							(this.Z = ie),
							(this.ab = ne),
							(this.bb = ee),
							(this.db = _),
							(this.eb = te),
							(this.fb = Q),
							(this.gb = Z),
							(this.hb = re),
							(this.ib = le),
							(this.jb = oe),
							(this.kb = ae),
							(this.lb = pe),
							(this.n = null),
							(this.q = null),
							(this.w = null),
							(this.y = []),
							(this.z = null),
							(this.C = a.$i3b),
							(this.Q = null),
							(this.R = null),
							(this.S = new c.$re()),
							(this.isEditing = !1),
							(this.b = i.$("div.review-comment")),
							(this.I = this.D(se.createScoped(this.b))),
							(this.J = A.CommentContextKeys.commentContext.bindTo(this.I)),
							this.comment.contextValue &&
								this.J.set(this.comment.contextValue),
							(this.L = this.eb.getCommentMenus(this.Y)),
							(this.b.tabIndex = -1),
							(this.f = i.$fhb(this.b, i.$("div.avatar-container"))),
							this.pb(this.comment.userIconPath),
							(this.r = i.$fhb(this.b, i.$(".review-comment-contents"))),
							this.sb(this.r),
							(this.c = document.createElement("div")),
							this.c.classList.add("comment-body", $.$0ob),
							re.getValue(O.$32b)?.maxHeight !== !1 &&
								this.c.classList.add("comment-body-max-height"),
							this.nb(this.r, this.c),
							this.ob(this.comment.body),
							this.comment.commentReactions &&
								this.comment.commentReactions.length &&
								this.comment.commentReactions.filter(($e) => !!$e.count)
									.length &&
								this.zb(this.r),
							this.b.setAttribute(
								"aria-label",
								`${W.userName}, ${this.commentBodyValue}`,
							),
							this.b.setAttribute("role", "treeitem"),
							(this.m = null),
							this.D(
								i.$0fb(
									this.b,
									i.$$gb.CLICK,
									() => this.isEditing || this.S.fire(this),
								),
							),
							this.D(i.$0fb(this.b, i.$$gb.CONTEXT_MENU, ($e) => this.Gb($e))),
							X && this.switchToEditMode(),
							this.D(
								this.jb.onDidChangeScreenReaderOptimized(() => {
									this.tb(!0);
								}),
							),
							this.mb();
					}
					mb() {
						this.D(
							i.$0fb(
								this.b,
								i.$$gb.FOCUS_IN,
								() => {
									this.eb.setActiveCommentAndThread(this.Y, {
										thread: this.W,
										comment: this.comment,
									});
								},
								!0,
							),
						);
					}
					nb(K, J) {
						(this.M = new D.$KK({
							forceIntegerValues: !0,
							smoothScrollDuration: 125,
							scheduleAtNextAnimationFrame: (X) => i.$hgb(i.getWindow(K), X),
						})),
							(this.N = this.D(
								new M.$6hb(
									J,
									{
										horizontal: D.ScrollbarVisibility.Visible,
										vertical: D.ScrollbarVisibility.Visible,
									},
									this.M,
								),
							)),
							this.D(
								this.N.onScroll((X) => {
									X.scrollLeftChanged && (J.scrollLeft = X.scrollLeft),
										X.scrollTopChanged && (J.scrollTop = X.scrollTop);
								}),
							);
						const W = this.D(new N.$mib(J, "scroll")).event;
						this.D(
							W((X) => {
								const Y = this.N.getScrollPosition(),
									ie =
										Math.abs(J.scrollLeft - Y.scrollLeft) <= 1
											? void 0
											: J.scrollLeft,
									ne =
										Math.abs(J.scrollTop - Y.scrollTop) <= 1
											? void 0
											: J.scrollTop;
								(ie !== void 0 || ne !== void 0) &&
									this.N.setScrollPosition({ scrollLeft: ie, scrollTop: ne });
							}),
						),
							K.appendChild(this.N.getDomNode());
					}
					ob(K) {
						(this.c.innerText = ""),
							(this.h = void 0),
							(this.j = void 0),
							typeof K == "string"
								? ((this.j = i.$fhb(this.c, i.$(".comment-body-plainstring"))),
									(this.j.innerText = K))
								: ((this.h = this.bb.render(K).element),
									this.c.appendChild(this.h));
					}
					pb(K) {
						if (((this.f.textContent = ""), K)) {
							const J = i.$fhb(this.f, i.$("img.avatar"));
							(J.src = R.$7g.uriToBrowserUri(m.URI.revive(K)).toString(!0)),
								(J.onerror = (W) => J.remove());
						}
					}
					get onDidClick() {
						return this.S.event;
					}
					qb(K) {
						(this.G = i.$fhb(K, i.$("span.timestamp-container"))),
							this.rb(this.comment.timestamp);
					}
					rb(K) {
						if (!this.G) return;
						const J = K !== void 0 ? new Date(K) : void 0;
						J
							? this.H
								? this.H.setTimestamp(J)
								: ((this.H = new k.$r3b(this.hb, this.ib, this.G, J)),
									this.D(this.H))
							: this.H?.dispose();
					}
					sb(K) {
						const J = i.$fhb(K, i.$(`div.comment-title.${$.$0ob}`)),
							W = i.$fhb(J, i.$("comment-header-info")),
							X = i.$fhb(W, i.$("strong.author"));
						(X.innerText = this.comment.userName),
							this.qb(W),
							(this.F = i.$fhb(W, i.$("span.isPending"))),
							this.comment.label
								? (this.F.innerText = this.comment.label)
								: (this.F.innerText = ""),
							(this.s = i.$fhb(J, i.$(".comment-actions"))),
							this.tb(!0),
							this.xb();
					}
					tb(K) {
						K && !this.jb.isScreenReaderOptimized()
							? this.s.classList.add("hidden")
							: this.s.classList.remove("hidden");
					}
					ub(K) {
						const J = K.getActions({ shouldForwardArgs: !0 }),
							Y = { primary: [], secondary: [] };
						return V(J, Y, !1, (ie) => /^inline/.test(ie)), Y;
					}
					get vb() {
						return [
							{
								thread: this.W,
								commentUniqueId: this.comment.uniqueIdInThread,
								$mid: P.MarshalledId.CommentNode,
							},
							{
								commentControlHandle: this.W.controllerHandle,
								commentThreadHandle: this.W.commentThreadHandle,
								$mid: P.MarshalledId.CommentThread,
							},
						];
					}
					wb() {
						(this.P = new g.$jpb(this.s, this.gb, {
							actionViewItemProvider: (K, J) =>
								K.id === f.$o3b.ID
									? new S.$Pob(K, K.menuActions, this.gb, {
											...J,
											actionViewItemProvider: (W, X) =>
												this.actionViewItemProvider(W, X),
											actionRunner: this.O,
											classNames: [
												"toolbar-toggle-pickReactions",
												...T.ThemeIcon.asClassNameArray(I.$ak.reactions),
											],
											anchorAlignmentProvider: () => o.AnchorAlignment.RIGHT,
										})
									: this.actionViewItemProvider(K, J),
							orientation: E.ActionsOrientation.HORIZONTAL,
						})),
							(this.P.context = this.vb),
							(this.P.actionRunner = new H()),
							this.Fb(this.s),
							this.D(this.P);
					}
					xb() {
						const K = [];
						if (this.eb.hasReactionHandler(this.Y)) {
							const ie = this.yb(this.comment.commentReactions || []);
							K.push(ie);
						}
						const W = this.L.getCommentTitleActions(this.comment, this.I);
						this.D(W),
							this.D(
								W.onDidChange((ie) => {
									const { primary: ne, secondary: ee } = this.ub(W);
									!this.P && (ne.length || ee.length) && this.wb(),
										this.P.setActions(ne, ee);
								}),
							);
						const { primary: X, secondary: Y } = this.ub(W);
						K.push(...X),
							(K.length || Y.length) && (this.wb(), this.P.setActions(K, Y));
					}
					actionViewItemProvider(K, J) {
						return (
							K.id === f.$o3b.ID
								? (J = { label: !1, icon: !0 })
								: (J = { label: !1, icon: !0 }),
							K.id === f.$q3b.ID
								? new f.$p3b(K)
								: K instanceof b.$2X
									? this.db.createInstance(s.$Lyb, K, {
											hoverDelegate: J.hoverDelegate,
										})
									: K instanceof b.$1X
										? this.db.createInstance(s.$Nyb, K, J)
										: new v.$_ib({}, K, J)
						);
					}
					async submitComment() {
						this.w &&
							this.Q &&
							(await this.Q.triggerDefaultAction(), (this.X = void 0));
					}
					yb(K) {
						const J = this.D(
							new f.$o3b(
								() => {
									X?.show();
								},
								t.localize(5002, null),
							),
						);
						let W = [];
						K &&
							K.length &&
							(W = K.map(
								(Y) =>
									new C.$rj(
										`reaction.command.${Y.label}`,
										`${Y.label}`,
										"",
										!0,
										async () => {
											try {
												await this.eb.toggleReaction(
													this.Y,
													this.Z,
													this.W,
													this.comment,
													Y,
												);
											} catch (ie) {
												const ne = ie.message
													? t.localize(5003, null, ie.message)
													: t.localize(5004, null);
												this.fb.error(ne);
											}
										},
									),
							)),
							(J.menuActions = W);
						const X = new S.$Pob(J, J.menuActions, this.gb, {
							actionViewItemProvider: (Y, ie) =>
								Y.id === f.$o3b.ID ? X : this.actionViewItemProvider(Y, ie),
							actionRunner: this.O,
							classNames: "toolbar-toggle-pickReactions",
							anchorAlignmentProvider: () => o.AnchorAlignment.RIGHT,
						});
						return J;
					}
					zb(K) {
						(this.u = i.$fhb(K, i.$("div.comment-reactions"))),
							(this.t = new E.$eib(this.u, {
								actionViewItemProvider: (W, X) =>
									W.id === f.$o3b.ID
										? new S.$Pob(W, W.menuActions, this.gb, {
												actionViewItemProvider: (Y, ie) =>
													this.actionViewItemProvider(Y, ie),
												actionRunner: this.O,
												classNames: [
													"toolbar-toggle-pickReactions",
													...T.ThemeIcon.asClassNameArray(I.$ak.reactions),
												],
												anchorAlignmentProvider: () => o.AnchorAlignment.RIGHT,
											})
										: this.actionViewItemProvider(W, X),
							})),
							this.D(this.t);
						const J = this.eb.hasReactionHandler(this.Y);
						if (
							(this.comment.commentReactions
								.filter((W) => !!W.count)
								.map((W) => {
									const X = new f.$q3b(
										`reaction.${W.label}`,
										`${W.label}`,
										W.hasReacted && (W.canEdit || J) ? "active" : "",
										W.canEdit || J,
										async () => {
											try {
												await this.eb.toggleReaction(
													this.Y,
													this.Z,
													this.W,
													this.comment,
													W,
												);
											} catch (Y) {
												let ie;
												W.hasReacted
													? (ie = Y.message
															? t.localize(5005, null, Y.message)
															: t.localize(5006, null))
													: (ie = Y.message
															? t.localize(5007, null, Y.message)
															: t.localize(5008, null)),
													this.fb.error(ie);
											}
										},
										W.reactors,
										W.iconPath,
										W.count,
									);
									this.t?.push(X, { label: !0, icon: !0 });
								}),
							J)
						) {
							const W = this.yb(this.comment.commentReactions || []);
							this.t.push(W, { label: !1, icon: !0 });
						}
					}
					get commentBodyValue() {
						return typeof this.comment.body == "string"
							? this.comment.body
							: this.comment.body.value;
					}
					async Ab(K) {
						const J = i.$fhb(K, i.$(".edit-textarea"));
						this.w = this.db.createInstance(
							a.$k3b,
							J,
							a.$k3b.getEditorOptions(this.hb),
							this.I,
							this.ab,
						);
						const W = m.URI.from({
								scheme: R.Schemas.commentsInput,
								path: `/commentinput-${this.comment.uniqueIdInThread}-${Date.now()}.md`,
							}),
							X = await this.lb.createModelReference(W);
						(this.z = X),
							this.w.setModel(this.z.object.textEditorModel),
							this.w.setValue(this.X ?? this.commentBodyValue),
							(this.X = void 0),
							this.w.layout({ width: J.clientWidth - 14, height: this.C }),
							this.w.focus(),
							i.$hgb(i.getWindow(K), () => {
								this.w.layout({ width: J.clientWidth - 14, height: this.C }),
									this.w.focus();
							});
						const Y = this.z.object.textEditorModel.getLineCount(),
							ie = this.z.object.textEditorModel.getLineLength(Y) + 1;
						this.w.setSelection(new h.$kL(Y, ie, Y, ie));
						const ne = this.W;
						(ne.input = {
							uri: this.w.getModel().uri,
							value: this.commentBodyValue,
						}),
							this.eb.setActiveEditingCommentThread(ne),
							this.eb.setActiveCommentAndThread(this.Y, {
								thread: ne,
								comment: this.comment,
							}),
							this.y.push(
								this.w.onDidFocusEditorWidget(() => {
									(ne.input = {
										uri: this.w.getModel().uri,
										value: this.commentBodyValue,
									}),
										this.eb.setActiveEditingCommentThread(ne),
										this.eb.setActiveCommentAndThread(this.Y, {
											thread: ne,
											comment: this.comment,
										});
								}),
							),
							this.y.push(
								this.w.onDidChangeModelContent((ee) => {
									if (
										ne.input &&
										this.w &&
										this.w.getModel().uri === ne.input.uri
									) {
										const _ = this.w.getValue();
										if (_ !== ne.input.value) {
											const te = ne.input;
											(te.value = _),
												(ne.input = te),
												this.eb.setActiveEditingCommentThread(ne),
												this.eb.setActiveCommentAndThread(this.Y, {
													thread: ne,
													comment: this.comment,
												});
										}
									}
								}),
							),
							this.Bb(),
							this.D(
								this.z.object.textEditorModel.onDidChangeContent(() => {
									this.w &&
										this.Bb() &&
										(this.w.layout({
											height: this.C,
											width: this.w.getLayoutInfo().width,
										}),
										this.w.render(!0));
								}),
							),
							this.D(this.w),
							this.D(this.z);
					}
					Bb() {
						if (this.w) {
							const K = (0, a.$l3b)(this.U, this.w, this.C);
							if (K !== this.C) return (this.C = K), !0;
						}
						return !1;
					}
					getPendingEdit() {
						const K = this.w?.getModel();
						if (K && K.getValueLength() > 0) return K.getValue();
					}
					Cb() {
						(this.isEditing = !1),
							this.n && (this.n.enabled = !0),
							this.c.classList.remove("hidden"),
							this.z?.dispose(),
							(0, d.$Vc)(this.y),
							(this.y = []),
							this.w?.dispose(),
							(this.w = null),
							this.q.remove();
					}
					layout(K) {
						const J =
							K !== void 0 ? K - 72 : (this.w?.getLayoutInfo().width ?? 0);
						this.w?.layout({ width: J, height: this.C });
						const W = this.c.scrollWidth,
							X = i.$wgb(this.c),
							Y = this.c.scrollHeight,
							ie = i.$ygb(this.c) + 4;
						this.N.setScrollDimensions({
							width: X,
							scrollWidth: W,
							height: ie,
							scrollHeight: Y,
						});
					}
					async switchToEditMode() {
						if (this.isEditing) return;
						(this.isEditing = !0),
							this.c.classList.add("hidden"),
							(this.q = i.$fhb(this.r, i.$(".edit-container"))),
							await this.Ab(this.q);
						const K = i.$fhb(this.q, i.$(".form-actions")),
							J = i.$fhb(K, i.$(".other-actions"));
						this.Db(J);
						const W = i.$fhb(K, i.$(".editor-actions"));
						this.Eb(W);
					}
					Db(K) {
						const W = this.eb
							.getCommentMenus(this.Y)
							.getCommentActions(this.comment, this.I);
						this.D(W),
							this.D(
								W.onDidChange(() => {
									this.Q?.setActions(W);
								}),
							),
							(this.Q = new y.$82b(this.kb, this.I, K, (X) => {
								const Y = this.w.getValue();
								X.run({
									thread: this.W,
									commentUniqueId: this.comment.uniqueIdInThread,
									text: Y,
									$mid: P.MarshalledId.CommentThreadNode,
								}),
									this.Cb();
							})),
							this.D(this.Q),
							this.Q.setActions(W);
					}
					Eb(K) {
						const W = this.eb
							.getCommentMenus(this.Y)
							.getCommentEditorActions(this.I);
						this.D(W),
							this.D(
								W.onDidChange(() => {
									this.R?.setActions(W);
								}),
							),
							(this.R = new y.$82b(this.kb, this.I, K, (X) => {
								const Y = this.w.getValue();
								X.run({
									thread: this.W,
									commentUniqueId: this.comment.uniqueIdInThread,
									text: Y,
									$mid: P.MarshalledId.CommentThreadNode,
								}),
									this.w?.focus();
							})),
							this.D(this.R),
							this.R.setActions(W, !0);
					}
					setFocus(K, J = !1) {
						K
							? (this.b.focus(),
								this.tb(!1),
								this.s.classList.add("tabfocused"),
								(this.b.tabIndex = 0),
								this.comment.mode === w.CommentMode.Editing && this.w?.focus())
							: (this.s.classList.contains("tabfocused") &&
									!this.s.classList.contains("mouseover") &&
									(this.tb(!0), (this.b.tabIndex = -1)),
								this.s.classList.remove("tabfocused"));
					}
					Fb(K) {
						this.D(
							i.$0fb(this.b, "mouseenter", () => {
								this.tb(!1), K.classList.add("mouseover");
							}),
						),
							this.D(
								i.$0fb(this.b, "mouseleave", () => {
									K.classList.contains("mouseover") &&
										!K.classList.contains("tabfocused") &&
										this.tb(!0),
										K.classList.remove("mouseover");
								}),
							);
					}
					async update(K) {
						K.body !== this.comment.body && this.ob(K.body),
							this.comment.userIconPath &&
								K.userIconPath &&
								m.URI.from(this.comment.userIconPath).toString() !==
									m.URI.from(K.userIconPath).toString() &&
								this.pb(K.userIconPath);
						const J = K.mode !== void 0 && K.mode !== this.comment.mode;
						(this.comment = K),
							J &&
								(K.mode === w.CommentMode.Editing
									? await this.switchToEditMode()
									: this.Cb()),
							K.label ? (this.F.innerText = K.label) : (this.F.innerText = ""),
							this.u?.remove(),
							this.t?.clear(),
							this.comment.commentReactions &&
								this.comment.commentReactions.some((W) => !!W.count) &&
								this.zb(this.r),
							this.comment.contextValue
								? this.J.set(this.comment.contextValue)
								: this.J.reset(),
							this.comment.timestamp && this.rb(this.comment.timestamp);
					}
					Gb(K) {
						const J = new B.$2fb(i.getWindow(this.b), K);
						this.gb.showContextMenu({
							getAnchor: () => J,
							menuId: b.$XX.CommentThreadCommentContext,
							menuActionOptions: { shouldForwardArgs: !0 },
							contextKeyService: this.I,
							actionRunner: new H(),
							getActionsContext: () => this.vb,
						});
					}
					focus() {
						this.domNode.focus(),
							this.m ||
								(this.domNode.classList.add("focus"),
								(this.m = setTimeout(() => {
									this.domNode.classList.remove("focus");
								}, 3e3)));
					}
					dispose() {
						super.dispose(), (0, d.$Vc)(this.y);
					}
				};
				(e.$s3b = q),
					(e.$s3b = q =
						Ne(
							[
								j(8, r.$Li),
								j(9, u.$62b),
								j(10, n.$4N),
								j(11, p.$Xxb),
								j(12, l.$6j),
								j(13, L.$gj),
								j(14, F.$Uyb),
								j(15, U.$XK),
								j(16, z.$uZ),
								j(17, x.$MO),
							],
							q,
						));
				function V(G, K, J, W = (X) => X === "navigation") {
					for (const X of G) {
						let [Y, ie] = X;
						if (
							(J &&
								(ie = ie.map((ne) =>
									ne instanceof b.$2X && ne.alt ? ne.alt : ne,
								)),
							W(Y))
						)
							(Array.isArray(K) ? K : K.primary).unshift(...ie);
						else {
							const ne = Array.isArray(K) ? K : K.secondary;
							ne.length > 0 && ne.push(new C.$tj()), ne.push(...ie);
						}
					}
				}
			},
		),
		