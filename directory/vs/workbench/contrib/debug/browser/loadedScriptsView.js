import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/common/path.js';
import '../../../browser/parts/views/viewPane.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/contextview/browser/contextView.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../../platform/configuration/common/configuration.js';
import './baseDebugView.js';
import '../common/debug.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../base/common/labels.js';
import '../../../../base/common/platform.js';
import '../../../../base/common/uri.js';
import '../../../../base/common/strings.js';
import '../../../../base/common/async.js';
import '../../../browser/labels.js';
import '../../../../platform/files/common/files.js';
import '../../../../base/browser/ui/tree/tree.js';
import '../../../services/editor/common/editorService.js';
import '../../../../platform/list/browser/listService.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/filters.js';
import '../common/debugContentProvider.js';
import '../../../../platform/label/common/label.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../base/common/codicons.js';
import '../../../common/views.js';
import '../../../../platform/opener/common/opener.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../services/path/common/pathService.js';
import '../../../../base/browser/ui/tree/abstractTree.js';
import '../../../../platform/hover/browser/hover.js';
define(
			de[3823],
			he([
				1, 0, 4, 54, 146, 5, 49, 39, 10, 629, 112, 25, 8, 222, 12, 9, 37, 15,
				233, 22, 264, 18, 93, 3, 132, 1800, 73, 11, 14, 60, 41, 35, 32, 165,
				411, 72,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*nls*/,
				i /*path*/,
				w /*viewPane*/,
				E /*instantiation*/,
				C /*contextView*/,
				d /*keybinding*/,
				m /*configuration*/,
				r /*baseDebugView*/,
				u /*debug*/,
				a /*workspace*/,
				h /*contextkey*/,
				c /*labels*/,
				n /*platform*/,
				g /*uri*/,
				p /*strings*/,
				o /*async*/,
				f /*labels*/,
				b /*files*/,
				s /*tree*/,
				l /*editorService*/,
				y /*listService*/,
				$ /*lifecycle*/,
				v /*filters*/,
				S /*debugContentProvider*/,
				I /*label*/,
				T /*actions*/,
				P /*codicons*/,
				k /*views*/,
				L /*opener*/,
				D /*themeService*/,
				M /*telemetry*/,
				N /*pathService*/,
				A /*abstractTree*/,
				R /*hover*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$0Qc = void 0),
					(t = mt(t));
				const O = !0,
					B = /^[a-zA-Z][a-zA-Z0-9\+\-\.]+:/;
				class U {
					constructor(X, Y, ie = !1) {
						(this.h = X),
							(this.j = Y),
							(this.isIncompressible = ie),
							(this.d = new Map()),
							(this.c = !1);
					}
					updateLabel(X) {
						this.j = X;
					}
					isLeaf() {
						return this.d.size === 0;
					}
					getSession() {
						if (this.h) return this.h.getSession();
					}
					setSource(X, Y) {
						if (((this.g = Y), this.d.clear(), Y.raw && Y.raw.sources)) {
							for (const ie of Y.raw.sources)
								if (ie.name && ie.path) {
									const ne = new U(this, ie.name);
									this.d.set(ie.path, ne);
									const ee = X.getSource(ie);
									ne.setSource(X, ee);
								}
						}
					}
					createIfNeeded(X, Y) {
						let ie = this.d.get(X);
						return ie || ((ie = Y(this, X)), this.d.set(X, ie)), ie;
					}
					getChild(X) {
						return this.d.get(X);
					}
					remove(X) {
						this.d.delete(X);
					}
					removeFromParent() {
						this.h &&
							(this.h.remove(this.j),
							this.h.d.size === 0 && this.h.removeFromParent());
					}
					getTemplateId() {
						return "id";
					}
					getId() {
						const X = this.getParent();
						return X
							? `${X.getId()}/${this.getInternalId()}`
							: this.getInternalId();
					}
					getInternalId() {
						return this.j;
					}
					getParent() {
						if (this.h) return this.h.isSkipped() ? this.h.getParent() : this.h;
					}
					isSkipped() {
						return this.h ? !!this.h.m() : !0;
					}
					hasChildren() {
						const X = this.m();
						return X ? X.hasChildren() : this.d.size > 0;
					}
					getChildren() {
						const X = this.m();
						if (X) return X.getChildren();
						const Y = [];
						for (const ie of this.d.values()) Y.push(ie);
						return Y.sort((ie, ne) => this.k(ie, ne));
					}
					getLabel(X = !0) {
						const Y = this.m();
						if (Y) {
							const ie = this instanceof z && X ? " \u2022 " : i.$lc.sep;
							return `${this.j}${ie}${Y.getLabel()}`;
						}
						return this.j;
					}
					getHoverLabel() {
						if (this.g && this.h && this.h.g)
							return this.g.raw.path || this.g.raw.name;
						const X = this.getLabel(!1),
							Y = this.getParent();
						if (Y) {
							const ie = Y.getHoverLabel();
							if (ie) return `${ie}/${X}`;
						}
						return X;
					}
					getSource() {
						const X = this.m();
						return X ? X.getSource() : this.g;
					}
					k(X, Y) {
						return X.j && Y.j ? X.j.localeCompare(Y.j) : 0;
					}
					m() {
						if (!this.g && !this.c && this.n()) {
							if (this.d.size === 1) return this.d.values().next().value;
							this.d.size > 1 && (this.c = !0);
						}
					}
					n() {
						return O
							? this instanceof F
							: !(this instanceof z) && !(this instanceof x);
					}
				}
				class z extends U {
					constructor(X, Y) {
						super(X, Y.name, !0), (this.folder = Y);
					}
				}
				class F extends U {
					constructor(X, Y, ie) {
						super(void 0, "Root"), (this.o = X), (this.p = Y), (this.q = ie);
					}
					add(X) {
						return this.createIfNeeded(
							X.getId(),
							() => new x(this.q, this, X, this.o, this.p),
						);
					}
					find(X) {
						return this.getChild(X.getId());
					}
				}
				class x extends U {
					static {
						this.o = /^(https?:\/\/[^/]+)(\/.*)$/;
					}
					constructor(X, Y, ie, ne, ee) {
						super(Y, ie.getLabel(), !0),
							(this.t = ne),
							(this.u = ee),
							(this.q = new Map()),
							(this.r = X),
							(this.p = ie);
					}
					getInternalId() {
						return this.p.getId();
					}
					getSession() {
						return this.p;
					}
					getHoverLabel() {}
					hasChildren() {
						return !0;
					}
					k(X, Y) {
						const ie = this.w(X),
							ne = this.w(Y);
						return ie !== ne ? ie - ne : super.k(X, Y);
					}
					w(X) {
						if (X instanceof z) return X.folder.index;
						const Y = X.getLabel();
						return Y && /^<.+>$/.test(Y) ? 1e3 : 999;
					}
					async addPath(X) {
						let Y,
							ie,
							ne = X.raw.path;
						if (!ne) return;
						this.r && B.test(ne) && (ne = this.r.getUriLabel(g.URI.parse(ne)));
						const ee = x.o.exec(ne);
						if (ee && ee.length === 3) (ie = ee[1]), (ne = decodeURI(ee[2]));
						else if ((0, i.$nc)(ne)) {
							const te = g.URI.file(ne);
							(Y = this.u ? this.u.getWorkspaceFolder(te) : null),
								Y
									? ((ne = (0, i.$mc)(
											(0, p.$tf)(
												te.path.substring(Y.uri.path.length),
												i.$lc.sep,
											),
										)),
										this.u.getWorkspace().folders.length > 1
											? (ne = i.$lc.sep + ne)
											: (Y = null))
									: ((ne = (0, i.$mc)(ne)),
										n.$l
											? (ne = (0, c.$xO)(ne))
											: (ne = (0, c.$yO)(
													ne,
													(await this.t.userHome()).fsPath,
												)));
						}
						let _ = this;
						ne.split(/[\/\\]/).forEach((te, Q) => {
							if (Q === 0 && Y) {
								const Z = Y;
								_ = _.createIfNeeded(Y.name, (se) => new z(se, Z));
							} else
								Q === 0 && ie
									? (_ = _.createIfNeeded(ie, (Z) => new U(Z, ie)))
									: (_ = _.createIfNeeded(te, (Z) => new U(Z, te)));
						}),
							_.setSource(this.p, X),
							X.raw.path && this.q.set(X.raw.path, _);
					}
					removePath(X) {
						if (X.raw.path) {
							const Y = this.q.get(X.raw.path);
							if (Y) return Y.removeFromParent(), !0;
						}
						return !1;
					}
				}
				function H(W, X) {
					const Y = W.getChildren(),
						ie = X ? !X.expanded.has(W.getId()) : !(W instanceof x);
					return {
						element: W,
						collapsed: ie,
						collapsible: W.hasChildren(),
						children: Y.map((ne) => H(ne, X)),
					};
				}
				let q = class extends w.$TMb {
					constructor(
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
					) {
						super(X, ie, Y, _, Q, ee, ne, oe, ae, pe, $e),
							(this.t = te),
							(this.L = Z),
							(this.ab = se),
							(this.sb = re),
							(this.cc = le),
							(this.n = !1),
							(this.g = u.$p5.bindTo(Q));
					}
					W(X) {
						super.W(X),
							this.element.classList.add("debug-pane"),
							X.classList.add("debug-loaded-scripts"),
							X.classList.add("show-file-icons"),
							(this.c = (0, r.$cIc)(X)),
							(this.r = new J());
						const Y = new F(this.cc, this.L, this.sb);
						(this.j = this.Db.createInstance(f.$uPb, {
							onDidChangeVisibility: this.onDidChangeBodyVisibility,
						})),
							this.D(this.j),
							(this.h = this.Db.createInstance(
								y.$DMb,
								"LoadedScriptsView",
								this.c,
								new V(),
								[new G(this.j)],
								{
									compressionEnabled: O,
									collapseByDefault: !0,
									hideTwistiesOfChildlessElements: !0,
									identityProvider: { getId: (Q) => Q.getId() },
									keyboardNavigationLabelProvider: {
										getKeyboardNavigationLabel: (Q) => Q.getLabel(),
										getCompressedNodeKeyboardNavigationLabel: (Q) =>
											Q.map((Z) => Z.getLabel()).join("/"),
									},
									filter: this.r,
									accessibilityProvider: new K(),
									overrideStyles: this.Zb().listOverrideStyles,
								},
							));
						const ie = (Q) => this.h.setChildren(null, H(Y, Q).children);
						ie(),
							(this.m = new o.$Yh(() => {
								(this.n = !1), this.h && ie();
							}, 300)),
							this.D(this.m),
							this.D(
								this.h.onDidOpen((Q) => {
									if (Q.element instanceof U) {
										const Z = Q.element.getSource();
										if (Z && Z.available) {
											const se = {
												startLineNumber: 0,
												startColumn: 0,
												endLineNumber: 0,
												endColumn: 0,
											};
											Z.openInEditor(
												this.t,
												se,
												Q.editorOptions.preserveFocus,
												Q.sideBySide,
												Q.editorOptions.pinned,
											);
										}
									}
								}),
							),
							this.D(
								this.h.onDidChangeFocus(() => {
									this.h.getFocus() instanceof x
										? this.g.set("session")
										: this.g.reset();
								}),
							);
						const ne = () => {
								this.isBodyVisible() ? this.m.schedule() : (this.n = !0);
							},
							ee = async (Q) => {
								if (Q.capabilities.supportsLoadedSourcesRequest) {
									const Z = Y.add(Q),
										se = await Q.getLoadedSources();
									for (const re of se) await Z.addPath(re);
									ne();
								}
							},
							_ = (Q) => {
								this.D(
									Q.onDidChangeName(async () => {
										const Z = Y.find(Q);
										Z && (Z.updateLabel(Q.getLabel()), ne());
									}),
								),
									this.D(
										Q.onDidLoadedSource(async (Z) => {
											let se;
											switch (Z.reason) {
												case "new":
												case "changed":
													(se = Y.add(Q)),
														await se.addPath(Z.source),
														ne(),
														Z.reason === "changed" &&
															S.$9Qc.refreshDebugContent(Z.source.uri);
													break;
												case "removed":
													(se = Y.find(Q)),
														se && se.removePath(Z.source) && ne();
													break;
												default:
													this.r.setFilter(Z.source.name), this.h.refilter();
													break;
											}
										}),
									);
							};
						this.D(this.ab.onDidNewSession(_)),
							this.ab.getModel().getSessions().forEach(_),
							this.D(
								this.ab.onDidEndSession(({ session: Q }) => {
									Y.remove(Q.getId()), this.m.schedule();
								}),
							),
							this.m.schedule(0),
							this.D(
								this.onDidChangeBodyVisibility((Q) => {
									Q && this.n && this.m.schedule();
								}),
							);
						let te;
						this.D(
							this.h.onDidChangeFindPattern((Q) => {
								if (this.h.findMode !== A.TreeFindMode.Highlight)
									if (!te && Q) {
										const Z = new Set(),
											se = (re) => {
												re.element &&
													!re.collapsed &&
													Z.add(re.element.getId());
												for (const le of re.children) se(le);
											};
										se(this.h.getNode()),
											(te = { expanded: Z }),
											this.h.expandAll();
									} else
										!Q && te && (this.h.setFocus([]), ie(te), (te = void 0));
							}),
						),
							this.ab
								.getModel()
								.getSessions()
								.forEach((Q) => ee(Q));
					}
					X(X, Y) {
						super.X(X, Y), this.h.layout(X, Y);
					}
					collapseAll() {
						this.h.collapseAll();
					}
					dispose() {
						(0, $.$Vc)(this.h), (0, $.$Vc)(this.j), super.dispose();
					}
				};
				(e.$0Qc = q),
					(e.$0Qc = q =
						Ne(
							[
								j(1, C.$Xxb),
								j(2, d.$uZ),
								j(3, E.$Li),
								j(4, k.$K1),
								j(5, m.$gj),
								j(6, l.$IY),
								j(7, h.$6j),
								j(8, a.$Vi),
								j(9, u.$75),
								j(10, I.$3N),
								j(11, N.$I8),
								j(12, L.$7rb),
								j(13, D.$iP),
								j(14, M.$km),
								j(15, R.$Uyb),
							],
							q,
						));
				class V {
					getHeight(X) {
						return 22;
					}
					getTemplateId(X) {
						return G.ID;
					}
				}
				class G {
					static {
						this.ID = "lsrenderer";
					}
					constructor(X) {
						this.c = X;
					}
					get templateId() {
						return G.ID;
					}
					renderTemplate(X) {
						return { label: this.c.create(X, { supportHighlights: !0 }) };
					}
					renderElement(X, Y, ie) {
						const ne = X.element,
							ee = ne.getLabel();
						this.d(ne, ee, ie, X.filterData);
					}
					renderCompressedElements(X, Y, ie, ne) {
						const ee = X.element.elements[X.element.elements.length - 1],
							_ = X.element.elements.map((te) => te.getLabel());
						this.d(ee, _, ie, X.filterData);
					}
					d(X, Y, ie, ne) {
						const ee = { name: Y },
							_ = { title: X.getHoverLabel() };
						if (X instanceof z) _.fileKind = b.FileKind.ROOT_FOLDER;
						else if (X instanceof x)
							(_.title = t.localize(5681, null)), (_.hideIcon = !0);
						else if (X instanceof U) {
							const te = X.getSource();
							te && te.uri
								? ((ee.resource = te.uri), (_.fileKind = b.FileKind.FILE))
								: (_.fileKind = b.FileKind.FOLDER);
						}
						(_.matches = (0, v.$3k)(ne)), ie.label.setResource(ee, _);
					}
					disposeTemplate(X) {
						X.label.dispose();
					}
				}
				class K {
					getWidgetAriaLabel() {
						return t.localize(5682, null);
					}
					getAriaLabel(X) {
						return X instanceof z
							? t.localize(5683, null, X.getLabel())
							: X instanceof x
								? t.localize(5684, null, X.getLabel())
								: X.hasChildren()
									? t.localize(5685, null, X.getLabel())
									: t.localize(5686, null, X.getLabel());
					}
				}
				class J {
					setFilter(X) {
						this.c = X;
					}
					filter(X, Y) {
						return this.c
							? X.isLeaf()
								? X.getLabel().indexOf(this.c) >= 0
									? s.TreeVisibility.Visible
									: s.TreeVisibility.Hidden
								: s.TreeVisibility.Recurse
							: s.TreeVisibility.Visible;
					}
				}
				(0, T.$4X)(
					class extends w.$WMb {
						constructor() {
							super({
								id: "loadedScripts.collapse",
								viewId: u.$U4,
								title: t.localize(5687, null),
								f1: !1,
								icon: P.$ak.collapseAll,
								menu: {
									id: T.$XX.ViewTitle,
									order: 30,
									group: "navigation",
									when: h.$Kj.equals("view", u.$U4),
								},
							});
						}
						runInView(X, Y) {
							Y.collapseAll();
						}
					},
				);
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	