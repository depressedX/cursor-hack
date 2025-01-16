define(
			de[2842],
			he([1, 0, 7, 6, 3, 273, 37, 9, 98, 64, 35]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$nvc = e.$mvc = e.$lvc = e.$kvc = void 0),
					(t = mt(t)),
					(C = mt(C));
				let a = class extends w.$1c {
					constructor(l) {
						super(),
							(this.y = l),
							(this.a = this.D(new i.$re())),
							(this.onWillCreateCodeEditor = this.a.event),
							(this.b = this.D(new i.$re())),
							(this.onCodeEditorAdd = this.b.event),
							(this.c = this.D(new i.$re())),
							(this.onCodeEditorRemove = this.c.event),
							(this.f = this.D(new i.$re())),
							(this.onWillCreateDiffEditor = this.f.event),
							(this.g = this.D(new i.$re())),
							(this.onDiffEditorAdd = this.g.event),
							(this.h = this.D(new i.$re())),
							(this.onDiffEditorRemove = this.h.event),
							(this.j = this.D(new i.$re())),
							(this.onDidChangeTransientModelProperty = this.j.event),
							(this.m = this.D(new i.$re())),
							(this.onDecorationTypeRegistered = this.m.event),
							(this.s = new Map()),
							(this.t = new Map()),
							(this.u = new E.$$c()),
							(this.G = {}),
							(this.H = new Map()),
							(this.n = Object.create(null)),
							(this.q = Object.create(null)),
							(this.r = null);
					}
					willCreateCodeEditor() {
						this.a.fire();
					}
					addCodeEditor(l) {
						(this.n[l.getId()] = l), this.b.fire(l);
					}
					removeCodeEditor(l) {
						delete this.n[l.getId()] && this.c.fire(l);
					}
					listCodeEditors() {
						return Object.keys(this.n).map((l) => this.n[l]);
					}
					willCreateDiffEditor() {
						this.f.fire();
					}
					addDiffEditor(l) {
						(this.q[l.getId()] = l), this.g.fire(l);
					}
					removeDiffEditor(l) {
						delete this.q[l.getId()] && this.h.fire(l);
					}
					listDiffEditors() {
						return Object.keys(this.q).map((l) => this.q[l]);
					}
					getFocusedCodeEditor() {
						let l = null;
						const y = this.listCodeEditors();
						for (const $ of y) {
							if ($.hasTextFocus()) return $;
							$.hasWidgetFocus() && (l = $);
						}
						return l;
					}
					z() {
						return this.r || (this.r = this.C()), this.r;
					}
					C() {
						return new n(t.$Rgb());
					}
					F(l) {
						if (!l) return this.z();
						const y = l.getContainerDomNode();
						if (!t.$Hgb(y)) return this.z();
						const $ = l.getId();
						if (!this.t.has($)) {
							const v = new c(this, $, t.$Rgb(y));
							this.t.set($, v);
						}
						return this.t.get($);
					}
					_removeEditorStyleSheets(l) {
						this.t.delete(l);
					}
					registerDecorationType(l, y, $, v, S) {
						let I = this.s.get(y);
						if (!I) {
							const T = this.F(S),
								P = {
									styleSheet: T,
									key: y,
									parentTypeKey: v,
									options: $ || Object.create(null),
								};
							v ? (I = new g(this.y, T, P)) : (I = new p(l, this.y, T, P)),
								this.s.set(y, I),
								this.m.fire(y);
						}
						return (
							I.refCount++,
							{
								dispose: () => {
									this.removeDecorationType(y);
								},
							}
						);
					}
					listDecorationTypes() {
						return Array.from(this.s.keys());
					}
					removeDecorationType(l) {
						const y = this.s.get(l);
						y &&
							(y.refCount--,
							y.refCount <= 0 &&
								(this.s.delete(l),
								y.dispose(),
								this.listCodeEditors().forEach(($) =>
									$.removeDecorationsByType(l),
								)));
					}
					resolveDecorationOptions(l, y) {
						const $ = this.s.get(l);
						if (!$) throw new Error("Unknown decoration type key: " + l);
						return $.getOptions(this, y);
					}
					resolveDecorationCSSRules(l) {
						const y = this.s.get(l);
						return y ? y.resolveDecorationCSSRules() : null;
					}
					setModelProperty(l, y, $) {
						const v = l.toString();
						let S;
						this.H.has(v)
							? (S = this.H.get(v))
							: ((S = new Map()), this.H.set(v, S)),
							S.set(y, $);
					}
					getModelProperty(l, y) {
						const $ = l.toString();
						if (this.H.has($)) return this.H.get($).get(y);
					}
					setTransientModelProperty(l, y, $) {
						const v = l.uri.toString();
						let S;
						this.G.hasOwnProperty(v)
							? (S = this.G[v])
							: ((S = new h(v, l, this)), (this.G[v] = S)),
							S.get(y) !== $ && (S.set(y, $), this.j.fire(l));
					}
					getTransientModelProperty(l, y) {
						const $ = l.uri.toString();
						if (this.G.hasOwnProperty($)) return this.G[$].get(y);
					}
					getTransientModelProperties(l) {
						const y = l.uri.toString();
						if (this.G.hasOwnProperty(y))
							return this.G[y].keys().map(($) => [$, this.G[y].get($)]);
					}
					_removeWatcher(l) {
						delete this.G[l.uri];
					}
					async openCodeEditor(l, y, $) {
						for (const v of this.u) {
							const S = await v(l, y, $);
							if (S !== null) return S;
						}
						return null;
					}
					registerCodeEditorOpenHandler(l) {
						const y = this.u.unshift(l);
						return (0, w.$Yc)(y);
					}
				};
				(e.$kvc = a), (e.$kvc = a = Ne([j(0, u.$iP)], a));
				class h {
					constructor(l, y, $) {
						(this.uri = l),
							(this.a = {}),
							y.onWillDispose(() => $._removeWatcher(this));
					}
					set(l, y) {
						this.a[l] = y;
					}
					get(l) {
						return this.a[l];
					}
					keys() {
						return Object.keys(this.a);
					}
				}
				e.$lvc = h;
				class c {
					get sheet() {
						return this.c.sheet;
					}
					constructor(l, y, $) {
						(this.a = l), (this.b = y), (this.c = $), (this.d = 0);
					}
					ref() {
						this.d++;
					}
					unref() {
						this.d--,
							this.d === 0 &&
								(this.c.remove(), this.a._removeEditorStyleSheets(this.b));
					}
					insertRule(l, y) {
						t.$Wgb(l, y, this.c);
					}
					removeRulesContainingSelector(l) {
						t.$Xgb(l, this.c);
					}
				}
				class n {
					get sheet() {
						return this.a.sheet;
					}
					constructor(l) {
						this.a = l;
					}
					ref() {}
					unref() {}
					insertRule(l, y) {
						t.$Wgb(l, y, this.a);
					}
					removeRulesContainingSelector(l) {
						t.$Xgb(l, this.a);
					}
				}
				e.$mvc = n;
				class g {
					constructor(l, y, $) {
						(this.a = y),
							this.a.ref(),
							(this.b = $.parentTypeKey),
							(this.refCount = 0),
							(this.c = new o(f.BeforeContentClassName, $, l)),
							(this.d = new o(f.AfterContentClassName, $, l));
					}
					getOptions(l, y) {
						const $ = l.resolveDecorationOptions(this.b, !0);
						return (
							this.c && ($.beforeContentClassName = this.c.className),
							this.d && ($.afterContentClassName = this.d.className),
							$
						);
					}
					resolveDecorationCSSRules() {
						return this.a.sheet.cssRules;
					}
					dispose() {
						this.c && (this.c.dispose(), (this.c = null)),
							this.d && (this.d.dispose(), (this.d = null)),
							this.a.unref();
					}
				}
				class p {
					constructor(l, y, $, v) {
						(this.a = new w.$Zc()),
							(this.description = l),
							(this.b = $),
							this.b.ref(),
							(this.refCount = 0);
						const S = (D) => {
								const M = new o(D, v, y);
								if ((this.a.add(M), M.hasContent)) return M.className;
							},
							I = (D) => {
								const M = new o(D, v, y);
								return (
									this.a.add(M),
									M.hasContent
										? {
												className: M.className,
												hasLetterSpacing: M.hasLetterSpacing,
											}
										: null
								);
							};
						this.className = S(f.ClassName);
						const T = I(f.InlineClassName);
						if (
							(T &&
								((this.inlineClassName = T.className),
								(this.inlineClassNameAffectsLetterSpacing =
									T.hasLetterSpacing)),
							(this.beforeContentClassName = S(f.BeforeContentClassName)),
							(this.afterContentClassName = S(f.AfterContentClassName)),
							v.options.beforeInjectedText &&
								v.options.beforeInjectedText.contentText)
						) {
							const D = I(f.BeforeInjectedTextClassName);
							this.beforeInjectedText = {
								content: v.options.beforeInjectedText.contentText,
								inlineClassName: D?.className,
								inlineClassNameAffectsLetterSpacing:
									D?.hasLetterSpacing ||
									v.options.beforeInjectedText.affectsLetterSpacing,
							};
						}
						if (
							v.options.afterInjectedText &&
							v.options.afterInjectedText.contentText
						) {
							const D = I(f.AfterInjectedTextClassName);
							this.afterInjectedText = {
								content: v.options.afterInjectedText.contentText,
								inlineClassName: D?.className,
								inlineClassNameAffectsLetterSpacing:
									D?.hasLetterSpacing ||
									v.options.afterInjectedText.affectsLetterSpacing,
							};
						}
						this.glyphMarginClassName = S(f.GlyphMarginClassName);
						const P = v.options;
						(this.isWholeLine = !!P.isWholeLine),
							(this.stickiness = P.rangeBehavior);
						const k =
								(P.light && P.light.overviewRulerColor) || P.overviewRulerColor,
							L = (P.dark && P.dark.overviewRulerColor) || P.overviewRulerColor;
						(typeof k < "u" || typeof L < "u") &&
							(this.overviewRuler = {
								color: k || L,
								darkColor: L || k,
								position: P.overviewRulerLane || r.OverviewRulerLane.Center,
							});
					}
					getOptions(l, y) {
						return y
							? {
									description: this.description,
									inlineClassName: this.inlineClassName,
									beforeContentClassName: this.beforeContentClassName,
									afterContentClassName: this.afterContentClassName,
									className: this.className,
									glyphMarginClassName: this.glyphMarginClassName,
									isWholeLine: this.isWholeLine,
									overviewRuler: this.overviewRuler,
									stickiness: this.stickiness,
									before: this.beforeInjectedText,
									after: this.afterInjectedText,
								}
							: this;
					}
					resolveDecorationCSSRules() {
						return this.b.sheet.rules;
					}
					dispose() {
						this.a.dispose(), this.b.unref();
					}
				}
				e.$nvc = {
					color: "color:{0} !important;",
					opacity: "opacity:{0};",
					backgroundColor: "background-color:{0};",
					outline: "outline:{0};",
					outlineColor: "outline-color:{0};",
					outlineStyle: "outline-style:{0};",
					outlineWidth: "outline-width:{0};",
					border: "border:{0};",
					borderColor: "border-color:{0};",
					borderRadius: "border-radius:{0};",
					borderSpacing: "border-spacing:{0};",
					borderStyle: "border-style:{0};",
					borderWidth: "border-width:{0};",
					fontStyle: "font-style:{0};",
					fontWeight: "font-weight:{0};",
					fontSize: "font-size:{0};",
					fontFamily: "font-family:{0};",
					textDecoration: "text-decoration:{0};",
					cursor: "cursor:{0};",
					letterSpacing: "letter-spacing:{0};",
					gutterIconPath: "background:{0} center center no-repeat;",
					gutterIconSize: "background-size:{0};",
					contentText: "content:'{0}';",
					contentIconPath: "content:{0};",
					margin: "margin:{0};",
					padding: "padding:{0};",
					width: "width:{0};",
					height: "height:{0};",
					verticalAlign: "vertical-align:{0};",
				};
				class o {
					constructor(l, y, $) {
						(this.a = $.getColorTheme()),
							(this.f = l),
							(this.h = y),
							(this.i = !1),
							(this.d = !1),
							(this.e = !1);
						let v = b.getClassName(this.h.key, l);
						this.h.parentTypeKey &&
							(v = v + " " + b.getClassName(this.h.parentTypeKey, l)),
							(this.b = v),
							(this.c = b.getSelector(this.h.key, this.h.parentTypeKey, l)),
							this.j(),
							this.i
								? (this.g = $.onDidColorThemeChange((S) => {
										(this.a = $.getColorTheme()), this.k(), this.j();
									}))
								: (this.g = null);
					}
					dispose() {
						this.d && (this.k(), (this.d = !1)),
							this.g && (this.g.dispose(), (this.g = null));
					}
					get hasContent() {
						return this.d;
					}
					get hasLetterSpacing() {
						return this.e;
					}
					get className() {
						return this.b;
					}
					j() {
						const l = this.h.options;
						let y, $, v;
						switch (this.f) {
							case f.ClassName:
								(y = this.l(l)), ($ = this.l(l.light)), (v = this.l(l.dark));
								break;
							case f.InlineClassName:
								(y = this.m(l)), ($ = this.m(l.light)), (v = this.m(l.dark));
								break;
							case f.GlyphMarginClassName:
								(y = this.o(l)), ($ = this.o(l.light)), (v = this.o(l.dark));
								break;
							case f.BeforeContentClassName:
								(y = this.n(l.before)),
									($ = this.n(l.light && l.light.before)),
									(v = this.n(l.dark && l.dark.before));
								break;
							case f.AfterContentClassName:
								(y = this.n(l.after)),
									($ = this.n(l.light && l.light.after)),
									(v = this.n(l.dark && l.dark.after));
								break;
							case f.BeforeInjectedTextClassName:
								(y = this.n(l.beforeInjectedText)),
									($ = this.n(l.light && l.light.beforeInjectedText)),
									(v = this.n(l.dark && l.dark.beforeInjectedText));
								break;
							case f.AfterInjectedTextClassName:
								(y = this.n(l.afterInjectedText)),
									($ = this.n(l.light && l.light.afterInjectedText)),
									(v = this.n(l.dark && l.dark.afterInjectedText));
								break;
							default:
								throw new Error("Unknown rule type: " + this.f);
						}
						const S = this.h.styleSheet;
						let I = !1;
						y.length > 0 && (S.insertRule(this.c, y), (I = !0)),
							$.length > 0 &&
								(S.insertRule(`.vs${this.c}, .hc-light${this.c}`, $), (I = !0)),
							v.length > 0 &&
								(S.insertRule(`.vs-dark${this.c}, .hc-black${this.c}`, v),
								(I = !0)),
							(this.d = I);
					}
					k() {
						this.h.styleSheet.removeRulesContainingSelector(this.c);
					}
					l(l) {
						if (!l) return "";
						const y = [];
						return (
							this.q(l, ["backgroundColor"], y),
							this.q(
								l,
								["outline", "outlineColor", "outlineStyle", "outlineWidth"],
								y,
							),
							this.p(l, y),
							y.join("")
						);
					}
					m(l) {
						if (!l) return "";
						const y = [];
						return (
							this.q(
								l,
								[
									"fontStyle",
									"fontWeight",
									"textDecoration",
									"cursor",
									"color",
									"opacity",
									"letterSpacing",
								],
								y,
							),
							l.letterSpacing && (this.e = !0),
							y.join("")
						);
					}
					n(l) {
						if (!l) return "";
						const y = [];
						if (typeof l < "u") {
							if (
								(this.p(l, y),
								typeof l.contentIconPath < "u" &&
									y.push(
										C.$kf(
											e.$nvc.contentIconPath,
											t.$vhb(d.URI.revive(l.contentIconPath)),
										),
									),
								typeof l.contentText == "string")
							) {
								const v = l.contentText
									.match(/^.*$/m)[0]
									.replace(/['\\]/g, "\\$&");
								y.push(C.$kf(e.$nvc.contentText, v));
							}
							this.q(
								l,
								[
									"verticalAlign",
									"fontStyle",
									"fontWeight",
									"fontSize",
									"fontFamily",
									"textDecoration",
									"color",
									"opacity",
									"backgroundColor",
									"margin",
									"padding",
								],
								y,
							),
								this.q(l, ["width", "height"], y) &&
									y.push("display:inline-block;");
						}
						return y.join("");
					}
					o(l) {
						if (!l) return "";
						const y = [];
						return (
							typeof l.gutterIconPath < "u" &&
								(y.push(
									C.$kf(
										e.$nvc.gutterIconPath,
										t.$vhb(d.URI.revive(l.gutterIconPath)),
									),
								),
								typeof l.gutterIconSize < "u" &&
									y.push(C.$kf(e.$nvc.gutterIconSize, l.gutterIconSize))),
							y.join("")
						);
					}
					p(l, y) {
						return this.q(
							l,
							[
								"border",
								"borderColor",
								"borderRadius",
								"borderSpacing",
								"borderStyle",
								"borderWidth",
							],
							y,
						)
							? (y.push(C.$kf("box-sizing: border-box;")), !0)
							: !1;
					}
					q(l, y, $) {
						const v = $.length;
						for (const S of y) {
							const I = this.r(l[S]);
							typeof I == "string" && $.push(C.$kf(e.$nvc[S], I));
						}
						return $.length !== v;
					}
					r(l) {
						if ((0, m.isThemeColor)(l)) {
							this.i = !0;
							const y = this.a.getColor(l.id);
							return y ? y.toString() : "transparent";
						}
						return l;
					}
				}
				var f;
				(function (s) {
					(s[(s.ClassName = 0)] = "ClassName"),
						(s[(s.InlineClassName = 1)] = "InlineClassName"),
						(s[(s.GlyphMarginClassName = 2)] = "GlyphMarginClassName"),
						(s[(s.BeforeContentClassName = 3)] = "BeforeContentClassName"),
						(s[(s.AfterContentClassName = 4)] = "AfterContentClassName"),
						(s[(s.BeforeInjectedTextClassName = 5)] =
							"BeforeInjectedTextClassName"),
						(s[(s.AfterInjectedTextClassName = 6)] =
							"AfterInjectedTextClassName");
				})(f || (f = {}));
				class b {
					static getClassName(l, y) {
						return "ced-" + l + "-" + y;
					}
					static getSelector(l, y, $) {
						let v = ".monaco-editor ." + this.getClassName(l, $);
						return (
							y && (v = v + "." + this.getClassName(y, $)),
							$ === f.BeforeContentClassName
								? (v += "::before")
								: $ === f.AfterContentClassName && (v += "::after"),
							v
						);
					}
				}
			},
		),
		