import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../editor/common/services/resolverService.js';
import '../../../../../base/common/filters.js';
import '../../../../../base/browser/ui/highlightedlabel/highlightedLabel.js';
import '../../../../../editor/common/core/range.js';
import '../../../../../base/browser/dom.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../editor/common/model/textModel.js';
import './bulkEditPreview.js';
import '../../../../../platform/files/common/files.js';
import '../../../../../nls.js';
import '../../../../../platform/label/common/label.js';
import '../../../../../base/browser/ui/iconLabel/iconLabel.js';
import '../../../../../base/common/resources.js';
import '../../../../../platform/theme/common/themeService.js';
import '../../../../../base/common/themables.js';
import '../../../../../base/common/strings.js';
import '../../../../../base/common/uri.js';
import '../../../../../editor/browser/services/bulkEditService.js';
import '../../../../../editor/common/languages/modesRegistry.js';
import '../../../../../editor/contrib/snippet/browser/snippetParser.js';
import '../../../../../platform/instantiation/common/instantiation.js';
define(
			de[3486],
			he([
				1, 0, 42, 132, 410, 17, 7, 3, 122, 1843, 22, 4, 73, 325, 19, 35, 26, 37,
				9, 199, 172, 389, 5,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*resolverService*/,
				i /*filters*/,
				w /*highlightedLabel*/,
				E /*range*/,
				C /*dom*/,
				d /*lifecycle*/,
				m /*textModel*/,
				r /*bulkEditPreview*/,
				u /*files*/,
				a /*nls*/,
				h /*label*/,
				c /*iconLabel*/,
				n /*resources*/,
				g /*themeService*/,
				p /*themables*/,
				o /*strings*/,
				f /*uri*/,
				b /*bulkEditService*/,
				s /*modesRegistry*/,
				l /*snippetParser*/,
				y /*instantiation*/,
) {
				"use strict";
				var $, v, S;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$sNc =
						e.$rNc =
						e.$qNc =
						e.$pNc =
						e.$oNc =
						e.$nNc =
						e.$mNc =
						e.$kNc =
						e.$jNc =
						e.$iNc =
						e.$hNc =
						e.$gNc =
							void 0),
					(e.$lNc = D),
					(C = mt(C));
				class I {
					constructor(q, V) {
						(this.parent = q), (this.category = V);
					}
					isChecked() {
						const q = this.parent;
						let V = !0;
						for (const G of this.category.fileOperations)
							for (const K of G.originalEdits.values())
								V = V && q.checked.isChecked(K);
						return V;
					}
					setChecked(q) {
						const V = this.parent;
						for (const G of this.category.fileOperations)
							for (const K of G.originalEdits.values())
								V.checked.updateChecked(K, q);
					}
				}
				e.$gNc = I;
				class T {
					constructor(q, V) {
						(this.parent = q), (this.edit = V);
					}
					isChecked() {
						const q =
							this.parent instanceof I ? this.parent.parent : this.parent;
						let V = !0;
						this.edit.type === r.BulkFileOperationType.TextEdit &&
							(V = !this.edit.textEdits.every(
								(G) => !q.checked.isChecked(G.textEdit),
							));
						for (const G of this.edit.originalEdits.values())
							G instanceof b.$uzb && (V = V && q.checked.isChecked(G));
						if (
							this.parent instanceof I &&
							this.edit.type === r.BulkFileOperationType.TextEdit
						) {
							for (const G of q.categories)
								for (const K of G.fileOperations)
									if (K.uri.toString() === this.edit.uri.toString())
										for (const J of K.originalEdits.values())
											J instanceof b.$uzb && (V = V && q.checked.isChecked(J));
						}
						return V;
					}
					setChecked(q) {
						const V =
							this.parent instanceof I ? this.parent.parent : this.parent;
						for (const G of this.edit.originalEdits.values())
							V.checked.updateChecked(G, q);
						if (
							this.parent instanceof I &&
							this.edit.type !== r.BulkFileOperationType.TextEdit
						) {
							for (const G of V.categories)
								for (const K of G.fileOperations)
									if (K.uri.toString() === this.edit.uri.toString())
										for (const J of K.originalEdits.values())
											V.checked.updateChecked(J, q);
						}
					}
					isDisabled() {
						if (
							this.parent instanceof I &&
							this.edit.type === r.BulkFileOperationType.TextEdit
						) {
							const q = this.parent.parent;
							let V = !0;
							for (const G of q.categories)
								for (const K of G.fileOperations)
									if (K.uri.toString() === this.edit.uri.toString())
										for (const J of K.originalEdits.values())
											J instanceof b.$uzb && (V = V && q.checked.isChecked(J));
							return !V;
						}
						return !1;
					}
				}
				e.$hNc = T;
				class P {
					constructor(q, V, G, K, J, W, X) {
						(this.parent = q),
							(this.idx = V),
							(this.edit = G),
							(this.prefix = K),
							(this.selecting = J),
							(this.inserting = W),
							(this.suffix = X);
					}
					isChecked() {
						let q = this.parent.parent;
						return (
							q instanceof I && (q = q.parent),
							q.checked.isChecked(this.edit.textEdit)
						);
					}
					setChecked(q) {
						let V = this.parent.parent;
						if (
							(V instanceof I && (V = V.parent),
							V.checked.updateChecked(this.edit.textEdit, q),
							q)
						)
							for (const G of this.parent.edit.originalEdits.values())
								G instanceof b.$uzb && V.checked.updateChecked(G, q);
					}
					isDisabled() {
						return this.parent.isDisabled();
					}
				}
				e.$iNc = P;
				let k = class {
					constructor(q, V) {
						(this.c = q), (this.d = V), (this.groupByFile = !0);
					}
					hasChildren(q) {
						return q instanceof T
							? q.edit.textEdits.length > 0
							: !(q instanceof P);
					}
					async getChildren(q) {
						if (q instanceof r.$eNc)
							return this.groupByFile
								? q.fileOperations.map((V) => new T(q, V))
								: q.categories.map((V) => new I(q, V));
						if (q instanceof I)
							return Array.from(q.category.fileOperations, (V) => new T(q, V));
						if (q instanceof T && q.edit.textEdits.length > 0) {
							let V, G;
							try {
								const J = await this.c.createModelReference(q.edit.uri);
								(V = J.object.textEditorModel), (G = J);
							} catch {
								(V = this.d.createInstance(
									m.$$X,
									"",
									s.$0M,
									m.$$X.DEFAULT_CREATION_OPTIONS,
									null,
								)),
									(G = V);
							}
							const K = q.edit.textEdits.map((J, W) => {
								const X = V.validateRange(J.textEdit.textEdit.range),
									Y = V.tokenization.getLineTokens(X.startLineNumber);
								let ie = 23;
								for (
									let _ = Y.findTokenIndexAtOffset(X.startColumn - 1) - 1;
									ie < 50 && _ >= 0;
									_--
								)
									ie = X.startColumn - Y.getStartOffset(_);
								const ne = V.tokenization.getLineTokens(X.endLineNumber);
								let ee = 0;
								for (
									let _ = ne.findTokenIndexAtOffset(X.endColumn - 1);
									ee < 50 && _ < ne.getCount();
									_++
								)
									ee += ne.getEndOffset(_) - ne.getStartOffset(_);
								return new P(
									q,
									W,
									J,
									V.getValueInRange(
										new E.$iL(
											X.startLineNumber,
											X.startColumn - ie,
											X.startLineNumber,
											X.startColumn,
										),
									),
									V.getValueInRange(X),
									J.textEdit.textEdit.insertAsSnippet
										? l.$Izb.asInsertText(J.textEdit.textEdit.text)
										: J.textEdit.textEdit.text,
									V.getValueInRange(
										new E.$iL(
											X.endLineNumber,
											X.endColumn,
											X.endLineNumber,
											X.endColumn + ee,
										),
									),
								);
							});
							return G.dispose(), K;
						}
						return [];
					}
				};
				(e.$jNc = k), (e.$jNc = k = Ne([j(0, t.$MO), j(1, y.$Li)], k));
				class L {
					compare(q, V) {
						return q instanceof T && V instanceof T
							? D(q.edit, V.edit)
							: q instanceof P && V instanceof P
								? E.$iL.compareRangesUsingStarts(
										q.edit.textEdit.textEdit.range,
										V.edit.textEdit.textEdit.range,
									)
								: 0;
					}
				}
				e.$kNc = L;
				function D(H, q) {
					return (0, o.$Ff)(H.uri.toString(), q.uri.toString());
				}
				let M = class {
					constructor(q) {
						this.c = q;
					}
					getWidgetAriaLabel() {
						return (0, a.localize)(4504, null);
					}
					getRole(q) {
						return "checkbox";
					}
					getAriaLabel(q) {
						if (q instanceof T) {
							if (q.edit.textEdits.length > 0)
								return q.edit.type & r.BulkFileOperationType.Rename &&
									q.edit.newUri
									? (0, a.localize)(
											4505,
											null,
											this.c.getUriLabel(q.edit.uri, { relative: !0 }),
											this.c.getUriLabel(q.edit.newUri, { relative: !0 }),
										)
									: q.edit.type & r.BulkFileOperationType.Create
										? (0, a.localize)(
												4506,
												null,
												this.c.getUriLabel(q.edit.uri, { relative: !0 }),
											)
										: q.edit.type & r.BulkFileOperationType.Delete
											? (0, a.localize)(
													4507,
													null,
													this.c.getUriLabel(q.edit.uri, { relative: !0 }),
												)
											: (0, a.localize)(
													4508,
													null,
													this.c.getUriLabel(q.edit.uri, { relative: !0 }),
												);
							if (q.edit.type & r.BulkFileOperationType.Rename && q.edit.newUri)
								return (0, a.localize)(
									4509,
									null,
									this.c.getUriLabel(q.edit.uri, { relative: !0 }),
									this.c.getUriLabel(q.edit.newUri, { relative: !0 }),
								);
							if (q.edit.type & r.BulkFileOperationType.Create)
								return (0, a.localize)(
									4510,
									null,
									this.c.getUriLabel(q.edit.uri, { relative: !0 }),
								);
							if (q.edit.type & r.BulkFileOperationType.Delete)
								return (0, a.localize)(
									4511,
									null,
									this.c.getUriLabel(q.edit.uri, { relative: !0 }),
								);
						}
						if (q instanceof P) {
							if (q.selecting.length > 0 && q.inserting.length > 0)
								return (0, a.localize)(
									4512,
									null,
									q.edit.textEdit.textEdit.range.startLineNumber,
									q.selecting,
									q.inserting,
								);
							if (q.selecting.length > 0 && q.inserting.length === 0)
								return (0, a.localize)(
									4513,
									null,
									q.edit.textEdit.textEdit.range.startLineNumber,
									q.selecting,
								);
							if (q.selecting.length === 0 && q.inserting.length > 0)
								return (0, a.localize)(
									4514,
									null,
									q.edit.textEdit.textEdit.range.startLineNumber,
									q.selecting,
								);
						}
						return null;
					}
				};
				(e.$mNc = M), (e.$mNc = M = Ne([j(0, h.$3N)], M));
				class N {
					getId(q) {
						return q instanceof T
							? q.edit.uri +
									(q.parent instanceof I
										? JSON.stringify(q.parent.category.metadata)
										: "")
							: q instanceof P
								? q.parent.edit.uri.toString() + q.idx
								: JSON.stringify(q.category.metadata);
					}
				}
				e.$nNc = N;
				class A {
					constructor(q) {
						q.classList.add("category"),
							(this.icon = document.createElement("div")),
							q.appendChild(this.icon),
							(this.label = new c.$Xob(q));
					}
				}
				let R = class {
					static {
						$ = this;
					}
					static {
						this.id = "CategoryElementRenderer";
					}
					constructor(q) {
						(this.c = q), (this.templateId = $.id);
					}
					renderTemplate(q) {
						return new A(q);
					}
					renderElement(q, V, G) {
						G.icon.style.setProperty("--background-dark", null),
							G.icon.style.setProperty("--background-light", null),
							(G.icon.style.color = "");
						const { metadata: K } = q.element.category;
						if (p.ThemeIcon.isThemeIcon(K.iconPath)) {
							const J = p.ThemeIcon.asClassName(K.iconPath);
							(G.icon.className = J ? `theme-icon ${J}` : ""),
								(G.icon.style.color = K.iconPath.color
									? (this.c
											.getColorTheme()
											.getColor(K.iconPath.color.id)
											?.toString() ?? "")
									: "");
						} else
							f.URI.isUri(K.iconPath)
								? ((G.icon.className = "uri-icon"),
									G.icon.style.setProperty(
										"--background-dark",
										C.$vhb(K.iconPath),
									),
									G.icon.style.setProperty(
										"--background-light",
										C.$vhb(K.iconPath),
									))
								: K.iconPath &&
									((G.icon.className = "uri-icon"),
									G.icon.style.setProperty(
										"--background-dark",
										C.$vhb(K.iconPath.dark),
									),
									G.icon.style.setProperty(
										"--background-light",
										C.$vhb(K.iconPath.light),
									));
						G.label.setLabel(K.label, K.description, {
							descriptionMatches: (0, i.$3k)(q.filterData),
						});
					}
					disposeTemplate(q) {
						q.label.dispose();
					}
				};
				(e.$oNc = R), (e.$oNc = R = $ = Ne([j(0, g.$iP)], R));
				let O = class {
					constructor(q, V, G) {
						(this.i = G),
							(this.c = new d.$Zc()),
							(this.d = new d.$Zc()),
							(this.f = document.createElement("input")),
							(this.f.className = "edit-checkbox"),
							(this.f.type = "checkbox"),
							this.f.setAttribute("role", "checkbox"),
							q.appendChild(this.f),
							(this.g = V.create(q, { supportHighlights: !0 })),
							(this.h = document.createElement("span")),
							(this.h.className = "details"),
							q.appendChild(this.h);
					}
					dispose() {
						this.d.dispose(), this.c.dispose(), this.g.dispose();
					}
					set(q, V) {
						if (
							(this.d.clear(),
							(this.f.checked = q.isChecked()),
							(this.f.disabled = q.isDisabled()),
							this.d.add(
								C.$0fb(this.f, "change", () => {
									q.setChecked(this.f.checked);
								}),
							),
							q.edit.type & r.BulkFileOperationType.Rename && q.edit.newUri)
						)
							this.g.setResource(
								{
									resource: q.edit.uri,
									name: (0, a.localize)(
										4515,
										null,
										this.i.getUriLabel(q.edit.uri, { relative: !0 }),
										this.i.getUriLabel(q.edit.newUri, { relative: !0 }),
									),
								},
								{ fileDecorations: { colors: !0, badges: !1 } },
							),
								(this.h.innerText = (0, a.localize)(4516, null));
						else {
							const G = {
								matches: (0, i.$3k)(V),
								fileKind: u.FileKind.FILE,
								fileDecorations: { colors: !0, badges: !1 },
								extraClasses: [],
							};
							q.edit.type & r.BulkFileOperationType.Create
								? (this.h.innerText = (0, a.localize)(4517, null))
								: q.edit.type & r.BulkFileOperationType.Delete
									? ((this.h.innerText = (0, a.localize)(4518, null)),
										G.extraClasses.push("delete"))
									: (this.h.innerText = ""),
								this.g.setFile(q.edit.uri, G);
						}
					}
				};
				O = Ne([j(2, h.$3N)], O);
				let B = class {
					static {
						v = this;
					}
					static {
						this.id = "FileElementRenderer";
					}
					constructor(q, V) {
						(this.c = q), (this.d = V), (this.templateId = v.id);
					}
					renderTemplate(q) {
						return new O(q, this.c, this.d);
					}
					renderElement(q, V, G) {
						G.set(q.element, q.filterData);
					}
					disposeTemplate(q) {
						q.dispose();
					}
				};
				(e.$pNc = B), (e.$pNc = B = v = Ne([j(1, h.$3N)], B));
				let U = class {
					constructor(q, V) {
						(this.i = V),
							(this.c = new d.$Zc()),
							(this.d = new d.$Zc()),
							q.classList.add("textedit"),
							(this.f = document.createElement("input")),
							(this.f.className = "edit-checkbox"),
							(this.f.type = "checkbox"),
							this.f.setAttribute("role", "checkbox"),
							q.appendChild(this.f),
							(this.g = document.createElement("div")),
							q.appendChild(this.g),
							(this.h = this.c.add(new w.$Wob(q)));
					}
					dispose() {
						this.d.dispose(), this.c.dispose();
					}
					set(q) {
						this.d.clear(),
							this.d.add(
								C.$0fb(this.f, "change", (Y) => {
									q.setChecked(this.f.checked), Y.preventDefault();
								}),
							),
							q.parent.isChecked()
								? ((this.f.checked = q.isChecked()),
									(this.f.disabled = q.isDisabled()))
								: ((this.f.checked = q.isChecked()),
									(this.f.disabled = q.isDisabled()));
						let V = "";
						(V += q.prefix),
							(V += q.selecting),
							(V += q.inserting),
							(V += q.suffix);
						const G = {
								start: q.prefix.length,
								end: q.prefix.length + q.selecting.length,
								extraClasses: ["remove"],
							},
							K = {
								start: G.end,
								end: G.end + q.inserting.length,
								extraClasses: ["insert"],
							};
						let J;
						const { metadata: W } = q.edit.textEdit;
						W && W.description
							? (J = (0, a.localize)(4519, null, W.label, W.description))
							: W && (J = W.label);
						const X = W?.iconPath;
						if (!X) this.g.style.display = "none";
						else if (
							((this.g.style.display = "block"),
							this.g.style.setProperty("--background-dark", null),
							this.g.style.setProperty("--background-light", null),
							p.ThemeIcon.isThemeIcon(X))
						) {
							const Y = p.ThemeIcon.asClassName(X);
							(this.g.className = Y ? `theme-icon ${Y}` : ""),
								(this.g.style.color = X.color
									? (this.i.getColorTheme().getColor(X.color.id)?.toString() ??
										"")
									: "");
						} else
							f.URI.isUri(X)
								? ((this.g.className = "uri-icon"),
									this.g.style.setProperty("--background-dark", C.$vhb(X)),
									this.g.style.setProperty("--background-light", C.$vhb(X)))
								: ((this.g.className = "uri-icon"),
									this.g.style.setProperty("--background-dark", C.$vhb(X.dark)),
									this.g.style.setProperty(
										"--background-light",
										C.$vhb(X.light),
									));
						this.h.set(V, [G, K], J, !0), (this.g.title = J || "");
					}
				};
				U = Ne([j(1, g.$iP)], U);
				let z = class {
					static {
						S = this;
					}
					static {
						this.id = "TextEditElementRenderer";
					}
					constructor(q) {
						(this.c = q), (this.templateId = S.id);
					}
					renderTemplate(q) {
						return new U(q, this.c);
					}
					renderElement({ element: q }, V, G) {
						G.set(q);
					}
					disposeTemplate(q) {}
				};
				(e.$qNc = z), (e.$qNc = z = S = Ne([j(0, g.$iP)], z));
				class F {
					getHeight() {
						return 23;
					}
					getTemplateId(q) {
						return q instanceof T ? B.id : q instanceof P ? z.id : R.id;
					}
				}
				e.$rNc = F;
				class x {
					getKeyboardNavigationLabel(q) {
						if (q instanceof T) return (0, n.$kh)(q.edit.uri);
						if (q instanceof I) return q.category.metadata.label;
					}
				}
				e.$sNc = x;
			},
		)
