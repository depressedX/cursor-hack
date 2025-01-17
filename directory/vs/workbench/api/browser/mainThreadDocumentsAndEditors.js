import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/event.js';
import '../../../base/common/lifecycle.js';
import '../../../editor/browser/editorBrowser.js';
import '../../../editor/browser/services/codeEditorService.js';
import '../../../editor/common/model.js';
import '../../../editor/common/services/model.js';
import '../../../editor/common/services/resolverService.js';
import '../../../platform/files/common/files.js';
import '../../services/extensions/common/extHostCustomers.js';
import './mainThreadDocuments.js';
import './mainThreadEditor.js';
import './mainThreadEditors.js';
import '../common/extHost.protocol.js';
import '../../browser/parts/editor/textEditor.js';
import '../../services/editor/common/editorGroupColumn.js';
import '../../services/editor/common/editorService.js';
import '../../services/editor/common/editorGroupsService.js';
import '../../services/textfile/common/textfiles.js';
import '../../services/environment/common/environmentService.js';
import '../../services/workingCopy/common/workingCopyFileService.js';
import '../../../platform/uriIdentity/common/uriIdentity.js';
import '../../../platform/clipboard/common/clipboardService.js';
import '../../services/path/common/pathService.js';
import '../../../base/common/collections.js';
import '../../services/panecomposite/browser/panecomposite.js';
import '../../common/views.js';
import '../../../platform/configuration/common/configuration.js';
define(
			de[3898],
			he([
				1, 0, 6, 3, 56, 65, 64, 67, 42, 22, 101, 1342, 1820, 1913, 88, 718, 446,
				18, 66, 85, 78, 336, 68, 121, 165, 456, 142, 60, 10,
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
					(e.$inc = void 0);
				class k {
					constructor(O) {
						(this.editor = O), (this.id = `${O.getId()},${O.getModel().id}`);
					}
				}
				class L {
					constructor(O, B, U, z, F, x) {
						(this.removedDocuments = O),
							(this.addedDocuments = B),
							(this.removedEditors = U),
							(this.addedEditors = z),
							(this.oldActiveEditor = F),
							(this.newActiveEditor = x),
							(this.isEmpty =
								this.removedDocuments.length === 0 &&
								this.addedDocuments.length === 0 &&
								this.removedEditors.length === 0 &&
								this.addedEditors.length === 0 &&
								F === x);
					}
					toString() {
						let O = `DocumentAndEditorStateDelta
`;
						return (
							(O += `	Removed Documents: [${this.removedDocuments.map((B) => B.uri.toString(!0)).join(", ")}]
`),
							(O += `	Added Documents: [${this.addedDocuments.map((B) => B.uri.toString(!0)).join(", ")}]
`),
							(O += `	Removed Editors: [${this.removedEditors.map((B) => B.id).join(", ")}]
`),
							(O += `	Added Editors: [${this.addedEditors.map((B) => B.id).join(", ")}]
`),
							(O += `	New Active Editor: ${this.newActiveEditor}
`),
							O
						);
					}
				}
				class D {
					static compute(O, B) {
						if (!O)
							return new L(
								[],
								[...B.documents.values()],
								[],
								[...B.textEditors.values()],
								void 0,
								B.activeEditor,
							);
						const U = (0, S.$f)(O.documents, B.documents),
							z = (0, S.$g)(O.textEditors, B.textEditors),
							F = O.activeEditor !== B.activeEditor ? O.activeEditor : void 0,
							x = O.activeEditor !== B.activeEditor ? B.activeEditor : void 0;
						return new L(U.removed, U.added, z.removed, z.added, F, x);
					}
					constructor(O, B, U) {
						(this.documents = O),
							(this.textEditors = B),
							(this.activeEditor = U);
					}
				}
				var M;
				(function (R) {
					(R[(R.Editor = 0)] = "Editor"), (R[(R.Panel = 1)] = "Panel");
				})(M || (M = {}));
				let N = class {
					constructor(O, B, U, z, F) {
						(this.g = O),
							(this.h = B),
							(this.i = U),
							(this.j = z),
							(this.k = F),
							(this.a = new i.$Zc()),
							(this.b = new i.$0c()),
							(this.f = M.Editor),
							this.h.onModelAdded(this.o, this, this.a),
							this.h.onModelRemoved((x) => this.p(), this, this.a),
							this.j.onDidActiveEditorChange((x) => this.p(), this, this.a),
							this.i.onCodeEditorAdd(this.l, this, this.a),
							this.i.onCodeEditorRemove(this.n, this, this.a),
							this.i.listCodeEditors().forEach(this.l, this),
							t.Event.filter(
								this.k.onDidPaneCompositeOpen,
								(x) =>
									x.viewContainerLocation === T.ViewContainerLocation.Panel,
							)((x) => (this.f = M.Panel), void 0, this.a),
							t.Event.filter(
								this.k.onDidPaneCompositeClose,
								(x) =>
									x.viewContainerLocation === T.ViewContainerLocation.Panel,
							)((x) => (this.f = M.Editor), void 0, this.a),
							this.j.onDidVisibleEditorsChange(
								(x) => (this.f = M.Editor),
								void 0,
								this.a,
							),
							this.p();
					}
					dispose() {
						this.a.dispose(), this.b.dispose();
					}
					l(O) {
						this.b.set(
							O.getId(),
							(0, i.$Xc)(
								O.onDidChangeModel(() => this.p()),
								O.onDidFocusEditorText(() => this.p()),
								O.onDidFocusEditorWidget(() => this.p(O)),
							),
						),
							this.p();
					}
					n(O) {
						const B = O.getId();
						this.b.has(B) && (this.b.deleteAndDispose(B), this.p());
					}
					o(O) {
						if ((0, C.$TN)(O)) {
							if (!this.c) {
								this.p();
								return;
							}
							(this.c = new D(
								this.c.documents.add(O),
								this.c.textEditors,
								this.c.activeEditor,
							)),
								this.g(new L([], [O], [], [], void 0, void 0));
						}
					}
					p(O) {
						const B = new Set();
						for (const H of this.h.getModels()) (0, C.$TN)(H) && B.add(H);
						const U = new Map();
						let z = null;
						for (const H of this.i.listCodeEditors()) {
							if (H.isSimpleWidget) continue;
							const q = H.getModel();
							if (
								H.hasModel() &&
								q &&
								(0, C.$TN)(q) &&
								!q.isDisposed() &&
								this.h.getModel(q.uri)
							) {
								const V = new k(H);
								U.set(V.id, V),
									(H.hasTextFocus() || (O === H && H.hasWidgetFocus())) &&
										(z = V.id);
							}
						}
						if (!z) {
							let H;
							if (
								(this.f === M.Editor
									? (H = this.r() || this.q())
									: (H = this.q() || this.r()),
								H)
							)
								for (const q of U.values()) H === q.editor && (z = q.id);
						}
						const F = new D(B, U, z),
							x = D.compute(this.c, F);
						x.isEmpty || ((this.c = F), this.g(x));
					}
					q() {
						const O = this.k.getActivePaneComposite(
							T.ViewContainerLocation.Panel,
						);
						if (O instanceof g.$BVb) {
							const B = O.getControl();
							if ((0, w.$0sb)(B)) return B;
						}
					}
					r() {
						let O = this.j.activeTextEditorControl;
						return (0, w.$$sb)(O) && (O = O.getModifiedEditor()), O;
					}
				};
				N = Ne([j(1, d.$QO), j(2, E.$dtb), j(3, o.$IY), j(4, I.$6Sb)], N);
				let A = class {
					constructor(O, B, U, z, F, x, H, q, V, G, K, J, W, X, Y) {
						(this.h = B),
							(this.i = U),
							(this.j = z),
							(this.k = q),
							(this.l = W),
							(this.a = new i.$Zc()),
							(this.g = new Map()),
							(this.b = O.getProxy(n.$mbb.ExtHostDocumentsAndEditors)),
							(this.c = this.a.add(
								new a.$4mc(O, this.h, this.i, x, H, G, J, K, X),
							)),
							O.set(n.$lbb.MainThreadDocuments, this.c),
							(this.f = this.a.add(new c.$hnc(this, O, F, this.j, this.k, Y))),
							O.set(n.$lbb.MainThreadTextEditors, this.f),
							this.a.add(new N((ie) => this.n(ie), B, F, this.j, V));
					}
					dispose() {
						this.a.dispose();
					}
					n(O) {
						const B = [],
							U = [],
							z = O.removedDocuments.map((H) => H.uri);
						for (const H of O.addedEditors) {
							const q = new h.$6mc(
								H.id,
								H.editor.getModel(),
								H.editor,
								{ onGainedFocus() {}, onLostFocus() {} },
								this.c,
								this.h,
								this.l,
							);
							this.g.set(H.id, q), U.push(q);
						}
						for (const { id: H } of O.removedEditors) {
							const q = this.g.get(H);
							q && (q.dispose(), this.g.delete(H), B.push(H));
						}
						const F = Object.create(null);
						let x = !0;
						O.newActiveEditor !== void 0 &&
							((x = !1), (F.newActiveEditor = O.newActiveEditor)),
							z.length > 0 && ((x = !1), (F.removedDocuments = z)),
							B.length > 0 && ((x = !1), (F.removedEditors = B)),
							O.addedDocuments.length > 0 &&
								((x = !1),
								(F.addedDocuments = O.addedDocuments.map((H) => this.o(H)))),
							O.addedEditors.length > 0 &&
								((x = !1), (F.addedEditors = U.map((H) => this.p(H)))),
							x ||
								(this.b.$acceptDocumentsAndEditorsDelta(F),
								z.forEach(this.c.handleModelRemoved, this.c),
								O.addedDocuments.forEach(this.c.handleModelAdded, this.c),
								B.forEach(this.f.handleTextEditorRemoved, this.f),
								U.forEach(this.f.handleTextEditorAdded, this.f));
					}
					o(O) {
						return {
							uri: O.uri,
							versionId: O.getVersionId(),
							lines: O.getLinesContent(),
							EOL: O.getEOL(),
							languageId: O.getLanguageId(),
							isDirty: this.i.isDirty(O.uri),
						};
					}
					p(O) {
						const B = O.getProperties();
						return {
							id: O.getId(),
							documentUri: O.getModel().uri,
							options: B.options,
							selections: B.selections,
							visibleRanges: B.visibleRanges,
							editorPosition: this.q(O),
						};
					}
					q(O) {
						for (const B of this.j.visibleEditorPanes)
							if (O.matches(B)) return (0, p.$b8)(this.k, B.group);
					}
					findTextEditorIdFor(O) {
						for (const [B, U] of this.g) if (U.matches(O)) return B;
					}
					getIdOfCodeEditor(O) {
						for (const [B, U] of this.g) if (U.getCodeEditor() === O) return B;
					}
					getEditor(O) {
						return this.g.get(O);
					}
				};
				(e.$inc = A),
					(e.$inc = A =
						Ne(
							[
								u.$umc,
								j(1, d.$QO),
								j(2, b.$kZ),
								j(3, o.$IY),
								j(4, E.$dtb),
								j(5, r.$ll),
								j(6, m.$MO),
								j(7, f.$EY),
								j(8, I.$6Sb),
								j(9, s.$r8),
								j(10, l.$iZ),
								j(11, y.$Vl),
								j(12, $.$Vxb),
								j(13, v.$I8),
								j(14, P.$gj),
							],
							A,
						));
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	