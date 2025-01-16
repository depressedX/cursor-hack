define(de[474], he([1, 0, 5]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$UO = e.$TO = e.$SO = e.$RO = void 0),
				(e.$RO = (0, t.$Mi)("ILanguageDetectionService")),
				(e.$SO = "languageDetection"),
				(e.$TO = "automaticlanguagedetection.likelywrong"),
				(e.$UO = "automaticlanguagedetection.stats");
		}),
		define(
			de[702],
			he([1, 0, 64, 416, 61, 67, 3, 172, 474, 15, 91, 4]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				var h;
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$VO = void 0);
				let c = class extends i.$PO {
					static {
						h = this;
					}
					static {
						this.a = 600;
					}
					constructor(g, p, o, f, b) {
						super(),
							(this.n = g),
							(this.q = p),
							(this.r = o),
							(this.s = f),
							(this.b = void 0),
							(this.j = this.D(new C.$2c())),
							(this.m = this.D(new r.$Kh(h.a))),
							(this.w = !1),
							b && this.t(b);
					}
					t(g) {
						const p = this.n.getModel(g);
						if (!p)
							throw new Error(
								`Document with resource ${g.toString(!0)} does not exist`,
							);
						(this.b = g), this.u(p);
					}
					u(g) {
						this.j.value = g.onWillDispose(() => {
							(this.b = void 0), this.dispose();
						});
					}
					get textEditorModel() {
						return this.b ? this.n.getModel(this.b) : null;
					}
					isReadonly() {
						return !0;
					}
					get hasLanguageSetExplicitly() {
						return this.w;
					}
					setLanguageId(g, p) {
						(this.w = !0), this.y(g, p);
					}
					y(g, p) {
						this.isResolved() &&
							(!g ||
								g === this.textEditorModel.getLanguageId() ||
								this.textEditorModel.setLanguage(this.q.createById(g), p));
					}
					z(g) {
						const p = this.D(
							g.onDidChangeLanguage((o) => {
								o.source !== m.$SO && ((this.w = !0), p.dispose());
							}),
						);
					}
					getLanguageId() {
						return this.textEditorModel?.getLanguageId();
					}
					C() {
						return this.m.trigger(() => this.F());
					}
					async F() {
						if (
							this.hasLanguageSetExplicitly ||
							!this.b ||
							!this.r.isEnabledForLanguage(this.getLanguageId() ?? d.$0M)
						)
							return;
						const g = await this.r.detectLanguage(this.b),
							p = this.getLanguageId();
						if (g && g !== p && !this.isDisposed()) {
							this.y(g, m.$SO);
							const o = this.q.getLanguageName(g);
							this.s.alert((0, a.localize)(4080, null, o ?? g));
						}
					}
					G(g, p, o) {
						const f = this.I(g),
							b = this.J(p, this.q, o, f);
						return this.H(g, b, p);
					}
					H(g, p, o) {
						let f = o && this.n.getModel(o);
						return (
							f
								? this.updateTextEditorModel(g, p.languageId)
								: ((f = this.n.createModel(g, p, o)), (this.g = !0), this.u(f)),
							(this.b = f.uri),
							f
						);
					}
					I(g) {
						const p = g;
						return typeof p.getFirstLineText == "function"
							? p.getFirstLineText(
									t.ModelConstants.FIRST_LINE_DETECTION_LENGTH_LIMIT,
								)
							: g
									.getLineContent(1)
									.substr(
										0,
										t.ModelConstants.FIRST_LINE_DETECTION_LENGTH_LIMIT,
									);
					}
					J(g, p, o, f) {
						return !o || o === d.$0M
							? p.createByFilepathOrFirstLine(g ?? null, f)
							: p.createById(o);
					}
					updateTextEditorModel(g, p) {
						this.isResolved() &&
							(g && this.n.updateModel(this.textEditorModel, g),
							p &&
								p !== d.$0M &&
								this.textEditorModel.getLanguageId() !== p &&
								this.textEditorModel.setLanguage(this.q.createById(p)));
					}
					createSnapshot() {
						return this.textEditorModel
							? this.textEditorModel.createSnapshot(!0)
							: null;
					}
					isResolved() {
						return !!this.b;
					}
					dispose() {
						this.j.dispose(),
							this.b && this.g && this.n.destroyModel(this.b),
							(this.b = void 0),
							(this.g = !1),
							super.dispose();
					}
				};
				(e.$VO = c),
					(e.$VO =
						c =
						h =
							Ne([j(0, E.$QO), j(1, w.$nM), j(2, m.$RO), j(3, u.$XK)], c));
			},
		),
		define(
			de[296],
			he([1, 0, 4, 313, 44, 702, 1699, 1226, 18, 222, 116]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				var a;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$HVb = e.$GVb = void 0);
				let h = class extends i.$iY {
					static {
						a = this;
					}
					static {
						this.ID = "workbench.editors.diffEditorInput";
					}
					get typeId() {
						return a.ID;
					}
					get editorId() {
						return this.modified.editorId === this.original.editorId
							? this.modified.editorId
							: void 0;
					}
					get capabilities() {
						let g = super.capabilities;
						return (
							this.t.forceDescription &&
								(g |= w.EditorInputCapabilities.ForceDescription),
							g
						);
					}
					constructor(g, p, o, f, b, s) {
						super(g, p, o, f, s),
							(this.original = o),
							(this.modified = f),
							(this.u = b),
							(this.s = void 0),
							(this.t = this.w());
					}
					w() {
						let g,
							p = !1;
						if (this.c) g = this.c;
						else {
							const v = this.original.getName(),
								S = this.modified.getName();
							(g = (0, t.localize)(4078, null, v, S)), (p = v === S);
						}
						let o, f, b;
						if (this.h) (o = this.h), (f = this.h), (b = this.h);
						else {
							(o = this.y(
								this.original.getDescription(w.Verbosity.SHORT),
								this.modified.getDescription(w.Verbosity.SHORT),
							)),
								(b = this.y(
									this.original.getDescription(w.Verbosity.LONG),
									this.modified.getDescription(w.Verbosity.LONG),
								));
							const v = this.original.getDescription(w.Verbosity.MEDIUM),
								S = this.modified.getDescription(w.Verbosity.MEDIUM);
							if (typeof v == "string" && typeof S == "string" && (v || S)) {
								const [I, T] = (0, r.$AO)([v, S]);
								f = this.y(I, T);
							}
						}
						let s = this.y(
								this.original.getTitle(w.Verbosity.SHORT) ??
									this.original.getName(),
								this.modified.getTitle(w.Verbosity.SHORT) ??
									this.modified.getName(),
								" \u2194 ",
							),
							l = this.y(
								this.original.getTitle(w.Verbosity.MEDIUM) ??
									this.original.getName(),
								this.modified.getTitle(w.Verbosity.MEDIUM) ??
									this.modified.getName(),
								" \u2194 ",
							),
							y = this.y(
								this.original.getTitle(w.Verbosity.LONG) ??
									this.original.getName(),
								this.modified.getTitle(w.Verbosity.LONG) ??
									this.modified.getName(),
								" \u2194 ",
							);
						const $ = this.q();
						return (
							$ &&
								((s = `${$} (${s})`), (l = `${$} (${l})`), (y = `${$} (${y})`)),
							{
								name: g,
								shortDescription: o,
								mediumDescription: f,
								longDescription: b,
								forceDescription: p,
								shortTitle: s,
								mediumTitle: l,
								longTitle: y,
							}
						);
					}
					y(g, p, o = " - ") {
						if (!(!g || !p)) return g === p ? p : `${g}${o}${p}`;
					}
					getName() {
						return this.t.name;
					}
					getDescription(g = w.Verbosity.MEDIUM) {
						switch (g) {
							case w.Verbosity.SHORT:
								return this.t.shortDescription;
							case w.Verbosity.LONG:
								return this.t.longDescription;
							case w.Verbosity.MEDIUM:
							default:
								return this.t.mediumDescription;
						}
					}
					getTitle(g) {
						switch (g) {
							case w.Verbosity.SHORT:
								return this.t.shortTitle;
							case w.Verbosity.LONG:
								return this.t.longTitle;
							default:
							case w.Verbosity.MEDIUM:
								return this.t.mediumTitle;
						}
					}
					async resolve() {
						const g = await this.z();
						return this.s?.dispose(), (this.s = g), this.s;
					}
					prefersEditorPane(g) {
						return this.u
							? g.find((p) => p.typeId === w.$e1)
							: g.find((p) => p.typeId === w.$d1);
					}
					async z() {
						const [g, p] = await Promise.all([
							this.original.resolve(),
							this.modified.resolve(),
						]);
						return p instanceof E.$VO && g instanceof E.$VO
							? new d.$FVb(g, p)
							: new C.$EVb(
									(0, u.$vO)(g) ? g : void 0,
									(0, u.$vO)(p) ? p : void 0,
								);
					}
					toUntyped(g) {
						const p = super.toUntyped(g);
						if (p) return { ...p, modified: p.primary, original: p.secondary };
					}
					matches(g) {
						return this === g
							? !0
							: g instanceof a
								? this.modified.matches(g.modified) &&
									this.original.matches(g.original) &&
									g.u === this.u
								: (0, w.$j1)(g)
									? this.modified.matches(g.modified) &&
										this.original.matches(g.original)
									: !1;
					}
					dispose() {
						this.s && (this.s.dispose(), (this.s = void 0)), super.dispose();
					}
				};
				(e.$GVb = h), (e.$GVb = h = a = Ne([j(5, m.$IY)], h));
				class c extends i.$jY {
					b(g, p, o, f, b) {
						return g.createInstance(h, p, o, f, b, void 0);
					}
				}
				e.$HVb = c;
			},
		),
		define(
			de[1827],
			he([1, 0, 702, 61, 67, 474, 91]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Q1b = void 0);
				let d = class extends t.$VO {
					constructor(r, u, a, h, c) {
						super(a, u, h, c, r);
					}
					dispose() {
						this.b && this.n.destroyModel(this.b), super.dispose();
					}
				};
				(e.$Q1b = d),
					(e.$Q1b = d =
						Ne([j(1, i.$nM), j(2, w.$QO), j(3, E.$RO), j(4, C.$XK)], d));
			},
		),
		