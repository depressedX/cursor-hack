define(de[1288], he([1, 0, 552, 18]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$1Yb = w);
			async function w(E, C) {
				const d = E.get(i.$IY);
				if (!C) {
					const m = d.activeEditor;
					C = m instanceof t.$cMb ? m : void 0;
				}
				if (C instanceof t.$cMb) {
					const m = d.findEditors(C.resource)[0];
					await d.replaceEditors(
						[
							{
								editor: C,
								replacement: {
									resource: t.$cMb.getNewEditorUri(),
									options: { pinned: !0 },
								},
							},
						],
						m.groupId,
					);
				}
			}
		}),
		define(
			de[3262],
			he([1, 0, 7, 183, 3, 4, 32, 441, 18]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$dUb = void 0),
					(t = mt(t));
				let r = class extends w.$1c {
					constructor(a, h, c, n) {
						super(), (this.a = c), (this.b = n);
						const g = (0, d.$a3)(a.citations),
							p = t.h(".chat-code-citation-message@root", [
								t.h("span.chat-code-citation-label@label"),
								t.h(".chat-code-citation-button-container@button"),
							]);
						p.label.textContent = g + " - ";
						const o = this.D(
							new i.$oob(p.button, {
								buttonBackground: void 0,
								buttonBorder: void 0,
								buttonForeground: void 0,
								buttonHoverBackground: void 0,
								buttonSecondaryBackground: void 0,
								buttonSecondaryForeground: void 0,
								buttonSecondaryHoverBackground: void 0,
								buttonSeparator: void 0,
							}),
						);
						(o.label = (0, E.localize)(4654, null)),
							this.D(
								o.onDidClick(() => {
									const f =
										`# Code Citations

` +
										a.citations
											.map(
												(b) => `## License: ${b.license}
${b.value.toString()}

\`\`\`
${b.snippet}
\`\`\`

`,
											)
											.join(`
`);
									this.a.openEditor({
										resource: void 0,
										contents: f,
										languageId: "markdown",
									}),
										this.b.publicLog2("openedChatCodeCitations");
								}),
							),
							(this.domNode = p.root);
					}
					hasSameContent(a, h, c) {
						return a.kind === "codeCitations";
					}
				};
				(e.$dUb = r), (e.$dUb = r = Ne([j(2, m.$IY), j(3, C.$km)], r));
			},
		),
		define(
			de[3263],
			he([1, 0, 4, 39, 18, 99, 11]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				class d extends C.$3X {
					constructor() {
						super({
							id: "workbench.action.inspectKeyMappings",
							title: (0, t.localize2)(4880, "Inspect Key Mappings"),
							category: E.$ck.Developer,
							f1: !0,
						});
					}
					run(u, a) {
						const h = u.get(i.$uZ);
						u.get(w.$IY).openEditor({
							resource: void 0,
							contents: h._dumpDebugInfo(),
							options: { pinned: !0 },
						});
					}
				}
				(0, C.$4X)(d);
				class m extends C.$3X {
					constructor() {
						super({
							id: "workbench.action.inspectKeyMappingsJSON",
							title: (0, t.localize2)(4881, "Inspect Key Mappings (JSON)"),
							category: E.$ck.Developer,
							f1: !0,
						});
					}
					async run(u) {
						const a = u.get(w.$IY),
							h = u.get(i.$uZ);
						await a.openEditor({
							resource: void 0,
							contents: h._dumpDebugInfoJSON(),
							options: { pinned: !0 },
						});
					}
				}
				(0, C.$4X)(m);
			},
		),
		define(
			de[3264],
			he([1, 0, 4, 63, 18, 1666, 30, 348, 10, 11, 27, 43, 66]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$QXc = void 0);
				let c = class extends E.$uNc {
					constructor(p, o, f) {
						super(),
							(this.t = p),
							(this.u = o),
							(this.v = f),
							(this.h = this.t.onDidActiveEditorChange);
					}
					get w() {
						const p = this.v.getValue().workbench?.editor;
						return {
							openEditorPinned:
								!p?.enablePreviewFromQuickOpen || !p?.enablePreview,
						};
					}
					get i() {
						return this.t.activeTextEditorControl;
					}
					f(p, o) {
						if (
							(o.keyMods.alt ||
								(this.w.openEditorPinned && o.keyMods.ctrlCmd) ||
								o.forceSideBySide) &&
							this.t.activeEditor
						) {
							p.restoreViewState?.();
							const f = {
								selection: o.range,
								pinned: o.keyMods.ctrlCmd || this.w.openEditorPinned,
								preserveFocus: o.preserveFocus,
							};
							this.u.sideGroup.openEditor(this.t.activeEditor, f);
						} else super.f(p, o);
					}
				};
				(e.$QXc = c),
					(e.$QXc = c = Ne([j(0, w.$IY), j(1, h.$EY), j(2, m.$gj)], c));
				class n extends r.$3X {
					static {
						this.ID = "workbench.action.gotoLine";
					}
					constructor() {
						super({
							id: n.ID,
							title: (0, t.localize2)(4892, "Go to Line/Column..."),
							f1: !0,
							keybinding: {
								weight: a.KeybindingWeight.WorkbenchContrib,
								when: null,
								primary: u.KeyMod.CtrlCmd | u.KeyCode.KeyG,
								mac: { primary: u.KeyMod.WinCtrl | u.KeyCode.KeyG },
							},
						});
					}
					async run(p) {
						p.get(i.$DJ).quickAccess.show(c.PREFIX);
					}
				}
				(0, r.$4X)(n),
					C.$Io
						.as(d.$1r.Quickaccess)
						.registerQuickAccessProvider({
							ctor: c,
							prefix: E.$uNc.PREFIX,
							placeholder: (0, t.localize)(4890, null),
							helpEntries: [
								{ description: (0, t.localize)(4891, null), commandId: n.ID },
							],
						});
			},
		),
		define(
			de[826],
			he([1, 0, 4, 9, 54, 19, 112, 18, 23, 396, 116]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$z3 = e.$y3 = void 0),
					(e.$A3 = h),
					(t = mt(t)),
					(E = mt(E)),
					(e.$y3 = t.localize(5901, null));
				class a {
					constructor(n, g, p, o) {
						let f;
						n
							? ((this.raw = n),
								(f = this.raw.path || this.raw.name || ""),
								(this.available = !0))
							: ((this.raw = { name: e.$y3 }),
								(this.available = !1),
								(f = `${C.$25}:${e.$y3}`)),
							(this.uri = h(this.raw, f, g, p, o));
					}
					get name() {
						return this.raw.name || E.$jh(this.uri);
					}
					get origin() {
						return this.raw.origin;
					}
					get presentationHint() {
						return this.raw.presentationHint;
					}
					get reference() {
						return this.raw.sourceReference;
					}
					get inMemory() {
						return this.uri.scheme === C.$25;
					}
					openInEditor(n, g, p, o, f) {
						return this.available
							? n.openEditor(
									{
										resource: this.uri,
										description: this.origin,
										options: {
											preserveFocus: p,
											selection: g,
											revealIfOpened: !0,
											selectionRevealType:
												u.TextEditorSelectionRevealType.CenterIfOutsideViewport,
											pinned: f,
										},
									},
									o ? d.$KY : d.$JY,
								)
							: Promise.resolve(void 0);
					}
					static getEncodedDebugData(n) {
						let g, p, o;
						switch (n.scheme) {
							case m.Schemas.file:
								g = (0, w.$mc)(n.fsPath);
								break;
							case C.$25:
								if (((g = n.path), n.query)) {
									const f = n.query.split("&");
									for (const b of f) {
										const s = b.split("=");
										if (s.length === 2)
											switch (s[0]) {
												case "session":
													o = s[1];
													break;
												case "ref":
													p = parseInt(s[1]);
													break;
											}
									}
								}
								break;
							default:
								g = n.toString();
								break;
						}
						return {
							name: E.$jh(n),
							path: g,
							sourceReference: p,
							sessionId: o,
						};
					}
				}
				e.$z3 = a;
				function h(c, n, g, p, o) {
					const f = (b) =>
						typeof c.sourceReference == "number" && c.sourceReference > 0
							? i.URI.from({
									scheme: C.$25,
									path: b?.replace(/^\/+/g, "/"),
									query: `session=${g}&ref=${c.sourceReference}`,
								})
							: b && (0, r.$s3)(b)
								? p.asCanonicalUri(i.URI.parse(b))
								: b && (0, w.$nc)(b)
									? p.asCanonicalUri(i.URI.file(b))
									: p.asCanonicalUri(
											i.URI.from({
												scheme: C.$25,
												path: b,
												query: `session=${g}`,
											}),
										);
					try {
						return f(n);
					} catch {
						return (
							o.error("Invalid path from debug adapter: " + n),
							f("/invalidDebugSource")
						);
					}
				}
			},
		),
		define(
			de[1800],
			he([1, 0, 4, 671, 67, 61, 42, 112, 826, 200, 188, 17, 33, 172, 29]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				var g;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$9Qc = void 0);
				let p = class {
					static {
						g = this;
					}
					constructor(f, b, s, l, y) {
						(this.c = b),
							(this.d = s),
							(this.e = l),
							(this.f = y),
							(this.b = new Map()),
							f.registerTextModelContentProvider(d.$25, this),
							(g.a = this);
					}
					dispose() {
						this.b.forEach((f) => f.dispose());
					}
					provideTextContent(f) {
						return this.g(f, !0);
					}
					static refreshDebugContent(f) {
						g.a?.g(f, !1);
					}
					g(f, b) {
						const s = this.d.getModel(f);
						if (!s && !b) return null;
						let l;
						if (f.query) {
							const $ = m.$z3.getEncodedDebugData(f);
							l = this.c.getModel().getSession($.sessionId);
						}
						if ((l || (l = this.c.getViewModel().focusedSession), !l))
							return Promise.reject(new n.$fb((0, t.localize)(5833, null)));
						const y = ($) => {
							this.c.sourceIsNotAvailable(f);
							const v = this.e.createById(c.$0M),
								S = $
									? (0, t.localize)(5834, null, f.path, $)
									: (0, t.localize)(5835, null, f.path);
							return this.d.createModel(S, v, f);
						};
						return l.loadSource(f).then(
							($) => {
								if ($ && $.body)
									if (s) {
										const v = $.body.content;
										this.b.get(s.id)?.cancel();
										const I = new h.$Ce();
										return (
											this.b.set(s.id, I),
											this.f
												.computeMoreMinimalEdits(s.uri, [
													{ text: v, range: s.getFullModelRange() },
												])
												.then(
													(T) => (
														this.b.delete(s.id),
														!I.token.isCancellationRequested &&
															T &&
															T.length > 0 &&
															s.applyEdits(
																T.map((P) =>
																	u.$jL.replace(a.$iL.lift(P.range), P.text),
																),
															),
														s
													),
												)
										);
									} else {
										const v = $.body.mimeType || (0, i.$lYb)(f)[0],
											S = this.e.createByMimeType(v);
										return this.d.createModel($.body.content, S, f);
									}
								return y();
							},
							($) => y($.message),
						);
					}
				};
				(e.$9Qc = p),
					(e.$9Qc =
						p =
						g =
							Ne(
								[
									j(0, C.$MO),
									j(1, d.$75),
									j(2, w.$QO),
									j(3, E.$nM),
									j(4, r.$Cxb),
								],
								p,
							));
			},
		),
		define(
			de[3265],
			he([1, 0, 4, 132, 63, 112, 18, 252, 67, 61, 3, 19, 73]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$VGc = c),
					(t = mt(t));
				async function c(o) {
					const f = o.get(w.$DJ),
						b = o.get(E.$75),
						s = o.get(C.$IY),
						l = b.getModel().getSessions(!1),
						y = o.get(m.$QO),
						$ = o.get(r.$nM),
						v = o.get(h.$3N),
						S = new u.$Zc(),
						I = f.createQuickPick({ useSeparators: !0 });
					S.add(I),
						(I.matchOnLabel =
							I.matchOnDescription =
							I.matchOnDetail =
							I.sortByLabel =
								!1),
						(I.placeholder = t.localize(5904, null)),
						(I.items = await g(I.value, l, s, y, $, v)),
						S.add(
							I.onDidChangeValue(async () => {
								I.items = await g(I.value, l, s, y, $, v);
							}),
						),
						S.add(
							I.onDidAccept(() => {
								I.selectedItems[0].accept(), I.hide(), S.dispose();
							}),
						),
						I.show();
				}
				async function n(o, f, b, s, l, y) {
					const $ = [];
					return (
						$.push({ type: "separator", label: o.name }),
						(await o.getLoadedSources()).forEach((S) => {
							const I = p(S, f, b, s, l, y);
							I && $.push(I);
						}),
						$
					);
				}
				async function g(o, f, b, s, l, y) {
					const $ = [],
						v = await Promise.all(f.map((S) => n(S, o, b, s, l, y)));
					for (const S of v) for (const I of S) $.push(I);
					return $;
				}
				function p(o, f, b, s, l, y) {
					const $ = y.getUriBasenameLabel(o.uri),
						v = y.getUriLabel((0, a.$mh)(o.uri)),
						S = (0, i.$Zk)(f, $, !0),
						I = (0, i.$Zk)(f, v, !0);
					if (S || I)
						return {
							label: $,
							description: v === "." ? void 0 : v,
							highlights: { label: S ?? void 0, description: I ?? void 0 },
							iconClasses: (0, d.$BDb)(s, l, o.uri),
							accept: () => {
								o.available &&
									o.openInEditor(b, {
										startLineNumber: 0,
										startColumn: 0,
										endLineNumber: 0,
										endColumn: 0,
									});
							},
						};
				}
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	define(
		de[3266],
		he([
			1, 0, 7, 54, 495, 410, 90, 988, 799, 5, 26, 3, 105, 1248, 73, 19, 264,
			1247, 6, 28, 50, 4, 15, 67, 17, 393, 291, 18, 673, 74, 41, 84, 198, 14,
			79, 497, 69, 8, 555, 667, 106, 111, 39, 95, 72,
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
				(e.$LRc =
					e.$KRc =
					e.$JRc =
					e.$IRc =
					e.$HRc =
					e.$GRc =
					e.$FRc =
					e.$ERc =
					e.$DRc =
						void 0),
				(t = mt(t)),
				(i = mt(i)),
				(m = xi(m)),
				(x = xi(x));
			let G = class {
				constructor(ae) {
					this.a = ae;
				}
				getWidgetAriaLabel() {
					return (0, l.localize)(7492, null);
				}
				getAriaLabel(ae) {
					if (ae instanceof d.$sRc) {
						const pe =
							this.a.getUriLabel(ae.resource, { relative: !0 }) ||
							ae.resource.fsPath;
						return m.default.MARKERS_TREE_ARIA_LABEL_RESOURCE(
							ae.markers.length,
							ae.name,
							i.$rc(pe),
						);
					}
					return ae instanceof d.$tRc || ae instanceof d.$uRc
						? m.default.MARKERS_TREE_ARIA_LABEL_MARKER(ae)
						: ae instanceof d.$vRc
							? m.default.MARKERS_TREE_ARIA_LABEL_RELATED_INFORMATION(ae.raw)
							: null;
				}
			};
			(e.$DRc = G), (e.$DRc = G = Ne([j(0, n.$3N)], G));
			var K;
			(function (oe) {
				(oe.ResourceMarkers = "rm"),
					(oe.Marker = "m"),
					(oe.RelatedInformation = "ri");
			})(K || (K = {}));
			class J {
				static {
					this.LINE_HEIGHT = 22;
				}
				constructor(ae) {
					this.a = ae;
				}
				getHeight(ae) {
					if (ae instanceof d.$tRc) {
						const pe = this.a.getViewModel(ae);
						return (!pe || pe.multiline ? ae.lines.length : 1) * J.LINE_HEIGHT;
					}
					return J.LINE_HEIGHT;
				}
				getTemplateId(ae) {
					return ae instanceof d.$sRc
						? K.ResourceMarkers
						: ae instanceof d.$tRc
							? K.Marker
							: K.RelatedInformation;
				}
			}
			e.$ERc = J;
			var W;
			(function (oe) {
				(oe[(oe.ResourceMarkers = 0)] = "ResourceMarkers"),
					(oe[(oe.Marker = 1)] = "Marker"),
					(oe[(oe.RelatedInformation = 2)] = "RelatedInformation");
			})(W || (W = {}));
			class X {
				constructor(ae, pe) {
					(this.d = ae),
						(this.a = new Map()),
						(this.b = new a.$Zc()),
						(this.templateId = K.ResourceMarkers),
						pe(this.e, this, this.b);
				}
				renderTemplate(ae) {
					const pe = t.$fhb(ae, t.$(".resource-label-container")),
						$e = this.d.create(pe, { supportHighlights: !0 }),
						ye = t.$fhb(ae, t.$(".count-badge-wrapper"));
					return { count: new w.$Hob(ye, {}, F.$zyb), resourceLabel: $e };
				}
				renderElement(ae, pe, $e) {
					const ye = ae.element,
						ue = (ae.filterData && ae.filterData.uriMatches) || [];
					$e.resourceLabel.setFile(ye.resource, { matches: ue }),
						this.f(ae, $e);
					const fe = this.a.get(ye) ?? [];
					this.a.set(ye, [...fe, $e]);
				}
				disposeElement(ae, pe, $e) {
					const ye = this.a.get(ae.element) ?? [],
						ue = ye.findIndex((fe) => $e === fe);
					if (ue < 0) throw new Error("Disposing unknown resource marker");
					ye.length === 1 ? this.a.delete(ae.element) : ye.splice(ue, 1);
				}
				disposeTemplate(ae) {
					ae.resourceLabel.dispose();
				}
				e(ae) {
					const pe = this.a.get(ae.element);
					pe && pe.forEach(($e) => this.f(ae, $e));
				}
				f(ae, pe) {
					pe.count.setCount(
						ae.children.reduce(($e, ye) => $e + (ye.visible ? 1 : 0), 0),
					);
				}
				dispose() {
					this.b.dispose();
				}
			}
			e.$FRc = X;
			class Y extends X {}
			e.$GRc = Y;
			let ie = class {
				constructor(ae, pe, $e, ye) {
					(this.a = ae),
						(this.b = pe),
						(this.d = $e),
						(this.e = ye),
						(this.templateId = K.Marker);
				}
				renderTemplate(ae) {
					const pe = Object.create(null);
					return (
						(pe.markerWidget = new Q(ae, this.a, this.b, this.e, this.d)), pe
					);
				}
				renderElement(ae, pe, $e) {
					$e.markerWidget.render(ae.element, ae.filterData);
				}
				disposeTemplate(ae) {
					ae.markerWidget.dispose();
				}
			};
			(e.$HRc = ie),
				(e.$HRc = ie = Ne([j(1, V.$Uyb), j(2, r.$Li), j(3, L.$7rb)], ie));
			const ne = (0, A.$$O)(
					"markers-view-multi-line-expanded",
					N.$ak.chevronUp,
					(0, l.localize)(7493, null),
				),
				ee = (0, A.$$O)(
					"markers-view-multi-line-collapsed",
					N.$ak.chevronDown,
					(0, l.localize)(7494, null),
				),
				_ = "problems.action.toggleMultiline";
			class te extends M.$_ib {
				render(ae) {
					super.render(ae), this.b();
				}
				G() {
					super.G(), this.b();
				}
				b() {
					this.element?.setAttribute(
						"aria-expanded",
						`${this._action.class === u.ThemeIcon.asClassName(ne)}`,
					);
				}
			}
			class Q extends a.$1c {
				constructor(ae, pe, $e, ye, ue) {
					super(),
						(this.m = ae),
						(this.q = pe),
						(this.s = $e),
						(this.t = ye),
						(this.j = this.D(new a.$Zc())),
						(this.a = this.D(
							new h.$eib(t.$fhb(ae, t.$(".actions")), {
								actionViewItemProvider: (fe, me) =>
									fe.id === c.$zRc.ID
										? ue.createInstance(c.$ARc, fe, me)
										: void 0,
							}),
						)),
						(this.f = t.$fhb(ae, t.$(""))),
						(this.b = t.$fhb(this.f, t.$(""))),
						(this.g = t.$fhb(ae, t.$(".marker-message-details-container"))),
						(this.h = this.D(
							this.s.setupManagedHover((0, q.$cib)("mouse"), this.g, ""),
						));
				}
				render(ae, pe) {
					this.a.clear(),
						this.j.clear(),
						t.$9fb(this.g),
						(this.f.className = `marker-icon ${x.default.toString(C.MarkerSeverity.toSeverity(ae.marker.severity))}`),
						(this.b.className = `codicon ${P.SeverityIcon.className(C.MarkerSeverity.toSeverity(ae.marker.severity))}`),
						this.u(ae),
						this.y(ae, pe),
						this.j.add(
							t.$0fb(this.m, t.$$gb.MOUSE_OVER, () =>
								this.q.onMarkerMouseHover(ae),
							),
						),
						this.j.add(
							t.$0fb(this.m, t.$$gb.MOUSE_LEAVE, () =>
								this.q.onMarkerMouseLeave(ae),
							),
						);
				}
				u(ae) {
					const pe = this.q.getViewModel(ae);
					if (pe) {
						const $e = pe.quickFixAction;
						this.a.push([$e], { icon: !0, label: !1 }),
							this.f.classList.toggle("quickFix", $e.enabled),
							$e.onDidChange(
								({ enabled: ye }) => {
									(0, b.$ug)(ye) || this.f.classList.toggle("quickFix", ye);
								},
								this,
								this.j,
							),
							$e.onShowQuickFixes(
								() => {
									const ye = this.a.viewItems[0];
									ye && ye.showQuickFixes();
								},
								this,
								this.j,
							);
					}
				}
				w(ae, pe) {
					const $e = this.j.add(
						new h.$eib(t.$fhb(pe, t.$(".multiline-actions")), {
							actionViewItemProvider: (me, ve) => {
								if (me.id === _) return new te(void 0, me, { ...ve, icon: !0 });
							},
						}),
					);
					this.j.add((0, a.$Yc)(() => $e.dispose()));
					const ye = this.q.getViewModel(ae),
						ue = ye && ye.multiline,
						fe = new s.$rj(_);
					(fe.enabled = !!ye && ae.lines.length > 1),
						(fe.tooltip = ue
							? (0, l.localize)(7495, null)
							: (0, l.localize)(7496, null)),
						(fe.class = u.ThemeIcon.asClassName(ue ? ne : ee)),
						(fe.run = () => (
							ye && (ye.multiline = !ye.multiline), Promise.resolve()
						)),
						$e.push([fe], { icon: !0, label: !1 });
				}
				y(ae, pe) {
					const { marker: $e, lines: ye } = ae,
						ue = this.q.getViewModel(ae),
						fe = !ue || ue.multiline,
						me = (pe && pe.lineMatches) || [];
					this.h.update(ae.marker.message);
					const ve = [];
					for (let ge = 0; ge < (fe ? ye.length : 1); ge++) {
						const be = t.$fhb(this.g, t.$(".marker-message-line")),
							Ce = t.$fhb(be, t.$(".marker-message"));
						this.j
							.add(new E.$Wob(Ce))
							.set(
								ye[ge].length > 1e3 ? `${ye[ge].substring(0, 1e3)}...` : ye[ge],
								me[ge],
							),
							ye[ge] === "" && (be.style.height = `${J.LINE_HEIGHT}px`),
							ve.push(be);
					}
					this.z($e, pe, ve[0]), this.w(ae, ve[0]);
				}
				z(ae, pe, $e) {
					if (($e.classList.add("details-container"), ae.source || ae.code)) {
						const ue = this.j.add(
								new E.$Wob(t.$fhb($e, t.$(".marker-source"))),
							),
							fe = (pe && pe.sourceMatches) || [];
						if ((ue.set(ae.source, fe), ae.code))
							if (typeof ae.code == "string") {
								const me = this.j.add(
										new E.$Wob(t.$fhb($e, t.$(".marker-code"))),
									),
									ve = (pe && pe.codeMatches) || [];
								me.set(ae.code, ve);
							} else {
								const me = t.$(".marker-code"),
									ve = this.j.add(new E.$Wob(me)),
									ge = ae.code.target.toString(!0);
								this.j.add(
									new R.Link(
										$e,
										{ href: ge, label: me, title: ge },
										void 0,
										this.s,
										this.t,
									),
								);
								const be = (pe && pe.codeMatches) || [];
								ve.set(ae.code.value, be);
							}
					}
					const ye = t.$fhb($e, t.$("span.marker-line"));
					ye.textContent = m.default.MARKERS_PANEL_AT_LINE_COL_NUMBER(
						ae.startLineNumber,
						ae.startColumn,
					);
				}
			}
			let Z = class {
				constructor(ae) {
					(this.a = ae), (this.templateId = K.RelatedInformation);
				}
				renderTemplate(ae) {
					const pe = Object.create(null);
					t.$fhb(ae, t.$(".actions")),
						t.$fhb(ae, t.$(".icon")),
						(pe.resourceLabel = new E.$Wob(
							t.$fhb(ae, t.$(".related-info-resource")),
						)),
						(pe.lnCol = t.$fhb(ae, t.$("span.marker-line")));
					const $e = t.$fhb(ae, t.$("span.related-info-resource-separator"));
					return (
						($e.textContent = ":"),
						($e.style.paddingRight = "4px"),
						(pe.description = new E.$Wob(
							t.$fhb(ae, t.$(".marker-description")),
						)),
						pe
					);
				}
				renderElement(ae, pe, $e) {
					const ye = ae.element.raw,
						ue = (ae.filterData && ae.filterData.uriMatches) || [],
						fe = (ae.filterData && ae.filterData.messageMatches) || [],
						me = this.a.getUriLabel(ye.resource, { relative: !0 });
					$e.resourceLabel.set((0, g.$kh)(ye.resource), ue, me),
						($e.lnCol.textContent = m.default.MARKERS_PANEL_AT_LINE_COL_NUMBER(
							ye.startLineNumber,
							ye.startColumn,
						)),
						$e.description.set(ye.message, fe, ye.message);
				}
				disposeTemplate(ae) {
					ae.resourceLabel.dispose(), ae.description.dispose();
				}
			};
			(e.$IRc = Z), (e.$IRc = Z = Ne([j(0, n.$3N)], Z));
			class se {
				constructor(ae) {
					this.options = ae;
				}
				filter(ae, pe) {
					return ae instanceof d.$sRc
						? this.a(ae)
						: ae instanceof d.$tRc
							? this.b(ae, pe)
							: this.d(ae, pe);
				}
				a(ae) {
					if (
						z.$jic.has(ae.resource.scheme) ||
						this.options.excludesMatcher.matches(ae.resource)
					)
						return !1;
					if (this.options.includesMatcher.matches(ae.resource)) return !0;
					if (this.options.textFilter.text && !this.options.textFilter.negate) {
						const pe = o.$CRc._filter(
							this.options.textFilter.text,
							(0, g.$kh)(ae.resource),
						);
						if (pe)
							return {
								visibility: !0,
								data: { type: W.ResourceMarkers, uriMatches: pe || [] },
							};
					}
					return p.TreeVisibility.Recurse;
				}
				b(ae, pe) {
					if (
						!(
							(this.options.showErrors &&
								C.MarkerSeverity.Error === ae.marker.severity) ||
							(this.options.showWarnings &&
								C.MarkerSeverity.Warning === ae.marker.severity) ||
							(this.options.showInfos &&
								C.MarkerSeverity.Info === ae.marker.severity)
						)
					)
						return !1;
					if (!this.options.textFilter.text) return !0;
					const ye = [];
					for (const ve of ae.lines) {
						const ge = o.$CRc._messageFilter(this.options.textFilter.text, ve);
						ye.push(ge || []);
					}
					const ue = ae.marker.source
							? o.$CRc._filter(this.options.textFilter.text, ae.marker.source)
							: void 0,
						fe = ae.marker.code
							? o.$CRc._filter(
									this.options.textFilter.text,
									typeof ae.marker.code == "string"
										? ae.marker.code
										: ae.marker.code.value,
								)
							: void 0,
						me = ue || fe || ye.some((ve) => ve.length > 0);
					return me && !this.options.textFilter.negate
						? {
								visibility: !0,
								data: {
									type: W.Marker,
									lineMatches: ye,
									sourceMatches: ue || [],
									codeMatches: fe || [],
								},
							}
						: me &&
								this.options.textFilter.negate &&
								pe === p.TreeVisibility.Recurse
							? !1
							: !me &&
									this.options.textFilter.negate &&
									pe === p.TreeVisibility.Recurse
								? !0
								: pe;
				}
				d(ae, pe) {
					if (!this.options.textFilter.text) return !0;
					const $e = o.$CRc._filter(
							this.options.textFilter.text,
							(0, g.$kh)(ae.raw.resource),
						),
						ye = o.$CRc._messageFilter(
							this.options.textFilter.text,
							i.$sc(ae.raw.message),
						),
						ue = $e || ye;
					return ue && !this.options.textFilter.negate
						? {
								visibility: !0,
								data: {
									type: W.RelatedInformation,
									uriMatches: $e || [],
									messageMatches: ye || [],
								},
							}
						: ue &&
								this.options.textFilter.negate &&
								pe === p.TreeVisibility.Recurse
							? !1
							: !ue &&
									this.options.textFilter.negate &&
									pe === p.TreeVisibility.Recurse
								? !0
								: pe;
				}
			}
			e.$JRc = se;
			let re = class extends a.$1c {
				constructor(ae, pe, $e, ye, ue, fe) {
					super(),
						(this.g = ae),
						(this.h = pe),
						(this.j = $e),
						(this.m = ye),
						(this.q = ue),
						(this.s = fe),
						(this.a = this.D(new f.$re())),
						(this.onDidChange = this.a.event),
						(this.b = null),
						(this.f = null),
						(this.t = !0),
						(this.u = null),
						this.D(
							(0, a.$Yc)(() => {
								this.b && this.b.cancel(), this.f && this.f.cancel();
							}),
						);
				}
				get multiline() {
					return this.t;
				}
				set multiline(ae) {
					this.t !== ae && ((this.t = ae), this.a.fire());
				}
				get quickFixAction() {
					return (
						this.u || (this.u = this.D(this.j.createInstance(c.$zRc, this.g))),
						this.u
					);
				}
				showLightBulb() {
					this.w(!0);
				}
				async w(ae) {
					const pe = await this.y(ae);
					(this.quickFixAction.quickFixes = pe ? this.z(pe) : []),
						this.quickFixAction.autoFixable(!!pe && pe.hasAutoFix);
				}
				y(ae) {
					return this.f !== null
						? this.f
						: this.F(ae).then((pe) =>
								pe
									? (this.f ||
											(this.f = (0, y.$zh)(($e) =>
												(0, S.$UAb)(
													this.q.codeActionProvider,
													pe,
													new v.$iL(
														this.g.range.startLineNumber,
														this.g.range.startColumn,
														this.g.range.endLineNumber,
														this.g.range.endColumn,
													),
													{
														type: k.CodeActionTriggerType.Invoke,
														triggerAction:
															I.CodeActionTriggerSource.ProblemsView,
														filter: { include: I.$GAb.QuickFix },
													},
													D.$0N.None,
													$e,
													this.s,
												).then((ye) => this.D(ye)),
											)),
										this.f)
									: null,
							);
				}
				z(ae) {
					return ae.validActions.map(
						(pe) =>
							new s.$rj(
								pe.action.command ? pe.action.command.id : pe.action.title,
								pe.action.title,
								void 0,
								!0,
								() =>
									this.C(this.g).then(() =>
										this.j.invokeFunction(
											S.$VAb,
											pe,
											S.ApplyCodeActionReason.FromProblemsView,
										),
									),
							),
					);
				}
				C(ae) {
					const { resource: pe, selection: $e } = {
						resource: ae.resource,
						selection: ae.range,
					};
					return this.m
						.openEditor(
							{
								resource: pe,
								options: {
									selection: $e,
									preserveFocus: !0,
									pinned: !1,
									revealIfVisible: !0,
								},
							},
							T.$JY,
						)
						.then(() => {});
				}
				F(ae) {
					const pe = this.h.getModel(this.g.resource);
					return pe
						? Promise.resolve(pe)
						: ae
							? (this.b ||
									(this.b = (0, y.$zh)(
										($e) =>
											new Promise((ye) => {
												this.D(
													this.h.onModelAdded((ue) => {
														(0, g.$gh)(ue.uri, this.g.resource) && ye(ue);
													}),
												);
											}),
									)),
								this.b)
							: Promise.resolve(null);
				}
			};
			(e.$KRc = re),
				(e.$KRc = re =
					Ne(
						[j(1, $.$QO), j(2, r.$Li), j(3, T.$IY), j(4, O.$k3), j(5, H.$uZ)],
						re,
					));
			let le = class extends a.$1c {
				constructor(ae = !0, pe = U.MarkersViewMode.Tree, $e, ye) {
					super(),
						(this.s = $e),
						(this.t = ye),
						(this.a = this.D(new f.$re())),
						(this.onDidChange = this.a.event),
						(this.b = this.D(new f.$re())),
						(this.onDidChangeViewMode = this.b.event),
						(this.f = new Map()),
						(this.g = new Map()),
						(this.h = !1),
						(this.j = null),
						(this.m = new y.$Jh(300)),
						(this.u = !0),
						(this.w = U.MarkersViewMode.Tree),
						(this.u = ae),
						(this.w = pe),
						(this.q = U.MarkersContextKeys.MarkersViewModeContextKey.bindTo(
							this.s,
						)),
						this.q.set(pe);
				}
				add(ae) {
					if (!this.f.has(ae.id)) {
						const pe = this.t.createInstance(re, ae),
							$e = [pe];
						(pe.multiline = this.multiline),
							pe.onDidChange(
								() => {
									this.h || this.a.fire(ae);
								},
								this,
								$e,
							),
							this.f.set(ae.id, { viewModel: pe, disposables: $e });
						const ye = this.g.get(ae.resource.toString()) || [];
						ye.push(ae), this.g.set(ae.resource.toString(), ye);
					}
				}
				remove(ae) {
					const pe = this.g.get(ae.toString()) || [];
					for (const $e of pe) {
						const ye = this.f.get($e.id);
						ye && (0, a.$Vc)(ye.disposables),
							this.f.delete($e.id),
							this.j === $e && (this.j = null);
					}
					this.g.delete(ae.toString());
				}
				getViewModel(ae) {
					const pe = this.f.get(ae.id);
					return pe ? pe.viewModel : null;
				}
				onMarkerMouseHover(ae) {
					(this.j = ae),
						this.m.trigger(() => {
							if (this.j) {
								const pe = this.getViewModel(this.j);
								pe && pe.showLightBulb();
							}
						});
				}
				onMarkerMouseLeave(ae) {
					this.j === ae && (this.j = null);
				}
				get multiline() {
					return this.u;
				}
				set multiline(ae) {
					let pe = !1;
					this.u !== ae && ((this.u = ae), (pe = !0)),
						(this.h = !0),
						this.f.forEach(({ viewModel: $e }) => {
							$e.multiline !== ae && (($e.multiline = ae), (pe = !0));
						}),
						(this.h = !1),
						pe && this.a.fire(void 0);
				}
				get viewMode() {
					return this.w;
				}
				set viewMode(ae) {
					this.w !== ae && ((this.w = ae), this.b.fire(ae), this.q.set(ae));
				}
				dispose() {
					this.f.forEach(({ disposables: ae }) => (0, a.$Vc)(ae)),
						this.f.clear(),
						this.g.clear(),
						super.dispose();
				}
			};
			(e.$LRc = le), (e.$LRc = le = Ne([j(2, B.$6j), j(3, r.$Li)], le));
		},
	),
		define(
			de[1801],
			he([1, 0, 3, 77, 457, 9, 4, 11, 5, 800, 258, 18]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				var h;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$XPc = e.$WPc = e.$VPc = void 0);
				let c = class {
					static {
						h = this;
					}
					static {
						this.a = "scm-multi-diff-source";
					}
					static getMultiDiffSourceUri(f, b) {
						return E.URI.from({
							scheme: h.a,
							query: JSON.stringify({ repositoryUri: f, groupId: b }),
						});
					}
					static b(f) {
						if (f.scheme !== h.a) return;
						let b;
						try {
							b = JSON.parse(f.query);
						} catch {
							return;
						}
						if (typeof b != "object" || b === null) return;
						const { repositoryUri: s, groupId: l } = b;
						if (!(typeof s != "string" || typeof l != "string"))
							return { repositoryUri: E.URI.parse(s), groupId: l };
					}
					constructor(f) {
						this.c = f;
					}
					canHandleUri(f) {
						return h.b(f) !== void 0;
					}
					async resolveDiffSource(f) {
						const { repositoryUri: b, groupId: s } = h.b(f),
							l = await (0, i.waitForState)(
								(0, i.observableFromEvent)(
									this,
									this.c.onDidAddRepository,
									() =>
										[...this.c.repositories].find(
											($) => $.provider.rootUri?.toString() === b.toString(),
										),
								),
							),
							y = await (0, i.waitForState)(
								(0, i.observableFromEvent)(
									this,
									l.provider.onDidChangeResourceGroups,
									() => l.provider.groups.find(($) => $.id === s),
								),
							);
						return new n(y, l);
					}
				};
				(e.$VPc = c), (e.$VPc = c = h = Ne([j(0, u.$c7)], c));
				class n {
					constructor(f, b) {
						(this.b = f),
							(this.c = b),
							(this.a = (0, i.observableFromEvent)(
								this.b.onDidChangeResources,
								() =>
									this.b.resources.map(
										(s) =>
											new r.$Jnc(
												s.multiDiffEditorOriginalUri,
												s.multiDiffEditorModifiedUri,
												s.sourceUri,
											),
									),
							)),
							(this.resources = new w.$Md(this.a)),
							(this.contextKeys = {
								scmResourceGroup: this.b.id,
								scmProvider: this.c.provider.contextValue,
							});
					}
				}
				let g = class extends t.$1c {
					static {
						this.ID = "workbench.contrib.scmMultiDiffSourceResolver";
					}
					constructor(f, b) {
						super(), this.D(b.registerResolver(f.createInstance(c)));
					}
				};
				(e.$WPc = g), (e.$WPc = g = Ne([j(0, m.$Li), j(1, r.$Inc)], g));
				class p extends d.$3X {
					static async openMultiFileDiffEditor(f, b, s, l, y) {
						if (!s) return;
						const $ = c.getMultiDiffSourceUri(s.toString(), l);
						return await f.openEditor({
							label: b,
							multiDiffSource: $,
							options: y,
						});
					}
					constructor() {
						super({
							id: "_workbench.openScmMultiDiffEditor",
							title: (0, C.localize2)(7700, "View Changes"),
							f1: !1,
						});
					}
					async run(f, b) {
						const s = f.get(a.$IY);
						await p.openMultiFileDiffEditor(
							s,
							b.title,
							E.URI.revive(b.repositoryUri),
							b.resourceGroupId,
						);
					}
				}
				e.$XPc = p;
			},
		),
		define(
			de[3267],
			he([1, 0, 1127, 15, 6, 3, 32, 18]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$nEc = void 0);
				let m = class extends E.$1c {
					constructor(u, a) {
						super(),
							(this.c = u),
							(this.f = a),
							(this.a = this.D(new E.$2c())),
							(this.b = this.D(
								new i.$Yh(() => {
									this.h(), this.g();
								}, 6e4),
							)),
							Math.random() <= 0.01 && this.g();
					}
					g() {
						this.a.value = w.Event.once(this.c.onDidActiveEditorChange)(() =>
							this.b.schedule(),
						);
					}
					h() {
						const u = t.inputLatency.getAndClearMeasurements();
						u &&
							this.f.publicLog2("performance.inputLatency", {
								keydown: u.keydown,
								input: u.input,
								render: u.render,
								total: u.total,
								sampleCount: u.sampleCount,
							});
					}
				};
				(e.$nEc = m), (e.$nEc = m = Ne([j(0, d.$IY), j(1, C.$km)], m));
			},
		),
		define(
			de[568],
			he([1, 0, 29, 25, 44, 18, 33, 22, 17, 28, 8, 37, 24]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$R7 =
						e.SearchUIState =
						e.$N7 =
						e.WorkspaceSymbolProviderRegistry =
							void 0),
					(e.$O7 = g),
					(e.$P7 = p),
					(e.$Q7 = f);
				var c;
				(function (s) {
					const l = [];
					function y(v) {
						let S = v;
						return (
							S && l.push(S),
							{
								dispose() {
									if (S) {
										const I = l.indexOf(S);
										I >= 0 && (l.splice(I, 1), (S = void 0));
									}
								},
							}
						);
					}
					s.register = y;
					function $() {
						return l.slice(0);
					}
					s.all = $;
				})(c || (e.WorkspaceSymbolProviderRegistry = c = {}));
				class n {
					constructor(l, y) {
						(this.symbol = l), (this.provider = y);
					}
				}
				e.$N7 = n;
				async function g(s, l = C.CancellationToken.None) {
					const y = [],
						$ = c.all().map(async (S) => {
							try {
								const I = await S.provideWorkspaceSymbols(s, l);
								if (!I) return;
								let T = 0;
								for (const P of I) {
									if ((T++, T > 100)) break;
									y.push(new n(P, S));
								}
							} catch (I) {
								(0, t.$5)(I);
							}
						});
					if ((await Promise.all($), l.isCancellationRequested)) return [];
					function v(S, I) {
						let T = (0, a.$Ff)(S.symbol.name, I.symbol.name);
						return (
							T === 0 && (T = S.symbol.kind - I.symbol.kind),
							T === 0 &&
								(T = (0, a.$Ff)(
									S.symbol.location.uri.toString(),
									I.symbol.location.uri.toString(),
								)),
							T === 0 &&
								(S.symbol.location.range && I.symbol.location.range
									? m.$iL.areIntersecting(
											S.symbol.location.range,
											I.symbol.location.range,
										) ||
										(T = m.$iL.compareRangesUsingStarts(
											S.symbol.location.range,
											I.symbol.location.range,
										))
									: S.provider.resolveWorkspaceSymbol &&
											!I.provider.resolveWorkspaceSymbol
										? (T = -1)
										: !S.provider.resolveWorkspaceSymbol &&
											I.provider.resolveWorkspaceSymbol &&
											(T = 1)),
							T === 0 &&
								(T = (0, a.$Ff)(
									S.symbol.containerName ?? "",
									I.symbol.containerName ?? "",
								)),
							T
						);
					}
					return (0, h.$Db)(y, v)
						.map((S) => S[0])
						.flat();
				}
				function p(s) {
					const l = s.get(E.$IY),
						y = s.get(i.$Vi),
						$ = s.get(d.$ll);
					return l.editors
						.map((S) =>
							w.$A1.getOriginalUri(S, {
								supportSideBySide: w.SideBySideEditor.PRIMARY,
							}),
						)
						.filter((S) => !!S && !y.isInsideWorkspace(S) && $.hasProvider(S));
				}
				const o = /\s?[#:\(](?:line )?(\d*)(?:[#:,](\d*))?\)?:?\s*$/;
				function f(s, l) {
					if (
						!s ||
						l?.some((v) => {
							const S = s.indexOf(v);
							return S === 0 || (S > 0 && !o.test(s.substring(S + 1)));
						})
					)
						return;
					let y;
					const $ = o.exec(s);
					if ($) {
						const v = parseInt($[1] ?? "", 10);
						if ((0, r.$pg)(v)) {
							y = {
								startLineNumber: v,
								startColumn: 1,
								endLineNumber: v,
								endColumn: 1,
							};
							const S = parseInt($[2] ?? "", 10);
							(0, r.$pg)(S) &&
								(y = {
									startLineNumber: y.startLineNumber,
									startColumn: S,
									endLineNumber: y.endLineNumber,
									endColumn: S,
								});
						} else
							$[1] === "" &&
								(y = {
									startLineNumber: 1,
									startColumn: 1,
									endLineNumber: 1,
									endColumn: 1,
								});
					}
					if ($ && y) return { filter: s.substr(0, $.index), range: y };
				}
				var b;
				(function (s) {
					(s[(s.Idle = 0)] = "Idle"),
						(s[(s.Searching = 1)] = "Searching"),
						(s[(s.SlowSearch = 2)] = "SlowSearch");
				})(b || (e.SearchUIState = b = {})),
					(e.$R7 = new u.$5j("searchState", b.Idle));
			},
		),
		define(
			de[827],
			he([
				1, 0, 4, 392, 15, 568, 74, 73, 23, 41, 18, 17, 10, 65, 618, 322, 14, 26,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				var f;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Ifc = void 0);
				let b = class extends i.$GLb {
					static {
						f = this;
					}
					static {
						this.PREFIX = "#";
					}
					static {
						this.a = 200;
					}
					static {
						this.b = new Set([
							C.SymbolKind.Class,
							C.SymbolKind.Enum,
							C.SymbolKind.File,
							C.SymbolKind.Interface,
							C.SymbolKind.Namespace,
							C.SymbolKind.Package,
							C.SymbolKind.Module,
						]);
					}
					get defaultFilterValue() {
						const l = this.r.getFocusedCodeEditor();
						if (l) return (0, n.$tfc)(l) ?? void 0;
					}
					constructor(l, y, $, v, S) {
						super(f.PREFIX, {
							canAcceptInBackground: !0,
							noResultsPick: { label: (0, t.localize)(9375, null) },
						}),
							(this.j = l),
							(this.m = y),
							(this.n = $),
							(this.q = v),
							(this.r = S),
							(this.h = this.D(new w.$Kh(f.a)));
					}
					get s() {
						const l = this.q.getValue().workbench?.editor;
						return {
							openEditorPinned:
								!l?.enablePreviewFromQuickOpen || !l?.enablePreview,
							openSideBySideDirection: l?.openSideBySideDirection,
						};
					}
					g(l, y, $) {
						return this.getSymbolPicks(l, void 0, $);
					}
					async getSymbolPicks(l, y, $) {
						return this.h.trigger(
							async () =>
								$.isCancellationRequested ? [] : this.u((0, g.$hs)(l), y, $),
							y?.delay,
						);
					}
					async u(l, y, $) {
						let v, S;
						l.values && l.values.length > 1
							? ((v = (0, g.$is)(l.values[0])),
								(S = (0, g.$is)(l.values.slice(1))))
							: (v = l);
						const I = await (0, E.$O7)(v.original, $);
						if ($.isCancellationRequested) return [];
						const T = [],
							P = this.s.openSideBySideDirection;
						for (const { symbol: k, provider: L } of I) {
							if (y?.skipLocal && !f.b.has(k.kind) && k.containerName) continue;
							const D = k.name,
								M = `$(${C.SymbolKinds.toIcon(k.kind).id}) ${D}`,
								N = M.length - D.length;
							let A,
								R,
								O = !1;
							if (
								v.original.length > 0 &&
								(v !== l &&
									(([A, R] = (0, g.$es)(M, { ...l, values: void 0 }, 0, N)),
									typeof A == "number" && (O = !0)),
								typeof A != "number" &&
									(([A, R] = (0, g.$es)(M, v, 0, N)), typeof A != "number"))
							)
								continue;
							const B = k.location.uri;
							let U;
							if (B) {
								const H = this.j.getUriLabel(B, { relative: !0 });
								k.containerName
									? (U = `${k.containerName} \u2022 ${H}`)
									: (U = H);
							}
							let z, F;
							if (!O && S && S.original.length > 0) {
								if ((U && ([z, F] = (0, g.$es)(U, S)), typeof z != "number"))
									continue;
								typeof A == "number" && (A += z);
							}
							const x = k.tags
								? k.tags.indexOf(C.SymbolTag.Deprecated) >= 0
								: !1;
							T.push({
								symbol: k,
								resource: B,
								score: A,
								label: M,
								ariaLabel: D,
								highlights: x ? void 0 : { label: R, description: F },
								description: U,
								strikethrough: x,
								buttons: [
									{
										iconClass:
											P === "right"
												? o.ThemeIcon.asClassName(p.$ak.splitHorizontal)
												: o.ThemeIcon.asClassName(p.$ak.splitVertical),
										tooltip:
											P === "right"
												? (0, t.localize)(9376, null)
												: (0, t.localize)(9377, null),
									},
								],
								trigger: (H, q) => (
									this.w(L, k, $, { keyMods: q, forceOpenSideBySide: !0 }),
									i.TriggerAction.CLOSE_PICKER
								),
								accept: async (H, q) =>
									this.w(L, k, $, {
										keyMods: H,
										preserveFocus: q.inBackground,
										forcePinned: q.inBackground,
									}),
							});
						}
						return y?.skipSorting || T.sort((k, L) => this.y(k, L)), T;
					}
					async w(l, y, $, v) {
						let S = y;
						(typeof l.resolveWorkspaceSymbol == "function" &&
							((S = (await l.resolveWorkspaceSymbol(y, $)) || y),
							$.isCancellationRequested)) ||
							(S.location.uri.scheme === m.Schemas.http ||
							S.location.uri.scheme === m.Schemas.https
								? await this.m.open(S.location.uri, {
										fromUserGesture: !0,
										allowContributedOpeners: !0,
									})
								: await this.n.openEditor(
										{
											resource: S.location.uri,
											options: {
												preserveFocus: v?.preserveFocus,
												pinned:
													v.keyMods.ctrlCmd ||
													v.forcePinned ||
													this.s.openEditorPinned,
												selection: S.location.range
													? a.$iL.collapseToStart(S.location.range)
													: void 0,
											},
										},
										v.keyMods.alt ||
											(this.s.openEditorPinned && v.keyMods.ctrlCmd) ||
											v?.forceOpenSideBySide
											? u.$KY
											: u.$JY,
									));
					}
					y(l, y) {
						if (typeof l.score == "number" && typeof y.score == "number") {
							if (l.score > y.score) return -1;
							if (l.score < y.score) return 1;
						}
						if (l.symbol && y.symbol) {
							const $ = l.symbol.name.toLowerCase(),
								v = y.symbol.name.toLowerCase(),
								S = $.localeCompare(v);
							if (S !== 0) return S;
						}
						if (l.symbol && y.symbol) {
							const $ = C.SymbolKinds.toIcon(l.symbol.kind).id,
								v = C.SymbolKinds.toIcon(y.symbol.kind).id;
							return $.localeCompare(v);
						}
						return 0;
					}
				};
				(e.$Ifc = b),
					(e.$Ifc =
						b =
						f =
							Ne(
								[
									j(0, d.$3N),
									j(1, r.$7rb),
									j(2, u.$IY),
									j(3, h.$gj),
									j(4, c.$dtb),
								],
								b,
							));
			},
		),
		define(
			de[1289],
			he([1, 0, 24, 37, 56, 61, 254, 4, 63, 994, 510, 18]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$HFc = void 0);
				class h extends r.$FFc {
					static {
						this.Id = "workbench.action.populateFileFromSnippet";
					}
					constructor() {
						super({
							id: h.Id,
							title: (0, d.localize2)(9449, "Fill File with Snippet"),
							f1: !0,
						});
					}
					async run(n) {
						const g = n.get(u.$gYb),
							p = n.get(m.$DJ),
							o = n.get(a.$IY),
							f = n.get(E.$nM),
							b = (0, w.$btb)(o.activeTextEditorControl);
						if (!b || !b.hasModel()) return;
						const s = await g.getSnippets(void 0, {
							fileTemplateSnippets: !0,
							noRecencySort: !0,
							includeNoPrefixSnippets: !0,
						});
						if (s.length === 0) return;
						const l = await this.c(p, f, s);
						l &&
							b.hasModel() &&
							(C.$aDb
								.get(b)
								?.apply([
									{
										range: b.getModel().getFullModelRange(),
										template: l.snippet.body,
									},
								]),
							b.getModel().setLanguage(f.createById(l.langId), h.Id),
							b.focus());
					}
					async c(n, g, p) {
						const o = [];
						for (const l of p)
							if ((0, t.$Ob)(l.scopes)) o.push({ langId: "", snippet: l });
							else for (const y of l.scopes) o.push({ langId: y, snippet: l });
						const f = [],
							b = (0, t.$Db)(o, (l, y) => (0, i.$Ff)(l.langId, y.langId));
						for (const l of b) {
							let y = !0;
							for (const $ of l)
								y &&
									(f.push({
										type: "separator",
										label: g.getLanguageName($.langId) ?? $.langId,
									}),
									(y = !1)),
									f.push({
										snippet: $,
										label: $.snippet.prefix || $.snippet.name,
										detail: $.snippet.description,
									});
						}
						return (
							await n.pick(f, {
								placeHolder: (0, d.localize)(9448, null),
								matchOnDetail: !0,
							})
						)?.snippet;
					}
				}
				e.$HFc = h;
			},
		),
		define(
			de[3268],
			he([1, 0, 3, 104, 69, 291, 4, 10, 5, 1289, 1754, 510]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				var h, c;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$7Xc = void 0);
				let n = class {
					static {
						h = this;
					}
					static {
						this.a = 4;
					}
					static {
						this.b = {
							kind: E.$GAb.SurroundWith.value,
							title: (0, C.localize)(9452, null),
							command: {
								id: u.$6Xc.options.id,
								title: u.$6Xc.options.title.value,
							},
						};
					}
					constructor(b) {
						this.c = b;
					}
					async provideCodeActions(b, s) {
						if (s.isEmpty()) return;
						const l = i.$kL.isISelection(s)
								? s.getPosition()
								: s.getStartPosition(),
							y = await (0, u.$5Xc)(this.c, b, l, !1);
						if (!y.length) return;
						const $ = [];
						for (const v of y) {
							if ($.length >= h.a) {
								$.push(h.b);
								break;
							}
							$.push({
								title: (0, C.localize)(9453, null, v.name),
								kind: E.$GAb.SurroundWith.value,
								edit: p(b, s, v),
							});
						}
						return { actions: $, dispose() {} };
					}
				};
				n = h = Ne([j(0, a.$gYb)], n);
				let g = class {
					static {
						c = this;
					}
					static {
						this.a = 4;
					}
					static {
						this.b = {
							title: (0, C.localize)(9454, null),
							kind: E.$GAb.SurroundWith.value,
							command: { id: r.$HFc.Id, title: "" },
						};
					}
					constructor(b) {
						(this.c = b),
							(this.providedCodeActionKinds = [E.$GAb.SurroundWith.value]);
					}
					async provideCodeActions(b) {
						if (b.getValueLength() !== 0) return;
						const s = await this.c.getSnippets(b.getLanguageId(), {
								fileTemplateSnippets: !0,
								includeNoPrefixSnippets: !0,
							}),
							l = [];
						for (const y of s) {
							if (l.length >= c.a) {
								l.push(c.b);
								break;
							}
							l.push({
								title: (0, C.localize)(9455, null, y.name),
								kind: E.$GAb.SurroundWith.value,
								edit: p(b, b.getFullModelRange(), y),
							});
						}
						return { actions: l, dispose() {} };
					}
				};
				g = c = Ne([j(0, a.$gYb)], g);
				function p(f, b, s) {
					return {
						edits: [
							{
								versionId: f.getVersionId(),
								resource: f.uri,
								textEdit: { range: b, text: s.body, insertAsSnippet: !0 },
							},
						],
					};
				}
				let o = class {
					constructor(b, s, l) {
						this.a = new t.$Zc();
						const y = "editor.snippets.codeActions.enabled",
							$ = new t.$Zc(),
							v = () => {
								$.clear(),
									l.getValue(y) &&
										($.add(
											s.codeActionProvider.register("*", b.createInstance(n)),
										),
										$.add(
											s.codeActionProvider.register("*", b.createInstance(g)),
										));
							};
						v(),
							this.a.add(
								l.onDidChangeConfiguration(
									(S) => S.affectsConfiguration(y) && v(),
								),
							),
							this.a.add($);
					}
					dispose() {
						this.a.dispose();
					}
				};
				(e.$7Xc = o),
					(e.$7Xc = o = Ne([j(0, m.$Li), j(1, w.$k3), j(2, d.$gj)], o));
			},
		),
		define(
			de[1017],
			he([1, 0, 50, 14, 23, 4, 11, 8, 117, 100, 419, 145, 237, 469, 18]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.TerminalMenuBarGroup = void 0),
					(e.$PUc = o),
					(e.$QUc = f);
				var g;
				(function (b) {
					(b.Create = "1_create"),
						(b.Edit = "3_edit"),
						(b.Clear = "5_clear"),
						(b.Kill = "7_kill"),
						(b.Config = "9_config");
				})(g || (g = {}));
				var p;
				(function (b) {
					(b.Create = "1_create"),
						(b.Run = "3_run"),
						(b.Manage = "5_manage"),
						(b.Configure = "7_configure");
				})(p || (e.TerminalMenuBarGroup = p = {}));
				function o() {
					C.$ZX.appendMenuItems([
						{
							id: C.$XX.MenubarTerminalMenu,
							item: {
								group: p.Create,
								command: {
									id: a.TerminalCommandId.New,
									title: (0, E.localize)(10094, null),
								},
								order: 1,
							},
						},
						{
							id: C.$XX.MenubarTerminalMenu,
							item: {
								group: p.Create,
								command: {
									id: a.TerminalCommandId.Split,
									title: (0, E.localize)(10095, null),
									precondition: d.$Kj.has(h.TerminalContextKeyStrings.IsOpen),
								},
								order: 2,
								when: h.TerminalContextKeys.processSupported,
							},
						},
						{
							id: C.$XX.MenubarTerminalMenu,
							item: {
								group: p.Run,
								command: {
									id: a.TerminalCommandId.RunActiveFile,
									title: (0, E.localize)(10096, null),
								},
								order: 3,
								when: h.TerminalContextKeys.processSupported,
							},
						},
						{
							id: C.$XX.MenubarTerminalMenu,
							item: {
								group: p.Run,
								command: {
									id: a.TerminalCommandId.RunSelectedText,
									title: (0, E.localize)(10097, null),
								},
								order: 4,
								when: h.TerminalContextKeys.processSupported,
							},
						},
					]),
						C.$ZX.appendMenuItems([
							{
								id: C.$XX.TerminalInstanceContext,
								item: {
									group: g.Create,
									command: {
										id: a.TerminalCommandId.Split,
										title: c.$hUc.split.value,
									},
								},
							},
							{
								id: C.$XX.TerminalInstanceContext,
								item: {
									command: { id: a.TerminalCommandId.New, title: c.$hUc.new },
									group: g.Create,
								},
							},
							{
								id: C.$XX.TerminalInstanceContext,
								item: {
									command: {
										id: a.TerminalCommandId.KillViewOrEditor,
										title: c.$hUc.kill.value,
									},
									group: g.Kill,
								},
							},
							{
								id: C.$XX.TerminalInstanceContext,
								item: {
									command: {
										id: a.TerminalCommandId.CopySelection,
										title: (0, E.localize)(10098, null),
									},
									group: g.Edit,
									order: 1,
								},
							},
							{
								id: C.$XX.TerminalInstanceContext,
								item: {
									command: {
										id: a.TerminalCommandId.CopySelectionAsHtml,
										title: (0, E.localize)(10099, null),
									},
									group: g.Edit,
									order: 2,
								},
							},
							{
								id: C.$XX.TerminalInstanceContext,
								item: {
									command: {
										id: a.TerminalCommandId.Paste,
										title: (0, E.localize)(10100, null),
									},
									group: g.Edit,
									order: 3,
								},
							},
							{
								id: C.$XX.TerminalInstanceContext,
								item: {
									command: {
										id: a.TerminalCommandId.Clear,
										title: (0, E.localize)(10101, null),
									},
									group: g.Clear,
								},
							},
							{
								id: C.$XX.TerminalInstanceContext,
								item: {
									command: {
										id: a.TerminalCommandId.SizeToContentWidth,
										title: c.$hUc.toggleSizeToContentWidth,
									},
									group: g.Config,
								},
							},
							{
								id: C.$XX.TerminalInstanceContext,
								item: {
									command: {
										id: a.TerminalCommandId.SelectAll,
										title: (0, E.localize)(10102, null),
									},
									group: g.Edit,
									order: 3,
								},
							},
						]),
						C.$ZX.appendMenuItems([
							{
								id: C.$XX.TerminalEditorInstanceContext,
								item: {
									group: g.Create,
									command: {
										id: a.TerminalCommandId.Split,
										title: c.$hUc.split.value,
									},
								},
							},
							{
								id: C.$XX.TerminalEditorInstanceContext,
								item: {
									command: { id: a.TerminalCommandId.New, title: c.$hUc.new },
									group: g.Create,
								},
							},
							{
								id: C.$XX.TerminalEditorInstanceContext,
								item: {
									command: {
										id: a.TerminalCommandId.KillEditor,
										title: c.$hUc.kill.value,
									},
									group: g.Kill,
								},
							},
							{
								id: C.$XX.TerminalEditorInstanceContext,
								item: {
									command: {
										id: a.TerminalCommandId.CopySelection,
										title: (0, E.localize)(10103, null),
									},
									group: g.Edit,
									order: 1,
								},
							},
							{
								id: C.$XX.TerminalEditorInstanceContext,
								item: {
									command: {
										id: a.TerminalCommandId.CopySelectionAsHtml,
										title: (0, E.localize)(10104, null),
									},
									group: g.Edit,
									order: 2,
								},
							},
							{
								id: C.$XX.TerminalEditorInstanceContext,
								item: {
									command: {
										id: a.TerminalCommandId.Paste,
										title: (0, E.localize)(10105, null),
									},
									group: g.Edit,
									order: 3,
								},
							},
							{
								id: C.$XX.TerminalEditorInstanceContext,
								item: {
									command: {
										id: a.TerminalCommandId.Clear,
										title: (0, E.localize)(10106, null),
									},
									group: g.Clear,
								},
							},
							{
								id: C.$XX.TerminalEditorInstanceContext,
								item: {
									command: {
										id: a.TerminalCommandId.SelectAll,
										title: (0, E.localize)(10107, null),
									},
									group: g.Edit,
									order: 3,
								},
							},
							{
								id: C.$XX.TerminalEditorInstanceContext,
								item: {
									command: {
										id: a.TerminalCommandId.SizeToContentWidth,
										title: c.$hUc.toggleSizeToContentWidth,
									},
									group: g.Config,
								},
							},
						]),
						C.$ZX.appendMenuItems([
							{
								id: C.$XX.TerminalTabEmptyAreaContext,
								item: {
									command: {
										id: a.TerminalCommandId.NewWithProfile,
										title: (0, E.localize)(10108, null),
									},
									group: g.Create,
								},
							},
							{
								id: C.$XX.TerminalTabEmptyAreaContext,
								item: {
									command: { id: a.TerminalCommandId.New, title: c.$hUc.new },
									group: g.Create,
								},
							},
						]),
						C.$ZX.appendMenuItems([
							{
								id: C.$XX.TerminalNewDropdownContext,
								item: {
									command: {
										id: a.TerminalCommandId.SelectDefaultProfile,
										title: (0, E.localize2)(10124, "Select Default Profile"),
									},
									group: "3_configure",
								},
							},
							{
								id: C.$XX.TerminalNewDropdownContext,
								item: {
									command: {
										id: a.TerminalCommandId.ConfigureTerminalSettings,
										title: (0, E.localize)(10109, null),
									},
									group: "3_configure",
								},
							},
							{
								id: C.$XX.TerminalNewDropdownContext,
								item: {
									command: {
										id: "workbench.action.tasks.runTask",
										title: (0, E.localize)(10110, null),
									},
									when: u.$Ypc,
									group: "4_tasks",
									order: 1,
								},
							},
							{
								id: C.$XX.TerminalNewDropdownContext,
								item: {
									command: {
										id: "workbench.action.tasks.configureTaskRunner",
										title: (0, E.localize)(10111, null),
									},
									when: u.$Ypc,
									group: "4_tasks",
									order: 2,
								},
							},
						]),
						C.$ZX.appendMenuItems([
							{
								id: C.$XX.ViewTitle,
								item: {
									command: {
										id: a.TerminalCommandId.SwitchTerminal,
										title: (0, E.localize2)(10125, "Switch Terminal"),
									},
									group: "navigation",
									order: 0,
									when: d.$Kj.and(
										d.$Kj.equals("view", a.$geb),
										d.$Kj.not(`config.${m.TerminalSettingId.TabsEnabled}`),
									),
								},
							},
							{
								id: C.$XX.ViewTitle,
								item: {
									command: {
										id: a.TerminalCommandId.Focus,
										title: c.$hUc.focus,
									},
									alt: {
										id: a.TerminalCommandId.Split,
										title: c.$hUc.split.value,
										icon: i.$ak.splitHorizontal,
									},
									group: "navigation",
									order: 0,
									when: d.$Kj.and(
										d.$Kj.equals("view", a.$geb),
										d.$Kj.has(`config.${m.TerminalSettingId.TabsEnabled}`),
										d.$Kj.or(
											d.$Kj.and(
												d.$Kj.equals(
													`config.${m.TerminalSettingId.TabsShowActiveTerminal}`,
													"singleTerminal",
												),
												d.$Kj.equals(h.TerminalContextKeyStrings.GroupCount, 1),
											),
											d.$Kj.and(
												d.$Kj.equals(
													`config.${m.TerminalSettingId.TabsShowActiveTerminal}`,
													"singleTerminalOrNarrow",
												),
												d.$Kj.or(
													d.$Kj.equals(
														h.TerminalContextKeyStrings.GroupCount,
														1,
													),
													d.$Kj.has(h.TerminalContextKeyStrings.TabsNarrow),
												),
											),
											d.$Kj.and(
												d.$Kj.equals(
													`config.${m.TerminalSettingId.TabsShowActiveTerminal}`,
													"singleGroup",
												),
												d.$Kj.equals(h.TerminalContextKeyStrings.GroupCount, 1),
											),
											d.$Kj.equals(
												`config.${m.TerminalSettingId.TabsShowActiveTerminal}`,
												"always",
											),
										),
									),
								},
							},
							{
								id: C.$XX.ViewTitle,
								item: {
									command: {
										id: a.TerminalCommandId.Split,
										title: c.$hUc.split,
										icon: i.$ak.splitHorizontal,
									},
									group: "navigation",
									order: 2,
									when: h.TerminalContextKeys.shouldShowViewInlineActions,
								},
							},
							{
								id: C.$XX.ViewTitle,
								item: {
									command: {
										id: a.TerminalCommandId.Kill,
										title: c.$hUc.kill,
										icon: i.$ak.trash,
									},
									group: "navigation",
									order: 3,
									when: h.TerminalContextKeys.shouldShowViewInlineActions,
								},
							},
							{
								id: C.$XX.ViewTitle,
								item: {
									command: {
										id: a.TerminalCommandId.New,
										title: c.$hUc.new,
										icon: i.$ak.plus,
									},
									alt: {
										id: a.TerminalCommandId.Split,
										title: c.$hUc.split.value,
										icon: i.$ak.splitHorizontal,
									},
									group: "navigation",
									order: 0,
									when: d.$Kj.and(
										d.$Kj.equals("view", a.$geb),
										d.$Kj.or(
											h.TerminalContextKeys.webExtensionContributedProfile,
											h.TerminalContextKeys.processSupported,
										),
									),
								},
							},
							{
								id: C.$XX.ViewTitle,
								item: {
									command: {
										id: a.TerminalCommandId.Clear,
										title: (0, E.localize)(10112, null),
										icon: i.$ak.clearAll,
									},
									group: "navigation",
									order: 4,
									when: d.$Kj.equals("view", a.$geb),
									isHiddenByDefault: !0,
								},
							},
							{
								id: C.$XX.ViewTitle,
								item: {
									command: {
										id: a.TerminalCommandId.RunActiveFile,
										title: (0, E.localize)(10113, null),
										icon: i.$ak.run,
									},
									group: "navigation",
									order: 5,
									when: d.$Kj.equals("view", a.$geb),
									isHiddenByDefault: !0,
								},
							},
							{
								id: C.$XX.ViewTitle,
								item: {
									command: {
										id: a.TerminalCommandId.RunSelectedText,
										title: (0, E.localize)(10114, null),
										icon: i.$ak.selection,
									},
									group: "navigation",
									order: 6,
									when: d.$Kj.equals("view", a.$geb),
									isHiddenByDefault: !0,
								},
							},
						]),
						C.$ZX.appendMenuItems([
							{
								id: C.$XX.TerminalTabContext,
								item: {
									command: {
										id: a.TerminalCommandId.SplitActiveTab,
										title: c.$hUc.split.value,
									},
									group: g.Create,
									order: 1,
								},
							},
							{
								id: C.$XX.TerminalTabContext,
								item: {
									command: {
										id: a.TerminalCommandId.MoveToEditor,
										title: c.$hUc.moveToEditor.value,
									},
									group: g.Create,
									order: 2,
								},
							},
							{
								id: C.$XX.TerminalTabContext,
								item: {
									command: {
										id: a.TerminalCommandId.MoveIntoNewWindow,
										title: c.$hUc.moveIntoNewWindow.value,
									},
									group: g.Create,
									order: 2,
								},
							},
							{
								id: C.$XX.TerminalTabContext,
								item: {
									command: {
										id: a.TerminalCommandId.RenameActiveTab,
										title: (0, E.localize)(10115, null),
									},
									group: g.Edit,
								},
							},
							{
								id: C.$XX.TerminalTabContext,
								item: {
									command: {
										id: a.TerminalCommandId.ChangeIconActiveTab,
										title: (0, E.localize)(10116, null),
									},
									group: g.Edit,
								},
							},
							{
								id: C.$XX.TerminalTabContext,
								item: {
									command: {
										id: a.TerminalCommandId.ChangeColorActiveTab,
										title: (0, E.localize)(10117, null),
									},
									group: g.Edit,
								},
							},
							{
								id: C.$XX.TerminalTabContext,
								item: {
									command: {
										id: a.TerminalCommandId.SizeToContentWidth,
										title: c.$hUc.toggleSizeToContentWidth,
									},
									group: g.Edit,
								},
							},
							{
								id: C.$XX.TerminalTabContext,
								item: {
									command: {
										id: a.TerminalCommandId.JoinActiveTab,
										title: (0, E.localize)(10118, null),
									},
									when: h.TerminalContextKeys.tabsSingularSelection.toNegated(),
									group: g.Config,
								},
							},
							{
								id: C.$XX.TerminalTabContext,
								item: {
									command: {
										id: a.TerminalCommandId.Unsplit,
										title: c.$hUc.unsplit.value,
									},
									when: d.$Kj.and(
										h.TerminalContextKeys.tabsSingularSelection,
										h.TerminalContextKeys.splitTerminal,
									),
									group: g.Config,
								},
							},
							{
								id: C.$XX.TerminalTabContext,
								item: {
									command: {
										id: a.TerminalCommandId.KillActiveTab,
										title: c.$hUc.kill.value,
									},
									group: g.Kill,
								},
							},
						]),
						C.$ZX.appendMenuItem(C.$XX.EditorTitleContext, {
							command: {
								id: a.TerminalCommandId.MoveToTerminalPanel,
								title: c.$hUc.moveToTerminalPanel,
							},
							when: r.$BQb.Scheme.isEqualTo(w.Schemas.vscodeTerminal),
							group: "2_files",
						}),
						C.$ZX.appendMenuItem(C.$XX.EditorTitleContext, {
							command: { id: a.TerminalCommandId.Rename, title: c.$hUc.rename },
							when: r.$BQb.Scheme.isEqualTo(w.Schemas.vscodeTerminal),
							group: "2_files",
						}),
						C.$ZX.appendMenuItem(C.$XX.EditorTitleContext, {
							command: {
								id: a.TerminalCommandId.ChangeColor,
								title: c.$hUc.changeColor,
							},
							when: r.$BQb.Scheme.isEqualTo(w.Schemas.vscodeTerminal),
							group: "2_files",
						}),
						C.$ZX.appendMenuItem(C.$XX.EditorTitleContext, {
							command: {
								id: a.TerminalCommandId.ChangeIcon,
								title: c.$hUc.changeIcon,
							},
							when: r.$BQb.Scheme.isEqualTo(w.Schemas.vscodeTerminal),
							group: "2_files",
						}),
						C.$ZX.appendMenuItem(C.$XX.EditorTitleContext, {
							command: {
								id: a.TerminalCommandId.SizeToContentWidth,
								title: c.$hUc.toggleSizeToContentWidth,
							},
							when: r.$BQb.Scheme.isEqualTo(w.Schemas.vscodeTerminal),
							group: "2_files",
						}),
						C.$ZX.appendMenuItem(C.$XX.EditorTitle, {
							command: {
								id: a.TerminalCommandId.CreateTerminalEditorSameGroup,
								title: c.$hUc.new,
								icon: i.$ak.plus,
							},
							alt: {
								id: a.TerminalCommandId.Split,
								title: c.$hUc.split.value,
								icon: i.$ak.splitHorizontal,
							},
							group: "navigation",
							order: 0,
							when: r.$BQb.Scheme.isEqualTo(w.Schemas.vscodeTerminal),
						});
				}
				function f(b, s, l, y, $, v) {
					let S = [],
						I = [];
					s = s.filter((M) => !M.isAutoDetected);
					const T =
						b === m.TerminalLocation.Editor ||
						(typeof b == "object" &&
							"viewColumn" in b &&
							b.viewColumn === n.$JY)
							? { viewColumn: n.$KY }
							: { splitActiveTerminal: !0 };
					for (const M of s) {
						const N = M.profileName === l,
							A = { config: M, location: b },
							R = { config: M, location: T },
							O = M.profileName.replace(/[\n\r\t]/g, "");
						S.push(
							new t.$rj(
								a.TerminalCommandId.NewWithProfile,
								N ? (0, E.localize)(10119, null, O) : O,
								void 0,
								!0,
								async () => {
									const B = await $.createTerminal(A);
									$.setActiveInstance(B), await $.focusActiveInstance();
								},
							),
						),
							I.push(
								new t.$rj(
									a.TerminalCommandId.Split,
									N ? (0, E.localize)(10120, null, O) : O,
									void 0,
									!0,
									async () => {
										const B = await $.createTerminal(R);
										$.setActiveInstance(B), await $.focusActiveInstance();
									},
								),
							);
					}
					for (const M of y) {
						const A =
							M.title === l
								? (0, E.localize)(10121, null, M.title.replace(/[\n\r\t]/g, ""))
								: M.title.replace(/[\n\r\t]/g, "");
						S.push(
							new t.$rj("contributed", A, void 0, !0, () =>
								$.createTerminal({
									config: {
										extensionIdentifier: M.extensionIdentifier,
										id: M.id,
										title: A,
									},
									location: b,
								}),
							),
						),
							I.push(
								new t.$rj("contributed-split", A, void 0, !0, () =>
									$.createTerminal({
										config: {
											extensionIdentifier: M.extensionIdentifier,
											id: M.id,
											title: A,
										},
										location: T,
									}),
								),
							);
					}
					const P = S.find((M) => M.label.endsWith("(Default)"));
					P &&
						((S = S.filter((M) => M !== P).sort((M, N) =>
							M.label.localeCompare(N.label),
						)),
						S.unshift(P)),
						S.length > 0 &&
							(S.push(
								new t.$uj("split.profile", (0, E.localize)(10122, null), I),
							),
							S.push(new t.$tj()));
					const k = v.getActions();
					S.push(...t.$tj.join(...k.map((M) => M[1])));
					const L = I.find((M) => M.label.endsWith("(Default)"));
					return (
						L &&
							((I = I.filter((M) => M !== L).sort((M, N) =>
								M.label.localeCompare(N.label),
							)),
							I.unshift(L)),
						{
							dropdownAction: new t.$rj(
								"refresh profiles",
								(0, E.localize)(10123, null),
								"codicon-chevron-down",
								!0,
							),
							dropdownMenuActions: S,
							className: `terminal-tab-actions-${$.resolveLocation(b)}`,
						}
					);
				}
			},
		),
		define(
			de[1802],
			he([1, 0, 4, 392, 132, 107, 31, 145, 35, 26, 689, 514, 469, 117, 18, 5]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				var p;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$iUc = void 0);
				let o = [],
					f = class extends i.$GLb {
						static {
							p = this;
						}
						static {
							this.PREFIX = "term ";
						}
						constructor(s, l, y, $, v, S, I) {
							super(p.PREFIX, { canAcceptInBackground: !0 }),
								(this.a = s),
								(this.b = l),
								(this.h = y),
								(this.j = $),
								(this.m = v),
								(this.n = S),
								(this.q = I);
						}
						g(s) {
							(o = []), o.push({ type: "separator", label: "panel" });
							const l = this.j.groups;
							for (let S = 0; S < l.length; S++) {
								const I = l[S];
								for (let T = 0; T < I.terminalInstances.length; T++) {
									const P = I.terminalInstances[T],
										k = this.s(P, T, s, {
											groupIndex: S,
											groupSize: I.terminalInstances.length,
										});
									k && o.push(k);
								}
							}
							o.length > 0 && o.push({ type: "separator", label: "editor" });
							const y = this.h.instances;
							for (let S = 0; S < y.length; S++) {
								const I = y[S];
								I.target = c.TerminalLocation.Editor;
								const T = this.s(I, S, s);
								T && o.push(T);
							}
							o.length > 0 && o.push({ type: "separator" });
							const $ = (0, t.localize)(10139, null);
							o.push({
								label: `$(plus) ${$}`,
								ariaLabel: $,
								accept: () => this.m.executeCommand(d.TerminalCommandId.New),
							});
							const v = (0, t.localize)(10140, null);
							return (
								o.push({
									label: `$(plus) ${v}`,
									ariaLabel: v,
									accept: () =>
										this.m.executeCommand(d.TerminalCommandId.NewWithProfile),
								}),
								o
							);
						}
						s(s, l, y, $) {
							const v = this.q.invokeFunction(a.$Tnc, s),
								S = $
									? $.groupSize > 1
										? `${$.groupIndex + 1}.${l + 1}`
										: `${$.groupIndex + 1}`
									: `${l + 1}`,
								I = `$(${v}) ${S}: ${s.title}`,
								T = [],
								P = (0, a.$Onc)(s);
							P && T.push(P);
							const k = (0, a.$Snc)(s, this.n.getColorTheme().type);
							k && T.push(...k);
							const L = (0, w.$Zk)(y, I, !0);
							if (L)
								return {
									label: I,
									description: s.description,
									highlights: { label: L },
									buttons: [
										{
											iconClass: r.ThemeIcon.asClassName(u.$WHb),
											tooltip: (0, t.localize)(10141, null),
										},
										{
											iconClass: r.ThemeIcon.asClassName(u.$XHb),
											tooltip: h.$hUc.kill.value,
										},
									],
									iconClasses: T,
									trigger: (D) => {
										switch (D) {
											case 0:
												return (
													this.m.executeCommand(d.TerminalCommandId.Rename, s),
													i.TriggerAction.NO_ACTION
												);
											case 1:
												return (
													this.b.safeDisposeTerminal(s),
													i.TriggerAction.REMOVE_ITEM
												);
										}
										return i.TriggerAction.NO_ACTION;
									},
									accept: (D, M) => {
										if (s.target === c.TerminalLocation.Editor) {
											const N = this.a.findEditors(s.resource);
											this.h.openEditor(s, { viewColumn: N?.[0].groupId }),
												this.h.setActiveInstance(s);
										} else
											this.j.showPanel(!M.inBackground),
												this.j.setActiveInstance(s);
									},
								};
						}
					};
				(e.$iUc = f),
					(e.$iUc =
						f =
						p =
							Ne(
								[
									j(0, n.$IY),
									j(1, E.$iIb),
									j(2, E.$kIb),
									j(3, E.$lIb),
									j(4, C.$ek),
									j(5, m.$iP),
									j(6, g.$Li),
								],
								f,
							));
			},
		),
		define(
			de[3269],
			he([1, 0, 261, 211, 25, 774, 358, 44, 18, 23, 73, 807, 117, 3148]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Seb = e.$Reb = void 0),
					(e.$Reb = "remoteterminal");
				let n = class {
					get onPtyHostExit() {
						return this.b.listen(
							c.RemoteTerminalChannelEvent.OnPtyHostExitEvent,
						);
					}
					get onPtyHostStart() {
						return this.b.listen(
							c.RemoteTerminalChannelEvent.OnPtyHostStartEvent,
						);
					}
					get onPtyHostUnresponsive() {
						return this.b.listen(
							c.RemoteTerminalChannelEvent.OnPtyHostUnresponsiveEvent,
						);
					}
					get onPtyHostResponsive() {
						return this.b.listen(
							c.RemoteTerminalChannelEvent.OnPtyHostResponsiveEvent,
						);
					}
					get onPtyHostRequestResolveVariables() {
						return this.b.listen(
							c.RemoteTerminalChannelEvent
								.OnPtyHostRequestResolveVariablesEvent,
						);
					}
					get onProcessData() {
						return this.b.listen(
							c.RemoteTerminalChannelEvent.OnProcessDataEvent,
						);
					}
					get onProcessExit() {
						return this.b.listen(
							c.RemoteTerminalChannelEvent.OnProcessExitEvent,
						);
					}
					get onProcessReady() {
						return this.b.listen(
							c.RemoteTerminalChannelEvent.OnProcessReadyEvent,
						);
					}
					get onProcessReplay() {
						return this.b.listen(
							c.RemoteTerminalChannelEvent.OnProcessReplayEvent,
						);
					}
					get onProcessOrphanQuestion() {
						return this.b.listen(
							c.RemoteTerminalChannelEvent.OnProcessOrphanQuestion,
						);
					}
					get onExecuteCommand() {
						return this.b.listen(c.RemoteTerminalChannelEvent.OnExecuteCommand);
					}
					get onDidRequestDetach() {
						return this.b.listen(
							c.RemoteTerminalChannelEvent.OnDidRequestDetach,
						);
					}
					get onDidChangeProperty() {
						return this.b.listen(
							c.RemoteTerminalChannelEvent.OnDidChangeProperty,
						);
					}
					constructor(p, o, f, b, s, l, y, $, v, S) {
						(this.a = p),
							(this.b = o),
							(this.c = f),
							(this.d = b),
							(this.e = s),
							(this.f = l),
							(this.g = y),
							(this.h = $),
							(this.i = v),
							(this.j = S);
					}
					restartPtyHost() {
						return this.b.call(
							c.RemoteTerminalChannelRequest.RestartPtyHost,
							[],
						);
					}
					async createProcess(p, o, f, b, s, l, y, $) {
						await this.c.whenRemoteConfigurationLoaded();
						const v = Object.create(null),
							S = f ? (this.d.getWorkspaceFolder(f) ?? void 0) : void 0;
						let I;
						try {
							I = (
								await this.e.resolveAnyMap(S, {
									shellLaunchConfig: p,
									configuration: o,
								})
							).resolvedVariables;
						} catch (R) {
							this.h.error(R);
						}
						if (I)
							for (const [R, O] of I.entries())
								(/^config:/.test(R) ||
									R === "selectedText" ||
									R === "lineNumber") &&
									(v[R] = O);
						const T = [];
						for (const [R, O] of this.f.collections.entries())
							T.push([R, (0, E.$_J)(O.map), (0, E.$aK)(O.descriptionMap)]);
						const P = await this.g.resolveAuthority(this.a),
							k = P.options && P.options.extensionHostEnv,
							L = this.d.getWorkspace(),
							D = L.folders,
							M = f ? this.d.getWorkspaceFolder(f) : null,
							N = d.$A1.getOriginalUri(this.i.activeEditor, {
								supportSideBySide: d.SideBySideEditor.PRIMARY,
								filterByScheme: [
									r.Schemas.file,
									r.Schemas.vscodeUserData,
									r.Schemas.vscodeRemote,
								],
							}),
							A = {
								configuration: o,
								resolvedVariables: v,
								envVariableCollections: T,
								shellLaunchConfig: p,
								workspaceId: L.id,
								workspaceName: this.j.getWorkspaceLabel(L),
								workspaceFolders: D,
								activeWorkspaceFolder: M,
								activeFileResource: N,
								shouldPersistTerminal: s,
								options: b,
								cols: l,
								rows: y,
								unicodeVersion: $,
								resolverEnv: k,
							};
						return await this.b.call(
							c.RemoteTerminalChannelRequest.CreateProcess,
							A,
						);
					}
					requestDetachInstance(p, o) {
						return this.b.call(
							c.RemoteTerminalChannelRequest.RequestDetachInstance,
							[p, o],
						);
					}
					acceptDetachInstanceReply(p, o) {
						return this.b.call(
							c.RemoteTerminalChannelRequest.AcceptDetachInstanceReply,
							[p, o],
						);
					}
					attachToProcess(p) {
						return this.b.call(c.RemoteTerminalChannelRequest.AttachToProcess, [
							p,
						]);
					}
					detachFromProcess(p, o) {
						return this.b.call(
							c.RemoteTerminalChannelRequest.DetachFromProcess,
							[p, o],
						);
					}
					listProcesses() {
						return this.b.call(c.RemoteTerminalChannelRequest.ListProcesses);
					}
					getLatency() {
						return this.b.call(c.RemoteTerminalChannelRequest.GetLatency);
					}
					getPerformanceMarks() {
						return this.b.call(
							c.RemoteTerminalChannelRequest.GetPerformanceMarks,
						);
					}
					reduceConnectionGraceTime() {
						return this.b.call(
							c.RemoteTerminalChannelRequest.ReduceConnectionGraceTime,
						);
					}
					processBinary(p, o) {
						return this.b.call(c.RemoteTerminalChannelRequest.ProcessBinary, [
							p,
							o,
						]);
					}
					start(p) {
						return this.b.call(c.RemoteTerminalChannelRequest.Start, [p]);
					}
					input(p, o) {
						return this.b.call(c.RemoteTerminalChannelRequest.Input, [p, o]);
					}
					acknowledgeDataEvent(p, o) {
						return this.b.call(
							c.RemoteTerminalChannelRequest.AcknowledgeDataEvent,
							[p, o],
						);
					}
					setUnicodeVersion(p, o) {
						return this.b.call(
							c.RemoteTerminalChannelRequest.SetUnicodeVersion,
							[p, o],
						);
					}
					shutdown(p, o) {
						return this.b.call(c.RemoteTerminalChannelRequest.Shutdown, [p, o]);
					}
					resize(p, o, f) {
						return this.b.call(c.RemoteTerminalChannelRequest.Resize, [
							p,
							o,
							f,
						]);
					}
					clearBuffer(p) {
						return this.b.call(c.RemoteTerminalChannelRequest.ClearBuffer, [p]);
					}
					getInitialCwd(p) {
						return this.b.call(c.RemoteTerminalChannelRequest.GetInitialCwd, [
							p,
						]);
					}
					getCwd(p) {
						return this.b.call(c.RemoteTerminalChannelRequest.GetCwd, [p]);
					}
					orphanQuestionReply(p) {
						return this.b.call(
							c.RemoteTerminalChannelRequest.OrphanQuestionReply,
							[p],
						);
					}
					sendCommandResult(p, o, f) {
						return this.b.call(
							c.RemoteTerminalChannelRequest.SendCommandResult,
							[p, o, f],
						);
					}
					freePortKillProcess(p) {
						return this.b.call(
							c.RemoteTerminalChannelRequest.FreePortKillProcess,
							[p],
						);
					}
					installAutoReply(p, o) {
						return this.b.call(
							c.RemoteTerminalChannelRequest.InstallAutoReply,
							[p, o],
						);
					}
					uninstallAllAutoReplies() {
						return this.b.call(
							c.RemoteTerminalChannelRequest.UninstallAllAutoReplies,
							[],
						);
					}
					getDefaultSystemShell(p) {
						return this.b.call(
							c.RemoteTerminalChannelRequest.GetDefaultSystemShell,
							[p],
						);
					}
					getProfiles(p, o, f) {
						return this.b.call(c.RemoteTerminalChannelRequest.GetProfiles, [
							this.d.getWorkspace().id,
							p,
							o,
							f,
						]);
					}
					acceptPtyHostResolvedVariables(p, o) {
						return this.b.call(
							c.RemoteTerminalChannelRequest.AcceptPtyHostResolvedVariables,
							[p, o],
						);
					}
					getEnvironment() {
						return this.b.call(c.RemoteTerminalChannelRequest.GetEnvironment);
					}
					getWslPath(p, o) {
						return this.b.call(c.RemoteTerminalChannelRequest.GetWslPath, [
							p,
							o,
						]);
					}
					setTerminalLayoutInfo(p) {
						const f = {
							workspaceId: this.d.getWorkspace().id,
							tabs: p ? p.tabs : [],
						};
						return this.b.call(
							c.RemoteTerminalChannelRequest.SetTerminalLayoutInfo,
							f,
						);
					}
					updateTitle(p, o, f) {
						return this.b.call(c.RemoteTerminalChannelRequest.UpdateTitle, [
							p,
							o,
							f,
						]);
					}
					updateIcon(p, o, f, b) {
						return this.b.call(c.RemoteTerminalChannelRequest.UpdateIcon, [
							p,
							o,
							f,
							b,
						]);
					}
					refreshProperty(p, o) {
						return this.b.call(c.RemoteTerminalChannelRequest.RefreshProperty, [
							p,
							o,
						]);
					}
					updateProperty(p, o, f) {
						return this.b.call(c.RemoteTerminalChannelRequest.UpdateProperty, [
							p,
							o,
							f,
						]);
					}
					getTerminalLayoutInfo() {
						const o = { workspaceId: this.d.getWorkspace().id };
						return this.b.call(
							c.RemoteTerminalChannelRequest.GetTerminalLayoutInfo,
							o,
						);
					}
					reviveTerminalProcesses(p, o, f) {
						return this.b.call(
							c.RemoteTerminalChannelRequest.ReviveTerminalProcesses,
							[p, o, f],
						);
					}
					getRevivedPtyNewId(p) {
						return this.b.call(
							c.RemoteTerminalChannelRequest.GetRevivedPtyNewId,
							[p],
						);
					}
					serializeTerminalState(p) {
						return this.b.call(
							c.RemoteTerminalChannelRequest.SerializeTerminalState,
							[p],
						);
					}
				};
				(e.$Seb = n),
					(e.$Seb = n =
						Ne(
							[
								j(2, t.$RZ),
								j(3, w.$Vi),
								j(4, C.$zeb),
								j(5, a.$ceb),
								j(6, i.$3l),
								j(7, h.$YJ),
								j(8, m.$IY),
								j(9, u.$3N),
							],
							n,
						));
			},
		),
		define(
			de[3270],
			he([1, 0, 7, 6, 4, 63, 107, 3, 15, 473, 997, 513, 73, 19, 5, 178]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$sWc = void 0);
				let p = class extends d.$Zc {
					constructor(f, b, s, l) {
						super(),
							(this.j = f),
							(this.m = b),
							(this.n = s),
							(this.a = new m.$Hh()),
							(this.h = this.add(new i.$re())),
							(this.onDidRequestMoreLinks = this.h.event),
							(this.u = !1),
							(this.b = this.add(l.createInstance(r.$k9b)));
					}
					async show(f, b) {
						this.c = f;
						const s = await Promise.race([b.all, (0, m.$Nh)(500)]),
							l = typeof s == "object",
							y = l ? s : b.viewport,
							$ = y.wordLinks ? await this.q(y.wordLinks) : void 0,
							v = y.fileLinks ? await this.q(y.fileLinks) : void 0,
							S = y.folderLinks ? await this.q(y.folderLinks) : void 0,
							I = y.webLinks ? await this.q(y.webLinks) : void 0,
							T = [];
						I &&
							(T.push({
								type: "separator",
								label: (0, w.localize)(10546, null),
							}),
							T.push(...I)),
							v &&
								(T.push({
									type: "separator",
									label: (0, w.localize)(10547, null),
								}),
								T.push(...v)),
							S &&
								(T.push({
									type: "separator",
									label: (0, w.localize)(10548, null),
								}),
								T.push(...S)),
							$ &&
								(T.push({
									type: "separator",
									label: (0, w.localize)(10549, null),
								}),
								T.push(...$));
						const P = this.m.createQuickPick({ useSeparators: !0 }),
							k = new d.$Zc();
						k.add(P),
							(P.items = T),
							(P.placeholder = (0, w.localize)(10550, null)),
							(P.sortByLabel = !1),
							P.show(),
							P.activeItems.length > 0 && this.s(P.activeItems[0]);
						let L = !1;
						return (
							l ||
								k.add(
									i.Event.once(P.onDidChangeValue)(async () => {
										const D = await b.all;
										if (L) return;
										const M = [
												...(D.fileLinks ?? []),
												...(D.folderLinks ?? []),
												...(D.webLinks ?? []),
											],
											N = D.wordLinks ? await this.q(D.wordLinks, M) : void 0,
											A = D.fileLinks ? await this.q(D.fileLinks) : void 0,
											R = D.folderLinks ? await this.q(D.folderLinks) : void 0,
											O = D.webLinks ? await this.q(D.webLinks) : void 0,
											B = [];
										O &&
											(B.push({
												type: "separator",
												label: (0, w.localize)(10551, null),
											}),
											B.push(...O)),
											A &&
												(B.push({
													type: "separator",
													label: (0, w.localize)(10552, null),
												}),
												B.push(...A)),
											R &&
												(B.push({
													type: "separator",
													label: (0, w.localize)(10553, null),
												}),
												B.push(...R)),
											N &&
												(B.push({
													type: "separator",
													label: (0, w.localize)(10554, null),
												}),
												B.push(...N)),
											(P.items = B);
									}),
								),
							k.add(
								P.onDidChangeActive(async () => {
									const [D] = P.activeItems;
									this.s(D);
								}),
							),
							new Promise((D) => {
								k.add(
									P.onDidHide(({ reason: M }) => {
										if (this.u) {
											const N = this.c?.xterm?.markTracker;
											N && (N.restoreScrollState(), N.clear(), (this.u = !1));
										}
										M === E.QuickInputHideReason.Gesture && this.b.restore(),
											k.dispose(),
											P.selectedItems.length === 0 &&
												this.n.showLastProvider(
													g.AccessibleViewProviderId.Terminal,
												),
											D();
									}),
								),
									k.add(
										i.Event.once(P.onDidAccept)(() => {
											if (this.u) {
												const A = this.c?.xterm?.markTracker;
												A && (A.restoreScrollState(), A.clear(), (this.u = !1));
											}
											L = !0;
											const M = new C.$oIb(t.$$gb.CLICK),
												N = P.activeItems?.[0];
											N && "link" in N && N.link.activate(M, N.label),
												k.dispose(),
												D();
										}),
									);
							})
						);
					}
					async q(f, b) {
						if (!f) return;
						const s = new Set(),
							l = new Set(),
							y = [];
						for (const $ of f) {
							let v = $.text;
							if (!s.has(v) && (!b || !b.some((S) => S.text === v))) {
								s.add(v);
								let S;
								if ("uri" in $ && $.uri) {
									if (
										(($.type === a.TerminalBuiltinLinkType.LocalFile ||
											$.type ===
												a.TerminalBuiltinLinkType.LocalFolderInWorkspace ||
											$.type ===
												a.TerminalBuiltinLinkType
													.LocalFolderOutsideWorkspace) &&
											((v = (0, c.$jh)($.uri)),
											(S = this.j.getUriLabel((0, c.$mh)($.uri), {
												relative: !0,
											}))),
										$.type === a.TerminalBuiltinLinkType.LocalFile &&
											$.parsedLink?.suffix?.row !== void 0 &&
											((v += `:${$.parsedLink.suffix.row}`),
											$.parsedLink?.suffix?.rowEnd !== void 0 &&
												(v += `-${$.parsedLink.suffix.rowEnd}`),
											$.parsedLink?.suffix?.col !== void 0 &&
												((v += `:${$.parsedLink.suffix.col}`),
												$.parsedLink?.suffix?.colEnd !== void 0 &&
													(v += `-${$.parsedLink.suffix.colEnd}`))),
										l.has(v + "|" + (S ?? "")))
									)
										continue;
									l.add(v + "|" + (S ?? ""));
								}
								y.push({ label: v, link: $, description: S });
							}
						}
						return y.length > 0 ? y : void 0;
					}
					s(f) {
						if (!f || !("link" in f) || !f.link) return;
						const b = f.link;
						this.w(b),
							!(!("uri" in b) || !b.uri) &&
								b.type === a.TerminalBuiltinLinkType.LocalFile &&
								this.t(b);
					}
					t(f) {
						const b = f.parsedLink ? f.parsedLink.suffix : (0, u.$zoc)(f.text),
							s =
								b?.row === void 0
									? void 0
									: {
											startLineNumber: b.row ?? 1,
											startColumn: b.col ?? 1,
											endLineNumber: b.rowEnd,
											endColumn: b.colEnd,
										};
						this.b.set(),
							this.a.queue(async () => {
								await this.b.openTransientEditor({
									resource: f.uri,
									options: {
										preserveFocus: !0,
										revealIfOpened: !0,
										ignoreError: !0,
										selection: s,
									},
								});
							});
					}
					w(f) {
						const b = this.c?.xterm;
						b &&
							(this.u || (b.markTracker.saveScrollState(), (this.u = !0)),
							b.markTracker.revealRange(f.range));
					}
				};
				(e.$sWc = p),
					(e.$sWc = p =
						Ne([j(0, h.$3N), j(1, E.$DJ), j(2, g.$HLb), j(3, n.$Li)], p));
			},
		),
		define(
			de[3271],
			he([
				1, 0, 24, 33, 6, 103, 3, 77, 28, 4, 10, 8, 5, 40, 326, 21, 68, 174, 443,
				3179, 810, 515, 3177, 259, 380, 420, 381, 185, 18,
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
					(e.$LLc = void 0);
				let k = class extends C.$1c {
					constructor(D, M, N, A, R, O, B, U, z, F) {
						super(),
							(this.y = N),
							(this.z = A),
							(this.C = R),
							(this.F = O),
							(this.G = B),
							(this.H = U),
							(this.I = z),
							(this.J = F),
							(this.g = (0, d.observableValue)("testControllers", new Map())),
							(this.h = new Set()),
							(this.j = new w.$re()),
							(this.m = new w.$re()),
							(this.n = new w.$re()),
							(this.q = new Set()),
							(this.w = new Map()),
							(this.onWillProcessDiff = this.m.event),
							(this.onDidProcessDiff = this.n.event),
							(this.onDidCancelTestRun = this.j.event),
							(this.collection = new b.$KLc(
								this.y,
								this.expandTest.bind(this),
							)),
							(this.showInlineOutput = this.D(
								s.$qqc.stored(
									new l.$oqc(
										{
											key: "inlineTestOutputVisible",
											scope: g.StorageScope.WORKSPACE,
											target: g.StorageTarget.USER,
										},
										this.z,
									),
									!0,
								),
							)),
							(this.excluded = M.createInstance(y.$rqc)),
							(this.s = v.TestingContextKeys.isRefreshingTests.bindTo(D)),
							(this.u = v.TestingContextKeys.activeEditorHasTests.bindTo(D)),
							this.D(
								(0, n.$Nwb)(
									v.TestingContextKeys.providerCount,
									D,
									(H) => this.g.read(H).size,
								),
							);
						const x = (H, q) =>
							this.D(
								(0, n.$Nwb)(H, D, (V) =>
									E.Iterable.some(
										this.g.read(V).values(),
										(G) => !!(G.capabilities.read(V) & q),
									),
								),
							);
						x(
							v.TestingContextKeys.canRefreshTests,
							T.TestControllerCapability.Refresh,
						),
							x(
								v.TestingContextKeys.canGoToRelatedCode,
								T.TestControllerCapability.CodeRelatedToTest,
							),
							x(
								v.TestingContextKeys.canGoToRelatedTest,
								T.TestControllerCapability.TestRelatedToCode,
							),
							this.D(R.onDidActiveEditorChange(() => this.L()));
					}
					async expandTest(D, M) {
						await this.g
							.get()
							.get($.$k4.fromString(D).controllerId)
							?.expandTest(D, M);
					}
					cancelTestRun(D, M) {
						if ((this.j.fire({ runId: D, taskId: M }), D === void 0))
							for (const N of this.w.values()) N.cancel();
						else M || this.w.get(D)?.cancel();
					}
					async runTests(D, M = i.CancellationToken.None) {
						const N = [];
						for (const R of D.tests) {
							const O = N.find((z) => (0, S.$Cqc)(z.profile, R));
							if (O) {
								O.tests.push(R);
								continue;
							}
							const B = this.F.getControllerProfiles(R.controllerId).filter(
									(z) => (z.group & D.group) !== 0 && (0, S.$Cqc)(z, R),
								),
								U = B.find((z) => z.isDefault) || B[0];
							U && N.push({ profile: U, tests: [R] });
						}
						const A = {
							targets: N.map(({ profile: R, tests: O }) => ({
								profileId: R.profileId,
								controllerId: O[0].controllerId,
								testIds: O.map((B) => B.item.extId),
							})),
							group: D.group,
							exclude: D.exclude?.map((R) => R.item.extId),
							continuous: D.continuous,
						};
						if (A.targets.length === 0)
							for (const R of (0, t.$Db)(D.tests, (O, B) =>
								O.controllerId === B.controllerId ? 0 : 1,
							)) {
								const O = this.F.getControllerProfiles(R[0].controllerId),
									B = R.map((U) => ({
										profile: O.find(
											(z) => z.group === D.group && (0, S.$Cqc)(z, U),
										),
										test: U,
									}));
								for (const U of (0, t.$Db)(B, (z, F) =>
									z.profile === F.profile ? 0 : 1,
								)) {
									const z = U[0].profile;
									z &&
										A.targets.push({
											testIds: U.map((F) => F.test.item.extId),
											profileId: z.profileId,
											controllerId: z.controllerId,
										});
								}
							}
						return this.runResolvedTests(A, M);
					}
					async startContinuousRun(D, M) {
						if (
							(D.exclude || (D.exclude = [...this.excluded.all]),
							!(await this.J.requestWorkspaceTrust({
								message: (0, r.localize)(10947, null),
							})))
						)
							return;
						const R = (0, t.$Db)(D.targets, (O, B) =>
							O.controllerId.localeCompare(B.controllerId),
						).map((O) =>
							this.getTestController(O[0].controllerId)
								?.startContinuousRun(
									O.map((B) => ({
										excludeExtIds: D.exclude.filter(
											(U) => !B.testIds.includes(U),
										),
										profileId: B.profileId,
										controllerId: B.controllerId,
										testIds: B.testIds,
									})),
									M,
								)
								.then((B) => {
									const U = B.map((z) => z.error).filter(m.$tg);
									U.length &&
										this.G.error((0, r.localize)(10948, null, U.join(" ")));
								}),
						);
						await Promise.all(R);
					}
					async runResolvedTests(D, M = i.CancellationToken.None) {
						D.exclude || (D.exclude = [...this.excluded.all]);
						const N = this.I.createLiveResult(D);
						if (
							!(await this.J.requestWorkspaceTrust({
								message: (0, r.localize)(10949, null),
							}))
						)
							return N.markComplete(), N;
						try {
							const R = new i.$Ce(M);
							this.w.set(N.id, R);
							const B = (0, t.$Db)(D.targets, (U, z) =>
								U.controllerId.localeCompare(z.controllerId),
							).map((U) =>
								this.getTestController(U[0].controllerId)
									?.runTests(
										U.map((z) => ({
											runId: N.id,
											excludeExtIds: D.exclude.filter(
												(F) => !z.testIds.includes(F),
											),
											profileId: z.profileId,
											controllerId: z.controllerId,
											testIds: z.testIds,
										})),
										R.token,
									)
									.then((z) => {
										const F = z.map((x) => x.error).filter(m.$tg);
										F.length &&
											this.G.error((0, r.localize)(10950, null, F.join(" ")));
									}),
							);
							return await this.M(D), await Promise.all(B), N;
						} finally {
							this.w.delete(N.id), N.markComplete();
						}
					}
					async provideTestFollowups(D, M) {
						const N = await Promise.all(
								[...this.h].map(async (R) => ({
									ctrl: R,
									followups: await R.provideTestFollowups(D, M),
								})),
							),
							A = {
								followups: N.flatMap(({ ctrl: R, followups: O }) =>
									O.map((B) => ({
										message: B.title,
										execute: () => R.executeTestFollowup(B.id),
									})),
								),
								dispose: () => {
									for (const { ctrl: R, followups: O } of N)
										R.disposeTestFollowups(O.map((B) => B.id));
								},
							};
						return M.isCancellationRequested && A.dispose(), A;
					}
					publishDiff(D, M) {
						this.m.fire(M), this.collection.apply(M), this.L(), this.n.fire(M);
					}
					getTestController(D) {
						return this.g.get().get(D);
					}
					async syncTests() {
						const D = new i.$Ce();
						try {
							await Promise.all(
								[...this.g.get().values()].map((M) => M.syncTests(D.token)),
							);
						} finally {
							D.dispose(!0);
						}
					}
					async refreshTests(D) {
						const M = new i.$Ce();
						this.q.add(M), this.s.set(!0);
						try {
							D
								? await this.getTestController(D)?.refreshTests(M.token)
								: await Promise.all(
										[...this.g.get().values()].map((N) =>
											N.refreshTests(M.token),
										),
									);
						} finally {
							this.q.delete(M), this.s.set(this.q.size > 0), M.dispose(!0);
						}
					}
					cancelRefreshTests() {
						for (const D of this.q) D.cancel();
						this.q.clear(), this.s.set(!1);
					}
					registerExtHost(D) {
						return this.h.add(D), (0, C.$Yc)(() => this.h.delete(D));
					}
					async getTestsRelatedToCode(D, M, N = i.CancellationToken.None) {
						return (
							await Promise.all(
								[...this.h.values()].map((R) =>
									R.getTestsRelatedToCode(D, M, N),
								),
							)
						)
							.flatMap((R) => R.map((O) => this.collection.getNodeById(O)))
							.filter(m.$tg);
					}
					registerTestController(D, M) {
						return (
							this.g.set(new Map(this.g.get()).set(D, M), void 0),
							(0, C.$Yc)(() => {
								const N = [];
								for (const R of this.collection.rootItems)
									R.controllerId === D &&
										N.push({
											op: T.TestDiffOpType.Remove,
											itemId: R.item.extId,
										});
								this.publishDiff(D, N);
								const A = new Map(this.g.get());
								A.delete(D), this.g.set(A, void 0);
							})
						);
					}
					async getCodeRelatedToTest(D, M = i.CancellationToken.None) {
						return (
							(await this.g
								.get()
								.get(D.controllerId)
								?.getRelatedCode(D.item.extId, M)) || []
						);
					}
					L() {
						const D = this.C.activeEditor?.resource;
						D
							? this.u.set(!E.Iterable.isEmpty(this.collection.getNodeByUrl(D)))
							: this.u.set(!1);
					}
					async M(D, M = this.H, N = this.C) {
						if (D.preserveFocus === !0) return;
						(0, f.$RJc)(this.H, f.TestingConfigKeys.SaveBeforeTest) &&
							(await N.saveAll());
					}
				};
				(e.$LLc = k),
					(e.$LLc = k =
						Ne(
							[
								j(0, a.$6j),
								j(1, h.$Li),
								j(2, p.$Vl),
								j(3, g.$lq),
								j(4, P.$IY),
								j(5, S.$Bqc),
								j(6, c.$4N),
								j(7, u.$gj),
								j(8, I.$Kqc),
								j(9, o.$qO),
							],
							k,
						));
			},
		),
		define(
			de[3272],
			he([
				1, 0, 7, 279, 264, 97, 6, 3, 281, 17, 98, 64, 42, 255, 4, 92, 11, 8, 5,
				93, 21, 35, 3187, 1003, 18, 2504,
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
				var S;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$RYc = void 0),
					(c = mt(c)),
					(y = mt(y));
				var I;
				(function (L) {
					(L.Loading = "loading"), (L.Message = "message"), (L.Data = "data");
				})(I || (I = {}));
				class T {
					static store(D, M) {
						M.store(
							"typeHierarchyPeekLayout",
							JSON.stringify(D),
							s.StorageScope.PROFILE,
							s.StorageTarget.MACHINE,
						);
					}
					static retrieve(D) {
						const M = D.get(
								"typeHierarchyPeekLayout",
								s.StorageScope.PROFILE,
								"{}",
							),
							N = { ratio: 0.7, height: 17 };
						try {
							return { ...N, ...JSON.parse(M) };
						} catch {
							return N;
						}
					}
					constructor(D, M) {
						(this.ratio = D), (this.height = M);
					}
				}
				class P extends b.$FMb {}
				let k = class extends c.$9Mb {
					static {
						S = this;
					}
					static {
						this.TitleMenu = new p.$XX("typehierarchy/title");
					}
					constructor(D, M, N, A, R, O, B, U, z, F, x) {
						super(
							D,
							{
								showFrame: !0,
								showArrow: !0,
								isResizeable: !0,
								isAccessible: !0,
							},
							x,
						),
							(this.Z = M),
							(this.ab = N),
							(this.bb = R),
							(this.cb = O),
							(this.db = B),
							(this.eb = U),
							(this.fb = z),
							(this.gb = F),
							(this.hb = x),
							(this.i = new Map()),
							(this.Y = new d.$Zc()),
							this.create(),
							this.bb.addExclusiveWidget(D, this),
							this.ib(A.getColorTheme()),
							this.o.add(A.onDidColorThemeChange(this.ib, this)),
							this.o.add(this.Y);
					}
					dispose() {
						T.store(this.X, this.eb),
							this.c.dispose(),
							this.d.dispose(),
							this.m.dispose(),
							super.dispose();
					}
					get direction() {
						return this.ab;
					}
					ib(D) {
						const M = D.getColor(c.$aNb) || E.$UL.transparent;
						this.style({
							arrowColor: M,
							frameColor: M,
							headerBackgroundColor: D.getColor(c.$0Mb) || E.$UL.transparent,
							primaryHeadingColor: D.getColor(c.$$Mb),
							secondaryHeadingColor: D.getColor(c.$_Mb),
						});
					}
					P(D) {
						super.P(D, !0);
						const M = this.fb.createMenu(S.TitleMenu, this.gb),
							N = () => {
								const A = [];
								(0, g.$Kyb)(M, void 0, A),
									this.K.clear(),
									this.K.push(A, { label: !1, icon: !0 });
							};
						this.o.add(M), this.o.add(M.onDidChange(N)), N();
					}
					T(D) {
						(this.X = T.retrieve(this.eb)),
							(this.r = new t.$pgb(0, 0)),
							(this.a = D),
							D.classList.add("type-hierarchy");
						const M = document.createElement("div");
						M.classList.add("message"),
							D.appendChild(M),
							(this.b = M),
							(this.b.tabIndex = 0);
						const N = document.createElement("div");
						N.classList.add("results"),
							D.appendChild(N),
							(this.c = new i.$vob(N, {
								orientation: i.Orientation.HORIZONTAL,
							}));
						const A = document.createElement("div");
						A.classList.add("editor"), N.appendChild(A);
						const R = {
							scrollBeyondLastLine: !1,
							scrollbar: {
								verticalScrollbarSize: 14,
								horizontal: "auto",
								useShadows: !0,
								verticalHasArrows: !1,
								horizontalHasArrows: !1,
								alwaysConsumeMouseWheel: !1,
							},
							overviewRulerLanes: 2,
							fixedOverflowWidgets: !0,
							minimap: { enabled: !1 },
						};
						this.m = this.hb.createInstance(m.$wDb, A, R, {}, this.editor);
						const O = document.createElement("div");
						O.classList.add("tree"), N.appendChild(O);
						const B = {
							sorter: new y.$MYc(),
							accessibilityProvider: new y.$QYc(() => this.ab),
							identityProvider: new y.$NYc(() => this.ab),
							expandOnlyOnTwistieClick: !0,
							overrideStyles: { listBackground: c.$bNb },
						};
						(this.d = this.hb.createInstance(
							P,
							"TypeHierarchyPeek",
							O,
							new y.$PYc(),
							[this.hb.createInstance(y.$OYc)],
							this.hb.createInstance(y.$LYc, () => this.ab),
							B,
						)),
							this.c.addView(
								{
									onDidChange: C.Event.None,
									element: A,
									minimumSize: 200,
									maximumSize: Number.MAX_VALUE,
									layout: (U) => {
										this.r.height &&
											this.m.layout({ height: this.r.height, width: U });
									},
								},
								i.Sizing.Distribute,
							),
							this.c.addView(
								{
									onDidChange: C.Event.None,
									element: O,
									minimumSize: 100,
									maximumSize: Number.MAX_VALUE,
									layout: (U) => {
										this.r.height && this.d.layout(this.r.height, U);
									},
								},
								i.Sizing.Distribute,
							),
							this.o.add(
								this.c.onDidSashChange(() => {
									this.r.width &&
										(this.X.ratio = this.c.getViewSize(0) / this.r.width);
								}),
							),
							this.o.add(this.d.onDidChangeFocus(this.lb, this)),
							this.o.add(
								this.m.onMouseDown((U) => {
									const { event: z, target: F } = U;
									if (z.detail !== 2) return;
									const [x] = this.d.getFocus();
									x &&
										(this.dispose(),
										this.cb.openEditor({
											resource: x.item.uri,
											options: { selection: F.range },
										}));
								}),
							),
							this.o.add(
								this.d.onMouseDblClick((U) => {
									U.target !== w.TreeMouseEventTarget.Twistie &&
										U.element &&
										(this.dispose(),
										this.cb.openEditor({
											resource: U.element.item.uri,
											options: {
												selection: U.element.item.selectionRange,
												pinned: !0,
											},
										}));
								}),
							),
							this.o.add(
								this.d.onDidChangeSelection((U) => {
									const [z] = U.elements;
									z &&
										(0, t.$8gb)(U.browserEvent) &&
										(this.dispose(),
										this.cb.openEditor({
											resource: z.item.uri,
											options: { selection: z.item.selectionRange, pinned: !0 },
										}));
								}),
							);
					}
					async lb() {
						const [D] = this.d.getFocus();
						if (!D) return;
						this.Y.clear();
						const M = {
							description: "type-hierarchy-decoration",
							stickiness: a.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
							className: "type-decoration",
							overviewRuler: {
								color: (0, l.$jP)(c.$kNb),
								position: a.OverviewRulerLane.Center,
							},
						};
						let N;
						this.ab === $.TypeHierarchyDirection.Supertypes
							? (N = D.parent ? D.parent.item.uri : D.model.root.uri)
							: (N = D.item.uri);
						const A = await this.db.createModelReference(N);
						this.m.setModel(A.object.textEditorModel);
						const R = [];
						let O;
						const B = { uri: D.item.uri, range: D.item.selectionRange };
						if (
							(B.uri.toString() === N.toString() &&
								(R.push({ range: B.range, options: M }),
								(O = O ? r.$iL.plusRange(B.range, O) : B.range)),
							O)
						) {
							this.m.revealRangeInCenter(O, u.ScrollType.Immediate);
							const z = this.m.createDecorationsCollection(R);
							this.Y.add((0, d.$Yc)(() => z.clear()));
						}
						this.Y.add(A);
						const U =
							this.ab === $.TypeHierarchyDirection.Supertypes
								? (0, n.localize)(11040, null, D.model.root.name)
								: (0, n.localize)(11041, null, D.model.root.name);
						this.setTitle(U);
					}
					showLoading() {
						(this.a.dataset.state = I.Loading),
							this.setTitle((0, n.localize)(11042, null)),
							this.mb();
					}
					showMessage(D) {
						(this.a.dataset.state = I.Message),
							this.setTitle(""),
							this.setMetaTitle(""),
							(this.b.innerText = D),
							this.mb(),
							this.b.focus();
					}
					async showModel(D) {
						this.mb();
						const M = this.i.get(this.ab);
						await this.d.setInput(D, M);
						const N = this.d.getNode(D).children[0];
						await this.d.expand(N.element),
							N.children.length === 0
								? this.showMessage(
										this.ab === $.TypeHierarchyDirection.Supertypes
											? (0, n.localize)(11043, null, D.root.name)
											: (0, n.localize)(11044, null, D.root.name),
									)
								: ((this.a.dataset.state = I.Data),
									(!M || this.d.getFocus().length === 0) &&
										this.d.setFocus([N.children[0].element]),
									this.d.domFocus(),
									this.lb());
					}
					getModel() {
						return this.d.getInput();
					}
					getFocused() {
						return this.d.getFocus()[0];
					}
					async updateDirection(D) {
						const M = this.d.getInput();
						M &&
							D !== this.ab &&
							(this.i.set(this.ab, this.d.getViewState()),
							(this.ab = D),
							await this.showModel(M));
					}
					mb() {
						this.x ||
							(this.editor.revealLineInCenterIfOutsideViewport(
								this.Z.lineNumber,
								u.ScrollType.Smooth,
							),
							super.show(r.$iL.fromPositions(this.Z), this.X.height));
					}
					D(D) {
						this.r && this.W(this.r.height, D);
					}
					W(D, M) {
						(this.r.height !== D || this.r.width !== M) &&
							(super.W(D, M),
							(this.r = new t.$pgb(M, D)),
							(this.X.height = this.n ? this.n.heightInLines : this.X.height),
							this.c.layout(M),
							this.c.resizeView(0, M * this.X.ratio));
					}
				};
				(e.$RYc = k),
					(e.$RYc =
						k =
						S =
							Ne(
								[
									j(3, l.$iP),
									j(4, c.$7Mb),
									j(5, v.$IY),
									j(6, h.$MO),
									j(7, s.$lq),
									j(8, p.$YX),
									j(9, o.$6j),
									j(10, f.$Li),
								],
								k,
							));
			},
		),
		define(
			de[3273],
			he([
				1, 0, 33, 14, 29, 6, 27, 3, 46, 65, 17, 255, 4, 11, 8, 5, 43, 21, 3272,
				1003,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f, b) {
				"use strict";
				var s;
				Object.defineProperty(e, "__esModule", { value: !0 });
				const l = new n.$5j(
						"editorHasTypeHierarchyProvider",
						!1,
						(0, h.localize)(11030, null),
					),
					y = new n.$5j(
						"typeHierarchyVisible",
						!1,
						(0, h.localize)(11031, null),
					),
					$ = new n.$5j("typeHierarchyDirection", void 0, {
						type: "string",
						description: (0, h.localize)(11032, null),
					});
				function v(I) {
					return I === b.TypeHierarchyDirection.Subtypes ||
						I === b.TypeHierarchyDirection.Supertypes
						? I
						: b.TypeHierarchyDirection.Subtypes;
				}
				let S = class {
					static {
						s = this;
					}
					static {
						this.Id = "typeHierarchy";
					}
					static get(T) {
						return T.getContribution(s.Id);
					}
					static {
						this.a = "typeHierarchy/defaultDirection";
					}
					constructor(T, P, k, L, D) {
						(this._editor = T),
							(this.h = P),
							(this.i = k),
							(this.j = L),
							(this.k = D),
							(this.e = new d.$Zc()),
							(this.f = new d.$Zc()),
							(this.b = l.bindTo(this.h)),
							(this.c = y.bindTo(this.h)),
							(this.d = $.bindTo(this.h)),
							this.e.add(
								E.Event.any(
									T.onDidChangeModel,
									T.onDidChangeModelLanguage,
									b.$67.onDidChange,
								)(() => {
									this.b.set(T.hasModel() && b.$67.has(T.getModel()));
								}),
							),
							this.e.add(this.f);
					}
					dispose() {
						this.e.dispose();
					}
					async startTypeHierarchyFromEditor() {
						if ((this.f.clear(), !this._editor.hasModel())) return;
						const T = this._editor.getModel(),
							P = this._editor.getPosition();
						if (!b.$67.has(T)) return;
						const k = new t.$Ce(),
							L = b.$77.create(T, P, k.token),
							D = v(
								this.i.get(
									s.a,
									o.StorageScope.PROFILE,
									b.TypeHierarchyDirection.Subtypes,
								),
							);
						this.l(P, D, L, k);
					}
					l(T, P, k, L) {
						this.c.set(!0),
							this.d.set(P),
							E.Event.any(
								this._editor.onDidChangeModel,
								this._editor.onDidChangeModelLanguage,
							)(this.endTypeHierarchy, this, this.f),
							(this.g = this.k.createInstance(f.$RYc, this._editor, T, P)),
							this.g.showLoading(),
							this.f.add(
								this.g.onDidClose(() => {
									this.endTypeHierarchy(),
										this.i.store(
											s.a,
											this.g.direction,
											o.StorageScope.PROFILE,
											o.StorageTarget.USER,
										);
								}),
							),
							this.f.add({
								dispose() {
									L.dispose(!0);
								},
							}),
							this.f.add(this.g),
							k
								.then((D) => {
									L.token.isCancellationRequested ||
										(D
											? (this.f.add(D), this.g.showModel(D))
											: this.g.showMessage((0, h.localize)(11033, null)));
								})
								.catch((D) => {
									if ((0, w.$8)(D)) {
										this.endTypeHierarchy();
										return;
									}
									this.g.showMessage((0, h.localize)(11034, null));
								});
					}
					async startTypeHierarchyFromTypeHierarchy() {
						if (!this.g) return;
						const T = this.g.getModel(),
							P = this.g.getFocused();
						if (!P || !T) return;
						const k = await this.j.openCodeEditor(
							{ resource: P.item.uri },
							this._editor,
						);
						if (!k) return;
						const L = T.fork(P.item);
						this.f.clear(),
							s
								.get(k)
								?.l(
									u.$iL.lift(L.root.selectionRange).getStartPosition(),
									this.g.direction,
									Promise.resolve(L),
									new t.$Ce(),
								);
					}
					showSupertypes() {
						this.g?.updateDirection(b.TypeHierarchyDirection.Supertypes),
							this.d.set(b.TypeHierarchyDirection.Supertypes);
					}
					showSubtypes() {
						this.g?.updateDirection(b.TypeHierarchyDirection.Subtypes),
							this.d.set(b.TypeHierarchyDirection.Subtypes);
					}
					endTypeHierarchy() {
						this.f.clear(), this.c.set(!1), this._editor.focus();
					}
				};
				(S = s = Ne([j(1, n.$6j), j(2, o.$lq), j(3, r.$dtb), j(4, g.$Li)], S)),
					(0, m.$qtb)(S.Id, S, m.EditorContributionInstantiation.Eager),
					(0, c.$4X)(
						class extends m.$ktb {
							constructor() {
								super({
									id: "editor.showTypeHierarchy",
									title: (0, h.localize2)(11036, "Peek Type Hierarchy"),
									menu: {
										id: c.$XX.EditorContextPeek,
										group: "navigation",
										order: 1e3,
										when: n.$Kj.and(l, a.PeekContext.notInPeekEditor),
									},
									precondition: n.$Kj.and(l, a.PeekContext.notInPeekEditor),
									f1: !0,
								});
							}
							async runEditorCommand(T, P) {
								return S.get(P)?.startTypeHierarchyFromEditor();
							}
						},
					),
					(0, c.$4X)(
						class extends m.$ktb {
							constructor() {
								super({
									id: "editor.showSupertypes",
									title: (0, h.localize2)(11037, "Show Supertypes"),
									icon: i.$ak.typeHierarchySuper,
									precondition: n.$Kj.and(
										y,
										$.isEqualTo(b.TypeHierarchyDirection.Subtypes),
									),
									keybinding: {
										weight: p.KeybindingWeight.WorkbenchContrib,
										primary: C.KeyMod.Shift + C.KeyMod.Alt + C.KeyCode.KeyH,
									},
									menu: {
										id: f.$RYc.TitleMenu,
										when: $.isEqualTo(b.TypeHierarchyDirection.Subtypes),
										order: 1,
									},
								});
							}
							runEditorCommand(I, T) {
								return S.get(T)?.showSupertypes();
							}
						},
					),
					(0, c.$4X)(
						class extends m.$ktb {
							constructor() {
								super({
									id: "editor.showSubtypes",
									title: (0, h.localize2)(11038, "Show Subtypes"),
									icon: i.$ak.typeHierarchySub,
									precondition: n.$Kj.and(
										y,
										$.isEqualTo(b.TypeHierarchyDirection.Supertypes),
									),
									keybinding: {
										weight: p.KeybindingWeight.WorkbenchContrib,
										primary: C.KeyMod.Shift + C.KeyMod.Alt + C.KeyCode.KeyH,
									},
									menu: {
										id: f.$RYc.TitleMenu,
										when: $.isEqualTo(b.TypeHierarchyDirection.Supertypes),
										order: 1,
									},
								});
							}
							runEditorCommand(I, T) {
								return S.get(T)?.showSubtypes();
							}
						},
					),
					(0, c.$4X)(
						class extends m.$ktb {
							constructor() {
								super({
									id: "editor.refocusTypeHierarchy",
									title: (0, h.localize2)(11039, "Refocus Type Hierarchy"),
									precondition: y,
									keybinding: {
										weight: p.KeybindingWeight.WorkbenchContrib,
										primary: C.KeyMod.Shift + C.KeyCode.Enter,
									},
								});
							}
							async runEditorCommand(I, T) {
								return S.get(T)?.startTypeHierarchyFromTypeHierarchy();
							}
						},
					),
					(0, c.$4X)(
						class extends m.$ktb {
							constructor() {
								super({
									id: "editor.closeTypeHierarchy",
									title: (0, h.localize)(11035, null),
									icon: i.$ak.close,
									precondition: y,
									keybinding: {
										weight: p.KeybindingWeight.WorkbenchContrib + 10,
										primary: C.KeyCode.Escape,
										when: n.$Kj.not("config.editor.stablePeek"),
									},
									menu: { id: f.$RYc.TitleMenu, order: 1e3 },
								});
							}
							runEditorCommand(I, T) {
								return S.get(T)?.endTypeHierarchy();
							}
						},
					);
			},
		),
		define(
			de[1803],
			he([1, 0, 7, 46, 787, 4, 11, 8, 355, 566, 18]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$X4b = void 0),
					(E = mt(E));
				const a = 100;
				function h(c, n) {
					c?.addImplementation(a, "webview", (g) => {
						const o = g.get(m.$3Ib).activeWebview;
						if (o?.isFocused) return n(o), !0;
						if ((0, t.$Jgb)()?.classList.contains("action-menu-item")) {
							const f = g.get(u.$IY);
							if (f.activeEditor instanceof r.$W4b)
								return n(f.activeEditor.webview), !0;
						}
						return !1;
					});
				}
				h(i.$stb, (c) => c.undo()),
					h(i.$ttb, (c) => c.redo()),
					h(i.$utb, (c) => c.selectAll()),
					h(w.$BAb, (c) => c.copy()),
					h(w.$CAb, (c) => c.paste()),
					h(w.$AAb, (c) => c.cut()),
					(e.$X4b = "preventDefaultContextMenuItems"),
					w.$AAb &&
						C.$ZX.appendMenuItem(C.$XX.WebviewContext, {
							command: { id: w.$AAb.id, title: E.localize(11365, null) },
							group: "5_cutcopypaste",
							order: 1,
							when: d.$Kj.not(e.$X4b),
						}),
					w.$BAb &&
						C.$ZX.appendMenuItem(C.$XX.WebviewContext, {
							command: { id: w.$BAb.id, title: E.localize(11366, null) },
							group: "5_cutcopypaste",
							order: 2,
							when: d.$Kj.not(e.$X4b),
						}),
					w.$CAb &&
						C.$ZX.appendMenuItem(C.$XX.WebviewContext, {
							command: { id: w.$CAb.id, title: E.localize(11367, null) },
							group: "5_cutcopypaste",
							order: 3,
							when: d.$Kj.not(e.$X4b),
						});
			},
		),
		define(
			de[1290],
			he([
				1, 0, 83, 75, 33, 48, 74, 152, 69, 42, 350, 752, 660, 414, 541, 20, 5,
				25, 827, 17,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f, b) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Kfc = void 0),
					(e.$Jfc = s);
				function s($) {
					return (
						$ === void 0 ||
						($.definitions?.length === 0 &&
							$.implementations?.length === 0 &&
							$.hoverDetails === void 0)
					);
				}
				e.$Kfc = (0, p.$Mi)("symbolContextService");
				async function l($) {
					const v = await $(),
						S = new n.$pNb(v, ""),
						I = S.references.map((T) => T.link);
					return S.dispose(), I;
				}
				let y = class {
					constructor(v, S, I, T, P) {
						(this.f = v),
							(this.g = S),
							(this.h = I),
							(this.j = T),
							(this.k = P),
							(this.c = 1e4),
							(this.e = this.j.createInstance(f.$Ifc));
					}
					async internalGetSymbolContext(
						{ symbol: v, model: S, ctxtInfo: I, cancellationOptions: T },
						P,
					) {
						let k;
						S === void 0
							? (k = (await this.f.createModelReference(v.uri)).object
									.textEditorModel)
							: (k = S);
						const L = this.k.hoverProvider.ordered(k),
							D = new w.$Ce();
						T?.token?.onCancellationRequested(() => {
							D.cancel(), i.$Bfb.clearTimeout(M);
						});
						const M = i.$Bfb.setTimeout(() => {
							D.cancel();
						}, T?.timeout ?? this.c);
						try {
							const N = l(() =>
									(0, c.$POb)(
										this.k.definitionProvider,
										k,
										new E.$hL(v.position.lineNumber, v.position.column),
										!1,
										T?.token ?? w.CancellationToken.None,
									),
								),
								A = l(() =>
									(0, c.$ROb)(
										this.k.implementationProvider,
										k,
										new E.$hL(v.position.lineNumber, v.position.column),
										!1,
										T?.token ?? w.CancellationToken.None,
									),
								),
								R = async () => {
									let X;
									for (let Y = 0; Y < L.length; Y += 3) {
										const ne = L.slice(Y, Y + 3).map((_) =>
											_.provideHover(
												k,
												new E.$hL(v.position.lineNumber, v.position.column + 1),
												w.CancellationToken.None,
											),
										);
										if (
											((X = (await Promise.all(ne)).find((_) => _ !== void 0)),
											X)
										)
											break;
									}
									return X;
								},
								[O, B, U] = await Promise.all([N, A, R()]);
							if (O.length === 0) return;
							let z = O[0].originSelectionRange;
							if (!z) {
								for (const W of O)
									if (W.originSelectionRange) {
										z = W.originSelectionRange;
										break;
									}
							}
							const F = z ? k.getValueInRange(z) : "";
							let x = B.filter(
								(W) =>
									!O.some((X) => {
										const Y = X.range,
											ie = W.range;
										return b.$iL.areIntersecting(Y, ie);
									}),
							);
							x.length > 10 && (x = x.slice(0, 10));
							const H = O.map((W) => this.u(W, U, !0, F)),
								q = x.map((W) =>
									this.v({
										def: W,
										position: new E.$hL(
											W.range.startLineNumber,
											W.range.startColumn,
										),
										cancellationToken: D.token,
										model: void 0,
										symbolName: F,
										foldingRanges: void 0,
									}),
								),
								G = await Promise.all([...H, ...q]);
							let K = [],
								J = [];
							return (
								(K = G.slice(0, H.length)),
								(J = G.slice(H.length)),
								{
									originalSymbolNameAndSymbolRange: {
										name: F,
										range: z ?? new b.$iL(0, 0, 0, 0),
									},
									defs: K,
									hoverDetails: U ?? void 0,
									implementations: J,
								}
							);
						} finally {
							i.$Bfb.clearTimeout(M);
						}
					}
					async getSymbolContextForSymbolAtThisPosition({
						symbol: v,
						model: S,
						ctxtInfo: I,
						cancellationOptions: T,
					}) {
						const P = await this.internalGetSymbolContext(
							{ symbol: v, model: S, ctxtInfo: I, cancellationOptions: T },
							{ useQuickAccess: !1 },
						);
						if (P === void 0) return;
						const k = P.defs.map((L) => ({
							range: L.location.range,
							rawText: L.name,
							kind: L.kind,
						}));
						return {
							originalSymbolNameAndSymbolRange: {
								name: P.originalSymbolNameAndSymbolRange.name,
								range: P.originalSymbolNameAndSymbolRange.range,
							},
							ctxtSymbols: k,
							hoverDetails: P.hoverDetails ?? void 0,
						};
					}
					async getSymbolContextForSymbolAtThisPositionProto({
						symbol: v,
						model: S,
						ctxtInfo: I,
						cancellationOptions: T,
					}) {
						const P = new w.$Ce(),
							k = T?.token ?? P.token,
							L = T?.timeout ?? this.c;
						try {
							const D =
									S ??
									(await this.f.createModelReference(v.uri)).object
										.textEditorModel,
								M = new E.$hL(v.position.lineNumber, v.position.column),
								[N, A, R] = await Promise.all([
									this.l(D, M, k),
									this.m(D, M, k),
									this.n(D, M, k),
								]);
							if (N.length === 0) return;
							const O = this.o(N),
								B = O ? D.getValueInRange(O) : "",
								U = this.p(N, A),
								[z, F] = await Promise.all([
									this.q(N, R, B, k),
									this.q(U, null, B, k),
								]);
							return {
								originalSymbolNameAndSymbolRange: {
									name: B,
									range: O ?? new b.$iL(0, 0, 0, 0),
								},
								definitions: z,
								hoverDetails: R ? this.t(R) : void 0,
								implementations: F,
							};
						} finally {
							P.dispose();
						}
					}
					async l(v, S, I) {
						return l(() => (0, c.$POb)(this.k.definitionProvider, v, S, !1, I));
					}
					async m(v, S, I) {
						return l(() =>
							(0, c.$ROb)(this.k.implementationProvider, v, S, !1, I),
						);
					}
					async n(v, S, I) {
						const T = this.k.hoverProvider.ordered(v);
						for (let P = 0; P < T.length; P += 3) {
							const k = T.slice(P, P + 3),
								D = (
									await Promise.all(k.map((M) => M.provideHover(v, S, I)))
								).find((M) => M !== void 0);
							if (D) return D;
						}
					}
					o(v) {
						return v.find((S) => S.originSelectionRange)?.originSelectionRange;
					}
					p(v, S) {
						return S.filter(
							(I) => !v.some((T) => b.$iL.areIntersecting(T.range, I.range)),
						).slice(0, 10);
					}
					async q(v, S, I, T) {
						return Promise.all(
							v.map(async (P) => {
								const k = await this.f.createModelReference(P.uri);
								try {
									const L = this.r(P.range, S),
										D = k.object.textEditorModel.getValueInRange(L),
										N = `\`\`\`${k.object.textEditorModel.getLanguageId()}
${D}
\`\`\``;
									return new t.$_s({
										relativeWorkspacePath: this.h.asRelativePath(P.uri),
										textInSymbolRange: N,
										symbol: new t.$8s({ name: I, range: P.range }),
										uriComponents: P.uri,
									});
								} finally {
									k.dispose();
								}
							}),
						);
					}
					r(v, S) {
						return S
							? new b.$iL(v.startLineNumber, 1, v.endLineNumber + 4, 1)
							: new b.$iL(v.startLineNumber - 8, 1, v.endLineNumber + 2, 8);
					}
					t(v) {
						const S = v.contents[0].value ?? "",
							I = v.contents.slice(1).map((T) => T.value);
						return new t.$0s({ codeDetails: S, markdownBlocks: I });
					}
					async u(v, S, I, T) {
						const P = await this.f.createModelReference(v.uri),
							k = v.range;
						let L;
						I && S == null
							? (L = new b.$iL(
									k.startLineNumber - 8,
									1,
									k.endLineNumber + 2,
									8,
								))
							: (L = new b.$iL(k.startLineNumber, 1, k.endLineNumber + 4, 1));
						const D = P.object.textEditorModel,
							M = D.getValueInRange(L),
							A = `\`\`\`${D.getLanguageId()}
${M}
\`\`\``;
						return (
							P.dispose(),
							{
								textInSymbolRange: A,
								location: { uri: v.uri, range: v.range },
								name: T,
								kind: C.SymbolKind.Null,
							}
						);
					}
					async v({
						def: v,
						position: S,
						cancellationToken: I,
						model: T,
						foldingRanges: P,
						symbolName: k,
					}) {
						let L = v.range;
						if (
							(T ||
								(T = (await this.f.createModelReference(v.uri)).object
									.textEditorModel),
							P === void 0 && ((P = await this.x(T, I)), P === void 0))
						)
							return this.u({ uri: v.uri, range: v.range }, void 0, !1, k);
						if (
							(L.endLineNumber - L.startLineNumber > 50 &&
								(L = new b.$iL(
									L.startLineNumber,
									1,
									L.startLineNumber + 50,
									1,
								)),
							L.startLineNumber === L.endLineNumber)
						) {
							const A = P.filter((R) => R.start === L.startLineNumber).sort(
								(R, O) => O.end - O.start - (R.end - R.start),
							)[0];
							A
								? (L = new b.$iL(A.start, 1, A.end + 1, 1))
								: (L = new b.$iL(
										L.startLineNumber - 5,
										1,
										L.endLineNumber + 5,
										1,
									));
						}
						let D = T.getValueInRange(L);
						const N = `\`\`\`${T.getLanguageId()}
${D}
\`\`\``;
						return {
							name: k,
							kind: C.SymbolKind.Null,
							location: { range: L, uri: v.uri },
							textInSymbolRange: N,
						};
					}
					isRangeContained(v, S) {
						return (
							(S.startLineNumber < v.startLineNumber ||
								(S.startLineNumber === v.startLineNumber &&
									S.startColumn <= v.startColumn)) &&
							(S.endLineNumber > v.endLineNumber ||
								(S.endLineNumber === v.endLineNumber &&
									S.endColumn >= v.endColumn))
						);
					}
					async w(v, S, I) {
						const T = await this.e.getSymbolPicks(
								v,
								{ skipLocal: !1, skipSorting: !1 },
								I.token,
							),
							P = [];
						return (
							S.forEach((k) => {
								T.filter(
									(D) =>
										D.symbol &&
										D.symbol.location.uri.toString() === k.uri.toString() &&
										this.isRangeContained(k.range, D.symbol.location.range),
								).forEach((D) => {
									D.symbol && P.push(D.symbol);
								});
							}),
							P.length > 0 ? P : void 0
						);
					}
					async x(v, S, I = this.c) {
						const T = { limit: 5e3, update: () => {} },
							P = u.$ZNb.getFoldingRangeProviders(this.k, v);
						if (P.length > 0) {
							let k;
							for (let L = 0; L < P.length; L += 3) {
								const D = P.slice(L, L + 3);
								for (const M of D) {
									const N = await M.provideFoldingRanges(v, {}, S);
									if (N && N.length > 0) {
										k = N;
										break;
									}
								}
								if (k) break;
							}
							if (k) return k;
						}
					}
					async y(v, S, I = this.c) {
						const T = { limit: 5e3, update: () => {} },
							P = new a.$PNb(v, this.g, T);
						let k = P;
						const L = u.$ZNb.getFoldingRangeProviders(this.k, v);
						L.length > 0 &&
							(k.dispose(), (k = new h.$XNb(v, L, () => {}, T, P)));
						const D = await k.compute(S);
						return k.dispose(), D ?? void 0;
					}
				};
				(y = Ne(
					[j(0, r.$MO), j(1, d.$aN), j(2, o.$Vi), j(3, p.$Li), j(4, m.$k3)],
					y,
				)),
					(0, g.$lK)(e.$Kfc, y, g.InstantiationType.Delayed);
			},
		),
		define(
			de[3274],
			he([1, 0, 56, 2842, 98, 35, 18, 65, 20, 19, 10, 549]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ovc = void 0);
				let h = class extends i.$kvc {
					constructor(n, g, p) {
						super(g),
							(this.I = n),
							(this.J = p),
							this.D(this.registerCodeEditorOpenHandler(this.M.bind(this))),
							this.D(this.registerCodeEditorOpenHandler(this.L.bind(this)));
					}
					getActiveCodeEditor() {
						const n = this.I.activeTextEditorControl;
						if ((0, t.$0sb)(n)) return n;
						if ((0, t.$$sb)(n)) return n.getModifiedEditor();
						const g = this.I.activeEditorPane?.getControl();
						return (0, t.$atb)(g) && (0, t.$0sb)(g.activeCodeEditor)
							? g.activeCodeEditor
							: null;
					}
					async L(n, g, p) {
						const o = this.I.activeTextEditorControl;
						if (
							!p &&
							(0, t.$$sb)(o) &&
							n.options &&
							n.resource &&
							g === o.getModifiedEditor() &&
							o.getModel() &&
							(0, r.$gh)(n.resource, o.getModel()?.modified.uri)
						) {
							const f = o.getModifiedEditor();
							return (
								(0, a.applyTextEditorOptions)(
									n.options,
									f,
									w.ScrollType.Smooth,
								),
								f
							);
						}
						return null;
					}
					async M(n, g, p) {
						if (
							!this.J.getValue().workbench?.editor
								?.enablePreviewFromCodeNavigation &&
							g &&
							!n.options?.pinned &&
							!p &&
							!(0, r.$gh)(g.getModel()?.uri, n.resource)
						) {
							for (const b of this.I.visibleEditorPanes)
								if ((0, t.$btb)(b.getControl()) === g) {
									b.group.pinEditor();
									break;
								}
						}
						const f = await this.I.openEditor(n, p ? C.$KY : C.$JY);
						if (f) {
							const b = f.getControl();
							if ((0, t.$0sb)(b)) return b;
							if ((0, t.$atb)(b) && (0, t.$0sb)(b.activeCodeEditor))
								return b.activeCodeEditor;
						}
						return null;
					}
				};
				(e.$ovc = h),
					(e.$ovc = h = Ne([j(0, C.$IY), j(1, E.$iP), j(2, u.$gj)], h)),
					(0, m.$lK)(d.$dtb, h, m.InstantiationType.Delayed);
			},
		),
		