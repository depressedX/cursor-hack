define(
			de[2865],
			he([
				1, 0, 7, 325, 14, 26, 6, 132, 3, 9, 38, 74, 252, 67, 61, 4, 22, 79, 35,
				1633,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f, b) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$EDb = void 0),
					(e.$DDb = s),
					(g = mt(g));
				function s(S) {
					return `suggest-aria-id:${S}`;
				}
				const l = (0, o.$$O)(
						"suggest-more-info",
						w.$ak.chevronRight,
						g.localize(1513, null),
					),
					y = new (class ea {
						static {
							this.a =
								/(#([\da-fA-F]{3}){1,2}|(rgb|hsl)a\(\s*(\d{1,3}%?\s*,\s*){3}(1|0?\.\d+)\)|(rgb|hsl)\(\s*\d{1,3}%?(\s*,\s*\d{1,3}%?){2}\s*\))/;
						}
						static {
							this.b = new RegExp(`^${ea.a.source}$`, "i");
						}
						extract(I, T) {
							if (I.textLabel.match(ea.b)) return (T[0] = I.textLabel), !0;
							if (I.completion.detail && I.completion.detail.match(ea.b))
								return (T[0] = I.completion.detail), !0;
							if (I.completion.documentation) {
								const P =
										typeof I.completion.documentation == "string"
											? I.completion.documentation
											: I.completion.documentation.value,
									k = ea.a.exec(P);
								if (k && (k.index === 0 || k.index + k[0].length === P.length))
									return (T[0] = k[0]), !0;
							}
							return !1;
						}
					})();
				let $ = class {
					constructor(I, T, P, k) {
						(this.b = I),
							(this.c = T),
							(this.d = P),
							(this.f = k),
							(this.a = new C.$re()),
							(this.onDidToggleDetails = this.a.event),
							(this.templateId = "suggestion");
					}
					dispose() {
						this.a.dispose();
					}
					renderTemplate(I) {
						const T = new m.$Zc(),
							P = I;
						P.classList.add("show-file-icons");
						const k = (0, t.$fhb)(I, (0, t.$)(".icon")),
							L = (0, t.$fhb)(k, (0, t.$)("span.colorspan")),
							D = (0, t.$fhb)(I, (0, t.$)(".contents")),
							M = (0, t.$fhb)(D, (0, t.$)(".main")),
							N = (0, t.$fhb)(M, (0, t.$)(".icon-label.codicon")),
							A = (0, t.$fhb)(M, (0, t.$)("span.left")),
							R = (0, t.$fhb)(M, (0, t.$)("span.right")),
							O = new i.$Xob(A, { supportHighlights: !0, supportIcons: !0 });
						T.add(O);
						const B = (0, t.$fhb)(A, (0, t.$)("span.signature-label")),
							U = (0, t.$fhb)(A, (0, t.$)("span.qualifier-label")),
							z = (0, t.$fhb)(R, (0, t.$)("span.details-label")),
							F = (0, t.$fhb)(
								R,
								(0, t.$)("span.readMore" + E.ThemeIcon.asCSSSelector(l)),
							);
						return (
							(F.title = g.localize(1514, null)),
							{
								root: P,
								left: A,
								right: R,
								icon: k,
								colorspan: L,
								iconLabel: O,
								iconContainer: N,
								parametersLabel: B,
								qualifierLabel: U,
								detailsLabel: z,
								readMore: F,
								disposables: T,
								configureFont: () => {
									const H = this.b.getOptions(),
										q = H.get(u.EditorOption.fontInfo),
										V = q.getMassagedFontFamily(),
										G = q.fontFeatureSettings,
										K = H.get(u.EditorOption.suggestFontSize) || q.fontSize,
										J = H.get(u.EditorOption.suggestLineHeight) || q.lineHeight,
										W = q.fontWeight,
										X = q.letterSpacing,
										Y = `${K}px`,
										ie = `${J}px`,
										ne = `${X}px`;
									(P.style.fontSize = Y),
										(P.style.fontWeight = W),
										(P.style.letterSpacing = ne),
										(M.style.fontFamily = V),
										(M.style.fontFeatureSettings = G),
										(M.style.lineHeight = ie),
										(k.style.height = ie),
										(k.style.width = ie),
										(F.style.height = ie),
										(F.style.width = ie);
								},
							}
						);
					}
					renderElement(I, T, P) {
						P.configureFont();
						const { completion: k } = I;
						(P.root.id = s(T)), (P.colorspan.style.backgroundColor = "");
						const L = { labelEscapeNewLines: !0, matches: (0, d.$3k)(I.score) },
							D = [];
						if (k.kind === a.CompletionItemKind.Color && y.extract(I, D))
							(P.icon.className = "icon customcolor"),
								(P.iconContainer.className = "icon hide"),
								(P.colorspan.style.backgroundColor = D[0]);
						else if (
							k.kind === a.CompletionItemKind.File &&
							this.f.getFileIconTheme().hasFileIcons
						) {
							(P.icon.className = "icon hide"),
								(P.iconContainer.className = "icon hide");
							const M = (0, h.$BDb)(
									this.c,
									this.d,
									r.URI.from({ scheme: "fake", path: I.textLabel }),
									p.FileKind.FILE,
								),
								N = (0, h.$BDb)(
									this.c,
									this.d,
									r.URI.from({ scheme: "fake", path: k.detail }),
									p.FileKind.FILE,
								);
							L.extraClasses = M.length > N.length ? M : N;
						} else
							k.kind === a.CompletionItemKind.Folder &&
							this.f.getFileIconTheme().hasFolderIcons
								? ((P.icon.className = "icon hide"),
									(P.iconContainer.className = "icon hide"),
									(L.extraClasses = [
										(0, h.$BDb)(
											this.c,
											this.d,
											r.URI.from({ scheme: "fake", path: I.textLabel }),
											p.FileKind.FOLDER,
										),
										(0, h.$BDb)(
											this.c,
											this.d,
											r.URI.from({ scheme: "fake", path: k.detail }),
											p.FileKind.FOLDER,
										),
									].flat()))
								: ((P.icon.className = "icon hide"),
									(P.iconContainer.className = ""),
									P.iconContainer.classList.add(
										"suggest-icon",
										...E.ThemeIcon.asClassNameArray(
											a.CompletionItemKinds.toIcon(k.kind),
										),
									));
						k.tags &&
							k.tags.indexOf(a.CompletionItemTag.Deprecated) >= 0 &&
							((L.extraClasses = (L.extraClasses || []).concat(["deprecated"])),
							(L.matches = [])),
							P.iconLabel.setLabel(I.textLabel, void 0, L),
							typeof k.label == "string"
								? ((P.parametersLabel.textContent = ""),
									(P.detailsLabel.textContent = v(k.detail || "")),
									P.root.classList.add("string-label"))
								: ((P.parametersLabel.textContent = v(k.label.detail || "")),
									(P.detailsLabel.textContent = v(k.label.description || "")),
									P.root.classList.remove("string-label")),
							this.b.getOption(u.EditorOption.suggest).showInlineDetails
								? (0, t.show)(P.detailsLabel)
								: (0, t.hide)(P.detailsLabel),
							(0, b.$yDb)(I)
								? (P.right.classList.add("can-expand-details"),
									(0, t.show)(P.readMore),
									(P.readMore.onmousedown = (M) => {
										M.stopPropagation(), M.preventDefault();
									}),
									(P.readMore.onclick = (M) => {
										M.stopPropagation(), M.preventDefault(), this.a.fire();
									}))
								: (P.right.classList.remove("can-expand-details"),
									(0, t.hide)(P.readMore),
									(P.readMore.onmousedown = null),
									(P.readMore.onclick = null));
					}
					disposeTemplate(I) {
						I.disposables.dispose();
					}
				};
				(e.$EDb = $),
					(e.$EDb = $ = Ne([j(1, c.$QO), j(2, n.$nM), j(3, f.$iP)], $));
				function v(S) {
					return S.replace(/\r\n|\r|\n/g, "");
				}
			},
		),
		