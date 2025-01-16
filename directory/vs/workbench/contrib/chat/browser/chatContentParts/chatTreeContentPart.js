define(
			de[4024],
			he([1, 0, 7, 6, 3, 4, 10, 22, 5, 93, 41, 35, 233, 979, 1351]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$PXb = e.$OXb = void 0),
					(t = mt(t));
				const g = t.$;
				let p = class extends w.$1c {
					constructor($, v, S, I, T) {
						super(),
							(this.c = T),
							(this.a = this.D(new i.$re())),
							(this.onDidChangeHeight = this.a.event);
						const P = this.D(S.get());
						(this.b = P.object),
							(this.onDidFocus = this.b.onDidFocus),
							this.D(
								this.b.onDidOpen((k) => {
									k.element &&
										!("children" in k.element) &&
										this.c.open(k.element.uri);
								}),
							),
							this.D(
								this.b.onDidChangeCollapseState(() => {
									this.a.fire();
								}),
							),
							this.D(
								this.b.onContextMenu((k) => {
									k.browserEvent.preventDefault(),
										k.browserEvent.stopPropagation();
								}),
							),
							this.b.setInput($).then(() => {
								P.isStale() || (this.b.layout(), this.a.fire());
							}),
							(this.domNode = this.b.getHTMLElement().parentElement);
					}
					domFocus() {
						this.b.domFocus();
					}
					hasSameContent($) {
						return $.kind === "treeData";
					}
					addDisposable($) {
						this.D($);
					}
				};
				(e.$OXb = p), (e.$OXb = p = Ne([j(4, u.$7rb)], p));
				let o = class extends w.$1c {
					get inUse() {
						return this.a.inUse;
					}
					constructor($, v, S, I) {
						super(),
							(this.b = $),
							(this.c = v),
							(this.f = S),
							(this.g = I),
							(this.a = this.D(new c.$hUb(() => this.h())));
					}
					h() {
						const $ = this.D(
								this.c.createInstance(h.$uPb, {
									onDidChangeVisibility: this.b,
								}),
							),
							v = g(".interactive-response-progress-tree");
						return (
							this.D((0, n.$IXb)(v, this.g)),
							this.c.createInstance(
								r.$GMb,
								"ChatListRenderer",
								v,
								new f(),
								new b(),
								[new s($, this.f.getValue("explorer.decorations"))],
								new l(),
								{
									collapseByDefault: () => !1,
									expandOnlyOnTwistieClick: () => !1,
									identityProvider: { getId: (I) => I.uri.toString() },
									accessibilityProvider: {
										getAriaLabel: (I) => I.label,
										getWidgetAriaLabel: () => (0, E.localize)(4666, null),
									},
									alwaysConsumeMouseWheel: !1,
								},
							)
						);
					}
					get() {
						const $ = this.a.get();
						let v = !1;
						return {
							object: $,
							isStale: () => v,
							dispose: () => {
								(v = !0), this.a.release($);
							},
						};
					}
				};
				(e.$PXb = o),
					(e.$PXb = o = Ne([j(1, m.$Li), j(2, C.$gj), j(3, a.$iP)], o));
				class f {
					static {
						this.ITEM_HEIGHT = 22;
					}
					getHeight($) {
						return f.ITEM_HEIGHT;
					}
					getTemplateId($) {
						return "chatListTreeTemplate";
					}
				}
				class b {
					isIncompressible($) {
						return !$.children;
					}
				}
				class s {
					constructor($, v) {
						(this.a = $),
							(this.b = v),
							(this.templateId = "chatListTreeTemplate");
					}
					renderCompressedElements($, v, S, I) {
						S.label.element.style.display = "flex";
						const T = $.element.elements.map((P) => P.label);
						S.label.setResource(
							{ resource: $.element.elements[0].uri, name: T },
							{
								title: $.element.elements[0].label,
								fileKind: $.children ? d.FileKind.FOLDER : d.FileKind.FILE,
								extraClasses: ["explorer-item"],
								fileDecorations: this.b,
							},
						);
					}
					renderTemplate($) {
						const v = new w.$Zc(),
							S = v.add(this.a.create($, { supportHighlights: !0 }));
						return { templateDisposables: v, label: S };
					}
					renderElement($, v, S, I) {
						(S.label.element.style.display = "flex"),
							!$.children.length && $.element.type !== d.FileType.Directory
								? S.label.setFile($.element.uri, {
										fileKind: d.FileKind.FILE,
										hidePath: !0,
										fileDecorations: this.b,
									})
								: S.label.setResource(
										{ resource: $.element.uri, name: $.element.label },
										{
											title: $.element.label,
											fileKind: d.FileKind.FOLDER,
											fileDecorations: this.b,
										},
									);
					}
					disposeTemplate($) {
						$.templateDisposables.dispose();
					}
				}
				class l {
					hasChildren($) {
						return !!$.children;
					}
					async getChildren($) {
						return $.children ?? [];
					}
				}
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	